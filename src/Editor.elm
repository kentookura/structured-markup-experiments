module Editor exposing (..)

import Browser
import Browser.Navigation as Nav
import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events as Events exposing (..)
import Http
import Json.Decode as Decode exposing (Decoder, andThen)
import Json.Decode.Pipeline as Pipeline
import Json.Encode as Encode exposing (Value)
import Json.Print
import Url exposing (Url)



--- TYPES


type Msg
    = LinkClicked Browser.UrlRequest
    | UrlChanged Url.Url
    | DocChange ( Doc CustomMark, Selection )


type alias State a =
    { doc : Doc a
    , transactions : List ( Int, Transaction a )
    , nextTransactionId : Int
    }


type Transaction a
    = AddMark Selection (Mark a)


type alias Selection =
    { from : Int
    , to : Int
    }


type Doc a
    = Doc (List (Content a))


type Content a
    = Heading Int (List (InlineContent a))
    | Paragraph (List (InlineContent a))
    | BulletList (List (ListItem a))
    | MathDisplay (List (InlineContent a))
    | MathInline (List (InlineContent a))
    | Empty


type InlineContent a
    = InlineContent (List (Mark a)) String


type CustomMark
    = Highlight String


type Mark a
    = Bold
    | Italics
    | Link { href : String, title : Maybe String }
    | Custom a


type ListItem a
    = ListItem (List (Content a))


empty : Doc a
empty =
    Doc []



--- ENCODERS


type alias DocEncoder a =
    a -> Encode.Value


encodeWith : DocEncoder a -> Doc a -> Encode.Value
encodeWith customEncoder (Doc content) =
    Encode.object
        [ ( "type", Encode.string "doc" )
        , ( "content", Encode.list (encodeContent customEncoder) content )
        ]


encodeContent : DocEncoder a -> Content a -> Encode.Value
encodeContent customEncoder content =
    case content of
        Heading level inlines ->
            Encode.object
                [ ( "type", Encode.string "heading" )
                , ( "attrs", Encode.object [ ( "level", Encode.int level ) ] )
                , ( "content", Encode.list (encodeInline customEncoder) inlines )
                ]

        Paragraph inlines ->
            Encode.object
                [ ( "type", Encode.string "paragraph" )
                , ( "content", Encode.list (encodeInline customEncoder) inlines )
                ]

        BulletList listItems ->
            Encode.object
                [ ( "type", Encode.string "bullet_list" )
                , ( "content", Encode.list (encodeListItem customEncoder) listItems )
                ]

        MathDisplay inlines ->
            Encode.object [ ( "type", Encode.string "math_display" ), ( "content", Encode.list (encodeInline customEncoder) inlines ) ]

        MathInline inlines ->
            Encode.object [ ( "type", Encode.string "math_inline" ), ( "content", Encode.list (encodeInline customEncoder) inlines ) ]

        Empty ->
            Encode.object []


encodeInline : DocEncoder a -> InlineContent a -> Encode.Value
encodeInline customEncoder (InlineContent marks text) =
    Encode.object <|
        List.concat
            [ [ ( "type", Encode.string "text" ) ]
            , case marks of
                [] ->
                    []

                _ ->
                    [ ( "marks", Encode.list (encodeMark customEncoder) marks ) ]
            , [ ( "text", Encode.string text ) ]
            ]


encodeListItem : DocEncoder a -> ListItem a -> Encode.Value
encodeListItem customEncoder (ListItem contents) =
    Encode.object
        [ ( "type", Encode.string "list_item" )
        , ( "content", Encode.list (encodeContent customEncoder) contents )
        ]


encodeMark : DocEncoder a -> Mark a -> Encode.Value
encodeMark customEncoder mark =
    case mark of
        Bold ->
            Encode.object [ ( "type", Encode.string "strong" ) ]

        Italics ->
            Encode.object [ ( "type", Encode.string "em" ) ]

        Link { href, title } ->
            Encode.object
                [ ( "type", Encode.string "link" )
                , ( "attrs"
                  , Encode.object
                        [ ( "href", Encode.string href )
                        , ( "title"
                          , case title of
                                Just value ->
                                    Encode.string value

                                Nothing ->
                                    Encode.null
                          )
                        ]
                  )
                ]

        Custom other ->
            customEncoder other



--- DECODE


selectionDecoder : Decoder Selection
selectionDecoder =
    Decode.map2 Selection
        (Decode.field "from" Decode.int)
        (Decode.field "to" Decode.int)


mathMarkDecoder : String -> Decode.Decoder CustomMark
mathMarkDecoder name =
    case name of
        "highlight" ->
            Decode.map Highlight
                (Decode.at [ "attrs", "id" ]
                    Decode.string
                )

        other ->
            Decode.fail ("I've found a mark I don't know: " ++ other)


mathMarkEncoder : CustomMark -> Encode.Value
mathMarkEncoder mark =
    case mark of
        Highlight str ->
            Encode.object
                [ ( "type", Encode.string "highlight" )
                , ( "attrs"
                  , Encode.object
                        [ ( "id", Encode.string str )
                        ]
                  )
                ]


contentDecoder : (String -> Decoder a) -> Decoder (Content a)
contentDecoder customDecoder =
    Decode.field "type" Decode.string
        |> Decode.andThen
            (\type_ ->
                case type_ of
                    "heading" ->
                        Decode.map (\( level, content ) -> Heading level content)
                            (headingDecoder customDecoder)

                    "paragraph" ->
                        Decode.map Paragraph
                            (Decode.field "content" (Decode.list (inlineContentDecoder customDecoder)))

                    "bullet_list" ->
                        Decode.map BulletList
                            (Decode.field "content" (Decode.list (listItemDecoder customDecoder)))

                    "math_display" ->
                        Decode.map MathDisplay (Decode.field "content" (Decode.list (inlineContentDecoder customDecoder)))

                    "math_inline" ->
                        Decode.map MathInline (Decode.field "content" (Decode.list (inlineContentDecoder customDecoder)))

                    other ->
                        Decode.fail ("I've found a type of content I don't recognize: " ++ other)
            )


headingDecoder : (String -> Decoder a) -> Decoder ( Int, List (InlineContent a) )
headingDecoder customDecoder =
    Decode.map2 (\level contents -> ( level, contents ))
        (Decode.at [ "attrs", "level" ] Decode.int)
        (Decode.field "content" (Decode.list (inlineContentDecoder customDecoder)))


listItemDecoder : (String -> Decoder a) -> Decoder (ListItem a)
listItemDecoder customDecoder =
    Decode.map ListItem
        (Decode.field "type" Decode.string
            |> Decode.andThen
                (\type_ ->
                    case type_ of
                        "list_item" ->
                            Decode.field "content" (Decode.list (contentDecoder customDecoder))

                        other ->
                            Decode.fail ("I expected to find all list items, but instead I found " ++ other)
                )
        )


inlineContentDecoder : (String -> Decoder a) -> Decoder (InlineContent a)
inlineContentDecoder customDecoder =
    Decode.succeed InlineContent
        |> Pipeline.optional "marks" (Decode.list (markDecoder customDecoder)) []
        |> Pipeline.required "text" Decode.string


markDecoder : (String -> Decoder a) -> Decoder (Mark a)
markDecoder customDecoder =
    Decode.field "type" Decode.string
        |> Decode.andThen
            (\type_ ->
                case type_ of
                    "strong" ->
                        Decode.succeed Bold

                    "em" ->
                        Decode.succeed Italics

                    "link" ->
                        Decode.map2 (\href title -> Link { href = href, title = title })
                            (Decode.at [ "attrs", "href" ] Decode.string)
                            (Decode.at [ "attrs", "title" ] (Decode.nullable Decode.string))

                    name ->
                        Decode.map Custom (customDecoder name)
            )


customMarkDecoder : String -> Decode.Decoder CustomMark
customMarkDecoder name =
    case name of
        "highlight" ->
            Decode.map Highlight
                (Decode.at [ "attrs", "id" ]
                    Decode.string
                )

        other ->
            Decode.fail ("I've found a mark I don't know: " ++ other)



--- VIEW


viewEditor :
    { onChange : ( Doc a, Selection ) -> msg
    , markEncoder : a -> Encode.Value
    , markDecoder : String -> Decoder a
    }
    -> State a
    -> Html msg
viewEditor config { doc, transactions } =
    node
        "math-editor"
        [ property "value" (doc |> encodeWith config.markEncoder)
        , property "transactions" (encodeTransactions config.markEncoder transactions)
        , Events.on "editor-event" <|
            Decode.map2 (\state selection -> config.onChange ( state, selection ))
                (Decode.at [ "detail", "state" ] (docDecoder config.markDecoder |> withLogging))
                (Decode.at [ "detail", "selection" ] (selectionDecoder |> withLogging))
        ]
        []



-- UPDATE
-- Use the `sendMessage` port when someone presses ENTER or clicks
-- the "Send" button. Check out index.html to see the corresponding
-- JS where this is piped into a WebSocket.
--


encodeTransactions : DocEncoder a -> List ( Int, Transaction a ) -> Encode.Value
encodeTransactions customEncoder transactions =
    Encode.list
        (\( id, transaction ) ->
            case transaction of
                AddMark selection mark ->
                    Encode.object
                        [ ( "type", Encode.string "add-mark" )
                        , ( "id", Encode.int id )
                        , ( "from", Encode.int selection.from )
                        , ( "to", Encode.int selection.to )
                        , ( "details", encodeMark customEncoder mark )
                        ]
        )
        transactions


applyTransaction : Transaction a -> State a -> State a
applyTransaction transaction state =
    { state
        | transactions = ( state.nextTransactionId, transaction ) :: state.transactions
        , nextTransactionId = state.nextTransactionId + 1
    }


withLogging : Decoder a -> Decoder a
withLogging realDecoder =
    Decode.value
        |> Decode.andThen
            (\event ->
                case Decode.decodeValue realDecoder event of
                    Ok decoded ->
                        --let
                        --    _ =
                        --        Debug.log "Decoding success:" (Debug.toString (Decode.succeed decoded))
                        --in
                        Decode.succeed decoded

                    Err error ->
                        error
                            |> Decode.errorToString
                            --|> Debug.log "decoding error"
                            |> Decode.fail
            )


docDecoder : (String -> Decoder a) -> Decoder (Doc a)
docDecoder customDecoder =
    Decode.map Doc <|
        Decode.andThen
            (\type_ ->
                case type_ of
                    "doc" ->
                        Decode.field "content" (Decode.list (contentDecoder customDecoder))

                    other ->
                        Decode.fail ("I expected to find a document at the top level, but instead I found " ++ other)
            )
            (Decode.field "type" Decode.string)



--postDoc : Cmd Msg
--postDoc =
--    Http.post { url = "https://kento.builtwithdark.com/docs", body = jsonBody (Decode. }
--decodedDocJson =
--    case docJson |> Decode.decodeString (decoder customMarkDecoder) of
--        Ok value ->
--            value
--
--        Err err ->
--            empty


docJson : String
docJson =
    """{"type":"doc","content":[{"type":"heading","attrs":{"level":1},"content":[{"type":"text","text":"Hello darkness my old friend"}]},{"type":"heading","attrs":{"level":3},"content":[{"type":"text","text":"I've come to talk with you again"}]},{"type":"paragraph","content":[{"type":"text","text":"lorem "},{"type":"text","marks":[{"type":"highlight","attrs":{"id":"123"}}],"text":"ipsum"},{"type":"text","text":", "},{"type":"text","marks":[{"type":"link","attrs":{"href":"www.google.com","title":null}}],"text":"google"}]},{"type":"bullet_list","content":[{"type":"list_item","content":[{"type":"paragraph","content":[{"type":"text","text":"hoho"}]}]},{"type":"list_item","content":[{"type":"paragraph","content":[{"type":"text","text":"haha"}]},{"type":"bullet_list","content":[{"type":"list_item","content":[{"type":"paragraph","content":[{"type":"text","text":"hehe"}]}]}]}]}]}]}"""


docFormula : String
docFormula =
    """{"type":"doc","content":[{"type":"math_display","content":[{"type":"text","text":"f(x)=x^2"}]}]}"""


markdown =
    """ # Hello Markdown """

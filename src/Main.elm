module Main exposing (..)

import Browser
import Browser.Dom as Dom
import Browser.Events exposing (onKeyDown)
import Browser.Navigation as Nav
import Editor
    exposing
        ( CustomMark
        , Doc
        , Selection
        , State
        , customMarkDecoder
        , docDecoder
        , docFormula
        , empty
        , mathMarkDecoder
        , mathMarkEncoder
        , viewEditor
        )
import Html exposing (..)
import Html.Attributes as Attributes exposing (..)
import Html.Events as Events exposing (..)
import Html.Keyed
import Json.Decode as Decode exposing (Decoder, andThen)
import Json.Encode as Encode
import Task
import Theory.EmbedKatex as Katex exposing (asInline, katex)
import Url exposing (Url)


type Msg
    = LinkClicked Browser.UrlRequest
    | UrlChanged Url.Url
    | ContentChanged String
    | KeyPress String


type NodeMsg
    = ChangeMode


type alias Model =
    { content : Doc }


type alias Node =
    { content : String, mode : Mode }


type Doc
    = Doc (List Content)


type Key
    = Space
    | Left
    | Right
    | Up
    | Down
    | Shift
    | Ctrl
    | Alt
    | Tab
    | ShiftTab
    | CapsLock
    | Escape
    | Enter
    | ShiftEnter
    | PageUp
    | PageDown
    | GoToStartOfLine
    | GoToEndOfLine
    | GoToStartOfWord
    | GoToEndOfWord
    | Undo
    | Redo
    | SelectAll
    | Unhandled


type Content
    = Heading Int (List String)
    | Paragraph (List String)
    | BulletList (List String)
    | MathDisplay (List String)
    | MathInline (List String)
    | Empty


type Mode
    = View
    | Edit


main : Program () Model Msg
main =
    Browser.application
        { init = init
        , view = view
        , update = update
        , subscriptions = subscriptions
        , onUrlChange = UrlChanged
        , onUrlRequest = LinkClicked
        }


init : () -> Url.Url -> Nav.Key -> ( Model, Cmd Msg )
init flags url key =
    ( { content = Doc [ MathInline [ "f(x)=x^2" ] ] }, Cmd.none )


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        ContentChanged str ->
            let
                parseContent =
                    \s -> s

                parsed =
                    parseContent str
            in
            --let
            --    _ =
            --        Debug.log "saving" str
            --in
            ( { model | content = Doc [ MathInline [ str ] ] }, Cmd.none )

        KeyPress _ ->
            ( model, Cmd.none )

        LinkClicked _ ->
            ( model, Cmd.none )

        UrlChanged _ ->
            ( model, Cmd.none )


view : Model -> Browser.Document Msg
view model =
    { title = "Demo"
    , body =
        [ div [ class "p-4" ]
            [ viewNode (textNode "asdf")
            , div []
                [ pre []
                    [ text (Debug.toString model.content) ]
                ]
            ]
        ]
    }


updateNode : NodeMsg -> Node -> Node
updateNode msg node =
    case msg of
        ChangeMode ->
            case node.mode of
                View ->
                    { node | mode = Edit }

                Edit ->
                    { node | mode = View }


viewContent : Content -> (Content -> Node) -> Html Msg
viewContent content f =
    viewNode (f content)


viewNode : Node -> Html Msg
viewNode node =
    let
        editable =
            case node.mode of
                View ->
                    False

                Edit ->
                    True

        editingStyles =
            "bg-slate-100"
    in
    div
        [ Events.on "keydown"
            (Decode.map KeyPress (Decode.field "key" Decode.string))
        , Attributes.contenteditable
            editable

        --, Events.on "beforeinput"
        --, Events.on "compositionend"
        ]
        [ text node.content ]


textNode : String -> Node
textNode s =
    { content = s, mode = View }



--Html.Keyed.node "editor-field"
--    []
--    [ ( "asf"
--      , Html.Keyed.node "div"
--            [ Attributes.property "message" <| encodeNode
--            , Attributes.contenteditable True
--            , Events.on "" <|
--                Decode.map ContentChanged <|
--                    Decode.at [] <|
--                        Decode.string
--            ]
--            []
--      )
--    ]


encodeNode : Encode.Value
encodeNode =
    Encode.object [ ( "hello", Encode.string "World" ) ]


subscriptions : Model -> Sub Msg
subscriptions _ =
    Sub.none

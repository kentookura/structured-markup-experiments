module Main exposing (..)

import Browser
import Browser.Dom as Dom
import Browser.Events exposing (onKeyDown)
import Browser.Navigation as Nav
import Html exposing (..)
import Html.Attributes as Attributes exposing (attribute, class, property)
import Html.Events as Events exposing (..)
import Html.Keyed as Keyed
import Json.Decode as Decode exposing (Decoder, andThen)
import Json.Encode as Encode exposing (Value)
import Lib.EmbedKatex as Katex exposing (asInline, katex)
import Task
import Tree
import Tree.Zipper exposing (Zipper, fromTree)
import Url exposing (Url)


type Msg
    = LinkClicked Browser.UrlRequest
    | UrlChanged Url.Url
    | ContentChanged String
    | KeyPress String


type NodeMsg
    = ChangeMode


type alias Model =
    Zipper Content


type alias Node =
    { content : String, mode : Mode }


type Doc
    = Doc (List Content)


type alias NodeConfig =
    { defineBlock : String }


encodeNodeConfig : NodeConfig -> Value
encodeNodeConfig cfg =
    Encode.object
        [ ( "defineBlock", Encode.string cfg.defineBlock )
        ]


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
    = Heading (List String)
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
    let
        content =
            fromTree <| Tree.singleton (MathInline [ "f(x)=x^2" ])
    in
    ( content, Cmd.none )


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
            ( model, Cmd.none )

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
            [ Html.node "editor-field"
                [ property "config" <| encodeNodeConfig { defineBlock = "|>" } ]
                []
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
    Html.node "editor-field"
        []
        --[ Events.on "keydown"
        --    (Decode.map KeyPress (Decode.field "key" Decode.string))
        --, Attributes.contenteditable
        --    True
        ----, Events.on "beforeinput"
        ----, Events.on "compositionend"
        --]
        []


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

module Theory.ContentEditable exposing (main)

import Browser
import Browser.Dom as Dom
import Debug
import Html exposing (Attribute, Html, a, div, input, text)
import Html.Attributes exposing (..)
import Html.Events exposing (on, onBlur, onClick, onInput)
import Json.Decode as Json
import Murmur3 exposing (hashString)
import Task
import Theory.EmbedKatex as Katex exposing (asInline, katex)


main : Program () Model Msg
main =
    Browser.element
        { init = init
        , update = update
        , view = view
        , subscriptions = \_ -> Sub.none
        }


type Msg
    = SaveInput String
    | KeyPress Key
    | ChangeMode
    | FocusOn String
    | FocusResult (Result Dom.Error ())


type alias Model =
    { content : String, mode : Mode }


type Mode
    = View
    | Edit


type Key
    = Character Char
    | Control String


view : Model -> Html Msg
view model =
    case model.mode of
        View ->
            a [ onClick ChangeMode ] [ Katex.view (model.content |> katex |> asInline) ]

        Edit ->
            div
                [ contenteditable True
                , on "blur" (Json.map SaveInput targetTextContent)
                , on "keydown" (Json.map KeyPress keyDecoder)
                ]
                [ text model.content
                ]


targetTextContent : Json.Decoder String
targetTextContent =
    Json.at [ "target", "textContent" ] Json.string


keyDecoder : Json.Decoder Key
keyDecoder =
    Json.map toKey (Json.field "key" Json.string)


toKey : String -> Key
toKey string =
    case String.uncons string of
        Just ( char, "" ) ->
            Character char

        _ ->
            Control string


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        FocusOn id ->
            ( model, Dom.focus id |> Task.attempt FocusResult )

        FocusResult result ->
            case result of
                Err (Dom.NotFound i) ->
                    ( model, Cmd.none )

                Ok () ->
                    ( model, Cmd.none )

        SaveInput str ->
            --let
            --    _ =
            --        Debug.log "saving" str
            --in
            ( { model | content = str, mode = View }, Cmd.none )

        ChangeMode ->
            case model.mode of
                View ->
                    ( { model | mode = Edit }, Cmd.none )

                Edit ->
                    ( { model | mode = View }, Cmd.none )

        KeyPress _ ->
            ( model, Cmd.none )


init : () -> ( Model, Cmd Msg )
init _ =
    ( { content = "a=b", mode = Edit }, Cmd.none )

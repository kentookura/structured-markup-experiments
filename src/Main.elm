module Main exposing (..)

import Browser
import Browser.Dom as Dom
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
import Html.Attributes exposing (..)
import Html.Events as Events exposing (..)
import Json.Decode as Json exposing (Decoder, andThen)
import Task
import Theory.EmbedKatex as Katex exposing (asInline, katex)
import Url exposing (Url)


type Msg
    = LinkClicked Browser.UrlRequest
    | UrlChanged Url.Url
    | SaveInput String
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
    ( { content = "a=b", mode = Edit }, Cmd.none )


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
            ( { model | content = str }, Cmd.none )

        ChangeMode ->
            case model.mode of
                View ->
                    ( { model | mode = Edit }, Cmd.none )

                Edit ->
                    ( { model | mode = View }, Cmd.none )

        KeyPress _ ->
            ( model, Cmd.none )

        LinkClicked _ ->
            ( model, Cmd.none )

        UrlChanged _ ->
            ( model, Cmd.none )


view : Model -> Browser.Document Msg
view model =
    { title = "Demo"
    , body = [ viewNode model, pre [] [ text model.content ] ]
    }


viewNode : Model -> Html Msg
viewNode model =
    let
        show =
            case model.mode of
                Edit ->
                    ""

                View ->
                    ""
    in
    div []
        [ a
            []
            [ Katex.view (model.content |> katex |> asInline) ]
        , div
            [ contenteditable True
            , on "blur" (Json.map SaveInput targetTextContent)
            , on "keydown" (Json.map KeyPress keyDecoder)
            ]
            [ pre [] [ text model.content ]
            ]
        ]


subscriptions : Model -> Sub Msg
subscriptions _ =
    Sub.none


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

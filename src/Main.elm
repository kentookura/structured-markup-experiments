module Main exposing (..)

import Browser
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
import Json.Decode as Decode exposing (Decoder, andThen)
import Json.Encode as Encode exposing (Value)
import Url exposing (Url)


type Msg
    = LinkClicked Browser.UrlRequest
    | UrlChanged Url.Url
    | DocChange ( Doc CustomMark, Selection )


type alias Model =
    { selection : Selection
    , editorState : State CustomMark
    , isHighlighting : Bool
    , nextHighlightId : Int
    }


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
    ( { selection = { from = 0, to = 0 }
      , editorState =
            { doc =
                case Decode.decodeString (docDecoder customMarkDecoder) docFormula of
                    Ok value ->
                        value

                    Err err ->
                        --let
                        --    _ =
                        --        Debug.log "Error while decoding document: " err
                        --in
                        empty
            , transactions = []
            , nextTransactionId = 1
            }
      , isHighlighting = False
      , nextHighlightId = 1
      }
    , Cmd.none
    )


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        DocChange ( newDoc, selection ) ->
            let
                editorState =
                    model.editorState

                newEditorState =
                    { editorState | doc = newDoc }
            in
            ( { model | editorState = newEditorState, selection = selection }, Cmd.none )

        _ ->
            ( model, Cmd.none )


view : Model -> Browser.Document Msg
view model =
    { title = "Demo"
    , body =
        [ div [ class "" ]
            [ viewEditor
                { markEncoder = mathMarkEncoder
                , markDecoder = mathMarkDecoder
                , onChange = DocChange
                }
                model.editorState

            --, pre
            --    []
            --    [ text (Debug.toString model.editorState) ]
            ]

        --, pre []
        --    [ Result.withDefault "" (Json.Print.prettyString { indent = 4, columns = 80 } docJson) |> text ]
        ]
    }


subscriptions : Model -> Sub Msg
subscriptions _ =
    Sub.none

module Main exposing (..)

import Browser
import Browser.Dom as Dom
import Browser.Events exposing (onKeyDown)
import Browser.Navigation as Nav
import Html exposing (Html, a, br, div, h1, li, p, pre, text, ul)
import Html.Attributes as Attributes exposing (attribute, class, property)
import Html.Events as Events exposing (..)
import Html.Keyed as Keyed
import Json.Decode as Decode exposing (Decoder, andThen)
import Json.Encode as Encode exposing (Value)
import Lib.EmbedKatex as Katex exposing (KatexDisplay(..), asInline, katex, withDisplay)
import Lorem exposing (lorem)
import Task
import Url exposing (Url)


type alias Model =
    Zipper Node


type Node
    = Heading String
    | Paragraph
    | BulletList
    | MathDisplay String
    | MathInline String
    | Text String
    | Break
    | Empty


viewNode : Node -> Html msg
viewNode node =
    case node of
        Heading heading ->
            h1 [ class "text-xl" ] [ text heading ]

        BulletList ->
            text ""

        MathDisplay content ->
            Katex.view (content |> katex |> withDisplay Block)

        MathInline content ->
            Katex.view (content |> katex |> withDisplay Inline)

        Text content ->
            text content

        Paragraph ->
            text ""

        Break ->
            br [] []

        Empty ->
            text ""



--inserted : Zipper Node
--inserted =
--    singleton (Text "I have been inserted!")
--        |> fromTree
--
--
--
--exampleDoc : Zipper Node
--exampleDoc =
--    ( Tree
--        Paragraph
--        [ Heading "Hello World"
--        , Text "This is an example doc. We will modify this datastructure using a zipper. "
--        , Text "The most important thing is that we can write and display mathematics using this doc. Here is an example:"
--        , MathDisplay "f(x)=x^2"
--        , BulletList
--            [ Tree (Text "this is a list 1") []
--            , Tree (Text "this is a list 2") []
--            , Tree (Text "this is a list 3") []
--            ]
--        , Paragraph [ Tree (Text lorem) ]
--        ]
--    , []
--    )


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


type Msg
    = LinkClicked Browser.UrlRequest
    | UrlChanged Url


subscriptions : Model -> Sub Msg
subscriptions _ =
    Sub.none


init : () -> Url.Url -> Nav.Key -> ( Model, Cmd Msg )
init flags url key =
    ( exampleDoc, Cmd.none )


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        LinkClicked _ ->
            ( model, Cmd.none )

        UrlChanged _ ->
            ( model, Cmd.none )


view : Model -> Browser.Document Msg
view model =
    { title = "Demo"
    , body =
        [ div [ class "p-4 text-justify" ]
            [ --viewZipper
              pre []
                [ text ""
                ]
            , model
                |> Debug.toString
                |> text
            ]
        ]
    }

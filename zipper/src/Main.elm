module Main exposing (..)

import Browser
import Browser.Dom as Dom
import Browser.Events exposing (onKeyDown)
import Browser.Navigation as Nav
import Html exposing (Html, a, div, h1, li, p, text, ul)
import Html.Attributes as Attributes exposing (attribute, class, property)
import Html.Events as Events exposing (..)
import Html.Keyed as Keyed
import Json.Decode as Decode exposing (Decoder, andThen)
import Json.Encode as Encode exposing (Value)
import Lazy.Tree as Tree exposing (..)
import Lazy.Tree.Zipper as Zipper exposing (..)
import Lib.EmbedKatex as Katex exposing (KatexDisplay(..), asInline, katex, withDisplay)
import Task
import Url exposing (Url)


type alias Model =
    Zipper Doc


type Doc
    = Heading String Doc
    | Paragraph (List Doc)
    | BulletList (List Doc)
    | MathDisplay String
    | MathInline String
    | Text String
    | Empty


viewDoc : Doc -> Html msg
viewDoc doc =
    case doc of
        Heading heading _ ->
            h1 [] [ text heading ]

        Paragraph _ ->
            text ""

        BulletList _ ->
            text ""

        MathDisplay content ->
            Katex.view (content |> katex |> withDisplay Block)

        MathInline content ->
            Katex.view (content |> katex |> withDisplay Inline)

        Text content ->
            text content

        Empty ->
            text ""


getChildren : Doc -> List Doc
getChildren doc =
    case doc of
        Heading heading content ->
            [ content ]

        Paragraph content ->
            content

        BulletList content ->
            content

        MathDisplay content ->
            []

        MathInline content ->
            []

        Text content ->
            []

        Empty ->
            []


exampleDoc : Zipper Doc
exampleDoc =
    Heading "Hello World"
        (Paragraph
            [ Text "This is an example doc. We will modify this datastructure using a zipper."
            , Text "The most important thing is that we can write and display mathematics using this doc. Here is an example:"
            , MathInline "f(x)=x^2"
            ]
        )
        |> build getChildren
        |> fromTree


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
            exampleDoc
    in
    ( content, Cmd.none )


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
        [ div [ class "p-4" ]
            [ viewZipper model
            ]
        ]
    }


viewZipper : Zipper Doc -> Html Msg
viewZipper z =
    --f (label z)
    let
        root =
            Zipper.current z
    in
    li []
        [ a
            []
            [ Html.span [] [ viewDoc root ] ]
        , Html.ul [] <| (Zipper.openAll z |> List.map viewZipper)
        ]


viewLevel : Zipper Doc -> Html Msg
viewLevel zipper =
    let
        item =
            Zipper.current zipper
    in
    Html.li []
        [ Html.a []
            [ if not (Zipper.isEmpty zipper) then
                Html.span []
                    [ Html.text "- "
                    ]

              else
                Html.text ""
            ]
        , Html.ul [] <|
            (Zipper.openAll zipper
                |> List.map viewLevel
            )
        ]


type Msg
    = LinkClicked Browser.UrlRequest
    | UrlChanged Url


subscriptions : Model -> Sub Msg
subscriptions _ =
    Sub.none

# Prosemirror via Webcomponents

This demo features a web component embedded in an elm application. The web
component makes use of the [prosemirror](prosemirror.net) library, alongside the
[prosemirror-math](https://github.com/benrbray/prosemirror-math) plugin.
Unfortunately, the editor is not usable in this configuration, and it seems to
be a problem with the plugin itself.

Prosemirror is powerful, but the API is very OO, and I would prefer to keep the
logic of the application in Elm. The question becomes "what API should the
webcomponent expose?"

# Structure Editors for Markup

This Repo contains experiments about my ideas concerning structure editors for
mathematical markup.

### Demos

[zipper](./zipper.md)

[prosemirror-math](./prosemirror-math.md)

### Open Questions

- Should I use `contenteditable` at all? Maybe it is better to just track all
  keypresses in elm and modify the model that way.

### Technical problems

- Working with the DOM is hard

## Similar projects

[Nota](https://nota-lang.org) explores the possibility of creating documents
using a custom language which compiles to a javascript program. Clicking on
references will open a tooltip, allowing definitions to be recalled easily. At
the moment of writing, it is designed for creating monolithic documents,
similarly to LaTeX, but adapted to make use of browser technologies. The goal
of my project is to break out of this pattern of writing.

[Unison](https://www.unison-lang.org/learn/usage-topics/documentation/) is a
programming language which features an innovative documentation system.
Documentation is a first-class unison datatype, which is rendered by the
Unison UI. What is nice about the UI is that the documentation gets added to
the codebase through the same pipeline as the code, meaning that the docs
are typechecked and can’t make references to non-existent code. If I adopt
Unisons model of content-addressed storage, this would allow users to “pull”
other peoples notes into their own codebase. Unison gets the closest to what I
want, but it will always be a tool specifically for unison programmers.

[Forester](https://github.com/jonsterling/forest) is based on Andy Matuschak’s
notion of [Evergreen
notes](https://notes.andymatuschak.org/About_these_notes). It is a static site
generator designed for evergreen mathematical notes with support for
mathematical typesetting. We have exchanged some emails, but we haven’t gotten
around to talking about the differences between our individueal approaches
yet. The thoughts presented in Jon’s Forest and Andy’s notes are more
concerned with note-taking practice using available tools. I would like to
create a tool which guides/enforces the user to follow these principles.

[Logseq](https://logseq.com/) has support for creating and reviewing flash
cards. I would like to explore creating sharable interactive content for
teaching purposes.

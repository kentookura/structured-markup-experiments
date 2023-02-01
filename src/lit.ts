import { LitElement, css, html } from "lit";
import { Node } from "prosemirror-model";
import { query, customElement, property } from "lit/decorators.js";
import { customElement, property } from "lit/decorators.js";
import { EditorView } from "prosemirror-view";
import { EditorState } from "prosemirror-state";
//import {
//  defaultMarkdownParser,
//  defaultMarkdownSerializer,
//  schema,
//} from "prosemirror-markdown";
import { baseKeymap } from "prosemirror-commands";
import { dropCursor } from "prosemirror-dropcursor";
import { keymap } from "prosemirror-keymap";
import { gapCursor } from "prosemirror-gapcursor";
import { history } from "prosemirror-history";
import {
  HyperlinkPlugin,
  ToolbarOptions,
  updateLink,
} from "prosemirror-hyperlink";
import { mathSchema } from "./schema.ts";

@customElement("math-editor")
export class MathEditor extends LitElement {
  @property({ type: Object })
  public value?: object;

  @property({ type: Boolean })
  public disabled: boolean = false;

  @property({ type: Boolean })
  public focused: boolean = false;

  @property({ type: String })
  public promptCancelAction: string = "Cancel";

  @property({ type: String })
  public promptSaveAction: string = "Save";

  @property({ type: String })
  public promptTextPlaceholder: string = "Text to display";

  private editor?: EditorView;

  @query("#editor")
  private editorEl?: HTMLDivElement;

  // Define scoped styles right with your component, in plain CSS
  static styles = css``;

  // Declare reactive properties
  @property()
  name?: string = "World";

  // Render the UI as a function of component state
  protected render() {
    return html`
      <div
        id="editor"
        ?focused="${this.focused}"
        ?disabled="${this.disabled}"
      ></div>
      <pre>"${JSON.stringify(this.value, undefined, 2)}"</pre>
    `;
  }
  protected firstUpdated() {
    this.editor = new EditorView<Schema>(this.editorEl!, {
      editable: () => !this.disabled,
      state: EditorState.create({
        //doc: defaultMarkdownParser.parse(this.value || ""),
        doc: Node.fromJSON(mathSchema, this.value),
        plugins: [
          keymap(baseKeymap),
          dropCursor(),
          gapCursor(),
          history(),
          //new HyperlinkPlugin(
          //  schema.marks.link,
          //  this.configureToolbar.bind(this)
          //),
        ],
      }),
      dispatchTransaction: (transaction) => {
        const newState = this.editor!.state.apply(transaction);
        this.editor!.updateState(newState);

        this.dispatchEvent(
          new CustomEvent("mwc-markdown-editor-input", {
            detail: {
              //value: defaultMarkdownSerializer.serialize(newState.doc),
              value: newState.doc.toJSON(),
            },
          })
        );
      },
      handleDOMEvents: {
        focus: () => {
          this.focused = true;
          return false;
        },
        blur: () => {
          this.focused = false;
          return false;
        },
      },
    });
    this.editor.focus();
  }

  protected updated(changedProperties: Map<string, any>) {
    if (changedProperties.has("disabled") && this.editor) {
      this.editor.updateState(this.editor.state);
    }
  }
}

import { LitElement, css, html } from "lit";
import { Node } from "prosemirror-model";
import { mathSerializer } from "@benrbray/prosemirror-math";
import { query, customElement, property } from "lit/decorators.js";
import { EditorView } from "prosemirror-view";
import { EditorState } from "prosemirror-state";
import { plugins } from "./plugins";
import { mathSchema } from "./schema";
import { prosemirrorStyles, mathStyles, katex } from "./styles";

@customElement("math-editor")
export class MathEditor extends LitElement {
  @property({ type: Object })
  public value?: object;

  @property({ type: Boolean })
  public disabled: boolean = false;

  @property({ type: Boolean })
  public focused: boolean = false;

  private editor?: EditorView;

  @query("#editor")
  private editorEl?: HTMLDivElement;

  // Define scoped styles right with your component, in plain CSS
  static get styles() {
    return [prosemirrorStyles, mathStyles, katex];
  }

  // Declare reactive properties
  //@property()
  //name?: string = "World";

  // Render the UI as a function of component state
  protected render() {
    return html`
        <div
          id="editor"
          ?focused="${this.focused}"
          ?disabled="${this.disabled}"
        ></div>
      </div>
    `;
  }
  protected firstUpdated() {
    this.editor = new EditorView(this.editorEl!, {
      editable: () => !this.disabled,
      state: EditorState.create({
        //doc: defaultMarkdownParser.parse(this.value || ""),
        doc: Node.fromJSON(mathSchema, this.value),
        plugins: plugins,
      }),
      clipboardTextSerializer: (slice) => {
        return mathSerializer.serializeSlice(slice);
      },
      dispatchTransaction: (transaction) => {
        const newState = this.editor!.state.apply(transaction);
        this.editor!.updateState(newState);

        //console.log(newState);
        this.dispatchEvent(
          new CustomEvent("editor-event", {
            detail: {
              //value: defaultMarkdownSerializer.serialize(newState.doc),
              state: newState.doc.toJSON(),
              selection: {
                from: transaction.selection.from,
                to: transaction.selection.to,
              },
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
    //applyDevTools(this.editor);
  }

  protected updated(changedProperties: Map<string, any>) {
    if (changedProperties.has("disabled") && this.editor) {
      this.editor.updateState(this.editor.state);
    }
  }
}

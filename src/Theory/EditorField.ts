import { LitElement, css, html } from "lit";
import { query, customElement, property } from "lit/decorators.js";

@customElement("editor-field")
export class MathEditor extends LitElement {
  @property({ type: Object })
  public message?: object;

  constructor() {
    super();
    this.observer = new MutationObserver(this.mutationObserverCallback);
  }

  // Define scoped styles right with your component, in plain CSS
  static get styles() {
    return [];
  }

  // Render the UI as a function of component state
  protected render() {
    return html`<input .value=${live(this.data.content)} />`;
  }

  protected firstUpdated() {}

  protected connectedCallback() {
    addEventListener("keydown", this._handleKeydown);
  }

  protected updated(changedProperties: Map<string, any>) {}
}

import { LitElement, css, html } from "lit";
import { query, customElement, property } from "lit/decorators.js";

@customElement("editor-field")
export class MathEditor extends LitElement {
  @property()
  parsed = "";

  @property()
  message = "";

  @property()
  config = {};

  constructor() {
    super();
    this.parsed = this.textContent;
  }

  parse(e) {
    //console.log(e);
    this.parsed = e.target.innerText;
  }
  notify(e) {
    console.log(e);
    if (this.parsed === "" && e.keyCode === 8) {
      this.message = "delete_node";
    } else this.message = "nothing";
    ////this.message = e.key;
  }

  //connectedCallback() {
  //  this.addEventListener("input", (e) => (this.parsed = e.target.innerText));
  //}

  render() {
    return html`<p
        contenteditable
        @input="${this.parse}"
        @keydown="${this.notify}"
      >
        Hello from the element
      </p>
      <p>Parsed: ${this.parsed}</p>
      <p>Message: ${this.message}</p>
      <pre>${JSON.stringify(this.config, 2)}</pre>`;
  }
}

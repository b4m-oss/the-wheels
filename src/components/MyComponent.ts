import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("my-component")
export class MyComponent extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 16px;
      color: var(--my-component-text-color, black);
    }
  `;

  @property({ type: String }) message: string =
    "Hello, this is a Lit component!";

  render() {
    return html`<p>${this.message}</p>`;
  }
}

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

    .small {
      font-size: 12px;
    }

    .medium {
      font-size: 16px;
    }

    .large {
      font-size: 20px;
    }
  `;

  @property({ type: String }) message: string = "Hello, this is a Lit component!";
  @property({ type: String }) color: string = "black"; // 新しく追加
  @property({ type: String }) size: "small" | "medium" | "large" = "medium"; // 新しく追加

  render() {
    return html`
      <p class="${this.size}" style="color: ${this.color}">${this.message}</p>
    `;
  }
}

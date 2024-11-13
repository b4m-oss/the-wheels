import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("slot-component") // コンポーネント名を 'slot-component' に変更
export class SlotComponent extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 16px;
      color: var(--slot-component-text-color, black);
      border: 1px solid #ccc;
    }
  `;

  render() {
    return html`
      <div>
        <slot name="content">Default content</slot>
      </div>
    `;
  }
}

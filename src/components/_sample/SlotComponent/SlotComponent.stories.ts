import type { Meta, StoryObj } from "@storybook/web-components";
import { SlotComponent } from "./SlotComponent";

export default {
  title: "Components/SlotComponent",
  component: "slot-component",
  argTypes: {
    content: { control: "text" },
  },
} as Meta;

const Template = (args: { content: string }) => {
  const element = document.createElement("slot-component");
  const slot = document.createElement("span");
  slot.slot = "content";
  slot.textContent = args.content;
  element.appendChild(slot);
  return element as SlotComponent;
};

export const Default: StoryObj<{ content: string }> = {
  render: (args) => Template(args),
  args: {
    content: "This is dynamic content passed through a slot!",
  },
};

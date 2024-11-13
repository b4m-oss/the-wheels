import type { Meta, StoryObj } from "@storybook/web-components";
import { MyComponent } from "./MyComponent";

type MyComponentArgs = {
  message: string;
  color: string;
  size: "small" | "medium" | "large";
};

const meta: Meta<MyComponentArgs> = {
  title: "Components/Sample/MyComponent",
  component: "my-component",
  argTypes: {
    message: { control: "text" },
    color: { control: "color" },
    size: {
      control: "select",
      options: ["small", "medium", "large"],
    },
  },
} satisfies Meta<MyComponentArgs>;

export default meta;

const Template = (args: { message: string; color: string; size: "small" | "medium" | "large" }) => {
  const element = document.createElement("my-component") as MyComponent;
  element.message = args.message;
  element.color = args.color;
  element.size = args.size;
  return element;
};

export const Default: StoryObj<MyComponentArgs> = {
  render: Template,
  args: {
    message: "Hello, Storybook!",
    color: "blue",
    size: "medium",
  },
};
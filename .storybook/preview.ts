import type { Preview } from "@storybook/web-components";
import 'reset-css';
import '../src/styles/the-wheels.css'
import '../src/components/_sample/MyComponent/MyComponent';
import '../src/components/_sample/SlotComponent/SlotComponent';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },

  tags: ['autodocs']
};

export default preview;

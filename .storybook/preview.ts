import type { Preview } from "@storybook/web-components";
import 'reset-css';
import '../src/styles/the-wheels.css'

const preview: Preview = {
  parameters: {
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

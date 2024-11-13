import type { StorybookConfig } from "@storybook/web-components-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: ["@storybook/addon-essentials", "@chromatic-com/storybook"],
  framework: {
    name: "@storybook/web-components-vite",
    options: {},
  },
  core: {
    builder: "@storybook/builder-vite", // Viteをビルダーとして指定
  },
  viteFinal: async (config, { configType }) => {
    // 必要に応じてViteの設定をカスタマイズ
    if (configType === "DEVELOPMENT") {
      config.server = {
        ...config.server,
        open: true, // 自動的にブラウザを開く設定
      };
    }
    return config;
  },
  // Web Components用の設定
  docs: {
    autodocs: true, // 自動的にドキュメント生成を有効化
  },
};
export default config;

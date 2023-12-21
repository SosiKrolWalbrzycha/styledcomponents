/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const config = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {
      builder: {
        useSWC: true,
      },
    },
  },
  docs: {
    autodocs: "tag",
  },
  staticDirs: ["..\\public"],

  // Dodany fragment kodu do wyłączenia ESLint
  webpackFinal: async (config) => {
    config.module.rules = config.module.rules.filter(
      (rule) => !(rule.use && rule.use.some((use) => use.loader && use.loader.includes('eslint-loader')))
    );
    return config;
  },
};

export default config;

module.exports = {
  typescript: { reactDocgen: false },
  stories: ['../src/**/*.stories.tsx'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  framework: '@storybook/react',
  core: {
    builder: 'webpack5',
  },
};

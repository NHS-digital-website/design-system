const path = require('path')
const StyleLintPlugin = require('stylelint-webpack-plugin');

module.exports = {
  "stories": [
    "../src/nhsd/**/*.stories.mdx",
    "../src/nhsd/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-docs",
    "@storybook/addon-notes",
    "@storybook/addon-controls",
    "@storybook/addon-a11y",
    "@storybook/addon-viewport",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
  ],
  webpackFinal: async (config, { configType }) => {
		// `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
		// You can change the configuration based on that.
		// 'PRODUCTION' is used when building the static version of storybook.

		// Make whatever fine-grained changes you need
		config.module.rules.push({
			test: /\.njk$/,
			use: [
				{
          loader: 'nunjucks-loader',
				},
			],
		}, {
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', {
        loader: 'sass-loader',
        options: {
          // Prefer `dart-sass`
          implementation: require('dart-sass'),
          sassOptions: {
            includePaths: [
              'node_modules',
              path.resolve(__dirname, '../src/nhsd'),
            ],
          },
        },
      }],
    });

    config.plugins.push(
      new StyleLintPlugin({
        configFile: '.stylelintrc.yml',
        context: 'node_modules',
        files: '../src/nhsd/components/**/*.scss',
        failOnError: false,
      }),
    );

		// Return the altered config
		return config;
	}
}

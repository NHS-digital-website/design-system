const path = require('path');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  "stories": [
    "../src/nhsd/**/*.stories.mdx",
    "../src/nhsd/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-a11y",
    "@storybook/addon-essentials",
  ],
  babel: async (options) => ({
    ...options,
    presets: ['@babel/preset-env'],
    plugins: ['@babel/plugin-proposal-class-properties'],
  }),
  webpackFinal: async (config, { configType }) => {
		// `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
		// You can change the configuration based on that.
		// 'PRODUCTION' is used when building the static version of storybook.

		// Make whatever fine-grained changes you need
		config.module.rules.push(
    {
			test: /\.njk$/,
			use: [
				{
          loader: 'nunjucks-loader',
          query: {
            jinjaCompat: true,
            trimBlocks: true,
            lstripBlocks: true,
          }
				},
			],
		}, {
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'resolve-url-loader', {
        loader: 'sass-loader',
        options: {
          // Prefer `dart-sass`
          implementation: require('sass'),
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
        files: '../src/nhsd/**/*.scss',
        failOnError: false,
      }),
      new ESLintPlugin({}),
    );

    // Hijack Storybooks's webpack.DefinePlugin
    const definePlugin = config.plugins.find(p => p.definitions);
    definePlugin.definitions['process.env'] = {
      ...definePlugin.definitions['process.env'],
      'BUILD_DATE': `'${new Date().toISOString().slice(0, 10)}'`,
    }


    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname, "../src/nhsd/script-core")
    };

		// Return the altered config
		return config;
	}
}

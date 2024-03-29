const path = require('path');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const loadIcons = require('./load-icons');

module.exports = {
  core: {
    builder: "webpack5",
  },
  stories: [
    "../src/nhsd/**/*.stories.js"
  ],
  features: {
    postcss: false
  },
  "addons": [
    "@storybook/addon-a11y",
    "@storybook/addon-essentials",
  ],
  staticDirs: [path.resolve(__dirname, '../dist')],
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
          options: {
            jinjaCompat: true,
            trimBlocks: true,
            lstripBlocks: true,
            config: path.resolve(__dirname, 'nunjucks-config.js'),
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
              path.resolve(__dirname, '../src/nhsd'),
            ],
          },
        },
      }],
    }, {
      test: /\.svg$/,
      type: 'asset/source'
    });

    config.plugins.push(
      new StyleLintPlugin({
        configFile: path.resolve(__dirname, '../.stylelintrc.yml'),
        context: path.resolve(__dirname, '..'),
        files: 'src/nhsd/**/*.scss',
        fix: true,
      }),
      new ESLintPlugin({
        context: path.resolve(__dirname, '..'),
        files: 'src/nhsd/**/*.js',
        fix: true,
      }),
    );

    // Hijack Storybooks's webpack.DefinePlugin
    const definePlugin = config.plugins.find(p => p.definitions);

    definePlugin.definitions = {
      ...definePlugin.definitions,
      'SVG_ICONS': JSON.stringify(loadIcons()),
    };
    definePlugin.definitions['process.env'] = {
      ...definePlugin.definitions['process.env'],
      'BUILD_DATE': `'${new Date().toISOString().slice(0, 10)}'`,
    };

    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname, "../src/nhsd/script-core")
    };

		// Return the altered config
		return config;
	}
}

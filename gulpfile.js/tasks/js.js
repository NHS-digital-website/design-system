/* global ENV PATHS */
const path = require('path');
const gulp = require('gulp');
const gulpIf = require('gulp-if');
const { ESLint } = require('eslint');
const eol = require('gulp-eol');
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify-es').default;
const webpackStream = require('webpack-stream');
const sass = require('sass');

const getDestPath = () => PATHS.dist.root;

gulp.task('js:lint', async () => {
  const eslint = new ESLint();
  const results = await eslint.lintFiles([
    `${PATHS.src.root}/**/*.js`,
    `${PATHS.gulp.root}/**/*.js`,
  ]);
  const formatter = await eslint.loadFormatter('stylish');
  const report = formatter.format(results);

  if (report) {
    process.stdout.write(report);
  }

  if (ENV.isModeProd() && results.some(({ errorCount }) => errorCount > 0)) {
    throw new Error('JavaScript lint errors found.');
  }
});

gulp.task('js:compile', () => gulp.src([
    `${PATHS.src.root}/**/*.js`,
    `!${PATHS.src.root}/**/*.stories.js`,
  ])
  .pipe(gulpIf(ENV.isModeDev(), sourcemaps.init({ loadMaps: true })))
  .pipe(webpackStream({
    mode: ENV.isModeProd() ? 'production' : 'development',
    output: {
      filename: 'scripts/nhsd-frontend.js',
    },
    plugins: [],
    module: {
      rules: [
        {
          test: /\.(js)$/,
          exclude: /(node_modules)/,
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: [
              '@babel/plugin-transform-class-properties',
              '@babel/plugin-transform-private-methods',
              '@babel/plugin-transform-private-property-in-object',
            ],
          },
        },
        {
          test: /\.scss$/,
          use: ['style-loader', 'css-loader', {
            loader: 'sass-loader',
            options: {
              // Prefer `dart-sass`
              implementation: sass,
              sassOptions: {
                loadPaths: [
                  path.resolve(__dirname, '../../node_modules'),
                  path.resolve(__dirname, '../../node_modules/sass-mq'),
                  'node_modules',
                  path.resolve(__dirname, '../../src/nhsd'),
                ],
              },
            },
          }],
        },
        {
          test: /\.svg$/,
          type: 'asset/source',
        },
      ],
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '../../src/nhsd/script-core'),
      },
    },
  }))
  .pipe(gulpIf(ENV.isModeDev(), sourcemaps.write('.')))
  .pipe(gulpIf(ENV.isModeProd(), uglify()))
  .pipe(eol())
  .pipe(gulp.dest(getDestPath())));

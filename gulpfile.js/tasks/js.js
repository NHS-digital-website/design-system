/* global ENV PATHS */

const gulp = require('gulp');
const gulpIf = require('gulp-if');
const eslint = require('gulp-eslint');
const eol = require('gulp-eol');
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify-es').default;
const webpackStream = require('webpack-stream');

const getDestPath = () => PATHS.dist.root;

gulp.task('js:lint', () => gulp.src([
    `${PATHS.src.root}/**/*.js`,
    `${PATHS.gulp.root}/**/*.js`,
    `!${PATHS.src.root}/**/*.stories.js`,
    '!node_modules/**',
  ])
  .pipe(eslint())
  .pipe(eslint.format())
  .pipe(gulpIf(ENV.isModeProd(), eslint.failAfterError())));

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
          query: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-proposal-class-properties'],
          },
        },
      ],
    },
  }))
  .pipe(gulpIf(ENV.isModeDev(), sourcemaps.write('.')))
  .pipe(gulpIf(ENV.isModeProd(), uglify()))
  .pipe(eol())
  .pipe(gulp.dest(getDestPath())));

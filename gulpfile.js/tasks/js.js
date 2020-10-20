/* global ENV PATHS BROWSER_SYNC */

const reload = BROWSER_SYNC.reload;

const gulp = require('gulp')
const gulpIf = require('gulp-if')
const eslint = require('gulp-eslint')
const eol = require('gulp-eol')
const sourcemaps = require('gulp-sourcemaps')
const uglify = require('gulp-uglify-es').default
const webpackStream = require('webpack-stream')

const getDestPath = () => {
  let destPath = PATHS.lab.scripts;
  if (ENV.isTargetDist()) {
    destPath = PATHS.dist.root;
  }
  return destPath;
};

gulp.task('js:lint', () => {
  return gulp.src([
      `${PATHS.src.root}/**/*.js`,
      '!node_modules/**'
    ])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(gulpIf(ENV.isModeProd(), eslint.failAfterError()));
});

gulp.task('js:compile', () => {
  return gulp.src(`${PATHS.src.root}/**/*.js`)
    .pipe(gulpIf(ENV.isModeDev(), sourcemaps.init({ loadMaps: true })))
    .pipe(webpackStream({
      mode: ENV.isModeProd() ? 'production' : 'development',
      output: {
        filename: 'nhsd-frontend.js'
      },
      plugins: [],
      module: {
        rules: [
          {
            test: /\.(js)$/,
            exclude: /(node_modules)/,
            loader: 'babel-loader',
            query: {
              presets: ['babel-preset-env']
            }
          }
        ]
      }
    }))
    .pipe(gulpIf(ENV.isModeDev(), sourcemaps.write('.')))
    .pipe(gulpIf(ENV.isModeProd(), uglify()))
    .pipe(eol())
    .pipe(gulp.dest(getDestPath()))
    .pipe(reload({
      stream: true
    }));
});


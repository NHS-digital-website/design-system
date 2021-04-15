/* global ENV PATHS */

const gulp = require('gulp');
const sass = require('gulp-sass');
const csso = require('gulp-csso');
const gulpIf = require('gulp-if');
const lint = require('gulp-stylelint');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const through2 = require('through2');
const rework = require('rework');
const reworkFunction = require('rework-plugin-function');

sass.compiler = require('sass');

const getDestPath = () => PATHS.dist.stylesheets;

gulp.task('scss:lint', () => gulp.src([
    `${PATHS.src.root}/**/*.scss`,
  ]).pipe(lint({
    failAfterError: ENV.isModeProd(),
    reporters: [
      { formatter: 'string', console: true },
    ],
  })));

gulp.task('scss:compile', () => gulp.src(`${PATHS.src.root}/**/*.scss`)
  .pipe(gulpIf(ENV.isModeDev(), sourcemaps.init()))
  .pipe(sass({
    includePaths: ['node_modules', PATHS.src.root],
    outputStyle: ENV.isModeProd() ? 'compressed' : 'expanded',
  }).on('error', sass.logError))
  .pipe(gulpIf(ENV.isModeProd(), csso()))
  .pipe(gulpIf(ENV.isModeProd(), autoprefixer()))
  // Not perfect, but this should match and replace relative asset urls in most cases
  .pipe(through2.obj(function rewriteUrls(file, _, cb) {
    const contents = rework(file.contents.toString(), file.path).use(
      reworkFunction({
        url(url) {
          let replacedUrl = url;
          if (url.match(/\.\.\/assets\/.+\..+/)) {
            const filePath = url.split('/assets/')[1];
            replacedUrl = `url("../${filePath}")`;
          }
          return replacedUrl;
        },
      }),
    ).toString();
    file.contents = Buffer.from(contents);

    this.push(file);

    return cb();
  }))
  .pipe(gulpIf(ENV.isModeDev(), sourcemaps.write('./')))
  .pipe(gulp.dest(getDestPath())));

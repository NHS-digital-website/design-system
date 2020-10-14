'use strict'

const gulp = require('gulp')
const sass = require('gulp-sass')
const csso = require('gulp-csso')
const gulpIf = require('gulp-if')
const lint = require('gulp-stylelint')
const sourcemaps = require('gulp-sourcemaps')
const autoprefixer = require('gulp-autoprefixer')

sass.compiler = require('dart-sass')

gulp.task('scss:lint', () => {
  return gulp.src([
      `${PATHS.src.root}/**/*.scss`
    ])
    .pipe(lint({
      failAfterError: ENV.IS_PROD,
      reporters: [
        { formatter: 'string', console: true }
      ]
    }));
})

gulp.task('scss:compile', () => {
  return gulp.src(`${PATHS.src.root}/**/*.scss`)
    .pipe(gulpIf(ENV.IS_DEV, sourcemaps.init()))
    .pipe(sass({
      includePaths: ['node_modules', PATHS.src.root],
      outputStyle: ENV.IS_PROD ? 'compressed' : 'expanded',
    }).on('error', sass.logError))
    .pipe(gulpIf(ENV.IS_PROD, csso()))
    .pipe(gulpIf(ENV.IS_PROD, autoprefixer()))
    .pipe(gulpIf(ENV.IS_DEV, sourcemaps.write('./')))
    .pipe(gulp.dest(PATHS.public.stylesheets))
    /* .pipe(reload({
      stream: true
    })); */
})

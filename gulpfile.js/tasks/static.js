/* global PATHS */

const gulp = require('gulp');
const newer = require('gulp-newer');

const getDestPath = () => PATHS.dist.static;

gulp.task('static:copy', () => gulp.src(`${PATHS.src.static}/**/*`)
  .pipe(newer(getDestPath()))
  .pipe(gulp.dest(getDestPath())));

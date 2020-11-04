/* global ENV PATHS */

const gulp = require('gulp')
const newer = require('gulp-newer')

const getDestPath = () => {
  return PATHS.dist.static;
};

gulp.task('static:copy', (done) => {
  return gulp.src(`${PATHS.src.static}/**/*`)
    .pipe(newer(getDestPath()))
    .pipe(gulp.dest(getDestPath()));
});

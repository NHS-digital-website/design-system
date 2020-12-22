/* global ENV PATHS */

const gulp = require('gulp')
const gulpIf = require('gulp-if')
const newer = require('gulp-newer')
const imagemin = require('gulp-imagemin')

const getDestPath = () => {
  return PATHS.dist.images;
};

gulp.task('images:copy', (done) => {
  return gulp.src(`${PATHS.src.images}/**/*`)
    .pipe(newer(getDestPath()))
    .pipe(gulpIf(ENV.isModeProd(), imagemin()))
    .pipe(gulp.dest(getDestPath()));
});

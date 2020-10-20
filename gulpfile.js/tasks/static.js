/* global ENV PATHS */

const gulp = require('gulp')
const newer = require('gulp-newer')

const getDestPath = () => {
  let destPath = PATHS.lab.root;
  if (ENV.isTargetDist()) {
    destPath = PATHS.dist.static;
  }
  return destPath;
};

gulp.task('static:copy', (done) => {
  return gulp.src(`${PATHS.src.static}/**/*`)
    .pipe(newer(getDestPath()))
    .pipe(gulp.dest(getDestPath()));
});

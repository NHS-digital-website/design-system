/* global ENV PATHS */

const gulp = require('gulp')

gulp.task('watch', (done) => {
  if (ENV.isModeDev()) {
    gulp.watch(`${PATHS.src.root}/**/*.scss`, gulp.series('scss:lint', 'scss:compile'));
    // gulp.watch(`${PATHS.src.root}/**/*.js`, gulp.series('js:lint', 'js:compile'));
    gulp.watch(`${PATHS.src.static}/**/*.*`, gulp.series('static:copy'));
  }
  done();
});

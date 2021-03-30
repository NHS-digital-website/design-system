/* global PATHS */

const gulp = require('gulp');
const newer = require('gulp-newer');

const getDestPath = () => PATHS.dist.fonts;

gulp.task('fonts:copy', () => gulp.src(`${PATHS.src.fonts}/**/*`).pipe(newer(getDestPath())).pipe(gulp.dest(getDestPath())));

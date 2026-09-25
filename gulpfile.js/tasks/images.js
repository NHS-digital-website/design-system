/* global PATHS */

const gulp = require('gulp');
const newer = require('gulp-newer');

const getDestPath = () => PATHS.dist.images;

gulp.task('images:copy', () => gulp.src(`${PATHS.src.images}/**/*`)
    .pipe(newer(getDestPath()))
    .pipe(gulp.dest(getDestPath())));

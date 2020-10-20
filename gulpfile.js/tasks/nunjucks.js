/* global ENV PATHS BROWSER_SYNC */

const reload = BROWSER_SYNC.reload;

const gulp = require('gulp')
const gulpIf = require('gulp-if')
const nunjucks = require('nunjucks')
const newer = require('gulp-newer')
const gulpNunjucks = require('gulp-nunjucks')

gulp.task('nunjucks:compile', () => {
  return gulp.src(`${PATHS.src.lab}/pages/**/*.njk`)
    .pipe(newer(PATHS.lab.root))
    .pipe(gulpNunjucks.compile({}, {
      env: new nunjucks.Environment([
        new nunjucks.FileSystemLoader(PATHS.src.root),
        new nunjucks.FileSystemLoader(PATHS.src.lab),
      ]),
    }))
    .pipe(gulp.dest(PATHS.lab.root))
    .pipe(gulpIf(ENV.isModeDev(), reload({
      stream: true
    })));
});

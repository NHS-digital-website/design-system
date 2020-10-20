/* global ENV PATHS BROWSER_SYNC */

const reload = BROWSER_SYNC.reload;

const gulp = require('gulp')
const sass = require('gulp-sass')
const csso = require('gulp-csso')
const gulpIf = require('gulp-if')
const lint = require('gulp-stylelint')
const sourcemaps = require('gulp-sourcemaps')
const autoprefixer = require('gulp-autoprefixer')

sass.compiler = require('dart-sass')

const getDestPath = () => {
  let destPath = PATHS.lab.stylesheets;
  if (ENV.isTargetDist()) {
    destPath = PATHS.dist.root;
  }
  return destPath;
};

gulp.task('scss:lint', () => {
  return gulp.src([
    `${PATHS.src.root}/**/*.scss`
  ])
  .pipe(lint({
    failAfterError: ENV.isModeProd(),
    reporters: [
      { formatter: 'string', console: true }
    ]
  }));
});

gulp.task('scss:compile', () => {
  return gulp.src(`${PATHS.src.root}/**/*.scss`)
    .pipe(gulpIf(ENV.isModeDev(), sourcemaps.init()))
    .pipe(sass({
      includePaths: ['node_modules', PATHS.src.root],
      outputStyle: ENV.isModeProd() ? 'compressed' : 'expanded',
    }).on('error', sass.logError))
    .pipe(gulpIf(ENV.isModeProd(), csso()))
    .pipe(gulpIf(ENV.isModeProd(), autoprefixer()))
    .pipe(gulpIf(ENV.isModeDev(), sourcemaps.write('./')))
    .pipe(gulp.dest(getDestPath()))
    .pipe(gulpIf(ENV.isModeDev() && ENV.isTargetLab(), reload({
      stream: true
    })));
});

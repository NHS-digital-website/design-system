const gulp = require('gulp')
const sass = require('gulp-sass')
const csso = require('gulp-csso')
const gulpIf = require('gulp-if')
const lint = require('gulp-stylelint')
const sourcemaps = require('gulp-sourcemaps')
const autoprefixer = require('gulp-autoprefixer')

sass.compiler = require('dart-sass')

const lintSCSS = () => {
  return gulp.src([
    `${PATHS.src.root}/**/*.scss`
  ])
  .pipe(lint({
    failAfterError: ENV.isModeProd,
    reporters: [
      { formatter: 'string', console: true }
    ]
  }));
};

const compileSCSS  = () => {
  return gulp.src(`${PATHS.src.root}/**/*.scss`)
    .pipe(gulpIf(ENV.isModeDev, sourcemaps.init()))
    .pipe(sass({
      includePaths: ['node_modules', PATHS.src.root],
      outputStyle: ENV.isModeProd ? 'compressed' : 'expanded',
    }).on('error', sass.logError))
    .pipe(gulpIf(ENV.isModeProd, csso()))
    .pipe(gulpIf(ENV.isModeProd, autoprefixer()))
    .pipe(gulpIf(ENV.isModeDev, sourcemaps.write('./')))
    .pipe(gulp.dest(`${ENV.getDestPath()}/stylesheets`))
    /* .pipe(reload({
      stream: true
    })); */
}

module.exports = gulp.series(lintSCSS, compileSCSS);

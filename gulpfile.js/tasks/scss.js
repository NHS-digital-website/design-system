/* global ENV PATHS */

const gulp = require('gulp');
const path = require('path');
const sass = require('gulp-sass')(require('sass'));
const csso = require('gulp-csso');
const gulpIf = require('gulp-if');
const sourcemaps = require('gulp-sourcemaps');
const { finished } = require('stream/promises');
const through2 = require('through2').default;
const rework = require('rework');
const reworkFunction = require('rework-plugin-function');

const getDestPath = () => PATHS.dist.stylesheets;

gulp.task('scss:lint', async () => {
  const { default: stylelint } = await import('stylelint');
  const { errored, report } = await stylelint.lint({
    files: `${PATHS.src.root}/**/*.scss`,
    configFile: path.resolve('.stylelintrc.yml'),
    formatter: 'string',
  });

  if (report) {
    process.stdout.write(report);
  }

  if (ENV.isModeProd() && errored) {
    throw new Error('SCSS lint errors found.');
  }
});

gulp.task('scss:compile', async () => {
  const { default: autoprefixer } = await import('gulp-autoprefixer');
  const stream = gulp.src(`${PATHS.src.root}/**/*.scss`)
    .pipe(gulpIf(ENV.isModeDev(), sourcemaps.init()))
    .pipe(sass({
      loadPaths: [
        path.resolve('node_modules'),
        path.resolve('node_modules/sass-mq'),
        path.resolve(PATHS.src.root),
      ],
      outputStyle: ENV.isModeProd() ? 'compressed' : 'expanded',
    }).on('error', sass.logError))
    .pipe(gulpIf(ENV.isModeProd(), csso()))
    .pipe(gulpIf(ENV.isModeProd(), autoprefixer()))
  // Not perfect, but this should match and replace relative asset urls in most cases
  .pipe(through2.obj(function rewriteUrls(file, _, cb) {
    const contents = rework(file.contents.toString(), file.path).use(
      reworkFunction({
        url(url) {
          let replacedUrl = url;
          if (url.match(/\.\.\/assets\/.+\..+/)) {
            const filePath = url.split('/assets/')[1];
            replacedUrl = `url("../${filePath}")`;
          }
          return replacedUrl;
        },
      }),
    ).toString();
    file.contents = Buffer.from(contents);

    this.push(file);

    return cb();
  }))
  .pipe(gulpIf(ENV.isModeDev(), sourcemaps.write('./')))
    .pipe(gulp.dest(getDestPath()));
  await finished(stream);
});

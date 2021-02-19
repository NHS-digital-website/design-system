const gulp = require('gulp');
const fileReader = require('./lib/file-reader');

// Globally expose config objects
global.CONFIG = require('./path-config');
global.ENV = require('./build-env');

global.PATHS = global.CONFIG.PATHS;
global.VERSION = fileReader.read(`${global.PATHS.src.root}/.versionrc`);

// Load up the Gulp tasks
require('./tasks/init');
require('./tasks/clean');
require('./tasks/scss');
require('./tasks/js');
require('./tasks/watch');
require('./tasks/static');
require('./tasks/images');

gulp.task('build:dist',
  gulp.series(
    'init:dist',
    'clean:dest',
    'scss:lint',
    'scss:compile',
    'images:copy',
    'js:lint',
    'js:compile',
    'static:copy',
  ));

gulp.task('build:dist:watch',
  gulp.series(
    'build:dist',
    'watch',
  ));

gulp.task('build:package',
  gulp.series(
    'init:package',
    'clean:dest',
    'scss:lint',
    'js:lint',
  ));

gulp.task('build:package:watch',
  gulp.series(
    'build:package',
    'watch',
  ));

gulp.task('default', gulp.series('build:dist'));

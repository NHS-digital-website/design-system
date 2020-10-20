const fileReader = require('./lib/file-reader')

const gulp = require('gulp')

// Globally expose config objects
global.CONFIG = require('./path-config')
global.ENV = require('./build-env')
global.PATHS = CONFIG.PATHS
global.VERSION = fileReader.read(`${PATHS.src.root}/.versionrc`);

// Load up the Gulp tasks
require('./tasks/init')
require('./tasks/serve')
require('./tasks/clean')
require('./tasks/nunjucks')
require('./tasks/scss')
require('./tasks/js')
require('./tasks/watch')
require('./tasks/static')

gulp.task('build:lab',
  gulp.series(
    'init:lab',
    'clean:dest',
    'scss:lint',
    'scss:compile',
    'js:lint',
    'js:compile',
    'nunjucks:compile',
    'static:copy',
    'watch',
    'serve:lab',
  )
);

gulp.task('build:dist',
  gulp.series(
    'init:dist',
    'clean:dest',
    'scss:lint',
    'scss:compile',
    'js:lint',
    'js:compile',
    'static:copy',
  )
);

gulp.task('build:package',
  gulp.series(
    'init:package',
    'clean:dest',
    'scss:lint',
    'js:lint',
  )
);

gulp.task('default', gulp.series('build:lab'));

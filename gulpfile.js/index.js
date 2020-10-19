const gulp = require('gulp')
const requireDir = require('require-dir')

// Manually load up the tasks
const scssTask = require('./tasks/scss');

// Globally expose config objects
global.CONFIG = require('./config.js')
global.ENV = require('./environment.js')
global.PATHS = CONFIG.PATHS

// Manually define the Gulp tasks
gulp.task('scss', scssTask);
gulp.task('default', scssTask);

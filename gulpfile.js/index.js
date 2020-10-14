const gulp = require('gulp')
const requireDir = require('require-dir')

// Globally expose config objects
global.CONFIG = require('./config.js')
global.ENV = require('./environment.js')
global.PATHS = CONFIG.PATHS

// Require all tasks in gulpfile.js/tasks, including subfolders
requireDir('./tasks', { recurse: true })

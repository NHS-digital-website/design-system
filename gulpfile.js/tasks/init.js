/* global ENV PATHS VERSION */

const gulp = require('gulp')
const chalklet = require('chalklet')

const logInfo = () => {
  const text = '   NHS Digital UI toolkit   ';
  const colorOptions = {
    type: 'hex',
    text: { value: '#003088' },
    bg: { value: '#ffffff' }
  };

  const fontOptions = {
    horizontalLayout: 'default',
    verticalLayout: 'default'
  };

  console.log('\n\n\n');
  console.log(chalklet.generate(text, colorOptions, fontOptions));
  console.log(`\n    version: ${VERSION} | build target: ${ENV.getBuildTarget()} | build mode: ${ENV.getBuildMode()}`);
  console.log('\n\n\n');
};

gulp.task('init:dist', (done) => {
  ENV.setBuildTarget(ENV.BUILD_TARGETS.DIST);
  logInfo();
  done();
});

gulp.task('init:package', (done) => {
  ENV.setBuildTarget(ENV.BUILD_TARGETS.PACKAGE);
  logInfo();
  done();
});

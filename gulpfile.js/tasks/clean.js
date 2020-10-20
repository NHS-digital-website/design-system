/* global ENV PATHS */

const gulp = require('gulp')
const del = require('del')

const getDestPath = () => {
  let destPath = PATHS.lab.root;
  if (ENV.isTargetDist()) {
    destPath = PATHS.dist.root;
  } else if (ENV.isTargetPackage()) {
    destPath = PATHS.package.root;
  }
  console.log('dest path: ', destPath, ENV.isTargetDist());
  return destPath;
};

const getProtectedFiles = () => {
  let protectedFiles = [
    `!${PATHS.lab.root}/README.md`
  ];
  if (ENV.isTargetDist()) {
    protectedFiles = [
      `!${PATHS.dist.root}/README.md`
    ]
  } else if (ENV.isTargetPackage()) {
    protectedFiles = [
      `!${PATHS.package.root}/README.md`,
      `!${PATHS.package.root}/package.json`
    ]
  }
  return protectedFiles;
}

gulp.task('clean:dest', (done) => {
  del.sync([`${getDestPath()}/*`, ...getProtectedFiles()]);
  done();
});

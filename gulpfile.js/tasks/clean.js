/* global ENV PATHS */

const gulp = require('gulp')
const del = require('del')

const getDestPath = () => {
  let destPath = PATHS.dist.root;
  if (ENV.isTargetPackage()) {
    destPath = PATHS.package.root;
  }
  return destPath;
};

const getProtectedFiles = () => {
  let protectedFiles = [
    `!${PATHS.dist.root}/README.md`
  ];
  if (ENV.isTargetPackage()) {
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

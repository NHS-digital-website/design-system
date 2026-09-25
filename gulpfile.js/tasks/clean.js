/* global ENV PATHS */

const gulp = require('gulp');
const fs = require('fs');
const path = require('path');

const getDestPath = () => {
  let destPath = PATHS.dist.root;
  if (ENV.isTargetPackage()) {
    destPath = PATHS.package.root;
  }
  return destPath;
};

gulp.task('clean:dest', (done) => {
  const destPath = getDestPath();
  const protectedNames = ENV.isTargetPackage() ? ['README.md', 'package.json'] : ['README.md', 'test'];
  if (fs.existsSync(destPath)) {
    fs.readdirSync(destPath).forEach((name) => {
      if (!protectedNames.includes(name)) {
        fs.rmSync(path.join(destPath, name), { recursive: true, force: true });
      }
    });
  }
  done();
});

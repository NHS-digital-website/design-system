const ENV = require('./build-env')

module.exports = (() => {
  // Main paths
  const SOURCE_PATH = './src/nhsd';
  const DIST_PATH = './dist';
  const PACKAGE_PATH = './package';

  // Route config
  const PATHS = {
    src: {
      root: SOURCE_PATH,
      assets: `${SOURCE_PATH}/assets`,
      images: `${SOURCE_PATH}/assets/images`,
      scss: `${SOURCE_PATH}/scss-foundations`,
      components: `${SOURCE_PATH}/components`,
      lab: `${SOURCE_PATH}/lab`,
      static: `${SOURCE_PATH}/static`,
    },

    dist: {
      root: DIST_PATH,
      static: `${DIST_PATH}/static`,
      images: `${DIST_PATH}/images`,
      stylesheets: `${DIST_PATH}/stylesheets`,
    },

    package: {
      root: PACKAGE_PATH,
    },
  };

  // Return app configuration
  return {
    PATHS,
  };
})();

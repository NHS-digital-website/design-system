const ENV = require('./build-env')

module.exports = (() => {
  // Main paths
  const SOURCE_PATH = './src';
  const LAB_PATH = './lab';
  const DIST_PATH = './dist';
  const PACKAGE_PATH = './package';

  // Route config
  const PATHS = {
    src: {
      root: SOURCE_PATH,
      assets: `${SOURCE_PATH}/assets`,
      scss: `${SOURCE_PATH}/scss-foundations`,
      components: `${SOURCE_PATH}/components`,
      lab: `${SOURCE_PATH}/lab`,
      static: `${SOURCE_PATH}/static`,
    },

    lab: {
      root: `${LAB_PATH}`,
      assets: `${LAB_PATH}/assets`,
      icons: `${LAB_PATH}/assets/icons`,
      images: `${LAB_PATH}/assets/images`,
      stylesheets: `${LAB_PATH}/assets/stylesheets`,
      scripts: `${LAB_PATH}/assets/scripts`,
    },

    dist: {
      root: DIST_PATH,
      static: `${DIST_PATH}/static`,
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

const ENV = require('./environment')

module.exports = (() => {
  // Main paths
  const SOURCE_PATH = './src';
  const DIST_PATH = './dist';
  const PACKAGE_PATH = './package';
  const PUBLIC_PATH = './public';

  // Route config
  const PATHS = {
    src: {
      root: SOURCE_PATH,
      assets: `${SOURCE_PATH}/assets`,
      scss: `${SOURCE_PATH}/scss-foundations`,
      components: `${SOURCE_PATH}/components`,
      constructionSite: `${SOURCE_PATH}/construction-site`
    },

    dist: {
      root: DIST_PATH,
    },

    package: {
      root: `${PACKAGE_PATH}`,
    },

    public: {
      root: `${PUBLIC_PATH}`,
      assets: `${PUBLIC_PATH}/assets`,
      icons: `${PUBLIC_PATH}/assets/icons`,
      images: `${PUBLIC_PATH}/assets/images`,
      stylesheets: `${PUBLIC_PATH}/assets/stylesheets`,
      scripts: `${PUBLIC_PATH}/assets/scripts`,
    },
  };

  // Return app configuration
  return {
    PATHS,
  };
})();

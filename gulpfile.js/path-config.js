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
      fonts: `${SOURCE_PATH}/assets/fonts`,
      icons: `${SOURCE_PATH}/assets/icons`,
    },

    gulp: {
      root: './gulpfile.js',
    },

    dist: {
      root: DIST_PATH,
      static: `${DIST_PATH}/static`,
      images: `${DIST_PATH}/images`,
      stylesheets: `${DIST_PATH}/stylesheets`,
      fonts: `${DIST_PATH}/fonts`,
      icons: `${DIST_PATH}/icons`,
      hexIcons: `${DIST_PATH}/icons/hex`,
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

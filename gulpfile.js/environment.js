module.exports = (() => {
  const TARGETS = {
    DIST: 'dist',
    PACKAGE: 'package',
    PUBLIC: 'public',
  };

  const MODES = {
    DEV: 'dev',
    PROD: 'prod',
  };

  const DEFAULT_TARGET = TARGETS.PUBLIC;
  const DEFAULT_MODE = MODES.DEV;

  const getTarget = () => {
    const params = global.process.argv;
    let target = DEFAULT_TARGET;

    Object.keys(params).forEach((key) => {
      const param = params[key];

      if (param.includes('-target')) {
        const [, targetValue] = param.split('=');
        target = objectValueExists(targetValue, TARGETS) ? targetValue : target;
      }
    });

    return target;
  };

  const getMode = () => {
    const params = global.process.argv;
    let mode = DEFAULT_MODE;

    Object.keys(params).forEach((key) => {
      const param = params[key];

      if (param.includes('-mode')) {
        const [, modeValue] = param.split('=');
        mode = objectValueExists(modeValue, MODES) ? modeValue : mode;
      }
    });

    return mode;
  };

  const objectValueExists = (value, obj) => {
    return Object.values(obj).includes(value);
  };

  const isTargetDist = getTarget() === TARGETS.DIST;
  const isTargetPackage = getTarget() === TARGETS.PACKAGE;
  const isTargetPublic = getTarget() === TARGETS.PUBLIC;

  const isModeDev = getMode() === MODES.DEV;
  const isModeProd = getMode() != MODES.DEV;

  const getDestPath = () => {
    let destPath = PATHS.public.root;

    if (ENV.isTargetDist) {
      destPath = PATHS.dist.root;
    } else if (ENV.isTargetPackage) {
      destPath = PATHS.package.root;
    }
    return destPath;
  };

  // Return environment constants
  return {
    TARGETS,
    MODES,
    isTargetDist,
    isTargetPackage,
    isTargetPublic,
    isModeDev,
    isModeProd,
    getMode,
    getTarget,
    getDestPath,
  };
})();

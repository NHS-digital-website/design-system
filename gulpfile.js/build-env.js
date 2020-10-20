module.exports = (() => {
  const BUILD_TARGETS = {
    LAB: 'lab',
    DIST: 'dist',
    PACKAGE: 'package',
  };

  const BUILD_MODES = {
    DEV: 'dev',
    PROD: 'prod',
  };

  const DEFAULT_BUILD_TARGET = BUILD_TARGETS.LAB;
  const DEFAULT_BUILD_MODE = BUILD_MODES.DEV;
  let buildTarget = DEFAULT_BUILD_TARGET;

  const getBuildTarget = () => {
    return buildTarget;
  };

  const setBuildTarget = (newBuildTarget) => {
    console.log('[build-env] - setBuildTarget() - newBuildTarget: ', newBuildTarget);
    if(Object.values(BUILD_TARGETS).indexOf(newBuildTarget) > -1) {
      buildTarget = newBuildTarget;
    }
  };

  const isTargetLab = () => {
    return getBuildTarget() === ENV.BUILD_TARGETS.LAB;
  }

  const isTargetDist = () => {
    return getBuildTarget() === ENV.BUILD_TARGETS.DIST;
  }

  const isTargetPackage = () => {
    return getBuildTarget() === ENV.BUILD_TARGETS.PACKAGE;
  }

  const getBuildMode = () => {
    const params = global.process.argv;
    let buildMode = DEFAULT_BUILD_MODE;

    Object.keys(params).forEach((key) => {
      const param = params[key];

      if (param.includes('-buildMode')) {
        const [, modeValue] = param.split('=');
        buildMode = objectValueExists(modeValue, BUILD_MODES) ? modeValue : buildMode;
      }
    });

    return buildMode;
  };

  const objectValueExists = (value, obj) => {
    return Object.values(obj).includes(value);
  };

  const isModeDev = () => {
    return getBuildMode() === BUILD_MODES.DEV;
  };

  const isModeProd = () => {
    return getBuildMode() != BUILD_MODES.DEV;
  };

  // Return environment constants
  return {
    BUILD_TARGETS,
    isTargetLab,
    isTargetDist,
    isTargetPackage,
    getBuildTarget,
    setBuildTarget,

    BUILD_MODES,
    isModeDev,
    isModeProd,
    getBuildMode,
  };
})();

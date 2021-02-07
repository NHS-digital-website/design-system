/* global ENV */

module.exports = (() => {
  const BUILD_TARGETS = {
    DIST: 'dist',
    PACKAGE: 'package',
  };

  const BUILD_MODES = {
    DEV: 'dev',
    PROD: 'prod',
  };

  const DEFAULT_BUILD_TARGET = BUILD_TARGETS.DIST;
  const DEFAULT_BUILD_MODE = BUILD_MODES.DEV;
  let buildTarget = DEFAULT_BUILD_TARGET;

  const getBuildTarget = () => buildTarget;

  const setBuildTarget = (newBuildTarget) => {
    if (Object.values(BUILD_TARGETS).indexOf(newBuildTarget) > -1) {
      buildTarget = newBuildTarget;
    }
  };

  const isTargetDist = () => getBuildTarget() === ENV.BUILD_TARGETS.DIST;

  const isTargetPackage = () => getBuildTarget() === ENV.BUILD_TARGETS.PACKAGE;

  const objectValueExists = (value, obj) => Object.values(obj).includes(value);

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

  const isModeDev = () => getBuildMode() === BUILD_MODES.DEV;

  const isModeProd = () => getBuildMode() !== BUILD_MODES.DEV;

  // Return environment constants
  return {
    BUILD_TARGETS,
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

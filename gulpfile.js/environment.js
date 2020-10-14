module.exports = (() => {
  const PROD = 'prod';
  const DEV = 'dev';
  const DEFAULT_ENV = DEV;

  const getEnv = () => {
    const params = global.process.argv;
    let env = DEFAULT_ENV;

    Object.keys(params).forEach((key) => {
      const param = params[key];

      if (param.includes('-env')) {
        const [, envValue] = param.split('=');
        env = envValue;
      }
    });

    return env;
  };

  const isProd = getEnv() === PROD;
  const isDev = getEnv() !== PROD;

  // Return environment constants
  return {
    PROD: PROD,
    DEV: DEV,
    IS_PROD: isProd,
    IS_DEV: isDev
  }
})();

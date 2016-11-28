module.exports = {
  env: process.env.NODE_ENV || process.env.npm_package_config_env,
  serverPort: process.env.PORT || process.env.npm_package_config_serverPort,
  serverHost: process.env.HOST || process.env.npm_package_config_serverHost,
  publicPath: process.env.PUBLIC_PATH || process.env.npm_package_config_publicPath
};

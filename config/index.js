const {buildWebpackConfig} = require('./webpack');

exports.env = process.env.NODE_ENV || process.env.npm_package_config_env;

exports.serverPort = process.env.SERVER_PORT || process.env.PORT || process.env.npm_package_config_serverPort;
exports.serverHost = process.env.SERVER_HOST || process.env.HOST || process.env.npm_package_config_serverHost;
exports.publicPath = process.env.PUBLIC_PATH || process.env.npm_package_config_publicPath;

exports.webpackServer = buildWebpackConfig(
  Object.assign({mode: 'server'}, exports)
);
exports.webpackClient = buildWebpackConfig(
  Object.assign({mode: 'client'}, exports)
);

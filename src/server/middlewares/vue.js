const express = require('express');

/*
* Returns the Vue.js production rendering middleware.
*/

exports.vueBundleRenderer = function (config) {
  let {bundleRenderer} = require('express-vue-builder');

  return bundleRenderer(`${__dirname}/../../../dist/server/bundle.js`);
}

/*
* Returns the Vue.js development server middleware.
*/

exports.vueDevServer = function (config) {
  let {build} = require('vue-webpack');
  let {devServer} = require('express-vue-dev');

  return devServer({
    server: build({
      mode: 'server',
      inputFilePath: `${__dirname}/../../app/server-entry.js`
    }),
    client: build({
      mode: 'client',
      inputFilePath: `${__dirname}/../../app/client-entry.js`,
      publicPath: config.publicPath
    })
  });
}

/*
* Returns the Vue middleware which handles the rendering.
*/

exports.vueHandler = function(config) {
  let isDev = config.env === 'development';

  if (isDev) {
    return exports.vueDevServer(config);
  }
  else {
    return exports.vueBundleRenderer(config);
  }
};

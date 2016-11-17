const express = require('express');

/*
* Returns the Vue.js production rendering middleware.
*/

function vueBundleRenderer () {
  let {bundleRenderer} = require('express-vue-builder');

  return bundleRenderer(`${__dirname}/../../../dist/server/bundle.js`);
}

/*
* Returns the Vue.js development server middleware.
*/

function vueDevServer (server) {
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
      publicPath: server.config.publicPath
    })
  });
}

/*
* Returns the Vue middleware which handles the rendering.
*/

function vueServer (server) {
  let isDev = server.config.env === 'development';

  if (isDev) {
    return vueDevServer(server);
  }
  else {
    return vueBundleRenderer();
  }
}

/*
* Module interface.
*/

module.exports = {
  vueBundleRenderer,
  vueDevServer,
  vueServer
};

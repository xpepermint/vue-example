const express = require('express');
const {join} = require('path');

/*
* Returns the Vue.js production rendering middleware.
*/

exports.vueBundleRenderer = function () {
  let {bundleRenderer} = require('express-vue-builder');
  let bundlePath = join(__dirname, '..', '..', '..', 'dist', 'server', 'bundle.js');

  return bundleRenderer(bundlePath);
}

/*
* Returns the Vue.js development server middleware.
*/

exports.vueDevServer = function ({settings}) {
  let webpack = require('../../config/webpack');
  let {devServer} = require('express-vue-dev');
  let options = Object.assign({}, settings, {env: 'development'});

  return devServer({
    server: webpack('server', options),
    client: webpack('client', options)
  });
}

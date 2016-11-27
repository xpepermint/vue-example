const express = require('express');

/*
* Returns a middleware for serving static files.
*/

exports.publicServer = function () {
  return express.static('public');
}

/*
* Returns a middleware for serving compiled public bundles.
*/

exports.bundlesServer = function () {
  return express.static('dist/client');
}

/*
* Returns a middleware which renders the Vue.js application.
*/

exports.appServer = function ({settings}) {
  return (req, res) => {
    let ctx = {url: req.originalUrl};
    let page = req.vue.renderToStream(ctx);
    let {publicPath} = settings;

    res.write(`<!DOCTYPE html>`);
    page.on('init', () => {
      res.write(`<html lang="en">`);
      res.write(`<head>`);
      res.write(  `<meta charset="utf-8">`);
      res.write(  `<title>Example</title>`);
      res.write(  `<link href="${publicPath}bundle.css" rel='stylesheet' type='text/css'>`);
      res.write(`</head>`);
      res.write(`<body>`);
    });
    page.on('data', (chunk) => {
      res.write(chunk);
    });
    page.on('end', () => {
      res.write(  `<script>window.STATE = JSON.parse('${JSON.stringify(ctx.state)}')</script>`);
      res.write(  `<script src="${publicPath}bundle.js"></script>`);
      res.write(`</body>`);
      res.write(`</html>`);
      res.end();
    });
    page.on('error', function (error) {
      console.error(error);
      res.status(500).send('Server Error');
    });
  };
}

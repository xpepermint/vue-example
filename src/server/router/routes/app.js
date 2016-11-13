const express = require('express');

/*
* Returns a middleware for serving compiled public bundles.
*/

exports.bundles = express.static('dist/client');

/*
* Returns a middleware for serving static files.
*/

exports.public = express.static('public');

/*
* Returns a middleware which renders the Vue.js application.
*/

exports.render = (req, res) => {
  let page = req.vue.renderToStream();
  let publicPath = req.config.publicPath;

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

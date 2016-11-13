const express = require('express');
const appRoutes = require('./routes/app');
const usersRoutes = require('./routes/users');

exports.router = function (config) {
  const router = express.Router({
    mergeParams: true
  });

  router.post('/users', usersRoutes.create);

  router.use('/', appRoutes.public);
  router.use('/', appRoutes.bundles);
  router.use('/*', appRoutes.render);

  return router;
};

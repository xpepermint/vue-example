const express = require('express');
const {vueHandler} = require('./middlewares/vue');
const {router} = require('./router');

/*
* HTTP server class.
*/

exports.Server = class {

  /*
  * Class constructor.
  */

  constructor(config) {
    this.config = Object.assign(config);

    this.app = null;
    this.server = null;
  }

  /*
  * Returns a promise which starts the server.
  */

  listen() {
    return new Promise((resolve) => {
      if (this.server) return this;

      this.app = express();
      this.app.use((req, res, next) => {
        req.config = this.config;
        next();
      });
      this.app.use(vueHandler(this.config));
      this.app.use(router(this.config));

      let {serverPort, serverHost} = this.config;
      this.server = this.app.listen(serverPort, serverHost, resolve);
    });
  }

  /*
  * Returns a promise which stops the server.
  */

  close() {
    return new Promise((resolve) => {
      if (!this.server) return this;

      this.server.close(resolve);

      this.server = null;
      this.app = null;
    });
  }

}

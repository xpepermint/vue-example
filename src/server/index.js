const express = require('express');
const {vueServer} = require('./middlewares/vue');
const {
  appServer,
  bundlesServer,
  publicServer
} = require('./middlewares/app');

/*
* HTTP server class.
*/

class Server {

  /*
  * Class constructor.
  */

  constructor (config) {
    this.config = config;
    this.app = null;
    this.server = null;
  }

  /*
  * Returns a promise which starts the server.
  */

  async listen () {
    if (this.server) return this;

    this.app = express();
    this.app.use('/', publicServer(this));
    this.app.use('/', bundlesServer(this));
    this.app.use('/', vueServer(this));
    this.app.use('/*', appServer(this));

    await new Promise((resolve) => {
      let {serverPort, serverHost} = this.config;
      this.server = this.app.listen(serverPort, serverHost, resolve);
    });

    return this;
  }

  /*
  * Returns a promise which stops the server.
  */

  async close () {
    if (!this.server) return this;

    await new Promise((resolve) => {
      this.server.close(resolve);
    });
    this.server = null;
    this.app = null;

    return this;
  }

}

/*
* Module interface.
*/

module.exports = {
  Server
};

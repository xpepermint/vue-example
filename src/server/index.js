const express = require('express');
const {
  vueBundleRenderer,
  vueDevServer
} = require('./middlewares/vue');
const {
  appServer,
  bundlesServer,
  publicServer
} = require('./middlewares/app');

/*
* HTTP server class.
*/

exports.Server = class {

  /*
  * Class constructor.
  */

  constructor (settings) {
    this.settings = settings;
    this.app = null;
    this.server = null;
  }

  /*
  * Returns a promise which starts the server.
  */

  async listen () {
    if (this.server) return this;

    let isDev = this.settings.env === 'development';

    this.app = express();
    this.app.use(publicServer(this));
    if (isDev) {
      this.app.use(vueDevServer(this));
    }
    else {
      this.app.use(bundlesServer(this));
      this.app.use(vueBundleRenderer(this));
    }
    this.app.use('/*', appServer(this));

    await new Promise((resolve) => {
      let {serverPort, serverHost} = this.settings;
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

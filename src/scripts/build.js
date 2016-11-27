const {VueBuilder} = require('vue-builder');
const settings = require('../config/settings');
const webpack = require('../config/webpack');

let options = webpack(
  process.argv[2],
  Object.assign({}, settings, {env: 'production'})
);
let builder = new VueBuilder(options);
builder.build().catch(console.log);

const {build} = require('vue-webpack');
const {VueBuilder} = require('vue-builder');

let options = build({
  env: 'production',
  mode: 'server',
  inputFilePath: `${__dirname}/../app/server-entry.js`,
  outputPath: `${__dirname}/../../dist/server`
});

let builder = new VueBuilder(options);
builder.build().catch(console.log);

const {Server} = require('..');
const settings = require('../config/settings');

const app = new Server(settings);
app.listen().then(() => {
  console.log(`Listening on ${settings.serverHost}:${settings.serverPort}`);
}).catch((error) => {
  app.close();
  console.log('Error', error);
});

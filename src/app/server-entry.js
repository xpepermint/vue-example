import {app} from '.';

export default (ctx) => {
  app.$router.push(ctx.url);

  return Promise.all( // initialize components
    app.$router.getMatchedComponents().map(c => c.prefetch ? c.prefetch.call(app) : null)
  ).then(() => {
    ctx.state = app.$store.state; // set initial state
  }).then(() => {
    return app;
  });
};

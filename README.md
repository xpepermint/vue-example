# vue-example

> Vue.js example application (server-side rendering, router, vuex store, forms validation with contextable.js)

## Features

> This project is based on [vue-clie-template](https://github.com/xpepermint/vue-cli-template) and requires Node.js v7+.

* Vue.js client-side and server-side rendering with [vue-builder](https://github.com/xpepermint/vue-builder).
* Vue.js navigation using the [vue-router](https://github.com/vuejs/vue-router).
* Application state/store management with [vuex](http://vuex.vuejs.org/en/).
* Data management, form validation and error handling with [contextable.js](https://github.com/xpepermint/contextablejs).

## Build Setup

```
# install dependencies
npm install

# [development]
# start application in development (it's a good practice to use `nodemon`
# in development which will automatically reload the server on code changes
# e.g. `nodemon --exec npm start`)
npm start

# [production]
# build production bundles, switch environment to production and run the server
npm run build
npm config set vue-example:env production
npm start
```

## Tutorials

Vue.js tutorials: [Vue.js Cheatsheet](https://xpepermint.gitbooks.io/vue-js-cheatsheet/)

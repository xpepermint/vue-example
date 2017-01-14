# vue-example

> Vue.js example application (server-side rendering, router, vuex store, form validation, i18n & l10n)

## Features

> This project is based on [vue-clie-template](https://github.com/xpepermint/vue-cli-template) and requires Node.js v7+.

* Client-side and server-side rendering with [vue-builder](https://github.com/xpepermint/vue-builder).
* Navigation using the [vue-router](https://github.com/vuejs/vue-router).
* Application state/store management with [vuex](http://vuex.vuejs.org/en/).
* Data management, form validation and error handling with [vue-rawmodel](https://github.com/xpepermint/vue-rawmodel).
* Internationalization (i18n) & Localization (l10n) using [vue-translated](https://github.com/xpepermint/vue-translated)

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

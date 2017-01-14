import Vue from 'vue';
import App from './components/app.vue';
import router from './router';
import store from './store';
import * as models from './models';
import i18n from './i18n';

export const app = new Vue(
  Vue.util.extend({
    i18n,
    router,
    store,
    models
  }, App)
);

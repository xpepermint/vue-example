import Vue from 'vue';
import App from './components/app.vue';
import router from './router';
import store from './store';
import context from './context';

export const app = new Vue(
  Vue.util.extend({
    router,
    store,
    context
  }, App)
);

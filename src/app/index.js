import Vue from 'vue';
import App from './components/app.vue';
import router from './router';
import store from './store';

export const app = new Vue({
  router,
  store,
  ...App
});

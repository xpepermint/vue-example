import Vue from 'vue';
import App from './components/app.vue';
import router from './router';

export const app = new Vue({
  router,
  ...App
});

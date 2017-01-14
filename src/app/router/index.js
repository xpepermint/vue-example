import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Home from '../components/home.vue';
import ApplicationState from '../components/application-state.vue';
import ApplicationModel from '../components/application-model.vue';
import AddUser from '../components/add-user.vue';

const routes = [
  {path: '/', component: Home},
  {path: '/application-state', component: ApplicationState},
  {path: '/application-model', component: ApplicationModel},
  {path: '/add-user', component: AddUser},
  {path: '*', redirect: '/'}
];

export default new Router({
  mode: 'history',
  routes
});

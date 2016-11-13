import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Home from '../components/home.vue';
import Foo from '../components/foo.vue';
import ApplicationState from '../components/application-state.vue';

const routes = [
  {path: '/', component: Home},
  {path: '/application-state', component: ApplicationState},
  {path: '/foo', component: Foo},
  {path: '*', redirect: '/'}
];

export default new Router({
  mode: 'history',
  routes
});

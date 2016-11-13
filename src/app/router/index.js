import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Home from '../components/home.vue';
import Foo from '../components/foo.vue';
import Bar from '../components/bar.vue';

const routes = [
  {path: '/', component: Home},
  {path: '/foo', component: Foo},
  {path: '/bar', component: Bar},
  {path: '*', redirect: '/'}
];

export default new Router({
  mode: 'history',
  routes
});

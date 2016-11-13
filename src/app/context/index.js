import Vue from 'vue';
import VueContextable from 'vue-contextable';
import {Context} from 'contextable';
import {userSchema} from './schemas/users';

Vue.use(VueContextable);

export default new class extends Context {
  constructor () {
    super();
    this.defineModel('User', userSchema);
  }
}

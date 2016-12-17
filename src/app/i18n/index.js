import Vue from 'vue';
import {I18n} from 'translated';
import VueTranslated from 'vue-translated';

Vue.use(VueTranslated);

const locale = 'en-US'; // replace this with `process.env.LOCALE` or similar
const messages = require(`./messages/${locale}`).default;
const formats = require(`./formats/${locale}`).default;

export default new I18n({locale, messages, formats});

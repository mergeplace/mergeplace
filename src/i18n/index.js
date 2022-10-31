import Vue from 'vue';

const userLang = localStorage.mergeLang;

Vue.i18n.add('en', require('./en.json'));
Vue.i18n.add('ua', require('./ua.json'));

const lang = Vue.i18n.locales().find((item) => {
  return item === userLang;
});

Vue.i18n.set(lang || 'ua');

Vue.i18n.fallback('ua');

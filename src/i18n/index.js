import Vue from 'vue';

const userLang =
  localStorage.mergeLang ||
  navigator.language.slice(0, 2) ||
  navigator.userLanguage.slice(0, 2);

Vue.i18n.add('en', require('./en.json'));
Vue.i18n.add('ua', require('./ua.json'));

const lang = Vue.i18n.locales().find((item) => {
  return item === userLang;
});

lang ? Vue.i18n.set(lang) : Vue.i18n.set('en');

Vue.i18n.fallback('en');

import Vue from 'vue';
import App from './App.vue';
import router from './router';
import VueCookies from 'vue-cookies';
import store from './store';
import DirectusSDK from "@directus/sdk-js";

import './i18n';

Vue.use(VueCookies);

Vue.config.productionTip = false;

Vue.prototype.$client = new DirectusSDK({
	url: "http://127.0.0.1",
  project: "_"
});

Vue.directive('scroll', {
	inserted(el, binding) {
		let f = function (evt) {
			if (binding.value(evt, el)) {
				window.removeEventListener('scroll', f)
			}
		}
		window.addEventListener('scroll', f)
	}
})

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app');

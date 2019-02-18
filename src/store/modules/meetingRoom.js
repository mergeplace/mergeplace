import DirectusSDK from "@directus/sdk-js";

const client = new DirectusSDK({
	url: "http://test.loc/directus/public/",
  project: "_"
});

const state = {
	price: 100,
	event: {
		dateStart: '',
		dateEnd: '',
		duration: ''
	},
	api: '',
	errors: []
}

const mutations = {
	setPrice(state, value) {
		state.price = value;
	},
	setApi(state, value) {
		state.api = value;
	},
	pushErrors(state, error) {
		state.errors.push(error);
	},
	changeEvent(state, eventData) {
		state.event.dateStart = eventData.dateStart;
		state.event.dateEnd = eventData.dateEnd;
		state.event.duration = eventData.duration;
	},
	removeEvent(state, value) {
		state.event.dateStart = value;
		state.event.dateEnd = value;
		state.event.duration = value;
	}
}

const actions = {
	getPrice({ commit }) {
		client.getItems("prices")
		.then(response => {
			commit('setPrice', response.data[0].hour)
		})
		.catch(error => commit('pushError', error));
	},
	getApi({ commit }) {
		client.getItems("api")
		.then(response => {
			let api = response.data.find(item => {
				return item.key == 'bmr';
			})
			commit('setApi', api.api)
		})
		.catch(error => commit('pushError', error));
	}
}

export default {
	namespaced: true,
	state,
	actions,
  mutations
}
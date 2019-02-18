import DirectusSDK from "@directus/sdk-js";

const client = new DirectusSDK({
	url: "http://test.loc/directus/public/",
  project: "_"
});

const state = {
	tariff: 'month',
	price: {
		month: 1000,
		week: 400,
		day: 80
	},
	errors: []
}

const mutations = {
	setTariff(state, value) {
		state.tariff = value;
	},
	setPrices(state, data) {
		for (const key in data) {
			if (state.price.hasOwnProperty(key)) {
				state.price[key] = data[key];
			}
		}
	},
	pushErrors(state, error) {
		state.errors.push(error);
	}
}

const actions = {
	getPrices({ commit }) {
		client.getItems("prices")
		.then(response => {
			commit('setPrices', response.data[0])
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
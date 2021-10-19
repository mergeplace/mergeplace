import axios from "axios";

const url = "http://api.merge.rocks";

const state = {
	tariff: 'month',
	price: {
		month: 2800,
		week: 400,
		day: 400,
  },
  api: '',
	errors: []
}

const mutations = {
	setTariff(state, value) {
		state.tariff = value;
	},
	setPrices(state, data) {
    Object.keys(state.price).forEach((key) => {
      state.price[key] = data[key];
    });
  },
  setApi(state, value) {
		state.api = value;
	},
	pushErrors(state, error) {
		state.errors.push(error);
	}
}

const actions = {
	getPrices({ commit }) {
		axios
      .get(`${url}/prices`)
      .then(response => {
        commit('setPrices', response.data[0]);
      })
      .catch(error => commit('pushError', error));
  },
  getApi({ commit }) {
		axios
      .get(`${url}/myapis`)
      .then(response => {
        const api = response.data[0].workplace;
        commit('setApi', api);
      })
      .catch(error => commit('pushError', error));
	},
}

export default {
	namespaced: true,
	state,
	actions,
  mutations
}
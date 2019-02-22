import axios from "axios";

const url = "http://api.merge.rocks";

const state = {
	price: 100,
	event: {
		dateStart: '',
		dateEnd: '',
		duration: ''
	},
	api: '',
	errors: [],
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
	},
}

const actions = {
	getPrice({ commit }) {
		axios
    .get(`${url}/prices`)
    .then(response => {
      commit('setPrice', response.data[0].hour)
    })
    .catch(error => commit('pushError', error));
	},
	getApi({ commit }) {
		axios
    .get(`${url}/myapis`)
    .then(response => {
      const api = response.data[0].meetingroom;
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
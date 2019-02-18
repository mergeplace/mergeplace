import Vue from 'vue'
import Vuex from 'vuex'
import events from './modules/events'
import workplace from './modules/workplace'
import meetingRoom from './modules/meetingRoom'
import slider from './modules/slider'
import VuexI18n from 'vuex-i18n';


Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
		events,
		workplace,
    meetingRoom,
    slider,
	},
})

Vue.use(VuexI18n.plugin, store);

export default store
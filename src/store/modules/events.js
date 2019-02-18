import axios from "axios";
import moment from 'moment';

function toDate(date) {
	const [day, month, year]= date.split(".")
  return new Date(year, month - 1, day)
}

const url = 'http://127.0.0.1:8090';

const state = {
	events: [],
	errors: []
}

const mutations = {
	addEvents(state, data) {
		state.events = data;
	},
	pushError(state, error) {
		state.errors.push(error);
	},
	deleteEvents(state) {
		state.events = [];
	}
}

const actions = {
  downloadEvents({commit}) {
    axios
      .get(`${url}/events`)
      .then(response => {
        const data = response.data.map(item => {
          if (item.date) {
            const eventDate = item.date;
            item.correctDate = eventDate;
            item.date = moment(eventDate).format('DD.MM.YYYY');
          }
          if (item.time_start && item.time_end)	item.time = `${item.time_start.trim()} - ${item.time_end.trim()}`;
          return item;
        });
        commit('addEvents', data);
      })
      .catch(error => {
        console.log('An error occurred:', error);
      });
  },
}

const getters = {
	getEvents: (state, getters, rootState) => {
		const lang = rootState.i18n.locale;
		const data = state.events.map(el => {
      return {
        date: el.date,
        correctDate: el.correctDate,
        id: el.id,
        link: el.link,
        price: el.price,
        time: el.time,
        title: el[`title_${lang}`],
        subtitle: el[`subtitle_${lang}`],
        text: el[`text_${lang}`],
      }
		})
		return data;
	},
	getFutureEvents: (state, getters) => {
		const data = getters.getEvents.filter(item => {
			return moment().isBefore(item.correctDate) || moment().isSame(item.correctDate);
		})
		return data;
	},
	getPastEvents: (state, getters) => {
		let data = getters.getEvents.filter(item => {
			return moment().isAfter(item.correctDate);
		})
		return data;
	}
}

export default {
	namespaced: true,
	state,
	actions,
	getters,
  mutations
}
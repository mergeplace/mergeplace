import DirectusSDK from "@directus/sdk-js";

const client = new DirectusSDK({
	url: "http://test.loc/directus/public",
  project: "_"
});

const state = {
  coworking: [],
  meetingRoom: [],
	errors: [],
}

const mutations = {
	setMeetingRoomImages(state, data) {
		state.meetingRoom = data;
	},
	setCoworkingImages(state, data) {
		state.coworking = data;
	},
	pushError(state, error) {
		state.errors.push(error);
  }
}

const getters = {
  coworkingReady: (state) => {
    return !!state.coworking.length;
  },
  meetingRoomReady: (state) => {
    return !!state.meetingRoom.length;
  }
}

const actions = {
	loadCoworkingImages({ commit }) {
		client.getItems("slider_coworking_inner")
		.then(response => {
      const indexes = response.data.map(item => {
        return item.files_id;
      })
      client.get("/files")
      .then(resp => {
        const images = resp.data.filter(image => {
          return indexes.some(element => {
            return image.id === element;
          })
        });
        const data = images.map(image => {
          return {name: image.title.toLowerCase(), url: image.data.full_url};
        })
        commit('setCoworkingImages', data);
      })
      .catch(error => commit('pushError', error));
    })
		.catch(error => commit('pushError', error));
  },
  loadMeetingRoomImages({ commit }) {
		client.getItems("slider_meeting_room_inner")
		.then(response => {
      const indexes = response.data.map(item => {
        return item.files_id;
      })
      client.get("/files")
      .then(resp => {
        const images = resp.data.filter(image => {
          return indexes.some(element => {
            return image.id === element;
          })
        });
        const data = images.map(image => {
          return {name: image.title.toLowerCase(), url: image.data.full_url};
        })
        commit('setMeetingRoomImages', data);
      })
      .catch(error => commit('pushError', error));
    })
		.catch(error => commit('pushError', error));
	}
}

export default {
	namespaced: true,
	state,
  actions,
  getters,
  mutations
}
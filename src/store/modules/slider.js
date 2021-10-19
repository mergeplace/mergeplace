/* eslint-disable */
import axios from 'axios';

const url = 'http://api.merge.rocks';

const state = {
  coworking: [...new Array(15).keys()].map((idx) => {
    return require(`../../assets/image/coworking/cw${idx + 1}.jpg`);
  }),
  meetingRoom: [...new Array(4).keys()].map((idx) => {
    return require(`../../assets/image/meeting-room/mr${idx + 1}.jpg`);
  }),
  errors: [],
};

const mutations = {
  setMeetingRoomImages(state, data) {
    state.meetingRoom = data;
  },
  setCoworkingImages(state, data) {
    state.coworking = data;
  },
  pushError(state, error) {
    state.errors.push(error);
  },
};

const getters = {
  coworkingReady: (state) => {
    return !!state.coworking.length;
  },
  meetingRoomReady: (state) => {
    return !!state.meetingRoom.length;
  },
};

const actions = {
  loadCoworkingImages({ commit }) {},
  loadMeetingRoomImages({ commit }) {},
};

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations,
};

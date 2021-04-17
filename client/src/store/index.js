import Vue from 'vue';
import Vuex from 'vuex';

import actions from './actions.js';
import mutations from './mutations.js';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    cityCoronaList: [],
    totalCoronaInfo: [],
    worldCoronaList: [],
    vaccinationInfo: [],
    aWeekAgoCoronaInfo: [],
    incDecCoronaInfo: [],
  },
  actions,
  mutations,
});

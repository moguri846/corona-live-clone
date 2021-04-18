import {
  getCityCoronaList,
  getTotalCoronaInfo,
  getWorldCoronaList,
  getVaccinationInfo,
  getAWeekAgoCoronaInfo,
  getincDecCoronaInfo,
} from '../API/index.js';
import {
  SET_CITY_CORONA_LIST,
  SET_TOTAL_CORONA_INFO,
  SET_WORLD_CORONA_LSIT,
  // SET_VACCINATION_INFO,
  SET_A_WEEK_AGO_CORONA_INFO,
  SET_INC_DEC_CORONA_INFO,
} from './type.js';

export default {
  GET_CITY_CORONA_LIST({ commit }) {
    getCityCoronaList()
      .then(({ data }) => {
        commit(SET_CITY_CORONA_LIST, data.body);
      })
      .catch(err => console.log(err));
  },
  GET_TOTAL_CORONA_INFO({ commit }) {
    getTotalCoronaInfo()
      .then(({ data }) => {
        commit(SET_TOTAL_CORONA_INFO, data.body);
      })
      .catch(err => console.log(err));
  },
  GET_WORLD_CORONA_LIST({ commit }) {
    getWorldCoronaList()
      .then(({ data }) => {
        commit(SET_WORLD_CORONA_LSIT, data.body);
      })
      .catch(err => console.log(err));
  },
  GET_VACCINATION_INFO() {
    getVaccinationInfo()
      .then(response => {
        console.log(response);
      })
      .catch(err => console.log(err));
  },
  GET_A_WEEK_AGO_CORONA_INFO({ commit }) {
    getAWeekAgoCoronaInfo()
      .then(({ data }) => {
        commit(SET_A_WEEK_AGO_CORONA_INFO, data.body);
      })
      .catch(err => console.log(err));
  },
  GET_INC_DEC_CORONA_INFO({ commit }) {
    getincDecCoronaInfo().then(({ data }) => {
      commit(SET_INC_DEC_CORONA_INFO, data.body);
    });
  },
};

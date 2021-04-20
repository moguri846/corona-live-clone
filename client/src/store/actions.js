import {
  getCityCoronaList,
  getTotalCoronaInfo,
  getWorldCoronaList,
  getVaccinationInfo,
  getAWeekAgoCoronaInfo,
  getKoreaIncDecCoronaInfo,
  getTotalWorldCoronaInfo,
} from '../API/index.js';
import {
  SET_CITY_CORONA_LIST,
  SET_TOTAL_CORONA_INFO,
  SET_WORLD_CORONA_LSIT,
  SET_TOTAL_VACCINATION_INFO,
  SET_A_WEEK_AGO_CORONA_INFO,
  SET_KOREA_INC_DEC_CORONA_INFO,
  SET_TOTAL_WORLD_CORONA_INFO,
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
  GET_TOTAL_VACCINATION_INFO({ commit }) {
    getVaccinationInfo()
      .then(({ data }) => {
        commit(SET_TOTAL_VACCINATION_INFO, data.totalVaccineInfo);
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
  GET_KOREA_INC_DEC_CORONA_INFO({ commit }) {
    getKoreaIncDecCoronaInfo().then(({ data }) => {
      commit(SET_KOREA_INC_DEC_CORONA_INFO, data.body);
    });
  },
  GET_TOTAL_WORLD_CORONA_INFO({ commit }) {
    getTotalWorldCoronaInfo().then(({ data }) => {
      commit(SET_TOTAL_WORLD_CORONA_INFO, data.body);
    });
  },
};

import {
  getCityCoronaList,
  getTotalCoronaInfo,
  getWorldCoronaList,
  getTotalVaccinationInfo,
  getAWeekAgoCoronaInfo,
  getKoreaIncDecCoronaInfo,
  getTotalWorldCoronaInfo,
  getDisasterCharactersList,
} from '../API/index.js';
import {
  SET_CITY_CORONA_LIST,
  SET_TOTAL_CORONA_INFO,
  SET_WORLD_CORONA_LIST,
  SET_TOTAL_VACCINATION_INFO,
  SET_A_WEEK_AGO_CORONA_INFO,
  SET_KOREA_INC_DEC_CORONA_INFO,
  SET_TOTAL_WORLD_CORONA_INFO,
  SET_DISASTER_CHARACTERS_LIST,
} from './type.js';

export default {
  GET_CITY_CORONA_LIST({ commit }) {
    return getCityCoronaList()
      .then(({ data }) => {
        commit(SET_CITY_CORONA_LIST, data.body);
        return data;
      })
      .catch(err => console.log(err));
  },
  GET_TOTAL_CORONA_INFO({ commit }) {
    return getTotalCoronaInfo()
      .then(({ data }) => {
        commit(SET_TOTAL_CORONA_INFO, data.body);
        return data;
      })
      .catch(err => console.log(err));
  },
  GET_WORLD_CORONA_LIST({ commit }) {
    return getWorldCoronaList()
      .then(({ data }) => {
        commit(SET_WORLD_CORONA_LIST, data.body);
        return data;
      })
      .catch(err => console.log(err));
  },
  GET_TOTAL_VACCINATION_INFO({ commit }) {
    return getTotalVaccinationInfo()
      .then(({ data }) => {
        commit(SET_TOTAL_VACCINATION_INFO, data.body);
        return data;
      })
      .catch(err => console.log(err));
  },
  GET_A_WEEK_AGO_CORONA_INFO({ commit }) {
    return getAWeekAgoCoronaInfo()
      .then(({ data }) => {
        commit(SET_A_WEEK_AGO_CORONA_INFO, data.body);
        return data;
      })
      .catch(err => console.log(err));
  },
  GET_KOREA_INC_DEC_CORONA_INFO({ commit }) {
    return getKoreaIncDecCoronaInfo().then(({ data }) => {
      commit(SET_KOREA_INC_DEC_CORONA_INFO, data.body);
      return data;
    });
  },
  GET_TOTAL_WORLD_CORONA_INFO({ commit }) {
    return getTotalWorldCoronaInfo().then(({ data }) => {
      commit(SET_TOTAL_WORLD_CORONA_INFO, data.body);
      return data;
    });
  },
  GET_DISASTER_CHARACTERS_LIST({ commit }) {
    return getDisasterCharactersList().then(({ data }) => {
      console.log('actions', data.body);
      commit(SET_DISASTER_CHARACTERS_LIST, data.body);
      return data;
    });
  },
};

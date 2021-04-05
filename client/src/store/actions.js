import {
  getCityCoronaList,
  getTotalCoronaData,
  getWorldCoronaList,
  getVaccinationInfo,
  getAWeekAgoCoronaData,
} from '../API/index.js';
import {
  SET_CITY_CORONA_LIST,
  SET_TOTAL_CORONA_DATA,
  SET_WORLD_CORONA_LSIT,
  SET_VACCINATION_INFO,
  SET_A_WEEK_AGO_CORONA_DATA,
} from './type.js';

export default {
  GET_CITY_CORONA_LIST({ commit }) {
    getCityCoronaList()
      .then(({ data }) => {
        const arr = [];
        const list = JSON.parse(data.body).response.body.items.item;
        // 합계 제거
        list.map(item => {
          if (item.gubun._text !== '합계') {
            arr.push(item);
          }
        });
        // 전일 대비 확진자 수 기준 내림차순으로 정렬
        arr.sort((a, b) => {
          return b.incDec._text - a.incDec._text;
        });
        commit(SET_CITY_CORONA_LIST, arr);
      })
      .catch(err => console.log(err));
  },
  GET_TOTAL_CORONA_DATA({ commit }) {
    getTotalCoronaData()
      .then(({ data }) => {
        const list = JSON.parse(data.body).response.body.items.item;

        commit(SET_TOTAL_CORONA_DATA, list);
      })
      .catch(err => console.log(err));
  },
  GET_WORLD_CORONA_LIST({ commit }) {
    getWorldCoronaList()
      .then(({ data }) => {
        const arr = [];
        const list = JSON.parse(data.body).response.body.items.item;
        // 기타 제거
        list.map(item => {
          if (item.areaNm._text !== '기타') {
            arr.push(item);
          }
        });
        // 확진자 수 기준 내림차순으로 정렬
        arr.sort((a, b) => {
          return b.natDefCnt._text - a.natDefCnt._text;
        });
        commit(SET_WORLD_CORONA_LSIT, arr);
      })
      .catch(err => console.log(err));
  },
  GET_VACCINATION_INFO({ commit }) {
    getVaccinationInfo()
      .then(({ data }) => {
        commit(SET_VACCINATION_INFO, data);
      })
      .catch(err => console.log(err));
  },
  GET_A_WEEK_AGO_CORONA_DATA({ commit }) {
    getAWeekAgoCoronaData()
      .then(({ data }) => {
        const arr = [];
        const list = JSON.parse(data.body).response.body.items.item;

        list.map(item => {
          if (item.gubun._text === '합계') {
            arr.push(item.incDec._text);
          }
        });

        commit(SET_A_WEEK_AGO_CORONA_DATA, arr);
      })
      .catch(err => console.log(err));
  },
};

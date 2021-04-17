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
  GET_TOTAL_CORONA_INFO({ commit }) {
    getTotalCoronaInfo()
      .then(({ data }) => {
        const list = JSON.parse(data.body).response.body.items.item;

        commit(SET_TOTAL_CORONA_INFO, list);
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
        const arr = [];
        const list = JSON.parse(data.body).response.body.items.item;

        list.map(item => {
          if (item.gubun._text === '합계') {
            const aweekCorona = {
              incDec: item.incDec._text,
              stdDay: item.stdDay._text.slice(7, 13),
            };
            arr.push(aweekCorona);
          }
        });

        commit(SET_A_WEEK_AGO_CORONA_INFO, arr);
      })
      .catch(err => console.log(err));
  },
  GET_INC_DEC_CORONA_INFO({ commit }) {
    getincDecCoronaInfo().then(({ data }) => {
      // const arr = [];
      const list = JSON.parse(data.body).response.body.items.item;
      console.log(list);
      const incDecCoronaInfo = {
        decide_cnt: Math.abs(list[0].decideCnt._text - list[1].decideCnt._text),
        death_cnt: Math.abs(list[0].deathCnt._text - list[1].deathCnt._text),
        clear_cnt: Math.abs(list[0].clearCnt._text - list[1].clearCnt._text),
        exam_cnt: Math.abs(list[0].examCnt._text - list[1].examCnt._text),
      };
      commit(SET_INC_DEC_CORONA_INFO, incDecCoronaInfo);
    });
  },
};

import { getCityCoronaList, getTotalCoronaList, getWorldCoronaList } from '../API/index.js';
import { SET_CITY_CORONA_LIST, SET_TOTAL_CORONA_LIST } from './type.js';

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
  GET_TOTAL_CORONA_LIST({ commit }) {
    getTotalCoronaList()
      .then(({ data }) => {
        const list = JSON.parse(data.body).response.body.items.item;

        commit(SET_TOTAL_CORONA_LIST, list);
      })
      .catch(err => console.log(err));
  },
  GET_WORLD_CORONA_LIST() {
    getWorldCoronaList()
      .then(({ data }) => {
        console.log(data);
      })
      .catch(err => console.log(err));
  },
};
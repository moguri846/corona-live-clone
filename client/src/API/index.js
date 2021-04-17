import axios from 'axios';

// 도시 정보
const getCityCoronaList = () => {
  return axios.get('/api/corona/cityCoronaList');
};

// 종합 정보
const getTotalCoronaInfo = () => {
  return axios.get('/api/corona/totalCoronaInfo');
};

// 세계 정보
const getWorldCoronaList = () => {
  return axios.get('/api/corona/worldCoronaList');
};

// 백신 접종 정보
const getVaccinationInfo = () => {
  return axios.get('/api/corona/vaccinationInfo');
};

// 일주일 동안의 정보
const getAWeekAgoCoronaInfo = () => {
  return axios.get('/api/corona/WeekAgoCoronaInfo');
};

// 전일대비 정보
const getincDecCoronaInfo = () => {
  return axios.get('/api/corona/incDecCoronaInfo');
};

export {
  getCityCoronaList,
  getTotalCoronaInfo,
  getWorldCoronaList,
  getVaccinationInfo,
  getAWeekAgoCoronaInfo,
  getincDecCoronaInfo,
};

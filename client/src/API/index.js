import axios from 'axios';

// 도시 정보
const getCityCoronaList = () => {
  return axios.get('/api/corona/cityCoronaList');
};

// 종합 정보
const getTotalCoronaInfo = () => {
  return axios.get('/api/corona/totalCoronaInfo');
};

// 국가별 정보
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
const getKoreaIncDecCoronaInfo = () => {
  return axios.get('/api/corona/koreaIncDecCoronaInfo');
};
// 세계 종합 정보
const getTotalWorldCoronaInfo = () => {
  return axios.get('/api/corona/totalWorldCoronaInfo');
};

export {
  getCityCoronaList,
  getTotalCoronaInfo,
  getWorldCoronaList,
  getVaccinationInfo,
  getAWeekAgoCoronaInfo,
  getKoreaIncDecCoronaInfo,
  getTotalWorldCoronaInfo,
};

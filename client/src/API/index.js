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
const getTotalVaccinationInfo = () => {
  return axios.get('/api/corona/totalVaccinationInfo');
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

const getDisasterCharactersList = () => {
  return axios.get('/api/corona/disasterCharactersList');
};

export {
  getCityCoronaList,
  getTotalCoronaInfo,
  getWorldCoronaList,
  getTotalVaccinationInfo,
  getAWeekAgoCoronaInfo,
  getKoreaIncDecCoronaInfo,
  getTotalWorldCoronaInfo,
  getDisasterCharactersList,
};

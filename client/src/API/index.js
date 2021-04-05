import axios from 'axios';

const getCityCoronaList = () => {
  return axios.get('/api/corona/cityCorona');
};

const getTotalCoronaData = () => {
  return axios.get('/api/corona/totalCorona');
};

const getWorldCoronaList = () => {
  return axios.get('/api/corona/worldCorona');
};

const getVaccinationInfo = () => {
  return axios.get('/api/corona/vaccinationInfo');
};

const getAWeekAgoCoronaData = () => {
  return axios.get('/api/corona/WeekAgoCoronaData');
};

export { getCityCoronaList, getTotalCoronaData, getWorldCoronaList, getVaccinationInfo, getAWeekAgoCoronaData };

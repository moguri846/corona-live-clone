import axios from 'axios';

const getCityCoronaList = () => {
  return axios.get('/api/corona/cityCorona');
};
const getTotalCoronaList = () => {
  return axios.get('/api/corona/totalCorona');
};
const getWorldCoronaList = () => {
  return axios.get('/api/corona/worldCorona');
};
const getVaccinationInfo = () => {
  return axios.get('/api/corona/vaccinationInfo');
};

export { getCityCoronaList, getTotalCoronaList, getWorldCoronaList, getVaccinationInfo };

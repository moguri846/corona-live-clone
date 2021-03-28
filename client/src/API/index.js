import axios from 'axios';

const getCityCoronaList = () => {
  return axios.get('/api/cityCorona');
};
const getTotalCoronaList = () => {
  return axios.get('/api/totalCorona');
};
const getWorldCoronaList = () => {
  return axios.get('/api/worldCorona');
};

export { getCityCoronaList, getTotalCoronaList, getWorldCoronaList };

import axios from 'axios';

const getCityCoronaList = () => {
  return axios.get('/api/cityCorona');
};
const getTotalCoronaList = () => {
  return axios.get('/api/totalCorona');
};

export { getCityCoronaList, getTotalCoronaList };

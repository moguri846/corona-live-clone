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
const getVaccineInfo = () => {
  return axios
    .get('/api/corona/vaccineInfo')
    .then(response => console.log(response))
    .catch(err => console.log(err));
};

export { getCityCoronaList, getTotalCoronaList, getWorldCoronaList, getVaccineInfo };

export default {
  SET_CITY_CORONA_LIST(state, list) {
    state.cityCoronaList = list;
  },
  SET_TOTAL_CORONA_INFO(state, data) {
    state.totalCoronaInfo = data;
  },
  SET_WORLD_CORONA_LIST(state, list) {
    state.worldCoronaList = list;
  },
  SET_VACCINATION_INFO(state, data) {
    state.vaccinationInfo = data;
  },
  SET_A_WEEK_AGO_CORONA_INFO(state, data) {
    state.aWeekAgoCoronaInfo = data;
  },
  SET_INC_DEC_CORONA_INFO(state, data) {
    state.incDecCoronaInfo = data;
  },
};

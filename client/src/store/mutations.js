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
  SET_TOTAL_VACCINATION_INFO(state, data) {
    state.totalVaccinationInfo = data;
  },
  SET_A_WEEK_AGO_CORONA_INFO(state, data) {
    state.aWeekAgoCoronaInfo = data;
  },
  SET_KOREA_INC_DEC_CORONA_INFO(state, data) {
    state.koreaIncDecCoronaInfo = data;
  },
  SET_TOTAL_WORLD_CORONA_INFO(state, data) {
    state.totalWorldCoronaInfo = data;
  },
};

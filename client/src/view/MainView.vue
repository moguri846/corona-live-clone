<template>
  <Common>
    <div slot="header" class="header">
      <Total :loading="loading">
        <div slot="decide" class="decide">
          <h3>확진자</h3>
          <div>{{ totalCoronaInfo.decideCnt._text | makeComma }}</div>
          <div class="inc-dec">{{ (incDecCoronaInfo.decide_cnt + '↑') | makeComma }}</div>
        </div>
        <div slot="death" class="death">
          <h3>사망자</h3>
          <div>{{ totalCoronaInfo.deathCnt._text | makeComma }}</div>
          <div class="inc-dec">{{ (incDecCoronaInfo.death_cnt + '↑') | makeComma }}</div>
        </div>
        <div slot="clear" class="clear">
          <h3>격리해제</h3>
          <div>{{ totalCoronaInfo.clearCnt._text | makeComma }}</div>
          <div class="inc-dec">{{ (incDecCoronaInfo.clear_cnt + '↑') | makeComma }}</div>
        </div>
        <div slot="exam" class="exam">
          <h3>검사중</h3>
          <div>{{ totalCoronaInfo.examCnt._text | makeComma }}</div>
          <div class="inc-dec">{{ (incDecCoronaInfo.exam_cnt + '↑') | makeComma }}</div>
        </div>
      </Total>
      <Today></Today>
    </div>
    <div slot="content" class="content">
      <template v-if="loading">
        <ClipSpinner></ClipSpinner>
      </template>
      <template v-else>
        <Chart :chartData="aWeekAgoCoronaInfo"></Chart>
      </template>
      <AddChart></AddChart>
      <CityCorona :loading="loading"></CityCorona>
    </div>
  </Common>
</template>

<script>
import { mapState } from 'vuex';
import ClipSpinner from 'vue-spinner/src/ClipLoader';

import Common from './Common.vue';
import Total from '../components/Total.vue';
import Today from '../components/Today.vue';
import Chart from '../components/Chart.vue';
import AddChart from '../components/AddChart.vue';
import CityCorona from '../components/CoronaInfoList.vue';

export default {
  created() {
    if (this.$store.state.cityCoronaList.length === 0) {
      this.startSpinner();
      this.$store.dispatch('GET_CITY_CORONA_LIST');
    }
    if (this.$store.state.totalCoronaInfo.length === 0) {
      this.startSpinner();
      this.$store.dispatch('GET_TOTAL_CORONA_INFO');
    }
    if (this.$store.state.aWeekAgoCoronaInfo.length === 0) {
      this.startSpinner();
      this.$store.dispatch('GET_A_WEEK_AGO_CORONA_INFO');
    }
    if (this.$store.state.incDecCoronaInfo.length === 0) {
      this.startSpinner();
      this.$store.dispatch('GET_INC_DEC_CORONA_INFO');
    }
    setTimeout(() => {
      this.endSpinner();
    }, 1000);
  },
  data() {
    return {
      loading: false,
    };
  },

  computed: {
    ...mapState(['totalCoronaInfo', 'aWeekAgoCoronaInfo', 'incDecCoronaInfo']),
  },
  methods: {
    startSpinner() {
      this.loading = true;
    },
    endSpinner() {
      this.loading = false;
    },
  },
  components: {
    Common,
    Total,
    Today,
    Chart,
    AddChart,
    CityCorona,
    ClipSpinner,
  },
};
</script>

<style scoped>
.total {
  justify-content: space-between;
}
.content > div:nth-child(1) {
  border: 1px solid #474b55;
  border-radius: 12px;
  margin-bottom: 20px;
}
.total > div > div:nth-child(3) {
  padding: 3px 8px 3px 15px;
}
</style>

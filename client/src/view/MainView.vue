<template>
  <Common>
    <div slot="header" class="header">
      <Total :loading="loading">
        <div slot="decide" class="decide">
          <h3>확진자</h3>
          <div>{{ totalCoronaData.decideCnt._text }}</div>
          <div>505</div>
        </div>
        <div slot="death" class="death">
          <h3>사망자</h3>
          <div>{{ totalCoronaData.deathCnt._text }}</div>
          <div>505</div>
        </div>
        <div slot="clear" class="clear">
          <h3>완치자</h3>
          <div>{{ totalCoronaData.clearCnt._text }}</div>
          <div>505</div>
        </div>
        <div slot="accExam" class="accExam">
          <h3>검사자</h3>
          <div>{{ totalCoronaData.accExamCnt._text }}</div>
          <div>505</div>
        </div>
      </Total>
      <Today></Today>
    </div>
    <div slot="content" class="content">
      <template v-if="loading">
        <ClipSpinner></ClipSpinner>
      </template>
      <template v-else>
        <Chart :chartData="aWeekAgoCoronaData"></Chart>
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
import CityCorona from '../components/CityCorona.vue';

export default {
  created() {
    if (this.$store.state.cityCoronaList.length === 0) {
      this.startSpinner();
      this.$store.dispatch('GET_CITY_CORONA_LIST');
    }
    if (this.$store.state.totalCoronaData.length === 0) {
      this.startSpinner();
      this.$store.dispatch('GET_TOTAL_CORONA_DATA');
    }
    if (this.$store.state.aWeekAgoCoronaData.length === 0) {
      this.startSpinner();
      this.$store.dispatch('GET_A_WEEK_AGO_CORONA_DATA');
    }
    setTimeout(() => {
      this.endSpinner();
    }, 1000);
  },
  data() {
    return {
      loading: false,
      aWeekAgoCorona: [],
    };
  },

  computed: {
    ...mapState(['totalCoronaData', 'aWeekAgoCoronaData']),
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
    // PacmanSpinner,
  },
};
</script>

<style scoped>
.content > div:nth-child(1) {
  border: 1px solid #474b55;
  border-radius: 12px;
  margin-bottom: 20px;
}
.total {
  justify-content: space-between;
}
</style>

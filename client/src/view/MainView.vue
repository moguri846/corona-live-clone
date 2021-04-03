<template>
  <Common>
    <div slot="header" class="header">
      <Total>
        <div slot="decide" class="decide">
          <h3>확진자</h3>
          <div>{{ totalCoronaList.decideCnt._text }}</div>
          <div>505</div>
        </div>
        <div slot="death" class="death">
          <h3>사망자</h3>
          <div>{{ totalCoronaList.deathCnt._text }}</div>
          <div>505</div>
        </div>
        <div slot="clear" class="clear">
          <h3>완치자</h3>
          <div>{{ totalCoronaList.clearCnt._text }}</div>
          <div>505</div>
        </div>
        <div slot="accExam" class="accExam">
          <h3>검사자</h3>
          <div>{{ totalCoronaList.accExamCnt._text }}</div>
          <div>505</div>
        </div>
      </Total>
      <Today></Today>
    </div>
    <div slot="content" class="content">
      <Chart></Chart>
      <AddChart></AddChart>
      <CityCorona></CityCorona>
    </div>
  </Common>
</template>

<script>
import { mapState } from 'vuex';

import Common from './Common.vue';
import Total from '../components/Total.vue';
import Today from '../components/Today.vue';
import Chart from '../components/Chart.vue';
import AddChart from '../components/AddChart.vue';
import CityCorona from '../components/CityCorona.vue';

export default {
  created() {
    if (this.$store.state.cityCoronaList.length === 0) {
      this.$store.dispatch('GET_CITY_CORONA_LIST');
    }
    if (this.$store.state.totalCoronaList.length === 0) {
      this.$store.dispatch('GET_TOTAL_CORONA_LIST');
    }
  },
  computed: {
    ...mapState(['totalCoronaList']),
  },
  components: {
    Common,
    Total,
    Today,
    Chart,
    AddChart,
    CityCorona,
  },
};
</script>

<style scoped>
.total {
  justify-content: space-between;
}
</style>

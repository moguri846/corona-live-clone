<template>
  <Common>
    <div slot="header" class="header">
      <TotalCorona>
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
      </TotalCorona>
      <TodayCorona></TodayCorona>
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
import TotalCorona from '../components/Total.vue';
import TodayCorona from '../components/Today.vue';
import Chart from '../components/Chart.vue';
import AddChart from '../components/AddChart.vue';
import CityCorona from '../components/CityCorona.vue';

export default {
  computed: {
    ...mapState(['totalCoronaList']),
  },
  components: {
    Common,
    TotalCorona,
    TodayCorona,
    Chart,
    AddChart,
    CityCorona,
  },
};
</script>

<style scoped></style>

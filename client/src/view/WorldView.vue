<template>
  <Common>
    <div slot="header" class="header">
      <Total>
        <div slot="decide" class="decide">
          <h3>확진자</h3>
          <div>00</div>
          <div>dd</div>
        </div>
        <div slot="death" class="death">
          <h3>사망자</h3>
          <div>00</div>
          <div>dd</div>
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
import Common from './Common.vue';
import Total from '../components/Total.vue';
import Today from '../components/Today.vue';
import Chart from '../components/Chart.vue';
import AddChart from '../components/AddChart.vue';
import CityCorona from '../components/CityCorona.vue';

export default {
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
.total > div {
  background-color: black;
  z-index: 10;
}
</style>

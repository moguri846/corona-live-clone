<template>
  <div class="wrap">
    <NavBar></NavBar>
    <div>
      <div class="header">
        <TotalCorona></TotalCorona>
        <TodayCorona></TodayCorona>
      </div>
      <div class="content">
        <Chart></Chart>
        <AddChart></AddChart>
        <CityCorona></CityCorona>
      </div>
      <div class="footer">
        <Footer></Footer>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from '../components/NavBar.vue';
import TotalCorona from '../components/TotalCorona.vue';
import TodayCorona from '../components/TodayCorona.vue';
import Chart from '../components/Chart.vue';
import AddChart from '../components/AddChart.vue';
import CityCorona from '../components/CityCorona.vue';
import Footer from '../components/Footer.vue';

export default {
  components: {
    NavBar,
    TotalCorona,
    TodayCorona,
    Chart,
    AddChart,
    CityCorona,
    Footer,
  },
};
</script>

<style scoped>
.wrap {
  display: flex;
  margin-top: 40px;
}
</style>

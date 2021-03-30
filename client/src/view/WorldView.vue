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
      <div class="item-list">
        <div class="description">
          <div style="left: 35px">국가</div>
          <div style="left: 110px">확진자</div>
          <div style="left: 175px">사망자</div>
          <div style="left: 225px">확진률 대비 사망률</div>
        </div>
        <ul class="list">
          <ClipSpinner v-if="loading"></ClipSpinner>
          <li v-for="(item, index) in worldCoronaList" :key="index" class="item">
            <div>{{ item.nationNm._text }}</div>
            <div>{{ item.natDefCnt._text }}</div>
            <div>{{ item.natDeathCnt._text }}</div>
            <div>{{ item.natDeathRate._text }}</div>
          </li>
        </ul>
      </div>
    </div>
  </Common>
</template>

<script>
import { mapState } from 'vuex';
// import bus from '../utils/bus';
import ClipSpinner from 'vue-spinner/src/ClipLoader';

import Common from './Common.vue';
import Total from '../components/Total.vue';
import Today from '../components/Today.vue';
import Chart from '../components/Chart.vue';
import AddChart from '../components/AddChart.vue';

export default {
  data() {
    return {
      loading: false,
    };
  },
  methods: {
    startSpinner() {
      this.loading = true;
    },
    endSpinner() {
      this.loading = true;
    },
  },
  // created() {
  //   bus.$on('startSpinner', this.startSpinner);
  //   bus.$on('endSpinner', this.endSpinner);
  // },
  // beforeDestroy() {
  //   bus.$off('startSpinner', this.startSpinner);
  //   bus.$off('endSpinner', this.endSpinner);
  // },
  computed: {
    ...mapState(['worldCoronaList']),
  },
  components: {
    Common,
    Total,
    Today,
    Chart,
    AddChart,
    ClipSpinner,
  },
};
</script>

<style scoped>
.item-list {
  width: 440px;
  padding: 22px 35px;
  border: 1px solid #474b55;
  border-radius: 12px;
  background-color: #191f2c;
  margin-bottom: 20px;
}
.list {
  margin-bottom: 20px;
}
.description {
  display: flex;
  margin-bottom: 10px;
}
.description > div {
  position: relative;
  font-size: 12px;
}
.item {
  display: flex;
  justify-content: space-around;
}
.item > div {
  width: 110px;
  padding: 16px;
  border-radius: 12px;
  margin-right: 5px;
}
.item > div:nth-child(4) {
  margin-right: 0px;
}
.item:nth-child(odd) > div {
  background-color: #272b38;
}
</style>

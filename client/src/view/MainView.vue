<template>
  <Common>
    <div slot="header" class="header">
      <Total :loading="totalCoronaInfoLoading">
        <div slot="decide" class="decide">
          <h3>확진자</h3>
          <div>{{ totalCoronaInfo.decideCnt | makeComma }}</div>
          <div class="inc-dec">{{ koreaIncDecCoronaInfo.decide_cnt | makeComma }}<i class="fas fa-arrow-up"></i></div>
        </div>
        <div slot="death" class="death">
          <h3>사망자</h3>
          <div>{{ totalCoronaInfo.deathCnt | makeComma }}</div>
          <div class="inc-dec">{{ koreaIncDecCoronaInfo.death_cnt | makeComma }}<i class="fas fa-arrow-up"></i></div>
        </div>
        <div slot="clear" class="clear">
          <h3>격리해제</h3>
          <div>{{ totalCoronaInfo.clearCnt | makeComma }}</div>
          <div class="inc-dec">{{ koreaIncDecCoronaInfo.clear_cnt | makeComma }}<i class="fas fa-arrow-up"></i></div>
        </div>
        <div slot="exam" class="exam">
          <h3>검사중</h3>
          <div>{{ totalCoronaInfo.examCnt | makeComma }}</div>
          <div class="inc-dec">{{ koreaIncDecCoronaInfo.exam_cnt | makeComma }}<i class="fas fa-arrow-up"></i></div>
        </div>
      </Total>
      <Today></Today>
    </div>
    <div slot="content" class="content">
      <template v-if="aWeekAgoCoronaInfoLoading">
        <ClipSpinner></ClipSpinner>
      </template>
      <template v-else>
        <Chart :chartData="aWeekAgoCoronaInfo"></Chart>
      </template>
      <AddChart></AddChart>
      <CoronaItemList :loading="cityCoronaListLoading">
        <div slot="item-list" class="item-list">
          <div class="description">
            <div style="left: 30px">지역</div>
            <div style="left: 69px">오늘 확진자</div>
            <div style="left: 130px">총 확진자</div>
            <div style="left: 196px">총 사망자</div>
            <div style="left: 263px">총 완치자</div>
            <div style="left: 350px">10만명당 확진자</div>
          </div>
          <ul>
            <li v-for="(item, index) in cityCoronaList" :key="index" class="item">
              <div>{{ item.gubun | makeComma }}</div>
              <div>ㅇ명</div>
              <div>
                {{ item.defCnt | makeComma }}명
                <span> {{ item.incDec | makeComma }}<i class="fas fa-arrow-up"></i></span>
              </div>
              <div>{{ item.deathCnt | makeComma }}명</div>
              <div>{{ item.isolClearCnt | makeComma }}명</div>
              <div>{{ item.qurRate }}명</div>
              <div><i class="fas fa-chevron-right"></i></div>
            </li>
          </ul>
        </div>
      </CoronaItemList>
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
import CoronaItemList from '../components/CoronaItemList.vue';

const CITY_CORONA_LIST = 'CITY_CORONA_LIST';
const TOTAL_CORONA_INFO = 'TOTAL_CORONA_INFO';
const A_WEEK_AGO_CORONA_INFO = 'A_WEEK_AGO_CORONA_INFO';
const KOREA_INC_DEC_CORONA_INFO = 'KOREA_INC_DEC_CORONA_INFO';

export default {
  created() {
    if (this.$store.state.cityCoronaList.length === 0) {
      this.startSpinner(CITY_CORONA_LIST);
    }
    if (this.$store.state.totalCoronaInfo.length === 0) {
      this.startSpinner(TOTAL_CORONA_INFO);
    }
    if (this.$store.state.aWeekAgoCoronaInfo.length === 0) {
      this.startSpinner(A_WEEK_AGO_CORONA_INFO);
    }
    if (this.$store.state.koreaIncDecCoronaInfo.length === 0) {
      this.startSpinner(KOREA_INC_DEC_CORONA_INFO);
    }
  },
  data() {
    return {
      cityCoronaListLoading: false,
      totalCoronaInfoLoading: false,
      aWeekAgoCoronaInfoLoading: false,
      koreaIncDecCoronaInfoLoading: false,
    };
  },
  computed: {
    ...mapState(['cityCoronaList', 'totalCoronaInfo', 'aWeekAgoCoronaInfo', 'koreaIncDecCoronaInfo']),
  },
  methods: {
    startSpinner(type) {
      switch (type) {
        case CITY_CORONA_LIST:
          this.cityCoronaListLoading = true;
          this.dispatchFunc(CITY_CORONA_LIST, type);
          break;
        case TOTAL_CORONA_INFO:
          this.totalCoronaInfoLoading = true;
          this.dispatchFunc(TOTAL_CORONA_INFO, type);
          break;
        case A_WEEK_AGO_CORONA_INFO:
          this.aWeekAgoCoronaInfoLoading = true;
          this.dispatchFunc(A_WEEK_AGO_CORONA_INFO, type);
          break;
        case KOREA_INC_DEC_CORONA_INFO:
          this.koreaIncDecCoronaInfoLoading = true;
          this.dispatchFunc(KOREA_INC_DEC_CORONA_INFO, type);
          break;
      }
    },
    endSpinner(type) {
      switch (type) {
        case CITY_CORONA_LIST:
          this.cityCoronaListLoading = false;
          break;
        case TOTAL_CORONA_INFO:
          this.totalCoronaInfoLoading = false;
          break;
        case A_WEEK_AGO_CORONA_INFO:
          this.aWeekAgoCoronaInfoLoading = false;
          break;
        case KOREA_INC_DEC_CORONA_INFO:
          this.koreaIncDecCoronaInfoLoading = false;
          break;
      }
    },
    dispatchFunc(url, type) {
      this.$store
        .dispatch(`GET_${url}`)
        .then(() => {
          this.goToEndSpinner(type);
        })
        .catch(err => console.log(err));
    },
    goToEndSpinner(type) {
      setTimeout(() => {
        this.endSpinner(type);
      }, 1000);
    },
  },
  components: {
    Common,
    Total,
    Today,
    Chart,
    AddChart,
    CoronaItemList,
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
  background-color: #191f2c;
}
.total > div > div:nth-child(3) {
  display: flex;
  align-items: center;
  padding: 3px 8px 3px 10px;
}
.corona-item-list {
  padding: 12px 25px;
}
.item-list {
  width: 440px;
  overflow-y: hidden;
  overflow-x: scroll;
  padding: 10px;
  padding-left: 0px;
  padding-right: 20px;
  cursor: pointer;
}
.description {
  width: max-content;
  display: flex;
  margin-bottom: 10px;
}
.description > div {
  position: relative;
  font-size: 12px;
}
.item {
  display: flex;
  width: 800px;
  height: 48px;
  padding-right: 10px;
  margin-bottom: 10px;
}
.item > div:nth-child(1) {
  position: sticky;
  left: 0px;
}
.item > div:nth-child(3) span {
  margin-left: 10px;
  color: #af4661;
  background-color: #352e3d;
  border-radius: 12px;
  padding: 2.5px 5px;
  font-size: 13px;
}
.item > div {
  width: 80px;
  box-sizing: border-box;
  padding: 0px 8px 0px 11px;
  line-height: 45px;
  border: 1px solid #272b38;
  border-radius: 12px;
  margin-right: 5px;
  text-align: center;
}
.item > div:nth-child(3),
.item > div:nth-child(5),
.item > div:nth-child(6) {
  width: 150px;
}
.item:nth-child(odd) > div {
  background-color: #272b38;
}
.item:nth-child(even) > div {
  border: 1px solid #191f2c;
  background-color: #191f2c;
}
i {
  font-size: 5px;
  margin-left: 3px;
}
</style>

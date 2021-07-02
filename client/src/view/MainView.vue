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
        <BarChart :chartData="aWeekAgoCoronaInfo" class="bar-chart"></BarChart>
      </template>
      <AddChart></AddChart>
      <CoronaItemList :loading="cityCoronaListLoading">
        <div slot="item-list" class="item-list">
          <div class="description">
            <div style="left: 22px">지역</div>
            <div style="left: 46px">오늘 확진자</div>
            <div style="left: 100px">총 확진자</div>
            <div style="left: 189px">총 사망자</div>
            <div style="left: 270px">총 완치자</div>
            <div style="left: 360px">10만명당 확진자</div>
          </div>
          <ul>
            <li v-for="(item, index) in cityCoronaList" :key="index" class="item">
              <div>{{ item.gubun | makeComma }}</div>
              <div>ㅇ명</div>
              <div>
                {{ item.defCnt | makeComma }}명
                <!-- 수정해야 함 -->
                <span class="incDec" v-show="item.incDec > 0">
                  {{ item.incDec | makeComma }}<i class="fas fa-arrow-up"></i
                ></span>
              </div>
              <div>
                {{ item.deathCnt | makeComma }}명
                <span class="incDeath" v-show="item.incDeath > 0"
                  >{{ item.incDeath | makeComma }}<i class="fas fa-arrow-up"></i
                ></span>
              </div>
              <div>
                {{ item.isolClearCnt | makeComma }}명
                <span class="incIsolClear" v-show="item.incIsolClear > 0"
                  >{{ item.incIsolClear | makeComma }}<i class="fas fa-arrow-up"></i
                ></span>
                <!-- 수정해야 함 -->
              </div>
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
import BarChart from '../components/BarChart.vue';
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
    BarChart,
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
.bar-chart {
  border: 1px solid var(--border-color);
  border-radius: 12px;
  margin-bottom: 20px;
  background-color: var(--div-color);
}
.total > div > div:nth-child(3) {
  display: flex;
  align-items: center;
  padding: 3px 8px 3px 10px;
}
.corona-item-list {
  padding: 12px 5%;
}
.item-list {
  width: 95%;
  overflow-y: hidden;
  overflow-x: scroll;
  padding: 10px 20px 0px 0px;
  cursor: pointer;
}
.item-list::-webkit-scrollbar {
  height: 8px;
}
.item-list::-webkit-scrollbar-thumb {
  background-color: var(--scrollbar-thumb);
  border-radius: 10px;
}
.item-list::-webkit-scrollbar-track {
  background-color: var(--scrollbar-track);
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
  width: 800px;
  height: 48px;
  display: flex;
  padding-right: 10px;
  margin-bottom: 10px;
}
.item > div:nth-child(1) {
  position: sticky;
  left: 0px;
}
/* incDec incDeath incIsolClear */
.item > div > span {
  margin-left: 10px;
  border-radius: 12px;
  padding: 2.5px 5px;
  font-size: 13px;
  font-weight: bold;
}
.item > div > .incDec,
.item > div > .incDeath {
  color: var(--list-span-text-color);
  background-color: var(--list-span-bg-color);
}
.item > div > .incIsolClear {
  color: var(--list-span-incIsolClear-color);
  background-color: var(--list-span-incIsolClear-bg-color);
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
.item > div:nth-child(4) {
  width: 150px;
}
.item > div:nth-child(3),
.item > div:nth-child(5),
.item > div:nth-child(6) {
  width: 200px;
}
.item:nth-child(odd) > div {
  background-color: #272b38;
}
.item:nth-child(even) > div {
  border: 1px solid #191f2c;
  background-color: #191f2c;
}
i {
  margin-left: 3px;
  margin-top: 2px;
  font-size: 12px;
}
/*
  light mode
*/
.content > div > .item-list > ul > li {
  color: var(--text-color);
}
.content > div > .item-list > ul > li:nth-child(odd) > div {
  background-color: var(--list-odd-color);
  border: 1px solid var(--list-odd-color);
}
.content > div > .item-list > ul > li:nth-child(even) > div {
  background-color: var(--list-even-color);
  border: 1px solid var(--list-even-color);
}
/*
  반응형
*/
/* 모바일 */
@media screen and (max-width: 510px) {
  .item-list {
    width: 100%;
    padding: 0px;
  }
  .bar-chart {
    border: 1px solid var(--mobile-border-color);
    border-radius: 0px;
  }
}
@media screen and (max-width: 480px) {
  .bar-chart {
    border: 1px solid var(--mobile-border-color);
    border-radius: 0px;
  }
}
</style>

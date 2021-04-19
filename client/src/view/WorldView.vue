<template>
  <Common>
    <div slot="header" class="header">
      <Total :loading="loading">
        <div slot="decide" class="decide">
          <h3>확진자</h3>
          <div>{{ totalWorldCoronaInfo.TotalConfirmed | makeComma }}</div>
          <div>{{ totalWorldCoronaInfo.NewConfirmed | makeComma }}<i class="fas fa-arrow-up"></i></div>
        </div>
        <div slot="death" class="death">
          <h3>사망자</h3>
          <div>{{ totalWorldCoronaInfo.TotalDeaths | makeComma }}</div>
          <div>{{ totalWorldCoronaInfo.NewDeaths | makeComma }}<i class="fas fa-arrow-up"></i></div>
        </div>
        <div slot="clear" class="clear">
          <h3>격리해제</h3>
          <div>{{ totalWorldCoronaInfo.TotalRecovered | makeComma }}</div>
          <div>{{ totalWorldCoronaInfo.NewRecovered | makeComma }}<i class="fas fa-arrow-up"></i></div>
        </div>
      </Total>
      <Today></Today>
    </div>
    <div slot="content" class="content">
      <div class="item-list">
        <div class="description">
          <div style="left: 40px">국가</div>
          <div style="left: 125px">확진자</div>
          <div style="left: 200px">사망자</div>
          <div style="left: 240px">확진률 대비 사망률</div>
        </div>
        <ul class="list">
          <ClipSpinner v-if="loading"></ClipSpinner>
          <li v-for="(item, index) in worldCoronaList" :key="index" class="item">
            <div>{{ item.nationNm._text | makeComma }}</div>
            <div>{{ item.natDefCnt._text | makeComma }}</div>
            <div>{{ item.natDeathCnt._text | makeComma }}</div>
            <div>{{ item.natDeathRate._text.slice(0, 4) }}</div>
          </li>
        </ul>
      </div>
    </div>
  </Common>
</template>

<script>
import { mapState } from 'vuex';
import ClipSpinner from 'vue-spinner/src/ClipLoader';

import Common from './Common.vue';
import Total from '../components/Total.vue';
import Today from '../components/Today.vue';

export default {
  created() {
    if (this.$store.state.worldCoronaList.length === 0) {
      this.startSpinner();
      this.$store
        .dispatch('GET_WORLD_CORONA_LIST')
        .then(() =>
          setTimeout(() => {
            this.endSpinner();
          }, 1000),
        )
        .catch(err => console.log(err));
    }
    if (this.$store.state.worldCoronaList.length === 0) {
      this.startSpinner();
      this.$store
        .dispatch('GET_TOTAL_WORLD_CORONA_INFO')
        .then(() =>
          setTimeout(() => {
            this.endSpinner();
          }, 1000),
        )
        .catch(err => console.log(err));
    }
  },
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
      this.loading = false;
    },
  },
  computed: {
    ...mapState(['worldCoronaList', 'totalWorldCoronaInfo']),
  },
  components: {
    Common,
    Total,
    Today,
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
  text-align: center;
}
.item > div {
  box-sizing: border-box;
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
.total {
  justify-content: space-evenly;
}

.total > div > div:nth-child(3) {
  display: flex;
  align-items: center;
}
i {
  margin-left: 3px;
  font-size: 11px;
}
</style>

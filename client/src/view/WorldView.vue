<template>
  <Common>
    <div slot="header" class="header">
      <Total :loading="totalWorldCoronaInfoLoading">
        <div slot="decide" class="decide">
          <h3>확진자</h3>
          <div>{{ totalWorldCoronaInfo.totalConfirmed | makeComma }}</div>
          <div>{{ totalWorldCoronaInfo.newConfirmed | makeComma }}<i class="fas fa-arrow-up"></i></div>
        </div>
        <div slot="death" class="death">
          <h3>사망자</h3>
          <div>{{ totalWorldCoronaInfo.totalDeaths | makeComma }}</div>
          <div>{{ totalWorldCoronaInfo.newDeaths | makeComma }}<i class="fas fa-arrow-up"></i></div>
        </div>
        <div slot="clear" class="clear">
          <h3>격리해제</h3>
          <div>{{ totalWorldCoronaInfo.totalRecovered | makeComma }}</div>
          <div>{{ totalWorldCoronaInfo.newRecovered | makeComma }}<i class="fas fa-arrow-up"></i></div>
        </div>
      </Total>
      <Today></Today>
    </div>
    <div slot="content" class="content">
      <CoronaItemList :loading="worldCoronaListLoading">
        <div slot="item-list" class="item-list">
          <div class="description">
            <div class="country">국가</div>
            <div class="world-decide">확진자</div>
            <div class="world-death">사망자</div>
            <div class="nat-death-rate">확진률 대비 사망률</div>
          </div>
          <ul>
            <li v-for="(item, index) in worldCoronaList" :key="index" class="item">
              <div>{{ item.nationNm | makeComma }}</div>
              <div>{{ item.natDefCnt | makeComma }}</div>
              <div>{{ item.natDeathCnt | makeComma }}</div>
              <div>{{ item.natDeathRate }}</div>
            </li>
          </ul>
        </div>
      </CoronaItemList>
    </div>
  </Common>
</template>

<script>
import { mapState } from 'vuex';

import Common from './Common.vue';
import Total from '../components/Total.vue';
import Today from '../components/Today.vue';
import CoronaItemList from '../components/CoronaItemList.vue';

const WORLD_CORONA_LIST = 'WORLD_CORONA_LIST';
const TOTAL_WORLD_CORONA_INFO = 'TOTAL_WORLD_CORONA_INFO';

export default {
  created() {
    if (this.$store.state.worldCoronaList.length === 0) {
      this.startSpinner(WORLD_CORONA_LIST);
    }
    if (this.$store.state.totalWorldCoronaInfo.length === 0) {
      this.startSpinner(TOTAL_WORLD_CORONA_INFO);
    }
  },
  data() {
    return {
      worldCoronaListLoading: false,
      totalWorldCoronaInfoLoading: false,
    };
  },
  methods: {
    startSpinner(type) {
      switch (type) {
        case WORLD_CORONA_LIST:
          this.worldCoronaListLoading = true;
          this.dispatchFunc(WORLD_CORONA_LIST, type);
          break;
        case TOTAL_WORLD_CORONA_INFO:
          this.totalWorldCoronaInfoLoading = true;
          this.dispatchFunc(TOTAL_WORLD_CORONA_INFO, type);
          break;
      }
    },
    endSpinner(type) {
      switch (type) {
        case WORLD_CORONA_LIST:
          this.worldCoronaListLoading = false;
          break;
        case TOTAL_WORLD_CORONA_INFO:
          this.totalWorldCoronaInfoLoading = false;
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
      }, 2000);
    },
  },
  computed: {
    ...mapState(['worldCoronaList', 'totalWorldCoronaInfo']),
  },
  components: {
    Common,
    Total,
    Today,
    CoronaItemList,
  },
};
</script>

<style scoped>
.corona-item-list {
  width: 438px;
  padding: 22px 35px;
}
.item-list {
  width: 400px;
  overflow-y: hidden;
  overflow-x: scroll;
  padding: 10px;
  padding-left: 0px;
  padding-right: 20px;
  cursor: pointer;
}
.list {
  margin-bottom: 20px;
}
.description {
  display: flex;
  position: relative;
  margin-bottom: 10px;
}
.description > div {
  position: relative;
  font-size: 12px;
}
.description > .country {
  left: 40px;
}
.description > .world-decide {
  left: 125px;
}
.description > .world-death {
  left: 200px;
}
.description > .nat-death-rate {
  left: 235px;
}
.item {
  width: 450px;
  height: 48px;
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
.item > div:nth-child(1) {
  position: sticky;
  left: 0px;
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
@media screen and (max-width: 480px) {
  .corona-item-list {
    width: 70%;
    margin: 0 auto 20px;
  }
  .item-list {
    width: 95%;
  }

  .description > .country {
    left: 43px;
  }
  .description > .world-decide {
    left: 135px;
  }
  .description > .world-death {
    left: 215px;
  }
  .description > .nat-death-rate {
    left: 265px;
  }
}
@media screen and (max-width: 320px) {
  .corona-item-list {
    width: 55%;
  }
  .item-list {
    width: 90%;
  }
  .description > .country {
    left: 42px;
  }
  .description > .world-decide {
    left: 128px;
  }
  .description > .world-death {
    left: 205px;
  }
  .description > .nat-death-rate {
    left: 250px;
  }
}
</style>

<template>
  <div class="corona-item-list">
    <template v-if="loading">
      <ClipSpinner></ClipSpinner>
    </template>
    <template v-else>
      <template v-if="this.$route.path === '/'">
        <div class="select-map">
          <div class="map" @click="selectMapCity" :class="{ active: selectNum === 1 }">지도</div>
          <div class="city_city" @click="selectMapCity" :class="{ active: selectNum === 2 }">지역별 표</div>
        </div>
        <template v-if="selectNum === 1">
          <h1>map</h1>
        </template>
        <template v-else>
          <slot name="item-list"></slot>
        </template>
      </template>
      <template v-else>
        <slot name="item-list"></slot>
      </template>
    </template>
  </div>
</template>

<script>
import ClipSpinner from 'vue-spinner/src/ClipLoader';

export default {
  props: {
    loading: Boolean,
  },
  data() {
    return {
      selectNum: 2,
    };
  },
  methods: {
    selectMapCity(e) {
      if (e.target.className === 'map') {
        this.selectNum = 1;
      } else if (e.target.className === 'city_city') {
        this.selectNum = 2;
      }
    },
  },
  components: {
    ClipSpinner,
  },
};
</script>

<style scoped>
.corona-item-list {
  border: 1px solid #474b55;
  border-radius: 12px;
  background-color: #191f2c;
  margin-bottom: 20px;
}

.select-map {
  display: flex;
  justify-content: center;
  border-radius: 12px;
  cursor: pointer;
  background-color: #272b38;
  color: #717276;
}
.select-map > div {
  background-color: #272b38;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 230px;
  height: 37px;
  cursor: pointer;
}
.select-map > .map {
  border-top-left-radius: 12px;
  border-bottom-left-radius: 12px;
}
.select-map > .city_city {
  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;
}
.active {
  border: 1px solid #555862;
  border-radius: 12px;
  color: #cfcfcf;
  background-color: #2e323e;
}
</style>

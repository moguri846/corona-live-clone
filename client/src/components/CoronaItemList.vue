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
          <KoreaMap></KoreaMap>
        </template>
        <template v-else-if="selectNum === 2">
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
import KoreaMap from './KoreaMap.vue';
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
    KoreaMap,
    ClipSpinner,
  },
};
</script>

<style scoped>
html {
  --reverse-list-color: #191f2c;
}
html.dark {
  --reverse-list-color: white;
}
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
i {
  margin-top: 3px;
  margin-right: 2px;
  font-size: 12px;
}
/*
  light mode
*/
body > div > div:nth-child(2) > div > div {
  background-color: var(--div-color);
}
body > div > div:nth-child(2) > div > div > div:nth-child(1),
body > div > div:nth-child(2) > div > div > div:nth-child(1) > div {
  background-color: var(--select-color);
}
body > div > div:nth-child(2) > div > div > div:nth-child(2) > ul > li:nth-child(odd) > div {
  background-color: var(--list-color);
  border: 1px solid var(--list-color);
  color: var(--text-color);
}
body > div > div:nth-child(2) > div > div > div:nth-child(2) > ul > li:nth-child(even) > div {
  background-color: var(--reverse-list-color);
  border: 1px solid var(--reverse-list-color);
  color: var(--text-color);
}
</style>

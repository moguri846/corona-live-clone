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
.corona-item-list {
  width: 89.8%;
  border-radius: 12px;
  margin-bottom: 20px;
}

.select-map {
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
  border-radius: 12px;
  cursor: pointer;
  color: #717276;
}
.select-map > div {
  width: 232px;
  height: 37px;
  display: flex;
  justify-content: center;
  align-items: center;
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
  background-color: white;
  border-radius: 12px;
  color: var(--text-color);
}
i {
  margin-top: 3px;
  margin-right: 2px;
  font-size: 12px;
}
/*
  light mode
*/
.corona-item-list {
  background-color: var(--div-color);
  border: 1px solid var(--border-color);
}

.content > div > .select-map,
.content > div > .select-map > div {
  background-color: var(--select-color);
}
.content > div > .select-map > .active {
  background-color: var(--active-bg-color);
  border: 1px solid var(--border-color);
}
/*
  반응형
*/
/* 모바일 */
@media screen and (max-width: 480px) {
  .corona-item-list {
    border: 1px solid var(--mobile-border-color);
    border-radius: 0px;
  }
}
</style>

<template>
  <Common>
    <div slot="header" class="header">
      <HeaderTitle>
        <div slot="title" class="title">
          <h3>거리두기 발표</h3>
          <h1>2021년 04월 11일<span>D-8</span></h1>
        </div>
      </HeaderTitle>
    </div>
    <div slot="content" class="content">
      <!-- 나중에 코드 수정 -->
      <KoreaMap :loading="koreaMapLoading"></KoreaMap>
    </div>
  </Common>
</template>

<script>
import Common from '../view/Common.vue';
import HeaderTitle from '../components/HeaderTitle';
import KoreaMap from '../components/KoreaMap.vue';

const CITY_CORONA_LIST = 'CITY_CORONA_LIST';

export default {
  created() {
    if (this.$store.state.cityCoronaList.length === 0) {
      this.stateSpinner();
      this.$store
        .dispatch(`GET_${CITY_CORONA_LIST}`)
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
      koreaMapLoading: false,
    };
  },
  methods: {
    stateSpinner() {
      this.koreaMapLoading = true;
    },
    endSpinner() {
      this.koreaMapLoading = false;
    },
  },
  components: {
    Common,
    HeaderTitle,
    KoreaMap,
  },
};
</script>

<style scoped>
.title {
  display: block;
}
.title > h3 {
  margin-bottom: 10px;
  opacity: 0.8;
}
.title > h1 {
  font-size: 25px;
  font-weight: bold;
}
.title > h1 > span {
  margin-left: 10px;
  border: 1px solid #1e253b;
  border-radius: 12px;
  color: #5672e6;
  background-color: #1e253b;
  padding: 2px 8px;
}
/*
  light mode
*/
.title > h1,
.title > h3 {
  color: var(--text-color);
}
.title > h1 > span {
  background-color: var(--social-span-color);
  border: 1px solid var(--social-span-color);
}
/* 
  반응형
*/
@media screen and (max-width: 480px) {
  .title {
    width: 80%;
    margin: 0 auto 20px;
    border: 1px solid #191f2c;
  }
  .title > h1,
  .title > h3 {
    margin-left: 20px;
  }
}
@media screen and (max-width: 375px) and (min-width: 320px) {
  .title {
    width: 70%;
    margin: 0 auto 20px;
    border: 1px solid #191f2c;
  }
  .title > h1,
  .title > h3 {
    margin-left: 20px;
  }
}
</style>

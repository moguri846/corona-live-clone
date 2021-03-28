<template>
  <div class="city">
    <div class="select-map">
      <div class="map">지도</div>
      <div class="city_city">지역별 표</div>
    </div>
    <div class="item-list">
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
          <div>{{ item.gubun._text }}</div>
          <div>ㅇ명</div>
          <div>
            {{ item.defCnt._text }}명<span>{{ item.incDec._text }}↑</span>
          </div>
          <div>{{ item.deathCnt._text }}명</div>
          <div>{{ item.isolClearCnt._text }}명</div>
          <div>{{ item.qurRate._text }}명</div>
          <div>></div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  computed: {
    ...mapState(['cityCoronaList']),
  },
};
</script>

<style scoped>
.city {
  border: 1px solid #474b55;
  border-radius: 12px;
  background-color: #191f2c;
  padding: 12px 25px;
  margin-bottom: 20px;
}
.select-map {
  display: flex;
  justify-content: center;
  border-radius: 12px;
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
.item-list {
  width: 440px;
  overflow-y: hidden;
  overflow-x: scroll;
  padding: 10px;
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
}
</style>

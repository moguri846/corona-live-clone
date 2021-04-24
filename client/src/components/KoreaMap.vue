<template>
  <div class="korea-map">
    <img src="../img/1619245025827.png" />
    <div class="gubun-list">
      <div v-for="(item, index) in cityCoronaList" :key="index" class="gubun" :class="item.gubun_en">
        <div>{{ item.gubun }}</div>
        <div><i class="fas fa-arrow-up"></i>{{ item.incDec }}</div>
      </div>
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
.korea-map > img {
  width: 462px;
  position: relative;
  left: 20px;
}
.korea-map {
  position: relative;
}
.gubun {
  position: absolute;
  padding: 6px;
  border: 1px solid #191f2c;
  border-radius: 12px;
  text-align: center;
  background-color: black;
  opacity: 0.9;
}
.gubun > div:nth-child(2) {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3px;
  margin-top: 5px;
  border-radius: 12px;
  color: #eb5374;
  background-color: black;
}
.Seoul {
  top: 110px;
  left: 200px;
}
.Gyeonggi-do {
  top: 50px;
  left: 170px;
}
.Gyeongsangnam-do {
  top: 305px;
  left: 240px;
}
.Ulsan {
  top: 280px;
  left: 340px;
}
.Busan {
  top: 330px;
  left: 295px;
}
.Gyeongsangbuk-do {
  top: 180px;
  left: 320px;
}
.Incheon {
  top: 80px;
  left: 100px;
}
.Chungcheongbuk-do {
  top: 140px;
  left: 265px;
}
.Gwangju {
  top: 330px;
  left: 180px;
}
.Chungcheongnam-do {
  top: 210px;
  left: 110px;
}
.Lazaretto {
  top: 20px;
  left: 40px;
}
.Daejeon {
  top: 200px;
  left: 210px;
}
.Jeollabuk-do {
  top: 260px;
  left: 170px;
}
.Gangwon-do {
  top: 60px;
  left: 280px;
}
.Daegu {
  top: 240px;
  left: 265px;
}
.Jeju {
  bottom: 30px;
  left: 120px;
}
.Jeollanam-do {
  top: 340px;
  left: 120px;
}
.Sejong {
  top: 165px;
  left: 160px;
}
i {
  font-size: 5px;
  margin-left: 3px;
}
</style>

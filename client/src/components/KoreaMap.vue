<template>
  <div class="korea-map">
    <template v-if="loading">
      <ClipSpinner></ClipSpinner>
    </template>
    <template v-else>
      <img src="../img/1619245025827.png" />
      <div class="gubun-list">
        <div v-for="(item, index) in cityCoronaList" :key="index" class="gubun" :class="item.gubun_en">
          <div>{{ item.gubun }}</div>
          <div><i class="fas fa-arrow-up"></i>{{ item.incDec }}</div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import ClipSpinner from 'vue-spinner/src/ClipLoader';
export default {
  props: {
    loading: Boolean,
  },
  computed: {
    ...mapState(['cityCoronaList']),
  },
  components: {
    ClipSpinner,
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
/* 
  반은형
*/
/* 모바일 */
@media screen and (max-width: 480px) {
  .korea-map > img {
    width: 410px;
    left: -20px;
  }
  .Seoul {
    top: 90px;
    left: 140px;
  }
  .Gyeonggi-do {
    top: 30px;
    left: 120px;
  }
  .Gyeongsangnam-do {
    top: 260px;
    left: 170px;
  }
  .Ulsan {
    top: 260px;
    left: 260px;
  }
  .Busan {
    top: 290px;
    left: 220px;
  }
  .Gyeongsangbuk-do {
    top: 150px;
    left: 250px;
  }
  .Incheon {
    top: 60px;
    left: 40px;
  }
  .Chungcheongbuk-do {
    top: 110px;
    left: 200px;
  }
  .Gwangju {
    top: 300px;
    left: 120px;
  }
  .Chungcheongnam-do {
    top: 200px;
    left: 50px;
  }
  .Lazaretto {
    top: 0px;
    left: 0px;
  }
  .Daejeon {
    top: 160px;
    left: 160px;
  }
  .Jeollabuk-do {
    top: 230px;
    left: 110px;
  }
  .Gangwon-do {
    top: 50px;
    left: 220px;
  }
  .Daegu {
    top: 210px;
    left: 210px;
  }
  .Jeju {
    bottom: 20px;
    left: 90px;
  }
  .Jeollanam-do {
    top: 310px;
    left: 50px;
  }
  .Sejong {
    top: 135px;
    left: 100px;
  }
  i {
    font-size: 13px;
  }
}
@media screen and (max-width: 321px) {
  .korea-map > img {
    width: 390px;
  }
}
@media screen and (max-width: 320px) {
  .korea-map {
    font-size: 11px;
  }
  .korea-map > img {
    width: 350px;
    left: -20px;
  }
  .Seoul {
    top: 80px;
    left: 110px;
  }
  .Gyeonggi-do {
    top: 25px;
    left: 80px;
  }
  .Gyeongsangnam-do {
    top: 230px;
    left: 130px;
  }
  .Ulsan {
    top: 220px;
    left: 215px;
  }
  .Busan {
    top: 250px;
    left: 170px;
    z-index: 1;
  }
  .Gyeongsangbuk-do {
    top: 120px;
    left: 220px;
  }
  .Incheon {
    top: 60px;
    left: 30px;
  }
  .Chungcheongbuk-do {
    top: 90px;
    left: 170px;
  }
  .Gwangju {
    top: 240px;
    left: 88px;
  }
  .Chungcheongnam-do {
    top: 170px;
    left: 40px;
  }
  .Lazaretto {
    top: 0px;
    left: 0px;
  }
  .Daejeon {
    top: 140px;
    left: 130px;
  }
  .Jeollabuk-do {
    top: 187px;
    left: 90px;
  }
  .Gangwon-do {
    top: 30px;
    left: 180px;
  }
  .Daegu {
    top: 180px;
    left: 175px;
  }
  .Jeju {
    bottom: 20px;
    left: 70px;
  }
  .Jeollanam-do {
    top: 250px;
    left: 40px;
  }
  .Sejong {
    top: 130px;
    left: 85px;
  }
  i {
    font-size: 13px;
  }
}
</style>

<template>
  <div class="today">
    <div>
      <div>
        <h3>오늘 확진자수</h3>
        <!-- <div>{{| makeComma}}명</div> -->
        <div>ㅇㅇ명</div>
      </div>
      <div>
        <!-- <div>vs 어제 {{| makeComma}}</div> -->
        <!-- <div>vs 1주전 {{| makeComma}}</div> -->
        <div>vs 어제 ㅇㅇ</div>
        <div>vs 1주전 ㅇㅇ</div>
      </div>
      <div>
        <!-- <div>vs 2주전 {{| makeComma}}</div> -->
        <!-- <div>vs 1달전 {{| makeComma}}</div> -->
        <div>vs 2주전 ㅇㅇ</div>
        <div>vs 1달전 ㅇㅇ</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.today {
  width: 99.6%;
  border: 1px solid #474b55;
  border-radius: 12px;
  height: 142px;
  margin-bottom: 20px;
  background-color: #191f2c;
}
.today > div {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 12px 0px;
  text-align: center;
  height: 70px;
  border: 1px solid #474b55;
  border-radius: 12px;
}
.today > div > div:nth-child(1) > div {
  font-size: 30px;
}
/*
  light mode
*/
.today {
  background-color: var(--div-color);
  border: 1px solid var(--border-color);
  color: var(--text-color);
}
.today > div {
  border: 1px solid var(--border-color);
}
/*
  반응형
*/
/* 모바일 */
@media screen and (max-width: 480px) {
  .today {
    border: 1px solid var(--mobile-border-color);
    border-radius: 0px;
    font-size: 15px;
  }
  .today > div {
    border: 1px solid var(--mobile-border-color);
    border-radius: 0px;
  }
}
@media screen and (max-width: 300px) {
  .today {
    font-size: 12px;
  }
}
</style>

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
    <h1>모르겠어요 ㅠㅠ</h1>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.today {
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
.today > h1 {
  text-align: center;
  font-size: 40px;
}
/*
  light mode
*/
body > div > div:nth-child(2) > div > div:nth-child(2) {
  background-color: var(--div-color);
  color: var(--text-color);
}
</style>

<template>
  <div class="total-corona">
    <div>
      <div class="decide">
        <h3>확진자</h3>
        <div>{{ totalCoronaList.decideCnt._text }}</div>
        <div>505</div>
      </div>
      <div class="death">
        <h3>사망자</h3>
        <div>{{ totalCoronaList.deathCnt._text }}</div>
        <div>505</div>
      </div>
      <div class="clear">
        <h3>완치자</h3>
        <div>{{ totalCoronaList.clearCnt._text }}</div>
        <div>505</div>
      </div>
      <div class="accExam">
        <h3>검사자</h3>
        <div>{{ totalCoronaList.accExamCnt._text }}</div>
        <div>505</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  computed: {
    ...mapState(['totalCoronaList']),
  },
};
</script>

<style scoped>
.total-corona {
  width: 484px;
  padding: 12px;
  border: 1px solid #474b55;
  border-radius: 12px;
  background-color: #191f2c;
  margin-bottom: 20px;
}
.total-corona > div {
  display: flex;
  justify-content: space-between;
  padding: 10px;
}
.total-corona > div > div {
  display: inline-block;
  text-align: center;
}
.total-corona > div > div > div:nth-child(2) {
  font-weight: bold;
  padding: 5px;
}
h3 {
  font-size: 12px;
  opacity: 0.7;
}
.decide > div {
  color: #eb5374;
}
.decide > div:nth-child(3) {
  color: #eb5374;
  width: fit-content;
  background-color: #262331;
  opacity: 0.8;
  margin: 0 auto;
  border-radius: 12px;
  padding: 0px 5px;
}
.death > div {
  color: #f0f8ff;
}
.death > div:nth-child(3) {
  color: #6b6d71;
  width: fit-content;
  background-color: #242836;
  opacity: 0.8;
  margin: 0 auto;
  border-radius: 12px;
  padding: 0px 5px;
}
.clear > div {
  color: #188a17;
}
.clear > div:nth-child(3) {
  color: #188a17;
  width: fit-content;
  background-color: #19282b;
  opacity: 0.8;
  margin: 0 auto;
  border-radius: 12px;
  padding: 0px 5px;
}
.accExam > div {
  color: #4173eb;
}
.accExam > div:nth-child(3) {
  color: #4173eb;
  width: fit-content;
  background-color: #1d2438;
  opacity: 0.8;
  margin: 0 auto;
  border-radius: 12px;
  padding: 0px 5px;
}
</style>

<template>
  <div class="total">
    <template v-if="loading">
      <PacmanSpinner></PacmanSpinner>
    </template>
    <template v-else>
      <slot name="decide"></slot>
      <slot name="death"></slot>
      <slot name="clear"></slot>
      <slot name="accExam"></slot>
      <slot name="vaccine-1"></slot>
      <slot name="vaccine-2"></slot>
    </template>
  </div>
</template>

<script>
import PacmanSpinner from 'vue-spinner/src/PacmanLoader';

export default {
  props: {
    loading: Boolean,
  },
  components: {
    PacmanSpinner,
  },
};
</script>

<style scoped>
.total {
  width: 470px;
  display: flex;
  margin: 0px;
  padding: 20px;
  border: 1px solid #474b55;
  border-radius: 12px;
  text-align: center;
  background-color: #191f2c;
  margin-bottom: 20px;
}
.total > div > div:nth-child(2) {
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
.v-spinner {
  margin: 0 auto;
}
</style>

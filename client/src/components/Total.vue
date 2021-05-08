<template>
  <div class="total">
    <template v-if="loading">
      <PacmanSpinner></PacmanSpinner>
    </template>
    <template v-else>
      <slot name="decide"></slot>
      <slot name="death"></slot>
      <slot name="clear"></slot>
      <slot name="exam"></slot>
      <slot name="firstVaccine"></slot>
      <slot name="secondVaccine"></slot>
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
  width: 91.76%;
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
  font-size: 18px;
  padding: 5px;
}
h3 {
  font-size: 12px;
  color: white;
  opacity: 0.9;
}
.total > div > div:nth-child(3) {
  width: fit-content;
  opacity: 0.9;
  margin: 0 auto;
  margin-top: 3px;
  border-radius: 12px;
  padding: 3px 15px;
}
.decide > div {
  color: #eb5374;
}
.decide > div:nth-child(3) {
  color: #eb5374;
  background-color: var(--decide-color);
}
.death > div {
  color: #f0f8ff;
}
.death > div:nth-child(3) {
  color: #6b6d71;
  background-color: var(--death-color);
}
.clear > div {
  color: #188a17;
}
.clear > div:nth-child(3) {
  color: #188a17;
  background-color: var(--clear-color);
}
.exam > div {
  color: #4173eb;
}
.exam > div:nth-child(3) {
  color: #4173eb;
  background-color: var(--exam-color);
}
.v-spinner {
  margin: 0 auto;
}
.firstVaccine > div {
  color: #188a17;
}
.firstVaccine > div:nth-child(3) {
  color: #188a17;
  background-color: var(--clear-color);
}
.secondVaccine > div {
  color: #4173eb;
  margin-left: 7px;
}
.secondVaccine > div:nth-child(3) {
  color: #4173eb;
  background-color: var(--exam-color);
}
/*
 light mode
*/
.total {
  border: 1px solid var(--border-color);
}
.total,
.total > div > h3,
.total .death > div:nth-child(2) {
  background-color: var(--div-color);
  color: var(--text-color);
}
/*
  반응형
*/
/* 모바일 */
@media screen and (max-width: 480px) {
  .total {
    border: 1px solid var(--mobile-border-color);
    border-radius: 0px;
    padding-left: 15px;
  }
}
@media screen and (max-width: 320px) {
  .total {
    padding-left: 12px;
  }
}
</style>

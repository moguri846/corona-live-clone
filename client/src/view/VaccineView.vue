<template>
  <Common>
    <div slot="header" class="header">
      <Total>
        <div slot="vaccine-1">
          <h3>1차 접종</h3>
          <div>0</div>
          <div>0</div>
        </div>
        <div slot="vaccine-2">
          <h3>2차 접종</h3>
          <div>0</div>
          <div>0</div>
        </div>
      </Total>
    </div>
    <div slot="content" class="content">
      <div class="vaccine">
        <div class="type-of-vaccine">
          <div>화이자</div>
          <div>아스트라제네카</div>
          <div>얀센</div>
          <div>모더나</div>
        </div>
        <div class="desc"></div>
      </div>
    </div>
  </Common>
</template>

<script>
import Common from '../view/Common.vue';
import Total from '../components/Total.vue';

export default {
  created() {
    if (this.$store.state.vaccinationInfo.length === 0) {
      this.$store.dispatch('GET_VACCINATION_INFO');
    }
  },
  components: {
    Common,
    Total,
  },
};
</script>

<style scoped>
.vaccine {
  width: 486px;
  border: 1px solid #474b55;
  padding: 12px;
  border-radius: 12px;
  background-color: #191f2c;
  margin-bottom: 20px;
}
.type-of-vaccine {
  display: flex;
  justify-content: space-evenly;
  background-color: #272b38;
  border-radius: 12px;
  height: 36px;
}
.type-of-vaccine > div {
  width: fit-content;
  line-height: 36px;
  padding: 0px 10px;
}
.total {
  justify-content: space-evenly;
}
</style>

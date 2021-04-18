<template>
  <Common>
    <div slot="header" class="header">
      <Total :loading="loading">
        <div slot="toDayVaccine" class="toDayVaccine">
          <h1>당일 접종</h1>
          <div>
            <div class="toDayVaccine-1">
              <h3>1차 접종</h3>
              {{ totalVaccinationInfo.toDayVaccine.first | makeComma }}
            </div>
            <div class="toDayVaccine-2">
              <h3>2차 접종</h3>
              {{ totalVaccinationInfo.toDayVaccine.second | makeComma }}
            </div>
          </div>
        </div>
        <div slot="totalVaccine" class="totalVaccine">
          <h1>누적 접종</h1>
          <div>
            <div class="totalVaccine-1">
              <h3>1차 접종</h3>
              {{ totalVaccinationInfo.totalVaccine.first | makeComma }}
            </div>
            <div class="totalVaccine-2">
              <h3>2차 접종</h3>
              {{ totalVaccinationInfo.totalVaccine.second | makeComma }}
            </div>
          </div>
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
import { mapState } from 'vuex';

export default {
  created() {
    if (this.$store.state.totalVaccinationInfo.length === 0) {
      this.startSpinner();
      this.$store
        .dispatch('GET_TOTAL_VACCINATION_INFO')
        .then(() => {
          setTimeout(() => {
            this.endSpinner();
          }, 1000);
        })
        .cacth(err => console.log(err));
    }
  },
  data() {
    return {
      loading: false,
    };
  },
  computed: {
    ...mapState(['totalVaccinationInfo']),
  },
  methods: {
    startSpinner() {
      this.loading = true;
    },
    endSpinner() {
      this.loading = false;
    },
  },
  components: {
    Common,
    Total,
  },
};
</script>

<style scoped>
.total {
  justify-content: space-evenly;
}
.total > div > div {
  display: flex;
  margin-top: 5px;
}
.total > div > div > div:nth-child(1) {
  margin-right: 30px;
}
.total > div > div > div h3 {
  margin-bottom: 5px;
}
.toDayVaccine {
  color: #188a17;
}
.totalVaccine {
  color: #5673eb;
}
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
</style>

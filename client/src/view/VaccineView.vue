<template>
  <Common>
    <div slot="header" class="header">
      <Total :loading="loading">
        <div slot="toDayVaccine" class="toDayVaccine">
          <h1>전일 접종</h1>
          <div>
            <div class="toDayVaccine-1">
              <h3>1차 접종</h3>
              {{ totalVaccinationInfo.toDayFirst | makeComma }}
            </div>
            <div class="toDayVaccine-2">
              <h3>2차 접종</h3>
              {{ totalVaccinationInfo.toDaySecond | makeComma }}
            </div>
          </div>
        </div>
        <div slot="totalVaccine" class="totalVaccine">
          <h1>누적 접종</h1>
          <div>
            <div class="totalVaccine-1">
              <h3>1차 접종</h3>
              {{ totalVaccinationInfo.totalFirst | makeComma }}
            </div>
            <div class="totalVaccine-2">
              <h3>2차 접종</h3>
              {{ totalVaccinationInfo.totalSecond | makeComma }}
            </div>
          </div>
        </div>
      </Total>
    </div>
    <div slot="content" class="content">
      <TypeOfVaccine></TypeOfVaccine>
    </div>
  </Common>
</template>

<script>
import { mapState } from 'vuex';

import Common from '../view/Common.vue';
import Total from '../components/Total.vue';
import TypeOfVaccine from '../components/TypeOfVaccine.vue';

export default {
  created() {
    if (this.$store.state.totalVaccinationInfo.length === 0) {
      this.startSpinner();
      this.$store.dispatch('GET_TOTAL_VACCINATION_INFO').then(() => {
        setTimeout(() => {
          this.endSpinner();
        }, 1000);
      });
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
    TypeOfVaccine,
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
/*
  light mode
*/
.toDayVaccine > div > div > h3,
.totalVaccine > div > div > h3 {
  color: var(--text-color);
}
</style>

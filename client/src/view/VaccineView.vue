<template>
  <Common>
    <div slot="header" class="header">
      <Total :loading="loading">
        <div slot="firstVaccine" class="firstVaccine">
          <h3>1차 접종</h3>
          <div>{{ totalVaccinationInfo.totalFirstVaccine | makeComma }}</div>
          <div>{{ totalVaccinationInfo.firstVaccine | makeComma }}<i class="fas fa-arrow-up"></i></div>
        </div>
        <div slot="secondVaccine" class="secondVaccine">
          <h3>2차 접종</h3>
          <div>{{ totalVaccinationInfo.totalSecondVaccine | makeComma }}</div>
          <div>{{ totalVaccinationInfo.secondVaccine | makeComma }}<i class="fas fa-arrow-up"></i></div>
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
i {
  margin-left: 3px;
  margin-top: 2px;
  font-size: 12px;
}
/*
  light mode
*/
.toDayVaccine > div > div > h3,
.totalVaccine > div > div > h3 {
  color: var(--text-color);
}
</style>

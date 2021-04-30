<template>
  <Common>
    <div slot="header" class="header">
      <HeaderTitle>
        <div slot="title" class="title">
          <div>
            <router-link to="/"><i class="fas fa-chevron-left"></i></router-link>
          </div>
          <div>자주 묻는 질문</div>
          <div><i class="fas fa-paper-plane"></i></div>
        </div>
      </HeaderTitle>
    </div>
  </Common>
</template>

<script>
import Common from '../view/Common.vue';
import HeaderTitle from '../components/HeaderTitle';

export default {
  components: {
    Common,
    HeaderTitle,
  },
};
</script>

<style scoped>
.title {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.router-link-active {
  padding: 0px;
}
/*
  light mode
*/
.title,
.title > div > a > i {
  color: var(--text-color);
}
</style>

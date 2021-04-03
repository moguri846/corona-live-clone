<template>
  <div class="wrap">
    <NavBar></NavBar>
    <div>
      <slot name="header"></slot>
      <slot name="content"></slot>
      <div class="footer">
        <Footer></Footer>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from '../components/NavBar.vue';
import Footer from '../components/Footer.vue';

export default {
  components: {
    NavBar,
    Footer,
  },
};
</script>

<style scoped>
.wrap {
  display: flex;
  margin-top: 40px;
}
</style>

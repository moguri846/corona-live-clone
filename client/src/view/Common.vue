<template>
  <div class="container">
    <NavBar></NavBar>
    <div>
      <HeaderMenu></HeaderMenu>
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
import HeaderMenu from '../components/HeaderMenu.vue';
import Footer from '../components/Footer.vue';

export default {
  components: {
    NavBar,
    HeaderMenu,
    Footer,
  },
};
</script>

<style scoped>
.container {
  width: 100%;
  max-width: 840px;

  display: flex;
  margin-top: 40px;
}
.container > div:nth-child(2) {
  width: 100%;
  max-width: 510px;
  margin: 0 auto;
}
.header,
.content,
.footer {
  width: 100%;
}
.header-menu {
  display: none;
}
/*
  반응형
*/
@media screen and (max-width: 1000px) {
  .menu {
    display: none;
  }
  .header-menu {
    display: block;
  }
}
/* 모바일 */
@media screen and (max-width: 480px) {
  .container {
    margin: 0px;
  }
}
</style>

<template>
  <div class="wrap">
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
.wrap {
  display: flex;
  margin-top: 40px;
}
.header,
.content,
.footer {
  width: 510px;
}
/*
  반응형
*/
@media screen and (max-width: 1000px) {
  .menu {
    display: none;
  }
}
@media screen and (max-width: 480px) {
  .wrap {
    margin: 0px;
  }
  .menu {
    display: none;
  }
}
</style>

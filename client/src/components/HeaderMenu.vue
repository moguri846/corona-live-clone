<template>
  <div class="header-menu">
    <div class="header-menu-top">
      <i class="fas fa-paper-plane"></i>
      <div class="header-menu-title">CORONA<span>LIVE</span>CLONE</div>
      <i class="fas fa-bars"></i>
    </div>
    <ul class="header-menu-bottom">
      <li><router-link to="/">국내</router-link></li>
      <li><router-link to="/world">세계</router-link></li>
      <li><router-link to="/vaccine">백신</router-link></li>
      <li><router-link to="/social-distancing">거리두기</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.header-menu {
  width: 95.68%;
  margin-bottom: 20px;
  border-radius: 12px;
  padding: 10px;
  border: 1px solid var(--border-color);
  background-color: var(--div-color);
}
.header-menu-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 6% 20px 5%;
}
.header-menu-title {
  font-size: 20px;
  margin: 0px 5px;
  font-weight: bold;
}
.header-menu-title > span {
  padding: 0px 5px;
  color: #606fe4;
}
.header-menu-bottom {
  display: flex;
  justify-content: space-around;
}
a {
  padding: 8px;
  color: var(--text-color);
}
.router-link-exact-active {
  border-bottom: 2px solid var(--text-color);
}
/*
  반응형
*/
/* 모바일 */
@media screen and (max-width: 480px) {
  .header-menu {
    border: 1px solid var(--mobile-border-color);
    border-radius: 0px;
  }
}
@media screen and (max-width: 300px) {
  .header-menu-title {
    font-size: 15px;
  }
}
</style>

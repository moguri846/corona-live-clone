<template>
  <div class="menu">
    <div class="title">CORONA<span>LIVE</span>CLONE</div>
    <nav class="nav-menu">
      <div><router-link to="/">국내</router-link></div>
      <div><router-link to="/world">세계</router-link></div>
      <div><router-link to="/vaccine">백신</router-link></div>
      <div><router-link to="/social-distancing">거리두기</router-link></div>
      <div><router-link to="/faq">자주 묻는 질문</router-link></div>
    </nav>
    <nav class="nav-menu">
      <div>다크모드</div>
      <div>제보하기</div>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style scpoed>
.menu {
  height: 421px;
  position: sticky;
  top: 40px;
  margin-right: 80px;
}
.title {
  height: 52px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
}
.title > span {
  padding: 0px 5px;
  color: #606fe4;
}
.nav-menu {
  width: 240px;
  margin-top: 15px;
  cursor: pointer;
  position: relative;
  z-index: 100;
}
.nav-menu > div {
  display: flex;
  align-items: center;
  margin-left: 1px;
}
.nav-menu:nth-child(3) > div {
  padding: 16px;
}
.title,
.nav-menu {
  border: 1px solid #474b55;
  border-radius: 12px;
  background-color: #191f2c;
}
.router-link-exact-active {
  border-left: 3px solid #cfcfcf;
  background-color: #212533;
  margin-left: -1px;
  font-weight: bold;
}
a {
  padding: 16px;
  width: 240px;
}
</style>

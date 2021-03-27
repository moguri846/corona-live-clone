<template>
  <div class="menu">
    <div class="title">CORONA<span>LIVE</span>CLONE</div>
    <nav class="nav-menu">
      <div>국내</div>
      <div>세계</div>
      <div>백신</div>
      <div>거리두기</div>
      <div>자주 묻는 질문</div>
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
  margin: 15px 0px;
  cursor: pointer;
}
.nav-menu > div {
  display: flex;
  align-items: center;
  padding: 16px;
}
.title,
.nav-menu {
  border: 1px solid #474b55;
  border-radius: 12px;
  background-color: #191f2c;
}
</style>

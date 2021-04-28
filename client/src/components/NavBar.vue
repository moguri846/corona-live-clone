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
      <div>
        라이트 모드
        <label class="switch" for="checkbox">
          <input type="checkbox" id="checkbox" @click="lightMode" />
          <div class="slider round"></div>
        </label>
      </div>
      <div>제보하기</div>
    </nav>
  </div>
</template>

<script>
export default {
  methods: {
    lightMode(e) {
      if (e.target.checked) {
        document.documentElement.classList.add('light');
      } else {
        document.documentElement.classList.remove('light');
      }
    },
  },
};
</script>

<style>
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
  overflow: hidden;
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
.nav-menu:nth-child(3) > div:nth-child(1) {
  display: flex;
  justify-content: space-between;
}
.router-link-exact-active {
  border-left: 3px solid #cfcfcf;
  background-color: #212533;
  margin-left: -1px;
  font-weight: bold;
}
.switch {
  display: inline-block;
  height: 20px;
  position: relative;
  width: 50px;
}

.switch input {
  display: none;
}

.slider {
  background-color: #ccc;
  bottom: 0;
  cursor: pointer;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  transition: 0.4s;
}

.slider:before {
  width: 23px;
  height: 23px;
  background-color: #fff;
  bottom: -2px;
  content: '';
  left: -2px;
  position: absolute;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: #5673eb;
}

input:checked + .slider:before {
  transform: translateX(30px);
}

.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
a {
  padding: 16px;
  width: 240px;
}
body > div > div:nth-child(1) > div,
body > div > div:nth-child(1) > nav,
body > div > div:nth-child(1) > nav > div > a {
  background-color: var(--div-color);
  color: var(--text-color);
}
body > div > div:nth-child(1) > nav > div > .router-link-exact-active {
  background-color: var(--a-color);
}
</style>

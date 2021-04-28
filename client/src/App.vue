<template>
  <router-view></router-view>
</template>

<script>
import './utils/resetCss.css';

export default {};
</script>

<style>
html {
  --bg-color: #101421;
  --div-color: #191f2c;
  --text-color: #c5c5c6;
  --a-color: #212533;
  --span-color: #242836;
  --select-color: #272b38;
  --list-color: #272b38;
  --reverse-list-color: #191f2c;
}
html.light {
  --bg-color: #fafafa;
  --div-color: #ffffff;
  --text-color: black;
  --a-color: #f9f9f9;
  --span-color: #f7f7
  --select-color: #f5f5f5;
  --list-color: #f5f5f5;
  --reverse-list-color: white;
}
body {
  display: flex;
  justify-content: center;
  background-color: var(--bg-color);
  color: #c5c5c6;
}
/*
  light mode content
*/
body > div > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) {
  background-color: var(--div-color);
}
</style>

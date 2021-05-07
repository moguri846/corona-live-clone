<template>
  <router-view></router-view>
</template>

<script>
import './utils/resetCss.css';

export default {};
</script>

<style>
html {
  /* common */
  --border-color: #474b55;
  --active-border-color: #555862;
  --active-text-color: #cfcfcf;
  --active-bg-color: #2e323e;
  --mobile-border-color: #191f2c;

  --bg-color: #101421;
  --div-color: #191f2c;
  --text-color: #c5c5c6;
  --a-color: #212533;
  --span-color: #242836;
  --select-color: #272b38;

  /* nav-menu */
  --nav-menu-boder-left: #cfcfcf;

  /* total */
  --decide-color: #262331;
  --death-color: #242836;
  --clear-color: #19282b;
  --exam-color: #1d2438;

  /* corona item list */
  --list-odd-color: #272b38;
  --list-even-color: #191f2c;
  --list-span-color: #352e3d;
  --list-span-text-color: #af4661;

  /* social distancing view */
  --social-span-color: #1e253b;
}
html.light {
  /* common */
  --border-color: #f0f0f1;
  --active-border-color: #f0f0f1;
  --active-text-color: #545b60;
  --active-bg-color: #ffffff;
  --mobile-border-color: #ffffff;

  --bg-color: #fafafa;
  --div-color: #ffffff;
  --text-color: #464d52;
  --a-color: #f9f9f9;
  --span-color: #f7f7f7;
  --select-color: #f5f5f5;

  /* nav-menu */
  --nav-menu-boder-left: #464d52;

  /* total */
  --decide-color: #fdeef1;
  --death-color: #f7f7f7;
  --clear-color: #e1f4e1;
  --exam-color: #f2f5ff;

  /* corona item list */
  --list-odd-color: #f5f5f5;
  --list-even-color: white;
  --list-span-color: #f4e3e7;
  --list-span-text-color: #ec718c;

  /* social distancing view */
  --social-span-color: #eff2ff;
}

html::-webkit-scrollbar {
  width: 8px;
}
html::-webkit-scrollbar-thumb {
  background-color: #656970;
  border-radius: 10px;
}
html::-webkit-scrollbar-track {
  background-color: #191f2c;
}

body {
  display: flex;
  justify-content: center;
  background-color: var(--bg-color);
  color: #c5c5c6;
  overflow-x: hidden;
}
</style>

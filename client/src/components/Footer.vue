<template>
  <div class="thank-you">
    <span class="thank-you-for-your-help">불철주야 고생하시는 의료진분들의 헌신에 감사드립니다.</span>
    <div class="me">
      <span class="my-email">dkffkekahsl1@naver.com</span>
      <a href="https://github.com/moguri846" target="blank" class="my-github"><span>GitHub</span></a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.thank-you {
  width: 508px;
  height: 100px;
  position: relative;
  display: flex;
  justify-content: center;
  align-content: center;
  border: 1px solid #474b55;
  border-radius: 12px;
  background-color: #191f2c;
  margin-bottom: 20px;
}
.thank-you > .thank-you-for-your-help {
  font-size: 19px;
  line-height: 100px;
}
.me {
  position: absolute;
  bottom: 0px;
  margin-bottom: 10px;
}
.me > .my-email::after {
  content: '';
  width: 1px;
  height: 10px;
  display: inline-block;
  background-color: white;
  margin: 0px 10px;
}
.me > .my-github {
  padding-left: 5px;
}
.me > .my-github > span {
  color: var(--text-color);
}
/* 
  light mode
*/
.thank-you {
  background-color: var(--div-color);
  color: var(--text-color);
  border: 1px solid var(--border-color);
}
</style>

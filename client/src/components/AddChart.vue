<template>
  <div>+ <span>그래프</span>추가</div>
</template>

<script>
export default {};
</script>

<style scoped>
div {
  width: 508px;
  height: 62px;
  border: 1px solid #474b55;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-bottom: 20px;
}
div > span {
  margin-right: 5px;
}
div {
  color: var(--text-color);
  border: 1px solid var(--border-color);
  background-color: var(--div-color);
}
div > span {
  font-weight: bold;
}
/*
  반응형
*/
/* 모바일 */
@media screen and (max-width: 480px) {
  div {
    border: 1px solid var(--mobile-border-color);
  }
}
</style>

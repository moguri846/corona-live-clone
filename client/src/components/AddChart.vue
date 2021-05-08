<template>
  <div class="add-graph">+ <span>그래프</span>추가</div>
</template>

<script>
export default {};
</script>

<style scoped>
.add-graph {
  width: 99.6%;
  height: 62px;
  border: 1px solid #474b55;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-bottom: 20px;
}
.add-graph > span {
  margin-right: 5px;
  font-weight: bold;
}
.add-graph {
  color: var(--text-color);
  border: 1px solid var(--border-color);
  background-color: var(--div-color);
}

/*
  반응형
*/
/* 모바일 */
@media screen and (max-width: 480px) {
  .add-graph {
    border: 1px solid var(--mobile-border-color);
    border-radius: 0px;
  }
}
</style>

<template>
  <div>
    <slot name="title" class="title"></slot>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.title {
  width: 91.78%;
  padding: 3.92%;
  border-radius: 12px;
  border: 1px solid #474b55;
  background-color: #191f2c;
  font-size: 20px;
  margin-bottom: 20px;
}
/*
  light mode
*/
.title {
  background-color: var(--div-color);
  border: 1px solid var(--border-color);
}
</style>

<template>
  <Common>
    <div slot="header" class="header">
      <HeaderTitle>
        <div slot="title" class="title">
          <h3>거리두기 발표</h3>
          <h1>2021년 04월 11일<span>D-8</span></h1>
        </div>
      </HeaderTitle>
    </div>
    <div slot="content" class="content">
      koreaMap
    </div>
  </Common>
</template>

<script>
import Common from '../view/Common.vue';
import HeaderTitle from '../components/HeaderTitle';

export default {
  components: {
    Common,
    HeaderTitle,
  },
};
</script>

<style scoped>
.title {
  display: block;
}
.title > h3 {
  margin-bottom: 10px;
  opacity: 0.8;
}
.title > h1 {
  font-size: 25px;
  font-weight: bold;
}
.title > h1 > span {
  margin-left: 10px;
  border: 1px solid #1e253b;
  border-radius: 12px;
  color: #5672e6;
  background-color: #1e253b;
  padding: 2px 8px;
}
</style>

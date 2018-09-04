<template>
  <!--头部组件（可返回）-->
  <header><i @click="exit" class="iconfont">&#xe667;</i><slot></slot></header>
</template>

<script>
  export default {
    name: "Header",
    data() {
      return {

      }
    },
    methods: {
      exit() {
        history.go(-1);
      }
    }
  }
</script>

<style scoped lang="scss">
  @import '../style/mixin.scss';
  header {
    background-color: #86AA9F;
    color: #EFFCF2;
    font-size: 0.6rem;
    @include px2rem(line-height, 100);
    text-align: center;
    @include px2rem(letter-spacing, 10);
    width: 100vw;
    position: fixed;
    top: 0;
    z-index: 999;
    i {
      position: absolute;
      @include px2rem(left, 20);
    }
  }
</style>

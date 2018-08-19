<template>
    <div id="product">
      <router-link :to="{ name: 'product-page', query: { page: productList._id} }">
        <img v-lazy="productList.imageList[0].url" :alt="productList.imageList[0].desc">
        <p>{{productList.desc}}</p>
      </router-link>
    </div>
</template>

<script>
  export default {
    name: "Product",
    props: {
      productList: Object
    }
  }
</script>

<style scoped lang="scss">
  @import "../style/mixin";
  #product {
    @include px2rem(height, 500);
    width: 100%;
    background-color: #fff;
    padding: 0.2rem;
    box-sizing: border-box;
    img {
      width: 100%;
      height: 80%;
    }
    p {
      display: inline-block;
      margin-top: 0.1rem;
      border-top: 1px solid #999;
      padding-top: 0.1rem;
      text-align: left;
      font-size: 0.4rem;
      width: 100%;
      color: #999;
      overflow: hidden;
    }
  }
</style>

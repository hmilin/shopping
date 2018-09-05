<template>
    <div id="cart-product">
      <router-link :to="{ name: 'product-page', query: { page: product.product_id }}">
        <div id="container">
          <div class="img-container">
            <img :src="product.imageList[0].url" :alt="product.imageList[0].desc">
          </div>
          <div class="desc">
            <p class="product_name">
              {{product.desc}}
            </p>
            <span class="price">￥{{product.price}}</span>
          </div>
        </div>
      </router-link>
    </div>
</template>

<script>
  export default {
    name: "CartProduct",
    props: {
      product: Object
    },
    methods: {

    }
  }
</script>

<style scoped lang="scss">
  @import '../style/mixin';
  #cart-product {
    width: 100%;
    box-sizing: border-box;
    padding: 10px 10px 10px 30px;
    a {
      #container {
        font-size: 0;
        overflow: hidden;
        .img-container {
          float: left;
          @include px2rem(height, 200);
          @include px2rem(width, 200);
          img {
            width: 100%;
            height: 100%;
            overflow: hidden;
          }
        }
        .desc {
          @include px2rem(margin-left, 200);
          @include px2rem(height, 200);
          margin-right: 0;
          font-size: 0.5rem;
          padding: 5px;
          margin-top: auto;
          color: #444;
          position: relative;
          p {
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            overflow: hidden;
            text-overflow: ellipsis;
            text-align: left;
          }
          span {
            position: absolute;
            bottom: 0;
            right: 0;
            color: #d20620;
          }
        }
        .img-container:after {
          content: "";
          display: block;
          float: right;
        }
      }
    }
  }
</style>

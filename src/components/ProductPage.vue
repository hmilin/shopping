<template>
    <div id="product-page">
      <header><i @click="exit" class="iconfont">&#xe667;</i>详情</header>
      <ImageShow class="image-show" :imageList="productDetailList.imageList"></ImageShow>
      <div class="desc"><span>{{productDetailList.desc}}</span></div>
      <div class="details clearfix">
        <div class="details-header">商品信息</div>
        <div class="details-key">
        <p v-for="( value, key) in productDetailList.detailed">{{key}}</p>
        </div>
        <div class="details-value">
          <p v-for="( value, key) in productDetailList.detailed">{{value}}</p>
        </div>
      </div>
      <div class="divided">图文详情</div>
      <div class="larger-version">
        <img v-for="item in productDetailList.largerImage" v-lazy="item.url" alt="item.desc">
      </div>
    </div>
</template>

<script>
  import ImageShow from './ImageShow'
  import { getProductInfor } from "../api/getProductInfor"

  export default {
    name: "ProductPage",
    components: {
      ImageShow
    },
    data() {
      return {
        productDetailList: {}
      }
    },
    methods: {
      exit() {
        history.go(-1);
      }
    },
    mounted() {
      console.log(this.$route.query.page);
      getProductInfor({}, this.$route.query.page).then((response) => {
        if(response.data.code === 200) {
          this.productDetailList = response.data.data;
        }else {
          alert(response.data.message);
        }
        console.log(response);
      })
    }
  }
</script>

<style scoped lang="scss">
  @import '../style/mixin';
  #product-page {
    width: 100%;
    color: #000;
    background-color: #efefef;
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
    .image-show {
      width: 100%;
      @include px2rem(margin-top, 100);
      @include px2rem(height, 600);
    }
    .desc {
      @include px2rem(margin, 20);
      background-color: #fff;
      font-size: 0.4rem;
      text-align: left;
      padding: 10px;
      span {
        @include px2rem(line-height, 60);
      }
    }
    .details {
      background-color: #fff;
      @include px2rem(margin, 20);
      @include px2rem(line-height, 60);
      text-align: left;
      padding: 10px;
      .details-header {
        font-size: 0.7rem;
        @include px2rem(margin-bottom, 20);
      }
      .details-key {
        font-size: 0.5rem;
        color: #999;
        float: left;
        @include px2rem(margin-right, 120);
      }
      .details-value {
        float: left;
        font-size: 0.5rem;
        color: #666;
      }
    }
    .clearfix:after {
      content: '';
      display: block;
      clear: both;
      height: 0;
      visibility:hidden;
    }
    .divided {
      color: #333;
      font-size: 0.5rem;
      @include px2rem(line-height, 100);
    }
    .divided:before, .divided:after {
      content: "";
      @include px2rem(width, 240);
      height: 1px;
      background-color: #666;
      position: relative;
      display: block;

    }
    .divided:before {
      @include px2rem(top, 50);
      @include px2rem(left, 20);
    }
    .divided:after {
      @include px2rem(top, -50);
      @include px2rem(left, 488);
    }
    .larger-version {
      margin: 10px;
      line-height: 0;
      img {
        height: 100%;
        width: 100%;
      }
    }
  }
</style>

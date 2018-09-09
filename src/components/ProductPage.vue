<template>
    <div id="product-page">
      <div v-show="!largeImg">
        <Header>详情</Header>
        <div @click="showImg"><ImageShow class="image-show" :imageList="productDetailList.imageList"></ImageShow></div>
        <div class="desc">
          <span>{{productDetailList.desc}}</span>
          <div class="price">
            <span>￥{{productDetailList.price}}</span>
            <div class="order">
              <i class="iconfont" @click="markLike" :class="{'like': like}">&#xe629;</i>
              <i class="iconfont" @click="toAddCart">&#xe621;</i>
            </div>
          </div>
        </div>
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
          <img v-for="item in productDetailList.largerImage" v-lazy="item.url" alt="item.desc" @click="showVersion(item.url)">
          <p>到底了</p>
        </div>
      </div>
      <div id="large-image"  @click="largeImg=false">
        <LargeImg :imageList="largeImgList" v-show="largeImg"></LargeImg>
      </div>
    </div>
</template>

<script>
  import ImageShow from './ImageShow'
  import { getProductInfor } from "../api/getProductInfor"
  import Header from './Header'
  import { toMark } from "../api/toMark";
  import { cancelMark } from "../api/cancelMark";
  import { getMarkStatus } from "../api/getMarkStatus";
  import { addCart } from "../api/addCart";
  import LargeImg from './LargeImg';

  export default {
    name: "ProductPage",
    components: {
      ImageShow,
      Header,
      LargeImg
    },
    data() {
      return {
        productDetailList: {},
        like: false,
        largeImg: false,
        largeImgList: ''
      }
    },
    methods: {
      //获取产品信息
      getInfor() {
        getProductInfor({}, this.$route.query.page).then((response) => {
          if(response.data.code === 200) {
            this.productDetailList = response.data.data;
          }else {
            alert(response.data.message);
          }
          console.log(response);
        });
      },
      //获取收藏状态
      getStatus() {
        getMarkStatus({}, this.$route.query.page).then((response) => {
          console.log(response);
          if(response.data.code === 200) {
            this.like = response.data.data.ismark;
          }
        })
      },
      markLike() {
        if(this.like === false) {
          toMark({}, this.productDetailList._id).then((response) => {
            if(response.data.code === 200) {
              this.like = true;
            }
          })
        }else {
          cancelMark({}, this.productDetailList._id).then((response) => {
            console.log(response);
            if(response.data.code === 200) {
              this.like = false;
            }
          });
        }
      },
      toAddCart() {
        addCart({}, this.productDetailList._id).then((response) => {
          console.log(response);
          if(response.data.code === 200) {
            alert(response.data.success);
          }
        })
      },
      //展示大图
      showImg() {
        this.largeImgList = this.productDetailList.imageList;
        this.largeImg = true;
      },
      showVersion(url){
        alert(1);
        this.largeImgList = url;
        this.largeImg = true;
      }
    },
    mounted() {
      console.log(this.$route.query.page);
      this.getInfor();
      this.getStatus();
    }
  }
</script>

<style scoped lang="scss">
  @import '../style/mixin';
  #product-page {
    width: 100%;
    color: #000;
    background-color: #efefef;
    .image-show {
      width: 100%;
      @include px2rem(margin-top, 100);
      @include px2rem(height, 600);
    }
    .desc {
      @include px2rem(margin, 20);
      background-color: #fff;
      font-size: 0.5rem;
      text-align: left;
      padding: 10px;
      color: #999;
      span {
        @include px2rem(line-height, 60);
      }
      .price {
        font-size: 0.5rem;
        .order {
          float: right;
          i {
            font-size: 0.6rem;
          }
          .like {
            color: #86AA9F;
          }
        }
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
      p {
        font-size: 0.5rem;
        color: #999;
        @include px2rem(line-height, 100);
      }
    }
    #large-image {
      position: fixed;
      width: 100vw;
      height: 100vh;
      top: 0;
    }
  }
</style>

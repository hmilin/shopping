<template>
    <div id="home" @touchmove="touchMove">
      <Banner :bannerList="storeInfor.bannerList" class="banner"></Banner>
      <div class="product-list">
        <Product class="product" v-for="item in productList" :productList="item"></Product>
      </div>
      <div class="loading">
        <p class="loading">{{loadText}}</p>
      </div>
    </div>
</template>

<script>
  import Banner from './Banner'
  import Product from './Product'
  import { getProductList } from "../api/getProductList"

  export default {
    name: "Home",
    components: {
      Banner,
      Product
    },
    data() {
      return {
        productList: [],
        loadText: '加载更多',
        loading: false,
        offset: 0,
        limit: 4 ,//一次获取几条信息
        scrollTop: 0
      }
    },
    props: {
      storeInfor: Object
    },
    methods: {
      toPreoductList() {
        //获取分页信息
        getProductList({}, this.offset, this.limit, 1).then((response) => {
          console.log(response);
          if(response.data.code === 200) {
            this.offset = this.offset + this.limit;//偏移量变化
            response.data.data.list.map((item, index) => {
              this.productList.push(item);
            })
            if(response.data.data.hasmore === false) {
              this.loadText = '没有更多';
            }else {
              this.loadText = '加载更多';
              this.loading = false;
            }
          } else {
            alert(response.data.message);
          }
        })
      },
      touchMove() {
        if((this.loading === false) && (this.scrollTop !== 0) && (this.scrollTop === document.documentElement.scrollTop)) {
          this.loadText = '加载中';
          this.loading = true;
          this.toPreoductList();
        } else {
          this.scrollTop = document.documentElement.scrollTop;
        }
      }
    },
    mounted() {
      this.$store.dispatch('setTitle','首页');
      //获取第一页数据
      this.toPreoductList();
    }
  }
</script>

<style scoped lang="scss">
  @import '../style/mixin';
  #home {
    .banner {
      width: 100%;
      @include px2rem(height, 450);
    }
    .product-list {
      width: 100%;
      overflow: auto;
      .product {
        width: 45%;
        float: left;
        margin-left: 3.3333%;
        @include px2rem(margin-top, 50);
      }
    }
    .loading {
      @include px2rem(line-height, 120);
      color: #999;
      font-size: 0.4rem;
      background-color: #efefef;
    }
  }
</style>

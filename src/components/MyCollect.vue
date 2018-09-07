<template>
    <div id="my-collect">
      <Header>我的收藏</Header>
      <div id="collect-list">
        <p v-if="collectList.length === 0">没有收藏的宝贝</p>
        <product class="product" v-for="item in collectList" :productList="item"></product>
      </div>
    </div>
</template>

<script>
  import Header from './Header'
  import Product from './Product'
  import { getCollect } from "../api/getCollect";

  export default {
    name: "MyCollect",
    components: {
      Header,
      Product
    },
    data() {
      return {
        collectList: []
      }
    },
    methods: {
      toGetCollect() {
        getCollect({}).then((response) => {
          if(response.data.code === 200) {
            this.collectList = response.data.data.list;
          }
        })
      }
    },
    mounted() {
      this.toGetCollect();
    }
  }
</script>

<style scoped lang="scss">
  @import "../style/mixin";
  #my-collect {
    min-height: 100vh;
    background-color: #efefef;
    #collect-list {
      width: 100%;
      overflow: auto;
      @include px2rem(margin-top, 100);
      p {
        color: #999;
        font-size: 0.5rem;
        @include px2rem(line-height, 200);
      }
      .product {
        width: 45%;
        float: left;
        margin-left: 3.3333%;
        @include px2rem(margin-top, 50);
      }
    }
  }
</style>

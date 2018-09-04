<template>
    <div id="search-result">
      <Header>查找结果</Header>
      <div class="result-show">
        <p v-if="resultList.length === 0"><i class="iconfont">&#xe647;</i>找不到该宝贝</p>
        <Product class="product" v-for="item in resultList" :productList="item"></Product>
      </div>
    </div>
</template>

<script>
  import Product from './Product'
  import Header from './Header'
  import { classifySearch } from "../api/classifySearch"//按分类查找
  import { anywordSearch } from "../api/anywordSearch" //按任意词查找

  export default {
    name: "SearchResult",
    components: {
      Product,
      Header
    },
    data() {
      return {
        query: {},
        resultList: []
      }
    },
    methods: {
      getSearchResult () {
        if(this.query.type === '1') {
          classifySearch({}, this.query.keywords).then((response) => {
            this.resultList = response.data.data;
          })
        }else if(this.query.type === '0') {
          anywordSearch({}, this.query.keywords).then((response) => {
            this.resultList = response.data.data;
          })
        }
      },

    },
    mounted() {
      this.query = this.$route.query;
      this.getSearchResult();
    }
  }
</script>

<style scoped lang="scss">
  @import "../style/mixin";
  #search-result {
    min-height: 100vh;
    background-color: #efefef;
    .result-show {
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

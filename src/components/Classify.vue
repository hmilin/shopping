<template>
    <div id="classify">
      <div class="search-container">
        <div class="search">
          <input type="text">
          <button><i class="iconfont">&#xe647;</i></button>
        </div>
      </div>
      <div class="classify-container" v-for="(value, key) in storeInfor.classify">
        <dl>
          <dt>{{key}}</dt>
          <router-link  v-for="item in value" :to="{ name: 'search-result', query: { keywords: item}}">
            <dd>
              {{item}} <i class="iconfont">&#xe612;</i>
            </dd>
          </router-link>
        </dl>
      </div>
    </div>
</template>

<script>
  export default {
    name: "Classify",
    props: {
      storeInfor: Object
    },
    data() {
      return {
        classifyList: [
          {
            classify_name: '化妆品',
            content: [{ specific_name: '防晒霜', specific_id: 4354},{ specific_name: '粉底', specific_id: 2312 }]
          },
          {
            classify_name: '护肤品',
            content: [{ specific_name: '洗面奶', specific_id: 13},{ specific_name: '面膜', specific_id: 52 }]
          },
          {
            classify_name: '药品',
            content: [{ specific_name: '外用', specific_id: 433 },{ specific_name: '内用', specific_id: 242 }]
          }
        ]
      }
    },
    methods: {

    },
    mounted() {
      this.$store.dispatch('setTitle', '分类');
    }
  }
</script>

<style scoped lang="scss">
  @import '../style/mixin';
  #classify {
    box-sizing: border-box;
    padding: 10px;
    .search-container {
      position: relative;
      background-color: #fff;
      @include px2rem(height, 60);
      @include px2rem(padding, 20);
      input {
        border: 1px solid #999;
        border-radius: 4px;
        @include px2rem(height, 60);
        width: 100%;
        font-size: 0.4rem;
        color: #999;
        padding-left: 10px;
        @include px2rem(padding-right, 80);
        box-sizing: border-box;
      }
      button {
        position: absolute;
        border: none;
        height: 100%;
        @include px2rem(width, 100);
        background-color: transparent;
        top: 0;
        right: 0;
        i {
          font-size: 0.8rem;
          color: #999;
        }
      }
      input:focus {
       border-color: #000;
      }
    }
    .classify-container {
      color: #999;
      margin-top: 10px;
      @include px2rem(padding, 20);
      background-color: #fff;
      text-align: left;
      dt {
        font-size: 0.6rem;
        border-bottom: 1px solid #999;
        padding: 4px 0;
      }
      a {
        color: #999;
        dd {
          font-size: 0.5rem;
          margin: 4px 0;
          i {
            float: right;
            font-size: 0.7rem;
          }
        }
        dd:active {
          background-color: rgba(122, 122, 122, .1);
        }
      }
    }
  }
</style>

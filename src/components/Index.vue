<template>
  <div id="index">
    <header>{{getTitle}}</header>
    <router-view class="content" :storeInfor="storeInfor"></router-view>
    <Footer class="footer" :title="this.getTitle"></Footer>
  </div>
</template>

<script>
  import Footer from './Footer'
  import { getStoreInfor } from "../api/getStoreInfor"

  export default {
    name: "Index",
    data() {
      return {
        storeInfor: {}
      }
    },
    components: {
      Footer
    },
    computed: {
      getTitle() {
        return this.$store.getters.title;
      }
    },
    methods: {

    },
    mounted() {
      //获取商店基本信息
      getStoreInfor({}, 1).then( (response) => {
        console.log('store', response);
        if(response.data.code === 200) {
          this.storeInfor = response.data.data;
        }else {
          alert(response.data.message);
        }
      });
    }
  }
</script>

<style scoped lang="scss">
  @import '../style/mixin';

  #index {
    width: 100vw;
    height: 100%;
    background-color: #efefef;
    header {
      background-color: #86AA9F;
      color: #EFFCF2;
      font-size: 0.6rem;
      @include px2rem(line-height, 100);
      text-align: center;
      @include px2rem(letter-spacing, 10);
      width: 100vw;
      z-index: 999;
      position: fixed;
      top: 0;
    }
    .content {
      @include px2rem(margin-bottom, 120);
      width: 100%;
      overflow: auto; //clear float
      @include px2rem (margin-top, 100);
    }
    .footer {
      width: 100%;
      @include px2rem(height, 120);
      background-color: #fff;
      border-top: 1px solid #999;
      position: fixed;
      bottom: 0;
      font-size: 0.4rem;
    }
  }
</style>

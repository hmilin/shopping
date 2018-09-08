<template>
    <div id="changing">
      <Header>设置</Header>
      <div id="changing-content">
        <div class="head-portrait">
          <span class="title">头像</span>
          <i class="iconfont">&#xe612;</i>
          <div class="clearfix"><span class="image content" ><img :src="userInfor.head_portrait"></span></div>
        </div>
        <div class="username">
          <span class="title">名字</span>
          <span class="content">{{userInfor.username}}</span>
        </div>
      </div>
    </div>
</template>

<script>
  import Header from './Header'
  export default {
    name: "Changing",
    components: {
      Header
    },
    data() {
      return {

      }
    },
    computed: {
        userInfor() {
          return this.$store.getters.infor;
        }
    },
    mounted() {

    }
  }
</script>

<style scoped lang="scss">
  @import '../style/mixin';
  #changing {
    #changing-content {
      @include px2rem(margin-top, 100);
      min-height: 100vh;
      background-color: #efefef;
      padding: 10px;
      >div {
        background-color: rgba(255, 255, 255, 0.5);
        padding: 10px;
        margin-bottom: 10px;
      }
      .head-portrait {
          span {
            line-height: 127px;
            margin-left: 10px;
          }
        i {
          float: right;
          font-size: 20px;
          color: #333;
        }
        .image {
          float: right;
          display: inline-block;
          height: 100px;
          width: 100px;
          border: 2px solid #efefef;
          border-radius: 10px;
          overflow: hidden;
          img {
            height: 100%;
            width: 100%;
            border: none;
          }
        }
      }
      .title{
        float: left;
        color: #333;
        font-size: 20px;
      }
    }
  }
  .clearfix:after{
    content: "";
    display: block;
    visibility: hidden;
    clear: both;
  }
</style>

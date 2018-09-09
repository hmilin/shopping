<template>
    <div id="head-portrait">
      <header>
        <i class="iconfont left" @click="exits">&#xe667;</i>
        <span>个人头像</span>
        <i class="iconfont right" @click="changing=true">&#xe60c;</i>
      </header>
      <div id="image">
        <img :src="image">
      </div>
      <div id="menu" v-show="changing" @click="changing=false">
        <transition name="menus">
          <ul v-show="changing">
            <li>从相册中选择</li>
            <li>保存图片</li>
          </ul>
        </transition>
      </div>
    </div>
</template>

<script>
  export default {
    name: "HeadPortrait",
    props: {
      image: '',
    },
    data() {
      return {
        changing: false
      }
    },
    methods: {
      exits() {
        this.$emit('exit', true);
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "../style/mixin";
  #head-portrait {
    min-height: 100vh;
    background-color: rgba(0, 0, 0, 0.8);
    position: relative;
    header {
      @include px2rem(line-height, 100);
      background-color: #86AA9F;
      font-size: 20px;
      .left {
        float: left;
        margin-left: 10px;
      }
      .right {
        float: right;
        margin-right: 10px;
      }
    }
    #image {
      position: absolute;
      width: 100vw;
      top: 50%;
      transform: translate(0, -50%);
      img {
        width: 100%;
      }
    }
    #menu {
      height: 100vh;
      width: 100vw;
      position: fixed;
      background-color: rgba(0, 0, 0, 0.1);
      ul {
        position: fixed;
        bottom: 0;
        width: 100%;
        background-color: rgba(255, 255, 255, 0.9);
        color: #333;
        font-size: 20px;
        li {
          line-height: 40px;
        }
        li:active {
          background-color: rgba(0, 0, 0, 0.1);
        }
        li:first-of-type {
        border-bottom: 1px solid #999;
        }
      }
      .menus-enter-active {
        animation: fade_in 1s linear;
      }
      .menus-leave-active {
        animation: fade-out 10s linear;
      }
      @keyframes fade-in {
        0% {
          bottom: -80px;
        }
        50% {
          bottom: -40px
        }
        100% {
          bottom: 0;
        }
      }
      @keyframes fade-out {
        0% {
          bottom: 0;
        }
        50% {
          bottom: -40px
        }
        100% {
          bottom: -80px;
        }
      }
    }
  }
</style>

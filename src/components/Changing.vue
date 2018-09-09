<template>
    <div id="changing">
      <div id="changing-time" v-show="!changingHead">
        <Header>设置</Header>
        <div id="changing-content">
          <div class="head-portrait" @click="changingHead = true">
            <span class="title">头像</span>
            <span class="image content"><img :src="userInfor.head_portrait"></span>
            <i class="iconfont">&#xe612;</i>
          </div>
          <div class="username" @click="changingName = true">
            <span class="title">名字</span>
            <span class="content">{{userInfor.username}}</span>
            <i class="iconfont">&#xe612;</i>
          </div>
        </div>
      </div>
      <HeadPortrait v-show="changingHead" @exit="exits" :image="userInfor.head_portrait"></HeadPortrait>
      <ChangeName id="change-name" v-show="changingName" @exit="nameExits" :username="userInfor.username" @newName="getNewName"></ChangeName>
    </div>
</template>

<script>
  import Header from './Header'
  import HeadPortrait from './HeadPortrait'
  import ChangeName from './ChangeName'
  export default {
    name: "Changing",
    components: {
      Header,
      HeadPortrait,
      ChangeName
    },
    data() {
      return {
        changingHead: false,
        changingName: false
      }
    },
    computed: {
        userInfor() {
          return this.$store.getters.infor;
        }
    },
    methods: {
      exits(state) {
        if(state === true) {
          this.changingHead = false;
        }
      },
      nameExits(state) {
        if(state === true) {
          this.changingName = false;
        }
      },
      getNewName(newName) {
        let infor = this.userInfor;
        infor.username = newName;
        console.log('infor'. infor)
        this.$store.dispatch('setInfor', infor);
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
        position: relative;
      }
      >div:active {
        background-color: rgba(222, 222, 222, 0.5);
      }
      .head-portrait {
        height: 104px;
          span {
            line-height: 104px;
            margin-left: 10px;
          }
        i {
          line-height: 100px;
        }
        .image {
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
      .username {
        height: 26px;
        i {
          line-height: 26px;
        }
      }
      .title{
        float: left;
        color: #333;
        font-size: 20px;
      }
      .content {
        position: absolute;
        right: 50px;
        color: #999;
        font-size: 20px;
        line-height: 26px;
      }
      i {
        float: right;
        font-size: 30px;
        color: #333;
      }
    }
    #change-name {
      position: fixed;
      top: 0;
      z-index: 111111;
      height: 100vh;
      width: 100vw;
    }
  }
</style>

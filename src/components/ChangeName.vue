<template>
    <div id="change-name">
      <header>
        <i class="iconfont left" @click="exits">&#xe667;</i>
        <span>个人头像</span>
        <span class="right" @click="toChangeName">保存</span>
      </header>
      <div class="content">
        <input type="text" v-model="username">
      </div>
    </div>
</template>

<script>
  import { changeName } from "../api/changeName";

  export default {
    name: "ChangeName",
    props: {
      username: ''
    },
    methods: {
      exits () {
        this.$emit('exit', true);
      },
      toChangeName() {
        changeName({new_name: this.username}).then((response) => {
          console.log(response);
          if(response.data.code === 200) {
            this.$emit('newName', this.username);
            this.$emit('exit', true);
            this.$store.dispatch('setAlert', true);
            this.$store.dispatch('setContent', '保存成功');
          }
        })
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "../style/mixin";
  #change-name {
    min-height: 100vh;
    background-color: #efefef;
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
    .content {
      background-color: rgba(255, 255, 255, 0.5);
      margin-top: 10px;
      height: 40px;
      input {
        height: 100%;
        width: 100%;
        border: none;
        padding: 0 10px;
        box-sizing: border-box;
        font-size: 20px;
      }
    }
  }
</style>

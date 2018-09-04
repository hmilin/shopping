<template>
    <div id="login">
      <Header>登录</Header>
      <div id="content">
        <div class="input-container">
          <i class="iconfont">&#xe623;</i>
          <input type="text" v-model="username">
        </div>
        <div class="input-container">
          <i class="iconfont">&#xe652;</i>
          <input type="password" v-model="password">
        </div>
        <button @click="toLogin">登录/注册</button>
      </div>
    </div>
</template>

<script>
  import Header from './Header'
  import { login } from "../api/login";

  export default {
    name: "Login",
    components: {
      Header
    },
    data() {
      return {
        username: '',
        password: ''
      }
    },
    methods: {
      toLogin() {
        login({username: this.username, password: this.password}).then((response) => {
          if(response.data.status === 200) {
            this.$router.push('/personage')
          }
          console.log(response);
        })
      }
    }
  }
</script>

<style scoped lang="scss">
  @import '../style/mixin';
  #login {
    height: 100%;
    background-color: #efefef;
    #content {
      width: 100%;
      overflow: auto;
      @include px2rem(margin-top, 100);
      .input-container {
        border: 1px solid #999;
        width: 80%;
        margin-left: 10%;
        color: #999;
        height: 40px;
        margin-top: 30px;
        i {
          font-size: 0.5rem;
        }
        input {
          height: 100%;
          border: none;
          background-color: transparent;
          width: 90%;
          font-size: 0.4rem;
          color: #999;
          padding: 0 5px;
          display: inline-block;
          -webkit-box-sizing: border-box;
          -moz-box-sizing: border-box;
          box-sizing: border-box;
        }
      }
      button {
        width: 80%;
        border: none;
        height: 40px;
        margin-top: 30px;
        background-color: #86AA9F;
        color: #EFFCF2;
        font-size: 0.5rem;
        @include px2rem(letter-spacing, 10);
      }
      button:active {
        opacity: 0.8;
      }
    }
  }
</style>

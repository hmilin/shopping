<template>
  <!--我的-->
  <div id="personage">
    <div id="login_true" v-if="loginStatus">
      <div id="user_infor">
        <div class="img"><img :src="userInfor.head_portrait"></div>
        <div class="infor_content">
          <span>昵称：</span>{{userInfor.username}}
          <p><router-link to="/changing">设置</router-link></p>
        </div>
      </div>
      <div id="function_list">
        <ul>
          <router-link :to="item.url" v-for="item in functionList">
            <li>
              {{item.name}}<i class="iconfont">&#xe612;</i>
            </li>
          </router-link>
        </ul>
      </div>
      <button @click="exit">退出登录</button>
    </div>
    <div id="login_false" v-if="!loginStatus">
      <router-link to="/login">登录</router-link>
    </div>
  </div>
</template>

<script>
  import { getUserInfor } from "../api/getUserInfor";
  import { logout } from "../api/logout";

  export default {
    name: "Personage",
    data() {
      return {
        userInfor: {},
        functionList: [
          { name: '我的收藏', url: '/my_collect' },
          { name: '我的订单', url: '/my_order' },
          { name: '收货地址', url: '/my_address'}
        ],
        loginStatus: false
      }
    },
    methods: {
      exit() {
        //退出登录
        logout({}).then((response) => {
          if(response.data.code === 200) {
            this.loginStatus = false;
            this.$router.push('/login');
          }else {
            alert('退出失败，请重试');
          }
        })
      },
      //获取用户信息
      toGetUserInfor() {
        getUserInfor({}).then((response) => {
          if(response.data.code === 200) {
            this.loginStatus = true;
            this.userInfor = response.data.data;
            this.$store.dispatch('setInfor', response.data.data);
            console.log(this.$store.getters.infor)
          }
        })
      }
    },
    mounted() {
      this.$store.dispatch('setTitle','我的');
      this.toGetUserInfor(); //获取用户信息
    }
  }
</script>

<style scoped lang="scss">
  @import '../style/mixin';
  #personage {
    padding: 10px;
    box-sizing: border-box;
    #login_true {
      #user_infor {
        background-color: rgba(255, 255, 255, 0.5);
        overflow: auto;
        width: 100%;
        .img {
          height: 100px;
          width: 100px;
          border-radius: 100px;
          overflow: hidden;
          float: left;
          margin-left: 10px;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .infor_content {
          color: #999;
          font-size: 0.7rem;
          float: left;
          margin-left: 20px;
          margin-top: 50px;
          transform: translate(0, -50%);
          span {
            font-size: 0.5rem;
          }
          p {
            text-align: left;
            font-size: 0.5rem;
            a {
              color: #999;
            }
            a:active {
              color: #333;
            }
          }
        }
      }
      #function_list {
        box-sizing: border-box;
        width: 100%;
        margin-top: 10px;
        ul {
          a {
            color: #999;
            li {
              background-color: rgba(255, 255, 255, 0.5);
              padding: 0 10px;
              @include px2rem(margin-bottom, 20);
              @include px2rem(line-height, 80);
              text-align: left;
              font-size: 0.5rem;
              i {
                float: right;
                font-size: 0.6rem;
              }
            }
          }
        }
      }
      button {
        width: 100%;
        border: none;
        @include px2rem(height, 80);
        background-color: rgba(153, 153, 153, 0.5);
        color: #999;
        font-size: 0.5rem;
      }
      button:active {
        background-color: rgba(153, 153, 153, 0.8);
      }
    }
    #login_false {
      a {
        color: #999;
        text-decoration: #999;
        font-size: 0.6rem;
      }
    }
  }
</style>

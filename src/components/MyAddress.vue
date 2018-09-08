<template>
    <div id="my-address">
      <Header>收货地址</Header>
      <div id="address-content">
        <!--<div v-if="!changing">
          <p>{{address}}</p>
          <i class="iconfont" @click="changing=true">&#xe610;</i>
        </div>
        <div v-else>
          <textarea name="address" id="" v-model="address" placeholder="请输入收货地址"></textarea>
          <i class="iconfont" @click="submitAddress">&#xe686;</i>
        </div>-->
        <div class="name">
          <span>姓名</span>
          <input type="text" v-model="name">
        </div>
        <div class="phone">
          <span>手机</span>
          <input type="number" v-model="phone">
        </div>
        <div class="location">
          <span>地址</span>
          <input type="text" v-model="location">
        </div>
        <button @click="submitAddress" >确认修改</button>
      </div>
    </div>
</template>

<script>
  import Header from './Header'
  import { getAddress } from "../api/getAddress";
  import { changeAddress } from "../api/changeAddress";

  export default {
    name: "MyAddress",
    components: {
      Header
    },
    data() {
      return {
        name: '',
        phone: '',
        location: '',
        changing: false
      }
    },
    methods: {
      toGetAddress() {
        getAddress({}).then((response) => {
          console.log(response)
          if(response.data.code === 200) {
            this.name = response.data.data.name;
            this.phone = response.data.data.phone;
            this.location = response.data.data.location;
          }
        })
      },
      submitAddress() {
        changeAddress({name: this.name, phone: this.phone, location: this.location}).then((response) => {
          console.log(response)
          if(response.data.code === 200) {
            this.name = response.data.data.name;
            this.phone = response.data.data.phone;
            this.location = response.data.data.location;
          }
        })
      }
    },
    mounted() {
      this.toGetAddress();
    }
  }
</script>

<style scoped lang="scss">
  @import "../style/mixin";
  #my-address {
    #address-content {
      @include px2rem(margin-top, 100);
      background-color: #efefef;
      padding: 10px;
      min-height: 100vh;
      div {
        font-size: 0.5rem;
        text-align: left;
        padding: 5px;
        background-color: rgba(255, 255, 255, 0.5);
        margin-bottom: 10px;
        @include px2rem(line-height, 100);
        span {
          color: #333;
        }
        input, textarea {
          color: #999;
          width: 80%;
          border: none;
          background-color: transparent;
          padding: 0 5px;
        }
      }
      button {
        border: 1px solid #999;
        background-color: #86AA9F;
        @include px2rem(height, 80);
        @include px2rem(width, 200);
        font-size: 0.5rem;
        color: #efefef;
        border-radius: 3px;
      }
    }
  }
</style>

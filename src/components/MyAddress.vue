<template>
    <div id="my-address">
      <Header>收货地址</Header>
      <div id="address-content">
        <textarea name="address" id="" cols="30" rows="10" v-model="address" placeholder="请输入收货地址"></textarea>
        <button @click="submitAddress">删除</button>
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
        address: ''
      }
    },
    methods: {
      toGetAddress() {
        getAddress({}).then((response) => {
          console.log(response)
          if(response.data.code === 200) {
            this.address = response.data.data.address;
          }
        })
      },
      submitAddress() {
        changeAddress({address: this.address}).then((response) => {
          console.log(response)
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
    }
  }
</style>

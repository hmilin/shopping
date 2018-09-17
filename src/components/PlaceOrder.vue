<template>
    <div id="place-order">
      <Header>订单</Header>
      <div id="order-content">
        <div class="my-address">
          <p><span>收货人:{{address.name}}</span><span>手机号:{{address.phone}}</span></p>
          <p>收货地址:{{address.location}}</p>
          <div class="clearfix"><router-link to="/my_address"><i class="iconfont">&#xe610;</i></router-link></div>
        </div>
        <div class="productList">
          <CartProduct v-for="(item, index) in productList" :product="item" :key="index"></CartProduct>
        </div>
        <div class="price"><span>共{{getProductLength}}件需支付￥{{addPrice}}</span>
          <div class="clearfix"><button @click="toPlaceOrder">提交订单</button></div>
          </div>
      </div>
    </div>
</template>

<script>
  import Header from './Header'
  import CartProduct from './CartProduct'
  import { getAddress } from "../api/getAddress";
  import { placeOrder } from "../api/placeOrder";

  export default {
    name: "PlaceOrder",
    components: {
      Header,
      CartProduct
    },
    data() {
      return {
        productList: [],
        address: {}
      }
    },
    computed: {
      getCartList() {
        return this.$store.getters.cartList;
      },
      addPrice() {
        let price = 0;
        this.productList.forEach((item) => {
          price += Number(item.price);
        });
        return price;
      },
      getProductLength() {
        return this.productList.length;
      }
    },
    methods: {
      //获取收货地址
      toGetAddress() {
        getAddress({}).then((response) => {
          if(response.data.code === 200) {
            this.address = response.data.data;
          }
        });
      },
      //提交订单
      toPlaceOrder() {
        placeOrder({productList: this.productList, total_price: this.addPrice}).then((response) => {
          if(response.data.code === 200) {
            this.$store.dispatch('setAlert', true);
            this.$store.dispatch('setContent', '下单成功');
          }
        })
      }
    },
    mounted() {
      this.toGetAddress();
      this.productList = this.getCartList;
    }
  }
</script>

<style scoped lang="scss">
  @import "../style/mixin";
  #place-order {
    #order-content {
      background-color: #efefef;
      min-height: 100vh;
      padding: 10px;
      @include px2rem(margin-top, 100);
      color:#333;
      >div {
        background-color: rgba(255, 255, 255, 0.5);
        margin-bottom: 10px;
      }
      .my-address {
        padding: 10px;
        font-size: 0.5rem;
        color: #333;
        text-align: left;
        span {
          margin-right: 20px;
        }
        a {
          float: right;
          color: #333;
          i {
            font-size: 0.6rem;
          }
        }
        a:active {
          color: #86AA9F;
        }
      }
      .price {
        padding: 10px;
        span {
          float: left;
          font-size: 0.5rem;
          color: #333;
          @include px2rem(line-height, 80);
        }
        button {
          height: 30px;
          width: 50px;
          border: none;
          background-color: #86AA9F;
          @include px2rem(height, 80);
          @include px2rem(width, 200);
          border-radius: 3px;
          float: right;
          font-size: 0.5rem;
          color: #333;
        }
      }
    }
  }
  .clearfix:after {
    clear: both;
    content: "";
    height: 0;
    display: block;
    visibility: hidden;
  }
</style>

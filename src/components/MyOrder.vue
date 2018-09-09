<template>
    <div id="my-order">
      <Header>我的订单</Header>
      <div id="order-content">
        <p v-if="getOrderLength === 0">当前还没有订单</p>
        <div class="order" v-for="order in orderList">
          <div class="order-title desc">
            <span>订单</span>
          </div>
          <div class="product-list">
            <CartProduct v-for="item in order.product" :product="item"></CartProduct>
          </div>
          <div class="order-footer desc">
            <span>{{order.product.length}}件</span>
            <span>共支付{{order.total_price}}元</span>
            <p>成交时间 {{order.transaction_time}}</p>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import Header from './Header'
  import CartProduct from './CartProduct'
  import { getOrder } from "../api/getOrder";
  import moment from 'moment'

  export default {
    name: "MyOrder",
    components: {
      Header,
      CartProduct
    },
    data() {
      return {
        orderList: []
      }
    },
    computed: {
      getOrderLength() {
        if(this.orderList)
        {
          return this.orderList.length;
        }else {
          return 0;
        }
      },
      /*getTime(time) {
        return moment(time).format('YYYY MMM Do hh:mm:ss');
      }*/
    },
    methods: {
      toGetOrder() {
        getOrder('').then((response) => {
          console.log(response);
          if(response.data.code === 200) {
            this.orderList = response.data.data;
          }
          this.orderList.forEach((item) => {
            item.transaction_time = moment(item.transaction_time).format('YYYYMMDD HH:mm:ss ')
          });
        })
      }
    },
    mounted() {
      this.toGetOrder();
    }
  }
</script>

<style scoped lang="scss">
  @import '../style/mixin';
  #my-order {
    #order-content {
      @include px2rem(margin-top, 100);
      min-height: 100vh;
      background-color: #efefef;
      padding: 10px;
      box-sizing: border-box;
      p {
        line-height: 30px;
        font-size: 20px;
        color: #333;
      }
      .order {
        background-color: rgba(255, 255, 255, 0.5);
        box-sizing: border-box;
        padding: 5px;
        border: 1px solid #999;
        margin-bottom: 10px;
        .order-title {
          border-bottom: 1px solid #999;
        }
        .desc {
          @include px2rem(line-height, 80);
          color: #333;
          font-size: 0.5rem;
          text-align: left;
          margin: 0 10px;
        }
        .product-list {

        }
        .order-footer {
          border-top: 1px solid #999;
        }
      }
    }
  }
</style>

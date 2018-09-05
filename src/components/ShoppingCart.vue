<template>
    <div id="shopping-cart">
      <div id="product-list">
        <div class="product" v-for="(product, index) in productList" :key="index">
          <input type="checkbox" :name="product.name" :value="product.product_id" @click="radioCheck" :checked="" >
          <CartProduct :product="product" class="cart-product"></CartProduct>
        </div>
      </div>
      <div id="cart-bottom">
        <div class="checkbox" @click="checkAll">
          <div class="cheackbox-in" :class="{ 'checkbox-active': allCheck }"></div>
        </div>
        <span>全选</span>
        <div class="account right">
          <button>结算</button>
        </div>
        <div class="delete right">
          <i class="iconfont"></i>
          <button>删除</button>
        </div>
      </div>
    </div>
</template>

<script>
  import { getCartContent } from "../api/getCartContent";
  import CartProduct from './CartProduct'

  export default {
    name: "ShoppingCart",
    components: {
      CartProduct
    },
    data() {
      return {
        productList: [],
        allCheck: false,
        checked: []
      }
    },
    methods: {
      toGetCartContent() {
        getCartContent({}).then((response) => {
          console.log(response);
          if(response.data.code === 200) {
            this.productList = response.data.data.cart;
            console.log(this.productList)
          }else if(response.data.code === -3) {
            alert('未登录')
          }
        })
      },
      //全选
      checkAll() {
        if(this.allCheck === false) {
          this.productList.forEach((item) => {
            this.checked.push(item.product_id);
          })
          this.allCheck = true;
        }else if(this.allCheck === true) {
            this.checked = [];
            this.allCheck = false;
        }
      },
      //单选
      radioCheck() {
        this.checkBox.forEach((item) => {
          if(item.checked === true) {
            this.checked.push(item.key);
          }
        })
      }

    },
    mounted() {
      this.$store.dispatch('setTitle','购物车');
      this.toGetCartContent();
    }
  }
</script>

<style scoped lang="scss">
  @import "../style/mixin";
  #shopping-cart {
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
    #product-list {
      background-color: #efefef;
      width: 100%;
      .product {
        position: relative;
        margin-bottom: 10px;
        background-color: rgba(255, 255, 255, 0.5);
        input {
          width: 20px;
          height: 20px;
          border-radius: 20px;
          border: 1px solid #999;
          position: absolute;
          left: 2px;
          top: 50%;
          transform: translate(0, -50%);
        }
        .cart-product {
          display: inline-block;
        }
      }
    }
    #cart-bottom {
      overflow: auto;
      width: 100%;
      box-sizing: border-box;
      padding: 10px;
      background-color: rgba(255, 255, 255, 0.5);
      position: relative;
      .checkbox {
        position: absolute;
        float: left;
        height: 15px;
        width: 15px;
        border: 4px solid #999;
        border-radius: 15px;
        top: 50%;
        left: 15px;
        transform: translate(0, -50%);
        .cheackbox-in {
          border: 2px solid #efefef;
          height: 11px;
          width: 11px;
          border-radius: 12px;
        }
      }
      .checkbox-active {
        background-color: #86AA9F;
      }
      .right {
        float: right;
        height: 30px;
        @include px2rem(width, 120);
        background-color: #86AA9F;
        border-radius: 3px;
        button {
          font-size: 0.5rem;
          background-color: transparent;
          border: none;
          color: #333;
        }
      }
      span {
        color: #999;
        float: left;
        font-size: 0.5rem;
        font-weight: bold;
        margin-left: 30px;
        line-height: 30px;
      }
    }
  }
</style>

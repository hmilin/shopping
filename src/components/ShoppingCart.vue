<template>
    <div id="shopping-cart">
      <div id="hava-product" v-if="productListLength > 0">
        <div id="product-list">
          <div class="product" v-for="(product, index) in productList" :key="index">
            <input type="checkbox" :name="product.name" :value="product.product_id" @click="radioCheck(product._id)" :checked="checkBox[index].checked">
            <CartProduct :product="product" class="cart-product"></CartProduct>
          </div>
        </div>
        <div id="cart-bottom">
          <div class="checkbox" @click="checkAll">
            <div class="cheackbox-in" :class="{ 'checkbox-active': allCheck }"></div>
          </div>
          <span>全选</span>
          <div class="account right">
            <button @click="placeOrder">结算</button>
          </div>
          <div class="delete right">
            <i class="iconfont"></i>
            <button @click="toDeleteCart">删除</button>
          </div>
          <span class="price">￥{{this.price}}</span>
        </div>
      </div>
      <div id="null-product" v-else>
        <p>当前购物车为空</p>
      </div>
    </div>
</template>

<script>
  import { getCartContent } from "../api/getCartContent";
  import CartProduct from './CartProduct'
  import { deleteCart } from "../api/deleteCart";

  export default {
    name: "ShoppingCart",
    components: {
      CartProduct
    },
    data() {
      return {
        productList: [],
        allCheck: false,
        checkBox: [],
        price: 0
      }
    },
    computed: {
      //被选中的id数组
      checkedIdList() {
        let deleteList = [];
        this.checkBox.forEach((item) => {
          if(item.checked === true) {
            //购物车里面的_id
            deleteList.push(item._id);
          }
        });
        return deleteList;
      },
      productListLength() {
        return this.productList.length;
      },
      //被选中的所有产品列表
      checkedList() {
        let checkList = [];
        this.checkBox.forEach((item) => {
          if(item.checked === true) {
            checkList.push(item);
          }
        })
        return checkList;
      }
    },
    methods: {
      toGetCartContent() {
        getCartContent({}).then((response) => {
          console.log(response);
          if(response.data.code === 200) {
            this.productList = response.data.data.cart;
            this.productList.forEach((item, index) => {
              this.checkBox.push(item);
              this.checkBox[index].checked = false;
              this.checkBox[index].key = index;
            });
            console.log(this.productList);
          }else if(response.data.code === -3) {
            this.$store.dispatch('setAlert', '未登录')
          }
        })
      },
      //全选
      checkAll() {
        if(this.allCheck === false) {
          this.checkBox.forEach((item, index) => {
            item.checked = true;
          })
          this.allCheck = true;
        }else if(this.allCheck === true) {
            this.checkBox.forEach((item) => {
              item.checked = false;
            })
            this.allCheck = false;
        }
        this.addPrice();
      },
      //单选
      radioCheck(id) {
        let all = true;
        this.checkBox.forEach((item, index) => {
          //当前商品目前已被选中
          if((item._id === id) && (item.checked === true)) {
            item.checked = false;
          } else if((item._id === id) && (item.checked === false)) {//当前商品目前被选中
            item.checked = true;
          }
        });
        this.checkBox.forEach((item) => {
          if(item.checked === false) {
            all = false;
          }
        });
        if(all === true) {
          this.allCheck = true;
        } else {
          this.allCheck = false;
        }
        this.addPrice();
        console.log('checkbox', this.checkBox)
      },
      //计算价格
      addPrice() {
        this.price = 0;
        this.checkBox.forEach((item) => {
          if(item.checked === true) {
            this.price += Number(item.price);
          }
        });
        console.log('price', this.price)
      },
      //删除商品
      toDeleteCart() {
        let idList = this.checkedIdList;
        console.log('checked', this.checkedIdList)
        deleteCart({deleteList: idList}).then((response) => {
          if(response.data.code === 200) {
            idList.forEach((id) => {
              this.productList.forEach((item, index) => {
                if(item._id === id) {
                  this.productList.splice(index, 1);
                  this.checkBox.splice(index, 1);
                }
              })
            });
          }
        })
      },
      //结算
      placeOrder() {
        let list = {};
        this.checkedIdList.forEach((item, index) => {
          list['key'+index] = item;
        });
        this.$store.dispatch('setCart', this.checkedList);
        console.log('checklist', this.checkedList)
        this.$router.push({ name: 'place-order' });
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
    height: 100%;
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
          width: 90%;
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
      .price {
        float: right;
        color: #333;
        font-weight: normal;
        margin-right: 5px;
      }
    }
    #null-product {
      width: 100%;
      height: 100%;
      background-color: rgba(255, 255, 255, 0.5);
      p {
        font-size: 0.5rem;
        color: #333;
      }
    }
  }
</style>

<template>
    <div id="shopping-cart">
      <div id="product-list">
        <div class="product">
          ppppp
        </div>
      </div>
    </div>
</template>

<script>
  import { getCartContent } from "../api/getCartContent";

  export default {
    name: "ShoppingCart",
    data() {
      return {
        productList: []
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
      }
    },
    mounted() {
      this.$store.dispatch('setTitle','购物车');
      this.toGetCartContent();
    }
  }
</script>

<style scoped lang="scss">
  #shopping-cart {
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
    #product-list {
      background-color: rgba(255, 255, 255, 0.5);
      width: 100%;
    }
  }
</style>

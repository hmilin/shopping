<template>
    <div id="place-order">
      <Header>下单</Header>
      <div id="order-content">hsaudiaidni</div>
    </div>
</template>

<script>
  import Header from './Header'
  export default {
    name: "PlaceOrder",
    components: {
      Header
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
    }
  }
</style>

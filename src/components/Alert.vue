<template>
    <div id="alert">
      <slot></slot>
    </div>
</template>

<script>
  export default {
    name: "Alert",
    mounted() {

    }
  }
</script>

<style scoped lang="scss">
  #alert {
    height: 50px;
    padding: 0 10px;
    line-height: 50px;
    background-color: #999;
    font-size: 18px;
    color: #fefefe;
    border-radius: 5px;
  }
</style>

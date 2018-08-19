<template>
  <div id="personage">

  </div>
</template>

<script>
  export default {
    name: "Personage",
    data() {
      return {

      }
    },
    methods: {

    },
    mounted() {
      this.$store.dispatch('setTitle','我的');
    }
  }
</script>

<style scoped>

</style>

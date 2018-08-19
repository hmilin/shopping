<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  import Banner from './components/Banner'
export default {
  name: 'app',
  components : {
    Banner
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="scss">
  $color0: #EFFCF2;
  $color1: #D6FCEC;
  $color2: #9FF9C6;
  $color3: #83D3BC;
  $color4: #86AA9F;
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #EFFCF2;
  width: 100%;
  height: 100%;
  a {
    text-decoration: none;
  }
}
</style>

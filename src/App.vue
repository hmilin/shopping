<template>
  <div id="app">
    <router-view v-if="isRouterAlive"></router-view>
    <transition name="fade">
      <Alert class="alert" v-show="getState">{{getContent}}</Alert>
    </transition>
  </div>
</template>

<script>
  import Alert from './components/Alert'

export default {
  name: 'app',
  components : {
    Alert
  },
  computed: {
    getState() {
      return this.$store.getters.alertState;
    },
    getContent() {
      return this.$store.getters.alertContent;
    }
  },
  watch: {
    getState: function(){
      if(this.getState === true) {
        setTimeout(() => {
          this.$store.dispatch('setAlert', false);
        }, 1000);
      }
    }
  },
  data() {
    return {
      isRouterAlive: true
    }
  },
  methods: {

  },
  mounted() {

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
  .alert {
    position: fixed;
    top: 50%;
    left: 50%;
    z-index: 999999;
    transform: translate(-50%, -50%);
  }
  .fade-leave {
    opacity: 1;
  }
  .fade-leave-active {
    opacity: 0;
    transition: all .8s linear;
  }
}
</style>

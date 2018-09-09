<template>
    <div id="large-img">
      <div id="slide-list" v-show="imageType">
        <swiper :options="swiperOption">
          <swiper-slide v-for="item in imageList" class="slide">
            <img :src="item.url">
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
      <div id="imgae" v-show="!imageType">
        <img :src="imageList" alt="">
      </div>
    </div>
</template>

<script>
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  export default {
    name: "LargeImg",
    components: {
      swiper,
      swiperSlide
    },
    props: {
      imageList: ''
    },
    data() {
      return {
        swiperOption: {
          autoplay: false,
          pagination : {
            el: '.swiper-pagination'
          }
        }
      }
    },
    computed: {
      imageType() {
        if(Object.prototype.toString.call(this.imageList) === '[object Array]') {
          return true;
        } else {
          return false;
        }
      }
    },
    mounted() {
      console.log(Object.prototype.toString.call(this.imageList))
    }

  }
</script>

<style scoped lang="scss">
  #large-img {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    position: relative;
    >div {
      /*width: 100%;*/
      position: absolute;
      top: 50%;
      transform: translate(0, -50%);
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
</style>

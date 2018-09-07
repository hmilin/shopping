<template>
    <div id="banner">
      <swiper :options="swiperOption">
        <swiper-slide v-for="item in bannerList" class="slide">
          <img :src="item.url">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
</template>

<script>
  import 'swiper/dist/css/swiper.css'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'

  export default {
    name: "Banner",
    components: {
      swiper,
      swiperSlide
    },
    props: {
      bannerList: Array
    },
    data() {
      return {
        swiperOption: {
          pagination : {
            el: '.swiper-pagination'
          },
          loop: true,
          autoplay: {
            delay: 2000,
            disableOnInteraction: false,
            },
          speed: 1000,
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "../style/mixin";
  #banner {
    width: 100%;
    height: 100%;
    overflow: hidden;
    .swiper-container {
      width: 100%;
      height: 100%;
      .slide {
        width: 100%;
        height: 100%;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
</style>

<template>
    <div id="image-show">
      <swiper :options="swiperOption" class="container">
        <swiper-slide v-for="item in imageList" class="slide">
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
    name: "ImageShow",
    components: {
      swiper,
      swiperSlide
    },
    props: {
      imageList: Array
    },
    data() {
      return {
        swiperOption: {
          autoplay: false,
          pagination : {
            el: '.swiper-pagination'
          },
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  #image-show {
    width: 100%;
    height: 100%;
    .container {
      width: 100%;
      height: 100%;
      .slide {
        width: 100%;
        height: 100%;
        img {
          height: 100%;
          width: 100%;
        }
      }
    }
  }
</style>

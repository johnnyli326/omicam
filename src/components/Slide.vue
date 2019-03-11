<template>
  <div>
    <div>
      <!-- swiper -->
      <swiper :options="swiperOption">
        <swiper-slide><div class="slide slide-1"></div></swiper-slide>
        <swiper-slide><div class="slide slide-2"></div></swiper-slide>
        <swiper-slide><div class="slide slide-3"></div></swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
	import { swiper, swiperSlide } from 'vue-awesome-swiper';
	
  export default {
    data() {
      return {
        swiperOption: {
          slidesPerView: 3,
          spaceBetween: 30,
          slidesPerGroup: 3,
          loop: true,
          loopFillGroupWithBlank: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        }
      }
    }
  }
</script>

<style lang="scss">
	@import '~swiper/dist/css/swiper.css';
	.slide {
    width: 300px;
    height: 300px;
	}
	.slide-1 {
		background: url('../assets/images/MoLong.jpg');
		background-position: center center;
		background-size: cover;
	}
	.slide-2 {
		background: url('../assets/images/MoLong.jpg');
		background-position: center center;
		background-size: cover;
	}
	.slide-3 {
		background: url('../assets/images/MoLong.jpg');
		background-position: center center;
		background-size: cover;
	}
</style>
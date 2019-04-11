<template>
  <div>
    <Navbar></Navbar>
    <router-view class="content"></router-view>
    <!-- Go Top -->
    <a href="#" class="goTop" @click.prevent="GoTop()"
    aria-label="Go Top">
      <span class="top-text">Top</span>
    </a>
    <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import $ from 'jquery';

export default {
  name: 'home',
  components: {
    Navbar,
    Footer,
  },
  methods: {
    GoTop() {
      $('html, body').animate({ scrollTop: 0 }, '1000');
    },
  },
  mounted() {
    $(document).ready(() => {
      $(window).scroll(() => { // Go Top show
        const pos = $(window).scrollTop();
        if (pos > 680) {
          $('.goTop').css('display', 'block');
          setTimeout(() => {
            $('.goTop').css('opacity', '1');
          }, 10);
        } else {
          $('.goTop').css('opacity', '0');
          setTimeout(() => {
            $('.goTop').css('display', 'none');
          }, 10);
        }
      });
    });
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/all";

.content {
  margin-top: 60px;
  min-height: calc(100vh - ( 60px ));
}
// Go Top
.goTop {
  display: none;
  opacity: 0;
  width: 28px;
  height: 28px;
  position: fixed;
  bottom: 180px;
  right: 50px;
  z-index: 100;
  background-image: url('../assets/images/gotop.png');
  background-repeat: no-repeat;
  background-size: cover;
  text-decoration: none !important;
  color: gray;
  transition: all .3s cubic-bezier(.645,.045,.355,1);
  @include ipad() {
    right: 10px;
  }
  .top-text {
    display: block;
    margin-top: 28px;
  }
}
</style>

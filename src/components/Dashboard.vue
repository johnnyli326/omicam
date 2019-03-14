<template>
  <div>
    <Navbar></Navbar>
    <router-view class="content"></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'home',
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/all";

.content {
  margin-top: 60px;
  min-height: calc(100vh - ( 68px ));
}
</style>

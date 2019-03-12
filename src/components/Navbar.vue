<template>
  <div>
    <nav class="navbar">
      <div class="ml-5">
        <router-link class="navbar-brand d-block" to="/">
          <h1 class="logo">OmiCam</h1>
        </router-link>
      </div>
      <button class="hamburger-btn">
        <span class="icon-bar top-bar bg-primary"></span>
        <span class="icon-bar middle-bar bg-primary"></span>
        <span class="icon-bar bottom-bar bg-primary"></span>
      </button>
      <ul class="top-menu list-unstyled">
        <li class="menu-item">
          <router-link to="omicam">OmiCam</router-link>
        </li>
        <li class="menu-item">
          <router-link to="omi-studio">Omi Studio</router-link>
        </li>
        <li class="menu-item">
          <router-link to="news">News</router-link>
        </li>
        <li class="menu-item">
          <router-link to="omistory">Omi Story</router-link>
        </li>
        <li class="menu-item">
          <router-link to="support">Support</router-link>
        </li>
        <li class="menu-item">
          <router-link to="contact">Contact</router-link>
        </li>
        <li class="menu-item">
          <router-link to="">
            <i class="fas fa-shopping-cart"></i>
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import $ from 'jquery';

export default {
  name: 'Navbar',
  mounted() {
    $(document).ready(function() {
      // 點擊漢堡
      $('.hamburger-btn').click(function(){
        $(this).toggleClass('active'); // 漢堡收合
        if($('.top-menu').hasClass('show')) { // top-menu 收合
          $('.top-menu').removeClass('show').addClass('hide');
        } else {
          $('.top-menu').removeClass('hide').addClass('show');
        };
      });
      // 點擊li
      $('.menu-item').click(function(){
        $('.hamburger-btn').toggleClass('active');
        $('.top-menu').toggleClass('show');
      });
      // 點擊 logo
      $('.logo').click(function(){
        $('.hamburger-btn').removeClass('active');
        $('.top-menu').removeClass('show');
      });
      // resize 收合top-menu
      $(window).resize(function() {
        if($(window).width() >= 1000){
          $('.top-menu').removeClass('show').removeClass('hide');
          $('.hamburger-btn').removeClass('active');
        };
      });
    })
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" scoped>
.navbar {
  padding: 0;
  &:after {
    content: '';
    width: 100vw;
    height: 76px;
    background-color: black;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }
  .logo {
    background-image: url('../assets/images/logo.png');
    text-indent: 101%;
    overflow:  hidden;
    width: 180px;
    height: 58px;
  }
  .hamburger-btn {
    background: transparent;
    border: 0;
    display: none;
    .icon-bar {
      display: block;
      width: 22px;
      height: 2px;
      right: 0;
      border-radius: 1px;
      margin-bottom: 2px;
      transition: all .2s ease;
    }
    &.active {
      .top-bar {
        transform: rotate(45deg) translate(3px, 2.5px);
      }
      .middle-bar {
        opacity: 0;
      }
      .bottom-bar {
        transform: rotate(-45deg) translate(3px, -2.5px);
      }
    }
    &:focus {
      outline: 0;
    }
    @media(max-width: 1000px) {
      display: inline-block;
    }
  }
  .top-menu {
    display: inline-block;
    margin: 0;
    z-index: 100;
    overflow: hidden;
    @media(max-width: 1000px) {
      height: 0;
      width: 100%;
      background: rgba(0, 0, 0, 0.5);
      &.show {
        height: 100%;
      }
      &.hide {
        height: 0;
      }
    }
    .menu-item {
      display: inline-block;
        @media(max-width: 1000px) {
          display: block;
        }
      a {
        display: inline-block;
        line-height: 76px;
        padding: 0 20px;
        text-decoration: none;
        width: 100%;
        &:hover {
          color: white;
        }
        @media(max-width: 1000px) {
          display: block;
          color: white;
          text-align: center;
          &:hover {
            color: #ffcd05;
            background-color: rgba(0, 0, 0, 0.3);
          }
        }
      }
    }
  }
}
</style>

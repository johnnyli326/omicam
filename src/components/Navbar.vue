<template>
  <div class="nav-wrap fixed-top">
    <nav class="navbar">
      <div>
        <router-link class="logo-link d-block p-0" to="/">
          <h1 class="logo">OmiCam</h1>
        </router-link>
      </div>
      <ul class="top-menu list-unstyled">
        <li class="menu-item">
          <router-link to="/omicam"
          :class="{ 'active': $route.name == 'Omicam' }">
          OMICAM
          </router-link>
        </li>
        <li class="menu-item">
          <router-link to="/omi-studio"
          :class="{ 'active': $route.name == 'OmiStudio' }">
          OMI STUDIO
          </router-link>
        </li>
        <li class="menu-item">
          <router-link to="/news"
          :class="{ 'active': $route.name == 'News' }">
          NEWS
          </router-link>
        </li>
        <li class="menu-item">
          <router-link to="/omistory"
          :class="{ 'active': $route.name == 'OmiStory' }">
          OMI STORY
          </router-link>
        </li>
        <li class="menu-item">
          <a href="https://support.omicam.com/portal/home"
          target="_blank">
            SUPPORT
          </a>
        </li>
        <li class="menu-item">
          <router-link to="/contact"
          :class="{ 'active': $route.name == 'Contact' }">
          CONTACT
          </router-link>
        </li>
      </ul>
      <ul class="list-unstyled mobile-icon">
        <li>
          <button class="hamburger-btn">
            <span class="icon-bar top-bar"></span>
            <span class="icon-bar middle-bar"></span>
            <span class="icon-bar bottom-bar"></span>
          </button>
        </li>
        <li>
          <router-link class="cart mr-3" to="/shop"
          :class="{ 'active': $route.name == 'Shop' }">
            <img class="buy-icon"
            src="../assets/images/Navbar/buy_icon.png"
            alt="buy">
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
    $(document).ready(() => {
      // 點擊漢堡
      $('.hamburger-btn').click(function() {
        $(this).toggleClass('active'); // 漢堡toggle
        if ($('.top-menu').hasClass('show')) { // top-menu 收合
          $('.top-menu').removeClass('show').addClass('hide');
          $('body').css('overflow', 'auto');
          $('.navbar').css('background-color', 'rgba(0, 0, 0)');
          $('.nav-wrap').css('height', 'auto');
        } else {
          $('body').css('overflow', 'hidden'); // body不會scroll
          $('.top-menu').removeClass('hide').addClass('show');
          $('.navbar').css('background-color', 'rgba(0, 0, 0, 0.9)');
          $('.navbar').css('position', 'absolute');
          $('.nav-wrap').css('height', '420px;');
        }
      });
      // 點擊 logo
      $('.logo').click(function() {
        $('.hamburger-btn').removeClass('active');
        $('.top-menu').removeClass('show');
        $('body').css('overflow', 'auto');
        $('.navbar').css('background-color', 'rgba(0, 0, 0)');
        $('.nav-wrap').css('height', 'auto');
      });
      $(window).resize(function() {
        if ($(window).width() >= 1000) { // for stretch device
          $('.top-menu').removeClass('show').removeClass('hide'); // dropdown menu 
          $('.hamburger-btn').removeClass('active');
          $('body').css('overflow', 'auto');
          $('.navbar').css('background-color', 'rgba(0, 0, 0)');
          $('.nav-wrap').css('height', 'auto');
          $('.top-menu').remove().insertBefore($('.mobile-icon')); // move Topmenu before Icon
        } else {
          $('.top-menu').remove().insertAfter($('.mobile-icon')); // move Topmenu after Icon
          $('.menu-item').click(function() { // click menu-item, slideUp top-menu etc...
            $('.hamburger-btn').removeClass('active');
            $('.top-menu').removeClass('show');
            $('body').css('overflow', 'auto');
            $('.navbar').css('background-color', 'rgba(0, 0, 0)');
            $('.nav-wrap').css('height', 'auto');
          });
        }
      });
      if ($(window).width() >= 1000) { // for fixed width device 
        $('.top-menu').remove().insertBefore($('.mobile-icon')); // move Topmenu before Icon
      } else {
        $('.top-menu').remove().insertAfter($('.mobile-icon')); // move Topmenu after Icon
        $('.menu-item').click(function() { // click menu-item, slideUp top-menu etc...
          $('.hamburger-btn').removeClass('active');
          $('.top-menu').removeClass('show');
          $('body').css('overflow', 'auto');
          $('.navbar').css('background-color', 'rgba(0, 0, 0)');
          $('.nav-wrap').css('height', 'auto');
        });
      }
    });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
* {
  font-size: 16px;
}
.navbar {
  padding: 0;
  width: 100vw;
  background-color: #f6af2d !important;
  z-index: 100;
  a {
    color: black;
  }
  .logo-link {
    outline: 0;
    h1.logo {
      background-image: url('../assets/images/Navbar/logo.png');
      background-repeat: no-repeat;
      background-position: center center;
      background-size: contain;
      text-indent: 101%;
      overflow:  hidden;
      width: calc(180px*0.6);
      height: calc(58px*0.6);
      margin-left: 10px;
      height: 60px;
      margin-bottom: 0;
    }
  }
  ul.mobile-icon {
    font-size: 0;
    display: inline-block;
    margin: 0;
    li {
      display: inline-block;
      vertical-align: top;
      text-align: center;
    }
    .cart {
      display: inline-block;
      height: 60px;
      font-size: 16px;
      padding: 0 10px;
      line-height: 60px;
      outline: 0;
      width: 100%;
      &:hover {
        background-color: rgba(0, 0, 0, 0.1);
      }
      &:hover {
        color: white;
        transition: all .3s ease;
      }
      &.active {
        background-color: rgba(0, 0, 0, 0.1);
      }
    }
    .hamburger-btn {
      background: transparent;
      border: 0;
      display: none;
      height: 60px;
      vertical-align: top;
      line-height: 60px;
      .icon-bar {
        display: block;
        width: 22px;
        height: 2px;
        right: 0;
        border-radius: 1px;
        margin-bottom: 2px;
        transition: all .2s ease;
        background-color: black;
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
  }
  .top-menu {
    display: inline-block;
    margin: 0;
    z-index: 100;
    overflow:hidden;
    font-size: 0;
    transition: all .6s;
    // padding-right: 20px;
    margin-left: auto;
    @media(max-width: 1000px) {
      height: 0;
      width: 100%;
      background: rgba(0, 0, 0, 0.1);
      padding-right: 0px;
      &.show {
        height: 100vh;
        overflow-y: scroll;
      }
      &.hide {
        height: 0;
        overflow-y: hidden;
      }
    }
    .menu-item {
      display: inline-block;
      overflow: auto;
      font-size: 16px;
      transition: all .3s ease;
      &:hover {
        background-color: rgba(0, 0, 0, 0.1);
      }
        @media(max-width: 1000px) {
          display: block;
        }
      a {
        display: inline-block;
        height: 60px;
        line-height: 60px;
        padding: 0 10px;
        text-decoration: none;
        width: 100%;
        transition: all .3s ease;
        &.active {
          background-color: rgba(0, 0, 0, 0.1);
        }
        @media(max-width: 1000px) {
          display: block;
          color: black;
          text-align: center;
          &:hover {
            color: white;
            background-color: rgba(0, 0, 0, 0.1);
          }
        }
      }
    }
  }
  .buy-icon {
    width: 16px;
    height: auto;
    padding-bottom: 3px;
  }
}
</style>

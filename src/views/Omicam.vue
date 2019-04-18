<template>
  <div>
    <div class="container omicam-wrap">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb bg-transparent">
          <li class="breadcrumb-item">
            <router-link to="/">
              HOME
            </router-link>
          </li>
          <li class="breadcrumb-item before active" aria-current="page">
            OMICAM
          </li>
        </ol>
      </nav>
      <section class="section1">
        <div class="banner">
          <div class="banner-title">
            <span class="title">OmiCam</span>
            <br class="next-line">
            <small>&nbsp;&nbsp;Wearable VR Camera</small>
          </div>
          <p>
            Experience the new way to capture 4K Virtual Reality Content by using OmiCam,
            Wearable VR Camera. Simply wear it and record your adventure in just one click,
            and then enjoy the immersive first person view video of your moment.
          </p>
        </div>
      </section>
      <section class="section2 text-center">
        <div class="text-center mb-4 icon-box" v-for="(icon, index) in icons" :key="index">
          <!-- :style="[index === icons.length - 1 ? { 'border-right': '1px solid gray' } :  { 'border-right': '0px' }]" -->
          <a :href="icon.section" class="d-inline-block feature-icons">
            <img :src="icon.imgSrc" :alt="icon.name" v-if="icon" class="icons"
            style="width:80%;height:auto;">
          </a>
        </div>
      </section>
    </div>
    <section class="w-100 text-center">
      <!-- 構造圖 -->
      <div class="d-flex justify-content-center align-items-center my-5">
        <img src="../assets/images/OmiCam/sec2.jpg" alt="instruction"
        style="width:90%">
      </div>
      <img src="../assets/images/icons/buy.png" class="link-icon-btn"
      alt="more_icon" usemap="#btnmap_8">
      <map name="btnmap_8">
        <area shape="circle" coords="37.5, 37.5, 37.5" alt="" class="map-area"
        @click.prevent="$router.push('/shop')">
      </map>
    </section>
    <div class="container omicam-wrap">
      <section class="row align-items-center section3 mt-5" id="240">
        <div class="col-lg-6 justify-content-center d-flex">
          <img src="../assets/images/OmiCam/sec3.png" alt="viewAngle"
          class="section3-img">
        </div>
        <div class="col-lg-6">
          <h3 class="section-title">Extremely Wide View</h3>
          <p>
            <ul>
              <li>
                240° Fisheye Lens with 4K VR resolution output captures more
                than what you see.
              </li>
              <li>
                The unique 45 degree forward design prefectly simulated human
                eyes and captured the most immersive experience.
              </li>
            </ul>
          </p>
        </div>
      </section>
      <section class="row align-items-center p-4 section4" id="wear">
        <div class="col-lg-6 py-3
        d-flex justify-content-center align-items-center">
          <img src="../assets/images/OmiCam/sec4.gif" alt="clipboard"
          class="section4-img">
        </div>
        <div class="col-lg-6 text-">
          <h3 class="my-3 section-title">Just Clip and Capture</h3>
          <ul>
            <li>
              Simply mount on your body with 360° clip;
              free your hands and focus on your adventure.
            </li>
            <li>
              Power-On, Record, Lifelog, just 3 buttons works out.
            </li>
          </ul>
        </div>
      </section>
      <section class="row align-items-center section5" id="Lifelog">
        <div class="col-lg-6 justify-content-center d-flex">
          <img src="../assets/images/OmiCam/sec5.png" alt="Lifelog"
          class="section5-img">
        </div>
        <div class="col-lg-6">
          <h3 class="my-3 section-title">
            Operating Whole Day
          </h3>
          <ul>
            <li>
              The unique LIFELOG function automatically record a
              short clip every 1/3/5 mins and can keep working for
              more than 15 hours.
            </li>
            <li>
              Companion with OMI Studio, all clips can be integrated
              as a daily video collection.
            </li>
          </ul>
        </div>
      </section>
      <section class="row align-items-center section6" id="Horizontal">
        <div class="col-lg-6 text-center">
          <iframe src="https://player.vimeo.com/video/330702337"
          width="90%"
          height="300"
          frameborder="0"
          allowfullscreen>
          </iframe>
        </div>
        <div class="col-lg-6">
          <h3 class="my-3 section-title">Always Keep Horizontal & Stable</h3>
          <ul>
            <li>
              The proprietary OMI (Optical Motion Intelligence)
              algorithm keeps OmiCam stablized when recording under
              any conditions.
            </li>
            <li>
              Even OmiCam is in a skewed status, the OMI algorithm will
              find the horizon to keep the picture level.
            </li>
          </ul>
        </div>
      </section>
      <section class="row align-items-center section7" id="splash"
      style="color:white;">
        <div class="col-lg-6 text-center">
          <iframe src="https://player.vimeo.com/video/330710556"
          width="90%"
          height="300"
          frameborder="0"
          allowfullscreen>
          </iframe>
        </div>
        <div class="col-lg-6 section-text">
          <h3 class="section-title">Splash- Proof & Dust- Proof</h3>
          <ul>
            <li>
              OmiCamis is splash&dust proof with IP65 rated which endure most outdoor environment
              without any other case or accessories. 
            </li>
            <li>
              The optional accessory of waterproof case help OmiCam to operate underwater
              and capture the stunning images.
            </li>
          </ul>
        </div>
      </section>
      <section class="section9">
        <div class="row align-items-center h-100">
          <div class="col-lg-6
          d-flex justify-content-center align-items-center">
            <img src="../assets/images/OmiCam/sec8.jpg" alt="accessories"
            class="section9-img">
          </div>
          <div class="col-lg-6 detail mt-4">
            <h3 class="section-title">What is in our package?</h3>
            <ol>
              <li>OmiCam Wearable VR Camera</li>
              <li>Sporty Carrying Bag</li>
              <li>Micro USB Charging Cable</li>
              <li>SD card</li>
              <li>Screw Mount Adapter</li>
              <li>Quick Release</li>
              <li>360° Quick Release Clip</li>
              <!-- <li>Lens Cap</li>
              <li>Quick Guide</li> -->
            </ol>
          </div>
        </div>
      </section>
      <section class="section8 animated">
          <div class="row mr-0 ml-0 section-row">
            <div class="col-lg-6 section8-img
              d-flex justify-content-center align-items-center
              h-100">
            </div>
            <div class="col-lg-6 d-flex justify-content-center align-items-center
              h-100">
              <div class="section-text m-3">
                <h2 class="section-title">OmiCam</h2>
                <p class="section-subTitle">
                  Get Outside. Enjoy nature. (Buy Now)
                </p>
                <img src="../assets/images/icons/buy.png" class="link-icon-btn"
                alt="more_icon" usemap="#btnmap_8">
                <map name="btnmap_8">
                  <area shape="circle" coords="37.5, 37.5, 37.5" alt="" class="map-area"
                  @click.prevent="$router.push('/omicam')">
                </map>
              </div>
            </div>
          </div>
        </section>
      <section class="my-5 section10">
        <h3 class="section-title">Specs</h3>
        <div class="table-responsive">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">ITEM</th>
                <th scope="col">CONTENT</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Sensor</td>
                <td>12M pixel</td>
              </tr>
              <tr>
                <td>Lens</td>
                <td>
                  240deg fisheye/ 45deg forward capture
                </td>
              </tr>
              <tr>
                <td>Watch modes</td>
                <td>
                  1. 360deg video<br>
                  2. VR goggle
                </td>
              </tr>
              <tr>
                <td>Resolution<br>(Panorama Photo&video)</td>
                <td>
                  Phote 4320x2160 
                  Video 4K / 30fps (3840 x 2160) 
                  2.5K / 30fps (2560 x 1440) 
                  FHD / 30fps (1920 x 1080)
                </td>
              </tr>
              <tr>
                <td>Size</td>
                <td>
                  1.81”(W) x 0.8” (D) x 3.68” (H) 
                  45.9mm (W) x 20.3mm (D) x 93.5mm (H)
                </td>
              </tr>
              <tr>
                <td>Battery</td>
                <td>
                  1100mAh 
                  Up to 70 mins (in 4K mode) 
                  Up to 15 hours (in Lifelog™ Video mode)
                </td>
              </tr>
              <tr>
                <td>Camera storage</td>
                <td>
                  Micro SD (SDXC) Classic 10 or above; Max 128G. 
                  (some cards of 256G are workable)
                </td>
              </tr>
              <tr>
                <td>SW Functions</td>
                <td>OMI Studio (edit, calibrate, stabilize, augment, share)</td>
              </tr>
              <tr>
                <td>OS Compatibility</td>
                <td>
                  iOS (8.0 or later) /
                  Android (5.0 or later) /
                  Mac OS (11 or later) /
                  Windows (7 or later)
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import $ from 'jquery';

export default {
  data() {
    return {
      icons: [{
        name: '240Deg View',
        imgSrc: require('../assets/images/OmiCam/240icon.png'),
        section: '#240',
      }, {
        name: 'Easy to Use',
        imgSrc: require('../assets/images/OmiCam/easy-to-use.png'),
        section: '#wear',
      }, {
        name: 'Long Hour Operation',
        imgSrc: require('../assets/images/OmiCam/battery-icon.png'),
        section: '#Lifelog'
      }, {
        name: 'Horizontal & Stable',
        imgSrc: require('../assets/images/OmiCam/camera-icon.png'),
        section: '#Horizontal',
      }, {
        name: 'Splash & Dust Proof',
        imgSrc: require('../assets/images/OmiCam/icon-waterproof.png'),
        section: '#splash',
      }],
    };
  },
  created() {
    window.scrollTo(0, 0);
  },
  mounted() {
    $('.feature-icons[href^="#"]').on('click', function(e) {
      let target = $(this.getAttribute('href'));
      if (target.length) {
        e.preventDefault();
        $('html, body').stop().animate({
          scrollTop: target.offset().top - 60
        }, 1000);
      }
    });
    $(window).scroll(function() {
      let scrollPos = $(window).scrollTop();
      let windowHeight = $(window).height();
      $('.animated').each(function() {
        let thisPos = $(this).offset().top;
        if ((scrollPos + windowHeight) >= thisPos) {
          $(this).css('opacity', '1');
        };
      })
    })
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/mixin";

.link-icon-btn {
  width: 75px;
  height: 75px;
}

.section-title {
  color: #ff9933;
  font-size: 32px;
}
.breadcrumb {
  border-bottom: 1px solid gray;
  font-size: 28px;
  .breadcrumb-item {
    &.before::before {
      content: '|';
      color: gray;
    }
  }
}
li {
  text-indent: 0;
}
.omicam-wrap {
  padding-top: 50px;
  @media(max-width: 1000px) {
    h3 {
      font-size: 36px !important;
    }
    li {
      font-size: 16px !important;
    }
  }
  p {
    color: white;
    text-indent: 14px;
  }
  .section1 {
    padding: 0;
    background-image: url('../assets/images/OmiCam/sec1.jpg');
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    margin: 50px 0;
    height: 600px;
    @include ipad() {
      background-position-y: bottom;
      background-position-x: 20%;
    }
    .banner {
      color: white;
      width: 55%;
      margin-left: auto;
      padding: 70px 35px;
      background-color: rgba(0, 0, 0, .3);
      text-align: center;
      height: 100%;
      @include ipad() {
        width: 100%;
        height: auto;
      }
      .banner-title {
        margin-bottom: 50px;
        margin-bottom: 0;
        border-bottom: 1px solid gray;
        font-size: 24px;
        text-align: left;
        .title {
          color: #ff9933;
          font-size: 48px;
          text-shadow:0px 0px 8px #1a1a1a;
          font-family:Arial,Helvetica, sans-serif;
        }
        .next-line {
          display: none;
          @include ipad_pro() {
            display: block;
          }
        }
      }
      p {
        padding-top: 10px;
        color: white;
        text-align: left;
        font-size: 20px;
        text-indent: 17px;
        text-align:justify;
        @include ipad() {
          font-size: 14px;
        }
      }
    }
  }
  .section2 {
    .icon-box {
      display: inline-block;
      width: 20%;
      vertical-align: top;
      .icons {
        transition: all .5s;
        vertical-align: top;
        @media(min-width: 768px){
          &:hover {
            transform: scale(1.3);
          }
        }
      }
      .icon-name {
        color: white;
        text-decoration: none;
      }
    }
  }
  .section3,
  .section4,
  .section5,
  .section6,
  .section7,
  .section8,
  .section9 {
    border-bottom: 1px solid gray;
    color: white;
    height: 500px;
    padding: 20px 0;
    @include ipad_pro() {
      height: auto;
    }
    .section3-img,
    .section4-img,
    .section5-img,
    .section8-img,
    .section9-img {
      height: 350%;
      width: calc(350px*16/9);
      @include ipad_pro() {
        width: 80%;
        max-height: 350px;
      }
    }
    ul {
      margin-top: 10px;
      li {
        margin-bottom: 5px;
      }
    }
    @include ipad_pro() {
      height: auto;
      .section-title {
        text-align: center;
      }
    }
  }
}
// .section7 {
//   width: 100%;
//   background-image: url('../assets/images/OmiCam/sec7.jpg');
//   background-position: center center;
//   background-size: cover;
//   background-repeat: no-repeat;
//   padding: 30px;
//   margin: 50px auto;
//   height: 350px;
//   @include ipad() {
//     height: auto;
//   }
//   .section7-content {
//     width: 70%;
//     margin-left: auto;
//     margin-right: auto;
//     text-align: left;
//     color: white;
//     .section-title {
//       color: #ff9933;
//     } 
//     ul {
//       padding: 10px;
//     }
//   }
// }
.section8 {
  background-color: #1a1a1a;
  opacity: 0;
  transition: all 1s;
  @include ipad() {
    height: auto !important;
  }
  .section-row {
    height: 100%;
    width: 100%;
    @include ipad() {
      height: auto !important;
    }
    .section8-img {
      background-image: url('../assets/images/Home/sec8.png');
      background-size: 30%;
      background-position: center center;
      background-repeat: no-repeat;
      @include ipad_pro() {
        height: 400px !important;
        background-size: 30%;
        margin: auto;
      }
      @include iphone8plus_Height { // 橫式 iphone8+ 以下
        background-size: 20%;
      }
    }
    .section-text {
      text-align: center;
      .section-title {
        font-size: 60px;
      }
    }
  }
}
.section10 {
  color: white !important;
  text-align: left;
  .section-title {
    color: #ff9933;
    @include ipad() {
        text-align: center;
      }
  }
  .table {
    color: white;
    th,td {
      border-bottom: 1px solid #dee2e6;
      border-top: 0;
      text-align: center;
    }
  }
}
</style>

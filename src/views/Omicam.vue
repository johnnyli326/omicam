<template>
  <div>
    <div class="container omicam-wrap">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb bg-white">
          <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
          <li class="breadcrumb-item active" aria-current="page">OmiCam</li>
        </ol>
      </nav>
      <section class="section1">
        <div class="banner">
          <div class="banner-title">
            <h3><span class="underline">OmiCam</span></h3>
            <span>Life Moment Recorder</span>
          </div>
          <p>
            OMICAM provides a new way to capture 4K film and Virtual Reality Content.
            It is our first consumer grade “Wearable VR Life Recorder” 
            with our proprietary OMI™ (Optical Motion Intelligence) technology.
            OMI takes care of complex video calibration and stabilization processes necessary
            to convert the actual VR media footage for unexpected view angle.
          </p>
        </div>
      </section>
      <section class="section2 text-center">
        <h3>OmiCam | At a Glance</h3>
        <div class="text-center mb-4 icon-box" v-for="(icon, index) in icons" :key="index">
          <a :href="icon.section" class="d-inline-block">
            <img :src="icon.imgSrc" :alt="icon.name" v-if="icon" class="icons">
          </a>
          <br>
          <small class="icon-name">{{ icon.name }}</small>
        </div>
        <!-- 構造圖 -->
        <div class="d-flex justify-content-center align-items-center my-5">
          <img src="../assets/images/instruction.jpg" alt="instruction"
          style="width:90%">
        </div>
        <router-link class="btn btn-link btn-primary"
        to="/product">
          BUY NOW
        </router-link>
      </section>
      <section class="row align-items-center p-4 section3" id="240">
        <div class="col-md-3 py-3">
          <img src="../assets/images/omicam-白底.jpg" alt="omicam">
        </div>
        <div class="col-md-3 py-3">
          <img src="../assets/images/ViewAngle.png" alt="viewAngle">
        </div>
        <div class="col-md-6">
          <h3 class="my-3 text-center">Extremely Wide View</h3>
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
        <div class="col-md-6">
          <h3 class="my-3 text-center">Just Clip and Capture</h3>
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
        <div class="col-md-6 py-3">
          <div style="background:green;color:wheat">GIF</div>
        </div>
      </section>
      <section class="row align-items-center section5" id="Long">
        <div class="col-md-6 py-3">
          <img src="../assets/images/LongHour.png" alt="Lifelog">
        </div>
        <div class="col-md-6">
          <h3 class="my-3 text-center">
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
      <section class="row align-items-center p-4 section6" id="Horizontal">
        <div class="col-md-6">
          <h3 class="my-3 text-center">Always Keep Horizontal & Stable</h3>
          <ul>
            <li>
              The proprietary OMI (Optical Motion Intelligence)
              algorithm keeps OmiCam stablized when recording under
              any conditions.
            </li>
            <li>
              The proprietary OMI (Optical Motion Intelligence) algorithm
              keeps OmiCam stablized when recording under any conditions.
            </li>
          </ul>
        </div>
        <div class="col-md-6 py-3">
          <iframe width="100%" height="500px"
            src="https://www.youtube.com/embed/TCHRYRUXtqk"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media;
            gyroscope; picture-in-picture"
            allowfullscreen>
          </iframe>
        </div>
      </section>
      <!-- <section class="text-center my-3" id="ease">
        <h3 class="mb-4">Ease of Use. Create. and Share </h3>
        <p>3 Buttons workouts</p>
        <div class="btn-img" v-for="( btn, index) in btns" :key="index">
          <img :src="btn.imgSrc" :alt="btn.name">
          <small>{{ index+1 }}. {{ btn.name }}</small>
        </div>
      </section> -->
      <section class="proof-section my-3  text-center" id="splash">
        <h3 class="text-center proof-title">Splash- Proof & Dust- Proof</h3>
        <p class="text-center text-white">Get outside. Enjoy nature</p>
        <ul class="text-left" style="color:black;">
          <li>
            OmiCamis is splash&dust proof with IP65 rated which endure most
            outdoor environment without any other case or accessories. 
          </li>
          <li>
            The optional accessory of waterproof case help OmiCam to operate
            underwater and capture the stunning images.
          </li>
        </ul>
        <div class="scenery-img" v-for="(item, index) in scenery" :key="index">
          <img :src="item.imgSrc" :alt="item.name">
        </div>
        <div class="text-center">
          <button class="btn btn-primary mt-5">
            <router-link to="/product"
            style="color:black;">
              BUY NOW
            </router-link>
          </button>
        </div>
      </section>
      <section class="text-center">
        <h3 class="my-5">What is in our package?</h3>
        <div class="row">
          <div class="col-md-6">
            <img src="../assets/images/accessories.jpg" alt="accessories">
          </div>
          <div class="col-md-6" style="background:green;color: wheat;">
            解釋
          </div>
        </div>
      </section>
      <section class="my-5 text-center">
        <h3>Specs</h3>
        <div class="table-responsive">
          <table class="table table-striped table-bordered">
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
                <td>240deg fisheye/ 45deg forward capture</td>
              </tr>
              <tr>
                <td>Watch modes</td>
                <td>
                  1. 360deg video<br>
                  2. VR goggle
                </td>
              </tr>
              <tr>
                <td>Resolution (Panorama Photo&video)</td>
                <td>
                  Phote 4320x2160 
Video 4K / 30fps (3840 x 2160) 
　　 2.5K / 30fps (2560 x 1440) 
　　 FHD / 30fps (1920 x 1080)
                </td>
              </tr>
              <tr>
                <td>Size</td>
                <td>1.81”(W) x 0.8” (D) x 3.68” (H) 
45.9mm (W) x 20.3mm (D) x 93.5mm (H)</td>
              </tr>
              <tr>
                <td>Battery</td>
                <td>1100mAh 
Up to 70 mins (in 4K mode) 
Up to 15 hours (in Lifelog™ Video mode)</td>
              </tr>
              <tr>
                <td>Camera storage</td>
                <td>Micro SD (SDXC) Classic 10 or above; Max 128G. 
(some cards of 256G are workable)</td>
              </tr>
              <tr>
                <td>SW Functions</td>
                <td>	OMI Studio (edit, calibrate, stabilize, augment, share)</td>
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
        imgSrc: require('../assets/images/240icon.png'),
        section: '#240',
      }, {
        name: '插圖',
        // imgSrc: require('../assets/images/240icon.png'),
        section: '#240',
      }, {
        name: 'Long Hour Operation',
        imgSrc: require('../assets/images/battery-icon.png'),
        section: '#Lifelog'
      }, {
        name: 'Horizontal & Stable',
        imgSrc: require('../assets/images/camera-icon.png'),
        section: '#Horizontal',
      }, {
        name: 'Splash & Dust Proof',
        imgSrc: require('../assets/images/icon-waterproof.png'),
        section: '#splash',
      }],
      btns: [{
        name: 'Power On-Off',
        imgSrc: require('../assets/images/power-btn.png'),
      }, {
        name: 'LifeLog Mode Record/Stop',
        imgSrc: require('../assets/images/lifelog-btn.png'),
      }, {
        name: 'Standard Mode Record/Stop',
        imgSrc: require('../assets/images/shutter-btn.png'),
      }],
      scenery: [{
        name: 'ski',
        imgSrc: require('../assets/images/ski.jpg'),
      }, {
        name: 'bike',
        imgSrc: require('../assets/images/bike.jpg'),
      }, {
        name: 'bg-sky',
        imgSrc: require('../assets/images/bg-sky.jpg'),
      }, {
        name: 'boat',
        imgSrc: require('../assets/images/boat.jpg'),
      }, {
        name: 'boat-2',
        imgSrc: require('../assets/images/boat-2.jpg'),
      }],
    };
  },
  created() {
    window.scrollTo(0, 0);
  },
  mounted() {
    $('a[href^="#"]').on('click', function(e) {
      let target = $(this.getAttribute('href'));
      if (target.length) {
        e.preventDefault();
        $('html, body').stop().animate({
          scrollTop: target.offset().top - 60
        }, 1000);
      }
    })
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/mixin";

.omicam-wrap {
  padding-top: 50px;
  @media(max-width: 1000px) {
    h3 {
      font-size: 24px !important;
    }
    li {
      font-size: 16px !important;
    }
  }
  a.btn {
    text-decoration: none;
    display: inline-block;
    padding: 10px 20px;
    color: black;
    &:hover {
      color: black;
    }
  }
  .link-color {
    color: #ffcd05;
    &:hover {
      color: #777777;
    }
  }
  p {
    color: #777777;
    text-indent: 14px;
  }
  .section1 {
    padding: 20px;
    background-image: url('../assets/images/omicam-bg.jpg');
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    margin: 50px 0;
    height: 600px;
    @include ipad() {
      background-position: bottom left;
    }
    .banner {
      color: white;
      width: 55%;
      margin-left: auto;
      padding: 20px;
      background-color: rgba(216,216,216,0.43);
      text-align: center;
      height: 100%;
      @include ipad() {
        width: 100%;
        height: auto;
      }
      .banner-title {
        margin-bottom: 50px;
        margin-bottom: 0;
        .underline {
          border-bottom: 2px solid white;
          font-size: 60px;
          font-weight: 500;
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
        .icon-name {
          color: black;
          text-decoration: none;
        }
      }
    }
  }
  .btn-img {
    display: inline-block;
    width: 33.333%;
    text-align: center;
    vertical-align: top;
  }
  .proof-section {
    padding: 20px;
    background-color: rgba(122,122,122,0.59);
    .proof-title {
      color: #ffcd05;
      text-shadow: 0px 0px 2px rgba(0,0,0,0.3);
      font-size: 31px;
    }
    .scenery-img {
      width: 18%;
      margin: 10px 10px;
      display: inline-block;
    }
  }
  .btn {
    padding: 0;
    a {
      text-decoration: none;
      display: inline-block;
      height: 100%;
      width: 100%;
      padding: 10px;
    }
  }
}
</style>

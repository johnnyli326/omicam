<template>
  <div>
    <div class="page-title">
      <div class="container">
        <h2>OMICAM</h2>
      </div>
    </div>
    <div class="container">
      <section class="omicam">
        <div class="banner">
          <div class="banner-title">
            <h3><span class="underline">OmiCam</span></h3>
            <span>Life Moment Recorder</span>
          </div>
          <p>OMICAM provides a new way to capture 4K film and Virtual Reality Content.
            It is our first consumer grade “Wearable VR Life Recorder” 
            with our proprietary OMI™ (Optical Motion Intelligence) technology.
            OMI takes care of complex video calibration and stabilization processes necessary
            to convert the actual VR media footage for unexpected view angle.
          </p>
        </div>
      </section>
      <section class="icon">
        <div class="d-inline-block text-center" v-for="(icon, index) in icons" :key="index"
        style="width:20%;">
          <img :src="icon.imgSrc" :alt="icon.name" v-if="icon">
        </div>
      </section>
      <section class="row align-items-center">
        <div class="col-md-4 py-3">
          <img src="../assets/images/omicam-白底.jpg" alt="omicam">
        </div>
        <div class="col-md-8">
          <h3 class="my-3">Embracing 240° wide lens</h3>
          <p>
            OmiCam has 240° view angle to capture more field than what you see. Meantime,
            the lens unique designed as 45 degree forward to simulate human viewing experience.
          </p>
          <h3 class="my-3">Enhancing immersive experience</h3>
          <p>
            4K resolution (VR) at 3840*2160 @ 30 fps filming keeps your life memories relive.
          </p>
        </div>
      </section>
      <section class="row align-items-center">
        <div class="col-md-6">
          <h3 class="my-3 text-center">
            LifeLog Mode
            <br>
            Keep battery longer
          </h3>
          <p class="mb-3">
            Record up to 15 hours of film in one charge through our LifeLog™
            Mode which uses OmiCam smart algorithm to record your most exciting moments.
          </p>
          <p>
            It’s the only product in the market that addresses the need for capturing
            the moments of all extended activities.
          </p>
        </div>
        <div class="col-md-6 py-3">
          <img src="../assets/images/fishing.jpg" alt="fishing">
        </div>
      </section>
      <section class="row align-items-center">
        <div class="col-md-6">
          <h3 class="my-3 text-center">
            Always Keep Horizontal
          </h3>
          <p class="mb-3 text-center">
            Wear it any way you like
          </p>
          <p>
            Even you move or turn your body horizontally or vertically,
            the recorded video still keeps everything with stable horizontal line.
          </p>
        </div>
        <div class="col-md-6 py-3">
          <img src="../assets/images/view-angle.jpg" alt="view_angle">
        </div>
      </section>
      <section class="text-center my-3">
        <iframe width="100%" height="500px"
        src="https://www.youtube.com/embed/TCHRYRUXtqk"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
        </iframe>
      </section>
      <section class="row align-items-center">
        <div class="col-md-6 py-3">
          <img src="../assets/images/bag.jpg" alt="mounted-on-bag">
        </div>
        <div class="col-md-6 text-center">
          <h3 class="my-3">Clip, Wear and Capture</h3>
          <p>
            Free your hands. Enjoy the moment
          </p>
          <p>
            Wearable design let you focus on your adventure as you take OMICAM underwater,
            hikes, bike rides, and more. Immerse yourself first then re-experience amazing.
          </p>
        </div>
      </section>
      <section class="text-center my-3">
        <h3 class="mb-4">Ease of Use. Create. and Share </h3>
        <p>3 Buttons workouts</p>
        <div class="btn-img" v-for="( btn, index) in btns" :key="index">
          <img :src="btn.imgSrc" :alt="btn.name">
          <small>{{ index+1 }}. {{ btn.name }}</small>
        </div>
      </section>
      <section class="proof-section my-3  text-center">
        <h3 class="text-center proof-title">Splash- Proof & Dust- Proof</h3>
        <p class="text-center text-white">Get outside. Enjoy nature</p>
        <div class="">
          <p class="text-left text-white">
            OMICAM is splash proof rated IP65 and dust- proof to endure
            most outdoor activity without the need of waterproof housing
            or any other case or accessories. 
          </p>
          <p class="text-left text-white">
            We offer a complete accessory pack which includes waterproof
            case to capture stunning underwater activities.
          </p>
        </div>
        <div class="scenery-img" v-for="(item, index) in scenery" :key="index">
          <img :src="item.imgSrc" :alt="item.name">
        </div>
        <div class="text-center">
          <button class="btn btn-outline-primary mt-5">
            <router-link to="/product/omicam-wearable-vr-camera">
              BUY NOW
            </router-link>
          </button>
        </div>
      </section>
      <section class="text-center my-3">
        <h3>Create your 360 video with OMI Studio</h3>
        <img src="../assets/images/img-7.png" alt="support-device">
        <div>
          <button class="btn btn-outline-primary mt-5">
            <router-link to="/">
              SEE HOW
            </router-link>
          </button>
        </div>
      </section>
      <section class="text-center">
        <h3>What is in our package?</h3>
        <img src="../assets/images/accessories.jpg" alt="accessories">
      </section>
      <section class="mt-3 text-center">
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
export default {
  data() {
    return {
      icons: [{
        name: 'sd-card',
        imgSrc: require('../assets/images/SD-card.png'),
      }, {
        name: 'camera',
        imgSrc: require('../assets/images/camera-icon.png'),
      }, {
        name: '240',
        imgSrc: require('../assets/images/240icon.png'),
      }, {
        name: 'battery',
        imgSrc: require('../assets/images/battery-icon.png'),
      }, {
        name: 'waterproof',
        imgSrc: require('../assets/images/icon-waterproof.png'),
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
};
</script>

<style lang="scss" scoped>
@import "../assets/mixin";

.page-title {
  width: 100%;
  padding: 30px;
  background-color: #f8f9f9;
  border: 1px solid #e9e9e9;
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
.omicam {
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
</style>

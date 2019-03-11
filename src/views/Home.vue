<template>
  <div>
    <div class="header text-center">
      <p class="header-text display-5">
        <strong>WEARABLE LIFE MOMENT</strong>
        <br>
        <strong>OMICAM</strong>
        <br>
        <span><strong>OmiCam</strong> | <I>Life Worth Remembering</I></span>
      </p>
      <!-- <div class="btn"> -->
      <div class="btn" data-toggle="modal" data-target="#commercialModal">
        <img id="mapbtn" src="../assets/images/btn.png" alt="btn" usemap="#btnmap">
        <map name="btnmap">
          <area shape="circle" coords="40, 40, 33" alt="" class="map-area">
        </map>
      </div>
      <!-- </div> -->
    </div>
    <section class="omicam-1 m-3">
      <div class="row mr-0 ml-0">
        <div class="col-md-7 d-flex justify-content-center align-items-center">
          <div>
            <h2 class="slogan text-center">
              <strong>OMICAM｜WEARABLE VR LIFE RECORDER</strong>
            </h2>
            <p class="text-center intro-text">
              Find the immersive ways to recording your life moment
            </p>
          </div>
        </div>
        <div class="col-md-5 text-center">
          <img src="../assets/images/img-2.jpg" alt="">
        </div>
      </div>
    </section>
    <section class="img-move">
      <div class="text-center">
        <h2 class="slogan">LOOK WIDER</h2>
        <p class="intro-text">
          Recording everything even something you are not aware in your sight
        </p>
        <div>
          <button class="btn btn-outline-warning p-0 m-0">
            <router-link class="d-block" to="/omicam">
              MORE
            </router-link>
          </button>
        </div>
      </div>
    </section>
    <section class="last-longer">
      <div class="text-center">
        <h2 class="slogan">LAST LONGER</h2>
        <p class="intro-text">
          LifeLog keeps battery alive for longer
          <br>
          Capture the moments that matter most in your life
        </p>
        <button class="btn btn-outline-warning btn-lg">
          <router-link class="d-block" to="/omicam">
            SEE HOW
          </router-link>
        </button>
      </div>
    </section>
    <section class="no-shaky-video">
      <div class="row mr-0 ml-0">
        <div class="col-md-6 intro-img-1"></div>
        <div class="col-md-6 d-flex justify-content-center align-items-center">
          <div class="text-center m-3">
            <h2 class="slogan">NO SHAKY VIDEO</h2>
            <p>No matter how bumpy, OmiCam always gives you no dizzy video!</p>
          </div>
        </div>
      </div>
    </section>
    <section class="just-clip-it">
      <div class="row mr-0 ml-0">
        <div class="col-md-6 d-flex justify-content-center align-items-center">
          <div class="text-center m-3">
            <h2>JUST CLIP IT</h2>
            <p>When you wear OmiCam, you are freeing both your hands</p>
            <div class="btn btn-outline-primary">MORE</div>
          </div>
        </div>
        <div class="col-md-6 intro-img-2"></div>
      </div>
    </section>
    <section>
      <div class="row mr-0 ml-0">
        <div class="col-md-7">
          <img src="../assets/images/img-7.png" alt="Support-device">
        </div>
        <div class="col-md-5 d-flex justify-content-center align-items-center">
          <div class="text-center m-3">
            <h2 class="slogan">OMI STUDIO</h2>
            <p class="intro-text">The easiest way to create immersive experience</p>
            <button class="btn btn-outline-warning">SEE HOW</button>
          </div>
        </div>
      </div>
    </section>
    <section class="omi-story">
      <h2 class="slogan text-center">OMI STORY</h2>
      <!-- <Slide></Slide> -->
    </section>
    <section class="simple container">
      <div class="row">
        <div class="col-md-4">
          <img src="../assets/images/img-8.jpg" alt="products-img">
        </div>
        <div class="col-md-8 d-flex justify-content-center align-items-center">
          <div class="text-center m-3">
            <h2>It's that simple</h2>
            <p>Let OmiCam use your way to remember your life story</p>
            <button class="btn btn-outline-warning">BUY NOW</button>
          </div>
        </div>
      </div>
    </section>
    <!-- Modal -->
    <div class="modal fade" id="commercialModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content bg-transparent">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
          <div class="modal-body">
            <iframe
            width="100%"
            height="500"
            src="https://www.youtube.com/embed/WjY1JsxDrCA"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen>
            </iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() { return {}; },
  created() {
    window.scrollTo(0, 0);
  },
};
</script>

<style lang="scss">
@import "../assets/mixin";

$gutter: 6px;
$slogan-size: 52px;

a{
  text-decoration: none;
  display: inline-block;
  padding: 10px;
}
.header {
  max-width: 100%;
  height: 760px;
  background-image: url('../assets/images/img-1.jpg');
  background-size: cover;
  background-position: center center;
  padding: 120px 0;
  .header-text {
    font-size: 50px;
    color: white;
    .font {
      font-family: "Open Sans", Sans-serif;
    }
  }
  #mapbtn {
    width: 80px;
    height: 80px;
  }
  .map-area:focus {
    outline: 0;
  }
}
.omicam-1 {
  .slogan {
    font-size: $slogan-size;
  }
  .intro-text {
    font-size: 20px;
  }
}
.img-move {
  margin-bottom: 10px;
  background-image: url('../assets/images/dynamic_img.jpg');
  background-position: center center;
  height: 87vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  margin-bottom: $gutter;
  -webkit-animation: mover 2s infinite alternate linear;
  animation: mover 2s infinite alternate linear;
  @include ipad {
    animation-duration: 10s;
  }
  .slogan {
    font-size: $slogan-size;
  }
  .intro-text {
    font-size: 20px;
  }
}
@keyframes mover {
    0% { background-position-x: right }
    100% { background-position-x: left }
  }
.last-longer {
  height: 760px;
  background-image: url('../assets/images/img-4.jpg');
  background-position: center center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  margin-bottom: $gutter;
  .slogan {
    font-size: 52px;
  }
  .intro-text {
    font-size: 20px;
  }
}
.no-shaky-video {
  margin-bottom: $gutter;
  .intro-img-1 {
    background-image: url('../assets/images/climb.jpg');
    background-position: center center;
    background-size: cover;
    width: 100%;
    height: 550px;
  }
}
.just-clip-it {
  margin-bottom: $gutter;
  .intro-img-2 {
    background-image: url('../assets/images/img-6.jpg');
    background-position: center center;
    background-size: cover;
    width: 100%;
    height: 550px;
  }
}
.omi-story {
  padding: 100px 50px;
  background-image: url('../assets/images/map.png');
  background-attachment: fixed;
}
.simple {
  .row {
    .col-4 {
      padding: 0 10px;
      img {
        width: 100%;
        height: auto;
      }
    }
  }
}
.btn {
  cursor: pointer;
}
// Modal
.close {
  width: 20px;
  height: 20px;
  position: fixed;
  right: 30px;
  top: 10px;
  color: white;
  opacity: 1;
  &:hover {
    color: #ffcd05;
    opacity: 1 !important;
  }
}
</style>

<template>
  <div>
    <section class="section section1">
      <div class="banner"></div>
      <div class="section-text">
        <h2 class="section-title">
          CAPTURE.
          <br class="rwd">
          SHARE.
          <br class="rwd">
          THE WORLD YOU SEE.
        </h2>
        <p class="section-subTitle">OmiCam | Wearable VR Camera</p>
        <button class="link-icon-btn clickable play-btn"
        data-toggle="modal" data-target="#commercialModal"
        @click="PlayGA()">
        </button>
      </div>
    </section>
    <!-- section2 -->
    <section class="section section2">
      <div class="section-text">
        <h2 class="section-title">
          OMICAM
        </h2>
        <p class="text-center section-subTitle">
          The easiest way to immersively record your life.
        </p>
        <img src="../assets/images/icons/buy.png" class="link-icon-btn"
        alt="buy_icon" usemap="#btnmap_2">
        <map name="btnmap_2">
          <area shape="circle" coords="37.5, 37.5, 37.5" alt="" class="map-area"
          @click="$router.push('/shop')">
        </map>
      </div>
    </section>
    <!-- section3 -->
    <section class="section section3">
      <div class="section-text">
        <h2 class="section-title">
          DESIGN TO BE WORN
        </h2>
        <p class="text-center section-subTitle">
          Free your hand to enjoy the life while recording.
        </p>
        <img src="../assets/images/icons/more.png" class="link-icon-btn"
        alt="more_icon" usemap="#btnmap_3">
        <map name="btnmap_3">
          <area shape="circle" coords="37.5, 37.5, 37.5" alt="" class="map-area"
          @click.prevent="moveTo('wear')">
        </map>
      </div>
    </section>
    <!-- section4 -->
    <section class="section section4">
      <div class="section-text">
        <h2 class="section-title">
          WIDER VIEW THAN EVER
        </h2>
        <p class="text-center section-subTitle">
          Extended your first person point of view by 240 Degree FoV
        </p>
        <img src="../assets/images/icons/more.png" class="link-icon-btn"
        alt="more_icon" usemap="#btnmap_4">
        <map name="btnmap_4">
          <area shape="circle" coords="37.5, 37.5, 37.5" alt="" class="map-area"
          @click.prevent="moveTo('240')">
        </map>
      </div>
    </section>
    <!-- section5 -->
    <section class="section section5">
      <div class="video-wrap">
        <video class="loop-video" loop muted playsinline>
          <source
          type="video/mp4"
          src="../assets/images/Allday.mp4">
        </video>
      </div>
      <div class="section-text">
        <h2 class="section-title">
          SUPPORT WHOLE DAY
        </h2>
        <p class="text-center section-subTitle">
          Up to 15 hours operating without worrying about the battery.
        </p>
        <img src="../assets/images/icons/more.png" class="link-icon-btn"
        alt="more_icon" usemap="#btnmap_5">
        <map name="btnmap_5">
          <area shape="circle" coords="37.5, 37.5, 37.5" alt="" class="map-area"
          @click.prevent="moveTo('Lifelog')">
        </map>
      </div>
    </section>
    <!-- section6 -->
    <section class="section section6">
      <div class="section-text">
        <h2 class="section-title">
          NO SHAKING VIDEO
        </h2>
        <p class="text-center section-subTitle">
          Always maintain image steady & stable in any activities.
        </p>
        <button class="link-icon-btn clickable play-btn"
        data-toggle="modal" data-target="#NoShakingModal">
        </button>
      </div>
    </section>
    <!-- section7 -->
    <section class="section section7">
      <div class="row mr-0 ml-0 section-row">
        <div class="col-md-6 d-flex justify-content-center align-items-center
        h-100">
          <div class="section-text m-3">
            <h2 class="section-title">WATCH & SHARE ANY TIME</h2>
            <p class="section-subTitle">
            Watch and share your VR experience
            thru OMI Studio on different platforms.
            </p>
            <img src="../assets/images/icons/more.png" class="link-icon-btn"
            alt="more_icon" usemap="#btnmap_7">
            <map name="btnmap_7"  @click.prevent="$router.push('/omi-studio')">
              <area shape="circle" coords="37.5, 37.5, 37.5" alt="" class="map-area">
            </map>
          </div>
        </div>
        <div class="col-md-6 section7-img
          d-flex justify-content-center align-items-center
          h-100">
        </div>
      </div>
    </section>
    <!-- section8 -->
    <section class="section section8">
      <div class="row mr-0 ml-0 section-row">
        <div class="col-md-6 section8-img
          d-flex justify-content-center align-items-center
          h-100">
        </div>
        <div class="col-md-6 d-flex justify-content-center align-items-center
          h-100">
          <div class="section-text m-3">
            <h2 class="section-title">OmiCam</h2>
            <p class="section-subTitle">
              Simply Create Your Immersive Life Memory.
            </p>
            <img src="../assets/images/icons/buy.png" class="link-icon-btn"
            alt="more_icon" usemap="#btnmap_8">
            <map name="btnmap_8">
              <area shape="circle" coords="37.5, 37.5, 37.5" alt="" class="map-area"
              @click.prevent="$router.push('/shop')">
            </map>
          </div>
        </div>
      </div>
    </section>
    <!-- section9 -->
    <section class="section9">
      <h2 class="section-title text-center mb-4">OMI STORY</h2>
      <!-- <Slide></Slide> -->
      <div id="owl-demo" class="owl-carousel owl-theme">
        <div class="item" v-for="(story, index) in stories" :key="index"
        :style="{ backgroundImage: 'url(' + story.imgSrc + ')' }">
          <router-link to="/omistory" class="d-inline-block">
            <div class="slide-up">
              <span>{{ story.name }}</span>
            </div>
          </router-link>
        </div>
      </div>
      <div class="customNavigation">
        <a class="btn prev" aria-label="Previous"></a>
        <a class="btn next" aria-label="Next"></a>
      </div>
    </section>
    <!-- Modal -->
    <div class="modal fade" id="commercialModal" tabindex="-1" role="dialog"
    aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content bg-transparent border-0">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
          <div class="modal-body text-center scale-video">
            <iframe src="" width="640" height="360" frameborder="0" allowfullscreen></iframe> 
          </div>
          <!-- <div class="modal-body text-center
          scale-video" id="yt-player">
            <iframe class="brand-film"
            src="https://www.youtube.com/embed/ETda2w2_81o?enablejsapi=1"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            width="500"
            height="281.25">
            </iframe>
          </div> -->
        </div>
      </div>
    </div>
    <!-- MODAL - No shaking video -->
    <div class="modal fade" id="NoShakingModal" tabindex="-1" role="dialog"
    aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content bg-transparent border-0">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
          <div class="modal-body text-center scale-video">
            <iframe src=""
            width="640"
            height="360"
            frameborder="0"
            allowfullscreen>
            </iframe> 
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery';
import 'owl.carousel';
import 'is-in-viewport';
import { setTimeout } from 'timers';

export default {
  name: 'Home',
  data() { 
    return {
      stories: [{
        name: 'Teacher Vane – Travelholic',
        imgSrc: require('../assets/images/teacher.png'),
      }, {
        name: 'MoLong – Wargamer',
        imgSrc: require('../assets/images/MoLong.jpg'),
      }, {
        name: 'Eva — Divingholic',
        imgSrc: require('../assets/images/eva.png'),
      }],
    }; 
  },
  methods: {
    moveTo(id) { // move to feature section in OmiCam page
      console.log(id);
      let vm = this;
      this.$router.push('/omicam');
      setTimeout(function(){
        let target = $("section[id='"+ id +"']");
        $('html, body').stop().animate({scrollTop: target.offset().top - 50}, 1000);
      },300);
    },
    GoTop() { // go top
      $('html, body').animate({ scrollTop: 0 }, '1000');
    },
    PlayGA() { // GA event tracking
      this.$ga.event({
        eventCategory: 'video',
        eventAction: 'play',
        eventLabel: 'brand film',
      })
      console.log(this.$ga.event);
    }
  },
  created() {
    window.scrollTo(0, 0);
  },
  mounted() {
    $(document).ready(function() {
      // 開啟Modal，vimeo autoplay
      $('#commercialModal').on('show.bs.modal', function () {
        $("#commercialModal iframe").attr("src", // autoplay
        "https://player.vimeo.com/video/330454191?autoplay=1");
      });
      // 關閉Modal，viemo stop playing
      $('#commercialModal').on('hidden.bs.modal', function () {
        $("#commercialModal iframe").attr("src", '');
      });
      // 開啟Modal，vimeo autoplay
      $('#NoShakingModal').on('show.bs.modal', function () {
        $("#NoShakingModal iframe").attr("src", // autoplay
        "https://player.vimeo.com/video/330688976?autoplay=1");
      });
      // 關閉Modal，viemo stop playing
      $('#NoShakingModal').on('hidden.bs.modal', function () {
        $("#NoShakingModal iframe").attr("src", '');
      });
      let owl = $("#owl-demo");
      owl.owlCarousel({
          responsive:{
            0:{ // 螢幕寬度0px以上
              items:1,
            },
            600:{ // 螢幕寬度600px以上
              items:2,
            },
            1000:{ // 螢幕寬度1000px以上
              items:3,
            }
          },
          loop: true,
      });
      // Custom Navigation Events
      $(".next").click(function(){
        owl.trigger('next.owl.carousel');
      });
      $(".prev").click(function(){
        owl.trigger('prev.owl.carousel');
      });
    });
    //////// end jquery  ////////
    
    // // youtube API start
    // function callPlayer(frame_id, func, args) {
    //   if (window.jQuery && frame_id instanceof jQuery) frame_id = frame_id.get(0).id;
    //   let iframe = document.getElementById(frame_id);
    //   if (iframe && iframe.tagName.toUpperCase() != 'IFRAME') {
    //       iframe = iframe.getElementsByTagName('iframe')[0];
    //   }
  
    //   // When the player is not ready yet, add the event to a queue
    //   // Each frame_id is associated with an own queue.
    //   // Each queue has three possible states:
    //   //  undefined = uninitialised / array = queue / 0 = ready
    //   if (!callPlayer.queue) callPlayer.queue = {};
    //   let queue = callPlayer.queue[frame_id],
    //       domReady = document.readyState == 'complete';
  
    //   if (domReady && !iframe) {
    //       // DOM is ready and iframe does not exist. Log a message
    //       window.console && console.log('callPlayer: Frame not found; id=' + frame_id);
    //       if (queue) clearInterval(queue.poller);
    //   } else if (func === 'listening') {
    //       // Sending the "listener" message to the frame, to request status updates
    //       if (iframe && iframe.contentWindow) {
    //           func = '{"event":"listening","id":' + JSON.stringify(''+frame_id) + '}';
    //           iframe.contentWindow.postMessage(func, '*');
    //       }
    //   } else if (!domReady ||
    //         iframe && (!iframe.contentWindow || queue && !queue.ready) ||
    //         (!queue || !queue.ready) && typeof func === 'function') {
    //       if (!queue) queue = callPlayer.queue[frame_id] = [];
    //       queue.push([func, args]);
    //       if (!('poller' in queue)) {
    //           // keep polling until the document and frame is ready
    //           queue.poller = setInterval(function() {
    //               callPlayer(frame_id, 'listening');
    //           }, 250);
    //           // Add a global "message" event listener, to catch status updates:
    //           messageEvent(1, function runOnceReady(e) {
    //               if (!iframe) {
    //                   iframe = document.getElementById(frame_id);
    //                   if (!iframe) return;
    //                   if (iframe.tagName.toUpperCase() != 'IFRAME') {
    //                       iframe = iframe.getElementsByTagName('iframe')[0];
    //                       if (!iframe) return;
    //                   }
    //               }
    //               if (e.source === iframe.contentWindow) {
    //                   // Assume that the player is ready if we receive a
    //                   // message from the iframe
    //                   clearInterval(queue.poller);
    //                   queue.ready = true;
    //                   messageEvent(0, runOnceReady);
    //                   // .. and release the queue:
    //                   while (tmp = queue.shift()) {
    //                       callPlayer(frame_id, tmp[0], tmp[1]);
    //                   }
    //               }
    //           }, false);
    //       }
    //   } else if (iframe && iframe.contentWindow) {
    //       // When a function is supplied, just call it (like "onYouTubePlayerReady")
    //       if (func.call) return func();
    //       // Frame exists, send message
    //       iframe.contentWindow.postMessage(JSON.stringify({
    //           "event": "command",
    //           "func": func,
    //           "args": args || [],
    //           "id": frame_id
    //       }), "*");
    //   }
    // /* IE8 does not support addEventListener... */
    //   function messageEvent(add, listener) {
    //       let w3 = add ? window.addEventListener : window.removeEventListener;
    //       w3 ?
    //           w3('message', listener, !1)
    //       :
    //           (add ? window.attachEvent : window.detachEvent)('onmessage', listener);
    //   }
    // }
    // video autoplay;
    const loopVideo = document.querySelector('.loop-video');
    loopVideo.autoplay = true;
    loopVideo.load();
  },
}
</script>

<style lang="scss" scoped>
@import "../assets/mixin";
@import "~owl.carousel/dist/assets/owl.carousel.css";

// text-decoration
* {
  text-shadow:0px 0px 8px #1a1a1a;
  color:#f2f2f2;
  font-family:Arial,Helvetica, sans-serif;
}
// variable
$section-title: 48px;
$section-text: 32px;
$section-padding: 90px;
$gutter: 6px;
// 871px ~ 1023px
$section-title-1023: 42px;
$section-text-1023: 28px;
// 768px ~ 870px
$section-title-870: 36px;
$section-text-870: 20px;
// 767px
$section-title-767: 32px;

// link-icon-btn
.link-icon-btn {
  width: 75px;
  height: 75px;
}
a.btn {
  text-decoration: none;
  display: inline-block;
  padding: 10px 20px;
  &:hover {
    color: black;
  }
}
.section {
  width: 100%;
  height: 680px;
  padding: $section-padding 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  @include ipad {
    padding: 20px 0;
  }
  @include ipad_pro() { // for 1024 below 
    height: 680px;
  }
  .section-text {
    text-align: center;
    z-index: 10;
    .section-title {
      font-size: $section-title;
      @media(max-width: 1023px) {
        font-size: $section-title-1023;
      }
      @media(max-width: 870px) {
        font-size: $section-title-870;
      }
      @media(max-width: 767px) {
        font-size: $section-title-767;
      }
      .rwd {
        display: none;
        @include ipad() {
          display: block;
        }
      }
    }
    .section-subTitle {
      font-size: $section-text;
      @media(max-width: 1023px) {
        font-size: $section-text-1023;
      }
      @media(max-width: 870px) {
        font-size: $section-text-870;
      }
    }
    .play-btn {
      cursor: pointer;
      background-image: url('../assets/images/icons/play.png');
      background-position: center center;
      background-size: cover;
      background-color: transparent;
      border: 0;
      outline: none;
    }
  }
}
.section1 {
  max-width: 100%;
  background-image: url('../assets/images/Home/sec1.jpg');
  background-size: cover;
  background-position: bottom center;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  .banner {
    position: absolute;
    top: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.2);
    width: 100%;
    height: 100%;
  }
  .section-text {
    margin-bottom: 120px;
    @include iphone8plus_Height() {
      margin-bottom: 0;
    }
  }
}
.section2 {
  background-image: url('../assets/images/Home/sec2.jpg');
  background-position: center bottom;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  @include iphone678() {
    background-size: 300% 100%;
  }
  .link-icon-btn {
    position: absolute;
    bottom: 100px;
    right: 250px;
    @media(max-width: 1000px) {
      position: static;
    }
  }
}
.section3 {
  background-image: url('../assets/images/Home/sec3.jpg');
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  @include ipad() {
    background-position-y: center;
    background-position-x: 25%;
  }
}
.section4 {
  background-image: url('../assets/images/Home/sec4.jpg');
  background-position: center center;
  background-size: 130% 100%;
  background-repeat: no-repeat;
  -webkit-animation: mover 2s infinite alternate linear;
  animation: mover 2s infinite alternate linear;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @include BelowImgSize { // when screen size < img-size ( 1600px小於一點點 1550 )
    animation-duration: 8s;
  }
  @include ipad { // < = ipad size()
    background-size: 180% 100%;
    animation-duration: 12s;
  }
}
@keyframes mover {
  0% { background-position-x: right }
  100% { background-position-x: left }
}
.section5 {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .video-wrap {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: hidden;
    .loop-video {
      // make video at least 100% wide and tall.
      min-width: 100%;
      min-height: 100%;
      // make width & height to be auto, in order to prevent 
      // broweser from stretch or squishing the video
      width: auto;
      height: auto;
      // center the video
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translateX(-50%) translateY(-50%);
    }
  }
}

.section6 {
  background-image: url('../assets/images/Home/sec6.jpg');
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.section7 {
  background-color: black;
  @include ipad() {
    height: auto !important;
  }
  @include iphoneX_Height { // 橫式 iphone8+ 以下
    padding: 20px 0;
  }
  .section-row {
    height: 100%;
    width: 100%;
    @include ipad() {
      height: auto !important;
    }
    .section7-img {
      background-image: url('../assets/images/Home/device.png');
      background-size: 80%;
      background-position: center center;
      background-repeat: no-repeat;
      @include ipad() {
        height: 270px !important;
      }
      @include iphone8plus_Height() {
        background-size: 60%;
      }
    }
    .section-text {
      @include ipad() {
        height: 270px !important;
      }
    }
  }
}
.section8 {
  background-color: #1a1a1a;
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
      @include ipad() {
        height: 400px !important;
        background-size: 50%;
      }
      @include iphone8plus_Height { // 橫式 iphone8+ 以下
        background-size: 20%;
      }
    }
    .section-text {
      @include ipad() {
        height: 330px !important;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
      }
    }
  }
}
.section9 {
  background-image: url('../assets/images/Home/sec9.png');
  background-attachment: fixed;
  padding: 100px 10px;
}

.btn {
  cursor: pointer;
}

.close {
  width: 20px;
  height: 20px;
  position: absolute;
  right: -30px;
  top: -20px;
  color: white;
  opacity: 1;
  &:hover {
    color: #ffcd05;
    opacity: 1 !important;
  }
  &:focus {
    outline: 0;
  }
}
// Modal
.modal-dialog {
  min-width: 60vw;
  @include ipad() {
      width: 90vw;
    }
  .modal-body {
    position: relative;
    padding: 0;
    padding-top: 56.25% !important;
    width: 60vw;
    @include ipad() {
      width: 90vw;
    }
    iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
}

// owl-swiper
#owl-demo {
  margin-bottom: 30px;
  .item{
    height: 220px;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    padding: 30px 0px;
    margin: 0 20px;
    color: #FFF;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;
    text-align: center;
    &:hover {
      .slide-up {
        transform: translateY(0);
      }
    }
    .slide-up {
      position: absolute;
      top: 0;
      left: 20px;
      width: calc(100% - 40px);
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: rgba(255,148,0,0.37);
      transform: translateY(120%);
      transition: ease .3s;
      font-size: $section-text;
    }
  }
} 
.customNavigation{
  text-align: center;
  .prev {
    background-image: url('../assets/images/icons/prev.png');
    background-size: contain;
    background-position: center center;
    background-repeat: no-repeat;
    width: 60px;
    height: 60px;
  }
  .next {
    background-image: url('../assets/images/icons/next.png');
    background-size: contain;
    background-position: center center;
    background-repeat: no-repeat;
    width: 60px;
    height: 60px;
  }
}
.customNavigation a{
  display: inline-block;
  width: 32px;
  height: 32px;
  margin-right: 5px;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  color: gray !important;
  &:hover {
    color: #ffcd05 !important;
  }
}
</style>

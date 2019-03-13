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
          <router-link class="btn btn-outline-warning" to="/omicam">
            MORE
          </router-link>
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
        <router-link class="btn btn-outline-warning" to="/omicam">
          SEE HOW
        </router-link>
      </div>
    </section>
    <section class="no-shaky-video">
      <div class="row mr-0 ml-0">
        <div class="col-md-6">
          <div class="intro-img-1"></div>
        </div>
        <div class="col-md-6" style="height:400px;">
          <div class="d-flex justify-content-center align-items-center"
          style="background:#fafafa; width:100%;height:100%">
            <div class="text-center m-3">
              <h2 class="slogan">NO SHAKY VIDEO</h2>
              <p>No matter how bumpy, OmiCam always gives you no dizzy video!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="just-clip-it">
      <div class="row mr-0 ml-0">
        <div class="col-md-6"
        style="height:400px;">
          <div class="d-flex justify-content-center align-items-center"
            style="background:#fafafa; width:100%;height:100%">
            <div class="text-center m-3">
              <h2 class="slogan">JUST CLIP IT</h2>
              <p>When you wear OmiCam, you are freeing both your hands</p>
              <router-link class="btn btn-outline-warning" to="/omicam">
                MORE
              </router-link>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="intro-img-2"></div>
        </div>
      </div>
    </section>
    <section style="background:#fafafa;">
      <div class="row mr-0 ml-0">
        <div class="col-md-7">
          <img src="../assets/images/img-7.png" alt="Support-device">
        </div>
        <div class="col-md-5 d-flex justify-content-center align-items-center">
          <div class="text-center m-3">
            <h2 class="slogan">OMI STUDIO</h2>
            <p class="intro-text">The easiest way to create immersive experience</p>
            <router-link class="btn btn-outline-warning" to="/omicam">
              SEE HOW
            </router-link>
          </div>
        </div>
      </div>
    </section>
    <section class="omi-story">
      <h2 class="slogan text-center">OMI STORY</h2>
      <!-- <Slide></Slide> -->
      <div id="owl-demo" class="owl-carousel owl-theme">
        <div class="item" v-for="(story, index) in stories" :key="index"
        :style="{ backgroundImage: 'url(' + story.imgSrc + ')' }">
          <div class="slide-up">
            <span>{{ story.name }}</span>
          </div>
        </div>
      </div>
      <div class="customNavigation">
        <a class="btn prev" aria-label="Previous"><i class="fas fa-angle-left fa-2x"></i></a>
        <a class="btn next" aria-label="Next"><i class="fas fa-angle-right fa-2x"></i></a>
      </div>
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
              <router-link class="btn btn-link btn-outline-primary" to="/">
                BUY NOW
              </router-link>
          </div>
        </div>
      </div>
    </section>
    <!-- Modal -->
    <div class="modal fade" id="commercialModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content bg-transparent border-0">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
          <div class="modal-body text-center p-0" id="yt-player">
            <iframe class="brand-film"
            src="https://www.youtube.com/embed/WjY1JsxDrCA?enablejsapi=1"
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
import $ from 'jquery';
import 'owl.carousel';

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
  created() {
    window.scrollTo(0, 0);
  },
  mounted() {
    $(document).ready(function() {
      // 開啟Modal，youtube開始播放
      $('#commercialModal').on('show.bs.modal', function () {
        let videoSrc = $("#commercialModal iframe").attr("src");
        $("#commercialModal iframe").attr("src", videoSrc+"&amp;autoplay=1");
      });
      // 關閉Modal，youtube停止播放
      $('#commercialModal').on('hidden.bs.modal', function () {
        callPlayer('yt-player', 'stopVideo');
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
    // youtube API
    function callPlayer(frame_id, func, args) {
      if (window.jQuery && frame_id instanceof jQuery) frame_id = frame_id.get(0).id;
      let iframe = document.getElementById(frame_id);
      if (iframe && iframe.tagName.toUpperCase() != 'IFRAME') {
          iframe = iframe.getElementsByTagName('iframe')[0];
      }
  
      // When the player is not ready yet, add the event to a queue
      // Each frame_id is associated with an own queue.
      // Each queue has three possible states:
      //  undefined = uninitialised / array = queue / 0 = ready
      if (!callPlayer.queue) callPlayer.queue = {};
      let queue = callPlayer.queue[frame_id],
          domReady = document.readyState == 'complete';
  
      if (domReady && !iframe) {
          // DOM is ready and iframe does not exist. Log a message
          window.console && console.log('callPlayer: Frame not found; id=' + frame_id);
          if (queue) clearInterval(queue.poller);
      } else if (func === 'listening') {
          // Sending the "listener" message to the frame, to request status updates
          if (iframe && iframe.contentWindow) {
              func = '{"event":"listening","id":' + JSON.stringify(''+frame_id) + '}';
              iframe.contentWindow.postMessage(func, '*');
          }
      } else if (!domReady ||
                 iframe && (!iframe.contentWindow || queue && !queue.ready) ||
                 (!queue || !queue.ready) && typeof func === 'function') {
          if (!queue) queue = callPlayer.queue[frame_id] = [];
          queue.push([func, args]);
          if (!('poller' in queue)) {
              // keep polling until the document and frame is ready
              queue.poller = setInterval(function() {
                  callPlayer(frame_id, 'listening');
              }, 250);
              // Add a global "message" event listener, to catch status updates:
              messageEvent(1, function runOnceReady(e) {
                  if (!iframe) {
                      iframe = document.getElementById(frame_id);
                      if (!iframe) return;
                      if (iframe.tagName.toUpperCase() != 'IFRAME') {
                          iframe = iframe.getElementsByTagName('iframe')[0];
                          if (!iframe) return;
                      }
                  }
                  if (e.source === iframe.contentWindow) {
                      // Assume that the player is ready if we receive a
                      // message from the iframe
                      clearInterval(queue.poller);
                      queue.ready = true;
                      messageEvent(0, runOnceReady);
                      // .. and release the queue:
                      while (tmp = queue.shift()) {
                          callPlayer(frame_id, tmp[0], tmp[1]);
                      }
                  }
              }, false);
          }
      } else if (iframe && iframe.contentWindow) {
          // When a function is supplied, just call it (like "onYouTubePlayerReady")
          if (func.call) return func();
          // Frame exists, send message
          iframe.contentWindow.postMessage(JSON.stringify({
              "event": "command",
              "func": func,
              "args": args || [],
              "id": frame_id
          }), "*");
      }
    /* IE8 does not support addEventListener... */
      function messageEvent(add, listener) {
          let w3 = add ? window.addEventListener : window.removeEventListener;
          w3 ?
              w3('message', listener, !1)
          :
              (add ? window.attachEvent : window.detachEvent)('onmessage', listener);
      }
    }
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/mixin";
@import "~owl.carousel/dist/assets/owl.carousel.css";

$gutter: 6px;
$slogan-size: 52px;

a.btn {
  text-decoration: none;
  display: inline-block;
  padding: 10px 20px;
  &:hover {
    color: black;
  }
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
  height: 600px;
  margin-bottom: 10px;
  background-image: url('../assets/images/dynamic_img.jpg');
  background-position: center center;
  background-size: 110% 110%;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  margin-bottom: $gutter;
  -webkit-animation: mover 2s infinite alternate linear;
  animation: mover 2s infinite alternate linear;
  @include BelowImgSize { // when screen size < img-size ( 1600px小於一點點 1550 )
    background-size: auto;
    animation-duration: 8s;
  }
  @include ipad { // < = ipad size()
    animation-duration: 12s;
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
  height: 600px;
  background-image: url('../assets/images/img-4.jpg');
  background-position: top center;
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
.col-md-6 {
  padding: 0 $gutter;
}
.no-shaky-video {
  margin-bottom: #{2*$gutter};
  .intro-img-1 {
    background-image: url('../assets/images/climb.jpg');
    background-position: center center;
    background-size: cover;
    width: 100%;
    height: 400px;
    box-shadow: 1px 1px 5px grey;
  }
}
.just-clip-it {
  margin-bottom: #{2*$gutter};
  .intro-img-2 {
    background-image: url('../assets/images/img-6.jpg');
    background-position: center center;
    background-size: cover;
    width: 100%;
    height: 400px;
    box-shadow: 1px 1px 5px grey;
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
.modal-dialog {
  max-width: 50%;
  height: 100%;
  margin: 0 auto;
  @include ipad() {
    max-width: 80%;
  }
}
.brand-film {
  width: 100%;
  min-height: 350px;
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
#owl-demo .item{
  height: 220px;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  padding: 30px 0px;
  margin: 10px;
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
    top: 10px;
    left: 10px;
    width: calc(100% - 20px);
    height: calc(100% - 20px);
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(255,148,0,0.37);
    transform: translateY(120%);
    transition: ease .3s;
  }
}
.customNavigation{
  text-align: center;
}
.customNavigation a{
  display: inline-block;
  width: 20px;
  height: auto;
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

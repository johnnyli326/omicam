<template>
  <div>
    <div class="container studio-wrap">
			<nav aria-label="breadcrumb">
        <ol class="breadcrumb bg-transparent">
          <li class="breadcrumb-item">
            <router-link to="/">
              HOME
            </router-link>
          </li>
          <li class="breadcrumb-item before active" aria-current="page">
            OMI STUDIO
          </li>
        </ol>
      </nav>
			<div class="section-wrap">
				<h3 class="title">Omi Studio</h3>
				<span class="sub-title">Most Powerful VR Editing Tool for OmiCam</span>
				<p class="description">
					In OMI Studio, you can do much more than OmiCam controlling.
          Editing your VR video, Fine-tune your image, Mix with your favorite
					music, or even Live Streaming your VR Image on Facebook/Youtube, all
					functions can be done on OMI Studio.OMI Studio supported on different
					OS, Apple Store, Google Play, Mac and Windows. Download it for the best
					experience. 
				</p>
				<section class="section1 text-center">
          <img src="../assets/images/Home/device.png" alt="supportDevice">
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
        <section class="section3 row">
          <div class="col-lg-6 section3-img"></div>
					<div class="col-lg-6 section3-content">
						<div>
              <img src="../assets/images/icons/more.png" class="link-icon-btn"
              alt="more_icon" usemap="#btnmap_3_1">
              <map name="btnmap_3_1">
                <area shape="circle" coords="37.5, 37.5, 37.5" alt="" class="map-area"
                href="https://www.dropbox.com/sh/jku79zytbsb33ue/AAAA_EQw_FQDqSyiSLoxsgpQa?dl=0"
                target="_blank">
              </map>
							<a
							href="https://www.dropbox.com/sh/jku79zytbsb33ue/AAAA_EQw_FQDqSyiSLoxsgpQa?dl=0"
							class="ml-3">IOS</a>
						</div>
						<div>
							<img src="../assets/images/icons/more.png" class="link-icon-btn"
              alt="more_icon" usemap="#btnmap_3_2">
              <map name="btnmap_3_2">
                <area shape="circle" coords="37.5, 37.5, 37.5" alt="" class="map-area"
                href="https://www.dropbox.com/sh/jku79zytbsb33ue/AAAA_EQw_FQDqSyiSLoxsgpQa?dl=0"
                target="_blank">
              </map>
							<a
							href="https://www.dropbox.com/sh/jku79zytbsb33ue/AAAA_EQw_FQDqSyiSLoxsgpQa?dl=0"
							class="ml-3">ANDRIOD</a>
						</div>
					</div>
        </section>
        <section class="section4 row">
          <div class="col-lg-6 section4-img"></div>
					<div class="col-lg-6 section4-content">
            <div>
              <img src="../assets/images/icons/more.png" class="link-icon-btn"
              alt="more_icon" usemap="#btnmap_3_1">
              <map name="btnmap_3_1">
                <area shape="circle" coords="37.5, 37.5, 37.5" alt="" class="map-area"
                href="https://www.dropbox.com/sh/jku79zytbsb33ue/AAAA_EQw_FQDqSyiSLoxsgpQa?dl=0"
                target="_blank">
              </map>
							<a
							href="https://www.dropbox.com/sh/jku79zytbsb33ue/AAAA_EQw_FQDqSyiSLoxsgpQa?dl=0"
							class="ml-3">MAC</a>
						</div>
						<div>
              <img src="../assets/images/icons/more.png" class="link-icon-btn"
              alt="more_icon" usemap="#btnmap_3_1">
              <map name="btnmap_3_1">
                <area shape="circle" coords="37.5, 37.5, 37.5" alt="" class="map-area"
                href="https://www.dropbox.com/sh/jku79zytbsb33ue/AAAA_EQw_FQDqSyiSLoxsgpQa?dl=0"
                target="_blank">
              </map>
							<a
							href="https://www.dropbox.com/sh/jku79zytbsb33ue/AAAA_EQw_FQDqSyiSLoxsgpQa?dl=0"
							class="ml-3">WINDOWS</a>
						</div>
					</div>
        </section>
        <!-- <pre>icon-section</pre> -->
        <section class="row align-items-center section5 mt-5" id="Control">
          <div class="col-lg-6 justify-content-center d-flex">
            <img src="../assets/images/OmiCam/sec3.png" alt="viewAngle"
            class="section-img">
          </div>
          <div class="col-lg-6">
            <h3 class="section-title">
              Control Your OmiCam
            </h3>
            <p>
              <ul>
                <li>
                  Preview your OmiCam image in real time.
                </li>
                <li>
                  Enjoy the timelapse, photo timer, lifelog function and more.
                </li>
              </ul>
            </p>
          </div>
        </section>
        <section class="row align-items-center section6 mt-5" id="Integrate">
          <div class="col-lg-6 justify-content-center d-flex">
            <img src="../assets/images/OmiCam/sec3.png" alt="viewAngle"
            class="section-img">
          </div>
          <div class="col-lg-6">
            <h3 class="section-title">
              Integrate Your Moments into One Story
            </h3>
            <p>
              <ul>
                <li>
                  Integrate multiple video clips into one VR story
                </li>
                <li>
                  Trim and Edit each clip to ensure all the important moments.
                </li>
              </ul>
            </p>
          </div>
        </section>
        <section class="row align-items-center section7 mt-5" id="Vivid">
          <div class="col-lg-6 justify-content-center d-flex">
            <img src="../assets/images/OmiCam/sec3.png" alt="viewAngle"
            class="section-img">
          </div>
          <div class="col-lg-6">
            <h3 class="section-title">Vivid Your Clips</h3>
            <p>
              <ul>
                <li>
                  Apply the color filter to keep the perfect image.
                </li>
                <li>
                  Find the best tone to meet with your feeling at that time.
                </li>
              </ul>
            </p>
          </div>
        </section>
        <section class="row align-items-center section8 mt-5" id="Song">
          <div class="col-lg-6 justify-content-center d-flex">
            <img src="../assets/images/OmiCam/sec3.png" alt="viewAngle"
            class="section-img">
          </div>
          <div class="col-lg-6">
            <h3 class="section-title">Mix with Your Favorite Song</h3>
            <p>
              <ul>
                <li>
                  Pick your favorite tune and mix into your story.
                </li>
                <li>
                  Adjust your video clip to meet with beats and loop the melody.
                </li>
              </ul>
            </p>
          </div>
        </section>
        <section class="row align-items-center section9 mt-5" id="Text">
          <div class="col-lg-6 justify-content-center d-flex">
            <img src="../assets/images/OmiCam/sec3.png" alt="viewAngle"
            class="section-img">
          </div>
          <div class="col-lg-6">
            <h3 class="section-title">Make Not for your Story</h3>
            <p>
              <ul>
                <li>
                  Have a story name for your memory
                </li>
                <li>
                  Leave your thought for every moment you experienced.
                </li>
              </ul>
            </p>
          </div>
        </section>
        <section class="row align-items-center section10 mt-5" id="Live">
          <div class="col-lg-6 justify-content-center d-flex">
            <img src="../assets/images/OmiCam/sec3.png" alt="viewAngle"
            class="section-img">
          </div>
          <div class="col-lg-6">
            <h3 class="section-title">Share with Others in Live</h3>
            <p>
              <ul>
                <li>
                  Share the 360 live streaming to your friends.
                </li>
                <li>
                  Support the Facebook, Youtube 360 Live features. (for iPhone only)
                </li>
              </ul>
            </p>
          </div>
        </section>
        <section class="row align-items-center section11 mt-5" id="Player">
          <div class="col-lg-6 justify-content-center d-flex">
            <img src="../assets/images/OmiCam/sec3.png" alt="viewAngle"
            class="section-img">
          </div>
          <div class="col-lg-6">
            <h3 class="section-title">Enjoy Your Immersive Story</h3>
            <p>
              <ul>
                <li>
                  Watch your Story in panorama or experience it with VR goggle.
                </li>
                <li>
                Control the viewing orientation with touch screen or just move your mobile device.
                </li>
              </ul>
            </p>
          </div>
        </section>
        <section class="row align-items-center section12 mt-5" id="Cloud">
          <div class="col-lg-6 justify-content-center d-flex">
            <img src="../assets/images/OmiCam/sec3.png" alt="viewAngle"
            class="section-img">
          </div>
          <div class="col-lg-6">
            <h3 class="section-title">Make Your Story on Cloud</h3>
            <p>
              <ul>
                <li>
                  The proprietary OMI Cloud help you to process and generate your
                  VR story on cloud.
                </li>
                <li>
                  Don't need to worry the process time occupied your smartphone or PC,
                  Let OMI Cloud work for you.
                </li>
              </ul>
            </p>
          </div>
        </section>
        <section class="section13 animated">
          <div class="row mr-0 ml-0 section-row">
            <div class="col-lg-6 section13-img
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
                  @click.prevent="$router.push('/shop')">
                </map>
              </div>
            </div>
          </div>
        </section>
			</div>
		</div>
	</div>
</template>

<script>
import $ from 'jquery';

export default {
	data() { 
		return {
      icons: [{
        name: 'Control',
        imgSrc: require('../assets/images/OmiCam/240icon.png'),
        section: '#Control',
      }, {
        name: 'Integrate',
        imgSrc: require('../assets/images/OmiCam/easy-to-use.png'),
        section: '#Integrate',
      }, {
        name: 'Vivid',
        imgSrc: require('../assets/images/OmiCam/battery-icon.png'),
        section: '#Vivid'
      }, {
        name: 'Song',
        imgSrc: require('../assets/images/OmiCam/camera-icon.png'),
        section: '#Song',
      }, {
        name: 'Text',
        imgSrc: require('../assets/images/OmiCam/icon-waterproof.png'),
        section: '#Text',
      }, {
        name: 'Live',
        imgSrc: require('../assets/images/OmiCam/battery-icon.png'),
        section: '#Live'
      }, {
        name: 'Player',
        imgSrc: require('../assets/images/OmiCam/camera-icon.png'),
        section: '#Player',
      }, {
        name: 'Cloud',
        imgSrc: require('../assets/images/OmiCam/icon-waterproof.png'),
        section: '#Cloud',
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
        } else {
          $(this).css('opacity', '0');
        }
      })
    })
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/mixin";

.studio-wrap {
	padding-top: 50px;
	* {
		outline: none;
	}
  .breadcrumb {
    border-bottom: 1px solid gray;
    font-size: 28px;
    @include ipad() {
      font-size: 18px;
    }
    .breadcrumb-item {
      &.before::before {
        content: '|';
        color: gray;
      }
    }
	}
	.section-wrap {
		color: white;
		margin: 50px 0;
		.title {
      font-size: 48px;
			display: inline;
			margin-right: 10px;
			margin-bottom: 8px;
      color: #ff9933;
		}
		.sub-title {
			font-size: 16px;
		}
		.description {
			font-size: 1.5rem;
			text-align: justify;
			text-indent: 1.5rem;
		}
		.section1 {
      margin-bottom: 50px;
    }
    .section2 {
      .icon-box {
        display: inline-block;
        width: 12.5%;
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
    .section4 {
      height: 320px;
			padding: 10px;
			box-sizing: border-box;
      margin-top: 80px;
      margin-bottom: 30px;
      .section3-img {
        background-image: url('../assets/images/Home/device.png');
        background-position: center center;
        background-size: contain;
        background-repeat: no-repeat;
        @include ipad_pro() {
          height: 300px;
        }
      }
      .section4-img {
        background-image: url('../assets/images/Home/device.png');
        background-position: center center;
        background-size: contain;
        background-repeat: no-repeat;
        @include ipad_pro() {
          height: 300px;
        }
      }
      .section3-content,
      .section4-content {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: flex-start;
				padding-left: 10%;
				@media(max-width: 1023px) {
          flex-direction: row;
					align-items: center;
        }
      }
      .link-icon-btn {
        width: 75px;
        height: 75px;
      }
    }
		.section5,
		.section6,
		.section7,
		.section8,
		.section9,
		.section10,
		.section11,
		.section12 {
			height: 500px;
			border-bottom: 1px solid gray;
      color: white;
      height: 500px;
      padding: 20px 0;
      @include ipad_pro() {
        height: auto;
      }
      .section-img {
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
    .section13 {
      background-color: #1a1a1a;
      opacity: 0;
      transition: all 2.5s;
      height: 500px;
      @include ipad() {
        height: auto !important;
      }
      .section-row {
        height: 100%;
        width: 100%;
        @include ipad() {
          height: auto !important;
        }
        .section13-img {
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
        .link-icon-btn {
          width: 75px;
          height: 75px;
        }
      }
    }
	}
}
</style>

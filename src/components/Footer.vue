<template>
  <div class="wrap w-100">
    <div class="section-row">
      <div class="subscribe-section">
        <div class="form-group subscribe">
          <label class="rwd-label" for="e-mail">SUBSCRIBE NEWSLETTER</label>
          <div class="input-group mb-3 subscribe-input-group">
            <label class="pc-label" for="e-mail">SUBSCRIBE NEWSLETTER</label>
            <div class="subscribe-input-box mr-3">
              <input type="e-mail"
              class="form-control subscribe-input"
              placeholder="Enter your e-mail address"
              aria-label="Enter your e-mail address"
              id="e-mail" v-model="email"
              @keyup.13="Subscribe()">
              <div class="subscribe-message">
                {{ message }}
              </div>
            </div>
            <div class="input-group-append">
              <div class="btn subscribe-btn" @click="Subscribe()">SUBSCRIBE</div>
            </div>
          </div>
        </div>
      </div>
      <div class="social-section">
        <div>
          <a href="https://www.facebook.com/OmiCamUS/"
          class="facebook mr-2" target="_blank">
            <img src="../assets/images/Footer/facebook.png" alt="facebook">
					</a>
          <a href="https://www.youtube.com/channel/UC_ZWi0Il61IojlC5V1Odojw"
          class="youtube mr-2" target="_blank">
            <img src="../assets/images/Footer/youtube.png" alt="youtube">
					</a>
          <a href="https://twitter.com/MySight360"
          class="twitter mr-2" target="_blank">
            <img src="../assets/images/Footer/twitter.png" alt="twitter">
					</a>
          <a href="https://line.me/R/ti/p/hUf6J2xDQ9"
          class="line mr-2" target="_blank">
            <img src="../assets/images/Footer/line.png" alt="line">
					</a>
        </div>
      </div>
    </div>
    <div class="section-row">
      <div class="about-section">
        <router-link to="/about" class="mr-2 info-link">
          About
        </router-link>
        <router-link to="/privacy-policy" class="mr-2 info-link">
          Privacy Policy
        </router-link>
        <router-link to="/terms-of-service" class="mr-2 info-link">
          Terms of service
        </router-link>
      </div>
      <div class="copyright-section">
        <span>Copyright © 2019 Sightour Inc. All rights reserved</span>
      </div>
    </div>
  </div>
</template>

<script>
import { setTimeout } from 'timers';

export default {
  name: 'footerSection',
  data() {
    return {
      email: '',
      message: '',
    };
  },
  methods: {
    Subscribe() {
      let vm = this;
      if (vm.validateEmail(vm.email)) {
        let xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://www.omicam.com/_privateApi/omiSubscribeApi.php', true);
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhr.send('fun=add&email=' + vm.email);
        $('.subscribe-message').css({'color': 'green'});
        vm.message = "You're in !";
        setTimeout(function() {
          vm.email = '';
        }, 100);
        setTimeout(function() {
          vm.message = '';
        }, 5000);
      } else {
        $('.subscribe-message').css({'color': 'red'});
        vm.message = 'Wrong email format, please check again.';
        setTimeout(function() {
          vm.message = '';
        }, 5000);
      }
    },
    validateEmail(email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/mixin";

$section-mb: 10px;
$text-color: #ff9933;

.wrap {
  background-color: #0d0d0d;
  padding: 20px;
  font-size: 16px;
  user-select: none;
  .section-row {
    @media (max-width: 1000px) {
        text-align: center;
      }
    .subscribe-section {
      text-align: left;
      margin-bottom: $section-mb;
      display: inline-block;
      width: 60%;
      @media (max-width: 1000px) {
        // width: 100%;
        text-align: center;
        width: 60%;
      }
      @include ipad() {
        width: 80%;
      }
      @include iphone8plus() {
        width: 100%;
      }
      .subscribe {
        width: 100%;
        text-align: center;
        .rwd-label {
          display: none;
          color: $text-color;
          @media (max-width: 1000px) {
            display: inline-block;
            width: 100%;
            text-align: center;
            color: $text-color;
          }
        }
        .subscribe-input-group {
          display: flex;
          align-items: center;
          .pc-label {
            color: $text-color;
            @media (max-width: 1000px) {
              display: none;
            }
          }
          .subscribe-input-box{
            position: relative;
            width: 40%;
            @include ipad_pro() {
              width: 70%;
            }
            @include iphone5() {
              width: 50%;
            }
            .subscribe-input {
              border: none;
              border-bottom: 1px solid #767676;
              background-color: #0d0d0d;
              color: white;
              &:focus,
              &:active {
                outline: none;
                box-shadow: none;
              }
            }
            .subscribe-message {
              position: absolute;
              bottom: -25px;
              left: 0;
              overflow: auto;
              white-space: nowrap;
            }
          }
          .subscribe-btn {
            background-color: transparent;
            padding: 8px;
            border-radius: 5px;
            color: #ff9933;
            border: 1px #ff9933 solid;
            cursor: pointer;
            @include ipad() {
              font-size: 14px !important;
              padding: 3px;
            }
            &:hover {
              color: black;
              background-color: #ff9933;
            }
          }
        }
      }
    }
    .social-section {
      display: inline-block;
      text-align: right;
      width: 40%;
      margin-bottom: $section-mb;
      @media (max-width: 1000px) {
        width: 100%;
        text-align: center;
      }
      .facebook {
        color: #3b5998;
      }
      .youtube {
        color: #cd201f;
      }
      .twitter {
        color: #1da1f2;
      }
      .line {
        color: #00C300;
      }
    }
    .about-section {
      text-align: left;
      display: inline-block;
      width: 50%;
      @media (max-width: 1000px) {
        text-align: center;
        width: 100%;
      }
      .info-link {
        text-decoration: none;
        outline: 0;
        color: white;
        font-size: 16px;
        &:hover {
          color: #999 !important;
        }
        @include iphone8plus() {
          font-size: 14px !important;
        }
      }
    }
    .copyright-section {
      text-align: right;
      color: white;
      display: inline-block;
      width: 50%;
      margin-bottom: 5px;
      font-size: 16px;
      @media (max-width: 1000px) {
        text-align: center;
        width: 100%;
      }
      @include iphone8plus() {
        font-size: 14px !important;
      }
    }
  }
}
</style>

<template>
  <div class="wrap w-100">
    <div class="section-row">
      <div class="subscribe-section">
        <div class="form-group subscribe">
          <label class="rwd-label" for="e-mail">SUBSCRIBE NEWSLETTER</label>
          <div class="input-group mb-3 subscribe-input-group">
            <label class="pc-label" for="e-mail">SUBSCRIBE NEWSLETTER</label>
            <input type="text"
            class="form-control subscribe-input mr-3"
            placeholder="Enter your e-mail address"
            aria-label="Enter your e-mail address"
            id="e-mail">
            <div class="input-group-append">
              <div class="subscribe-btn">SUBSCRIBE</div>
            </div>
          </div>
        </div>
      </div>
      <div class="social-section">
        <div>
          <a href="https://www.facebook.com/OMICAMGLOBAL"
          class="facebook mr-2" target="_blank">
            <img src="../assets/images/Footer/facebook.png" alt="facebook">
					</a>
          <a href="https://www.youtube.com/channel/UC_ZWi0Il61IojlC5V1Odojw"
          class="youtube mr-2" target="_blank">
            <img src="../assets/images/Footer/youtube.png" alt="youtube">
					</a>
          <a href="https://twitter.com/omicamj"
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
export default {
  name: 'footerSection',
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
          .subscribe-btn {
            border: 1px solid $text-color;
            padding: 8px;
            border-radius: 5px;
            color: $text-color;
            cursor: pointer;
            @include iphone8plus() {
              font-size: 14px !important;
              padding: 8px;
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

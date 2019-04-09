<template>
  <div class="wrap w-100">
    <div class="row m-0">
      <div class="col-md-8 subscribe-section">
        <div class="form-group subscribe">
          <div class="input-group mb-3 subscribe-input-group">
            <label class="text-primary" for="e-mail">SUBSCRIBE NEWSLETTER</label>
            <input type="text"
            class="form-control subscribe-input mr-3"
            placeholder="Enter your e-mail address"
            aria-label="Enter your e-mail address"
            id="e-mail">
            <div class="input-group-append">
              <div class="btn btn-outline-primary">SUBSCRIBE</div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4 social-section">
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
      <div class="col-md-6 about-section">
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
      <div class="col-md-6 copyright-section">
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

.wrap {
  background-color: #0d0d0d;
  padding: 20px 50px;;
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
  .info-link {
    text-decoration: none;
    outline: 0;
    color: white;
    &:hover {
      color: #999 !important;
    }
  }
}
.subscribe-section {
  text-align: left;
  margin-bottom: 10px;
  @include ipad() {
    text-align: center;
  }
  .subscribe {
    width: 60%;
    @include ipad() {
      margin: 0 auto;
      width: 95%;
    }
    .subscribe-input-group {
      display: flex;
      align-items: center;
      width: 600px;
      .subscribe-input {
        border: none;
        border-bottom: 1px solid #767676;
        background-color: #0d0d0d;
        &:focus,
        &:active {
          outline: none;
          box-shadow: none;
        }
      }
    }
  }
}
.social-section {
  text-align: right;
  @include ipad() {
    text-align: center;
  }
}
.about-section {
  text-align: left;
  @include ipad() {
    text-align: center;
  }
}
.copyright-section {
  text-align: right;
  color: white;
  @include ipad() {
    text-align: center;
  }
}
</style>

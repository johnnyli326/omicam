<template>
  <div class="wrap w-100">
    <div class="row m-0">
      <div class="col-md-6">
        <div class="form-group">
          <div class="text-center">
            <label class="text-primary" for="e-mail">SUBSCRIBE NEWSLETTER</label>
          </div>
          <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Enter your e-mail address" aria-label="Enter your e-mail address" name="e-mail" id="e-mail">
            <div class="input-group-append">
              <div class="btn btn-outline-primary">SUBSCRIBE</div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6
      d-flex
      justify-content-center
      align-items-center">
        <div>
          <a href="https://www.facebook.com/OMICAMGLOBAL"
          class="facebook mr-2" target="_blank">
            <i class="fab fa-facebook-f fa-3x"></i>
					</a>
          <a href="https://www.youtube.com/channel/UC_ZWi0Il61IojlC5V1Odojw"
          class="youtube mr-2" target="_blank">
            <i class="fab fa-youtube fa-3x"></i>
					</a>
          <a href="https://vimeo.com/user85700784"
          class="vimeo mr-2" target="_blank">
            <i class="fab fa-vimeo-square fa-3x"></i>
					</a>
          <a href="https://play.google.com/store/apps/details?id=com.sightour.app.omiStudio"
          class="android mr-2" target="_blank">
            <i class="fab fa-android fa-3x"></i>
					</a>
          <a href="https://itunes.apple.com/app/omi-studio/id1102399436"
          class="apple mr-2" target="_blank">
            <i class="fab fa-apple fa-3x"></i>
					</a>
        </div>
      </div>
      <div class="col-12 mt-3 text-center">
        <span class="copyright mr-4">
          Copyright © 2019 Sightour Inc. All rights reserved
        </span>
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
    </div>
  </div>
</template>

<script>
export default {
  name: 'footerSection',
};
</script>

<style lang="scss" scoped>
.wrap {
  background-color: black;
  padding: 20px 0;
  .facebook {
    color: #3b5998;
  }
  .youtube {
    color: #cd201f;
  }
  .vimeo {
    color: #1ab7ea;
  }
  .android {
    color: #a4c639;
  }
  .apple {
    color: #818a91;
  }
  .globe {
    color: #818a91;
  }
  .info-link {
    text-decoration: none;
    outline: 0;
    color: #999;
    &:hover,
    &:active{
      color: white !important;
    }
    &:focus {
      color: #999;
    }
  }
  .copyright {
    color: #999;
  }
}

</style>

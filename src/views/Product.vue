<template>
  <div>
    <div class="page-title">
      <div class="container">
        <h2>Shop</h2>
      </div>
    </div>
    <div class="container my-5">
      <div class="row">
				<div class="col-md-6">
					<div class="sticky">
					  <img src="../assets/images/omicam-白底.jpg" alt="omicam">
					</div>
				</div>
				<div class="col-md-6">
          <h3 class="mb-3">OmiCam – Wearable VR Life Camera</h3>
          <div class="mb-3">
						<del class="original-price">$269</del>
						<span class="price">$249</span>
					</div>
          <ul class="list-unstyled mb-3 intro-content mb-4 text-secondary">
						<li>【4K Video】Renders VR footage up to 4K 30fps</li>
						<li>【Viewing Angle】Capture 240º wide-angle</li>
						<li>【Batter Performance】Support 10+ hr Battery Life in Lifelog mode</li>
						<li>【Unique Design 】Portable, Wearable, mountable and lightweight(3oz)</li>
						<li>【Shooting Fields】the 1st VR camera with a splash-proof and dust-proof design for use in any wide array of shooting fields</li>
						<li>【Smart Mode】Looping, Time-lapse & Lifelog recording modes</li>
						<li>【Video Performance】Patented Horizon Correction & E-Gimbal Stabilization to stabilize shaky video</li>
						<li>【Omi Studio】Edit smartly for one click away from producing VR highlight videos</li>
						<li>【Your VR story】Keep the memories and fulfill your life story</li>
					</ul>
					<ul class="text-secondary">
						<li>4K resolution(VR) at 30 fps filming delivers immersive experiences</li>
						<li>240deg VR life recorder with OMI stabilizer</li>
						<li>Up to 15hrs Lifelog working time</li>
						<li>12 Megapixel Sensor</li>
						<li>OMI Studio available for download on the app store</li>
					</ul>
          <div class="input-group">
            <input type="number" id="tentacles" name="tentacles" min="1" max="100"
						value="1" class="text-center mr-1"
						style="background-color: #f2f2f2; width:50px">
            <button class="btn cart-btn" type="button">
              ADD TO CART
            </button>
          </div>
					<div class="text-center mt-3">
            <div class="btn btn-primary w-100">BUY NOW</div>
					</div>
				</div>
			</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
	},
  created() {
    window.scrollTo(0, 0);
  },
}
</script>

<style lang="scss" scoped>
.btn {
  cursor: pointer;
}
.page-title {
  width: 100%;
  padding: 30px;
  background-color: #f8f9f9;
  border: 1px solid #e9e9e9;
}
.sticky {
	position: sticky;
	position: -webkit-sticky;
  top: 4rem;
}
.intro-content {
  line-height: 2;
}
.cart-btn {
	background-color: #e59e34;
	color: white;
  transition: all .3s;
  &:hover,
  &:active {
    opacity: 0.6;
	}
}
.original-price {
	font-size: 20px;
  color: #77a464;
}
.price {
	font-size: 40px;
	color: #77a464;
	font-weight: 500;
}
</style>

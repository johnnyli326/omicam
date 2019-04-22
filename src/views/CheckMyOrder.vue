<template>
	<div>
		<div class="container tracking-wrap">
			<nav aria-label="breadcrumb">
        <ol class="breadcrumb bg-transparent">
          <li class="breadcrumb-item">
            <router-link to="/">
              HOME
            </router-link>
          </li>
          <li class="breadcrumb-item before active">
            <router-link to="/shop">
              SHOP
            </router-link>
          </li>
          <li class="breadcrumb-item before active" aria-current="page">
            ORDER TRACKING
          </li>
        </ol>
      </nav>
			<section class="tracking-box">
				<h5 class="tracking-title">Track my order</h5>
				<label for="orderId" class="tracking-subtitle">ORDER ID：</label>
				<input type="text" id="orderId" v-model="orderId">
				<a href="#" class="track-btn" @click.prevent="track(orderId)"></a>
				<p style="color:gray">{{ message }}</p>
			</section>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			orderId: '',
			message: '',
		}
	},
	methods: {
		track() {
			let vm = this;
			let xhr = new XMLHttpRequest();
			xhr.open('get', 'https://www.omicam.com/_privateApi/omiOrderApi.php?id='+orderId, true);
			xhr.send(null);
			xhr.onload = () => {
				console.log(xhr.response);
				vm.message = xhr.response;
			}
		}
	}
}
</script>

<style lang="scss" scoped>
@import "../assets/mixin";

.tracking-wrap {
	padding-top: 50px;
	.breadcrumb {
    border-bottom: 1px solid gray;
    font-size: 28px;
    @include ipad() {
      font-size: 18px;
		}
		@include iphone678() {
      font-size: 14px;
    }
    .breadcrumb-item {
      &.before::before {
        content: '|';
        color: gray;
      }
    }
  }
	.tracking-box {
		width: 100%;
		padding: 20px 20px 100px 20px;
		background-color: black;
		border: 1px solid #9d9c9c;
		margin: 50px 0;
		.tracking-title {
			color: #9d9c9c;
			font-weight: normal;
			margin-bottom: 20px;
		}
		.tracking-subtitle {
			color: #ff9933;
		}
		#orderId {
			background-color: transparent;
			border: 0;
			border-bottom: 1px solid #9d9c9c;
			margin: 0 10px;
			width: 200px;
			color: white;
			outline: 0;
		}
		.track-btn {
			display: inline-block;
			width: 20px;
			height: 20px;
			background-color: transparent;
			background-image: url('../assets/images/Tracking/search.png');
			background-repeat: no-repeat;
			background-size: cover;
			background-position: center center;
		}
	}
}
</style>
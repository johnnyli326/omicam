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
			<main>
				<div class="w-100 text-center">
        <img src="../assets/images/Home/device.png" alt="supportDevice">
			</div>
			<div class="text-center">
				<small>Omi Studio</small>
			</div>
			<p class="mt-3">Please go to the following link to get the latest desktop software of OMI Studio :</p>
			<div>
        <a href="https://www.dropbox.com/sh/jku79zytbsb33ue/AAAA_EQw_FQDqSyiSLoxsgpQa?dl=0"
				class="link-color" target="_blank">
          OMI Studio ( Windows Version)
        </a>
			</div>
			<div>
        <a href="https://www.dropbox.com/sh/4esu05o8ex50krl/AAC-ZBTYkGaawJ5wCOiHh77Wa?dl=0"
				class="link-color" target="_blank">
          OMI Sutdio (MAC Version)
        </a>
      </div>
			<p class="mt-5">
				Please note that
				<br>
        Windows needs to be Win7 or later
				<br>
        Mac OS needs to be 10.11 or later
			</p>
			</main>
		</div>
	</div>
</template>

<script>
export default {
	data() { return {}; },
	created() {
		window.scrollTo(0, 0);
	},
};
</script>

<style lang="scss" scoped>
@import "../assets/mixin";

.studio-wrap {
	padding-top: 50px;
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
	main {
		color: white;
	}
	.link-color {
		color: #ffcd05;
		&:hover {
			color: #777777;
		}
	}
}
</style>

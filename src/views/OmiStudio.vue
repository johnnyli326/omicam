<template>
  <div>
    <div class="page-title">
			<div class="container">
        <h2>OMI STUDIO</h2>
			</div>
		</div>
		<div class="container">
			<div class="w-100 text-center">
        <img src="../assets/images/img-7.png" alt="supportDevice">
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
	.page-title {
		width: 100%;
    padding: 30px;
		background-color: #f8f9f9;
		border: 1px solid #e9e9e9;
	}
	.link-color {
		color: #ffcd05;
		&:hover {
			color: #777777;
		}
	}
	p {
		color: #777777;
	}
</style>

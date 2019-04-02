<template>
  <div>
    <div class="page-title">
      <div class="container">
        <h2>CONTACT</h2>
      </div>
    </div>
		<div class="container my-5 text-center">
			<nav aria-label="breadcrumb">
        <ol class="breadcrumb bg-white">
          <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
          <li class="breadcrumb-item active" aria-current="page">Contact</li>
        </ol>
      </nav>
      <section class="mt-4">
        <header class="my-3">
          <h3>聯繫方式</h3>
        </header>
        <main>
          <h4>客服信箱</h4>
          <a href="#">service@sightour.com</a>
          <h4>OmiCam社團-台灣討論區</h4>
          <a href="https://www.facebook.com/groups/209760876430584/">
            https://www.facebook.com/groups/
            209760876430584/
          </a>
          <p>
            寄信或維修地址
            <br>
            1. 地址：100台北市中正區思源街18號A棟206室
            <br>
            2. 電話：(02)2365-6247
            <br> 
            3. 收件人：視旅科技股份有限公司 (或維修部)
          </p>
        </main>
      </section>
      <section class="mt-5">
        <header class="my-3">
          <h3 class="text-center">各大通路</h3>
        </header>
        <main>
          <h4>實體通路</h4>
          <p>
            台灣實體通路
            <br>
            臺北地區：光華新天地2F 88室 玩相機
            <br>
            中部地區：數位聚落 
          </p>
          <h4>線上通路</h4>
          <div class="mb-4" v-for="(item, index) in channels" :key="index">
            <img class="channel-img"
            :src="item.imgSrc" 
            :alt="item.name">
            <h5>{{ item.name }}</h5>
						<a :href="item.URL" class="channel-link">{{ item.URL }}</a>
          </div>
        </main>
      </section>
		</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      channels: [{
				name: '硬式要學',
				URL: 'https://buy3c.in/shop/omicam-vr-camera/',
				imgSrc: require('../assets/images/硬式要學.png'),
			}, {
				name: 'PCHome24h購物',
				URL: 'https://24h.pchome.com.tw/prod/DGCI2O-A9008XKSQ',
				imgSrc: require('../assets/images/PCHOME.png'),
			}, {
				name: 'Kickstarter',
				URL: `https://www.kickstarter.com/projects/660471689/
				mysight360-worlds-first-wearable-vr-camera-for-hik/`,
				imgSrc: require('../assets/images/KICKSTARTER.png'),
			}, {
				name: 'Indiegogo',
				URL: `https://www.indiegogo.com/projects/mysight360-wearable-vr-camera-for-videos#/`,
				imgSrc: require('../assets/images/indiegogo.png'),
			}, {
				name: 'Makuake',
				URL: `https://www.makuake.com/project/omicam/`,
				imgSrc: require('../assets/images/Makuake.png'),
			}, {
				name: 'Machi-ya',
				URL: `https://cf.machi-ya.jp/project/20181221/04`,
				imgSrc: require('../assets/images/machiya.png'),
			}, {
				name: 'Campfire',
				URL: `https://camp-fire.jp/projects/view/110442`,
				imgSrc: require('../assets/images/campfire.png'),
			}]
    };
  },
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
.news-img {
	box-shadow: 1px 1px 1px 2px gray
}
.channel-img {
	width: 250px;
	height: 50px;
}
.channel-link {
  word-wrap: break-word;
}
</style>

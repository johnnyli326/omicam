<template>
  <div>
    <div class="page-title">
      <div class="container">
        <h2>OMI STORY</h2>
      </div>
    </div>
    <div class="container my-5">
			<div v-for="(story, index) in stories" :key="index">
        <div class="row mb-5">
          <div class="col-md-3 news-img text-center"
					:style="{ backgroundImage: 'url(' + story.imgSrc + ')' }">
            <router-link to="/"></router-link>
          </div>
          <div class="col-md-9">
            <small class="text-primary">OMI STORY</small>
						<main class="ml-4 mt-3">
              <h3>Omi Story {{ index+1 }}</h3>
              <p style="text-align:justify">
								{{ story.content }}
								<br>
								<span class="d-block" style="text-align: right">--{{ story.name }}</span>
              </p>
						</main>
          </div>
        </div>
				<hr>
			</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      stories: [{
        name: 'Teacher Vane, Travelholic',
				imgSrc: require('../assets/images/teacher.png'),
				content: `"When I thought back my travel experience,
				OmiCam always surprised me again and again. He captured
				all wonderful time in my travels."`,
      }, {
        name: 'MoLong, Wargamer',
				imgSrc: require('../assets/images/MoLong.jpg'),
				content: `“At first, when playing wargame, I wear
				OmiCam to make my appearance unique like a unicorn
				beetle. Then I fell in love with 240° VR video.”`
      }, {
        name: 'Eva, Divingholic',
				imgSrc: require('../assets/images/eva.png'),
				content: `"While using OmiCam, no need to find the
				best angle so I could enjoy the present. Getting home
				and played the videos, the screen recalled best diving
				memory."`
      }],
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
	box-shadow: 1px 1px 1px 2px gray;
  height: 300px;
  background-position: center center;
	background-size: cover;
	a {
    display: block;
    height: 100%;
	}
}
</style>

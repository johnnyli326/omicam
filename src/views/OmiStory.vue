<template>
  <div>
    <div class="container mb-5 story-wrap">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb bg-transparent">
          <li class="breadcrumb-item">
            <router-link to="/">
              HOME
            </router-link>
          </li>
          <li class="breadcrumb-item before active" aria-current="page">
            OMI STORY
          </li>
        </ol>
      </nav>
      <!-- single list start -->
			<div v-for="(story, index) in storyList" :key="index">
        <div class="row mb-5">
          <div class="col-md-3 news-img text-center"
					:style="{ backgroundImage: 'url(' + 'https://www.omicam.com/' + story.listImg + ')' }">
            <router-link :to="'/story/' + routerId[index]"></router-link>
          </div>
          <div class="col-md-9 mt-4">
            <h3 class="text-primary">{{ story.title }}</h3>
						<main class="ml-4 mt-3">
              <p style="text-align:justify;color:white">
								{{ story.description }}
								<br>
								<span class="d-block" style="text-align: right">--{{ story.author }}</span>
              </p>
						</main>
          </div>
        </div>
				<hr>
			</div>
      <!-- single list end  -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      storyList: [],
      routerId: [],
    };
  },
  methods: {
    getStories() { // get omi-stories from database
      let vm = this;
      const xhr = new XMLHttpRequest; // state = 0
      xhr.open('get',
        'https://www.omicam.com/_privateApi/omiStoryApi.php?fun=list&from=0&count=4',
        true);
      xhr.send(null);
      xhr.onload = () => {
        vm.storyList = JSON.parse(xhr.response).reverse(); // get stories from new to old.
        Array.prototype.forEach.call(vm.storyList, element => {
          // console.log(element.description);
          vm.routerId.push(element.id.replace(/\s/g, '')); // get routerId which has been removed space.
        });
      };
    },
  },
  created() {
    window.scrollTo(0, 0);
    this.getStories();
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/mixin";

.story-wrap {
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
  .news-img {
    box-shadow: 1px 1px 1px 2px gray;
    height: 300px;
    background-position: center center;
    background-size: cover;
    padding: 0;
    a {
      display: block;
      height: 100%;
      width: 100%;
    }
  }
}
</style>

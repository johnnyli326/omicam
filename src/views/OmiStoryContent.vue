<template>
  <div>
    <h2>{{ story.title }}</h2>
    <img :src="'https://www.omicam.com/' + story.listImg" :alt="story.author">
		<h2>{{  story.author }}</h2>
		<p>{{ story.description }}</p>
		<iframe width="560" height="315"
		:src="'https://www.youtube.com/embed/' + 'OSULHl0e0F0'"
		frameborder="0"
		allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
		allowfullscreen>
		</iframe>
    <h2>More Stories</h2>
    <ul>
      <li v-for="(item, index) in ExtraStories" :key="index">
        {{ item.title }} {{ item.author }}
        <a href="#" @click.prevent="$router.push('/omistory/' + item.id)">
          <img :src="'https://www.omicam.com/' + item.listImg" :alt="item.author">
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      story: [],
      databaseUrl: '',
      databaseId: '',
      ExtraStories: [],
    };
  },
  methods: {
    getStory() { // get story content
      let vm = this;
      vm.getStoryId();
      vm.databaseUrl = 'https://www.omicam.com/_privateApi/omiStoryApi.php?fun=detail&id=' + vm.databaseId;
      const xhr = new XMLHttpRequest; // state = 0
      xhr.open('get', vm.databaseUrl, true);
      xhr.send(null);
      xhr.onload = () => {
        vm.story = JSON.parse(xhr.response); // fetch JSON data, have to JSON.parse
        console.log(this.story.nextStorys);
        vm.ExtraStories = vm.story.nextStorys;
      };
    },
    getStoryId() { // define database id
      let vm = this;
      vm.databaseId = vm.$route.params.storyId
    }
  },
  created() {
    window.scrollTo(0, 0);
    this.getStory();
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

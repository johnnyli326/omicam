<template>
  <div>
    <h2>{{ story.title }}</h2>
		<h2>{{  story.author }}</h2>
		<p>{{ story.description }}</p>
		<iframe width="560" height="315"
		:src="'https://www.youtube.com/embed/' + 'OSULHl0e0F0'"
		frameborder="0"
		allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
		allowfullscreen>
		</iframe>
  </div>
</template>

<script>
export default {
  data() {
    return {
      story: [],
    };
  },
  methods: {
    getStories() { // get omi-stories from database
      const xhr = new XMLHttpRequest; // state = 0
      xhr.open('get',
        'https://www.omicam.com/_privateApi/omiStoryApi.php?fun=detail&id=1',
        true);
      xhr.send(null);
      xhr.onload = () => {
        console.log(xhr.response);
        this.story = JSON.parse(xhr.response); // fetch JSON data, have to JSON.parse
        console.log(this.story);
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

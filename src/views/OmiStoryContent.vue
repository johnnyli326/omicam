<template>
  <div>
    <div class="container">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb bg-transparent">
          <li class="breadcrumb-item">
            <router-link to="/">
              <img src="../assets/images/icons/omicam_icon.png" alt="omicam">
              Home
            </router-link>
          </li>
          <li class="breadcrumb-item before" aria-current="page">
            <router-link to="/omistory">
              OMI STORY
            </router-link>
          </li>
          <li class="breadcrumb-item before active" aria-current="page">
            {{ story.title }}
          </li>
        </ol>
      </nav>
      <main class="row" style="color:white;">
        <div class="col-8">
          <h2>{{ story.title }}</h2>
          <h2 class="text-right">--{{  story.author }}</h2>
          <img :src="'https://www.omicam.com/' + story.listImg" :alt="story.author">
          <p>{{ story.description }}</p>
        </div>
        <div class="col-4">
          <h2>More Stories</h2>
          <ul>
            <li v-for="(item, index) in ExtraStories" :key="index">
              {{ item.title }} {{ item.author }}
              <a href="#" @click.prevent="PushTo(item.id)">
                <img :src="'https://www.omicam.com/' + item.listImg" :alt="item.author">
              </a>
            </li>
          </ul>
        </div>
      </main>
    </div>
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
    },
    PushTo(id) {
      let vm = this;
      vm.$router.push('/omistory/' + id);
    }
  },
  created() {
    window.scroll(0, 0); // new params page scrollTo
    this.getStory();
  },
  beforeRouteUpdate(to, from, next) {
    next(); // move to specific story
    window.scroll(0, 0); 
    this.databaseId = this.$route.params.storyId; // get params.storyId
    this.getStory(); // get story data
  },
};
</script>

<style lang="scss" scoped>
.breadcrumb {
  border-bottom: 1px solid gray;
  font-size: 28px;
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
	a {
    display: block;
    height: 100%;
	}
}
</style>

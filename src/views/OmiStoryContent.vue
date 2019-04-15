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
      <main class="main" style="color:white;">
        <article class="content">
          <h2>{{ story.title }}</h2>
          <h6 class="text-right">--{{  story.author }}</h6>
          <img :src="'https://www.omicam.com/' + story.listImg" :alt="story.author">
          <p>{{ story.description }}</p>
        </article>
        <div class="extra-story">
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
@import "../assets/mixin";

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
	a {
    display: block;
    height: 100%;
	}
}
.main {
  width: 100%;
  margin-top: 50px;
  .content {
    width: 70%;
    display: inline-block;
    vertical-align: top;
    padding: 10px;
    @include ipad() {
      width: 100%;
    }
    img {
      width: 100%;
    }
  }
  .extra-story {
    width: 30%;
    display: inline-block;
    vertical-align: top;
    padding: 10px;
    ul {
      list-style: none;
      li {
        margin-bottom: 20px;
      }
    }
    @include ipad() {
      width: 100%;
      ul {
        width: 100%;
        li {
          display: inline-block;
          width: 31.33333%;
          margin-right: 1%;
        }
      }
    }
  }
}
</style>

<template>
  <div>
    <div class="container story-content-wrap">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb bg-transparent">
          <li class="breadcrumb-item">
            <router-link to="/">
              Home
            </router-link>
          </li>
          <li class="breadcrumb-item before" aria-current="page">
            <router-link to="/news">
              OMI NEWS
            </router-link>
          </li>
          <li class="breadcrumb-item before active" aria-current="page">
            {{ news.title }}
          </li>
        </ol>
      </nav>
      <main class="main" style="color:white;">
        <article class="content">
          <h2>{{ news.title }}</h2>
          <p>{{ news.description }}</p>
          <img :src="'https://www.omicam.com/' + news.contentImg" :alt="news.contentImg">
          <p v-html="news.content"></p>
          <!-- user assets -->
          <div v-for="asset in assets" :key="asset.id" class="asset-box">
            <!-- out video -->
            <div class="video-wrap" v-if="asset.type == 3">
              <iframe :src="asset.url"></iframe>
            </div>
            <!-- local video -->
            <div class="video-wrap" v-if="asset.type == 1">
              <video :src="'https://www.omicam.com/' + asset.url" controls></video>
            </div>
            <!-- img -->
            <img :src="'https://www.omicam.com/' + asset.url" :alt=" + asset.url" v-if="asset.type == 0 || asset.type == 2">
          </div>
        </article>
        <ul class="extra-story">
          <li v-for="item in ExtraNews" :key="item.id"
          class="extra-story-item">
            <a href="#" @click.prevent="PushTo(item.id)">
              <img :src="'https://www.omicam.com/' + item.listImg" :alt="item.author">
            </a>
            <span>{{ item.title }} {{ item.author }}</span>
          </li>
        </ul>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      news: [],
      databaseUrl: '',
      databaseId: '',
      ExtraNews: [],
      assets: [], 
    };
  },
  methods: {
    getNews() { // get story content
      let vm = this;
      vm.getStoryId();
      vm.databaseUrl = ' https://www.omicam.com/_privateApi/omiNewsApi.php?fun=detail&id=' + vm.databaseId;
      const xhr = new XMLHttpRequest(); // state = 0
      xhr.open('get', vm.databaseUrl, true);
      xhr.send(null);
      xhr.onload = () => {
        console.log(xhr.response);
        vm.news = JSON.parse(xhr.response); // fetch JSON data, have to JSON.parse
        console.log(vm.news);
        vm.assets = vm.news.linkInfos;
        console.log(vm.assets[0].type);
        vm.ExtraNews = vm.news.nextNews;
      };
      
    },
    getStoryId() { // define database id
      let vm = this;
      vm.databaseId = vm.$route.params.newsId
    },
    PushTo(id) {
      let vm = this;
      vm.$router.push('/news/' + id);
    }
  },
  created() {
    window.scroll(0, 0); // new params page scrollTo
    this.getNews();
  },
  beforeRouteUpdate(to, from, next) {
    next(); // move to specific story
    window.scroll(0, 0); 
    this.databaseId = this.$route.params.newsId; // get params.storyId
    this.getNews(); // get story data
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/mixin";

.story-content-wrap {
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
      p {
        text-align: justify;
        text-indent: 20px;
        margin-top: 20px;
      }
      .asset-box {
        margin-bottom: 20px;
        margin-top: 20px;
        .video-wrap {
          position: relative;
          width: 90%;
          padding-top: 56.25%;
          margin-bottom: 20px;
					margin-top: 20px;
					margin-left: auto;
          margin-right: auto;
          iframe {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            outline: none;
          }
          video {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            outline: none;
          }
        }
        img {
          width: 100%;
        }
      }
    }
    .extra-story {
      width: 25%;
      margin-left: 5%;
      display: inline-block;
      vertical-align: top;
      padding: 10px;
      list-style: none;
      .extra-story-item {
        display: block;
        margin-bottom: 50px;
      }
      @include ipad() {
        width: 100%;
        .extra-story-item {
          display: inline-block;
          width: 29.33333%;
          margin-right: 4%;
          vertical-align: top;
        }
      }
    }
  }
}

</style>

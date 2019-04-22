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
            <router-link to="/story">
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
          <img :src="'https://www.omicam.com/' + story.listImg" :alt="story.author"
          style="width:100%;">
          <p v-html="story.content"></p>
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
        <div class="extra-story">
          <ul>
            <li v-for="item in ExtraStories" :key="item.id">
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
      assets: [], 
    };
  },
  methods: {
    getStory() { // get story content
      let vm = this;
      vm.getStoryId();
      vm.databaseUrl = 'https://www.omicam.com/_privateApi/omiStoryApi.php?fun=detail&id=' + vm.databaseId;
      const xhr = new XMLHttpRequest; // state = 0
      xhr.open('get', vm.databaseUrl, false);
      xhr.send(null);
      xhr.onload = () => {
        vm.story = JSON.parse(xhr.response); // fetch JSON data, have to JSON.parse
        vm.assets = this.story.linkInfos;
        console.log(vm.assets[0].type);
        vm.ExtraStories = vm.story.nextStorys;
      };
    },
    getStoryId() { // define database id
      let vm = this;
      vm.databaseId = vm.$route.params.storyId
    },
    PushTo(id) {
      let vm = this;
      vm.$router.push('/story/' + id);
    },
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
}

</style>

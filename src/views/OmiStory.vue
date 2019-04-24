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
			<div v-for="story in storyList" :key="story.id">
        <div class="row mb-5">
          <router-link :to="'/story/' + story.id" class="col-md-5 story-img text-center"
          :style="{ backgroundImage: 'url(' + 'https://www.omicam.com/' + story.listImg + ')' }">
          </router-link>
          <div class="col-md-7 mt-4 story-intro-box">
            <h3 class="text-primary">{{ story.title }}</h3>
						<main class="ml-4 mt-3">
              <p style="text-align:justify;color:white" v-html="story.description"></p>
						</main>
            <span class="story-intro-author">--{{ story.author }}</span>
          </div>
        </div>
				<hr>
			</div>
      <!-- single list end  -->
      <!-- pagination -->
      <div class="text-center" v-if="totalStories">
        <ul class="pagination">
          <li @click.prevent="ChangePage('last')"
          class="pagination-item" aria-label="Previous"
          v-if="totalPage>1">
            &laquo;
          </li>
          <li v-for="page in totalPage" :key="page.id" class="pagination-item"
          @click.prevent="ChangePage(page)" :class="{'active' : page == ((startItem/PAGE_SIZE)+1) }">
            {{ page }}
          </li>
          <li @click.prevent="ChangePage('next')"
          class="pagination-item" aria-label="Next"
          v-if="totalPage>1">
            &raquo;
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery';

export default {
  data() {
    return {
      storyList: [],
      startItem: 0,
      totalStories: '',
      PAGE_SIZE: 3,
    };
  },
  methods: {
    getStories() { // get omi-stories from database
      let vm = this;
      const xhr = new XMLHttpRequest(); // state = 0
      xhr.open('get',
      'https://www.omicam.com/_privateApi/omiStoryApi.php?fun=list&from='+ vm.startItem +'&count=' + vm.PAGE_SIZE,
      true);
      xhr.send(null);
      xhr.onload = () => {
        let data = JSON.parse(xhr.response); // get stories from new to old.
        vm.storyList = data.list;
        vm.totalStories = data.total;
        console.log(vm.totalStories);
      };
    },
    ChangePage(page) {
      let vm = this;
      if (page == 'last' && vm.startItem > 0) {  // last page
        window.scrollTo(0, 0);
        vm.startItem -= vm.PAGE_SIZE;
      } else if (page == 'next' && (vm.startItem < (vm.totalPage-1)*vm.PAGE_SIZE)) { // next page
        window.scrollTo(0, 0);
        vm.startItem += vm.PAGE_SIZE;
      } else if (typeof(page) == "number" && (vm.startItem != (page-1) * vm.PAGE_SIZE)){ // select page
        window.scrollTo(0, 0);
        vm.startItem = (page-1) * vm.PAGE_SIZE;
      } else { // don't satisfy any case; 
        return false;
      }
      const xhr = new XMLHttpRequest(); // state = 0
      xhr.open('get',
      'https://www.omicam.com/_privateApi/omiStoryApi.php?fun=list&from='+ vm.startItem +'&count=' + vm.PAGE_SIZE,
      true);
      xhr.send(null);
      xhr.onload = () => {
        let data = JSON.parse(xhr.response); // get stories from new to old.
        vm.storyList = data.list;
      };
    },
  },
  computed: {
    totalPage() {
      let vm = this;
      let pageCount = parseInt(vm.totalStories/vm.PAGE_SIZE) + (vm.totalStories%vm.PAGE_SIZE>0 ? 1 : 0);
      if(!vm.storyList || vm.totalStories <= 0) {
        return 1
      } else {
        return parseInt(vm.totalStories/vm.PAGE_SIZE) + (vm.totalStories%vm.PAGE_SIZE>0 ? 1 : 0);
      }
    }
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
  .story-img {
    display: inline-block;
    background-position: center center;
    background-size: cover;
    padding-top: 23.43%;
    @include ipad() {
      padding-top: 56.25%;
    }
  }
  .story-intro-box {
    position: relative;
    .story-intro-author {
      position: absolute;
      bottom: 10px;
      right: 10px;
      color: white;
      font-size: 16px;
    }
  }
  .pagination {
    list-style: none;
    display: inline-block;
    user-select: none;
    .pagination-item {
      display: inline-block;
      color: #ff9933;
      cursor: pointer;
      margin-right: 10px;
      border: 1px solid #ff9933;
      padding: 5px;
      border-radius: 3px;
      &.active {
        background-color: #fa7d00cb;
      }
      &:hover {
        background-color: #fa7d00cb;
      }
    }
  }
}
</style>

<template>
  <div>
    <div class="container mb-5 news-wrap">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb bg-transparent">
          <li class="breadcrumb-item">
            <router-link to="/">
              HOME
            </router-link>
          </li>
          <li class="breadcrumb-item before active" aria-current="page">
            OMI NEWS
          </li>
        </ol>
      </nav>
      <!-- single list start -->
			<div v-for="(news, index) in newsList" :key="index">
        <div class="row mb-5">
          <div class="col-md-3 news-img text-center"
					:style="{ backgroundImage: 'url(' + 'https://www.omicam.com/' + news.listImg + ')' }">
            <router-link :to="'/news/' + news.id"></router-link>
          </div>
          <div class="col-md-9 mt-4">
            <h3 class="text-primary">{{ news.title }}</h3>
						<main class="ml-4 mt-3">
              <p style="text-align:justify;color:white" v-html="news.description">
								<br>
								<span class="d-block" style="text-align: right">--{{ news.author }}</span>
              </p>
						</main>
          </div>
        </div>
				<hr>
			</div>
      <!-- single list end  -->
      <div class="text-center"  v-if="totalNews">
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
const PAGE_SIZE = 2;

export default {
  data() {
    return {
      newsList: [],
      totalNews: '',
      startItem: 0,
      PAGE_SIZE: 3,
    };
  },
  methods: {
    getNewsList() { // get omi-stories from database
      let vm = this;
      const xhr = new XMLHttpRequest; // state = 0
      xhr.open('get',
        'https://www.omicam.com/_privateApi/omiNewsApi.php?fun=list&from=' + vm.startItem +'&count=' + vm.PAGE_SIZE,
        true);
      xhr.send(null);
      xhr.onload = () => {
        let data = JSON.parse(xhr.response); // get stories from new to old.
        vm.newsList = data.list;
        vm.totalNews = data.total;
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
      let pageCount = parseInt(vm.totalNews/vm.PAGE_SIZE) + (vm.totalNews%vm.PAGE_SIZE>0 ? 1 : 0);
      if(!vm.storyList || vm.totalNews <= 0) {
        return 1
      } else {
        return parseInt(vm.totalNews/vm.PAGE_SIZE) + (vm.totalNews%vm.PAGE_SIZE>0 ? 1 : 0);
      }
    }
  },
  created() {
    window.scrollTo(0, 0);
    this.getNewsList();
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/mixin";

.news-wrap {
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

<template>
  <div>
    <div class="page-title">
      <div class="container">
        <h2>OMI NEWS</h2>
      </div>
    </div>
    <div class="container my-5">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb bg-white">
          <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
          <li class="breadcrumb-item active" aria-current="page">OMI News</li>
        </ol>
      </nav>
			<div v-for="(item, index) in news" :key="index">
        <div class="row mb-4">
          <div class="col-md-3 news-img text-center">
						<router-link to="/">
              <img :src="item.imgSrc" :alt="item.name">
						</router-link>
          </div>
          <div class="col-md-9">
            <small class="text-primary mt-3">NEWS</small>
            <h3>Omi News {{ index+1 }}</h3>
            <p class="text-truncate">
							{{ item.content }}
            </p>
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
      news: [{
				name: '標題一',
				imgSrc: require('../assets/images/news.jpg'),
				content: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Possimus, nihil delectus nobis voluptates blanditiis nemo
                  aperiam debitis consectetur. Laborum, vel vitae modi nam totam
                  mollitia ab accusamus eligendi soluta provident!`
			}, {
				name: '標題二',
				imgSrc: require('../assets/images/news-2.jpg'),
				content: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Possimus, nihil delectus nobis voluptates blanditiis nemo
                  aperiam debitis consectetur. Laborum, vel vitae modi nam totam
                  mollitia ab accusamus eligendi soluta provident!`
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
	box-shadow: 1px 1px 1px 2px gray
}
</style>

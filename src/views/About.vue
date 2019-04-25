<template>
  <div>
    <div class="container">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb bg-transparent">
          <li class="breadcrumb-item">
            <router-link to="/">
              HOME
            </router-link>
          </li>
          <li class="breadcrumb-item before active" aria-current="page">
            ABOUT
          </li>
        </ol>
      </nav>
      <article class="container mt-4">
        <main>
          <p>
          At Sightour, we believe in building a new way that inspires
          you to recall the past by your own way. It will be more vivid
          to turn your memory into visualization rather than declarative
          words. We believe that it worths reading after making your life
          a story. Your life is your story.
          </p>
          <p>
            <strong>
            Remember it. Record it. Recall it. And Share it.
            </strong>
          </p>
        </main>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {
    window.scrollTo(0, 0);
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/mixin";

.breadcrumb {
  border-bottom: 1px solid gray;
	font-size: 28px;
	padding-top: 50px;
  .breadcrumb-item {
    font-size: 28px;
    &.before::before {
      content: '|';
      color: gray;
    }
    @include ipad() {
      font-size: 18px;
    }
    @include iphone678() {
      font-size: 14px;
    }
    .tracking-icon {
      @include iphone8plus() {
        width: 14px;
      }
    }
  }
}
.page-title {
  width: 100%;
  padding: 30px;
  background-color: #f8f9f9;
  border: 1px solid #e9e9e9;
}
main {
  color: #999;
  text-align: justify;
}
</style>

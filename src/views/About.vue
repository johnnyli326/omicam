<template>
  <div>
		<nav class="page-title">
      <div class="container">
        <h2>ABOUT</h2>
      </div>
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

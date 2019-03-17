<template>
  <div>
    <div class="page-title">
      <div class="container">
        <h2>SUPPORT</h2>
      </div>
    </div>
    <div class="container my-5">
      <h3>OmiCam Support Site</h3>
      <p>
        You can read FAQ, find updates of application
        and submit a ticket here.
      </p>
      <a href="https://support.omicam.com/portal/home" target="_blank">
        https://support.omicam.com/portal/home
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
</style>

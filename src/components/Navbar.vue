<template>
  <div class="hello">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div><a class="navbar-brand" href="#"><img src="http://www.omicam.com/wp-content/uploads/2019/01/cropped-omilogye_180x-1.png" alt=""></a></div>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav ml-auto">
          <a class="nav-item nav-link active" href="#">OmiCam<span class="sr-only">(current)</span></a>
          <a class="nav-item nav-link" href="#">Omi Studio</a>
          <a class="nav-item nav-link" href="#">News</a>
          <a class="nav-item nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Omi Story</a>
          <a class="nav-item nav-link" href="#">Support</a>
          <a class="nav-item nav-link" href="#">Contact</a>
          <a class="nav-item nav-link" href="#">Cart</a>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

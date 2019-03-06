<template>
  <div>
    <div class="header">
      <p class="header-text">
        <strong>WEARABLE LIFE MOMENT</strong>
        <br>
        <strong>OMICAM</strong>
        <br>
        <span class="font"><strong>OmiCam</strong> | <I>Life Worth Remembering</I></span>
      </p>
      <div>
        <img src="http://www.omicam.com/wp-content/uploads/2019/02/play-icon.png" alt="button">
      </div>
    </div>
    <section class="omicam-1">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-7 d-flex justify-content-center align-items-center">
            <div>
              <div>OMICAM｜WEARABLE</div>
              <div>VR LIFE RECORDER</div>
              <div>Find the immersive ways to recording your life moment</div>
            </div>
          </div>
          <div class="col-md-5">
            <img src="http://www.omicam.com/wp-content/uploads/2019/02/OMICAM-Front_684x-crop-h678.jpg" alt="">
          </div>
        </div>
      </div>
    </section>
    <section class="img-move">
      <div>
        <div>LOOK WIDER</div>
        <div>Recording everything even something you are not aware</div>
        <div>in your sight</div>
        <div>
          <button class="btn btn-outline-warning">MORE</button>
        </div>
      </div>
    </section>
    <section class="last-longer">
      <div>
        <div>LAST LONGER</div>
        <div>LifeLog keeps battery alive for longer</div>
        <div>Capture the moments that matter most in your life</div>
        <button class="btn btn-outline-warning">SEE HOW</button>
      </div>
    </section>
    <section class="just-clip-it">
      <div class="row">
        <div class="col-md-6 d-flex justify-content-center align-items-center">
          <div>
            <div>JUST CLIP IT</div>
            <p>When you wear OmiCam, you are freeing both your hands</p>
            <button class="btn btn-outline-warning">MORE</button>
          </div>
        </div>
        <div class="col-md-6 intro-img-1"></div>
      </div>
    </section>
    <section>
      <div class="row">
        <div class="col-md-7">
          <img src="http://www.omicam.com/wp-content/uploads/2019/02/OMI-Studio.png" alt="">
        </div>
        <div class="col-md-5 d-flex justify-content-center align-items-center">
          <div>
            <div>OMI Studio</div>
            <p>The easiest way to create immersive experience</p>
            <button class="btn btn-outline-warning">SEE HOW</button>
          </div>
        </div>
      </div>
    </section>
    <section class="omi-story">
      <h2>OMI STORY</h2>
    </section>
    <section class="simple container">
      <div class="row">
        <div class="col-md-4">
          <img src="http://www.omicam.com/wp-content/uploads/2019/01/2018-03-26-OMI-白底.jpg" alt="">
        </div>
        <div class="col-md-8 d-flex justify-content-center align-items-center">
          <div>
            <div>It's that simple</div>
            <p>Let OmiCam use your way to remember your life story</p>
            <button class="btn btn-outline-warning">BUY NOW</button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() { return{} },
}
</script>

<style lang="scss">
.header {
  max-width: 100%;
  height: 760px;
  background-image: url('http://www.omicam.com/wp-content/uploads/2019/02/section1-hero-image-w600dpi72.jpg');
  background-size: cover;
  background-position: center center;
  padding: 120px 0;
  // filter: blur(3px) grayscale(50%);
  .header-text {
    font-size: 50px;
    color: white;
    .font {
      font-family: "Open Sans", Sans-serif;
    }
  }
}
.omicam-1 {
  .col-7 {
    text-align: center;
    vertical-align: middle;
  }
}
.img-move {
  margin-bottom: 10px;
  background-image: url('http://www.omicam.com/wp-content/uploads/2019/01/1143a4fd-3b8c-42a3-bc3a-ec4681bb5edd.gif');
  background-position: center center;
  background-size: cover;
  height: 87vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
}
.last-longer {
  height: 760px;
  background-image: url('http://www.omicam.com/wp-content/uploads/2019/02/last-longer_w1024dpi72.jpg');
  background-position: center center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
}
.just-clip-it {
  .intro-img-1 {
    background: url('http://www.omicam.com/wp-content/uploads/2019/02/just-clip-it-v2-dpi72.jpg');
    background-position: center center;
    background-size: cover;
    height: 550px;
  }
}
.omi-story {
  padding: 100px 50px;
  background-image: url('http://www.omicam.com/wp-content/uploads/2019/02/section-8-MAP.png');
  background-attachment: fixed;
}
.simple {
  .row {
    .col-4 {
      padding: 0 10px;
      img {
        width: 100%;
        height: auto;
      }
    }
  }
}
</style>
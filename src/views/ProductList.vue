<template>
  <div>
    <div class="page-title">
      <div class="container">
        <h2>Shop</h2>
      </div>
    </div>
    <div class="container">
      <div class="card-wrap" v-for="(product, index) in products" :key="index">
        <a href="#" @click.prevent="productDetail(product.name)">
          <div class="card">
            <div class="card-img-box">
              <img src="../assets/images/omicam-1.png" class="card-img" alt="omicam">
            </div>
            <div class="card-body">
              <h5 class="card-title">{{ product.name }}</h5>
              <p class="card-text text-primary text-center">{{ product.price }}</p>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
	data() { 
		return{
      products: [{
				name: 'OmiCam',
				price: '999',
      }, {
				name: 'Waterproof Case',
				price: '999',
      }, {
				name: 'Accessory',
				price: '999',
      }]
    }
	},
  methods: {
		productDetail(productId) {
			let vm = this;
			productId= productId.replace(/\s/g, '').toLowerCase();
			vm.$router.push({ name: 'Product', params: { productId } });
		}
	},
	created() {
		window.scrollTo(0, 0);
	},
}
</script>

<style lang="scss" scoped>
@import "../assets/mixin";

.page-title {
  width: 100%;
  padding: 30px;
  background-color: #f8f9f9;
  border: 1px solid #e9e9e9;
}
.container {
	@include ipad() {
		text-align: center;
	}
	.card-wrap {
    width: 300px;
    height: auto;
    margin: 10px 0;
    display: inline-block;
    background: transparent;
    padding: 15px;
    a {
      text-decoration: none;
    }
    .card {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      &:hover {
        box-shadow: 1px 1px 10px gray;
      }
      .card-img-box {
        width: 100%;
        height: 250px;
        background: rgba(128, 128, 128, 0.3);
        display: flex;
        justify-content: center;
        align-items: center;
        .card-img {
          width: 50px;
        height: 100px;
      }
    }
      .card-body {
        h5 {
          text-align: center;
        }
        .card-text {
          font-family: Roboto;
          font-size: 24px;
          font-weight: 700;
          margin-top: 6px;
        }
      }
    }
  }
}
</style>
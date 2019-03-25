<template>
	<div>
    <div class="container my-5">
      <h2 class="text-center my-3">購物車列表</h2>
      <div class="table-responsive">
        <table class="table table-sm table-striped">
          <tbody>
            <tr class="bg-secondary text-white">
              <th class="text-center" width="10%">Delete</th>
              <th  class="text-left">Product Name</th>
              <th>Amount</th>
              <th class="text-center">Total</th>
            </tr>
            <tr v-for="item in carts" :key="item.id">
              <td class="align-middle text-center" width="20%">
                <button class="btn" @click="removeCart(item.id)">
                  <i class="fas fa-spinner fa-spin"></i>
                  <i class="far fa-trash-alt text-secondary"></i>
                </button>
              </td>
              <td class="text-left">
                <a href="#" class="btn btn-link p-0" @click.prevent="ProductDetail(item.product_id)">
                  <img class="small-img" :src="item.imageUrl" :alt="item.title">
                  <div>{{ item.title }}</div>
                </a>
                <div class="text-success" v-if="item.coupon">
                  已套用優惠卷
                </div>
              </td>
              <td class="pt-2">{{ item.qty }} / {{ item.unit }}</td>
              <td>
                <div class="pt-2 text-right text-danger" :class="{'coupon': item.coupon}">
                  {{ item.total | currency }}
                </div>
                <div class="pt-2 text-right text-success" v-if="item.coupon">
                  {{ item.final_total | currency }}
                </div>
              </td>            
            </tr>
            <tr>
              <td colspan="3" class="text-right">合計</td>
              <td class="text-right">
                {{ finalTotal | currency }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- 套用優惠卷 -->
      <div class="row justify-content-center">
        <div class="col-md-6">
          <div class="input-group mb-2">
            <input type="text" class="form-control" placeholder="輸入'coupon'，即可享有50%優惠唷！"  v-model="coupon_code">
            <div class="input-group-append">
              <button class="btn btn-outline-dark">
                套用優惠卷
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="d-flex justify-content-center">
        <router-link to="order" class="btn btn-block btn-primary my-4 btn-checkout">
          前往結帳
        </router-link>
      </div>
    </div>
	</div>
</template>

<script>
export default {
  data() {
		return {
			carts: [
				{
        title: 'OmiCam',
				imageUrl: require('../assets/images/omicam-1.png'),
				total: 999,
				final_total: 888,
        }, {
          title: 'OmiCam',
					imageUrl: require('../assets/images/omicam-1.png'),
					total: 999,
					final_total: 888,
        }, {
          title: 'OmiCam',
					imageUrl: require('../assets/images/omicam-1.png'),
					total: 999,
					final_total: 888,
				}
			],
			finalTotal: '12000',
    };
	},
  methods: {
    
	},
	created() {
    window.scroll(0,0);
	}
}
</script>

<style lang="scss" scoped>
.small-img {
  width: 50px;
	height: auto;
}
</style>
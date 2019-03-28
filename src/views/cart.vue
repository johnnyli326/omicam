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
      <form action="https://www.sandbox.paypal.com/cgi-bin/webscr" method="post">
        <!-- 購物車明細 -->
        <input type="hidden" name="cmd" value="_cart" /> 
        
        <input type="hidden" name="upload" value="1" />
        <input type="hidden" name="rm" value="2" />
        <input type="hidden" name="charset" value="UTF-8" />
        <!-- PayPal 運行過 IPN 後，再 return 返回指定頁面。 -->
        <input type="hidden" name="notify_url" value="http://www.mitaccessories.com.tw/index.php?op=paypal_ipn" />
        <input type="hidden" name="return" value="http://www.mitaccessories.com.tw/index.php?op=paypal2" />
        <!-- 使用的 PayPal 商店帳號 -->
        <input type="hidden" name="business" value="andy_1346136069_biz@gmail.com" />
        <!-- 商品名細 1 -->
        <input type="hidden" name="item_name_1" value="product.name" />
        <!-- 價錢 -->
        <input type="hidden" name="amount_1" value="product.price" />
        <!-- 購買數量 -->
        <input type="hidden" name="quantity_1" value="qty" />
        <!-- 運費 -->
        <input type="hidden" name="shipping_1" value="0.01" />
        <!-- 使用的貨幣 -->
        <input type="hidden" name="currency_code" value="USD" />
        <!-- PayPal 的結帳按鈕 -->
        <input type="image" src="http://www.paypal.com/zh_XC/i/btn/x-click-but01.gif" name="submit" alt="请使用PayPal付款！" />
      </form>
      
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
      coupon_code: '',
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
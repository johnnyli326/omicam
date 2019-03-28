<template>
	<div>
    <div class="container" style="margin-top: 100px;">
      <h2 class="text-center my-3">SHOP</h2>
      <div class="table-responsive">
        <table class="table table-sm table-striped">
          <tbody>
            <tr class="bg-secondary text-white">
              <th class="text-center">Product Name</th>
              <th class="text-center" style="width:20%">Quantity</th>
              <th class="text-center" style="width:10%">Total</th>
            </tr>
            <tr v-for="item in carts" :key="item.id" style="height:200px;">
              <td class="text-left product-box">
                <div class="product-img-box">
                  <a href="#" class="btn btn-link p-0">
                    <img class="small-img" :src="item.imageUrl" :alt="item.name">
                    <div>{{ item.name }}</div>
                  </a>
                  <div class="text-success" v-if="item.coupon">
                    已套用優惠卷
                  </div>
                </div>
                <div class="product-describe-box">
                  <h2>{{ item.name }}</h2>
                  <ul>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, non?</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, non?</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, non?</li>
                  </ul>
                </div>
              </td>
              <td class="pt-2">
                <div class="input-box">
                  <div class="count minus" @click="item.qty > 1 ? item.qty -=1 : false">-</div>
                  <input class="number-input"
                  type="number" autocomplete="off" min="1" step="1" max="100"
                  v-model="item.qty"
                  onkeyup="value=value.replace(/[^\d]/g,'')" >
                  <div class="count plus"  @click="item.qty < 2001 ? item.qty +=1 : false">+</div>
                </div>
              </td>
              <td>
                <div class="pt-2 text-right text-danger">
                  {{ item.price*item.qty | currency }}
                </div>
                <div class="pt-2 text-right text-success" v-if="item.coupon">
                  {{ item.final_total | currency }}
                </div>
              </td>            
            </tr>
            <tr>
              <td colspan="2" class="text-right">合計</td>
              <td class="text-right">
                {{ final_Total | currency }}
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
          name: 'OmiCam',
          imageUrl: require('../assets/images/omicam-1.png'),
          price: 999,
          qty: 1,
        }, {
          name: 'Waterproof Case',
					imageUrl: require('../assets/images/omicam-1.png'),
          price: 222,
          qty: 1,
        }, {
          name: 'Acc',
					imageUrl: require('../assets/images/omicam-1.png'),
          price: 111,
          qty: 1,
				}
			],
      coupon_code: '',
    };
	},
  methods: {
    // listCookies() {
    //   var Arr = document.cookie.split(';');
    //   console.log(Arr);
    //   Arr.forEach((e) => {
    //     if(e.includes('OmiCam')) {
    //       console.log('Omicam' + e.match(/\d/g).join(""));
    //       this.qty.omicam = e.match(/\d/g).join("");
    //     } else if(e.includes('Waterproof Case')) {
    //       console.log('water' + e.match(/\d/g).join(""));
    //       this.qty.waterproof = e.match(/\d/g).join("")
    //     } else if(e.includes('Accessory')) {
    //       console.log('acc' +e.match(/\d/g).join(""));
    //       this.qty.acc = e.match(/\d/g).join("");
    //     }
    //   })
    //   console.log(this.qty);
    // }, 
	},
	created() {
    window.scroll(0,0);
  },
  mounted() {
  },
  computed: {
    final_Total() {
      let vm = this;
      let final_total = 0;
      vm.carts.forEach(function(e) {
        final_total += e.price * e.qty;
      })
      return final_total
    }
  },
  watch: {
    carts: [
      'handle1',
      function handle2(val, oldVal) {},
      {
        handler: function handle3(val, oldVal) { // 數量大於100，調整為100；數量小於1，調整為1。
          val.forEach(function(e){
            if(e.qty > 100) {
              e.qty = 100;
            } else if (e.qty == '' || e.qty < 1){
              e.qty = 1;
            }
          })
        },
        deep: true,
      },
    ]
  }
}
</script>

<style lang="scss" scoped>
td {
  text-align: center;
  vertical-align: middle;
}
.small-img {
  width: 50px;
	height: auto;
}
.input-box {
  position: relative;
  width: 150px;
  display: inline-block;
  border: 1px solid gainsboro;
  cursor: pointer;
  .number-input {
    box-sizing: border-box;
    width: 100%;
    text-align: center;
    outline: 0;
  }
  .count {
    width: 40px;
    height: 30px;
    position: absolute;
    top: 0;
    bottom: 0;
    background-color: rgb(215, 214, 214);
    color: rgb(23, 22, 22);
    padding: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    }
    .minus {
      left: 0;
    }
    .plus {
      right: 0;
    }
}
.table {
  .product-box {
    display: flex;
    justify-content: center;
    align-items: center;
    .product-img-box {
      display: inline-block;
    }
    .product-describe-box {
      display: inline-block;
      h2 {
        text-align: center;
      }
    }
  }
}
</style>
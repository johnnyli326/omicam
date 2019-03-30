<template>
	<div class="container order-container">
    <h2 class="order-page-title">ORDER SUMMARY</h2>
    <div class="row">
      <div class="col-8 customer-info-container">
        <div class="notice">注意事項</div>
        <form>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputEmail4">Email</label>
              <input type="email" class="form-control" id="inputEmail4" placeholder="Email">
            </div>
            <div class="form-group col-md-6">
              <label for="inputPassword4">Password</label>
              <input type="password" class="form-control" id="inputPassword4" placeholder="Password">
            </div>
          </div>
          <div class="form-group">
            <label for="inputAddress">Address</label>
            <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St">
          </div>
          <div class="form-group">
            <label for="inputAddress2">Address 2</label>
            <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor">
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputCity">City</label>
              <input type="text" class="form-control" id="inputCity">
            </div>
            <div class="form-group col-md-4">
              <label for="inputState">State</label>
              <select id="inputState" class="form-control">
                <option selected>Choose...</option>
                <option>...</option>
              </select>
            </div>
            <div class="form-group col-md-2">
              <label for="inputZip">Zip</label>
              <input type="text" class="form-control" id="inputZip">
            </div>
          </div>
          <!-- paypal -->
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
        </form>
      </div>
      <div class="col-4 order-list-container">
        <div class="table-responsive">
          <table class="table table-sm table-striped">
            <tbody>
              <tr class="bg-secondary text-white">
                <th class="text-center">Product Name</th>
                <th class="text-center" style="width:20%">Quantity</th>
                <th class="text-center" style="width:10%">Total</th>
              </tr>
              <tr v-for="item in carts" :key="item.id">
                <td class="text-left product-box">
                  <div class="order-img-box">
                    <a href="#" class="btn btn-link p-0">
                      <div class="order-list-img"></div>
                      {{ item.name }}
                    </a>
                    <div class="text-success" v-if="item.coupon">
                      已套用優惠卷
                    </div>
                  </div>
                </td>
                <td class="pt-2">
                  {{ item.qty }}
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
          name: 'OmiCam',
          imageUrl: require('../assets/images/omicam-1.png'),
          price: 999,
          qty: 0,
        },  {
          name: 'Waterproof Case',
					imageUrl: require('../assets/images/omicam-1.png'),
          price: 222,
          qty: 0,
        }, {
          name: 'Acc',
					imageUrl: require('../assets/images/omicam-1.png'),
          price: 111,
          qty: 0,
				}
			],
		}
  },
  methods: {
    listCookies() {
      let Arr = document.cookie.split(';');
      console.log(Arr);
      Arr.forEach((e) => { // 查詢cookie資料
        if(e.includes('OmiCam')) {
          console.log('Omicam：' + e.match(/\d/g).join(""));
          let PreNum = parseInt(e.match(/\d/g).join(""));
          this.carts.forEach(function(e) { // 查詢carts資料
            if(e.name === 'OmiCam') {
              e.qty = PreNum;
            }
          })
        } else if(e.includes('Waterproof Case')) {
          console.log('water：' + e.match(/\d/g).join(""));
          let PreNum = parseInt(e.match(/\d/g).join(""));
          this.carts.forEach(function(e) { // 查詢carts資料
            if(e.name === 'Waterproof Case') {
              e.qty = PreNum;
            }
          })
        } else if(e.includes('Acc')) {
          console.log('acc：' +e.match(/\d/g).join(""));
          let PreNum = parseInt(e.match(/\d/g).join(""));
          this.carts.forEach(function(e) { // 查詢carts資料
            if(e.name === 'Acc') {
              e.qty = PreNum;
              // console.log(typeof(e.qty));
            }
          })
        }
      })
    },
  },
	created() {
    window.scrollTo(0,0);
    this.listCookies()
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
};
</script>

<style lang="scss" scoped>
.order-container {
  margin-top: 100px !important;
  margin-bottom: 100px !important;
  .order-page-title {
    margin: 50px 0;
    text-align: center;
  }
  .customer-info-container {
    .notice {
      widows: 100%;
      height: 300px;
      background-color: green;
      color: white;
    }
  }
  .order-list-container {
    position: -webkit-sticky;
    position: sticky;
    top: 100px;
    height: 300px;
    text-align: center;
    .order-img-box {
      .order-list-img {
        display: block;
        width: 50px;
        height: 75px;
        background-image: url('../assets/images/omicam-1.png');
        background-position: center center;
        background-size: contain;
        background-repeat: no-repeat;
        box-shadow: 1px 1px 4px gray;
        margin: 0 auto;
      }
    }
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
      .order-img-box {
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
}
</style>
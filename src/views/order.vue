<template>
	<div class="container order-container">
    <h2 class="order-page-title">ORDER SUMMARY</h2>
    <div class="order-section">
      <div class="table-responsive">
        <table class="table table-sm">
          <tbody>
            <tr class="bg-secondary text-white">
              <th class="text-center">Product Name</th>
              <th class="text-center" style="width:20%">Quantity</th>
              <th class="text-center" style="width:10%">Total</th>
            </tr>
            <tr v-for="item in carts" :key="item.id">
              <td class="text-left product-box">
                <div class="order-img-box">
                    <div class="product-img"></div>
                    <div class="product-info-box">
                      <div class="product-info">
                        <span href="#" class="product-name">
                          {{ item.name }}
                        </span>
                        <span class="product-price">USD $ {{ item.price }}</span>
                      </div>
                    </div>
                  <div class="text-success" v-if="item.coupon">
                    已套用優惠卷
                  </div>
                </div>
              </td>
              <td class="pt-2 text-center">
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
      <div class="customer-info-container">
        <h2 class="text-left" style="font-size:24px;">Shipping information</h2>
          <form>
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="country"><span class="star-sign">*</span>Country and Regions</label>
                <input type="text" class="form-control" id="country" placeholder="First Name"
                value="United States" disabled>
              </div>
            </div>
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="firstName"><span class="star-sign">*</span>First Name</label>
                <input type="text" class="form-control" id="firstName" placeholder="First Name">
              </div>
              <div class="form-group col-md-6">
                <label for="lastName">
                  <span class="star-sign">*</span>Last Name
                </label>
                <input type="text" class="form-control" id="lastName" placeholder="Last Name">
              </div>
            </div>
            <div class="form-group">
              <label for="inputAddress">
                <span class="star-sign">*</span>Address
              </label>
              <input type="text" class="form-control" id="inputAddress"
              placeholder="Street and number, P.O. box, c/o.">
            </div>
            <div class="form-group">
              <input type="text" class="form-control" id="inputAddress2"
              placeholder="Apartment, suite, unit, building, floor, etc.">
            </div>
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="inputCity">
                  <span class="star-sign">*</span>City
                </label>
                <input type="text" class="form-control" id="inputCity">
              </div>
              <div class="form-group col-md-4">
                <label for="inputState"><span class="star-sign">*</span>State</label>
                <select id="inputState" class="form-control">
                  <option selected>Choose...</option>
                  <option>...</option>
                </select>
              </div>
              <div class="form-group col-md-2">
                <label for="inputZip">
                  <span class="star-sign">*</span>Zip
                </label>
                <input type="text" class="form-control" id="inputZip">
              </div>
            </div>
          </form>
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
            <input class="paypal_btn" type="button"
            name="submit" alt="Please pay by paypal" />
          </form>
        <div class="notice mt-4">注意事項</div>
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
    this.listCookies();
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
  .order-section {
    position: relative;
    .customer-info-container {
      .star-sign {
        color: red;
      }
      .notice {
        widows: 100%;
        height: 300px;
        background-color: green;
        color: white;
      }
      .paypal_btn {
        width: 200px;
        padding: 10px;
        border-radius: 5px;
        background-image:  url('../assets/images/paypal.png');
        background-position: left center;
        background-size: cover;
        background-position-x: -40px;
        background-position-y: center;
        background-repeat: no-repeat;
        background-color: #ffcd05;
      }
    }
    .order-img-box {
      .product-img {
        display: inline-block;
        width: 50px;
        height: 75px;
        background-image: url('../assets/images/omicam-1.png');
        background-position: center center;
        background-size: contain;
        background-repeat: no-repeat;
        border: 1px solid #e6e6e6;
        margin: 0 auto;
      }
      .product-info-box {
        display: inline-block;
        vertical-align: top;
        height: 83px;
        margin-left: 10px;
        .product-info {
          vertical-align: middle;
          .product-name {
            color: black;
            display: block;
          }
          .product-price {
            font-size: 14px;
            color: gray;
          }
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
  }
}
</style>
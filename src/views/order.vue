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
          <!-- PayPal 的結帳按鈕 -->
          <input class="paypal_btn" type="button"
          name="submit" alt="Please pay by paypal" @click="AJAXsubmit()" />
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
          name: 'shoulderStrap',
					imageUrl: require('../assets/images/omicam-1.png'),
          price: 222,
          qty: 0,
        }, {
          name: 'waterCase',
					imageUrl: require('../assets/images/omicam-1.png'),
          price: 111,
          qty: 0,
				}
      ],
      items: {
        omicam: '',
        waterCase: '',
        shoulderStrap: '',
      },
		};
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
          this.items.omicam = PreNum;
        } else if(e.includes('shoulderStrap')) {
          console.log('shoulderStrap:' + e.match(/\d/g).join(""));
          let PreNum = parseInt(e.match(/\d/g).join(""));
          this.carts.forEach(function(e) { // 查詢carts資料
            if(e.name === 'shoulderStrap') {
              e.qty = PreNum;
            }
          })
          this.items.shoulderStrap = PreNum;
        } else if(e.includes('waterCase')) {
          console.log('waterCase：' +e.match(/\d/g).join(""));
          let PreNum = parseInt(e.match(/\d/g).join(""));
          this.carts.forEach(function(e) { // 查詢carts資料
            if(e.name === 'waterCase') {
              e.qty = PreNum;
            }
          })
          this.items.waterCase = PreNum;
        }
      })
    },
    AJAXsubmit() {
      // readyState = 0 , 已經產生一個XMLHttpRequest，但還沒連結。
      let xhr = new XMLHttpRequest();
      // readyState = 1 ，使用了open()，但還沒把資料傳送過去。
      // true ， 非同步
      xhr.open('get',
      'http://www.omicam.com/_privateApi/saleApi.php?fun=cpl&shipping=us&items=omicam:'
      + this.items.omicam+';waterCase:'
      + this.items.waterCase +';shoulderStrap:'
      + this.items.shoulderStrap,
      true);
      xhr.send(null);
      xhr.onload = () => {
        let paypalUrl = xhr.response;
        this.delete_cookie(); // 刪除cart紀錄
        window.location.replace(paypalUrl); // 移動至paypal付款頁面
      }
    },
    delete_cookie() { // 刪除cart紀錄
      let Arr = this.carts;
      Arr.forEach(function(e) {
        document.cookie = e.name + '=' + '; expires=Thu, 01 Jan 1970 00:00:01 GMT';
      });
      this.listCookies()
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
    },
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
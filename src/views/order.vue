<template>
	<div class="container order-container">
      <loading :active.sync="isLoading"></loading>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb bg-white">
          <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
          <li class="breadcrumb-item active" aria-current="page">
            <router-link to="/shop">Shop</router-link>
          </li>
          <li class="breadcrumb-item active" aria-current="page">Order</li>
        </ol>
      </nav>
      <h2 class="order-page-title">ORDER SUMMARY</h2>
      <div class="order-empty" v-if="!final_Total">
        <div class="text-center">
          <h4>YOUR ORDER LIST IS EMPTY</h4>
          <router-link class="shopping-btn" to="/shop">GO SHOPPING</router-link>
        </div>
      </div>
      <div class="order-section" v-if="final_Total">
        <div class="table-responsive">
          <table class="table table-sm">
            <tbody>
              <tr class="bg-secondary text-white">
                <th class="text-center">Product Name</th>
                <th class="text-center" style="width:10%">Quantity</th>
                <th class="text-center" style="width:20%">Price</th>
              </tr>
              <tr v-for="item in orders" :key="item.id" style="">
                <td class="text-left product-box">
                  <div class="order-img-box">
                      <div class="product-img"></div>
                      <div class="product-info-box">
                        <div class="product-info">
                          <span class="product-name">
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
                <td class="pt-2 text-center" style="color:gray;">
                  {{ item.qty }}
                </td>
                <td>
                  <div class="pt-2 text-right" style="color:gray;">
                    {{ item.price*item.qty | currency }}
                  </div>
                </td>            
              </tr>
            </tbody>
          </table>
          <div class="text-right extra-fare-section">
            <div class="text-right d-inline-block" style="color:gray;">
              <span>Items Total:</span>
            </div>
            <div class="text-right d-inline-block ml-4">
              <div>
                <span class="original-total" style="color:gray;">
                  {{ final_Total | currency }}
                </span>
              </div>
            </div>
          </div>
          <div class="text-right  extra-fare-section">
            <div class="text-right d-inline-block" style="color:gray;">
              <span>Shipping fare:</span>
            </div>
            <div class="text-right d-inline-block ml-4">
              <span style="color:gray;">
                {{ ShippingFare | currency }}
              </span>
            </div>
          </div>
          <div class="text-right extra-fare-section">
            <div class="text-right d-inline-block" style="color:gray;">
              <span>Total:</span>
              <div v-if="promotePrice" class="text-success">
                Promotion Price:
              </div>
            </div>
            <div class="text-right d-inline-block ml-4">
              <div :class="{ 'through-line' : promotePrice }">
                <span class="original-total">{{ final_Total+ShippingFare | currency }}</span>
              </div>
              <keep-alive> 
                <div class="text-success" v-if="promotePrice">
                  {{ promotePrice | currency }}
                </div>
              </keep-alive>
            </div>
          </div>
        </div>
        <div class="promote-code-section">
          <div class="promote-code-box">
            <input type="text" class="promote-code-input"
            placeholder="Enter your promo code" v-model="promoteCode">
            <button class="promote-code-btn btn-primary" @click="checkPromote()">
              APPLY
            </button>
          </div>
        </div>
        <div class="paypal-btn-section">
          <router-link to="/shop" class="continueShop">Continue Shop</router-link>
          <!-- PayPal 的結帳按鈕 -->
          <input class="paypal_btn" type="button"
          name="submit" alt="Please pay by paypal" @click="AJAXsubmit()" />
        </div>
        <div class="notice mt-4">注意事項</div>
      </div>
  </div>
</template>

<script>
import { setTimeout } from 'timers';
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
          name: 'Shoulder Strap',
					imageUrl: require('../assets/images/omicam-1.png'),
          price: 222,
          qty: 0,
        }, {
          name: 'Waterproof Case',
					imageUrl: require('../assets/images/omicam-1.png'),
          price: 111,
          qty: 0,
				}
      ],
      items: {
        omicam: 0,
        waterCase: 0,
        shoulderStrap: 0,
      },
      isLoading: false,
      promoteCode: '',
      promotePrice: '',
      FinalPromoteCode: '',
      ShippingFare: 20,
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
        } else if(e.includes('Shoulder Strap')) {
          console.log('shoulderStrap:' + e.match(/\d/g).join(""));
          let PreNum = parseInt(e.match(/\d/g).join(""));
          this.carts.forEach(function(e) { // 查詢carts資料
            if(e.name === 'Shoulder Strap') {
              e.qty = PreNum;
            }
          })
          this.items.shoulderStrap = PreNum;
        } else if(e.includes('Waterproof Case')) {
          console.log('waterCase：' +e.match(/\d/g).join(""));
          let PreNum = parseInt(e.match(/\d/g).join(""));
          this.carts.forEach(function(e) { // 查詢carts資料
            if(e.name === 'Waterproof Case') {
              e.qty = PreNum;
            }
          })
          this.items.waterCase = PreNum;
        } else if(e.includes('promoteCode')) { // 確認是否有套用過promo Code
          this.promoteCode = e.substr(13);
          console.log(this.promoteCode);
        }
      })
    },
    AJAXsubmit() {
      // readyState = 0 , 已經產生一個XMLHttpRequest，但還沒連結。
      let xhr = new XMLHttpRequest();
      let vm = this;
      vm.isLoading = true;
      // readyState = 1 ，使用了open()，但還沒把資料傳送過去。
      // true ， 非同步
      xhr.open('get',
      'https://www.omicam.com/_privateApi/saleApi.php?fun=cpl&shipping=us&items='
      + 'omicam:' + this.items.omicam
      + ';waterCase:'+ this.items.waterCase
      + ';shoulderStrap:' + this.items.shoulderStrap
      + '&promoteCode=' + this.FinalPromoteCode,
      true);
      xhr.send(null);
      xhr.onload = () => {
        let paypalUrl = xhr.response;
        console.log(paypalUrl);
        window.location.replace(paypalUrl); // 移動至paypal付款頁面
        this.delete_cookie(); // 刪除cart紀錄
        // vm.isLoading = false;
      }
    },
    delete_cookie() { // 刪除cart紀錄
      let Arr = this.carts;
      let vm = this;
      Arr.forEach(function(e) {  // 刪除 carts cookie
        document.cookie = e.name + '=' + ';expires=Thu, 01 Jan 1970 00:00:01 GMT';
      });
      document.cookie = "promoteCode=;expires=Thu, 01 Jan 1970 00:00:01 GMT"  // 刪除 promoCode cookie
      this.listCookies() // 刪除訂單資料。
      vm.FinalPromoteCode = ''; // 清除傳給後端的promoCode
    },
    checkPromote() { // 檢查promote code是否符合
      let xhr = new XMLHttpRequest();
      let vm = this;
      vm.isLoading = true;
      xhr.open('get',
      'https://www.omicam.com/_privateApi/saleApi.php?fun=cpc&code='+ vm.promoteCode,
      true);
      xhr.send(null);
      xhr.onload = () => {
        console.log(xhr.response);
        let PreFinal = vm.final_Total + vm.ShippingFare;
        vm.promotePrice = PreFinal - xhr.response;
        if (vm.promotePrice == PreFinal) { // 如果沒有此促銷碼，promotePrice為空字串。
          vm.promotePrice = '';
        }
        document.cookie ="promoteCode=" + vm.promoteCode + ";max-age=1800;"; // 將輸入過的promo Code 寫入cookie，以防客人繼續購物。
        vm.FinalPromoteCode = vm.promoteCode; // FinalPromoteCode為要傳出的資料。
        vm.promoteCode = '';
        vm.isLoading = false;
      }
    }
  },
	created() {
    window.scrollTo(0,0);
    this.listCookies();
    setTimeout(() => { this.checkPromote() }, 10); // 確認之前在訂購頁面，有套用過promo code?
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
    orders() {
      let vm = this;
      let orderArr = []
      vm.carts.forEach(function(e) {
        if (e.qty > 0) {
          orderArr.push(e);
        }
      })
      return orderArr;
    },
  },
  activated() {
    vm.promoteCode = vm.promoteCode;
  }
};
</script>

<style lang="scss" scoped>
.order-container {
  padding-top: 50px;
  .order-page-title {
    margin-bottom: 50px;
    text-align: center;
  }
  .order-empty {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid rgba(128, 128, 128, 0.488);
    padding: 50px;
    margin: 76px 0;
    .shopping-btn {
      display: block;
      width: 200px;
      height: 50px;
      text-align: center;
      margin: 0 auto;
      outline: 0;
      text-decoration: none;
      background-color: #ffcd05;
      color: black;
      padding-top: 15px;
      border-radius: 10px;
      box-shadow: 0 0 10px gray;
      cursor: pointer;
    }
  }
  .order-section {
    .promote-code-section {
      margin: 30px 0;
      .promote-code-box {
        width: 250px;
        margin-left: auto;
        height: 36px;
        .promote-code-input {
          width: 70%;
          vertical-align: top;
          height: 100%;
          border: 1px solid black;
          &:focus {
            outline: none !important;
            border:1px solid #ffcd05;
            box-shadow: 0 0 10px #719ECE;
          }
        }
        .promote-code-btn {
          width: 30%;
          vertical-align: top;
          height: 100%;
          outline: 0;
        }
      }
    }
    .paypal-btn-section {
      text-align: right;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      .continueShop {
        display: inline-block;
        padding: 10px;
        border-radius: 5px;
        background-color: #f9f9f9;
        color: gray;
        border: 1px solid rgba(128, 128, 128, 0.742);
        margin-right: 10px;
        text-decoration: none;
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
    .through-line {
      text-decoration: line-through;
      color: red;
      .original-total {
        color: black;
      }
    }
    .extra-fare-section {
      border-top: 1px solid rgba(128, 128, 128, 0.591);
      padding: 10px 0;
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
  .notice {
    widows: 100%;
    height: 300px;
    background-color: green;
    color: white;
  }
}
</style>
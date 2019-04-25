<template>
  <div>
    <div class="container order-container">
      <loading :active.sync="isLoading"></loading>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb bg-transparent">
          <li class="breadcrumb-item">
            <router-link to="/">
              HOME
            </router-link>
          </li>
          <li class="breadcrumb-item before active">
            <router-link to="/shop">
              SHOP
            </router-link>
          </li>
          <li class="breadcrumb-item before active" aria-current="page">
            CHECKOUT
          </li>
        </ol>
      </nav>
        <div class="order-empty" v-if="!final_Total">
          <div class="text-center">
            <h4>YOUR ORDER LIST IS EMPTY</h4>
            <router-link class="shopping-btn" to="/shop">GO SHOPPING</router-link>
          </div>
        </div>
        <div class="order-section" v-if="final_Total">
          <div class="table-responsive">
            <table class="table table-sm order-table">
              <tbody>
                <tr class="text-white">
                  <th class="text-center">Product Name</th>
                  <th class="price" style="width:20%">Price</th>
                  <th class="text-center" style="width:20%">Quantity</th>
                  <th class="text-center" style="width:20%">Price</th>
                </tr>
                <tr v-for="item in orders" :key="item.id">
                  <td class="text-left product-box" style="height:100px">
                    <div class="order-img-box">
                      <div class="order-img-box-img"
                      :style="{ 'background-image': 'url(https://www.omicam.com/' + item.listImg + ')'}">
                      </div>
                    </div>
                    <div class="order-info-box">
                      <div class="order-info-box-text">
                        <span class="info-name">
                          {{ item.name }}
                        </span>
                      </div>
                    </div>
                  </td>
                  <td class="price-box">{{ item.price | currency }}</td>
                  <td class="pt-2 text-center qty-box" style="height:100px">
                    {{ item.qty }}
                  </td>
                  <td style="height:100px" class="total-box">
                    <div class="pt-2 text-right">
                      {{ item.price*item.qty | currency }}
                    </div>
                  </td>            
                </tr>
                <tr style="height: 50px;">
                  <td colspan="3" class="text-right" style="color:#ff9933">Subtotal：</td>
                  <td class="text-right">
                    {{ final_Total | currency }}
                  </td>
                </tr>
              </tbody>
              <tfoot>
                <tr class="shipping-row">
                  <td colspan="1">
                    <span style="color:#ff9933">SHIP TO：</span><span>{{ selectCty.region }}</span>
                  </td>
                  <td colspan="2" class="text-right">
                    <span style="color:#ff9933;">SHIPPING FEE：<br>( 3~5 days delivery)</span>
                  </td>
                  <td class="text-right">
                    <span>{{ selectCty.price | currency }}</span>
                  </td>
                </tr>
                <tr class="mt-3">
                  <td colspan="3" class="text-right" style="border:0">
                    <span style="color:#ff9933">Estimated Total：</span>
                  </td>
                  <td class="text-right" style="border:0">
                    <span>{{ final_Total + +selectCty.price | currency }}</span>
                  </td>
                </tr>
                <tr>
                  <td colspan="2">
                    <div class="coupon-section">
                      <div class="coupon-box">
                        <label for="coupon" class="coupon-box-title">COUPON：</label>
                        <div class="coupon-box-input-group">
                          <input type="text" id="coupon" class="coupon-box-input" v-model="coupon.code"
                          @keyup.13="checkPromote()">
                          <input type="submit" value="SUBMIT" class="coupon-box-btn btn-outline-primary"
                          @click.prevent="checkPromote()">
                        </div>
                        <div class="coupon-box-input-message">
                          {{ FinalCoupon.message }}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td class="text-right" style="color:#ff9933;">
                    <span v-if="FinalCoupon.price != 0">Discount：</span>
                  </td>
                  <td colspan="1" class="text-right" style="border-bottom:1px solid gray;">
                    <div class="coupon-price-box" v-if="FinalCoupon.price != 0">
                      <span class="coupon-price-text">
                        - {{ FinalCoupon.price | currency }}
                      </span>
                    </div>
                  </td>
                </tr>
                <tr style="height:50px;">
                  <td colspan="4" class="text-right" style="border:0">
                    <span style="color:#ff9933;font-size:28px;">Total：</span>
                    <span style="color:white;font-size:28px;">
                      {{ final_Total + +selectCty.price - FinalCoupon.price  | currency }}
                    </span>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
          <div class="paypal-btn-section">
            <router-link to="/shop" class="continueShop">Continue Shop</router-link>
            <!-- PayPal btn -->
            <input class="paypal_btn" type="button"
            name="submit" alt="Please pay by paypal" @click="Paypal()" />
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import { setTimeout } from 'timers';
import $ from 'jquery';

export default {
  data() {
    return {
      products: [],
      isLoading: false,
      coupon: { // Coupon for checking
        code: '',
        price: '',
      },
      FinalCoupon: { // Coupon for sending
        code: '',
        price: '',
        message: '',
      },
      selectCty: { // Shipping Fee
        region: '',
        price: 0,
        id: '',
      },
      productStr: '', // for XMLHttpRequest send
		};
  },
  methods: {
    listCookies() { // get cookie data
      let vm = this;
      let CookieArr = document.cookie.split(';'); // Transfer cookie data to Array
      CookieArr.forEach((e) => {
        let cookieItem = e.split('=');
        this.products.forEach(function(item) { // Search Product Cookie 
          if(item.name.replace(/\s/g, '') == cookieItem[0].replace(/\s/g, '')) { // remove blank space
            vm.$set(item, 'qty', +cookieItem[1]);
          }
        });
        if (cookieItem[0].replace(/\s/g, '') == 'ShippingFee') { // Search Shipping Cookie
          let shippingCookie = cookieItem[1].split('&'); // get shipping Cookie => ['region','price']
          vm.selectCty.region = shippingCookie[0];
          vm.selectCty.price = shippingCookie[1];
          vm.selectCty.id = shippingCookie[2];
        }
      })
    },
    getProductList() { // get products
      let vm = this;
      vm.isLoading = true;
      let xhr = new XMLHttpRequest();
      xhr.open('get',
      'https://www.omicam.com/_privateApi/omiSaleItemApi.php?fun=list'
      , true);
      xhr.send(null);
      xhr.onload = () => {
        vm.products = JSON.parse(xhr.responseText);
        vm.products.forEach(function(e) { // set quantity property.
          vm.$set(e, 'qty', 0);
        })
        setTimeout(function() {
          vm.listCookies()
          vm.isLoading = false;
          vm.products.forEach(function(e) { // add quantity property.
            vm.productStr += e.id + ':' + e.qty +';';
          })
          vm.productStr.slice(0, -1);
        },100);
      };
    },
    checkPromote() { // 檢查promote code是否符合
      let xhr = new XMLHttpRequest();
      let vm = this;
      vm.isLoading = true;
      xhr.open('get',
      'https://www.omicam.com/_privateApi/omiCpc.php?code='+ vm.coupon.code
      +'&items='+ vm.productStr + '&shipping=' + vm.selectCty.id,
      true);
      xhr.send(null);
      xhr.onload = () => {
        let CouponObj = JSON.parse(xhr.response);
        if(CouponObj.discount > 0) {
          vm.FinalCoupon.code = vm.coupon.code; // FinalCoupon為要傳出的資料。
          vm.FinalCoupon.price = CouponObj.discount;
          vm.FinalCoupon.message = CouponObj.info;
        } else {
          vm.FinalCoupon.code = vm.coupon.code; // FinalCoupon為要傳出的資料。
          vm.FinalCoupon.price = CouponObj.discount;
          vm.FinalCoupon.message = CouponObj.info;
        }
        vm.isLoading = false;
      }
    },
    delete_cookie() { // delete Cookie
      let vm = this;
      let CookieArr = document.cookie.split(';'); // Transfer cookie data to Array 
      CookieArr.forEach(function(e) {  // 刪除 carts cookie
        let cookieItem = e.split('=');
        document.cookie = cookieItem[0] + '=' + ';expires=Thu, 01 Jan 1970 00:00:01 GMT';
      });
    },
    Paypal() { // move to paypal page
      // readyState = 0 , 已經產生一個XMLHttpRequest，但還沒連結。
      let xhr = new XMLHttpRequest();
      let vm = this;
      vm.isLoading = true;
      // readyState = 1 ，使用了open()，但還沒把資料傳送過去。
      // true ， 非同步
      xhr.open('get',
      'https://www.omicam.com/_privateApi/omiPaymentApi.php?fun=cpl&'
      + 'shipping='+ vm.selectCty.id
      + '&items=' + vm.productStr
      + '&promoteCode=' + vm.FinalCoupon.code,
      true);
      xhr.send(null);
      xhr.onload = () => {
        let paypalUrl = xhr.response;
        window.location.replace(paypalUrl); // Move to Paypal sendbox
        vm.delete_cookie(); // delete all Cookie
      }
    },
  },
	created() {
    window.scrollTo(0,0);
    this.getProductList();
  },
  computed: {
    final_Total() { // calculate total amount
      let vm = this;
      let final_total = 0;
      vm.products.forEach(function(e) {
        final_total += e.price * e.qty;
      })
      return final_total
    },
    orders() { // judge if user ordered any product.
      let vm = this;
      let orderArr = []
      vm.products.forEach(function(e) {
        if (e.qty > 0) {
          orderArr.push(e);
        }
      })
      return orderArr;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/mixin";

.breadcrumb {
  border-bottom: 1px solid gray;
  font-size: 28px;
  @include ipad() {
    font-size: 18px;
  }
  @include iphone678() {
    font-size: 14px;
  }
  .breadcrumb-item {
    &.before::before {
      content: '|';
      color: gray;
    }
  }
}
.order-container {
  padding-top: 50px;
  margin: 50px auto;
  .order-page-title {
    margin-bottom: 50px;
    text-align: center;
    color: white;
  }
  .order-empty {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid rgba(128, 128, 128, 0.488);
    padding: 50px;
    margin: 76px 0;
    color: white;
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
    margin: 50px auto;
    .order-table {
      color: white;
      width: 100%;
      @include ipad() {
        width: 690px;
      }
      th {
        border-top: 0;
      }
      td {
        vertical-align: middle;
        padding: 0;
      }
    }
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
    .product-box {
      display: flex;
      .order-img-box {
        height: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
        .order-img-box-img {
          display: inline-block;
          width: 75px;
          height: 75px;
          background-position: center center;
          background-size: contain;
          background-repeat: no-repeat;
          margin: 0 auto;
        }
      }
      .order-info-box {
        display: flex;
        justify-content: center;
        align-items: center;
        vertical-align: top;
        height: 100px;
        margin-left: 10px;
        .order-info-box-text {
          vertical-align: middle;
          .info-name {
            color: #ff9933;
            display: block;
          }
        }
      }
    }
    .price-box,
    .qty-box,
    .total-box {
      color: white;
    }
    .coupon-section {
      padding: 10px 0;
      padding-top: 50px;
      .coupon-box {
        text-align: left;
        display: inline-block;
        margin-right: auto;
        .coupon-box-input-message {
          display: block;
        }
        .coupon-box-title {
          color: #ff9933;
        }
        .coupon-box-input-group {
          position: relative;
          display: inline-block;
          .coupon-box-input {
            border: 0;
            border-bottom: 1px solid gray;
            width: 200px;
            background-color: transparent;
            outline: 0;
            color: white;
            padding: 1px;
          }
          .coupon-box-btn {
            padding: 3px 5px;
            background-color: transparent;
            margin-left: 5px;
            outline: 0;
            border-radius: 5px;
            &:hover {
              color: black;
              background-color: #ff9933;
            }
          }
        }
      }
    }
    .coupon-price-box {
        width: 100%;
        margin: right;
        display: inline-block;
        margin-left: auto;
        color: white;
        text-align: right;
        .coupon-price-text {
          color: white;
          font-size: 20px;
          font-weight: bold;
        }
      }
    .minus-icon {
        display: inline-block;
        width: 20px;
        height: 3px;
        background-color: #ff9933;
        vertical-align: middle;
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
  .paypal-btn-section {
    text-align: right;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-top: 50px;
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
      background-image:  url('../assets/images/Checkout/paypal.png');
      background-position: left center;
      background-size: cover;
      background-position-x: -40px;
      background-position-y: center;
      background-repeat: no-repeat;
      background-color: #ffcd05;
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
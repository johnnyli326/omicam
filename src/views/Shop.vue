<template>
	<div>
    <div class="container shop-wrap" style="margin-bottom: 100px;">
      <loading :active.sync="isLoading"></loading>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb bg-transparent">
          <li class="breadcrumb-item">
            <router-link to="/">
              HOME
            </router-link>
          </li>
          <li class="breadcrumb-item before active" aria-current="page">
            SHOP
          </li>
          <li class="breadcrumb-item before ml-auto">
            <router-link to="/ordertracking">
              <img src="../assets/images/Shop/check_order.png" class="tracking-icon"
              alt="check_order">
              CHECK MY ORDER
            </router-link>
          </li>
        </ol>
      </nav>
      <div class="table-responsive">
        <table class="table shop-table">
          <tbody>
            <tr class="text-white">
              <th class="text-center">Product Name</th>
              <th class="text-center" style="width:15%">Price</th>
              <th class="text-center" style="width:20%">Quantity</th>
              <th class="text-center" style="width:10%">Total</th>
            </tr>
            <tr v-for="item in products" :key="item.id">
              <td class="text-left product-box" style="height:250px;">
                <div class="product-img-box">
                  <router-link :to="'/shop/'+item.id" class="btn btn-link p-0">
                    <img class="small-img" :src="'https://www.omicam.com/' + item.listImg"
                    :alt="item.name">
                  </router-link>
                </div>
                <div class="product-describe-box" style="height:250px;">
                  <router-link :to="'/shop/'+item.id" class="btn btn-link p-0 d-block">
                    <h2 class="text-left">{{ item.name }}</h2>
                  </router-link>
                  <span>{{ item.description }}</span>
                </div>
              </td>
              <td>
                {{ item.price | currency }}
              </td>
              <td class="pt-2">
                <div class="input-box">
                  <div class="count minus" @click="item.qty > 0 ? item.qty-=1 : false"></div>
                  <input class="number-input"
                  type="text" autocomplete="off" min="0" step="1" :max="item.maxQuantity"
                  v-model="item.qty"
                  onkeyup="value=value.replace(/[^\d]/g,'')">
                  <div class="bottom-line"></div>
                  <div class="count plus"  @click="item.qty += 1"></div>
                </div>
                <div v-if="item.qty == item.maxQuantity"
                class="message">
                  Max Quantity: {{ item.maxQuantity }}
                </div>
              </td>
              <td>
                <div class="pt-2 text-right" style="color:#ff9933">
                  {{ item.price*item.qty | currency }}
                </div>
              </td>            
            </tr>
            <tr>
              <td class="text-right" colspan="3">SHIPPING FEE：</td>
              <td class="text-right" width="20%">
                {{ +selectCty.price | currency }}
              </td>
            </tr>
            <tr>
              <td class="text-right" colspan="3">SUBTOTAL：</td>
              <td class="text-right" width="20%">
                {{ final_Total + +selectCty.price | currency }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="input-group">
        <span>SHIP TO：</span>
        <div class="dropdown-wrap">
          {{ selectCty.region }}
          <div class="dropdown-menu">
            <div class="dropdown-item"
            v-for="cty in shipping"
            :key="cty.name" @click="getDivData(cty.name, cty.price, cty.id)">
            {{ cty.name }}
            </div>
          </div>
        </div>
        <div class="dropdown-btn"></div>
      </div>
      <div class="d-flex justify-content-end">
        <div class="checkout-box" v-on:click="goCheckOut()">
          <img src="../assets/images/Shop/checkout.png" alt="checkout">
          CHECKOUT
        </div>
      </div>
    </div>
	</div>
</template>

<script>
import $ from 'jquery';
import { setTimeout } from 'timers';

export default {
  data() {
		return {
      products: [],
      coupon_code: '',
      shipping: [],
      isLoading: false,
      selectCty: {
        region: 'Please Select Your Region',
        price: 0,
        id: '',
      },
    };
	},
  methods: {
    listCookies() {
      let Arr = document.cookie.split(';'); // cookie to Array
      let vm = this;
      Arr.forEach((e) => { // Cookie matrix
        let cartItem = e.split('=');
        console.log(cartItem);
        let shippingCookie = cartItem[1].split('&'); // get shipping Cookie => ['region','price']
        this.products.forEach(function(item) { // Search Product Cookie 
          if(item.name.replace(/\s/g, '') == cartItem[0].replace(/\s/g, '')) { // remove blank space
            vm.$set(item, 'qty', +cartItem[1]);
          }
        });
        this.shipping.forEach(function(item) { // Search Shipping Cookie
          if(item.name.replace(/\s/g, '') == shippingCookie[0].replace(/\s/g, '')) { // judge if Region is coincident.
            vm.selectCty.region = item.name;
            vm.selectCty.price = item.price;
            vm.selectCty.id = item.id;
          }
        })
      })
    },
    getProductList() {
      let vm = this;
      vm.isLoading = true;
      let xhr = new XMLHttpRequest();
      xhr.open('get',
      'https://www.omicam.com/_privateApi/omiSaleItemApi.php?fun=list'
      , true);
      xhr.send(null);
      xhr.onload = () => {
        vm.products = JSON.parse(xhr.responseText);
        vm.products.forEach(function(e) { // add quantity property.
          vm.$set(e, 'qty', 0);
        })
        setTimeout(function() {
          vm.listCookies()
          vm.isLoading = false;
        },100);
      };
    },
    getShipping() {
      let xhr = new XMLHttpRequest();
      let vm = this;
      xhr.open('get',
      'https://www.omicam.com/_privateApi/omiShippingApi.php?fun=all',
      true);
      xhr.send(null);
      xhr.onload = () => {
        vm.shipping = JSON.parse(xhr.response); // JSON.parse : string to Array
      }
    },
    goCheckOut() {
      let vm  = this;
      if (vm.selectCty.price > 0) {
        vm.$router.push('/checkout');
      } else {
        alert('please select your region')
      }
    },
    getDivData(cty, price, id) {
      let vm = this;
      vm.selectCty.region = cty;
      vm.selectCty.price = price;
      vm.selectCty.id = id;
    },
	},
	created() {
    window.scroll(0,0);
    this.getShipping();
    this.getProductList();
  },
  mounted() {
    $(document).ready(function(){
      $('.dropdown-btn').click(function() {
        $('.dropdown-menu').toggleClass('show');
      })
      $('.dropdown-wrap').click(function(e) {
        e.stopPropagation();
        $('.dropdown-menu').toggleClass('show');
      })
      $('.dropdown-menu').click(function(e) {
        e.stopPropagation()
        $('.dropdown-menu').removeClass('show');
      })
    }) 
  },
  computed: {
    final_Total() {
      let vm = this;
      let final_total = 0;
      vm.products.forEach(function(e) {
        final_total += e.price * e.qty;
      })
      return final_total
    }
  },
  watch: {
    products: [ // 防止input輸入數量不合格
      function handle2(val, oldVal) {},
      {
        handler: function(val, oldVal) { // 數量大於100，調整為100；數量小於1，調整為1。
          oldVal.forEach(function(e){
            if(e.qty > e.maxQuantity) {
              e.qty = e.maxQuantity;
            } else if (e.qty >= 0 && e.qty <=100){ // 如果數量介於 0 ~ 100的話，寫入cookie
              e.qty = parseInt(e.qty); // input輸入均為”字串“，改變成"number"
              document.cookie = e.name + "=" + e.qty + ";max-age=3600;path=/"; // 一小時後刪除紀錄
            } else { // 負數或是string
              console.log('不是正整數');
              e.qty = 0;
            }
          })
        },
        deep: true,
      },
    ],
    selectCty: {
      handler: function(newVal, oldVal) {
        document.cookie = "ShippingFee=" + newVal.region + '&' + newVal.price + '&' + newVal.id  + ";max-age=3600;path=/";
      },
      deep: true
    }
  },
}
</script>

<style lang="scss" scoped>
@import "../assets/mixin";

.shop-wrap {
  padding-top: 50px;
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
      .tracking-icon {
        @include iphone8plus() {
          width: 14px;
        }
      }
    }
  }
  th {
    border-top: 0;
  }
  td {
    text-align: center;
    vertical-align: middle;
    color: white;
    position: relative;
  }
  .small-img {
    width: 100%;
    height: 100%;
  }
  .page-title {
    width: 100%;
    padding: 30px;
    background-color: #f8f9f9;
    border: 1px solid #e9e9e9;
  }
  .shop-table {
    width: 100%;
    @include ipad() {
      // width: 1100px;
    }
  }
  .input-box {
    position: relative;
    width: 150px;
    display: inline-block;
    border: 0;
    cursor: pointer;
    .number-input {
      box-sizing: border-box;
      width: 100%;
      text-align: center;
      outline: 0;
      height: 30px;
      background-color: transparent;
      border: 0;
      color: white;
    }
    .bottom-line {
      position: absolute;
      bottom: 0;
      left: 25%;
      width: 75px;
      height: 1px;
      background-color: white;
    }
    .count {
      width: 40px;
      height: 30px;
      position: absolute;
      top: 0;
      bottom: 0;
      padding: 5px;
      display: flex;
      justify-content: center;
      align-items: center;
      }
    .minus {
      left: 0;
      background-image: url('../assets/images/Shop/-.png');
      background-position: center center;
      background-size: contain;
      background-color: transparent;
      background-repeat: no-repeat;
    }
    .plus {
      right: 0;
      background-image: url('../assets/images/Shop/+.png');
      background-position: center center;
      background-size: contain;
      background-color: transparent;
      background-repeat: no-repeat;
    }
  }
  .table {
    border-bottom: 1px solid #dee2e6;
    .product-box {
      display: flex;
      justify-content: center;
      align-items: center;
      .product-img-box {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 30%;
        height: 100%;
        text-align: center;
        padding-top: 10px;
        a {
          text-decoration: none;
        }
      }
      .product-describe-box {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;;
        width: 70%;
        height: 100%;
        margin-left: 10px;
        h2 {
          text-align: center;
        }
      }
    }
  }
  .input-group {
    color: white;
    margin-top: 30px;
    span {
      color: #ff9933;
    }
  }
  .dropdown-wrap {
    position: relative;
    display: inline-block;
    width: 250px;
    padding: 0 10px;
    text-align: center;
    border-bottom: 1px solid #dee2e6;
    user-select: none;
    cursor: pointer;
    .dropdown-menu {
      position: absolute;
      display: block;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 0;
      overflow: hidden;
      background-color: transparent;
      margin: 0;
      padding: 0;
      transition: all .5s;
      cursor: pointer;
      &.show {
        height: 90px;
      }
      .dropdown-item {
        height: 30px;
        font-size: 16px;
        color: white;
        border-bottom: 1px solid white;
        text-align: center;
        &:hover {
          background-color: rgba(255, 255, 255, 0.3);
        }
      }
    }
  }
  .dropdown-btn {
    background-image: url('../assets/images/icons/gotop.png');
    background-size: contain;
    background-position: center center;
    background-repeat: no-repeat;
    display: inline-block;
    width: 20px;
    padding: 10px;
    margin-left: 10px;
    cursor: pointer;
    transform: rotateZ(180deg);
  }
  .checkout-box {
    display: inline-block;
    margin-left: auto;
    margin-top: 30px;
    border-right: 1px solid #dee2e6;
    border-left: 1px solid #dee2e6;
    padding: 0 10px;
    color: #ff9933;
    margin-left: auto;
    cursor: pointer;
    user-select: none;
  }
}
.message {
  color: rgba(255, 46, 46, 0.742);
  text-align: center;
  position: absolute;
  bottom: 80px;
  left: 60px;
  user-select: none;
  font-size: 12px;
}
</style>
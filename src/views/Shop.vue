<template>
	<div>
    <div class="container shop-wrap" style="margin-bottom: 100px;">
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
        </ol>
      </nav>
      <div class="table-responsive">
        <table class="table shop-table">
          <tbody>
            <tr class="text-white">
              <th class="text-center">Product Name</th>
              <th class="text-center" style="width:10%">Price</th>
              <th class="text-center" style="width:20%">Quantity</th>
              <th class="text-center" style="width:10%">Total</th>
            </tr>
            <tr v-for="item in carts" :key="item.id">
              <td class="text-left product-box">
                <div class="product-img-box">
                  <router-link :to="'/shop/'+item.link" class="btn btn-link p-0">
                    <img class="small-img" :src="item.imageUrl" :alt="item.name">
                    <div>{{ item.name }}</div>
                  </router-link>
                </div>
                <div class="product-describe-box">
                  <h2 class="text-left">{{ item.name }}</h2>
                  <span>{{ item.price | currency }}</span>
                </div>
              </td>
              <td>
                {{ item.price | currency }}
              </td>
              <td class="pt-2">
                <div class="input-box">
                  <div class="count minus" @click="item.qty > 0 ? item.qty-=1 : false">-</div>
                  <input class="number-input"
                  type="number" autocomplete="off" min="0" step="1" max="100"
                  v-model="item.qty"
                  onkeyup="value=value.replace(/[^\d]/g,'')" >
                  <div class="count plus"  @click="item.qty < 100 ? item.qty+=1 : false">+</div>
                </div>
              </td>
              <td>
                <div class="pt-2 text-right" style="color:#ff9933">
                  {{ item.price*item.qty | currency }}
                </div>
              </td>            
            </tr>
            <tr>
              <td colspan="3" class="text-right">
                <small class="mr-2">Shipping fee</small>
                <select v-model="fee" required>
                  <option value="0" select disabled>Select Region</option>
                  <option :value="cty.price" v-for="cty in shipping" :key="cty.id">
                    {{ cty.name }}
                  </option>
                </select>
              </td>
              <td class="text-right">
                {{ fee | currency}}
              </td>
            </tr>
            <tr>
              <td class="text-right" colspan="3">TOTAL</td>
              <td class="text-right" width="20%">
                {{ final_Total + +fee | currency }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <a href="order" class="btn btn-block btn-primary my-4 btn-checkout
        text-center" @click.prevent="goCheckOut()">
        CHECKOUT
      </a>
    </div>
	</div>
</template>

<script>
import $ from 'jquery';

export default {
  data() {
		return {
			carts: [
				{
          name: 'OmiCam',
          imageUrl: require('../assets/images/omicam-1.png'),
          price: 999,
          qty: 0,
          link: 'omicam',
        }, {
          name: 'Shoulder Strap',
					imageUrl: require('../assets/images/omicam-1.png'),
          price: 222,
          qty: 0,
          link: 'shoulderstrap',
        }, {
          name: 'Waterproof Case',
					imageUrl: require('../assets/images/omicam-1.png'),
          price: 111,
          qty: 0,
          link: 'waterproofcase',
				}
			],
      coupon_code: '',
      shipping: [],
      fee: 0,
    };
	},
  methods: {
    listCookies() {
      let Arr = document.cookie.split(';');
      // console.log(Arr);
      Arr.forEach((e) => { // 查詢先前購物車資料
        if(e.includes('OmiCam')) {
          // console.log('Omicam：' + e.match(/\d/g).join(""));
          let PreNum = parseInt(e.match(/\d/g).join(""));
          this.carts.forEach(function(e) { // 查詢carts資料
            if(e.name === 'OmiCam') {
              e.qty = PreNum;
            }
          })
        } else if(e.includes('Shoulder Strap')) {
          // console.log('water：' + e.match(/\d/g).join(""));
          let PreNum = parseInt(e.match(/\d/g).join(""));
          this.carts.forEach(function(e) { // 查詢carts資料
            if(e.name === 'Shoulder Strap') {
              e.qty = PreNum;
            }
          })
        } else if(e.includes('Waterproof Case')) {
          // console.log('waterCase：' +e.match(/\d/g).join(""));
          let PreNum = parseInt(e.match(/\d/g).join(""));
          this.carts.forEach(function(e) { // 查詢carts資料
            if(e.name === 'Waterproof Case') {
              e.qty = PreNum;
              // console.log(typeof(e.qty));
            }
          })
        }
      })
    },
    getShipping() {
      let xhr = new XMLHttpRequest();
      let vm = this;
      xhr.open('get',
      'https://www.omicam.com/_privateApi/omiShippingApi.php?fun=all',
      true);
      xhr.send(null);
      xhr.onload = () => {
        console.log(JSON.parse(xhr.response));
        vm.shipping = JSON.parse(xhr.response); // JSON.parse : string to Array
      }
    },
    goCheckOut() {
      let vm  = this;
      if (vm.fee > 0) {
        vm.$router.push('/order');
      } else {
        alert('please select your region')
      }
    }
	},
	created() {
    window.scroll(0,0);
    this.listCookies();
    this.getShipping();
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
    carts: [ // 防止input輸入數量不合格
      function handle2(val, oldVal) {},
      {
        handler: function(val, oldVal) { // 數量大於100，調整為100；數量小於1，調整為1。
          val.forEach(function(e){
            if(e.qty > 100) {
              e.qty = 100;
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
    .breadcrumb-item {
      &.before::before {
        content: '|';
        color: gray;
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
  }
  .small-img {
    width: 50px;
    height: auto;
  }
  .page-title {
    width: 100%;
    padding: 30px;
    background-color: #f8f9f9;
    border: 1px solid #e9e9e9;
  }
  .shop-table {
    @include ipad() {
      width:700px;
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
        width: 30%;
        height: 100%;
        text-align: center;
        padding-top: 10px;
        a {
          text-decoration: none;
        }
      }
      .product-describe-box {
        display: inline-block;
        width: 70%;
        height: 100%;
        h2 {
          text-align: center;
        }
      }
    }
  }
  .btn-checkout {
    width: 250px;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
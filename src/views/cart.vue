<template>
	<div>
    <div class="container" style="margin: 100px auto;">
      <h2 class="text-center my-3">SHOP</h2>
      <div class="table-responsive">
        <table class="table table-sm table-striped">
          <tbody>
            <tr class="bg-secondary text-white">
              <th class="text-center">Product Name</th>
              <th class="text-center" style="width:20%">Quantity</th>
              <th class="text-center" style="width:10%">Price</th>
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
                  <div class="count minus" @click="item.qty > 0 ? item.qty-=1 : false">-</div>
                  <input class="number-input"
                  type="number" autocomplete="off" min="0" step="1" max="100"
                  v-model="item.qty"
                  onkeyup="value=value.replace(/[^\d]/g,'')" >
                  <div class="count plus"  @click="item.qty < 100 ? item.qty+=1 : false">+</div>
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
              <td colspan="2" class="text-right">TOTAL</td>
              <td class="text-right">
                {{ final_Total | currency }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <router-link to="/order" class="btn btn-block btn-primary my-4 btn-checkout
        text-center">
        CHECKOUT
      </router-link>
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
        }, {
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
      coupon_code: '',
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
        } else if(e.includes('shoulderStrap')) {
          // console.log('water：' + e.match(/\d/g).join(""));
          let PreNum = parseInt(e.match(/\d/g).join(""));
          this.carts.forEach(function(e) { // 查詢carts資料
            if(e.name === 'shoulderStrap') {
              e.qty = PreNum;
            }
          })
        } else if(e.includes('waterCase')) {
          // console.log('waterCase：' +e.match(/\d/g).join(""));
          let PreNum = parseInt(e.match(/\d/g).join(""));
          this.carts.forEach(function(e) { // 查詢carts資料
            if(e.name === 'waterCase') {
              e.qty = PreNum;
              // console.log(typeof(e.qty));
            }
          })
        }
      })
    },
	},
	created() {
    window.scroll(0,0);
    this.listCookies();
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
              document.cookie = e.name + "=" + e.qty + ";max-age=3600;"; // 一小時後刪除紀錄
            } else { // 負數或是string
              console.log('不是正整數');
              e.qty = 0;
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
.btn-checkout {
  width: 250px;
  margin-left: auto;
  margin-right: auto;
}
</style>
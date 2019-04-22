<template>
  <div>
    <div class="container my-5 product-wrap">
      <loading :active.sync="isLoading"></loading>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb bg-transparent">
          <li class="breadcrumb-item">
            <router-link to="/">
              HOME
            </router-link>
          </li>
          <li class="breadcrumb-item before active" aria-current="page">
            <router-link to="/shop">
              SHOP
            </router-link>
          </li>
          <li class="breadcrumb-item before active" aria-current="page">
            {{ product.name }}
          </li>
        </ol>
      </nav>
      <div class="row main">
        <div class="col-lg-6 product-img-section">
          <div class="product-img text-center">
            <img :src="'https://www.omicam.com/'+ firseImgSrc" :alt="product.name">
          </div>
          <ul class="thumbnail-section">
            <li class="thumbnail-box" v-for="(contentImg, index) in product.contentImgs"
            :key="contentImg.id" :class="{ 'selected' : index == 0}">
              <img class="thumbnail-img" :src="'https://www.omicam.com/' + contentImg" :alt="contentImg">
            </li>
            <li class="nav-line"></li>
          </ul>
        </div>
        <div class="col-lg-6 mt-3">
          <h2 class="mb-3 product-name">{{ product.name }}</h2>
          <div class="mb-3 product-price">
            <span class="price">{{ product.price | currency}}</span>
          </div>
          <ul class="mb-3 intro-content mb-4">
            <li v-for="content in product.contents" :key="content.id">
              {{ content }}
            </li>
          </ul>
          <div class="purchase-section">
            <div class="input-box">
              <div class="count minus" @click="product.qty > 0 ? product.qty-=1 : false"></div>
              <input class="number-input"
              type="text" autocomplete="off" min="0" step="1" :max="product.maxQuantity"
              v-model="product.qty"
              onkeyup="value=value.replace(/[^\d]/g,'')">
              <div class="bottom-line"></div>
              <div class="count plus"  @click="product.qty += 1"></div>
              <div class="message" v-if="+product.qty === +product.maxQuantity">
                Max Quantity：{{ product.maxQuantity }}
              </div>
            </div>
            <router-link class="btn btn-primary" to="/shop">BACK SHOP</router-link>
          </div>
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
      product: {},
      routerId: '', 
      firseImgSrc: '',
      isLoading: false,
    }
  },
  methods: {
    listCookies() { // check cookie record
      let Arr = document.cookie.split(';');
      let record = '';
      let vm = this;
      Arr.forEach((e) => {
        let cartItem = e.split('=');
        if(this.product.name.replace(/\s/g, '') == cartItem[0].replace(/\s/g, '')) {
          record = cartItem[1];
        }
      })
      return record;
    },
    getProduct() {
      let vm = this;
      vm.isLoading = true;
      let xhr = new XMLHttpRequest();
      xhr.open('get',
      'https://www.omicam.com/_privateApi/omiSaleItemApi.php?fun=detail&id=' + vm.routerId
      , true);
      xhr.send(null);
      xhr.onload = () => {
        vm.product = JSON.parse(xhr.response);
        vm.$set(vm.product, 'qty', this.listCookies() || 0);
        vm.firseImgSrc = vm.product.contentImgs[0]; // first display Img
        vm.isLoading = false;
      };
    },
  },
  created() {
    window.scrollTo(0, 0);
    let vm = this;
    vm.routerId = vm.$route.params.productId;
    vm.getProduct();
  },
  mounted() {
    $(document).ready(function() {
      $('.thumbnail-section').click(function(e) { // 移動bottom nav-line
        let target = e.target;
        let target_X = $(target).position().left; 
        let nodeName = e.target.nodeName;
        if (nodeName == 'IMG') {
          $('.nav-line').css({
            'left':target_X,
            'transition': 'all .5s'
          });
          let imgSrc = $(target).attr('src');
          let displayImg = $('.product-img').find('img');
          displayImg.attr('src', imgSrc);
        } else {
          return false
        }
      })
    });
  },
  watch: {
    product: [ // 防止input輸入數量不合格
      function handle2(val, oldVal) {},
      {
        handler: function(val, oldVal) { // 數量大於100，調整為100；數量小於1，調整為1。
          console.log('vale' + val.qty);
          if(val.qty > val.maxQuantity) {
            val.qty = val.maxQuantity;
          } else if (val.qty >= 0 && val.qty <=val.maxQuantity){ // 如果數量介於 0 ~ 100的話，寫入cookie
            val.qty = parseInt(val.qty); // input輸入均為”字串“，改變成"number"
            document.cookie = val.name + "=" + val.qty + ";max-age=3600;path=/"; // 一小時後刪除紀錄
          } else { // 負數或是string
            console.log('不是正整數');
            val.qty = 0;
          }
        },
        deep: true,
        immediate: true,
      },
    ],
  },
}
</script>

<style lang="scss" scoped>
@import "../assets/mixin";


a.btn {
  text-decoration: none;
  display: inline-block;
  padding: 10px 20px;
  color: black;
  &:hover {
    color: black;
  }
}

.main {
  color: white;
}
.product-wrap {
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
    }
  }
  h2 {
    font-size: 40px;
    @media(max-width: 1000px) {
      font-size: 32px;
    }
  }
  .product-img-section {
    text-align: center;
    .product-img {
      position: relative;
      top: 0;
      width: 100%;
      padding: 80px;
      img {
        height: 300px;
        width: 300px;
        @include iphone8plus() {
          width: 100%;
          height: auto;
        }
      }
    }
    .thumbnail-section {
      display: inline-block;
      list-style: none;
      padding: 0;
      text-align: center;
      position: relative;
      .thumbnail-box {
        z-index: 10;
        display: inline-block;
        margin: 0 8px;
        width: 48px;
        cursor: pointer;
        .thumbnail-img {
          width: 48px;
          height: 48px;
        }
      }
      .nav-line {
        display: inline-block;
        width: 48px;
        height: 54px;
        border-bottom: 2px solid #d3d3d3;
        vertical-align: top;
        box-sizing: content-box;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 8px;
        margin: 0;
      }
    }
  }
  .cart-btn {
    width: 150px;
    padding: 5px;
    background-color: #ffcd05;
    text-align: center;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
      background-color: #dfb60f;
    }
  }
  table thead{
    border-collapse: collapse;
    border-spacing: 0;
  }
  table, th, td {
    border: 1px solid #e9e9e9 !important;
  }
  .input-box {
    position: relative;
    width: 150px;
    display: inline-block;
    border: 0;
    margin-right: 50px;
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
    .message {
      position: absolute;
      bottom: -30px;
      left: 25px;
      color: rgba(255, 46, 46, 0.742);
      user-select: none;
      cursor: default;
    }
  }
  .page-title {
    width: 100%;
    padding: 30px;
    background-color: #f8f9f9;
    border: 1px solid #e9e9e9;
  }
  .intro-content {
    line-height: 2;
  }
  .sub-title {
    font-size: 24px;
  }
  .cart-btn {
    background-color: #e59e34;
    color: white;
    transition: all .3s;
    &:hover,
    &:active {
      opacity: 0.6;
    }
  }
  .original-price {
    font-size: 20px;
    color: #77a464;
  }
  .price {
    font-size: 40px;
    color: #77a464;
    font-weight: 500;
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
.product-name {
  color: #ff9933;
  @include ipad() {
    text-align: center;
  }
}
.product-price {
  @include ipad() {
    text-align: center;
  }
}
.purchase-section {
  @include ipad() {
    text-align: center;
  }
}
</style>

<template>
  <div>
    <div class="container my-5 product-wrap">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb bg-white">
          <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
          <li class="breadcrumb-item"><router-link to="/shop">Shop</router-link></li>
          <li class="breadcrumb-item active" aria-current="page">{{ product.name }}</li>
        </ol>
      </nav>
      <div class="row">
        <div class="col-md-6 product-img-section">
          <div class="product-img">
            <img :src="product.imgSrc" :alt="product.name">
          </div>
          <ul class="thumbnail-section">
            <li class="thumbnail-box selected">
              <img class="thumbnail-img" :src="product.imgSrc" :alt="product.name">
            </li>
            <li class="thumbnail-box">
              <img class="thumbnail-img"
              src="https://s.yimg.com/fy/a56e/item/p0833165003057-item-abe8xf4x0500x0504-m.jpg"
              :alt="product.name">
            </li>
            <li class="thumbnail-box">
              <img class="thumbnail-img"
              src="https://img.ltn.com.tw/2018/new/jun/4/images/bigPic/600_12.jpg"
              :alt="product.name">
            </li>
            <li class="nav-line"></li>
          </ul>
        </div>
        <div class="col-md-6">
          <h2 class="mb-3">{{ product.name }}</h2>
          <div class="mb-3">
            <span class="price">{{ product.price }}</span>
          </div>
          <ul class="mb-3 intro-content mb-4 text-secondary">
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, sint?</li>
            <li>Quia laborum cum cumque mollitia quos maxime neque sapiente molestiae!</li>
            <li>Dolore quae maxime repellat iure, quibusdam illum inventore. Nostrum, quae.</li>
            <li>Dolorem, consequuntur! Accusamus eum quia veritatis, itaque ipsum laborum excepturi!</li>
            <li>Accusamus est saepe fugiat, eveniet sapiente ad dolorem aliquid cupiditate.</li>
          </ul>
          <router-link class="btn btn-primary" to="/shop">BUY NOW</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery';

export default {
  data() {
    return {
      products: [{
				name: 'Waterproof Case',
        price: '111',
        imgSrc: require('../assets/images/bag.jpg'),
        qty: 0,
      }, {
				name: 'Shoulder Strap',
        price: '222',
        imgSrc: require('../assets/images/accessories.jpg'),
        qty: 0,
      }],
      product: {},
      qty: 1,
    }
  },
  methods: {
    addToCart(qty) {
      console.log('加入購物車');
      let vm = this;
      document.cookie =  vm.product.name + "=" + qty + ";max-age=3600;"; // 一小時後刪除紀錄
      console.log(document.cookie);
    }
  },
  created() {
    window.scrollTo(0, 0);
    let vm = this;
    vm.products.forEach(function(e){
      let NAME = e.name.replace(/\s/g, '').toLowerCase()
      if (NAME === vm.$route.params.productId) {
        vm.product = e;
      }
    })
    $(document).ready(function() {
      let firstImg = $('.thumbnail-box.selected')
      console.log(firstImg);
      $('.nav-line').css({'left':firstImg.position().left + 5});
    })
  },
  mounted() {
    $(document).ready(function() {
      $('.thumbnail-box').click(function() {
        let target = $(this).position().left; // 移動bottom nav-line
        $('.nav-line').css({
          'left':target + 5,
          'transition': 'all .5s'
        });
        $(this).addClass('selected').siblings().removeClass('selected');
        let imgSrc = $(this).find('.thumbnail-img').attr('src');
        let displayImg = $('.product-img').find('img');
        displayImg.attr('src', imgSrc);
      })
    });
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
  
.product-wrap {
  padding-top: 50px;
  h2 {
    font-size: 40px;
    @media(max-width: 1000px) {
      font-size: 32px;
    }
  }
  .product-img-section {
    .product-img {
      position: relative;
      top: 0;
      width: 100%;
      padding: 80px;
      img {
        height: 300px;
      }
    }
    .thumbnail-section {
      list-style: none;
      padding: 0;
      text-align: center;
      position: relative;
      .thumbnail-box {
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
        width: 54px;
        height: 54px;
        border-bottom: 2px solid #d3d3d3;
        vertical-align: top;
        box-sizing: content-box;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 100px;
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
    box-sizing: border-box;
    height: 30px;
    border: 0;
    margin-right: 10px;
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
  .Detail {
    margin: 50px 0;
    ul.Detail-btns {
      list-style: none;
      padding: 0;
      position: relative;
      .btn {
        display: inline-block;
        background: #ebe9eb;
        border-radius: 5px 5px 0 0;
        border: 0.5px solid rgba(128, 128, 128, 0.783);
        border-collapse: collapse;
        border-spacing: 0;
        &.active,
        &:hover {
          background: white;
        }
        @include ipad() {
          display: block;
        }
      }
      hr {
        position: absolute;
        top: 37px;
        width: 100%;
        margin: 0;
        @include ipad() {
          display: none;
        }
      } 
    }
    .detail-content {
      display: none;
      font-size: 14px;
      line-height: 2.5;
      margin-top: 50px;
      &.active{
        display: block;
      }
      .table-title {
        font-size: 24px;
      }
    }
    #Description {
      .dec-title {
        font-size: 16px;
        font-weight: 800;
      }
      .dec-content {
        display: block;
        text-indent: 30px;
      }
    }
  }
}

</style>

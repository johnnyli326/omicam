<template>
	<div>
		
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
	</div>
</template>

<script>
export default {
  data() {
    return {
		}
	},
	created() {
    window.scrollTo(0,0);
    console.log('order-list' + document.cookie);
  }
};
</script>

<style lang="scss" scoped>
	
</style>
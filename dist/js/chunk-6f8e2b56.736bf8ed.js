(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6f8e2b56"],{"0a49":function(t,a,n){var i=n("9b43"),r=n("626a"),e=n("4bf8"),c=n("9def"),s=n("cd1c");t.exports=function(t,a){var n=1==t,o=2==t,u=3==t,l=4==t,d=6==t,p=5==t||d,m=a||s;return function(a,s,f){for(var v,y,g=e(a),b=r(g),h=i(s,f,3),C=c(b.length),w=0,_=n?m(a,C):o?m(a,0):void 0;C>w;w++)if((p||w in b)&&(v=b[w],y=h(v,w,g),t))if(n)_[w]=y;else if(y)switch(t){case 3:return!0;case 5:return v;case 6:return w;case 2:_.push(v)}else if(l)return!1;return d?-1:u||l?l:_}}},1169:function(t,a,n){var i=n("2d95");t.exports=Array.isArray||function(t){return"Array"==i(t)}},7514:function(t,a,n){"use strict";var i=n("5ca1"),r=n("0a49")(5),e="find",c=!0;e in[]&&Array(1)[e](function(){c=!1}),i(i.P+i.F*c,"Array",{find:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),n("9c6c")(e)},"942d":function(t,a,n){"use strict";var i=n("ee1c"),r=n.n(i);r.a},cd1c:function(t,a,n){var i=n("e853");t.exports=function(t,a){return new(i(t))(a)}},d2f1:function(t,a,n){"use strict";n.r(a);var i=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",[n("div",{staticClass:"container my-5 product-wrap"},[n("loading",{attrs:{active:t.isLoading},on:{"update:active":function(a){t.isLoading=a}}}),n("nav",{attrs:{"aria-label":"breadcrumb"}},[n("ol",{staticClass:"breadcrumb bg-transparent"},[n("li",{staticClass:"breadcrumb-item"},[n("router-link",{attrs:{to:"/"}},[t._v("\n            HOME\n          ")])],1),n("li",{staticClass:"breadcrumb-item before active",attrs:{"aria-current":"page"}},[n("router-link",{attrs:{to:"/shop"}},[t._v("\n            SHOP\n          ")])],1),n("li",{staticClass:"breadcrumb-item before active",attrs:{"aria-current":"page"}},[t._v("\n          "+t._s(t.product.name)+"\n        ")])])]),n("div",{staticClass:"row main"},[n("div",{staticClass:"col-lg-6 product-img-section"},[n("div",{staticClass:"product-img text-center"},[n("img",{attrs:{src:"https://www.omicam.com/"+t.firseImgSrc,alt:t.product.name}})]),n("ul",{staticClass:"thumbnail-section"},[t._l(t.product.contentImgs,function(t,a){return n("li",{key:t.id,staticClass:"thumbnail-box",class:{selected:0==a}},[n("img",{staticClass:"thumbnail-img",attrs:{src:"https://www.omicam.com/"+t,alt:t}})])}),n("li",{staticClass:"nav-line"})],2)]),n("div",{staticClass:"col-lg-6 mt-3"},[n("h2",{staticClass:"mb-3 product-name"},[t._v(t._s(t.product.name))]),n("div",{staticClass:"mb-3 product-price"},[n("span",{staticClass:"price"},[t._v(t._s(t._f("currency")(t.product.price)))])]),n("ul",{staticClass:"mb-3 intro-content mb-4"},t._l(t.product.contents,function(a){return n("li",{key:a.id},[t._v("\n            "+t._s(a)+"\n          ")])}),0),n("div",{staticClass:"purchase-section"},[n("div",{staticClass:"input-box"},[n("div",{staticClass:"count minus",on:{click:function(a){t.product.qty>0&&(t.product.qty-=1)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.product.qty,expression:"product.qty"}],staticClass:"number-input",attrs:{type:"text",autocomplete:"off",min:"0",step:"1",max:t.product.maxQuantity,onkeyup:"value=value.replace(/[^\\d]/g,'')"},domProps:{value:t.product.qty},on:{input:function(a){a.target.composing||t.$set(t.product,"qty",a.target.value)}}}),n("div",{staticClass:"bottom-line"}),n("div",{staticClass:"count plus",on:{click:function(a){t.product.qty+=1}}}),+t.product.qty===+t.product.maxQuantity?n("div",{staticClass:"message"},[t._v("\n              Max Quantity："+t._s(t.product.maxQuantity)+"\n            ")]):t._e()]),n("router-link",{staticClass:"btn btn-primary",attrs:{to:"/shop"}},[t._v("BACK SHOP")])],1)])])],1)])},r=[],e=n("e814"),c=n.n(e),s=(n("7514"),n("7f7f"),n("a481"),n("ac6a"),n("28a5"),n("1157")),o=n.n(s),u=(n("5118"),{data:function(){return{product:{},routerId:"",firseImgSrc:"",isLoading:!1}},methods:{listCookies:function(){var t=this,a=document.cookie.split(";"),n="";return a.forEach(function(a){var i=a.split("=");t.product.name.replace(/\s/g,"")==i[0].replace(/\s/g,"")&&(n=i[1])}),n},getProduct:function(){var t=this,a=this;a.isLoading=!0;var n=new XMLHttpRequest;n.open("get","https://www.omicam.com/_privateApi/omiSaleItemApi.php?fun=detail&id="+a.routerId,!0),n.send(null),n.onload=function(){a.product=JSON.parse(n.response),a.$set(a.product,"qty",t.listCookies()||0),a.firseImgSrc=a.product.contentImgs[0],a.isLoading=!1}}},created:function(){window.scrollTo(0,0);var t=this;t.routerId=t.$route.params.productId,t.getProduct()},mounted:function(){o()(document).ready(function(){o()(".thumbnail-section").click(function(t){var a=t.target,n=o()(a).position().left,i=t.target.nodeName;if("IMG"!=i)return!1;o()(".nav-line").css({left:n,transition:"all .5s"});var r=o()(a).attr("src"),e=o()(".product-img").find("img");e.attr("src",r)})})},watch:{product:[function(t,a){},{handler:function(t,a){console.log("vale"+t.qty),t.qty>t.maxQuantity?t.qty=t.maxQuantity:t.qty>=0&&t.qty<=t.maxQuantity?(t.qty=c()(t.qty),document.cookie=t.name+"="+t.qty+";max-age=3600;path=/"):(console.log("不是正整數"),t.qty=0)},deep:!0,immediate:!0}]}}),l=u,d=(n("942d"),n("2877")),p=Object(d["a"])(l,i,r,!1,null,"161b462e",null);a["default"]=p.exports},e853:function(t,a,n){var i=n("d3f4"),r=n("1169"),e=n("2b4c")("species");t.exports=function(t){var a;return r(t)&&(a=t.constructor,"function"!=typeof a||a!==Array&&!r(a.prototype)||(a=void 0),i(a)&&(a=a[e],null===a&&(a=void 0))),void 0===a?Array:a}},ee1c:function(t,a,n){}}]);
//# sourceMappingURL=chunk-6f8e2b56.736bf8ed.js.map
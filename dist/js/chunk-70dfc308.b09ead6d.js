(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-70dfc308"],{"07e3":function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},"1bc3":function(t,e,n){var r=n("f772");t.exports=function(t,e){if(!r(t))return t;var n,i;if(e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i;if("function"==typeof(n=t.valueOf)&&!r(i=n.call(t)))return i;if(!e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i;throw TypeError("Can't convert object to primitive value")}},"1e75":function(t,e,n){"use strict";var r=n("e363"),i=n.n(r);i.a},"1ec9":function(t,e,n){var r=n("f772"),i=n("e53d").document,o=r(i)&&r(i.createElement);t.exports=function(t){return o?i.createElement(t):{}}},"25eb":function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},"28a5":function(t,e,n){"use strict";var r=n("aae3"),i=n("cb7c"),o=n("ebd6"),a=n("0390"),c=n("9def"),s=n("5f1b"),u=n("520a"),l=n("79e5"),f=Math.min,p=[].push,d="split",v="length",m="lastIndex",h=4294967295,g=!l(function(){RegExp(h,"y")});n("214f")("split",2,function(t,e,n,l){var b;return b="c"=="abbc"[d](/(b)*/)[1]||4!="test"[d](/(?:)/,-1)[v]||2!="ab"[d](/(?:ab)*/)[v]||4!="."[d](/(.?)(.?)/)[v]||"."[d](/()()/)[v]>1||""[d](/.?/)[v]?function(t,e){var i=String(this);if(void 0===t&&0===e)return[];if(!r(t))return n.call(i,t,e);var o,a,c,s=[],l=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),f=0,d=void 0===e?h:e>>>0,g=new RegExp(t.source,l+"g");while(o=u.call(g,i)){if(a=g[m],a>f&&(s.push(i.slice(f,o.index)),o[v]>1&&o.index<i[v]&&p.apply(s,o.slice(1)),c=o[0][v],f=a,s[v]>=d))break;g[m]===o.index&&g[m]++}return f===i[v]?!c&&g.test("")||s.push(""):s.push(i.slice(f)),s[v]>d?s.slice(0,d):s}:"0"[d](void 0,0)[v]?function(t,e){return void 0===t&&0===e?[]:n.call(this,t,e)}:n,[function(n,r){var i=t(this),o=void 0==n?void 0:n[e];return void 0!==o?o.call(n,i,r):b.call(String(i),n,r)},function(t,e){var r=l(b,t,this,e,b!==n);if(r.done)return r.value;var u=i(t),p=String(this),d=o(u,RegExp),v=u.unicode,m=(u.ignoreCase?"i":"")+(u.multiline?"m":"")+(u.unicode?"u":"")+(g?"y":"g"),y=new d(g?u:"^(?:"+u.source+")",m),C=void 0===e?h:e>>>0;if(0===C)return[];if(0===p.length)return null===s(y,p)?[p]:[];var x=0,_=0,S=[];while(_<p.length){y.lastIndex=g?_:0;var w,P=s(y,g?p:p.slice(_));if(null===P||(w=f(c(y.lastIndex+(g?0:_)),p.length))===x)_=a(p,_,v);else{if(S.push(p.slice(x,_)),S.length===C)return S;for(var L=1;L<=P.length-1;L++)if(S.push(P[L]),S.length===C)return S;_=x=w}}return S.push(p.slice(x)),S}]})},"294c":function(t,e){t.exports=function(t){try{return!!t()}catch(e){return!0}}},"2fdb":function(t,e,n){"use strict";var r=n("5ca1"),i=n("d2c8"),o="includes";r(r.P+r.F*n("5147")(o),"String",{includes:function(t){return!!~i(this,t,o).indexOf(t,arguments.length>1?arguments[1]:void 0)}})},"35e8":function(t,e,n){var r=n("d9f6"),i=n("aebd");t.exports=n("8e60")?function(t,e,n){return r.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},4917:function(t,e,n){"use strict";var r=n("cb7c"),i=n("9def"),o=n("0390"),a=n("5f1b");n("214f")("match",1,function(t,e,n,c){return[function(n){var r=t(this),i=void 0==n?void 0:n[e];return void 0!==i?i.call(n,r):new RegExp(n)[e](String(r))},function(t){var e=c(n,t,this);if(e.done)return e.value;var s=r(t),u=String(this);if(!s.global)return a(s,u);var l=s.unicode;s.lastIndex=0;var f,p=[],d=0;while(null!==(f=a(s,u))){var v=String(f[0]);p[d]=v,""===v&&(s.lastIndex=o(u,i(s.lastIndex),l)),d++}return 0===d?null:p}]})},5147:function(t,e,n){var r=n("2b4c")("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(n){try{return e[r]=!1,!"/./"[t](e)}catch(i){}}return!0}},"584a":function(t,e){var n=t.exports={version:"2.6.5"};"number"==typeof __e&&(__e=n)},"5d6b":function(t,e,n){var r=n("e53d").parseInt,i=n("a1ce").trim,o=n("e692"),a=/^[-+]?0[xX]/;t.exports=8!==r(o+"08")||22!==r(o+"0x16")?function(t,e){var n=i(String(t),3);return r(n,e>>>0||(a.test(n)?16:10))}:r},"63b6":function(t,e,n){var r=n("e53d"),i=n("584a"),o=n("d864"),a=n("35e8"),c=n("07e3"),s="prototype",u=function(t,e,n){var l,f,p,d=t&u.F,v=t&u.G,m=t&u.S,h=t&u.P,g=t&u.B,b=t&u.W,y=v?i:i[e]||(i[e]={}),C=y[s],x=v?r:m?r[e]:(r[e]||{})[s];for(l in v&&(n=e),n)f=!d&&x&&void 0!==x[l],f&&c(y,l)||(p=f?x[l]:n[l],y[l]=v&&"function"!=typeof x[l]?n[l]:g&&f?o(p,r):b&&x[l]==p?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e[s]=t[s],e}(p):h&&"function"==typeof p?o(Function.call,p):p,h&&((y.virtual||(y.virtual={}))[l]=p,t&u.R&&C&&!C[l]&&a(C,l,p)))};u.F=1,u.G=2,u.S=4,u.P=8,u.B=16,u.W=32,u.U=64,u.R=128,t.exports=u},6762:function(t,e,n){"use strict";var r=n("5ca1"),i=n("c366")(!0);r(r.P,"Array",{includes:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),n("9c6c")("includes")},7445:function(t,e,n){var r=n("63b6"),i=n("5d6b");r(r.G+r.F*(parseInt!=i),{parseInt:i})},"794b":function(t,e,n){t.exports=!n("8e60")&&!n("294c")(function(){return 7!=Object.defineProperty(n("1ec9")("div"),"a",{get:function(){return 7}}).a})},"79aa":function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},"7f7f":function(t,e,n){var r=n("86cc").f,i=Function.prototype,o=/^\s*function ([^ (]*)/,a="name";a in i||n("9e1e")&&r(i,a,{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(t){return""}}})},"8e60":function(t,e,n){t.exports=!n("294c")(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},a1ce:function(t,e,n){var r=n("63b6"),i=n("25eb"),o=n("294c"),a=n("e692"),c="["+a+"]",s="​",u=RegExp("^"+c+c+"*"),l=RegExp(c+c+"*$"),f=function(t,e,n){var i={},c=o(function(){return!!a[t]()||s[t]()!=s}),u=i[t]=c?e(p):a[t];n&&(i[n]=u),r(r.P+r.F*c,"String",i)},p=f.trim=function(t,e){return t=String(i(t)),1&e&&(t=t.replace(u,"")),2&e&&(t=t.replace(l,"")),t};t.exports=f},aae3:function(t,e,n){var r=n("d3f4"),i=n("2d95"),o=n("2b4c")("match");t.exports=function(t){var e;return r(t)&&(void 0!==(e=t[o])?!!e:"RegExp"==i(t))}},ac6a:function(t,e,n){for(var r=n("cadf"),i=n("0d58"),o=n("2aba"),a=n("7726"),c=n("32e9"),s=n("84f2"),u=n("2b4c"),l=u("iterator"),f=u("toStringTag"),p=s.Array,d={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},v=i(d),m=0;m<v.length;m++){var h,g=v[m],b=d[g],y=a[g],C=y&&y.prototype;if(C&&(C[l]||c(C,l,p),C[f]||c(C,f,g),s[g]=p,b))for(h in r)C[h]||o(C,h,r[h],!0)}},aebd:function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},b9e9:function(t,e,n){n("7445"),t.exports=n("584a").parseInt},d2c8:function(t,e,n){var r=n("aae3"),i=n("be13");t.exports=function(t,e,n){if(r(e))throw TypeError("String#"+n+" doesn't accept regex!");return String(i(t))}},d864:function(t,e,n){var r=n("79aa");t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,i){return t.call(e,n,r,i)}}return function(){return t.apply(e,arguments)}}},d9f6:function(t,e,n){var r=n("e4ae"),i=n("794b"),o=n("1bc3"),a=Object.defineProperty;e.f=n("8e60")?Object.defineProperty:function(t,e,n){if(r(t),e=o(e,!0),r(n),i)try{return a(t,e,n)}catch(c){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},dbf5:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container order-container"},[n("loading",{attrs:{active:t.isLoading},on:{"update:active":function(e){t.isLoading=e}}}),n("nav",{attrs:{"aria-label":"breadcrumb"}},[n("ol",{staticClass:"breadcrumb bg-white"},[n("li",{staticClass:"breadcrumb-item"},[n("router-link",{attrs:{to:"/"}},[t._v("Home")])],1),n("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[n("router-link",{attrs:{to:"/shop"}},[t._v("Shop")])],1),n("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[t._v("Order")])])]),n("h2",{staticClass:"order-page-title"},[t._v("ORDER SUMMARY")]),t.final_Total?t._e():n("div",{staticClass:"order-empty"},[n("div",{staticClass:"text-center"},[n("h4",[t._v("YOUR ORDER LIST IS EMPTY")]),n("router-link",{staticClass:"shopping-btn",attrs:{to:"/shop"}},[t._v("GO SHOPPING")])],1)]),t.final_Total?n("div",{staticClass:"order-section"},[n("div",{staticClass:"table-responsive"},[n("table",{staticClass:"table table-sm"},[n("tbody",[t._m(0),t._l(t.orders,function(e){return n("tr",{key:e.id},[n("td",{staticClass:"text-left product-box"},[n("div",{staticClass:"order-img-box"},[n("div",{staticClass:"product-img"}),n("div",{staticClass:"product-info-box"},[n("div",{staticClass:"product-info"},[n("span",{staticClass:"product-name"},[t._v("\n                          "+t._s(e.name)+"\n                        ")]),n("span",{staticClass:"product-price"},[t._v("USD $ "+t._s(e.price))])])]),e.coupon?n("div",{staticClass:"text-success"},[t._v("\n                    已套用優惠卷\n                  ")]):t._e()])]),n("td",{staticClass:"pt-2 text-center",staticStyle:{color:"gray"}},[t._v("\n                "+t._s(e.qty)+"\n              ")]),n("td",[n("div",{staticClass:"pt-2 text-right",staticStyle:{color:"gray"}},[t._v("\n                  "+t._s(t._f("currency")(e.price*e.qty))+"\n                ")])])])})],2)]),n("div",{staticClass:"text-right extra-fare-section"},[t._m(1),n("div",{staticClass:"text-right d-inline-block ml-4"},[n("div",[n("span",{staticClass:"original-total",staticStyle:{color:"gray"}},[t._v("\n                "+t._s(t._f("currency")(t.final_Total))+"\n              ")])])])]),n("div",{staticClass:"text-right  extra-fare-section"},[t._m(2),n("div",{staticClass:"text-right d-inline-block ml-4"},[n("span",{staticStyle:{color:"gray"}},[t._v("\n              "+t._s(t._f("currency")(t.ShippingFare))+"\n            ")])])]),n("div",{staticClass:"text-right extra-fare-section"},[n("div",{staticClass:"text-right d-inline-block",staticStyle:{color:"gray"}},[n("span",[t._v("Total:")]),t.promotePrice?n("div",{staticClass:"text-success"},[t._v("\n              Promotion Price:\n            ")]):t._e()]),n("div",{staticClass:"text-right d-inline-block ml-4"},[n("div",{class:{"through-line":t.promotePrice}},[n("span",{staticClass:"original-total"},[t._v(t._s(t._f("currency")(t.final_Total+t.ShippingFare)))])]),t.promotePrice?n("div",{staticClass:"text-success"},[t._v("\n              "+t._s(t._f("currency")(t.promotePrice))+"\n            ")]):t._e()])])]),n("div",{staticClass:"promote-code-section"},[n("div",{staticClass:"promote-code-box"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.promoteCode,expression:"promoteCode"}],staticClass:"promote-code-input",attrs:{type:"text",placeholder:"Enter your promo code"},domProps:{value:t.promoteCode},on:{input:function(e){e.target.composing||(t.promoteCode=e.target.value)}}}),n("button",{staticClass:"promote-code-btn btn-primary",on:{click:function(e){return t.checkPromote()}}},[t._v("\n            APPLY\n          ")])])]),n("div",{staticClass:"paypal-btn-section"},[n("router-link",{staticClass:"continueShop",attrs:{to:"/shop"}},[t._v("Continue Shop")]),n("input",{staticClass:"paypal_btn",attrs:{type:"button",name:"submit",alt:"Please pay by paypal"},on:{click:function(e){return t.AJAXsubmit()}}})],1),n("div",{staticClass:"notice mt-4"},[t._v("注意事項")])]):t._e()],1)},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tr",{staticClass:"bg-secondary text-white"},[n("th",{staticClass:"text-center"},[t._v("Product Name")]),n("th",{staticClass:"text-center",staticStyle:{width:"10%"}},[t._v("Quantity")]),n("th",{staticClass:"text-center",staticStyle:{width:"20%"}},[t._v("Price")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-right d-inline-block",staticStyle:{color:"gray"}},[n("span",[t._v("Items Total:")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-right d-inline-block",staticStyle:{color:"gray"}},[n("span",[t._v("Shipping fare:")])])}],o=(n("a481"),n("7f7f"),n("e814")),a=n.n(o),c=(n("4917"),n("6762"),n("2fdb"),n("ac6a"),n("28a5"),{data:function(){return{carts:[{name:"OmiCam",imageUrl:n("dc3c"),price:999,qty:0},{name:"shoulderStrap",imageUrl:n("dc3c"),price:222,qty:0},{name:"waterCase",imageUrl:n("dc3c"),price:111,qty:0}],items:{omicam:0,waterCase:0,shoulderStrap:0},isLoading:!1,promoteCode:"",promotePrice:"",FinalPromoteCode:"",ShippingFare:20}},methods:{listCookies:function(){var t=this,e=document.cookie.split(";");console.log(e),e.forEach(function(e){if(e.includes("OmiCam")){console.log("Omicam："+e.match(/\d/g).join(""));var n=a()(e.match(/\d/g).join(""));t.carts.forEach(function(t){"OmiCam"===t.name&&(t.qty=n)}),t.items.omicam=n}else if(e.includes("shoulderStrap")){console.log("shoulderStrap:"+e.match(/\d/g).join(""));var r=a()(e.match(/\d/g).join(""));t.carts.forEach(function(t){"shoulderStrap"===t.name&&(t.qty=r)}),t.items.shoulderStrap=r}else if(e.includes("waterCase")){console.log("waterCase："+e.match(/\d/g).join(""));var i=a()(e.match(/\d/g).join(""));t.carts.forEach(function(t){"waterCase"===t.name&&(t.qty=i)}),t.items.waterCase=i}})},AJAXsubmit:function(){var t=this,e=new XMLHttpRequest,n=this;n.isLoading=!0,e.open("get","http://www.omicam.com/_privateApi/saleApi.php?fun=cpl&shipping=us&items=omicam:"+n.items.omicam+";waterCase:"+n.items.waterCase+";shoulderStrap:"+n.items.shoulderStrap+"&promoteCode="+n.FinalPromoteCode,!0),e.send(null),e.onload=function(){var n=e.response;console.log(n),window.location.replace(n),t.delete_cookie()}},delete_cookie:function(){var t=this.carts;t.forEach(function(t){document.cookie=t.name+"=; expires=Thu, 01 Jan 1970 00:00:01 GMT"}),this.listCookies()},checkPromote:function(){var t=new XMLHttpRequest,e=this;t.open("get","http://www.omicam.com/_privateApi/saleApi.php?fun=cpc&code="+e.promoteCode,!0),t.send(null),t.onload=function(){console.log(t.response);var n=e.final_Total+e.ShippingFare;e.promotePrice=n-t.response,e.promotePrice==n&&(e.promotePrice=""),e.FinalPromoteCode=e.promoteCode,e.promoteCode=""}}},created:function(){window.scrollTo(0,0),this.listCookies()},computed:{final_Total:function(){var t=this,e=0;return t.carts.forEach(function(t){e+=t.price*t.qty}),e},orders:function(){var t=this,e=[];return t.carts.forEach(function(t){t.qty>0&&e.push(t)}),e}}}),s=c,u=(n("1e75"),n("2877")),l=Object(u["a"])(s,r,i,!1,null,"1b072e72",null);e["default"]=l.exports},dc3c:function(t,e,n){t.exports=n.p+"img/omicam-1.e17b7ee2.png"},e363:function(t,e,n){},e4ae:function(t,e,n){var r=n("f772");t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},e53d:function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},e692:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},e814:function(t,e,n){t.exports=n("b9e9")},f772:function(t,e){t.exports=function(t){return"object"===typeof t?null!==t:"function"===typeof t}}}]);
//# sourceMappingURL=chunk-70dfc308.b09ead6d.js.map
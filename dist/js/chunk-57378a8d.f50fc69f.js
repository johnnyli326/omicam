(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-57378a8d"],{"28a5":function(t,e,n){"use strict";var i=n("aae3"),o=n("cb7c"),s=n("ebd6"),a=n("0390"),r=n("9def"),c=n("5f1b"),l=n("520a"),u=n("79e5"),p=Math.min,f=[].push,d="split",m="length",h="lastIndex",v=4294967295,g=!u(function(){RegExp(v,"y")});n("214f")("split",2,function(t,e,n,u){var y;return y="c"=="abbc"[d](/(b)*/)[1]||4!="test"[d](/(?:)/,-1)[m]||2!="ab"[d](/(?:ab)*/)[m]||4!="."[d](/(.?)(.?)/)[m]||"."[d](/()()/)[m]>1||""[d](/.?/)[m]?function(t,e){var o=String(this);if(void 0===t&&0===e)return[];if(!i(t))return n.call(o,t,e);var s,a,r,c=[],u=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),p=0,d=void 0===e?v:e>>>0,g=new RegExp(t.source,u+"g");while(s=l.call(g,o)){if(a=g[h],a>p&&(c.push(o.slice(p,s.index)),s[m]>1&&s.index<o[m]&&f.apply(c,s.slice(1)),r=s[0][m],p=a,c[m]>=d))break;g[h]===s.index&&g[h]++}return p===o[m]?!r&&g.test("")||c.push(""):c.push(o.slice(p)),c[m]>d?c.slice(0,d):c}:"0"[d](void 0,0)[m]?function(t,e){return void 0===t&&0===e?[]:n.call(this,t,e)}:n,[function(n,i){var o=t(this),s=void 0==n?void 0:n[e];return void 0!==s?s.call(n,o,i):y.call(String(o),n,i)},function(t,e){var i=u(y,t,this,e,y!==n);if(i.done)return i.value;var l=o(t),f=String(this),d=s(l,RegExp),m=l.unicode,h=(l.ignoreCase?"i":"")+(l.multiline?"m":"")+(l.unicode?"u":"")+(g?"y":"g"),b=new d(g?l:"^(?:"+l.source+")",h),C=void 0===e?v:e>>>0;if(0===C)return[];if(0===f.length)return null===c(b,f)?[f]:[];var _=0,x=0,S=[];while(x<f.length){b.lastIndex=g?x:0;var T,w=c(b,g?f:f.slice(x));if(null===w||(T=p(r(b.lastIndex+(g?0:x)),f.length))===_)x=a(f,x,m);else{if(S.push(f.slice(_,x)),S.length===C)return S;for(var L=1;L<=w.length-1;L++)if(S.push(w[L]),S.length===C)return S;x=_=T}}return S.push(f.slice(_)),S}]})},4362:function(t,e,n){e.nextTick=function(t){setTimeout(t,0)},e.platform=e.arch=e.execPath=e.title="browser",e.pid=1,e.browser=!0,e.env={},e.argv=[],e.binding=function(t){throw new Error("No such module. (Possibly not yet loaded)")},function(){var t,i="/";e.cwd=function(){return i},e.chdir=function(e){t||(t=n("df7c")),i=t.resolve(e,i)}}(),e.exit=e.kill=e.umask=e.dlopen=e.uptime=e.memoryUsage=e.uvCounters=function(){},e.features={}},"46f4":function(t,e,n){"use strict";var i=n("4b14"),o=n.n(i);o.a},"4b14":function(t,e,n){},5118:function(t,e,n){(function(t){var i="undefined"!==typeof t&&t||"undefined"!==typeof self&&self||window,o=Function.prototype.apply;function s(t,e){this._id=t,this._clearFn=e}e.setTimeout=function(){return new s(o.call(setTimeout,i,arguments),clearTimeout)},e.setInterval=function(){return new s(o.call(setInterval,i,arguments),clearInterval)},e.clearTimeout=e.clearInterval=function(t){t&&t.close()},s.prototype.unref=s.prototype.ref=function(){},s.prototype.close=function(){this._clearFn.call(i,this._id)},e.enroll=function(t,e){clearTimeout(t._idleTimeoutId),t._idleTimeout=e},e.unenroll=function(t){clearTimeout(t._idleTimeoutId),t._idleTimeout=-1},e._unrefActive=e.active=function(t){clearTimeout(t._idleTimeoutId);var e=t._idleTimeout;e>=0&&(t._idleTimeoutId=setTimeout(function(){t._onTimeout&&t._onTimeout()},e))},n("6017"),e.setImmediate="undefined"!==typeof self&&self.setImmediate||"undefined"!==typeof t&&t.setImmediate||this&&this.setImmediate,e.clearImmediate="undefined"!==typeof self&&self.clearImmediate||"undefined"!==typeof t&&t.clearImmediate||this&&this.clearImmediate}).call(this,n("24aa"))},6017:function(t,e,n){(function(t,e){(function(t,n){"use strict";if(!t.setImmediate){var i,o=1,s={},a=!1,r=t.document,c=Object.getPrototypeOf&&Object.getPrototypeOf(t);c=c&&c.setTimeout?c:t,"[object process]"==={}.toString.call(t.process)?d():m()?h():t.MessageChannel?v():r&&"onreadystatechange"in r.createElement("script")?g():y(),c.setImmediate=l,c.clearImmediate=u}function l(t){"function"!==typeof t&&(t=new Function(""+t));for(var e=new Array(arguments.length-1),n=0;n<e.length;n++)e[n]=arguments[n+1];var a={callback:t,args:e};return s[o]=a,i(o),o++}function u(t){delete s[t]}function p(t){var e=t.callback,i=t.args;switch(i.length){case 0:e();break;case 1:e(i[0]);break;case 2:e(i[0],i[1]);break;case 3:e(i[0],i[1],i[2]);break;default:e.apply(n,i);break}}function f(t){if(a)setTimeout(f,0,t);else{var e=s[t];if(e){a=!0;try{p(e)}finally{u(t),a=!1}}}}function d(){i=function(t){e.nextTick(function(){f(t)})}}function m(){if(t.postMessage&&!t.importScripts){var e=!0,n=t.onmessage;return t.onmessage=function(){e=!1},t.postMessage("","*"),t.onmessage=n,e}}function h(){var e="setImmediate$"+Math.random()+"$",n=function(n){n.source===t&&"string"===typeof n.data&&0===n.data.indexOf(e)&&f(+n.data.slice(e.length))};t.addEventListener?t.addEventListener("message",n,!1):t.attachEvent("onmessage",n),i=function(n){t.postMessage(e+n,"*")}}function v(){var t=new MessageChannel;t.port1.onmessage=function(t){var e=t.data;f(e)},i=function(e){t.port2.postMessage(e)}}function g(){var t=r.documentElement;i=function(e){var n=r.createElement("script");n.onreadystatechange=function(){f(e),n.onreadystatechange=null,t.removeChild(n),n=null},t.appendChild(n)}}function y(){i=function(t){setTimeout(f,0,t)}}})("undefined"===typeof self?"undefined"===typeof t?this:t:self)}).call(this,n("24aa"),n("4362"))},"7cb4":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"container order-container"},[n("loading",{attrs:{active:t.isLoading},on:{"update:active":function(e){t.isLoading=e}}}),n("nav",{attrs:{"aria-label":"breadcrumb"}},[n("ol",{staticClass:"breadcrumb bg-transparent"},[n("li",{staticClass:"breadcrumb-item"},[n("router-link",{attrs:{to:"/"}},[t._v("\n            HOME\n          ")])],1),n("li",{staticClass:"breadcrumb-item before active"},[n("router-link",{attrs:{to:"/shop"}},[t._v("\n            SHOP\n          ")])],1),n("li",{staticClass:"breadcrumb-item before active",attrs:{"aria-current":"page"}},[t._v("\n          CHECKOUT\n        ")])])]),t.final_Total?t._e():n("div",{staticClass:"order-empty"},[n("div",{staticClass:"text-center"},[n("h4",[t._v("YOUR ORDER LIST IS EMPTY")]),n("router-link",{staticClass:"shopping-btn",attrs:{to:"/shop"}},[t._v("GO SHOPPING")])],1)]),t.final_Total?n("div",{staticClass:"order-section"},[n("div",{staticClass:"table-responsive"},[n("table",{staticClass:"table table-sm order-table"},[n("tbody",[t._m(0),t._l(t.orders,function(e){return n("tr",{key:e.id},[n("td",{staticClass:"text-left product-box",staticStyle:{height:"100px"}},[n("div",{staticClass:"order-img-box"},[n("div",{staticClass:"order-img-box-img",style:{"background-image":"url(https://www.omicam.com/"+e.listImg+")"}})]),n("div",{staticClass:"order-info-box"},[n("div",{staticClass:"order-info-box-text"},[n("span",{staticClass:"info-name"},[t._v("\n                        "+t._s(e.name)+"\n                      ")])])])]),n("td",{staticClass:"price-box"},[t._v(t._s(t._f("currency")(e.price)))]),n("td",{staticClass:"pt-2 text-center qty-box",staticStyle:{height:"100px"}},[t._v("\n                  "+t._s(e.qty)+"\n                ")]),n("td",{staticClass:"total-box",staticStyle:{height:"100px"}},[n("div",{staticClass:"pt-2 text-right"},[t._v("\n                    "+t._s(t._f("currency")(e.price*e.qty))+"\n                  ")])])])}),n("tr",{staticStyle:{height:"50px"}},[n("td",{staticClass:"text-right",staticStyle:{color:"#ff9933"},attrs:{colspan:"3"}},[t._v("Subtotal：")]),n("td",{staticClass:"text-right"},[t._v("\n                  "+t._s(t._f("currency")(t.final_Total))+"\n                ")])])],2),n("tfoot",[n("tr",{staticClass:"shipping-row"},[n("td",{attrs:{colspan:"1"}},[n("span",{staticStyle:{color:"#ff9933"}},[t._v("SHIP TO：")]),n("span",[t._v(t._s(t.selectCty.region))])]),t._m(1),n("td",{staticClass:"text-right"},[n("span",[t._v(t._s(t._f("currency")(t.selectCty.price)))])])]),n("tr",{staticClass:"mt-3"},[t._m(2),n("td",{staticClass:"text-right",staticStyle:{border:"0"}},[n("span",[t._v(t._s(t._f("currency")(t.final_Total+ +t.selectCty.price)))])])]),n("tr",[n("td",{attrs:{colspan:"2"}},[n("div",{staticClass:"coupon-section"},[n("div",{staticClass:"coupon-box"},[n("label",{staticClass:"coupon-box-title",attrs:{for:"coupon"}},[t._v("COUPON：")]),n("div",{staticClass:"coupon-box-input-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.coupon.code,expression:"coupon.code"}],staticClass:"coupon-box-input",attrs:{type:"text",id:"coupon"},domProps:{value:t.coupon.code},on:{input:function(e){e.target.composing||t.$set(t.coupon,"code",e.target.value)}}}),n("div",{staticClass:"coupon-box-input-message"},[t._v(t._s(t.FinalCoupon.message))]),n("input",{staticClass:"coupon-box-btn",attrs:{type:"submit",value:"SUBMIT"},on:{click:function(e){return e.preventDefault(),t.checkPromote()}}})])])])]),n("td",{staticClass:"text-right",staticStyle:{color:"#ff9933"}},[0!=t.FinalCoupon.price?n("span",[t._v("Discount：")]):t._e()]),n("td",{staticClass:"text-right",staticStyle:{"border-bottom":"1px solid gray"},attrs:{colspan:"1"}},[0!=t.FinalCoupon.price?n("div",{staticClass:"coupon-price-box"},[n("span",{staticClass:"coupon-price-text"},[t._v("\n                      - "+t._s(t._f("currency")(t.FinalCoupon.price))+"\n                    ")])]):t._e()])]),n("tr",{staticStyle:{height:"50px"}},[n("td",{staticClass:"text-right",staticStyle:{border:"0"},attrs:{colspan:"4"}},[n("span",{staticStyle:{color:"#ff9933","font-size":"28px"}},[t._v("Total：")]),n("span",{staticStyle:{color:"white","font-size":"28px"}},[t._v("\n                    "+t._s(t._f("currency")(t.final_Total+ +t.selectCty.price-t.FinalCoupon.price))+"\n                  ")])])])])])]),n("div",{staticClass:"paypal-btn-section"},[n("router-link",{staticClass:"continueShop",attrs:{to:"/shop"}},[t._v("Continue Shop")]),n("input",{staticClass:"paypal_btn",attrs:{type:"button",name:"submit",alt:"Please pay by paypal"},on:{click:function(e){return t.Paypal()}}})],1)]):t._e()],1)])},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tr",{staticClass:"text-white"},[n("th",{staticClass:"text-center"},[t._v("Product Name")]),n("th",{staticClass:"price",staticStyle:{width:"20%"}},[t._v("Price")]),n("th",{staticClass:"text-center",staticStyle:{width:"20%"}},[t._v("Quantity")]),n("th",{staticClass:"text-center",staticStyle:{width:"20%"}},[t._v("Price")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("td",{staticClass:"text-right",attrs:{colspan:"2"}},[n("span",{staticStyle:{color:"#ff9933"}},[t._v("SHIPPING FEE："),n("br"),t._v("( 3~5 days delivery)")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("td",{staticClass:"text-right",staticStyle:{border:"0"},attrs:{colspan:"3"}},[n("span",{staticStyle:{color:"#ff9933"}},[t._v("Estimated Total：")])])}],s=n("f030"),a=s["a"],r=(n("46f4"),n("2877")),c=Object(r["a"])(a,i,o,!1,null,"d6396734",null);e["default"]=c.exports},"7f7f":function(t,e,n){var i=n("86cc").f,o=Function.prototype,s=/^\s*function ([^ (]*)/,a="name";a in o||n("9e1e")&&i(o,a,{configurable:!0,get:function(){try{return(""+this).match(s)[1]}catch(t){return""}}})},aae3:function(t,e,n){var i=n("d3f4"),o=n("2d95"),s=n("2b4c")("match");t.exports=function(t){var e;return i(t)&&(void 0!==(e=t[s])?!!e:"RegExp"==o(t))}},ac6a:function(t,e,n){for(var i=n("cadf"),o=n("0d58"),s=n("2aba"),a=n("7726"),r=n("32e9"),c=n("84f2"),l=n("2b4c"),u=l("iterator"),p=l("toStringTag"),f=c.Array,d={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},m=o(d),h=0;h<m.length;h++){var v,g=m[h],y=d[g],b=a[g],C=b&&b.prototype;if(C&&(C[u]||r(C,u,f),C[p]||r(C,p,g),c[g]=f,y))for(v in i)C[v]||s(C,v,i[v],!0)}},df7c:function(t,e,n){(function(t){function n(t,e){for(var n=0,i=t.length-1;i>=0;i--){var o=t[i];"."===o?t.splice(i,1):".."===o?(t.splice(i,1),n++):n&&(t.splice(i,1),n--)}if(e)for(;n--;n)t.unshift("..");return t}var i=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,o=function(t){return i.exec(t).slice(1)};function s(t,e){if(t.filter)return t.filter(e);for(var n=[],i=0;i<t.length;i++)e(t[i],i,t)&&n.push(t[i]);return n}e.resolve=function(){for(var e="",i=!1,o=arguments.length-1;o>=-1&&!i;o--){var a=o>=0?arguments[o]:t.cwd();if("string"!==typeof a)throw new TypeError("Arguments to path.resolve must be strings");a&&(e=a+"/"+e,i="/"===a.charAt(0))}return e=n(s(e.split("/"),function(t){return!!t}),!i).join("/"),(i?"/":"")+e||"."},e.normalize=function(t){var i=e.isAbsolute(t),o="/"===a(t,-1);return t=n(s(t.split("/"),function(t){return!!t}),!i).join("/"),t||i||(t="."),t&&o&&(t+="/"),(i?"/":"")+t},e.isAbsolute=function(t){return"/"===t.charAt(0)},e.join=function(){var t=Array.prototype.slice.call(arguments,0);return e.normalize(s(t,function(t,e){if("string"!==typeof t)throw new TypeError("Arguments to path.join must be strings");return t}).join("/"))},e.relative=function(t,n){function i(t){for(var e=0;e<t.length;e++)if(""!==t[e])break;for(var n=t.length-1;n>=0;n--)if(""!==t[n])break;return e>n?[]:t.slice(e,n-e+1)}t=e.resolve(t).substr(1),n=e.resolve(n).substr(1);for(var o=i(t.split("/")),s=i(n.split("/")),a=Math.min(o.length,s.length),r=a,c=0;c<a;c++)if(o[c]!==s[c]){r=c;break}var l=[];for(c=r;c<o.length;c++)l.push("..");return l=l.concat(s.slice(r)),l.join("/")},e.sep="/",e.delimiter=":",e.dirname=function(t){var e=o(t),n=e[0],i=e[1];return n||i?(i&&(i=i.substr(0,i.length-1)),n+i):"."},e.basename=function(t,e){var n=o(t)[2];return e&&n.substr(-1*e.length)===e&&(n=n.substr(0,n.length-e.length)),n},e.extname=function(t){return o(t)[3]};var a="b"==="ab".substr(-1)?function(t,e,n){return t.substr(e,n)}:function(t,e,n){return e<0&&(e=t.length+e),t.substr(e,n)}}).call(this,n("4362"))},f030:function(t,e,n){"use strict";(function(t){n("7f7f"),n("a481"),n("ac6a"),n("28a5");var i=n("5118");e["a"]={data:function(){return{products:[],isLoading:!1,coupon:{code:"",price:""},FinalCoupon:{code:"",price:"",message:""},selectCty:{region:"",price:0,id:""},productStr:""}},methods:{listCookies:function(){var t=this,e=this,n=document.cookie.split(";");console.log(n),n.forEach(function(n){var i=n.split("=");if(t.products.forEach(function(t){t.name.replace(/\s/g,"")==i[0].replace(/\s/g,"")&&e.$set(t,"qty",+i[1])}),"ShippingFee"==i[0].replace(/\s/g,"")){var o=i[1].split("&");e.selectCty.region=o[0],e.selectCty.price=o[1],e.selectCty.id=o[2]}})},getProductList:function(){var t=this;t.isLoading=!0;var e=new XMLHttpRequest;e.open("get","https://www.omicam.com/_privateApi/omiSaleItemApi.php?fun=list",!0),e.send(null),e.onload=function(){t.products=JSON.parse(e.responseText),t.products.forEach(function(e){t.$set(e,"qty",0)}),Object(i["setTimeout"])(function(){t.listCookies(),t.isLoading=!1,t.products.forEach(function(e){t.productStr+=e.id+":"+e.qty+";"}),t.productStr.slice(0,-1)},100)}},checkPromote:function(){var e=new XMLHttpRequest,n=this;n.isLoading=!0,e.open("get","https://www.omicam.com/_privateApi/omiCpc.php?code="+n.coupon.code+"&items="+n.productStr+"&shipping="+n.selectCty.id,!0),e.send(null),e.onload=function(){var i=JSON.parse(e.response);i.discount>0?(n.FinalCoupon.code=n.coupon.code,n.FinalCoupon.price=i.discount,t(".coupon-box-input-message").css("color","green"),n.FinalCoupon.message=i.info):(n.FinalCoupon.code=n.coupon.code,n.FinalCoupon.price=i.discount,t(".coupon-box-input-message").css("color","red"),n.FinalCoupon.message=i.info),n.isLoading=!1}},delete_cookie:function(){var t=document.cookie.split(";");t.forEach(function(t){var e=t.split("=");document.cookie=e[0]+"=;expires=Thu, 01 Jan 1970 00:00:01 GMT"})},Paypal:function(){var t=new XMLHttpRequest,e=this;e.isLoading=!0,t.open("get","https://www.omicam.com/_privateApi/omiPaymentApi.php?fun=cpl&shipping="+e.selectCty.id+"&items="+e.productStr+"&promoteCode="+e.FinalCoupon.code,!0),t.send(null),t.onload=function(){var n=t.response;window.location.replace(n),e.delete_cookie()}}},created:function(){window.scrollTo(0,0),this.getProductList()},computed:{final_Total:function(){var t=this,e=0;return t.products.forEach(function(t){e+=t.price*t.qty}),e},orders:function(){var t=this,e=[];return t.products.forEach(function(t){t.qty>0&&e.push(t)}),e}}}}).call(this,n("1157"))}}]);
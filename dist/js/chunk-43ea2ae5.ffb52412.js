(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-43ea2ae5"],{"07e3":function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},"0fa5":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"container",staticStyle:{"margin-bottom":"100px"}},[n("nav",{attrs:{"aria-label":"breadcrumb"}},[n("ol",{staticClass:"breadcrumb bg-transparent"},[n("li",{staticClass:"breadcrumb-item"},[n("router-link",{attrs:{to:"/"}},[t._v("Home")])],1),n("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[t._v("Shop")])])]),n("div",{staticClass:"table-responsive"},[n("table",{staticClass:"table shop-table"},[n("tbody",[t._m(0),t._l(t.carts,function(e){return n("tr",{key:e.id},[n("td",{staticClass:"text-left product-box"},[n("div",{staticClass:"product-img-box"},[n("router-link",{staticClass:"btn btn-link p-0",attrs:{to:"/product/"+e.link}},[n("img",{staticClass:"small-img",attrs:{src:e.imageUrl,alt:e.name}}),n("div",[t._v(t._s(e.name))])])],1),n("div",{staticClass:"product-describe-box"},[n("h2",{staticClass:"text-left"},[t._v(t._s(e.name))]),n("span",[t._v(t._s(t._f("currency")(e.price)))])])]),n("td",{staticClass:"pt-2"},[n("div",{staticClass:"input-box"},[n("div",{staticClass:"count minus",on:{click:function(t){e.qty>0&&(e.qty-=1)}}},[t._v("-")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.qty,expression:"item.qty"}],staticClass:"number-input",attrs:{type:"number",autocomplete:"off",min:"0",step:"1",max:"100",onkeyup:"value=value.replace(/[^\\d]/g,'')"},domProps:{value:e.qty},on:{input:function(n){n.target.composing||t.$set(e,"qty",n.target.value)}}}),n("div",{staticClass:"count plus",on:{click:function(t){e.qty<100&&(e.qty+=1)}}},[t._v("+")])])]),n("td",[n("div",{staticClass:"pt-2 text-right text-danger"},[t._v("\n                  "+t._s(t._f("currency")(e.price*e.qty))+"\n                ")]),e.coupon?n("div",{staticClass:"pt-2 text-right text-success"},[t._v("\n                  "+t._s(t._f("currency")(e.final_total))+"\n                ")]):t._e()])])}),n("tr",[n("td",{staticClass:"text-right",attrs:{colspan:"2"}},[t._v("TOTAL")]),n("td",{staticClass:"text-right",attrs:{width:"20%"}},[t._v("\n                "+t._s(t._f("currency")(t.final_Total))+"\n              ")])])],2)])]),n("router-link",{staticClass:"btn btn-block btn-primary my-4 btn-checkout\n        text-center",attrs:{to:"/order"}},[t._v("\n        CHECKOUT\n      ")])],1)])},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tr",{staticClass:"text-white"},[n("th",{staticClass:"text-center"},[t._v("Product Name")]),n("th",{staticClass:"text-center",staticStyle:{width:"20%"}},[t._v("Quantity")]),n("th",{staticClass:"text-center",staticStyle:{width:"10%"}},[t._v("Price")])])}],a=(n("7f7f"),n("4917"),n("e814")),c=n.n(a),o=(n("6762"),n("2fdb"),n("ac6a"),n("28a5"),n("1157"),{data:function(){return{carts:[{name:"OmiCam",imageUrl:n("dc3c"),price:999,qty:0,link:"omicam"},{name:"Shoulder Strap",imageUrl:n("dc3c"),price:222,qty:0,link:"shoulderstrap"},{name:"Waterproof Case",imageUrl:n("dc3c"),price:111,qty:0,link:"waterproofcase"}],coupon_code:""}},methods:{listCookies:function(){var t=this,e=document.cookie.split(";");e.forEach(function(e){if(e.includes("OmiCam")){var n=c()(e.match(/\d/g).join(""));t.carts.forEach(function(t){"OmiCam"===t.name&&(t.qty=n)})}else if(e.includes("Shoulder Strap")){var r=c()(e.match(/\d/g).join(""));t.carts.forEach(function(t){"Shoulder Strap"===t.name&&(t.qty=r)})}else if(e.includes("Waterproof Case")){var i=c()(e.match(/\d/g).join(""));t.carts.forEach(function(t){"Waterproof Case"===t.name&&(t.qty=i)})}})}},created:function(){window.scroll(0,0),this.listCookies()},mounted:function(){},computed:{final_Total:function(){var t=this,e=0;return t.carts.forEach(function(t){e+=t.price*t.qty}),e}},watch:{carts:[function(t,e){},{handler:function(t,e){t.forEach(function(t){t.qty>100?t.qty=100:t.qty>=0&&t.qty<=100?(t.qty=c()(t.qty),document.cookie=t.name+"="+t.qty+";max-age=3600;"):(console.log("不是正整數"),t.qty=0)})},deep:!0}]}}),u=o,s=(n("5f7a"),n("2877")),f=Object(s["a"])(u,r,i,!1,null,"64626eff",null);e["default"]=f.exports},"1bc3":function(t,e,n){var r=n("f772");t.exports=function(t,e){if(!r(t))return t;var n,i;if(e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i;if("function"==typeof(n=t.valueOf)&&!r(i=n.call(t)))return i;if(!e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i;throw TypeError("Can't convert object to primitive value")}},"1ec9":function(t,e,n){var r=n("f772"),i=n("e53d").document,a=r(i)&&r(i.createElement);t.exports=function(t){return a?i.createElement(t):{}}},"25eb":function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},"28a5":function(t,e,n){"use strict";var r=n("aae3"),i=n("cb7c"),a=n("ebd6"),c=n("0390"),o=n("9def"),u=n("5f1b"),s=n("520a"),f=n("79e5"),l=Math.min,d=[].push,p="split",v="length",h="lastIndex",m=4294967295,b=!f(function(){RegExp(m,"y")});n("214f")("split",2,function(t,e,n,f){var y;return y="c"=="abbc"[p](/(b)*/)[1]||4!="test"[p](/(?:)/,-1)[v]||2!="ab"[p](/(?:ab)*/)[v]||4!="."[p](/(.?)(.?)/)[v]||"."[p](/()()/)[v]>1||""[p](/.?/)[v]?function(t,e){var i=String(this);if(void 0===t&&0===e)return[];if(!r(t))return n.call(i,t,e);var a,c,o,u=[],f=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),l=0,p=void 0===e?m:e>>>0,b=new RegExp(t.source,f+"g");while(a=s.call(b,i)){if(c=b[h],c>l&&(u.push(i.slice(l,a.index)),a[v]>1&&a.index<i[v]&&d.apply(u,a.slice(1)),o=a[0][v],l=c,u[v]>=p))break;b[h]===a.index&&b[h]++}return l===i[v]?!o&&b.test("")||u.push(""):u.push(i.slice(l)),u[v]>p?u.slice(0,p):u}:"0"[p](void 0,0)[v]?function(t,e){return void 0===t&&0===e?[]:n.call(this,t,e)}:n,[function(n,r){var i=t(this),a=void 0==n?void 0:n[e];return void 0!==a?a.call(n,i,r):y.call(String(i),n,r)},function(t,e){var r=f(y,t,this,e,y!==n);if(r.done)return r.value;var s=i(t),d=String(this),p=a(s,RegExp),v=s.unicode,h=(s.ignoreCase?"i":"")+(s.multiline?"m":"")+(s.unicode?"u":"")+(b?"y":"g"),g=new p(b?s:"^(?:"+s.source+")",h),x=void 0===e?m:e>>>0;if(0===x)return[];if(0===d.length)return null===u(g,d)?[d]:[];var C=0,S=0,_=[];while(S<d.length){g.lastIndex=b?S:0;var w,L=u(g,b?d:d.slice(S));if(null===L||(w=l(o(g.lastIndex+(b?0:S)),d.length))===C)S=c(d,S,v);else{if(_.push(d.slice(C,S)),_.length===x)return _;for(var k=1;k<=L.length-1;k++)if(_.push(L[k]),_.length===x)return _;S=C=w}}return _.push(d.slice(C)),_}]})},"294c":function(t,e){t.exports=function(t){try{return!!t()}catch(e){return!0}}},"2fdb":function(t,e,n){"use strict";var r=n("5ca1"),i=n("d2c8"),a="includes";r(r.P+r.F*n("5147")(a),"String",{includes:function(t){return!!~i(this,t,a).indexOf(t,arguments.length>1?arguments[1]:void 0)}})},"35e8":function(t,e,n){var r=n("d9f6"),i=n("aebd");t.exports=n("8e60")?function(t,e,n){return r.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},4917:function(t,e,n){"use strict";var r=n("cb7c"),i=n("9def"),a=n("0390"),c=n("5f1b");n("214f")("match",1,function(t,e,n,o){return[function(n){var r=t(this),i=void 0==n?void 0:n[e];return void 0!==i?i.call(n,r):new RegExp(n)[e](String(r))},function(t){var e=o(n,t,this);if(e.done)return e.value;var u=r(t),s=String(this);if(!u.global)return c(u,s);var f=u.unicode;u.lastIndex=0;var l,d=[],p=0;while(null!==(l=c(u,s))){var v=String(l[0]);d[p]=v,""===v&&(u.lastIndex=a(s,i(u.lastIndex),f)),p++}return 0===p?null:d}]})},5147:function(t,e,n){var r=n("2b4c")("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(n){try{return e[r]=!1,!"/./"[t](e)}catch(i){}}return!0}},"584a":function(t,e){var n=t.exports={version:"2.6.5"};"number"==typeof __e&&(__e=n)},"5d6b":function(t,e,n){var r=n("e53d").parseInt,i=n("a1ce").trim,a=n("e692"),c=/^[-+]?0[xX]/;t.exports=8!==r(a+"08")||22!==r(a+"0x16")?function(t,e){var n=i(String(t),3);return r(n,e>>>0||(c.test(n)?16:10))}:r},"5f7a":function(t,e,n){"use strict";var r=n("db00"),i=n.n(r);i.a},"63b6":function(t,e,n){var r=n("e53d"),i=n("584a"),a=n("d864"),c=n("35e8"),o=n("07e3"),u="prototype",s=function(t,e,n){var f,l,d,p=t&s.F,v=t&s.G,h=t&s.S,m=t&s.P,b=t&s.B,y=t&s.W,g=v?i:i[e]||(i[e]={}),x=g[u],C=v?r:h?r[e]:(r[e]||{})[u];for(f in v&&(n=e),n)l=!p&&C&&void 0!==C[f],l&&o(g,f)||(d=l?C[f]:n[f],g[f]=v&&"function"!=typeof C[f]?n[f]:b&&l?a(d,r):y&&C[f]==d?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e[u]=t[u],e}(d):m&&"function"==typeof d?a(Function.call,d):d,m&&((g.virtual||(g.virtual={}))[f]=d,t&s.R&&x&&!x[f]&&c(x,f,d)))};s.F=1,s.G=2,s.S=4,s.P=8,s.B=16,s.W=32,s.U=64,s.R=128,t.exports=s},6762:function(t,e,n){"use strict";var r=n("5ca1"),i=n("c366")(!0);r(r.P,"Array",{includes:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),n("9c6c")("includes")},7445:function(t,e,n){var r=n("63b6"),i=n("5d6b");r(r.G+r.F*(parseInt!=i),{parseInt:i})},"794b":function(t,e,n){t.exports=!n("8e60")&&!n("294c")(function(){return 7!=Object.defineProperty(n("1ec9")("div"),"a",{get:function(){return 7}}).a})},"79aa":function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},"7f7f":function(t,e,n){var r=n("86cc").f,i=Function.prototype,a=/^\s*function ([^ (]*)/,c="name";c in i||n("9e1e")&&r(i,c,{configurable:!0,get:function(){try{return(""+this).match(a)[1]}catch(t){return""}}})},"8e60":function(t,e,n){t.exports=!n("294c")(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},a1ce:function(t,e,n){var r=n("63b6"),i=n("25eb"),a=n("294c"),c=n("e692"),o="["+c+"]",u="​",s=RegExp("^"+o+o+"*"),f=RegExp(o+o+"*$"),l=function(t,e,n){var i={},o=a(function(){return!!c[t]()||u[t]()!=u}),s=i[t]=o?e(d):c[t];n&&(i[n]=s),r(r.P+r.F*o,"String",i)},d=l.trim=function(t,e){return t=String(i(t)),1&e&&(t=t.replace(s,"")),2&e&&(t=t.replace(f,"")),t};t.exports=l},aae3:function(t,e,n){var r=n("d3f4"),i=n("2d95"),a=n("2b4c")("match");t.exports=function(t){var e;return r(t)&&(void 0!==(e=t[a])?!!e:"RegExp"==i(t))}},ac6a:function(t,e,n){for(var r=n("cadf"),i=n("0d58"),a=n("2aba"),c=n("7726"),o=n("32e9"),u=n("84f2"),s=n("2b4c"),f=s("iterator"),l=s("toStringTag"),d=u.Array,p={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},v=i(p),h=0;h<v.length;h++){var m,b=v[h],y=p[b],g=c[b],x=g&&g.prototype;if(x&&(x[f]||o(x,f,d),x[l]||o(x,l,b),u[b]=d,y))for(m in r)x[m]||a(x,m,r[m],!0)}},aebd:function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},b9e9:function(t,e,n){n("7445"),t.exports=n("584a").parseInt},d2c8:function(t,e,n){var r=n("aae3"),i=n("be13");t.exports=function(t,e,n){if(r(e))throw TypeError("String#"+n+" doesn't accept regex!");return String(i(t))}},d864:function(t,e,n){var r=n("79aa");t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,i){return t.call(e,n,r,i)}}return function(){return t.apply(e,arguments)}}},d9f6:function(t,e,n){var r=n("e4ae"),i=n("794b"),a=n("1bc3"),c=Object.defineProperty;e.f=n("8e60")?Object.defineProperty:function(t,e,n){if(r(t),e=a(e,!0),r(n),i)try{return c(t,e,n)}catch(o){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},db00:function(t,e,n){},dc3c:function(t,e,n){t.exports=n.p+"img/omicam-1.e17b7ee2.png"},e4ae:function(t,e,n){var r=n("f772");t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},e53d:function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},e692:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},e814:function(t,e,n){t.exports=n("b9e9")},f772:function(t,e){t.exports=function(t){return"object"===typeof t?null!==t:"function"===typeof t}}}]);
//# sourceMappingURL=chunk-43ea2ae5.ffb52412.js.map
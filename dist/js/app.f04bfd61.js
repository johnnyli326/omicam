(function(n){function e(e){for(var c,r,o=e[0],i=e[1],f=e[2],h=0,d=[];h<o.length;h++)r=o[h],a[r]&&d.push(a[r][0]),a[r]=0;for(c in i)Object.prototype.hasOwnProperty.call(i,c)&&(n[c]=i[c]);l&&l(e);while(d.length)d.shift()();return u.push.apply(u,f||[]),t()}function t(){for(var n,e=0;e<u.length;e++){for(var t=u[e],c=!0,r=1;r<t.length;r++){var o=t[r];0!==a[o]&&(c=!1)}c&&(u.splice(e--,1),n=i(i.s=t[0]))}return n}var c={},r={app:0},a={app:0},u=[];function o(n){return i.p+"js/"+({}[n]||n)+"."+{"chunk-0a81924f":"7e6df60f","chunk-1b580ba0":"a0e6d129","chunk-2d0e6190":"4a76cfa0","chunk-323a01a2":"b4221e17","chunk-528d5da4":"978c88db","chunk-54d38aeb":"497a6be6","chunk-5ff4c063":"77c1b731","chunk-63322b0a":"4a363ff3","chunk-69f24a75":"78c16e9f","chunk-8aa92768":"f8181365","chunk-b867760c":"cdd8981a","chunk-ecb64fbc":"d8c7d238","chunk-efdc4c10":"63188472"}[n]+".js"}function i(e){if(c[e])return c[e].exports;var t=c[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(n){var e=[],t={"chunk-0a81924f":1,"chunk-1b580ba0":1,"chunk-323a01a2":1,"chunk-528d5da4":1,"chunk-54d38aeb":1,"chunk-5ff4c063":1,"chunk-63322b0a":1,"chunk-69f24a75":1,"chunk-8aa92768":1,"chunk-b867760c":1,"chunk-ecb64fbc":1,"chunk-efdc4c10":1};r[n]?e.push(r[n]):0!==r[n]&&t[n]&&e.push(r[n]=new Promise(function(e,t){for(var c="css/"+({}[n]||n)+"."+{"chunk-0a81924f":"58c49e37","chunk-1b580ba0":"95a71865","chunk-2d0e6190":"31d6cfe0","chunk-323a01a2":"ceecc6f7","chunk-528d5da4":"17ee1735","chunk-54d38aeb":"adcc3287","chunk-5ff4c063":"34ca6e04","chunk-63322b0a":"ab8187c2","chunk-69f24a75":"7c92a648","chunk-8aa92768":"dd7cf7de","chunk-b867760c":"6469c3c7","chunk-ecb64fbc":"31775b05","chunk-efdc4c10":"132d0478"}[n]+".css",a=i.p+c,u=document.getElementsByTagName("link"),o=0;o<u.length;o++){var f=u[o],h=f.getAttribute("data-href")||f.getAttribute("href");if("stylesheet"===f.rel&&(h===c||h===a))return e()}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){f=d[o],h=f.getAttribute("data-href");if(h===c||h===a)return e()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=e,l.onerror=function(e){var c=e&&e.target&&e.target.src||a,u=new Error("Loading CSS chunk "+n+" failed.\n("+c+")");u.request=c,delete r[n],l.parentNode.removeChild(l),t(u)},l.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(l)}).then(function(){r[n]=0}));var c=a[n];if(0!==c)if(c)e.push(c[2]);else{var u=new Promise(function(e,t){c=a[n]=[e,t]});e.push(c[2]=u);var f,h=document.createElement("script");h.charset="utf-8",h.timeout=120,i.nc&&h.setAttribute("nonce",i.nc),h.src=o(n),f=function(e){h.onerror=h.onload=null,clearTimeout(d);var t=a[n];if(0!==t){if(t){var c=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src,u=new Error("Loading chunk "+n+" failed.\n("+c+": "+r+")");u.type=c,u.request=r,t[1](u)}a[n]=void 0}};var d=setTimeout(function(){f({type:"timeout",target:h})},12e4);h.onerror=h.onload=f,document.head.appendChild(h)}return Promise.all(e)},i.m=n,i.c=c,i.d=function(n,e,t){i.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},i.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},i.t=function(n,e){if(1&e&&(n=i(n)),8&e)return n;if(4&e&&"object"===typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var c in n)i.d(t,c,function(e){return n[e]}.bind(null,c));return t},i.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return i.d(e,"a",e),e},i.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},i.p="",i.oe=function(n){throw console.error(n),n};var f=window["webpackJsonp"]=window["webpackJsonp"]||[],h=f.push.bind(f);f.push=e,f=f.slice();for(var d=0;d<f.length;d++)e(f[d]);var l=h;u.push([0,"chunk-vendors"]),t()})({0:function(n,e,t){n.exports=t("56d7")},"56d7":function(n,e,t){"use strict";t.r(e);t("cadf"),t("551c"),t("f751"),t("097d");var c=t("2b0e"),r=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},a=[],u={},o=u,i=(t("5c0b"),t("2877")),f=Object(i["a"])(o,r,a,!1,null,null,null),h=f.exports,d=t("8c4f");c["a"].use(d["a"]);var l=new d["a"]({mode:"history",routes:[{path:"",name:"Dashboard",component:function(){return t.e("chunk-b867760c").then(t.bind(null,"0c7c"))},children:[{path:"/",name:"Home",component:function(){return t.e("chunk-63322b0a").then(t.bind(null,"bb51"))}},{path:"omicam",name:"Omicam",component:function(){return t.e("chunk-54d38aeb").then(t.bind(null,"dacb"))}},{path:"omi-studio",name:"OmiStudio",component:function(){return t.e("chunk-ecb64fbc").then(t.bind(null,"ff7c"))}},{path:"news",name:"News",component:function(){return t.e("chunk-8aa92768").then(t.bind(null,"a2f9"))}},{path:"omistory",name:"OmiStory",component:function(){return t.e("chunk-efdc4c10").then(t.bind(null,"b7a6"))}},{path:"contact",name:"Contact",component:function(){return t.e("chunk-5ff4c063").then(t.bind(null,"b8fa"))}},{path:"product/omicam-wearable-vr-camera",name:"Product",component:function(){return t.e("chunk-323a01a2").then(t.bind(null,"d2f1"))}},{path:"about",name:"About",component:function(){return t.e("chunk-69f24a75").then(t.bind(null,"f820"))}},{path:"privacy-policy",name:"Privacy",component:function(){return t.e("chunk-528d5da4").then(t.bind(null,"6f9f"))}},{path:"terms-of-service",name:"Service",component:function(){return t.e("chunk-1b580ba0").then(t.bind(null,"e2f8"))}},{path:"omi-product",name:"OMI-product",component:function(){return t.e("chunk-2d0e6190").then(t.bind(null,"96fc"))}},{path:"cart",name:"Cart",component:function(){return t.e("chunk-0a81924f").then(t.bind(null,"da83"))}},{path:"*",redirect:"/"}]}]}),p=t("2f62");c["a"].use(p["a"]);var s=new p["a"].Store({state:{},mutations:{},actions:{}}),b=(t("4989"),t("581b"),t("555f"),t("a481"),t("c5f6"),function(n){var e=Number(n);return"$".concat(e.toFixed(0).replace(/./g,function(n,e,t){var c=e&&"."!==n&&(t.length-e)%3===0?", ".concat(n).replace(/\s/g,""):n;return c}))}),m=function(n){var e=Math.floor(1e3*n),t=new Date(e),c=t.getFullYear(),r=function(){var n=t.getMonth()+1;return n<10?"0".concat(n):n},a=t.getDate();return"".concat(c," / ").concat(r()," / ").concat(a)};c["a"].filter("currency",b),c["a"].filter("timeFormat",m),c["a"].config.productionTip=!1,new c["a"]({router:l,store:s,render:function(n){return n(h)}}).$mount("#app")},"5c0b":function(n,e,t){"use strict";var c=t("5e27"),r=t.n(c);r.a},"5e27":function(n,e,t){}});
//# sourceMappingURL=app.f04bfd61.js.map
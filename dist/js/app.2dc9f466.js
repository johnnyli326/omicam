(function(n){function e(e){for(var c,u,o=e[0],i=e[1],h=e[2],f=0,d=[];f<o.length;f++)u=o[f],r[u]&&d.push(r[u][0]),r[u]=0;for(c in i)Object.prototype.hasOwnProperty.call(i,c)&&(n[c]=i[c]);l&&l(e);while(d.length)d.shift()();return a.push.apply(a,h||[]),t()}function t(){for(var n,e=0;e<a.length;e++){for(var t=a[e],c=!0,u=1;u<t.length;u++){var o=t[u];0!==r[o]&&(c=!1)}c&&(a.splice(e--,1),n=i(i.s=t[0]))}return n}var c={},u={app:0},r={app:0},a=[];function o(n){return i.p+"js/"+({}[n]||n)+"."+{"chunk-07048868":"c8f41355","chunk-0a0075ac":"3301c0a7","chunk-1924c3a8":"2b87fb1c","chunk-20585e43":"33259fca","chunk-2f012e80":"d6af99b3","chunk-3f009547":"ea00a9a5","chunk-463886d0":"299213e3","chunk-4804c65c":"5c6f6505","chunk-51232c82":"d39ecfa8","chunk-5bc5b840":"f95b3ee0","chunk-60b99424":"69b180c0","chunk-7e3f644a":"65b71fb9","chunk-b14c3cb4":"ac69165a","chunk-dc331f32":"5fa60869","chunk-e0a3d29c":"dc344872","chunk-e1ebd766":"cda86293","chunk-e9f308a2":"8d1c0105"}[n]+".js"}function i(e){if(c[e])return c[e].exports;var t=c[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(n){var e=[],t={"chunk-07048868":1,"chunk-0a0075ac":1,"chunk-1924c3a8":1,"chunk-20585e43":1,"chunk-2f012e80":1,"chunk-3f009547":1,"chunk-463886d0":1,"chunk-4804c65c":1,"chunk-51232c82":1,"chunk-5bc5b840":1,"chunk-60b99424":1,"chunk-7e3f644a":1,"chunk-b14c3cb4":1,"chunk-dc331f32":1,"chunk-e0a3d29c":1,"chunk-e1ebd766":1,"chunk-e9f308a2":1};u[n]?e.push(u[n]):0!==u[n]&&t[n]&&e.push(u[n]=new Promise(function(e,t){for(var c="css/"+({}[n]||n)+"."+{"chunk-07048868":"3655997a","chunk-0a0075ac":"30f2a164","chunk-1924c3a8":"33f2a35c","chunk-20585e43":"72b9fc6d","chunk-2f012e80":"78b120e9","chunk-3f009547":"271bf725","chunk-463886d0":"ce6b6089","chunk-4804c65c":"a2a800a8","chunk-51232c82":"a20efa38","chunk-5bc5b840":"4082df72","chunk-60b99424":"c695d29d","chunk-7e3f644a":"db6c3da0","chunk-b14c3cb4":"f13ab6fa","chunk-dc331f32":"e22d8eab","chunk-e0a3d29c":"60bf1393","chunk-e1ebd766":"1772ab64","chunk-e9f308a2":"4dabe3db"}[n]+".css",r=i.p+c,a=document.getElementsByTagName("link"),o=0;o<a.length;o++){var h=a[o],f=h.getAttribute("data-href")||h.getAttribute("href");if("stylesheet"===h.rel&&(f===c||f===r))return e()}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){h=d[o],f=h.getAttribute("data-href");if(f===c||f===r)return e()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=e,l.onerror=function(e){var c=e&&e.target&&e.target.src||r,a=new Error("Loading CSS chunk "+n+" failed.\n("+c+")");a.request=c,delete u[n],l.parentNode.removeChild(l),t(a)},l.href=r;var p=document.getElementsByTagName("head")[0];p.appendChild(l)}).then(function(){u[n]=0}));var c=r[n];if(0!==c)if(c)e.push(c[2]);else{var a=new Promise(function(e,t){c=r[n]=[e,t]});e.push(c[2]=a);var h,f=document.createElement("script");f.charset="utf-8",f.timeout=120,i.nc&&f.setAttribute("nonce",i.nc),f.src=o(n),h=function(e){f.onerror=f.onload=null,clearTimeout(d);var t=r[n];if(0!==t){if(t){var c=e&&("load"===e.type?"missing":e.type),u=e&&e.target&&e.target.src,a=new Error("Loading chunk "+n+" failed.\n("+c+": "+u+")");a.type=c,a.request=u,t[1](a)}r[n]=void 0}};var d=setTimeout(function(){h({type:"timeout",target:f})},12e4);f.onerror=f.onload=h,document.head.appendChild(f)}return Promise.all(e)},i.m=n,i.c=c,i.d=function(n,e,t){i.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},i.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},i.t=function(n,e){if(1&e&&(n=i(n)),8&e)return n;if(4&e&&"object"===typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var c in n)i.d(t,c,function(e){return n[e]}.bind(null,c));return t},i.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return i.d(e,"a",e),e},i.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},i.p="/",i.oe=function(n){throw console.error(n),n};var h=window["webpackJsonp"]=window["webpackJsonp"]||[],f=h.push.bind(h);h.push=e,h=h.slice();for(var d=0;d<h.length;d++)e(h[d]);var l=f;a.push([0,"chunk-vendors"]),t()})({0:function(n,e,t){n.exports=t("56d7")},"56d7":function(n,e,t){"use strict";t.r(e);t("cadf"),t("551c"),t("f751"),t("097d");var c=t("2b0e"),u=t("9062"),r=t.n(u),a=t("0284"),o=t.n(a),i=t("8832"),h=t.n(i),f=t("8c4f");c["a"].use(f["a"]);var d=new f["a"]({base:"/",mode:"history",routes:[{path:"",name:"Dashboard",component:function(){return t.e("chunk-2f012e80").then(t.bind(null,"0c7c"))},children:[{path:"/",name:"Home",component:function(){return t.e("chunk-0a0075ac").then(t.bind(null,"bb51"))}},{path:"omicam",name:"Omicam",component:function(){return t.e("chunk-7e3f644a").then(t.bind(null,"dacb"))}},{path:"omi-studio",name:"OmiStudio",component:function(){return t.e("chunk-1924c3a8").then(t.bind(null,"ff7c"))}},{path:"news",name:"NewsList",component:function(){return t.e("chunk-3f009547").then(t.bind(null,"a2f9"))}},{path:"news/:newsId",name:"news",component:function(){return t.e("chunk-20585e43").then(t.bind(null,"737d"))}},{path:"story",name:"OmiStory",component:function(){return t.e("chunk-e1ebd766").then(t.bind(null,"b7a6"))}},{path:"story/:storyId",name:"story",component:function(){return t.e("chunk-e9f308a2").then(t.bind(null,"92a2"))}},{path:"contact",name:"Contact",component:function(){return t.e("chunk-4804c65c").then(t.bind(null,"b8fa"))}},{path:"about",name:"About",component:function(){return t.e("chunk-b14c3cb4").then(t.bind(null,"f820"))}},{path:"privacy-policy",name:"Privacy",component:function(){return t.e("chunk-5bc5b840").then(t.bind(null,"6f9f"))}},{path:"terms-of-service",name:"Service",component:function(){return t.e("chunk-07048868").then(t.bind(null,"e2f8"))}},{path:"shop",name:"Shop",component:function(){return t.e("chunk-e0a3d29c").then(t.bind(null,"0fa5"))}},{path:"checkout",name:"Checkout",component:function(){return t.e("chunk-51232c82").then(t.bind(null,"7cb4"))}},{path:"shop/:productId",name:"Product",component:function(){return t.e("chunk-463886d0").then(t.bind(null,"d2f1"))}},{path:"ordertracking",name:"CheckMyOrder",component:function(){return t.e("chunk-60b99424").then(t.bind(null,"a9c3"))}},{path:"thankyou/:paymentId",name:"Thankyou",component:function(){return t.e("chunk-dc331f32").then(t.bind(null,"2368"))}},{path:"*",redirect:"/"}]}]}),l=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},p=[],b={},s=b,m=(t("5c0b"),t("2877")),k=Object(m["a"])(s,l,p,!1,null,null,null),v=k.exports,g=t("2f62");c["a"].use(g["a"]);var y=new g["a"].Store({state:{},mutations:{},actions:{}}),w=(t("4989"),t("581b"),t("555f"),t("a481"),t("c5f6"),function(n){var e=Number(n);return"USD $".concat(e.toFixed(2).replace(/./g,function(n,e,t){var c=e&&"."!==n&&(t.length-e)%3===0?", ".concat(n).replace(/\s/g,""):n;return c}))});t("e40d");c["a"].use(o.a,{id:"UA-65565825-6",router:d,autoTracking:{skipSamePath:!0,pageviewTemplate:function(n){return{page:n.path,title:document.title,location:window.location.href,time:new Date}}}}),c["a"].component("Loading",r.a),c["a"].component("paginate",h.a),c["a"].filter("currency",w),c["a"].config.productionTip=!1,new c["a"]({router:d,store:y,render:function(n){return n(v)}}).$mount("#app")},"5c0b":function(n,e,t){"use strict";var c=t("5e27"),u=t.n(c);u.a},"5e27":function(n,e,t){}});
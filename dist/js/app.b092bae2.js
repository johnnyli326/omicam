(function(e){function n(n){for(var r,c,o=n[0],f=n[1],i=n[2],d=0,h=[];d<o.length;d++)c=o[d],u[c]&&h.push(u[c][0]),u[c]=0;for(r in f)Object.prototype.hasOwnProperty.call(f,r)&&(e[r]=f[r]);l&&l(n);while(h.length)h.shift()();return a.push.apply(a,i||[]),t()}function t(){for(var e,n=0;n<a.length;n++){for(var t=a[n],r=!0,c=1;c<t.length;c++){var o=t[c];0!==u[o]&&(r=!1)}r&&(a.splice(n--,1),e=f(f.s=t[0]))}return e}var r={},c={app:0},u={app:0},a=[];function o(e){return f.p+"js/"+({}[e]||e)+"."+{"chunk-1ffc7c1d":"04b61a88","chunk-454309f2":"a1425eea","chunk-4aeecfee":"9ddb430a","chunk-5ff4c063":"77c1b731","chunk-6acd7186":"4a0b5431","chunk-8aa92768":"f8181365","chunk-8db42014":"63bb6c58","chunk-dd53fd1a":"16105666","chunk-efdc4c10":"63188472"}[e]+".js"}function f(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,f),t.l=!0,t.exports}f.e=function(e){var n=[],t={"chunk-1ffc7c1d":1,"chunk-454309f2":1,"chunk-4aeecfee":1,"chunk-5ff4c063":1,"chunk-6acd7186":1,"chunk-8aa92768":1,"chunk-8db42014":1,"chunk-dd53fd1a":1,"chunk-efdc4c10":1};c[e]?n.push(c[e]):0!==c[e]&&t[e]&&n.push(c[e]=new Promise(function(n,t){for(var r="css/"+({}[e]||e)+"."+{"chunk-1ffc7c1d":"1544ec5a","chunk-454309f2":"5f05b78c","chunk-4aeecfee":"ea02b0a6","chunk-5ff4c063":"34ca6e04","chunk-6acd7186":"a8f26f70","chunk-8aa92768":"dd7cf7de","chunk-8db42014":"513fca77","chunk-dd53fd1a":"7c4bfee6","chunk-efdc4c10":"132d0478"}[e]+".css",u=f.p+r,a=document.getElementsByTagName("link"),o=0;o<a.length;o++){var i=a[o],d=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(d===r||d===u))return n()}var h=document.getElementsByTagName("style");for(o=0;o<h.length;o++){i=h[o],d=i.getAttribute("data-href");if(d===r||d===u)return n()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=n,l.onerror=function(n){var r=n&&n.target&&n.target.src||u,a=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");a.request=r,delete c[e],l.parentNode.removeChild(l),t(a)},l.href=u;var p=document.getElementsByTagName("head")[0];p.appendChild(l)}).then(function(){c[e]=0}));var r=u[e];if(0!==r)if(r)n.push(r[2]);else{var a=new Promise(function(n,t){r=u[e]=[n,t]});n.push(r[2]=a);var i,d=document.createElement("script");d.charset="utf-8",d.timeout=120,f.nc&&d.setAttribute("nonce",f.nc),d.src=o(e),i=function(n){d.onerror=d.onload=null,clearTimeout(h);var t=u[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),c=n&&n.target&&n.target.src,a=new Error("Loading chunk "+e+" failed.\n("+r+": "+c+")");a.type=r,a.request=c,t[1](a)}u[e]=void 0}};var h=setTimeout(function(){i({type:"timeout",target:d})},12e4);d.onerror=d.onload=i,document.head.appendChild(d)}return Promise.all(n)},f.m=e,f.c=r,f.d=function(e,n,t){f.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},f.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},f.t=function(e,n){if(1&n&&(e=f(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(f.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)f.d(t,r,function(n){return e[n]}.bind(null,r));return t},f.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return f.d(n,"a",n),n},f.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},f.p="",f.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],d=i.push.bind(i);i.push=n,i=i.slice();for(var h=0;h<i.length;h++)n(i[h]);var l=d;a.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"56d7":function(e,n,t){"use strict";t.r(n);t("cadf"),t("551c"),t("f751"),t("097d");var r=t("2b0e"),c=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},u=[],a={},o=a,f=(t("5c0b"),t("2877")),i=Object(f["a"])(o,c,u,!1,null,null,null),d=i.exports,h=t("8c4f");r["a"].use(h["a"]);var l=new h["a"]({mode:"history",routes:[{path:"",name:"Dashboard",component:function(){return t.e("chunk-dd53fd1a").then(t.bind(null,"0c7c"))},children:[{path:"/",name:"Home",component:function(){return t.e("chunk-454309f2").then(t.bind(null,"bb51"))}},{path:"omicam",name:"Omicam",component:function(){return t.e("chunk-6acd7186").then(t.bind(null,"dacb"))}},{path:"omi-studio",name:"OmiStudio",component:function(){return t.e("chunk-1ffc7c1d").then(t.bind(null,"ff7c"))}},{path:"news",name:"News",component:function(){return t.e("chunk-8aa92768").then(t.bind(null,"a2f9"))}},{path:"omistory",name:"OmiStory",component:function(){return t.e("chunk-efdc4c10").then(t.bind(null,"b7a6"))}},{path:"support",name:"Support",component:function(){return t.e("chunk-8db42014").then(t.bind(null,"1deb"))}},{path:"contact",name:"Contact",component:function(){return t.e("chunk-5ff4c063").then(t.bind(null,"b8fa"))}},{path:"product/omicam-wearable-vr-camera",name:"Product",component:function(){return t.e("chunk-4aeecfee").then(t.bind(null,"d2f1"))}},{path:"*",redirect:"/"}]}]}),p=t("2f62");r["a"].use(p["a"]);var s=new p["a"].Store({state:{},mutations:{},actions:{}});t("4989"),t("581b"),t("555f");r["a"].config.productionTip=!1,new r["a"]({router:l,store:s,render:function(e){return e(d)}}).$mount("#app")},"5c0b":function(e,n,t){"use strict";var r=t("5e27"),c=t.n(r);c.a},"5e27":function(e,n,t){}});
//# sourceMappingURL=app.b092bae2.js.map
(function(e){function n(n){for(var c,r,o=n[0],i=n[1],f=n[2],h=0,l=[];h<o.length;h++)r=o[h],a[r]&&l.push(a[r][0]),a[r]=0;for(c in i)Object.prototype.hasOwnProperty.call(i,c)&&(e[c]=i[c]);d&&d(n);while(l.length)l.shift()();return u.push.apply(u,f||[]),t()}function t(){for(var e,n=0;n<u.length;n++){for(var t=u[n],c=!0,r=1;r<t.length;r++){var o=t[r];0!==a[o]&&(c=!1)}c&&(u.splice(n--,1),e=i(i.s=t[0]))}return e}var c={},r={app:0},a={app:0},u=[];function o(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-11c03e4b":"644fcf31","chunk-1311e4b8":"632e15df","chunk-4044bc9e":"6ee530df","chunk-413ea282":"b3324ce2","chunk-42f93ae4":"4e5fcb88","chunk-49afaf8b":"b7fd3eaa","chunk-4a9cc954":"5c1b494e","chunk-762a640a":"000d6197","chunk-81053140":"d614485e","chunk-8fad0a8c":"9afa16fa","chunk-94b11394":"1c5cea1c","chunk-9ed314ce":"2e97ad26","chunk-9fc281e2":"36a06330","chunk-a953cf1c":"b29f6e09","chunk-db2b675e":"57813806","chunk-ee46a12c":"70c37a7b"}[e]+".js"}function i(n){if(c[n])return c[n].exports;var t=c[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t={"chunk-11c03e4b":1,"chunk-1311e4b8":1,"chunk-4044bc9e":1,"chunk-413ea282":1,"chunk-42f93ae4":1,"chunk-49afaf8b":1,"chunk-4a9cc954":1,"chunk-762a640a":1,"chunk-81053140":1,"chunk-8fad0a8c":1,"chunk-94b11394":1,"chunk-9ed314ce":1,"chunk-9fc281e2":1,"chunk-a953cf1c":1,"chunk-db2b675e":1,"chunk-ee46a12c":1};r[e]?n.push(r[e]):0!==r[e]&&t[e]&&n.push(r[e]=new Promise(function(n,t){for(var c="css/"+({}[e]||e)+"."+{"chunk-11c03e4b":"443ed42a","chunk-1311e4b8":"539e622d","chunk-4044bc9e":"c87f3b41","chunk-413ea282":"37d5d865","chunk-42f93ae4":"e1960970","chunk-49afaf8b":"9c3181d4","chunk-4a9cc954":"beb60f3a","chunk-762a640a":"f6ffa52c","chunk-81053140":"f1dd1ff2","chunk-8fad0a8c":"b4ef9f6e","chunk-94b11394":"5835a330","chunk-9ed314ce":"7ee96d54","chunk-9fc281e2":"54dcca05","chunk-a953cf1c":"b64c762c","chunk-db2b675e":"52e12ef4","chunk-ee46a12c":"dc13a6eb"}[e]+".css",a=i.p+c,u=document.getElementsByTagName("link"),o=0;o<u.length;o++){var f=u[o],h=f.getAttribute("data-href")||f.getAttribute("href");if("stylesheet"===f.rel&&(h===c||h===a))return n()}var l=document.getElementsByTagName("style");for(o=0;o<l.length;o++){f=l[o],h=f.getAttribute("data-href");if(h===c||h===a)return n()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=n,d.onerror=function(n){var c=n&&n.target&&n.target.src||a,u=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");u.request=c,delete r[e],d.parentNode.removeChild(d),t(u)},d.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(d)}).then(function(){r[e]=0}));var c=a[e];if(0!==c)if(c)n.push(c[2]);else{var u=new Promise(function(n,t){c=a[e]=[n,t]});n.push(c[2]=u);var f,h=document.createElement("script");h.charset="utf-8",h.timeout=120,i.nc&&h.setAttribute("nonce",i.nc),h.src=o(e),f=function(n){h.onerror=h.onload=null,clearTimeout(l);var t=a[e];if(0!==t){if(t){var c=n&&("load"===n.type?"missing":n.type),r=n&&n.target&&n.target.src,u=new Error("Loading chunk "+e+" failed.\n("+c+": "+r+")");u.type=c,u.request=r,t[1](u)}a[e]=void 0}};var l=setTimeout(function(){f({type:"timeout",target:h})},12e4);h.onerror=h.onload=f,document.head.appendChild(h)}return Promise.all(n)},i.m=e,i.c=c,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var c in e)i.d(t,c,function(n){return e[n]}.bind(null,c));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="/",i.oe=function(e){throw console.error(e),e};var f=window["webpackJsonp"]=window["webpackJsonp"]||[],h=f.push.bind(f);f.push=n,f=f.slice();for(var l=0;l<f.length;l++)n(f[l]);var d=h;u.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"56d7":function(e,n,t){"use strict";t.r(n);t("cadf"),t("551c"),t("f751"),t("097d");var c=t("2b0e"),r=t("9062"),a=t.n(r),u=t("0284"),o=t.n(u),i=t("8c4f");c["a"].use(i["a"]);var f=new i["a"]({base:"/",mode:"history",routes:[{path:"",name:"Dashboard",component:function(){return t.e("chunk-49afaf8b").then(t.bind(null,"0c7c"))},children:[{path:"/",name:"Home",component:function(){return t.e("chunk-762a640a").then(t.bind(null,"bb51"))}},{path:"omicam",name:"Omicam",component:function(){return t.e("chunk-4044bc9e").then(t.bind(null,"dacb"))}},{path:"omi-studio",name:"OmiStudio",component:function(){return t.e("chunk-94b11394").then(t.bind(null,"ff7c"))}},{path:"news",name:"NewsList",component:function(){return t.e("chunk-1311e4b8").then(t.bind(null,"a2f9"))}},{path:"news/:newsId",name:"news",component:function(){return t.e("chunk-42f93ae4").then(t.bind(null,"737d"))}},{path:"story",name:"OmiStory",component:function(){return t.e("chunk-413ea282").then(t.bind(null,"b7a6"))}},{path:"story/:storyId",name:"story",component:function(){return t.e("chunk-9ed314ce").then(t.bind(null,"92a2"))}},{path:"contact",name:"Contact",component:function(){return t.e("chunk-8fad0a8c").then(t.bind(null,"b8fa"))}},{path:"about",name:"About",component:function(){return t.e("chunk-4a9cc954").then(t.bind(null,"f820"))}},{path:"privacy-policy",name:"Privacy",component:function(){return t.e("chunk-db2b675e").then(t.bind(null,"6f9f"))}},{path:"terms-of-service",name:"Service",component:function(){return t.e("chunk-a953cf1c").then(t.bind(null,"e2f8"))}},{path:"shop",name:"Shop",component:function(){return t.e("chunk-11c03e4b").then(t.bind(null,"0fa5"))}},{path:"order",name:"Order",component:function(){return t.e("chunk-ee46a12c").then(t.bind(null,"dbf5"))}},{path:"shop/:productId",name:"Product",component:function(){return t.e("chunk-9fc281e2").then(t.bind(null,"d2f1"))}},{path:"productlist",name:"productlist",component:function(){return t.e("chunk-81053140").then(t.bind(null,"96fc"))}},{path:"*",redirect:"/"}]}]}),h=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},l=[],d={},p=d,s=(t("5c0b"),t("2877")),b=Object(s["a"])(p,h,l,!1,null,null,null),m=b.exports,k=t("2f62");c["a"].use(k["a"]);var v=new k["a"].Store({state:{},mutations:{},actions:{}}),g=(t("4989"),t("581b"),t("555f"),t("a481"),t("c5f6"),function(e){var n=Number(e);return"USD $".concat(n.toFixed(2).replace(/./g,function(e,n,t){var c=n&&"."!==e&&(t.length-n)%3===0?", ".concat(e).replace(/\s/g,""):e;return c}))}),y=function(e){var n=Math.floor(1e3*e),t=new Date(n),c=t.getFullYear(),r=function(){var e=t.getMonth()+1;return e<10?"0".concat(e):e},a=t.getDate();return"".concat(c," / ").concat(r()," / ").concat(a)};t("e40d");c["a"].use(o.a,{id:"UA-65565825-6",router:f,autoTracking:{skipSamePath:!0,pageviewTemplate:function(e){return console.log(e.path),{page:e.path,title:document.title,location:window.location.href,time:new Date}}}}),c["a"].component("Loading",a.a),c["a"].filter("currency",g),c["a"].filter("timeFormat",y),c["a"].config.productionTip=!1,new c["a"]({router:f,store:v,render:function(e){return e(m)}}).$mount("#app")},"5c0b":function(e,n,t){"use strict";var c=t("5e27"),r=t.n(c);r.a},"5e27":function(e,n,t){}});
//# sourceMappingURL=app.63a2e92e.js.map
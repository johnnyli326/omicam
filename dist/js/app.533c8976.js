(function(n){function e(e){for(var c,r,o=e[0],i=e[1],h=e[2],f=0,d=[];f<o.length;f++)r=o[f],a[r]&&d.push(a[r][0]),a[r]=0;for(c in i)Object.prototype.hasOwnProperty.call(i,c)&&(n[c]=i[c]);l&&l(e);while(d.length)d.shift()();return u.push.apply(u,h||[]),t()}function t(){for(var n,e=0;e<u.length;e++){for(var t=u[e],c=!0,r=1;r<t.length;r++){var o=t[r];0!==a[o]&&(c=!1)}c&&(u.splice(e--,1),n=i(i.s=t[0]))}return n}var c={},r={app:0},a={app:0},u=[];function o(n){return i.p+"js/"+({}[n]||n)+"."+{"chunk-0b131d98":"cf681a7f","chunk-10702f62":"f1e75526","chunk-19c4d353":"b93cc4db","chunk-30eca77d":"7488270d","chunk-43ea2ae5":"ffb52412","chunk-496501a1":"71ed7002","chunk-4a9cc954":"5c1b494e","chunk-5abaea3c":"307b31be","chunk-5c87d3db":"63533742","chunk-691f2c44":"6997573e","chunk-7c5c62b6":"830b4595","chunk-81053140":"d614485e","chunk-a953cf1c":"b29f6e09","chunk-db2b675e":"57813806","chunk-ee46a12c":"70c37a7b"}[n]+".js"}function i(e){if(c[e])return c[e].exports;var t=c[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(n){var e=[],t={"chunk-0b131d98":1,"chunk-10702f62":1,"chunk-19c4d353":1,"chunk-30eca77d":1,"chunk-43ea2ae5":1,"chunk-496501a1":1,"chunk-4a9cc954":1,"chunk-5abaea3c":1,"chunk-5c87d3db":1,"chunk-691f2c44":1,"chunk-7c5c62b6":1,"chunk-81053140":1,"chunk-a953cf1c":1,"chunk-db2b675e":1,"chunk-ee46a12c":1};r[n]?e.push(r[n]):0!==r[n]&&t[n]&&e.push(r[n]=new Promise(function(e,t){for(var c="css/"+({}[n]||n)+"."+{"chunk-0b131d98":"20840baf","chunk-10702f62":"8ecc15f5","chunk-19c4d353":"cbfee01e","chunk-30eca77d":"b38720b1","chunk-43ea2ae5":"aae4d950","chunk-496501a1":"3c2ad3e9","chunk-4a9cc954":"beb60f3a","chunk-5abaea3c":"868bab57","chunk-5c87d3db":"c091dee0","chunk-691f2c44":"04584df1","chunk-7c5c62b6":"d541dbb4","chunk-81053140":"f1dd1ff2","chunk-a953cf1c":"b64c762c","chunk-db2b675e":"52e12ef4","chunk-ee46a12c":"dc13a6eb"}[n]+".css",a=i.p+c,u=document.getElementsByTagName("link"),o=0;o<u.length;o++){var h=u[o],f=h.getAttribute("data-href")||h.getAttribute("href");if("stylesheet"===h.rel&&(f===c||f===a))return e()}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){h=d[o],f=h.getAttribute("data-href");if(f===c||f===a)return e()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=e,l.onerror=function(e){var c=e&&e.target&&e.target.src||a,u=new Error("Loading CSS chunk "+n+" failed.\n("+c+")");u.request=c,delete r[n],l.parentNode.removeChild(l),t(u)},l.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(l)}).then(function(){r[n]=0}));var c=a[n];if(0!==c)if(c)e.push(c[2]);else{var u=new Promise(function(e,t){c=a[n]=[e,t]});e.push(c[2]=u);var h,f=document.createElement("script");f.charset="utf-8",f.timeout=120,i.nc&&f.setAttribute("nonce",i.nc),f.src=o(n),h=function(e){f.onerror=f.onload=null,clearTimeout(d);var t=a[n];if(0!==t){if(t){var c=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src,u=new Error("Loading chunk "+n+" failed.\n("+c+": "+r+")");u.type=c,u.request=r,t[1](u)}a[n]=void 0}};var d=setTimeout(function(){h({type:"timeout",target:f})},12e4);f.onerror=f.onload=h,document.head.appendChild(f)}return Promise.all(e)},i.m=n,i.c=c,i.d=function(n,e,t){i.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},i.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},i.t=function(n,e){if(1&e&&(n=i(n)),8&e)return n;if(4&e&&"object"===typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var c in n)i.d(t,c,function(e){return n[e]}.bind(null,c));return t},i.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return i.d(e,"a",e),e},i.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},i.p="/",i.oe=function(n){throw console.error(n),n};var h=window["webpackJsonp"]=window["webpackJsonp"]||[],f=h.push.bind(h);h.push=e,h=h.slice();for(var d=0;d<h.length;d++)e(h[d]);var l=f;u.push([0,"chunk-vendors"]),t()})({0:function(n,e,t){n.exports=t("56d7")},"56d7":function(n,e,t){"use strict";t.r(e);t("cadf"),t("551c"),t("f751"),t("097d");var c=t("2b0e"),r=t("9062"),a=t.n(r),u=t("0284"),o=t.n(u),i=t("8c4f");c["a"].use(i["a"]);var h=new i["a"]({base:"/",mode:"history",routes:[{path:"",name:"Dashboard",component:function(){return t.e("chunk-0b131d98").then(t.bind(null,"0c7c"))},children:[{path:"/",name:"Home",component:function(){return t.e("chunk-30eca77d").then(t.bind(null,"bb51"))}},{path:"omicam",name:"Omicam",component:function(){return t.e("chunk-19c4d353").then(t.bind(null,"dacb"))}},{path:"omi-studio",name:"OmiStudio",component:function(){return t.e("chunk-5abaea3c").then(t.bind(null,"ff7c"))}},{path:"news",name:"News",component:function(){return t.e("chunk-691f2c44").then(t.bind(null,"a2f9"))}},{path:"omistory",name:"OmiStory",component:function(){return t.e("chunk-5c87d3db").then(t.bind(null,"b7a6"))}},{path:"omistory/:storyId",name:"story",component:function(){return t.e("chunk-496501a1").then(t.bind(null,"92a2"))}},{path:"contact",name:"Contact",component:function(){return t.e("chunk-7c5c62b6").then(t.bind(null,"b8fa"))}},{path:"about",name:"About",component:function(){return t.e("chunk-4a9cc954").then(t.bind(null,"f820"))}},{path:"privacy-policy",name:"Privacy",component:function(){return t.e("chunk-db2b675e").then(t.bind(null,"6f9f"))}},{path:"terms-of-service",name:"Service",component:function(){return t.e("chunk-a953cf1c").then(t.bind(null,"e2f8"))}},{path:"shop",name:"Shop",component:function(){return t.e("chunk-43ea2ae5").then(t.bind(null,"0fa5"))}},{path:"order",name:"Order",component:function(){return t.e("chunk-ee46a12c").then(t.bind(null,"dbf5"))}},{path:"product/:productId",name:"Product",component:function(){return t.e("chunk-10702f62").then(t.bind(null,"d2f1"))}},{path:"productlist",name:"productlist",component:function(){return t.e("chunk-81053140").then(t.bind(null,"96fc"))}},{path:"*",redirect:"/"}]}]}),f=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},d=[],l={},p=l,b=(t("5c0b"),t("2877")),s=Object(b["a"])(p,f,d,!1,null,null,null),m=s.exports,k=t("2f62");c["a"].use(k["a"]);var v=new k["a"].Store({state:{},mutations:{},actions:{}}),g=(t("4989"),t("581b"),t("555f"),t("a481"),t("c5f6"),function(n){var e=Number(n);return"USD $".concat(e.toFixed(2).replace(/./g,function(n,e,t){var c=e&&"."!==n&&(t.length-e)%3===0?", ".concat(n).replace(/\s/g,""):n;return c}))}),y=function(n){var e=Math.floor(1e3*n),t=new Date(e),c=t.getFullYear(),r=function(){var n=t.getMonth()+1;return n<10?"0".concat(n):n},a=t.getDate();return"".concat(c," / ").concat(r()," / ").concat(a)};t("e40d");c["a"].use(o.a,{id:"UA-138434602-1",router:h,autoTracking:{skipSamePath:!0,pageviewTemplate:function(n){return console.log(n.path),{page:n.path,title:document.title,location:window.location.href,time:new Date}}}}),c["a"].component("Loading",a.a),c["a"].filter("currency",g),c["a"].filter("timeFormat",y),c["a"].config.productionTip=!1,new c["a"]({router:h,store:v,render:function(n){return n(m)}}).$mount("#app")},"5c0b":function(n,e,t){"use strict";var c=t("5e27"),r=t.n(c);r.a},"5e27":function(n,e,t){}});
//# sourceMappingURL=app.533c8976.js.map
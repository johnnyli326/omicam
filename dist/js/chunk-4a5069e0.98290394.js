(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4a5069e0"],{"07e3":function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},"1bc3":function(t,e,n){var r=n("f772");t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},"1ec9":function(t,e,n){var r=n("f772"),o=n("e53d").document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},"25eb":function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},"294c":function(t,e){t.exports=function(t){try{return!!t()}catch(e){return!0}}},"35e8":function(t,e,n){var r=n("d9f6"),o=n("aebd");t.exports=n("8e60")?function(t,e,n){return r.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},"584a":function(t,e){var n=t.exports={version:"2.6.5"};"number"==typeof __e&&(__e=n)},"5d6b":function(t,e,n){var r=n("e53d").parseInt,o=n("a1ce").trim,i=n("e692"),a=/^[-+]?0[xX]/;t.exports=8!==r(i+"08")||22!==r(i+"0x16")?function(t,e){var n=o(String(t),3);return r(n,e>>>0||(a.test(n)?16:10))}:r},"63b6":function(t,e,n){var r=n("e53d"),o=n("584a"),i=n("d864"),a=n("35e8"),s=n("07e3"),c="prototype",u=function(t,e,n){var f,l,p,d=t&u.F,v=t&u.G,m=t&u.S,b=t&u.P,w=t&u.B,y=t&u.W,g=v?o:o[e]||(o[e]={}),h=g[c],_=v?r:m?r[e]:(r[e]||{})[c];for(f in v&&(n=e),n)l=!d&&_&&void 0!==_[f],l&&s(g,f)||(p=l?_[f]:n[f],g[f]=v&&"function"!=typeof _[f]?n[f]:w&&l?i(p,r):y&&_[f]==p?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e[c]=t[c],e}(p):b&&"function"==typeof p?i(Function.call,p):p,b&&((g.virtual||(g.virtual={}))[f]=p,t&u.R&&h&&!h[f]&&a(h,f,p)))};u.F=1,u.G=2,u.S=4,u.P=8,u.B=16,u.W=32,u.U=64,u.R=128,t.exports=u},7412:function(t,e,n){"use strict";var r=n("8413"),o=n.n(r);o.a},7445:function(t,e,n){var r=n("63b6"),o=n("5d6b");r(r.G+r.F*(parseInt!=o),{parseInt:o})},"794b":function(t,e,n){t.exports=!n("8e60")&&!n("294c")(function(){return 7!=Object.defineProperty(n("1ec9")("div"),"a",{get:function(){return 7}}).a})},"79aa":function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},8413:function(t,e,n){},"8e60":function(t,e,n){t.exports=!n("294c")(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},a1ce:function(t,e,n){var r=n("63b6"),o=n("25eb"),i=n("294c"),a=n("e692"),s="["+a+"]",c="​",u=RegExp("^"+s+s+"*"),f=RegExp(s+s+"*$"),l=function(t,e,n){var o={},s=i(function(){return!!a[t]()||c[t]()!=c}),u=o[t]=s?e(p):a[t];n&&(o[n]=u),r(r.P+r.F*s,"String",o)},p=l.trim=function(t,e){return t=String(o(t)),1&e&&(t=t.replace(u,"")),2&e&&(t=t.replace(f,"")),t};t.exports=l},aebd:function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},b7a6:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"container mb-5 story-wrap"},[n("nav",{attrs:{"aria-label":"breadcrumb"}},[n("ol",{staticClass:"breadcrumb bg-transparent"},[n("li",{staticClass:"breadcrumb-item"},[n("router-link",{attrs:{to:"/"}},[t._v("\n              HOME\n            ")])],1),n("li",{staticClass:"breadcrumb-item before active",attrs:{"aria-current":"page"}},[t._v("\n            OMI STORY\n          ")])])]),t._l(t.storyList,function(e){return n("div",{key:e.id},[n("div",{staticClass:"row mb-5"},[n("router-link",{staticClass:"col-md-5 story-img text-center",style:{backgroundImage:"url(https://www.omicam.com/"+e.listImg+")"},attrs:{to:"/story/"+e.id}}),n("div",{staticClass:"col-md-7 mt-4 story-intro-box"},[n("router-link",{attrs:{to:"/story/"+e.id}},[n("h3",{staticClass:"text-primary"},[t._v(t._s(e.title))])]),n("main",{staticClass:"ml-4 mt-3"},[n("p",{staticStyle:{"text-align":"justify",color:"white"},domProps:{innerHTML:t._s(e.description)}})]),n("span",{staticClass:"story-intro-author"},[t._v("--"+t._s(e.author))])],1)],1),n("hr")])}),t.totalStories?n("div",{staticClass:"text-center"},[n("ul",{staticClass:"pagination"},[0!=t.startItem&&t.totalPage>1?n("li",{staticClass:"pagination-item",attrs:{"aria-label":"Previous"},on:{click:function(e){return e.preventDefault(),t.ChangePage("last")}}},[t._v("\n            «\n          ")]):t._e(),t._l(t.totalPage,function(e){return n("li",{key:e.id,staticClass:"pagination-item",class:{active:e==t.startItem/t.PAGE_SIZE+1},on:{click:function(n){return n.preventDefault(),t.ChangePage(e)}}},[t._v("\n            "+t._s(e)+"\n          ")])}),t.totalPage>1&&t.startItem!=(t.totalPage-1)*t.PAGE_SIZE?n("li",{staticClass:"pagination-item",attrs:{"aria-label":"Next"},on:{click:function(e){return e.preventDefault(),t.ChangePage("next")}}},[t._v("\n            »\n          ")]):t._e()],2)]):t._e()],2)])},o=[],i=n("e814"),a=n.n(i),s=(n("cadf"),n("551c"),n("f751"),n("097d"),n("1157"),{data:function(){return{storyList:[],startItem:0,totalStories:"",PAGE_SIZE:5}},methods:{getStories:function(){var t=this,e=new XMLHttpRequest;e.open("get","https://www.omicam.com/_privateApi/omiStoryApi.php?fun=list&from="+t.startItem+"&count="+t.PAGE_SIZE,!0),e.send(null),e.onload=function(){var n=JSON.parse(e.response);t.storyList=n.list,t.totalStories=n.total}},ChangePage:function(t){var e=this;if("last"==t&&e.startItem>0)window.scrollTo(0,0),e.startItem-=e.PAGE_SIZE;else if("next"==t&&e.startItem<(e.totalPage-1)*e.PAGE_SIZE)window.scrollTo(0,0),e.startItem+=e.PAGE_SIZE;else{if("number"!=typeof t||e.startItem==(t-1)*e.PAGE_SIZE)return!1;window.scrollTo(0,0),e.startItem=(t-1)*e.PAGE_SIZE}var n=new XMLHttpRequest;n.open("get","https://www.omicam.com/_privateApi/omiStoryApi.php?fun=list&from="+e.startItem+"&count="+e.PAGE_SIZE,!0),n.send(null),n.onload=function(){var t=JSON.parse(n.response);e.storyList=t.list}}},computed:{totalPage:function(){var t=this,e=a()(t.totalStories/t.PAGE_SIZE)+(t.totalStories%t.PAGE_SIZE>0?1:0);return!t.storyList||t.totalStories<=0?1:e}},created:function(){window.scrollTo(0,0),this.getStories()}}),c=s,u=(n("7412"),n("2877")),f=Object(u["a"])(c,r,o,!1,null,"f6a81be2",null);e["default"]=f.exports},b9e9:function(t,e,n){n("7445"),t.exports=n("584a").parseInt},d864:function(t,e,n){var r=n("79aa");t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},d9f6:function(t,e,n){var r=n("e4ae"),o=n("794b"),i=n("1bc3"),a=Object.defineProperty;e.f=n("8e60")?Object.defineProperty:function(t,e,n){if(r(t),e=i(e,!0),r(n),o)try{return a(t,e,n)}catch(s){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},e4ae:function(t,e,n){var r=n("f772");t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},e53d:function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},e692:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},e814:function(t,e,n){t.exports=n("b9e9")},f772:function(t,e){t.exports=function(t){return"object"===typeof t?null!==t:"function"===typeof t}}}]);
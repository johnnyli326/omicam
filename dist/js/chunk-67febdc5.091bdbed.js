(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-67febdc5"],{4362:function(t,e,n){e.nextTick=function(t){setTimeout(t,0)},e.platform=e.arch=e.execPath=e.title="browser",e.pid=1,e.browser=!0,e.env={},e.argv=[],e.binding=function(t){throw new Error("No such module. (Possibly not yet loaded)")},function(){var t,a="/";e.cwd=function(){return a},e.chdir=function(e){t||(t=n("df7c")),a=t.resolve(e,a)}}(),e.exit=e.kill=e.umask=e.dlopen=e.uptime=e.memoryUsage=e.uvCounters=function(){},e.features={}},"448c":function(t,e,n){t.exports=n.p+"img/teacher.74e9606d.png"},5118:function(t,e,n){(function(t){var a="undefined"!==typeof t&&t||"undefined"!==typeof self&&self||window,i=Function.prototype.apply;function s(t,e){this._id=t,this._clearFn=e}e.setTimeout=function(){return new s(i.call(setTimeout,a,arguments),clearTimeout)},e.setInterval=function(){return new s(i.call(setInterval,a,arguments),clearInterval)},e.clearTimeout=e.clearInterval=function(t){t&&t.close()},s.prototype.unref=s.prototype.ref=function(){},s.prototype.close=function(){this._clearFn.call(a,this._id)},e.enroll=function(t,e){clearTimeout(t._idleTimeoutId),t._idleTimeout=e},e.unenroll=function(t){clearTimeout(t._idleTimeoutId),t._idleTimeout=-1},e._unrefActive=e.active=function(t){clearTimeout(t._idleTimeoutId);var e=t._idleTimeout;e>=0&&(t._idleTimeoutId=setTimeout(function(){t._onTimeout&&t._onTimeout()},e))},n("6017"),e.setImmediate="undefined"!==typeof self&&self.setImmediate||"undefined"!==typeof t&&t.setImmediate||this&&this.setImmediate,e.clearImmediate="undefined"!==typeof self&&self.clearImmediate||"undefined"!==typeof t&&t.clearImmediate||this&&this.clearImmediate}).call(this,n("24aa"))},6017:function(t,e,n){(function(t,e){(function(t,n){"use strict";if(!t.setImmediate){var a,i=1,s={},o=!1,r=t.document,c=Object.getPrototypeOf&&Object.getPrototypeOf(t);c=c&&c.setTimeout?c:t,"[object process]"==={}.toString.call(t.process)?f():p()?v():t.MessageChannel?h():r&&"onreadystatechange"in r.createElement("script")?g():b(),c.setImmediate=l,c.clearImmediate=u}function l(t){"function"!==typeof t&&(t=new Function(""+t));for(var e=new Array(arguments.length-1),n=0;n<e.length;n++)e[n]=arguments[n+1];var o={callback:t,args:e};return s[i]=o,a(i),i++}function u(t){delete s[t]}function d(t){var e=t.callback,a=t.args;switch(a.length){case 0:e();break;case 1:e(a[0]);break;case 2:e(a[0],a[1]);break;case 3:e(a[0],a[1],a[2]);break;default:e.apply(n,a);break}}function m(t){if(o)setTimeout(m,0,t);else{var e=s[t];if(e){o=!0;try{d(e)}finally{u(t),o=!1}}}}function f(){a=function(t){e.nextTick(function(){m(t)})}}function p(){if(t.postMessage&&!t.importScripts){var e=!0,n=t.onmessage;return t.onmessage=function(){e=!1},t.postMessage("","*"),t.onmessage=n,e}}function v(){var e="setImmediate$"+Math.random()+"$",n=function(n){n.source===t&&"string"===typeof n.data&&0===n.data.indexOf(e)&&m(+n.data.slice(e.length))};t.addEventListener?t.addEventListener("message",n,!1):t.attachEvent("onmessage",n),a=function(n){t.postMessage(e+n,"*")}}function h(){var t=new MessageChannel;t.port1.onmessage=function(t){var e=t.data;m(e)},a=function(e){t.port2.postMessage(e)}}function g(){var t=r.documentElement;a=function(e){var n=r.createElement("script");n.onreadystatechange=function(){m(e),n.onreadystatechange=null,t.removeChild(n),n=null},t.appendChild(n)}}function b(){a=function(t){setTimeout(m,0,t)}}})("undefined"===typeof self?"undefined"===typeof t?this:t:self)}).call(this,n("24aa"),n("4362"))},6274:function(t,e,n){t.exports=n.p+"img/eva.601aa8b4.png"},"6d1e":function(t,e,n){"use strict";var a=n("b132"),i=n.n(a);i.a},"8f3f":function(t,e,n){t.exports=n.p+"img/more.e527cef8.png"},ac9c:function(t,e,n){t.exports=n.p+"img/MoLong.011fa7a6.jpg"},b132:function(t,e,n){},bb51:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("section",{staticClass:"section section1"},[a("div",{staticClass:"banner"}),a("div",{staticClass:"section-text"},[t._m(0),a("p",{staticClass:"section-subTitle"},[t._v("OmiCam | Wearable VR Camera")]),a("button",{staticClass:"link-icon-btn clickable play-btn",attrs:{"data-toggle":"modal","data-target":"#commercialModal"},on:{click:function(e){return t.PlayGA()}}})])]),a("section",{staticClass:"section section2"},[a("div",{staticClass:"section-text"},[a("h2",{staticClass:"section-title"},[t._v("\n        OMICAM\n      ")]),a("p",{staticClass:"text-center section-subTitle"},[t._v("\n        The easiest way to immersively record your life.\n      ")]),a("img",{staticClass:"link-icon-btn",attrs:{src:n("d245"),alt:"buy_icon",usemap:"#btnmap_2"}}),a("map",{attrs:{name:"btnmap_2"}},[a("area",{staticClass:"map-area",attrs:{shape:"circle",coords:"37.5, 37.5, 37.5",alt:""},on:{click:function(e){return t.$router.push("/shop")}}})])])]),a("section",{staticClass:"section section3"},[a("div",{staticClass:"section-text"},[a("h2",{staticClass:"section-title"},[t._v("\n        DESIGN TO BE WORN\n      ")]),a("p",{staticClass:"text-center section-subTitle"},[t._v("\n        Free your hand to enjoy the life while recording.\n      ")]),a("img",{staticClass:"link-icon-btn",attrs:{src:n("8f3f"),alt:"more_icon",usemap:"#btnmap_3"}}),a("map",{attrs:{name:"btnmap_3"}},[a("area",{staticClass:"map-area",attrs:{shape:"circle",coords:"37.5, 37.5, 37.5",alt:""},on:{click:function(e){return e.preventDefault(),t.moveTo("wear")}}})])])]),a("section",{staticClass:"section section4"},[a("div",{staticClass:"section-text"},[a("h2",{staticClass:"section-title"},[t._v("\n        WIDER VIEW THAN EVER\n      ")]),a("p",{staticClass:"text-center section-subTitle"},[t._v("\n        Extended your first person point of view by 240 Degree FoV\n      ")]),a("img",{staticClass:"link-icon-btn",attrs:{src:n("8f3f"),alt:"more_icon",usemap:"#btnmap_4"}}),a("map",{attrs:{name:"btnmap_4"}},[a("area",{staticClass:"map-area",attrs:{shape:"circle",coords:"37.5, 37.5, 37.5",alt:""},on:{click:function(e){return e.preventDefault(),t.moveTo("240")}}})])])]),a("section",{staticClass:"section section5"},[a("div",{staticClass:"video-wrap"},[a("video",{staticClass:"loop-video",attrs:{loop:"",muted:"",playsinline:""},domProps:{muted:!0}},[a("source",{attrs:{type:"video/mp4",src:n("e7e0")}})])]),a("div",{staticClass:"section-text"},[a("h2",{staticClass:"section-title"},[t._v("\n        SUPPORT WHOLE DAY\n      ")]),a("p",{staticClass:"text-center section-subTitle"},[t._v("\n        Up to 15 hours operating without worrying about the battery.\n      ")]),a("img",{staticClass:"link-icon-btn",attrs:{src:n("8f3f"),alt:"more_icon",usemap:"#btnmap_7"}}),a("map",{attrs:{name:"btnmap_7"}},[a("area",{staticClass:"map-area",attrs:{shape:"circle",coords:"37.5, 37.5, 37.5",alt:""},on:{click:function(e){return e.preventDefault(),t.moveTo("Lifelog")}}})])])]),t._m(1),a("section",{staticClass:"section section7"},[a("div",{staticClass:"row mr-0 ml-0 section-row"},[a("div",{staticClass:"col-md-6 d-flex justify-content-center align-items-center\n      h-100"},[a("div",{staticClass:"section-text m-3"},[a("h2",{staticClass:"section-title"},[t._v("WATCH & SHARE ANY TIME")]),a("p",{staticClass:"section-subTitle"},[t._v("\n          Watch and share your VR experience\n          thru OMI Studio on different platforms.\n          ")]),a("img",{staticClass:"link-icon-btn",attrs:{src:n("8f3f"),alt:"more_icon",usemap:"#btnmap_7"}}),a("map",{attrs:{name:"btnmap_7"}},[a("area",{staticClass:"map-area",attrs:{shape:"circle",coords:"37.5, 37.5, 37.5",alt:""},on:{click:function(e){return e.preventDefault(),t.$router.push("/omi-studio")}}})])])]),a("div",{staticClass:"col-md-6 section7-img\n        d-flex justify-content-center align-items-center\n        h-100"})])]),a("section",{staticClass:"section section8"},[a("div",{staticClass:"row mr-0 ml-0 section-row"},[a("div",{staticClass:"col-md-6 section8-img\n        d-flex justify-content-center align-items-center\n        h-100"}),a("div",{staticClass:"col-md-6 d-flex justify-content-center align-items-center\n        h-100"},[a("div",{staticClass:"section-text m-3"},[a("h2",{staticClass:"section-title"},[t._v("OmiCam")]),a("p",{staticClass:"section-subTitle"},[t._v("\n            Simply Create Your Immersive Life Memory.\n          ")]),a("img",{staticClass:"link-icon-btn",attrs:{src:n("d245"),alt:"more_icon",usemap:"#btnmap_8"}}),a("map",{attrs:{name:"btnmap_8"}},[a("area",{staticClass:"map-area",attrs:{shape:"circle",coords:"37.5, 37.5, 37.5",alt:""},on:{click:function(e){return e.preventDefault(),t.$router.push("/omicam")}}})])])])])]),a("section",{staticClass:"section9"},[a("h2",{staticClass:"section-title text-center mb-4"},[t._v("OMI STORY")]),a("div",{staticClass:"owl-carousel owl-theme",attrs:{id:"owl-demo"}},t._l(t.stories,function(e,n){return a("div",{key:n,staticClass:"item",style:{backgroundImage:"url("+e.imgSrc+")"}},[a("router-link",{staticClass:"d-inline-block",attrs:{to:"/omistory"}},[a("div",{staticClass:"slide-up"},[a("span",[t._v(t._s(e.name))])])])],1)}),0),t._m(2)]),t._m(3),t._m(4)])},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h2",{staticClass:"section-title"},[t._v("\n        CAPTURE.\n        "),n("br",{staticClass:"rwd"}),t._v("\n        SHARE.\n        "),n("br",{staticClass:"rwd"}),t._v("\n        THE WORLD YOU SEE.\n      ")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"section section6"},[n("div",{staticClass:"section-text"},[n("h2",{staticClass:"section-title"},[t._v("\n        NO SHAKING VIDEO\n      ")]),n("p",{staticClass:"text-center section-subTitle"},[t._v("\n        Always manitain image steady & stable in any activities.\n      ")]),n("button",{staticClass:"link-icon-btn clickable play-btn",attrs:{"data-toggle":"modal","data-target":"#NoShakingModal"}})])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"customNavigation"},[n("a",{staticClass:"btn prev",attrs:{"aria-label":"Previous"}}),n("a",{staticClass:"btn next",attrs:{"aria-label":"Next"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"modal fade",attrs:{id:"commercialModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalCenterTitle","aria-hidden":"true"}},[n("div",{staticClass:"modal-dialog modal-dialog-centered",attrs:{role:"document"}},[n("div",{staticClass:"modal-content bg-transparent border-0"},[n("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[n("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])]),n("div",{staticClass:"modal-body text-center scale-video"},[n("iframe",{attrs:{src:"",width:"640",height:"360",frameborder:"0",allowfullscreen:""}})])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"modal fade",attrs:{id:"NoShakingModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalCenterTitle","aria-hidden":"true"}},[n("div",{staticClass:"modal-dialog modal-dialog-centered",attrs:{role:"document"}},[n("div",{staticClass:"modal-content bg-transparent border-0"},[n("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[n("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])]),n("div",{staticClass:"modal-body text-center scale-video"},[n("iframe",{attrs:{src:"",width:"640",height:"360",frameborder:"0",allowfullscreen:""}})])])])])}],s=n("1157"),o=n.n(s);n("555f");function r(t){var e=this;if(1===arguments.length&&"function"===typeof t&&(t=[t]),!(t instanceof Array))throw new SyntaxError("isInViewport: Argument(s) passed to .do/.run should be a function or an array of functions");return t.forEach(function(t){"function"!==typeof t?(console.warn("isInViewport: Argument(s) passed to .do/.run should be a function or an array of functions"),console.warn("isInViewport: Ignoring non-function values in array and moving on")):[].slice.call(e).forEach(function(e){return t.call(o()(e))})}),this}function c(t){var e=o()("<div></div>").css({width:"100%"});t.append(e);var n=t.width()-e.width();return e.remove(),n}function l(t,e){var n=t.getBoundingClientRect(),a=n.top,i=n.bottom,s=n.left,r=n.right,u=o.a.extend({tolerance:0,viewport:window},e),d=!1,m=u.viewport.jquery?u.viewport:o()(u.viewport);m.length||(console.warn("isInViewport: The viewport selector you have provided matches no element on page."),console.warn("isInViewport: Defaulting to viewport as window"),m=o()(window));var f=m.height(),p=m.width(),v=m[0].toString();if(m[0]!==window&&"[object Window]"!==v&&"[object DOMWindow]"!==v){var h=m[0].getBoundingClientRect();a-=h.top,i-=h.top,s-=h.left,r-=h.left,l.scrollBarWidth=l.scrollBarWidth||c(m),p-=l.scrollBarWidth}return u.tolerance=~~Math.round(parseFloat(u.tolerance)),u.tolerance<0&&(u.tolerance=f+u.tolerance),r<=0||s>=p?d:(d=u.tolerance?a<=u.tolerance&&i>=u.tolerance:i>0&&a<=f,d)}function u(t){if(t){var e=t.split(",");return 1===e.length&&isNaN(e[0])&&(e[1]=e[0],e[0]=void 0),{tolerance:e[0]?e[0].trim():void 0,viewport:e[1]?o()(e[1].trim()):void 0}}return{}}
/**
 * @author  Mudit Ameta
 * @license https://github.com/zeusdeux/isInViewport/blob/master/license.md MIT
 */
o.a.extend(o.a.expr.pseudos||o.a.expr[":"],{"in-viewport":o.a.expr.createPseudo?o.a.expr.createPseudo(function(t){return function(e){return l(e,u(t))}}):function(t,e,n){return l(t,u(n[3]))}}),o.a.fn.isInViewport=function(t){return this.filter(function(e,n){return l(n,t)})},o.a.fn.run=r;var d=n("5118"),m={name:"Home",data:function(){return{stories:[{name:"Teacher Vane – Travelholic",imgSrc:n("448c")},{name:"MoLong – Wargamer",imgSrc:n("ac9c")},{name:"Eva — Divingholic",imgSrc:n("6274")}]}},methods:{moveTo:function(t){console.log(t);this.$router.push("/omicam"),Object(d["setTimeout"])(function(){var e=o()("section[id='"+t+"']");o()("html, body").stop().animate({scrollTop:e.offset().top-50},1e3)},300)},GoTop:function(){o()("html, body").animate({scrollTop:0},"1000")},PlayGA:function(){this.$ga.event({eventCategory:"video",eventAction:"play",eventLabel:"brand film"}),console.log(this.$ga.event)}},created:function(){window.scrollTo(0,0)},mounted:function(){o()(document).ready(function(){o()("#commercialModal").on("show.bs.modal",function(){o()("#commercialModal iframe").attr("src","https://player.vimeo.com/video/330454191?autoplay=1")}),o()("#commercialModal").on("hidden.bs.modal",function(){o()("#commercialModal iframe").attr("src","")}),o()("#NoShakingModal").on("show.bs.modal",function(){o()("#NoShakingModal iframe").attr("src","https://player.vimeo.com/video/330688976?autoplay=1")}),o()("#NoShakingModal").on("hidden.bs.modal",function(){o()("#NoShakingModal iframe").attr("src","")});var t=o()("#owl-demo");t.owlCarousel({responsive:{0:{items:1},600:{items:2},1000:{items:3}},loop:!0}),o()(".next").click(function(){t.trigger("next.owl.carousel")}),o()(".prev").click(function(){t.trigger("prev.owl.carousel")})});var t=document.querySelector(".loop-video");t.autoplay=!0,t.load()}},f=m,p=(n("6d1e"),n("2877")),v=Object(p["a"])(f,a,i,!1,null,"4c20e5bc",null);e["default"]=v.exports},d245:function(t,e,n){t.exports=n.p+"img/buy.55e650c6.png"},df7c:function(t,e,n){(function(t){function n(t,e){for(var n=0,a=t.length-1;a>=0;a--){var i=t[a];"."===i?t.splice(a,1):".."===i?(t.splice(a,1),n++):n&&(t.splice(a,1),n--)}if(e)for(;n--;n)t.unshift("..");return t}var a=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,i=function(t){return a.exec(t).slice(1)};function s(t,e){if(t.filter)return t.filter(e);for(var n=[],a=0;a<t.length;a++)e(t[a],a,t)&&n.push(t[a]);return n}e.resolve=function(){for(var e="",a=!1,i=arguments.length-1;i>=-1&&!a;i--){var o=i>=0?arguments[i]:t.cwd();if("string"!==typeof o)throw new TypeError("Arguments to path.resolve must be strings");o&&(e=o+"/"+e,a="/"===o.charAt(0))}return e=n(s(e.split("/"),function(t){return!!t}),!a).join("/"),(a?"/":"")+e||"."},e.normalize=function(t){var a=e.isAbsolute(t),i="/"===o(t,-1);return t=n(s(t.split("/"),function(t){return!!t}),!a).join("/"),t||a||(t="."),t&&i&&(t+="/"),(a?"/":"")+t},e.isAbsolute=function(t){return"/"===t.charAt(0)},e.join=function(){var t=Array.prototype.slice.call(arguments,0);return e.normalize(s(t,function(t,e){if("string"!==typeof t)throw new TypeError("Arguments to path.join must be strings");return t}).join("/"))},e.relative=function(t,n){function a(t){for(var e=0;e<t.length;e++)if(""!==t[e])break;for(var n=t.length-1;n>=0;n--)if(""!==t[n])break;return e>n?[]:t.slice(e,n-e+1)}t=e.resolve(t).substr(1),n=e.resolve(n).substr(1);for(var i=a(t.split("/")),s=a(n.split("/")),o=Math.min(i.length,s.length),r=o,c=0;c<o;c++)if(i[c]!==s[c]){r=c;break}var l=[];for(c=r;c<i.length;c++)l.push("..");return l=l.concat(s.slice(r)),l.join("/")},e.sep="/",e.delimiter=":",e.dirname=function(t){var e=i(t),n=e[0],a=e[1];return n||a?(a&&(a=a.substr(0,a.length-1)),n+a):"."},e.basename=function(t,e){var n=i(t)[2];return e&&n.substr(-1*e.length)===e&&(n=n.substr(0,n.length-e.length)),n},e.extname=function(t){return i(t)[3]};var o="b"==="ab".substr(-1)?function(t,e,n){return t.substr(e,n)}:function(t,e,n){return e<0&&(e=t.length+e),t.substr(e,n)}}).call(this,n("4362"))},e7e0:function(t,e,n){t.exports=n.p+"media/Allday.cb54a4f9.mp4"}}]);
//# sourceMappingURL=chunk-67febdc5.091bdbed.js.map
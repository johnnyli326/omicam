(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f1653560"],{"01ca":function(t,e,n){"use strict";var a=n("9862"),i=n.n(a);i.a},3241:function(t,e,n){t.exports=n.p+"img/buy.55e650c6.png"},"448c":function(t,e,n){t.exports=n.p+"img/teacher.74e9606d.png"},"584a":function(t,e){var n=t.exports={version:"2.6.5"};"number"==typeof __e&&(__e=n)},6274:function(t,e,n){t.exports=n.p+"img/eva.601aa8b4.png"},"6cbf":function(t,e,n){t.exports=n.p+"img/more.88852562.png"},9862:function(t,e,n){},"9cae":function(t,e,n){"use strict";(function(t,a){var i=n("f499"),s=n.n(i),o=(n("cadf"),n("551c"),n("f751"),n("097d"),n("1157")),r=n.n(o);n("555f"),n("ea32");e["a"]={name:"Home",data:function(){return{stories:[{name:"Teacher Vane – Travelholic",imgSrc:n("448c")},{name:"MoLong – Wargamer",imgSrc:n("ac9c")},{name:"Eva — Divingholic",imgSrc:n("6274")}]}},methods:{moveTo:function(t){console.log(t);this.$router.push("/omicam"),setTimeout(function(){var e=r()("section[id='"+t+"']");r()("html, body").stop().animate({scrollTop:e.offset().top-50},1e3)},300)}},created:function(){window.scrollTo(0,0)},mounted:function(){function e(n,i,o){t&&n instanceof a&&(n=n.get(0).id);var r=document.getElementById(n);r&&"IFRAME"!=r.tagName.toUpperCase()&&(r=r.getElementsByTagName("iframe")[0]),e.queue||(e.queue={});var c=e.queue[n],l="complete"==document.readyState;if(l&&!r)window.console&&console.log("callPlayer: Frame not found; id="+n),c&&clearInterval(c.poller);else if("listening"===i)r&&r.contentWindow&&(i='{"event":"listening","id":'+s()(""+n)+"}",r.contentWindow.postMessage(i,"*"));else if(l&&(!r||r.contentWindow&&(!c||c.ready))&&(c&&c.ready||"function"!==typeof i)){if(r&&r.contentWindow){if(i.call)return i();r.contentWindow.postMessage(s()({event:"command",func:i,args:o||[],id:n}),"*")}}else c||(c=e.queue[n]=[]),c.push([i,o]),"poller"in c||(c.poller=setInterval(function(){e(n,"listening")},250),m(1,function t(a){if(!r){if(r=document.getElementById(n),!r)return;if("IFRAME"!=r.tagName.toUpperCase()&&(r=r.getElementsByTagName("iframe")[0],!r))return}if(a.source===r.contentWindow){clearInterval(c.poller),c.ready=!0,m(0,t);while(tmp=c.shift())e(n,tmp[0],tmp[1])}},!1));function m(t,e){var n=t?window.addEventListener:window.removeEventListener;n?n("message",e,!1):(t?window.attachEvent:window.detachEvent)("onmessage",e)}}r()(document).ready(function(){r()("#commercialModal").on("show.bs.modal",function(){var t=r()("#commercialModal iframe").attr("src");r()("#commercialModal iframe").attr("src",t+"&amp;autoplay=1")}),r()("#commercialModal").on("hidden.bs.modal",function(){e("yt-player","stopVideo")});var t=r()("#owl-demo");function n(){r()(window).width()<=768?r()(".section8-text").remove().insertAfter(r()(".section8-img")):r()(".section8-text").remove().insertBefore(r()(".section8-img")),r()(window).width()<=768?r()(".section7-text").remove().insertAfter(r()(".section7-img")):r()(".section7-text").remove().insertBefore(r()(".section7-img")),r()(window).width()<=768?r()(".shaking").remove().insertAfter(r()(".shaking-text")):r()(".shaking").remove().insertBefore(r()(".shaking-text"))}t.owlCarousel({responsive:{0:{items:1},600:{items:2},1000:{items:3}},loop:!0}),r()(".next").click(function(){t.trigger("next.owl.carousel")}),r()(".prev").click(function(){t.trigger("prev.owl.carousel")}),n()});var n=document.querySelector(".loop-video");n.autoplay=!0,n.load()}}}).call(this,n("1157"),n("1157"))},a21f:function(t,e,n){var a=n("584a"),i=a.JSON||(a.JSON={stringify:JSON.stringify});t.exports=function(t){return i.stringify.apply(i,arguments)}},ac9c:function(t,e,n){t.exports=n.p+"img/MoLong.011fa7a6.jpg"},bb51:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._m(0),a("section",{staticClass:"section section2"},[a("div",{staticClass:"section-text"},[a("h2",{staticClass:"section-title"},[t._v("\n        OMICAM\n      ")]),a("p",{staticClass:"text-center section-subTitle"},[t._v("\n        The easiest way to immersively record your life.\n      ")]),a("img",{staticClass:"link-icon-btn",attrs:{src:n("3241"),alt:"buy_icon",usemap:"#btnmap_2"}}),a("map",{attrs:{name:"btnmap_2"}},[a("area",{staticClass:"map-area",attrs:{shape:"circle",coords:"37.5, 37.5, 37.5",alt:""},on:{click:function(e){return t.$router.push("/shop")}}})])])]),a("section",{staticClass:"section section3"},[a("div",{staticClass:"section-text"},[a("h2",{staticClass:"section-title"},[t._v("\n        DESIGN TO BE WORN\n      ")]),a("p",{staticClass:"text-center section-subTitle"},[t._v("\n        Free your hand to enjoy the life while recording.\n      ")]),a("img",{staticClass:"link-icon-btn",attrs:{src:n("6cbf"),alt:"more_icon",usemap:"#btnmap_3"}}),a("map",{attrs:{name:"btnmap_3"}},[a("area",{staticClass:"map-area",attrs:{shape:"circle",coords:"37.5, 37.5, 37.5",alt:""},on:{click:function(e){return e.preventDefault(),t.moveTo("wear")}}})])])]),a("section",{staticClass:"section section4"},[a("div",{staticClass:"section-text"},[a("h2",{staticClass:"section-title"},[t._v("\n        WIDER VIEW THAN EVER\n      ")]),a("p",{staticClass:"text-center section-subTitle"},[t._v("\n        Extended your first person point of view by 240 Degree FoV\n      ")]),a("img",{staticClass:"link-icon-btn",attrs:{src:n("6cbf"),alt:"more_icon",usemap:"#btnmap_4"}}),a("map",{attrs:{name:"btnmap_4"}},[a("area",{staticClass:"map-area",attrs:{shape:"circle",coords:"37.5, 37.5, 37.5",alt:""},on:{click:function(e){return e.preventDefault(),t.moveTo("240")}}})])])]),a("section",{staticClass:"section section5"},[a("div",{staticClass:"video-wrap"},[a("video",{staticClass:"loop-video",attrs:{loop:"",muted:"",playsinline:""},domProps:{muted:!0}},[a("source",{attrs:{src:n("e7e0"),type:"video/mp4"}})])]),t._m(1)]),t._m(2),a("section",{staticClass:"section section7"},[a("div",{staticClass:"row mr-0 ml-0 section-row"},[a("div",{staticClass:"col-md-6 d-flex justify-content-center align-items-center\n      h-100"},[a("div",{staticClass:"section-text m-3"},[a("h2",{staticClass:"section-title"},[t._v("WATCH & SHARE ANY TIME")]),a("p",{staticClass:"section-subTitle"},[t._v("\n          Watch and share your VR experience\n          thru OMI Studio on different platforms.\n          ")]),a("img",{staticClass:"link-icon-btn",attrs:{src:n("6cbf"),alt:"more_icon",usemap:"#btnmap_7"}}),a("map",{attrs:{name:"btnmap_7"}},[a("area",{staticClass:"map-area",attrs:{shape:"circle",coords:"37.5, 37.5, 37.5",alt:""},on:{click:function(e){return e.preventDefault(),t.$router.push("/omi-studio")}}})])])]),a("div",{staticClass:"col-md-6 section7-img\n        d-flex justify-content-center align-items-center\n        h-100"})])]),a("section",{staticClass:"section section8"},[a("div",{staticClass:"row mr-0 ml-0 section-row"},[a("div",{staticClass:"col-md-6 section8-img\n        d-flex justify-content-center align-items-center\n        h-100"}),a("div",{staticClass:"col-md-6 d-flex justify-content-center align-items-center\n        h-100"},[a("div",{staticClass:"section-text m-3"},[a("h2",{staticClass:"section-title"},[t._v("OmiCam")]),a("p",{staticClass:"section-subTitle"},[t._v("\n            Simply Create Your Immersive Life Memory.\n          ")]),a("img",{staticClass:"link-icon-btn",attrs:{src:n("3241"),alt:"more_icon",usemap:"#btnmap_8"}}),a("map",{attrs:{name:"btnmap_8"}},[a("area",{staticClass:"map-area",attrs:{shape:"circle",coords:"37.5, 37.5, 37.5",alt:""},on:{click:function(e){return e.preventDefault(),t.$router.push("/omicam")}}})])])])])]),a("section",{staticClass:"section9"},[a("h2",{staticClass:"section-title text-center mb-4"},[t._v("OMI STORY")]),a("div",{staticClass:"owl-carousel owl-theme",attrs:{id:"owl-demo"}},t._l(t.stories,function(e,n){return a("div",{key:n,staticClass:"item",style:{backgroundImage:"url("+e.imgSrc+")"}},[a("router-link",{staticClass:"d-inline-block",attrs:{to:"/omistory"}},[a("div",{staticClass:"slide-up"},[a("span",[t._v(t._s(e.name))])])])],1)}),0),t._m(3)]),t._m(4)])},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"section section1"},[n("div",{staticClass:"banner"}),n("div",{staticClass:"section-text"},[n("h2",{staticClass:"section-title"},[t._v("\n        CAPTURE.\n        "),n("br",{staticClass:"rwd"}),t._v("\n        SHARE.\n        "),n("br",{staticClass:"rwd"}),t._v("\n        THE WORLD YOU SEE.\n      ")]),n("p",{staticClass:"section-subTitle"},[t._v("OmiCam | Wearable VR Camera")]),n("button",{staticClass:"link-icon-btn clickable play-btn",attrs:{"data-toggle":"modal","data-target":"#commercialModal"}})])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"section-text"},[n("h2",{staticClass:"section-title"},[t._v("\n        SUPPORT WHOLE DAY\n      ")]),n("p",{staticClass:"text-center section-subTitle"},[t._v("\n        Up to 15 hours operating without worrying about the battery.\n      ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"section section6"},[n("div",{staticClass:"section-text"},[n("h2",{staticClass:"section-title"},[t._v("\n        NO SHAKING VIDEO\n      ")]),n("p",{staticClass:"text-center section-subTitle"},[t._v("\n        Always manitain image steady & stable in any activities.\n      ")]),n("button",{staticClass:"link-icon-btn clickable play-btn",attrs:{"data-toggle":"modal","data-target":"#commercialModal"}})])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"customNavigation"},[n("a",{staticClass:"btn prev",attrs:{"aria-label":"Previous"}}),n("a",{staticClass:"btn next",attrs:{"aria-label":"Next"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"modal fade",attrs:{id:"commercialModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalCenterTitle","aria-hidden":"true"}},[n("div",{staticClass:"modal-dialog modal-dialog-centered",attrs:{role:"document"}},[n("div",{staticClass:"modal-content bg-transparent border-0"},[n("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[n("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])]),n("div",{staticClass:"modal-body text-center p-0",attrs:{id:"yt-player"}},[n("iframe",{staticClass:"brand-film",attrs:{src:"https://www.youtube.com/embed/ETda2w2_81o?enablejsapi=1",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})])])])])}],s=n("9cae"),o=s["a"],r=(n("01ca"),n("2877")),c=Object(r["a"])(o,a,i,!1,null,"1f58705e",null);e["default"]=c.exports},e7e0:function(t,e,n){t.exports=n.p+"media/Allday.cb54a4f9.mp4"},ea32:function(t,e,n){"use strict";var a=n("1157"),i=n.n(a);function s(t){var e=this;if(1===arguments.length&&"function"===typeof t&&(t=[t]),!(t instanceof Array))throw new SyntaxError("isInViewport: Argument(s) passed to .do/.run should be a function or an array of functions");return t.forEach(function(t){"function"!==typeof t?(console.warn("isInViewport: Argument(s) passed to .do/.run should be a function or an array of functions"),console.warn("isInViewport: Ignoring non-function values in array and moving on")):[].slice.call(e).forEach(function(e){return t.call(i()(e))})}),this}function o(t){var e=i()("<div></div>").css({width:"100%"});t.append(e);var n=t.width()-e.width();return e.remove(),n}function r(t,e){var n=t.getBoundingClientRect(),a=n.top,s=n.bottom,c=n.left,l=n.right,m=i.a.extend({tolerance:0,viewport:window},e),u=!1,d=m.viewport.jquery?m.viewport:i()(m.viewport);d.length||(console.warn("isInViewport: The viewport selector you have provided matches no element on page."),console.warn("isInViewport: Defaulting to viewport as window"),d=i()(window));var p=d.height(),f=d.width(),v=d[0].toString();if(d[0]!==window&&"[object Window]"!==v&&"[object DOMWindow]"!==v){var g=d[0].getBoundingClientRect();a-=g.top,s-=g.top,c-=g.left,l-=g.left,r.scrollBarWidth=r.scrollBarWidth||o(d),f-=r.scrollBarWidth}return m.tolerance=~~Math.round(parseFloat(m.tolerance)),m.tolerance<0&&(m.tolerance=p+m.tolerance),l<=0||c>=f?u:(u=m.tolerance?a<=m.tolerance&&s>=m.tolerance:s>0&&a<=p,u)}function c(t){if(t){var e=t.split(",");return 1===e.length&&isNaN(e[0])&&(e[1]=e[0],e[0]=void 0),{tolerance:e[0]?e[0].trim():void 0,viewport:e[1]?i()(e[1].trim()):void 0}}return{}}
/**
 * @author  Mudit Ameta
 * @license https://github.com/zeusdeux/isInViewport/blob/master/license.md MIT
 */
i.a.extend(i.a.expr.pseudos||i.a.expr[":"],{"in-viewport":i.a.expr.createPseudo?i.a.expr.createPseudo(function(t){return function(e){return r(e,c(t))}}):function(t,e,n){return r(t,c(n[3]))}}),i.a.fn.isInViewport=function(t){return this.filter(function(e,n){return r(n,t)})},i.a.fn.run=s},f499:function(t,e,n){t.exports=n("a21f")}}]);
//# sourceMappingURL=chunk-f1653560.447fd07c.js.map
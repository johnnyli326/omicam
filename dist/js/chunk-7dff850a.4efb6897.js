(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7dff850a"],{"0644":function(t,e,a){"use strict";var n=a("bb40"),s=a.n(n);s.a},"448c":function(t,e,a){t.exports=a.p+"img/teacher.74e9606d.png"},"584a":function(t,e){var a=t.exports={version:"2.6.5"};"number"==typeof __e&&(__e=a)},6274:function(t,e,a){t.exports=a.p+"img/eva.601aa8b4.png"},"641e":function(t,e,a){t.exports=a.p+"img/img-7.7434502e.png"},"6d9a":function(t,e,a){t.exports=a.p+"img/img-8.8f762d86.jpg"},"9ae5":function(t,e,a){t.exports=a.p+"img/img-2.b9337172.jpg"},"9cae":function(t,e,a){"use strict";(function(t,n){var s=a("f499"),i=a.n(s),c=(a("cadf"),a("551c"),a("f751"),a("097d"),a("1157")),o=a.n(c);a("555f");e["a"]={name:"Home",data:function(){return{stories:[{name:"Teacher Vane – Travelholic",imgSrc:a("448c")},{name:"MoLong – Wargamer",imgSrc:a("ac9c")},{name:"Eva — Divingholic",imgSrc:a("6274")}]}},methods:{moveTo:function(t){console.log(t);this.$router.push("/omicam"),setTimeout(function(){var e=o()("section[id='"+t+"']");o()("html, body").stop().animate({scrollTop:e.offset().top-50},1e3)},300)}},created:function(){window.scrollTo(0,0)},mounted:function(){function e(a,s,c){t&&a instanceof n&&(a=a.get(0).id);var o=document.getElementById(a);o&&"IFRAME"!=o.tagName.toUpperCase()&&(o=o.getElementsByTagName("iframe")[0]),e.queue||(e.queue={});var r=e.queue[a],l="complete"==document.readyState;if(l&&!o)window.console&&console.log("callPlayer: Frame not found; id="+a),r&&clearInterval(r.poller);else if("listening"===s)o&&o.contentWindow&&(s='{"event":"listening","id":'+i()(""+a)+"}",o.contentWindow.postMessage(s,"*"));else if(l&&(!o||o.contentWindow&&(!r||r.ready))&&(r&&r.ready||"function"!==typeof s)){if(o&&o.contentWindow){if(s.call)return s();o.contentWindow.postMessage(i()({event:"command",func:s,args:c||[],id:a}),"*")}}else r||(r=e.queue[a]=[]),r.push([s,c]),"poller"in r||(r.poller=setInterval(function(){e(a,"listening")},250),m(1,function t(n){if(!o){if(o=document.getElementById(a),!o)return;if("IFRAME"!=o.tagName.toUpperCase()&&(o=o.getElementsByTagName("iframe")[0],!o))return}if(n.source===o.contentWindow){clearInterval(r.poller),r.ready=!0,m(0,t);while(tmp=r.shift())e(a,tmp[0],tmp[1])}},!1));function m(t,e){var a=t?window.addEventListener:window.removeEventListener;a?a("message",e,!1):(t?window.attachEvent:window.detachEvent)("onmessage",e)}}o()(document).ready(function(){o()("#commercialModal").on("show.bs.modal",function(){var t=o()("#commercialModal iframe").attr("src");o()("#commercialModal iframe").attr("src",t+"&amp;autoplay=1")}),o()("#commercialModal").on("hidden.bs.modal",function(){e("yt-player","stopVideo")});var t=o()("#owl-demo");t.owlCarousel({responsive:{0:{items:1},600:{items:2},1000:{items:3}},loop:!0}),o()(".next").click(function(){t.trigger("next.owl.carousel")}),o()(".prev").click(function(){t.trigger("prev.owl.carousel")})})}}}).call(this,a("1157"),a("1157"))},a21f:function(t,e,a){var n=a("584a"),s=n.JSON||(n.JSON={stringify:JSON.stringify});t.exports=function(t){return s.stringify.apply(s,arguments)}},a227:function(t,e,a){t.exports=a.p+"img/btn.2686989a.png"},ac9c:function(t,e,a){t.exports=a.p+"img/MoLong.011fa7a6.jpg"},bb40:function(t,e,a){},bb51:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._m(0),n("section",{staticClass:"section2"},[n("div",{staticClass:"row mr-0 ml-0"},[n("div",{staticClass:"col-md-7 d-flex justify-content-center align-items-center"},[n("div",{staticClass:"text-center"},[n("h2",{staticClass:"section-title-text"},[t._v("\n            OMICAM\n          ")]),n("p",{staticClass:"text-center section-content-text"},[t._v("\n            The easiest way to immersively record your life.\n          ")]),n("router-link",{staticClass:"btn btn-outline-warning",attrs:{to:"/omicam"}},[t._v("\n            BUY NOW\n          ")])],1)]),t._m(1)])]),n("section",{staticClass:"section3"},[n("div",{staticClass:"d-flex align-items-center justify-content-center m-3 w-50"},[n("div",{staticClass:"text-center"},[n("h2",{staticClass:"section-title-text"},[t._v("DESIGN TO BE WORN")]),n("p",{staticClass:"section-content-text"},[t._v("\n        Free your hand to enjoy the life while recording.\n        ")]),n("a",{staticClass:"btn btn-outline-warning",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.moveTo("wear")}}},[t._v("\n          MORE\n        ")])])])]),n("section",{staticClass:"section4"},[n("div",{staticClass:"text-center slogan"},[n("h2",{staticClass:"section-title-text"},[t._v("LOOK WIDER")]),n("p",{staticClass:"section-content-text"},[t._v("\n        Recording everything even something you are not aware in your sight\n      ")]),n("div",[n("a",{staticClass:"btn btn-outline-warning",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.moveTo("240")}}},[t._v("\n          MORE\n        ")])])])]),n("section",{staticClass:"section5"},[n("div",{staticClass:"row h-100 m-0"},[t._m(2),n("div",{staticClass:"col-md-6 d-flex justify-content-center\n      align-items-center"},[n("video",{attrs:{width:"80%",autoplay:"",loop:"",muted:""},domProps:{muted:!0}},[n("source",{attrs:{src:a("e7e0"),type:"video/mp4"}})])])])]),t._m(3),n("section",{staticClass:"section7",staticStyle:{background:"#fafafa"}},[n("div",{staticClass:"row mr-0 ml-0 h-100"},[t._m(4),n("div",{staticClass:"col-md-6 d-flex justify-content-center align-items-center"},[n("div",{staticClass:"text-center m-3"},[n("h2",{staticClass:"section-title-text"},[t._v("WATCH & SHARE ANY TIME")]),n("p",{staticClass:"section-content-text"},[t._v("\n          Watch and share your VR experience\n          thru OMI Studio on different platforms.\n          ")]),n("router-link",{staticClass:"btn btn-outline-warning",attrs:{to:"/omi-studio"}},[t._v("\n          SEE MORE\n          ")])],1)])])]),n("section",{staticClass:"section8 container"},[n("div",{staticClass:"row"},[t._m(5),n("div",{staticClass:"col-md-8 d-flex justify-content-center align-items-center"},[n("div",{staticClass:"text-center m-3"},[n("h2",{staticClass:"section-title-text"},[t._v("OmiCam")]),n("p",{staticClass:"section-content-text"},[t._v("\n            Simply Create Your Immersive Life Moemory.\n          ")]),n("router-link",{staticClass:"btn btn-link btn-outline-primary",attrs:{to:"/product/omicam-wearable-vr-camera"}},[t._v("\n              BUY NOW\n            ")])],1)])])]),n("section",{staticClass:"section9"},[n("h2",{staticClass:"section-title-text text-center"},[t._v("OMI STORY")]),n("div",{staticClass:"owl-carousel owl-theme",attrs:{id:"owl-demo"}},t._l(t.stories,function(e,a){return n("div",{key:a,staticClass:"item",style:{backgroundImage:"url("+e.imgSrc+")"}},[n("div",{staticClass:"slide-up"},[n("span",[t._v(t._s(e.name))])])])}),0),t._m(6)]),t._m(7)])},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"header text-center"},[n("p",{staticClass:"header-text display-5 header-title"},[t._v("\n      CAPTURE. SHARE. THE WORLD YOU SEE\n      "),n("br"),t._v("\n      OmiCam | Wearable VR Camera\n    ")]),n("img",{attrs:{id:"mapbtn",src:a("a227"),alt:"btn",usemap:"#btnmap"}}),n("map",{attrs:{name:"btnmap"}},[n("area",{staticClass:"map-area",attrs:{shape:"circle",coords:"40, 40, 33",alt:"","data-toggle":"modal","data-target":"#commercialModal"}})])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-md-5 text-center"},[n("img",{attrs:{src:a("9ae5"),alt:""}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-md-6 d-flex justify-content-center\n      align-items-center"},[a("div",{staticClass:"text-center"},[a("h2",{staticClass:"section-title-text"},[t._v("SUPPORT WHOLE DAY")]),a("p",{staticClass:"section-content-text"},[t._v("\n            Up to 15hours operating without worrying about the battery.\n          ")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"section6"},[a("div",{staticClass:"d-flex align-items-center justify-content-end m-3 h-100"},[a("div",{staticClass:"text-center w-50"},[a("h2",{staticClass:"section-title-text text-white"},[t._v("NO SHAKING VIDEO")]),a("p",{staticClass:"text-white section-content-text"},[t._v("\n          Always manitain image steady & stable in any activities.\n        ")])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-md-6 text-center"},[n("img",{attrs:{src:a("641e"),width:"90%",alt:""}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-md-4"},[n("img",{attrs:{src:a("6d9a"),alt:"products-img"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"customNavigation"},[a("a",{staticClass:"btn prev",attrs:{"aria-label":"Previous"}},[a("i",{staticClass:"fas fa-angle-left fa-2x"})]),a("a",{staticClass:"btn next",attrs:{"aria-label":"Next"}},[a("i",{staticClass:"fas fa-angle-right fa-2x"})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal fade",attrs:{id:"commercialModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalCenterTitle","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog modal-dialog-centered",attrs:{role:"document"}},[a("div",{staticClass:"modal-content bg-transparent border-0"},[a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])]),a("div",{staticClass:"modal-body text-center p-0",attrs:{id:"yt-player"}},[a("iframe",{staticClass:"brand-film",attrs:{src:"https://www.youtube.com/embed/ETda2w2_81o?enablejsapi=1",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})])])])])}],i=a("9cae"),c=i["a"],o=(a("0644"),a("2877")),r=Object(o["a"])(c,n,s,!1,null,"b5c1f546",null);e["default"]=r.exports},e7e0:function(t,e,a){t.exports=a.p+"media/Allday.54e727bb.mp4"},f499:function(t,e,a){t.exports=a("a21f")}}]);
//# sourceMappingURL=chunk-7dff850a.4efb6897.js.map
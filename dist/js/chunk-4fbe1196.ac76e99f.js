(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4fbe1196"],{"0c7c":function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("Navbar"),s("router-view",{staticClass:"content"}),s("Footer")],1)},r=[],i=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"nav-wrap fixed-top"},[s("nav",{staticClass:"navbar"},[s("div",[s("router-link",{staticClass:"navbar-brand d-block p-0",attrs:{to:"/"}},[s("h1",{staticClass:"logo"},[t._v("OmiCam")])])],1),s("ul",{staticClass:"list-unstyled mobile-icon ml-auto"},[s("li",[s("router-link",{staticClass:"cart mr-3",class:{active:"cart"==t.$route.name},attrs:{to:"/cart"}},[s("i",{staticClass:"fas fa-shopping-cart"})])],1),t._m(0)]),s("ul",{staticClass:"top-menu list-unstyled"},[s("li",{staticClass:"menu-item"},[s("router-link",{class:{active:"Omicam"==t.$route.name},attrs:{to:"/omicam"}},[t._v("\n        OMICAM\n        ")])],1),s("li",{staticClass:"menu-item"},[s("router-link",{class:{active:"OmiStudio"==t.$route.name},attrs:{to:"/omi-studio"}},[t._v("\n        OMI STUDIO\n        ")])],1),s("li",{staticClass:"menu-item"},[s("router-link",{class:{active:"News"==t.$route.name},attrs:{to:"/news"}},[t._v("\n        NEWS\n        ")])],1),s("li",{staticClass:"menu-item"},[s("router-link",{class:{active:"OmiStory"==t.$route.name},attrs:{to:"/omistory"}},[t._v("\n        OMI STORY\n        ")])],1),t._m(1),s("li",{staticClass:"menu-item"},[s("router-link",{class:{active:"Contact"==t.$route.name},attrs:{to:"/contact"}},[t._v("\n        CONTACT\n        ")])],1)])])])},n=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("li",[s("button",{staticClass:"hamburger-btn"},[s("span",{staticClass:"icon-bar top-bar bg-primary"}),s("span",{staticClass:"icon-bar middle-bar bg-primary"}),s("span",{staticClass:"icon-bar bottom-bar bg-primary"})])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("li",{staticClass:"menu-item"},[s("a",{attrs:{href:"https://support.omicam.com/portal/home",target:"_blank"}},[t._v("\n          SUPPORT\n        ")])])}],o=s("1157"),c=s.n(o),l={name:"Navbar",mounted:function(){c()(document).ready(function(){c()(".hamburger-btn").click(function(){c()(this).toggleClass("active"),c()(".top-menu").hasClass("show")?(c()(".top-menu").removeClass("show").addClass("hide"),c()("body").css("overflow","auto"),c()(".navbar").css("background-color","rgba(0, 0, 0)"),c()(".nav-wrap").css("height","auto")):(c()("body").css("overflow","hidden"),c()(".top-menu").removeClass("hide").addClass("show"),c()(".navbar").css("background-color","rgba(0, 0, 0, 0.9)"),c()(".navbar").css("position","absolute"),c()(".nav-wrap").css("height","420px;"))}),c()(".menu-item").click(function(){c()(".hamburger-btn").removeClass("active"),c()(".top-menu").toggleClass("show"),c()("body").css("overflow","auto"),c()(".navbar").css("background-color","rgba(0, 0, 0)"),c()(".nav-wrap").css("height","auto")}),c()(".logo").click(function(){c()(".hamburger-btn").removeClass("active"),c()(".top-menu").removeClass("show"),c()("body").css("overflow","auto"),c()(".navbar").css("background-color","rgba(0, 0, 0)"),c()(".nav-wrap").css("height","auto")}),c()(window).resize(function(){c()(window).width()>=1e3&&(c()(".top-menu").removeClass("show").removeClass("hide"),c()(".hamburger-btn").removeClass("active"),c()("body").css("overflow","auto"),c()(".navbar").css("background-color","rgba(0, 0, 0)"),c()(".nav-wrap").css("height","auto"))})})}},u=l,m=(s("9257"),s("2877")),v=Object(m["a"])(u,i,n,!1,null,"bd570904",null),b=v.exports,f=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"wrap w-100"},[s("div",{staticClass:"row m-0"},[t._m(0),t._m(1),s("div",{staticClass:"mt-3 text-center w-100"},[s("div",{staticClass:"copyright"},[t._v("\n          Copyright © 2019 Sightour Inc. All rights reserved\n        ")]),s("router-link",{staticClass:"mr-2 info-link",attrs:{to:"/about"}},[t._v("\n          About\n        ")]),s("router-link",{staticClass:"mr-2 info-link",attrs:{to:"/privacy-policy"}},[t._v("\n          Privacy Policy\n        ")]),s("router-link",{staticClass:"mr-2 info-link",attrs:{to:"/terms-of-service"}},[t._v("\n          Terms of service\n        ")])],1)])])},d=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"col-md-8"},[s("div",{staticClass:"form-group ml-auto subscribe"},[s("div",{staticClass:"text-center"},[s("label",{staticClass:"text-primary",attrs:{for:"e-mail"}},[t._v("SUBSCRIBE NEWSLETTER")])]),s("div",{staticClass:"input-group mb-3"},[s("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"Enter your e-mail address","aria-label":"Enter your e-mail address",name:"e-mail",id:"e-mail"}}),s("div",{staticClass:"input-group-append"},[s("div",{staticClass:"btn btn-outline-primary"},[t._v("SUBSCRIBE")])])])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"col-md-4\n      d-flex\n      justify-content-center\n      align-items-center"},[s("div",[s("a",{staticClass:"facebook mr-2",attrs:{href:"https://www.facebook.com/OMICAMGLOBAL",target:"_blank"}},[s("i",{staticClass:"fab fa-facebook-f fa-3x"})]),s("a",{staticClass:"youtube mr-2",attrs:{href:"https://www.youtube.com/channel/UC_ZWi0Il61IojlC5V1Odojw",target:"_blank"}},[s("i",{staticClass:"fab fa-youtube fa-3x"})]),s("a",{staticClass:"twitter mr-2",attrs:{href:"https://twitter.com/omicamj",target:"_blank"}},[s("i",{staticClass:"fab fa-twitter fa-3x"})]),s("a",{staticClass:"line mr-2",attrs:{href:"https://line.me/R/ti/p/hUf6J2xDQ9",target:"_blank"}},[s("i",{staticClass:"fab fa-line fa-3x"})])])])}],C={name:"footerSection"},p=C,h=(s("d947"),Object(m["a"])(p,f,d,!1,null,"9815e7d2",null)),w=h.exports,g={name:"home",components:{Navbar:b,Footer:w}},_=g,k=(s("1341"),Object(m["a"])(_,e,r,!1,null,"624f77e0",null));a["default"]=k.exports},1341:function(t,a,s){"use strict";var e=s("e619"),r=s.n(e);r.a},"78a3":function(t,a,s){},9257:function(t,a,s){"use strict";var e=s("78a3"),r=s.n(e);r.a},d947:function(t,a,s){"use strict";var e=s("f29c"),r=s.n(e);r.a},e619:function(t,a,s){},f29c:function(t,a,s){}}]);
//# sourceMappingURL=chunk-4fbe1196.ac76e99f.js.map
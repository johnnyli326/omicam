(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-affe1320"],{"0c7c":function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("Navbar"),s("router-view",{staticClass:"content"}),s("Footer")],1)},r=[],o=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"nav-wrap fixed-top"},[s("nav",{staticClass:"navbar"},[s("div",[s("router-link",{staticClass:"navbar-brand d-block p-0",attrs:{to:"/"}},[s("h1",{staticClass:"logo"},[t._v("OmiCam")])])],1),s("ul",{staticClass:"list-unstyled mobile-icon ml-auto"},[s("li",[s("router-link",{staticClass:"cart mr-3",attrs:{to:"/"}},[s("i",{staticClass:"fas fa-shopping-cart"})])],1),t._m(0)]),s("ul",{staticClass:"top-menu list-unstyled"},[s("li",{staticClass:"menu-item"},[s("router-link",{attrs:{to:"/omicam"}},[t._v("OmiCam")])],1),s("li",{staticClass:"menu-item"},[s("router-link",{attrs:{to:"/omi-studio"}},[t._v("Omi Studio")])],1),s("li",{staticClass:"menu-item"},[s("router-link",{attrs:{to:"/news"}},[t._v("News")])],1),s("li",{staticClass:"menu-item"},[s("router-link",{attrs:{to:"/omistory"}},[t._v("Omi Story")])],1),s("li",{staticClass:"menu-item"},[s("router-link",{attrs:{to:"/support"}},[t._v("Support")])],1),s("li",{staticClass:"menu-item"},[s("router-link",{attrs:{to:"/contact"}},[t._v("Contact")])],1)])])])},i=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("li",[s("button",{staticClass:"hamburger-btn"},[s("span",{staticClass:"icon-bar top-bar bg-primary"}),s("span",{staticClass:"icon-bar middle-bar bg-primary"}),s("span",{staticClass:"icon-bar bottom-bar bg-primary"})])])}],c=s("1157"),n=s.n(c),l={name:"Navbar",mounted:function(){var t=this;n()(document).ready(function(){n()(".hamburger-btn").click(function(){n()(t).toggleClass("active"),n()(".top-menu").hasClass("show")?(n()(".top-menu").removeClass("show").addClass("hide"),n()("body").css("overflow","auto"),n()(".navbar").css("background-color","rgba(0, 0, 0)"),n()(".nav-wrap").css("height","auto")):(n()("body").css("overflow","hidden"),n()(".top-menu").removeClass("hide").addClass("show"),n()(".navbar").css("background-color","rgba(0, 0, 0, 0.9)"),n()(".navbar").css("position","absolute"),n()(".nav-wrap").css("height","420px;"))}),n()(".menu-item").click(function(){n()(".hamburger-btn").toggleClass("active"),n()(".top-menu").toggleClass("show"),n()("body").css("overflow","auto"),n()(".navbar").css("background-color","rgba(0, 0, 0)"),n()(".nav-wrap").css("height","auto")}),n()(".logo").click(function(){n()(".hamburger-btn").removeClass("active"),n()(".top-menu").removeClass("show"),n()("body").css("overflow","auto"),n()(".navbar").css("background-color","rgba(0, 0, 0)"),n()(".nav-wrap").css("height","auto")}),n()(window).resize(function(){n()(window).width()>=1e3&&(n()(".top-menu").removeClass("show").removeClass("hide"),n()(".hamburger-btn").removeClass("active"),n()("body").css("overflow","auto"),n()(".navbar").css("background-color","rgba(0, 0, 0)"),n()(".nav-wrap").css("height","auto"))})})}},u=l,m=(s("2671"),s("2877")),b=Object(m["a"])(u,o,i,!1,null,"e9923c18",null),v=b.exports,p=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},d=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"wrap w-100"},[s("div",{staticClass:"row m-0"},[s("div",{staticClass:"col-md-6"},[s("div",{staticClass:"form-group"},[s("div",{staticClass:"text-center"},[s("label",{staticClass:"text-primary",attrs:{for:"e-mail"}},[t._v("SUBSCRIBE NEWSLETTER")])]),s("div",{staticClass:"input-group mb-3"},[s("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"Enter your e-mail address","aria-label":"Enter your e-mail address",name:"e-mail",id:"e-mail"}}),s("div",{staticClass:"input-group-append"},[s("div",{staticClass:"btn btn-outline-primary"},[t._v("SUBSCRIBE")])])])])]),s("div",{staticClass:"col-md-6 text-center"},[s("h2",{staticClass:"text-primary"},[t._v("FOLLOW US")]),s("div",[s("a",{staticClass:"facebook mr-2",attrs:{href:"https://www.facebook.com/OMICAMGLOBAL",target:"_blank"}},[s("i",{staticClass:"fab fa-facebook-f fa-3x"})]),s("a",{staticClass:"youtube mr-2",attrs:{href:"https://www.youtube.com/channel/UC_ZWi0Il61IojlC5V1Odojw",target:"_blank"}},[s("i",{staticClass:"fab fa-youtube fa-3x"})]),s("a",{staticClass:"vimeo mr-2",attrs:{href:"https://vimeo.com/user85700784",target:"_blank"}},[s("i",{staticClass:"fab fa-vimeo-square fa-3x"})]),s("a",{staticClass:"android mr-2",attrs:{href:"https://play.google.com/store/apps/details?id=com.sightour.app.omiStudio",target:"_blank"}},[s("i",{staticClass:"fab fa-android fa-3x"})]),s("a",{staticClass:"apple mr-2",attrs:{href:"https://itunes.apple.com/app/omi-studio/id1102399436",target:"_blank"}},[s("i",{staticClass:"fab fa-apple fa-3x"})]),s("a",{staticClass:"globe mr-2",attrs:{href:"https://support.omicam.com/portal/home",target:"_blank"}},[s("i",{staticClass:"fas fa-globe-americas fa-3x"})])])]),s("div",{staticClass:"col text-center my-3"},[s("a",{staticClass:"mr-3 text-secondary",attrs:{href:""}},[t._v("About")]),s("a",{staticClass:"mr-3 text-secondary",attrs:{href:""}},[t._v("Contact")]),s("a",{staticClass:"mr-3 text-secondary",attrs:{href:""}},[t._v("Privacy Policy")]),s("a",{staticClass:"mr-3 text-secondary",attrs:{href:""}},[t._v("Terms of service")])])])])}],f={name:"footerSection"},C=f,h=(s("73ca"),Object(m["a"])(C,p,d,!1,null,"88cb328a",null)),g=h.exports,w={name:"home",components:{Navbar:v,Footer:g}},_=w,y=(s("1341"),Object(m["a"])(_,e,r,!1,null,"624f77e0",null));a["default"]=y.exports},1341:function(t,a,s){"use strict";var e=s("e619"),r=s.n(e);r.a},2671:function(t,a,s){"use strict";var e=s("8367"),r=s.n(e);r.a},"5feb":function(t,a,s){},"73ca":function(t,a,s){"use strict";var e=s("5feb"),r=s.n(e);r.a},8367:function(t,a,s){},e619:function(t,a,s){}}]);
//# sourceMappingURL=chunk-affe1320.81578ef2.js.map
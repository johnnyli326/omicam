(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-884d9ce4"],{"78ef":function(t,e,r){"use strict";var a=r("bbe4"),s=r.n(a);s.a},a9c3:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"container tracking-wrap"},[r("nav",{attrs:{"aria-label":"breadcrumb"}},[r("ol",{staticClass:"breadcrumb bg-transparent"},[r("li",{staticClass:"breadcrumb-item"},[r("router-link",{attrs:{to:"/"}},[t._v("\n              HOME\n            ")])],1),r("li",{staticClass:"breadcrumb-item before active"},[r("router-link",{attrs:{to:"/shop"}},[t._v("\n              SHOP\n            ")])],1),r("li",{staticClass:"breadcrumb-item before active",attrs:{"aria-current":"page"}},[t._v("\n            ORDER TRACKING\n          ")])])]),r("section",{staticClass:"tracking-box"},[r("h5",{staticClass:"tracking-title"},[t._v("Track my order")]),r("label",{staticClass:"tracking-subtitle",attrs:{for:"orderId"}},[t._v("ORDER ID：")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.orderId,expression:"orderId"}],attrs:{type:"text",id:"orderId"},domProps:{value:t.orderId},on:{input:function(e){e.target.composing||(t.orderId=e.target.value)}}}),r("a",{staticClass:"track-btn",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.track(t.orderId)}}}),r("p",{staticStyle:{color:"gray"}},[t._v(t._s(t.message))])])])])},s=[],n={data:function(){return{orderId:"",message:""}},methods:{track:function(){var t=this,e=new XMLHttpRequest;e.open("get","https://www.omicam.com/_privateApi/omiOrderApi.php?id="+orderId,!0),e.send(null),e.onload=function(){console.log(e.response),t.message=e.response}}}},i=n,o=(r("78ef"),r("2877")),c=Object(o["a"])(i,a,s,!1,null,"d5e42a7c",null);e["default"]=c.exports},bbe4:function(t,e,r){}}]);
//# sourceMappingURL=chunk-884d9ce4.5229a3a6.js.map
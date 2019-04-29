(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-429dfd88"],{"79ad":function(t,e,a){},a9c3:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("loading",{attrs:{active:t.isLoading},on:{"update:active":function(e){t.isLoading=e}}}),a("div",{staticClass:"container tracking-wrap"},[a("nav",{attrs:{"aria-label":"breadcrumb"}},[a("ol",{staticClass:"breadcrumb bg-transparent"},[a("li",{staticClass:"breadcrumb-item"},[a("router-link",{attrs:{to:"/"}},[t._v("\n              HOME\n            ")])],1),a("li",{staticClass:"breadcrumb-item before active"},[a("router-link",{attrs:{to:"/shop"}},[t._v("\n              SHOP\n            ")])],1),a("li",{staticClass:"breadcrumb-item before active",attrs:{"aria-current":"page"}},[t._v("\n            ORDER TRACKING\n          ")])])]),a("section",{staticClass:"tracking-box"},[a("h5",{staticClass:"tracking-title"},[t._v(" Input Transaction ID from order receipt mail")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.orderId,expression:"orderId"}],attrs:{type:"text",id:"orderId"},domProps:{value:t.orderId},on:{keyup:function(e){return e.type.indexOf("key")||13===e.keyCode?t.track():null},input:function(e){e.target.composing||(t.orderId=e.target.value)}}}),a("a",{staticClass:"track-btn",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.track()}}}),t.ErrorMessage?a("p",{staticClass:"text-danger"},[t._v(t._s(t.ErrorMessage))]):t._e(),t.orderItems.length>0&&!t.ErrorMessage?a("div",{staticClass:"table-responsive mt-4"},[a("table",{staticClass:"tracking-table table"},[t._m(0),a("tbody",{staticClass:"table-body"},[a("tr",[a("td",[t._v(t._s(t.Email))]),a("td",[t._v(t._s(t.orderDate))]),a("td",[a("ul",{staticClass:"list-unstyled"},[t._l(t.orderItems,function(e){return a("li",{key:e.id},[t._v("\n                      "+t._s(e.name)+"\n                    ")])}),a("li",{staticClass:"text-success"},[t._v(t._s(t.promoteCode))])],2)]),a("td",[a("ul",{staticClass:"list-unstyled"},[t._l(t.orderItems,function(e){return a("li",{key:e.id},[t._v("\n                      "+t._s(e.quantity)+"\n                    ")])}),t.promoteCode?a("br"):t._e()],2)]),a("td",[t._v(t._s(t.amount.currency)+"$ "+t._s(t.amount.total))]),a("td",[a("ul",{staticClass:"list-unstyled"},[a("li",[t._v(t._s(t.statusObj.status))]),a("li",[a("a",{attrs:{href:t.statusObj.otherInfoLink,target:"_blank"}},[t._v("\n                        "+t._s(t.statusObj.otherInfo)+"\n                      ")])])])])])])])]):t._e()])])],1)},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",{staticClass:"table-head"},[a("tr",[a("th",{attrs:{width:"30%"}},[t._v("E-mail")]),a("th",[t._v("Order Date")]),a("th",{attrs:{width:"25%"}},[t._v("Product Name")]),a("th",[t._v("Quantity")]),a("th",{attrs:{width:"15%"}},[t._v("Total")]),a("th",{attrs:{width:"20%"}},[t._v("Status")])])])}],n={data:function(){return{isLoading:!1,Email:"",orderDate:"",orderId:"",ErrorMessage:"",amount:{},orderItems:{},promoteCode:"",statusObj:{status:"",otherInfo:"",otherInfoLink:""}}},methods:{track:function(){var t=this;t.isLoading=!0;var e=new XMLHttpRequest;e.open("get","https://www.omicam.com/_privateApi/omiOrderApi.php?id="+t.orderId,!0),e.send(null),e.onload=function(){var a=JSON.parse(e.response).info;null==a?t.ErrorMessage="This Transaction ID doesn't exist.":(t.ErrorMessage="",t.Email=a.email,t.orderDate=a.orderDate,t.amount=a.amount,t.orderItems=a.itemList,t.promoteCode=a.promoteCode,t.statusObj.status=a.status,t.statusObj.otherInfo=a.otherInfo,t.statusObj.otherInfoLink=a.otherInfoLink),t.isLoading=!1}}}},o=n,i=(a("c4c0"),a("2877")),d=Object(i["a"])(o,r,s,!1,null,"4097e998",null);e["default"]=d.exports},c4c0:function(t,e,a){"use strict";var r=a("79ad"),s=a.n(r);s.a}}]);
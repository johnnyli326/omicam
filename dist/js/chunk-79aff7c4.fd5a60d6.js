(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-79aff7c4"],{ac69:function(t,e,i){},ac6a:function(t,e,i){for(var s=i("cadf"),a=i("0d58"),r=i("2aba"),n=i("7726"),o=i("32e9"),c=i("84f2"),l=i("2b4c"),u=l("iterator"),d=l("toStringTag"),m=c.Array,L={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},p=a(L),f=0;f<p.length;f++){var S,g=p[f],v=L[g],b=n[g],h=b&&b.prototype;if(h&&(h[u]||o(h,u,m),h[d]||o(h,d,g),c[g]=m,v))for(S in s)h[S]||r(h,S,s[S],!0)}},b7a6:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"container mb-5 story-wrap"},[i("nav",{attrs:{"aria-label":"breadcrumb"}},[i("ol",{staticClass:"breadcrumb bg-transparent"},[i("li",{staticClass:"breadcrumb-item"},[i("router-link",{attrs:{to:"/"}},[t._v("\n              HOME\n            ")])],1),i("li",{staticClass:"breadcrumb-item before active",attrs:{"aria-current":"page"}},[t._v("\n            OMI STORY\n          ")])])]),t._l(t.storyList,function(e,s){return i("div",{key:s},[i("div",{staticClass:"row mb-5"},[i("div",{staticClass:"col-md-3 news-img text-center",style:{backgroundImage:"url(https://www.omicam.com/"+e.listImg+")"}},[i("router-link",{attrs:{to:"/story/"+t.routerId[s]}})],1),i("div",{staticClass:"col-md-9 mt-4"},[i("h3",{staticClass:"text-primary"},[t._v(t._s(e.title))]),i("main",{staticClass:"ml-4 mt-3"},[i("div",{staticStyle:{"text-align":"justify",color:"white"}},[i("div",{staticClass:"get-html"}),t._v("\n\t\t\t\t\t\t\t\t"+t._s(e.description)+"\n\t\t\t\t\t\t\t\t"),i("span",{staticClass:"d-block",staticStyle:{"text-align":"right"}},[t._v("--"+t._s(e.author))])])])])]),i("hr")])})],2)])},a=[],r=(i("a481"),i("ac6a"),i("1157"),{data:function(){return{storyList:[],routerId:[]}},methods:{getStories:function(){var t=this,e=new XMLHttpRequest;e.open("get","https://www.omicam.com/_privateApi/omiStoryApi.php?fun=list&from=0&count=4",!0),e.send(null),e.onload=function(){t.storyList=JSON.parse(e.response).reverse(),Array.prototype.forEach.call(t.storyList,function(e){t.routerId.push(e.id.replace(/\s/g,""))})}}},created:function(){window.scrollTo(0,0),this.getStories()}}),n=r,o=(i("c04a"),i("2877")),c=Object(o["a"])(n,s,a,!1,null,"4d592dc1",null);e["default"]=c.exports},c04a:function(t,e,i){"use strict";var s=i("ac69"),a=i.n(s);a.a}}]);
//# sourceMappingURL=chunk-79aff7c4.fd5a60d6.js.map
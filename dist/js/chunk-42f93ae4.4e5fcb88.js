(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-42f93ae4"],{5226:function(t,s,a){"use strict";var e=a("f687"),r=a.n(e);r.a},"737d":function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("div",{staticClass:"container story-content-wrap"},[a("nav",{attrs:{"aria-label":"breadcrumb"}},[a("ol",{staticClass:"breadcrumb bg-transparent"},[a("li",{staticClass:"breadcrumb-item"},[a("router-link",{attrs:{to:"/"}},[t._v("\n            Home\n          ")])],1),a("li",{staticClass:"breadcrumb-item before",attrs:{"aria-current":"page"}},[a("router-link",{attrs:{to:"/news"}},[t._v("\n            OMI NEWS\n          ")])],1),a("li",{staticClass:"breadcrumb-item before active",attrs:{"aria-current":"page"}},[t._v("\n          "+t._s(t.news.title)+"\n        ")])])]),a("main",{staticClass:"main",staticStyle:{color:"white"}},[a("article",{staticClass:"content"},[a("h2",[t._v(t._s(t.news.title))]),a("h6",{staticClass:"text-right"},[t._v("--"+t._s(t.news.author))]),a("img",{attrs:{src:"https://www.omicam.com/"+t.news.listImg,alt:t.news.author}}),a("p",[t._v(t._s(t.news.content))]),t._l(t.assets,function(s){return a("div",{key:s.id,staticClass:"asset-box"},[3==s.type?a("div",{staticClass:"video-wrap"},[a("iframe",{attrs:{src:s.url}})]):t._e(),1==s.type?a("div",{staticClass:"video-wrap"},[a("video",{attrs:{src:"https://www.omicam.com/"+s.url,controls:""}})]):t._e(),0==s.type||2==s.type?a("img",{attrs:{src:"https://www.omicam.com/"+s.url,alt:+s.url}}):t._e()])})],2),a("div",{staticClass:"extra-story"},[a("ul",t._l(t.ExtraStories,function(s){return a("li",{key:s.id},[t._v("\n            "+t._s(s.title)+" "+t._s(s.author)+"\n            "),a("a",{attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.PushTo(s.id)}}},[a("img",{attrs:{src:"https://www.omicam.com/"+s.listImg,alt:s.author}})])])}),0)])])])])},r=[],i=(a("cadf"),a("551c"),a("f751"),a("097d"),{data:function(){return{news:[],databaseUrl:"",databaseId:"",ExtraStories:[],assets:[]}},methods:{getNews:function(){var t=this,s=this;s.getStoryId(),s.databaseUrl="https://www.omicam.com/_privateApi/omiStoryApi.php?fun=detail&id="+s.databaseId;var a=new XMLHttpRequest;a.open("get",s.databaseUrl,!0),a.send(null),a.onload=function(){s.news=JSON.parse(a.response),s.assets=t.news.linkInfos,console.log(s.assets[0].type),s.ExtraStories=s.story.nextStorys}},getStoryId:function(){var t=this;t.databaseId=t.$route.params.storyId},PushTo:function(t){var s=this;s.$router.push("/news/"+t)}},created:function(){window.scroll(0,0),this.getStory()},beforeRouteUpdate:function(t,s,a){a(),window.scroll(0,0),this.databaseId=this.$route.params.newsId,this.getNews()}}),n=i,o=(a("5226"),a("2877")),c=Object(o["a"])(n,e,r,!1,null,"91b2eae2",null);s["default"]=c.exports},f687:function(t,s,a){}}]);
//# sourceMappingURL=chunk-42f93ae4.4e5fcb88.js.map
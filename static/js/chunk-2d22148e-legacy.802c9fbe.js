(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d22148e"],{ca60:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"ui padding container"},[a("h2",{staticClass:"ui dividing header"},[t._v(" Contest Topic ")]),a("table",{staticClass:"ui padded borderless unstackable selectable table"},[a("thead",[a("tr",[a("th",{attrs:{width:"55%"}},[t._v(" "+t._s(t.$t("title"))+" ")]),a("th",{attrs:{width:"25%"}},[t._v(" "+t._s(t.$t("creator"))+" ")]),a("th",{attrs:{width:"20%"}},[t._v(" "+t._s(t.$t("create time"))+" ")])])]),a("tbody",t._l(t.contestTopicList,(function(e){return a("tr",{key:e.contestset_id},[a("td",[a("router-link",{attrs:{to:"/topic/"+e.contestset_id+"/"}},[t._v(" "+t._s(e.title)+" ")])],1),a("td",[a("router-link",{attrs:{to:"/user/"+e.creator}},[t._v(" "+t._s(e.creator)+" ")])],1),a("td",[t._v(t._s(t.dayjs(e.create_time).format("YYYY-MM-DD HH:mm:ss")))])])})),0)])])},c=[],n=(a("d3b7"),a("4ae1"),a("25f0"),a("d4ec")),i=a("bee2"),s=a("262e"),o=a("99de"),u=a("7e84"),d=a("9ab4"),l=a("60a3"),f=a("2cd4"),h=a("5a0c"),p=a.n(h);function b(t){function e(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}return function(){var a,r=Object(u["a"])(t);if(e()){var c=Object(u["a"])(this).constructor;a=Reflect.construct(r,arguments,c)}else a=r.apply(this,arguments);return Object(o["a"])(this,a)}}var v=function(t){Object(s["a"])(a,t);var e=b(a);function a(){var t;return Object(n["a"])(this,a),t=e.apply(this,arguments),t.dayjs=p.a,t.contestTopicList=[],t.currentPage=0,t}return Object(i["a"])(a,[{key:"mounted",value:function(){this.initData()}},{key:"initData",value:function(){var t=this;this.axios.get("/api/contestset/set",{params:{page:this.currentPage}}).then((function(e){var a=e.data;t.contestTopicList=a.data}))}}]),a}(Object(l["b"])(f["a"]));v=Object(d["c"])([l["a"]],v);var _=v,y=_,j=a("2877"),k=Object(j["a"])(y,r,c,!1,null,"6951b9d5",null);e["default"]=k.exports}}]);
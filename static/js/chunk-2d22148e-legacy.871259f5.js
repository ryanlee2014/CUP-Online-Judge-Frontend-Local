(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d22148e"],{ca60:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"ui padding container"},[i("h2",{staticClass:"ui dividing header"},[t._v(" "+t._s(t.$t("contest topic"))+" ")]),i("table",{staticClass:"ui padded borderless unstackable selectable table"},[i("thead",[i("tr",[i("th",[t._v(" "+t._s(t.$t("title"))+" ")]),t.admin?i("th",{attrs:{width:"7%"}},[t._v(" "+t._s(t.$t("visible"))+" ")]):t._e(),t.admin?i("th",{attrs:{width:"7%"}},[t._v(" "+t._s(t.$t("enable"))+" ")]):t._e(),i("th",{attrs:{width:"15%"}},[t._v(" "+t._s(t.$t("creator"))+" ")]),i("th",{attrs:{width:"20%"}},[t._v(" "+t._s(t.$t("create time"))+" ")])])]),i("tbody",t._l(t.contestTopicList,(function(e){return i("tr",{key:e.contestset_id,class:t.isVisible(e)},[i("td",[i("router-link",{attrs:{to:"/topic/"+e.contestset_id+"/"}},[t._v(" "+t._s(e.title)+" ")])],1),t.admin?i("td",[t._v(" "+t._s(e.visible?t.$t("visible"):t.$t("hide"))+" ")]):t._e(),t.admin?i("td",[t._v(" "+t._s("N"===e.defunct?t.$t("enable"):t.$t("disable"))+" ")]):t._e(),i("td",[i("router-link",{attrs:{to:"/user/"+e.creator}},[t._v(" "+t._s(e.creator)+" ")])],1),i("td",[t._v(t._s(t.dayjs(e.create_time).format("YYYY-MM-DD HH:mm:ss")))])])})),0)])])},s=[],n=i("5530"),c=i("d4ec"),r=i("bee2"),d=i("262e"),l=i("2caf"),b=i("9ab4"),o=i("60a3"),u=i("2cd4"),v=i("5a0c"),_=i.n(v),h=i("2f62"),p=function(t){Object(d["a"])(i,t);var e=Object(l["a"])(i);function i(){var t;return Object(c["a"])(this,i),t=e.apply(this,arguments),t.dayjs=_.a,t.contestTopicList=[],t.currentPage=0,t}return Object(r["a"])(i,[{key:"mounted",value:function(){this.initData()}},{key:"isVisible",value:function(t){return t.visible?"":"active"}},{key:"initData",value:function(){var t=this;this.axios.get("/api/contestset/set",{params:{page:this.currentPage}}).then((function(e){var i=e.data;t.contestTopicList=i.data}))}}]),i}(Object(o["b"])(u["a"]));p=Object(b["a"])([Object(o["a"])({computed:Object(n["a"])({},Object(h["b"])(["admin"])),i18n:{messages:{"zh-cn":{visible:"可见",hide:"隐藏",enable:"启用",disable:"停用"},en:{visible:"Visible",hide:"Invisible",enable:"Enabled",disable:"Disabled"},ja:{visible:"見える",hide:"隠れる",enable:"有効",disable:"無効"}}}})],p);var f=p,m=f,j=i("2877"),$=Object(j["a"])(m,a,s,!1,null,"08507a5b",null);e["default"]=$.exports}}]);
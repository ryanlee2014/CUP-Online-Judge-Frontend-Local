(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d22148e"],{ca60:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"ui padding container"},[s("h2",{staticClass:"ui dividing header"},[t._v(" "+t._s(t.$t("contest topic"))+" ")]),s("table",{staticClass:"ui padded borderless unstackable selectable table"},[s("thead",[s("tr",[s("th",[t._v(" "+t._s(t.$t("title"))+" ")]),t.admin?s("th",{attrs:{width:"7%"}},[t._v(" "+t._s(t.$t("visible"))+" ")]):t._e(),t.admin?s("th",{attrs:{width:"7%"}},[t._v(" "+t._s(t.$t("enable"))+" ")]):t._e(),s("th",{attrs:{width:"15%"}},[t._v(" "+t._s(t.$t("creator"))+" ")]),s("th",{attrs:{width:"20%"}},[t._v(" "+t._s(t.$t("create time"))+" ")])])]),s("tbody",t._l(t.contestTopicList,(function(e){return s("tr",{key:e.contestset_id,class:t.isVisible(e)},[s("td",[s("router-link",{attrs:{to:"/topic/"+e.contestset_id+"/"}},[t._v(" "+t._s(e.title)+" ")])],1),t.admin?s("td",[t._v(" "+t._s(e.visible?t.$t("visible"):t.$t("hide"))+" ")]):t._e(),t.admin?s("td",[t._v(" "+t._s("N"===e.defunct?t.$t("enable"):t.$t("disable"))+" ")]):t._e(),s("td",[s("router-link",{attrs:{to:"/user/"+e.creator}},[t._v(" "+t._s(e.creator)+" ")])],1),s("td",[t._v(t._s(t.dayjs(e.create_time).format("YYYY-MM-DD HH:mm:ss")))])])})),0)])])},a=[],n=(s("ddb0"),s("9ab4")),d=s("60a3"),c=s("2cd4"),r=s("5a0c"),l=s.n(r),b=s("2f62");let o=class extends(Object(d["b"])(c["a"])){constructor(){super(...arguments),this.dayjs=l.a,this.contestTopicList=[],this.currentPage=0}mounted(){this.initData()}isVisible(t){return t.visible?"":"active"}initData(){this.axios.get("/api/contestset/set",{params:{page:this.currentPage}}).then(({data:t})=>{this.contestTopicList=t.data})}};o=Object(n["c"])([Object(d["a"])({computed:{...Object(b["b"])(["admin"])},i18n:{messages:{"zh-cn":{visible:"可见",hide:"隐藏",enable:"启用",disable:"停用"},en:{visible:"Visible",hide:"Invisible",enable:"Enabled",disable:"Disabled"},ja:{visible:"見える",hide:"隠れる",enable:"有効",disable:"無効"}}}})],o);var _=o,h=_,u=s("2877"),v=Object(u["a"])(h,i,a,!1,null,"08507a5b",null);e["default"]=v.exports}}]);
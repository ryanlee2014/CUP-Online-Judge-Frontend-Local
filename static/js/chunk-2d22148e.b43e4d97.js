(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d22148e"],{ca60:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"ui padding container"},[s("h2",{staticClass:"ui dividing header"},[t._v(" "+t._s(t.$t("contest topic"))+" ")]),s("table",{staticClass:"ui padded borderless unstackable selectable table"},[s("thead",[s("tr",[s("th",{attrs:{width:"55%"}},[t._v(" "+t._s(t.$t("title"))+" ")]),s("th",{attrs:{width:"25%"}},[t._v(" "+t._s(t.$t("creator"))+" ")]),s("th",{attrs:{width:"20%"}},[t._v(" "+t._s(t.$t("create time"))+" ")])])]),s("tbody",t._l(t.contestTopicList,(function(e){return s("tr",{key:e.contestset_id},[s("td",[s("router-link",{attrs:{to:"/topic/"+e.contestset_id+"/"}},[t._v(" "+t._s(e.title)+" ")])],1),s("td",[s("router-link",{attrs:{to:"/user/"+e.creator}},[t._v(" "+t._s(e.creator)+" ")])],1),s("td",[t._v(t._s(t.dayjs(e.create_time).format("YYYY-MM-DD HH:mm:ss")))])])})),0)])])},i=[],c=(s("ddb0"),s("9ab4")),r=s("60a3"),n=s("2cd4"),o=s("5a0c"),d=s.n(o);let l=(()=>{let t=class extends(Object(r["b"])(n["a"])){constructor(){super(...arguments),this.dayjs=d.a,this.contestTopicList=[],this.currentPage=0}mounted(){this.initData()}initData(){this.axios.get("/api/contestset/set",{params:{page:this.currentPage}}).then(({data:t})=>{this.contestTopicList=t.data})}};return t=Object(c["c"])([r["a"]],t),t})();var u=l,h=u,_=s("2877"),p=Object(_["a"])(h,a,i,!1,null,"27cc0e78",null);e["default"]=p.exports}}]);
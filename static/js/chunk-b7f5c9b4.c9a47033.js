(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b7f5c9b4"],{2990:function(t,i,n){"use strict";var e=n("6d65"),s=n.n(e);s.a},"6d65":function(t,i,n){},"9a8b":function(t,i,n){"use strict";n.r(i);var e=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticClass:"ui container"},[n("h2",{staticClass:"ui dividing header"},[t._v(t._s(t.$t("compile information")))]),n("div",{staticClass:"ui segment same_width",domProps:{innerHTML:t._s(t.info)}})])},s=[],o=(n("1276"),n("ddb0"),n("9ab4")),a=n("2cd4"),c=n("60a3");const r=document.createElement("div");let d=(()=>{let t=class extends(Object(c["b"])(a["a"])){constructor(){super(...arguments),this.info="",this.solution_id=""}created(){this.solution_id=this.$route.params.solution_id}mounted(){document.title=`${this.solution_id} Compile Information -- ${document.title}`,this.axios.get("/api/status/compile_info/"+this.solution_id).then(({data:t})=>{this.info=this.convertHTML(t.data.info).split(" ").join("&nbsp;")}).catch(({data:t})=>{this.info=this.$t("no privilege to access")})}convertHTML(t){return r.innerText=t,r.innerHTML}};return t=Object(o["c"])([c["a"]],t),t})();var u=d,l=u,h=(n("2990"),n("2877")),f=Object(h["a"])(l,e,s,!1,null,"7f5cdbe4",null);i["default"]=f.exports}}]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b7f5c9b4"],{2990:function(t,n,e){"use strict";var i=e("6d65"),c=e.n(i);c.a},"6d65":function(t,n,e){},"9a8b":function(t,n,e){"use strict";e.r(n);var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"ui container"},[e("h2",{staticClass:"ui dividing header"},[t._v(t._s(t.$t("compile information")))]),e("div",{staticClass:"ui segment same_width",domProps:{innerHTML:t._s(t.info)}})])},c=[],o=(e("99af"),e("a15b"),e("d3b7"),e("4ae1"),e("ac1f"),e("25f0"),e("1276"),e("d4ec")),a=e("bee2"),r=e("262e"),u=e("99de"),s=e("7e84"),f=e("9ab4"),l=e("2cd4"),d=e("60a3");function p(t){function n(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}return function(){var e,i=Object(s["a"])(t);if(n()){var c=Object(s["a"])(this).constructor;e=Reflect.construct(i,arguments,c)}else e=i.apply(this,arguments);return Object(u["a"])(this,e)}}var v=document.createElement("div"),b=function(t){Object(r["a"])(e,t);var n=p(e);function e(){var t;return Object(o["a"])(this,e),t=n.apply(this,arguments),t.info="",t.solution_id="",t}return Object(a["a"])(e,[{key:"created",value:function(){this.solution_id=this.$route.params.solution_id}},{key:"mounted",value:function(){var t=this;document.title="".concat(this.solution_id," Compile Information -- ").concat(document.title),this.axios.get("/api/status/compile_info/".concat(this.solution_id)).then((function(n){var e=n.data;t.info=t.convertHTML(e.data.info).split(" ").join("&nbsp;")})).catch((function(n){n.data;t.info=t.$t("no privilege to access")}))}},{key:"convertHTML",value:function(t){return v.innerText=t,v.innerHTML}}]),e}(Object(d["b"])(l["a"]));b=Object(f["c"])([d["a"]],b);var h=b,m=h,_=(e("2990"),e("2877")),j=Object(_["a"])(m,i,c,!1,null,"7f5cdbe4",null);n["default"]=j.exports}}]);
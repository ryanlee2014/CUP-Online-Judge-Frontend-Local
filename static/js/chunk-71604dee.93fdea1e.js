(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-71604dee"],{2937:function(t,e,a){"use strict";a("efc6")},"2d63":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"ui container padding"},[a("div",{staticClass:"ui grid"},[a("div",{staticClass:"row"},[a("div",{staticClass:"thirteen wide column"},[a("Pagination",{attrs:{current_page:t.current_page,page_cnt:t.page_cnt,total:t.total_number,"on-page-changed":t.page}})],1),a("div",{staticClass:"three wide right aligned column"},[a("router-link",{staticClass:"ui primary button",attrs:{to:"/admin/contest/add"}},[t._v(" "+t._s(t.$t("add contest"))+" ")])],1)])]),a("table",{staticClass:"ui celled structured table"},[a("thead",[a("tr",[a("th",[t._v(t._s(t.$t("contest_id")))]),a("th",[t._v(t._s(t.$t("title")))]),a("th",[t._v(t._s(t.$t("start time")))]),a("th",[t._v(t._s(t.$t("end time")))]),a("th",[t._v(t._s(t.$t("copy contest")))]),a("th",[t._v(t._s(t.$t("available")))]),a("th",[t._v(t._s(t.$t("remove")))])])]),a("tbody",t._l(t.list,(function(e){return a("tr",{key:e.contest_id},[a("td",[t._v(" "+t._s(e.contest_id)+" ")]),a("td",[a("a",{attrs:{href:"/contest/edit/"+e.contest_id,target:"_blank"}},[t._v(t._s(e.title))])]),a("td",[t._v(" "+t._s(t.dayjs(e.start_time).format("YYYY-MM-DD HH:mm"))+" ")]),a("td",[t._v(" "+t._s(t.dayjs(e.end_time).format("YYYY-MM-DD HH:mm"))+" ")]),a("td",[a("router-link",{staticClass:"ui inverted blue tiny labeled icon button",attrs:{to:"/admin/contest/copy/"+e.contest_id}},[a("i",{staticClass:"copy icon"}),t._v(" "+t._s(t.$t("copy"))+" ")])],1),a("td",[a("button",{class:"ui inverted tiny labeled icon button "+(t.defunctToBoolean(e.defunct)?"green":"red"),on:{click:function(a){return t.defunct(e.contest_id)}}},[a("i",{class:(t.defunctToBoolean(e.defunct)?"checkmark":"remove")+" icon"}),t._v(" "+t._s(t.defunctToBoolean(e.defunct)?t.$t("available"):t.$t("unavailable"))+" ")])]),a("td",[a("button",{staticClass:"ui labeled tiny icon black button",on:{click:function(a){return t.remove(e.contest_id)}}},[a("i",{staticClass:"trash icon"}),t._v(" "+t._s(t.$t("remove"))+" ")])])])})),0)]),a("Pagination",{attrs:{current_page:t.current_page,page_cnt:t.page_cnt,total:t.total_number,"on-page-changed":t.page}})],1)},c=[],i=(a("ddb0"),a("9ab4")),s=a("2cd4"),r=a("9513"),o=a("5a0c"),l=a.n(o),u=a("60a3");let d=class extends(Object(u["b"])(s["a"])){constructor(){super(...arguments),this.current_page=0,this.list=[],this.dayjs=l.a,this.total_number=0,this.page_cnt=50}created(){const t=this.$route.query;let e;t.hasOwnProperty("page")&&(e=parseInt(t.page)),isNaN(e)||(this.current_page=e)}onCurrentPageChanged(t){this.setQuery(),this.flushData(t)}mounted(){this.flushData(this.current_page)}defunctToBoolean(t){return"N"===t}flushData(t){this.axios.get("/api/admin/contest/list/"+t).then(({data:t})=>{this.list=t.data.data,this.total_number=t.data.count})}setQuery(){const t={};t.page=this.current_page,this.$router.push({path:this.$route.path,query:t})}remove(t){}page(t,e){this.current_page=e?this.current_page+e:t}defunct(t){this.axios.post("/api/admin/contest/defunct",{id:t}).then(({data:t})=>{this.flushData(this.current_page)}).catch(({data:t})=>{alert(t.statement)})}};Object(i["a"])([Object(u["d"])("current_page")],d.prototype,"onCurrentPageChanged",null),d=Object(i["a"])([Object(u["a"])({components:{Pagination:r["a"]}})],d);var p=d,_=p,g=(a("2937"),a("2877")),h=Object(g["a"])(_,n,c,!1,null,"6011d920",null);e["default"]=h.exports},9513:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"ui pagination menu",staticStyle:{"box-shadow":"none"}},[a("a",{class:"icon item "+(t.current_page?"":"disabled"),on:{click:function(e){t.current_page&&t.page(e,-t.current_page)}}},[a("i",{staticClass:"angle double left icon"})]),a("a",{class:"icon item "+(t.current_page?"":"disabled"),on:{click:function(e){t.current_page&&t.page(e,-1)}}},[a("i",{staticClass:"left chevron icon"})]),t._l(t.pageList,(function(e){return a("div",{key:e},[a("a",{class:(t.current_page+1==e?"active":"")+" item page",on:{click:function(e){return t.page(e)}}},[t._v(" "+t._s(e)+" ")])])})),a("a",{class:"icon item "+(t.current_page+1==Math.ceil(t.total/t.page_cnt)?"disabled":""),on:{click:function(e){t.current_page+1<Math.ceil(t.total/t.page_cnt)&&t.page(e,1)}}},[a("i",{staticClass:"right chevron icon"})]),a("a",{class:"icon item "+(t.current_page+1==Math.ceil(t.total/t.page_cnt)?"disabled":""),on:{click:function(e){t.current_page+1<Math.ceil(t.total/t.page_cnt)&&t.page(e,Math.ceil(t.total/t.page_cnt)-1-t.current_page)}}},[a("i",{staticClass:"angle double right icon"})])],2)},c=[],i=(a("ddb0"),a("9ab4")),s=a("1157"),r=a.n(s),o=a("60a3"),l=a("2b0e");r.a;let u=class extends l["a"]{constructor(){super(...arguments),this.total_menu=0}created(){let t=document.body.clientWidth;const e=1100;t>1127&&(t=e),this.total_menu=Math.max(0,Math.trunc(.7*t/42)-4)}get pageList(){const{current_page:t,page_cnt:e,total:a,total_menu:n}=this,c=Array.from(Array(Math.min(Math.ceil(a/e),n)).keys()).map((function(c){return t<n/2?Math.trunc(c+1):t+n/2+1>Math.ceil(a/e)?Math.trunc(Math.ceil(a/e)-n+1+c):Math.trunc(t+c-n/2+1)}));return this.$emit("pageUpdated",c),c}page(t,e){e?this.onPageChanged(null,e):this.onPageChanged(parseInt(t.target.innerText)-1)}};Object(i["a"])([Object(o["c"])()],u.prototype,"total",void 0),Object(i["a"])([Object(o["c"])()],u.prototype,"page_cnt",void 0),Object(i["a"])([Object(o["c"])()],u.prototype,"current_page",void 0),Object(i["a"])([Object(o["c"])()],u.prototype,"onPageChanged",void 0),u=Object(i["a"])([o["a"]],u);var d=u,p=d,_=a("2877"),g=Object(_["a"])(p,n,c,!1,null,"68aad065",null);e["a"]=g.exports},efc6:function(t,e,a){}}]);
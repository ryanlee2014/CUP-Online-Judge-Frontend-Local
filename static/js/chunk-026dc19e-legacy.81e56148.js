(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-026dc19e"],{2754:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"zh-cn":{"user submit statistics":"用户提交信息统计","current server time":"当前服务器时间","ranklist statistic":"排名统计","start":"开始","end":"结束"},"en":{"user submit statistics":"User Submit Statistics","current server time":"Server Time","ranklist statistic":"Ranklist Statistics","start":"Start","end":"End"},"ja":{"user submit statistics":"ユーザー提出統計","current server time":"サーバー時間","ranklist statistic":"ランキング統計","start":"始め","end":"終わり"}}'),delete t.options._Ctor}},"4df4":function(t,e,a){"use strict";var n=a("0366"),i=a("7b0b"),s=a("9bdd"),c=a("e95a"),r=a("50c4"),o=a("8418"),u=a("35a1");t.exports=function(t){var e,a,l,d,p,v,g=i(t),h="function"==typeof this?this:Array,_=arguments.length,m=_>1?arguments[1]:void 0,f=void 0!==m,b=u(g),C=0;if(f&&(m=n(m,_>2?arguments[2]:void 0,2)),void 0==b||h==Array&&c(b))for(e=r(g.length),a=new h(e);e>C;C++)v=f?m(g[C],C):g[C],o(a,C,v);else for(d=b.call(g),p=d.next,a=new h;!(l=p.call(d)).done;C++)v=f?s(d,m,[l.value,C],!0):l.value,o(a,C,v);return a.length=C,a}},5858:function(t,e,a){"use strict";var n=a("2754"),i=a.n(n);e["default"]=i.a},8237:function(t,e,a){"use strict";a("9b8f")},9513:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"ui pagination menu",staticStyle:{"box-shadow":"none"}},[a("a",{class:"icon item "+(t.current_page?"":"disabled"),on:{click:function(e){t.current_page&&t.page(e,-t.current_page)}}},[a("i",{staticClass:"angle double left icon"})]),a("a",{class:"icon item "+(t.current_page?"":"disabled"),on:{click:function(e){t.current_page&&t.page(e,-1)}}},[a("i",{staticClass:"left chevron icon"})]),t._l(t.pageList,(function(e){return a("div",{key:e},[a("a",{class:(t.current_page+1==e?"active":"")+" item page",on:{click:function(e){return t.page(e)}}},[t._v(" "+t._s(e)+" ")])])})),a("a",{class:"icon item "+(t.current_page+1==Math.ceil(t.total/t.page_cnt)?"disabled":""),on:{click:function(e){t.current_page+1<Math.ceil(t.total/t.page_cnt)&&t.page(e,1)}}},[a("i",{staticClass:"right chevron icon"})]),a("a",{class:"icon item "+(t.current_page+1==Math.ceil(t.total/t.page_cnt)?"disabled":""),on:{click:function(e){t.current_page+1<Math.ceil(t.total/t.page_cnt)&&t.page(e,Math.ceil(t.total/t.page_cnt)-1-t.current_page)}}},[a("i",{staticClass:"angle double right icon"})])],2)},i=[],s=(a("a630"),a("d81d"),a("b65f"),a("d3b7"),a("3ca3"),a("ddb0"),a("d4ec")),c=a("bee2"),r=a("262e"),o=a("2caf"),u=a("9ab4"),l=a("1157"),d=a.n(l),p=a("60a3"),v=a("2b0e"),g=(d.a,function(t){Object(r["a"])(a,t);var e=Object(o["a"])(a);function a(){var t;return Object(s["a"])(this,a),t=e.apply(this,arguments),t.total_menu=0,t}return Object(c["a"])(a,[{key:"created",value:function(){var t=document.body.clientWidth,e=1100;t>1127&&(t=e),this.total_menu=Math.max(0,Math.trunc(.7*t/42)-4)}},{key:"page",value:function(t,e){e?this.onPageChanged(null,e):this.onPageChanged(parseInt(t.target.innerText)-1)}},{key:"pageList",get:function(){var t=this.current_page,e=this.page_cnt,a=this.total,n=this.total_menu,i=Array.from(Array(Math.min(Math.ceil(a/e),n)).keys()).map((function(i){return t<n/2?Math.trunc(i+1):t+n/2+1>Math.ceil(a/e)?Math.trunc(Math.ceil(a/e)-n+1+i):Math.trunc(t+i-n/2+1)}));return this.$emit("pageUpdated",i),i}}]),a}(v["a"]));Object(u["a"])([Object(p["c"])()],g.prototype,"total",void 0),Object(u["a"])([Object(p["c"])()],g.prototype,"page_cnt",void 0),Object(u["a"])([Object(p["c"])()],g.prototype,"current_page",void 0),Object(u["a"])([Object(p["c"])()],g.prototype,"onPageChanged",void 0),g=Object(u["a"])([p["a"]],g);var h=g,_=h,m=a("2877"),f=Object(m["a"])(_,n,i,!1,null,"68aad065",null);e["a"]=f.exports},"9b8f":function(t,e,a){},a630:function(t,e,a){var n=a("23e7"),i=a("4df4"),s=a("1c7e"),c=!s((function(t){Array.from(t)}));n({target:"Array",stat:!0,forced:c},{from:i})},e36e:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"ui padding container contest"},[a("h2",{staticClass:"ui dividing header"},[t._v(" "+t._s(t.$t("contest set"))+" ")]),a("div",{staticClass:"ui top attached tabular menu"},[a("a",{class:("contest"===t.current_column?"active":"")+" item",on:{click:function(e){t.current_column="contest"}}},[t._v(t._s(t.$t("test")))]),a("a",{class:("rank"===t.current_column?"active":"")+" item",on:{click:function(e){t.current_column="rank"}}},[t._v(t._s(t.$t("ranklist statistic")))])]),a("div",{directives:[{name:"show",rawName:"v-show",value:"contest"===t.current_column,expression:"current_column === 'contest'"}],staticClass:"ui bottom attached segment"},[a("div",{staticClass:"ui icon message"},[a("i",{staticClass:"notched circle loading icon"}),a("div",{staticClass:"content"},[a("div",{staticClass:"header"},[t._v(" "+t._s(t.$t("current server time"))+" ")]),a("p",{staticClass:"server_time"})])]),a("div",{staticClass:"ui grid"},[a("div",{staticClass:"row"},[a("div",{staticClass:"thirteen wide column"},[a("Pagination",{attrs:{current_page:t.current_page,page_cnt:t.page_cnt,total:t.total_number,"on-page-changed":t.page}})],1)])]),a("ContestView",{attrs:{contest_list:t.contest_list}}),a("div",{staticClass:"ui grid"},[a("div",{staticClass:"row"},[a("div",{staticClass:"thirteen wide column"},[a("Pagination",{attrs:{current_page:t.current_page,page_cnt:t.page_cnt,total:t.total_number,"on-page-changed":t.page}})],1)])])],1),a("div",{directives:[{name:"show",rawName:"v-show",value:"rank"===t.current_column,expression:"current_column === 'rank'"}],staticClass:"ui bottom attached segment"},[a("h3",{staticClass:"ui dividing header"},[t._v(t._s(t.$t("ranklist statistic")))]),a("div",{staticClass:"ui grid"},[a("div",{staticClass:"fourteen wide column"},[a("div",{staticClass:"ui fluid multiple search selection dropdown"},[a("input",{attrs:{name:"country",type:"hidden"},on:{change:function(e){t.select1=e.target.value}}}),a("i",{staticClass:"dropdown icon"}),a("div",{staticClass:"default text"},[t._v("Select Contest Or Input Contest ID")]),a("div",{staticClass:"menu"},t._l(t.total_contest_list,(function(e,n){return a("div",{key:n,staticClass:"item",attrs:{"data-value":e.contest_id}},[t._v(" "+t._s("Contest"+e.contest_id+" "+e.title)+" ")])})),0)])]),a("div",{staticClass:"two wide column"},[a("router-link",{staticClass:"primary button ui",attrs:{to:"/contest/rank/"+t.select1}},[t._v("Go")])],1)]),a("h3",{staticClass:"ui dividing header"},[t._v(t._s(t.$t("user submit statistics")))]),a("div",{staticClass:"ui grid"},[a("div",{staticClass:"fourteen wide column"},[a("div",{staticClass:"ui fluid multiple search selection dropdown"},[a("input",{attrs:{name:"country",type:"hidden"},on:{change:function(e){t.select2=e.target.value}}}),a("i",{staticClass:"dropdown icon"}),a("div",{staticClass:"default text"},[t._v("Select Contest Or Input Contest ID")]),a("div",{staticClass:"menu"},t._l(t.total_contest_list,(function(e,n){return a("div",{key:n,staticClass:"item",attrs:{"data-value":e.contest_id,title:e.title}},[t._v(t._s("Contest"+e.contest_id+" "+e.title)+" ")])})),0)])]),a("div",{staticClass:"two wide column"},[a("router-link",{staticClass:"primary button ui",attrs:{to:"/status/user/contest/"+t.select2}},[t._v("Go")])],1)])])])},i=[],s=a("d4ec"),c=a("bee2"),r=a("262e"),o=a("2caf"),u=a("9ab4"),l=a("2cd4"),d=a("1157"),p=a.n(d),v=a("5a0c"),g=a.n(v),h=a("60a3"),_=a("5dbd"),m=a("19dd"),f=a("9513"),b=a("3d1f"),C=p.a,y=function(t){Object(r["a"])(a,t);var e=Object(o["a"])(a);function a(){var t;return Object(s["a"])(this,a),t=e.apply(this,arguments),t.admin=!1,t.contest_list=[],t.total_contest_list=[],t.select1="",t.select2="",t.current_column="contest",t.page_cnt=50,t.current_page=0,t.total_number=0,t.prevGetPageCancelToken=null,t}return Object(c["a"])(a,[{key:"created",value:function(){this.admin=this.$store.getters.admin;var t=this.$route.query.page;t=null===t||"undefined"===typeof t||isNaN(parseInt(t))?0:parseInt(t),this.current_page=t}},{key:"mounted",value:function(){var t=this;document.title="Contest Set -- ".concat(document.title),this.axios.get("/api/contest/total").then((function(e){var a=e.data;t.total_number=a.data})),this.getPage(),this.init()}},{key:"setQuery",value:function(t){var e=Object.assign({},this.$route.query);Object.assign(e,t),this.$router.push({path:this.$route.path,query:e})}},{key:"onCurrentPageChanged",value:function(t){this.setQuery({page:t})}},{key:"onRouteQueryChanged",value:function(t){this.getPage(t)}},{key:"onCurrentColumnChanged",value:function(){var t=this;0===this.total_contest_list.length&&this.axios.get("/api/contest/list/all").then((function(e){var a=e.data;t.total_contest_list=a.data}))}},{key:"page",value:function(t,e){this.current_page=e?this.current_page+e:t}},{key:"cancelPrevGetPage",value:function(){null!==this.prevGetPageCancelToken&&this.prevGetPageCancelToken.cancel()}},{key:"getPage",value:function(t){var e=this;return this.cancelPrevGetPage(),this.axios.get("/api/contest/list",{params:Object.assign(this.getParams(),t),cancelToken:(this.prevGetPageCancelToken=this.axios.CancelToken.source()).token}).then((function(t){if(t&&t.data){var a=t.data;e.prevGetPageCancelToken=null,e.contest_list=a.data}}))}},{key:"getParams",value:function(){var t=this.$route.query;for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&(null!==t[e]&&void 0!==t[e]||(t[e]="1"));return t}},{key:"clock",value:function(){C(".server_time").text(g()().format("YYYY-MM-DD HH:mm:ss"))}},{key:"init",value:function(){this.clock()}},{key:"bindPopup",value:function(){this.admin&&C(".ui.padded.table").popup({title:"管理员视图",content:"白色背景竞赛属于普通用户可见竞赛，灰色背景竞赛为不可见竞赛,绿色背景竞赛为正在进行中的竞赛",position:"top center",boundary:"body"}),C(".visible.tag").popup({content:"点击可切换显示隐藏"}),C(".private.tag").popup({content:"点击可切换私有公有属性，公有属性不限制用户访问，私有属性需输入密码或列入列表才允许访问"}),C(".multiple.search").dropdown({fullTextSearch:!0})}}]),a}(Object(h["b"])(l["a"],m["a"]));Object(u["a"])([Object(h["d"])("current_page",{immediate:!0})],y.prototype,"onCurrentPageChanged",null),Object(u["a"])([Object(h["d"])("$route.query")],y.prototype,"onRouteQueryChanged",null),Object(u["a"])([Object(h["d"])("current_column")],y.prototype,"onCurrentColumnChanged",null),Object(u["a"])([Object(_["d"])(1e3)],y.prototype,"clock",null),y=Object(u["a"])([Object(h["a"])({components:{ContestView:b["a"],Pagination:f["a"]}})],y);var k=y,O=k,j=(a("8237"),a("2877")),w=a("5858"),P=Object(j["a"])(O,n,i,!1,null,"1a0ea62b",null);"function"===typeof w["default"]&&Object(w["default"])(P);e["default"]=P.exports}}]);
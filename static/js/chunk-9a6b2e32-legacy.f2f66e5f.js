(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9a6b2e32"],{"0b52":function(t,e,a){},"19dd6":function(t,e,a){"use strict";a("4160"),a("159b");var n=a("d4ec"),i=a("bee2"),c=a("262e"),s=a("2caf"),r=a("9ab4"),o=a("60a3"),u=a("5dbd"),l=a("2b0e"),d=function(t){Object(c["a"])(a,t);var e=Object(s["a"])(a);function a(){var t;return Object(n["a"])(this,a),t=e.apply(this,arguments),t.timer_=[],t}return Object(i["a"])(a,[{key:"beforeDestroy",value:function(){var t=this.timer_;t.forEach((function(t){return clearInterval(t)}))}}]),a}(l["a"]);Object(r["c"])([u["c"]],d.prototype,"beforeDestroy",null),d=Object(r["c"])([o["a"]],d),e["a"]=d},2009:function(t,e,a){},2754:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"zh-cn":{"user submit statistics":"用户提交信息统计","current server time":"当前服务器时间","ranklist statistic":"排名统计","start":"开始","end":"结束"},"en":{"user submit statistics":"User Submit Statistics","current server time":"Server Time","ranklist statistic":"Ranklist Statistics","start":"Start","end":"End"},"ja":{"user submit statistics":"ユーザー提出統計","current server time":"サーバー時間","ranklist statistic":"ランキング統計","start":"始め","end":"終わり"}}'),delete t.options._Ctor}},"3d1f":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("table",{staticClass:"ui padded borderless unstackable selectable table",attrs:{width:"90%"}},[a("thead",[a("tr",{staticClass:"toprow",attrs:{align:"center"}},[a("th",{attrs:{width:"55%"}},[t._v(t._s(t.$t("title")))]),a("th",{attrs:{width:"25%"}},[t._v(t._s(t.$t("status")))]),a("th",{attrs:{width:"7%"}},[t._v(t._s(t.$t("privilege")))]),a("th",{attrs:{width:"13%"}},[t._v(t._s(t.$t("creator")))])])]),a("tbody",t._l(t.contest_list,(function(e,n){return a("tr",{key:n,class:(n%2===0?"evenrow":"oddrow")+" "+("Y"===e.defunct?"active":"")},[a("td",[a("router-link",{attrs:{to:"/contest/"+e.contest_id}},[t._v(" "+t._s("Contest "+e.contest_id+": "+e.title)+" ")])],1),a("td",[a("p",{staticStyle:{"margin-bottom":"0.25em"},domProps:{innerHTML:t._s(t.contestTimeFormat(e))}}),a("progress-bar",{attrs:{active:t.contestIsRunning(e),color:t.progressBarColor(e),percentage:t.percentageRunning(e),size:"tiny"}})],1),a("td",[t._v(" "+t._s(e.private?t.$t("private"):t.$t("public"))+" ")]),a("td",[a("router-link",{attrs:{to:"/user/"+e.user_id}},[t._v(" "+t._s(e.user_id)+" ")])],1)])})),0)])},i=[],c=(a("99af"),a("b65f"),a("d4ec")),s=a("bee2"),r=a("262e"),o=a("2caf"),u=a("9ab4"),l=a("60a3"),d=a("2b0e"),p=a("5a0c"),v=a.n(p),h=a("626a"),f=a("5dbd"),g=a("19dd6"),b=function(t){Object(r["a"])(a,t);var e=Object(o["a"])(a);function a(){var t;return Object(c["a"])(this,a),t=e.apply(this,arguments),t.current_time=v()(),t}return Object(s["a"])(a,[{key:"mounted",value:function(){this.updateCurrentTime()}},{key:"updateCurrentTime",value:function(){this.current_time=v()()}},{key:"contestTimeFormat",value:function(t){if(Object.prototype.hasOwnProperty.call(t,"_format_")&&"string"===typeof t._format_)return t._format_;var e,a;v.a.isDayjs(t.start_time)||(e=v()(t.start_time)),v.a.isDayjs(t.end_time)||(a=v()(t.end_time));var n=this.current_time;return t.isEnd||n.isAfter(a)?(t.isEnd=!0,t._format_="".concat(a.format("YYYY-MM-DD HH:mm")).concat(this.$t("end"))):n.isBefore(e)?"".concat(e.format("YYYY-MM-DD HH:mm")).concat(this.$t("start")):"".concat(e.format("YYYY-MM-DD HH:mm")," ").concat(this.$t("start"),"<br>").concat(a.format("YYYY-MM-DD HH:mm")," ").concat(this.$t("end"))}},{key:"contestIsRunning",value:function(t){var e,a;v.a.isDayjs(t.start_time)||(e=v()(t.start_time)),v.a.isDayjs(t.end_time)||(a=v()(t.end_time));var n=this.current_time;return n.isBefore(a)&&n.isAfter(e)}},{key:"progressBarColor",value:function(t){return this.contestIsRunning(t)?"green":"grey"}},{key:"percentageRunning",value:function(t){var e,a;if(!0===t.isEnd)return 100;v.a.isDayjs(t.start_time)||(e=v()(t.start_time)),v.a.isDayjs(t.end_time)||(a=v()(t.end_time));var n=this.current_time;if(n.isBefore(e))return 0;if(n.isAfter(a))return t.isEnd=!0,100;var i=n.diff(e,"second"),c=a.diff(e,"second");return Math.trunc(Math.floor(100*i/c))}}]),a}(Object(l["b"])(d["a"],g["a"]));Object(u["c"])([Object(l["c"])({default:[]})],b.prototype,"contest_list",void 0),Object(u["c"])([Object(f["e"])(1e4)],b.prototype,"updateCurrentTime",null),b=Object(u["c"])([Object(l["a"])({components:{ProgressBar:h["a"]}})],b);var _=b,m=_,y=(a("9f54"),a("2877")),C=Object(y["a"])(m,n,i,!1,null,"274d2a9a",null);e["a"]=C.exports},"4df4":function(t,e,a){"use strict";var n=a("0366"),i=a("7b0b"),c=a("9bdd"),s=a("e95a"),r=a("50c4"),o=a("8418"),u=a("35a1");t.exports=function(t){var e,a,l,d,p,v,h=i(t),f="function"==typeof this?this:Array,g=arguments.length,b=g>1?arguments[1]:void 0,_=void 0!==b,m=u(h),y=0;if(_&&(b=n(b,g>2?arguments[2]:void 0,2)),void 0==m||f==Array&&s(m))for(e=r(h.length),a=new f(e);e>y;y++)v=_?b(h[y],y):h[y],o(a,y,v);else for(d=m.call(h),p=d.next,a=new f;!(l=p.call(d)).done;y++)v=_?c(d,b,[l.value,y],!0):l.value,o(a,y,v);return a.length=y,a}},5858:function(t,e,a){"use strict";var n=a("2754"),i=a.n(n);e["default"]=i.a},"626a":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"observe-visibility",rawName:"v-observe-visibility",value:t.visibilityChanged,expression:"visibilityChanged"}],ref:"progressBarElement",class:t.progressBarClass,on:{mouseenter:t.trigger}},[a("div",{staticClass:"bar"})])},i=[],c=a("d4ec"),s=a("bee2"),r=a("262e"),o=a("2caf"),u=a("9ab4"),l=a("6da9"),d=a("60a3"),p=a("1157"),v=a.n(p),h=v.a,f=function(t){Object(r["a"])(a,t);var e=Object(o["a"])(a);function a(){var t;return Object(c["a"])(this,a),t=e.apply(this,arguments),t.prevPercentage=0,t.element=null,t}return Object(s["a"])(a,[{key:"visibilityChanged",value:function(t,e){t&&this.active?this.element.progress("set active"):this.element.progress("remove active")}},{key:"updated",value:function(){this.mountFunc()}},{key:"mounted",value:function(){this.mountFunc()}},{key:"mountFunc",value:function(){null===this.element&&(this.element=h(this.$refs.progressBarElement)),this.prevPercentage!==this.percentage&&(this.element.progress({percent:this.percentage,autoSuccess:!1}),this.prevPercentage=this.percentage)}},{key:"trigger",value:function(){this.popupEvent(this.$refs.progressBarElement)}},{key:"forceUpdate",value:function(){this.prevPercentage!==this.percentage&&this.$nextTick(this.$forceUpdate)}},{key:"onSizeChange",value:function(){this.forceUpdate()}},{key:"onColorChange",value:function(){this.forceUpdate()}},{key:"onActiveChange",value:function(){this.forceUpdate()}},{key:"onPercentageChange",value:function(){this.forceUpdate()}},{key:"progressBarClass",get:function(){var t=["ui","progress"];return this.size.length>0&&t.push(this.size),this.color.length>0&&t.push(this.color),this.active&&t.push("active"),t}}]),a}(Object(d["b"])(l["a"]));Object(u["c"])([Object(d["c"])({default:""})],f.prototype,"size",void 0),Object(u["c"])([Object(d["c"])({default:""})],f.prototype,"color",void 0),Object(u["c"])([Object(d["c"])({default:!1})],f.prototype,"active",void 0),Object(u["c"])([Object(d["c"])({default:0})],f.prototype,"percentage",void 0),Object(u["c"])([Object(d["c"])({default:function(t){}})],f.prototype,"popupEvent",void 0),Object(u["c"])([Object(d["d"])("size")],f.prototype,"onSizeChange",null),Object(u["c"])([Object(d["d"])("color")],f.prototype,"onColorChange",null),Object(u["c"])([Object(d["d"])("active")],f.prototype,"onActiveChange",null),Object(u["c"])([Object(d["d"])("percentage")],f.prototype,"onPercentageChange",null),f=Object(u["c"])([d["a"]],f);var g=f,b=g,_=(a("ee78"),a("2877")),m=Object(_["a"])(b,n,i,!1,null,"75baf2bd",null);e["a"]=m.exports},"67e8":function(t,e,a){"use strict";var n=a("dd0d"),i=a.n(n);i.a},"6da9":function(t,e,a){"use strict";var n=a("d4ec"),i=a("262e"),c=a("2caf"),s=a("9ab4"),r=a("1157"),o=a.n(r),u=(a("8665"),a("60a3")),l=a("2b0e");window.$=window.jQuery=o.a;var d=function(t){Object(i["a"])(a,t);var e=Object(c["a"])(a);function a(){return Object(n["a"])(this,a),e.apply(this,arguments)}return a}(l["a"]);d=Object(s["c"])([u["a"]],d),e["a"]=d},9513:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"ui pagination menu",staticStyle:{"box-shadow":"none"}},[a("a",{class:"icon item "+(t.current_page?"":"disabled"),on:{click:function(e){t.current_page&&t.page(e,-t.current_page)}}},[a("i",{staticClass:"angle double left icon"})]),a("a",{class:"icon item "+(t.current_page?"":"disabled"),on:{click:function(e){t.current_page&&t.page(e,-1)}}},[a("i",{staticClass:"left chevron icon"})]),t._l(t.pageList,(function(e){return a("div",{key:e},[a("a",{class:(t.current_page+1==e?"active":"")+" item page",on:{click:function(e){return t.page(e)}}},[t._v(" "+t._s(e)+" ")])])})),a("a",{class:"icon item "+(t.current_page+1==Math.ceil(t.total/t.page_cnt)?"disabled":""),on:{click:function(e){t.current_page+1<Math.ceil(t.total/t.page_cnt)&&t.page(e,1)}}},[a("i",{staticClass:"right chevron icon"})]),a("a",{class:"icon item "+(t.current_page+1==Math.ceil(t.total/t.page_cnt)?"disabled":""),on:{click:function(e){t.current_page+1<Math.ceil(t.total/t.page_cnt)&&t.page(e,Math.ceil(t.total/t.page_cnt)-1-t.current_page)}}},[a("i",{staticClass:"angle double right icon"})])],2)},i=[],c=(a("a630"),a("d81d"),a("b65f"),a("d3b7"),a("3ca3"),a("ddb0"),a("d4ec")),s=a("bee2"),r=a("262e"),o=a("2caf"),u=a("9ab4"),l=a("1157"),d=a.n(l),p=a("60a3"),v=a("2b0e"),h=(d.a,function(t){Object(r["a"])(a,t);var e=Object(o["a"])(a);function a(){var t;return Object(c["a"])(this,a),t=e.apply(this,arguments),t.total_menu=0,t}return Object(s["a"])(a,[{key:"created",value:function(){var t=document.body.clientWidth,e=1100;t>1127&&(t=e),this.total_menu=Math.max(0,Math.trunc(.7*t/42)-4)}},{key:"page",value:function(t,e){e?this.onPageChanged(null,e):this.onPageChanged(parseInt(t.target.innerText)-1)}},{key:"pageList",get:function(){var t=this.current_page,e=this.page_cnt,a=this.total,n=this.total_menu,i=Array.from(Array(Math.min(Math.ceil(a/e),n)).keys()).map((function(i){return t<n/2?Math.trunc(i+1):t+n/2+1>Math.ceil(a/e)?Math.trunc(Math.ceil(a/e)-n+1+i):Math.trunc(t+i-n/2+1)}));return this.$emit("pageUpdated",i),i}}]),a}(v["a"]));Object(u["c"])([Object(p["c"])()],h.prototype,"total",void 0),Object(u["c"])([Object(p["c"])()],h.prototype,"page_cnt",void 0),Object(u["c"])([Object(p["c"])()],h.prototype,"current_page",void 0),Object(u["c"])([Object(p["c"])()],h.prototype,"onPageChanged",void 0),h=Object(u["c"])([p["a"]],h);var f=h,g=f,b=a("2877"),_=Object(b["a"])(g,n,i,!1,null,"68aad065",null);e["a"]=_.exports},"9f54":function(t,e,a){"use strict";var n=a("2009"),i=a.n(n);i.a},a630:function(t,e,a){var n=a("23e7"),i=a("4df4"),c=a("1c7e"),s=!c((function(t){Array.from(t)}));n({target:"Array",stat:!0,forced:s},{from:i})},b65f:function(t,e,a){var n=a("23e7"),i=Math.ceil,c=Math.floor;n({target:"Math",stat:!0},{trunc:function(t){return(t>0?c:i)(t)}})},dd0d:function(t,e,a){},e36e:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"ui padding container contest"},[a("h2",{staticClass:"ui dividing header"},[t._v(" "+t._s(t.$t("contest set"))+" ")]),a("div",{staticClass:"ui top attached tabular menu"},[a("a",{class:("contest"===t.current_column?"active":"")+" item",on:{click:function(e){t.current_column="contest"}}},[t._v(t._s(t.$t("test")))]),a("a",{class:("rank"===t.current_column?"active":"")+" item",on:{click:function(e){t.current_column="rank"}}},[t._v(t._s(t.$t("ranklist statistic")))])]),a("div",{directives:[{name:"show",rawName:"v-show",value:"contest"===t.current_column,expression:"current_column === 'contest'"}],staticClass:"ui bottom attached segment"},[a("div",{staticClass:"ui icon message"},[a("i",{staticClass:"notched circle loading icon"}),a("div",{staticClass:"content"},[a("div",{staticClass:"header"},[t._v(" "+t._s(t.$t("current server time"))+" ")]),a("p",{staticClass:"server_time"})])]),a("div",{staticClass:"ui grid"},[a("div",{staticClass:"row"},[a("div",{staticClass:"thirteen wide column"},[a("Pagination",{attrs:{current_page:t.current_page,page_cnt:t.page_cnt,total:t.total_number,"on-page-changed":t.page}})],1)])]),a("ContestView",{attrs:{contest_list:t.contest_list}}),a("div",{staticClass:"ui grid"},[a("div",{staticClass:"row"},[a("div",{staticClass:"thirteen wide column"},[a("Pagination",{attrs:{current_page:t.current_page,page_cnt:t.page_cnt,total:t.total_number,"on-page-changed":t.page}})],1)])])],1),a("div",{directives:[{name:"show",rawName:"v-show",value:"rank"===t.current_column,expression:"current_column === 'rank'"}],staticClass:"ui bottom attached segment"},[a("h3",{staticClass:"ui dividing header"},[t._v(t._s(t.$t("ranklist statistic")))]),a("div",{staticClass:"ui grid"},[a("div",{staticClass:"fourteen wide column"},[a("div",{staticClass:"ui fluid multiple search selection dropdown"},[a("input",{attrs:{name:"country",type:"hidden"},on:{change:function(e){t.select1=e.target.value}}}),a("i",{staticClass:"dropdown icon"}),a("div",{staticClass:"default text"},[t._v("Select Contest Or Input Contest ID")]),a("div",{staticClass:"menu"},t._l(t.total_contest_list,(function(e,n){return a("div",{key:n,staticClass:"item",attrs:{"data-value":e.contest_id}},[t._v(" "+t._s("Contest"+e.contest_id+" "+e.title)+" ")])})),0)])]),a("div",{staticClass:"two wide column"},[a("router-link",{staticClass:"primary button ui",attrs:{to:"/contest/rank/"+t.select1}},[t._v("Go")])],1)]),a("h3",{staticClass:"ui dividing header"},[t._v(t._s(t.$t("user submit statistics")))]),a("div",{staticClass:"ui grid"},[a("div",{staticClass:"fourteen wide column"},[a("div",{staticClass:"ui fluid multiple search selection dropdown"},[a("input",{attrs:{name:"country",type:"hidden"},on:{change:function(e){t.select2=e.target.value}}}),a("i",{staticClass:"dropdown icon"}),a("div",{staticClass:"default text"},[t._v("Select Contest Or Input Contest ID")]),a("div",{staticClass:"menu"},t._l(t.total_contest_list,(function(e,n){return a("div",{key:n,staticClass:"item",attrs:{"data-value":e.contest_id,title:e.title}},[t._v(t._s("Contest"+e.contest_id+" "+e.title)+" ")])})),0)])]),a("div",{staticClass:"two wide column"},[a("router-link",{staticClass:"primary button ui",attrs:{to:"/status/user/contest/"+t.select2}},[t._v("Go")])],1)])])])},i=[],c=a("d4ec"),s=a("bee2"),r=a("262e"),o=a("2caf"),u=a("9ab4"),l=a("2cd4"),d=a("1157"),p=a.n(d),v=a("5a0c"),h=a.n(v),f=a("60a3"),g=a("5dbd"),b=a("19dd6"),_=a("9513"),m=a("3d1f"),y=p.a,C=function(t){Object(r["a"])(a,t);var e=Object(o["a"])(a);function a(){var t;return Object(c["a"])(this,a),t=e.apply(this,arguments),t.admin=!1,t.contest_list=[],t.total_contest_list=[],t.select1="",t.select2="",t.current_column="contest",t.page_cnt=50,t.current_page=0,t.total_number=0,t.prevGetPageCancelToken=null,t}return Object(s["a"])(a,[{key:"created",value:function(){this.admin=this.$store.getters.admin;var t=this.$route.query.page;t=null===t||"undefined"===typeof t||isNaN(parseInt(t))?0:parseInt(t),this.current_page=t}},{key:"mounted",value:function(){var t=this;document.title="Contest Set -- ".concat(document.title),this.axios.get("/api/contest/total").then((function(e){var a=e.data;t.total_number=a.data})),this.getPage(),this.init()}},{key:"setQuery",value:function(t){var e=Object.assign({},this.$route.query);Object.assign(e,t),this.$router.push({path:this.$route.path,query:e})}},{key:"onCurrentPageChanged",value:function(t){this.setQuery({page:t})}},{key:"onRouteQueryChanged",value:function(t){this.getPage(t)}},{key:"onCurrentColumnChanged",value:function(){var t=this;0===this.total_contest_list.length&&this.axios.get("/api/contest/list/all").then((function(e){var a=e.data;t.total_contest_list=a.data}))}},{key:"page",value:function(t,e){this.current_page=e?this.current_page+e:t}},{key:"cancelPrevGetPage",value:function(){null!==this.prevGetPageCancelToken&&this.prevGetPageCancelToken.cancel()}},{key:"getPage",value:function(t){var e=this;return this.cancelPrevGetPage(),this.axios.get("/api/contest/list",{params:Object.assign(this.getParams(),t),cancelToken:(this.prevGetPageCancelToken=this.axios.CancelToken.source()).token}).then((function(t){var a=t.data;e.prevGetPageCancelToken=null,e.contest_list=a.data}))}},{key:"getParams",value:function(){var t=this.$route.query;for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&(null!==t[e]&&void 0!==t[e]||(t[e]="1"));return t}},{key:"clock",value:function(){y(".server_time").text(h()().format("YYYY-MM-DD HH:mm:ss"))}},{key:"init",value:function(){this.clock()}},{key:"bindPopup",value:function(){this.admin&&y(".ui.padded.table").popup({title:"管理员视图",content:"白色背景竞赛属于普通用户可见竞赛，灰色背景竞赛为不可见竞赛,绿色背景竞赛为正在进行中的竞赛",position:"top center",boundary:"body"}),y(".visible.tag").popup({content:"点击可切换显示隐藏"}),y(".private.tag").popup({content:"点击可切换私有公有属性，公有属性不限制用户访问，私有属性需输入密码或列入列表才允许访问"}),y(".multiple.search").dropdown({fullTextSearch:!0})}}]),a}(Object(f["b"])(l["a"],b["a"]));Object(u["c"])([Object(f["d"])("current_page",{immediate:!0})],C.prototype,"onCurrentPageChanged",null),Object(u["c"])([Object(f["d"])("$route.query")],C.prototype,"onRouteQueryChanged",null),Object(u["c"])([Object(f["d"])("current_column")],C.prototype,"onCurrentColumnChanged",null),Object(u["c"])([Object(g["e"])(1e3)],C.prototype,"clock",null),C=Object(u["c"])([Object(f["a"])({components:{ContestView:m["a"],Pagination:_["a"]}})],C);var j=C,O=j,k=(a("67e8"),a("2877")),w=a("5858"),P=Object(k["a"])(O,n,i,!1,null,"016f3a8d",null);"function"===typeof w["default"]&&Object(w["default"])(P);e["default"]=P.exports},ee78:function(t,e,a){"use strict";var n=a("0b52"),i=a.n(n);i.a}}]);
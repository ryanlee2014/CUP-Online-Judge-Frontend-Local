(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0aa143df"],{"0b52":function(t,e,n){},"19dd6":function(t,e,n){"use strict";n("ddb0");var s=n("9ab4"),a=n("60a3"),i=n("5dbd"),r=n("2b0e");let c=(()=>{let t=class extends r["a"]{constructor(){super(...arguments),this.timer_=[]}beforeDestroy(){const t=this.timer_;t.forEach(t=>clearInterval(t))}};return Object(s["c"])([i["b"]],t.prototype,"beforeDestroy",null),t=Object(s["c"])([a["a"]],t),t})();e["a"]=c},2009:function(t,e,n){},2754:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"zh-cn":{"user submit statistics":"用户提交信息统计","current server time":"当前服务器时间","ranklist statistic":"排名统计","start":"开始","end":"结束"},"en":{"user submit statistics":"User Submit Statistics","current server time":"Server Time","ranklist statistic":"Ranklist Statistics","start":"Start","end":"End"},"ja":{"user submit statistics":"ユーザー提出統計","current server time":"サーバー時間","ranklist statistic":"ランキング統計","start":"始め","end":"終わり"}}'),delete t.options._Ctor}},"3d1f":function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",{staticClass:"ui padded borderless unstackable selectable table",attrs:{width:"90%"}},[n("thead",[n("tr",{staticClass:"toprow",attrs:{align:"center"}},[n("th",{attrs:{width:"55%"}},[t._v(t._s(t.$t("title")))]),n("th",{attrs:{width:"25%"}},[t._v(t._s(t.$t("status")))]),n("th",{attrs:{width:"7%"}},[t._v(t._s(t.$t("privilege")))]),n("th",{attrs:{width:"13%"}},[t._v(t._s(t.$t("creator")))])])]),n("tbody",t._l(t.contest_list,(function(e,s){return n("tr",{key:s,class:(s%2===0?"evenrow":"oddrow")+" "+("Y"===e.defunct?"active":"")},[n("td",[n("router-link",{attrs:{to:"/contest/"+e.contest_id}},[t._v(" "+t._s("Contest "+e.contest_id+": "+e.title)+" ")])],1),n("td",[n("p",{staticStyle:{"margin-bottom":"0.25em"},domProps:{innerHTML:t._s(t.contestTimeFormat(e))}}),n("progress-bar",{attrs:{active:t.contestIsRunning(e),color:t.progressBarColor(e),percentage:t.percentageRunning(e),size:"tiny"}})],1),n("td",[t._v(" "+t._s(e.private?t.$t("private"):t.$t("public"))+" ")]),n("td",[n("router-link",{attrs:{to:"/user/"+e.user_id}},[t._v(" "+t._s(e.user_id)+" ")])],1)])})),0)])},a=[],i=(n("ddb0"),n("9ab4")),r=n("60a3"),c=n("2b0e"),o=n("5a0c"),u=n.n(o),l=n("626a"),d=n("5dbd"),p=n("19dd6");let h=(()=>{let t=class extends(Object(r["b"])(c["a"],p["a"])){constructor(){super(...arguments),this.current_time=u()()}mounted(){this.updateCurrentTime()}updateCurrentTime(){this.current_time=u()()}contestTimeFormat(t){if(Object.prototype.hasOwnProperty.call(t,"_format_")&&"string"===typeof t._format_)return t._format_;let e,n;u.a.isDayjs(t.start_time)||(e=u()(t.start_time)),u.a.isDayjs(t.end_time)||(n=u()(t.end_time));const s=this.current_time;return t.isEnd||s.isAfter(n)?(t.isEnd=!0,t._format_=`${n.format("YYYY-MM-DD HH:mm")}${this.$t("end")}`):s.isBefore(e)?`${e.format("YYYY-MM-DD HH:mm")}${this.$t("start")}`:`${e.format("YYYY-MM-DD HH:mm")} ${this.$t("start")}<br>${n.format("YYYY-MM-DD HH:mm")} ${this.$t("end")}`}contestIsRunning(t){let e,n;u.a.isDayjs(t.start_time)||(e=u()(t.start_time)),u.a.isDayjs(t.end_time)||(n=u()(t.end_time));const s=this.current_time;return s.isBefore(n)&&s.isAfter(e)}progressBarColor(t){return this.contestIsRunning(t)?"green":"grey"}percentageRunning(t){let e,n;if(!0===t.isEnd)return 100;u.a.isDayjs(t.start_time)||(e=u()(t.start_time)),u.a.isDayjs(t.end_time)||(n=u()(t.end_time));const s=this.current_time;if(s.isBefore(e))return 0;if(s.isAfter(n))return t.isEnd=!0,100;{const t=s.diff(e,"second"),a=n.diff(e,"second");return Math.trunc(Math.floor(100*t/a))}}};return Object(i["c"])([Object(r["c"])({default:[]})],t.prototype,"contest_list",void 0),Object(i["c"])([Object(d["d"])(1e4)],t.prototype,"updateCurrentTime",null),t=Object(i["c"])([Object(r["a"])({components:{ProgressBar:l["a"]}})],t),t})();var g=h,m=g,v=(n("9f54"),n("2877")),_=Object(v["a"])(m,s,a,!1,null,"274d2a9a",null);e["a"]=_.exports},5858:function(t,e,n){"use strict";var s=n("2754"),a=n.n(s);e["default"]=a.a},"5dbd":function(t,e,n){"use strict";n.d(e,"a",(function(){return u})),n.d(e,"d",(function(){return l})),n.d(e,"b",(function(){return d})),n.d(e,"f",(function(){return p})),n.d(e,"e",(function(){return h})),n.d(e,"c",(function(){return g}));var s=n("2ef0"),a=n.n(s);n("ddb0");const i=(...t)=>{},r=i;function c(t){return function(...e){r(t,...e)}}const o=c("Decorator mounted: ");function u(t,e){return function(n,s,i){o(`debounce, target:${n.constructor.name}, propertyName:${s}`);const r=i.value;return i.value=a.a.debounce(r,t,e),i}}function l(t=0){return function(e,n,s){o(`Interval, target:${e.constructor.name}, propertyName:${n}`);const a=s.value;s.value=function(...s){if("undefined"===typeof this.timer_||"undefined"===typeof this.timer_.length)throw new Error("You should mixin TimerMixin to your component");a.apply(this,s),this.timer_.push(setInterval(()=>{o(`${e.constructor.name}.${n} called.`),a.apply(this,s)},t))},r("mounted interval")}}function d(t,e,n){o(`Debuglogging, target:${t.constructor.name}, propertyName:${e}`);const s=n.value;n.value=function(...t){const n=t.map(t=>JSON.stringify(t)).join(),a=s.apply(this,t),i=JSON.stringify(a);return r(`Call: ${e}(${n}) => ${i}`),a}}function p(t,e,n){o(`WebSocketRequest, target:${t.constructor.name}, propertyName:${e}`);const s=n.value;n.value=function(...t){if(this.$socket.connected)return s.apply(this,t);alert("WebSocket服务未启动，请等待服务启动后提交\nWebSocket服务启动标志未:\n右上角显示在线人数")}}function h(t){return function(e,n,s){o(`Lock, target:${e.constructor.name}, propertyName:${n}`);const a=s.value;s.value=async function(...e){await t.acquireAsync();const n=a.apply(this,e);return t.release(),n}}}function g(t,e,n){const s=n.value;n.value=function(...t){try{return s.apply(this,t)}catch(e){alert(e.message)}}}},"626a":function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"observe-visibility",rawName:"v-observe-visibility",value:t.visibilityChanged,expression:"visibilityChanged"}],ref:"progressBarElement",class:t.progressBarClass,on:{mouseenter:t.trigger}},[n("div",{staticClass:"bar"})])},a=[],i=(n("ddb0"),n("9ab4")),r=n("6da9"),c=n("60a3"),o=n("1157"),u=n.n(o);const l=u.a;let d=(()=>{let t=class extends(Object(c["b"])(r["a"])){constructor(){super(...arguments),this.prevPercentage=0,this.element=null}visibilityChanged(t,e){t&&this.active?this.element.progress("set active"):this.element.progress("remove active")}updated(){this.mountFunc()}mounted(){this.mountFunc()}mountFunc(){null===this.element&&(this.element=l(this.$refs.progressBarElement)),this.prevPercentage!==this.percentage&&(this.element.progress({percent:this.percentage,autoSuccess:!1}),this.prevPercentage=this.percentage)}get progressBarClass(){const t=["ui","progress"];return this.size.length>0&&t.push(this.size),this.color.length>0&&t.push(this.color),this.active&&t.push("active"),t}trigger(){this.popupEvent(this.$refs.progressBarElement)}forceUpdate(){this.prevPercentage!==this.percentage&&this.$nextTick(this.$forceUpdate)}onSizeChange(){this.forceUpdate()}onColorChange(){this.forceUpdate()}onActiveChange(){this.forceUpdate()}onPercentageChange(){this.forceUpdate()}};return Object(i["c"])([Object(c["c"])({default:""})],t.prototype,"size",void 0),Object(i["c"])([Object(c["c"])({default:""})],t.prototype,"color",void 0),Object(i["c"])([Object(c["c"])({default:!1})],t.prototype,"active",void 0),Object(i["c"])([Object(c["c"])({default:0})],t.prototype,"percentage",void 0),Object(i["c"])([Object(c["c"])({default:t=>{}})],t.prototype,"popupEvent",void 0),Object(i["c"])([Object(c["d"])("size")],t.prototype,"onSizeChange",null),Object(i["c"])([Object(c["d"])("color")],t.prototype,"onColorChange",null),Object(i["c"])([Object(c["d"])("active")],t.prototype,"onActiveChange",null),Object(i["c"])([Object(c["d"])("percentage")],t.prototype,"onPercentageChange",null),t=Object(i["c"])([c["a"]],t),t})();var p=d,h=p,g=(n("ee78"),n("2877")),m=Object(g["a"])(h,s,a,!1,null,"75baf2bd",null);e["a"]=m.exports},"67e8":function(t,e,n){"use strict";var s=n("dd0d"),a=n.n(s);a.a},"6da9":function(t,e,n){"use strict";var s=n("9ab4"),a=n("1157"),i=n.n(a),r=(n("8665"),n("60a3")),c=n("2b0e");window.$=window.jQuery=i.a;let o=(()=>{let t=class extends c["a"]{};return t=Object(s["c"])([r["a"]],t),t})();e["a"]=o},9513:function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ui pagination menu",staticStyle:{"box-shadow":"none"}},[n("a",{class:"icon item "+(t.current_page?"":"disabled"),on:{click:function(e){t.current_page&&t.page(e,-t.current_page)}}},[n("i",{staticClass:"angle double left icon"})]),n("a",{class:"icon item "+(t.current_page?"":"disabled"),on:{click:function(e){t.current_page&&t.page(e,-1)}}},[n("i",{staticClass:"left chevron icon"})]),t._l(t.pageList,(function(e){return n("div",{key:e},[n("a",{class:(t.current_page+1==e?"active":"")+" item page",on:{click:function(e){return t.page(e)}}},[t._v(" "+t._s(e)+" ")])])})),n("a",{class:"icon item "+(t.current_page+1==Math.ceil(t.total/t.page_cnt)?"disabled":""),on:{click:function(e){t.current_page+1<Math.ceil(t.total/t.page_cnt)&&t.page(e,1)}}},[n("i",{staticClass:"right chevron icon"})]),n("a",{class:"icon item "+(t.current_page+1==Math.ceil(t.total/t.page_cnt)?"disabled":""),on:{click:function(e){t.current_page+1<Math.ceil(t.total/t.page_cnt)&&t.page(e,Math.ceil(t.total/t.page_cnt)-1-t.current_page)}}},[n("i",{staticClass:"angle double right icon"})])],2)},a=[],i=(n("ddb0"),n("9ab4")),r=n("1157"),c=n.n(r),o=n("60a3"),u=n("2b0e");c.a;let l=(()=>{let t=class extends u["a"]{constructor(){super(...arguments),this.total_menu=0}created(){let t=document.body.clientWidth;const e=1100;t>1127&&(t=e),this.total_menu=Math.max(0,Math.trunc(.7*t/42)-4)}get pageList(){const{current_page:t,page_cnt:e,total:n,total_menu:s}=this,a=Array.from(Array(Math.min(Math.ceil(n/e),s)).keys()).map((function(a){return t<s/2?Math.trunc(a+1):t+s/2+1>Math.ceil(n/e)?Math.trunc(Math.ceil(n/e)-s+1+a):Math.trunc(t+a-s/2+1)}));return this.$emit("pageUpdated",a),a}page(t,e){e?this.onPageChanged(null,e):this.onPageChanged(parseInt(t.target.innerText)-1)}};return Object(i["c"])([Object(o["c"])()],t.prototype,"total",void 0),Object(i["c"])([Object(o["c"])()],t.prototype,"page_cnt",void 0),Object(i["c"])([Object(o["c"])()],t.prototype,"current_page",void 0),Object(i["c"])([Object(o["c"])()],t.prototype,"onPageChanged",void 0),t=Object(i["c"])([o["a"]],t),t})();var d=l,p=d,h=n("2877"),g=Object(h["a"])(p,s,a,!1,null,"68aad065",null);e["a"]=g.exports},"9f54":function(t,e,n){"use strict";var s=n("2009"),a=n.n(s);a.a},dd0d:function(t,e,n){},e36e:function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ui padding container contest"},[n("h2",{staticClass:"ui dividing header"},[t._v(" "+t._s(t.$t("contest set"))+" ")]),n("div",{staticClass:"ui top attached tabular menu"},[n("a",{class:("contest"===t.current_column?"active":"")+" item",on:{click:function(e){t.current_column="contest"}}},[t._v(t._s(t.$t("test")))]),n("a",{class:("rank"===t.current_column?"active":"")+" item",on:{click:function(e){t.current_column="rank"}}},[t._v(t._s(t.$t("ranklist statistic")))])]),n("div",{directives:[{name:"show",rawName:"v-show",value:"contest"===t.current_column,expression:"current_column === 'contest'"}],staticClass:"ui bottom attached segment"},[n("div",{staticClass:"ui icon message"},[n("i",{staticClass:"notched circle loading icon"}),n("div",{staticClass:"content"},[n("div",{staticClass:"header"},[t._v(" "+t._s(t.$t("current server time"))+" ")]),n("p",{staticClass:"server_time"})])]),n("div",{staticClass:"ui grid"},[n("div",{staticClass:"row"},[n("div",{staticClass:"thirteen wide column"},[n("Pagination",{attrs:{current_page:t.current_page,page_cnt:t.page_cnt,total:t.total_number,"on-page-changed":t.page}})],1)])]),n("ContestView",{attrs:{contest_list:t.contest_list}}),n("div",{staticClass:"ui grid"},[n("div",{staticClass:"row"},[n("div",{staticClass:"thirteen wide column"},[n("Pagination",{attrs:{current_page:t.current_page,page_cnt:t.page_cnt,total:t.total_number,"on-page-changed":t.page}})],1)])])],1),n("div",{directives:[{name:"show",rawName:"v-show",value:"rank"===t.current_column,expression:"current_column === 'rank'"}],staticClass:"ui bottom attached segment"},[n("h3",{staticClass:"ui dividing header"},[t._v(t._s(t.$t("ranklist statistic")))]),n("div",{staticClass:"ui grid"},[n("div",{staticClass:"fourteen wide column"},[n("div",{staticClass:"ui fluid multiple search selection dropdown"},[n("input",{attrs:{name:"country",type:"hidden"},on:{change:function(e){t.select1=e.target.value}}}),n("i",{staticClass:"dropdown icon"}),n("div",{staticClass:"default text"},[t._v("Select Contest Or Input Contest ID")]),n("div",{staticClass:"menu"},t._l(t.total_contest_list,(function(e,s){return n("div",{key:s,staticClass:"item",attrs:{"data-value":e.contest_id}},[t._v(" "+t._s("Contest"+e.contest_id+" "+e.title)+" ")])})),0)])]),n("div",{staticClass:"two wide column"},[n("router-link",{staticClass:"primary button ui",attrs:{to:"/contest/rank/"+t.select1}},[t._v("Go")])],1)]),n("h3",{staticClass:"ui dividing header"},[t._v(t._s(t.$t("user submit statistics")))]),n("div",{staticClass:"ui grid"},[n("div",{staticClass:"fourteen wide column"},[n("div",{staticClass:"ui fluid multiple search selection dropdown"},[n("input",{attrs:{name:"country",type:"hidden"},on:{change:function(e){t.select2=e.target.value}}}),n("i",{staticClass:"dropdown icon"}),n("div",{staticClass:"default text"},[t._v("Select Contest Or Input Contest ID")]),n("div",{staticClass:"menu"},t._l(t.total_contest_list,(function(e,s){return n("div",{key:s,staticClass:"item",attrs:{"data-value":e.contest_id,title:e.title}},[t._v(t._s("Contest"+e.contest_id+" "+e.title)+" ")])})),0)])]),n("div",{staticClass:"two wide column"},[n("router-link",{staticClass:"primary button ui",attrs:{to:"/status/user/contest/"+t.select2}},[t._v("Go")])],1)])])])},a=[],i=(n("ddb0"),n("9ab4")),r=n("2cd4"),c=n("1157"),o=n.n(c),u=n("5a0c"),l=n.n(u),d=n("60a3"),p=n("5dbd"),h=n("19dd6"),g=n("9513"),m=n("3d1f");const v=o.a;let _=(()=>{let t=class extends(Object(d["b"])(r["a"],h["a"])){constructor(){super(...arguments),this.admin=!1,this.contest_list=[],this.total_contest_list=[],this.select1="",this.select2="",this.current_column="contest",this.page_cnt=50,this.current_page=0,this.total_number=0,this.prevGetPageCancelToken=null}created(){this.admin=this.$store.getters.admin;let t=this.$route.query.page;t=null===t||"undefined"===typeof t||isNaN(parseInt(t))?0:parseInt(t),this.current_page=t}mounted(){document.title="Contest Set -- "+document.title,this.axios.get("/api/contest/total").then(({data:t})=>{this.total_number=t.data}),this.getPage(),this.init()}setQuery(t){const e=Object.assign({},this.$route.query);Object.assign(e,t),this.$router.push({path:this.$route.path,query:e})}onCurrentPageChanged(t){this.setQuery({page:t})}onRouteQueryChanged(t){this.getPage(t)}onCurrentColumnChanged(){0===this.total_contest_list.length&&this.axios.get("/api/contest/list/all").then(({data:t})=>{this.total_contest_list=t.data})}page(t,e){this.current_page=e?this.current_page+e:t}cancelPrevGetPage(){null!==this.prevGetPageCancelToken&&this.prevGetPageCancelToken.cancel()}getPage(t){return this.cancelPrevGetPage(),this.axios.get("/api/contest/list",{params:Object.assign(this.getParams(),t),cancelToken:(this.prevGetPageCancelToken=this.axios.CancelToken.source()).token}).then(({data:t})=>{this.prevGetPageCancelToken=null,this.contest_list=t.data})}getParams(){const t=this.$route.query;for(const e in t)Object.prototype.hasOwnProperty.call(t,e)&&(null!==t[e]&&void 0!==t[e]||(t[e]="1"));return t}clock(){v(".server_time").text(l()().format("YYYY-MM-DD HH:mm:ss"))}init(){this.clock()}bindPopup(){this.admin&&v(".ui.padded.table").popup({title:"管理员视图",content:"白色背景竞赛属于普通用户可见竞赛，灰色背景竞赛为不可见竞赛,绿色背景竞赛为正在进行中的竞赛",position:"top center",boundary:"body"}),v(".visible.tag").popup({content:"点击可切换显示隐藏"}),v(".private.tag").popup({content:"点击可切换私有公有属性，公有属性不限制用户访问，私有属性需输入密码或列入列表才允许访问"}),v(".multiple.search").dropdown({fullTextSearch:!0})}};return Object(i["c"])([Object(d["d"])("current_page",{immediate:!0})],t.prototype,"onCurrentPageChanged",null),Object(i["c"])([Object(d["d"])("$route.query")],t.prototype,"onRouteQueryChanged",null),Object(i["c"])([Object(d["d"])("current_column")],t.prototype,"onCurrentColumnChanged",null),Object(i["c"])([Object(p["d"])(1e3)],t.prototype,"clock",null),t=Object(i["c"])([Object(d["a"])({components:{ContestView:m["a"],Pagination:g["a"]}})],t),t})();var b=_,f=b,C=(n("67e8"),n("2877")),y=n("5858"),j=Object(C["a"])(f,s,a,!1,null,"016f3a8d",null);"function"===typeof y["default"]&&Object(y["default"])(j);e["default"]=j.exports},ee78:function(t,e,n){"use strict";var s=n("0b52"),a=n.n(s);a.a}}]);
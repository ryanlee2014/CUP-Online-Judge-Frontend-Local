(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b20e252a"],{"0b52":function(t,e,n){},"111f":function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"zh-cn":{"context":"根据管理员设置，该页面禁止进入"},"en":{"context":"According to admin setup, you don\'t have privilege to access target page"},"ja":{"context":"都合によって、このページはアクセス禁止されている"}}'),delete t.options._Ctor}},"626a":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"observe-visibility",rawName:"v-observe-visibility",value:t.visibilityChanged,expression:"visibilityChanged"}],ref:"progressBarElement",class:t.progressBarClass,on:{mouseenter:t.trigger}},[n("div",{staticClass:"bar"})])},c=[],i=(n("d3b7"),n("4ae1"),n("25f0"),n("d4ec")),a=n("bee2"),o=n("262e"),s=n("99de"),u=n("7e84"),l=n("9ab4"),f=n("6da9"),p=n("60a3"),d=n("1157"),v=n.n(d);function h(t){function e(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}return function(){var n,r=Object(u["a"])(t);if(e()){var c=Object(u["a"])(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return Object(s["a"])(this,n)}}var b=v.a,m=function(t){Object(o["a"])(n,t);var e=h(n);function n(){var t;return Object(i["a"])(this,n),t=e.apply(this,arguments),t.prevPercentage=0,t.element=null,t}return Object(a["a"])(n,[{key:"visibilityChanged",value:function(t,e){t&&this.active?this.element.progress("set active"):this.element.progress("remove active")}},{key:"updated",value:function(){this.mountFunc()}},{key:"mounted",value:function(){this.mountFunc()}},{key:"mountFunc",value:function(){null===this.element&&(this.element=b(this.$refs.progressBarElement)),this.prevPercentage!==this.percentage&&(this.element.progress({percent:this.percentage,autoSuccess:!1}),this.prevPercentage=this.percentage)}},{key:"trigger",value:function(){this.popupEvent(this.$refs.progressBarElement)}},{key:"forceUpdate",value:function(){this.prevPercentage!==this.percentage&&this.$nextTick(this.$forceUpdate)}},{key:"onSizeChange",value:function(){this.forceUpdate()}},{key:"onColorChange",value:function(){this.forceUpdate()}},{key:"onActiveChange",value:function(){this.forceUpdate()}},{key:"onPercentageChange",value:function(){this.forceUpdate()}},{key:"progressBarClass",get:function(){var t=["ui","progress"];return this.size.length>0&&t.push(this.size),this.color.length>0&&t.push(this.color),this.active&&t.push("active"),t}}]),n}(Object(p["b"])(f["a"]));Object(l["c"])([Object(p["c"])({default:""})],m.prototype,"size",void 0),Object(l["c"])([Object(p["c"])({default:""})],m.prototype,"color",void 0),Object(l["c"])([Object(p["c"])({default:!1})],m.prototype,"active",void 0),Object(l["c"])([Object(p["c"])({default:0})],m.prototype,"percentage",void 0),Object(l["c"])([Object(p["c"])({default:function(t){}})],m.prototype,"popupEvent",void 0),Object(l["c"])([Object(p["d"])("size")],m.prototype,"onSizeChange",null),Object(l["c"])([Object(p["d"])("color")],m.prototype,"onColorChange",null),Object(l["c"])([Object(p["d"])("active")],m.prototype,"onActiveChange",null),Object(l["c"])([Object(p["d"])("percentage")],m.prototype,"onPercentageChange",null),m=Object(l["c"])([p["a"]],m);var y=m,_=y,g=(n("ee78"),n("2877")),j=Object(g["a"])(_,r,c,!1,null,"75baf2bd",null);e["a"]=j.exports},"6da9":function(t,e,n){"use strict";n("d3b7"),n("4ae1"),n("25f0");var r=n("d4ec"),c=n("262e"),i=n("99de"),a=n("7e84"),o=n("9ab4"),s=n("1157"),u=n.n(s),l=(n("8665"),n("60a3")),f=n("2b0e");function p(t){function e(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}return function(){var n,r=Object(a["a"])(t);if(e()){var c=Object(a["a"])(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return Object(i["a"])(this,n)}}window.$=window.jQuery=u.a;var d=function(t){Object(c["a"])(n,t);var e=p(n);function n(){return Object(r["a"])(this,n),e.apply(this,arguments)}return n}(f["a"]);d=Object(o["c"])([l["a"]],d),e["a"]=d},"886e":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ui container",attrs:{id:"contest_table"}},[2===t.mode?n("ContestNotStart"):t._e(),1===t.mode?n("LoginForm"):t._e(),3===t.mode?n("contest-mode"):t._e(),4===t.mode?n("LimitHostname",{attrs:{content:t.limit_content}}):t._e(),0===t.mode?n("div",{staticClass:"padding"},[n("h2",{staticClass:"ui dividing header"},[t._v(" "+t._s(t.$t("contest problem set"))+" "+t._s(t.cid)+" -- "+t._s(t.title)+" ")]),n("div",{staticClass:"ui grid"},[t._m(0),n("div",{staticClass:"row"},[n("div",{staticClass:"eleven wide column"},[n("table",{staticClass:"ui basic unstackable table",attrs:{id:"problemset",width:"95%"}},[n("thead",[n("tr",{staticClass:"toprow"},[n("th",{staticStyle:{"text-align":"center"},attrs:{width:"18%"}},[n("a",{staticStyle:{cursor:"pointer"},on:{click:function(e){return t.orderBy(0)}}},[0===t.type?n("i",{class:"sort numeric icon "+(t.order>0?"up":"down")}):n("i",{staticClass:"checkmark icon",staticStyle:{opacity:"0"}}),t._v(" "+t._s(t.$t("id"))+" ")])]),n("th",{attrs:{width:"44%"}},[n("a",{staticStyle:{cursor:"pointer"},on:{click:function(e){return t.orderBy(1)}}},[1===t.type?n("i",{class:"sort numeric icon "+(t.order>0?"up":"down")}):n("i",{staticClass:"checkmark icon",staticStyle:{opacity:"0"}}),t._v(" "+t._s(t.$t("title")))])]),t.now.isAfter(t.end_time)?n("th",{attrs:{width:"10%"}}):t._e(),n("th",{staticStyle:{"text-align":"center"},attrs:{width:"16%"}},[n("a",{staticStyle:{cursor:"pointer"}},[n("span",{on:{click:function(e){return t.orderBy(2)}}},[2===t.type?n("i",{class:"sort numeric icon "+(t.order>0?"up":"down")}):t._e(),t._v(" "+t._s(t.$t("accept")))])]),t._v("/"),n("a",{staticStyle:{cursor:"pointer"}},[n("span",{on:{click:function(e){return t.orderBy(3)}}},[3===t.type?n("i",{class:"sort numeric icon "+(t.order>0?"up":"down")}):t._e(),t._v(t._s(t.$t("submit")))])])]),n("th",{staticStyle:{"text-align":"center"},attrs:{width:"12%"}},[n("a",{staticStyle:{cursor:"pointer"},on:{click:function(e){return t.orderBy(4)}}},[4===t.type?n("i",{class:"sort numeric icon "+(t.order>0?"up":"down")}):t._e(),t._v(" "+t._s(t.$t("accept percentage"))+" ")])])])]),n("transition-group",{attrs:{mode:"out-in",name:"list-complete",tag:"tbody"}},t._l(t.problem_table,(function(e,r){return n("tr",{key:e.pnum,class:(1===e.ac?"positive":-1===e.ac?"negative":"")+" list-complete-item",attrs:{id:"popup"+r},on:{mouseenter:function(n){return t.triggerPopup(r,e.pid)}}},[n("td",{staticClass:"center aligned"},[t._v(t._s(e.oj_name?e.oj_name:e.pid?"LOCAL ":"")+t._s(e.pid)),e.pid?n("br"):t._e(),t._v("Problem "+t._s(e.pnum+1001)+" ")]),n("td",[1===e.ac?n("i",{staticClass:"checkmark icon"}):-1===e.ac?n("i",{staticClass:"remove icon"}):n("i",{staticClass:"checkmark icon",staticStyle:{opacity:"0"}}),t.dayjs().isBefore(t.end_time)&&t.dayjs().isAfter(t.start_time)?n("router-link",{attrs:{to:"/contest/problem/"+t.cid+"/"+e.pnum},domProps:{innerHTML:t._s(t.contest(e.title,e.pnum))}}):n("router-link",{attrs:{to:"/problem/submit/"+e.pid},domProps:{innerHTML:t._s(t.contest(e.title,e.pnum))}}),t.admin&&t.getLabel(e.pid).length>0?n("br"):t._e(),t.admin?n("div",{staticStyle:{"margin-left":"20px"}},t._l(t.getLabel(e.pid),(function(e){return n("router-link",{directives:[{name:"show",rawName:"v-show",value:t.admin,expression:"admin"}],key:e,class:"ui "+t.getLabelColor(e)+" label",staticStyle:{"margin-top":"4px"},attrs:{to:"/problemset?label="+e}},[t._v(" "+t._s(e)+" ")])})),1):t._e()],1),t.now.isAfter(t.end_time)?n("td",[n("router-link",{attrs:{to:"/tutorial/"+e.pid}},[t._v(t._s(t.$t("solution")))])],1):t._e(),n("td",{staticStyle:{"text-align":"center"}},[t._v(t._s(e.accepted)+"/"+t._s(e.submit))]),n("td",{staticStyle:{"text-align":"center"}},[t._v(t._s((100*e.accepted/Math.max(e.submit,1)).toString().substring(0,4))+" % ")])])})),0)],1)]),n("div",{staticClass:"five wide column"},[n("div",[n("ContestInfo",{attrs:{admin:t.admin,cid:t.cid,description:t.description,end_time:t.end_time,private_contest:t.private_contest,start_time:t.start_time,title:t.title}}),n("br")],1)])])])]):t._e()],1)},c=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row"},[n("div",{staticClass:"sixteen wide column"})])}],i=(n("a4d3"),n("e01a"),n("99af"),n("4de4"),n("4160"),n("c975"),n("d81d"),n("d3b7"),n("4ae1"),n("ac1f"),n("25f0"),n("1276"),n("498a"),n("159b"),n("5530")),a=(n("96cf"),n("1da1")),o=n("d4ec"),s=n("bee2"),u=n("262e"),l=n("99de"),f=n("7e84"),p=n("9ab4"),d=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},v=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"ui negative message"},[n("div",{staticClass:"header"},[n("i",{staticClass:"ban icon"}),t._v(" 竞赛尚未开始 ")]),n("p",[t._v("请等待竞赛开始后刷新 ")])])])}],h=n("2b0e"),b=n("60a3");function m(t){function e(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}return function(){var n,r=Object(f["a"])(t);if(e()){var c=Object(f["a"])(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return Object(l["a"])(this,n)}}var y=function(t){Object(u["a"])(n,t);var e=m(n);function n(){return Object(o["a"])(this,n),e.apply(this,arguments)}return n}(h["a"]);y=Object(p["c"])([b["a"]],y);var _=y,g=_,j=n("2877"),O=Object(j["a"])(g,d,v,!1,null,"18109bdc",null),w=O.exports,k=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},C=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",{staticClass:"ui dividing header"},[t._v("私有竞赛/作业")]),n("form",{staticClass:"ui form",attrs:{id:"contest_form",method:"post"}},[n("div",{staticClass:"fields"},[n("div",{staticClass:"six wide field"},[n("label",[t._v("请输入密码")]),n("input",{staticClass:"input-mini",attrs:{id:"contest_pass",name:"password",type:"password"}})])]),n("input",{staticClass:"ui primary button",attrs:{type:"submit"}})])])}],R=n("1157"),x=n.n(R);function S(t){function e(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}return function(){var n,r=Object(f["a"])(t);if(e()){var c=Object(f["a"])(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return Object(l["a"])(this,n)}}var P=x.a,M=function(t){Object(u["a"])(n,t);var e=S(n);function n(){return Object(o["a"])(this,n),e.apply(this,arguments)}return Object(s["a"])(n,[{key:"mounted",value:function(){var t=this;P("#contest_form").submit((function(){return t.axios.post("/api/contest/password/".concat(t.$route.params.contest_id),{password:P("#contest_pass").val()}).then((function(e){var n=e.data;"OK"===n.status?t.$parent.mode=0:alert(n.statement)})),!1}))}}]),n}(h["a"]);M=Object(p["c"])([b["a"]],M);var D=M,E=D,B=Object(j["a"])(E,k,C,!1,null,"3bb2b0fe",null),L=B.exports,A=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ui raised segment"},[n("div",{staticClass:"ui grid"},[n("div",{staticClass:"row"}),n("div",{staticClass:"row"}),n("div",{staticClass:"row"},[n("div",{staticClass:"sixteen wide column"},[n("contest-problem-progress-bar",{attrs:{"start-time":t.start_time,"end-time":t.end_time}})],1)]),n("div",{staticClass:"row"},[n("div",{staticClass:"ui basic segment"},[n("p",[t._v(t._s(t.description))])])])]),n("div",{class:"ui top right attached label "+(t.private_contest?"red":"green")},[t._v(" "+t._s(t.private_contest?t.$t("private"):t.$t("public"))+" ")]),n("div",{class:"ui top left attached "+(t.now.isAfter(t.end_time)?"red":t.now.isBefore(t.start_time)?"grey":"green")+" label"},[t.now.isAfter(t.end_time)?n("span",{staticClass:"red"},[t._v(t._s(t.$t("end")))]):t.now.isBefore(t.start_time)?n("span",{staticClass:"red"},[t._v("Pending")]):n("span",{staticClass:"green"},[t._v(t._s(t.$t("running")))])])])},T=[],I=n("5a0c"),H=n.n(I),z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("progress-bar",{ref:"progress",attrs:{popupEvent:t.trigger,active:!1,size:"standard",color:"green",percentage:t.percentage}})},Y=[],U=n("626a");function F(t){function e(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}return function(){var n,r=Object(f["a"])(t);if(e()){var c=Object(f["a"])(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return Object(l["a"])(this,n)}}var N=function(t){Object(u["a"])(n,t);var e=F(n);function n(){var t;return Object(o["a"])(this,n),t=e.apply(this,arguments),t.start=H()(),t.end=H()(),t.period=1<<30,t}return Object(s["a"])(n,[{key:"onStartTimeChanged",value:function(t){this.start=H()(t),this.period=Math.abs(this.end.diff(this.start))}},{key:"onEndTimeChanged",value:function(t){this.end=H()(t),this.period=Math.abs(this.end.diff(this.start))}},{key:"getPopupHtml",value:function(){return'<div class="content">\n            '.concat(this.$t("start time"),": ").concat(this.startTime.format("YYYY-MM-DD HH:mm:ss"),"\n            <br>\n            ").concat(this.$t("end time"),": ").concat(this.endTime.format("YYYY-MM-DD HH:mm:ss"),"\n            </div>")}},{key:"trigger",value:function(t){$(t).popup({hoverable:!0,html:this.getPopupHtml()}).popup("show")}},{key:"percentage",get:function(){var t=H()(),e=t.diff(this.start);return Math.min(100*Math.max(e,0)/this.period,100)}}]),n}(h["a"]);Object(p["c"])([Object(b["c"])({default:H()()})],N.prototype,"startTime",void 0),Object(p["c"])([Object(b["c"])({default:H()()})],N.prototype,"endTime",void 0),Object(p["c"])([Object(b["d"])("startTime")],N.prototype,"onStartTimeChanged",null),Object(p["c"])([Object(b["d"])("endTime")],N.prototype,"onEndTimeChanged",null),N=Object(p["c"])([Object(b["a"])({components:{ProgressBar:U["a"]}})],N);var W=N,K=W,J=Object(j["a"])(K,z,Y,!1,null,"09eabde6",null),Q=J.exports;function q(t){function e(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}return function(){var n,r=Object(f["a"])(t);if(e()){var c=Object(f["a"])(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return Object(l["a"])(this,n)}}var G=function(t){Object(u["a"])(n,t);var e=q(n);function n(){var t;return Object(o["a"])(this,n),t=e.apply(this,arguments),t.now=H()(),t}return Object(s["a"])(n,[{key:"mounted",value:function(){var t=this;setInterval((function(){t.now=H()()}),1e3)}}]),n}(h["a"]);Object(p["c"])([Object(b["c"])({default:H()()})],G.prototype,"start_time",void 0),Object(p["c"])([Object(b["c"])({default:H()()})],G.prototype,"end_time",void 0),Object(p["c"])([Object(b["c"])({default:""})],G.prototype,"description",void 0),Object(p["c"])([Object(b["c"])({default:""})],G.prototype,"title",void 0),Object(p["c"])([Object(b["c"])({default:!1})],G.prototype,"admin",void 0),Object(p["c"])([Object(b["c"])({default:!1})],G.prototype,"private_contest",void 0),Object(p["c"])([Object(b["c"])({default:0})],G.prototype,"cid",void 0),G=Object(p["c"])([Object(b["a"])({components:{ContestProblemProgressBar:Q}})],G);var V=G,X=V,Z=Object(j["a"])(X,A,T,!1,null,"07a7807e",null),tt=Z.exports,et=n("d3a2"),nt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ui negative message"},[t._m(0),n("p",[t._v(t._s(t.content))])])},rt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header"},[n("i",{staticClass:"ban icon"}),t._v("访问限制")])}];function ct(t){function e(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}return function(){var n,r=Object(f["a"])(t);if(e()){var c=Object(f["a"])(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return Object(l["a"])(this,n)}}var it=function(t){Object(u["a"])(n,t);var e=ct(n);function n(){return Object(o["a"])(this,n),e.apply(this,arguments)}return n}(h["a"]);Object(p["c"])([Object(b["c"])({default:""})],it.prototype,"content",void 0),it=Object(p["c"])([b["a"]],it);var at=it,ot=at,st=Object(j["a"])(ot,nt,rt,!1,null,"1446e3db",null),ut=st.exports,lt=n("2cd4"),ft=n("2f62"),pt=n("2ef0"),dt=n.n(pt),vt=n("92f1");function ht(t){function e(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}return function(){var n,r=Object(f["a"])(t);if(e()){var c=Object(f["a"])(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return Object(l["a"])(this,n)}}var bt={},mt=x.a,yt=function(t){Object(u["a"])(n,t);var e=ht(n);function n(){var t;return Object(o["a"])(this,n),t=e.apply(this,arguments),t.colorSet=["red","orange","yellow","olive","green","teal","blue","violet","purple","pink","brown","grey"],t.colorMap={},t.cid=0,t.problem_table=[],t.start_time=H()(),t.end_time=H()(),t.description="",t.title="",t.now=H()(),t.problemInfo={},t.current_mode=0,t.order=1,t.type=0,t.contest_mode=!1,t.limit_content="",t.private_contest=!1,t.dayjs=H.a,t}return Object(s["a"])(n,[{key:"created",value:function(){this.cid=parseInt(this.$route.params.contest_id)}},{key:"mounted",value:function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=this.$route.params.contest_id,document.title="Contest ".concat(e," -- ").concat(document.title),t.next=4,this.getInfo();case 4:this.run(this.run);case 5:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"getInfo",value:function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.admin||this.contest_manager){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,this.axios.get("/api/contest/problem_info/".concat(this.cid)).then((function(t){var n=t.data;if("OK"===n.status){var r=n.data;r.forEach((function(t){e.problemInfo[t.problem_id]=t}))}}));case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"getLabelColor",value:function(t){return Object.prototype.hasOwnProperty.call(this.colorMap,t)||(this.colorMap[t]=this.colorSet[Math.floor(Math.random()*this.colorSet.length)]),this.colorMap[t]}},{key:"triggerPopup",value:function(t,e){var n=this.problemDetail(e);mt("#popup"+t).popup({hoverable:!0,html:n}).popup("show")}},{key:"problemDetail",value:function(t){var e=this.problemInfo[t];if(e){var n=e.accepted,r=e.submit,c=Math.floor(100*n/Math.max(r,1));return'<div class="content">\n本题历史统计<br>提交: '.concat(r," 通过:").concat(n," 通过率:").concat(c,"%\n</div>")}return""}},{key:"hasLabel",value:function(t){return this.getLabel(t).length>0}},{key:"getLabel",value:function(t){if(Object.prototype.hasOwnProperty.call(bt,t))return bt[t];var e=this.problemInfo[t];if(e){var n=e.label,r="string"===typeof n?n.split(" ").map((function(t){return t.trim()})).filter((function(t){return t.length>0})):[];return r.sort((function(t,e){return"简单"===t||"普通"===t||"中等"===t||"困难"===t?-1:"简单"===e||"普通"===e||"中等"===e||"困难"===e?1:t<e?-1:t===e?0:1})),bt[t]=r,r}}},{key:"run",value:function(t){var e=this,n=this.$route.params.contest_id,r=this;this.cid=parseInt(n),this.axios.get("/api/contest/problem/"+n).then((function(n){console.log(n);var c=n.data;if("OK"!==c.status){if(console.log(c),"Permission denied"===c.statement)return void(r.mode=1);if(101===c.error_code)return void(r.mode=2);if(c.contest_mode)return void(r.mode=3)}dt.a.forEach(c.data,(function(t){t.accepted||(t.accepted=0),t.submit||(t.submit=0)}));var i=c.limit,o=c.contest_mode;if(c.admin&&(i=null,o=!1),i&&-1===location.href.indexOf(i))return r.mode=4,void(r.limit_content="根据管理员设置的策略，本次contest请使用"+i+"访问");r.problem_table=c.data,e.problem_table.forEach(function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(n){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!n.title){t.next=4;break}return t.next=3,e.renderRawAsync(n.title);case 3:n.title=t.sent;case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());var s=c.info;r.start_time=H()(s.start_time),r.end_time=H()(s.end_time),r.title=s.title,r.contest_mode=o,r.description=s.description,r.private_contest=Boolean(s.private),"function"===typeof t&&t()}))}},{key:"detect_source",value:function(t){return t.oj_name&&"local"!==t.oj_name.toLowerCase()?t.oj_name.toLowerCase():"new"}},{key:"contest",value:function(t,e){return this.contest_mode?"Problem "+String.fromCharCode("A".charCodeAt(0)+parseInt(e)):t}},{key:"orderBy",value:function(t){var e=this;e.type===t&&(e.order=-e.order);var n=function(t,n){return e.order*(t.pnum-n.pnum)},r=function(t,n){return e.order*(t.title>n.title?1:t.title<n.title?-1:0)},c=function(t,n){return e.order*(t.submit-n.submit)},i=function(t,n){return e.order*(t.accepted-n.accepted)},a=function(t,n){var r=t.accepted/Math.max(t.submit,1),c=n.accepted/Math.max(n.submit,1);return e.order*(r-c)},o=[n,r,i,c,a];e.problem_table.sort(o[t]),e.type=t}},{key:"mode",get:function(){return this.current_mode},set:function(t){var e=t!==this.current_mode;this.current_mode=t,e&&this.run(this.run)}}]),n}(Object(b["b"])(lt["a"],vt["a"]));yt=Object(p["c"])([Object(b["a"])({components:{ContestProblemProgressBar:Q,ContestNotStart:w,LoginForm:L,ContestInfo:tt,ContestMode:et["a"],LimitHostname:ut},computed:Object(i["a"])({},Object(ft["b"])(["admin","contest_manager"]))})],yt);var _t=yt,gt=_t,jt=(n("ac05"),Object(j["a"])(gt,r,c,!1,null,"d646078a",null));e["default"]=jt.exports},"92f1":function(t,e,n){"use strict";n("d3b7"),n("4ae1"),n("25f0"),n("96cf");var r=n("1da1"),c=n("d4ec"),i=n("bee2"),a=n("262e"),o=n("99de"),s=n("7e84"),u=n("9ab4"),l=n("2b0e"),f=n("60a3"),p=n("ebb0"),d=n.n(p),v=n("a390"),h=n.n(v);function b(t){function e(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}return function(){var n,r=Object(s["a"])(t);if(e()){var c=Object(s["a"])(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return Object(o["a"])(this,n)}}var m=function(t){Object(a["a"])(n,t);var e=b(n);function n(){var t;return Object(c["a"])(this,n),t=e.apply(this,arguments),t.originalWorker=new h.a,t}return Object(i["a"])(n,[{key:"created",value:function(){this.worker_=new d.a(this.originalWorker)}},{key:"beforeDestroy",value:function(){this.originalWorker.terminate()}},{key:"renderAsync",value:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",this.worker_.postMessage({type:"render",content:e}));case 1:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()},{key:"renderRawAsync",value:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",this.worker_.postMessage({type:"renderRaw",content:e}));case 1:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()}]),n}(l["a"]);m=Object(u["c"])([f["a"]],m),e["a"]=m},a390:function(t,e,n){"use strict";t.exports=function(){return new Worker("/eb3f4807b2eab7f28044.worker.js")}},ac05:function(t,e,n){"use strict";var r=n("edef"),c=n.n(r);c.a},bc99:function(t,e,n){"use strict";var r=n("111f"),c=n.n(r);e["default"]=c.a},d3a2:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ui negative message"},[n("div",{staticClass:"header"},[n("i",{staticClass:"ban icon"}),t._v(t._s(t.$t("contest mode")))]),n("p",[t._v(t._s(t.$t("context")))])])},c=[],i=(n("d3b7"),n("4ae1"),n("25f0"),n("d4ec")),a=n("262e"),o=n("99de"),s=n("7e84"),u=n("9ab4"),l=n("60a3"),f=n("2b0e");function p(t){function e(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}return function(){var n,r=Object(s["a"])(t);if(e()){var c=Object(s["a"])(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return Object(o["a"])(this,n)}}var d=function(t){Object(a["a"])(n,t);var e=p(n);function n(){return Object(i["a"])(this,n),e.apply(this,arguments)}return n}(f["a"]);d=Object(u["c"])([l["a"]],d);var v=d,h=v,b=n("2877"),m=n("bc99"),y=Object(b["a"])(h,r,c,!1,null,"5816c0f2",null);"function"===typeof m["default"]&&Object(m["default"])(y);e["a"]=y.exports},ebb0:function(t,e,n){"use strict";var r=0;function c(t,e){var n=e.data;if(Array.isArray(n)&&!(n.length<2)){var r=n[0],c=n[1],i=n[2],a=t._callbacks[r];a&&(delete t._callbacks[r],a(c,i))}}function i(t){var e=this;e._worker=t,e._callbacks={},t.addEventListener("message",(function(t){c(e,t)}))}i.prototype.postMessage=function(t){var e=this,n=r++,i=[n,t];return new Promise((function(t,r){if(e._callbacks[n]=function(e,n){if(e)return r(new Error(e.message));t(n)},"undefined"!==typeof e._worker.controller){var a=new MessageChannel;a.port1.onmessage=function(t){c(e,t)},e._worker.controller.postMessage(i,[a.port2])}else e._worker.postMessage(i)}))},t.exports=i},edef:function(t,e,n){},ee78:function(t,e,n){"use strict";var r=n("0b52"),c=n.n(r);c.a}}]);
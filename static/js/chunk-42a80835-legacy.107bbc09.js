(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-42a80835"],{"111f":function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"zh-cn":{"context":"根据管理员设置，该页面禁止进入"},"en":{"context":"According to admin setup, you don\'t have privilege to access target page"},"ja":{"context":"都合によって、このページはアクセス禁止されている"}}'),delete t.options._Ctor}},"886e":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ui container",attrs:{id:"contest_table"}},[2===t.mode?n("ContestNotStart"):t._e(),1===t.mode?n("LoginForm"):t._e(),3===t.mode?n("contest-mode"):t._e(),4===t.mode?n("LimitHostname",{attrs:{content:t.limit_content}}):t._e(),0===t.mode?n("div",{staticClass:"padding"},[n("h2",{staticClass:"ui dividing header"},[t._v(" "+t._s(t.$t("contest problem set"))+" ")]),n("div",{staticClass:"ui grid"},[n("div",{staticClass:"row"},[n("div",{staticClass:"eleven wide column"},[n("table",{staticClass:"ui basic unstackable table",attrs:{id:"problemset",width:"95%"}},[n("thead",[n("tr",{staticClass:"toprow"},[n("th",{staticStyle:{"text-align":"center"},attrs:{width:"18%"},on:{click:function(e){return t.orderBy(0)}}},[n("a",{staticStyle:{cursor:"pointer"}},[0===t.type?n("i",{class:"sort numeric icon "+(t.order>0?"up":"down")}):n("i",{staticClass:"checkmark icon",staticStyle:{opacity:"0"}}),t._v(" "+t._s(t.$t("id"))+" ")])]),n("th",{attrs:{width:"44%"},on:{click:function(e){return t.orderBy(1)}}},[n("a",{staticStyle:{cursor:"pointer"}},[1===t.type?n("i",{class:"sort numeric icon "+(t.order>0?"up":"down")}):n("i",{staticClass:"checkmark icon",staticStyle:{opacity:"0"}}),t._v(" "+t._s(t.$t("title")))])]),t.now.isAfter(t.end_time)?n("th",{attrs:{width:"10%"}}):t._e(),n("th",{staticStyle:{"text-align":"center"},attrs:{width:"16%"}},[n("a",{staticStyle:{cursor:"pointer"}},[n("span",{on:{click:function(e){return t.orderBy(2)}}},[2===t.type?n("i",{class:"sort numeric icon "+(t.order>0?"up":"down")}):t._e(),t._v(" "+t._s(t.$t("accept")))])]),t._v("/"),n("a",{staticStyle:{cursor:"pointer"}},[n("span",{on:{click:function(e){return t.orderBy(3)}}},[3===t.type?n("i",{class:"sort numeric icon "+(t.order>0?"up":"down")}):t._e(),t._v(t._s(t.$t("submit")))])])]),n("th",{staticStyle:{"text-align":"center"},attrs:{width:"12%"},on:{click:function(e){return t.orderBy(4)}}},[n("a",{staticStyle:{cursor:"pointer"}},[4===t.type?n("i",{class:"sort numeric icon "+(t.order>0?"up":"down")}):t._e(),t._v(" "+t._s(t.$t("accept percentage")))])])])]),n("tbody",t._l(t.problem_table,(function(e,r){return n("tr",{key:r,class:1===e.ac?"positive":-1===e.ac?"negative":"",attrs:{id:"popup"+r},on:{mouseenter:function(n){return t.triggerPopup(r,e.pid)}}},[n("td",{staticClass:"center aligned"},[t._v(t._s(e.oj_name?e.oj_name:e.pid?"LOCAL ":"")+t._s(e.pid)),e.pid?n("br"):t._e(),t._v("Problem "+t._s(e.pnum+1001)+" ")]),n("td",[1===e.ac?n("i",{staticClass:"checkmark icon"}):-1===e.ac?n("i",{staticClass:"remove icon"}):n("i",{staticClass:"checkmark icon",staticStyle:{opacity:"0"}}),t.dayjs().isBefore(t.end_time)&&t.dayjs().isAfter(t.start_time)?n("router-link",{attrs:{to:"/contest/problem/"+t.cid+"/"+e.pnum},domProps:{innerHTML:t._s(t.contest(e.title,e.pnum))}}):n("router-link",{attrs:{to:"/problem/submit/"+e.pid},domProps:{innerHTML:t._s(t.contest(e.title,e.pnum))}})],1),t.now.isAfter(t.end_time)?n("td",[n("router-link",{attrs:{to:"/tutorial/"+e.pid}},[t._v(t._s(t.$t("solution")))])],1):t._e(),n("td",{staticStyle:{"text-align":"center"}},[t._v(t._s(e.accepted)+"/"+t._s(e.submit))]),n("td",{staticStyle:{"text-align":"center"}},[t._v(t._s((100*e.accepted/Math.max(e.submit,1)).toString().substring(0,4))+" % ")])])})),0)])]),n("div",{staticClass:"five wide column"},[n("div",[n("ContestInfo",{attrs:{admin:t.admin,cid:t.cid,description:t.description,end_time:t.end_time,private_contest:t.private_contest,start_time:t.start_time,title:t.title}}),n("br")],1)])])])]):t._e()],1)},c=[],i=(n("a4d3"),n("e01a"),n("99af"),n("4160"),n("c975"),n("d3b7"),n("4ae1"),n("25f0"),n("159b"),n("5530")),a=(n("96cf"),n("1da1")),o=n("d4ec"),s=n("bee2"),u=n("262e"),l=n("99de"),f=n("7e84"),d=n("9ab4"),p=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},m=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"ui negative message"},[n("div",{staticClass:"header"},[n("i",{staticClass:"ban icon"}),t._v(" 竞赛尚未开始 ")]),n("p",[t._v("请等待竞赛开始后刷新 ")])])])}],v=n("2b0e"),_=n("60a3");function b(t){function e(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}return function(){var n,r=Object(f["a"])(t);if(e()){var c=Object(f["a"])(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return Object(l["a"])(this,n)}}var h=function(t){Object(u["a"])(n,t);var e=b(n);function n(){return Object(o["a"])(this,n),e.apply(this,arguments)}return n}(v["a"]);h=Object(d["c"])([_["a"]],h);var y=h,j=y,g=n("2877"),O=Object(g["a"])(j,p,m,!1,null,"18109bdc",null),w=O.exports,k=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},C=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",{staticClass:"ui dividing header"},[t._v("私有竞赛/作业")]),n("form",{staticClass:"ui form",attrs:{id:"contest_form",method:"post"}},[n("div",{staticClass:"fields"},[n("div",{staticClass:"six wide field"},[n("label",[t._v("请输入密码")]),n("input",{staticClass:"input-mini",attrs:{id:"contest_pass",name:"password",type:"password"}})])]),n("input",{staticClass:"ui primary button",attrs:{type:"submit"}})])])}],R=n("1157"),x=n.n(R);function $(t){function e(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}return function(){var n,r=Object(f["a"])(t);if(e()){var c=Object(f["a"])(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return Object(l["a"])(this,n)}}var S=x.a,D=function(t){Object(u["a"])(n,t);var e=$(n);function n(){return Object(o["a"])(this,n),e.apply(this,arguments)}return Object(s["a"])(n,[{key:"mounted",value:function(){var t=this;S("#contest_form").submit((function(){return t.axios.post("/api/contest/password/".concat(t.$route.params.contest_id),{password:S("#contest_pass").val()}).then((function(e){var n=e.data;"OK"===n.status?t.$parent.mode=0:alert(n.statement)})),!1}))}}]),n}(v["a"]);D=Object(d["c"])([_["a"]],D);var M=D,P=M,A=Object(g["a"])(P,k,C,!1,null,"3bb2b0fe",null),E=A.exports,I=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ui raised segment"},[n("h1"),n("h2",{staticClass:"ui header",staticStyle:{"text-align":"center"}},[n("i",{staticClass:"star outline icon"}),t._v(t._s(t.$t("contest"))+" "+t._s(t.cid))]),n("h2",{staticClass:"ui header",staticStyle:{"text-align":"center"}},[t._v(t._s(t.title))]),n("p",[t._v(t._s(t.description))]),n("div",{staticStyle:{"text-align":"center"}},[t._v(t._s(t.$t("start time"))+" "+t._s(t.start_time.format("YYYY-MM-DD HH:mm:ss"))+" "),n("br"),t._v(" "+t._s(t.$t("now"))+" "),n("span",{attrs:{id:"nowdate"}},[t._v(t._s(t.now.format("YYYY-MM-DD HH:mm:ss")))]),n("br"),t._v(t._s(t.$t("end time"))+" "+t._s(t.end_time.format("YYYY-MM-DD HH:mm:ss"))+" ")]),n("div",{class:"ui top right attached label "+(t.private_contest?"red":"green")},[t._v(t._s(t.private_contest?t.$t("private"):t.$t("public"))+" ")]),n("div",{class:"ui top left attached "+(t.now.isAfter(t.end_time)?"red":t.now.isBefore(t.start_time)?"grey":"green")+" label"},[t.now.isAfter(t.end_time)?n("span",{staticClass:"red"},[t._v(t._s(t.$t("end")))]):t.now.isBefore(t.start_time)?n("span",{staticClass:"red"},[t._v("Pending")]):n("span",{staticClass:"green"},[t._v(t._s(t.$t("running")))])]),n("div",{staticStyle:{"text-align":"center"}},[n("div",{staticClass:"row padding"},[n("div",{staticClass:"ui buttons mini"},[t.admin?n("a",{staticClass:"ui button orange",attrs:{href:"/copystatus.php?cid="+t.cid}},[t._v("判重表")]):t._e(),t.admin?n("a",{staticClass:"ui button yellow",attrs:{href:"/copymap.php?cid="+t.cid}},[t._v("判重图")]):t._e()])])])])},Y=[],L=n("5a0c"),B=n.n(L);function H(t){function e(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}return function(){var n,r=Object(f["a"])(t);if(e()){var c=Object(f["a"])(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return Object(l["a"])(this,n)}}var W=function(t){Object(u["a"])(n,t);var e=H(n);function n(){var t;return Object(o["a"])(this,n),t=e.apply(this,arguments),t.now=B()(),t}return Object(s["a"])(n,[{key:"mounted",value:function(){var t=this;setInterval((function(){t.now=B()()}),1e3)}}]),n}(v["a"]);Object(d["c"])([Object(_["c"])({default:B()()})],W.prototype,"start_time",void 0),Object(d["c"])([Object(_["c"])({default:B()()})],W.prototype,"end_time",void 0),Object(d["c"])([Object(_["c"])({default:""})],W.prototype,"description",void 0),Object(d["c"])([Object(_["c"])({default:""})],W.prototype,"title",void 0),Object(d["c"])([Object(_["c"])({default:!1})],W.prototype,"admin",void 0),Object(d["c"])([Object(_["c"])({default:!1})],W.prototype,"private_contest",void 0),Object(d["c"])([Object(_["c"])({default:0})],W.prototype,"cid",void 0),W=Object(d["c"])([_["a"]],W);var K=W,F=K,J=Object(g["a"])(F,I,Y,!1,null,"0fca7388",null),N=J.exports,T=n("d3a2"),z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ui negative message"},[t._m(0),n("p",[t._v(t._s(t.content))])])},q=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header"},[n("i",{staticClass:"ban icon"}),t._v("访问限制")])}];function G(t){function e(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}return function(){var n,r=Object(f["a"])(t);if(e()){var c=Object(f["a"])(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return Object(l["a"])(this,n)}}var Q=function(t){Object(u["a"])(n,t);var e=G(n);function n(){return Object(o["a"])(this,n),e.apply(this,arguments)}return n}(v["a"]);Object(d["c"])([Object(_["c"])({default:""})],Q.prototype,"content",void 0),Q=Object(d["c"])([_["a"]],Q);var U=Q,V=U,X=Object(g["a"])(V,z,q,!1,null,"1446e3db",null),Z=X.exports,tt=n("2cd4"),et=n("2f62"),nt=n("2ef0"),rt=n.n(nt),ct=n("92f1");function it(t){function e(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}return function(){var n,r=Object(f["a"])(t);if(e()){var c=Object(f["a"])(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return Object(l["a"])(this,n)}}var at=x.a,ot=function(t){Object(u["a"])(n,t);var e=it(n);function n(){var t;return Object(o["a"])(this,n),t=e.apply(this,arguments),t.cid=0,t.problem_table=[],t.start_time=B()(),t.end_time=B()(),t.description="",t.title="",t.now=B()(),t.problemInfo={},t.current_mode=0,t.order=1,t.type=0,t.contest_mode=!1,t.limit_content="",t.private_contest=!1,t.dayjs=B.a,t}return Object(s["a"])(n,[{key:"created",value:function(){this.cid=parseInt(this.$route.params.contest_id)}},{key:"mounted",value:function(){var t=this.$route.params.contest_id;document.title="Contest ".concat(t," -- ").concat(document.title),this.getInfo(),this.run(this.run)}},{key:"getInfo",value:function(){var t=this;(this.admin||this.contest_manager)&&this.axios.get("/api/contest/problem_info/".concat(this.cid)).then((function(e){var n=e.data;if("OK"===n.status){var r=n.data;r.forEach((function(e){return t.problemInfo[e.problem_id]=e}))}}))}},{key:"triggerPopup",value:function(t,e){var n=this.problemDetail(e);at("#popup"+t).popup({hoverable:!0,html:n}).popup("show")}},{key:"problemDetail",value:function(t){console.log("problem_id",t);var e=this.problemInfo[t];if(console.log("this.problemInfo",this.problemInfo),console.log("problemInfo",e),e){var n=e.accepted,r=e.submit,c=Math.floor(100*n/r),i=e.label,a='<div class="content">\n提交: '.concat(r," 通过:").concat(n," 通过率:").concat(c,"%\n<br>\n标签:").concat(i,"\n</div>");return a}return""}},{key:"run",value:function(t){var e=this,n=this.$route.params.contest_id,r=this;this.cid=parseInt(n),this.axios.get("/api/contest/problem/"+n).then((function(n){console.log(n);var c=n.data;if("OK"!==c.status){if(console.log(c),"Permission denied"===c.statement)return void(r.mode=1);if(101===c.error_code)return void(r.mode=2);if(c.contest_mode)return void(r.mode=3)}rt.a.forEach(c.data,(function(t){t.accepted||(t.accepted=0),t.submit||(t.submit=0)}));var i=c.limit,o=c.contest_mode;if(c.admin&&(i=null,o=!1),i&&-1===location.href.indexOf(i))return r.mode=4,void(r.limit_content="根据管理员设置的策略，本次contest请使用"+i+"访问");r.problem_table=c.data,e.problem_table.forEach(function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(n){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!n.title){t.next=4;break}return t.next=3,e.renderRawAsync(n.title);case 3:n.title=t.sent;case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());var s=c.info;r.start_time=B()(s.start_time),r.end_time=B()(s.end_time),r.title=s.title,r.contest_mode=o,r.description=s.description,r.private_contest=Boolean(s.private),"function"===typeof t&&t()}))}},{key:"detect_source",value:function(t){return t.oj_name&&"local"!==t.oj_name.toLowerCase()?t.oj_name.toLowerCase():"new"}},{key:"contest",value:function(t,e){return this.contest_mode?"Problem "+String.fromCharCode("A".charCodeAt(0)+parseInt(e)):t}},{key:"orderBy",value:function(t){var e=this;e.type===t&&(e.order=-e.order);var n=function(t,n){return e.order*(t.pnum-n.pnum)},r=function(t,n){return e.order*(t.title>n.title?1:t.title<n.title?-1:0)},c=function(t,n){return e.order*(t.submit-n.submit)},i=function(t,n){return e.order*(t.accepted-n.accepted)},a=function(t,n){var r=t.accepted/Math.max(t.submit,1),c=n.accepted/Math.max(n.submit,1);return e.order*(r-c)},o=[n,r,i,c,a];e.problem_table.sort(o[t]),e.type=t}},{key:"mode",get:function(){return this.current_mode},set:function(t){var e=t!==this.current_mode;this.current_mode=t,e&&this.run(this.run)}}]),n}(Object(_["b"])(tt["a"],ct["a"]));ot=Object(d["c"])([Object(_["a"])({components:{ContestNotStart:w,LoginForm:E,ContestInfo:N,ContestMode:T["a"],LimitHostname:Z},computed:Object(i["a"])({},Object(et["b"])(["admin","contest_manager"]))})],ot);var st=ot,ut=st,lt=Object(g["a"])(ut,r,c,!1,null,"78bee713",null);e["default"]=lt.exports},"92f1":function(t,e,n){"use strict";n("d3b7"),n("4ae1"),n("25f0"),n("96cf");var r=n("1da1"),c=n("d4ec"),i=n("bee2"),a=n("262e"),o=n("99de"),s=n("7e84"),u=n("9ab4"),l=n("2b0e"),f=n("60a3"),d=n("ebb0"),p=n.n(d),m=n("a390"),v=n.n(m);function _(t){function e(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}return function(){var n,r=Object(s["a"])(t);if(e()){var c=Object(s["a"])(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return Object(o["a"])(this,n)}}var b=function(t){Object(a["a"])(n,t);var e=_(n);function n(){var t;return Object(c["a"])(this,n),t=e.apply(this,arguments),t.originalWorker=new v.a,t}return Object(i["a"])(n,[{key:"created",value:function(){this.worker_=new p.a(this.originalWorker)}},{key:"beforeDestroy",value:function(){this.originalWorker.terminate()}},{key:"renderAsync",value:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",this.worker_.postMessage({type:"render",content:e}));case 1:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()},{key:"renderRawAsync",value:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",this.worker_.postMessage({type:"renderRaw",content:e}));case 1:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()}]),n}(l["a"]);b=Object(u["c"])([f["a"]],b),e["a"]=b},a390:function(t,e,n){"use strict";t.exports=function(){return new Worker("/eb3f4807b2eab7f28044.worker.js")}},bc99:function(t,e,n){"use strict";var r=n("111f"),c=n.n(r);e["default"]=c.a},d3a2:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ui negative message"},[n("div",{staticClass:"header"},[n("i",{staticClass:"ban icon"}),t._v(t._s(t.$t("contest mode")))]),n("p",[t._v(t._s(t.$t("context")))])])},c=[],i=(n("d3b7"),n("4ae1"),n("25f0"),n("d4ec")),a=n("262e"),o=n("99de"),s=n("7e84"),u=n("9ab4"),l=n("60a3"),f=n("2b0e");function d(t){function e(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}return function(){var n,r=Object(s["a"])(t);if(e()){var c=Object(s["a"])(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return Object(o["a"])(this,n)}}var p=function(t){Object(a["a"])(n,t);var e=d(n);function n(){return Object(i["a"])(this,n),e.apply(this,arguments)}return n}(f["a"]);p=Object(u["c"])([l["a"]],p);var m=p,v=m,_=n("2877"),b=n("bc99"),h=Object(_["a"])(v,r,c,!1,null,"5816c0f2",null);"function"===typeof b["default"]&&Object(b["default"])(h);e["a"]=h.exports},ebb0:function(t,e,n){"use strict";var r=0;function c(t,e){var n=e.data;if(Array.isArray(n)&&!(n.length<2)){var r=n[0],c=n[1],i=n[2],a=t._callbacks[r];a&&(delete t._callbacks[r],a(c,i))}}function i(t){var e=this;e._worker=t,e._callbacks={},t.addEventListener("message",(function(t){c(e,t)}))}i.prototype.postMessage=function(t){var e=this,n=r++,i=[n,t];return new Promise((function(t,r){if(e._callbacks[n]=function(e,n){if(e)return r(new Error(e.message));t(n)},"undefined"!==typeof e._worker.controller){var a=new MessageChannel;a.port1.onmessage=function(t){c(e,t)},e._worker.controller.postMessage(i,[a.port2])}else e._worker.postMessage(i)}))},t.exports=i}}]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-85913058"],{"111f":function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"zh-cn":{"context":"根据管理员设置，该页面禁止进入"},"en":{"context":"According to admin setup, you don\'t have privilege to access target page"},"ja":{"context":"都合によって、このページはアクセス禁止されている"}}'),delete t.options._Ctor}},"699b":function(t,e,s){},"886e":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"ui container",attrs:{id:"contest_table"}},[2===t.mode?s("ContestNotStart"):t._e(),1===t.mode?s("LoginForm"):t._e(),3===t.mode?s("contest-mode"):t._e(),4===t.mode?s("LimitHostname",{attrs:{content:t.limit_content}}):t._e(),0===t.mode?s("div",{staticClass:"padding"},[s("h2",{staticClass:"ui dividing header"},[t._v(" "+t._s(t.$t("contest problem set"))+" ")]),s("div",{staticClass:"ui grid"},[s("div",{staticClass:"row"},[s("div",{staticClass:"eleven wide column"},[s("table",{staticClass:"ui basic unstackable table",attrs:{id:"problemset",width:"95%"}},[s("thead",[s("tr",{staticClass:"toprow"},[s("th",{staticStyle:{"text-align":"center"},attrs:{width:"18%"}},[s("a",{staticStyle:{cursor:"pointer"},on:{click:function(e){return t.orderBy(0)}}},[0===t.type?s("i",{class:"sort numeric icon "+(t.order>0?"up":"down")}):s("i",{staticClass:"checkmark icon",staticStyle:{opacity:"0"}}),t._v(" "+t._s(t.$t("id"))+" ")])]),s("th",{attrs:{width:"44%"}},[s("a",{staticStyle:{cursor:"pointer"},on:{click:function(e){return t.orderBy(1)}}},[1===t.type?s("i",{class:"sort numeric icon "+(t.order>0?"up":"down")}):s("i",{staticClass:"checkmark icon",staticStyle:{opacity:"0"}}),t._v(" "+t._s(t.$t("title")))])]),t.now.isAfter(t.end_time)?s("th",{attrs:{width:"10%"}}):t._e(),s("th",{staticStyle:{"text-align":"center"},attrs:{width:"16%"}},[s("a",{staticStyle:{cursor:"pointer"}},[s("span",{on:{click:function(e){return t.orderBy(2)}}},[2===t.type?s("i",{class:"sort numeric icon "+(t.order>0?"up":"down")}):t._e(),t._v(" "+t._s(t.$t("accept")))])]),t._v("/"),s("a",{staticStyle:{cursor:"pointer"}},[s("span",{on:{click:function(e){return t.orderBy(3)}}},[3===t.type?s("i",{class:"sort numeric icon "+(t.order>0?"up":"down")}):t._e(),t._v(t._s(t.$t("submit")))])])]),s("th",{staticStyle:{"text-align":"center"},attrs:{width:"12%"}},[s("a",{staticStyle:{cursor:"pointer"},on:{click:function(e){return t.orderBy(4)}}},[4===t.type?s("i",{class:"sort numeric icon "+(t.order>0?"up":"down")}):t._e(),t._v(" "+t._s(t.$t("accept percentage"))+" ")])])])]),s("transition-group",{attrs:{mode:"out-in",name:"list-complete",tag:"tbody"}},t._l(t.problem_table,(function(e,i){return s("tr",{key:e.pnum,class:(1===e.ac?"positive":-1===e.ac?"negative":"")+" list-complete-item",attrs:{id:"popup"+i},on:{mouseenter:function(s){return t.triggerPopup(i,e.pid)}}},[s("td",{staticClass:"center aligned"},[t._v(t._s(e.oj_name?e.oj_name:e.pid?"LOCAL ":"")+t._s(e.pid)),e.pid?s("br"):t._e(),t._v("Problem "+t._s(e.pnum+1001)+" ")]),s("td",[1===e.ac?s("i",{staticClass:"checkmark icon"}):-1===e.ac?s("i",{staticClass:"remove icon"}):s("i",{staticClass:"checkmark icon",staticStyle:{opacity:"0"}}),t.dayjs().isBefore(t.end_time)&&t.dayjs().isAfter(t.start_time)?s("router-link",{attrs:{to:"/contest/problem/"+t.cid+"/"+e.pnum},domProps:{innerHTML:t._s(t.contest(e.title,e.pnum))}}):s("router-link",{attrs:{to:"/problem/submit/"+e.pid},domProps:{innerHTML:t._s(t.contest(e.title,e.pnum))}}),s("br"),t.admin?s("i",{staticClass:"checkmark icon",staticStyle:{opacity:"0"}}):t._e(),t._l(t.getLabel(e.pid),(function(e){return s("router-link",{directives:[{name:"show",rawName:"v-show",value:t.admin,expression:"admin"}],key:e,class:"ui "+t.getLabelColor(e)+" label",attrs:{to:"/problemset?label="+e}},[t._v(" "+t._s(e)+" ")])}))],2),t.now.isAfter(t.end_time)?s("td",[s("router-link",{attrs:{to:"/tutorial/"+e.pid}},[t._v(t._s(t.$t("solution")))])],1):t._e(),s("td",{staticStyle:{"text-align":"center"}},[t._v(t._s(e.accepted)+"/"+t._s(e.submit))]),s("td",{staticStyle:{"text-align":"center"}},[t._v(t._s((100*e.accepted/Math.max(e.submit,1)).toString().substring(0,4))+" % ")])])})),0)],1)]),s("div",{staticClass:"five wide column"},[s("div",[s("ContestInfo",{attrs:{admin:t.admin,cid:t.cid,description:t.description,end_time:t.end_time,private_contest:t.private_contest,start_time:t.start_time,title:t.title}}),s("br")],1)])])])]):t._e()],1)},n=[],a=(s("e01a"),s("c975"),s("e260"),s("4e82"),s("e6cf"),s("1276"),s("ddb0"),s("5530")),r=s("9ab4"),o=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},c=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"ui negative message"},[s("div",{staticClass:"header"},[s("i",{staticClass:"ban icon"}),t._v(" 竞赛尚未开始 ")]),s("p",[t._v("请等待竞赛开始后刷新 ")])])])}],l=s("2b0e"),d=s("60a3");let u=class extends l["a"]{};u=Object(r["c"])([d["a"]],u);var p=u,m=p,_=s("2877"),b=Object(_["a"])(m,o,c,!1,null,"18109bdc",null),h=b.exports,f=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},v=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("h2",{staticClass:"ui dividing header"},[t._v("私有竞赛/作业")]),s("form",{staticClass:"ui form",attrs:{id:"contest_form",method:"post"}},[s("div",{staticClass:"fields"},[s("div",{staticClass:"six wide field"},[s("label",[t._v("请输入密码")]),s("input",{staticClass:"input-mini",attrs:{id:"contest_pass",name:"password",type:"password"}})])]),s("input",{staticClass:"ui primary button",attrs:{type:"submit"}})])])}],y=s("1157"),g=s.n(y);const w=g.a;let C=class extends l["a"]{mounted(){w("#contest_form").submit(()=>(this.axios.post("/api/contest/password/"+this.$route.params.contest_id,{password:w("#contest_pass").val()}).then(({data:t})=>{"OK"===t.status?this.$parent.mode=0:alert(t.statement)}),!1))}};C=Object(r["c"])([d["a"]],C);var j=C,k=j,O=Object(_["a"])(k,f,v,!1,null,"3bb2b0fe",null),x=O.exports,$=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"ui raised segment"},[s("h1"),s("h2",{staticClass:"ui header",staticStyle:{"text-align":"center"}},[s("i",{staticClass:"star outline icon"}),t._v(t._s(t.$t("contest"))+" "+t._s(t.cid))]),s("h2",{staticClass:"ui header",staticStyle:{"text-align":"center"}},[t._v(t._s(t.title))]),s("p",[t._v(t._s(t.description))]),s("div",{staticStyle:{"text-align":"center"}},[t._v(t._s(t.$t("start time"))+" "+t._s(t.start_time.format("YYYY-MM-DD HH:mm:ss"))+" "),s("br"),t._v(" "+t._s(t.$t("now"))+" "),s("span",{attrs:{id:"nowdate"}},[t._v(t._s(t.now.format("YYYY-MM-DD HH:mm:ss")))]),s("br"),t._v(t._s(t.$t("end time"))+" "+t._s(t.end_time.format("YYYY-MM-DD HH:mm:ss"))+" ")]),s("div",{class:"ui top right attached label "+(t.private_contest?"red":"green")},[t._v(t._s(t.private_contest?t.$t("private"):t.$t("public"))+" ")]),s("div",{class:"ui top left attached "+(t.now.isAfter(t.end_time)?"red":t.now.isBefore(t.start_time)?"grey":"green")+" label"},[t.now.isAfter(t.end_time)?s("span",{staticClass:"red"},[t._v(t._s(t.$t("end")))]):t.now.isBefore(t.start_time)?s("span",{staticClass:"red"},[t._v("Pending")]):s("span",{staticClass:"green"},[t._v(t._s(t.$t("running")))])]),s("div",{staticStyle:{"text-align":"center"}},[s("div",{staticClass:"row padding"},[s("div",{staticClass:"ui buttons mini"},[t.admin?s("a",{staticClass:"ui button orange",attrs:{href:"/copystatus.php?cid="+t.cid}},[t._v("判重表")]):t._e(),t.admin?s("a",{staticClass:"ui button yellow",attrs:{href:"/copymap.php?cid="+t.cid}},[t._v("判重图")]):t._e()])])])])},M=[],S=s("5a0c"),L=s.n(S);let A=class extends l["a"]{constructor(){super(...arguments),this.now=L()()}mounted(){setInterval(()=>{this.now=L()()},1e3)}};Object(r["c"])([Object(d["c"])({default:L()()})],A.prototype,"start_time",void 0),Object(r["c"])([Object(d["c"])({default:L()()})],A.prototype,"end_time",void 0),Object(r["c"])([Object(d["c"])({default:""})],A.prototype,"description",void 0),Object(r["c"])([Object(d["c"])({default:""})],A.prototype,"title",void 0),Object(r["c"])([Object(d["c"])({default:!1})],A.prototype,"admin",void 0),Object(r["c"])([Object(d["c"])({default:!1})],A.prototype,"private_contest",void 0),Object(r["c"])([Object(d["c"])({default:0})],A.prototype,"cid",void 0),A=Object(r["c"])([d["a"]],A);var E=A,I=E,Y=Object(_["a"])(I,$,M,!1,null,"0fca7388",null),B=Y.exports,H=s("d3a2"),P=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"ui negative message"},[t._m(0),s("p",[t._v(t._s(t.content))])])},D=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"header"},[s("i",{staticClass:"ban icon"}),t._v("访问限制")])}];let W=class extends l["a"]{};Object(r["c"])([Object(d["c"])({default:""})],W.prototype,"content",void 0),W=Object(r["c"])([d["a"]],W);var K=W,N=K,R=Object(_["a"])(N,P,D,!1,null,"1446e3db",null),F=R.exports,J=s("2cd4"),T=s("2f62"),z=s("2ef0"),q=s.n(z),G=s("92f1");const Q=g.a;let U=class extends(Object(d["b"])(J["a"],G["a"])){constructor(){super(...arguments),this.colorSet=["red","orange","yellow","olive","green","teal","blue","violet","purple","pink","brown","grey"],this.colorMap={},this.cid=0,this.problem_table=[],this.start_time=L()(),this.end_time=L()(),this.description="",this.title="",this.now=L()(),this.problemInfo={},this.current_mode=0,this.order=1,this.type=0,this.contest_mode=!1,this.limit_content="",this.private_contest=!1,this.dayjs=L.a}created(){this.cid=parseInt(this.$route.params.contest_id)}get mode(){return this.current_mode}set mode(t){const e=t!==this.current_mode;this.current_mode=t,e&&this.run(this.run)}async mounted(){const t=this.$route.params.contest_id;document.title=`Contest ${t} -- ${document.title}`,await this.getInfo(),this.run(this.run)}async getInfo(){(this.admin||this.contest_manager)&&await this.axios.get("/api/contest/problem_info/"+this.cid).then(({data:t})=>{if("OK"===t.status){const e=t.data;e.forEach(t=>this.problemInfo[t.problem_id]=t)}})}getLabelColor(t){return Object.prototype.hasOwnProperty.call(this.colorMap,t)||(this.colorMap[t]=this.colorSet[Math.floor(Math.random()*this.colorSet.length)]),this.colorMap[t]}triggerPopup(t,e){const s=this.problemDetail(e);Q("#popup"+t).popup({hoverable:!0,html:s}).popup("show")}problemDetail(t){const e=this.problemInfo[t];if(e){const t=e.accepted,s=e.submit,i=Math.floor(100*t/Math.max(s,1));e.label;return`<div class="content">\n本题历史统计<br>提交: ${s} 通过:${t} 通过率:${i}%\n</div>`}return""}getLabel(t){const e=this.problemInfo[t];if(e){const t=e.label,s="string"===typeof t?t.split(" "):[];return s.sort((t,e)=>"简单"===t||"普通"===t||"中等"===t||"困难"===t?-1:"简单"===e||"普通"===e||"中等"===e||"困难"===e?1:t<e?-1:t===e?0:1),s}}run(t){var e=this;const s=this.$route.params.contest_id,i=this;this.cid=parseInt(s),this.axios.get("/api/contest/problem/"+s).then(s=>{console.log(s);const n=s.data;if("OK"!==n.status){if(console.log(n),"Permission denied"===n.statement)return void(i.mode=1);if(101===n.error_code)return void(i.mode=2);if(n.contest_mode)return void(i.mode=3)}q.a.forEach(n.data,t=>{t.accepted||(t.accepted=0),t.submit||(t.submit=0)});let a=n.limit,r=n.contest_mode;if(n.admin&&(a=null,r=!1),a&&-1===location.href.indexOf(a))return i.mode=4,void(i.limit_content="根据管理员设置的策略，本次contest请使用"+a+"访问");i.problem_table=n.data,this.problem_table.forEach((async function(t){t.title&&(t.title=await e.renderRawAsync(t.title))}));const o=n.info;i.start_time=L()(o.start_time),i.end_time=L()(o.end_time),i.title=o.title,i.contest_mode=r,i.description=o.description,i.private_contest=Boolean(o.private),"function"===typeof t&&t()})}detect_source(t){return t.oj_name&&"local"!==t.oj_name.toLowerCase()?t.oj_name.toLowerCase():"new"}contest(t,e){return this.contest_mode?"Problem "+String.fromCharCode("A".charCodeAt(0)+parseInt(e)):t}orderBy(t){const e=this;e.type===t&&(e.order=-e.order);const s=function(t,s){return e.order*(t.pnum-s.pnum)},i=function(t,s){return e.order*(t.title>s.title?1:t.title<s.title?-1:0)},n=function(t,s){return e.order*(t.submit-s.submit)},a=function(t,s){return e.order*(t.accepted-s.accepted)},r=function(t,s){const i=t.accepted/Math.max(t.submit,1),n=s.accepted/Math.max(s.submit,1);return e.order*(i-n)},o=[s,i,a,n,r];e.problem_table.sort(o[t]),e.type=t}};U=Object(r["c"])([Object(d["a"])({components:{ContestNotStart:h,LoginForm:x,ContestInfo:B,ContestMode:H["a"],LimitHostname:F},computed:Object(a["a"])({},Object(T["b"])(["admin","contest_manager"]))})],U);var V=U,X=V,Z=(s("f543"),Object(_["a"])(X,i,n,!1,null,"77bbc356",null));e["default"]=Z.exports},"92f1":function(t,e,s){"use strict";s("e260"),s("e6cf"),s("ddb0");var i=s("9ab4"),n=s("2b0e"),a=s("60a3"),r=s("ebb0"),o=s.n(r),c=s("a390"),l=s.n(c);let d=class extends n["a"]{constructor(){super(...arguments),this.originalWorker=new l.a}created(){this.worker_=new o.a(this.originalWorker)}beforeDestroy(){this.originalWorker.terminate()}async renderAsync(t){return this.worker_.postMessage({type:"render",content:t})}async renderRawAsync(t){return this.worker_.postMessage({type:"renderRaw",content:t})}};d=Object(i["c"])([a["a"]],d),e["a"]=d},a390:function(t,e,s){"use strict";t.exports=function(){return new Worker("/14dc29b73cfde165910a.worker.js")}},bc99:function(t,e,s){"use strict";var i=s("111f"),n=s.n(i);e["default"]=n.a},d3a2:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"ui negative message"},[s("div",{staticClass:"header"},[s("i",{staticClass:"ban icon"}),t._v(t._s(t.$t("contest mode")))]),s("p",[t._v(t._s(t.$t("context")))])])},n=[],a=s("9ab4"),r=s("60a3"),o=s("2b0e");let c=class extends o["a"]{};c=Object(a["c"])([r["a"]],c);var l=c,d=l,u=s("2877"),p=s("bc99"),m=Object(u["a"])(d,i,n,!1,null,"5816c0f2",null);"function"===typeof p["default"]&&Object(p["default"])(m);e["a"]=m.exports},ebb0:function(t,e,s){"use strict";var i=0;function n(t,e){var s=e.data;if(Array.isArray(s)&&!(s.length<2)){var i=s[0],n=s[1],a=s[2],r=t._callbacks[i];r&&(delete t._callbacks[i],r(n,a))}}function a(t){var e=this;e._worker=t,e._callbacks={},t.addEventListener("message",(function(t){n(e,t)}))}a.prototype.postMessage=function(t){var e=this,s=i++,a=[s,t];return new Promise((function(t,i){if(e._callbacks[s]=function(e,s){if(e)return i(new Error(e.message));t(s)},"undefined"!==typeof e._worker.controller){var r=new MessageChannel;r.port1.onmessage=function(t){n(e,t)},e._worker.controller.postMessage(a,[r.port2])}else e._worker.postMessage(a)}))},t.exports=a},f543:function(t,e,s){"use strict";var i=s("699b"),n=s.n(i);n.a}}]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2b82a27c"],{"0647":function(t,e,a){"use strict";var s=a("5b66"),i=a.n(s);e["default"]=i.a},"111f":function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"zh-cn":{"context":"根据管理员设置，该页面禁止进入"},"en":{"context":"According to admin setup, you don\'t have privilege to access target page"},"ja":{"context":"都合によって、このページはアクセス禁止されている"}}'),delete t.options._Ctor}},"20a2":function(t,e,a){"use strict";var s=a("9ab4"),i=a("2b0e"),r=a("60a3"),n=a("3657");const{getAvatarURL:c,hasAvatarURL:o}=n["a"];let l=class extends i["a"]{getAvatarURL(...t){return c.apply(this,t)}hasAvatarURL(...t){return o.apply(this,t)}};l=Object(s["c"])([r["a"]],l),e["a"]=l},"51a0":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.contestMode?a("div",{staticClass:"ui container padding"},[a("ContestMode")],1):a("div",{staticClass:"ui container padding"},[a("div",[a("h2",{staticClass:"ui dividing header"},[t._v(" "+t._s(t.$t("ranklist"))+" ")]),a("RankList",{attrs:{rank:t.ranklist}})],1)])},i=[],r=(a("ddb0"),a("9ab4")),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"ui top attached tabular menu"},[a("a",{class:(1===t.mode?"active":"")+" item",on:{click:function(e){t.mode=1}}},[t._v(t._s(t.$t("all user")))]),a("a",{class:(2===t.mode?"active":"")+" item",on:{click:function(e){t.mode=2}}},[t._v(t._s(t.$t("current member")))]),a("a",{class:(3===t.mode?"active":"")+" item",on:{click:function(e){t.mode=3}}},[t._v(t._s(t.$t("retired member")))]),a("a",{class:(4===t.mode?"active":"")+" item",on:{click:function(e){t.mode=4}}},[t._v(t._s(t.$t("new user")))])]),a("div",{directives:[{name:"show",rawName:"v-show",value:1===t.mode,expression:"mode === 1"}],staticClass:"ui bottom attached segment"},[a("div",{staticClass:"ui stack segment"},[a("div",{staticClass:"ui grid"},[a("div",{staticClass:"row"},[a("div",{staticClass:"four wide column"},[a("div",{staticClass:"ui mini statistic",staticStyle:{margin:"0"}},[a("div",{staticClass:"value"},[a("i",{staticClass:"user icon"}),t._v(t._s(t.registed_user)+" ")]),a("div",{staticClass:"label"},[t._v(" Registered ")])]),a("div",{staticClass:"ui mini statistic"},[a("div",{staticClass:"value"},[a("i",{staticClass:"user circle outline icon"}),t._v(t._s(t.acm_user)+" ")]),a("div",{staticClass:"label"},[t._v(" ACMER ")])])]),a("div",{staticClass:"five wide column"},[a("div",{staticClass:"ui search"},[a("label",[t._v(t._s(t.$t("user_id"))+": ")]),a("div",{staticClass:"ui input"},[a("input",{attrs:{name:"user"},on:{keyup:function(e){return t.search_user(e)}}})])])]),a("div",{staticClass:"seven wide column  center aligned"},[a("a",{class:"ui blue mini button "+("D"===t.time_stamp?"disabled":""),on:{click:function(e){return t.timestamp("D",e)}}},[t._v("Day")]),a("a",{class:"ui blue mini button "+("W"===t.time_stamp?"disabled":""),on:{click:function(e){return t.timestamp("W",e)}}},[t._v("Week")]),a("a",{class:"ui blue mini button "+("M"===t.time_stamp?"disabled":""),on:{click:function(e){return t.timestamp("M",e)}}},[t._v("Month")]),a("a",{class:"ui blue mini button "+("Y"===t.time_stamp?"disabled":""),on:{click:function(e){return t.timestamp("Y",e)}}},[t._v("Year")]),a("a",{class:"ui blue mini button "+(""===t.time_stamp?"disabled":""),on:{click:function(e){return t.timestamp("",e)}}},[t._v("Total")])])])])]),a("table",{staticClass:"ui padded borderless selectable table",staticStyle:{width:"100%"}},[a("thead",[a("tr",[a("th",{staticClass:"center head",attrs:{width:"7%"}},[t._v(t._s(t.$t("rank")))]),a("th",{staticClass:"center head",attrs:{width:"10%"}},[a("b",[t._v(t._s(t.$t("user_id")))])]),a("th",{attrs:{width:"5%"}}),a("th",{attrs:{width:"15%"}},[a("b",[t._v(t._s(t.$t("nick")))])]),a("th",{staticClass:"center head",attrs:{width:"53%"}},[t._v(t._s(t.$t("biography")))]),a("th",{staticClass:"center head",staticStyle:{"text-align":"center"},attrs:{width:"10%"}},[a("b",[t._v(t._s(t.$t("accept")))])])])]),a("tbody",t._l(t.ranklist,(function(e,s,i){return a("tr",{key:s},[a("td",{staticClass:"center head"},[t._v(t._s(50*t.page+s+1))]),a("td",{staticClass:"center head"},[a("router-link",{attrs:{to:"/user/"+e.user_id}},[t._v(" "+t._s(e.user_id)+" ")])],1),a("td",[a("v-gravatar",{staticClass:"ui avatar image",staticStyle:{"object-fit":"cover"},attrs:{hostname:"gravatar.w3tt.com","original-src":t.getAvatarURL(e),email:e.email}})],1),a("td",[t._v(" "+t._s(t.convertHTML(e.nick))+" ")]),a("td",{staticClass:"center head",domProps:{innerHTML:t._s(e.biography)}}),a("td",{staticClass:"center head",staticStyle:{"text-align":"center"}},[a("router-link",{attrs:{to:"/status?user_id="+e.user_id+"&jresult=4"}},[t._v(t._s(e.solved||0))])],1)])})),0)]),a("a",{staticClass:"ui button",class:"ui button "+(0===t.page?"disabled":""),on:{click:function(e){0!==t.page&&t._page(-t.page,e)}}},[t._v(" Top ")]),a("a",{staticClass:"ui left labeled icon button",class:"ui left labeled icon button "+(t.page>0?"":"disabled"),on:{click:function(e){t.page&&t._page(-1,e)}}},[a("i",{staticClass:"left arrow icon"}),t._v(" Prev ")]),a("a",{staticClass:"ui right labeled icon button",class:"ui right labeled icon button "+(50*(t.page+1)+1>t.registed_user?"disabled":""),on:{click:function(e){50*t.page<t.registed_user&&t._page(1,e)}}},[a("i",{staticClass:"right arrow icon"}),t._v(" Next ")])]),a("table-card",{directives:[{name:"show",rawName:"v-show",value:2===t.mode,expression:"mode === 2"}],attrs:{content:t.acmmem,page:t.page},on:{click:function(e){t.mode=2}}}),a("table-card",{directives:[{name:"show",rawName:"v-show",value:3===t.mode,expression:"mode === 3"}],attrs:{content:t.retiremem,page:t.page},on:{click:function(e){t.mode=3}}}),a("table-card",{directives:[{name:"show",rawName:"v-show",value:4===t.mode,expression:"mode === 4"}],attrs:{content:t.recent_register,page:t.page},on:{click:function(e){t.mode=4}}})],1)},c=[],o=a("60a3"),l=a("2fe1"),d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"ui bottom attached segment"},[a("table",{staticClass:"ui padded borderless selectable table",staticStyle:{width:"100%"}},[a("thead",[a("tr",[a("th",{staticClass:"center head",attrs:{width:"7%"}},[t._v(t._s(t.$t("rank")))]),a("th",{staticClass:"center head",attrs:{width:"10%"}},[a("b",[t._v(t._s(t.$t("user_id")))])]),a("th",{attrs:{width:"5%"}}),a("th",{attrs:{width:"15%"}},[a("b",[t._v(t._s(t.$t("nick")))])]),a("th",{staticClass:"center head",attrs:{width:"53%"}},[t._v(t._s(t.$t("biography")))]),a("th",{staticClass:"center head",staticStyle:{"text-align":"center"},attrs:{width:"10%"}},[a("b",[t._v(t._s(t.$t("accept")))])])])]),a("tbody",t._l(t.contentPayload,(function(e,s,i){return a("tr",{key:s},[a("td",{staticClass:"center head"},[t._v(t._s(50*t.page+s+1))]),a("td",{staticClass:"center head"},[a("router-link",{attrs:{to:"/user/"+e.user_id}},[t._v(" "+t._s(e.user_id)+" ")])],1),a("td",[a("v-gravatar",{staticClass:"ui avatar image",staticStyle:{"object-fit":"cover"},attrs:{hostname:"gravatar.w3tt.com","original-src":t.getAvatarURL(e),email:e.email}})],1),a("td",[t._v(" "+t._s(t.convertHTML(e.nick))+" ")]),a("td",{staticClass:"center head",domProps:{innerHTML:t._s(e.biography)}}),a("td",{staticClass:"center head",staticStyle:{"text-align":"center"}},[a("router-link",{attrs:{to:"/status?user_id="+e.user_id+"&jresult=4"}},[t._v(t._s(e.solved||0))])],1)])})),0)])])},u=[],h=a("20a2"),m=a("92f1");let p=class extends(Object(o["b"])(h["a"],m["a"])){constructor(){super(...arguments),this.contentPayload=[]}onContentChanged(t){this.contentPayload=t,t.forEach(async t=>{t&&t.biography&&(t.biography=await this.renderRawAsync(t.biography||""))})}convertHTML(t){const e=document.createElement("div");return e.innerHTML=t,e.innerText}};Object(r["c"])([Object(o["c"])({default:()=>[]})],p.prototype,"content",void 0),Object(r["c"])([Object(o["c"])({default:0})],p.prototype,"page",void 0),Object(r["c"])([Object(o["d"])("content")],p.prototype,"onContentChanged",null),p=Object(r["c"])([o["a"]],p);var b=p,_=b,v=a("2877"),g=Object(v["a"])(_,d,u,!1,null,"4b7b2c2e",null),k=g.exports,f=a("6da9"),w=a("2cd4");let C=class extends(Object(l["c"])(m["a"],f["a"],h["a"],w["a"])){constructor(){super(...arguments),this.registed_user=0,this.acm_user=0,this.mode=1,this.page=0,this.search="",this.time_stamp="",this.acmmember={ranklist:[]},this.retiremember={ranklist:[]},this.recent_register=[],this.ranklistData=null}created(){this.page=parseInt(this.$route.query.page)||this.page,this.mode=this.$route.query.acm?2:1,this.search=this.$route.query.search||""}onRankChange(t,e){this.ranklistData=t}get ranklist(){let t;return t=this.ranklistData&&this.ranklistData.ranklist?this.ranklistData.ranklist:this.rank&&this.rank.ranklist?this.rank.ranklist:[],t.forEach(async t=>{"string"===typeof t.biography?t.biography=await this.renderRawAsync(t.biography):t.biography=""}),t}get acmmem(){return this.acmmember.ranklist}set acmmem(t){this.acmmember=t}get retiremem(){return this.retiremember.ranklist}set retiremem(t){this.retiremember=t}convertHTML(t){const e=document.createElement("div");return e.innerHTML=t,e.innerText}search_user(t){this.search=t.target.value,this.axios.get(`/api/ranklist?page=${this.page}&search=${this.search}&time_stamp=${this.time_stamp}`).then(({data:t})=>{this.ranklistData=t})}timestamp(t,e){this.time_stamp=t,this.axios.get(`/api/ranklist?page=${this.page}&search=${this.search}&time_stamp=${this.time_stamp}`).then(({data:t})=>{this.ranklistData=t})}_page(t,e){this.page+=t;this.axios.get(`/api/ranklist?page=${this.page}&search=${this.search}&time_stamp=${this.time_stamp}`).then(({data:t})=>{this.ranklistData=t})}mounted(){this.axios.get("/api/ranklist/user").then(({data:t})=>{this.registed_user=t[0].tot_user,this.acm_user=t[0].acm_user}),this.axios.get("/api/ranklist/acmmember").then(({data:t})=>{this.acmmem=t}),this.axios.get("/api/ranklist/oldmember").then(({data:t})=>{this.retiremem=t}),this.axios.get("/api/user/recent_register").then(({data:t})=>{this.recent_register=t.data})}};Object(r["c"])([Object(o["c"])({default:null})],C.prototype,"rank",void 0),Object(r["c"])([Object(o["d"])("rank")],C.prototype,"onRankChange",null),C=Object(r["c"])([Object(o["a"])({components:{tableCard:k}})],C);var y=C,x=y,j=a("0647"),$=Object(v["a"])(x,n,c,!1,null,"6695661d",null);"function"===typeof j["default"]&&Object(j["default"])($);var O=$.exports,M=a("d3a2"),R=a("2f62");let L=class extends(Object(o["b"])(w["a"])){constructor(){super(...arguments),this.ranklist={}}mounted(){document.title="Ranklist -- "+document.title,this.axios.get("/api/ranklist/"+(this.$route.query.page?"?page="+this.$route.query.page:"")).then(t=>{this.ranklist=t.data})}};L=Object(r["c"])([Object(o["a"])({components:{RankList:O,ContestMode:M["a"]},computed:Object(R["b"])(["contestMode"])})],L);var A=L,D=A,T=Object(v["a"])(D,s,i,!1,null,"8dda1478",null);e["default"]=T.exports},"5b66":function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"zh-cn":{"all user":"所有用户","current member":"现役队员","retired member":"退役队员","new user":"新用户"},"en":{"all user":"All Users","current member":"ACM Member","retired member":"Retired Member","new user":"New Users"},"ja":{"all user":"ユーザーリスト","current member":"チームメンバー","retired member":"リタイヤメンバー","new user":"新規ユーザー"}}'),delete t.options._Ctor}},"6da9":function(t,e,a){"use strict";var s=a("9ab4"),i=a("1157"),r=a.n(i),n=(a("8665"),a("60a3")),c=a("2b0e");window.$=window.jQuery=r.a;let o=class extends c["a"]{};o=Object(s["c"])([n["a"]],o),e["a"]=o},"92f1":function(t,e,a){"use strict";a("ddb0");var s=a("9ab4"),i=a("2b0e"),r=a("60a3"),n=a("ebb0"),c=a.n(n),o=a("a390"),l=a.n(o);let d=class extends i["a"]{constructor(){super(...arguments),this.originalWorker=new l.a}created(){this.worker_=new c.a(this.originalWorker)}beforeDestroy(){this.originalWorker.terminate()}async renderAsync(t){return this.worker_.postMessage({type:"render",content:t})}async renderRawAsync(t){return this.worker_.postMessage({type:"renderRaw",content:t})}};d=Object(s["c"])([r["a"]],d),e["a"]=d},a390:function(t,e,a){"use strict";t.exports=function(){return new Worker("/fca38782d488bada1bf6.worker.js")}},bc99:function(t,e,a){"use strict";var s=a("111f"),i=a.n(s);e["default"]=i.a},d3a2:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"ui negative message"},[a("div",{staticClass:"header"},[a("i",{staticClass:"ban icon"}),t._v(t._s(t.$t("contest mode")))]),a("p",[t._v(t._s(t.$t("context")))])])},i=[],r=a("9ab4"),n=a("60a3"),c=a("2b0e");let o=class extends c["a"]{};o=Object(r["c"])([n["a"]],o);var l=o,d=l,u=a("2877"),h=a("bc99"),m=Object(u["a"])(d,s,i,!1,null,"5816c0f2",null);"function"===typeof h["default"]&&Object(h["default"])(m);e["a"]=m.exports},ebb0:function(t,e,a){"use strict";var s=0;function i(t,e){var a=e.data;if(Array.isArray(a)&&!(a.length<2)){var s=a[0],i=a[1],r=a[2],n=t._callbacks[s];n&&(delete t._callbacks[s],n(i,r))}}function r(t){var e=this;e._worker=t,e._callbacks={},t.addEventListener("message",(function(t){i(e,t)}))}r.prototype.postMessage=function(t){var e=this,a=s++,r=[a,t];return new Promise((function(t,s){if(e._callbacks[a]=function(e,a){if(e)return s(new Error(e.message));t(a)},"undefined"!==typeof e._worker.controller){var n=new MessageChannel;n.port1.onmessage=function(t){i(e,t)},e._worker.controller.postMessage(r,[n.port2])}else e._worker.postMessage(r)}))},t.exports=r}}]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2b82a27c"],{"0647":function(t,e,a){"use strict";var n=a("5b66"),r=a.n(n);e["default"]=r.a},"111f":function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"zh-cn":{"context":"根据管理员设置，该页面禁止进入"},"en":{"context":"According to admin setup, you don\'t have privilege to access target page"},"ja":{"context":"都合によって、このページはアクセス禁止されている"}}'),delete t.options._Ctor}},"20a2":function(t,e,a){"use strict";var n=a("d4ec"),r=a("bee2"),s=a("262e"),i=a("2caf"),c=a("9ab4"),o=a("2b0e"),u=a("60a3"),l=a("3657"),d=l["a"].getAvatarURL,h=l["a"].hasAvatarURL,m=function(t){Object(s["a"])(a,t);var e=Object(i["a"])(a);function a(){return Object(n["a"])(this,a),e.apply(this,arguments)}return Object(r["a"])(a,[{key:"getAvatarURL",value:function(){for(var t=arguments.length,e=new Array(t),a=0;a<t;a++)e[a]=arguments[a];return d.apply(this,e)}},{key:"hasAvatarURL",value:function(){for(var t=arguments.length,e=new Array(t),a=0;a<t;a++)e[a]=arguments[a];return h.apply(this,e)}}]),a}(o["a"]);m=Object(c["c"])([u["a"]],m),e["a"]=m},"51a0":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.contestMode?a("div",{staticClass:"ui container padding"},[a("ContestMode")],1):a("div",{staticClass:"ui container padding"},[a("div",[a("h2",{staticClass:"ui dividing header"},[t._v(" "+t._s(t.$t("ranklist"))+" ")]),a("RankList",{attrs:{rank:t.ranklist}})],1)])},r=[],s=a("d4ec"),i=a("bee2"),c=a("262e"),o=a("2caf"),u=a("9ab4"),l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"ui top attached tabular menu"},[a("a",{class:(1===t.mode?"active":"")+" item",on:{click:function(e){t.mode=1}}},[t._v(t._s(t.$t("all user")))]),a("a",{class:(2===t.mode?"active":"")+" item",on:{click:function(e){t.mode=2}}},[t._v(t._s(t.$t("current member")))]),a("a",{class:(3===t.mode?"active":"")+" item",on:{click:function(e){t.mode=3}}},[t._v(t._s(t.$t("retired member")))]),a("a",{class:(4===t.mode?"active":"")+" item",on:{click:function(e){t.mode=4}}},[t._v(t._s(t.$t("new user")))])]),a("div",{directives:[{name:"show",rawName:"v-show",value:1===t.mode,expression:"mode === 1"}],staticClass:"ui bottom attached segment"},[a("div",{staticClass:"ui stack segment"},[a("div",{staticClass:"ui grid"},[a("div",{staticClass:"row"},[a("div",{staticClass:"four wide column"},[a("div",{staticClass:"ui mini statistic",staticStyle:{margin:"0"}},[a("div",{staticClass:"value"},[a("i",{staticClass:"user icon"}),t._v(t._s(t.registed_user)+" ")]),a("div",{staticClass:"label"},[t._v(" Registered ")])]),a("div",{staticClass:"ui mini statistic"},[a("div",{staticClass:"value"},[a("i",{staticClass:"user circle outline icon"}),t._v(t._s(t.acm_user)+" ")]),a("div",{staticClass:"label"},[t._v(" ACMER ")])])]),a("div",{staticClass:"five wide column"},[a("div",{staticClass:"ui search"},[a("label",[t._v(t._s(t.$t("user_id"))+": ")]),a("div",{staticClass:"ui input"},[a("input",{attrs:{name:"user"},on:{keyup:function(e){return t.search_user(e)}}})])])]),a("div",{staticClass:"seven wide column  center aligned"},[a("a",{class:"ui blue mini button "+("D"===t.time_stamp?"disabled":""),on:{click:function(e){return t.timestamp("D",e)}}},[t._v("Day")]),a("a",{class:"ui blue mini button "+("W"===t.time_stamp?"disabled":""),on:{click:function(e){return t.timestamp("W",e)}}},[t._v("Week")]),a("a",{class:"ui blue mini button "+("M"===t.time_stamp?"disabled":""),on:{click:function(e){return t.timestamp("M",e)}}},[t._v("Month")]),a("a",{class:"ui blue mini button "+("Y"===t.time_stamp?"disabled":""),on:{click:function(e){return t.timestamp("Y",e)}}},[t._v("Year")]),a("a",{class:"ui blue mini button "+(""===t.time_stamp?"disabled":""),on:{click:function(e){return t.timestamp("",e)}}},[t._v("Total")])])])])]),a("table",{staticClass:"ui padded borderless selectable table",staticStyle:{width:"100%"}},[a("thead",[a("tr",[a("th",{staticClass:"center head",attrs:{width:"7%"}},[t._v(t._s(t.$t("rank")))]),a("th",{staticClass:"center head",attrs:{width:"10%"}},[a("b",[t._v(t._s(t.$t("user_id")))])]),a("th",{attrs:{width:"5%"}}),a("th",{attrs:{width:"15%"}},[a("b",[t._v(t._s(t.$t("nick")))])]),a("th",{staticClass:"center head",attrs:{width:"53%"}},[t._v(t._s(t.$t("biography")))]),a("th",{staticClass:"center head",staticStyle:{"text-align":"center"},attrs:{width:"10%"}},[a("b",[t._v(t._s(t.$t("accept")))])])])]),a("tbody",t._l(t.ranklist,(function(e,n,r){return a("tr",{key:n},[a("td",{staticClass:"center head"},[t._v(t._s(50*t.page+n+1))]),a("td",{staticClass:"center head"},[a("router-link",{attrs:{to:"/user/"+e.user_id}},[t._v(" "+t._s(e.user_id)+" ")])],1),a("td",[a("v-gravatar",{staticClass:"ui avatar image",staticStyle:{"object-fit":"cover"},attrs:{hostname:"gravatar.w3tt.com","original-src":t.getAvatarURL(e),email:e.email}})],1),a("td",[t._v(" "+t._s(t.convertHTML(e.nick))+" ")]),a("td",{staticClass:"center head",domProps:{innerHTML:t._s(e.biography)}}),a("td",{staticClass:"center head",staticStyle:{"text-align":"center"}},[a("router-link",{attrs:{to:"/status?user_id="+e.user_id+"&jresult=4"}},[t._v(t._s(e.solved||0))])],1)])})),0)]),a("a",{staticClass:"ui button",class:"ui button "+(0===t.page?"disabled":""),on:{click:function(e){0!==t.page&&t._page(-t.page,e)}}},[t._v(" Top ")]),a("a",{staticClass:"ui left labeled icon button",class:"ui left labeled icon button "+(t.page>0?"":"disabled"),on:{click:function(e){t.page&&t._page(-1,e)}}},[a("i",{staticClass:"left arrow icon"}),t._v(" Prev ")]),a("a",{staticClass:"ui right labeled icon button",class:"ui right labeled icon button "+(50*(t.page+1)+1>t.registed_user?"disabled":""),on:{click:function(e){50*t.page<t.registed_user&&t._page(1,e)}}},[a("i",{staticClass:"right arrow icon"}),t._v(" Next ")])]),a("table-card",{directives:[{name:"show",rawName:"v-show",value:2===t.mode,expression:"mode === 2"}],attrs:{content:t.acmmem,page:t.page},on:{click:function(e){t.mode=2}}}),a("table-card",{directives:[{name:"show",rawName:"v-show",value:3===t.mode,expression:"mode === 3"}],attrs:{content:t.retiremem,page:t.page},on:{click:function(e){t.mode=3}}}),a("table-card",{directives:[{name:"show",rawName:"v-show",value:4===t.mode,expression:"mode === 4"}],attrs:{content:t.recent_register,page:t.page},on:{click:function(e){t.mode=4}}})],1)},d=[],h=(a("99af"),a("4160"),a("ac1f"),a("841c"),a("159b"),a("96cf"),a("1da1")),m=a("60a3"),v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"ui bottom attached segment"},[a("table",{staticClass:"ui padded borderless selectable table",staticStyle:{width:"100%"}},[a("thead",[a("tr",[a("th",{staticClass:"center head",attrs:{width:"7%"}},[t._v(t._s(t.$t("rank")))]),a("th",{staticClass:"center head",attrs:{width:"10%"}},[a("b",[t._v(t._s(t.$t("user_id")))])]),a("th",{attrs:{width:"5%"}}),a("th",{attrs:{width:"15%"}},[a("b",[t._v(t._s(t.$t("nick")))])]),a("th",{staticClass:"center head",attrs:{width:"53%"}},[t._v(t._s(t.$t("biography")))]),a("th",{staticClass:"center head",staticStyle:{"text-align":"center"},attrs:{width:"10%"}},[a("b",[t._v(t._s(t.$t("accept")))])])])]),a("tbody",t._l(t.contentPayload,(function(e,n,r){return a("tr",{key:n},[a("td",{staticClass:"center head"},[t._v(t._s(50*t.page+n+1))]),a("td",{staticClass:"center head"},[a("router-link",{attrs:{to:"/user/"+e.user_id}},[t._v(" "+t._s(e.user_id)+" ")])],1),a("td",[a("v-gravatar",{staticClass:"ui avatar image",staticStyle:{"object-fit":"cover"},attrs:{hostname:"gravatar.w3tt.com","original-src":t.getAvatarURL(e),email:e.email}})],1),a("td",[t._v(" "+t._s(t.convertHTML(e.nick))+" ")]),a("td",{staticClass:"center head",domProps:{innerHTML:t._s(e.biography)}}),a("td",{staticClass:"center head",staticStyle:{"text-align":"center"}},[a("router-link",{attrs:{to:"/status?user_id="+e.user_id+"&jresult=4"}},[t._v(t._s(e.solved||0))])],1)])})),0)])])},b=[],p=a("20a2"),f=a("92f1"),_=function(t){Object(c["a"])(a,t);var e=Object(o["a"])(a);function a(){var t;return Object(s["a"])(this,a),t=e.apply(this,arguments),t.contentPayload=[],t}return Object(i["a"])(a,[{key:"onContentChanged",value:function(t){var e=this;this.contentPayload=t,t.forEach(function(){var t=Object(h["a"])(regeneratorRuntime.mark((function t(a){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!a||!a.biography){t.next=4;break}return t.next=3,e.renderRawAsync(a.biography||"");case 3:a.biography=t.sent;case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}},{key:"convertHTML",value:function(t){var e=document.createElement("div");return e.innerHTML=t,e.innerText}}]),a}(Object(m["b"])(p["a"],f["a"]));Object(u["c"])([Object(m["c"])({default:function(){return[]}})],_.prototype,"content",void 0),Object(u["c"])([Object(m["c"])({default:0})],_.prototype,"page",void 0),Object(u["c"])([Object(m["d"])("content")],_.prototype,"onContentChanged",null),_=Object(u["c"])([m["a"]],_);var g=_,k=g,y=a("2877"),w=Object(y["a"])(k,v,b,!1,null,"4b7b2c2e",null),j=w.exports,C=a("6da9"),O=a("2cd4"),x=function(t){Object(c["a"])(a,t);var e=Object(o["a"])(a);function a(){var t;return Object(s["a"])(this,a),t=e.apply(this,arguments),t.registed_user=0,t.acm_user=0,t.mode=1,t.page=0,t.search="",t.time_stamp="",t.acmmember={ranklist:[]},t.retiremember={ranklist:[]},t.recent_register=[],t.ranklistData=null,t}return Object(i["a"])(a,[{key:"created",value:function(){this.page=parseInt(this.$route.query.page)||this.page,this.mode=this.$route.query.acm?2:1,this.search=this.$route.query.search||""}},{key:"onRankChange",value:function(t,e){this.ranklistData=t}},{key:"convertHTML",value:function(t){var e=document.createElement("div");return e.innerHTML=t,e.innerText}},{key:"search_user",value:function(t){var e=this;this.search=t.target.value,this.axios.get("/api/ranklist?page=".concat(this.page,"&search=").concat(this.search,"&time_stamp=").concat(this.time_stamp)).then((function(t){var a=t.data;e.ranklistData=a}))}},{key:"timestamp",value:function(t,e){var a=this;this.time_stamp=t,this.axios.get("/api/ranklist?page=".concat(this.page,"&search=").concat(this.search,"&time_stamp=").concat(this.time_stamp)).then((function(t){var e=t.data;a.ranklistData=e}))}},{key:"_page",value:function(t,e){var a=this;this.page+=t;this.axios.get("/api/ranklist?page=".concat(this.page,"&search=").concat(this.search,"&time_stamp=").concat(this.time_stamp)).then((function(t){var e=t.data;a.ranklistData=e}))}},{key:"mounted",value:function(){var t=this;this.axios.get("/api/ranklist/user").then((function(e){var a=e.data;t.registed_user=a[0].tot_user,t.acm_user=a[0].acm_user})),this.axios.get("/api/ranklist/acmmember").then((function(e){var a=e.data;t.acmmem=a})),this.axios.get("/api/ranklist/oldmember").then((function(e){var a=e.data;t.retiremem=a})),this.axios.get("/api/user/recent_register").then((function(e){var a=e.data;t.recent_register=a.data}))}},{key:"ranklist",get:function(){var t,e=this;return t=this.ranklistData&&this.ranklistData.ranklist?this.ranklistData.ranklist:this.rank&&this.rank.ranklist?this.rank.ranklist:[],t.forEach(function(){var t=Object(h["a"])(regeneratorRuntime.mark((function t(a){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if("string"!==typeof a.biography){t.next=6;break}return t.next=3,e.renderRawAsync(a.biography);case 3:a.biography=t.sent,t.next=7;break;case 6:a.biography="";case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),t}},{key:"acmmem",get:function(){return this.acmmember.ranklist},set:function(t){this.acmmember=t}},{key:"retiremem",get:function(){return this.retiremember.ranklist},set:function(t){this.retiremember=t}}]),a}(Object(m["b"])(C["a"],p["a"],O["a"],f["a"]));Object(u["c"])([Object(m["c"])({default:null})],x.prototype,"rank",void 0),Object(u["c"])([Object(m["d"])("rank")],x.prototype,"onRankChange",null),x=Object(u["c"])([Object(m["a"])({components:{tableCard:j}})],x);var $=x,R=$,M=a("0647"),A=Object(y["a"])(R,l,d,!1,null,"48a86b60",null);"function"===typeof M["default"]&&Object(M["default"])(A);var L=A.exports,D=a("d3a2"),T=a("2f62"),E=function(t){Object(c["a"])(a,t);var e=Object(o["a"])(a);function a(){var t;return Object(s["a"])(this,a),t=e.apply(this,arguments),t.ranklist={},t}return Object(i["a"])(a,[{key:"mounted",value:function(){var t=this;document.title="Ranklist -- ".concat(document.title),this.axios.get("/api/ranklist/".concat(this.$route.query.page?"?page=".concat(this.$route.query.page):"")).then((function(e){t.ranklist=e.data}))}}]),a}(Object(m["b"])(O["a"]));E=Object(u["c"])([Object(m["a"])({components:{RankList:L,ContestMode:D["a"]},computed:Object(T["b"])(["contestMode"])})],E);var S=E,H=S,U=Object(y["a"])(H,n,r,!1,null,"8dda1478",null);e["default"]=U.exports},"5b66":function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"zh-cn":{"all user":"所有用户","current member":"现役队员","retired member":"退役队员","new user":"新用户"},"en":{"all user":"All Users","current member":"ACM Member","retired member":"Retired Member","new user":"New Users"},"ja":{"all user":"ユーザーリスト","current member":"チームメンバー","retired member":"リタイヤメンバー","new user":"新規ユーザー"}}'),delete t.options._Ctor}},"6da9":function(t,e,a){"use strict";var n=a("d4ec"),r=a("262e"),s=a("2caf"),i=a("9ab4"),c=a("1157"),o=a.n(c),u=(a("8665"),a("60a3")),l=a("2b0e");window.$=window.jQuery=o.a;var d=function(t){Object(r["a"])(a,t);var e=Object(s["a"])(a);function a(){return Object(n["a"])(this,a),e.apply(this,arguments)}return a}(l["a"]);d=Object(i["c"])([u["a"]],d),e["a"]=d},"92f1":function(t,e,a){"use strict";a("96cf");var n=a("1da1"),r=a("d4ec"),s=a("bee2"),i=a("262e"),c=a("2caf"),o=a("9ab4"),u=a("2b0e"),l=a("60a3"),d=a("ebb0"),h=a.n(d),m=a("a390"),v=a.n(m),b=function(t){Object(i["a"])(a,t);var e=Object(c["a"])(a);function a(){var t;return Object(r["a"])(this,a),t=e.apply(this,arguments),t.originalWorker=new v.a,t}return Object(s["a"])(a,[{key:"created",value:function(){this.worker_=new h.a(this.originalWorker)}},{key:"beforeDestroy",value:function(){this.originalWorker.terminate()}},{key:"renderAsync",value:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",this.worker_.postMessage({type:"render",content:e}));case 1:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()},{key:"renderRawAsync",value:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",this.worker_.postMessage({type:"renderRaw",content:e}));case 1:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()}]),a}(u["a"]);b=Object(o["c"])([l["a"]],b),e["a"]=b},a390:function(t,e,a){"use strict";t.exports=function(){return new Worker("/f101fd92ff8d3f0ac76c.worker.js")}},bc99:function(t,e,a){"use strict";var n=a("111f"),r=a.n(n);e["default"]=r.a},d3a2:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"ui negative message"},[a("div",{staticClass:"header"},[a("i",{staticClass:"ban icon"}),t._v(t._s(t.$t("contest mode")))]),a("p",[t._v(t._s(t.$t("context")))])])},r=[],s=a("d4ec"),i=a("262e"),c=a("2caf"),o=a("9ab4"),u=a("60a3"),l=a("2b0e"),d=function(t){Object(i["a"])(a,t);var e=Object(c["a"])(a);function a(){return Object(s["a"])(this,a),e.apply(this,arguments)}return a}(l["a"]);d=Object(o["c"])([u["a"]],d);var h=d,m=h,v=a("2877"),b=a("bc99"),p=Object(v["a"])(m,n,r,!1,null,"5816c0f2",null);"function"===typeof b["default"]&&Object(b["default"])(p);e["a"]=p.exports},ebb0:function(t,e,a){"use strict";var n=0;function r(t,e){var a=e.data;if(Array.isArray(a)&&!(a.length<2)){var n=a[0],r=a[1],s=a[2],i=t._callbacks[n];i&&(delete t._callbacks[n],i(r,s))}}function s(t){var e=this;e._worker=t,e._callbacks={},t.addEventListener("message",(function(t){r(e,t)}))}s.prototype.postMessage=function(t){var e=this,a=n++,s=[a,t];return new Promise((function(t,n){if(e._callbacks[a]=function(e,a){if(e)return n(new Error(e.message));t(a)},"undefined"!==typeof e._worker.controller){var i=new MessageChannel;i.port1.onmessage=function(t){r(e,t)},e._worker.controller.postMessage(s,[i.port2])}else e._worker.postMessage(s)}))},t.exports=s}}]);
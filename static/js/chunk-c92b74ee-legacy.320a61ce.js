(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c92b74ee"],{"0c11":function(t,e,a){"use strict";var n=a("d4ec"),s=a("bee2"),i=a("262e"),r=a("2caf"),c=a("9ab4"),o=a("2b0e"),u=a("fbdb"),l=a.n(u),d=a("1157"),v=a.n(d),f=a("60a3"),b=function(t){Object(i["a"])(a,t);var e=Object(r["a"])(a);function a(){return Object(n["a"])(this,a),e.apply(this,arguments)}return Object(s["a"])(a,[{key:"created",value:function(){var t=this;v()(document).on("click",(function(){t.initVisibleMermaid()}))}},{key:"initVisibleMermaid",value:function(){v()(".mermaid").each((function(t,e){v()(e).is(":visible")&&l.a.init(e)}))}},{key:"initMermaid",value:function(){v()(".mermaid").each((function(t,e){l.a.init(e)}))}}]),a}(o["a"]);b=Object(c["c"])([f["a"]],b),e["a"]=b},"111f":function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"zh-cn":{"context":"根据管理员设置，该页面禁止进入"},"en":{"context":"According to admin setup, you don\'t have privilege to access target page"},"ja":{"context":"都合によって、このページはアクセス禁止されている"}}'),delete t.options._Ctor}},"20a2":function(t,e,a){"use strict";var n=a("d4ec"),s=a("bee2"),i=a("262e"),r=a("2caf"),c=a("9ab4"),o=a("2b0e"),u=a("60a3"),l=a("3657"),d=l["a"].getAvatarURL,v=l["a"].hasAvatarURL,f=function(t){Object(i["a"])(a,t);var e=Object(r["a"])(a);function a(){return Object(n["a"])(this,a),e.apply(this,arguments)}return Object(s["a"])(a,[{key:"getAvatarURL",value:function(){for(var t=arguments.length,e=new Array(t),a=0;a<t;a++)e[a]=arguments[a];return d.apply(this,e)}},{key:"hasAvatarURL",value:function(){for(var t=arguments.length,e=new Array(t),a=0;a<t;a++)e[a]=arguments[a];return v.apply(this,e)}}]),a}(o["a"]);f=Object(c["c"])([u["a"]],f),e["a"]=f},"471e":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.contestMode?a("div",{staticClass:"ui container padding"}):a("div",{staticClass:"ui container padding"},[a("h2",{staticClass:"ui dividing header"},[t._v(" "+t._s(t.$t("tutorial"))+" "),a("div",{staticClass:"sub header"},[t._v(" β ")])]),a("div",{staticClass:"ui grid"},[a("div",{staticClass:"row"},[a("div",{staticClass:"thirteen wide column"}),a("div",{staticClass:"three wide right aligned column"},[a("router-link",{staticClass:"ui labeled icon blue mini button",attrs:{to:"/tutorial/new/"+t.id}},[a("i",{staticClass:"write icon"}),t._v(t._s(t.$t("post new solution")))])],1)])]),t._l(t.content,(function(e,n){return a("div",{key:n,staticClass:"ui grid"},[a("div",{staticClass:"four wide column"},[a("UserCard",{attrs:{thread_head:e}})],1),a("div",{staticClass:"twelve wide column"},[a("div",{staticClass:"ui existing full segment"},[e.user_id+""===t.owner?a("router-link",{staticClass:"ui blue right ribbon label",attrs:{to:"/tutorial/edit/"+e.tutorial_id}},[t._v(t._s(t.$t("edit")))]):t._e(),a("div",{staticClass:"ui vertical segment",domProps:{innerHTML:t._s(e.content)}}),a("div",{staticClass:"ui raised segment"},[a("div",{staticClass:"ui tiny statistics"},[a("div",{staticClass:"statistic"},[a("div",{staticClass:"value none-transform"},[t._v(" "+t._s(e.time)+" "),a("span",{staticClass:"subscript"},[t._v("ms")])]),a("div",{staticClass:"label none-transform"},[t._v(" "+t._s(t.$t("time"))+" ")])]),a("div",{staticClass:"statistic"},[a("div",{staticClass:"value none-transform"},[t._v(" "+t._s(e.memory)+" "),a("span",{staticClass:"subscript"},[t._v("KB")])]),a("div",{staticClass:"label none-transform"},[t._v(" "+t._s(t.$t("memory"))+" ")])]),a("div",{staticClass:"statistic"},[a("div",{staticClass:"value none-transform"},[t._v(" "+t._s(t.language_name[e.language])+" "),a("span",{staticClass:"subscript"})]),a("div",{staticClass:"label none-transform"},[t._v(" "+t._s(t.$t("programming language"))+" ")])]),a("div",{staticClass:"statistic"},[a("div",{class:"value none-transform "+t.judge_color[e.result]},[a("i",{class:t.icon_list[e.result]+" icon"}),t._v(" "+t._s(t.result_name[e.result])+" "),a("span",{staticClass:"subscript"})]),a("div",{staticClass:"label none-transform"},[t._v(" "+t._s(t.$t("result"))+" ")])])])]),a("div",{staticClass:"ui styled fluid accordion"},[a("div",{staticClass:"title"},[t._v(t._s(t.$t("source code"))),a("i",{staticClass:"dropdown icon"})]),a("div",{staticClass:"content",domProps:{innerHTML:t._s(e.code)}})])],1)])])}))],2)},s=[],i=(a("99af"),a("4160"),a("159b"),a("96cf"),a("1da1")),r=a("d4ec"),c=a("bee2"),o=a("262e"),u=a("2caf"),l=a("9ab4"),d=a("2cd4"),v=a("20a2"),f=a("0c11"),b=a("d3a2"),p=a("60a3"),_=a("1157"),h=a.n(_),m=a("2f62"),g=a("75ed"),y=a("92f1"),C=h.a,w=a("b311"),j=function(t){Object(o["a"])(a,t);var e=Object(u["a"])(a);function a(){var t;return Object(r["a"])(this,a),t=e.apply(this,arguments),t.content=[],t.id="",t.source="local",t.judge_color=[],t.language_name=[],t.icon_list=[],t.result_name=[],t.owner="",t.language_markdown=[],t}return Object(c["a"])(a,[{key:"created",value:function(){this.id=this.$route.params.problem_id,this.source=this.$route.query.from||"local"}},{key:"updated",value:function(){var t=this;this.$nextTick((function(){C(".ui.accordion").accordion({exclusive:!1});var e=new w(".copy.context",{text:function(t){return C(t).parent().next().text()}});e.on("success",(function(e){C(e.trigger).popup({title:t.$t("finish"),content:t.$t("Context is in your clipboard"),on:"click"}).popup("show")}))}))}},{key:"mounted",value:function(){var t=this;document.title="Tutorial -- ".concat(document.title),this.axios.get("/api/tutorial/".concat(this.source,"/").concat(this.id)).then((function(e){var a=e.data,n=a,s=n.data,r=n.const_variable.language_common_name;s.forEach(function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(a){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.renderAsync(a.content);case 2:return a.content=e.sent,e.next=5,t.renderAsync("```"+r[a.language]+"\n"+a.code+"\n```");case 5:a.code=e.sent;case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),Object.assign(t,{content:s,id:t.$route.params.problem_id,source:t.$route.query.from||"local",judge_color:n.const_variable.judge_color,language_name:n.const_variable.language_name,icon_list:n.const_variable.icon_list,result_name:n.const_variable.result,owner:n.self,language_markdown:n.const_variable.language_common_name})}));var e=document.title;C("title").html("Tutorial "+this.id+" -- "+e)}}]),a}(Object(p["b"])(d["a"],v["a"],f["a"],y["a"]));j=Object(l["c"])([Object(p["a"])({components:{UserCard:g["a"],ContestMode:b["a"]},computed:Object(m["b"])(["contestMode"])})],j);var k=j,O=k,x=(a("e40f"),a("2877")),$=Object(x["a"])(O,n,s,!1,null,"415e321c",null);e["default"]=$.exports},"75ed":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"ui link card"},[a("div",{staticClass:"image"},[a("router-link",{attrs:{to:"/user/"+t.thread_head.user_id}},[a("v-gravatar",{staticStyle:{width:"100%",display:"flex"},attrs:{size:400,hostname:"gravatar.w3tt.com",email:t.thread_head.email}})],1)],1),a("div",{staticClass:"content"},[a("div",{staticClass:"header"},[a("router-link",{staticClass:"black",attrs:{to:"/user/"+t.thread_head.user_id}},[t._v(" "+t._s(t.thread_head.nick)+" ")])],1),a("div",{staticClass:"meta"},[a("router-link",{attrs:{to:"/user/"+t.thread_head.user_id}},[t._v(" "+t._s(t.thread_head.user_id)+" ")])],1),a("div",{staticClass:"description",domProps:{innerHTML:t._s(t.biography)}})]),a("div",{staticClass:"extra content"},[a("span",{staticClass:"right floated"}),a("span",[a("i",{staticClass:"user icon"}),t._v(" "+t._s(t.$t("solved"))+" "+t._s(t.thread_head.solved)+" ")])])])},s=[],i=(a("96cf"),a("1da1")),r=a("d4ec"),c=a("bee2"),o=a("262e"),u=a("2caf"),l=a("9ab4"),d=a("60a3"),v=a("20a2"),f=a("92f1"),b=function(t){Object(o["a"])(a,t);var e=Object(u["a"])(a);function a(){var t;return Object(r["a"])(this,a),t=e.apply(this,arguments),t.biography="",t}return Object(c["a"])(a,[{key:"onThreadHeadChanged",value:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.renderRawAsync(e.biography);case 2:this.biography=t.sent;case 3:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()}]),a}(Object(d["b"])(v["a"],f["a"]));Object(l["c"])([Object(d["c"])({default:function(){return{biography:"",solved:0,user_id:"",nick:"",email:""}}})],b.prototype,"thread_head",void 0),Object(l["c"])([Object(d["d"])("thread_head")],b.prototype,"onThreadHeadChanged",null),b=Object(l["c"])([d["a"]],b);var p=b,_=p,h=a("2877"),m=Object(h["a"])(_,n,s,!1,null,"281d9e67",null);e["a"]=m.exports},"92f1":function(t,e,a){"use strict";a("96cf");var n=a("1da1"),s=a("d4ec"),i=a("bee2"),r=a("262e"),c=a("2caf"),o=a("9ab4"),u=a("2b0e"),l=a("60a3"),d=a("ebb0"),v=a.n(d),f=a("a390"),b=a.n(f),p=function(t){Object(r["a"])(a,t);var e=Object(c["a"])(a);function a(){var t;return Object(s["a"])(this,a),t=e.apply(this,arguments),t.originalWorker=new b.a,t}return Object(i["a"])(a,[{key:"created",value:function(){this.worker_=new v.a(this.originalWorker)}},{key:"beforeDestroy",value:function(){this.originalWorker.terminate()}},{key:"renderAsync",value:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",this.worker_.postMessage({type:"render",content:e}));case 1:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()},{key:"renderRawAsync",value:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",this.worker_.postMessage({type:"renderRaw",content:e}));case 1:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()}]),a}(u["a"]);p=Object(o["c"])([l["a"]],p),e["a"]=p},a390:function(t,e,a){"use strict";t.exports=function(){return new Worker("/3d1b54301d0fc32afa9a.worker.js")}},bc49:function(t,e,a){},bc99:function(t,e,a){"use strict";var n=a("111f"),s=a.n(n);e["default"]=s.a},d3a2:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"ui negative message"},[a("div",{staticClass:"header"},[a("i",{staticClass:"ban icon"}),t._v(t._s(t.$t("contest mode")))]),a("p",[t._v(t._s(t.$t("context")))])])},s=[],i=a("d4ec"),r=a("262e"),c=a("2caf"),o=a("9ab4"),u=a("60a3"),l=a("2b0e"),d=function(t){Object(r["a"])(a,t);var e=Object(c["a"])(a);function a(){return Object(i["a"])(this,a),e.apply(this,arguments)}return a}(l["a"]);d=Object(o["c"])([u["a"]],d);var v=d,f=v,b=a("2877"),p=a("bc99"),_=Object(b["a"])(f,n,s,!1,null,"5816c0f2",null);"function"===typeof p["default"]&&Object(p["default"])(_);e["a"]=_.exports},e40f:function(t,e,a){"use strict";var n=a("bc49"),s=a.n(n);s.a},ebb0:function(t,e,a){"use strict";var n=0;function s(t,e){var a=e.data;if(Array.isArray(a)&&!(a.length<2)){var n=a[0],s=a[1],i=a[2],r=t._callbacks[n];r&&(delete t._callbacks[n],r(s,i))}}function i(t){var e=this;e._worker=t,e._callbacks={},t.addEventListener("message",(function(t){s(e,t)}))}i.prototype.postMessage=function(t){var e=this,a=n++,i=[a,t];return new Promise((function(t,n){if(e._callbacks[a]=function(e,a){if(e)return n(new Error(e.message));t(a)},"undefined"!==typeof e._worker.controller){var r=new MessageChannel;r.port1.onmessage=function(t){s(e,t)},e._worker.controller.postMessage(i,[r.port2])}else e._worker.postMessage(i)}))},t.exports=i}}]);
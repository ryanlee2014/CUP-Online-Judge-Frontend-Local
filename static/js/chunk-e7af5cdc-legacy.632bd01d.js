(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e7af5cdc"],{"0c11":function(t,e,n){"use strict";var r=n("d4ec"),a=n("bee2"),i=n("99de"),o=n("7e84"),c=n("262e"),s=n("9ab4"),u=n("2b0e"),l=n("fbdb"),d=n.n(l),f=n("1157"),h=n.n(f),p=n("60a3"),v=function(t){function e(){return Object(r["a"])(this,e),Object(i["a"])(this,Object(o["a"])(e).apply(this,arguments))}return Object(c["a"])(e,t),Object(a["a"])(e,[{key:"created",value:function(){var t=this;h()(document).on("click",(function(){t.initVisibleMermaid()}))}},{key:"initVisibleMermaid",value:function(){h()(".mermaid").each((function(t,e){h()(e).is(":visible")&&d.a.init(e)}))}},{key:"initMermaid",value:function(){h()(".mermaid").each((function(t,e){d.a.init(e)}))}}]),e}(u["a"]);v=Object(s["c"])([p["a"]],v),e["a"]=v},"20a2":function(t,e,n){"use strict";var r=n("d4ec"),a=n("bee2"),i=n("99de"),o=n("7e84"),c=n("262e"),s=n("9ab4"),u=n("2b0e"),l=n("2fe1"),d=n("3657"),f=d["a"].getAvatarURL,h=d["a"].hasAvatarURL,p=function(t){function e(){return Object(r["a"])(this,e),Object(i["a"])(this,Object(o["a"])(e).apply(this,arguments))}return Object(c["a"])(e,t),Object(a["a"])(e,[{key:"getAvatarURL",value:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return f.apply(this,e)}},{key:"hasAvatarURL",value:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return h.apply(this,e)}}]),e}(u["a"]);p=Object(s["c"])([l["b"]],p),e["a"]=p},"25b7":function(t,e,n){"use strict";var r=n("9d7d"),a=n.n(r);a.a},"5dbd":function(t,e,n){"use strict";n.d(e,"a",(function(){return l})),n.d(e,"d",(function(){return d})),n.d(e,"b",(function(){return f})),n.d(e,"f",(function(){return h})),n.d(e,"e",(function(){return p})),n.d(e,"c",(function(){return v}));n("99af"),n("a15b"),n("d81d"),n("b0c0"),n("96cf");var r=n("1da1"),a=n("2ef0"),i=n.n(a),o=function(){},c=o;function s(t){return function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];c.apply(void 0,[t].concat(n))}}var u=s("Decorator mounted: ");function l(t,e){return function(n,r,a){u("debounce, target:".concat(n.constructor.name,", propertyName:").concat(r));var o=a.value;return a.value=i.a.debounce(o,t,e),a}}function d(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return function(e,n,r){u("Interval, target:".concat(e.constructor.name,", propertyName:").concat(n));var a=r.value;r.value=function(){for(var r=this,i=arguments.length,o=new Array(i),c=0;c<i;c++)o[c]=arguments[c];if("undefined"===typeof this.timer_||"undefined"===typeof this.timer_.length)throw new Error("You should mixin TimerMixin to your component");a.apply(this,o),this.timer_.push(setInterval((function(){u("".concat(e.constructor.name,".").concat(n," called.")),a.apply(r,o)}),t))},c("mounted interval")}}function f(t,e,n){u("Debuglogging, target:".concat(t.constructor.name,", propertyName:").concat(e));var r=n.value;n.value=function(){for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];var i=n.map((function(t){return JSON.stringify(t)})).join(),o=r.apply(this,n),s=JSON.stringify(o);return c("Call: ".concat(e,"(").concat(i,") => ").concat(s)),o}}function h(t,e,n){u("WebSocketRequest, target:".concat(t.constructor.name,", propertyName:").concat(e));var r=n.value;n.value=function(){if(this.$socket.connected){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return r.apply(this,e)}alert("WebSocket服务未启动，请等待服务启动后提交\nWebSocket服务启动标志未:\n右上角显示在线人数")}}function p(t){return function(e,n,a){u("Lock, target:".concat(e.constructor.name,", propertyName:").concat(n));var i=a.value;a.value=function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(){var n,r,a,o,c=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.acquireAsync();case 2:for(n=c.length,r=new Array(n),a=0;a<n;a++)r[a]=c[a];return o=i.apply(this,r),t.release(),e.abrupt("return",o);case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}}function v(t,e,n){var r=n.value;n.value=function(){try{for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return r.apply(this,e)}catch(a){alert(a.message)}}}},"734c":function(t,e,n){"use strict";var r=n("ec5b"),a=n.n(r);a.a},"75ed":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"ui link card"},[r("div",{staticClass:"image"},[t.hasAvatarURL(t.thread_head)?r("router-link",{attrs:{src:t.getAvatarURL(t.thread_head),to:"/user/"+t.thread_head.user_id,tag:"img"}}):r("img",{attrs:{src:n("84ef")}})],1),r("div",{staticClass:"content"},[r("div",{staticClass:"header"},[r("router-link",{staticClass:"black",attrs:{to:"/user/"+t.thread_head.user_id}},[t._v(" "+t._s(t.thread_head.nick)+" ")])],1),r("div",{staticClass:"meta"},[r("router-link",{attrs:{to:"/user/"+t.thread_head.user_id}},[t._v(" "+t._s(t.thread_head.user_id)+" ")])],1),r("div",{staticClass:"description",domProps:{innerHTML:t._s(t.biography)}})]),r("div",{staticClass:"extra content"},[r("span",{staticClass:"right floated"}),r("span",[r("i",{staticClass:"user icon"}),t._v(" "+t._s(t.$t("solved"))+" "+t._s(t.thread_head.solved)+" ")])])])},a=[],i=(n("96cf"),n("1da1")),o=n("d4ec"),c=n("bee2"),s=n("99de"),u=n("7e84"),l=n("262e"),d=n("9ab4"),f=n("60a3"),h=n("20a2"),p=n("92f1"),v=function(t){function e(){var t;return Object(o["a"])(this,e),t=Object(s["a"])(this,Object(u["a"])(e).apply(this,arguments)),t.biography="",t}return Object(l["a"])(e,t),Object(c["a"])(e,[{key:"onThreadHeadChanged",value:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.renderRawAsync(e.biography);case 2:this.biography=t.sent;case 3:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()}]),e}(Object(f["b"])(h["a"],p["a"]));Object(d["c"])([Object(f["c"])({default:function(){return{biography:"",solved:0,user_id:"",nick:""}}})],v.prototype,"thread_head",void 0),Object(d["c"])([Object(f["d"])("thread_head")],v.prototype,"onThreadHeadChanged",null),v=Object(d["c"])([f["a"]],v);var m=v,y=m,b=n("2877"),g=Object(b["a"])(y,r,a,!1,null,"7a372a7e",null);e["a"]=g.exports},"9d7d":function(t,e,n){},"9edc":function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"zh-cn":{"read time cost":"阅读本文需要大约{n}分钟"},"en":{"read time cost":"It takes about {n} minute to read this article | It takes about {n} minutes to read this article"},"ja":{"read time cost":"この記事を読むには約{n}分かかります"}}'),delete t.options._Ctor}},b0d1:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ui container padding"},[n("h2",{staticClass:"ui dividing header"},[t._v(t._s(t.$t("discuss")))]),n("div",{staticClass:"ui breadcrumb"},[n("router-link",{staticClass:"section",attrs:{to:"/discuss"}},[t._v("讨论主页")]),n("i",{staticClass:"right angle icon divider"}),n("div",{staticClass:"active section"},[t._v("Discuss ID:"+t._s(t.id))])],1),n("h1",[t._v(t._s(t.thread_head?t.thread_head.title:""))]),n("MainContent",{attrs:{id:t.id,owner:t.owner,thread_head:t.thread_head||{}}}),n("h3",{staticClass:"ui dividing header"},[t._v(t._s(t.$t("comments")))]),n("div",{staticClass:"ui comments"},t._l(t.reply,(function(e,r){return n("div",{key:r,staticClass:"comment"},[n("div",{staticClass:"avatar"},[t.hasAvatarURL(e)?n("router-link",{staticClass:"avatar",attrs:{src:t.getAvatarURL(e),to:"/user/"+e.user_id,tag:"img"}}):n("router-link",{attrs:{src:"@/static/image/white-image.png",to:"/user/"+e.user_id,tag:"img"}})],1),n("div",{staticClass:"content"},[n("router-link",{staticClass:"author",attrs:{to:"/user/"+e.user_id}},[t._v(t._s(e.nick))]),n("div",{staticClass:"metadata"},[n("span",{staticClass:"date"},[t._v(t._s(new Date(e.create_time).toLocaleString()))])]),n("div",{staticClass:"text",domProps:{innerHTML:t._s(e.content)}}),n("div",{staticClass:"actions"},[e.user_id+""===t.owner?n("router-link",{staticClass:"reply",attrs:{to:"/discuss/edit/"+t.id+"/"+e.comment_id}},[t._v(" "+t._s(t.$t("edit"))+" ")]):t._e(),t.isadmin?n("a",{staticClass:"reply",on:{click:function(n){return t.block_reply(e.comment_id)}}},[t._v("屏蔽")]):t._e()],1)],1)])})),0),n("h3",{staticClass:"ui dividing header"},[t._v(t._s(t.$t("reply")))]),n("form",{staticClass:"ui reply form"},[n("div",{staticClass:"field"},[n("mavon-editor",{model:{value:t.replyText,callback:function(e){t.replyText=e},expression:"replyText"}})],1),n("div",{staticClass:"two field"},[n("div",{staticClass:"ui left input",staticStyle:{width:"auto"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.captcha,expression:"captcha"}],attrs:{id:"vcode",name:"vcode",placeholder:"验证码",type:"text"},domProps:{value:t.captcha},on:{input:function(e){e.target.composing||(t.captcha=e.target.value)}}}),n("img",{attrs:{alt:"click to change",height:"40px",id:"vcode_graph",onclick:"this.src='/api/captcha?from=discuss&random='+Math.random()",src:"/api/captcha?from=discuss"}})])]),n("div",{staticClass:"ui blue labeled submit icon button",on:{click:t.replyComment}},[n("i",{staticClass:"icon edit"}),t._v(" "+t._s(t.$t("add"))+" ")])])],1)},a=[],i=(n("99af"),n("4160"),n("b65f"),n("159b"),n("96cf"),n("1da1")),o=n("d4ec"),c=n("bee2"),s=n("99de"),u=n("7e84"),l=n("262e"),d=n("9ab4"),f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ui grid"},[n("div",{staticClass:"four wide column"},[n("UserCard",{attrs:{thread_head:t.thread_head}}),n("div",{staticClass:"ui sticky",staticStyle:{left:"50.1429px"},attrs:{id:"sticky_content"}},[n("h3",{directives:[{name:"show",rawName:"v-show",value:t.content,expression:"content"}],staticClass:"ui header",attrs:{id:"contents"}},[t._v("目录")]),n("div",{attrs:{id:"contentContainer"}})])],1),n("div",{staticClass:"twelve wide column"},[n("div",{staticClass:"ui existing full segment",attrs:{id:"main_context"}},[t.thread_head.user_id+""===t.owner?n("router-link",{staticClass:"ui blue right ribbon label",attrs:{to:"/discuss/edit/"+t.id}},[t._v(" "+t._s(t.$t("edit"))+" ")]):t._e(),n("div",{staticClass:"ui info message"},[n("div",{staticClass:"header"},[t._v(" "+t._s(t.$tc("read time cost",t.readTime(t.thread_head.content),{n:t.readTime(t.thread_head.content)}))+" ")])]),n("div",{domProps:{innerHTML:t._s(t.thread_content)}})],1)])])},h=[],p=(n("7db0"),n("498a"),n("20a2")),v=n("60a3"),m=n("75ed"),y=n("92f1"),b=n("1157"),g=n.n(b),_=n("0c11"),k=n("5dbd"),w=document.createElement("div"),x=g.a,O=n("19ddd"),j=function(t){function e(){var t;return Object(o["a"])(this,e),t=Object(s["a"])(this,Object(u["a"])(e).apply(this,arguments)),t.thread_content="",t.content=!1,t}return Object(l["a"])(e,t),Object(c["a"])(e,[{key:"created",value:function(){this.thread_content=this.$t("loading")}},{key:"onThreadHeadChanged",value:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(e){var n,r=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.content){t.next=6;break}return t.next=3,this.renderAsync(e.content);case 3:n=t.sent,this.thread_content=n,this.$nextTick((function(){r.renderMermaid()}));case 6:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()},{key:"renderMermaid",value:function(){this.initMermaid()}},{key:"readTime",value:function(t){return w.innerHTML=t,Math.trunc(Math.pow(Math.ceil(w.innerText.length/300),1.41428579532))}},{key:"updated",value:function(){var t=x(".table-of-contents"),e=t.html(),n=x("#contentContainer");e||(e=""),t.html(""),e&&n.html(""+e),x("#sticky_content").sticky({context:"#main_context",offset:50}),n.find("a").on("click",(function(){return x([document.documentElement,document.body]).animate({scrollTop:x(document.getElementById(O(this.innerText))).offset().top-50},600),!1})),this.content=e&&e.trim&&e.trim().length>0||n&&n.html()&&n.html().trim().length>0}}]),e}(Object(v["b"])(p["a"],y["a"],_["a"]));Object(d["c"])([Object(v["c"])({default:function(){return{}}})],j.prototype,"thread_head",void 0),Object(d["c"])([Object(v["c"])({default:""})],j.prototype,"owner",void 0),Object(d["c"])([Object(v["c"])({default:""})],j.prototype,"id",void 0),Object(d["c"])([Object(v["d"])("thread_head")],j.prototype,"onThreadHeadChanged",null),Object(d["c"])([Object(k["a"])(100)],j.prototype,"renderMermaid",null),j=Object(d["c"])([Object(v["a"])({components:{UserCard:m["a"]}})],j);var C=j,T=C,E=(n("25b7"),n("2877")),S=n("c82a"),A=Object(E["a"])(T,f,h,!1,null,"5aacee6f",null);"function"===typeof S["default"]&&Object(S["default"])(A);var M=A.exports,L=n("2cd4"),R=n("2ef0"),H=n.n(R),N=n("b311"),P=n.n(N),$=g.a,I=(n("19ddd"),function(t){function e(){var t;return Object(o["a"])(this,e),t=Object(s["a"])(this,Object(u["a"])(e).apply(this,arguments)),t.page=0,t.table_val={},t.total=0,t.id=0,t.replyText="",t.captcha="",t.owner="",t.isadmin=!1,t}return Object(l["a"])(e,t),Object(c["a"])(e,[{key:"created",value:function(){this.id=parseInt(this.$route.params.id)||0}},{key:"mounted",value:function(){document.title="Thread ".concat(this.id," -- ").concat(document.title);var t=20*this.page,e=this;this.axios.get("/api/discuss/".concat(this.id,"?page=").concat(t)).then((function(t){var n=t.data;e.table=n})),this.$nextTick((function(){var t=new P.a(".copy.context",{text:function(t){return $(t).parent().next().text()}});t.on("success",(function(t){$(t.trigger).popup({title:"Finished",content:"Context is in your clipboard",on:"click"}).popup("show")}))}))}},{key:"replyComment",value:function(){var t={comment:this.replyText,captcha:this.captcha};this.axios.post("/api/discuss/reply/".concat(this.id),t).then((function(t){var e=t.data;"OK"===e.status?(alert("回复成功"),location.reload()):alert("回复失败！服务器发生未知错误")}))}},{key:"block_reply",value:function(t){this.axios.get("/api/discuss/update/reply/block/".concat(this.id,"/").concat(t)).then((function(t){var e=t.data;"OK"===e.status?alert("操作成功"):alert("操作失败")}))}},{key:"readTime",value:function(t){var e=document.createElement("div");return e.innerHTML=t,Math.trunc(Math.pow(Math.ceil(e.innerText.length/300),1.41428579532))}},{key:"table",get:function(){return this.table_val},set:function(t){var e=this;H.a.forEach(t,(function(t){t&&t.length&&H.a.forEach(t,function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(n){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!n.content){t.next=4;break}return t.next=3,e.renderAsync(n.content);case 3:n.content=t.sent;case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())})),this.table_val=t,this.owner=t.owner,this.isadmin=t.admin}},{key:"thread_head",get:function(){var t={title:""};return H.a.assign(t,this.table_val.discuss_header_content),t}},{key:"reply",get:function(){return this.table_val.discuss}}]),e}(Object(v["b"])(L["a"],p["a"],y["a"])));I=Object(d["c"])([Object(v["a"])({components:{MainContent:M}})],I);var U=I,F=U,q=(n("734c"),Object(E["a"])(F,r,a,!1,null,"828c2a76",null));e["default"]=q.exports},b311:function(t,e,n){
/*!
 * clipboard.js v2.0.5
 * https://clipboardjs.com/
 * 
 * Licensed MIT © Zeno Rocha
 */
(function(e,n){t.exports=n()})(0,(function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var a=e[r]={i:r,l:!1,exports:{}};return t[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(r,a,function(e){return t[e]}.bind(null,a));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=6)}([function(t,e){function n(t){var e;if("SELECT"===t.nodeName)t.focus(),e=t.value;else if("INPUT"===t.nodeName||"TEXTAREA"===t.nodeName){var n=t.hasAttribute("readonly");n||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),n||t.removeAttribute("readonly"),e=t.value}else{t.hasAttribute("contenteditable")&&t.focus();var r=window.getSelection(),a=document.createRange();a.selectNodeContents(t),r.removeAllRanges(),r.addRange(a),e=r.toString()}return e}t.exports=n},function(t,e){function n(){}n.prototype={on:function(t,e,n){var r=this.e||(this.e={});return(r[t]||(r[t]=[])).push({fn:e,ctx:n}),this},once:function(t,e,n){var r=this;function a(){r.off(t,a),e.apply(n,arguments)}return a._=e,this.on(t,a,n)},emit:function(t){var e=[].slice.call(arguments,1),n=((this.e||(this.e={}))[t]||[]).slice(),r=0,a=n.length;for(r;r<a;r++)n[r].fn.apply(n[r].ctx,e);return this},off:function(t,e){var n=this.e||(this.e={}),r=n[t],a=[];if(r&&e)for(var i=0,o=r.length;i<o;i++)r[i].fn!==e&&r[i].fn._!==e&&a.push(r[i]);return a.length?n[t]=a:delete n[t],this}},t.exports=n,t.exports.TinyEmitter=n},function(t,e,n){var r=n(3),a=n(4);function i(t,e,n){if(!t&&!e&&!n)throw new Error("Missing required arguments");if(!r.string(e))throw new TypeError("Second argument must be a String");if(!r.fn(n))throw new TypeError("Third argument must be a Function");if(r.node(t))return o(t,e,n);if(r.nodeList(t))return c(t,e,n);if(r.string(t))return s(t,e,n);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function o(t,e,n){return t.addEventListener(e,n),{destroy:function(){t.removeEventListener(e,n)}}}function c(t,e,n){return Array.prototype.forEach.call(t,(function(t){t.addEventListener(e,n)})),{destroy:function(){Array.prototype.forEach.call(t,(function(t){t.removeEventListener(e,n)}))}}}function s(t,e,n){return a(document.body,t,e,n)}t.exports=i},function(t,e){e.node=function(t){return void 0!==t&&t instanceof HTMLElement&&1===t.nodeType},e.nodeList=function(t){var n=Object.prototype.toString.call(t);return void 0!==t&&("[object NodeList]"===n||"[object HTMLCollection]"===n)&&"length"in t&&(0===t.length||e.node(t[0]))},e.string=function(t){return"string"===typeof t||t instanceof String},e.fn=function(t){var e=Object.prototype.toString.call(t);return"[object Function]"===e}},function(t,e,n){var r=n(5);function a(t,e,n,r,a){var i=o.apply(this,arguments);return t.addEventListener(n,i,a),{destroy:function(){t.removeEventListener(n,i,a)}}}function i(t,e,n,r,i){return"function"===typeof t.addEventListener?a.apply(null,arguments):"function"===typeof n?a.bind(null,document).apply(null,arguments):("string"===typeof t&&(t=document.querySelectorAll(t)),Array.prototype.map.call(t,(function(t){return a(t,e,n,r,i)})))}function o(t,e,n,a){return function(n){n.delegateTarget=r(n.target,e),n.delegateTarget&&a.call(t,n)}}t.exports=i},function(t,e){var n=9;if("undefined"!==typeof Element&&!Element.prototype.matches){var r=Element.prototype;r.matches=r.matchesSelector||r.mozMatchesSelector||r.msMatchesSelector||r.oMatchesSelector||r.webkitMatchesSelector}function a(t,e){while(t&&t.nodeType!==n){if("function"===typeof t.matches&&t.matches(e))return t;t=t.parentNode}}t.exports=a},function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r),i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}();function c(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var s=function(){function t(e){c(this,t),this.resolveOptions(e),this.initSelection()}return o(t,[{key:"resolveOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action=t.action,this.container=t.container,this.emitter=t.emitter,this.target=t.target,this.text=t.text,this.trigger=t.trigger,this.selectedText=""}},{key:"initSelection",value:function(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"selectFake",value:function(){var t=this,e="rtl"==document.documentElement.getAttribute("dir");this.removeFake(),this.fakeHandlerCallback=function(){return t.removeFake()},this.fakeHandler=this.container.addEventListener("click",this.fakeHandlerCallback)||!0,this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[e?"right":"left"]="-9999px";var n=window.pageYOffset||document.documentElement.scrollTop;this.fakeElem.style.top=n+"px",this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,this.container.appendChild(this.fakeElem),this.selectedText=a()(this.fakeElem),this.copyText()}},{key:"removeFake",value:function(){this.fakeHandler&&(this.container.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(this.container.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function(){this.selectedText=a()(this.target),this.copyText()}},{key:"copyText",value:function(){var t=void 0;try{t=document.execCommand(this.action)}catch(e){t=!1}this.handleResult(t)}},{key:"handleResult",value:function(t){this.emitter.emit(t?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function(){this.trigger&&this.trigger.focus(),document.activeElement.blur(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function(){this.removeFake()}},{key:"action",set:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"copy";if(this._action=t,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function(){return this._action}},{key:"target",set:function(t){if(void 0!==t){if(!t||"object"!==("undefined"===typeof t?"undefined":i(t))||1!==t.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===this.action&&t.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===this.action&&(t.hasAttribute("readonly")||t.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target=t}},get:function(){return this._target}}]),t}(),u=s,l=n(1),d=n.n(l),f=n(2),h=n.n(f),p="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},v=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}();function m(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function y(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==typeof e&&"function"!==typeof e?t:e}function b(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var g=function(t){function e(t,n){m(this,e);var r=y(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return r.resolveOptions(n),r.listenClick(t),r}return b(e,t),v(e,[{key:"resolveOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action="function"===typeof t.action?t.action:this.defaultAction,this.target="function"===typeof t.target?t.target:this.defaultTarget,this.text="function"===typeof t.text?t.text:this.defaultText,this.container="object"===p(t.container)?t.container:document.body}},{key:"listenClick",value:function(t){var e=this;this.listener=h()(t,"click",(function(t){return e.onClick(t)}))}},{key:"onClick",value:function(t){var e=t.delegateTarget||t.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new u({action:this.action(e),target:this.target(e),text:this.text(e),container:this.container,trigger:e,emitter:this})}},{key:"defaultAction",value:function(t){return _("action",t)}},{key:"defaultTarget",value:function(t){var e=_("target",t);if(e)return document.querySelector(e)}},{key:"defaultText",value:function(t){return _("text",t)}},{key:"destroy",value:function(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}],[{key:"isSupported",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["copy","cut"],e="string"===typeof t?[t]:t,n=!document.queryCommandSupported;return e.forEach((function(t){n=n&&!document.queryCommandSupported(t)})),n}}]),e}(d.a);function _(t,e){var n="data-clipboard-"+t;if(e.hasAttribute(n))return e.getAttribute(n)}e["default"]=g}])["default"]}))},b65f:function(t,e,n){var r=n("23e7"),a=Math.ceil,i=Math.floor;r({target:"Math",stat:!0},{trunc:function(t){return(t>0?i:a)(t)}})},c82a:function(t,e,n){"use strict";var r=n("9edc"),a=n.n(r);e["default"]=a.a},ec5b:function(t,e,n){}}]);
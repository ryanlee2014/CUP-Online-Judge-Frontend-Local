(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5e0eecce"],{"00d8":function(t,e){(function(){var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",n={rotl:function(t,e){return t<<e|t>>>32-e},rotr:function(t,e){return t<<32-e|t>>>e},endian:function(t){if(t.constructor==Number)return 16711935&n.rotl(t,8)|4278255360&n.rotl(t,24);for(var e=0;e<t.length;e++)t[e]=n.endian(t[e]);return t},randomBytes:function(t){for(var e=[];t>0;t--)e.push(Math.floor(256*Math.random()));return e},bytesToWords:function(t){for(var e=[],n=0,a=0;n<t.length;n++,a+=8)e[a>>>5]|=t[n]<<24-a%32;return e},wordsToBytes:function(t){for(var e=[],n=0;n<32*t.length;n+=8)e.push(t[n>>>5]>>>24-n%32&255);return e},bytesToHex:function(t){for(var e=[],n=0;n<t.length;n++)e.push((t[n]>>>4).toString(16)),e.push((15&t[n]).toString(16));return e.join("")},hexToBytes:function(t){for(var e=[],n=0;n<t.length;n+=2)e.push(parseInt(t.substr(n,2),16));return e},bytesToBase64:function(t){for(var n=[],a=0;a<t.length;a+=3)for(var r=t[a]<<16|t[a+1]<<8|t[a+2],s=0;s<4;s++)8*a+6*s<=8*t.length?n.push(e.charAt(r>>>6*(3-s)&63)):n.push("=");return n.join("")},base64ToBytes:function(t){t=t.replace(/[^A-Z0-9+\/]/gi,"");for(var n=[],a=0,r=0;a<t.length;r=++a%4)0!=r&&n.push((e.indexOf(t.charAt(a-1))&Math.pow(2,-2*r+8)-1)<<2*r|e.indexOf(t.charAt(a))>>>6-2*r);return n}};t.exports=n})()},"044b":function(t,e){function n(t){return!!t.constructor&&"function"===typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)}function a(t){return"function"===typeof t.readFloatLE&&"function"===typeof t.slice&&n(t.slice(0,0))}
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
t.exports=function(t){return null!=t&&(n(t)||a(t)||!!t._isBuffer)}},"0c11":function(t,e,n){"use strict";var a=n("9ab4"),r=n("2b0e"),s=n("fbdb"),i=n.n(s),o=n("1157"),c=n.n(o),d=n("60a3");let u=class extends r["a"]{created(){const t=this;c()(document).on("click",(function(){t.initVisibleMermaid()}))}initVisibleMermaid(){c()(".mermaid").each((function(t,e){c()(e).is(":visible")&&i.a.init(e)}))}initMermaid(){c()(".mermaid").each((function(t,e){i.a.init(e)}))}};u=Object(a["a"])([d["a"]],u),e["a"]=u},"20a2":function(t,e,n){"use strict";var a=n("9ab4"),r=n("2b0e"),s=n("60a3"),i=n("3657");const{getAvatarURL:o,hasAvatarURL:c}=i["a"];let d=class extends r["a"]{getAvatarURL(...t){return o.apply(this,t)}hasAvatarURL(...t){return c.apply(this,t)}};d=Object(a["a"])([s["a"]],d),e["a"]=d},3185:function(t,e,n){"use strict";n("ddb0");var a=n("9ab4"),r=n("2b0e"),s=n("60a3");let i=class extends r["a"]{constructor(){super(...arguments),this.captchaHash=Math.random()}};i=Object(a["a"])([s["a"]],i),e["a"]=i},"5dbd":function(t,e,n){"use strict";n.d(e,"a",(function(){return p})),n.d(e,"d",(function(){return f})),n.d(e,"b",(function(){return m})),n.d(e,"h",(function(){return v})),n.d(e,"e",(function(){return b})),n.d(e,"c",(function(){return _})),n.d(e,"g",(function(){return g})),n.d(e,"f",(function(){return y}));var a=n("2ef0"),r=n.n(a),s=n("6821"),i=n.n(s);n("ddb0");const o=(...t)=>{},c=o;function d(t){return function(...e){c(t,...e)}}var u=n("beea"),l=n("ec1c");const h=d("Decorator mounted: ");function p(t,e){return function(n,a,s){h(`debounce, target:${n.constructor.name}, propertyName:${a}`);const i=s.value;return s.value=r.a.debounce(i,t,e),s}}function f(t=0){return function(e,n,a){h(`Interval, target:${e.constructor.name}, propertyName:${n}`);const r=a.value;a.value=function(...a){if("undefined"===typeof this.timer_||"undefined"===typeof this.timer_.length)throw new Error("You should mixin TimerMixin to your component");r.apply(this,a),this.timer_.push(setInterval(()=>{h(`${e.constructor.name}.${n} called.`),r.apply(this,a)},t))},c("mounted interval")}}function m(t,e,n){h(`Debuglogging, target:${t.constructor.name}, propertyName:${e}`);const a=n.value;n.value=function(...t){const n=t.map(t=>JSON.stringify(t)).join(),r=a.apply(this,t),s=JSON.stringify(r);return c(`Call: ${e}(${n}) => ${s}`),r}}function v(t,e,n){h(`WebSocketRequest, target:${t.constructor.name}, propertyName:${e}`);const a=n.value;n.value=function(...t){if(this.$socket.connected)return a.apply(this,t);alert("WebSocket服务未启动，请等待服务启动后提交\nWebSocket服务启动标志未:\n右上角显示在线人数")}}function b(t){return function(e,n,a){h(`Lock, target:${e.constructor.name}, propertyName:${n}`);const r=a.value;a.value=async function(...e){await t.acquireAsync();const n=r.apply(this,e);return t.release(),n}}}function _(t,e,n){h(`ErrorAlert, target:${t.constructor.name}, propertyName:${e}`);const a=n.value;n.value=function(...t){try{return a.apply(this,t)}catch(e){alert(e.message)}}}function g(t,e,n){h(`RunOnceEachKey, target:${t.constructor.name}, propertyName:${e}`);const a=n.value,r={};n.value=function(...t){const e=i()(Object(u["b"])(t));if(!r[e])return r[e]=!0,a.apply(this,t)}}function y(t,e,n){h(`MarkdownDebug, target:${t.constructor.name}, propertyName:${e}`);const a=n.value;window.markdownIt=l["a"],n.value=async function(t){return a.call(this,t)}}},6821:function(t,e,n){(function(){var e=n("00d8"),a=n("9a63").utf8,r=n("044b"),s=n("9a63").bin,i=function(t,n){t.constructor==String?t=n&&"binary"===n.encoding?s.stringToBytes(t):a.stringToBytes(t):r(t)?t=Array.prototype.slice.call(t,0):Array.isArray(t)||t.constructor===Uint8Array||(t=t.toString());for(var o=e.bytesToWords(t),c=8*t.length,d=1732584193,u=-271733879,l=-1732584194,h=271733878,p=0;p<o.length;p++)o[p]=16711935&(o[p]<<8|o[p]>>>24)|4278255360&(o[p]<<24|o[p]>>>8);o[c>>>5]|=128<<c%32,o[14+(c+64>>>9<<4)]=c;var f=i._ff,m=i._gg,v=i._hh,b=i._ii;for(p=0;p<o.length;p+=16){var _=d,g=u,y=l,C=h;d=f(d,u,l,h,o[p+0],7,-680876936),h=f(h,d,u,l,o[p+1],12,-389564586),l=f(l,h,d,u,o[p+2],17,606105819),u=f(u,l,h,d,o[p+3],22,-1044525330),d=f(d,u,l,h,o[p+4],7,-176418897),h=f(h,d,u,l,o[p+5],12,1200080426),l=f(l,h,d,u,o[p+6],17,-1473231341),u=f(u,l,h,d,o[p+7],22,-45705983),d=f(d,u,l,h,o[p+8],7,1770035416),h=f(h,d,u,l,o[p+9],12,-1958414417),l=f(l,h,d,u,o[p+10],17,-42063),u=f(u,l,h,d,o[p+11],22,-1990404162),d=f(d,u,l,h,o[p+12],7,1804603682),h=f(h,d,u,l,o[p+13],12,-40341101),l=f(l,h,d,u,o[p+14],17,-1502002290),u=f(u,l,h,d,o[p+15],22,1236535329),d=m(d,u,l,h,o[p+1],5,-165796510),h=m(h,d,u,l,o[p+6],9,-1069501632),l=m(l,h,d,u,o[p+11],14,643717713),u=m(u,l,h,d,o[p+0],20,-373897302),d=m(d,u,l,h,o[p+5],5,-701558691),h=m(h,d,u,l,o[p+10],9,38016083),l=m(l,h,d,u,o[p+15],14,-660478335),u=m(u,l,h,d,o[p+4],20,-405537848),d=m(d,u,l,h,o[p+9],5,568446438),h=m(h,d,u,l,o[p+14],9,-1019803690),l=m(l,h,d,u,o[p+3],14,-187363961),u=m(u,l,h,d,o[p+8],20,1163531501),d=m(d,u,l,h,o[p+13],5,-1444681467),h=m(h,d,u,l,o[p+2],9,-51403784),l=m(l,h,d,u,o[p+7],14,1735328473),u=m(u,l,h,d,o[p+12],20,-1926607734),d=v(d,u,l,h,o[p+5],4,-378558),h=v(h,d,u,l,o[p+8],11,-2022574463),l=v(l,h,d,u,o[p+11],16,1839030562),u=v(u,l,h,d,o[p+14],23,-35309556),d=v(d,u,l,h,o[p+1],4,-1530992060),h=v(h,d,u,l,o[p+4],11,1272893353),l=v(l,h,d,u,o[p+7],16,-155497632),u=v(u,l,h,d,o[p+10],23,-1094730640),d=v(d,u,l,h,o[p+13],4,681279174),h=v(h,d,u,l,o[p+0],11,-358537222),l=v(l,h,d,u,o[p+3],16,-722521979),u=v(u,l,h,d,o[p+6],23,76029189),d=v(d,u,l,h,o[p+9],4,-640364487),h=v(h,d,u,l,o[p+12],11,-421815835),l=v(l,h,d,u,o[p+15],16,530742520),u=v(u,l,h,d,o[p+2],23,-995338651),d=b(d,u,l,h,o[p+0],6,-198630844),h=b(h,d,u,l,o[p+7],10,1126891415),l=b(l,h,d,u,o[p+14],15,-1416354905),u=b(u,l,h,d,o[p+5],21,-57434055),d=b(d,u,l,h,o[p+12],6,1700485571),h=b(h,d,u,l,o[p+3],10,-1894986606),l=b(l,h,d,u,o[p+10],15,-1051523),u=b(u,l,h,d,o[p+1],21,-2054922799),d=b(d,u,l,h,o[p+8],6,1873313359),h=b(h,d,u,l,o[p+15],10,-30611744),l=b(l,h,d,u,o[p+6],15,-1560198380),u=b(u,l,h,d,o[p+13],21,1309151649),d=b(d,u,l,h,o[p+4],6,-145523070),h=b(h,d,u,l,o[p+11],10,-1120210379),l=b(l,h,d,u,o[p+2],15,718787259),u=b(u,l,h,d,o[p+9],21,-343485551),d=d+_>>>0,u=u+g>>>0,l=l+y>>>0,h=h+C>>>0}return e.endian([d,u,l,h])};i._ff=function(t,e,n,a,r,s,i){var o=t+(e&n|~e&a)+(r>>>0)+i;return(o<<s|o>>>32-s)+e},i._gg=function(t,e,n,a,r,s,i){var o=t+(e&a|n&~a)+(r>>>0)+i;return(o<<s|o>>>32-s)+e},i._hh=function(t,e,n,a,r,s,i){var o=t+(e^n^a)+(r>>>0)+i;return(o<<s|o>>>32-s)+e},i._ii=function(t,e,n,a,r,s,i){var o=t+(n^(e|~a))+(r>>>0)+i;return(o<<s|o>>>32-s)+e},i._blocksize=16,i._digestsize=16,t.exports=function(t,n){if(void 0===t||null===t)throw new Error("Illegal argument "+t);var a=e.wordsToBytes(i(t,n));return n&&n.asBytes?a:n&&n.asString?s.bytesToString(a):e.bytesToHex(a)}})()},"75ed":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ui link card"},[n("div",{staticClass:"image"},[n("router-link",{attrs:{to:"/user/"+t.thread_head.user_id}},[n("v-gravatar",{staticStyle:{width:"100%",display:"flex"},attrs:{size:400,hostname:t.$store.getters.gravatarCDN,email:t.thread_head.email}})],1)],1),n("div",{staticClass:"content"},[n("div",{staticClass:"header"},[n("router-link",{staticClass:"black",attrs:{to:"/user/"+t.thread_head.user_id}},[t._v(" "+t._s(t.thread_head.nick)+" ")])],1),n("div",{staticClass:"meta"},[n("router-link",{attrs:{to:"/user/"+t.thread_head.user_id}},[t._v(" "+t._s(t.thread_head.user_id)+" ")])],1),n("div",{staticClass:"description",domProps:{innerHTML:t._s(t.biography)}})]),n("div",{staticClass:"extra content"},[n("span",{staticClass:"right floated"}),n("span",[n("i",{staticClass:"user icon"}),t._v(" "+t._s(t.$t("solved"))+" "+t._s(t.thread_head.solved)+" ")])])])},r=[],s=(n("ddb0"),n("9ab4")),i=n("60a3"),o=n("20a2"),c=n("92f1");let d=class extends(Object(i["b"])(o["a"],c["a"])){constructor(){super(...arguments),this.biography=""}async onThreadHeadChanged(t){this.biography=await this.renderRawAsync(t.biography)}};Object(s["a"])([Object(i["c"])({default:()=>({biography:"",solved:0,user_id:"",nick:"",email:""})})],d.prototype,"thread_head",void 0),Object(s["a"])([Object(i["d"])("thread_head")],d.prototype,"onThreadHeadChanged",null),d=Object(s["a"])([i["a"]],d);var u=d,l=u,h=n("2877"),p=Object(h["a"])(l,a,r,!1,null,"9e56082c",null);e["a"]=p.exports},"8da9":function(t,e,n){"use strict";n("ce9a")},"92f1":function(t,e,n){"use strict";n("ddb0");var a=n("9ab4"),r=n("2b0e"),s=n("60a3"),i=n("ebb0"),o=n.n(i),c=n("a390"),d=n.n(c),u=n("5dbd");let l=class extends r["a"]{constructor(){super(...arguments),this.originalWorker=new d.a}created(){this.worker_=new o.a(this.originalWorker)}beforeDestroy(){this.originalWorker.terminate()}async renderAsync(t){return this.worker_.postMessage({type:"render",content:t})}async renderPlainAsync(t){return this.worker_.postMessage({type:"renderPlain",content:t})}async renderRawAsync(t){return this.worker_.postMessage({type:"renderRaw",content:t})}};Object(a["a"])([u["f"]],l.prototype,"renderAsync",null),Object(a["a"])([u["f"]],l.prototype,"renderPlainAsync",null),Object(a["a"])([u["f"]],l.prototype,"renderRawAsync",null),l=Object(a["a"])([s["a"]],l),e["a"]=l},"9a63":function(t,e){var n={utf8:{stringToBytes:function(t){return n.bin.stringToBytes(unescape(encodeURIComponent(t)))},bytesToString:function(t){return decodeURIComponent(escape(n.bin.bytesToString(t)))}},bin:{stringToBytes:function(t){for(var e=[],n=0;n<t.length;n++)e.push(255&t.charCodeAt(n));return e},bytesToString:function(t){for(var e=[],n=0;n<t.length;n++)e.push(String.fromCharCode(t[n]));return e.join("")}}};t.exports=n},"9edc":function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"zh-cn":{"read time cost":"阅读本文需要大约{n}分钟"},"en":{"read time cost":"It takes about {n} minute to read this article | It takes about {n} minutes to read this article"},"ja":{"read time cost":"この記事を読むには約{n}分かかります"}}'),delete t.options._Ctor}},a390:function(t,e,n){"use strict";t.exports=function(){return new Worker("/29d12318ecc8f05a3098.worker.js")}},b0d1:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ui container padding"},[n("h2",{staticClass:"ui dividing header"},[t._v(t._s(t.$t("discuss")))]),n("div",{staticClass:"ui breadcrumb"},[n("router-link",{staticClass:"section",attrs:{to:"/discuss"}},[t._v(t._s(t.$t("discuss homepage")))]),n("i",{staticClass:"right angle icon divider"}),n("div",{staticClass:"active section"},[t._v(t._s(t.$t("discuss"))+" ID:"+t._s(t.id))])],1),n("h1",{staticClass:"ui header"},[t._v(t._s(t.thread_head?t.thread_head.title:""))]),n("MainContent",{attrs:{id:t.id,owner:t.owner,thread_head:t.thread_head||{}}}),n("h3",{staticClass:"ui dividing header"},[t._v(t._s(t.$t("comments")))]),n("div",{staticClass:"ui comments"},t._l(t.reply,(function(e,a){return n("div",{key:a,staticClass:"comment"},[n("div",{staticClass:"avatar"},[n("router-link",{attrs:{to:"/user/"+e.user_id}},[n("v-gravatar",{staticClass:"avatar",attrs:{hostname:t.$store.getters.gravatarCDN,size:400,email:e.email}})],1)],1),n("div",{staticClass:"content"},[n("router-link",{staticClass:"author",attrs:{to:"/user/"+e.user_id}},[t._v(t._s(e.nick))]),n("div",{staticClass:"metadata"},[n("span",{staticClass:"date"},[t._v(t._s(new Date(e.create_time).toLocaleString()))])]),n("div",{staticClass:"text",domProps:{innerHTML:t._s(e.content)}}),n("div",{staticClass:"actions"},[e.user_id+""===t.owner?n("router-link",{staticClass:"reply",attrs:{to:"/discuss/edit/"+t.id+"/"+e.comment_id}},[t._v(" "+t._s(t.$t("edit"))+" ")]):t._e(),t.isadmin?n("a",{staticClass:"reply",on:{click:function(n){return t.block_reply(e.comment_id)}}},[t._v(t._s(t.$t("block")))]):t._e()],1)],1)])})),0),n("h3",{staticClass:"ui dividing header"},[t._v(t._s(t.$t("reply")))]),n("form",{staticClass:"ui reply form"},[n("div",{staticClass:"field"},[n("mavon-editor",{model:{value:t.replyText,callback:function(e){t.replyText=e},expression:"replyText"}})],1),n("div",{staticClass:"two field"},[n("div",{staticClass:"ui left input",staticStyle:{width:"auto"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.captcha,expression:"captcha"}],attrs:{id:"vcode",name:"vcode",placeholder:t.$t("captcha"),type:"text"},domProps:{value:t.captcha},on:{input:function(e){e.target.composing||(t.captcha=e.target.value)}}}),n("img",{staticClass:"captcha",attrs:{alt:"click to change",height:"40px",id:"vcode_graph",onclick:"this.src='/api/captcha?from=discuss&random='+Math.random()",src:"/api/captcha?from=discuss&random="+t.captchaHash}})])]),n("div",{staticClass:"ui blue labeled submit icon button",on:{click:t.replyComment}},[n("i",{staticClass:"icon edit"}),t._v(" "+t._s(t.$t("add"))+" ")])])],1)},r=[],s=(n("ddb0"),n("9ab4")),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ui grid"},[n("div",{staticClass:"four wide column"},[n("UserCard",{attrs:{thread_head:t.thread_head}}),n("div",{staticClass:"ui sticky",staticStyle:{left:"50.1429px"},attrs:{id:"sticky_content"}},[n("h3",{directives:[{name:"show",rawName:"v-show",value:t.content,expression:"content"}],staticClass:"ui header",attrs:{id:"contents"}},[t._v(t._s(t.$t("contents")))]),n("div",{attrs:{id:"contentContainer"}})])],1),n("div",{staticClass:"twelve wide column"},[n("div",{staticClass:"ui existing full segment",attrs:{id:"main_context"}},[t.thread_head.user_id+""===t.owner?n("router-link",{staticClass:"ui blue right ribbon label",attrs:{to:"/discuss/edit/"+t.id}},[t._v(" "+t._s(t.$t("edit"))+" ")]):t._e(),n("div",{staticClass:"ui info message"},[n("div",{staticClass:"header"},[t._v(" "+t._s(t.$tc("read time cost",t.readTime(t.thread_head.content),{n:t.readTime(t.thread_head.content)}))+" ")])]),n("div",{domProps:{innerHTML:t._s(t.thread_content)}})],1)])])},o=[],c=n("20a2"),d=n("60a3"),u=n("75ed"),l=n("92f1"),h=n("1157"),p=n.n(h),f=n("0c11"),m=n("5dbd"),v=n("56c2");const b=document.createElement("div"),_=p.a,g=n("19ddd");let y=class extends(Object(d["b"])(c["a"],l["a"],f["a"],v["a"])){constructor(){super(...arguments),this.thread_content="",this.content=!1}created(){this.thread_content=this.$t("loading")}async onThreadHeadChanged(t){if(t.content){const e=await this.renderAsync(t.content);this.thread_content=e,this.$nextTick(()=>{this.renderMermaid()})}}renderMermaid(){this.initMermaid()}readTime(t){return b.innerHTML=t,Math.trunc(Math.ceil(b.innerText.length/300)**1.41428579532)}updated(){const t=_(".table-of-contents");let e=t.html();const n=_("#contentContainer");e||(e=""),t.html(""),e&&n.html(""+e),_("#sticky_content").sticky({context:"#main_context",offset:50}),n.find("a").on("click",(function(){return _([document.documentElement,document.body]).animate({scrollTop:_(document.getElementById(g(this.innerText))).offset().top-50},600),!1})),this.content=e&&e.trim&&e.trim().length>0||n&&n.html()&&n.html().trim().length>0}};Object(s["a"])([Object(d["c"])({default:()=>({})})],y.prototype,"thread_head",void 0),Object(s["a"])([Object(d["c"])({default:""})],y.prototype,"owner",void 0),Object(s["a"])([Object(d["c"])({default:""})],y.prototype,"id",void 0),Object(s["a"])([Object(d["d"])("thread_head")],y.prototype,"onThreadHeadChanged",null),Object(s["a"])([Object(m["a"])(100)],y.prototype,"renderMermaid",null),y=Object(s["a"])([Object(d["a"])({components:{UserCard:u["a"]}})],y);var C=y,k=C,w=(n("8da9"),n("2877")),x=n("c82a"),$=Object(w["a"])(k,i,o,!1,null,"2ec4ed9e",null);"function"===typeof x["default"]&&Object(x["default"])($);var T=$.exports,j=n("2cd4"),O=n("2ef0"),M=n.n(O),A=n("b311"),S=n.n(A),B=n("3185");const E=p.a;n("19ddd");let N=class extends(Object(d["b"])(j["a"],c["a"],l["a"],B["a"],v["a"])){constructor(){super(...arguments),this.page=0,this.table_val={},this.total=0,this.id=0,this.replyText="",this.captcha="",this.owner="",this.isadmin=!1}created(){this.id=parseInt(this.$route.params.id)||0}get table(){return this.table_val}set table(t){M.a.forEach(t,t=>{t&&t.length&&M.a.forEach(t,async t=>{t.content&&(t.content=await this.renderAsync(t.content))})}),this.table_val=t,this.owner=t.owner,this.isadmin=t.admin}get thread_head(){const t={title:""};return M.a.assign(t,this.table_val.discuss_header_content),t}get reply(){return this.table_val.discuss}mounted(){document.title=`Thread ${this.id} -- ${document.title}`;const t=20*this.page,e=this;this.axios.get(`/api/discuss/${this.id}?page=${t}`).then(({data:t})=>{e.table=t}),this.$nextTick((function(){const t=new S.a(".copy.context",{text:function(t){return E(t).parent().next().text()}});t.on("success",t=>{E(t.trigger).popup({title:this.$t("finish"),content:this.$t("Context is in your clipboard"),on:"click"}).popup("show")})}))}replyComment(){const t={comment:this.replyText,captcha:this.captcha};this.axios.post("/api/discuss/reply/"+this.id,t).then(({data:t})=>{alert("回复成功"),location.reload()}).catch(({data:t})=>{alert("回复失败！服务器发生未知错误")})}block_reply(t){this.axios.get(`/api/discuss/update/reply/block/${this.id}/${t}`).then(({data:t})=>{alert("操作成功")}).catch(({data:t})=>{alert("操作失败")})}readTime(t){const e=document.createElement("div");return e.innerHTML=t,Math.trunc(Math.ceil(e.innerText.length/300)**1.41428579532)}};N=Object(s["a"])([Object(d["a"])({components:{MainContent:T},i18n:{messages:{"zh-cn":{"discuss homepage":"讨论主页",block:"移除"},en:{"discuss homepage":"Discussion Homepage",block:"Block"},ja:{"discuss homepage":"掲示板ホームページ",block:"リムーブ"}}}})],N);var H=N,L=H,I=(n("cc40"),Object(w["a"])(L,a,r,!1,null,"4b43b08b",null));e["default"]=I.exports},c82a:function(t,e,n){"use strict";var a=n("9edc"),r=n.n(a);e["default"]=r.a},cc40:function(t,e,n){"use strict";n("e445")},ce9a:function(t,e,n){},e445:function(t,e,n){},ebb0:function(t,e,n){"use strict";var a=0;function r(t,e){var n=e.data;if(Array.isArray(n)&&!(n.length<2)){var a=n[0],r=n[1],s=n[2],i=t._callbacks[a];i&&(delete t._callbacks[a],i(r,s))}}function s(t){var e=this;e._worker=t,e._callbacks={},t.addEventListener("message",(function(t){r(e,t)}))}s.prototype.postMessage=function(t){var e=this,n=a++,s=[n,t];return new Promise((function(t,a){if(e._callbacks[n]=function(e,n){if(e)return a(new Error(e.message));t(n)},"undefined"!==typeof e._worker.controller){var i=new MessageChannel;i.port1.onmessage=function(t){r(e,t)},e._worker.controller.postMessage(s,[i.port2])}else e._worker.postMessage(s)}))},t.exports=s}}]);
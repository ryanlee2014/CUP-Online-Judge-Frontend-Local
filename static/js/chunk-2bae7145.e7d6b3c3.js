(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2bae7145"],{"00d8":function(t,e){(function(){var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",s={rotl:function(t,e){return t<<e|t>>>32-e},rotr:function(t,e){return t<<32-e|t>>>e},endian:function(t){if(t.constructor==Number)return 16711935&s.rotl(t,8)|4278255360&s.rotl(t,24);for(var e=0;e<t.length;e++)t[e]=s.endian(t[e]);return t},randomBytes:function(t){for(var e=[];t>0;t--)e.push(Math.floor(256*Math.random()));return e},bytesToWords:function(t){for(var e=[],s=0,a=0;s<t.length;s++,a+=8)e[a>>>5]|=t[s]<<24-a%32;return e},wordsToBytes:function(t){for(var e=[],s=0;s<32*t.length;s+=8)e.push(t[s>>>5]>>>24-s%32&255);return e},bytesToHex:function(t){for(var e=[],s=0;s<t.length;s++)e.push((t[s]>>>4).toString(16)),e.push((15&t[s]).toString(16));return e.join("")},hexToBytes:function(t){for(var e=[],s=0;s<t.length;s+=2)e.push(parseInt(t.substr(s,2),16));return e},bytesToBase64:function(t){for(var s=[],a=0;a<t.length;a+=3)for(var r=t[a]<<16|t[a+1]<<8|t[a+2],n=0;n<4;n++)8*a+6*n<=8*t.length?s.push(e.charAt(r>>>6*(3-n)&63)):s.push("=");return s.join("")},base64ToBytes:function(t){t=t.replace(/[^A-Z0-9+\/]/gi,"");for(var s=[],a=0,r=0;a<t.length;r=++a%4)0!=r&&s.push((e.indexOf(t.charAt(a-1))&Math.pow(2,-2*r+8)-1)<<2*r|e.indexOf(t.charAt(a))>>>6-2*r);return s}};t.exports=s})()},"044b":function(t,e){function s(t){return!!t.constructor&&"function"===typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)}function a(t){return"function"===typeof t.readFloatLE&&"function"===typeof t.slice&&s(t.slice(0,0))}
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
t.exports=function(t){return null!=t&&(s(t)||a(t)||!!t._isBuffer)}},3185:function(t,e,s){"use strict";s("ddb0");var a=s("9ab4"),r=s("2b0e"),n=s("60a3");let i=class extends r["a"]{constructor(){super(...arguments),this.captchaHash=Math.random()}};i=Object(a["c"])([n["a"]],i),e["a"]=i},"5dbd":function(t,e,s){"use strict";s.d(e,"a",(function(){return p})),s.d(e,"d",(function(){return m})),s.d(e,"b",(function(){return v})),s.d(e,"g",(function(){return f})),s.d(e,"e",(function(){return g})),s.d(e,"c",(function(){return h})),s.d(e,"f",(function(){return b}));var a=s("2ef0"),r=s.n(a),n=s("6821"),i=s.n(n);s("ddb0");const o=(...t)=>{},u=o;function c(t){return function(...e){u(t,...e)}}s("25f0");function l(t){return t.map(t=>"number"===typeof t?t.toString():"string"===typeof t?t:"function"===typeof t.toString?t.toString():JSON.stringify(t)).reduce((t,e)=>t+e)}const d=c("Decorator mounted: ");function p(t,e){return function(s,a,n){d(`debounce, target:${s.constructor.name}, propertyName:${a}`);const i=n.value;return n.value=r.a.debounce(i,t,e),n}}function m(t=0){return function(e,s,a){d(`Interval, target:${e.constructor.name}, propertyName:${s}`);const r=a.value;a.value=function(...a){if("undefined"===typeof this.timer_||"undefined"===typeof this.timer_.length)throw new Error("You should mixin TimerMixin to your component");r.apply(this,a),this.timer_.push(setInterval(()=>{d(`${e.constructor.name}.${s} called.`),r.apply(this,a)},t))},u("mounted interval")}}function v(t,e,s){d(`Debuglogging, target:${t.constructor.name}, propertyName:${e}`);const a=s.value;s.value=function(...t){const s=t.map(t=>JSON.stringify(t)).join(),r=a.apply(this,t),n=JSON.stringify(r);return u(`Call: ${e}(${s}) => ${n}`),r}}function f(t,e,s){d(`WebSocketRequest, target:${t.constructor.name}, propertyName:${e}`);const a=s.value;s.value=function(...t){if(this.$socket.connected)return a.apply(this,t);alert("WebSocket服务未启动，请等待服务启动后提交\nWebSocket服务启动标志未:\n右上角显示在线人数")}}function g(t){return function(e,s,a){d(`Lock, target:${e.constructor.name}, propertyName:${s}`);const r=a.value;a.value=async function(...e){await t.acquireAsync();const s=r.apply(this,e);return t.release(),s}}}function h(t,e,s){d(`ErrorAlert, target:${t.constructor.name}, propertyName:${e}`);const a=s.value;s.value=function(...t){try{return a.apply(this,t)}catch(e){alert(e.message)}}}function b(t,e,s){d(`RunOnceEachKey, target:${t.constructor.name}, propertyName:${e}`);const a=s.value,r={};s.value=function(...t){const e=i()(l(t));if(!r[e])return r[e]=!0,a.apply(this,t)}}},6821:function(t,e,s){(function(){var e=s("00d8"),a=s("9a63").utf8,r=s("044b"),n=s("9a63").bin,i=function(t,s){t.constructor==String?t=s&&"binary"===s.encoding?n.stringToBytes(t):a.stringToBytes(t):r(t)?t=Array.prototype.slice.call(t,0):Array.isArray(t)||(t=t.toString());for(var o=e.bytesToWords(t),u=8*t.length,c=1732584193,l=-271733879,d=-1732584194,p=271733878,m=0;m<o.length;m++)o[m]=16711935&(o[m]<<8|o[m]>>>24)|4278255360&(o[m]<<24|o[m]>>>8);o[u>>>5]|=128<<u%32,o[14+(u+64>>>9<<4)]=u;var v=i._ff,f=i._gg,g=i._hh,h=i._ii;for(m=0;m<o.length;m+=16){var b=c,y=l,_=d,w=p;c=v(c,l,d,p,o[m+0],7,-680876936),p=v(p,c,l,d,o[m+1],12,-389564586),d=v(d,p,c,l,o[m+2],17,606105819),l=v(l,d,p,c,o[m+3],22,-1044525330),c=v(c,l,d,p,o[m+4],7,-176418897),p=v(p,c,l,d,o[m+5],12,1200080426),d=v(d,p,c,l,o[m+6],17,-1473231341),l=v(l,d,p,c,o[m+7],22,-45705983),c=v(c,l,d,p,o[m+8],7,1770035416),p=v(p,c,l,d,o[m+9],12,-1958414417),d=v(d,p,c,l,o[m+10],17,-42063),l=v(l,d,p,c,o[m+11],22,-1990404162),c=v(c,l,d,p,o[m+12],7,1804603682),p=v(p,c,l,d,o[m+13],12,-40341101),d=v(d,p,c,l,o[m+14],17,-1502002290),l=v(l,d,p,c,o[m+15],22,1236535329),c=f(c,l,d,p,o[m+1],5,-165796510),p=f(p,c,l,d,o[m+6],9,-1069501632),d=f(d,p,c,l,o[m+11],14,643717713),l=f(l,d,p,c,o[m+0],20,-373897302),c=f(c,l,d,p,o[m+5],5,-701558691),p=f(p,c,l,d,o[m+10],9,38016083),d=f(d,p,c,l,o[m+15],14,-660478335),l=f(l,d,p,c,o[m+4],20,-405537848),c=f(c,l,d,p,o[m+9],5,568446438),p=f(p,c,l,d,o[m+14],9,-1019803690),d=f(d,p,c,l,o[m+3],14,-187363961),l=f(l,d,p,c,o[m+8],20,1163531501),c=f(c,l,d,p,o[m+13],5,-1444681467),p=f(p,c,l,d,o[m+2],9,-51403784),d=f(d,p,c,l,o[m+7],14,1735328473),l=f(l,d,p,c,o[m+12],20,-1926607734),c=g(c,l,d,p,o[m+5],4,-378558),p=g(p,c,l,d,o[m+8],11,-2022574463),d=g(d,p,c,l,o[m+11],16,1839030562),l=g(l,d,p,c,o[m+14],23,-35309556),c=g(c,l,d,p,o[m+1],4,-1530992060),p=g(p,c,l,d,o[m+4],11,1272893353),d=g(d,p,c,l,o[m+7],16,-155497632),l=g(l,d,p,c,o[m+10],23,-1094730640),c=g(c,l,d,p,o[m+13],4,681279174),p=g(p,c,l,d,o[m+0],11,-358537222),d=g(d,p,c,l,o[m+3],16,-722521979),l=g(l,d,p,c,o[m+6],23,76029189),c=g(c,l,d,p,o[m+9],4,-640364487),p=g(p,c,l,d,o[m+12],11,-421815835),d=g(d,p,c,l,o[m+15],16,530742520),l=g(l,d,p,c,o[m+2],23,-995338651),c=h(c,l,d,p,o[m+0],6,-198630844),p=h(p,c,l,d,o[m+7],10,1126891415),d=h(d,p,c,l,o[m+14],15,-1416354905),l=h(l,d,p,c,o[m+5],21,-57434055),c=h(c,l,d,p,o[m+12],6,1700485571),p=h(p,c,l,d,o[m+3],10,-1894986606),d=h(d,p,c,l,o[m+10],15,-1051523),l=h(l,d,p,c,o[m+1],21,-2054922799),c=h(c,l,d,p,o[m+8],6,1873313359),p=h(p,c,l,d,o[m+15],10,-30611744),d=h(d,p,c,l,o[m+6],15,-1560198380),l=h(l,d,p,c,o[m+13],21,1309151649),c=h(c,l,d,p,o[m+4],6,-145523070),p=h(p,c,l,d,o[m+11],10,-1120210379),d=h(d,p,c,l,o[m+2],15,718787259),l=h(l,d,p,c,o[m+9],21,-343485551),c=c+b>>>0,l=l+y>>>0,d=d+_>>>0,p=p+w>>>0}return e.endian([c,l,d,p])};i._ff=function(t,e,s,a,r,n,i){var o=t+(e&s|~e&a)+(r>>>0)+i;return(o<<n|o>>>32-n)+e},i._gg=function(t,e,s,a,r,n,i){var o=t+(e&a|s&~a)+(r>>>0)+i;return(o<<n|o>>>32-n)+e},i._hh=function(t,e,s,a,r,n,i){var o=t+(e^s^a)+(r>>>0)+i;return(o<<n|o>>>32-n)+e},i._ii=function(t,e,s,a,r,n,i){var o=t+(s^(e|~a))+(r>>>0)+i;return(o<<n|o>>>32-n)+e},i._blocksize=16,i._digestsize=16,t.exports=function(t,s){if(void 0===t||null===t)throw new Error("Illegal argument "+t);var a=e.wordsToBytes(i(t,s));return s&&s.asBytes?a:s&&s.asString?n.bytesToString(a):e.bytesToHex(a)}})()},"87ea":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"ui container padding"},[1===t.status?s("init-config",{on:{configUpdated:t.updateStatus}}):t._e(),2===t.status?s("init-admin"):t._e()],1)},r=[],n=(s("ddb0"),s("9ab4")),i=s("60a3"),o=s("2cd4"),u=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"html ui top attached segment"},[s("div",{staticClass:"ui large form"},[s("div",{staticClass:"ui form"},[s("div",{staticClass:"two fields"},[s("div",{staticClass:"field"},[s("label",[t._v(t._s(t.$t("database hostname")))]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.mysql.host,expression:"mysql.host"}],attrs:{name:"hostname",type:"text"},domProps:{value:t.mysql.host},on:{input:function(e){e.target.composing||t.$set(t.mysql,"host",e.target.value)}}})]),s("div",{staticClass:"field"},[s("label",[t._v(t._s(t.$t("database port")))]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.mysql.port,expression:"mysql.port"}],attrs:{name:"port",type:"text"},domProps:{value:t.mysql.port},on:{input:function(e){e.target.composing||t.$set(t.mysql,"port",e.target.value)}}})])]),s("div",{staticClass:"two fields"},[s("div",{staticClass:"field"},[s("label",[t._v(t._s(t.$t("database username")))]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.mysql.user,expression:"mysql.user"}],attrs:{name:"user",type:"text"},domProps:{value:t.mysql.user},on:{input:function(e){e.target.composing||t.$set(t.mysql,"user",e.target.value)}}})]),s("div",{staticClass:"field"},[s("label",[t._v(t._s(t.$t("database password")))]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.mysql.password,expression:"mysql.password"}],attrs:{name:"password",type:"text"},domProps:{value:t.mysql.password},on:{input:function(e){e.target.composing||t.$set(t.mysql,"password",e.target.value)}}})])]),s("div",{staticClass:"field"},[s("label",[t._v(t._s(t.$t("database")))]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.mysql.database,expression:"mysql.database"}],attrs:{name:"database",type:"text"},domProps:{value:t.mysql.database},on:{input:function(e){e.target.composing||t.$set(t.mysql,"database",e.target.value)}}})]),s("div",{staticClass:"field"},[s("label",[t._v(t._s(t.$t("salt")))]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.salt,expression:"salt"}],attrs:{name:"salt",type:"text"},domProps:{value:t.salt},on:{input:function(e){e.target.composing||(t.salt=e.target.value)}}})]),s("div",{staticClass:"field"},[s("label",[t._v(t._s(t.$t("session secret")))]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.session_secret,expression:"session_secret"}],attrs:{name:"session_secret",type:"text"},domProps:{value:t.session_secret},on:{input:function(e){e.target.composing||(t.session_secret=e.target.value)}}})]),s("div",{staticClass:"field"},[s("label",[t._v(t._s(t.$t("judger address")))]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.judger.address,expression:"judger.address"}],attrs:{name:"judger_address",type:"text"},domProps:{value:t.judger.address},on:{input:function(e){e.target.composing||t.$set(t.judger,"address",e.target.value)}}})]),s("div",{staticClass:"field"},[s("label",[t._v(t._s(t.$t("judger data directory")))]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.judger.oj_home,expression:"judger.oj_home"}],attrs:{name:"judger_data_directory",type:"text"},domProps:{value:t.judger.oj_home},on:{input:function(e){e.target.composing||t.$set(t.judger,"oj_home",e.target.value)}}})]),s("div",{staticClass:"field"},[s("label",[t._v(t._s(t.$t("compile arguments")))]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.etc.compile_arguments,expression:"etc.compile_arguments"}],attrs:{name:"compile_arguments",type:"text"},domProps:{value:t.etc.compile_arguments},on:{input:function(e){e.target.composing||t.$set(t.etc,"compile_arguments",e.target.value)}}})]),s("div",{staticClass:"field"},[s("label",[t._v(t._s(t.$t("problem upload directory")))]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.problem_upload_dest.dir,expression:"problem_upload_dest.dir"}],attrs:{name:"problem_upload_directory",type:"text"},domProps:{value:t.problem_upload_dest.dir},on:{input:function(e){e.target.composing||t.$set(t.problem_upload_dest,"dir",e.target.value)}}})]),s("div",{staticClass:"ui buttons"},[s("button",{staticClass:"ui button",attrs:{type:"reset",name:"reset"},on:{click:function(e){return e.preventDefault(),t.resetConfig(e)}}},[t._v(t._s(t.$t("reset")))]),s("div",{staticClass:"or"}),s("button",{staticClass:"ui positive button",attrs:{type:"submit",id:"submit"},on:{click:function(e){return e.preventDefault(),t.updateConfig(e)}}},[t._v(t._s(t.$t("submit")))])])]),s("div",{staticClass:"ui error message"}),s("br"),s("br")])])},c=[],l=s("2b0e");let d={},p={},m=class extends l["a"]{constructor(){super(...arguments),this.mysql={host:"",user:"",password:"",port:"",database:""},this.salt="",this.session_secret="",this.judger={address:"",oj_home:""},this.etc={compile_arguments:""},this.problem_upload_dest={dir:""}}mounted(){this.axios.get("/api/init/firstrun/").then(({data:t})=>{Object.assign(this,t.data),d=t.data,p=JSON.parse(JSON.stringify(p))})}updateConfig(){Object.assign(d,this.$data),this.axios.post("/api/init/firstrun/config",{content:d}).then(({data:t})=>{this.$emit("configUpdated")})}resetConfig(){Object.assign(this,p)}};m=Object(n["c"])([i["a"]],m);var v=m,f=v,g=s("2877"),h=Object(g["a"])(f,u,c,!1,null,"d0aaca7c",null),b=h.exports,y=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"html ui top attached segment"},[s("div",{staticClass:"ui large form"},[s("div",{staticClass:"ui form"},[s("div",{staticClass:"two fields"},[s("div",{staticClass:"field"},[s("label",[t._v(t._s(t.$t("user_id")))]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.userId,expression:"userId"}],attrs:{type:"text",placeholder:"",name:"user_id",id:"user_id"},domProps:{value:t.userId},on:{input:function(e){e.target.composing||(t.userId=e.target.value)}}})]),s("div",{staticClass:"field"},[s("label",[t._v(t._s(t.$t("nick")))]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.nick,expression:"nick"}],attrs:{type:"text",name:"nick",placeholder:""},domProps:{value:t.nick},on:{input:function(e){e.target.composing||(t.nick=e.target.value)}}})])]),s("div",{staticClass:"two fields"},[s("div",{staticClass:"field"},[s("label",[t._v(t._s(t.$t("password")))]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{name:"password",id:"password",type:"password",placeholder:"必填"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),s("div",{staticClass:"field"},[s("label",[t._v(t._s(t.$t("repeat password")))]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.repeatPassword,expression:"repeatPassword"}],attrs:{name:"rptpassword",id:"rptpassword",type:"password",placeholder:"必填"},domProps:{value:t.repeatPassword},on:{input:function(e){e.target.composing||(t.repeatPassword=e.target.value)}}})])]),s("div",{staticClass:"two fields"},[s("div",{staticClass:"field"},[s("label",[t._v(t._s(t.$t("retrieve password question")))]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.confirmQuestion,expression:"confirmQuestion"}],attrs:{name:"confirmquestion",id:"confirmquestion",placeholder:"必填"},domProps:{value:t.confirmQuestion},on:{input:function(e){e.target.composing||(t.confirmQuestion=e.target.value)}}})]),s("div",{staticClass:"field"},[s("label",[t._v(t._s(t.$t("retrieve password answer")))]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.confirmAnswer,expression:"confirmAnswer"}],attrs:{name:"confirmanswer",id:"confirmanswer",placeholder:"必填"},domProps:{value:t.confirmAnswer},on:{input:function(e){e.target.composing||(t.confirmAnswer=e.target.value)}}})])]),s("div",{staticClass:"two fields"},[s("div",{staticClass:"field"},[s("label",[t._v(t._s(t.$t("captcha")))]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.captcha,expression:"captcha"}],attrs:{name:"vcode",size:"4",type:"text"},domProps:{value:t.captcha},on:{input:function(e){e.target.composing||(t.captcha=e.target.value)}}})]),s("div",{staticClass:"field"},[s("label",{staticStyle:{opacity:"0"}},[t._v("Captcha image")]),s("img",{staticClass:"captcha",attrs:{alt:"click to change",src:"/api/captcha?from=init&random="+t.captchaHash,onclick:"this.src='/api/captcha?from=init&random='+Math.random()",width:"20%"}})])]),s("div",{staticClass:"ui buttons"},[s("button",{staticClass:"ui button",attrs:{type:"reset",name:"reset"},on:{click:function(e){return e.preventDefault(),t.reset(e)}}},[t._v(t._s(t.$t("reset")))]),s("div",{staticClass:"or"}),s("button",{staticClass:"ui positive button",attrs:{type:"submit",id:"submit"},on:{click:function(e){return e.preventDefault(),t.submit(e)}}},[t._v(t._s(t.$t("submit")))])])]),s("div",{staticClass:"ui error message"}),s("br"),s("br")])])},_=[],w=s("5dbd"),C=s("3185");const $={confirmQuestion:"",inviteCode:"",nick:"",password:"",userId:"",captcha:"",repeatPassword:"",confirmAnswer:""};let x=class extends(Object(i["b"])(C["a"])){constructor(){super(...arguments),this.captcha="",this.repeatPassword="",this.confirmAnswer="",this.confirmQuestion="",this.inviteCode="",this.nick="",this.password="",this.userId=""}mounted(){}validatePassword(){if(this.password!==this.repeatPassword)throw new Error("两次输入的密码不一致")}submit(){this.validatePassword();const t={confirmAnswer:this.confirmAnswer,confirmQuestion:this.confirmQuestion,inviteCode:this.inviteCode,nick:this.nick,password:this.password,userId:this.userId,captcha:this.captcha};this.axios.post("/api/init/firstrun/admin",t).then(({data:t})=>{"OK"===t.status&&(alert("注册成功"),this.$store.dispatch("NavStatus"),this.$router.push({path:"/login"}))}).catch(t=>{alert(t.data.statement)})}reset(){Object.assign(this,$)}};Object(n["c"])([w["c"]],x.prototype,"submit",null),x=Object(n["c"])([i["a"]],x);var j=x,N=j,P=Object(g["a"])(N,y,_,!1,null,"3549ce46",null),q=P.exports;let k=class extends(Object(i["b"])(o["a"])){constructor(){super(...arguments),this.status=1}updateStatus(){this.status=2}};k=Object(n["c"])([Object(i["a"])({components:{InitAdmin:q,InitConfig:b}})],k);var S=k,O=S,A=Object(g["a"])(O,a,r,!1,null,"04bfff6a",null);e["default"]=A.exports},"9a63":function(t,e){var s={utf8:{stringToBytes:function(t){return s.bin.stringToBytes(unescape(encodeURIComponent(t)))},bytesToString:function(t){return decodeURIComponent(escape(s.bin.bytesToString(t)))}},bin:{stringToBytes:function(t){for(var e=[],s=0;s<t.length;s++)e.push(255&t.charCodeAt(s));return e},bytesToString:function(t){for(var e=[],s=0;s<t.length;s++)e.push(String.fromCharCode(t[s]));return e.join("")}}};t.exports=s}}]);
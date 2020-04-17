(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2fbd8402"],{"5dbd":function(t,e,s){"use strict";s.d(e,"a",(function(){return c})),s.d(e,"d",(function(){return d})),s.d(e,"b",(function(){return u})),s.d(e,"f",(function(){return p})),s.d(e,"e",(function(){return m})),s.d(e,"c",(function(){return v}));s("e6cf");var a=s("2ef0"),i=s.n(a);s("e260"),s("ddb0");const r=(...t)=>{},n=r;function o(t){return function(...e){n(t,...e)}}const l=o("Decorator mounted: ");function c(t,e){return function(s,a,r){l(`debounce, target:${s.constructor.name}, propertyName:${a}`);const n=r.value;return r.value=i.a.debounce(n,t,e),r}}function d(t=0){return function(e,s,a){l(`Interval, target:${e.constructor.name}, propertyName:${s}`);const i=a.value;a.value=function(...a){if("undefined"===typeof this.timer_||"undefined"===typeof this.timer_.length)throw new Error("You should mixin TimerMixin to your component");i.apply(this,a),this.timer_.push(setInterval(()=>{l(`${e.constructor.name}.${s} called.`),i.apply(this,a)},t))},n("mounted interval")}}function u(t,e,s){l(`Debuglogging, target:${t.constructor.name}, propertyName:${e}`);const a=s.value;s.value=function(...t){const s=t.map(t=>JSON.stringify(t)).join(),i=a.apply(this,t),r=JSON.stringify(i);return n(`Call: ${e}(${s}) => ${r}`),i}}function p(t,e,s){l(`WebSocketRequest, target:${t.constructor.name}, propertyName:${e}`);const a=s.value;s.value=function(...t){if(this.$socket.connected)return a.apply(this,t);alert("WebSocket服务未启动，请等待服务启动后提交\nWebSocket服务启动标志未:\n右上角显示在线人数")}}function m(t){return function(e,s,a){l(`Lock, target:${e.constructor.name}, propertyName:${s}`);const i=a.value;a.value=async function(...e){await t.acquireAsync();const s=i.apply(this,e);return t.release(),s}}}function v(t,e,s){const a=s.value;s.value=function(...t){try{return a.apply(this,t)}catch(e){alert(e.message)}}}},"87ea":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"ui container padding"},[1===t.status?s("init-config",{on:{configUpdated:t.updateStatus}}):t._e(),2===t.status?s("init-admin"):t._e()],1)},i=[],r=(s("e260"),s("ddb0"),s("9ab4")),n=s("60a3"),o=s("2cd4"),l=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"html ui top attached segment"},[s("div",{staticClass:"ui large form"},[s("div",{staticClass:"ui form"},[s("div",{staticClass:"two fields"},[s("div",{staticClass:"field"},[s("label",[t._v(t._s(t.$t("database hostname")))]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.mysql.host,expression:"mysql.host"}],attrs:{name:"hostname",type:"text"},domProps:{value:t.mysql.host},on:{input:function(e){e.target.composing||t.$set(t.mysql,"host",e.target.value)}}})]),s("div",{staticClass:"field"},[s("label",[t._v(t._s(t.$t("database port")))]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.mysql.port,expression:"mysql.port"}],attrs:{name:"port",type:"text"},domProps:{value:t.mysql.port},on:{input:function(e){e.target.composing||t.$set(t.mysql,"port",e.target.value)}}})])]),s("div",{staticClass:"two fields"},[s("div",{staticClass:"field"},[s("label",[t._v(t._s(t.$t("database username")))]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.mysql.user,expression:"mysql.user"}],attrs:{name:"user",type:"text"},domProps:{value:t.mysql.user},on:{input:function(e){e.target.composing||t.$set(t.mysql,"user",e.target.value)}}})]),s("div",{staticClass:"field"},[s("label",[t._v(t._s(t.$t("database password")))]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.mysql.password,expression:"mysql.password"}],attrs:{name:"password",type:"text"},domProps:{value:t.mysql.password},on:{input:function(e){e.target.composing||t.$set(t.mysql,"password",e.target.value)}}})])]),s("div",{staticClass:"field"},[s("label",[t._v(t._s(t.$t("database")))]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.mysql.database,expression:"mysql.database"}],attrs:{name:"database",type:"text"},domProps:{value:t.mysql.database},on:{input:function(e){e.target.composing||t.$set(t.mysql,"database",e.target.value)}}})]),s("div",{staticClass:"field"},[s("label",[t._v(t._s(t.$t("salt")))]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.salt,expression:"salt"}],attrs:{name:"salt",type:"text"},domProps:{value:t.salt},on:{input:function(e){e.target.composing||(t.salt=e.target.value)}}})]),s("div",{staticClass:"field"},[s("label",[t._v(t._s(t.$t("session secret")))]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.session_secret,expression:"session_secret"}],attrs:{name:"session_secret",type:"text"},domProps:{value:t.session_secret},on:{input:function(e){e.target.composing||(t.session_secret=e.target.value)}}})]),s("div",{staticClass:"field"},[s("label",[t._v(t._s(t.$t("judger address")))]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.judger.address,expression:"judger.address"}],attrs:{name:"judger_address",type:"text"},domProps:{value:t.judger.address},on:{input:function(e){e.target.composing||t.$set(t.judger,"address",e.target.value)}}})]),s("div",{staticClass:"field"},[s("label",[t._v(t._s(t.$t("judger data directory")))]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.judger.oj_home,expression:"judger.oj_home"}],attrs:{name:"judger_data_directory",type:"text"},domProps:{value:t.judger.oj_home},on:{input:function(e){e.target.composing||t.$set(t.judger,"oj_home",e.target.value)}}})]),s("div",{staticClass:"field"},[s("label",[t._v(t._s(t.$t("compile arguments")))]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.etc.compile_arguments,expression:"etc.compile_arguments"}],attrs:{name:"compile_arguments",type:"text"},domProps:{value:t.etc.compile_arguments},on:{input:function(e){e.target.composing||t.$set(t.etc,"compile_arguments",e.target.value)}}})]),s("div",{staticClass:"field"},[s("label",[t._v(t._s(t.$t("problem upload directory")))]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.problem_upload_dest.dir,expression:"problem_upload_dest.dir"}],attrs:{name:"problem_upload_directory",type:"text"},domProps:{value:t.problem_upload_dest.dir},on:{input:function(e){e.target.composing||t.$set(t.problem_upload_dest,"dir",e.target.value)}}})]),s("div",{staticClass:"ui buttons"},[s("button",{staticClass:"ui button",attrs:{type:"reset",name:"reset"},on:{click:function(e){return e.preventDefault(),t.resetConfig(e)}}},[t._v(t._s(t.$t("reset")))]),s("div",{staticClass:"or"}),s("button",{staticClass:"ui positive button",attrs:{type:"submit",id:"submit"},on:{click:function(e){return e.preventDefault(),t.updateConfig(e)}}},[t._v(t._s(t.$t("submit")))])])]),s("div",{staticClass:"ui error message"}),s("br"),s("br")])])},c=[],d=(s("cca6"),s("2b0e"));let u={},p={},m=class extends d["a"]{constructor(){super(...arguments),this.mysql={host:"",user:"",password:"",port:"",database:""},this.salt="",this.session_secret="",this.judger={address:"",oj_home:""},this.etc={compile_arguments:""},this.problem_upload_dest={dir:""}}mounted(){this.axios.get("/api/init/firstrun/").then(({data:t})=>{Object.assign(this,t.data),u=t.data,p=JSON.parse(JSON.stringify(p))})}updateConfig(){Object.assign(u,this.$data),this.axios.post("/api/init/firstrun/config",{content:u}).then(({data:t})=>{this.$emit("configUpdated")})}resetConfig(){Object.assign(this,p)}};m=Object(r["c"])([n["a"]],m);var v=m,f=v,g=s("2877"),h=Object(g["a"])(f,l,c,!1,null,"d0aaca7c",null),_=h.exports,b=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"html ui top attached segment"},[s("div",{staticClass:"ui large form"},[s("div",{staticClass:"ui form"},[s("div",{staticClass:"two fields"},[s("div",{staticClass:"field"},[s("label",[t._v(t._s(t.$t("user_id")))]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.userId,expression:"userId"}],attrs:{type:"text",placeholder:"",name:"user_id",id:"user_id"},domProps:{value:t.userId},on:{input:function(e){e.target.composing||(t.userId=e.target.value)}}})]),s("div",{staticClass:"field"},[s("label",[t._v(t._s(t.$t("nick")))]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.nick,expression:"nick"}],attrs:{type:"text",name:"nick",placeholder:""},domProps:{value:t.nick},on:{input:function(e){e.target.composing||(t.nick=e.target.value)}}})])]),s("div",{staticClass:"two fields"},[s("div",{staticClass:"field"},[s("label",[t._v(t._s(t.$t("password")))]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{name:"password",id:"password",type:"password",placeholder:"必填"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),s("div",{staticClass:"field"},[s("label",[t._v(t._s(t.$t("repeat password")))]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.repeatPassword,expression:"repeatPassword"}],attrs:{name:"rptpassword",id:"rptpassword",type:"password",placeholder:"必填"},domProps:{value:t.repeatPassword},on:{input:function(e){e.target.composing||(t.repeatPassword=e.target.value)}}})])]),s("div",{staticClass:"two fields"},[s("div",{staticClass:"field"},[s("label",[t._v(t._s(t.$t("retrieve password question")))]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.confirmQuestion,expression:"confirmQuestion"}],attrs:{name:"confirmquestion",id:"confirmquestion",placeholder:"必填"},domProps:{value:t.confirmQuestion},on:{input:function(e){e.target.composing||(t.confirmQuestion=e.target.value)}}})]),s("div",{staticClass:"field"},[s("label",[t._v(t._s(t.$t("retrieve password answer")))]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.confirmAnswer,expression:"confirmAnswer"}],attrs:{name:"confirmanswer",id:"confirmanswer",placeholder:"必填"},domProps:{value:t.confirmAnswer},on:{input:function(e){e.target.composing||(t.confirmAnswer=e.target.value)}}})])]),s("div",{staticClass:"two fields"},[s("div",{staticClass:"field"},[s("label",[t._v(t._s(t.$t("captcha")))]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.captcha,expression:"captcha"}],attrs:{name:"vcode",size:"4",type:"text"},domProps:{value:t.captcha},on:{input:function(e){e.target.composing||(t.captcha=e.target.value)}}})]),t._m(0)]),s("div",{staticClass:"ui buttons"},[s("button",{staticClass:"ui button",attrs:{type:"reset",name:"reset"},on:{click:function(e){return e.preventDefault(),t.reset(e)}}},[t._v(t._s(t.$t("reset")))]),s("div",{staticClass:"or"}),s("button",{staticClass:"ui positive button",attrs:{type:"submit",id:"submit"},on:{click:function(e){return e.preventDefault(),t.submit(e)}}},[t._v(t._s(t.$t("submit")))])])]),s("div",{staticClass:"ui error message"}),s("br"),s("br")])])},w=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"field"},[s("label",{staticStyle:{opacity:"0"}},[t._v("Captcha image")]),s("img",{attrs:{alt:"click to change",src:"/api/captcha?from=init",onclick:"this.src='/api/captcha?from=init&random='+Math.random()",width:"20%"}})])}],y=s("5dbd");const $={confirmQuestion:"",inviteCode:"",nick:"",password:"",userId:"",captcha:"",repeatPassword:"",confirmAnswer:""};let C=class extends d["a"]{constructor(){super(...arguments),this.captcha="",this.repeatPassword="",this.confirmAnswer="",this.confirmQuestion="",this.inviteCode="",this.nick="",this.password="",this.userId=""}mounted(){}validatePassword(){if(this.password!==this.repeatPassword)throw new Error("两次输入的密码不一致")}submit(){this.validatePassword();const t={confirmAnswer:this.confirmAnswer,confirmQuestion:this.confirmQuestion,inviteCode:this.inviteCode,nick:this.nick,password:this.password,userId:this.userId,captcha:this.captcha};this.axios.post("/api/init/firstrun/admin",t).then(({data:t})=>{"OK"===t.status&&(alert("注册成功"),this.$store.dispatch("NavStatus"),this.$router.push({path:"/login"}))}).catch(t=>{alert(t.data.statement)})}reset(){Object.assign(this,$)}};Object(r["c"])([y["c"]],C.prototype,"submit",null),C=Object(r["c"])([n["a"]],C);var x=C,j=x,N=Object(g["a"])(j,b,w,!1,null,"7c3e2650",null),P=N.exports;let q=class extends(Object(n["b"])(o["a"])){constructor(){super(...arguments),this.status=1}updateStatus(){this.status=2}};q=Object(r["c"])([Object(n["a"])({components:{InitAdmin:P,InitConfig:_}})],q);var k=q,O=k,I=Object(g["a"])(O,a,i,!1,null,"04bfff6a",null);e["default"]=I.exports}}]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-79931d60"],{3185:function(e,t,a){"use strict";var s=a("d4ec"),i=a("262e"),r=a("2caf"),n=a("9ab4"),o=a("2b0e"),c=a("60a3"),d=function(e){Object(i["a"])(a,e);var t=Object(r["a"])(a);function a(){var e;return Object(s["a"])(this,a),e=t.apply(this,arguments),e.captchaHash=Math.random(),e}return a}(o["a"]);d=Object(n["c"])([c["a"]],d),t["a"]=d},7803:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"ui container padding"},[a("div",{staticClass:"html ui top attached segment"},[a("div",{staticClass:"ui large form"},[a("h4",[e._v("根据要求，请实名注册账号，非法账号将定期删除，严重者封禁IP")]),a("div",{staticClass:"ui form"},[a("div",{staticClass:"two fields"},[a("div",{staticClass:"field"},[a("label",[e._v(e._s(e.$t("user_id")))]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.userId,expression:"userId"}],attrs:{type:"text",placeholder:"请填写真实学号",name:"user_id",id:"user_id"},domProps:{value:e.userId},on:{input:function(t){t.target.composing||(e.userId=t.target.value)}}})]),a("div",{staticClass:"field"},[a("label",[e._v(e._s(e.$t("nick")))]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.nick,expression:"nick"}],attrs:{type:"text",name:"nick",placeholder:"请填写真实姓名"},domProps:{value:e.nick},on:{input:function(t){t.target.composing||(e.nick=t.target.value)}}})])]),a("div",{staticClass:"two fields"},[a("div",{staticClass:"field"},[a("label",[e._v(e._s(e.$t("password")))]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{name:"password",id:"password",type:"password",placeholder:"必填"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})]),a("div",{staticClass:"field"},[a("label",[e._v(e._s(e.$t("repeat password")))]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.repeatPassword,expression:"repeatPassword"}],attrs:{name:"rptpassword",id:"rptpassword",type:"password",placeholder:"必填"},domProps:{value:e.repeatPassword},on:{input:function(t){t.target.composing||(e.repeatPassword=t.target.value)}}})])]),a("div",{staticClass:"two fields"},[a("div",{staticClass:"field"},[a("label",[e._v(e._s(e.$t("retrieve password question")))]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.confirmQuestion,expression:"confirmQuestion"}],attrs:{name:"confirmquestion",id:"confirmquestion",placeholder:"必填"},domProps:{value:e.confirmQuestion},on:{input:function(t){t.target.composing||(e.confirmQuestion=t.target.value)}}})]),a("div",{staticClass:"field"},[a("label",[e._v(e._s(e.$t("retrieve password answer")))]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.confirmAnswer,expression:"confirmAnswer"}],attrs:{name:"confirmanswer",id:"confirmanswer",placeholder:"必填"},domProps:{value:e.confirmAnswer},on:{input:function(t){t.target.composing||(e.confirmAnswer=t.target.value)}}})])]),a("div",{staticClass:"field"},[a("label",[e._v(e._s(e.$t("invite code")))]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.inviteCode,expression:"inviteCode"}],attrs:{name:"invite_code",placeholder:"必填"},domProps:{value:e.inviteCode},on:{input:function(t){t.target.composing||(e.inviteCode=t.target.value)}}})]),a("div",{staticClass:"two fields"},[a("div",{staticClass:"field"},[a("label",[e._v(e._s(e.$t("captcha")))]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.captcha,expression:"captcha"}],attrs:{name:"vcode",size:"4",type:"text"},domProps:{value:e.captcha},on:{input:function(t){t.target.composing||(e.captcha=t.target.value)}}})]),a("div",{staticClass:"field"},[a("label",{staticStyle:{opacity:"0"}},[e._v("Captcha image")]),a("img",{staticClass:"captcha",attrs:{alt:"click to change",src:"/api/captcha?from=register&random="+e.captchaHash,onclick:"this.src='/api/captcha?from=register&random='+Math.random()",width:"20%"}})])])]),a("button",{staticClass:"ui primary button",attrs:{type:"submit",id:"submit"},on:{click:function(t){return t.preventDefault(),e.submit(t)}}},[e._v("Submit")]),a("button",{staticClass:"ui button",attrs:{type:"reset",name:"reset"},on:{click:function(t){return t.preventDefault(),e.reset(t)}}},[e._v("Reset")]),a("div",{staticClass:"ui error message"}),a("br"),a("br")])])])},i=[],r=a("d4ec"),n=a("bee2"),o=a("262e"),c=a("2caf"),d=a("9ab4"),l=a("60a3"),u=a("2cd4"),p=a("5dbd"),v=a("3185"),m={confirmQuestion:"",inviteCode:"",nick:"",password:"",userId:"",captcha:"",repeatPassword:"",confirmAnswer:""},f=function(e){Object(o["a"])(a,e);var t=Object(c["a"])(a);function a(){var e;return Object(r["a"])(this,a),e=t.apply(this,arguments),e.captcha="",e.repeatPassword="",e.confirmAnswer="",e.confirmQuestion="",e.inviteCode="",e.nick="",e.password="",e.userId="",e}return Object(n["a"])(a,[{key:"mounted",value:function(){}},{key:"validatePassword",value:function(){if(this.password!==this.repeatPassword)throw new Error("两次输入的密码不一致")}},{key:"submit",value:function(){var e=this;this.validatePassword();var t={confirmAnswer:this.confirmAnswer,confirmQuestion:this.confirmQuestion,inviteCode:this.inviteCode,nick:this.nick,password:this.password,userId:this.userId,captcha:this.captcha};this.axios.post("/api/register",t).then((function(t){var a=t.data;"OK"===a.status&&(alert("注册成功"),e.$router.push({path:"/login"}))})).catch((function(e){alert(JSON.stringify(e.data))}))}},{key:"reset",value:function(){Object.assign(this,m)}}]),a}(Object(l["b"])(u["a"],v["a"]));Object(d["c"])([p["d"]],f.prototype,"submit",null),f=Object(d["c"])([l["a"]],f);var w=f,h=w,b=a("2877"),g=Object(b["a"])(h,s,i,!1,null,"4a55e2c8",null);t["default"]=g.exports}}]);
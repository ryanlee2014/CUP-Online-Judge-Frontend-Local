(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-25e3c33c"],{"2cd4":function(t,e,a){"use strict";a("e260"),a("ddb0");var s=a("9ab4"),i=a("2b0e"),o=a("60a3"),n=a("3657"),r=a("0443"),c=class extends i["a"]{constructor(){super(...arguments),this.customConfig=r}mounted(){n["a"].init(this.$store.getters.homepage),document.title=r.title}};c=Object(s["c"])([o["a"]],c),e["a"]=c},a754:function(t,e,a){"use strict";var s=a("f12f0"),i=a.n(s);i.a},dd7b:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"ui grid"},[a("div",{staticClass:"ui middle aligned center aligned grid",attrs:{id:"background"}},[a("div",{staticClass:"center aligned column"},[a("h2",{staticClass:"ui teal image header"},[a("div",{staticClass:"content"},[t._v(" "+t._s(t.$t("login to your account"))+" ")])]),a("div",{staticClass:"ui large form"},[a("div",{staticClass:"ui stacked segment"},[a("div",{staticClass:"field"},[a("div",{staticClass:"ui left icon input"},[a("i",{staticClass:"user icon"}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.user_id,expression:"user_id"}],attrs:{id:"user_id",name:"user_id",placeholder:t.$t("user_id"),type:"text"},domProps:{value:t.user_id},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.login(e)},input:function(e){e.target.composing||(t.user_id=e.target.value)}}})])]),a("div",{staticClass:"field"},[a("div",{staticClass:"ui left icon input"},[a("i",{staticClass:"lock icon"}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{id:"password",name:"password",placeholder:t.$t("password"),type:"password"},domProps:{value:t.password},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.login(e)},input:function(e){e.target.composing||(t.password=e.target.value)}}})])]),a("div",{staticClass:"field"},[a("div",{staticClass:"ui left input"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.captcha,expression:"captcha"}],staticStyle:{width:"70%"},attrs:{id:"vcode",name:"vcode",placeholder:t.$t("captcha"),type:"text"},domProps:{value:t.captcha},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.login(e)},input:function(e){e.target.composing||(t.captcha=e.target.value)}}}),a("img",{attrs:{alt:"click to change",height:"40px",id:"vcode_graph",onclick:"this.src='/api/captcha?from=login&ramdom='+Math.random()",src:"/api/captcha?from=login"}})])]),a("div",{staticClass:"ui fluid large teal button",on:{click:t.login,keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.login(e)}}},[t._v(t._s(t.$t("login")))])]),a("div",{staticClass:"ui error message"})]),a("div",{staticClass:"ui bottom attached warning message"},[a("i",{staticClass:"icon help"}),t._v(" "+t._s(t.$t("new to us"))+"? "),a("router-link",{attrs:{to:"/register"}},[t._v(t._s(t.$t("sign up")))]),a("br"),a("i",{staticClass:"icon help"}),t._v(" "+t._s(t.$t("forgot password"))+"? "),a("router-link",{attrs:{to:"/user/lostpassword"}},[t._v(t._s(t.$t("reset password")))])],1)])])])},i=[],o=(a("e260"),a("466d"),a("ddb0"),a("9ab4")),n=a("2cd4"),r=a("60a3"),c=a("1157"),d=a.n(c),l=d.a,u=class extends(Object(r["b"])(n["a"])){constructor(){super(...arguments),this.user_id="",this.password="",this.captcha=""}mounted(){document.title="Login -- ".concat(document.title)}login(){l(".ui.error.message").hide(),l(".ui.fluid.large.teal.button").addClass("loading"),this.axios.defaults.withCredentials=!0,this.axios.post("/api/login/newlogin",this.$data).then(t=>{l(".ui.fluid.large.teal.button").removeClass("loading"),"OK"===t.data.status&&(this.$root.$store.commit("loginMutate",{login:!0}),this.$socket.connect(),sessionStorage.isLogined="true",this.$store.dispatch("NavStatus"),this.$route.query.redirect?this.$router.push({path:this.$route.query.redirect}):this.$router.push({path:"/"}))}).catch(t=>{l(".ui.fluid.large.teal.button").removeClass("loading"),l("#vcode_graph").attr("src","/api/captcha?from=login&ramdom=".concat(Math.random())),l(".ui.middle.aligned.center.aligned.grid .column").transition("shake"),t.data.statement.match("captcha doesn't match")?l(".ui.error.message").html("验证码错误").show():l(".ui.error.message").html("账号或密码错误").show()})}};u=Object(o["c"])([r["a"]],u);var p=u,g=p,h=(a("a754"),a("2877")),m=Object(h["a"])(g,s,i,!1,null,"3cea043f",null);e["default"]=m.exports},f12f0:function(t,e,a){}}]);
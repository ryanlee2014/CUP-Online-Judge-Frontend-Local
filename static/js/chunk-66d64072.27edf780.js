(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-66d64072"],{3185:function(t,a,i){"use strict";i("ddb0");var s=i("9ab4"),e=i("2b0e"),o=i("60a3");let c=class extends e["a"]{constructor(){super(...arguments),this.captchaHash=Math.random()}};c=Object(s["a"])([o["a"]],c),a["a"]=c},ac4d:function(t,a,i){"use strict";i.r(a);var s=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"ui container padding"},[i("div",{staticClass:"ui grid"},[t._m(0),i("div",{staticClass:"row"},[i("div",{staticClass:"ui input"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.solution_id,expression:"solution_id"}],attrs:{size:"50",type:"text"},domProps:{value:t.solution_id},on:{input:function(a){a.target.composing||(t.solution_id=a.target.value)}}})])]),t._m(1),i("div",{staticClass:"row"},[i("mavon-editor",{model:{value:t.content,callback:function(a){t.content=a},expression:"content"}})],1),i("div",{staticClass:"row"},[i("div",{staticClass:"two field"},[i("div",{staticClass:"ui left input",staticStyle:{width:"auto"}},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.captcha,expression:"captcha"}],attrs:{placeholder:"验证码",type:"text"},domProps:{value:t.captcha},on:{input:function(a){a.target.composing||(t.captcha=a.target.value)}}}),i("img",{staticClass:"captcha",attrs:{alt:"click to change",height:"40px",onclick:"this.src='/api/captcha?from=tutorial&random='+Math.random()",src:"/api/captcha?from=tutorial&random="+t.captchaHash}})])])]),i("div",{staticClass:"row"},[i("div",{staticClass:"ui blue labeled submit icon button",on:{click:t.create_post}},[i("i",{staticClass:"icon edit"}),t._v(" Modify Post ")])])])])},e=[function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"row"},[i("h2",{staticClass:"ui header"},[t._v(" 输入答案正确的Solution ID ")])])},function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"row"},[i("h2",{staticClass:"ui header"},[t._v(" 题解正文 ")])])}],o=(i("ddb0"),i("9ab4")),c=i("60a3"),n=i("2cd4"),r=i("3185");let l=class extends(Object(c["b"])(n["a"],r["a"])){constructor(){super(...arguments),this.content="",this.solution_id=0,this.captcha=""}created(){this.tutorial_id=this.$route.params.tutorial_id}mounted(){document.title="Edit Tutorial -- "+document.title,this.axios.get("/api/tutorial/"+this.tutorial_id).then(({data:t})=>{const a=t;Object.assign(this,{content:a.data.content,solution_id:a.data.solution_id})})}create_post(){this.axios.post("/api/tutorial/edit/"+this.tutorial_id,{solution_id:this.solution_id,content:this.content,captcha:this.captcha}).then(({data:t})=>{alert("修改成功!"),this.$router.push({path:"/tutorial/"+this.$route.query.problem_id})}).catch(({data:t})=>{alert("服务器遇到错误\n"+t.statement)})}};l=Object(o["a"])([c["a"]],l);var d=l,u=d,h=i("2877"),p=Object(h["a"])(u,s,e,!1,null,"4d058139",null);a["default"]=p.exports}}]);
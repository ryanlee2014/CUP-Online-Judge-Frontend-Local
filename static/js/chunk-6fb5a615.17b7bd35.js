(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6fb5a615"],{3185:function(t,a,i){"use strict";i("ddb0");var s=i("9ab4"),e=i("2b0e"),o=i("60a3");let c=(()=>{let t=class extends e["a"]{constructor(){super(...arguments),this.captchaHash=Math.random()}};return t=Object(s["c"])([o["a"]],t),t})();a["a"]=c},"31a2":function(t,a,i){"use strict";i.r(a);var s=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"ui container padding"},[i("div",{staticClass:"ui grid"},[t._m(0),i("div",{staticClass:"row"},[i("div",{staticClass:"ui action input"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.solution_id,expression:"solution_id"}],attrs:{type:"text",size:"50"},domProps:{value:t.solution_id},on:{input:function(a){a.target.composing||(t.solution_id=a.target.value)}}}),i("button",{staticClass:"ui teal right labeled icon button",on:{click:t.fetch_solution}},[i("i",{staticClass:"history icon"}),t._v(" 自动获取 ")])])]),t._m(1),i("div",{staticClass:"row"},[i("mavon-editor",{model:{value:t.content,callback:function(a){t.content=a},expression:"content"}})],1),i("div",{staticClass:"row"},[i("div",{staticClass:"two field"},[i("div",{staticClass:"ui left input",staticStyle:{width:"auto"}},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.captcha,expression:"captcha"}],attrs:{type:"text",placeholder:"验证码"},domProps:{value:t.captcha},on:{input:function(a){a.target.composing||(t.captcha=a.target.value)}}}),i("img",{staticClass:"captcha",attrs:{alt:"click to change",src:"/api/captcha?from=tutorial&random="+t.captchaHash,onclick:"this.src='/api/captcha?from=tutorial&random='+Math.random()",height:"40px"}})])])]),i("div",{staticClass:"row"},[i("div",{staticClass:"ui blue labeled submit icon button",on:{click:t.create_post}},[i("i",{staticClass:"icon edit"}),t._v(" Add New Post ")])])])])},e=[function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"row"},[i("h2",{staticClass:"ui header"},[t._v(" 输入答案正确的Solution ID ")])])},function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"row"},[i("h2",{staticClass:"ui header"},[t._v(" 题解正文 ")])])}],o=(i("ddb0"),i("9ab4")),c=i("60a3"),n=i("2cd4"),l=i("2fe1"),r=i("3185");let u=(()=>{let t=class extends(Object(c["b"])(n["a"],r["a"])){constructor(){super(...arguments),this.content="",this.solution_id=0,this.captcha="",this.from="local"}created(){this.id=this.$route.params.problem_id}mounted(){document.title="Add Tutorial -- "+document.title}fetch_solution(){const t=this;this.axios.get(`/api/status/${this.id}/my/null/4/0`).then(({data:a})=>{0===a.result.length?alert("未找到相关提交！"):t.solution_id=a.result[0].solution_id})}create_post(){const t={solution_id:this.solution_id,content:this.content,captcha:this.captcha,source:"local",id:this.id};this.axios.post(`/api/tutorial/new/${this.from}/${this.id}`,t).then(({data:t})=>{"OK"===t.status?(alert("添加成功!"),this.$router.push({path:"/tutorial/"+this.id})):alert("服务器遇到错误\n"+t.statement)})}};return t=Object(o["c"])([l["b"]],t),t})();var d=u,h=d,p=i("2877"),m=Object(p["a"])(h,s,e,!1,null,"00148ace",null);a["default"]=m.exports}}]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6fb5a615"],{3185:function(t,e,a){"use strict";a("d3b7"),a("4ae1"),a("25f0");var i=a("d4ec"),c=a("262e"),n=a("99de"),o=a("7e84"),s=a("9ab4"),r=a("2b0e"),u=a("60a3");function l(t){function e(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}return function(){var a,i=Object(o["a"])(t);if(e()){var c=Object(o["a"])(this).constructor;a=Reflect.construct(i,arguments,c)}else a=i.apply(this,arguments);return Object(n["a"])(this,a)}}var d=function(t){Object(c["a"])(a,t);var e=l(a);function a(){var t;return Object(i["a"])(this,a),t=e.apply(this,arguments),t.captchaHash=Math.random(),t}return a}(r["a"]);d=Object(s["c"])([u["a"]],d),e["a"]=d},"31a2":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"ui container padding"},[a("div",{staticClass:"ui grid"},[t._m(0),a("div",{staticClass:"row"},[a("div",{staticClass:"ui action input"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.solution_id,expression:"solution_id"}],attrs:{type:"text",size:"50"},domProps:{value:t.solution_id},on:{input:function(e){e.target.composing||(t.solution_id=e.target.value)}}}),a("button",{staticClass:"ui teal right labeled icon button",on:{click:t.fetch_solution}},[a("i",{staticClass:"history icon"}),t._v(" 自动获取 ")])])]),t._m(1),a("div",{staticClass:"row"},[a("mavon-editor",{model:{value:t.content,callback:function(e){t.content=e},expression:"content"}})],1),a("div",{staticClass:"row"},[a("div",{staticClass:"two field"},[a("div",{staticClass:"ui left input",staticStyle:{width:"auto"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.captcha,expression:"captcha"}],attrs:{type:"text",placeholder:"验证码"},domProps:{value:t.captcha},on:{input:function(e){e.target.composing||(t.captcha=e.target.value)}}}),a("img",{attrs:{alt:"click to change",src:"/api/captcha?from=tutorial&random="+t.captchaHash,onclick:"this.src='/api/captcha?from=tutorial&random='+Math.random()",height:"40px"}})])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"ui blue labeled submit icon button",on:{click:t.create_post}},[a("i",{staticClass:"icon edit"}),t._v(" Add New Post ")])])])])},c=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("h2",{staticClass:"ui header"},[t._v(" 输入答案正确的Solution ID ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("h2",{staticClass:"ui header"},[t._v(" 题解正文 ")])])}],n=(a("99af"),a("d3b7"),a("4ae1"),a("25f0"),a("d4ec")),o=a("bee2"),s=a("262e"),r=a("99de"),u=a("7e84"),l=a("9ab4"),d=a("60a3"),f=a("2cd4"),h=a("2fe1"),p=a("3185");function v(t){function e(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}return function(){var a,i=Object(u["a"])(t);if(e()){var c=Object(u["a"])(this).constructor;a=Reflect.construct(i,arguments,c)}else a=i.apply(this,arguments);return Object(r["a"])(this,a)}}var m=function(t){Object(s["a"])(a,t);var e=v(a);function a(){var t;return Object(n["a"])(this,a),t=e.apply(this,arguments),t.content="",t.solution_id=0,t.captcha="",t.from="local",t}return Object(o["a"])(a,[{key:"created",value:function(){this.id=this.$route.params.problem_id}},{key:"mounted",value:function(){document.title="Add Tutorial -- ".concat(document.title)}},{key:"fetch_solution",value:function(){var t=this;this.axios.get("/api/status/".concat(this.id,"/my/null/4/0")).then((function(e){var a=e.data;0===a.result.length?alert("未找到相关提交！"):t.solution_id=a.result[0].solution_id}))}},{key:"create_post",value:function(){var t=this,e={solution_id:this.solution_id,content:this.content,captcha:this.captcha,source:"local",id:this.id};this.axios.post("/api/tutorial/new/".concat(this.from,"/").concat(this.id),e).then((function(e){var a=e.data;"OK"===a.status?(alert("添加成功!"),t.$router.push({path:"/tutorial/".concat(t.id)})):alert("服务器遇到错误\n"+a.statement)}))}}]),a}(Object(d["b"])(f["a"],p["a"]));m=Object(l["c"])([h["b"]],m);var b=m,_=b,y=a("2877"),w=Object(y["a"])(_,i,c,!1,null,"35125554",null);e["default"]=w.exports}}]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-66d64072"],{3185:function(t,a,e){"use strict";e("d3b7"),e("4ae1"),e("25f0");var i=e("d4ec"),c=e("262e"),n=e("99de"),o=e("7e84"),r=e("9ab4"),s=e("2b0e"),u=e("60a3");function l(t){function a(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}return function(){var e,i=Object(o["a"])(t);if(a()){var c=Object(o["a"])(this).constructor;e=Reflect.construct(i,arguments,c)}else e=i.apply(this,arguments);return Object(n["a"])(this,e)}}var d=function(){var t=function(t){Object(c["a"])(e,t);var a=l(e);function e(){var t;return Object(i["a"])(this,e),t=a.apply(this,arguments),t.captchaHash=Math.random(),t}return e}(s["a"]);return t=Object(r["c"])([u["a"]],t),t}();a["a"]=d},ac4d:function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"ui container padding"},[e("div",{staticClass:"ui grid"},[t._m(0),e("div",{staticClass:"row"},[e("div",{staticClass:"ui input"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.solution_id,expression:"solution_id"}],attrs:{size:"50",type:"text"},domProps:{value:t.solution_id},on:{input:function(a){a.target.composing||(t.solution_id=a.target.value)}}})])]),t._m(1),e("div",{staticClass:"row"},[e("mavon-editor",{model:{value:t.content,callback:function(a){t.content=a},expression:"content"}})],1),e("div",{staticClass:"row"},[e("div",{staticClass:"two field"},[e("div",{staticClass:"ui left input",staticStyle:{width:"auto"}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.captcha,expression:"captcha"}],attrs:{placeholder:"验证码",type:"text"},domProps:{value:t.captcha},on:{input:function(a){a.target.composing||(t.captcha=a.target.value)}}}),e("img",{staticClass:"captcha",attrs:{alt:"click to change",height:"40px",onclick:"this.src='/api/captcha?from=tutorial&random='+Math.random()",src:"/api/captcha?from=tutorial&random="+t.captchaHash}})])])]),e("div",{staticClass:"row"},[e("div",{staticClass:"ui blue labeled submit icon button",on:{click:t.create_post}},[e("i",{staticClass:"icon edit"}),t._v(" Modify Post ")])])])])},c=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"row"},[e("h2",{staticClass:"ui header"},[t._v(" 输入答案正确的Solution ID ")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"row"},[e("h2",{staticClass:"ui header"},[t._v(" 题解正文 ")])])}],n=(e("d3b7"),e("4ae1"),e("25f0"),e("d4ec")),o=e("bee2"),r=e("262e"),s=e("99de"),u=e("7e84"),l=e("9ab4"),d=e("60a3"),f=e("2cd4"),p=e("3185");function h(t){function a(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}return function(){var e,i=Object(u["a"])(t);if(a()){var c=Object(u["a"])(this).constructor;e=Reflect.construct(i,arguments,c)}else e=i.apply(this,arguments);return Object(s["a"])(this,e)}}var v=function(){var t=function(t){Object(r["a"])(e,t);var a=h(e);function e(){var t;return Object(n["a"])(this,e),t=a.apply(this,arguments),t.content="",t.solution_id=0,t.captcha="",t}return Object(o["a"])(e,[{key:"created",value:function(){this.tutorial_id=this.$route.params.tutorial_id}},{key:"mounted",value:function(){var t=this;document.title="Edit Tutorial -- ".concat(document.title),this.axios.get("/api/tutorial/".concat(this.tutorial_id)).then((function(a){var e=a.data,i=e;Object.assign(t,{content:i.data.content,solution_id:i.data.solution_id})}))}},{key:"create_post",value:function(){var t=this;this.axios.post("/api/tutorial/edit/".concat(this.tutorial_id),{solution_id:this.solution_id,content:this.content,captcha:this.captcha}).then((function(a){a.data;alert("修改成功!"),t.$router.push({path:"/tutorial/".concat(t.$route.query.problem_id)})})).catch((function(t){var a=t.data;alert("服务器遇到错误\n"+a.statement)}))}}]),e}(Object(d["b"])(f["a"],p["a"]));return t=Object(l["c"])([d["a"]],t),t}(),m=v,b=m,_=e("2877"),y=Object(_["a"])(b,i,c,!1,null,"4d058139",null);a["default"]=y.exports}}]);
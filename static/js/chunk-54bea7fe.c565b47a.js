(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-54bea7fe"],{3185:function(t,a,i){"use strict";i("e260"),i("ddb0");var e=i("9ab4"),s=i("2b0e"),c=i("60a3");let n=(()=>{let t=class extends s["a"]{constructor(){super(...arguments),this.captchaHash=Math.random()}};return t=Object(e["c"])([c["a"]],t),t})();a["a"]=n},afcd:function(t,a,i){"use strict";i.r(a);var e=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"ui container padding"},[i("div",{staticClass:"ui grid"},[t.reply?t._e():i("div",{staticClass:"row"},[i("h2",{staticClass:"ui header"},[t._v(" "+t._s(t.$t("title"))+" ")])]),t.reply?t._e():i("div",{staticClass:"row"},[i("div",{staticClass:"ui input"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],attrs:{size:"50",type:"text"},domProps:{value:t.title},on:{input:function(a){a.target.composing||(t.title=a.target.value)}}})])]),i("div",{staticClass:"row"},[i("h2",{staticClass:"ui header"},[t._v(" "+t._s(t.$t("content"))+" ")])]),i("div",{staticClass:"row"},[i("mavon-editor",{model:{value:t.content,callback:function(a){t.content=a},expression:"content"}})],1),i("div",{staticClass:"row"},[i("div",{staticClass:"two field"},[i("div",{staticClass:"ui left input",staticStyle:{width:"auto"}},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.captcha,expression:"captcha"}],attrs:{placeholder:"验证码",type:"text"},domProps:{value:t.captcha},on:{input:function(a){a.target.composing||(t.captcha=a.target.value)}}}),i("img",{staticClass:"captcha",attrs:{alt:"click to change",height:"40px",onclick:"this.src='/api/captcha?from=edit&random='+Math.random()",src:"/api/captcha?from=edit&random="+t.captchaHash}})])])]),i("div",{staticClass:"row"},[i("div",{staticClass:"ui blue labeled submit icon button",on:{click:t.edit_post}},[i("i",{staticClass:"icon edit"}),t._v(" "+t._s(t.$t("modify"))+" ")])])])])},s=[],c=(i("e260"),i("ddb0"),i("9ab4")),n=i("2cd4"),o=i("1157"),r=i.n(o),d=i("60a3"),l=i("3185");r.a;let h=(()=>{let t=class extends(Object(d["b"])(n["a"],l["a"])){constructor(){super(...arguments),this.content="",this.title="",this.captcha="",this.reply=!1,this.article_id="",this.comment_id=""}created(){this.reply=!!this.$route.params.comment_id,this.article_id=this.$route.params.article_id,this.comment_id=this.$route.params.comment_id}mounted(){document.title="Edit Thread -- "+document.title;const t=!this.reply;t?this.axios.get("/api/discuss/update/main/"+this.article_id).then(({data:t})=>{this.content=t.data.content,this.title=t.data.title}):this.axios.get(`/api/discuss/update/reply/${this.article_id}/${this.comment_id}`).then(({data:t})=>{this.content=t.data.content})}editPostCallback(t){"OK"===t.status?(alert("更改成功"),this.$router.push({path:"/discuss/thread/"+this.article_id})):alert("Error!\n"+t.statement)}get editUrl(){const t=!this.reply;return t?"/api/discuss/update/main/"+this.article_id:`/api/discuss/update/reply/${this.article_id}/${this.comment_id}`}edit_post(){this.axios.post(this.editUrl,{title:this.title,content:this.content,captcha:this.captcha}).then(({data:t})=>{this.editPostCallback(t)})}};return t=Object(c["c"])([d["a"]],t),t})();var p=h,u=p,m=i("2877"),v=Object(m["a"])(u,e,s,!1,null,"ce3f278c",null);a["default"]=v.exports}}]);
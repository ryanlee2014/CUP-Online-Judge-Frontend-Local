(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-04491bce"],{1163:function(t,i,e){"use strict";e.r(i);var s=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"ui container"},[e("h2",{staticClass:"ui dividing header"},[t._v(t._s(t.$t("runtime information")))]),e("div",{staticClass:"ui segment same_width"},[e("div"),e("div",{directives:[{name:"show",rawName:"v-show",value:!t.diffmode,expression:"!diffmode"}]},[e("h3",{staticClass:"ui dividing header"},[t._v(t._s(t.$t("result")))]),e("div",{staticClass:"plain_text row",domProps:{textContent:t._s(t.info)}})]),e("div",{directives:[{name:"show",rawName:"v-show",value:t.diffmode,expression:"diffmode"}],staticClass:"ui grid"},[e("div",{staticClass:"row"},[e("div",{staticClass:"eight wide column"},[e("h3",{staticClass:"ui header"},[t._v(" "+t._s(t.$t("standard output"))+" ")])]),e("div",{staticClass:"eight wide column"},[e("h3",{staticClass:"ui header"},[t._v(" "+t._s(t.$t("user output"))+" ")])])])]),e("div",{staticClass:"margin"},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.diffmode,expression:"diffmode"}],staticStyle:{"min-width":"100%",height:"600px",border:"1px solid #ccc"},attrs:{id:"container"}})])])])},n=[],o=(e("466d"),e("1276"),e("ddb0"),e("9ab4")),a=e("2cd4"),d=e("60a3"),u=e("c2c6"),r=e("2ef0");let c=(()=>{let t=class extends(Object(d["b"])(a["a"])){constructor(){super(...arguments),this.info="",this.diffEditor=null,this.diffmode=!1}created(){this.solution_id=this.$route.params.solution_id}mounted(){document.title=`${this.solution_id} Runtime Information -- ${document.title}`,this.axios.get("/api/status/runtime_info/"+this.solution_id).then(({data:t})=>{const i=t.data.info;this.initContext(i)}).catch(({data:t})=>{this.info="您无权访问"})}initContext(t){let i=0,e=0,s=[],n=[],o=10;t=t.split("------测试输出前100行-----").join("[TestRunOut]").split("------用户输出前100行-----").join("[UserOut]").split("------测试输出(左)与用户输出(右)前200行的区别-----").join("[DIFF]");while(-1!==i&&-1!==e){if(i=t.indexOf("[TestRunOut]",i+1),e=t.indexOf("[UserOut]",e+1),-1===i||-1===e)break;if(s.push(t.substring(i,e)+"\n"),--o,o<=0)break}i=e=0,o=10;while(1){if(i=t.indexOf("[UserOut]",i+1),e=t.indexOf("[DIFF]",e+1),-1===i||-1===e)break;if(n.push(t.substring(i,e)+"\n"),console.log(t.substring(i,e)),--o,o<=0)break}const a=t.match(/[0-9A-Za-z]+\.out/g),d=s,c=n;s="",n="";let f=0;if(r["forEach"](d,(function(t){s+=a[f++]+"\n"+t})),f=0,r["forEach"](c,(function(t){n+=a[f++]+"\n"+t})),t&&t.length&&s&&s.length){this.diffmode=!0,s=s.split("[TestRunOut]").join(""),n=n.split("[UserOut]").join("");const t=u["editor"].createModel(s,"plain/text"),i=u["editor"].createModel(n,"plain/text");this.$forceUpdate(),this.$nextTick(()=>{const e=this.diffEditor=u["editor"].createDiffEditor(document.getElementById("container"),{scrollBeyondLastLine:!1});e.setModel({original:t,modified:i})})}else this.info=t}beforeDestroy(){this.diffEditor&&this.diffEditor.dispose()}};return t=Object(o["c"])([d["a"]],t),t})();var f=c,l=f,h=(e("95e8"),e("2877")),p=e("976f"),m=Object(h["a"])(l,s,n,!1,null,"376fc2bc",null);"function"===typeof p["default"]&&Object(p["default"])(m);i["default"]=m.exports},"7b49":function(t,i,e){},"95e8":function(t,i,e){"use strict";var s=e("7b49"),n=e.n(s);n.a},"976f":function(t,i,e){"use strict";var s=e("f151"),n=e.n(s);i["default"]=n.a},f151:function(t,i){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"zh-cn":{"standard output":"标准输出","user output":"用户输出"},"ja":{"standard output":"標準出力","user output":"ユーザー出力"},"en":{"standard output":"Standard Output","user output":"User Output"}}'),delete t.options._Ctor}}}]);
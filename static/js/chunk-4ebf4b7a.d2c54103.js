(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4ebf4b7a"],{"4a3b":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"ui container padding"},[i("div",{staticClass:"ui grid"},[i("div",{staticClass:"row"},[i("h2",{staticClass:"ui header"},[t._v(" "+t._s(t.$t("title"))+" ")])]),i("div",{staticClass:"two column row"},[i("div",{staticClass:"column"},[i("div",{staticClass:"ui input",staticStyle:{width:"100%"}},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],attrs:{type:"text"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}})])]),i("div",{staticClass:"column",staticStyle:{"z-index":"1700"}},[i("select",{staticClass:"ui search dropdown label selection",attrs:{multiple:""},on:{change:function(e){t.label=t.select(".label.selection.ui.dropdown").dropdown("get value")}}},t._l(t.all_label,(function(e){return i("option",{key:e,domProps:{value:e,textContent:t._s(e)}})})),0)])]),i("div",{staticClass:"three column row"},[i("div",{staticClass:"column"},[i("div",{staticClass:"ui labeled input"},[i("div",{staticClass:"ui label"},[t._v(" "+t._s(t.$t("time limit"))+" ")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.time,expression:"time"}],attrs:{type:"text"},domProps:{value:t.time},on:{input:function(e){e.target.composing||(t.time=e.target.value)}}})])]),i("div",{staticClass:"column"},[i("div",{staticClass:"ui labeled input"},[i("div",{staticClass:"ui label"},[t._v(" "+t._s(t.$t("memory"))+" ")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.memory,expression:"memory"}],attrs:{type:"text"},domProps:{value:t.memory},on:{input:function(e){e.target.composing||(t.memory=e.target.value)}}})])]),i("div",{staticClass:"column",staticStyle:{margin:"auto"}},[i("div",{staticClass:"ui toggle checkbox"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.spj,expression:"spj"}],attrs:{type:"checkbox"},domProps:{checked:t.spj,checked:Array.isArray(t.spj)?t._i(t.spj,null)>-1:t.spj},on:{change:function(e){var i=t.spj,a=e.target,s=!!a.checked;if(Array.isArray(i)){var l=null,n=t._i(i,l);a.checked?n<0&&(t.spj=i.concat([l])):n>-1&&(t.spj=i.slice(0,n).concat(i.slice(n+1)))}else t.spj=s}}}),i("label",[t._v("Special Judge")])])])]),i("div",{staticClass:"row"},[i("h2",{staticClass:"ui header"},[t._v(" "+t._s(t.$t("description"))+" ")])]),i("div",{staticClass:"row"},[i("mavon-editor",{ref:"description",attrs:{markInstance:t.descriptionInstance},model:{value:t.description,callback:function(e){t.description=e},expression:"description"}})],1),i("br"),i("div",{staticClass:"row"},[i("h2",{staticClass:"ui header"},[t._v(" "+t._s(t.$t("input"))+" ")])]),i("div",{staticClass:"row"},[i("mavon-editor",{ref:"input",attrs:{markInstance:t.inputInstance},model:{value:t.input,callback:function(e){t.input=e},expression:"input"}})],1),i("br"),i("div",{staticClass:"row"},[i("h2",{staticClass:"ui header"},[t._v(" "+t._s(t.$t("output"))+" ")])]),i("div",{staticClass:"row"},[i("mavon-editor",{ref:"output",attrs:{markInstance:t.outputInstance},model:{value:t.output,callback:function(e){t.output=e},expression:"output"}})],1),i("br"),i("div",{staticClass:"row"},[i("h2",{staticClass:"ui header"},[t._v(" "+t._s(t.$t("sampleinput"))+" ")])]),i("div",{staticClass:"row"},[i("div",{staticClass:"ui form",staticStyle:{"min-width":"85%"}},[i("div",{staticClass:"field"},[i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.sampleinput,expression:"sampleinput"}],domProps:{value:t.sampleinput},on:{input:function(e){e.target.composing||(t.sampleinput=e.target.value)}}})])])]),i("br"),i("div",{staticClass:"row"},[i("h2",{staticClass:"ui header"},[t._v(" "+t._s(t.$t("sampleoutput"))+" ")])]),i("div",{staticClass:"row"},[i("div",{staticClass:"ui form",staticStyle:{"min-width":"85%"}},[i("div",{staticClass:"field"},[i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.sampleoutput,expression:"sampleoutput"}],domProps:{value:t.sampleoutput},on:{input:function(e){e.target.composing||(t.sampleoutput=e.target.value)}}})])])]),i("div",{staticClass:"row"},[i("h2",{staticClass:"ui header"},[t._v(t._s(t.$t("problem file")))])]),i("div",{staticClass:"row"},t._l(t.files,(function(e){return i("div",{key:e,staticClass:"ui label"},[i("a",{attrs:{href:t.makeHref(e)}},[t._v(" "+t._s(e)+" ")]),i("i",{staticClass:"delete icon",on:{click:function(i){return t.removeFile(e)}}})])})),0),i("div",{staticClass:"row"},[i("div",{staticClass:"ten wide column"},[i("div",{staticClass:"ui grid"},[i("div",{staticClass:"row"},[i("div",{staticClass:"eight wide column"},[i("form",{ref:"upload_file_form"},[i("input",{ref:"file_input",staticStyle:{display:"none"},attrs:{name:"upload_file",type:"file"},on:{change:t.fileChanged}})]),i("form",{ref:"upload_multiple_file_form"},[i("input",{ref:"file_multiple_input",staticStyle:{display:"none"},attrs:{name:"upload_multiple_file",multiple:"multiple",type:"file"},on:{change:t.multipleFileChanged}})]),i("a",{staticClass:"ui button",on:{click:t.selectFile}},[t._v(t._s(t.uploadFileName))]),i("a",{staticClass:"ui primary button",on:{click:t.uploadFile}},[t._v(t._s(t.$t("submit")))])]),i("div",{staticClass:"eight wide column"},[i("a",{staticClass:"ui button",on:{click:t.selectMultipleFiles}},[t._v(t._s(t.$t("select multiple files")))]),i("a",{staticClass:"ui primary button",on:{click:t.uploadMultipleFiles}},[t._v(t._s(t.$t("submit multiple files")))])])])])]),t._m(0)]),t.uploadMultipleFileName&&t.uploadMultipleFileName.length>0?i("div",{staticClass:"row"},[i("div",{staticClass:"ui header"},[t._v(" "+t._s(t.$t("upload waiting list"))+" ")])]):t._e(),t.uploadMultipleFileName&&t.uploadMultipleFileName.length>0?i("div",{staticClass:"row"},t._l(t.uploadMultipleFileName,(function(e,a){return i("div",{key:a,staticClass:"ui label"},[i("a",[t._v(t._s(e))])])})),0):t._e(),i("div",{staticClass:"row"},[i("h2",{staticClass:"ui header"},[t._v(" "+t._s(t.$t("prepend code"))+" ")])]),i("div",{staticClass:"row"},[i("div",{staticClass:"four wide column"},[i("div",{staticClass:"ui attached vertical fluid pointing menu",staticStyle:{height:"370px","overflow-y":"scroll","overflow-x":"hidden"}},[i("a",{class:0===t.prependSelected?"active item":"item",on:{click:function(e){t.prependSelected=0}}},[t._v("C "),i("div",{staticClass:"ui right floated",staticStyle:{opacity:"0.4","margin-top":"8px","font-size":"0.7em"}},[t._v("GNU C99/C11 LLVM Clang ")])]),i("a",{class:1===t.prependSelected?"active item":"item",on:{click:function(e){t.prependSelected=1}}},[t._v("C++ "),i("div",{staticClass:"ui right floated",staticStyle:{opacity:"0.4","margin-top":"8px","font-size":"0.7em"}},[t._v("GNU C++11/C++89/C++17 LLVM Clang++ ")])]),i("a",{class:2===t.prependSelected?"active item":"item",on:{click:function(e){t.prependSelected=2}}},[t._v("Pascal "),i("div",{staticClass:"ui right floated",staticStyle:{opacity:"0.4","margin-top":"8px","font-size":"0.7em"}},[t._v("fpc Pascal ")])]),i("a",{class:3===t.prependSelected?"active item":"item",on:{click:function(e){t.prependSelected=3}}},[t._v("Java "),i("div",{staticClass:"ui right floated",staticStyle:{opacity:"0.4","margin-top":"8px","font-size":"0.7em"}},[t._v(" openJDK 1.6/1.7/1.8/1.10 ")])]),i("a",{class:16===t.prependSelected?"active item":"item",on:{click:function(e){t.prependSelected=16}}},[t._v("JavaScript "),i("div",{staticClass:"ui right floated",staticStyle:{opacity:"0.4","margin-top":"8px","font-size":"0.7em"}},[t._v(" NodeJS 10.13.0 ")])]),i("a",{class:6===t.prependSelected?"active item":"item",on:{click:function(e){t.prependSelected=6}}},[t._v("Python "),i("div",{staticClass:"ui right floated",staticStyle:{opacity:"0.4","margin-top":"8px","font-size":"0.7em"}},[t._v(" Python 2.7/3.6 PyPy2/3 ")])]),i("a",{class:9===t.prependSelected?"active item":"item",on:{click:function(e){t.prependSelected=9}}},[t._v("C# "),i("div",{staticClass:"ui right floated",staticStyle:{opacity:"0.4","margin-top":"8px","font-size":"0.7em"}},[t._v(" Mono ")])])])]),i("div",{staticClass:"ten wide column"},[i("monaco-editor",{attrs:{selected_language:t.prependSelected},model:{value:t.prepend[t.prependSelected],callback:function(e){t.$set(t.prepend,t.prependSelected,e)},expression:"prepend[prependSelected]"}})],1)]),i("div",{staticClass:"row"},[i("h2",{staticClass:"ui header"},[t._v(" "+t._s(t.$t("append code"))+" ")])]),i("div",{staticClass:"row"},[i("div",{staticClass:"four wide column"},[i("div",{staticClass:"ui attached vertical fluid pointing menu",staticStyle:{height:"370px","overflow-y":"scroll","overflow-x":"hidden"}},[i("a",{class:0===t.appendSelected?"active item":"item",on:{click:function(e){t.appendSelected=0}}},[t._v("C "),i("div",{staticClass:"ui right floated",staticStyle:{opacity:"0.4","margin-top":"8px","font-size":"0.7em"}},[t._v("GNU C99/C11 LLVM Clang ")])]),i("a",{class:1===t.appendSelected?"active item":"item",on:{click:function(e){t.appendSelected=1}}},[t._v("C++ "),i("div",{staticClass:"ui right floated",staticStyle:{opacity:"0.4","margin-top":"8px","font-size":"0.7em"}},[t._v("GNU C++11/C++89/C++17 LLVM Clang++ ")])]),i("a",{class:2===t.appendSelected?"active item":"item",on:{click:function(e){t.appendSelected=2}}},[t._v("Pascal "),i("div",{staticClass:"ui right floated",staticStyle:{opacity:"0.4","margin-top":"8px","font-size":"0.7em"}},[t._v("fpc Pascal ")])]),i("a",{class:3===t.appendSelected?"active item":"item",on:{click:function(e){t.appendSelected=3}}},[t._v("Java "),i("div",{staticClass:"ui right floated",staticStyle:{opacity:"0.4","margin-top":"8px","font-size":"0.7em"}},[t._v(" OpenJDK 1.6/1.7/1.8/1.10 ")])]),i("a",{class:16===t.appendSelected?"active item":"item",on:{click:function(e){t.appendSelected=16}}},[t._v("JavaScript "),i("div",{staticClass:"ui right floated",staticStyle:{opacity:"0.4","margin-top":"8px","font-size":"0.7em"}},[t._v(" NodeJS 10.13.0 ")])]),i("a",{class:6===t.appendSelected?"active item":"item",on:{click:function(e){t.appendSelected=6}}},[t._v("Python "),i("div",{staticClass:"ui right floated",staticStyle:{opacity:"0.4","margin-top":"8px","font-size":"0.7em"}},[t._v(" Python 2.7/3.6 PyPy2/3 ")])]),i("a",{class:9===t.appendSelected?"active item":"item",on:{click:function(e){t.appendSelected=9}}},[t._v("C# "),i("div",{staticClass:"ui right floated",staticStyle:{opacity:"0.4","margin-top":"8px","font-size":"0.7em"}},[t._v(" Mono ")])])])]),i("div",{staticClass:"ten wide column"},[i("monaco-editor",{attrs:{selected_language:t.appendSelected},model:{value:t.append[t.appendSelected],callback:function(e){t.$set(t.append,t.appendSelected,e)},expression:"append[appendSelected]"}})],1)]),"local"===t.from?i("div",{staticClass:"row"},[i("h2",{staticClass:"ui header"},[t._v(" "+t._s(t.$t("hint"))+" ")])]):t._e(),"local"===t.from?i("div",{staticClass:"row"},[i("mavon-editor",{ref:"hint",attrs:{markInstance:t.hintInstance,test:"1"},model:{value:t.hint,callback:function(e){t.hint=e},expression:"hint"}})],1):t._e(),i("a",{staticClass:"ui button",on:{click:t.submit}},[t._v(t._s(t.$t("submit")))])])])},s=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"six wide column"},[i("p")])}],l=(i("ddb0"),i("9ab4")),n=i("2cd4"),o=i("ec1c"),p=i("3865"),c=i("60a3"),d=i("986d"),r=i("1157"),u=i.n(r),m=i("2ef0");const h=u.a;let v=class extends(Object(c["b"])(n["a"])){constructor(){super(...arguments),this.title="",this.description="",this.time="",this.memory="",this.input="",this.output="",this.spj=!1,this.sampleinput="",this.sampleoutput="",this.uploadFileName="",this.uploadMultipleFileName=[],this.descriptionInstance=o["a"].newInstance(),this.inputInstance=o["a"].newInstance(),this.outputInstance=o["a"].newInstance(),this.hintInstance=o["a"].newInstance(),this.hint="",this.source="",this.from="local",this.label=[],this.all_label=[],this.prepend={},this.prependSelected=0,this.append={},this.appendSelected=0,this.files=[],this.id="0",this.select=h}created(){this.id=this.$route.params.problem_id,this.uploadFileName=this.$t("select file")}mounted(){document.title=`Problem ${this.id} Edit -- ${document.title}`,this.initData()}makeHref(t){return`/api/admin/problem/download/data/${this.id}/${t}`}PrependAppendLanguage(t,e,i){const a=this[t][e];"undefined"!==typeof a&&i.forEach(e=>{this[t][e]=a})}submit(){const t="local";this.PrependAppendLanguage("prepend",0,[21,13,28]),this.PrependAppendLanguage("prepend",1,[19,20,14,29]),this.PrependAppendLanguage("prepend",3,[23,24,27]),this.PrependAppendLanguage("append",3,[23,24,27]),this.PrependAppendLanguage("append",0,[21,13,28]),this.PrependAppendLanguage("append",1,[19,20,14,29]);const e=this.id,i={imageData:{}},a={payload:[],problemId:e};Object.keys(this.prepend).forEach(t=>{this.prepend[t].trim().length>0&&a.payload.push({language:parseInt(t),code:this.prepend[t]})});const s={payload:[],problemId:e};Object.keys(this.append).forEach(t=>{this.append[t].trim().length>0&&s.payload.push({language:parseInt(t),code:this.append[t]})});for(const n of this.$children){if("undefined"===typeof n.markdownIt)continue;const t=n.$vnode.data.model;i[t.expression]=t.value,i.imageData[t.expression]=n.markdownIt.__image||{}}i.time=this.time,i.memory=this.memory,i.title=this.title,i.sampleinput=this.sampleinput,i.sampleoutput=this.sampleoutput,i.spj=Number(this.spj),i.hint=this.hint;const l=this.label;i.label=Object(d["a"])(l).join(" "),this.axios.post(`/api/problem/${this.source}/${e}`,{json:i}).then(({data:i})=>{"OK"===i.status&&(this.axios.get(`/api/problem/${t}?id=${e}`),alert("提交成功"))}),console.log(a),console.log(s),this.axios.post("/api/problem/prefile/prepend",a),this.axios.post("/api/problem/prefile/append",s)}imageHandler(t,e){const i={0:"description",1:"input",2:"output",3:"hint"};let a=-1;m["forEach"](e.data,(e,s)=>{this.$refs[i[t]].markdownIt.image_add_with_check(e.name,e.data),a=Math.max(a,parseInt(e.name))}),this.$refs[i[t]].$children[0].num=a+1,this.$refs[i[t]].iRender()}initData(){const t=this,e=this.id;this.axios.get("/api/problem/local",{params:{id:this.id,raw:""}}).then(({data:i})=>{const a=i.problem,s={title:a.title,description:a.description,time:a.time_limit,memory:a.memory_limit,input:a.input,output:a.output,spj:!!parseInt(a.spj),sampleinput:a.sample_input,sampleoutput:a.sample_output,hint:a.hint,source:"local",label:a.label?a.label.split(" "):[],all_label:[],files:[]};Object.assign(this,s),this.axios.get(`/api/problem/${this.source}/?label=true`).then(({data:e})=>{const i=h(".label.selection.ui.dropdown");t.all_label=e.data;const a=t.label;i.dropdown({allowAdditions:!0}).on("click",(function(){t.label=i.dropdown("get value")}));for(let t=0;t<a.length;++t)i.dropdown("set selected",a[t])}),this.initMarkdown("description",e,0),this.initMarkdown("input",e,1),this.initMarkdown("output",e,2),this.initMarkdown("hint",e,3),this.initFiles()}),this.initPrependAppendCode("prepend","prepend"),this.initPrependAppendCode("append","append")}initFiles(){this.axios.get("/api/file/"+this.id).then(({data:t})=>{"OK"===t.status&&(this.files=t.data)})}initPrependAppendCode(t,e){this.axios.get(`/api/problem/prefile/${e}/${this.id}`).then(({data:e})=>{if(e=e.data,e.payload&&e.payload.length&&e.payload.length>0){const i=e.payload;i.forEach(e=>{this[t][e.language]=e.code})}})}initMarkdown(t,e,i){this.axios.get(`/api/photo/${t}/${e}`).then(({data:t})=>{"OK"===t.status&&this.imageHandler(i,t)})}selectFile(){this.$refs.file_input.click()}selectMultipleFiles(){this.$refs.file_multiple_input.click()}fileChanged(t){this.uploadFileName=t.target.files[0].name}multipleFileChanged(t){this.uploadMultipleFileName=Array.from(t.target.files).map(t=>t.name)}uploadFile(){this.baseUploadFile("/api/admin/problem/data/set/"+this.id,"upload_file_form"),this.uploadFileName=""}baseUploadFile(t,e){const i=new FormData(this.$refs[e]),a={onUploadProgress:function(t){const e=Math.round(100*t.loaded/t.total);console.log(e)}};return this.axios.post(t,i,a).then(({data:t})=>{alert("上传成功"),this.initFiles()})}uploadMultipleFiles(){this.baseUploadFile("/api/admin/problem/data/set/multiple/"+this.id,"upload_multiple_file_form"),this.uploadMultipleFileName=[]}removeFile(t){const e=confirm(`是否删除${t}?`);e&&this.axios.get(`/api/admin/problem/data/remove/${this.id}/${t}`).then(({data:e})=>{alert(`文件: ${t}已删除`),this.initFiles()})}};v=Object(l["a"])([Object(c["a"])({components:{monacoEditor:p["a"]},i18n:{messages:{"zh-cn":{"submit multiple files":"上传多个文件","select multiple files":"选择多个文件","upload waiting list":"等待上传列表"},en:{"submit multiple files":"Submit multiple files","select multiple files":"Select multiple files","upload waiting list":"Waiting list"},ja:{"submit multiple files":"複数のファイルアップロード","select multiple files":"複数のファイル選択","upload waiting list":"待ちリスト"}}}})],v);var f=v,g=f,_=i("2877"),C=Object(_["a"])(g,a,s,!1,null,"61b35667",null);e["default"]=C.exports},"986d":function(t,e,i){"use strict";function a(t){return t.filter((function(t,e,i){return i.indexOf(t)===e}))}i.d(e,"a",(function(){return a}))}}]);
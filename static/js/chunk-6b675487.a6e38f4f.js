(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6b675487"],{"102d":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("contest-editor",{attrs:{contestInfo:t.data,externalUserListText:t.userListText,externalProblemSelected:t.problemSelected},on:{postData:t.add}})},i=[],n=a("9ab4"),l=a("2cd4"),c=a("f5f7"),o=a("7755"),r=a("60a3");let d=class extends(Object(r["b"])(l["a"],c["a"])){};d=Object(n["c"])([Object(r["a"])({components:{ContestEditor:o["a"]}})],d);var p=d,u=p,v=a("2877"),h=Object(v["a"])(u,s,i,!1,null,"35082f03",null);e["default"]=h.exports},7755:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"lazy-container",rawName:"v-lazy-container",value:{selector:"img"},expression:"{ selector: 'img' }"}],staticClass:"ui container padding"},[a("div",{staticClass:"ui form"},[a("div",{staticClass:"field"},[a("label",[t._v(t._s(t.$t("title")))]),a("div",{staticClass:"two fields"},[a("div",{staticClass:"field"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],attrs:{name:"title",placeholder:"contest title",type:"text"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}})]),a("div",{staticClass:"field"},[a("div",{staticClass:"four fields"},[a("div",{staticClass:"field"},[a("div",{ref:"public",staticClass:"ui toggle checkbox"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.Private,expression:"Private"}],staticClass:"hidden",attrs:{tabindex:"0",type:"checkbox"},domProps:{checked:Array.isArray(t.Private)?t._i(t.Private,null)>-1:t.Private},on:{click:function(e){t.Private=!t.Private},change:function(e){var a=t.Private,s=e.target,i=!!s.checked;if(Array.isArray(a)){var n=null,l=t._i(a,n);s.checked?l<0&&(t.Private=a.concat([n])):l>-1&&(t.Private=a.slice(0,l).concat(a.slice(l+1)))}else t.Private=i}}}),a("label",[t._v(t._s(t.$t("private contest")))])])]),a("div",{staticClass:"field"},[a("div",{ref:"defunct",staticClass:"ui toggle checkbox"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.defunct,expression:"defunct"}],staticClass:"hidden",attrs:{tabindex:"0",type:"checkbox"},domProps:{checked:Array.isArray(t.defunct)?t._i(t.defunct,null)>-1:t.defunct},on:{click:function(e){t.defunct=!t.defunct},change:function(e){var a=t.defunct,s=e.target,i=!!s.checked;if(Array.isArray(a)){var n=null,l=t._i(a,n);s.checked?l<0&&(t.defunct=a.concat([n])):l>-1&&(t.defunct=a.slice(0,l).concat(a.slice(l+1)))}else t.defunct=i}}}),a("label",[t._v(t._s(t.$t("hide contest")))])])]),a("div",{staticClass:"field"},[a("div",{ref:"contest",staticClass:"ui toggle checkbox"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.ContestMode,expression:"ContestMode"}],staticClass:"hidden",attrs:{tabindex:"0",type:"checkbox"},domProps:{checked:Array.isArray(t.ContestMode)?t._i(t.ContestMode,null)>-1:t.ContestMode},on:{click:function(e){t.ContestMode=!t.ContestMode},change:function(e){var a=t.ContestMode,s=e.target,i=!!s.checked;if(Array.isArray(a)){var n=null,l=t._i(a,n);s.checked?l<0&&(t.ContestMode=a.concat([n])):l>-1&&(t.ContestMode=a.slice(0,l).concat(a.slice(l+1)))}else t.ContestMode=i}}}),a("label",[t._v(t._s(t.$t("contest mode available only")))])])]),a("div",{staticClass:"field"},[a("div",{ref:"show_all_ranklist",staticClass:"ui toggle checkbox"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.showAllRanklist,expression:"showAllRanklist"}],staticClass:"hidden",attrs:{tabindex:"0",type:"checkbox"},domProps:{checked:Array.isArray(t.showAllRanklist)?t._i(t.showAllRanklist,null)>-1:t.showAllRanklist},on:{change:function(e){var a=t.showAllRanklist,s=e.target,i=!!s.checked;if(Array.isArray(a)){var n=null,l=t._i(a,n);s.checked?l<0&&(t.showAllRanklist=a.concat([n])):l>-1&&(t.showAllRanklist=a.slice(0,l).concat(a.slice(l+1)))}else t.showAllRanklist=i}}}),a("label",[t._v(t._s(t.$t("show_all_ranklist")))])])])])])])]),a("div",{staticClass:"field"},[a("div",{staticClass:"two fields"},[a("div",{staticClass:"field"},[a("label",[t._v(t._s(t.$t("start time")))]),a("div",{staticClass:"ui calendar",attrs:{id:"rangestart"}},[a("div",{staticClass:"ui input left icon"},[a("i",{staticClass:"calendar icon"}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.startTime,expression:"startTime"}],attrs:{id:"startTime",placeholder:"Start",type:"text",autocomplete:"off"},domProps:{value:t.startTime},on:{input:function(e){e.target.composing||(t.startTime=e.target.value)}}})])])]),a("div",{staticClass:"field"},[a("label",[t._v(t._s(t.$t("end time")))]),a("div",{staticClass:"ui calendar",attrs:{id:"rangeend"}},[a("div",{staticClass:"ui input left icon"},[a("i",{staticClass:"calendar icon"}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.endTime,expression:"endTime"}],attrs:{id:"endTime",placeholder:"End",type:"text",autocomplete:"off"},domProps:{value:t.endTime},on:{input:function(e){e.target.composing||(t.endTime=e.target.value)}}})])])])])]),a("div",{staticClass:"field"},[a("div",{staticClass:"three fields"},[a("div",{staticClass:"field"},[a("label",[t._v(t._s(t.$t("contest password")))]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{name:"password",placeholder:"contest password",type:"text"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),a("div",{staticClass:"field"},[a("label",[t._v(t._s(t.$t("limit classroom")))]),a("div",{staticClass:"ui fluid multiple search selection dropdown",attrs:{id:"limitClassroom"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.classroomSelected,expression:"classroomSelected"}],attrs:{name:"country",type:"hidden"},domProps:{value:t.classroomSelected},on:{change:function(e){t.classroomSelected=e.target.value},input:function(e){e.target.composing||(t.classroomSelected=e.target.value)}}}),a("i",{staticClass:"dropdown icon"}),a("div",{staticClass:"default text"},[t._v(t._s(t.$t("limit classroom")))]),t._m(0)])]),a("div",{staticClass:"field"},[a("label",[t._v(t._s(t.$t("limit hostname")))]),a("div",{staticClass:"ui fluid search dropdown selection",attrs:{size:"1",id:"limitHostname"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.hostname,expression:"hostname"}],attrs:{type:"hidden"},domProps:{value:t.hostname},on:{change:function(e){t.hostname=e.target.value},input:function(e){e.target.composing||(t.hostname=e.target.value)}}}),a("i",{staticClass:"dropdown icon"}),a("div",{staticClass:"default text"},[t._v("All")]),t._m(1)])])])]),a("div",{staticClass:"field"},[a("div",{staticClass:"field"},[a("label",[t._v(t._s(t.$t("select language")))]),a("div",{staticClass:"ui fluid multiple search selection dropdown",attrs:{id:"selectedLanguage"}},[a("input",{attrs:{name:"country",type:"hidden"},on:{change:function(e){t.languageSelected=e.target.value}}}),a("i",{staticClass:"dropdown icon"}),a("div",{staticClass:"default text"},[t._v(t._s(t.$t("select language")))]),a("div",{staticClass:"menu"},t._l(t.languageSet,(function(e,s){return a("div",{key:s,staticClass:"item",attrs:{"data-value":s}},[t._v(" "+t._s(e)+" ")])})),0)])])]),a("div",{staticClass:"field"},[a("div",{staticClass:"field"},[a("label",[t._v(t._s(t.$t("problem list")))]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.problemSelected,expression:"problemSelected"}],attrs:{type:"text"},domProps:{value:t.problemSelected},on:{input:function(e){e.target.composing||(t.problemSelected=e.target.value)}}})])]),a("div",{staticClass:"field"},[a("label",[t._v(t._s(t.$t("description")))]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.description,expression:"description"}],domProps:{value:t.description},on:{input:function(e){e.target.composing||(t.description=e.target.value)}}})]),a("div",{staticClass:"field"},[a("div",{staticClass:"two fields"},[a("div",{staticClass:"field"},[a("label",[t._v(t._s(t.$t("selected user")))]),a("div",{staticClass:"ui middle aligned animated list"},t._l(t.userList,(function(e,s){return a("div",{key:s,staticClass:"item"},[a("img",{staticClass:"ui avatar image",attrs:{"data-src":"/avatar/"+e+".jpg"}}),a("div",{staticClass:"content"},[a("div",{staticClass:"header"},[t._v(t._s(e))])])])})),0)]),a("div",{staticClass:"field"},[a("label",[t._v(t._s(t.$t("selected user input")))]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.userListText,expression:"userListText"}],staticStyle:{"min-height":"100%",height:"100%","box-sizing":"border-box"},domProps:{value:t.userListText},on:{input:function(e){e.target.composing||(t.userListText=e.target.value)}}})])])]),a("div",{staticClass:"padding field"},[a("div",{staticClass:"two fields"},[a("div",{staticClass:"field"}),a("div",{staticClass:"field"},[a("div",{staticClass:"fields"},[t._m(2),a("div",{staticClass:"field"},[a("button",{staticClass:"ui primary button",on:{click:t.emitData}},[t._v(" Submit ")])])])])])])])])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"menu"},[a("div",{staticClass:"item",attrs:{"data-value":"403"}},[t._v(" 403 ")]),a("div",{staticClass:"item",attrs:{"data-value":"404"}},[t._v(" 404 ")]),a("div",{staticClass:"item",attrs:{"data-value":"405"}},[t._v(" 405 ")]),a("div",{staticClass:"item",attrs:{"data-value":"502"}},[t._v(" 502 ")]),a("div",{staticClass:"item",attrs:{"data-value":"503"}},[t._v(" 503 ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"menu"},[a("div",{staticClass:"item",attrs:{"data-value":""}},[t._v("All"),a("i",{staticClass:"dropdown icon",staticStyle:{visibility:"hidden"}})]),a("div",{staticClass:"item",attrs:{"data-value":"acm.cup.edu.cn"}},[t._v(" acm.cup.edu.cn ")]),a("div",{staticClass:"item",attrs:{"data-value":"www.cupacm.com"}},[t._v(" www.cupacm.com ")]),a("div",{staticClass:"item",attrs:{"data-value":"oj.cupacm.com"}},[t._v(" oj.cupacm.com ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"field"},[a("button",{staticClass:"ui secondary button"},[t._v(" Reset ")])])}],n=(a("e01a"),a("1276"),a("ddb0"),a("9ab4")),l=a("b2ab"),c=a("2ef0"),o=a.n(c),r=a("1157"),d=a.n(r),p=a("60a3"),u=a("2b0e");const v=d.a;let h=class extends u["a"]{constructor(){super(...arguments),this.contest_id="",this.title="",this.defunct=!1,this.Private=!0,this.ContestMode=!1,this.startTime="",this.endTime="",this.password="",this.description="",this.languageSelected="",this.classroomSelected="",this.problemSelected="",this.showAllRanklist=!1,this.languageSet=l.language_name.local,this.hostname="",this.userListText="",this.userList=[]}created(){this.contest_id=this.$route.params.contest_id}debug(t,e){console.log(t),"undefined"!==typeof e&&console.log(e)}LanguageSelectedToLangmask(){const t=this.languageSet.length;let e=2**t-1;const a=this.languageSelected.split(",").map(t=>parseInt(t));return a.forEach(t=>{e^=2**t}),e}LangmaskToLanguageSelected(t){let e=0;const a=Array.from(Array(this.languageSet.length).keys());while(t>0)1===(1&t)&&a.splice(a.indexOf(e),1),t>>=1,++e;this.languageSelected=a.join(",")}emitData(){const t=o.a.cloneDeep(this.$data);t.langmask=this.LanguageSelectedToLangmask(),t.Public=!t.Private,this.$emit("postData",t)}initjQuery(){const t=this,e=v("#rangestart"),a=v("#rangeend");e.calendar({initialDate:this.startTime?this.startTime:null,endCalendar:a,onChange(e){t.startTime=new Date(e)}}),a.calendar({initialDate:this.endTime?this.endTime:null,startCalendar:e,onChange(e){t.endTime=new Date(e)}}),v(".ui.dropdown").dropdown(),v("#limitClassroom").dropdown("set selected",this.classroomSelected.split(",")),v("#limitHostname").dropdown("set selected",this.hostname.split(",")),v("#selectedLanguage").dropdown("set selected",this.languageSelected.split(",")),v(this.$refs.public).checkbox(this.Private?"check":"uncheck"),v(this.$refs.contest).checkbox(this.ContestMode?"check":"uncheck"),v(this.$refs.defunct).checkbox(this.defunct?"check":"uncheck"),v(this.$refs.show_all_ranklist).checkbox(this.showAllRanklist?"check":"uncheck")}mounted(){this.initjQuery()}onUserListTextChanged(t,e){e!==t&&(0===t.trim().length?this.userList=[]:this.userList=t.split("\n").map(t=>t.trim()).filter(t=>t.length>0),this.$nextTick(()=>{this.$Lazyload.lazyLoadHandler(),this.$forceUpdate()}))}onExternalUserListTextChanged(t){this.userListText=t}onExternalProblemSelected(t){this.problemSelected=t}onContestInfoChanged(t){if(t.data.length>0){const e=t.data[0];this.title=e.title,this.startTime=new Date(e.start_time),this.endTime=new Date(e.end_time),this.description=e.description,this.defunct="Y"===e.defunct,this.Private=!!e.private,this.ContestMode=!!e.cmod_visible,this.LangmaskToLanguageSelected(e.langmask),this.password=e.password,this.classroomSelected=e.ip_policy,this.showAllRanklist=!!e.show_all_ranklist,this.hostname=e.limit_hostname?e.limit_hostname:"",this.$nextTick(()=>{this.initjQuery()})}}};Object(n["c"])([Object(p["c"])({default:()=>({})})],h.prototype,"contestInfo",void 0),Object(n["c"])([Object(p["c"])({default:""})],h.prototype,"externalUserListText",void 0),Object(n["c"])([Object(p["c"])({default:""})],h.prototype,"externalProblemSelected",void 0),Object(n["c"])([Object(p["d"])("userListText")],h.prototype,"onUserListTextChanged",null),Object(n["c"])([Object(p["d"])("externalUserListText")],h.prototype,"onExternalUserListTextChanged",null),Object(n["c"])([Object(p["d"])("externalProblemSelected")],h.prototype,"onExternalProblemSelected",null),Object(n["c"])([Object(p["d"])("contestInfo")],h.prototype,"onContestInfoChanged",null),h=Object(n["c"])([Object(p["a"])({i18n:{messages:{"zh-cn":{show_all_ranklist:"显示详细排行信息"},en:{show_all_ranklist:"Show All Rank Detail"},ja:{show_all_ranklist:"ランキング詳しく内容表示"}}}})],h);var m=h,g=m,C=a("2877"),f=Object(C["a"])(g,s,i,!1,null,"a7170302",null);e["a"]=f.exports},b2ab:function(t){t.exports=JSON.parse('{"language_name":{"local":["C11","C++17","Pascal","Java","Ruby","Bash","Python 2","PHP","Perl","C#","Objective-C","FreeBasic","Schema","Clang","Clang++","Lua","JavaScript","Go","Python 3","C++11","C++98","C99","Kotlin","Java 8","Java 7","PyPy","PyPy3","Java 6","Clang11","Clang++17","C++20","Kotlin Native","Other Language"],"common":["C","C++","Pascal","Java","Ruby","Bash","Python","PHP","Perl","C#","Obj-C","FreeBasic","Scheme","Clang","Clang++","Lua","JavaScript","Go","Python","C++","C++","C","Kotlin","Java","Java","Python","Python","Java","C","C++","C++","Kotlin","Other Language","Other Language"],"hdu":["G++","","C++","GCC","","JAVA"],"poj":["G++","GCC","JAVA","Pascal","C++","C","Fortran"],"uva":["","ANSI C","JAVA","C++","Pascal","C++11","Python 3"],"jsk":["C","C++","C++14","Java","Python","Python3","Ruby","Blockly","Octave"],"vijos":["C","C++","C#","Pascal","Java","Python 2","Python 3","PHP","Rust","Haskell","JavaScript","Go","Ruby"],"bzoj":["C","C++","C#","Pascal","Java","Python 2","Python 3","PHP","Rust","Haskell","JavaScript","Go","Ruby"]},"language_suffix":{"local":["c","cpp","pas","java","rb","sh","py","php","perl","cs","objc","fbc","","c","cpp","lua","js","go","py","cpp","cpp","c","kt","java","java","py","py","java","c","cpp","cpp","kotlin"]},"markdown_language":{"local":["c++","c++","pascal","java","ruby","bash","python","php","perl","csharp","objectivec","freebasic","schema","c++","c++","lua","javascript","go","python","c++","c++","c++","kotlin","java","java","python","python","java","c++","c++","c++","kotlin",""],"hdu":["c++","","c++","c++","","java"],"poj":["c++","c++","java","pascal","c++","c++","fortran"],"uva":["","c++","java","c++","pascal","c++","python"],"jsk":["c++","c++","c++","java","python","python","ruby","blockly","octave"],"vijos":["c++","c++","csharp","pascal","java","python","python","php","rust","haskell","javascript","go","ruby"],"bzoj":["c++","c++","csharp","pascal","java","python","python","php","rust","haskell","javascript","go","ruby"]},"language_template":{"local":["c_cpp","c_cpp","pascal","java","ruby","bash","python","php","perl","csharp","objectivec","text","scheme","c_cpp","c_cpp","lua","javascript","go","python","c_cpp","c_cpp","c_cpp","java","java","java","python","python","java","c_cpp","c_cpp","c_cpp","java"]},"langmask":171440,"judge_color":["waiting","running","compiling","running","accepted","wrong_answer","wrong_answer","time_limit_exceeded","memory_limit_exceeded","output_limit_exceeded","runtime_error","compile_error","running","running","running","wrong_answer"],"icon_list":["hourglass half","spinner","spinner","spinner","checkmark","minus","remove","clock","microchip","print","bomb","code","spinner","spinner","spinner","remove"],"result":{"cn":["等待","等待重判","编译中","运行并评判","答案正确","格式错误","答案错误","时间超限","内存超限","输出超限","运行错误","编译错误","编译成功","运行完成","已加入队列","提交被拒绝","系统错误",""]},"language":{"cn":{"status":{"solution_id":"运行号","user":"用户","user_id":"帐号","nick":"昵称","problem_id":"问题","result":"结果","language":"语言","contest_id":"竞赛号","memory":"内存","time":"耗时","length":"长度","submit_time":"提交时间","judger":"判题机"},"ranklist":{"rank":"名次","user":"用户名","nick":"昵称","accept":"通过数量","submit":"提交","ratio":"通过率","vjudge_accept":"VJ通过数量"}},"jp":{"status":{"solution_id":"ランニングナンバー","user":"ユーサー","user_id":"アカウント","nick":"ニック","problem_id":"問題番号","result":"結果","language":"言語","contest_id":"コンテスト番号","memory":"メモリー","time":"時間","length":"長さ","submit_time":"提出時間","judger":"審判するコンピューター"}}},"language_icon":["devicon-c-plain","devicon-cplusplus-plain","devicon-devicon-plain","devicon-java-plain","devicon-ruby-plain","devicon-devicon-plain","devicon-python-plain","devicon-php-plain","devicon-devicon-plain","devicon-csharp-plain","devicon-devicon-plain","devicon-devicon-plain","devicon-devicon-plain","devicon-c-plain","devicon-cplusplus-plain","devicon-devicon-plain","devicon-javascript-plain","devicon-go-plain","devicon-python-plain","devicon-cplusplus-plain","devicon-cplusplus-plain","devicon-c-plain","devicon-devicon-plain","devicon-java-plain","devicon-java-plain","devicon-python-plain","devicon-python-plain","devicon-java-plain","devicon-c-plain","devicon-cplusplus-plain","devicon-cplusplus-plain","devicon-devicon-plain"],"judge_icon":["hourglass half","spinner","spinner","spinner","checkmark","minus","remove","clock","microchip","print","bomb","code","spinner","spinner","spinner","remove"]}')},f5f7:function(t,e,a){"use strict";a("1276"),a("ddb0");var s=a("9ab4"),i=a("2ef0"),n=a.n(i),l=a("60a3"),c=a("fe4d");let o=class extends(Object(l["b"])(c["a"])){constructor(){super(...arguments),this.contest_id="0",this.data={},this.userListText="",this.problemSelected=""}mounted(){this.initData()}add(t){t=this.dataFormat(t),this.axios.post("/api/admin/contest/add",t).then(({data:t})=>{alert(this.$t("success")),this.routerBack()}).catch(t=>{alert(this.$t("error"))})}created(){this.contest_id=this.$route.params.contest_id}initData(){this.axios.get("/api/admin/contest/edit/"+this.contest_id).then(({data:t})=>{t.data.length>0&&(this.data=t)}),this.axios.get("/api/admin/contest/edit/user/"+this.contest_id).then(({data:t})=>{t.data.length>0&&(this.userListText=t.data.map(t=>t.user_id).join("\n"))}),this.axios.get("/api/contest/problem/"+this.contest_id).then(({data:t})=>{"OK"===t.status&&(this.problemSelected=t.data.map(t=>t.pid).join(","))})}dataFormat(t){return t=n.a.cloneDeep(t),delete t.userListText,delete t.languageSelected,delete t.languageSet,t.problemSelected=t.problemSelected.split(",").map(t=>parseInt(t)),"string"===typeof t.hostname&&"null"!==t.hostname&&null!==t.hostname||(t.hostname=""),t}};o=Object(s["c"])([l["a"]],o),e["a"]=o},fe4d:function(t,e,a){"use strict";var s=a("9ab4"),i=a("2b0e"),n=a("60a3");let l=class extends i["a"]{routerBack(t){window.history.length<=1?this.$router.push(t||"/"):this.$router.back()}};l=Object(s["c"])([n["a"]],l),e["a"]=l}}]);
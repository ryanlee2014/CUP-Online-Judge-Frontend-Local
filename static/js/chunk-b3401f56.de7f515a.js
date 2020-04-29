(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b3401f56"],{"2fa3":function(e,t,a){"use strict";a("e260"),a("1276"),a("ddb0");var i=a("9ab4"),s=a("2b0e"),n=a("2ef0"),c=a.n(n),l=a("60a3");let o=class extends s["a"]{constructor(){super(...arguments),this.contest_id="0",this.data={},this.userListText="",this.problemSelected=""}mounted(){this.initData()}add(e){e=this.dataFormat(e),this.axios.post("/api/admin/contest/add",e).then(({data:e})=>{"OK"===e.status?alert(this.$t("success")):alert(this.$t("error"))})}created(){this.contest_id=this.$route.params.contest_id}initData(){this.axios.get("/api/admin/contest/edit/"+this.contest_id).then(({data:e})=>{e.data.length>0&&(this.data=e)}),this.axios.get("/api/admin/contest/edit/user/"+this.contest_id).then(({data:e})=>{e.data.length>0&&(this.userListText=e.data.map(e=>e.user_id).join("\n"))}),this.axios.get("/api/contest/problem/"+this.contest_id).then(({data:e})=>{"OK"===e.status&&(this.problemSelected=e.data.map(e=>e.pid).join(","))})}dataFormat(e){return e=c.a.cloneDeep(e),delete e.userListText,delete e.languageSelected,delete e.languageSet,e.problemSelected=e.problemSelected.split(",").map(e=>parseInt(e)),"string"===typeof e.hostname&&"null"!==e.hostname&&null!==e.hostname||(e.hostname=""),e}};o=Object(i["c"])([l["a"]],o),t["a"]=o},"34ee":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("contest-editor",{on:{postData:e.add}})},s=[],n=a("9ab4"),c=a("2cd4"),l=a("2fa3"),o=a("7755"),d=a("60a3");let r=class extends(Object(d["b"])(c["a"],l["a"])){};r=Object(n["c"])([Object(d["a"])({components:{ContestEditor:o["a"]}})],r);var p=r,u=p,v=a("2877"),m=Object(v["a"])(u,i,s,!1,null,"494a1e92",null);t["default"]=m.exports},7755:function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"lazy-container",rawName:"v-lazy-container",value:{selector:"img"},expression:"{ selector: 'img' }"}],staticClass:"ui container padding"},[a("div",{staticClass:"ui form"},[a("div",{staticClass:"field"},[a("label",[e._v(e._s(e.$t("title")))]),a("div",{staticClass:"two fields"},[a("div",{staticClass:"field"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.title,expression:"title"}],attrs:{name:"title",placeholder:"contest title",type:"text"},domProps:{value:e.title},on:{input:function(t){t.target.composing||(e.title=t.target.value)}}})]),a("div",{staticClass:"field"},[a("div",{staticClass:"three fields"},[a("div",{staticClass:"field"},[a("div",{ref:"public",staticClass:"ui toggle checkbox"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.Private,expression:"Private"}],staticClass:"hidden",attrs:{tabindex:"0",type:"checkbox"},domProps:{checked:Array.isArray(e.Private)?e._i(e.Private,null)>-1:e.Private},on:{click:function(t){e.Private=!e.Private},change:function(t){var a=e.Private,i=t.target,s=!!i.checked;if(Array.isArray(a)){var n=null,c=e._i(a,n);i.checked?c<0&&(e.Private=a.concat([n])):c>-1&&(e.Private=a.slice(0,c).concat(a.slice(c+1)))}else e.Private=s}}}),a("label",[e._v(e._s(e.$t("private contest")))])])]),a("div",{staticClass:"field"},[a("div",{ref:"defunct",staticClass:"ui toggle checkbox"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.defunct,expression:"defunct"}],staticClass:"hidden",attrs:{tabindex:"0",type:"checkbox"},domProps:{checked:Array.isArray(e.defunct)?e._i(e.defunct,null)>-1:e.defunct},on:{click:function(t){e.defunct=!e.defunct},change:function(t){var a=e.defunct,i=t.target,s=!!i.checked;if(Array.isArray(a)){var n=null,c=e._i(a,n);i.checked?c<0&&(e.defunct=a.concat([n])):c>-1&&(e.defunct=a.slice(0,c).concat(a.slice(c+1)))}else e.defunct=s}}}),a("label",[e._v(e._s(e.$t("hide contest")))])])]),a("div",{staticClass:"field"},[a("div",{ref:"contest",staticClass:"ui toggle checkbox"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.ContestMode,expression:"ContestMode"}],staticClass:"hidden",attrs:{tabindex:"0",type:"checkbox"},domProps:{checked:Array.isArray(e.ContestMode)?e._i(e.ContestMode,null)>-1:e.ContestMode},on:{click:function(t){e.ContestMode=!e.ContestMode},change:function(t){var a=e.ContestMode,i=t.target,s=!!i.checked;if(Array.isArray(a)){var n=null,c=e._i(a,n);i.checked?c<0&&(e.ContestMode=a.concat([n])):c>-1&&(e.ContestMode=a.slice(0,c).concat(a.slice(c+1)))}else e.ContestMode=s}}}),a("label",[e._v(e._s(e.$t("contest mode available only")))])])])])])])]),a("div",{staticClass:"field"},[a("div",{staticClass:"two fields"},[a("div",{staticClass:"field"},[a("label",[e._v(e._s(e.$t("start time")))]),a("div",{staticClass:"ui calendar",attrs:{id:"rangestart"}},[a("div",{staticClass:"ui input left icon"},[a("i",{staticClass:"calendar icon"}),a("input",{directives:[{name:"model",rawName:"v-model",value:e.startTime,expression:"startTime"}],attrs:{id:"startTime",placeholder:"Start",type:"text",autocomplete:"off"},domProps:{value:e.startTime},on:{input:function(t){t.target.composing||(e.startTime=t.target.value)}}})])])]),a("div",{staticClass:"field"},[a("label",[e._v(e._s(e.$t("end time")))]),a("div",{staticClass:"ui calendar",attrs:{id:"rangeend"}},[a("div",{staticClass:"ui input left icon"},[a("i",{staticClass:"calendar icon"}),a("input",{directives:[{name:"model",rawName:"v-model",value:e.endTime,expression:"endTime"}],attrs:{id:"endTime",placeholder:"End",type:"text",autocomplete:"off"},domProps:{value:e.endTime},on:{input:function(t){t.target.composing||(e.endTime=t.target.value)}}})])])])])]),a("div",{staticClass:"field"},[a("div",{staticClass:"three fields"},[a("div",{staticClass:"field"},[a("label",[e._v(e._s(e.$t("contest password")))]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{name:"password",placeholder:"contest password",type:"text"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})]),a("div",{staticClass:"field"},[a("label",[e._v(e._s(e.$t("limit classroom")))]),a("div",{staticClass:"ui fluid multiple search selection dropdown",attrs:{id:"limitClassroom"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.classroomSelected,expression:"classroomSelected"}],attrs:{name:"country",type:"hidden"},domProps:{value:e.classroomSelected},on:{change:function(t){e.classroomSelected=t.target.value},input:function(t){t.target.composing||(e.classroomSelected=t.target.value)}}}),a("i",{staticClass:"dropdown icon"}),a("div",{staticClass:"default text"},[e._v(e._s(e.$t("limit classroom")))]),e._m(0)])]),a("div",{staticClass:"field"},[a("label",[e._v(e._s(e.$t("limit hostname")))]),a("div",{staticClass:"ui fluid search dropdown selection",attrs:{size:"1",id:"limitHostname"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.hostname,expression:"hostname"}],attrs:{type:"hidden"},domProps:{value:e.hostname},on:{change:function(t){e.hostname=t.target.value},input:function(t){t.target.composing||(e.hostname=t.target.value)}}}),a("i",{staticClass:"dropdown icon"}),a("div",{staticClass:"default text"},[e._v("All")]),e._m(1)])])])]),a("div",{staticClass:"field"},[a("div",{staticClass:"field"},[a("label",[e._v(e._s(e.$t("select language")))]),a("div",{staticClass:"ui fluid multiple search selection dropdown",attrs:{id:"selectedLanguage"}},[a("input",{attrs:{name:"country",type:"hidden"},on:{change:function(t){e.languageSelected=t.target.value}}}),a("i",{staticClass:"dropdown icon"}),a("div",{staticClass:"default text"},[e._v(e._s(e.$t("select language")))]),a("div",{staticClass:"menu"},e._l(e.languageSet,(function(t,i){return a("div",{key:i,staticClass:"item",attrs:{"data-value":i}},[e._v(" "+e._s(t)+" ")])})),0)])])]),a("div",{staticClass:"field"},[a("div",{staticClass:"field"},[a("label",[e._v(e._s(e.$t("problem list")))]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.problemSelected,expression:"problemSelected"}],attrs:{type:"text"},domProps:{value:e.problemSelected},on:{input:function(t){t.target.composing||(e.problemSelected=t.target.value)}}})])]),a("div",{staticClass:"field"},[a("label",[e._v(e._s(e.$t("description")))]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.description,expression:"description"}],domProps:{value:e.description},on:{input:function(t){t.target.composing||(e.description=t.target.value)}}})]),a("div",{staticClass:"field"},[a("div",{staticClass:"two fields"},[a("div",{staticClass:"field"},[a("label",[e._v(e._s(e.$t("selected user")))]),a("div",{staticClass:"ui middle aligned animated list"},e._l(e.userList,(function(t,i){return a("div",{key:i,staticClass:"item"},[a("img",{staticClass:"ui avatar image",attrs:{"data-src":"/avatar/"+t+".jpg"}}),a("div",{staticClass:"content"},[a("div",{staticClass:"header"},[e._v(e._s(t))])])])})),0)]),a("div",{staticClass:"field"},[a("label",[e._v(e._s(e.$t("selected user input")))]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.userListText,expression:"userListText"}],staticStyle:{"min-height":"100%",height:"100%","box-sizing":"border-box"},domProps:{value:e.userListText},on:{input:function(t){t.target.composing||(e.userListText=t.target.value)}}})])])]),a("div",{staticClass:"padding field"},[a("div",{staticClass:"two fields"},[a("div",{staticClass:"field"}),a("div",{staticClass:"field"},[a("div",{staticClass:"fields"},[e._m(2),a("div",{staticClass:"field"},[a("button",{staticClass:"ui primary button",on:{click:e.emitData}},[e._v(" Submit ")])])])])])])])])},s=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"menu"},[a("div",{staticClass:"item",attrs:{"data-value":"403"}},[e._v(" 403 ")]),a("div",{staticClass:"item",attrs:{"data-value":"404"}},[e._v(" 404 ")]),a("div",{staticClass:"item",attrs:{"data-value":"405"}},[e._v(" 405 ")]),a("div",{staticClass:"item",attrs:{"data-value":"502"}},[e._v(" 502 ")]),a("div",{staticClass:"item",attrs:{"data-value":"503"}},[e._v(" 503 ")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"menu"},[a("div",{staticClass:"item",attrs:{"data-value":""}},[e._v("All"),a("i",{staticClass:"dropdown icon",staticStyle:{visibility:"hidden"}})]),a("div",{staticClass:"item",attrs:{"data-value":"acm.cup.edu.cn"}},[e._v(" acm.cup.edu.cn ")]),a("div",{staticClass:"item",attrs:{"data-value":"www.cupacm.com"}},[e._v(" www.cupacm.com ")]),a("div",{staticClass:"item",attrs:{"data-value":"oj.cupacm.com"}},[e._v(" oj.cupacm.com ")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"field"},[a("button",{staticClass:"ui secondary button"},[e._v(" Reset ")])])}],n=(a("e01a"),a("c975"),a("e260"),a("a434"),a("1276"),a("498a"),a("ddb0"),a("9ab4")),c=a("b2ab"),l=a("2ef0"),o=a.n(l),d=a("1157"),r=a.n(d),p=a("60a3"),u=a("2b0e");const v=r.a;let m=class extends u["a"]{constructor(){super(...arguments),this.contest_id="",this.title="",this.defunct=!1,this.Private=!0,this.ContestMode=!1,this.startTime="",this.endTime="",this.password="",this.description="",this.languageSelected="",this.classroomSelected="",this.problemSelected="",this.languageSet=c.language_name.local,this.hostname="",this.userListText="",this.userList=[]}created(){this.contest_id=this.$route.params.contest_id}debug(e,t){console.log(e),"undefined"!==typeof t&&console.log(t)}LanguageSelectedToLangmask(){const e=this.languageSet.length;let t=(1<<e)-1;const a=this.languageSelected.split(",").map(e=>parseInt(e));return a.forEach(e=>{t^=1<<e}),t}LangmaskToLanguageSelected(e){let t=0;const a=Array.from(Array(this.languageSet.length).keys());while(e>0)1===(1&e)&&a.splice(a.indexOf(t),1),e>>=1,++t;this.languageSelected=a.join(",")}emitData(){const e=o.a.cloneDeep(this.$data);e.langmask=this.LanguageSelectedToLangmask(),e.Public=!e.Private,this.$emit("postData",e)}initjQuery(){const e=this,t=v("#rangestart"),a=v("#rangeend");t.calendar({initialDate:this.startTime?this.startTime:null,endCalendar:a,onChange(t){e.startTime=new Date(t)}}),a.calendar({initialDate:this.endTime?this.endTime:null,startCalendar:t,onChange(t){e.endTime=new Date(t)}}),v(".ui.dropdown").dropdown(),v("#limitClassroom").dropdown("set selected",this.classroomSelected.split(",")),v("#limitHostname").dropdown("set selected",this.hostname.split(",")),v("#selectedLanguage").dropdown("set selected",this.languageSelected.split(",")),v(this.$refs.public).checkbox(this.Private?"uncheck":"check"),v(this.$refs.contest).checkbox(this.ContestMode?"check":"uncheck"),v(this.$refs.defunct).checkbox(this.defunct?"check":"uncheck")}mounted(){this.initjQuery()}onUserListTextChanged(e,t){t!==e&&(0===e.trim().length?this.userList=[]:this.userList=e.split("\n").map(e=>e.trim()).filter(e=>e.length>0),this.$nextTick(()=>{this.$Lazyload.lazyLoadHandler(),this.$forceUpdate()}))}onExternalUserListTextChanged(e){this.userListText=e}onExternalProblemSelected(e){this.problemSelected=e}onContestInfoChanged(e){if(e.data.length>0){const t=e.data[0];this.title=t.title,this.startTime=new Date(t.start_time),this.endTime=new Date(t.end_time),this.description=t.description,this.defunct="Y"===t.defunct,this.Private=!!t.private,this.ContestMode=!!t.cmod_visible,this.LangmaskToLanguageSelected(t.langmask),this.password=t.password,this.classroomSelected=t.ip_policy,this.hostname=t.limit_hostname?t.limit_hostname:"",this.$nextTick(()=>{this.initjQuery()})}}};Object(n["c"])([Object(p["c"])({default:()=>({})})],m.prototype,"contestInfo",void 0),Object(n["c"])([Object(p["c"])({default:""})],m.prototype,"externalUserListText",void 0),Object(n["c"])([Object(p["c"])({default:""})],m.prototype,"externalProblemSelected",void 0),Object(n["c"])([Object(p["d"])("userListText")],m.prototype,"onUserListTextChanged",null),Object(n["c"])([Object(p["d"])("externalUserListText")],m.prototype,"onExternalUserListTextChanged",null),Object(n["c"])([Object(p["d"])("externalProblemSelected")],m.prototype,"onExternalProblemSelected",null),Object(n["c"])([Object(p["d"])("contestInfo")],m.prototype,"onContestInfoChanged",null),m=Object(n["c"])([p["a"]],m);var h=m,g=h,C=a("2877"),f=Object(C["a"])(g,i,s,!1,null,"58e82d56",null);t["a"]=f.exports},b2ab:function(e){e.exports=JSON.parse('{"language_name":{"local":["C11","C++17","Pascal","Java 10","Ruby","Bash","Python 2","PHP","Perl","C#","Objective-C","FreeBasic","Schema","Clang","Clang++","Lua","JavaScript","Go","Python 3","C++11","C++98","C99","Kotlin","Java 8","Java 7","PyPy","PyPy3","Java 6","Clang11","Clang++17","C++20","Kotlin Native","Other Language"],"common":["C","C++","Pascal","Java","Ruby","Bash","Python","PHP","Perl","C#","Obj-C","FreeBasic","Scheme","Clang","Clang++","Lua","JavaScript","Go","Python","C++","C++","C","Kotlin","Java","Java","Python","Python","Java","C","C++","C++","Kotlin","Other Language","Other Language"],"hdu":["G++","","C++","GCC","","JAVA"],"poj":["G++","GCC","JAVA","Pascal","C++","C","Fortran"],"uva":["","ANSI C","JAVA","C++","Pascal","C++11","Python 3"],"jsk":["C","C++","C++14","Java","Python","Python3","Ruby","Blockly","Octave"],"vijos":["C","C++","C#","Pascal","Java","Python 2","Python 3","PHP","Rust","Haskell","JavaScript","Go","Ruby"],"bzoj":["C","C++","C#","Pascal","Java","Python 2","Python 3","PHP","Rust","Haskell","JavaScript","Go","Ruby"]},"language_suffix":{"local":["c","cpp","pas","java","rb","sh","py","php","perl","cs","objc","fbc","","c","cpp","lua","js","go","py","cpp","cpp","c","kt","java","java","py","py","java","c","cpp","cpp","kotlin"]},"markdown_language":{"local":["c++","c++","pascal","java","ruby","bash","python","php","perl","csharp","objectivec","freebasic","schema","c++","c++","lua","javascript","go","python","c++","c++","c++","kotlin","java","java","python","python","java","c++","c++","c++","kotlin",""],"hdu":["c++","","c++","c++","","java"],"poj":["c++","c++","java","pascal","c++","c++","fortran"],"uva":["","c++","java","c++","pascal","c++","python"],"jsk":["c++","c++","c++","java","python","python","ruby","blockly","octave"],"vijos":["c++","c++","csharp","pascal","java","python","python","php","rust","haskell","javascript","go","ruby"],"bzoj":["c++","c++","csharp","pascal","java","python","python","php","rust","haskell","javascript","go","ruby"]},"language_template":{"local":["c_cpp","c_cpp","pascal","java","ruby","bash","python","php","perl","csharp","objectivec","text","scheme","c_cpp","c_cpp","lua","javascript","go","python","c_cpp","c_cpp","c_cpp","java","java","java","python","python","java","c_cpp","c_cpp","c_cpp","java"]},"langmask":171440,"judge_color":["waiting","running","compiling","running","accepted","wrong_answer","wrong_answer","time_limit_exceeded","memory_limit_exceeded","output_limit_exceeded","runtime_error","compile_error","running","running","running","wrong_answer"],"icon_list":["hourglass half","spinner","spinner","spinner","checkmark","minus","remove","clock","microchip","print","bomb","code","spinner","spinner","spinner","remove"],"result":{"cn":["等待","等待重判","编译中","运行并评判","答案正确","格式错误","答案错误","时间超限","内存超限","输出超限","运行错误","编译错误","编译成功","运行完成","已加入队列","提交被拒绝","系统错误",""]},"language":{"cn":{"status":{"solution_id":"运行号","user":"用户","user_id":"帐号","nick":"昵称","problem_id":"问题","result":"结果","language":"语言","contest_id":"竞赛号","memory":"内存","time":"耗时","length":"长度","submit_time":"提交时间","judger":"判题机"},"ranklist":{"rank":"名次","user":"用户名","nick":"昵称","accept":"通过数量","submit":"提交","ratio":"通过率","vjudge_accept":"VJ通过数量"}},"jp":{"status":{"solution_id":"ランニングナンバー","user":"ユーサー","user_id":"アカウント","nick":"ニック","problem_id":"問題番号","result":"結果","language":"言語","contest_id":"コンテスト番号","memory":"メモリー","time":"時間","length":"長さ","submit_time":"提出時間","judger":"審判するコンピューター"}}},"language_icon":["devicon-c-plain","devicon-cplusplus-plain","devicon-devicon-plain","devicon-java-plain","devicon-ruby-plain","devicon-devicon-plain","devicon-python-plain","devicon-php-plain","devicon-devicon-plain","devicon-csharp-plain","devicon-devicon-plain","devicon-devicon-plain","devicon-devicon-plain","devicon-c-plain","devicon-cplusplus-plain","devicon-devicon-plain","devicon-javascript-plain","devicon-go-plain","devicon-python-plain","devicon-cplusplus-plain","devicon-cplusplus-plain","devicon-c-plain","devicon-devicon-plain","devicon-java-plain","devicon-java-plain","devicon-python-plain","devicon-python-plain","devicon-java-plain","devicon-c-plain","devicon-cplusplus-plain","devicon-cplusplus-plain","devicon-devicon-plain"],"judge_icon":["hourglass half","spinner","spinner","spinner","checkmark","minus","remove","clock","microchip","print","bomb","code","spinner","spinner","spinner","remove"]}')}}]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-60a2836a"],{"2cd4":function(e,t,a){"use strict";var i=a("d4ec"),s=a("bee2"),n=a("99de"),c=a("7e84"),o=a("262e"),l=a("9ab4"),r=a("2b0e"),d=a("60a3"),u=a("3657"),p=a("0443"),v=function(e){function t(){var e;return Object(i["a"])(this,t),e=Object(n["a"])(this,Object(c["a"])(t).apply(this,arguments)),e.customConfig=p,e}return Object(o["a"])(t,e),Object(s["a"])(t,[{key:"mounted",value:function(){u["a"].init(this.$store.getters.homepage),document.title=p.title}}]),t}(r["a"]);v=Object(l["c"])([d["a"]],v),t["a"]=v},"2fa3":function(e,t,a){"use strict";a("a15b"),a("d81d"),a("ac1f"),a("1276");var i=a("d4ec"),s=a("bee2"),n=a("99de"),c=a("7e84"),o=a("262e"),l=a("9ab4"),r=a("2b0e"),d=a("2ef0"),u=a.n(d),p=a("60a3"),v=function(e){function t(){var e;return Object(i["a"])(this,t),e=Object(n["a"])(this,Object(c["a"])(t).apply(this,arguments)),e.contest_id="0",e.data={},e.userListText="",e.problemSelected="",e}return Object(o["a"])(t,e),Object(s["a"])(t,[{key:"mounted",value:function(){this.initData()}},{key:"add",value:function(e){var t=this;e=this.dataFormat(e),this.axios.post("/api/admin/contest/add",e).then((function(e){var a=e.data;"OK"===a.status?alert(t.$t("success")):alert(t.$t("error"))}))}},{key:"created",value:function(){this.contest_id=this.$route.params.contest_id}},{key:"initData",value:function(){var e=this;this.axios.get("/api/admin/contest/edit/".concat(this.contest_id)).then((function(t){var a=t.data;a.data.length>0&&(e.data=a)})),this.axios.get("/api/admin/contest/edit/user/".concat(this.contest_id)).then((function(t){var a=t.data;a.data.length>0&&(e.userListText=a.data.map((function(e){return e.user_id})).join("\n"))})),this.axios.get("/api/contest/problem/".concat(this.contest_id)).then((function(t){var a=t.data;"OK"===a.status&&(e.problemSelected=a.data.map((function(e){return e.pid})).join(","))}))}},{key:"dataFormat",value:function(e){return e=u.a.cloneDeep(e),delete e.userListText,delete e.languageSelected,delete e.languageSet,e.problemSelected=e.problemSelected.split(",").map((function(e){return parseInt(e)})),"string"===typeof e.hostname&&"null"!==e.hostname&&null!==e.hostname||(e.hostname=""),e}}]),t}(r["a"]);v=Object(l["c"])([p["a"]],v),t["a"]=v},"4df4":function(e,t,a){"use strict";var i=a("0366"),s=a("7b0b"),n=a("9bdd"),c=a("e95a"),o=a("50c4"),l=a("8418"),r=a("35a1");e.exports=function(e){var t,a,d,u,p,v,m=s(e),h="function"==typeof this?this:Array,g=arguments.length,f=g>1?arguments[1]:void 0,C=void 0!==f,b=r(m),y=0;if(C&&(f=i(f,g>2?arguments[2]:void 0,2)),void 0==b||h==Array&&c(b))for(t=o(m.length),a=new h(t);t>y;y++)v=C?f(m[y],y):m[y],l(a,y,v);else for(u=b.call(m),p=u.next,a=new h;!(d=p.call(u)).done;y++)v=C?n(u,f,[d.value,y],!0):d.value,l(a,y,v);return a.length=y,a}},7755:function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"lazy-container",rawName:"v-lazy-container",value:{selector:"img"},expression:"{ selector: 'img' }"}],staticClass:"ui container padding"},[a("div",{staticClass:"ui form"},[a("div",{staticClass:"field"},[a("label",[e._v(e._s(e.$t("title")))]),a("div",{staticClass:"two fields"},[a("div",{staticClass:"field"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.title,expression:"title"}],attrs:{name:"title",placeholder:"contest title",type:"text"},domProps:{value:e.title},on:{input:function(t){t.target.composing||(e.title=t.target.value)}}})]),a("div",{staticClass:"field"},[a("div",{staticClass:"three fields"},[a("div",{staticClass:"field"},[a("div",{ref:"public",staticClass:"ui toggle checkbox"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.Private,expression:"Private"}],staticClass:"hidden",attrs:{tabindex:"0",type:"checkbox"},domProps:{checked:Array.isArray(e.Private)?e._i(e.Private,null)>-1:e.Private},on:{click:function(t){e.Private=!e.Private},change:function(t){var a=e.Private,i=t.target,s=!!i.checked;if(Array.isArray(a)){var n=null,c=e._i(a,n);i.checked?c<0&&(e.Private=a.concat([n])):c>-1&&(e.Private=a.slice(0,c).concat(a.slice(c+1)))}else e.Private=s}}}),a("label",[e._v(e._s(e.$t("private contest")))])])]),a("div",{staticClass:"field"},[a("div",{ref:"defunct",staticClass:"ui toggle checkbox"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.defunct,expression:"defunct"}],staticClass:"hidden",attrs:{tabindex:"0",type:"checkbox"},domProps:{checked:Array.isArray(e.defunct)?e._i(e.defunct,null)>-1:e.defunct},on:{click:function(t){e.defunct=!e.defunct},change:function(t){var a=e.defunct,i=t.target,s=!!i.checked;if(Array.isArray(a)){var n=null,c=e._i(a,n);i.checked?c<0&&(e.defunct=a.concat([n])):c>-1&&(e.defunct=a.slice(0,c).concat(a.slice(c+1)))}else e.defunct=s}}}),a("label",[e._v(e._s(e.$t("hide contest")))])])]),a("div",{staticClass:"field"},[a("div",{ref:"contest",staticClass:"ui toggle checkbox"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.ContestMode,expression:"ContestMode"}],staticClass:"hidden",attrs:{tabindex:"0",type:"checkbox"},domProps:{checked:Array.isArray(e.ContestMode)?e._i(e.ContestMode,null)>-1:e.ContestMode},on:{click:function(t){e.ContestMode=!e.ContestMode},change:function(t){var a=e.ContestMode,i=t.target,s=!!i.checked;if(Array.isArray(a)){var n=null,c=e._i(a,n);i.checked?c<0&&(e.ContestMode=a.concat([n])):c>-1&&(e.ContestMode=a.slice(0,c).concat(a.slice(c+1)))}else e.ContestMode=s}}}),a("label",[e._v(e._s(e.$t("contest mode available only")))])])])])])])]),a("div",{staticClass:"field"},[a("div",{staticClass:"two fields"},[a("div",{staticClass:"field"},[a("label",[e._v(e._s(e.$t("start time")))]),a("div",{staticClass:"ui calendar",attrs:{id:"rangestart"}},[a("div",{staticClass:"ui input left icon"},[a("i",{staticClass:"calendar icon"}),a("input",{directives:[{name:"model",rawName:"v-model",value:e.startTime,expression:"startTime"}],attrs:{id:"startTime",placeholder:"Start",type:"text",autocomplete:"off"},domProps:{value:e.startTime},on:{input:function(t){t.target.composing||(e.startTime=t.target.value)}}})])])]),a("div",{staticClass:"field"},[a("label",[e._v(e._s(e.$t("end time")))]),a("div",{staticClass:"ui calendar",attrs:{id:"rangeend"}},[a("div",{staticClass:"ui input left icon"},[a("i",{staticClass:"calendar icon"}),a("input",{directives:[{name:"model",rawName:"v-model",value:e.endTime,expression:"endTime"}],attrs:{id:"endTime",placeholder:"End",type:"text",autocomplete:"off"},domProps:{value:e.endTime},on:{input:function(t){t.target.composing||(e.endTime=t.target.value)}}})])])])])]),a("div",{staticClass:"field"},[a("div",{staticClass:"three fields"},[a("div",{staticClass:"field"},[a("label",[e._v(e._s(e.$t("contest password")))]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{name:"password",placeholder:"contest password",type:"text"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})]),a("div",{staticClass:"field"},[a("label",[e._v(e._s(e.$t("limit classroom")))]),a("div",{staticClass:"ui fluid multiple search selection dropdown",attrs:{id:"limitClassroom"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.classroomSelected,expression:"classroomSelected"}],attrs:{name:"country",type:"hidden"},domProps:{value:e.classroomSelected},on:{change:function(t){e.classroomSelected=t.target.value},input:function(t){t.target.composing||(e.classroomSelected=t.target.value)}}}),a("i",{staticClass:"dropdown icon"}),a("div",{staticClass:"default text"},[e._v(e._s(e.$t("limit classroom")))]),e._m(0)])]),a("div",{staticClass:"field"},[a("label",[e._v(e._s(e.$t("limit hostname")))]),a("div",{staticClass:"ui fluid search dropdown selection",attrs:{size:"1",id:"limitHostname"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.hostname,expression:"hostname"}],attrs:{type:"hidden"},domProps:{value:e.hostname},on:{change:function(t){e.hostname=t.target.value},input:function(t){t.target.composing||(e.hostname=t.target.value)}}}),a("i",{staticClass:"dropdown icon"}),a("div",{staticClass:"default text"},[e._v("All")]),e._m(1)])])])]),a("div",{staticClass:"field"},[a("div",{staticClass:"field"},[a("label",[e._v(e._s(e.$t("select language")))]),a("div",{staticClass:"ui fluid multiple search selection dropdown",attrs:{id:"selectedLanguage"}},[a("input",{attrs:{name:"country",type:"hidden"},on:{change:function(t){e.languageSelected=t.target.value}}}),a("i",{staticClass:"dropdown icon"}),a("div",{staticClass:"default text"},[e._v(e._s(e.$t("select language")))]),a("div",{staticClass:"menu"},e._l(e.languageSet,(function(t,i){return a("div",{key:i,staticClass:"item",attrs:{"data-value":i}},[e._v(" "+e._s(t)+" ")])})),0)])])]),a("div",{staticClass:"field"},[a("div",{staticClass:"field"},[a("label",[e._v(e._s(e.$t("problem list")))]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.problemSelected,expression:"problemSelected"}],attrs:{type:"text"},domProps:{value:e.problemSelected},on:{input:function(t){t.target.composing||(e.problemSelected=t.target.value)}}})])]),a("div",{staticClass:"field"},[a("label",[e._v(e._s(e.$t("description")))]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.description,expression:"description"}],domProps:{value:e.description},on:{input:function(t){t.target.composing||(e.description=t.target.value)}}})]),a("div",{staticClass:"field"},[a("div",{staticClass:"two fields"},[a("div",{staticClass:"field"},[a("label",[e._v(e._s(e.$t("selected user")))]),a("div",{staticClass:"ui middle aligned animated list"},e._l(e.userList,(function(t,i){return a("div",{key:i,staticClass:"item"},[a("img",{staticClass:"ui avatar image",attrs:{"data-src":"/avatar/"+t+".jpg"}}),a("div",{staticClass:"content"},[a("div",{staticClass:"header"},[e._v(e._s(t))])])])})),0)]),a("div",{staticClass:"field"},[a("label",[e._v(e._s(e.$t("selected user input")))]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.userListText,expression:"userListText"}],staticStyle:{"min-height":"100%",height:"100%","box-sizing":"border-box"},domProps:{value:e.userListText},on:{input:function(t){t.target.composing||(e.userListText=t.target.value)}}})])])]),a("div",{staticClass:"padding field"},[a("div",{staticClass:"two fields"},[a("div",{staticClass:"field"}),a("div",{staticClass:"field"},[a("div",{staticClass:"fields"},[e._m(2),a("div",{staticClass:"field"},[a("button",{staticClass:"ui primary button",on:{click:e.emitData}},[e._v(" Submit ")])])])])])])])])},s=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"menu"},[a("div",{staticClass:"item",attrs:{"data-value":"403"}},[e._v(" 403 ")]),a("div",{staticClass:"item",attrs:{"data-value":"404"}},[e._v(" 404 ")]),a("div",{staticClass:"item",attrs:{"data-value":"405"}},[e._v(" 405 ")]),a("div",{staticClass:"item",attrs:{"data-value":"502"}},[e._v(" 502 ")]),a("div",{staticClass:"item",attrs:{"data-value":"503"}},[e._v(" 503 ")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"menu"},[a("div",{staticClass:"item",attrs:{"data-value":""}},[e._v("All"),a("i",{staticClass:"dropdown icon",staticStyle:{visibility:"hidden"}})]),a("div",{staticClass:"item",attrs:{"data-value":"acm.cup.edu.cn"}},[e._v(" acm.cup.edu.cn ")]),a("div",{staticClass:"item",attrs:{"data-value":"www.cupacm.com"}},[e._v(" www.cupacm.com ")]),a("div",{staticClass:"item",attrs:{"data-value":"oj.cupacm.com"}},[e._v(" oj.cupacm.com ")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"field"},[a("button",{staticClass:"ui secondary button"},[e._v(" Reset ")])])}],n=(a("a4d3"),a("e01a"),a("4de4"),a("4160"),a("a630"),a("c975"),a("a15b"),a("d81d"),a("a434"),a("d3b7"),a("ac1f"),a("3ca3"),a("1276"),a("498a"),a("159b"),a("ddb0"),a("d4ec")),c=a("bee2"),o=a("99de"),l=a("7e84"),r=a("262e"),d=a("9ab4"),u=a("b2ab"),p=a("2ef0"),v=a.n(p),m=a("1157"),h=a.n(m),g=a("60a3"),f=a("2b0e"),C=h.a,b=function(e){function t(){var e;return Object(n["a"])(this,t),e=Object(o["a"])(this,Object(l["a"])(t).apply(this,arguments)),e.contest_id="",e.title="",e.defunct=!1,e.Private=!0,e.ContestMode=!1,e.startTime="",e.endTime="",e.password="",e.description="",e.languageSelected="",e.classroomSelected="",e.problemSelected="",e.languageSet=u.language_name.local,e.hostname="",e.userListText="",e.userList=[],e}return Object(r["a"])(t,e),Object(c["a"])(t,[{key:"created",value:function(){this.contest_id=this.$route.params.contest_id}},{key:"debug",value:function(e,t){console.log(e),"undefined"!==typeof t&&console.log(t)}},{key:"LanguageSelectedToLangmask",value:function(){var e=this.languageSet.length,t=(1<<e)-1,a=this.languageSelected.split(",").map((function(e){return parseInt(e)}));return a.forEach((function(e){t^=1<<e})),t}},{key:"LangmaskToLanguageSelected",value:function(e){var t=0,a=Array.from(Array(this.languageSet.length).keys());while(e>0)1===(1&e)&&a.splice(a.indexOf(t),1),e>>=1,++t;this.languageSelected=a.join(",")}},{key:"emitData",value:function(){var e=v.a.cloneDeep(this.$data);e.langmask=this.LanguageSelectedToLangmask(),e.Public=!e.Private,this.$emit("postData",e)}},{key:"initjQuery",value:function(){var e=this,t=C("#rangestart"),a=C("#rangeend");t.calendar({initialDate:this.startTime?this.startTime:null,endCalendar:a,onChange:function(t){e.startTime=new Date(t)}}),a.calendar({initialDate:this.endTime?this.endTime:null,startCalendar:t,onChange:function(t){e.endTime=new Date(t)}}),C(".ui.dropdown").dropdown(),C("#limitClassroom").dropdown("set selected",this.classroomSelected.split(",")),C("#limitHostname").dropdown("set selected",this.hostname.split(",")),C("#selectedLanguage").dropdown("set selected",this.languageSelected.split(",")),C(this.$refs.public).checkbox(this.Private?"uncheck":"check"),C(this.$refs.contest).checkbox(this.ContestMode?"check":"uncheck"),C(this.$refs.defunct).checkbox(this.defunct?"check":"uncheck")}},{key:"mounted",value:function(){this.initjQuery()}},{key:"onUserListTextChanged",value:function(e,t){var a=this;t!==e&&(0===e.trim().length?this.userList=[]:this.userList=e.split("\n").map((function(e){return e.trim()})).filter((function(e){return e.length>0})),this.$nextTick((function(){a.$Lazyload.lazyLoadHandler(),a.$forceUpdate()})))}},{key:"onExternalUserListTextChanged",value:function(e){this.userListText=e}},{key:"onExternalProblemSelected",value:function(e){this.problemSelected=e}},{key:"onContestInfoChanged",value:function(e){var t=this;if(e.data.length>0){var a=e.data[0];this.title=a.title,this.startTime=new Date(a.start_time),this.endTime=new Date(a.end_time),this.description=a.description,this.defunct="Y"===a.defunct,this.Private=!!a.private,this.ContestMode=!!a.cmod_visible,this.LangmaskToLanguageSelected(a.langmask),this.password=a.password,this.classroomSelected=a.ip_policy,this.hostname=a.limit_hostname?a.limit_hostname:"",this.$nextTick((function(){t.initjQuery()}))}}}]),t}(f["a"]);Object(d["c"])([Object(g["c"])({default:function(){return{}}})],b.prototype,"contestInfo",void 0),Object(d["c"])([Object(g["c"])({default:""})],b.prototype,"externalUserListText",void 0),Object(d["c"])([Object(g["c"])({default:""})],b.prototype,"externalProblemSelected",void 0),Object(d["c"])([Object(g["d"])("userListText")],b.prototype,"onUserListTextChanged",null),Object(d["c"])([Object(g["d"])("externalUserListText")],b.prototype,"onExternalUserListTextChanged",null),Object(d["c"])([Object(g["d"])("externalProblemSelected")],b.prototype,"onExternalProblemSelected",null),Object(d["c"])([Object(g["d"])("contestInfo")],b.prototype,"onContestInfoChanged",null),b=Object(d["c"])([g["a"]],b);var y=b,_=y,j=a("2877"),k=Object(j["a"])(_,i,s,!1,null,"58e82d56",null);t["a"]=k.exports},a630:function(e,t,a){var i=a("23e7"),s=a("4df4"),n=a("1c7e"),c=!n((function(e){Array.from(e)}));i({target:"Array",stat:!0,forced:c},{from:s})},b2ab:function(e){e.exports=JSON.parse('{"language_name":{"local":["C11","C++17","Pascal","Java 10","Ruby","Bash","Python 2","PHP","Perl","C#","Objective-C","FreeBasic","Schema","Clang","Clang++","Lua","JavaScript","Go","Python 3","C++11","C++98","C99","Kotlin","Java 8","Java 7","PyPy","PyPy3","Java 6","Clang11","Clang++17","C++20","Other Language"],"common":["C","C++","Pascal","Java","Ruby","Bash","Python","PHP","Perl","C#","Obj-C","FreeBasic","Scheme","Clang","Clang++","Lua","JavaScript","Go","Python","C++","C++","C","Kotlin","Java","Java","Python","Python","Java","C","C++","Other Language","Other Language"],"hdu":["G++","","C++","GCC","","JAVA"],"poj":["G++","GCC","JAVA","Pascal","C++","C","Fortran"],"uva":["","ANSI C","JAVA","C++","Pascal","C++11","Python 3"],"jsk":["C","C++","C++14","Java","Python","Python3","Ruby","Blockly","Octave"],"vijos":["C","C++","C#","Pascal","Java","Python 2","Python 3","PHP","Rust","Haskell","JavaScript","Go","Ruby"],"bzoj":["C","C++","C#","Pascal","Java","Python 2","Python 3","PHP","Rust","Haskell","JavaScript","Go","Ruby"]},"language_suffix":{"local":["c","cpp","pas","java","rb","sh","py","php","perl","cs","objc","fbc","","c","cpp","lua","js","go","py","cpp","cpp","c","kt","java","java","py","py","java","c","cpp"]},"markdown_language":{"local":["c++","c++","pascal","java","ruby","bash","python","php","perl","csharp","objectivec","freebasic","schema","c++","c++","lua","javascript","go","python","c++","c++","c++","kotlin","java","java","python","python","java","c++","c++",""],"hdu":["c++","","c++","c++","","java"],"poj":["c++","c++","java","pascal","c++","c++","fortran"],"uva":["","c++","java","c++","pascal","c++","python"],"jsk":["c++","c++","c++","java","python","python","ruby","blockly","octave"],"vijos":["c++","c++","csharp","pascal","java","python","python","php","rust","haskell","javascript","go","ruby"],"bzoj":["c++","c++","csharp","pascal","java","python","python","php","rust","haskell","javascript","go","ruby"]},"language_template":{"local":["c_cpp","c_cpp","pascal","java","ruby","bash","python","php","perl","csharp","objectivec","text","scheme","c_cpp","c_cpp","lua","javascript","go","python","c_cpp","c_cpp","c_cpp","java","java","java","python","python","java","c_cpp","c_cpp"]},"langmask":171440,"judge_color":["waiting","running","compiling","running","accepted","wrong_answer","wrong_answer","time_limit_exceeded","memory_limit_exceeded","output_limit_exceeded","runtime_error","compile_error","running","running","running","wrong_answer"],"icon_list":["hourglass half","spinner","spinner","spinner","checkmark","minus","remove","clock","microchip","print","bomb","code","spinner","spinner","spinner","remove"],"result":{"cn":["等待","等待重判","编译中","运行并评判","答案正确","格式错误","答案错误","时间超限","内存超限","输出超限","运行错误","编译错误","编译成功","运行完成","已加入队列","提交被拒绝","系统错误",""]},"language":{"cn":{"status":{"solution_id":"运行号","user":"用户","user_id":"帐号","nick":"昵称","problem_id":"问题","result":"结果","language":"语言","contest_id":"竞赛号","memory":"内存","time":"耗时","length":"长度","submit_time":"提交时间","judger":"判题机"},"ranklist":{"rank":"名次","user":"用户名","nick":"昵称","accept":"通过数量","submit":"提交","ratio":"通过率","vjudge_accept":"VJ通过数量"}},"jp":{"status":{"solution_id":"ランニングナンバー","user":"ユーサー","user_id":"アカウント","nick":"ニック","problem_id":"問題番号","result":"結果","language":"言語","contest_id":"コンテスト番号","memory":"メモリー","time":"時間","length":"長さ","submit_time":"提出時間","judger":"審判するコンピューター"}}},"language_icon":["devicon-c-plain","devicon-cplusplus-plain","devicon-devicon-plain","devicon-java-plain","devicon-ruby-plain","devicon-devicon-plain","devicon-python-plain","devicon-php-plain","devicon-devicon-plain","devicon-csharp-plain","devicon-devicon-plain","devicon-devicon-plain","devicon-devicon-plain","devicon-c-plain","devicon-cplusplus-plain","devicon-devicon-plain","devicon-javascript-plain","devicon-go-plain","devicon-python-plain","devicon-cplusplus-plain","devicon-cplusplus-plain","devicon-c-plain","devicon-devicon-plain","devicon-java-plain","devicon-java-plain","devicon-python-plain","devicon-python-plain","devicon-java-plain","devicon-c-plain","devicon-cplusplus-plain"],"judge_icon":["hourglass half","spinner","spinner","spinner","checkmark","minus","remove","clock","microchip","print","bomb","code","spinner","spinner","spinner","remove"]}')}}]);
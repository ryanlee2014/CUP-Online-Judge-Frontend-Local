(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6a5c15ee"],{aed1:function(a,n,e){"use strict";e.r(n);var c=function(){var a=this,n=a.$createElement,e=a._self._c||n;return e("div",{staticClass:"ui container padding"},[e("h2",{staticClass:"ui dividing header"},[a._v(" "+a._s(a.$t("compile arguments"))+" ")]),e("div",{staticClass:"ui grid",staticStyle:{"margin-left":"0"}},[a._l(a.compileArguments,(function(n,c){return e("div",{key:c,staticClass:"row"},[e("div",{staticClass:"ui grid",staticStyle:{"margin-left":"0","margin-top":"0",width:"100%"}},[e("div",{staticClass:"row"},[e("h2",{staticClass:"ui header"},[a._v(" "+a._s(a.languageName[c])+" ")])]),e("div",{staticClass:"row"},[e("div",{staticClass:"ui input",staticStyle:{width:"100%"}},[e("input",{directives:[{name:"model",rawName:"v-model",value:a.compileArguments[c],expression:"compileArguments[name]"}],attrs:{type:"text"},domProps:{value:a.compileArguments[c]},on:{input:function(n){n.target.composing||a.$set(a.compileArguments,c,n.target.value)}}})])])])])})),e("div",{staticClass:"row"},[e("a",{staticClass:"ui primary button",on:{click:function(n){return n.preventDefault(),a.submitCompileArguments(n)}}},[a._v(a._s(a.$t("submit")))])])],2)])},i=[],t=(e("4160"),e("a15b"),e("d81d"),e("d3b7"),e("4ae1"),e("ac1f"),e("25f0"),e("1276"),e("498a"),e("159b"),e("d4ec")),o=e("bee2"),p=e("262e"),s=e("99de"),l=e("7e84"),r=e("9ab4"),u=e("60a3"),v=e("2cd4"),d=e("2ef0"),m=e.n(d),h=e("b2ab");function g(a){function n(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(a){return!1}}return function(){var e,c=Object(l["a"])(a);if(n()){var i=Object(l["a"])(this).constructor;e=Reflect.construct(c,arguments,i)}else e=c.apply(this,arguments);return Object(s["a"])(this,e)}}var y=h.language_name.local,j=function(){var a=function(a){Object(p["a"])(e,a);var n=g(e);function e(){var a;return Object(t["a"])(this,e),a=n.apply(this,arguments),a.compileArguments={},a.languageName=y,a}return Object(o["a"])(e,[{key:"mounted",value:function(){this.initCompileArguments()}},{key:"initCompileArguments",value:function(){var a=this;this.axios.get("/api/admin/system/compile/compile_arguments").then((function(n){var e=n.data,c=e.data;m.a.forEach(c,(function(a,n){c[n]=a.join(" ")})),a.compileArguments=c}))}},{key:"submitCompileArguments",value:function(){var a=this,n={};m.a.forEach(this.compileArguments,(function(a,e){n[e]=a.split(" ").map((function(a){return a.trim()}))})),this.axios.post("/api/admin/system/compile/compile_arguments",{payload:n}).then((function(n){n.data;alert(a.$t("success"))}))}}]),e}(Object(u["b"])(v["a"]));return a=Object(r["c"])([u["a"]],a),a}(),b=j,C=b,f=e("2877"),_=Object(f["a"])(C,c,i,!1,null,"601efa96",null);n["default"]=_.exports},b2ab:function(a){a.exports=JSON.parse('{"language_name":{"local":["C11","C++17","Pascal","Java","Ruby","Bash","Python 2","PHP","Perl","C#","Objective-C","FreeBasic","Schema","Clang","Clang++","Lua","JavaScript","Go","Python 3","C++11","C++98","C99","Kotlin","Java 8","Java 7","PyPy","PyPy3","Java 6","Clang11","Clang++17","C++20","Kotlin Native","Other Language"],"common":["C","C++","Pascal","Java","Ruby","Bash","Python","PHP","Perl","C#","Obj-C","FreeBasic","Scheme","Clang","Clang++","Lua","JavaScript","Go","Python","C++","C++","C","Kotlin","Java","Java","Python","Python","Java","C","C++","C++","Kotlin","Other Language","Other Language"],"hdu":["G++","","C++","GCC","","JAVA"],"poj":["G++","GCC","JAVA","Pascal","C++","C","Fortran"],"uva":["","ANSI C","JAVA","C++","Pascal","C++11","Python 3"],"jsk":["C","C++","C++14","Java","Python","Python3","Ruby","Blockly","Octave"],"vijos":["C","C++","C#","Pascal","Java","Python 2","Python 3","PHP","Rust","Haskell","JavaScript","Go","Ruby"],"bzoj":["C","C++","C#","Pascal","Java","Python 2","Python 3","PHP","Rust","Haskell","JavaScript","Go","Ruby"]},"language_suffix":{"local":["c","cpp","pas","java","rb","sh","py","php","perl","cs","objc","fbc","","c","cpp","lua","js","go","py","cpp","cpp","c","kt","java","java","py","py","java","c","cpp","cpp","kotlin"]},"markdown_language":{"local":["c++","c++","pascal","java","ruby","bash","python","php","perl","csharp","objectivec","freebasic","schema","c++","c++","lua","javascript","go","python","c++","c++","c++","kotlin","java","java","python","python","java","c++","c++","c++","kotlin",""],"hdu":["c++","","c++","c++","","java"],"poj":["c++","c++","java","pascal","c++","c++","fortran"],"uva":["","c++","java","c++","pascal","c++","python"],"jsk":["c++","c++","c++","java","python","python","ruby","blockly","octave"],"vijos":["c++","c++","csharp","pascal","java","python","python","php","rust","haskell","javascript","go","ruby"],"bzoj":["c++","c++","csharp","pascal","java","python","python","php","rust","haskell","javascript","go","ruby"]},"language_template":{"local":["c_cpp","c_cpp","pascal","java","ruby","bash","python","php","perl","csharp","objectivec","text","scheme","c_cpp","c_cpp","lua","javascript","go","python","c_cpp","c_cpp","c_cpp","java","java","java","python","python","java","c_cpp","c_cpp","c_cpp","java"]},"langmask":171440,"judge_color":["waiting","running","compiling","running","accepted","wrong_answer","wrong_answer","time_limit_exceeded","memory_limit_exceeded","output_limit_exceeded","runtime_error","compile_error","running","running","running","wrong_answer"],"icon_list":["hourglass half","spinner","spinner","spinner","checkmark","minus","remove","clock","microchip","print","bomb","code","spinner","spinner","spinner","remove"],"result":{"cn":["等待","等待重判","编译中","运行并评判","答案正确","格式错误","答案错误","时间超限","内存超限","输出超限","运行错误","编译错误","编译成功","运行完成","已加入队列","提交被拒绝","系统错误",""]},"language":{"cn":{"status":{"solution_id":"运行号","user":"用户","user_id":"帐号","nick":"昵称","problem_id":"问题","result":"结果","language":"语言","contest_id":"竞赛号","memory":"内存","time":"耗时","length":"长度","submit_time":"提交时间","judger":"判题机"},"ranklist":{"rank":"名次","user":"用户名","nick":"昵称","accept":"通过数量","submit":"提交","ratio":"通过率","vjudge_accept":"VJ通过数量"}},"jp":{"status":{"solution_id":"ランニングナンバー","user":"ユーサー","user_id":"アカウント","nick":"ニック","problem_id":"問題番号","result":"結果","language":"言語","contest_id":"コンテスト番号","memory":"メモリー","time":"時間","length":"長さ","submit_time":"提出時間","judger":"審判するコンピューター"}}},"language_icon":["devicon-c-plain","devicon-cplusplus-plain","devicon-devicon-plain","devicon-java-plain","devicon-ruby-plain","devicon-devicon-plain","devicon-python-plain","devicon-php-plain","devicon-devicon-plain","devicon-csharp-plain","devicon-devicon-plain","devicon-devicon-plain","devicon-devicon-plain","devicon-c-plain","devicon-cplusplus-plain","devicon-devicon-plain","devicon-javascript-plain","devicon-go-plain","devicon-python-plain","devicon-cplusplus-plain","devicon-cplusplus-plain","devicon-c-plain","devicon-devicon-plain","devicon-java-plain","devicon-java-plain","devicon-python-plain","devicon-python-plain","devicon-java-plain","devicon-c-plain","devicon-cplusplus-plain","devicon-cplusplus-plain","devicon-devicon-plain"],"judge_icon":["hourglass half","spinner","spinner","spinner","checkmark","minus","remove","clock","microchip","print","bomb","code","spinner","spinner","spinner","remove"]}')}}]);
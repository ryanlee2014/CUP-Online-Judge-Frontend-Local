(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b1eb5b9c"],{"2cd4":function(a,n,e){"use strict";e("e260"),e("ddb0");var c=e("9ab4"),i=e("2b0e"),t=e("60a3"),o=e("3657"),p=e("0443"),s=class extends i["a"]{constructor(){super(...arguments),this.customConfig=p}mounted(){o["a"].init(this.$store.getters.homepage),document.title=p.title}};s=Object(c["c"])([t["a"]],s),n["a"]=s},b2ab:function(a){a.exports=JSON.parse('{"language_name":{"local":["C11","C++17","Pascal","Java 10","Ruby","Bash","Python 2","PHP","Perl","C#","Objective-C","FreeBasic","Schema","Clang","Clang++","Lua","JavaScript","Go","Python 3","C++11","C++98","C99","Kotlin","Java 8","Java 7","PyPy","PyPy3","Java 6","Clang11","Clang++17","C++20","Other Language"],"common":["C","C++","Pascal","Java","Ruby","Bash","Python","PHP","Perl","C#","Obj-C","FreeBasic","Scheme","Clang","Clang++","Lua","JavaScript","Go","Python","C++","C++","C","Kotlin","Java","Java","Python","Python","Java","C","C++","Other Language","Other Language"],"hdu":["G++","","C++","GCC","","JAVA"],"poj":["G++","GCC","JAVA","Pascal","C++","C","Fortran"],"uva":["","ANSI C","JAVA","C++","Pascal","C++11","Python 3"],"jsk":["C","C++","C++14","Java","Python","Python3","Ruby","Blockly","Octave"],"vijos":["C","C++","C#","Pascal","Java","Python 2","Python 3","PHP","Rust","Haskell","JavaScript","Go","Ruby"],"bzoj":["C","C++","C#","Pascal","Java","Python 2","Python 3","PHP","Rust","Haskell","JavaScript","Go","Ruby"]},"language_suffix":{"local":["c","cpp","pas","java","rb","sh","py","php","perl","cs","objc","fbc","","c","cpp","lua","js","go","py","cpp","cpp","c","kt","java","java","py","py","java","c","cpp"]},"markdown_language":{"local":["c++","c++","pascal","java","ruby","bash","python","php","perl","csharp","objectivec","freebasic","schema","c++","c++","lua","javascript","go","python","c++","c++","c++","kotlin","java","java","python","python","java","c++","c++",""],"hdu":["c++","","c++","c++","","java"],"poj":["c++","c++","java","pascal","c++","c++","fortran"],"uva":["","c++","java","c++","pascal","c++","python"],"jsk":["c++","c++","c++","java","python","python","ruby","blockly","octave"],"vijos":["c++","c++","csharp","pascal","java","python","python","php","rust","haskell","javascript","go","ruby"],"bzoj":["c++","c++","csharp","pascal","java","python","python","php","rust","haskell","javascript","go","ruby"]},"language_template":{"local":["c_cpp","c_cpp","pascal","java","ruby","bash","python","php","perl","csharp","objectivec","text","scheme","c_cpp","c_cpp","lua","javascript","go","python","c_cpp","c_cpp","c_cpp","java","java","java","python","python","java","c_cpp","c_cpp"]},"langmask":171440,"judge_color":["waiting","running","compiling","running","accepted","wrong_answer","wrong_answer","time_limit_exceeded","memory_limit_exceeded","output_limit_exceeded","runtime_error","compile_error","running","running","running","wrong_answer"],"icon_list":["hourglass half","spinner","spinner","spinner","checkmark","minus","remove","clock","microchip","print","bomb","code","spinner","spinner","spinner","remove"],"result":{"cn":["等待","等待重判","编译中","运行并评判","答案正确","格式错误","答案错误","时间超限","内存超限","输出超限","运行错误","编译错误","编译成功","运行完成","已加入队列","提交被拒绝","系统错误",""]},"language":{"cn":{"status":{"solution_id":"运行号","user":"用户","user_id":"帐号","nick":"昵称","problem_id":"问题","result":"结果","language":"语言","contest_id":"竞赛号","memory":"内存","time":"耗时","length":"长度","submit_time":"提交时间","judger":"判题机"},"ranklist":{"rank":"名次","user":"用户名","nick":"昵称","accept":"通过数量","submit":"提交","ratio":"通过率","vjudge_accept":"VJ通过数量"}},"jp":{"status":{"solution_id":"ランニングナンバー","user":"ユーサー","user_id":"アカウント","nick":"ニック","problem_id":"問題番号","result":"結果","language":"言語","contest_id":"コンテスト番号","memory":"メモリー","time":"時間","length":"長さ","submit_time":"提出時間","judger":"審判するコンピューター"}}},"language_icon":["devicon-c-plain","devicon-cplusplus-plain","devicon-devicon-plain","devicon-java-plain","devicon-ruby-plain","devicon-devicon-plain","devicon-python-plain","devicon-php-plain","devicon-devicon-plain","devicon-csharp-plain","devicon-devicon-plain","devicon-devicon-plain","devicon-devicon-plain","devicon-c-plain","devicon-cplusplus-plain","devicon-devicon-plain","devicon-javascript-plain","devicon-go-plain","devicon-python-plain","devicon-cplusplus-plain","devicon-cplusplus-plain","devicon-c-plain","devicon-devicon-plain","devicon-java-plain","devicon-java-plain","devicon-python-plain","devicon-python-plain","devicon-java-plain","devicon-c-plain","devicon-cplusplus-plain"],"judge_icon":["hourglass half","spinner","spinner","spinner","checkmark","minus","remove","clock","microchip","print","bomb","code","spinner","spinner","spinner","remove"]}')},fab3:function(a,n,e){"use strict";e.r(n);var c=function(){var a=this,n=a.$createElement,e=a._self._c||n;return e("div",{staticClass:"ui container"},[e("h2",{staticClass:"ui dividing header"},[a._v(" "+a._s(a.$t("compiler arguments"))+" ")]),e("div",{staticClass:"ui grid",staticStyle:{"margin-left":"0"}},a._l(a.compileArguments,(function(n,c){return e("div",{key:c,staticClass:"row"},[e("div",{staticClass:"ui grid",staticStyle:{"margin-left":"0","margin-top":"0",width:"100%"}},[e("div",{staticClass:"row"},[e("h2",{staticClass:"ui header"},[a._v(" "+a._s(a.languageName[c])+" ")])]),e("div",{staticClass:"row"},[e("div",{staticClass:"ui input",staticStyle:{width:"100%"}},[e("input",{attrs:{readonly:"",type:"text"},domProps:{value:a.compileArguments[c].join(" ")}})])])])])})),0)])},i=[],t=(e("e260"),e("ddb0"),e("9ab4")),o=e("60a3"),p=e("2cd4"),s=e("b2ab"),l=s.language_name.local,r=class extends(Object(o["b"])(p["a"])){constructor(){super(...arguments),this.compileArguments=[],this.languageName=l}mounted(){console.log("test"),this.initData()}initData(){this.initCompileArguments()}initCompileArguments(){this.axios.get("/api/system/judge/compile").then(a=>{var{data:n}=a;this.compileArguments=n.data})}};r=Object(t["c"])([o["a"]],r);var u=r,v=u,d=e("2877"),h=Object(d["a"])(v,c,i,!1,null,"40ab67d0",null);n["default"]=h.exports}}]);
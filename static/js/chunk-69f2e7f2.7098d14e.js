(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-69f2e7f2"],{"0c71":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"ui container padding"},[a("h1",{staticClass:"ui dividing header"},[t._v(" "+t._s(t.$t("problem"))+" "),a("router-link",{attrs:{to:"/problem/submit/"+t.pid}},[t._v(t._s(t.pid))]),t._v(" "+t._s(t.$t("status"))+" ")],1),a("div",{staticClass:"ui stacked segment"},[a("div",{staticClass:"ui statistics"},[a("div",{staticClass:"black statistic"},[a("div",{staticClass:"value"},[t._v(" "+t._s(t.submitStatus.total_status.total_submit)+" ")]),a("div",{staticClass:"label"},[t._v(" 总提交 ")])]),a("div",{staticClass:"black statistic"},[a("div",{staticClass:"value"},[t._v(" "+t._s(t.submitStatus.total_status.total_solved_submit)+" ")]),a("div",{staticClass:"label"},[t._v(" 已提交用户 ")])]),a("div",{staticClass:"black statistic"},[a("div",{staticClass:"value"},[t._v(" "+t._s(t.submitStatus.total_status.total_solved_user)+" ")]),a("div",{staticClass:"label"},[t._v(" 已通过用户 ")])]),t._l(t.submitStatus.problem_status,(function(e,s){return a("div",{key:e,class:t.submitStatus.color[s-1]+" statistic"},[a("div",{staticClass:"value"},[t._v(" "+t._s(e)+" ")]),a("div",{staticClass:"label"},[a("router-link",{attrs:{to:"/status?problem_id="+t.pid+"&jresult="+s}},[t._v(" "+t._s(t.submitStatus.statistic_name[s])+" ")])],1)])}))],2)]),t._m(0),t._m(1),t._m(2),t._m(3),a("div",{staticClass:"ui piled segment"},[a("h2",{staticClass:"ui dividing header"},[t._v("做题人员流向")]),a("div",{directives:[{name:"observe-visibility",rawName:"v-observe-visibility",value:t.initSolveMap,expression:"initSolveMap"}],staticClass:"amcharts",attrs:{id:"chord_graph"}},[t._v("加载中")])]),t._m(4),a("h1",{staticClass:"ui dividing header"},[t._v("Submissions")]),a("table",{staticClass:"ui table",attrs:{id:"problemstatus"}},[t._m(5),a("tbody",t._l(t.submitStatus.solution_status,(function(e,s){return a("tr",{key:s},[a("td",[t._v(t._s(20*t.current_page+s+1))]),a("td",[t._v(t._s(e.solution_id))]),a("td",[a("router-link",{attrs:{to:"/user/"+e.user_id}},[t._v(" "+t._s(e.user_id)+" ")])],1),a("td",[t._v(t._s(e.memory)+"KB")]),a("td",[t._v(t._s(e.time)+"ms")]),a("td",[t.isadmin||e.user_id==t.owner?a("router-link",{attrs:{to:"/usercode/local/"+e.solution_id}},[t._v(" "+t._s(t.submitStatus.language_name[e.language])+" ")]):a("span",[t._v(t._s(t.submitStatus.language_name[e.language]))])],1),a("td",[t._v(t._s(e.code_length)+"B")]),a("td",[t._v(t._s(new Date(e.in_date).toLocaleString()))])])})),0)]),a("br"),a("router-link",{staticClass:"ui button",attrs:{to:"/status?problem_id="+this.pid}},[t._v(" Status ")]),a("a",{class:"ui button "+(0==t.current_page?"disabled":""),on:{click:function(e){0!=t.current_page&&t.page(-t.current_page,e)}}},[t._v("Top")]),a("div",{staticClass:"ui buttons"},[a("button",{class:"ui left labeled icon button "+(0==t.current_page?"disabled":""),on:{click:function(e){0!=t.current_page&&t.page(-1,e)}}},[a("i",{staticClass:"left arrow icon"}),t._v(" Prev ")]),a("div",{staticClass:"or"}),a("button",{class:"ui right labeled icon button "+(t.submit_stat.length<20?"disabled":""),on:{click:function(e){20==t.submit_stat.length&&t.page(1,e)}}},[a("i",{staticClass:"right arrow icon"}),t._v(" Next ")])])],1)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"ui piled segment"},[a("div",{attrs:{align:"center",id:"pie_chart_language_legend"}}),a("div",{staticStyle:{width:"100%"},attrs:{align:"center",id:"canvas-holder"}},[a("canvas",{attrs:{id:"chart-area"}})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"ui piled segment"},[a("div",{attrs:{align:"center",id:"bar_chart_language_legend"}}),a("div",{staticStyle:{width:"100%"},attrs:{align:"center",id:"bar-holder"}},[a("canvas",{attrs:{id:"bar-area"}})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"ui piled segment"},[a("div",{attrs:{align:"center",id:"memory_bar_chart_language_legend"}}),a("div",{staticStyle:{width:"100%"},attrs:{align:"center",id:"memory_bar_holder"}},[a("canvas",{attrs:{id:"memory_bar_area"}})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"ui piled segment"},[a("h2",{staticClass:"ui dividing header"},[t._v("代码长度")]),a("div",{staticClass:"amcharts",attrs:{id:"problem_code_length"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"ui grid"},[a("div",{staticClass:"eight wide column"}),a("div",{staticClass:"seven wide column"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",{staticClass:"toprow"},[a("th",{staticStyle:{cursor:"hand"}},[t._v("名次 ")]),a("th",[t._v("RunID")]),a("th",[t._v("用户")]),a("th",[t._v("内存")]),a("th",[t._v("耗时")]),a("th",[t._v("语言")]),a("th",[t._v("代码长度")]),a("th",[t._v("提交时间")])])])}],r=(a("c975"),a("e260"),a("4e82"),a("b680"),a("1276"),a("ddb0"),a("9ab4")),n=a("71c9"),l=a("c497"),o=a("2cd4"),u=a("60a3"),c=a("2ef0"),d=a.n(c),h=a("1157"),p=a.n(h),m=a("30ef"),_=a.n(m);const g=a("5a54").default,b=p.a,v={},f={};function w(t,e="default"){const a=[];if(v[e])return;v[e]=!0,d.a.forEach(t,(function(t){a.push({date:new Date(t.in_date),value:t.code_length})})),n["e"](g);const s=n["d"]("problem_code_length",l["j"]);s.data=a;const i=s.xAxes.push(new l["e"]);i.renderer.minGridDistance=60,s.yAxes.push(new l["i"]);const r=s.series.push(new l["g"]);r.dataFields.valueY="value",r.dataFields.dateX="date",r.tooltipText="{value}",r.tooltip.background.cornerRadius=20,r.tooltip.background.strokeOpacity=0,r.tooltip.pointerOrientation="vertical",r.tooltip.label.minWidth=40,r.tooltip.label.minHeight=40,r.tooltip.label.textAlign="middle",r.tooltip.label.textValign="middle",r.tooltip.pointerOrientation="vertical";const o=r.bullets.push(new l["c"]);o.circle.strokeWidth=2,o.circle.radius=4,o.circle.fill=n["c"]("#fff");const u=o.states.create("hover");u.properties.scale=1.3,s.cursor=new l["l"],s.cursor.behavior="panXY",s.cursor.xAxis=i,s.cursor.snapToSeries=r,s.scrollbarY=new n["b"],s.scrollbarY.parent=s.leftAxesContainer,s.scrollbarY.toBack(),s.scrollbarX=new l["k"],s.scrollbarX.series.push(r),s.scrollbarX.parent=s.bottomAxesContainer}function y(t,e,a="chord_graph"){if(f[a])return;f[a]=!0,n["e"](g);const s=n["d"]("chord_graph",l["b"]);d.a.forEach(t,(function(t){if(t.from!=e){const e=t.from;t.from=t.to,t.to=e}t.from="本题",t.to+=""})),t.sort((function(t,e){return e.value-t.value}));while(t.length>30)t.pop();s.data=t,s.dataFields.fromName="from",s.dataFields.toName="to",s.dataFields.value="value";const i=s.nodes.template;i.readerTitle="点击块可显示或隐藏",i.showSystemTooltip=!0;const r=s.links.template,o=r.bullets.push(new l["c"]);function u(t){const e=3e3*Math.random()+2e3,a=t.animate([{property:"locationX",from:0,to:1}],e);a.events.on("animationended",(function(t){u(t.target.object)}))}o.fillOpacity=1,o.circle.radius=5,o.locationX=.5,s.events.on("ready",(function(){for(let t=0;t<s.links.length;t++){const e=s.links.getIndex(t),a=e.bullets.getIndex(0);u(a)}}))}let x=class extends(Object(u["b"])(o["a"])){constructor(){super(...arguments),this.problem_stat=[],this.submit_stat=[],this.problem_submit_stat={},this.stat_name=[],this.current_page=0,this.language_name=[],this.isadmin=!1,this.self="",this.time_range={},this.owner="",this.memory_range={},this.initedSolveMap=!1}created(){this.pid=this.$route.params.id,this.current_page=parseInt(this.$route.query.page||0)}get submitStatus(){const t={};return d.a.forEach(this.problem_stat,(function(e){t[e.result]=e.total})),{problem_status:t,solution_status:this.submit_stat,total_status:this.problem_submit_stat,color:["black","black","black","green","red","red","yellow","yellow","yellow","yellow","yellow","yellow","yellow","","",""],statistic_name:this.stat_name,language_name:this.language_name,time_range:this.time_range,memory_range:this.memory_range}}set submitStatus(t){const e=t.data.problem_status;this.problem_stat=e,this.submit_stat=t.data.solution_status,this.problem_submit_stat=t.data.submit_status,this.stat_name=t.data.statistic_name,this.language_name=t.data.language_name,this.isadmin=t.data.isadmin,this.owner=t.data.self,this.time_range=t.data.time_range,this.memory_range=t.data.memory_range}initSolveMap(){this.initedSolveMap||(this.initedSolveMap=!0,this.axios.get("/api/status/problem/solve_map/"+this.pid).then(({data:t})=>{"OK"===t.status&&d.a.delay(y,0,t.data,this.pid)}))}page(t){this.current_page+=t;this.axios.get(`/api/problemstatus/${this.pid}?page=${this.current_page}`).then(({data:t})=>{this.submitStatus=t,this.setQuery()})}setQuery(){const t={};0!==this.current_page?t.page=this.current_page+1:delete t.page,this.$router.push({path:this.$route.path,query:t})}mounted(){document.title=`Problem ${this.pid} Statistics -- ${document.title}`;const t=b("title").text();b("title").text("Status:Problem "+this.pid+" - "+t),this.current_page=Math.max(0,this.current_page-1),this.axios.get("/api/status/problem/code_length/problem/"+this.pid).then(({data:t})=>{w(t.data)}),this.axios.get(`/api/problemstatus/${this.pid}?page=${this.current_page}`).then(({data:t})=>{this.submitStatus=t,this.initGraph()})}initGraph(){const t=d.a.values(window.chartColors);t.push("#af63f4"),t.push("#00b5ad"),t.push("#350ae8"),t.push("#E2EAE9");const e=["#3366CC","#DC3912","#FF9900","#109618","#990099","#3B3EAC","#0099C6","#DD4477","#66AA00","#B82E2E","#316395","#994499","#22AA99","#AAAA11","#6633CC","#E67300","#8B0707","#329262","#5574A6","#3B3EAC"];d.a.forEach(e,(function(e){t.push(e)}));const a={type:"pie",data:{datasets:[{data:d.a.map(this.submitStatus.problem_status,t=>t),backgroundColor:t,label:"Status"}],labels:d.a.map(this.submitStatus.problem_status,(t,e)=>this.submitStatus.statistic_name[e])},options:{responsive:!0}},s={};let i={};d.a.forEach(this.submitStatus.time_range,(function(t){i[t.diff]=!0,s[t.language]={}})),i=d.a.map(i,(function(t,e){const a=e.split("-");let s=a[0]+"ms";return a.length>1&&(s+=" - "+a[1]+"ms"),s})),i.sort((function(t,e){if(-1!==t.indexOf(">")){const a=parseFloat(t.substring(1,t.length)),s=parseFloat(e.split("-")[0]);return a-s}if(-1!==e.indexOf(">")){const a=parseFloat(t.split("-")[0]),s=parseFloat(e.substring(1,e.length));return a-s}{const a=parseFloat(t.split("-")[0]),s=parseFloat(e.split("-")[0]);return a-s}})),d.a.forEach(s,(function(t,e){d.a.forEach(i,(function(t){s[e][t]=0}))})),d.a.forEach(this.submitStatus.time_range,t=>{const e=t.diff.split("-");let a=e[0]+"ms";e.length>1&&(a+=" - "+e[1]+"ms"),s[t.language][a]=t.total});let r=d.a.map(t,(function(t){return t}));const n={type:"bar",labels:i,datasets:d.a.map(s,(t,e)=>({label:this.submitStatus.language_name[e],backgroundColor:r.shift(),data:d.a.values(t)}))};let l={};const o={};r=d.a.map(t,t=>t),d.a.forEach(this.submitStatus.memory_range,t=>{l[t.diff]=!0,o[t.language]={}}),l=d.a.map(l,(t,e)=>{if(-1!==e.indexOf("-")){const t=e.split("-");t[0]=(parseFloat(t[0])/1024).toFixed(2),t.length>1&&(t[1]=(parseFloat(t[1])/1024).toFixed(2));let a=t[0]+"MB";return t.length>1&&(a+=" - "+t[1]+"MB"),a}{let t=e.substring(1,e.length);return t=(parseFloat(t)/1024).toFixed(2),">"+t+"MB"}}),l.sort((t,e)=>{if(">"===t.charAt(0)){const a=parseFloat(t.substring(1,t.length)),s=parseFloat(e.split("-")[0]);return a-s}if(">"===e.charAt(0)){const a=parseFloat(t.split("-")[0]),s=parseFloat(e.substring(1,e.length));return a-s}{const a=parseFloat(t.split("-")[0]),s=parseFloat(e.split("-")[0]);return a-s}}),d.a.forEach(o,(t,e)=>{d.a.forEach(l,t=>{o[e][t]=0})}),d.a.forEach(this.submitStatus.memory_range,t=>{if(-1!==t.diff.indexOf("-")){const e=t.diff.split("-");e[0]=(parseFloat(e[0])/1024).toFixed(2),e.length>1&&(e[1]=(parseFloat(e[1])/1024).toFixed(2));let a=e[0]+"MB";e.length>1&&(a+=" - "+e[1]+"MB"),o[t.language][a]=t.total}else{let e=t.diff.substring(1,t.diff.length);e=(parseFloat(e)/1024).toFixed(2),o[t.language][">"+e+"MB"]=t.total}});const u={type:"bar",labels:l,datasets:d.a.map(o,(t,e)=>({label:this.submitStatus.language_name[e],backgroundColor:r.shift(),data:d.a.values(t)}))},c=document.getElementById("chart-area").getContext("2d");window.myPie=new _.a(c,a);const h=document.getElementById("bar-area").getContext("2d"),p=document.getElementById("memory_bar_area").getContext("2d");window.myBar=new _.a(h,{type:"bar",data:n,options:{title:{display:!0,text:"AC代码运行用时"},tooltips:{mode:"index",intersect:!0},responsive:!0,scales:{xAxes:[{stacked:!0}],yAxes:[{stacked:!0}]}}}),window.myMemory=new _.a(p,{type:"bar",data:u,options:{title:{display:!0,text:"AC代码内存使用"},tooltips:{mode:"index",intersect:!1},responsive:!0,scales:{xAxes:[{stacked:!0}],yAxes:[{stacked:!0}]}}})}};x=Object(r["c"])([u["a"]],x);var C=x,S=C,F=a("2877"),k=Object(F["a"])(S,s,i,!1,null,"03d7ed16",null);e["default"]=k.exports},1148:function(t,e,a){"use strict";var s=a("a691"),i=a("1d80");t.exports="".repeat||function(t){var e=String(i(this)),a="",r=s(t);if(r<0||r==1/0)throw RangeError("Wrong number of repetitions");for(;r>0;(r>>>=1)&&(e+=e))1&r&&(a+=e);return a}},"408a":function(t,e,a){var s=a("c6b6");t.exports=function(t){if("number"!=typeof t&&"Number"!=s(t))throw TypeError("Incorrect invocation");return+t}},b680:function(t,e,a){"use strict";var s=a("23e7"),i=a("a691"),r=a("408a"),n=a("1148"),l=a("d039"),o=1..toFixed,u=Math.floor,c=function(t,e,a){return 0===e?a:e%2===1?c(t,e-1,a*t):c(t*t,e/2,a)},d=function(t){var e=0,a=t;while(a>=4096)e+=12,a/=4096;while(a>=2)e+=1,a/=2;return e},h=o&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!l((function(){o.call({})}));s({target:"Number",proto:!0,forced:h},{toFixed:function(t){var e,a,s,l,o=r(this),h=i(t),p=[0,0,0,0,0,0],m="",_="0",g=function(t,e){var a=-1,s=e;while(++a<6)s+=t*p[a],p[a]=s%1e7,s=u(s/1e7)},b=function(t){var e=6,a=0;while(--e>=0)a+=p[e],p[e]=u(a/t),a=a%t*1e7},v=function(){var t=6,e="";while(--t>=0)if(""!==e||0===t||0!==p[t]){var a=String(p[t]);e=""===e?a:e+n.call("0",7-a.length)+a}return e};if(h<0||h>20)throw RangeError("Incorrect fraction digits");if(o!=o)return"NaN";if(o<=-1e21||o>=1e21)return String(o);if(o<0&&(m="-",o=-o),o>1e-21)if(e=d(o*c(2,69,1))-69,a=e<0?o*c(2,-e,1):o/c(2,e,1),a*=4503599627370496,e=52-e,e>0){g(0,a),s=h;while(s>=7)g(1e7,0),s-=7;g(c(10,s,1),0),s=e-1;while(s>=23)b(1<<23),s-=23;b(1<<s),g(1,1),b(2),_=v()}else g(0,a),g(1<<-e,0),_=v()+n.call("0",h);return h>0?(l=_.length,_=m+(l<=h?"0."+n.call("0",h-l)+_:_.slice(0,l-h)+"."+_.slice(l-h))):_=m+_,_}})}}]);
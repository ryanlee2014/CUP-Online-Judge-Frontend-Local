(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5fb12086"],{"111f":function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"zh-cn":{"context":"根据管理员设置，该页面禁止进入"},"en":{"context":"According to admin setup, you don\'t have privilege to access target page"},"ja":{"context":"都合によって、このページはアクセス禁止されている"}}'),delete t.options._Ctor}},1681:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.contestMode?a("div",{staticClass:"ui container padding"},[a("ContestMode")],1):a("div",{staticClass:"ui container pusher"},[a("div",{staticClass:"padding"},[a("h2",{directives:[{name:"show",rawName:"v-show",value:!t.finished,expression:"!finished"}],staticClass:"ui dividing header"},[t._v(" "+t._s(t.$t("loading"))+" ")]),a("div",{directives:[{name:"show",rawName:"v-show",value:t.finished,expression:"finished"}],staticClass:"ui grid"},[t.error?a("div",{staticClass:"row"},[a("div",{staticClass:"ui huge error message",staticStyle:{margin:"auto"}},[a("div",{staticClass:"header"},[a("i",{staticClass:"remove icon"}),t._v(" "+t._s(t.$t("error")))]),a("p",[t._v(t._s(t.statement))])])]):a("div",{staticClass:"row"},[a("div",{staticClass:"five wide column"},[a("div",{staticClass:"ui card",staticStyle:{width:"100%"},attrs:{id:"user_card"}},[a("div",{staticClass:"blurring dimmable image",attrs:{id:"avatar_container"}},[a("v-gravatar",{attrs:{hostname:"cn.gravatar.com",email:t.email,size:400}}),a("div",{staticClass:"ui placeholder"},[a("div",{staticClass:"square image"})])],1),a("div",{staticClass:"content"},[a("div",{staticClass:"ui placeholder"},[t._m(0),t._m(1)]),a("div",{staticClass:"header"},[a("span",{domProps:{innerHTML:t._s(t.nick)}}),t._v(" "),a("a",{attrs:{href:"mail.php?to_user="+t.user_id}},[a("i",{staticClass:"mail icon"})])]),a("div",{staticClass:"meta"},[a("i",{staticClass:"user circle outline icon"}),a("a",{staticClass:"group"},[t._v(t._s(t.privilege))]),"2016011253"===t.user_id?a("i",{staticClass:"user circle outline icon"}):t._e(),"2016011253"===t.user_id?a("a",{staticClass:"group"},[t._v(" "+t._s(t.$t("system development"))+" ")]):t._e(),t.acm_user?a("br"):t._e(),t.acm_user?a("a",{staticClass:"group"},[a("i",{staticClass:"user icon"}),t._v("ACM "+t._s(t.acm_user.level?t.$t("formal member"):t.$t("reserve member")))]):t._e(),a("br"),t._v(" "+t._s(t.$t("reg time"))+": "+t._s(t.dayjs(t.reg_time).format("YYYY-MM-DD"))+" "),t._l(t.award,(function(e){return a("a",{key:e.year+e.award,staticClass:"group"},[a("br"),a("i",{staticClass:"trophy icon"}),t._v(" "+t._s(e.year+"年"+e.award))])}))],2)]),a("div",{staticClass:"extra content"},[a("a",[a("i",{staticClass:"check icon"}),t._v(t._s(t.$t("local"))+" "+t._s(t.$t("pass"))+" "+t._s(t.local_accepted)+" 题 ")]),a("a",{staticStyle:{float:"right"}},[a("i",{staticClass:"line chart icon"}),t._v("Rank: "+t._s(t.rank))]),a("br"),a("a",[a("i",{staticClass:"check icon"}),t._v("VJudge "+t._s(t.$t("pass"))+" "+t._s(t.vjudge_solved)+" 题 ")]),a("a",{staticStyle:{float:"right"}},[a("i",{staticClass:"line chart icon"}),t._v("Rank: "+t._s(t.vjudge_rank))]),a("br"),a("a",[a("i",{staticClass:"check icon"}),t._v(t._s(t.$t("other platform"))+" "+t._s(t.$t("pass"))+" "+t._s(t.other_accepted-t.vjudge_solved)+" 题 ")]),a("br"),t._l(t.accepted_details,(function(e,s){return a("span",{key:s},[a("a",[a("i",{staticClass:"check icon"}),t._v(t._s(s)+" "+t._s(t.$t("pass"))+" "+t._s(e.length)+" 题 ")]),a("br")])}))],2)]),a("div",{staticClass:"ui card",staticStyle:{width:"100%"}},[a("div",{staticClass:"content"},[a("div",{staticClass:"header"},[t._v(" "+t._s(t.$t("status"))+" ")])]),a("div",{staticClass:"content"},[a("div",{staticClass:"ui placeholder"},[a("div",{staticClass:"line"}),a("div",{staticClass:"line"})]),t.online?a("div",{staticClass:"ui header"},[t._v(" "+t._s(t.$t("current online"))+" ")]):t._e(),t.online?t._e():a("div",{staticClass:"ui header"},[t._v(" "+t._s(t.$t("offline"))+" "),a("div",{staticClass:"sub header"},[t._v(" "+t._s(t.$t("last login"))+":"+t._s(t.last_login?new Date(t.last_login).toLocaleString():"")+" ")])])])]),a("div",{staticClass:"ui card",staticStyle:{width:"100%"}},[a("div",{staticClass:"content"},[a("div",{staticClass:"header"},[t._v(" "+t._s(t.$t("publish"))+" ")])]),a("div",{staticClass:"content"},[a("div",{staticClass:"ui placeholder"},[a("div",{staticClass:"line"}),a("div",{staticClass:"line"})]),a("table",{staticClass:"ui very basic table"},[a("thead",[a("th",[t._v("ID")]),a("th",[t._v(t._s(t.$t("title")))])]),a("tbody",t._l(t.article_publish,(function(e){return a("tr",{key:e.article_id},[a("td",[t._v(" "+t._s(e.article_id)+" ")]),a("td",[a("router-link",{attrs:{to:"/discuss/thread/"+e.article_id}},[t._v(" "+t._s(e.title)+" ")])],1)])})),0)])])]),a("div",{staticClass:"ui card",staticStyle:{width:"100%"}},[a("div",{staticClass:"content"},[a("div",{staticClass:"header"},[t._v(" "+t._s(t.$t("tutorial"))+" ")])]),a("div",{staticClass:"content"},[a("div",{staticClass:"ui placeholder"},[a("div",{staticClass:"line"}),a("div",{staticClass:"line"})]),a("table",{staticClass:"ui very basic table"},[a("thead",[a("th",[t._v(t._s(t.$t("problem_id")))]),a("th",[t._v(t._s(t.$t("title")))])]),a("tbody",t._l(t.tutorial_publish,(function(e){return a("tr",{key:e.problem_id},[a("td",[t._v(" "+t._s(e.problem_id)+" ")]),a("td",[a("router-link",{attrs:{to:"/tutorial/"+e.problem_id},domProps:{innerHTML:t._s(e.title)}})],1)])})),0)])])]),t.admin?a("div",{staticClass:"ui card",staticStyle:{width:"100%"}},[a("div",{staticClass:"content"},[a("div",{staticClass:"header"},[t._v(" "+t._s(t.$t("use os"))+" ")])]),a("div",{staticClass:"content"},[a("table",{staticClass:"ui very basic table"},[a("thead",[a("th",[t._v(t._s(t.$t("os")))]),a("th",[t._v(t._s(t.$t("version")))]),a("th",[t._v(t._s(t.$t("frequency")))])]),a("tbody",t._l(t.os,(function(e){return a("tr",{key:e.os_name+e.os_version},[a("td",[t._v(" "+t._s(e.os_name)+" ")]),a("td",[t._v(" "+t._s(e.os_version)+" ")]),a("td",[t._v(" "+t._s(e.cnt)+" ")])])})),0)])])]):t._e(),t.admin?a("div",{staticClass:"ui card",staticStyle:{width:"100%"}},[a("div",{staticClass:"content"},[a("div",{staticClass:"header"},[t._v(" "+t._s(t.$t("use browser"))+" ")])]),a("div",{staticClass:"content"},[a("table",{staticClass:"ui very basic table"},[a("thead",[a("th",[t._v(t._s(t.$t("browser")))]),a("th",[t._v(t._s(t.$t("version")))]),a("th",[t._v(t._s(t.$t("frequency")))])]),a("tbody",t._l(t.browser,(function(e){return a("tr",{key:e.browser_name+e.browser_version},[a("td",[t._v(" "+t._s(e.browser_name)+" ")]),a("td",[t._v(" "+t._s(e.browser_version)+" ")]),a("td",[t._v(" "+t._s(e.cnt)+" ")])])})),0)])])]):t._e()]),a("div",{staticClass:"eleven wide column"},[a("div",{staticClass:"ui grid"},[a("div",{staticClass:"row"},[a("div",{staticClass:"sixteen wide column"},[a("div",{staticClass:"ui grid"},[a("div",{staticClass:"row"},[a("div",{staticClass:"eight wide column"},[a("div",{staticClass:"ui grid"},[a("div",{staticClass:"row"},[a("div",{staticClass:"column"},[a("h4",{staticClass:"ui top attached block header"},[a("i",{staticClass:"id card icon"}),t._v(t._s(t.$t("user_id")))]),a("div",{staticClass:"ui attached segment"},[a("div",{},[t._v(" "+t._s(t.user_id)+" ")]),a("div",{staticClass:"ui placeholder"},[a("div",{staticClass:"line"}),a("div",{staticClass:"line"})])]),t.biography&&t.biography.length>0?a("h4",{staticClass:"ui attached block header"},[a("i",{staticClass:"id badge icon"}),t._v(t._s(t.$t("biography"))+" ")]):t._e(),t.biography&&t.biography.length>0?a("div",{staticClass:"ui attached segment",domProps:{innerHTML:t._s(t.biography)}},[a("div",{staticClass:"ui placeholder"},[a("div",{staticClass:"line"}),a("div",{staticClass:"line"})])]):t._e(),t.school&&t.school.length>0?a("h4",{staticClass:"ui attached block header"},[a("i",{staticClass:"university icon"}),t._v(t._s(t.$t("school"))+" ")]):t._e(),t.school.length>0?a("div",{staticClass:"ui attached segment"},[a("div",{},[t._v(t._s(t.school))]),a("div",{staticClass:"ui placeholder"},[a("div",{staticClass:"line"}),a("div",{staticClass:"line"})])]):t._e(),t.email&&t.email.length>0?a("h4",{staticClass:"ui attached block header"},[a("i",{staticClass:"mail square icon"}),t._v(t._s(t.$t("email")))]):t._e(),t.email&&t.email.length>0?a("div",{staticClass:"ui attached segment"},[a("div",[a("a",{attrs:{href:"mailto:"+t.email}},[t._v(t._s(t.email))])]),a("div",{staticClass:"ui placeholder"},[a("div",{staticClass:"line"}),a("div",{staticClass:"line"})])]):t._e(),t.blog&&t.blog.length>0?a("h4",{staticClass:"ui attached block header"},[a("i",{staticClass:"newspaper icon"}),t._v("Blog ")]):t._e(),t.blog&&t.blog.length>0?a("div",{staticClass:"ui attached segment"},[a("div",{},[a("a",{attrs:{href:t.blog,target:"_blank"}},[t._v(t._s(t.blog))])]),a("div",{staticClass:"ui placeholder"},[a("div",{staticClass:"line"}),a("div",{staticClass:"line"})])]):t._e(),t.github&&t.github.length>0?a("h4",{staticClass:"ui attached block header"},[a("i",{staticClass:"github icon"}),t._v("GitHub ")]):t._e(),t.github&&t.github.length>0?a("div",{staticClass:"ui bottom attached segment"},[t.github&&t.github?a("iframe",{attrs:{src:"https://ghbtns.com/github-btn.html?user="+t.github+"&type=follow&count=true",frameborder:"0",height:"20px",scrolling:"0",width:"170px"}}):t._e(),a("div",{staticClass:"ui placeholder"},[a("div",{staticClass:"line"}),a("div",{staticClass:"line"})])]):t._e()])])])]),a("div",{staticClass:"eight wide column"},[a("h4",{staticClass:"ui top attached block header"},[a("i",{staticClass:"pie chart icon"}),t._v(t._s(t.$t("submit statistic"))+" ")]),t._m(2)])]),a("div",{staticClass:"row"},[a("div",{staticClass:"sixteen wide column"},[a("h4",{staticClass:"ui top attached block header"},[t._v(t._s(t.$t("submit heatmap")))]),a("div",{staticClass:"ui bottom attached segment heatmap"},[a("div",{staticClass:"ui placeholder"},[a("div",{staticClass:"line"}),a("div",{staticClass:"line"})])])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"eight wide column"},[a("div",{staticClass:"row"},[a("div",{staticClass:"column"},[a("h4",{staticClass:"ui top attached block header"},[t._v(t._s(t.$t("local")))]),a("div",{staticClass:"ui attached segment"},[t._l(t.accept.local,(function(e){return a("router-link",{key:e.problem_id,attrs:{to:"/problem/submit/"+e.problem_id}},[t._v(" "+t._s(e.problem_id)+" ")])})),a("div",{staticClass:"ui placeholder"},[a("div",{staticClass:"line"}),a("div",{staticClass:"line"})])],2),t.accept.hdu.length>0?a("h4",{staticClass:"ui attached block header"},[t._v("HDU")]):t._e(),t.accept.hdu.length>0?a("div",{staticClass:"ui attached segment"},[t._l(t.accept.hdu,(function(e){return a("a",{key:e.problem_id,attrs:{href:"hdusubmitpage.php?id="+e.problem_id}},[t._v(" "+t._s(e.problem_id))])})),a("div",{staticClass:"ui placeholder"},[a("div",{staticClass:"line"}),a("div",{staticClass:"line"})])],2):t._e(),t.accept.poj.length>0?a("h4",{staticClass:"ui attached block header"},[t._v("POJ")]):t._e(),t.accept.poj.length>0?a("div",{staticClass:"ui attached segment"},[t._l(t.accept.poj,(function(e){return a("a",{key:e.problem_id,attrs:{href:"pojsubmitpage.php?id="+e.problem_id}},[t._v(" "+t._s(e.problem_id))])})),a("div",{staticClass:"ui placeholder"},[a("div",{staticClass:"line"}),a("div",{staticClass:"line"})])],2):t._e(),t.accept.uva.length>0?a("h4",{staticClass:"ui attached block header"},[t._v("UVA")]):t._e(),t.accept.uva.length>0?a("div",{staticClass:"ui attached segment"},[t._l(t.accept.uva,(function(e){return a("a",{key:e.problem_id,attrs:{href:"uvasubmitpage.php?id="+e.problem_id}},[t._v(" "+t._s(e.problem_id))])})),a("div",{staticClass:"ui placeholder"},[a("div",{staticClass:"line"}),a("div",{staticClass:"line"})])],2):t._e(),t.accept.other.length>0?a("h4",{staticClass:"ui attached block header"},[t._v(t._s(t.$t("other")))]):t._e(),t.accept.other.length>0?a("div",{staticClass:"ui bottom attached segment"},[t._l(t.accept.other,(function(e){return a("a",{key:e.problem_id,attrs:{href:"javascript:void(0)"}},[t._v(" "+t._s(e.oj_name+" "+e.problem_id))])})),a("div",{staticClass:"ui placeholder"},[a("div",{staticClass:"line"}),a("div",{staticClass:"line"})])],2):t._e()])]),a("div",{staticClass:"row"}),a("div",{staticClass:"row"})]),a("div",{staticClass:"eight wide column"},[a("h4",{staticClass:"ui top attached block header"},[a("i",{staticClass:"pie chart icon"}),t._v(t._s(t.$t("programming language"))+" ")]),a("div",{staticClass:"ui bottom attached segment"},[a("div",{attrs:{id:"pie_chart_language_legend"}},[a("div",{staticClass:"ui placeholder"},[a("div",{staticClass:"line"}),a("div",{staticClass:"line"}),a("div",{staticClass:"line"}),a("div",{staticClass:"line"}),a("div",{staticClass:"line"}),a("div",{staticClass:"line"}),a("div",{staticClass:"line"}),a("div",{staticClass:"line"}),a("div",{staticClass:"line"}),a("div",{staticClass:"line"}),a("div",{staticClass:"line"}),a("div",{staticClass:"line"})])]),t._m(3)]),a("h4",{staticClass:"ui top attached block header"},[a("i",{staticClass:"pie chart icon"}),t._v(t._s(t.$t("submit frequency"))+" ")]),t._m(4),a("h4",{staticClass:"ui top attached block header"},[t._v(" "+t._s(t.$t("plagiarism information"))+" ")]),a("div",{staticClass:"ui bottom attached segment"},[a("div",{staticClass:"ui small statistics",staticStyle:{"text-align":"center",display:"block"}},[a("div",{staticClass:"statistic",staticStyle:{margin:"0px 0.5em 1em"}},[a("div",{staticClass:"value"},[t._v(" "+t._s(t.same_problem_time)+" ")]),a("div",{staticClass:"label"},[t._v(" "+t._s(t.$t("problem number"))+" ")])]),a("div",{staticClass:"statistic",staticStyle:{margin:"0px 0.5em 1em"}},[a("div",{staticClass:"value"},[t._v(" "+t._s(t.same_aver_length)+" ")]),a("div",{staticClass:"label"},[t._v(" "+t._s(t.$t("average length"))+" ")])]),a("div",{staticClass:"statistic",staticStyle:{margin:"0px 0.5em 1em"}},[a("div",{staticClass:"value"},[t._v(" "+t._s(t.same_percentage_aver)+"% ")]),a("div",{staticClass:"label"},[t._v(" "+t._s(t.$t("average plagiarism percentage"))+" ")])]),a("div",{staticClass:"statistic",staticStyle:{margin:"0px 0.5em 1em"}},[a("div",{staticClass:"value"},[t._v(" "+t._s(t.total_same)+" ")]),a("div",{staticClass:"label"},[t._v(" "+t._s(t.$t("total number"))+" ")])])])])])])])])])])])])])])])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"header"},[a("div",{staticClass:"line"}),a("div",{staticClass:"line"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"paragraph"},[a("div",{staticClass:"line"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"ui bottom attached segment"},[a("div",{attrs:{id:"pie_chart_legend"}}),a("div",[a("iframe",{staticClass:"chartjs-hidden-iframe",staticStyle:{display:"block",overflow:"hidden",border:"0px",margin:"0px",top:"0px",left:"0px",bottom:"0px",right:"0px",height:"100%",width:"100%",position:"absolute","pointer-events":"none","z-index":"-1"},attrs:{tabindex:"-1"}}),a("canvas",{staticStyle:{width:"260px",display:"block",height:"260px"},attrs:{height:"455",id:"pie_chart",width:"455"}})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("iframe",{staticClass:"chartjs-hidden-iframe",staticStyle:{display:"block",overflow:"hidden",border:"0px",margin:"0px",top:"0px",left:"0px",bottom:"0px",right:"0px",height:"100%",width:"100%",position:"absolute","pointer-events":"none","z-index":"-1"},attrs:{tabindex:"-1"}}),a("canvas",{staticStyle:{width:"260px",display:"block",height:"260px"},attrs:{height:"455",id:"pie_chart_language",width:"455"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"ui bottom attached segment"},[a("div",{staticClass:"hidden",attrs:{id:"drawgraphitem"}},[a("div",{staticStyle:{margin:"auto"}},[a("canvas",{attrs:{id:"canvas"}})])])])}],n=(a("c975"),a("e260"),a("baa5"),a("4e82"),a("cca6"),a("e6cf"),a("ddb0"),a("9ab4")),r=a("5698");a("1276");const l=a("c1df");function o(t={}){var{width:e,height:a}=Object.assign({width:700,height:100},t),s=150,i="body",n=parseInt(e/61.7);a=Math.max(9*n,a);var o=2,c=3,d=l().endOf("day").toDate(),u=l().startOf("day").subtract(1,"year").toDate(),h=null,p={},v=[],_=null,m=null,g=["#D8E6E7","#218380"],b="#ebedf0",f=!0,C="submission",y=!0,w=null,k=0,x={months:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],days:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],No:"No",on:"on",Less:"Less",More:"More"},$=Number(r["version"].split(".")[0]);function j(){r["select"](j.selector()).selectAll("svg.calendar-heatmap").remove();var t=(r["time"]&&r["time"].days||r["timeDays"])(u,d),i=(r["time"]&&r["time"].months||r["timeMonths"])(l(u).startOf("month").toDate(),d),h=l(t[0]);0==j.data().length?_=0:null===_&&(_=r["max"](j.data(),(function(t){return t.count}))),null===m&&(m=r["min"](j.data(),(function(t){return t.count})));var v,f,y=function(t){var e=t.substring(1,3),a=t.substring(3,5),s=t.substring(5,7);return e=parseInt(e,16),a=parseInt(a,16),s=parseInt(s,16),"rgb("+e+", "+a+", "+s+")"},M=function(t){return y(0===t?b:t<=5?g[0]:t<=10?g[1]:t<=20?g[2]:g[3])};function E(){var d=r["select"](j.selector()).style("position","relative").append("svg").attr("width",e).attr("class","calendar-heatmap").attr("height",a).style("padding-left",20).style("padding-top",0).style("overflow","inherit");f=d.selectAll(".day-cell").data(t);var u=f.enter().append("rect").attr("class","day-cell").attr("width",n).attr("height",n).attr("fill",(function(t){return M(D(t))})).attr("x",(function(t){var e=l(t),a=e.week()-h.week()+h.weeksInYear()*(e.weekYear()-h.weekYear());return a*(n+o)})).attr("y",(function(t){return c+L(t.getDay())*(n+o)}));if("function"===typeof w&&(3===$?u:u.merge(f)).on("click",(function(t){var e=D(t);w({date:t,count:e})})),j.tooltipEnabled()&&(3===$?u:u.merge(f)).on("mouseover",(function(t,e){v=r["select"](j.selector()).append("div").attr("class","day-cell-tooltip").html(A(t)).style("overflow","inherit").style("left",(function(){return Math.floor(e/8)*n+"px"})).style("top",(function(){return L(t.getDay())*(n+o)+2*c-20+"px"}))})).on("mouseout",(function(){v.remove()})),j.legendEnabled()){g.unshift(b);var p=d.append("g");p.selectAll(".calendar-heatmap-legend").data(g).enter().append("rect").attr("class","calendar-heatmap-legend").attr("width",n).attr("height",n).attr("x",(function(t,a){return e-s+13*(a+1)})).attr("y",a+o).attr("fill",(function(t){return t})),p.append("text").attr("class","calendar-heatmap-legend-text calendar-heatmap-legend-text-less").attr("x",e-s-13).attr("y",a+n).text(x.Less),p.append("text").attr("class","calendar-heatmap-legend-text calendar-heatmap-legend-text-more").attr("x",e-s+o+13*(g.length+1)).attr("y",a+n).text(x.More)}f.exit().remove();var _=-30;d.selectAll(".month").data(i).enter().append("text").attr("class","month-name").text((function(t){return x.months[t.getMonth()]})).attr("x",(function(e){var a=0;t.find((function(t,s){return a=s,l(e).isSame(t,"month")&&l(e).isSame(t,"year")}));var s=Math.floor(a/7)*(n+o);return s=Math.max(s,_+20),_=s,s})).attr("y",0),x.days.forEach((function(t,e){e=L(e),e%2&&d.append("text").attr("class","day-initial").attr("transform","translate(-12,"+(n+o)*(e+1)+")").style("text-anchor","middle").attr("dy","2").text(t)}))}function O(t){if("string"===typeof C)return C+(1===t?"":"s");for(var e in C){var a=C[e],s=a.min,i=a.max||a.min;if(i="Infinity"===i?1/0:i,t>=s&&t<=i)return a.unit}}function A(t){var e=l(t).format("ddd, MMM Do YYYY"),a=D(t);return"<span><strong>"+(a||x.No)+" "+O(a)+"</strong> "+x.on+" "+e+"</span>"}function D(t){var e=l(t).format("YYYY-MM-DD");return p[e]||0}function L(t){return 1===k?0===t?6:t-1:t}E(),j.data().map((function(t){return t.date.toDateString()}))}return j.data=function(t){return arguments.length?(v=t,p={},v.forEach((function(t){var e=l(t.date).format("YYYY-MM-DD"),a=p[e]||0;p[e]=a+t.count})),j):v},j.max=function(t){return arguments.length?(_=t,j):_},j.min=function(t){return arguments.length?(m=t,j):m},j.selector=function(t){return arguments.length?(i=t,j):i},j.startDate=function(t){return arguments.length?(u=t,d=l(t).endOf("day").add(1,"year").toDate(),j):h},j.colorRange=function(t,e){return arguments.length?(g=t,b=e,j):g},j.tooltipEnabled=function(t){return arguments.length?(f=t,j):f},j.tooltipUnit=function(t){return arguments.length?(C=t,j):C},j.legendEnabled=function(t){return arguments.length?(y=t,j):y},j.onClick=function(t){return arguments.length?(w=t,j):w()},j.locale=function(t){return arguments.length?(x=t,j):x},j}Array.prototype.find||(Array.prototype.find=function(t){if(null===this)throw new TypeError("Array.prototype.find called on null or undefined");if("function"!==typeof t)throw new TypeError("predicate must be a function");for(var e,a=Object(this),s=a.length>>>0,i=arguments[1],n=0;n<s;n++)if(e=a[n],t.call(i,e,n,a))return e});var c=a("d3a2"),d=a("20a2"),u=a("60a3"),h=a("1157"),p=a.n(h),v=a("2ef0"),_=a.n(v),m=a("30ef"),g=a.n(m),b=a("5a0c"),f=a.n(b),C=a("2f62"),y=a("92f1");const w=p.a;let k=(()=>{let t=class extends(Object(u["b"])(d["a"],y["a"])){constructor(){super(...arguments),this.award=[],this.dayjs=f.a,this.admin=!1,this.biography="",this.error=!1,this.const_variable={},this.article_publish=[],this.tutorial_publish=[],this.nick="",this.accepted_details={},this.reg_time=0,this.school="",this.github="",this.email="",this.statement="",this.vjudge_solved=0,this.os="",this.browser="",this.blog="",this.recent_submission={submission:0,accept:0},this.avatar="",this.acm_user=!1,this.privilege=!1,this.submission={local:[],hdu:[],poj:[],uva:[],other:[]},this.accept={hdu:[],poj:[],uva:[],local:[],other:[]},this.rank=0,this.vjudge_rank=0,this.last_login=0,this.local_accepted=0,this.other_accepted=0,this.same_percentage_aver=0,this.submission_count=[],this.same_problem_time=0,this.same_aver_length=0,this.total_same=0,this.finished=!1,this.user_id=""}onUserIdChange(t){t&&t.length&&t.length>0&&(this.initData(t),document.title=`User ${this.user_id} -- ${document.title}`)}initData(t){var e=this;this.userId=t;const s=this;this.axios.get("/api/user/"+t).then((async function({data:s}){if(!Object.prototype.hasOwnProperty.call(s.data,"information"))return e.statement=`The user "${t}" is not exist.`,void(e.error=!0);const i=s,n=i.data.submission,r=[];let l;const o=[];let c;const d=[];let u;const h=[];let p;const v=[];let m;const g=function(t){let e=[];return _.a.forEach(t,(function(t){4===t.result&&0!=t.problem_id&&e.push(t)})),e=_.a.uniqBy(e,"problem_id"),e.sort((function(t,e){return isNaN(t.problem_id)||isNaN(e.problem_id)?t.problem_id<e.problem_id?1:t.problem_id===e.problem_id?0:-1:parseInt(t.problem_id)-parseInt(e.problem_id)})),e},b=[],C=f()(),y={};_.a.forEach(n,(function(t){(t.time=f()(t.time)).add(3,"month").isAfter(C)&&b.push(t),"LOCAL"===t.oj_name?r.push(t):"HDU"===t.oj_name?o.push(t):"POJ"===t.oj_name?d.push(t):"UVA"===t.oj_name?h.push(t):v.push(t),y[t.oj_name]&&y[t.oj_name].length>0?y[t.oj_name].push(t):y[t.oj_name]=[t]})),b.sort((function(t,e){return t.time.isBefore(e.time)?-1:1}));const w={},k={};_.a.forEach(b,(function(t){const e=t.time.format("YYYY-MM-DD");w[e]?(++w[e],4===parseInt(t.result)&&++k[e]):(w[e]=1,k[e]=0,4===parseInt(t.result)&&(k[e]=1))})),c=g(o),l=g(r),u=g(d),p=g(h),m=g(v),y.LOCAL&&delete y.LOCAL;for(const t in y)Object.prototype.hasOwnProperty.call(y,t)&&(y[t]=g(y[t]));let x=i.data.privilege;if(x&&x.length>0)for(let t=0;t<x.length;++t){if("administrator"===x[t].rightstr){x=e.$t("administrator");break}if("source_browser"===x[t].rightstr){x=e.$t("code editor");break}if("editor"===x[t].rightstr){x=e.$t("problem editor");break}}"string"!==typeof x&&(x=e.$t("general user"));const $=function(t,e){return e.cnt-t.cnt};for(const t in y)Object.prototype.hasOwnProperty.call(y,t)&&("string"===typeof t&&0!==t.length||delete y[t]);console.log(y),i.data.os.sort($),i.data.browser.sort($);let j=i.data.information.github||"";return j.lastIndexOf("/")===j.length-1&&(j=j.substring(0,j.length-1)),-1!==j.indexOf("github.com")&&(j=j.substring(j.lastIndexOf("/")+1)),{award:i.data.award,admin:i.isadmin,biography:await e.renderRawAsync(i.data.information.biography||""),const_variable:i.data.const_variable,article_publish:i.data.article_publish,nick:i.data.information.nick,reg_time:i.data.information.reg_time,school:i.data.information.school,submission_count:i.data.submission_count,github:j,email:i.data.information.email,vjudge_solved:i.data.information.vjudge_accept,os:i.data.os,browser:i.data.browser,blog:i.data.information.blog||"",recent_submission:{submission:w,accept:k},avatar:e.hasAvatarURL(i.data.information)?e.getAvatarURL(Object.assign({user_id:t},i.data.information)):a("84ef"),user_id:t,acm_user:i.data.acm_user,privilege:x,submission:{local:r,hdu:o,poj:d,uva:h,other:v},accept:{hdu:c,poj:u,uva:p,local:l,other:m},rank:i.data.rank,vjudge_rank:i.data.vjudge_rank,last_login:i.data.login_time&&i.data.login_time[0]?i.data.login_time[0].time:"",local_accepted:l.length,accepted_details:y,other_accepted:c.length+u.length+p.length+m.length,same_percentage_aver:parseInt(i.data.sim_average_percentage),same_problem_time:parseInt(i.data.sim_count),same_aver_length:parseInt(i.data.sim_average_length),total_same:i.data.total_sim_time}})).then(t=>{Object.assign(this,t),this.finished=!0}).then(()=>{w("#preload").hide();const t=w("title").html();w(".placeholder").remove(),this.$nextTick(()=>{const t=f()().endOf("day").toDate(),e=f()().startOf("day").subtract(1,"year").toDate(),a=this.submission_count,i={};_.a.forEach(a,(function(t){t.day<10&&(t.day="0"+t.day),t.month<10&&(t.month="0"+t.month);const e=t.year+"-"+t.month+"-"+t.day;i[e]?i[e]+=t.cnt:i[e]=t.cnt}));const n=r["timeDays"](e,t).map((function(t){return{date:t,count:i[f()(t).format("YYYY-MM-DD")]||0}})),l=o({width:w(".heatmap").width()}).data(n).selector(".heatmap").tooltipEnabled(!0).colorRange(["#c6e48b","#7bc96f","#239a3b","#196127"],"#dfdfdf").onClick((function(){})).tooltipEnabled(!0).legendEnabled(!0);l(),s.$nextTick((function(){const t=new g.a(document.getElementById("pie_chart").getContext("2d"),{type:"pie",data:{datasets:[{data:[s.local_accepted,_.a.reduce(s.submission.local,(function(t,e){return e.result=parseInt(e.result),6===e.result?t+1:t}),0),_.a.reduce(s.submission.local,(function(t,e){return 10===e.result?t+1:t}),0),_.a.reduce(s.submission.local,(function(t,e){return 7===e.result?t+1:t}),0),_.a.reduce(s.submission.local,(function(t,e){return 8===e.result?t+1:t}),0),_.a.reduce(s.submission.local,(function(t,e){return 9===e.result?t+1:t}),0),_.a.reduce(s.submission.local,(function(t,e){return 11===e.result?t+1:t}),0),_.a.reduce(s.submission.local,(function(t,e){return 5===e.result?t+1:t}),0)],backgroundColor:["#66dd66","#ff6384","darkorchid","#ffce56","#00b5ad","#35a0e8","#F7464A","#D4CCC5"]}],labels:["Accepted","Wrong Answer","Runtime Error","Time Limit Exceeded","Memory Limit Exceeded","Output Limit Exceeded","Compile Error","Presentation Error"]},options:{responsive:!0,legend:{display:!1},legendCallback:function(t){const e=[];e.push('<ul style="list-style: none; padding-left: 20px; margin-top: 0; " class="'+t.id+'-legend">');const a=t.data,s=a.datasets,i=a.labels;if(s.length)for(let n=0;n<s[0].data.length;++n)e.push('<li style="font-size: 12px; width: 50%; display: inline-block; color: #666; "><span style="width: 10px; height: 10px; display: inline-block; border-radius: 50%; margin-right: 5px; background-color: '+s[0].backgroundColor[n]+'; "></span>'),i[n]&&e.push(i[n]),e.push("</li>");return e.push("</ul>"),e.join("")}}});document.getElementById("pie_chart_legend").innerHTML=t.generateLegend();const e=new g.a(document.getElementById("pie_chart_language").getContext("2d"),{type:"pie",data:{datasets:[{data:[_.a.reduce(s.submission.local,(function(t,e){return"0"===e.language||"21"===e.language?t+1:t}),0),_.a.reduce(s.submission.local,(function(t,e){return"1"===e.language||"19"===e.language||"20"===e.language?t+1:t}),0),_.a.reduce(s.submission.local,(function(t,e){return"3"===e.language||"23"===e.language||"24"===e.language?t+1:t}),0),_.a.reduce(s.submission.local,(function(t,e){return"6"===e.language?t+1:t}),0),_.a.reduce(s.submission.local,(function(t,e){return"13"===e.language?t+1:t}),0),_.a.reduce(s.submission.local,(function(t,e){return"14"===e.language?t+1:t}),0),_.a.reduce(s.submission.local,(function(t,e){return"2"===e.language?t+1:t}),0)],backgroundColor:["#66dd66","#ff6384","darkorchid","#ffce56","#00b5ad","#35a0e8","#E2EAE9"]}],labels:["GCC","G++","Java","Python","Clang","Clang++","Pascal"]},options:{responsive:!0,legend:{display:!1},legendCallback:function(t){const e=[];e.push('<ul style="list-style: none; padding-left: 20px; margin-top: 0; " class="'+t.id+'-legend">');const a=t.data,s=a.datasets,i=a.labels;if(s.length)for(let n=0;n<s[0].data.length;++n)e.push('<li style="font-size: 12px; width: 50%; display: inline-block; color: #666; "><span style="width: 10px; height: 10px; display: inline-block; border-radius: 50%; margin-right: 5px; background-color: '+s[0].backgroundColor[n]+'; "></span>'),i[n]&&e.push(i[n]),e.push("</li>");return e.push("</ul>"),e.join("")}}});document.getElementById("pie_chart_language_legend").innerHTML=e.generateLegend();const a={type:"line",data:{labels:_.a.keys(s.recent_submission.submission),datasets:[{label:this.$t("total submission"),backgroundColor:window.chartColors.red,borderColor:window.chartColors.red,data:_.a.values(s.recent_submission.submission),fill:!1},{label:this.$t("accept"),fill:!1,backgroundColor:window.chartColors.blue,borderColor:window.chartColors.blue,data:_.a.values(s.recent_submission.accept)}]},options:{responsive:!0,title:{display:!1,text:this.$t("statistic information")},tooltips:{mode:"index",intersect:!1},hover:{mode:"nearest",intersect:!0},scales:{xAxes:[{display:!0,scaleLabel:{display:!1,labelString:this.$t("month")}}],yAxes:[{display:!0,scaleLabel:{display:!1,labelString:this.$t("submit")}}]}}},i=document.getElementById("canvas").getContext("2d");window.myLine=new g.a(i,a)}))}),w("title").html(s.user_id+" "+s.nick+" "+t)}),this.axios.get("/api/user/tutorial/"+t).then(({data:t})=>{const a=t.data;a.forEach((async function(t){t.title=await e.renderRawAsync(t.title||"")})),this.tutorial_publish=t.data})}get online(){return this.$store.getters.onlineUser.some(t=>t.user_id===this.user_id)}};return Object(n["c"])([Object(u["c"])({default:""})],t.prototype,"userId",void 0),Object(n["c"])([Object(u["d"])("userId")],t.prototype,"onUserIdChange",null),t=Object(n["c"])([Object(u["a"])({components:{ContestMode:c["a"]},computed:Object(C["b"])(["contestMode"])})],t),t})();var x=k,$=x,j=(a("8c5f"),a("2877")),M=Object(j["a"])($,s,i,!1,null,"91fd84c6",null);e["a"]=M.exports},"20a2":function(t,e,a){"use strict";var s=a("9ab4"),i=a("2b0e"),n=a("60a3"),r=a("3657");const{getAvatarURL:l,hasAvatarURL:o}=r["a"];let c=(()=>{let t=class extends i["a"]{getAvatarURL(...t){return l.apply(this,t)}hasAvatarURL(...t){return o.apply(this,t)}};return t=Object(s["c"])([n["a"]],t),t})();e["a"]=c},"7f4b":function(t,e,a){},"8c5f":function(t,e,a){"use strict";var s=a("7f4b"),i=a.n(s);i.a},"92f1":function(t,e,a){"use strict";a("e260"),a("e6cf"),a("ddb0");var s=a("9ab4"),i=a("2b0e"),n=a("60a3"),r=a("ebb0"),l=a.n(r),o=a("a390"),c=a.n(o);let d=(()=>{let t=class extends i["a"]{constructor(){super(...arguments),this.originalWorker=new c.a}created(){this.worker_=new l.a(this.originalWorker)}beforeDestroy(){this.originalWorker.terminate()}async renderAsync(t){return this.worker_.postMessage({type:"render",content:t})}async renderRawAsync(t){return this.worker_.postMessage({type:"renderRaw",content:t})}};return t=Object(s["c"])([n["a"]],t),t})();e["a"]=d},a390:function(t,e,a){"use strict";t.exports=function(){return new Worker("/35d51a4a2c1896d2313d.worker.js")}},bc99:function(t,e,a){"use strict";var s=a("111f"),i=a.n(s);e["default"]=i.a},d3a2:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"ui negative message"},[a("div",{staticClass:"header"},[a("i",{staticClass:"ban icon"}),t._v(t._s(t.$t("contest mode")))]),a("p",[t._v(t._s(t.$t("context")))])])},i=[],n=a("9ab4"),r=a("60a3"),l=a("2b0e");let o=(()=>{let t=class extends l["a"]{};return t=Object(n["c"])([r["a"]],t),t})();var c=o,d=c,u=a("2877"),h=a("bc99"),p=Object(u["a"])(d,s,i,!1,null,"5816c0f2",null);"function"===typeof h["default"]&&Object(h["default"])(p);e["a"]=p.exports},ebb0:function(t,e,a){"use strict";var s=0;function i(t,e){var a=e.data;if(Array.isArray(a)&&!(a.length<2)){var s=a[0],i=a[1],n=a[2],r=t._callbacks[s];r&&(delete t._callbacks[s],r(i,n))}}function n(t){var e=this;e._worker=t,e._callbacks={},t.addEventListener("message",(function(t){i(e,t)}))}n.prototype.postMessage=function(t){var e=this,a=s++,n=[a,t];return new Promise((function(t,s){if(e._callbacks[a]=function(e,a){if(e)return s(new Error(e.message));t(a)},"undefined"!==typeof e._worker.controller){var r=new MessageChannel;r.port1.onmessage=function(t){i(e,t)},e._worker.controller.postMessage(n,[r.port2])}else e._worker.postMessage(n)}))},t.exports=n}}]);
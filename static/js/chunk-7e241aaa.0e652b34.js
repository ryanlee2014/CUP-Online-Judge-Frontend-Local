(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7e241aaa"],{"0a8a":function(t,a,e){"use strict";var s=e("9d5a"),i=e.n(s);i.a},"111f":function(t,a){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"zh-cn":{"context":"根据管理员设置，该页面禁止进入"},"en":{"context":"According to admin setup, you don\'t have privilege to access target page"},"ja":{"context":"都合によって、このページはアクセス禁止されている"}}'),delete t.options._Ctor}},1681:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return t.contestMode?e("div",{staticClass:"ui container padding"},[e("ContestMode")],1):e("div",{staticClass:"ui container pusher"},[e("div",{staticClass:"padding"},[e("h2",{directives:[{name:"show",rawName:"v-show",value:!t.finished,expression:"!finished"}],staticClass:"ui dividing header"},[t._v(" "+t._s(t.$t("loading"))+" ")]),e("div",{directives:[{name:"show",rawName:"v-show",value:t.finished,expression:"finished"}],staticClass:"ui grid"},[t.error?e("div",{staticClass:"row"},[e("div",{staticClass:"ui huge error message",staticStyle:{margin:"auto"}},[e("div",{staticClass:"header"},[e("i",{staticClass:"remove icon"}),t._v(" "+t._s(t.$t("error")))]),e("p",[t._v(t._s(t.statement))])])]):e("div",{staticClass:"row"},[e("div",{staticClass:"five wide column"},[e("div",{staticClass:"ui card",staticStyle:{width:"100%"},attrs:{id:"user_card"}},[e("div",{staticClass:"blurring dimmable image",attrs:{id:"avatar_container"}},[e("img",{attrs:{src:t.avatar}}),e("div",{staticClass:"ui placeholder"},[e("div",{staticClass:"square image"})])]),e("div",{staticClass:"content"},[e("div",{staticClass:"ui placeholder"},[t._m(0),t._m(1)]),e("div",{staticClass:"header"},[e("span",{domProps:{innerHTML:t._s(t.nick)}}),t._v(" "),e("a",{attrs:{href:"mail.php?to_user="+t.user_id}},[e("i",{staticClass:"mail icon"})])]),e("div",{staticClass:"meta"},[e("i",{staticClass:"user circle outline icon"}),e("a",{staticClass:"group"},[t._v(t._s(t.privilege))]),"2016011253"===t.user_id?e("i",{staticClass:"user circle outline icon"}):t._e(),"2016011253"===t.user_id?e("a",{staticClass:"group"},[t._v(" "+t._s(t.$t("system development"))+" ")]):t._e(),t.acm_user?e("br"):t._e(),t.acm_user?e("a",{staticClass:"group"},[e("i",{staticClass:"user icon"}),t._v("ACM "+t._s(t.acm_user.level?t.$t("formal member"):t.$t("reserve member")))]):t._e(),e("br"),t._v(" "+t._s(t.$t("reg time"))+": "+t._s(t.dayjs(t.reg_time).format("YYYY-MM-DD"))+" "),t._l(t.award,(function(a){return e("a",{key:a.year+a.award,staticClass:"group"},[e("br"),e("i",{staticClass:"trophy icon"}),t._v(" "+t._s(a.year+"年"+a.award))])}))],2)]),e("div",{staticClass:"extra content"},[e("a",[e("i",{staticClass:"check icon"}),t._v(t._s(t.$t("local"))+" "+t._s(t.$t("pass"))+" "+t._s(t.local_accepted)+" 题 ")]),e("a",{staticStyle:{float:"right"}},[e("i",{staticClass:"line chart icon"}),t._v("Rank: "+t._s(t.rank))]),e("br"),e("a",[e("i",{staticClass:"check icon"}),t._v("VJudge "+t._s(t.$t("pass"))+" "+t._s(t.vjudge_solved)+" 题 ")]),e("a",{staticStyle:{float:"right"}},[e("i",{staticClass:"line chart icon"}),t._v("Rank: "+t._s(t.vjudge_rank))]),e("br"),e("a",[e("i",{staticClass:"check icon"}),t._v(t._s(t.$t("other platform"))+" "+t._s(t.$t("pass"))+" "+t._s(t.other_accepted-t.vjudge_solved)+" 题 ")]),e("br"),t._l(t.accepted_details,(function(a,s){return e("span",{key:s},[e("a",[e("i",{staticClass:"check icon"}),t._v(t._s(s)+" "+t._s(t.$t("pass"))+" "+t._s(a.length)+" 题 ")]),e("br")])}))],2)]),e("div",{staticClass:"ui card",staticStyle:{width:"100%"}},[e("div",{staticClass:"content"},[e("div",{staticClass:"header"},[t._v(" "+t._s(t.$t("status"))+" ")])]),e("div",{staticClass:"content"},[e("div",{staticClass:"ui placeholder"},[e("div",{staticClass:"line"}),e("div",{staticClass:"line"})]),t.online?e("div",{staticClass:"ui header"},[t._v(" "+t._s(t.$t("current online"))+" ")]):t._e(),t.online?t._e():e("div",{staticClass:"ui header"},[t._v(" "+t._s(t.$t("offline"))+" "),e("div",{staticClass:"sub header"},[t._v(" "+t._s(t.$t("last login"))+":"+t._s(t.last_login?new Date(t.last_login).toLocaleString():"")+" ")])])])]),e("div",{staticClass:"ui card",staticStyle:{width:"100%"}},[e("div",{staticClass:"content"},[e("div",{staticClass:"header"},[t._v(" "+t._s(t.$t("publish"))+" ")])]),e("div",{staticClass:"content"},[e("div",{staticClass:"ui placeholder"},[e("div",{staticClass:"line"}),e("div",{staticClass:"line"})]),e("table",{staticClass:"ui very basic table"},[e("thead",[e("th",[t._v("ID")]),e("th",[t._v(t._s(t.$t("title")))])]),e("tbody",t._l(t.article_publish,(function(a){return e("tr",{key:a.article_id},[e("td",[t._v(" "+t._s(a.article_id)+" ")]),e("td",[e("router-link",{attrs:{to:"/discuss/thread/"+a.article_id}},[t._v(" "+t._s(a.title)+" ")])],1)])})),0)])])]),e("div",{staticClass:"ui card",staticStyle:{width:"100%"}},[e("div",{staticClass:"content"},[e("div",{staticClass:"header"},[t._v(" "+t._s(t.$t("tutorial"))+" ")])]),e("div",{staticClass:"content"},[e("div",{staticClass:"ui placeholder"},[e("div",{staticClass:"line"}),e("div",{staticClass:"line"})]),e("table",{staticClass:"ui very basic table"},[e("thead",[e("th",[t._v(t._s(t.$t("problem_id")))]),e("th",[t._v(t._s(t.$t("title")))])]),e("tbody",t._l(t.tutorial_publish,(function(a){return e("tr",{key:a.problem_id},[e("td",[t._v(" "+t._s(a.problem_id)+" ")]),e("td",[e("router-link",{attrs:{to:"/tutorial/"+a.problem_id},domProps:{innerHTML:t._s(a.title)}})],1)])})),0)])])]),t.admin?e("div",{staticClass:"ui card",staticStyle:{width:"100%"}},[e("div",{staticClass:"content"},[e("div",{staticClass:"header"},[t._v(" "+t._s(t.$t("use os"))+" ")])]),e("div",{staticClass:"content"},[e("table",{staticClass:"ui very basic table"},[e("thead",[e("th",[t._v(t._s(t.$t("os")))]),e("th",[t._v(t._s(t.$t("version")))]),e("th",[t._v(t._s(t.$t("frequency")))])]),e("tbody",t._l(t.os,(function(a){return e("tr",{key:a.os_name+a.os_version},[e("td",[t._v(" "+t._s(a.os_name)+" ")]),e("td",[t._v(" "+t._s(a.os_version)+" ")]),e("td",[t._v(" "+t._s(a.cnt)+" ")])])})),0)])])]):t._e(),t.admin?e("div",{staticClass:"ui card",staticStyle:{width:"100%"}},[e("div",{staticClass:"content"},[e("div",{staticClass:"header"},[t._v(" "+t._s(t.$t("use browser"))+" ")])]),e("div",{staticClass:"content"},[e("table",{staticClass:"ui very basic table"},[e("thead",[e("th",[t._v(t._s(t.$t("browser")))]),e("th",[t._v(t._s(t.$t("version")))]),e("th",[t._v(t._s(t.$t("frequency")))])]),e("tbody",t._l(t.browser,(function(a){return e("tr",{key:a.browser_name+a.browser_version},[e("td",[t._v(" "+t._s(a.browser_name)+" ")]),e("td",[t._v(" "+t._s(a.browser_version)+" ")]),e("td",[t._v(" "+t._s(a.cnt)+" ")])])})),0)])])]):t._e()]),e("div",{staticClass:"eleven wide column"},[e("div",{staticClass:"ui grid"},[e("div",{staticClass:"row"},[e("div",{staticClass:"sixteen wide column"},[e("div",{staticClass:"ui grid"},[e("div",{staticClass:"row"},[e("div",{staticClass:"eight wide column"},[e("div",{staticClass:"ui grid"},[e("div",{staticClass:"row"},[e("div",{staticClass:"column"},[e("h4",{staticClass:"ui top attached block header"},[e("i",{staticClass:"id card icon"}),t._v(t._s(t.$t("user_id")))]),e("div",{staticClass:"ui attached segment"},[e("div",{},[t._v(" "+t._s(t.user_id)+" ")]),e("div",{staticClass:"ui placeholder"},[e("div",{staticClass:"line"}),e("div",{staticClass:"line"})])]),t.biography&&t.biography.length>0?e("h4",{staticClass:"ui attached block header"},[e("i",{staticClass:"id badge icon"}),t._v(t._s(t.$t("biography"))+" ")]):t._e(),t.biography&&t.biography.length>0?e("div",{staticClass:"ui attached segment",domProps:{innerHTML:t._s(t.biography)}},[e("div",{staticClass:"ui placeholder"},[e("div",{staticClass:"line"}),e("div",{staticClass:"line"})])]):t._e(),t.school&&t.school.length>0?e("h4",{staticClass:"ui attached block header"},[e("i",{staticClass:"university icon"}),t._v(t._s(t.$t("school"))+" ")]):t._e(),t.school.length>0?e("div",{staticClass:"ui attached segment"},[e("div",{},[t._v(t._s(t.school))]),e("div",{staticClass:"ui placeholder"},[e("div",{staticClass:"line"}),e("div",{staticClass:"line"})])]):t._e(),t.email&&t.email.length>0?e("h4",{staticClass:"ui attached block header"},[e("i",{staticClass:"mail square icon"}),t._v(t._s(t.$t("email")))]):t._e(),t.email&&t.email.length>0?e("div",{staticClass:"ui attached segment"},[e("div",[e("a",{attrs:{href:"mailto:"+t.email}},[t._v(t._s(t.email))])]),e("div",{staticClass:"ui placeholder"},[e("div",{staticClass:"line"}),e("div",{staticClass:"line"})])]):t._e(),t.blog&&t.blog.length>0?e("h4",{staticClass:"ui attached block header"},[e("i",{staticClass:"newspaper icon"}),t._v("Blog ")]):t._e(),t.blog&&t.blog.length>0?e("div",{staticClass:"ui attached segment"},[e("div",{},[e("a",{attrs:{href:t.blog,target:"_blank"}},[t._v(t._s(t.blog))])]),e("div",{staticClass:"ui placeholder"},[e("div",{staticClass:"line"}),e("div",{staticClass:"line"})])]):t._e(),t.github&&t.github.length>0?e("h4",{staticClass:"ui attached block header"},[e("i",{staticClass:"github icon"}),t._v("GitHub ")]):t._e(),t.github&&t.github.length>0?e("div",{staticClass:"ui bottom attached segment"},[t.github&&t.github?e("iframe",{attrs:{src:"https://ghbtns.com/github-btn.html?user="+t.github+"&type=follow&count=true",frameborder:"0",height:"20px",scrolling:"0",width:"170px"}}):t._e(),e("div",{staticClass:"ui placeholder"},[e("div",{staticClass:"line"}),e("div",{staticClass:"line"})])]):t._e()])])])]),e("div",{staticClass:"eight wide column"},[e("h4",{staticClass:"ui top attached block header"},[e("i",{staticClass:"pie chart icon"}),t._v(t._s(t.$t("submit statistic"))+" ")]),t._m(2)])]),e("div",{staticClass:"row"},[e("div",{staticClass:"sixteen wide column"},[e("h4",{staticClass:"ui top attached block header"},[t._v(t._s(t.$t("submit heatmap")))]),e("div",{staticClass:"ui bottom attached segment heatmap"},[e("div",{staticClass:"ui placeholder"},[e("div",{staticClass:"line"}),e("div",{staticClass:"line"})])])])]),e("div",{staticClass:"row"},[e("div",{staticClass:"eight wide column"},[e("div",{staticClass:"row"},[e("div",{staticClass:"column"},[e("h4",{staticClass:"ui top attached block header"},[t._v(t._s(t.$t("local")))]),e("div",{staticClass:"ui attached segment"},[t._l(t.accept.local,(function(a){return e("router-link",{key:a.problem_id,attrs:{to:"/problem/submit/"+a.problem_id}},[t._v(" "+t._s(a.problem_id)+" ")])})),e("div",{staticClass:"ui placeholder"},[e("div",{staticClass:"line"}),e("div",{staticClass:"line"})])],2),t.accept.hdu.length>0?e("h4",{staticClass:"ui attached block header"},[t._v("HDU")]):t._e(),t.accept.hdu.length>0?e("div",{staticClass:"ui attached segment"},[t._l(t.accept.hdu,(function(a){return e("a",{key:a.problem_id,attrs:{href:"hdusubmitpage.php?id="+a.problem_id}},[t._v(" "+t._s(a.problem_id))])})),e("div",{staticClass:"ui placeholder"},[e("div",{staticClass:"line"}),e("div",{staticClass:"line"})])],2):t._e(),t.accept.poj.length>0?e("h4",{staticClass:"ui attached block header"},[t._v("POJ")]):t._e(),t.accept.poj.length>0?e("div",{staticClass:"ui attached segment"},[t._l(t.accept.poj,(function(a){return e("a",{key:a.problem_id,attrs:{href:"pojsubmitpage.php?id="+a.problem_id}},[t._v(" "+t._s(a.problem_id))])})),e("div",{staticClass:"ui placeholder"},[e("div",{staticClass:"line"}),e("div",{staticClass:"line"})])],2):t._e(),t.accept.uva.length>0?e("h4",{staticClass:"ui attached block header"},[t._v("UVA")]):t._e(),t.accept.uva.length>0?e("div",{staticClass:"ui attached segment"},[t._l(t.accept.uva,(function(a){return e("a",{key:a.problem_id,attrs:{href:"uvasubmitpage.php?id="+a.problem_id}},[t._v(" "+t._s(a.problem_id))])})),e("div",{staticClass:"ui placeholder"},[e("div",{staticClass:"line"}),e("div",{staticClass:"line"})])],2):t._e(),t.accept.other.length>0?e("h4",{staticClass:"ui attached block header"},[t._v(t._s(t.$t("other")))]):t._e(),t.accept.other.length>0?e("div",{staticClass:"ui bottom attached segment"},[t._l(t.accept.other,(function(a){return e("a",{key:a.problem_id,attrs:{href:"javascript:void(0)"}},[t._v(" "+t._s(a.oj_name+" "+a.problem_id))])})),e("div",{staticClass:"ui placeholder"},[e("div",{staticClass:"line"}),e("div",{staticClass:"line"})])],2):t._e()])]),e("div",{staticClass:"row"}),e("div",{staticClass:"row"})]),e("div",{staticClass:"eight wide column"},[e("h4",{staticClass:"ui top attached block header"},[e("i",{staticClass:"pie chart icon"}),t._v(t._s(t.$t("programming language"))+" ")]),e("div",{staticClass:"ui bottom attached segment"},[e("div",{attrs:{id:"pie_chart_language_legend"}},[e("div",{staticClass:"ui placeholder"},[e("div",{staticClass:"line"}),e("div",{staticClass:"line"}),e("div",{staticClass:"line"}),e("div",{staticClass:"line"}),e("div",{staticClass:"line"}),e("div",{staticClass:"line"}),e("div",{staticClass:"line"}),e("div",{staticClass:"line"}),e("div",{staticClass:"line"}),e("div",{staticClass:"line"}),e("div",{staticClass:"line"}),e("div",{staticClass:"line"})])]),t._m(3)]),e("h4",{staticClass:"ui top attached block header"},[e("i",{staticClass:"pie chart icon"}),t._v(t._s(t.$t("submit frequency"))+" ")]),t._m(4),e("h4",{staticClass:"ui top attached block header"},[t._v(" "+t._s(t.$t("plagiarism information"))+" ")]),e("div",{staticClass:"ui bottom attached segment"},[e("div",{staticClass:"ui small statistics",staticStyle:{"text-align":"center",display:"block"}},[e("div",{staticClass:"statistic",staticStyle:{margin:"0px 0.5em 1em"}},[e("div",{staticClass:"value"},[t._v(" "+t._s(t.same_problem_time)+" ")]),e("div",{staticClass:"label"},[t._v(" "+t._s(t.$t("problem number"))+" ")])]),e("div",{staticClass:"statistic",staticStyle:{margin:"0px 0.5em 1em"}},[e("div",{staticClass:"value"},[t._v(" "+t._s(t.same_aver_length)+" ")]),e("div",{staticClass:"label"},[t._v(" "+t._s(t.$t("average length"))+" ")])]),e("div",{staticClass:"statistic",staticStyle:{margin:"0px 0.5em 1em"}},[e("div",{staticClass:"value"},[t._v(" "+t._s(t.same_percentage_aver)+"% ")]),e("div",{staticClass:"label"},[t._v(" "+t._s(t.$t("average plagiarism percentage"))+" ")])]),e("div",{staticClass:"statistic",staticStyle:{margin:"0px 0.5em 1em"}},[e("div",{staticClass:"value"},[t._v(" "+t._s(t.total_same)+" ")]),e("div",{staticClass:"label"},[t._v(" "+t._s(t.$t("total number"))+" ")])])])])])])])])])])])])])])])},i=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"header"},[e("div",{staticClass:"line"}),e("div",{staticClass:"line"})])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"paragraph"},[e("div",{staticClass:"line"})])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"ui bottom attached segment"},[e("div",{attrs:{id:"pie_chart_legend"}}),e("div",[e("iframe",{staticClass:"chartjs-hidden-iframe",staticStyle:{display:"block",overflow:"hidden",border:"0px",margin:"0px",top:"0px",left:"0px",bottom:"0px",right:"0px",height:"100%",width:"100%",position:"absolute","pointer-events":"none","z-index":"-1"},attrs:{tabindex:"-1"}}),e("canvas",{staticStyle:{width:"260px",display:"block",height:"260px"},attrs:{height:"455",id:"pie_chart",width:"455"}})])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("iframe",{staticClass:"chartjs-hidden-iframe",staticStyle:{display:"block",overflow:"hidden",border:"0px",margin:"0px",top:"0px",left:"0px",bottom:"0px",right:"0px",height:"100%",width:"100%",position:"absolute","pointer-events":"none","z-index":"-1"},attrs:{tabindex:"-1"}}),e("canvas",{staticStyle:{width:"260px",display:"block",height:"260px"},attrs:{height:"455",id:"pie_chart_language",width:"455"}})])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"ui bottom attached segment"},[e("div",{staticClass:"hidden",attrs:{id:"drawgraphitem"}},[e("div",{staticStyle:{margin:"auto"}},[e("canvas",{attrs:{id:"canvas"}})])])])}],n=(e("c975"),e("e260"),e("baa5"),e("4e82"),e("cca6"),e("ddb0"),e("1da1")),r=e("9ab4"),l=e("5698"),c=(e("1276"),e("c1df"));function o(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{width:a,height:e}=Object.assign({width:700,height:100},t),s=150,i="body",n=parseInt(a/61.7);e=Math.max(9*n,e);var r=2,o=3,d=c().endOf("day").toDate(),u=c().startOf("day").subtract(1,"year").toDate(),h=null,v={},p=[],_=null,m=null,g=["#D8E6E7","#218380"],b="#ebedf0",f=!0,C="submission",y=!0,w=null,x=0,k={months:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],days:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],No:"No",on:"on",Less:"Less",More:"More"},$=Number(l["version"].split(".")[0]);function j(){l["select"](j.selector()).selectAll("svg.calendar-heatmap").remove();var t=(l["time"]&&l["time"].days||l["timeDays"])(u,d),i=(l["time"]&&l["time"].months||l["timeMonths"])(c(u).startOf("month").toDate(),d),h=c(t[0]);0==j.data().length?_=0:null===_&&(_=l["max"](j.data(),(function(t){return t.count}))),null===m&&(m=l["min"](j.data(),(function(t){return t.count})));var p,f,y=function(t){var a=t.substring(1,3),e=t.substring(3,5),s=t.substring(5,7);return a=parseInt(a,16),e=parseInt(e,16),s=parseInt(s,16),"rgb("+a+", "+e+", "+s+")"},O=function(t){return y(0===t?b:t<=5?g[0]:t<=10?g[1]:t<=20?g[2]:g[3])};function E(){var d=l["select"](j.selector()).style("position","relative").append("svg").attr("width",a).attr("class","calendar-heatmap").attr("height",e).style("padding-left",20).style("padding-top",0).style("overflow","inherit");f=d.selectAll(".day-cell").data(t);var u=f.enter().append("rect").attr("class","day-cell").attr("width",n).attr("height",n).attr("fill",(function(t){return O(D(t))})).attr("x",(function(t){var a=c(t),e=a.week()-h.week()+h.weeksInYear()*(a.weekYear()-h.weekYear());return e*(n+r)})).attr("y",(function(t){return o+L(t.getDay())*(n+r)}));if("function"===typeof w&&(3===$?u:u.merge(f)).on("click",(function(t){var a=D(t);w({date:t,count:a})})),j.tooltipEnabled()&&(3===$?u:u.merge(f)).on("mouseover",(function(t,a){p=l["select"](j.selector()).append("div").attr("class","day-cell-tooltip").html(A(t)).style("overflow","inherit").style("left",(function(){return Math.floor(a/8)*n+"px"})).style("top",(function(){return L(t.getDay())*(n+r)+2*o-20+"px"}))})).on("mouseout",(function(){p.remove()})),j.legendEnabled()){g.unshift(b);var v=d.append("g");v.selectAll(".calendar-heatmap-legend").data(g).enter().append("rect").attr("class","calendar-heatmap-legend").attr("width",n).attr("height",n).attr("x",(function(t,e){return a-s+13*(e+1)})).attr("y",e+r).attr("fill",(function(t){return t})),v.append("text").attr("class","calendar-heatmap-legend-text calendar-heatmap-legend-text-less").attr("x",a-s-13).attr("y",e+n).text(k.Less),v.append("text").attr("class","calendar-heatmap-legend-text calendar-heatmap-legend-text-more").attr("x",a-s+r+13*(g.length+1)).attr("y",e+n).text(k.More)}f.exit().remove();var _=-30;d.selectAll(".month").data(i).enter().append("text").attr("class","month-name").text((function(t){return k.months[t.getMonth()]})).attr("x",(function(a){var e=0;t.find((function(t,s){return e=s,c(a).isSame(t,"month")&&c(a).isSame(t,"year")}));var s=Math.floor(e/7)*(n+r);return s=Math.max(s,_+20),_=s,s})).attr("y",0),k.days.forEach((function(t,a){a=L(a),a%2&&d.append("text").attr("class","day-initial").attr("transform","translate(-12,"+(n+r)*(a+1)+")").style("text-anchor","middle").attr("dy","2").text(t)}))}function M(t){if("string"===typeof C)return C+(1===t?"":"s");for(var a in C){var e=C[a],s=e.min,i=e.max||e.min;if(i="Infinity"===i?1/0:i,t>=s&&t<=i)return e.unit}}function A(t){var a=c(t).format("ddd, MMM Do YYYY"),e=D(t);return"<span><strong>"+(e||k.No)+" "+M(e)+"</strong> "+k.on+" "+a+"</span>"}function D(t){var a=c(t).format("YYYY-MM-DD");return v[a]||0}function L(t){return 1===x?0===t?6:t-1:t}E(),j.data().map((function(t){return t.date.toDateString()}))}return(j.data=function(t){return arguments.length?(p=t,v={},p.forEach((function(t){var a=c(t.date).format("YYYY-MM-DD"),e=v[a]||0;v[a]=e+t.count})),j):p},j.max=function(t){return arguments.length?(_=t,j):_},j.min=function(t){return arguments.length?(m=t,j):m},j.selector=function(t){return arguments.length?(i=t,j):i},j.startDate=function(t){return arguments.length?(u=t,d=c(t).endOf("day").add(1,"year").toDate(),j):h},j.colorRange=function(t,a){return arguments.length?(g=t,b=a,j):g},j.tooltipEnabled=function(t){return arguments.length?(f=t,j):f},j.tooltipUnit=function(t){return arguments.length?(C=t,j):C},j.legendEnabled=function(t){return arguments.length?(y=t,j):y},j.onClick=function(t){return arguments.length?(w=t,j):w()},j.locale=function(t){return arguments.length?(k=t,j):k},j)}Array.prototype.find||(Array.prototype.find=function(t){if(null===this)throw new TypeError("Array.prototype.find called on null or undefined");if("function"!==typeof t)throw new TypeError("predicate must be a function");for(var a,e=Object(this),s=e.length>>>0,i=arguments[1],n=0;n<s;n++)if(a=e[n],t.call(i,a,n,e))return a});var d=e("d3a2"),u=e("20a2"),h=e("60a3"),v=e("1157"),p=e.n(v),_=e("2ef0"),m=e.n(_),g=e("30ef"),b=e.n(g),f=e("5a0c"),C=e.n(f),y=e("2f62"),w=e("92f1"),x=p.a,k=class extends(Object(h["b"])(u["a"],w["a"])){constructor(){super(...arguments),this.award=[],this.dayjs=C.a,this.admin=!1,this.biography="",this.error=!1,this.const_variable={},this.article_publish=[],this.tutorial_publish=[],this.nick="",this.accepted_details={},this.reg_time=0,this.school="",this.github="",this.email="",this.statement="",this.vjudge_solved=0,this.os="",this.browser="",this.blog="",this.recent_submission={submission:0,accept:0},this.avatar="",this.acm_user=!1,this.privilege=!1,this.submission={local:[],hdu:[],poj:[],uva:[],other:[]},this.accept={hdu:[],poj:[],uva:[],local:[],other:[]},this.rank=0,this.vjudge_rank=0,this.last_login=0,this.local_accepted=0,this.other_accepted=0,this.same_percentage_aver=0,this.submission_count=[],this.same_problem_time=0,this.same_aver_length=0,this.total_same=0,this.finished=!1,this.user_id=""}onUserIdChange(t){t&&t.length&&t.length>0&&(this.initData(t),document.title="User ".concat(this.user_id," -- ").concat(document.title))}initData(t){var a=this;this.userId=t;var s=this;this.axios.get("/api/user/".concat(t)).then(function(){var s=Object(n["a"])((function*(s){var{data:i}=s;if(!Object.prototype.hasOwnProperty.call(i.data,"information"))return a.statement='The user "'.concat(t,'" is not exist.'),void(a.error=!0);var n,r,l,c,o,d=i,u=d.data.submission,h=[],v=[],p=[],_=[],g=[],b=function(t){var a=[];return m.a.forEach(t,(function(t){4===t.result&&0!=t.problem_id&&a.push(t)})),a=m.a.uniqBy(a,"problem_id"),a.sort((function(t,a){return isNaN(t.problem_id)||isNaN(a.problem_id)?t.problem_id<a.problem_id?1:t.problem_id===a.problem_id?0:-1:parseInt(t.problem_id)-parseInt(a.problem_id)})),a},f=[],y=C()(),w={};m.a.forEach(u,(function(t){(t.time=C()(t.time)).add(3,"month").isAfter(y)&&f.push(t),"LOCAL"===t.oj_name?h.push(t):"HDU"===t.oj_name?v.push(t):"POJ"===t.oj_name?p.push(t):"UVA"===t.oj_name?_.push(t):g.push(t),w[t.oj_name]&&w[t.oj_name].length>0?w[t.oj_name].push(t):w[t.oj_name]=[t]})),f.sort((function(t,a){return t.time.isBefore(a.time)?-1:1}));var x={},k={};for(var $ in m.a.forEach(f,(function(t){var a=t.time.format("YYYY-MM-DD");x[a]?(++x[a],4===parseInt(t.result)&&++k[a]):(x[a]=1,k[a]=0,4===parseInt(t.result)&&(k[a]=1))})),r=b(v),n=b(h),l=b(p),c=b(_),o=b(g),w.LOCAL&&delete w.LOCAL,w)Object.prototype.hasOwnProperty.call(w,$)&&(w[$]=b(w[$]));var j=d.data.privilege;if(j&&j.length>0)for(var O=0;O<j.length;++O){if("administrator"===j[O].rightstr){j=a.$t("administrator");break}if("source_browser"===j[O].rightstr){j=a.$t("code editor");break}if("editor"===j[O].rightstr){j=a.$t("problem editor");break}}"string"!==typeof j&&(j=a.$t("general user"));var E=function(t,a){return a.cnt-t.cnt};for(var M in w)Object.prototype.hasOwnProperty.call(w,M)&&("string"===typeof M&&0!==M.length||delete w[M]);console.log(w),d.data.os.sort(E),d.data.browser.sort(E);var A=d.data.information.github||"";return A.lastIndexOf("/")===A.length-1&&(A=A.substring(0,A.length-1)),-1!==A.indexOf("github.com")&&(A=A.substring(A.lastIndexOf("/")+1)),{award:d.data.award,admin:d.isadmin,biography:yield a.renderRawAsync(d.data.information.biography||""),const_variable:d.data.const_variable,article_publish:d.data.article_publish,nick:d.data.information.nick,reg_time:d.data.information.reg_time,school:d.data.information.school,submission_count:d.data.submission_count,github:A,email:d.data.information.email,vjudge_solved:d.data.information.vjudge_accept,os:d.data.os,browser:d.data.browser,blog:d.data.information.blog||"",recent_submission:{submission:x,accept:k},avatar:a.hasAvatarURL(d.data.information)?a.getAvatarURL(Object.assign({user_id:t},d.data.information)):e("84ef"),user_id:t,acm_user:d.data.acm_user,privilege:j,submission:{local:h,hdu:v,poj:p,uva:_,other:g},accept:{hdu:r,poj:l,uva:c,local:n,other:o},rank:d.data.rank,vjudge_rank:d.data.vjudge_rank,last_login:d.data.login_time&&d.data.login_time[0]?d.data.login_time[0].time:"",local_accepted:n.length,accepted_details:w,other_accepted:r.length+l.length+c.length+o.length,same_percentage_aver:parseInt(d.data.sim_average_percentage),same_problem_time:parseInt(d.data.sim_count),same_aver_length:parseInt(d.data.sim_average_length),total_same:d.data.total_sim_time}}));return function(t){return s.apply(this,arguments)}}()).then(t=>{Object.assign(this,t),this.finished=!0}).then(()=>{x("#preload").hide();var t=x("title").html();x(".placeholder").remove(),this.$nextTick(()=>{var t=C()().endOf("day").toDate(),a=C()().startOf("day").subtract(1,"year").toDate(),e=this.submission_count,i={};m.a.forEach(e,(function(t){t.day<10&&(t.day="0"+t.day),t.month<10&&(t.month="0"+t.month);var a=t.year+"-"+t.month+"-"+t.day;i[a]?i[a]+=t.cnt:i[a]=t.cnt}));var n=l["timeDays"](a,t).map((function(t){return{date:t,count:i[C()(t).format("YYYY-MM-DD")]||0}})),r=o({width:x(".heatmap").width()}).data(n).selector(".heatmap").tooltipEnabled(!0).colorRange(["#c6e48b","#7bc96f","#239a3b","#196127"],"#dfdfdf").onClick((function(){})).tooltipEnabled(!0).legendEnabled(!0);r(),s.$nextTick((function(){var t=new b.a(document.getElementById("pie_chart").getContext("2d"),{type:"pie",data:{datasets:[{data:[s.local_accepted,m.a.reduce(s.submission.local,(function(t,a){return a.result=parseInt(a.result),6===a.result?t+1:t}),0),m.a.reduce(s.submission.local,(function(t,a){return 10===a.result?t+1:t}),0),m.a.reduce(s.submission.local,(function(t,a){return 7===a.result?t+1:t}),0),m.a.reduce(s.submission.local,(function(t,a){return 8===a.result?t+1:t}),0),m.a.reduce(s.submission.local,(function(t,a){return 9===a.result?t+1:t}),0),m.a.reduce(s.submission.local,(function(t,a){return 11===a.result?t+1:t}),0),m.a.reduce(s.submission.local,(function(t,a){return 5===a.result?t+1:t}),0)],backgroundColor:["#66dd66","#ff6384","darkorchid","#ffce56","#00b5ad","#35a0e8","#F7464A","#D4CCC5"]}],labels:["Accepted","Wrong Answer","Runtime Error","Time Limit Exceeded","Memory Limit Exceeded","Output Limit Exceeded","Compile Error","Presentation Error"]},options:{responsive:!0,legend:{display:!1},legendCallback:function(t){var a=[];a.push('<ul style="list-style: none; padding-left: 20px; margin-top: 0; " class="'+t.id+'-legend">');var e=t.data,s=e.datasets,i=e.labels;if(s.length)for(var n=0;n<s[0].data.length;++n)a.push('<li style="font-size: 12px; width: 50%; display: inline-block; color: #666; "><span style="width: 10px; height: 10px; display: inline-block; border-radius: 50%; margin-right: 5px; background-color: '+s[0].backgroundColor[n]+'; "></span>'),i[n]&&a.push(i[n]),a.push("</li>");return a.push("</ul>"),a.join("")}}});document.getElementById("pie_chart_legend").innerHTML=t.generateLegend();var a=new b.a(document.getElementById("pie_chart_language").getContext("2d"),{type:"pie",data:{datasets:[{data:[m.a.reduce(s.submission.local,(function(t,a){return"0"===a.language||"21"===a.language?t+1:t}),0),m.a.reduce(s.submission.local,(function(t,a){return"1"===a.language||"19"===a.language||"20"===a.language?t+1:t}),0),m.a.reduce(s.submission.local,(function(t,a){return"3"===a.language||"23"===a.language||"24"===a.language?t+1:t}),0),m.a.reduce(s.submission.local,(function(t,a){return"6"===a.language?t+1:t}),0),m.a.reduce(s.submission.local,(function(t,a){return"13"===a.language?t+1:t}),0),m.a.reduce(s.submission.local,(function(t,a){return"14"===a.language?t+1:t}),0),m.a.reduce(s.submission.local,(function(t,a){return"2"===a.language?t+1:t}),0)],backgroundColor:["#66dd66","#ff6384","darkorchid","#ffce56","#00b5ad","#35a0e8","#E2EAE9"]}],labels:["GCC","G++","Java","Python","Clang","Clang++","Pascal"]},options:{responsive:!0,legend:{display:!1},legendCallback:function(t){var a=[];a.push('<ul style="list-style: none; padding-left: 20px; margin-top: 0; " class="'+t.id+'-legend">');var e=t.data,s=e.datasets,i=e.labels;if(s.length)for(var n=0;n<s[0].data.length;++n)a.push('<li style="font-size: 12px; width: 50%; display: inline-block; color: #666; "><span style="width: 10px; height: 10px; display: inline-block; border-radius: 50%; margin-right: 5px; background-color: '+s[0].backgroundColor[n]+'; "></span>'),i[n]&&a.push(i[n]),a.push("</li>");return a.push("</ul>"),a.join("")}}});document.getElementById("pie_chart_language_legend").innerHTML=a.generateLegend();var e={type:"line",data:{labels:m.a.keys(s.recent_submission.submission),datasets:[{label:this.$t("total submission"),backgroundColor:window.chartColors.red,borderColor:window.chartColors.red,data:m.a.values(s.recent_submission.submission),fill:!1},{label:this.$t("accept"),fill:!1,backgroundColor:window.chartColors.blue,borderColor:window.chartColors.blue,data:m.a.values(s.recent_submission.accept)}]},options:{responsive:!0,title:{display:!1,text:this.$t("statistic information")},tooltips:{mode:"index",intersect:!1},hover:{mode:"nearest",intersect:!0},scales:{xAxes:[{display:!0,scaleLabel:{display:!1,labelString:this.$t("month")}}],yAxes:[{display:!0,scaleLabel:{display:!1,labelString:this.$t("submit")}}]}}},i=document.getElementById("canvas").getContext("2d");window.myLine=new b.a(i,e)}))}),x("title").html(s.user_id+" "+s.nick+" "+t)}),this.axios.get("/api/user/tutorial/".concat(t)).then(t=>{var{data:e}=t,s=e.data;s.forEach(function(){var t=Object(n["a"])((function*(t){t.title=yield a.renderRawAsync(t.title||"")}));return function(a){return t.apply(this,arguments)}}()),this.tutorial_publish=e.data})}get online(){return this.$store.getters.onlineUser.some(t=>t.user_id===this.user_id)}};Object(r["c"])([Object(h["c"])({default:""})],k.prototype,"userId",void 0),Object(r["c"])([Object(h["d"])("userId")],k.prototype,"onUserIdChange",null),k=Object(r["c"])([Object(h["a"])({components:{ContestMode:d["a"]},computed:Object(y["b"])(["contestMode"])})],k);var $=k,j=$,O=(e("0a8a"),e("2877")),E=Object(O["a"])(j,s,i,!1,null,"cbca3046",null);a["a"]=E.exports},"20a2":function(t,a,e){"use strict";var s=e("9ab4"),i=e("2b0e"),n=e("2fe1"),r=e("3657"),{getAvatarURL:l,hasAvatarURL:c}=r["a"],o=class extends i["a"]{getAvatarURL(){for(var t=arguments.length,a=new Array(t),e=0;e<t;e++)a[e]=arguments[e];return l.apply(this,a)}hasAvatarURL(){for(var t=arguments.length,a=new Array(t),e=0;e<t;e++)a[e]=arguments[e];return c.apply(this,a)}};o=Object(s["c"])([n["b"]],o),a["a"]=o},"9d5a":function(t,a,e){},bc99:function(t,a,e){"use strict";var s=e("111f"),i=e.n(s);a["default"]=i.a},d3a2:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"ui negative message"},[e("div",{staticClass:"header"},[e("i",{staticClass:"ban icon"}),t._v(t._s(t.$t("contest mode")))]),e("p",[t._v(t._s(t.$t("context")))])])},i=[],n=e("9ab4"),r=e("60a3"),l=e("2b0e"),c=class extends l["a"]{};c=Object(n["c"])([r["a"]],c);var o=c,d=o,u=e("2877"),h=e("bc99"),v=Object(u["a"])(d,s,i,!1,null,"5816c0f2",null);"function"===typeof h["default"]&&Object(h["default"])(v);a["a"]=v.exports}}]);
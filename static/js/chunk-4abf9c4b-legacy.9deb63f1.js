(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4abf9c4b"],{"0a8a":function(t,e,a){"use strict";var s=a("9d5a"),i=a.n(s);i.a},"111f":function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"zh-cn":{"context":"根据管理员设置，该页面禁止进入"},"en":{"context":"According to admin setup, you don\'t have privilege to access target page"},"ja":{"context":"都合によって、このページはアクセス禁止されている"}}'),delete t.options._Ctor}},1681:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.contestMode?a("div",{staticClass:"ui container padding"},[a("ContestMode")],1):a("div",{staticClass:"ui container pusher"},[a("div",{staticClass:"padding"},[a("h2",{directives:[{name:"show",rawName:"v-show",value:!t.finished,expression:"!finished"}],staticClass:"ui dividing header"},[t._v(" "+t._s(t.$t("loading"))+" ")]),a("div",{directives:[{name:"show",rawName:"v-show",value:t.finished,expression:"finished"}],staticClass:"ui grid"},[t.error?a("div",{staticClass:"row"},[a("div",{staticClass:"ui huge error message",staticStyle:{margin:"auto"}},[a("div",{staticClass:"header"},[a("i",{staticClass:"remove icon"}),t._v(" "+t._s(t.$t("error")))]),a("p",[t._v(t._s(t.statement))])])]):a("div",{staticClass:"row"},[a("div",{staticClass:"five wide column"},[a("div",{staticClass:"ui card",staticStyle:{width:"100%"},attrs:{id:"user_card"}},[a("div",{staticClass:"blurring dimmable image",attrs:{id:"avatar_container"}},[a("img",{attrs:{src:t.avatar}}),a("div",{staticClass:"ui placeholder"},[a("div",{staticClass:"square image"})])]),a("div",{staticClass:"content"},[a("div",{staticClass:"ui placeholder"},[t._m(0),t._m(1)]),a("div",{staticClass:"header"},[a("span",{domProps:{innerHTML:t._s(t.nick)}}),t._v(" "),a("a",{attrs:{href:"mail.php?to_user="+t.user_id}},[a("i",{staticClass:"mail icon"})])]),a("div",{staticClass:"meta"},[a("i",{staticClass:"user circle outline icon"}),a("a",{staticClass:"group"},[t._v(t._s(t.privilege))]),"2016011253"===t.user_id?a("i",{staticClass:"user circle outline icon"}):t._e(),"2016011253"===t.user_id?a("a",{staticClass:"group"},[t._v(" "+t._s(t.$t("system development"))+" ")]):t._e(),t.acm_user?a("br"):t._e(),t.acm_user?a("a",{staticClass:"group"},[a("i",{staticClass:"user icon"}),t._v("ACM "+t._s(t.acm_user.level?t.$t("formal member"):t.$t("reserve member")))]):t._e(),a("br"),t._v(" "+t._s(t.$t("reg time"))+": "+t._s(t.dayjs(t.reg_time).format("YYYY-MM-DD"))+" "),t._l(t.award,(function(e){return a("a",{key:e.year+e.award,staticClass:"group"},[a("br"),a("i",{staticClass:"trophy icon"}),t._v(" "+t._s(e.year+"年"+e.award))])}))],2)]),a("div",{staticClass:"extra content"},[a("a",[a("i",{staticClass:"check icon"}),t._v(t._s(t.$t("local"))+" "+t._s(t.$t("pass"))+" "+t._s(t.local_accepted)+" 题 ")]),a("a",{staticStyle:{float:"right"}},[a("i",{staticClass:"line chart icon"}),t._v("Rank: "+t._s(t.rank))]),a("br"),a("a",[a("i",{staticClass:"check icon"}),t._v("VJudge "+t._s(t.$t("pass"))+" "+t._s(t.vjudge_solved)+" 题 ")]),a("a",{staticStyle:{float:"right"}},[a("i",{staticClass:"line chart icon"}),t._v("Rank: "+t._s(t.vjudge_rank))]),a("br"),a("a",[a("i",{staticClass:"check icon"}),t._v(t._s(t.$t("other platform"))+" "+t._s(t.$t("pass"))+" "+t._s(t.other_accepted-t.vjudge_solved)+" 题 ")]),a("br"),t._l(t.accepted_details,(function(e,s){return a("span",{key:s},[a("a",[a("i",{staticClass:"check icon"}),t._v(t._s(s)+" "+t._s(t.$t("pass"))+" "+t._s(e.length)+" 题 ")]),a("br")])}))],2)]),a("div",{staticClass:"ui card",staticStyle:{width:"100%"}},[a("div",{staticClass:"content"},[a("div",{staticClass:"header"},[t._v(" "+t._s(t.$t("status"))+" ")])]),a("div",{staticClass:"content"},[a("div",{staticClass:"ui placeholder"},[a("div",{staticClass:"line"}),a("div",{staticClass:"line"})]),t.online?a("div",{staticClass:"ui header"},[t._v(" "+t._s(t.$t("current online"))+" ")]):t._e(),t.online?t._e():a("div",{staticClass:"ui header"},[t._v(" "+t._s(t.$t("offline"))+" "),a("div",{staticClass:"sub header"},[t._v(" "+t._s(t.$t("last login"))+":"+t._s(t.last_login?new Date(t.last_login).toLocaleString():"")+" ")])])])]),a("div",{staticClass:"ui card",staticStyle:{width:"100%"}},[a("div",{staticClass:"content"},[a("div",{staticClass:"header"},[t._v(" "+t._s(t.$t("publish"))+" ")])]),a("div",{staticClass:"content"},[a("div",{staticClass:"ui placeholder"},[a("div",{staticClass:"line"}),a("div",{staticClass:"line"})]),a("table",{staticClass:"ui very basic table"},[a("thead",[a("th",[t._v("ID")]),a("th",[t._v(t._s(t.$t("title")))])]),a("tbody",t._l(t.article_publish,(function(e){return a("tr",{key:e.article_id},[a("td",[t._v(" "+t._s(e.article_id)+" ")]),a("td",[a("router-link",{attrs:{to:"/discuss/thread/"+e.article_id}},[t._v(" "+t._s(e.title)+" ")])],1)])})),0)])])]),a("div",{staticClass:"ui card",staticStyle:{width:"100%"}},[a("div",{staticClass:"content"},[a("div",{staticClass:"header"},[t._v(" "+t._s(t.$t("tutorial"))+" ")])]),a("div",{staticClass:"content"},[a("div",{staticClass:"ui placeholder"},[a("div",{staticClass:"line"}),a("div",{staticClass:"line"})]),a("table",{staticClass:"ui very basic table"},[a("thead",[a("th",[t._v(t._s(t.$t("problem_id")))]),a("th",[t._v(t._s(t.$t("title")))])]),a("tbody",t._l(t.tutorial_publish,(function(e){return a("tr",{key:e.problem_id},[a("td",[t._v(" "+t._s(e.problem_id)+" ")]),a("td",[a("router-link",{attrs:{to:"/tutorial/"+e.problem_id},domProps:{innerHTML:t._s(e.title)}})],1)])})),0)])])]),t.admin?a("div",{staticClass:"ui card",staticStyle:{width:"100%"}},[a("div",{staticClass:"content"},[a("div",{staticClass:"header"},[t._v(" "+t._s(t.$t("use os"))+" ")])]),a("div",{staticClass:"content"},[a("table",{staticClass:"ui very basic table"},[a("thead",[a("th",[t._v(t._s(t.$t("os")))]),a("th",[t._v(t._s(t.$t("version")))]),a("th",[t._v(t._s(t.$t("frequency")))])]),a("tbody",t._l(t.os,(function(e){return a("tr",{key:e.os_name+e.os_version},[a("td",[t._v(" "+t._s(e.os_name)+" ")]),a("td",[t._v(" "+t._s(e.os_version)+" ")]),a("td",[t._v(" "+t._s(e.cnt)+" ")])])})),0)])])]):t._e(),t.admin?a("div",{staticClass:"ui card",staticStyle:{width:"100%"}},[a("div",{staticClass:"content"},[a("div",{staticClass:"header"},[t._v(" "+t._s(t.$t("use browser"))+" ")])]),a("div",{staticClass:"content"},[a("table",{staticClass:"ui very basic table"},[a("thead",[a("th",[t._v(t._s(t.$t("browser")))]),a("th",[t._v(t._s(t.$t("version")))]),a("th",[t._v(t._s(t.$t("frequency")))])]),a("tbody",t._l(t.browser,(function(e){return a("tr",{key:e.browser_name+e.browser_version},[a("td",[t._v(" "+t._s(e.browser_name)+" ")]),a("td",[t._v(" "+t._s(e.browser_version)+" ")]),a("td",[t._v(" "+t._s(e.cnt)+" ")])])})),0)])])]):t._e()]),a("div",{staticClass:"eleven wide column"},[a("div",{staticClass:"ui grid"},[a("div",{staticClass:"row"},[a("div",{staticClass:"sixteen wide column"},[a("div",{staticClass:"ui grid"},[a("div",{staticClass:"row"},[a("div",{staticClass:"eight wide column"},[a("div",{staticClass:"ui grid"},[a("div",{staticClass:"row"},[a("div",{staticClass:"column"},[a("h4",{staticClass:"ui top attached block header"},[a("i",{staticClass:"id card icon"}),t._v(t._s(t.$t("user_id")))]),a("div",{staticClass:"ui attached segment"},[a("div",{},[t._v(" "+t._s(t.user_id)+" ")]),a("div",{staticClass:"ui placeholder"},[a("div",{staticClass:"line"}),a("div",{staticClass:"line"})])]),t.biography&&t.biography.length>0?a("h4",{staticClass:"ui attached block header"},[a("i",{staticClass:"id badge icon"}),t._v(t._s(t.$t("biography"))+" ")]):t._e(),t.biography&&t.biography.length>0?a("div",{staticClass:"ui attached segment",domProps:{innerHTML:t._s(t.biography)}},[a("div",{staticClass:"ui placeholder"},[a("div",{staticClass:"line"}),a("div",{staticClass:"line"})])]):t._e(),t.school&&t.school.length>0?a("h4",{staticClass:"ui attached block header"},[a("i",{staticClass:"university icon"}),t._v(t._s(t.$t("school"))+" ")]):t._e(),t.school.length>0?a("div",{staticClass:"ui attached segment"},[a("div",{},[t._v(t._s(t.school))]),a("div",{staticClass:"ui placeholder"},[a("div",{staticClass:"line"}),a("div",{staticClass:"line"})])]):t._e(),t.email&&t.email.length>0?a("h4",{staticClass:"ui attached block header"},[a("i",{staticClass:"mail square icon"}),t._v(t._s(t.$t("email")))]):t._e(),t.email&&t.email.length>0?a("div",{staticClass:"ui attached segment"},[a("div",[a("a",{attrs:{href:"mailto:"+t.email}},[t._v(t._s(t.email))])]),a("div",{staticClass:"ui placeholder"},[a("div",{staticClass:"line"}),a("div",{staticClass:"line"})])]):t._e(),t.blog&&t.blog.length>0?a("h4",{staticClass:"ui attached block header"},[a("i",{staticClass:"newspaper icon"}),t._v("Blog ")]):t._e(),t.blog&&t.blog.length>0?a("div",{staticClass:"ui attached segment"},[a("div",{},[a("a",{attrs:{href:t.blog,target:"_blank"}},[t._v(t._s(t.blog))])]),a("div",{staticClass:"ui placeholder"},[a("div",{staticClass:"line"}),a("div",{staticClass:"line"})])]):t._e(),t.github&&t.github.length>0?a("h4",{staticClass:"ui attached block header"},[a("i",{staticClass:"github icon"}),t._v("GitHub ")]):t._e(),t.github&&t.github.length>0?a("div",{staticClass:"ui bottom attached segment"},[t.github&&t.github?a("iframe",{attrs:{src:"https://ghbtns.com/github-btn.html?user="+t.github+"&type=follow&count=true",frameborder:"0",height:"20px",scrolling:"0",width:"170px"}}):t._e(),a("div",{staticClass:"ui placeholder"},[a("div",{staticClass:"line"}),a("div",{staticClass:"line"})])]):t._e()])])])]),a("div",{staticClass:"eight wide column"},[a("h4",{staticClass:"ui top attached block header"},[a("i",{staticClass:"pie chart icon"}),t._v(t._s(t.$t("submit statistic"))+" ")]),t._m(2)])]),a("div",{staticClass:"row"},[a("div",{staticClass:"sixteen wide column"},[a("h4",{staticClass:"ui top attached block header"},[t._v(t._s(t.$t("submit heatmap")))]),a("div",{staticClass:"ui bottom attached segment heatmap"},[a("div",{staticClass:"ui placeholder"},[a("div",{staticClass:"line"}),a("div",{staticClass:"line"})])])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"eight wide column"},[a("div",{staticClass:"row"},[a("div",{staticClass:"column"},[a("h4",{staticClass:"ui top attached block header"},[t._v(t._s(t.$t("local")))]),a("div",{staticClass:"ui attached segment"},[t._l(t.accept.local,(function(e){return a("router-link",{key:e.problem_id,attrs:{to:"/problem/submit/"+e.problem_id}},[t._v(" "+t._s(e.problem_id)+" ")])})),a("div",{staticClass:"ui placeholder"},[a("div",{staticClass:"line"}),a("div",{staticClass:"line"})])],2),t.accept.hdu.length>0?a("h4",{staticClass:"ui attached block header"},[t._v("HDU")]):t._e(),t.accept.hdu.length>0?a("div",{staticClass:"ui attached segment"},[t._l(t.accept.hdu,(function(e){return a("a",{key:e.problem_id,attrs:{href:"hdusubmitpage.php?id="+e.problem_id}},[t._v(" "+t._s(e.problem_id))])})),a("div",{staticClass:"ui placeholder"},[a("div",{staticClass:"line"}),a("div",{staticClass:"line"})])],2):t._e(),t.accept.poj.length>0?a("h4",{staticClass:"ui attached block header"},[t._v("POJ")]):t._e(),t.accept.poj.length>0?a("div",{staticClass:"ui attached segment"},[t._l(t.accept.poj,(function(e){return a("a",{key:e.problem_id,attrs:{href:"pojsubmitpage.php?id="+e.problem_id}},[t._v(" "+t._s(e.problem_id))])})),a("div",{staticClass:"ui placeholder"},[a("div",{staticClass:"line"}),a("div",{staticClass:"line"})])],2):t._e(),t.accept.uva.length>0?a("h4",{staticClass:"ui attached block header"},[t._v("UVA")]):t._e(),t.accept.uva.length>0?a("div",{staticClass:"ui attached segment"},[t._l(t.accept.uva,(function(e){return a("a",{key:e.problem_id,attrs:{href:"uvasubmitpage.php?id="+e.problem_id}},[t._v(" "+t._s(e.problem_id))])})),a("div",{staticClass:"ui placeholder"},[a("div",{staticClass:"line"}),a("div",{staticClass:"line"})])],2):t._e(),t.accept.other.length>0?a("h4",{staticClass:"ui attached block header"},[t._v(t._s(t.$t("other")))]):t._e(),t.accept.other.length>0?a("div",{staticClass:"ui bottom attached segment"},[t._l(t.accept.other,(function(e){return a("a",{key:e.problem_id,attrs:{href:"javascript:void(0)"}},[t._v(" "+t._s(e.oj_name+" "+e.problem_id))])})),a("div",{staticClass:"ui placeholder"},[a("div",{staticClass:"line"}),a("div",{staticClass:"line"})])],2):t._e()])]),a("div",{staticClass:"row"}),a("div",{staticClass:"row"})]),a("div",{staticClass:"eight wide column"},[a("h4",{staticClass:"ui top attached block header"},[a("i",{staticClass:"pie chart icon"}),t._v(t._s(t.$t("programming language"))+" ")]),a("div",{staticClass:"ui bottom attached segment"},[a("div",{attrs:{id:"pie_chart_language_legend"}},[a("div",{staticClass:"ui placeholder"},[a("div",{staticClass:"line"}),a("div",{staticClass:"line"}),a("div",{staticClass:"line"}),a("div",{staticClass:"line"}),a("div",{staticClass:"line"}),a("div",{staticClass:"line"}),a("div",{staticClass:"line"}),a("div",{staticClass:"line"}),a("div",{staticClass:"line"}),a("div",{staticClass:"line"}),a("div",{staticClass:"line"}),a("div",{staticClass:"line"})])]),t._m(3)]),a("h4",{staticClass:"ui top attached block header"},[a("i",{staticClass:"pie chart icon"}),t._v(t._s(t.$t("submit frequency"))+" ")]),t._m(4),a("h4",{staticClass:"ui top attached block header"},[t._v(" "+t._s(t.$t("plagiarism information"))+" ")]),a("div",{staticClass:"ui bottom attached segment"},[a("div",{staticClass:"ui small statistics",staticStyle:{"text-align":"center",display:"block"}},[a("div",{staticClass:"statistic",staticStyle:{margin:"0px 0.5em 1em"}},[a("div",{staticClass:"value"},[t._v(" "+t._s(t.same_problem_time)+" ")]),a("div",{staticClass:"label"},[t._v(" "+t._s(t.$t("problem number"))+" ")])]),a("div",{staticClass:"statistic",staticStyle:{margin:"0px 0.5em 1em"}},[a("div",{staticClass:"value"},[t._v(" "+t._s(t.same_aver_length)+" ")]),a("div",{staticClass:"label"},[t._v(" "+t._s(t.$t("average length"))+" ")])]),a("div",{staticClass:"statistic",staticStyle:{margin:"0px 0.5em 1em"}},[a("div",{staticClass:"value"},[t._v(" "+t._s(t.same_percentage_aver)+"% ")]),a("div",{staticClass:"label"},[t._v(" "+t._s(t.$t("average plagiarism percentage"))+" ")])]),a("div",{staticClass:"statistic",staticStyle:{margin:"0px 0.5em 1em"}},[a("div",{staticClass:"value"},[t._v(" "+t._s(t.total_same)+" ")]),a("div",{staticClass:"label"},[t._v(" "+t._s(t.$t("total number"))+" ")])])])])])])])])])])])])])])])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"header"},[a("div",{staticClass:"line"}),a("div",{staticClass:"line"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"paragraph"},[a("div",{staticClass:"line"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"ui bottom attached segment"},[a("div",{attrs:{id:"pie_chart_legend"}}),a("div",[a("iframe",{staticClass:"chartjs-hidden-iframe",staticStyle:{display:"block",overflow:"hidden",border:"0px",margin:"0px",top:"0px",left:"0px",bottom:"0px",right:"0px",height:"100%",width:"100%",position:"absolute","pointer-events":"none","z-index":"-1"},attrs:{tabindex:"-1"}}),a("canvas",{staticStyle:{width:"260px",display:"block",height:"260px"},attrs:{height:"455",id:"pie_chart",width:"455"}})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("iframe",{staticClass:"chartjs-hidden-iframe",staticStyle:{display:"block",overflow:"hidden",border:"0px",margin:"0px",top:"0px",left:"0px",bottom:"0px",right:"0px",height:"100%",width:"100%",position:"absolute","pointer-events":"none","z-index":"-1"},attrs:{tabindex:"-1"}}),a("canvas",{staticStyle:{width:"260px",display:"block",height:"260px"},attrs:{height:"455",id:"pie_chart_language",width:"455"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"ui bottom attached segment"},[a("div",{staticClass:"hidden",attrs:{id:"drawgraphitem"}},[a("div",{staticStyle:{margin:"auto"}},[a("canvas",{attrs:{id:"canvas"}})])])])}],n=(a("99af"),a("4160"),a("c975"),a("a15b"),a("baa5"),a("d81d"),a("13d5"),a("45fc"),a("d3b7"),a("4ae1"),a("25f0"),a("159b"),a("ddb0"),a("96cf"),a("1da1")),r=a("d4ec"),c=a("bee2"),l=a("262e"),o=a("99de"),d=a("7e84"),u=a("9ab4"),h=a("5698"),p=(a("7db0"),a("a9e3"),a("ac1f"),a("1276"),a("c1df"));function v(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=Object.assign({width:700,height:100},t),a=e.width,s=e.height,i=150,n="body",r=parseInt(a/61.7);s=Math.max(9*r,s);var c=2,l=3,o=p().endOf("day").toDate(),d=p().startOf("day").subtract(1,"year").toDate(),u=null,v={},_=[],m=null,f=null,b=["#D8E6E7","#218380"],g="#ebedf0",C=!0,y="submission",w=!0,k=null,x=0,j={months:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],days:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],No:"No",on:"on",Less:"Less",More:"More"},O=Number(h["version"].split(".")[0]);function $(){h["select"]($.selector()).selectAll("svg.calendar-heatmap").remove();var t=(h["time"]&&h["time"].days||h["timeDays"])(d,o),e=(h["time"]&&h["time"].months||h["timeMonths"])(p(d).startOf("month").toDate(),o),n=p(t[0]);0==$.data().length?m=0:null===m&&(m=h["max"]($.data(),(function(t){return t.count}))),null===f&&(f=h["min"]($.data(),(function(t){return t.count})));var u,_,C=function(t){var e=t.substring(1,3),a=t.substring(3,5),s=t.substring(5,7);return e=parseInt(e,16),a=parseInt(a,16),s=parseInt(s,16),"rgb("+e+", "+a+", "+s+")"},w=function(t){return C(0===t?g:t<=5?b[0]:t<=10?b[1]:t<=20?b[2]:b[3])};function R(){var o=h["select"]($.selector()).style("position","relative").append("svg").attr("width",a).attr("class","calendar-heatmap").attr("height",s).style("padding-left",20).style("padding-top",0).style("overflow","inherit");_=o.selectAll(".day-cell").data(t);var d=_.enter().append("rect").attr("class","day-cell").attr("width",r).attr("height",r).attr("fill",(function(t){return w(E(t))})).attr("x",(function(t){var e=p(t),a=e.week()-n.week()+n.weeksInYear()*(e.weekYear()-n.weekYear());return a*(r+c)})).attr("y",(function(t){return l+A(t.getDay())*(r+c)}));if("function"===typeof k&&(3===O?d:d.merge(_)).on("click",(function(t){var e=E(t);k({date:t,count:e})})),$.tooltipEnabled()&&(3===O?d:d.merge(_)).on("mouseover",(function(t,e){u=h["select"]($.selector()).append("div").attr("class","day-cell-tooltip").html(D(t)).style("overflow","inherit").style("left",(function(){return Math.floor(e/8)*r+"px"})).style("top",(function(){return A(t.getDay())*(r+c)+2*l-20+"px"}))})).on("mouseout",(function(){u.remove()})),$.legendEnabled()){b.unshift(g);var v=o.append("g");v.selectAll(".calendar-heatmap-legend").data(b).enter().append("rect").attr("class","calendar-heatmap-legend").attr("width",r).attr("height",r).attr("x",(function(t,e){return a-i+13*(e+1)})).attr("y",s+c).attr("fill",(function(t){return t})),v.append("text").attr("class","calendar-heatmap-legend-text calendar-heatmap-legend-text-less").attr("x",a-i-13).attr("y",s+r).text(j.Less),v.append("text").attr("class","calendar-heatmap-legend-text calendar-heatmap-legend-text-more").attr("x",a-i+c+13*(b.length+1)).attr("y",s+r).text(j.More)}_.exit().remove();var m=-30;o.selectAll(".month").data(e).enter().append("text").attr("class","month-name").text((function(t){return j.months[t.getMonth()]})).attr("x",(function(e){var a=0;t.find((function(t,s){return a=s,p(e).isSame(t,"month")&&p(e).isSame(t,"year")}));var s=Math.floor(a/7)*(r+c);return s=Math.max(s,m+20),m=s,s})).attr("y",0),j.days.forEach((function(t,e){e=A(e),e%2&&o.append("text").attr("class","day-initial").attr("transform","translate(-12,"+(r+c)*(e+1)+")").style("text-anchor","middle").attr("dy","2").text(t)}))}function M(t){if("string"===typeof y)return y+(1===t?"":"s");for(var e in y){var a=y[e],s=a.min,i=a.max||a.min;if(i="Infinity"===i?1/0:i,t>=s&&t<=i)return a.unit}}function D(t){var e=p(t).format("ddd, MMM Do YYYY"),a=E(t);return"<span><strong>"+(a||j.No)+" "+M(a)+"</strong> "+j.on+" "+e+"</span>"}function E(t){var e=p(t).format("YYYY-MM-DD");return v[e]||0}function A(t){return 1===x?0===t?6:t-1:t}R(),$.data().map((function(t){return t.date.toDateString()}))}return $.data=function(t){return arguments.length?(_=t,v={},_.forEach((function(t){var e=p(t.date).format("YYYY-MM-DD"),a=v[e]||0;v[e]=a+t.count})),$):_},$.max=function(t){return arguments.length?(m=t,$):m},$.min=function(t){return arguments.length?(f=t,$):f},$.selector=function(t){return arguments.length?(n=t,$):n},$.startDate=function(t){return arguments.length?(d=t,o=p(t).endOf("day").add(1,"year").toDate(),$):u},$.colorRange=function(t,e){return arguments.length?(b=t,g=e,$):b},$.tooltipEnabled=function(t){return arguments.length?(C=t,$):C},$.tooltipUnit=function(t){return arguments.length?(y=t,$):y},$.legendEnabled=function(t){return arguments.length?(w=t,$):w},$.onClick=function(t){return arguments.length?(k=t,$):k()},$.locale=function(t){return arguments.length?(j=t,$):j},$}Array.prototype.find||(Array.prototype.find=function(t){if(null===this)throw new TypeError("Array.prototype.find called on null or undefined");if("function"!==typeof t)throw new TypeError("predicate must be a function");for(var e,a=Object(this),s=a.length>>>0,i=arguments[1],n=0;n<s;n++)if(e=a[n],t.call(i,e,n,a))return e});var _=a("d3a2"),m=a("20a2"),f=a("60a3"),b=a("1157"),g=a.n(b),C=a("2ef0"),y=a.n(C),w=a("30ef"),k=a.n(w),x=a("5a0c"),j=a.n(x),O=a("2f62"),$=a("92f1");function R(t){function e(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}return function(){var a,s=Object(d["a"])(t);if(e()){var i=Object(d["a"])(this).constructor;a=Reflect.construct(s,arguments,i)}else a=s.apply(this,arguments);return Object(o["a"])(this,a)}}var M=g.a,D=function(t){Object(l["a"])(s,t);var e=R(s);function s(){var t;return Object(r["a"])(this,s),t=e.apply(this,arguments),t.award=[],t.dayjs=j.a,t.admin=!1,t.biography="",t.error=!1,t.const_variable={},t.article_publish=[],t.tutorial_publish=[],t.nick="",t.accepted_details={},t.reg_time=0,t.school="",t.github="",t.email="",t.statement="",t.vjudge_solved=0,t.os="",t.browser="",t.blog="",t.recent_submission={submission:0,accept:0},t.avatar="",t.acm_user=!1,t.privilege=!1,t.submission={local:[],hdu:[],poj:[],uva:[],other:[]},t.accept={hdu:[],poj:[],uva:[],local:[],other:[]},t.rank=0,t.vjudge_rank=0,t.last_login=0,t.local_accepted=0,t.other_accepted=0,t.same_percentage_aver=0,t.submission_count=[],t.same_problem_time=0,t.same_aver_length=0,t.total_same=0,t.finished=!1,t.user_id="",t}return Object(c["a"])(s,[{key:"onUserIdChange",value:function(t){t&&t.length&&t.length>0&&(this.initData(t),document.title="User ".concat(this.user_id," -- ").concat(document.title))}},{key:"initData",value:function(t){var e=this;this.userId=t;var s=this;this.axios.get("/api/user/".concat(t)).then(function(){var s=Object(n["a"])(regeneratorRuntime.mark((function s(i){var n,r,c,l,o,d,u,h,p,v,_,m,f,b,g,C,w,k,x,O,$,R,M,D,E;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:if(n=i.data,Object.prototype.hasOwnProperty.call(n.data,"information")){s.next=5;break}return e.statement='The user "'.concat(t,'" is not exist.'),e.error=!0,s.abrupt("return");case 5:for(O in r=n,c=r.data.submission,l=[],d=[],h=[],v=[],m=[],b=function(t){var e=[];return y.a.forEach(t,(function(t){4===t.result&&0!=t.problem_id&&e.push(t)})),e=y.a.uniqBy(e,"problem_id"),e.sort((function(t,e){return isNaN(t.problem_id)||isNaN(e.problem_id)?t.problem_id<e.problem_id?1:t.problem_id===e.problem_id?0:-1:parseInt(t.problem_id)-parseInt(e.problem_id)})),e},g=[],C=j()(),w={},y.a.forEach(c,(function(t){(t.time=j()(t.time)).add(3,"month").isAfter(C)&&g.push(t),"LOCAL"===t.oj_name?l.push(t):"HDU"===t.oj_name?d.push(t):"POJ"===t.oj_name?h.push(t):"UVA"===t.oj_name?v.push(t):m.push(t),w[t.oj_name]&&w[t.oj_name].length>0?w[t.oj_name].push(t):w[t.oj_name]=[t]})),g.sort((function(t,e){return t.time.isBefore(e.time)?-1:1})),k={},x={},y.a.forEach(g,(function(t){var e=t.time.format("YYYY-MM-DD");k[e]?(++k[e],4===parseInt(t.result)&&++x[e]):(k[e]=1,x[e]=0,4===parseInt(t.result)&&(x[e]=1))})),u=b(d),o=b(l),p=b(h),_=b(v),f=b(m),w.LOCAL&&delete w.LOCAL,w)Object.prototype.hasOwnProperty.call(w,O)&&(w[O]=b(w[O]));if($=r.data.privilege,!($&&$.length>0)){s.next=48;break}R=0;case 31:if(!(R<$.length)){s.next=48;break}if("administrator"!==$[R].rightstr){s.next=37;break}return $=e.$t("administrator"),s.abrupt("break",48);case 37:if("source_browser"!==$[R].rightstr){s.next=42;break}return $=e.$t("code editor"),s.abrupt("break",48);case 42:if("editor"!==$[R].rightstr){s.next=45;break}return $=e.$t("problem editor"),s.abrupt("break",48);case 45:++R,s.next=31;break;case 48:"string"!==typeof $&&($=e.$t("general user")),M=function(t,e){return e.cnt-t.cnt},s.t0=regeneratorRuntime.keys(w);case 51:if((s.t1=s.t0()).done){s.next=58;break}if(D=s.t1.value,Object.prototype.hasOwnProperty.call(w,D)){s.next=55;break}return s.abrupt("continue",51);case 55:"string"===typeof D&&0!==D.length||delete w[D],s.next=51;break;case 58:return console.log(w),r.data.os.sort(M),r.data.browser.sort(M),E=r.data.information.github||"",E.lastIndexOf("/")===E.length-1&&(E=E.substring(0,E.length-1)),-1!==E.indexOf("github.com")&&(E=E.substring(E.lastIndexOf("/")+1)),s.t2=r.data.award,s.t3=r.isadmin,s.next=68,e.renderRawAsync(r.data.information.biography||"");case 68:return s.t4=s.sent,s.t5=r.data.const_variable,s.t6=r.data.article_publish,s.t7=r.data.information.nick,s.t8=r.data.information.reg_time,s.t9=r.data.information.school,s.t10=r.data.submission_count,s.t11=E,s.t12=r.data.information.email,s.t13=r.data.information.vjudge_accept,s.t14=r.data.os,s.t15=r.data.browser,s.t16=r.data.information.blog||"",s.t17={submission:k,accept:x},s.t18=e.hasAvatarURL(r.data.information)?e.getAvatarURL(Object.assign({user_id:t},r.data.information)):a("84ef"),s.t19=t,s.t20=r.data.acm_user,s.t21=$,s.t22={local:l,hdu:d,poj:h,uva:v,other:m},s.t23={hdu:u,poj:p,uva:_,local:o,other:f},s.t24=r.data.rank,s.t25=r.data.vjudge_rank,s.t26=r.data.login_time&&r.data.login_time[0]?r.data.login_time[0].time:"",s.t27=o.length,s.t28=w,s.t29=u.length+p.length+_.length+f.length,s.t30=parseInt(r.data.sim_average_percentage),s.t31=parseInt(r.data.sim_count),s.t32=parseInt(r.data.sim_average_length),s.t33=r.data.total_sim_time,s.abrupt("return",{award:s.t2,admin:s.t3,biography:s.t4,const_variable:s.t5,article_publish:s.t6,nick:s.t7,reg_time:s.t8,school:s.t9,submission_count:s.t10,github:s.t11,email:s.t12,vjudge_solved:s.t13,os:s.t14,browser:s.t15,blog:s.t16,recent_submission:s.t17,avatar:s.t18,user_id:s.t19,acm_user:s.t20,privilege:s.t21,submission:s.t22,accept:s.t23,rank:s.t24,vjudge_rank:s.t25,last_login:s.t26,local_accepted:s.t27,accepted_details:s.t28,other_accepted:s.t29,same_percentage_aver:s.t30,same_problem_time:s.t31,same_aver_length:s.t32,total_same:s.t33});case 99:case"end":return s.stop()}}),s)})));return function(t){return s.apply(this,arguments)}}()).then((function(t){Object.assign(e,t),e.finished=!0})).then((function(){M("#preload").hide();var t=M("title").html();M(".placeholder").remove(),e.$nextTick((function(){var t=j()().endOf("day").toDate(),a=j()().startOf("day").subtract(1,"year").toDate(),i=e.submission_count,n={};y.a.forEach(i,(function(t){t.day<10&&(t.day="0"+t.day),t.month<10&&(t.month="0"+t.month);var e=t.year+"-"+t.month+"-"+t.day;n[e]?n[e]+=t.cnt:n[e]=t.cnt}));var r=h["timeDays"](a,t).map((function(t){return{date:t,count:n[j()(t).format("YYYY-MM-DD")]||0}})),c=v({width:M(".heatmap").width()}).data(r).selector(".heatmap").tooltipEnabled(!0).colorRange(["#c6e48b","#7bc96f","#239a3b","#196127"],"#dfdfdf").onClick((function(){})).tooltipEnabled(!0).legendEnabled(!0);c(),s.$nextTick((function(){var t=new k.a(document.getElementById("pie_chart").getContext("2d"),{type:"pie",data:{datasets:[{data:[s.local_accepted,y.a.reduce(s.submission.local,(function(t,e){return e.result=parseInt(e.result),6===e.result?t+1:t}),0),y.a.reduce(s.submission.local,(function(t,e){return 10===e.result?t+1:t}),0),y.a.reduce(s.submission.local,(function(t,e){return 7===e.result?t+1:t}),0),y.a.reduce(s.submission.local,(function(t,e){return 8===e.result?t+1:t}),0),y.a.reduce(s.submission.local,(function(t,e){return 9===e.result?t+1:t}),0),y.a.reduce(s.submission.local,(function(t,e){return 11===e.result?t+1:t}),0),y.a.reduce(s.submission.local,(function(t,e){return 5===e.result?t+1:t}),0)],backgroundColor:["#66dd66","#ff6384","darkorchid","#ffce56","#00b5ad","#35a0e8","#F7464A","#D4CCC5"]}],labels:["Accepted","Wrong Answer","Runtime Error","Time Limit Exceeded","Memory Limit Exceeded","Output Limit Exceeded","Compile Error","Presentation Error"]},options:{responsive:!0,legend:{display:!1},legendCallback:function(t){var e=[];e.push('<ul style="list-style: none; padding-left: 20px; margin-top: 0; " class="'+t.id+'-legend">');var a=t.data,s=a.datasets,i=a.labels;if(s.length)for(var n=0;n<s[0].data.length;++n)e.push('<li style="font-size: 12px; width: 50%; display: inline-block; color: #666; "><span style="width: 10px; height: 10px; display: inline-block; border-radius: 50%; margin-right: 5px; background-color: '+s[0].backgroundColor[n]+'; "></span>'),i[n]&&e.push(i[n]),e.push("</li>");return e.push("</ul>"),e.join("")}}});document.getElementById("pie_chart_legend").innerHTML=t.generateLegend();var e=new k.a(document.getElementById("pie_chart_language").getContext("2d"),{type:"pie",data:{datasets:[{data:[y.a.reduce(s.submission.local,(function(t,e){return"0"===e.language||"21"===e.language?t+1:t}),0),y.a.reduce(s.submission.local,(function(t,e){return"1"===e.language||"19"===e.language||"20"===e.language?t+1:t}),0),y.a.reduce(s.submission.local,(function(t,e){return"3"===e.language||"23"===e.language||"24"===e.language?t+1:t}),0),y.a.reduce(s.submission.local,(function(t,e){return"6"===e.language?t+1:t}),0),y.a.reduce(s.submission.local,(function(t,e){return"13"===e.language?t+1:t}),0),y.a.reduce(s.submission.local,(function(t,e){return"14"===e.language?t+1:t}),0),y.a.reduce(s.submission.local,(function(t,e){return"2"===e.language?t+1:t}),0)],backgroundColor:["#66dd66","#ff6384","darkorchid","#ffce56","#00b5ad","#35a0e8","#E2EAE9"]}],labels:["GCC","G++","Java","Python","Clang","Clang++","Pascal"]},options:{responsive:!0,legend:{display:!1},legendCallback:function(t){var e=[];e.push('<ul style="list-style: none; padding-left: 20px; margin-top: 0; " class="'+t.id+'-legend">');var a=t.data,s=a.datasets,i=a.labels;if(s.length)for(var n=0;n<s[0].data.length;++n)e.push('<li style="font-size: 12px; width: 50%; display: inline-block; color: #666; "><span style="width: 10px; height: 10px; display: inline-block; border-radius: 50%; margin-right: 5px; background-color: '+s[0].backgroundColor[n]+'; "></span>'),i[n]&&e.push(i[n]),e.push("</li>");return e.push("</ul>"),e.join("")}}});document.getElementById("pie_chart_language_legend").innerHTML=e.generateLegend();var a={type:"line",data:{labels:y.a.keys(s.recent_submission.submission),datasets:[{label:this.$t("total submission"),backgroundColor:window.chartColors.red,borderColor:window.chartColors.red,data:y.a.values(s.recent_submission.submission),fill:!1},{label:this.$t("accept"),fill:!1,backgroundColor:window.chartColors.blue,borderColor:window.chartColors.blue,data:y.a.values(s.recent_submission.accept)}]},options:{responsive:!0,title:{display:!1,text:this.$t("statistic information")},tooltips:{mode:"index",intersect:!1},hover:{mode:"nearest",intersect:!0},scales:{xAxes:[{display:!0,scaleLabel:{display:!1,labelString:this.$t("month")}}],yAxes:[{display:!0,scaleLabel:{display:!1,labelString:this.$t("submit")}}]}}},i=document.getElementById("canvas").getContext("2d");window.myLine=new k.a(i,a)}))})),M("title").html(s.user_id+" "+s.nick+" "+t)})),this.axios.get("/api/user/tutorial/".concat(t)).then((function(t){var a=t.data,s=a.data;s.forEach(function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(a){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.renderRawAsync(a.title||"");case 2:a.title=t.sent;case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),e.tutorial_publish=a.data}))}},{key:"online",get:function(){var t=this;return this.$store.getters.onlineUser.some((function(e){return e.user_id===t.user_id}))}}]),s}(Object(f["b"])(m["a"],$["a"]));Object(u["c"])([Object(f["c"])({default:""})],D.prototype,"userId",void 0),Object(u["c"])([Object(f["d"])("userId")],D.prototype,"onUserIdChange",null),D=Object(u["c"])([Object(f["a"])({components:{ContestMode:_["a"]},computed:Object(O["b"])(["contestMode"])})],D);var E=D,A=E,S=(a("0a8a"),a("2877")),L=Object(S["a"])(A,s,i,!1,null,"cbca3046",null);e["a"]=L.exports},"20a2":function(t,e,a){"use strict";a("d3b7"),a("4ae1"),a("25f0");var s=a("d4ec"),i=a("bee2"),n=a("262e"),r=a("99de"),c=a("7e84"),l=a("9ab4"),o=a("2b0e"),d=a("60a3"),u=a("3657");function h(t){function e(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}return function(){var a,s=Object(c["a"])(t);if(e()){var i=Object(c["a"])(this).constructor;a=Reflect.construct(s,arguments,i)}else a=s.apply(this,arguments);return Object(r["a"])(this,a)}}var p=u["a"].getAvatarURL,v=u["a"].hasAvatarURL,_=function(t){Object(n["a"])(a,t);var e=h(a);function a(){return Object(s["a"])(this,a),e.apply(this,arguments)}return Object(i["a"])(a,[{key:"getAvatarURL",value:function(){for(var t=arguments.length,e=new Array(t),a=0;a<t;a++)e[a]=arguments[a];return p.apply(this,e)}},{key:"hasAvatarURL",value:function(){for(var t=arguments.length,e=new Array(t),a=0;a<t;a++)e[a]=arguments[a];return v.apply(this,e)}}]),a}(o["a"]);_=Object(l["c"])([d["a"]],_),e["a"]=_},"92f1":function(t,e,a){"use strict";a("d3b7"),a("4ae1"),a("25f0"),a("96cf");var s=a("1da1"),i=a("d4ec"),n=a("bee2"),r=a("262e"),c=a("99de"),l=a("7e84"),o=a("9ab4"),d=a("2b0e"),u=a("60a3"),h=a("ebb0"),p=a.n(h),v=a("a390"),_=a.n(v);function m(t){function e(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}return function(){var a,s=Object(l["a"])(t);if(e()){var i=Object(l["a"])(this).constructor;a=Reflect.construct(s,arguments,i)}else a=s.apply(this,arguments);return Object(c["a"])(this,a)}}var f=function(t){Object(r["a"])(a,t);var e=m(a);function a(){var t;return Object(i["a"])(this,a),t=e.apply(this,arguments),t.originalWorker=new _.a,t}return Object(n["a"])(a,[{key:"created",value:function(){this.worker_=new p.a(this.originalWorker)}},{key:"beforeDestroy",value:function(){this.originalWorker.terminate()}},{key:"renderAsync",value:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",this.worker_.postMessage({type:"render",content:e}));case 1:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()},{key:"renderRawAsync",value:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",this.worker_.postMessage({type:"renderRaw",content:e}));case 1:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()}]),a}(d["a"]);f=Object(o["c"])([u["a"]],f),e["a"]=f},"9d5a":function(t,e,a){},a390:function(t,e,a){"use strict";t.exports=function(){return new Worker("/9a72e954c0f8ecf92225.worker.js")}},bc99:function(t,e,a){"use strict";var s=a("111f"),i=a.n(s);e["default"]=i.a},d3a2:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"ui negative message"},[a("div",{staticClass:"header"},[a("i",{staticClass:"ban icon"}),t._v(t._s(t.$t("contest mode")))]),a("p",[t._v(t._s(t.$t("context")))])])},i=[],n=(a("d3b7"),a("4ae1"),a("25f0"),a("d4ec")),r=a("262e"),c=a("99de"),l=a("7e84"),o=a("9ab4"),d=a("60a3"),u=a("2b0e");function h(t){function e(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}return function(){var a,s=Object(l["a"])(t);if(e()){var i=Object(l["a"])(this).constructor;a=Reflect.construct(s,arguments,i)}else a=s.apply(this,arguments);return Object(c["a"])(this,a)}}var p=function(t){Object(r["a"])(a,t);var e=h(a);function a(){return Object(n["a"])(this,a),e.apply(this,arguments)}return a}(u["a"]);p=Object(o["c"])([d["a"]],p);var v=p,_=v,m=a("2877"),f=a("bc99"),b=Object(m["a"])(_,s,i,!1,null,"5816c0f2",null);"function"===typeof f["default"]&&Object(f["default"])(b);e["a"]=b.exports},ebb0:function(t,e,a){"use strict";var s=0;function i(t,e){var a=e.data;if(Array.isArray(a)&&!(a.length<2)){var s=a[0],i=a[1],n=a[2],r=t._callbacks[s];r&&(delete t._callbacks[s],r(i,n))}}function n(t){var e=this;e._worker=t,e._callbacks={},t.addEventListener("message",(function(t){i(e,t)}))}n.prototype.postMessage=function(t){var e=this,a=s++,n=[a,t];return new Promise((function(t,s){if(e._callbacks[a]=function(e,a){if(e)return s(new Error(e.message));t(a)},"undefined"!==typeof e._worker.controller){var r=new MessageChannel;r.port1.onmessage=function(t){i(e,t)},e._worker.controller.postMessage(n,[r.port2])}else e._worker.postMessage(n)}))},t.exports=n}}]);
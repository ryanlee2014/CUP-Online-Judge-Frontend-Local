(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a36980d0"],{"00d8":function(t,e){(function(){var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",i={rotl:function(t,e){return t<<e|t>>>32-e},rotr:function(t,e){return t<<32-e|t>>>e},endian:function(t){if(t.constructor==Number)return 16711935&i.rotl(t,8)|4278255360&i.rotl(t,24);for(var e=0;e<t.length;e++)t[e]=i.endian(t[e]);return t},randomBytes:function(t){for(var e=[];t>0;t--)e.push(Math.floor(256*Math.random()));return e},bytesToWords:function(t){for(var e=[],i=0,s=0;i<t.length;i++,s+=8)e[s>>>5]|=t[i]<<24-s%32;return e},wordsToBytes:function(t){for(var e=[],i=0;i<32*t.length;i+=8)e.push(t[i>>>5]>>>24-i%32&255);return e},bytesToHex:function(t){for(var e=[],i=0;i<t.length;i++)e.push((t[i]>>>4).toString(16)),e.push((15&t[i]).toString(16));return e.join("")},hexToBytes:function(t){for(var e=[],i=0;i<t.length;i+=2)e.push(parseInt(t.substr(i,2),16));return e},bytesToBase64:function(t){for(var i=[],s=0;s<t.length;s+=3)for(var r=t[s]<<16|t[s+1]<<8|t[s+2],n=0;n<4;n++)8*s+6*n<=8*t.length?i.push(e.charAt(r>>>6*(3-n)&63)):i.push("=");return i.join("")},base64ToBytes:function(t){t=t.replace(/[^A-Z0-9+\/]/gi,"");for(var i=[],s=0,r=0;s<t.length;r=++s%4)0!=r&&i.push((e.indexOf(t.charAt(s-1))&Math.pow(2,-2*r+8)-1)<<2*r|e.indexOf(t.charAt(s))>>>6-2*r);return i}};t.exports=i})()},"044b":function(t,e){function i(t){return!!t.constructor&&"function"===typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)}function s(t){return"function"===typeof t.readFloatLE&&"function"===typeof t.slice&&i(t.slice(0,0))}
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
t.exports=function(t){return null!=t&&(i(t)||s(t)||!!t._isBuffer)}},"19dd6":function(t,e,i){"use strict";i("ddb0");var s=i("9ab4"),r=i("60a3"),n=i("5dbd"),a=i("2b0e");let o=class extends a["a"]{constructor(){super(...arguments),this.timer_=[]}beforeDestroy(){const t=this.timer_;t.forEach(t=>clearInterval(t))}};Object(s["c"])([n["b"]],o.prototype,"beforeDestroy",null),o=Object(s["c"])([r["a"]],o),e["a"]=o},"21a6":function(t,e,i){(function(i){var s,r,n;(function(i,a){r=[],s=a,n="function"===typeof s?s.apply(e,r):s,void 0===n||(t.exports=n)})(0,(function(){"use strict";function e(t,e){return"undefined"==typeof e?e={autoBom:!1}:"object"!=typeof e&&(console.warn("Deprecated: Expected third argument to be a object"),e={autoBom:!e}),e.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type)?new Blob(["\ufeff",t],{type:t.type}):t}function s(t,e,i){var s=new XMLHttpRequest;s.open("GET",t),s.responseType="blob",s.onload=function(){o(s.response,e,i)},s.onerror=function(){console.error("could not download file")},s.send()}function r(t){var e=new XMLHttpRequest;e.open("HEAD",t,!1);try{e.send()}catch(t){}return 200<=e.status&&299>=e.status}function n(t){try{t.dispatchEvent(new MouseEvent("click"))}catch(s){var e=document.createEvent("MouseEvents");e.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),t.dispatchEvent(e)}}var a="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof i&&i.global===i?i:void 0,o=a.saveAs||("object"!=typeof window||window!==a?function(){}:"download"in HTMLAnchorElement.prototype?function(t,e,i){var o=a.URL||a.webkitURL,c=document.createElement("a");e=e||t.name||"download",c.download=e,c.rel="noopener","string"==typeof t?(c.href=t,c.origin===location.origin?n(c):r(c.href)?s(t,e,i):n(c,c.target="_blank")):(c.href=o.createObjectURL(t),setTimeout((function(){o.revokeObjectURL(c.href)}),4e4),setTimeout((function(){n(c)}),0))}:"msSaveOrOpenBlob"in navigator?function(t,i,a){if(i=i||t.name||"download","string"!=typeof t)navigator.msSaveOrOpenBlob(e(t,a),i);else if(r(t))s(t,i,a);else{var o=document.createElement("a");o.href=t,o.target="_blank",setTimeout((function(){n(o)}))}}:function(t,e,i,r){if(r=r||open("","_blank"),r&&(r.document.title=r.document.body.innerText="downloading..."),"string"==typeof t)return s(t,e,i);var n="application/octet-stream"===t.type,o=/constructor/i.test(a.HTMLElement)||a.safari,c=/CriOS\/[\d]+/.test(navigator.userAgent);if((c||n&&o)&&"object"==typeof FileReader){var l=new FileReader;l.onloadend=function(){var t=l.result;t=c?t:t.replace(/^data:[^;]*;/,"data:attachment/file;"),r?r.location.href=t:location=t,r=null},l.readAsDataURL(t)}else{var u=a.URL||a.webkitURL,d=u.createObjectURL(t);r?r.location=d:location.href=d,r=null,setTimeout((function(){u.revokeObjectURL(d)}),4e4)}});a.saveAs=o.saveAs=o,t.exports=o}))}).call(this,i("c8ba"))},2500:function(t,e,i){var s,r,n;!function(i,a){r=[e],s=a,n="function"===typeof s?s.apply(e,r):s,void 0===n||(t.exports=n)}(0,(function(t){var e,i,s=window,r=document,n="mousemove",a="mouseup",o="mousedown",c="EventListener",l="add"+c,u="remove"+c,d=[],h=function(t,c){for(t=0;t<d.length;)c=d[t++],c=c.container||c,c[u](o,c.md,0),s[u](a,c.mu,0),s[u](n,c.mm,0);for(d=[].slice.call(r.getElementsByClassName("dragscroll")),t=0;t<d.length;)!function(t,c,u,d,h,p){(p=t.container||t)[l](o,p.md=function(e){t.hasAttribute("nochilddrag")&&r.elementFromPoint(e.pageX,e.pageY)!=p||(d=1,c=e.clientX,u=e.clientY,e.preventDefault())},0),s[l](a,p.mu=function(){d=0},0),s[l](n,p.mm=function(s){d&&((h=t.scroller||t).scrollLeft-=e=-c+(c=s.clientX),h.scrollTop-=i=-u+(u=s.clientY),t==r.body&&((h=r.documentElement).scrollLeft-=e,h.scrollTop-=i))},0)}(d[t++])};"complete"==r.readyState?h():s[l]("load",h,0),t.reset=h}))},"27f4":function(t,e,i){"use strict";var s=i("fb61"),r=i.n(s);r.a},"2faf":function(t,e,i){"use strict";var s=i("9f5e"),r=i.n(s);r.a},"4bf2":function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.state?i("div",{staticClass:"contestrank scoreboard padding"},[i("h2",{staticClass:"ui dividing header"},[t._v(" "+t._s(-1!==t.total&&t.finished?t.$t("contest ranklist"):"计算中,请稍后")+" "+t._s(!t.finished||t.hasPrivilege?"":t.$t("lite mode"))+" "),i("div",{staticClass:"sub header"},[t._v(" "+t._s(t.title)+" 总人数: "+t._s(this.totalNumber)+" ")])]),i("div",{staticClass:"ui grid"},[i("div",{staticClass:"row"},[i("div",{staticClass:"left aligned eight wide column"},[i("TimeView",{attrs:{start_time:t.start_time}})],1),i("div",{staticClass:"right aligned eight wide column"},[t.playing?t._e():i("button",{staticClass:"ui primary button item",on:{click:t.playRanklist}},[t._v("播放排名变化")]),t.playing?i("span",[t._v(" "+t._s(t.playingTime)+" ")]):t._e(),t.playing?i("button",{staticClass:"ui primary button",on:{click:t.pausePlayRanklist}},[t._v(t._s(t.playing?"暂停":"继续"))]):t._e(),t.playing?i("button",{staticClass:"ui primary button",on:{click:t.stopPlayRanklist}},[t._v("停止")]):t._e(),i("div",{staticClass:"ui toggle checkbox"},[i("input",{attrs:{type:"checkbox"},on:{click:function(e){t.auto_update=!t.auto_update}}}),i("label",[t._v("暂停自动更新排名")])]),i("div",{staticClass:"ui toggle checkbox"},[i("input",{attrs:{type:"checkbox"},on:{click:function(e){t.add_name=!t.add_name}}}),i("label",[t._v("加入学号")])]),i("a",{staticClass:"ui primary mini button",on:{click:t.exportXLS}},[t._v("保存表格到本地")])])]),i("div",{staticClass:"row"},[i("div",{staticClass:"ranking",staticStyle:{width:"100%"}},[i("table",{staticClass:"ui small celled table",attrs:{id:"rank"}},[i("thead",[i("tr",{staticClass:"toprow",attrs:{align:"center"}},[i("th",{staticClass:"{sorter:'false'}",staticStyle:{position:"sticky",top:"40px","z-index":"4"},attrs:{width:"5%"}},[t._v(t._s(t.$t("rank")))]),i("th",{staticStyle:{position:"sticky",top:"40px","z-index":"4"},attrs:{width:"5%"}},[t._v(t._s(t.$t("user_id")))]),i("th",{staticStyle:{"min-width":"90px",position:"sticky",top:"40px","z-index":"4"}},[t._v(t._s(t.$t("nick")))]),t.add_name?i("th",{staticStyle:{position:"sticky",top:"40px","z-index":"4"},attrs:{width:"5%"}},[t._v("Id")]):t._e(),t.hasPrivilege?i("th",{staticStyle:{position:"sticky",top:"40px","z-index":"4"},attrs:{width:"5%"}},[t._v("通过/测试比")]):t._e(),t.hasPrivilege?i("th",{staticStyle:{position:"sticky",top:"40px","z-index":"4"},attrs:{width:"5%"}},[t._v("通过/提交比")]):t._e(),i("th",{staticStyle:{position:"sticky",top:"40px","z-index":"4"},attrs:{width:"5%"}},[t._v(t._s(t.$t("accept")))]),i("th",{staticStyle:{position:"sticky",top:"40px","z-index":"4"},attrs:{width:"5%"}},[t._v(t._s(t.$t("penalty time")))]),t._l(Array.from(Array(Math.max(0,t.total)).keys()),(function(e){return i("th",{key:e,staticStyle:{"min-width":"85.71px",position:"sticky",top:"40px","z-index":"4"}},[t._v(t._s(1001+e)+" ")])}))],2)]),i("transition-group",{attrs:{name:"list-complete",tag:"tbody"}},t._l(t.submitter,(function(e,s){return i("tr",{directives:[{name:"show",rawName:"v-show",value:e.rank<=Math.trunc(.3*t.totalNumber)||e.user_id===t.user_id||t.hasPrivilege,expression:"row.rank <= Math.trunc(totalNumber * 0.3) || row.user_id === user_id || hasPrivilege"}],key:e.user_id,staticClass:"list-complete-item",staticStyle:{cursor:"grab!important"}},[i("td",{class:t.rankClass(s,e),staticStyle:{"text-align":"center","font-weight":"bold",position:"sticky",left:"0"}},[t._v(t._s(e.rank)+" ")]),i("td",{staticClass:"ui white"},[i("router-link",{attrs:{to:"/user/"+e.user_id}},[t._v(t._s(e.user_id))])],1),i("td",{staticClass:"ui white"},[i("router-link",{attrs:{to:"/user/"+e.user_id}},[t._v(t._s(t.convertHTML(e.nick)))])],1),t.add_name?i("td",{staticStyle:{"text-align":"center"}},[t._v(t._s(t.convertHTML(e.real_name)))]):t._e(),t.hasPrivilege?i("td",{staticStyle:{"text-align":"center"}},[t._v(t._s(0===e.totalTestRun?"无测试运行":Math.trunc(1e4*e.ac/e.totalTestRun)/100+"%"))]):t._e(),t.hasPrivilege?i("td",{staticStyle:{"text-align":"center"}},[t._v(t._s(0===e.totalSubmitTime?"未提交":Math.trunc(1e4*e.ac/e.totalSubmitTime)/100+"%"))]):t._e(),i("td",{staticStyle:{"text-align":"center"}},[i("router-link",{attrs:{to:"/contest/status/"+t.cid+"?user_id="+e.user_id}},[t._v(t._s(e.ac)+" ")])],1),i("td",{staticStyle:{"text-align":"center"}},[t._v(t._s(t.format_date(e.penalty_time)))]),t._l(e.problem.toArray(),(function(e,s){return i("ResultGrid",{key:s+0,attrs:{gridBackground:e.accept.length>0?e.first_blood?1:-1:0,problem:e,lock:t.popupLock,"enable-pop-up":t.enablePopUp,format_date:t.format_date}})}))],2)})),0)],1),i("table",{style:"display:none;vnd.ms-excel.numberformat:@",attrs:{id:"save"}},[i("tbody",[i("tr",{staticClass:"toprow",attrs:{align:"center"}},[i("td",{attrs:{width:"5%"}},[t._v(t._s(t.$t("rank")))]),i("td",{attrs:{width:"5%"}},[t._v(t._s(t.$t("user_id")))]),i("td",[t._v(t._s(t.$t("nick")))]),t.add_name?i("td",{attrs:{width:"5%"}},[t._v("学号")]):t._e(),t.hasPrivilege?i("td",{attrs:{width:"5%"}},[t._v("通过/测试比")]):t._e(),t.hasPrivilege?i("td",{attrs:{width:"5%"}},[t._v("通过/提交比")]):t._e(),i("td",{attrs:{width:"5%"}},[t._v(t._s(t.$t("accept")))]),i("td",{attrs:{width:"5%"}},[t._v(t._s(t.$t("penalty")))]),i("td",[t._v("环境指纹数")]),i("td",[t._v("硬件指纹数")]),i("td",[t._v("IP总数")]),i("td",[t._v("地点")]),t._l(Array.from(Array(Math.max(0,t.total)).keys()),(function(e){return i("td",{key:e},[t._v(t._s(1001+e))])}))],2),t._l(t.submitter,(function(e,s){return i("tr",{key:s},[i("td",{attrs:{align:"center"}},[t._v(t._s(e.rank))]),i("td",{attrs:{align:"center"}},[t._v(t._s(e.user_id))]),i("td",{attrs:{align:"center"}},[t._v(t._s(t.convertHTML(e.nick)))]),t.add_name?i("td",{attrs:{align:"center"}},[t._v(t._s(t.convertHTML(e.real_name)))]):t._e(),t.hasPrivilege?i("td",{attrs:{align:"center"}},[t._v(t._s(0===e.totalTestRun?"无测试运行":Math.trunc(1e4*e.ac/e.totalTestRun)/100+"%"))]):t._e(),t.hasPrivilege?i("td",{attrs:{align:"center"}},[t._v(t._s(0===e.totalSubmitTime?"未提交":Math.trunc(1e4*e.ac/e.totalSubmitTime)/100+"%"))]):t._e(),i("td",{attrs:{align:"center"}},[t._v(t._s(e.ac))]),i("td",[t._v(t._s(t.format_date(e.penalty_time)))]),i("td",[t._v(t._s(e.fingerprintSet.size))]),i("td",[t._v(t._s(e.hardwareFingerprintSet.size))]),i("td",[t._v(t._s(e.ipSet.size))]),i("td",[t._v(t._s(1===e.ipSet.size?t.detectPlace(Array.from(e.ipSet)[0]):0===e.ipSet.size?"无":"略")+" ")]),t._l(e.problem.toArray(),(function(e,s){return i("td",{key:s,attrs:{bgcolor:"#FF"+t.formatColor(Math.max(Math.floor(256-256*Math.max(e.highestSim-69,0)/31)-1,0)),align:"left"}},[t._v(" "+t._s(e.submit.length>0?"(-":"")+t._s(e.try_time>0?e.try_time+")":e.submit.length>0?e.submit.length+")":"")+t._s(e.accept.length>0?t.format_date(e.accept[0].diff(e.start_time,"second")):"")+t._s(e.highestSim>0?"("+e.highestSim+"%)":"")+" ")])}))],2)}))],2)])])])])]):i("ErrorView",{attrs:{errormsg:t.errormsg}})},r=[],n=(i("5319"),i("ddb0"),i("9ab4")),a=i("2cd4"),o=i("21a6"),c=i("3657"),l=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("h3",{staticClass:"ui header"},[t._v(" 当前时间:"+t._s(t.current_time)+" "),t.start_time?i("div",{staticClass:"sub header"},[t._v(" 起始时间:"+t._s(t.dayjs(t.start_time).format("YYYY-MM-DD HH:mm:ss"))+", "+t._s(t.format_time(t.dayjs().diff(t.start_time,"second")))+" ")]):t._e()])},u=[],d=i("5a0c"),h=i.n(d),p=i("60a3"),m=i("19dd6"),f=i("5dbd");let b=class extends(Object(p["b"])(m["a"])){constructor(){super(...arguments),this.current_time="",this.dayjs=h.a}created(){this.current_time=this.currentTime()}currentTime(){return h()().format("YYYY-MM-DD HH:mm:ss")}timeUpdater(){this.current_time=this.currentTime()}mounted(){this.timeUpdater()}format_time(t){const e=["还有","已经过"],i=Number(t>0);return e[i]+this.format_date(t)}fillZero(t){return t.length<2?"0"+t:t}format_date(t,e=0){t=Math.abs(t);let i=String(Math.trunc(t/3600));i=this.fillZero(i);let s=String(Math.trunc((t-3600*parseInt(i))/60));s=this.fillZero(s);let r=String(t%60);return r=this.fillZero(r),e?i+" : "+s+" : "+r:i+":"+s+":"+r}};Object(n["c"])([Object(p["c"])({default:h()()})],b.prototype,"start_time",void 0),Object(n["c"])([Object(f["d"])(1e3)],b.prototype,"timeUpdater",null),b=Object(n["c"])([p["a"]],b);var _=b,g=_,v=i("2877"),y=Object(v["a"])(g,l,u,!1,null,"145b8b58",null),w=y.exports,k=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"ui container padding"},[t._m(0),i("div",{staticClass:"ui segment"},[i("div",{staticClass:"ui error message"},[i("div",{staticClass:"header"},[t._v(" 错误信息内容 ")]),i("br"),i("h5",{staticClass:"ui header"},[t._v("URL:"+t._s(t.location.href))]),i("br"),i("b",[i("p",{domProps:{innerHTML:t._s(t.errormsg)}})])])])])},S=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("h2",{staticClass:"ui dividing header"},[t._v(" 发生错误 "),i("div",{staticClass:"sub header"},[t._v(" 请把以下内容反馈给老师、助教或本平台的开发者Ryan Lee(李昊元) ")])])}],x=i("2b0e");let T=class extends x["a"]{constructor(){super(...arguments),this.location=location}};Object(n["c"])([Object(p["c"])({default:""})],T.prototype,"errormsg",void 0),T=Object(n["c"])([p["a"]],T);var C=T,j=C,O=Object(v["a"])(j,k,S,!1,null,"293a19dc",null),M=O.exports,I=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("td",{ref:"block",class:t.gridBackgroundClass,staticStyle:{"text-align":"center"},attrs:{"data-html":t.generateDataHTML}},[i("b",{class:"text "+(t.problem.accept.length>0?t.problem.first_blood?"first accept":"accept":"red")},[t._v(" "+t._s(t.problem.accept.length>0||t.problem.submit.length>0?"+":"")+" "+t._s(t.problem.try_time>0?t.problem.try_time:0==t.problem.accept.length&&t.problem.submit.length>0?t.problem.submit.length:""))]),t.problem.accept.length>0?i("br"):t._e(),t.problem.accept.length>0&&"function"===typeof t.problem.accept[0].diff?i("span",{class:t.problem.first_blood?"first accept text":""},[t._v(" "+t._s(t.format_date(t.problem.accept[0].diff(t.problem.start_time,"second")))+" ")]):t._e()])},R=[],L=i("1157"),A=i.n(L);const P=A.a;let E=class extends x["a"]{get generateDataHTML(){let t='<div class="ui list">';return t+=this.buildItem(),t+="</div>",t}get gridBackgroundClass(){const t=this.gridBackground;return 0===t?"":1===t?"first accept":"accept"}mounted(){this.enablePopUp&&this.triggerPopup()}triggerPopup(){this.lock;const t=this.problem.submit,e=this.problem.accept;(t.length>0||e.length>0)&&P(this.$refs.block).popup({hoverable:!0}).popup()}buildItem(){const t=this.problem.submit,e=this.problem.accept,i=[...t.map(t=>({pass:!1,time:t})),...e.map(t=>({pass:!0,time:t}))];i.sort((t,e)=>t.time.isBefore(e.time)?-1:t.time.isAfter(e.time)?1:0);let s="";const r=13,n=i.length>r,a=i.length;while(i.length>r)i.shift();n&&(s+=`<div class="item"><i class="icon"></i><div class="content"><div class="header">Trim ${a-r} submission</div> </div></div>`);for(const o of i){let t='<div class="item">';o.pass?t+='<i class="checkmark important icon"></i>':t+='<i class="remove important icon"></i>',t+='<div class="content">',t+=`<div class="header">${o.pass?"Passed":"Failed"}</div>`,t+=`<div class="description">${o.time.format("YYYY-MM-DD HH:mm:ss")}</div>`,t+="</div></div>",s+=t}return s}};Object(n["c"])([Object(p["c"])({default:0})],E.prototype,"gridBackground",void 0),Object(n["c"])([Object(p["c"])({default:()=>{}})],E.prototype,"lock",void 0),Object(n["c"])([Object(p["c"])({default:()=>({accept:[],submit:[]})})],E.prototype,"problem",void 0),Object(n["c"])([Object(p["c"])({default:()=>()=>{}})],E.prototype,"format_date",void 0),Object(n["c"])([Object(p["c"])({default:!0})],E.prototype,"enablePopUp",void 0),E=Object(n["c"])([p["a"]],E);var B=E,N=B,H=(i("27f4"),Object(v["a"])(N,I,R,!1,null,"3ee85bbe",null)),q=H.exports,D=i("fa82"),U=i.n(D),Y=i("2ef0"),z=i.n(Y);const F=h()();function W(t){let e,i,s=0;if(0===t.length)return s;for(e=0;e<t.length;e++)i=t.charCodeAt(e),s=(s<<5)-s+i,s|=0;return s}function G(){}function X(t,e){return t.isBefore(e)?-1:t.isAfter(e)?1:0}function Z(t){const e=[];for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&!isNaN(parseInt(i))&&e.push(t[i]);return e}function J(){const t={submit:[],accept:[],simRate:[],sim:0,try_time:0,start_time:F,first_blood:!1,highestSim:0,_submit:new Set,_accept:new Set,setSim(t){null!==t&&(this.simRate.push(t),this.sim=t,this.highestSim=Math.max(this.highestSim,t))},set(e){Object.assign(t,e)},update(t,e){return null!==this[t]&&"object"===typeof this[t]&&"function"===typeof this[t].push?this["_"+t].has(W(e.toString()))||(this["_"+t].add(W(e.toString())),this[t].push(e)):"number"===typeof this[t]&&(this[t]=e),this},addSubmit(t){switch(t.result){case 4:this.update("accept",h()(t.in_date));break;case 5:case 6:case 7:case 8:case 9:case 10:this.update("submit",h()(t.in_date));break}},calculatePenaltyTime(){const t=this.start_time;if(this.accept.length>0){this.accept.sort(X),this.submit.sort(X);let e=this.accept[0].diff(t,"second");this.try_time=0;for(const t of this.submit){if(!t.isBefore(this.accept[0]))break;++this.try_time,e+=1200}return e}return 0},isAccepted(){return this.accept.length>0},getAcceptTime(){return this.accept[0]},newInstance:J};return t}function V(t){const e={total:0,get(i){return"undefined"!==typeof e[i]?e[i]:(t=Math.max(i,t),e[i]=J())},toArray(){return Z(e)},calculatePenaltyTime(){let t=0;for(const i in e)Object.prototype.hasOwnProperty.call(e,i)&&!isNaN(parseInt(i))&&(t+=e[i].calculatePenaltyTime());return t},calculateAC(){let t=0;for(const i in e)Object.prototype.hasOwnProperty.call(e,i)&&!isNaN(parseInt(i))&&e[i].accept.length>0&&++t;return t},updateTotal(t){t=this.total=Math.max(t,this.total);for(let e=0;e<t;++e)void 0!==this[e]&&null!==this[e]||(this[e]=J())},newInstance:V};return e.updateTotal(t),e}function K(t){return"string"!==typeof t&&(t=""),t.length>0?t.trim():"未注册"}function Q(t){return"string"!==typeof t&&(t=""),t.trim()}function tt(){const t=new Set,e=t.add;return t.add=function(i){return"undefined"!==typeof i&&e.apply(t,arguments),this},t.newInstance=tt,t}function et(){const t=1e11,e={time:t,person:{first_blood:!0},setFirstBlood:G,newInstance:G};return e.setFirstBlood=function(t,e){"undefined"!==typeof this.person&&t<this.time&&(this.time=t,this.person.first_blood=!1,this.person=e,e.first_blood=!0)},e.newInstance=et,e}function it(t){const e={get:G,newInstance:G};if("number"===typeof t)for(let i=0;i<t;++i)e[i]=et();return e.get=function(t){return"undefined"!==typeof this[t]?this[t]:this[t]=et()},e.newInstance=it,e}function st(t,e,i){return{ac:0,rank:-1,nick:K(t),problem:V(e),penalty_time:0,fingerprintSet:tt(),hardwareFingerprintSet:tt(),ipSet:tt(),real_name:"",totalSubmitTime:0,totalTestRun:0,user_id:Q(i),submissions:[],solutionIdSet:new Set,addSubmission(t){this.submissions.push(t)},submissionIncrement(){++this.totalSubmitTime},testRunIncrement(t){this.totalTestRun+=Number(t.problem_id<0)},addData(t){this.solutionIdSet.has(t.solution_id)||(this.solutionIdSet.add(t.solution_id),this.fingerprintSet.add(t.fingerprint),this.hardwareFingerprintSet.add(t.fingerprintRaw),this.ipSet.add(t.ip),this.problem.get(t.num).setSim(t.sim),this.problem.get(t.num).set({start_time:t.start_time}),this.problem.get(t.num).addSubmit(t),this.submissionIncrement(),this.testRunIncrement(t),this.addSubmission(t))},updateTotal(t){this.problem.updateTotal(t)},calculatePenaltyTime(){this.penalty_time=this.problem.calculatePenaltyTime()},calculateAC(){this.ac=this.problem.calculateAC()},calculateFirstBlood(t){for(const i in this.problem)try{if(Object.prototype.hasOwnProperty.call(this.problem,i)&&!isNaN(parseInt(i))&&this.problem[i].isAccepted()){const e=this.problem[i].getAcceptTime().diff(this.problem[i].start_time,"second");t.get(i).setFirstBlood(e,this.problem.get(parseInt(i)))}}catch(e){console.log(e),console.log("Firstbloodlist",t),console.log("this.problem",this.problem)}},newInstance:st}}function rt(t){let e=1;switch(t.toLowerCase()){case"greater":e=1;break;case"lesser":e=-1;break}return(t,i)=>e*(t.ac!==i.ac?i.ac-t.ac:t.penalty_time-i.penalty_time)}var nt=i("2f62"),at=i("beea");const{reset:ot}=i("2500");let ct=[];window.submissionCollection=ct;let lt=!1,ut=class extends(Object(p["b"])(a["a"])){constructor(){super(...arguments),this.submitter=[],this.total=-1,this.canGetMetalRank=-1,this.start_time=h()(),this.title="",this.assistant=!1,this.finished=!1,this.users=[],this.add_name=!1,this.auto_update=!0,this.totalNumber=0,this.enablePopUp=!1,this.playingTime=h()().format("YYYY-MM-DD HH:mm:ss"),this.popupLock=new U.a,this.waiting_queue=[],this.state=!0,this.errormsg="",this.dayjs=h.a,this.select=$,this.console=console,this.playing=!1,this.playInterval=0,this.backup_data=[],this.firstRender=!0,this.userStructure={},this.firstBloodList=void 0,this.worker=null}created(){this.sockets.subscribe("submit",t=>{this.handleNewSubmit(t)}),this.sockets.subscribe("result",t=>{this.handleNewSubmit(t)})}beforeDestroy(){this.sockets.unsubscribe("submit"),this.sockets.unsubscribe("result");const t=$("body");t.removeClass("dragscroll"),t.css({overflow:""});const e=t[0];e.removeEventListener("mouseup",e.mu),e.removeEventListener("mousedown",e.md),e.removeEventListener("mousemove",e.mm)}get scoreboard(){return null}set scoreboard(t){const e=this;this.auto_update=!1;try{let e;if(t=ct=ct.concat(this.toArray(t)),this.firstRender)this.firstRender=!1,this.firstBloodList=it(),e={},this.initUserTable(e),this.fillSubmitterList(e,t),this.userStructure=e,this.submitter=e=Object.values(e),e.forEach(this.updateSubmitter);else{e=this.userStructure;const i=new Set;this.fillSubmitterList(e,t),t.forEach(t=>"undefined"!==typeof e[t.user_id.toLowerCase()]?i.add(e[t.user_id.toLowerCase()]):""),i.forEach(this.updateSubmitter),this.submitter=e=Object.values(e),this.updateSubmitterTotalProblemNumber(e)}this.calculateRank(),this.enablePopUp=this.totalNumber*this.total<1e3,window.temp_data=ct,window.datas=this.submitter}catch(i){e.state=!1,e.submitter=[],console.log(i);let t=i.stack;t=t.replace(/\n/g,"<br>"),e.errormsg=t}this.auto_update=!0,window.userStructure=this.userStructure}toArray(t){return Array.isArray(t)||(t=[t]),t}updateSubmitter(t){t.calculatePenaltyTime(),t.calculateAC(),t.calculateFirstBlood(this.firstBloodList)}fillSubmitterList(t,e){const i=e.length;for(let s=0;s<i;++s){const i=this.users.length>0;if(!t[e[s].user_id.toLowerCase()]){if(i)continue;t[e[s].user_id.toLowerCase()]=st(e[s].nick,this.total,e[s].user_id)}e[s].num<this.total&&t[e[s].user_id.toLowerCase()].addData(e[s])}}initUserTable(t){z.a.forEach(this.users,e=>{t[e.user_id.toLowerCase()]||(t[e.user_id.toLowerCase()]=st(e.nick,this.total,e.user_id))})}calculateRank(){this.submitter.sort(rt("greater"));let t=1;window.submitter=this.submitter,this.totalNumber=0,this.canGetMetalRank=0;const e=Math.ceil(.6*this.total);z.a.forEach(this.submitter,e=>e.rank=e.ac>0?(++this.totalNumber,t++):t),z.a.forEach(this.submitter,t=>t.ac>=e?++this.canGetMetalRank:0)}updateSubmitterTotalProblemNumber(t){t.forEach(t=>t.updateTotal(this.total))}rankClass(t,e){const i=this.canGetMetalRank;return t=e.rank,t<=Math.ceil(.25*i)?"ui yellow":t<=Math.ceil(.5*i)?"ui grey":t<=i?"ui orange":"ui white"}playRanklist(){this.auto_update=!1,this.playing=!0;const t=this.backup_data=ct;t.sort((t,e)=>{const i=h()(t.in_date),s=h()(e.in_date);return i.isAfter(s)?1:-1}),ct=[],this.submitter=[],this.firstRender=!0,this.startInterval()}startInterval(){const t=this.backup_data;this.playInterval=setInterval(()=>{if(t.length>0){let e=t.shift();while(t.length>0&&e.result<4&&e.result>=11)e=t.shift();this.playingTime=h()(e.in_date).format("YYYY-MM-DD HH:mm:ss"),this.scoreboard=e,0===t.length&&this.endInterval()}else this.endInterval()},30)}endInterval(){clearInterval(this.playInterval),this.playing=!1,this.auto_update=!0}pausePlayRanklist(){this.playing?(this.playing=!1,clearInterval(this.playInterval)):(this.playing=!0,this.startInterval())}stopPlayRanklist(){this.playing=!1,clearInterval(this.playInterval),this.scoreboard=this.backup_data.filter(t=>"undefined"!==typeof t),this.backup_data=[],this.auto_update=!0}fillZero(t){return t.length<2?"0"+t:t}format_date(t,e=0){const i=this.fillZero;t=parseInt(t);const s=i(Math.trunc(t/3600).toString()),r=i(Math.trunc((t-3600*parseInt(s))/60).toString()),n=i((t%60).toString());return e?s+"："+r+"："+n:s+":"+r+":"+n}formatColor(t){const e=t.toString(16);return t<16?"0"+e+"0"+e:""+e+e}detectPlace(t){return t?c["a"].detectIP({intranet_ip:t,place:"",$this:this,toString(){return this.intranet_ip+""}}):"未知"}convertHTML(t){const e=document.createElement("div");return e.innerHTML=t,e.innerText}decodeHTML(t){return"string"!==typeof t&&(t=""),t.replace("·","&middot;")}exportXLS(){const t=document.getElementById("save");let e='<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><meta http-equiv=\'Content-Type\' content=\'application/vnd.ms-excel; charset=utf-8\' /></head>';e+="<tr>Contest "+this.cid+" "+this.title+"</tr>",e+="<table border=1>"+t.innerHTML.replace("<tbody>","").replace("</tbody>",""),e+="<tr><td colspan='8'>环境指纹指根据用户的硬件环境及IP地址不同而产生的不同的指纹</td></tr>",e+="<tr><td colspan='8'>硬件指纹指的是不受IP影响的指纹</td></tr>",e+="<tr><td colspan='8'>若环境指纹与硬件指纹均唯一，代表用户使用相同设备在相同地点完成提交</td></tr>",e+="<tr><td colspan='8'>若硬件指纹唯一而环境指纹不唯一，代表同型号机器在不同IP地址提交</td></tr>",e+="<tr><td colspan='8'>若硬件指纹不唯一，代表使用了多台设备进行提交</td></tr>",e+="</table></html>";const i=new Blob([e],{type:"application/vnd.ms-excel;charset=UTF-8;"});lt?Object(o["saveAs"])(i,"Contest "+this.cid+" 多个contest.xls"):Object(o["saveAs"])(i,"Contest "+this.cid+" "+this.title+".xls")}handleNewSubmit(t){if(parseInt(t.contest_id)===parseInt(this.cid)&&1===t.finish){const e={nick:t.nick,user_id:t.user_id,start_time:this.start_time,avatar:0,in_date:t.in_date,num:parseInt(t.num),result:t.state};this.auto_update?this.scoreboard=e:this.waiting_queue.push(e)}}onAutoUpdateChanged(){while(this.waiting_queue.length>0)this.scoreboard=this.waiting_queue.shift()}onAddNameChanged(t){const e=this;if(t)for(let i=0;i<this.submitter.length;++i)this.axios.get("/api/user/nick/"+this.decodeHTML(this.submitter[i].nick)).then(({data:t})=>{if(t&&t.data&&t.data.length>0){const i=t.nick,s=t.data;let r="";for(let t=0;t<s.length;++t)if(!isNaN(s[t].user_id)){r=s[t].user_id;break}for(let t=0;t<e.submitter.length;++t)if(e.decodeHTML(e.submitter[t].nick)===i){e.submitter[t].real_name=r;break}}})}onContestIdChanged(t){"0"!==t&&this.initData(t)}updated(){document.title="ContestRank: "+this.title,$("#rank>tbody").find("tr").each((function(){$(this).find("td").eq(2).css({position:"sticky",left:$(this).find("td").eq(2).prev().outerWidth()+$(this).find("td").eq(1).prev().outerWidth(),borderRight:"1px solid rgba(34,36,38,.1)"}),$(this).find("td").eq(1).css({position:"sticky",left:$(this).find("td").eq(1).prev().outerWidth()})}))}checkContestAssistant(){Object(at["a"])(this.cid).then(t=>{this.assistant=t})}get hasPrivilege(){return this.$store.getters.admin||this.$store.getters.contest_maker[this.cid]||this.$store.getters.contest_manager||this.assistant}async initData(t){const e=this;let i=[];i=-1!==t.indexOf(",")?t.split(","):[t];let s=0,r=[];const n=new Set;lt=i.length>1;const a=t=>this.axios.get("/api/scoreboard/"+t).then(({data:t})=>t);if(i.length>1){e.title=i.join(",");try{const t=await Promise.all(i.map(t=>a(t)));t.forEach(t=>{z.a.forEach(t.data,(function(e){e.num+=s,e.start_time=h()(t.start_time),r.push(e)})),z.a.forEach(t.users,(function(t){n.add(t)})),s+=t.total,e.total=s,e.users=Array.from(n)}),this.$nextTick(()=>{this.scoreboard=r}),this.finished=!0}catch(o){console.log("e",o);const i=o.data.data;let s;e.state=!1,e.submitter=[],s=!0===i.contest_mode?"根据设置，内容非公开":i.statement&&i.statement.includes&&i.statement.includes("denied")?"根据设置，您无权访问":"Contest "+t+":\n"+i.statement,s=s.replace(/\n/g,"<br>"),e.errormsg=s}}else t=i.shift(),await this.axios.get("/api/scoreboard/"+t),this.axios.get("/api/scoreboard/"+t).then(({data:t})=>{this.finished=!0,e.total=t.total,e.users=t.users,e.start_time=window.start_time=h()(t.start_time),z.a.forEach(t.data,(function(e){e.start_time=h()(t.start_time)})),e.scoreboard=t.data,ct=t.data,r=t.data,"string"===typeof t.title&&0===t.title.length&&(t.title="未设置标题"),e.title=t.title}).catch(({data:i})=>{e.state=!1,e.submitter=[],i.statement||(e.errormsg="根据设置，内容非公开".replace(/\n/g,"<br>")),i.statement.includes&&i.statement.includes("denied")?e.errormsg="根据设置，您无权访问".replace(/\n/g,"<br>"):e.errormsg=("Contest "+t+":\n"+i.statement).replace(/\n/g,"<br>")})}mounted(){window.datas=[],ct=[],document.title=`Contest Rank ${this.cid} -- ${document.title}`,this.checkContestAssistant();const t=$("body");t.addClass("dragscroll"),t.css({overflow:"auto"}),ot(),"0"!==this.cid&&this.initData(this.cid)}};Object(n["c"])([Object(p["c"])({default:"0"})],ut.prototype,"cid",void 0),Object(n["c"])([Object(p["d"])("auto_update")],ut.prototype,"onAutoUpdateChanged",null),Object(n["c"])([Object(p["d"])("add_name")],ut.prototype,"onAddNameChanged",null),Object(n["c"])([Object(p["d"])("cid")],ut.prototype,"onContestIdChanged",null),ut=Object(n["c"])([Object(p["a"])({components:{ErrorView:M,TimeView:w,ResultGrid:q},i18n:{messages:{"zh-cn":{"lite mode":"简洁模式"},en:{"lite mode":"Lite Mode"},ja:{"lite mode":"簡略モード"}}},computed:{...Object(nt["b"])(["admin","contest_manager","user_id"])}})],ut);var dt=ut,ht=dt,pt=(i("2faf"),Object(v["a"])(ht,s,r,!1,null,"46d2f6ea",null));e["a"]=pt.exports},"5dbd":function(t,e,i){"use strict";i.d(e,"a",(function(){return h})),i.d(e,"d",(function(){return p})),i.d(e,"b",(function(){return m})),i.d(e,"g",(function(){return f})),i.d(e,"e",(function(){return b})),i.d(e,"c",(function(){return _})),i.d(e,"f",(function(){return g}));var s=i("2ef0"),r=i.n(s),n=i("6821"),a=i.n(n);i("ddb0");const o=(...t)=>{},c=o;function l(t){return function(...e){c(t,...e)}}var u=i("beea");const d=l("Decorator mounted: ");function h(t,e){return function(i,s,n){d(`debounce, target:${i.constructor.name}, propertyName:${s}`);const a=n.value;return n.value=r.a.debounce(a,t,e),n}}function p(t=0){return function(e,i,s){d(`Interval, target:${e.constructor.name}, propertyName:${i}`);const r=s.value;s.value=function(...s){if("undefined"===typeof this.timer_||"undefined"===typeof this.timer_.length)throw new Error("You should mixin TimerMixin to your component");r.apply(this,s),this.timer_.push(setInterval(()=>{d(`${e.constructor.name}.${i} called.`),r.apply(this,s)},t))},c("mounted interval")}}function m(t,e,i){d(`Debuglogging, target:${t.constructor.name}, propertyName:${e}`);const s=i.value;i.value=function(...t){const i=t.map(t=>JSON.stringify(t)).join(),r=s.apply(this,t),n=JSON.stringify(r);return c(`Call: ${e}(${i}) => ${n}`),r}}function f(t,e,i){d(`WebSocketRequest, target:${t.constructor.name}, propertyName:${e}`);const s=i.value;i.value=function(...t){if(this.$socket.connected)return s.apply(this,t);alert("WebSocket服务未启动，请等待服务启动后提交\nWebSocket服务启动标志未:\n右上角显示在线人数")}}function b(t){return function(e,i,s){d(`Lock, target:${e.constructor.name}, propertyName:${i}`);const r=s.value;s.value=async function(...e){await t.acquireAsync();const i=r.apply(this,e);return t.release(),i}}}function _(t,e,i){d(`ErrorAlert, target:${t.constructor.name}, propertyName:${e}`);const s=i.value;i.value=function(...t){try{return s.apply(this,t)}catch(e){alert(e.message)}}}function g(t,e,i){d(`RunOnceEachKey, target:${t.constructor.name}, propertyName:${e}`);const s=i.value,r={};i.value=function(...t){const e=a()(Object(u["b"])(t));if(!r[e])return r[e]=!0,s.apply(this,t)}}},6821:function(t,e,i){(function(){var e=i("00d8"),s=i("9a63").utf8,r=i("044b"),n=i("9a63").bin,a=function(t,i){t.constructor==String?t=i&&"binary"===i.encoding?n.stringToBytes(t):s.stringToBytes(t):r(t)?t=Array.prototype.slice.call(t,0):Array.isArray(t)||t.constructor===Uint8Array||(t=t.toString());for(var o=e.bytesToWords(t),c=8*t.length,l=1732584193,u=-271733879,d=-1732584194,h=271733878,p=0;p<o.length;p++)o[p]=16711935&(o[p]<<8|o[p]>>>24)|4278255360&(o[p]<<24|o[p]>>>8);o[c>>>5]|=128<<c%32,o[14+(c+64>>>9<<4)]=c;var m=a._ff,f=a._gg,b=a._hh,_=a._ii;for(p=0;p<o.length;p+=16){var g=l,v=u,y=d,w=h;l=m(l,u,d,h,o[p+0],7,-680876936),h=m(h,l,u,d,o[p+1],12,-389564586),d=m(d,h,l,u,o[p+2],17,606105819),u=m(u,d,h,l,o[p+3],22,-1044525330),l=m(l,u,d,h,o[p+4],7,-176418897),h=m(h,l,u,d,o[p+5],12,1200080426),d=m(d,h,l,u,o[p+6],17,-1473231341),u=m(u,d,h,l,o[p+7],22,-45705983),l=m(l,u,d,h,o[p+8],7,1770035416),h=m(h,l,u,d,o[p+9],12,-1958414417),d=m(d,h,l,u,o[p+10],17,-42063),u=m(u,d,h,l,o[p+11],22,-1990404162),l=m(l,u,d,h,o[p+12],7,1804603682),h=m(h,l,u,d,o[p+13],12,-40341101),d=m(d,h,l,u,o[p+14],17,-1502002290),u=m(u,d,h,l,o[p+15],22,1236535329),l=f(l,u,d,h,o[p+1],5,-165796510),h=f(h,l,u,d,o[p+6],9,-1069501632),d=f(d,h,l,u,o[p+11],14,643717713),u=f(u,d,h,l,o[p+0],20,-373897302),l=f(l,u,d,h,o[p+5],5,-701558691),h=f(h,l,u,d,o[p+10],9,38016083),d=f(d,h,l,u,o[p+15],14,-660478335),u=f(u,d,h,l,o[p+4],20,-405537848),l=f(l,u,d,h,o[p+9],5,568446438),h=f(h,l,u,d,o[p+14],9,-1019803690),d=f(d,h,l,u,o[p+3],14,-187363961),u=f(u,d,h,l,o[p+8],20,1163531501),l=f(l,u,d,h,o[p+13],5,-1444681467),h=f(h,l,u,d,o[p+2],9,-51403784),d=f(d,h,l,u,o[p+7],14,1735328473),u=f(u,d,h,l,o[p+12],20,-1926607734),l=b(l,u,d,h,o[p+5],4,-378558),h=b(h,l,u,d,o[p+8],11,-2022574463),d=b(d,h,l,u,o[p+11],16,1839030562),u=b(u,d,h,l,o[p+14],23,-35309556),l=b(l,u,d,h,o[p+1],4,-1530992060),h=b(h,l,u,d,o[p+4],11,1272893353),d=b(d,h,l,u,o[p+7],16,-155497632),u=b(u,d,h,l,o[p+10],23,-1094730640),l=b(l,u,d,h,o[p+13],4,681279174),h=b(h,l,u,d,o[p+0],11,-358537222),d=b(d,h,l,u,o[p+3],16,-722521979),u=b(u,d,h,l,o[p+6],23,76029189),l=b(l,u,d,h,o[p+9],4,-640364487),h=b(h,l,u,d,o[p+12],11,-421815835),d=b(d,h,l,u,o[p+15],16,530742520),u=b(u,d,h,l,o[p+2],23,-995338651),l=_(l,u,d,h,o[p+0],6,-198630844),h=_(h,l,u,d,o[p+7],10,1126891415),d=_(d,h,l,u,o[p+14],15,-1416354905),u=_(u,d,h,l,o[p+5],21,-57434055),l=_(l,u,d,h,o[p+12],6,1700485571),h=_(h,l,u,d,o[p+3],10,-1894986606),d=_(d,h,l,u,o[p+10],15,-1051523),u=_(u,d,h,l,o[p+1],21,-2054922799),l=_(l,u,d,h,o[p+8],6,1873313359),h=_(h,l,u,d,o[p+15],10,-30611744),d=_(d,h,l,u,o[p+6],15,-1560198380),u=_(u,d,h,l,o[p+13],21,1309151649),l=_(l,u,d,h,o[p+4],6,-145523070),h=_(h,l,u,d,o[p+11],10,-1120210379),d=_(d,h,l,u,o[p+2],15,718787259),u=_(u,d,h,l,o[p+9],21,-343485551),l=l+g>>>0,u=u+v>>>0,d=d+y>>>0,h=h+w>>>0}return e.endian([l,u,d,h])};a._ff=function(t,e,i,s,r,n,a){var o=t+(e&i|~e&s)+(r>>>0)+a;return(o<<n|o>>>32-n)+e},a._gg=function(t,e,i,s,r,n,a){var o=t+(e&s|i&~s)+(r>>>0)+a;return(o<<n|o>>>32-n)+e},a._hh=function(t,e,i,s,r,n,a){var o=t+(e^i^s)+(r>>>0)+a;return(o<<n|o>>>32-n)+e},a._ii=function(t,e,i,s,r,n,a){var o=t+(i^(e|~s))+(r>>>0)+a;return(o<<n|o>>>32-n)+e},a._blocksize=16,a._digestsize=16,t.exports=function(t,i){if(void 0===t||null===t)throw new Error("Illegal argument "+t);var s=e.wordsToBytes(a(t,i));return i&&i.asBytes?s:i&&i.asString?n.bytesToString(s):e.bytesToHex(s)}})()},"9a63":function(t,e){var i={utf8:{stringToBytes:function(t){return i.bin.stringToBytes(unescape(encodeURIComponent(t)))},bytesToString:function(t){return decodeURIComponent(escape(i.bin.bytesToString(t)))}},bin:{stringToBytes:function(t){for(var e=[],i=0;i<t.length;i++)e.push(255&t.charCodeAt(i));return e},bytesToString:function(t){for(var e=[],i=0;i<t.length;i++)e.push(String.fromCharCode(t[i]));return e.join("")}}};t.exports=i},"9f5e":function(t,e,i){},fa82:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});class s{constructor(){this._acquired=!1,this._waitingResolvers=[]}get acquired(){return this._acquired}acquireAsync(){return this._acquired?new Promise(t=>{this._waitingResolvers.push(t)}):(this._acquired=!0,Promise.resolve())}tryAcquire(){return!this._acquired&&(this._acquired=!0,!0)}release(){if(!this._acquired)throw new Error("Cannot release an unacquired lock");if(this._waitingResolvers.length>0){let t=this._waitingResolvers.shift();t()}else this._acquired=!1}}e.default=s},fb61:function(t,e,i){}}]);
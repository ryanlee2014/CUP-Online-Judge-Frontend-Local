(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-04ec158e"],{"0c11":function(e,t,n){"use strict";var r=n("d4ec"),i=n("bee2"),o=n("99de"),a=n("7e84"),c=n("262e"),s=n("9ab4"),u=n("2b0e"),l=n("fbdb"),f=n.n(l),d=n("1157"),h=n.n(d),p=n("60a3"),y=function(e){function t(){return Object(r["a"])(this,t),Object(o["a"])(this,Object(a["a"])(t).apply(this,arguments))}return Object(c["a"])(t,e),Object(i["a"])(t,[{key:"created",value:function(){var e=this;h()(document).on("click",(function(){e.initVisibleMermaid()}))}},{key:"initVisibleMermaid",value:function(){h()(".mermaid").each((function(e,t){h()(t).is(":visible")&&f.a.init(t)}))}},{key:"initMermaid",value:function(){h()(".mermaid").each((function(e,t){f.a.init(t)}))}}]),t}(u["a"]);y=Object(s["c"])([p["a"]],y),t["a"]=y},"20a2":function(e,t,n){"use strict";var r=n("d4ec"),i=n("bee2"),o=n("99de"),a=n("7e84"),c=n("262e"),s=n("9ab4"),u=n("2b0e"),l=n("2fe1"),f=n("3657"),d=f["a"].getAvatarURL,h=f["a"].hasAvatarURL,p=function(e){function t(){return Object(r["a"])(this,t),Object(o["a"])(this,Object(a["a"])(t).apply(this,arguments))}return Object(c["a"])(t,e),Object(i["a"])(t,[{key:"getAvatarURL",value:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return d.apply(this,t)}},{key:"hasAvatarURL",value:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return h.apply(this,t)}}]),t}(u["a"]);p=Object(s["c"])([l["b"]],p),t["a"]=p},"75ed":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"ui link card"},[r("div",{staticClass:"image"},[e.hasAvatarURL(e.thread_head)?r("router-link",{attrs:{src:e.getAvatarURL(e.thread_head),to:"/user/"+e.thread_head.user_id,tag:"img"}}):r("img",{attrs:{src:n("84ef")}})],1),r("div",{staticClass:"content"},[r("div",{staticClass:"header"},[r("router-link",{staticClass:"black",attrs:{to:"/user/"+e.thread_head.user_id}},[e._v(" "+e._s(e.thread_head.nick)+" ")])],1),r("div",{staticClass:"meta"},[r("router-link",{attrs:{to:"/user/"+e.thread_head.user_id}},[e._v(" "+e._s(e.thread_head.user_id)+" ")])],1),r("div",{staticClass:"description",domProps:{innerHTML:e._s(e.biography)}})]),r("div",{staticClass:"extra content"},[r("span",{staticClass:"right floated"}),r("span",[r("i",{staticClass:"user icon"}),e._v(" "+e._s(e.$t("solved"))+" "+e._s(e.thread_head.solved)+" ")])])])},i=[],o=(n("96cf"),n("1da1")),a=n("d4ec"),c=n("bee2"),s=n("99de"),u=n("7e84"),l=n("262e"),f=n("9ab4"),d=n("60a3"),h=n("20a2"),p=n("92f1"),y=function(e){function t(){var e;return Object(a["a"])(this,t),e=Object(s["a"])(this,Object(u["a"])(t).apply(this,arguments)),e.biography="",e}return Object(l["a"])(t,e),Object(c["a"])(t,[{key:"onThreadHeadChanged",value:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.renderRawAsync(t.biography);case 2:this.biography=e.sent;case 3:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()}]),t}(Object(d["b"])(h["a"],p["a"]));Object(f["c"])([Object(d["c"])({default:function(){return{biography:"",solved:0,user_id:"",nick:""}}})],y.prototype,"thread_head",void 0),Object(f["c"])([Object(d["d"])("thread_head")],y.prototype,"onThreadHeadChanged",null),y=Object(f["c"])([d["a"]],y);var b=y,v=b,m=n("2877"),g=Object(m["a"])(v,r,i,!1,null,"7a372a7e",null);t["a"]=g.exports},"92f1":function(e,t,n){"use strict";n("96cf");var r=n("1da1"),i=n("d4ec"),o=n("bee2"),a=n("99de"),c=n("7e84"),s=n("262e"),u=n("9ab4"),l=n("2b0e"),f=n("60a3"),d=n("ebb0"),h=n.n(d),p=n("a390"),y=n.n(p),b=function(e){function t(){var e;return Object(i["a"])(this,t),e=Object(a["a"])(this,Object(c["a"])(t).apply(this,arguments)),e.originalWorker=new y.a,e}return Object(s["a"])(t,e),Object(o["a"])(t,[{key:"created",value:function(){this.worker_=new h.a(this.originalWorker)}},{key:"beforeDestroy",value:function(){this.originalWorker.terminate()}},{key:"renderAsync",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",this.worker_.postMessage({type:"render",content:t}));case 1:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"renderRawAsync",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",this.worker_.postMessage({type:"renderRaw",content:t}));case 1:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()}]),t}(l["a"]);b=Object(u["c"])([f["a"]],b),t["a"]=b},a390:function(e,t,n){"use strict";e.exports=function(){return new Worker("/394ec66538cdc85e3349.worker.js")}},b311:function(e,t,n){
/*!
 * clipboard.js v2.0.6
 * https://clipboardjs.com/
 * 
 * Licensed MIT © Zeno Rocha
 */
(function(t,n){e.exports=n()})(0,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=6)}([function(e,t){function n(e){var t;if("SELECT"===e.nodeName)e.focus(),t=e.value;else if("INPUT"===e.nodeName||"TEXTAREA"===e.nodeName){var n=e.hasAttribute("readonly");n||e.setAttribute("readonly",""),e.select(),e.setSelectionRange(0,e.value.length),n||e.removeAttribute("readonly"),t=e.value}else{e.hasAttribute("contenteditable")&&e.focus();var r=window.getSelection(),i=document.createRange();i.selectNodeContents(e),r.removeAllRanges(),r.addRange(i),t=r.toString()}return t}e.exports=n},function(e,t){function n(){}n.prototype={on:function(e,t,n){var r=this.e||(this.e={});return(r[e]||(r[e]=[])).push({fn:t,ctx:n}),this},once:function(e,t,n){var r=this;function i(){r.off(e,i),t.apply(n,arguments)}return i._=t,this.on(e,i,n)},emit:function(e){var t=[].slice.call(arguments,1),n=((this.e||(this.e={}))[e]||[]).slice(),r=0,i=n.length;for(r;r<i;r++)n[r].fn.apply(n[r].ctx,t);return this},off:function(e,t){var n=this.e||(this.e={}),r=n[e],i=[];if(r&&t)for(var o=0,a=r.length;o<a;o++)r[o].fn!==t&&r[o].fn._!==t&&i.push(r[o]);return i.length?n[e]=i:delete n[e],this}},e.exports=n,e.exports.TinyEmitter=n},function(e,t,n){var r=n(3),i=n(4);function o(e,t,n){if(!e&&!t&&!n)throw new Error("Missing required arguments");if(!r.string(t))throw new TypeError("Second argument must be a String");if(!r.fn(n))throw new TypeError("Third argument must be a Function");if(r.node(e))return a(e,t,n);if(r.nodeList(e))return c(e,t,n);if(r.string(e))return s(e,t,n);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function a(e,t,n){return e.addEventListener(t,n),{destroy:function(){e.removeEventListener(t,n)}}}function c(e,t,n){return Array.prototype.forEach.call(e,(function(e){e.addEventListener(t,n)})),{destroy:function(){Array.prototype.forEach.call(e,(function(e){e.removeEventListener(t,n)}))}}}function s(e,t,n){return i(document.body,e,t,n)}e.exports=o},function(e,t){t.node=function(e){return void 0!==e&&e instanceof HTMLElement&&1===e.nodeType},t.nodeList=function(e){var n=Object.prototype.toString.call(e);return void 0!==e&&("[object NodeList]"===n||"[object HTMLCollection]"===n)&&"length"in e&&(0===e.length||t.node(e[0]))},t.string=function(e){return"string"===typeof e||e instanceof String},t.fn=function(e){var t=Object.prototype.toString.call(e);return"[object Function]"===t}},function(e,t,n){var r=n(5);function i(e,t,n,r,i){var o=a.apply(this,arguments);return e.addEventListener(n,o,i),{destroy:function(){e.removeEventListener(n,o,i)}}}function o(e,t,n,r,o){return"function"===typeof e.addEventListener?i.apply(null,arguments):"function"===typeof n?i.bind(null,document).apply(null,arguments):("string"===typeof e&&(e=document.querySelectorAll(e)),Array.prototype.map.call(e,(function(e){return i(e,t,n,r,o)})))}function a(e,t,n,i){return function(n){n.delegateTarget=r(n.target,t),n.delegateTarget&&i.call(e,n)}}e.exports=o},function(e,t){var n=9;if("undefined"!==typeof Element&&!Element.prototype.matches){var r=Element.prototype;r.matches=r.matchesSelector||r.mozMatchesSelector||r.msMatchesSelector||r.oMatchesSelector||r.webkitMatchesSelector}function i(e,t){while(e&&e.nodeType!==n){if("function"===typeof e.matches&&e.matches(t))return e;e=e.parentNode}}e.exports=i},function(e,t,n){"use strict";n.r(t);var r=n(0),i=n.n(r),o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var s=function(){function e(t){c(this,e),this.resolveOptions(t),this.initSelection()}return a(e,[{key:"resolveOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action=e.action,this.container=e.container,this.emitter=e.emitter,this.target=e.target,this.text=e.text,this.trigger=e.trigger,this.selectedText=""}},{key:"initSelection",value:function(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"selectFake",value:function(){var e=this,t="rtl"==document.documentElement.getAttribute("dir");this.removeFake(),this.fakeHandlerCallback=function(){return e.removeFake()},this.fakeHandler=this.container.addEventListener("click",this.fakeHandlerCallback)||!0,this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[t?"right":"left"]="-9999px";var n=window.pageYOffset||document.documentElement.scrollTop;this.fakeElem.style.top=n+"px",this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,this.container.appendChild(this.fakeElem),this.selectedText=i()(this.fakeElem),this.copyText()}},{key:"removeFake",value:function(){this.fakeHandler&&(this.container.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(this.container.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function(){this.selectedText=i()(this.target),this.copyText()}},{key:"copyText",value:function(){var e=void 0;try{e=document.execCommand(this.action)}catch(t){e=!1}this.handleResult(e)}},{key:"handleResult",value:function(e){this.emitter.emit(e?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function(){this.trigger&&this.trigger.focus(),document.activeElement.blur(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function(){this.removeFake()}},{key:"action",set:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"copy";if(this._action=e,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function(){return this._action}},{key:"target",set:function(e){if(void 0!==e){if(!e||"object"!==("undefined"===typeof e?"undefined":o(e))||1!==e.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===this.action&&e.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===this.action&&(e.hasAttribute("readonly")||e.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target=e}},get:function(){return this._target}}]),e}(),u=s,l=n(1),f=n.n(l),d=n(2),h=n.n(d),p="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},y=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function b(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function v(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function m(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var g=function(e){function t(e,n){b(this,t);var r=v(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return r.resolveOptions(n),r.listenClick(e),r}return m(t,e),y(t,[{key:"resolveOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action="function"===typeof e.action?e.action:this.defaultAction,this.target="function"===typeof e.target?e.target:this.defaultTarget,this.text="function"===typeof e.text?e.text:this.defaultText,this.container="object"===p(e.container)?e.container:document.body}},{key:"listenClick",value:function(e){var t=this;this.listener=h()(e,"click",(function(e){return t.onClick(e)}))}},{key:"onClick",value:function(e){var t=e.delegateTarget||e.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new u({action:this.action(t),target:this.target(t),text:this.text(t),container:this.container,trigger:t,emitter:this})}},{key:"defaultAction",value:function(e){return k("action",e)}},{key:"defaultTarget",value:function(e){var t=k("target",e);if(t)return document.querySelector(t)}},{key:"defaultText",value:function(e){return k("text",e)}},{key:"destroy",value:function(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}],[{key:"isSupported",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["copy","cut"],t="string"===typeof e?[e]:e,n=!!document.queryCommandSupported;return t.forEach((function(e){n=n&&!!document.queryCommandSupported(e)})),n}}]),t}(f.a);function k(e,t){var n="data-clipboard-"+e;if(t.hasAttribute(n))return t.getAttribute(n)}t["default"]=g}])["default"]}))},ebb0:function(e,t,n){"use strict";var r=0;function i(e,t){var n=t.data;if(Array.isArray(n)&&!(n.length<2)){var r=n[0],i=n[1],o=n[2],a=e._callbacks[r];a&&(delete e._callbacks[r],a(i,o))}}function o(e){var t=this;t._worker=e,t._callbacks={},e.addEventListener("message",(function(e){i(t,e)}))}o.prototype.postMessage=function(e){var t=this,n=r++,o=[n,e];return new Promise((function(e,r){if(t._callbacks[n]=function(t,n){if(t)return r(new Error(t.message));e(n)},"undefined"!==typeof t._worker.controller){var a=new MessageChannel;a.port1.onmessage=function(e){i(t,e)},t._worker.controller.postMessage(o,[a.port2])}else t._worker.postMessage(o)}))},e.exports=o}}]);
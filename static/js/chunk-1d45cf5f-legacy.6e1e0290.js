(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1d45cf5f"],{4971:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"ui container padding"},[i("h2",{staticClass:"ui dividing header"},[t._v(t._s(t.$t("user privilege")))]),i("div",{staticClass:"ui form"},[i("div",{staticClass:"field"},[i("div",{staticClass:"two fields"},[i("div",{staticClass:"field"},[i("label",[t._v(t._s(t.$t("user_id")))]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.user_id,expression:"user_id"}],attrs:{type:"text"},domProps:{value:t.user_id},on:{input:function(e){e.target.composing||(t.user_id=e.target.value)}}})]),i("div",{staticClass:"field"},[i("label",[t._v(t._s(t.$t("privilege")))]),i("div",{staticClass:"ui fluid search dropdown selection",attrs:{id:"privilege"}},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.rightstr,expression:"rightstr"}],attrs:{type:"hidden"},domProps:{value:t.rightstr},on:{change:function(e){t.rightstr=e.target.value},input:function(e){e.target.composing||(t.rightstr=e.target.value)}}}),i("i",{staticClass:"dropdown icon"}),i("div",{staticClass:"default text"}),i("div",{staticClass:"menu"},t._l(t.privilegeList,(function(e,s){return i("div",{key:s,staticClass:"item",attrs:{"data-value":e}},[t._v(" "+t._s(e)+" ")])})),0)])])])]),i("div",{staticClass:"field"},[i("div",{staticClass:"two fields"},[i("div",{staticClass:"field"}),i("div",{staticClass:"field"},[i("a",{staticClass:"ui primary button",on:{click:t.addPrivilege}},[t._v(t._s(t.$t("add")))])])])])]),i("table",{staticClass:"ui celled structured table"},[i("thead",[i("tr",[i("th",[t._v(t._s(t.$t("user_id")))]),i("th",[t._v(t._s(t.$t("privilege")))]),i("th",[t._v(t._s(t.$t("remove")))])])]),i("tbody",t._l(t.userList,(function(e,s){return i("tr",{key:s},[i("td",[t._v(t._s(e.user_id))]),i("td",[t._v(t._s(e.rightstr))]),i("td",[i("a",{staticClass:"ui labeled icon black button",on:{click:function(i){return t.removePrivilege(e.user_id,e.rightstr)}}},[i("i",{staticClass:"trash icon"}),t._v(" "+t._s(t.$t("remove"))+" ")])])])})),0)])])},a=[],r=(i("d3b7"),i("4ae1"),i("25f0"),i("d4ec")),n=i("bee2"),c=i("262e"),u=i("99de"),l=i("7e84"),o=i("9ab4"),d=i("2cd4"),v=i("60a3"),f=i("1157"),p=i.n(f);function h(t){function e(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}return function(){var i,s=Object(l["a"])(t);if(e()){var a=Object(l["a"])(this).constructor;i=Reflect.construct(s,arguments,a)}else i=s.apply(this,arguments);return Object(u["a"])(this,i)}}var g=p.a,_=function(){var t=function(t){Object(c["a"])(i,t);var e=h(i);function i(){var t;return Object(r["a"])(this,i),t=e.apply(this,arguments),t.userList=[],t.privilegeList=[],t.user_id="",t.rightstr="",t}return Object(n["a"])(i,[{key:"mounted",value:function(){this.initData(),this.initjQuery()}},{key:"basePrivilege",value:function(t,e,i){var s=this;this.axios.post(t,{user_id:e,rightstr:i}).then((function(t){t.data;alert(s.$t("success")),s.initData()})).catch((function(t){var e=t.data;alert(e.statement)}))}},{key:"addPrivilege",value:function(){this.basePrivilege("/api/admin/account/privilege/add",this.user_id,this.rightstr)}},{key:"removePrivilege",value:function(t,e){this.basePrivilege("/api/admin/account/privilege/remove",t,e)}},{key:"initData",value:function(){var t=this;this.axios.get("/api/admin/account/privilege").then((function(e){var i=e.data;t.userList=i.data.userList,t.privilegeList=i.data.privilegeList})).catch((function(t){var e=t.data;alert(e.statement)}))}},{key:"initjQuery",value:function(){g(".ui.dropdown").dropdown()}}]),i}(Object(v["b"])(d["a"]));return t=Object(o["c"])([v["a"]],t),t}(),m=_,b=m,y=i("2877"),C=i("7485"),k=Object(y["a"])(b,s,a,!1,null,"a475965a",null);"function"===typeof C["default"]&&Object(C["default"])(k);e["default"]=k.exports},"5c77":function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"zh-cn":{"user privilege":"用户权限"},"en":{"user privilege":"User Privilege"},"ja":{"user privilege":"ユーザー権限"}}'),delete t.options._Ctor}},7485:function(t,e,i){"use strict";var s=i("5c77"),a=i.n(s);e["default"]=a.a}}]);
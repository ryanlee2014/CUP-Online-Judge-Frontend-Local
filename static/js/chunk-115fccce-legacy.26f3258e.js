(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-115fccce"],{"9a1a":function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"zh-cn":{"contest user list":"竞赛用户列表"},"en":{"contest user list":"Contest User List"},"ja":{"contest user list":"コンテストユーザーリスト"}}'),delete t.options._Ctor}},cc31:function(t,e,s){"use strict";var n=s("9a1a"),a=s.n(n);e["default"]=a.a},da0f:function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"ui container padding"},[s("h2",{staticClass:"ui dividing header"},[t._v(" "+t._s(t.$t("contest user list"))+" ")]),s("table",{staticClass:"ui celled structured table"},[s("thead",[s("tr",[s("th",[t._v(t._s(t.$t("user_id")))]),s("th",[t._v(t._s(t.$t("reg_time")))]),s("th",[t._v(t._s(t.$t("access_time")))]),s("th",[t._v(t._s(t.$t("defunct")))])])]),s("tbody",t._l(t.contestAccountList,(function(e,n){return s("tr",{key:n},[s("td",[t._v(" "+t._s(e.user_id)+" ")]),s("td",[t._v(" "+t._s(t.dayjs(e.reg_time).format("YYYY-MM-DD HH:mm:ss"))+" ")]),s("td",[t._v(" "+t._s(t.dayjs(e.access_time).format("YYYY-MM-DD HH:mm:ss"))+" ")]),s("td",[t._v(" "+t._s(e.defunct)+" ")])])})),0)])])},a=[],c=s("d4ec"),i=s("bee2"),u=s("262e"),o=s("2caf"),r=s("9ab4"),d=s("2cd4"),_=s("5a0c"),l=s.n(_),f=s("60a3"),v=function(t){Object(u["a"])(s,t);var e=Object(o["a"])(s);function s(){var t;return Object(c["a"])(this,s),t=e.apply(this,arguments),t.contestAccountList=[],t.dayjs=l.a,t}return Object(i["a"])(s,[{key:"mounted",value:function(){this.initList()}},{key:"initList",value:function(){var t=this;this.axios.get("/api/admin/account/teamlist").then((function(e){var s=e.data;"OK"===s.status&&(t.contestAccountList=s.data)}))}}]),s}(Object(f["b"])(d["a"]));v=Object(r["a"])([f["a"]],v);var h=v,p=h,b=s("2877"),m=s("cc31"),j=Object(b["a"])(p,n,a,!1,null,"14e3c94f",null);"function"===typeof m["default"]&&Object(m["default"])(j);e["default"]=j.exports}}]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9ba9262e"],{"2cd4":function(t,s,a){"use strict";a("e260"),a("ddb0");var e=a("9ab4"),i=a("2b0e"),n=a("60a3"),r=a("3657"),c=a("0443"),d=class extends i["a"]{constructor(){super(...arguments),this.customConfig=c}mounted(){r["a"].init(this.$store.getters.homepage),document.title=c.title}};d=Object(e["c"])([n["a"]],d),s["a"]=d},d8f3:function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"ui container padding"},[a("table",{staticClass:"ui celled structured table"},[a("thead",[a("tr",[a("th",[t._v(t._s(t.$t("user_id")))]),a("th",[t._v(t._s(t.$t("ban end time")))]),a("th",[t._v(t._s(t.$t("edit")))]),a("th",[t._v(t._s(t.$t("remove")))])])]),a("tbody",t._l(t.banList,(function(s){return a("tr",{key:s.user_id},[a("td",[a("router-link",{attrs:{to:"/user/"+s.user_id}},[t._v(t._s(s.user_id))])],1),a("td",[t._v(" "+t._s(t.dayjs(s.bantime).format("YYYY-MM-DD HH:mm:ss"))+" ")]),a("td",{ref:s.user_id,refInFor:!0,staticClass:"ui calendar"},[a("div",[a("div",{staticClass:"ui tiny button",on:{click:function(a){return t.edit(s.user_id)}}},[t._v(" "+t._s(t.$t("edit"))+" ")])])]),a("td",[a("button",{staticClass:"ui labeled tiny icon black button",on:{click:function(a){return t.remove(s.user_id)}}},[a("i",{staticClass:"trash icon"}),t._v(" "+t._s(t.$t("remove"))+" ")])])])})),0)])])},i=[],n=(a("e260"),a("ddb0"),a("9ab4")),r=a("2cd4"),c=a("5a0c"),d=a.n(c),u=a("60a3"),o=a("1157"),l=a.n(o),b=l.a,_=class extends(Object(u["b"])(r["a"])){constructor(){super(...arguments),this.banList=[],this.dayjs=d.a}mounted(){this.initData()}initData(){this.axios.get("/api/admin/account/ban").then(t=>{var{data:s}=t;"OK"===s.status&&(this.banList=s.data)})}remove(t){this.axios.post("/api/admin/account/ban/delete",{user_id:t}).then(t=>{var{data:s}=t;"OK"===s.status?(alert(this.$t("success")),this.initData()):alert(this.$t("fail"))})}edit(t){b(this.$refs[t]).calendar()}};_=Object(n["c"])([u["a"]],_);var h=_,v=h,m=a("2877"),f=Object(m["a"])(v,e,i,!1,null,"fcb7474a",null);s["default"]=f.exports}}]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d22d424"],{f774:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"ui container padding"},[a("div",{staticClass:"ui form"},[a("div",{staticClass:"field"},[a("div",{staticClass:"two fields"},[a("div",{staticClass:"field"},[a("label",[t._v(t._s(t.$t("type")))]),a("div",{staticClass:"ui fluid search dropdown selection",attrs:{size:"1"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.rejudgeType,expression:"rejudgeType"}],attrs:{name:"language",type:"hidden"},domProps:{value:t.rejudgeType},on:{change:function(e){t.rejudgeType=e.target.value},input:function(e){e.target.composing||(t.rejudgeType=e.target.value)}}}),a("i",{staticClass:"dropdown icon"}),a("div",{staticClass:"default text"},[t._v("All")]),t._m(0)])]),a("div",{staticClass:"field"},[a("label",[t._v(t._s(t.$t("id")))]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.id,expression:"id"}],attrs:{type:"text"},domProps:{value:t.id},on:{input:function(e){e.target.composing||(t.id=e.target.value)}}})])])]),a("div",{staticClass:"field"},[a("div",{staticClass:"fields"},[a("div",{staticClass:"field"},[a("button",{staticClass:"ui primary button",on:{click:t.rejudge}},[t._v(" "+t._s(t.$t("rejudge"))+" ")])])])])])])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"menu"},[a("div",{staticClass:"item",attrs:{"data-value":"1"}},[t._v(" Solution ")]),a("div",{staticClass:"item",attrs:{"data-value":"2"}},[t._v(" Contest ")]),a("div",{staticClass:"item",attrs:{"data-value":"3"}},[t._v(" Problem ")])])}],d=(a("ddb0"),a("9ab4")),l=a("2cd4"),n=a("60a3");const r={1:"solution_id",2:"contest_id",3:"problem_id"},c={1:"solution",2:"contest",3:"problem"};let o=(()=>{let t=class extends(Object(n["b"])(l["a"])){constructor(){super(...arguments),this.rejudgeType=1,this.id=0}makeSendData(){const t={};return t[r[this.rejudgeType]]=this.id,t}rejudge(){this.axios.post("/api/admin/problem/rejudge/"+c[this.rejudgeType],this.makeSendData()).then(({data:t})=>{alert(this.$t("success"))}).catch(({data:t})=>{alert(t.statement)})}};return t=Object(d["c"])([n["a"]],t),t})();var u=o,v=u,p=a("2877"),m=Object(p["a"])(v,s,i,!1,null,"25057adc",null);e["default"]=m.exports}}]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-81327900"],{"2eb1":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("contest-set-editor",{on:{postData:t.add}})},c=[],n=i("d4ec"),a=i("99de"),o=i("7e84"),l=i("262e"),d=i("9ab4"),r=i("60a3"),u=i("2cd4"),v=i("837e"),f=i("fc17"),h=function(t){function e(){return Object(n["a"])(this,e),Object(a["a"])(this,Object(o["a"])(e).apply(this,arguments))}return Object(l["a"])(e,t),e}(Object(r["b"])(u["a"],v["a"]));h=Object(d["c"])([Object(r["a"])({components:{ContestSetEditor:f["a"]}})],h);var b=h,p=b,k=i("2877"),C=Object(k["a"])(p,s,c,!1,null,"59556166",null);e["default"]=C.exports},"837e":function(t,e,i){"use strict";i("a4d3"),i("e01a"),i("d81d");var s=i("d4ec"),c=i("bee2"),n=i("99de"),a=i("7e84"),o=i("262e"),l=i("9ab4"),d=i("2b0e"),r=i("60a3"),u=function(t){function e(){var t;return Object(s["a"])(this,e),t=Object(n["a"])(this,Object(a["a"])(e).apply(this,arguments)),t.contestSetId="0",t.contestSetInfo={},t.contestSetList=[],t}return Object(o["a"])(e,t),Object(c["a"])(e,[{key:"created",value:function(){this.contestSetId=this.$route.params.contestSetId}},{key:"mounted",value:function(){this.initData()}},{key:"initData",value:function(){var t=this;this.axios.get("/api/contestset/set/".concat(this.contestSetId)).then((function(e){var i=e.data;t.contestSetInfo=i.data})),this.axios.get("/api/contestset/list/".concat(this.contestSetId)).then((function(e){var i=e.data;t.contestSetList=i.data.map((function(t){return t.contest_id+""}))}))}},{key:"add",value:function(t){this.axios.post("/api/admin/contestset/add",t).then((function(t){t.data;alert("添加成功")})).catch((function(t){alert("添加失败, 错误信息将在Console输出"),console.error(t)}))}},{key:"contestSetEditInfo",get:function(){if(this.contestSetInfo){var t={contestset_id:parseInt(this.contestSetId),defunct:this.contestSetInfo.defunct,description:this.contestSetInfo.description,title:this.contestSetInfo.title,visible:this.contestSetInfo.visible,create_time:this.contestSetInfo.create_time};return t}return{}}}]),e}(d["a"]);u=Object(l["c"])([r["a"]],u),e["a"]=u},fc17:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"ui container padding"},[i("div",{staticClass:"ui form"},[i("div",{staticClass:"field"},[i("label",[t._v(t._s(t.$t("title")))]),i("div",{staticClass:"two fields"},[i("div",{staticClass:"field"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],attrs:{name:"title",placeholder:"",type:"text"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}})]),i("div",{staticClass:"field"},[i("div",{staticClass:"two fields"},[i("div",{staticClass:"field"},[i("div",{ref:"visible",staticClass:"ui toggle checkbox"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.visible,expression:"visible"}],staticClass:"hidden",attrs:{tabindex:"0",type:"checkbox"},domProps:{checked:Array.isArray(t.visible)?t._i(t.visible,null)>-1:t.visible},on:{click:t.visibleCallback,change:function(e){var i=t.visible,s=e.target,c=!!s.checked;if(Array.isArray(i)){var n=null,a=t._i(i,n);s.checked?a<0&&(t.visible=i.concat([n])):a>-1&&(t.visible=i.slice(0,a).concat(i.slice(a+1)))}else t.visible=c}}}),i("label",[t._v(t._s(t.$t("visible")))])])]),i("div",{staticClass:"field"},[i("div",{ref:"defunct",staticClass:"ui toggle checkbox"},[i("input",{staticClass:"hidden",attrs:{tabindex:"0",type:"checkbox"},on:{click:t.reverseDefunct}}),i("label",[t._v(t._s(t.$t("enable")))])])])])])])]),i("div",{staticClass:"field"},[i("div",{staticClass:"field"},[i("label",[t._v(t._s(t.$t("contest list")))]),i("div",{ref:"contestList",staticClass:"ui fluid multiple search selection dropdown"},[i("input",{attrs:{type:"hidden"},on:{change:function(e){t.select1=e.target.value}}}),i("i",{staticClass:"dropdown icon"}),i("div",{staticClass:"default text"}),i("div",{staticClass:"menu"},t._l(t.totalContestList,(function(e,s){return i("div",{key:s,staticClass:"item",attrs:{"data-value":e.contest_id}},[t._v(" "+t._s("Contest"+e.contest_id+" "+e.title)+" ")])})),0)])])]),i("div",{staticClass:"field"},[i("div",{staticClass:"field"},[i("label",[t._v(t._s(t.$t("description")))]),i("mavon-editor",{ref:"description",attrs:{markInstance:t.markdownIt},model:{value:t.description,callback:function(e){t.description=e},expression:"description"}})],1)]),i("div",{staticClass:"field"},[i("div",{staticClass:"two fields"},[i("div",{staticClass:"field"},[i("button",{staticClass:"ui primary button",on:{click:t.emitData}},[t._v(" Submit ")])]),i("div",{staticClass:"field"})])])])])},c=[],n=(i("a4d3"),i("e01a"),i("ac1f"),i("1276"),i("d4ec")),a=i("bee2"),o=i("99de"),l=i("7e84"),d=i("262e"),r=i("9ab4"),u=i("2b0e"),v=i("60a3"),f=i("ec1c"),h=i("1157"),b=i.n(h),p=b.a,k=function(t){function e(){var t;return Object(n["a"])(this,e),t=Object(o["a"])(this,Object(l["a"])(e).apply(this,arguments)),t.contestIdList=[],t.defunct="N",t.description="",t.title="",t.visible=!0,t.select1="",t.totalContestList=[],t.contestSetId="",t.markdownIt=f["a"],t}return Object(d["a"])(e,t),Object(a["a"])(e,[{key:"onContestListChanged",value:function(t){var e=this;t.length>0&&(this.contestIdList=t,this.$nextTick((function(){e.initJQuery()})))}},{key:"onContestSetInfoChanged",value:function(t){var e=this;t&&t.title&&t.title.length>0&&(this.visible=t.visible,this.defunct=t.defunct,this.description=t.description,this.title=t.title,t.contestset_id&&(this.contestSetId=t.contestset_id+""),this.$nextTick((function(){e.initJQuery()})))}},{key:"created",value:function(){this.contestSetId=this.$route.params.contestSetId}},{key:"mounted",value:function(){this.initTotalContest(),this.initJQuery()}},{key:"initJQuery",value:function(){var t=this;this.$nextTick((function(){p(t.$refs.visible).checkbox(t.visible?"check":"uncheck"),p(t.$refs.defunct).checkbox("N"===t.defunct?"check":"uncheck"),p(t.$refs.contestList).dropdown("set selected",t.contestIdList)}))}},{key:"initTotalContest",value:function(){var t=this;this.axios.get("/api/contest/list/all").then((function(e){var i=e.data;t.totalContestList=i.data}))}},{key:"reverseDefunct",value:function(){var t=p(this.$refs.defunct);"Y"===this.defunct?(this.defunct="N",t.checkbox("checked")):(this.defunct="Y",t.checkbox("unchecked"))}},{key:"visibleCallback",value:function(){this.visible=!this.visible;var t=p(this.$refs.visible);this.visible?t.checkbox("checked"):t.checkbox("unchecked")}},{key:"emitData",value:function(){var t={contestIdList:this.select1.split(","),defunct:this.defunct,description:this.description,title:this.title,visible:this.visible,contestSetId:this.contestSetId};this.$emit("postData",t)}}]),e}(Object(v["b"])(u["a"]));Object(r["c"])([Object(v["c"])({default:{}})],k.prototype,"contestSetInfo",void 0),Object(r["c"])([Object(v["c"])({default:[]})],k.prototype,"contestList",void 0),Object(r["c"])([Object(v["d"])("contestList")],k.prototype,"onContestListChanged",null),Object(r["c"])([Object(v["d"])("contestSetInfo")],k.prototype,"onContestSetInfoChanged",null),k=Object(r["c"])([v["a"]],k);var C=k,m=C,y=i("2877"),I=Object(y["a"])(m,s,c,!1,null,"c89ae980",null);e["a"]=I.exports}}]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-81327900"],{"2eb1":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("contest-set-editor",{attrs:{"contest-set-info":t.contestSetEditInfo,"contest-list":t.contestSetList},on:{postData:t.add}})},n=[],a=i("d4ec"),c=i("262e"),o=i("2caf"),l=i("9ab4"),d=i("60a3"),r=i("2cd4"),u=i("837e"),v=i("fc17"),f=function(t){Object(c["a"])(i,t);var e=Object(o["a"])(i);function i(){return Object(a["a"])(this,i),e.apply(this,arguments)}return i}(Object(d["b"])(r["a"],u["a"]));f=Object(l["a"])([Object(d["a"])({components:{ContestSetEditor:v["a"]}})],f);var h=f,b=h,p=i("2877"),m=Object(p["a"])(b,s,n,!1,null,"3a87e1b1",null);e["default"]=m.exports},"837e":function(t,e,i){"use strict";i("a4d3"),i("e01a"),i("d81d");var s=i("d4ec"),n=i("bee2"),a=i("262e"),c=i("2caf"),o=i("9ab4"),l=i("2b0e"),d=i("60a3"),r=function(t){Object(a["a"])(i,t);var e=Object(c["a"])(i);function i(){var t;return Object(s["a"])(this,i),t=e.apply(this,arguments),t.contestSetId="0",t.contestSetInfo={},t.contestSetList=[],t}return Object(n["a"])(i,[{key:"created",value:function(){this.contestSetId=this.$route.params.contestSetId}},{key:"mounted",value:function(){this.initData()}},{key:"initData",value:function(){var t=this;this.axios.get("/api/admin/contestset/".concat(this.contestSetId)).then((function(e){var i=e.data;t.contestSetInfo=i.data})),this.axios.get("/api/contestset/list/".concat(this.contestSetId)).then((function(e){var i=e.data;t.contestSetList=i.data.map((function(t){return t.contest_id+""}))}))}},{key:"add",value:function(t){this.axios.post("/api/admin/contestset/add",t).then((function(t){t.data;alert("添加成功")})).catch((function(t){alert("添加失败, 错误信息将在Console输出"),console.error(t)}))}},{key:"contestSetEditInfo",get:function(){if(this.contestSetInfo){var t={contestset_id:parseInt(this.contestSetId),defunct:this.contestSetInfo.defunct,description:this.contestSetInfo.description,title:this.contestSetInfo.title,visible:this.contestSetInfo.visible,create_time:this.contestSetInfo.create_time,assistant:this.contestSetInfo.assistant,userList:this.contestSetInfo.userList};return t}return{}}}]),i}(l["a"]);r=Object(o["a"])([d["a"]],r),e["a"]=r},fc17:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"ui container padding"},[i("div",{staticClass:"ui form"},[i("div",{staticClass:"field"},[i("label",[t._v(t._s(t.$t("title")))]),i("div",{staticClass:"two fields"},[i("div",{staticClass:"field"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],attrs:{name:"title",placeholder:"",type:"text"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}})]),i("div",{staticClass:"field"},[i("div",{staticClass:"two fields"},[i("div",{staticClass:"field"},[i("div",{ref:"visible",staticClass:"ui toggle checkbox"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.visible,expression:"visible"}],staticClass:"hidden",attrs:{tabindex:"0",type:"checkbox"},domProps:{checked:Array.isArray(t.visible)?t._i(t.visible,null)>-1:t.visible},on:{click:t.visibleCallback,change:function(e){var i=t.visible,s=e.target,n=!!s.checked;if(Array.isArray(i)){var a=null,c=t._i(i,a);s.checked?c<0&&(t.visible=i.concat([a])):c>-1&&(t.visible=i.slice(0,c).concat(i.slice(c+1)))}else t.visible=n}}}),i("label",[t._v(t._s(t.$t("visible")))])])]),i("div",{staticClass:"field"},[i("div",{ref:"defunct",staticClass:"ui toggle checkbox"},[i("input",{staticClass:"hidden",attrs:{tabindex:"0",type:"checkbox"},on:{click:t.reverseDefunct}}),i("label",[t._v(t._s(t.$t("enable")))])])])])])])]),i("div",{staticClass:"field"},[i("label",[t._v(t._s(t.$t("contest list")))]),i("div",{ref:"contestList",staticClass:"ui fluid multiple search selection dropdown"},[i("input",{attrs:{type:"hidden"},on:{change:function(e){t.select1=e.target.value}}}),i("i",{staticClass:"dropdown icon"}),i("div",{staticClass:"default text"}),i("div",{staticClass:"menu"},t._l(t.totalContestList,(function(e,s){return i("div",{key:s,staticClass:"item",attrs:{"data-value":e.contest_id}},[t._v(" "+t._s("Contest"+e.contest_id+" "+e.title)+" ")])})),0)])]),i("div",{staticClass:"field"},[i("label",[t._v(t._s(t.$t("assistant"))+' 使用","分割不同用户(请区分中英文逗号)')]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.topicAssistant,expression:"topicAssistant"}],attrs:{type:"text"},domProps:{value:t.topicAssistant},on:{input:function(e){e.target.composing||(t.topicAssistant=e.target.value)}}})]),i("div",{staticClass:"field"},[i("label",[t._v(t._s(t.$t("description")))]),i("mavon-editor",{ref:"description",attrs:{markInstance:t.markdownIt},model:{value:t.description,callback:function(e){t.description=e},expression:"description"}})],1),i("div",{staticClass:"field"},[i("div",{staticClass:"two fields"},[i("div",{staticClass:"field"},[i("label",[t._v(t._s(t.$t("selected user")))]),i("div",{staticClass:"ui middle aligned animated list"},t._l(t.userList,(function(e,s){return i("div",{key:s,staticClass:"item"},[t._v(" "+t._s(s+1)+" "),i("img",{staticClass:"ui avatar image",attrs:{"data-src":"/avatar/"+e+".jpg"}}),i("div",{staticClass:"content"},[i("div",{staticClass:"header"},[t._v(t._s(e))])])])})),0)]),i("div",{staticClass:"field"},[i("label",[t._v(t._s(t.$t("selected user input")))]),i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.userListText,expression:"userListText"}],staticStyle:{"min-height":"100%",height:"100%","box-sizing":"border-box"},domProps:{value:t.userListText},on:{input:function(e){e.target.composing||(t.userListText=e.target.value)}}})])])]),i("div",{staticClass:"field"},[i("div",{staticClass:"two fields"},[i("div",{staticClass:"field"},[i("button",{staticClass:"ui primary button",on:{click:t.emitData}},[t._v(" Submit ")])]),i("div",{staticClass:"field"})])])])])},n=[],a=(i("a4d3"),i("e01a"),i("4de4"),i("a15b"),i("d81d"),i("ac1f"),i("1276"),i("498a"),i("d4ec")),c=i("bee2"),o=i("262e"),l=i("2caf"),d=i("9ab4"),r=i("2b0e"),u=i("60a3"),v=i("ec1c"),f=i("1157"),h=i.n(f),b=h.a,p=function(t){Object(o["a"])(i,t);var e=Object(l["a"])(i);function i(){var t;return Object(a["a"])(this,i),t=e.apply(this,arguments),t.contestIdList=[],t.defunct="N",t.description="",t.title="",t.visible=!0,t.topicAssistant="",t.select1="",t.userList=[],t.userListText="",t.totalContestList=[],t.contestSetId="",t.markdownIt=v["a"],t}return Object(c["a"])(i,[{key:"onContestListChanged",value:function(t){var e=this;t.length>0&&(this.contestIdList=t,this.$nextTick((function(){e.initJQuery()})))}},{key:"onContestSetInfoChanged",value:function(t){var e=this;t&&t.title&&t.title.length>0&&(this.visible=t.visible,this.defunct=t.defunct,this.description=t.description,this.title=t.title,this.topicAssistant=t.assistant.map((function(t){return t.user_id})).join(","),this.userListText=t.userList.join("\n"),this.userList=t.userList,t.contestset_id&&(this.contestSetId=t.contestset_id+""),this.$nextTick((function(){e.initJQuery()})))}},{key:"created",value:function(){this.contestSetId=this.$route.params.contestSetId}},{key:"mounted",value:function(){this.initTotalContest(),this.initJQuery()}},{key:"initJQuery",value:function(){var t=this;this.$nextTick((function(){b(t.$refs.visible).checkbox(t.visible?"check":"uncheck"),b(t.$refs.defunct).checkbox("N"===t.defunct?"check":"uncheck"),b(t.$refs.contestList).dropdown("set selected",t.contestIdList)}))}},{key:"initTotalContest",value:function(){var t=this;this.axios.get("/api/contest/list/all").then((function(e){var i=e.data;t.totalContestList=i.data,t.$nextTick((function(){t.initJQuery()}))}))}},{key:"reverseDefunct",value:function(){var t=b(this.$refs.defunct);"Y"===this.defunct?(this.defunct="N",t.checkbox("checked")):(this.defunct="Y",t.checkbox("unchecked"))}},{key:"visibleCallback",value:function(){this.visible=!this.visible;var t=b(this.$refs.visible);this.visible?t.checkbox("checked"):t.checkbox("unchecked")}},{key:"emitData",value:function(){var t={contestIdList:this.select1.split(","),defunct:this.defunct,description:this.description,title:this.title,visible:this.visible,contestSetId:this.contestSetId,topicAssistant:this.topicAssistant.split(","),userList:this.userListText.split("\n").map((function(t){return t.trim()})).filter((function(t){return t.length>0}))};this.$emit("postData",t)}}]),i}(Object(u["b"])(r["a"]));Object(d["a"])([Object(u["c"])({default:{}})],p.prototype,"contestSetInfo",void 0),Object(d["a"])([Object(u["c"])({default:[]})],p.prototype,"contestList",void 0),Object(d["a"])([Object(u["d"])("contestList")],p.prototype,"onContestListChanged",null),Object(d["a"])([Object(u["d"])("contestSetInfo")],p.prototype,"onContestSetInfoChanged",null),p=Object(d["a"])([u["a"]],p);var m=p,k=m,C=i("2877"),x=Object(C["a"])(k,s,n,!1,null,"b188134e",null);e["a"]=x.exports}}]);
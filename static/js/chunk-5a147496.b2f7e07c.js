(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5a147496"],{"701d":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContestSetEditor",{on:{postData:t.add}})},a=[],n=s("9ab4"),c=s("60a3"),o=s("2cd4"),l=s("fc17"),d=s("837e");let r=class extends(Object(c["b"])(o["a"],d["a"])){};r=Object(n["a"])([Object(c["a"])({components:{ContestSetEditor:l["a"]}})],r);var h=r,u=h,v=s("2877"),p=Object(v["a"])(u,i,a,!1,null,"e9e56284",null);e["default"]=p.exports},"837e":function(t,e,s){"use strict";s("ddb0");var i=s("9ab4"),a=s("2b0e"),n=s("60a3");let c=class extends a["a"]{constructor(){super(...arguments),this.contestSetId="0",this.contestSetInfo={},this.contestSetList=[]}created(){this.contestSetId=this.$route.params.contestSetId}mounted(){this.initData()}initData(){this.axios.get("/api/admin/contestset/"+this.contestSetId).then(({data:t})=>{this.contestSetInfo=t.data}),this.axios.get("/api/contestset/list/"+this.contestSetId).then(({data:t})=>{this.contestSetList=t.data.map(t=>t.contest_id+"")})}get contestSetEditInfo(){if(this.contestSetInfo){const t={contestset_id:parseInt(this.contestSetId),defunct:this.contestSetInfo.defunct,description:this.contestSetInfo.description,title:this.contestSetInfo.title,visible:this.contestSetInfo.visible,create_time:this.contestSetInfo.create_time,assistant:this.contestSetInfo.assistant,userList:this.contestSetInfo.userList};return t}return{}}add(t){this.axios.post("/api/admin/contestset/add",t).then(({data:t})=>{alert("添加成功")}).catch(t=>{alert("添加失败, 错误信息将在Console输出"),console.error(t)})}};c=Object(i["a"])([n["a"]],c),e["a"]=c},fc17:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"ui container padding"},[s("div",{staticClass:"ui form"},[s("div",{staticClass:"field"},[s("label",[t._v(t._s(t.$t("title")))]),s("div",{staticClass:"two fields"},[s("div",{staticClass:"field"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],attrs:{name:"title",placeholder:"",type:"text"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}})]),s("div",{staticClass:"field"},[s("div",{staticClass:"two fields"},[s("div",{staticClass:"field"},[s("div",{ref:"visible",staticClass:"ui toggle checkbox"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.visible,expression:"visible"}],staticClass:"hidden",attrs:{tabindex:"0",type:"checkbox"},domProps:{checked:Array.isArray(t.visible)?t._i(t.visible,null)>-1:t.visible},on:{click:t.visibleCallback,change:function(e){var s=t.visible,i=e.target,a=!!i.checked;if(Array.isArray(s)){var n=null,c=t._i(s,n);i.checked?c<0&&(t.visible=s.concat([n])):c>-1&&(t.visible=s.slice(0,c).concat(s.slice(c+1)))}else t.visible=a}}}),s("label",[t._v(t._s(t.$t("visible")))])])]),s("div",{staticClass:"field"},[s("div",{ref:"defunct",staticClass:"ui toggle checkbox"},[s("input",{staticClass:"hidden",attrs:{tabindex:"0",type:"checkbox"},on:{click:t.reverseDefunct}}),s("label",[t._v(t._s(t.$t("enable")))])])])])])])]),s("div",{staticClass:"field"},[s("label",[t._v(t._s(t.$t("contest list")))]),s("div",{ref:"contestList",staticClass:"ui fluid multiple search selection dropdown"},[s("input",{attrs:{type:"hidden"},on:{change:function(e){t.select1=e.target.value}}}),s("i",{staticClass:"dropdown icon"}),s("div",{staticClass:"default text"}),s("div",{staticClass:"menu"},t._l(t.totalContestList,(function(e,i){return s("div",{key:i,staticClass:"item",attrs:{"data-value":e.contest_id}},[t._v(" "+t._s("Contest"+e.contest_id+" "+e.title)+" ")])})),0)])]),s("div",{staticClass:"field"},[s("label",[t._v(t._s(t.$t("assistant"))+' 使用","分割不同用户(请区分中英文逗号)')]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.topicAssistant,expression:"topicAssistant"}],attrs:{type:"text"},domProps:{value:t.topicAssistant},on:{input:function(e){e.target.composing||(t.topicAssistant=e.target.value)}}})]),s("div",{staticClass:"field"},[s("label",[t._v(t._s(t.$t("description")))]),s("mavon-editor",{ref:"description",attrs:{markInstance:t.markdownIt},model:{value:t.description,callback:function(e){t.description=e},expression:"description"}})],1),s("div",{staticClass:"field"},[s("div",{staticClass:"two fields"},[s("div",{staticClass:"field"},[s("label",[t._v(t._s(t.$t("selected user")))]),s("div",{staticClass:"ui middle aligned animated list"},t._l(t.userList,(function(e,i){return s("div",{key:i,staticClass:"item"},[t._v(" "+t._s(i+1)+" "),s("img",{staticClass:"ui avatar image",attrs:{"data-src":"/avatar/"+e+".jpg"}}),s("div",{staticClass:"content"},[s("div",{staticClass:"header"},[t._v(t._s(e))])])])})),0)]),s("div",{staticClass:"field"},[s("label",[t._v(t._s(t.$t("selected user input")))]),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.userListText,expression:"userListText"}],staticStyle:{"min-height":"100%",height:"100%","box-sizing":"border-box"},domProps:{value:t.userListText},on:{input:function(e){e.target.composing||(t.userListText=e.target.value)}}})])])]),s("div",{staticClass:"field"},[s("div",{staticClass:"two fields"},[s("div",{staticClass:"field"},[s("button",{staticClass:"ui primary button",on:{click:t.emitData}},[t._v(" Submit ")])]),s("div",{staticClass:"field"})])])])])},a=[],n=(s("ddb0"),s("9ab4")),c=s("2b0e"),o=s("60a3"),l=s("ec1c"),d=s("1157"),r=s.n(d);const h=r.a;let u=class extends(Object(o["b"])(c["a"])){constructor(){super(...arguments),this.contestIdList=[],this.defunct="N",this.description="",this.title="",this.visible=!0,this.topicAssistant="",this.select1="",this.userList=[],this.userListText="",this.totalContestList=[],this.contestSetId="",this.markdownIt=l["a"]}onContestListChanged(t){t.length>0&&(this.contestIdList=t,this.$nextTick(()=>{this.initJQuery()}))}onContestSetInfoChanged(t){t&&t.title&&t.title.length>0&&(this.visible=t.visible,this.defunct=t.defunct,this.description=t.description,this.title=t.title,this.topicAssistant=t.assistant.map(t=>t.user_id).join(","),this.userListText=t.userList.join("\n"),this.userList=t.userList,t.contestset_id&&(this.contestSetId=t.contestset_id+""),this.$nextTick(()=>{this.initJQuery()}))}created(){this.contestSetId=this.$route.params.contestSetId}mounted(){this.initTotalContest(),this.initJQuery()}initJQuery(){this.$nextTick(()=>{h(this.$refs.visible).checkbox(this.visible?"check":"uncheck"),h(this.$refs.defunct).checkbox("N"===this.defunct?"check":"uncheck"),h(this.$refs.contestList).dropdown("set selected",this.contestIdList)})}initTotalContest(){this.axios.get("/api/contest/list/all").then(({data:t})=>{this.totalContestList=t.data,this.$nextTick(()=>{this.initJQuery()})})}reverseDefunct(){const t=h(this.$refs.defunct);"Y"===this.defunct?(this.defunct="N",t.checkbox("checked")):(this.defunct="Y",t.checkbox("unchecked"))}visibleCallback(){this.visible=!this.visible;const t=h(this.$refs.visible);this.visible?t.checkbox("checked"):t.checkbox("unchecked")}emitData(){const t={contestIdList:this.select1.split(","),defunct:this.defunct,description:this.description,title:this.title,visible:this.visible,contestSetId:this.contestSetId,topicAssistant:this.topicAssistant.split(","),userList:this.userListText.split("\n").map(t=>t.trim()).filter(t=>t.length>0)};this.$emit("postData",t)}};Object(n["a"])([Object(o["c"])({default:{}})],u.prototype,"contestSetInfo",void 0),Object(n["a"])([Object(o["c"])({default:[]})],u.prototype,"contestList",void 0),Object(n["a"])([Object(o["d"])("contestList")],u.prototype,"onContestListChanged",null),Object(n["a"])([Object(o["d"])("contestSetInfo")],u.prototype,"onContestSetInfoChanged",null),u=Object(n["a"])([o["a"]],u);var v=u,p=v,b=s("2877"),f=Object(b["a"])(p,i,a,!1,null,"b188134e",null);e["a"]=f.exports}}]);
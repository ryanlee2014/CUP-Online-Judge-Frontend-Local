(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cdf50684"],{"2cd4":function(e,n,t){"use strict";t("e260"),t("ddb0");var s=t("9ab4"),r=t("2b0e"),i=t("60a3"),a=t("3657"),o=t("0443"),c=class extends r["a"]{constructor(){super(...arguments),this.customConfig=o}mounted(){a["a"].init(this.$store.getters.homepage),document.title=o.title}};c=Object(s["c"])([i["a"]],c),n["a"]=c},f081:function(e,n){e.exports=function(e){e.options.__i18n=e.options.__i18n||[],e.options.__i18n.push('{"zh-cn":{"frontend module version":"前端模块版本","backend module version":"后端模块版本","current version":"当前版本","repo branch version":"仓库模块版本","version control":"版本管理"},"en":{"frontend module version":"Frontend Module Version","backend module version":"Backend Module Version","current version":"Current Version","repo branch version":"Repository Branch Version","version control":"Version Control"},"ja":{"frontend module version":"フロントエンドモジュールバージョン","backend module version":"バックエンドモジュールバージョン","current version":"現在のバージョン","repo branch version":"リポジトリブランチバージョン","version control":"バージョン管理"}}'),delete e.options._Ctor}},f288:function(e,n,t){"use strict";var s=t("f081"),r=t.n(s);n["default"]=r.a},f53c:function(e,n,t){"use strict";t.r(n);var s=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"ui container padding"},[t("h2",{staticClass:"ui dividing header"},[e._v(e._s(e.$t("version control")))]),t("div",{staticClass:"ui grid",staticStyle:{"margin-left":"0"}},[t("div",{staticClass:"row"},[t("h3",{staticClass:"ui header"},[e._v(" "+e._s(e.$t("frontend module version"))+" ")])]),t("div",{staticClass:"row"},[t("h3",{staticClass:"ui header"},[e._v(" "+e._s(e.$t("current version"))+" ")])]),t("div",{staticClass:"row"},[t("div",{staticClass:"ui card"},[t("RepoInfoCard",{scopedSlots:e._u([{key:"header",fn:function(){return[e._v(" "+e._s(e.currentFrontendInfo.version)+" ")]},proxy:!0},{key:"meta",fn:function(){},proxy:!0}])})],1)]),t("div",{staticClass:"row"},[t("h3",{staticClass:"ui header"},[e._v(" "+e._s(e.$t("repo branch version"))+" ")])]),t("div",{staticClass:"row"},[t("div",{staticClass:"ui cards"},e._l(e.frontendBranch,(function(n,s){return t("RepoInfoCard",{key:s,scopedSlots:e._u([{key:"header",fn:function(){return[e._v(" "+e._s(n.name)+" ")]},proxy:!0},{key:"meta",fn:function(){return[e._v(" "+e._s(n.version)+" ")]},proxy:!0},{key:"content",fn:function(){},proxy:!0}],null,!0)})})),1)]),t("div",{staticClass:"row"},[t("h3",{staticClass:"ui header"},[e._v(" "+e._s(e.$t("backend module version"))+" ")])]),t("div",{staticClass:"row"},[t("h3",{staticClass:"ui header"},[e._v(" "+e._s(e.$t("current version"))+" ")])]),t("div",{staticClass:"row"},[t("div",{staticClass:"ui card"},[t("RepoInfoCard",{scopedSlots:e._u([{key:"header",fn:function(){return[e._v(" "+e._s(e.currentBackendInfo.version)+" ")]},proxy:!0},{key:"meta",fn:function(){},proxy:!0}])})],1)]),t("div",{staticClass:"row"},[t("h3",{staticClass:"ui header"},[e._v(" "+e._s(e.$t("repo branch version"))+" ")])]),t("div",{staticClass:"row"},[t("div",{staticClass:"ui cards"},e._l(e.backendBranch,(function(n,s){return t("RepoInfoCard",{key:s,scopedSlots:e._u([{key:"header",fn:function(){return[e._v(" "+e._s(n.name)+" ")]},proxy:!0},{key:"meta",fn:function(){return[e._v(" "+e._s(n.version)+" ")]},proxy:!0},{key:"content",fn:function(){},proxy:!0}],null,!0)})})),1)])])])},r=[],i=(t("e260"),t("4e82"),t("e6cf"),t("ddb0"),t("9ab4")),a=t("60a3"),o=t("2cd4"),c=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"ui card"},[t("div",{staticClass:"content"},[t("div",{staticClass:"header"},[e._t("header")],2),t("div",{staticClass:"meta"},[e._t("meta")],2),t("p",[e._t("content")],2)])])},d=[],u=t("2b0e"),l=class extends u["a"]{};l=Object(i["c"])([a["a"]],l);var v=l,h=v,f=t("2877"),p=Object(f["a"])(h,c,d,!1,null,"1d2c2c24",null),_=p.exports,b=t("9224"),C=class extends(Object(a["b"])(o["a"])){constructor(){super(...arguments),this.frontendBranch=[],this.backendBranch=[],this.currentFrontendInfo=b,this.currentBackendInfo={},this.frontendRepo="ryanlee2014/CUP-Online-Judge-NG-Frontend",this.backendRepo="CUP-ACM-Programming-Club/CUP-Online-Judge-Express"}mounted(){this.initFrontendData(),this.initBackendData()}buildBranchAPIUrl(e){return"https://api.github.com/repos/".concat(e,"/branches?timestamp=").concat(Date.now())}buildVersion(e,n){var t=[];return n.forEach(n=>{var s=this.axios.get(this.buildJsDelivrLink(e,n.name)).then(e=>{var{data:t}=e;return n.version=t.version,n});t.push(s)}),Promise.all(t)}baseInitData(e,n){this.axios.get(this.buildBranchAPIUrl(e)).then(n=>{var{data:t}=n;return this.buildVersion(e,t)}).then(e=>(e.sort((e,n)=>e.version<n.version?1:e.version>n.version?-1:0),e)).then(e=>{this[n]=e})}initFrontendData(){this.baseInitData(this.frontendRepo,"frontendBranch")}initBackendData(){this.baseInitData(this.backendRepo,"backendBranch"),this.getBackendVersion()}getBackendVersion(){this.axios.get("/api/system/config/version_control/version").then(e=>{var{data:n}=e;this.currentBackendInfo=this.buildVersionPackage(n.data)})}buildVersionPackage(e){return{version:e}}buildJsDelivrLink(e,n){return"https://cdn.jsdelivr.net/gh/".concat(e,"@").concat(n,"/package.json?timestamp=").concat(Date.now())}};C=Object(i["c"])([Object(a["a"])({components:{RepoInfoCard:_}})],C);var k=C,m=k,y=t("f288"),g=Object(f["a"])(m,s,r,!1,null,"54e4d7d8",null);"function"===typeof y["default"]&&Object(y["default"])(g);n["default"]=g.exports}}]);
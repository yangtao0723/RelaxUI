(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d5faf"],{7132:function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t._m(0),s("div",{staticClass:"components-button-demo"},[s("RelaxTag",{attrs:{name:"普通提示"}},[s("template",{slot:"temp"},[s("Button",{attrs:{type:"primary"},on:{click:t.info}},[t._v("显示普通提示")])],1),s("template",{slot:"desc"},[t._v("\n        最基本的提示，默认在"),s("i",[t._v("1.5")]),t._v("秒后消失。\n      ")]),s("textarea",{attrs:{slot:"code"},slot:"code"},[t._v("        <template>\n          <Button type='primary' @click=\"info\">显示普通提示</Button>\n        </template>\n        <script>\n        export default {\n          methods: {\n            info(){\n              this.$message.info('message 消息')\n            }\n          }\n        }\n        <\/script>\n      ")])],2),s("RelaxTag",{attrs:{name:"提示类型"}},[s("template",{slot:"temp"},[s("Button",{on:{click:t.success}},[t._v("显示成功提示")]),s("Button",{on:{click:t.warning}},[t._v("显示警告提示")]),s("Button",{on:{click:t.error}},[t._v("显示错误提示")])],1),s("template",{slot:"desc"},[t._v("\n        不同的提示状态：成功、警告、错误。\n      ")]),s("textarea",{attrs:{slot:"code"},slot:"code"},[t._v("        <template>\n          <Button @click=\"success\">显示成功提示</Button>\n          <Button @click=\"warning\">显示警告提示</Button>\n          <Button @click=\"error\">显示错误提示</Button>\n        </template>\n        <script>\n        export default {\n          methods: {\n            success(){\n              this.$message.success('message 消息')\n            },\n            warning(){\n              this.$message.warning('message 消息')\n            },\n            error(){\n              this.$message.error('message 消息')\n            }\n          }\n        }\n        <\/script>\n      ")])],2)],1)])},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"topbar"},[s("div",{staticClass:"page-title-box"},[s("h4",{staticClass:"page-title"},[t._v("message 消息")]),s("p",{staticClass:"page-title-decs"},[t._v("来自Relax的消息")])])])}],o={methods:{info:function(){this.$message.info("message 消息")},success:function(){this.$message.success("message 消息")},warning:function(){this.$message.warning("message 消息")},error:function(){this.$message.error("message 消息")}}},c=o,i=s("2877"),r=Object(i["a"])(c,n,a,!1,null,"02bb1c02",null);e["default"]=r.exports}}]);
//# sourceMappingURL=chunk-2d0d5faf.75e48d9e.js.map
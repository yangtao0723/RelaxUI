(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c0e74"],{4486:function(t,n,e){"use strict";e.r(n);var o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[t._m(0),e("div",{staticClass:"components-button-demo"},[e("RelaxTag",{attrs:{name:"普通通知"}},[e("template",{slot:"temp"},[e("x-button",{attrs:{type:"primary"},on:{click:t.open}},[t._v("打开普通提醒")])],1),e("template",{slot:"desc"},[t._v("\n        最简单的用法，4.5 秒后自动关闭。\n      ")]),e("textarea",{attrs:{slot:"code"},slot:"code"},[t._v("        <template>\n          <x-button type=\"primary\" @click=\"open\">打开普通提醒</x-button>\n        </template>\n        <script>\n        export default {\n          methods: {\n            open(){\n              this.$notice.open({\n                title: 'message 消息',\n                desc: '我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述'\n              })\n            }\n          }\n        }\n        <\/script>\n      ")])],2),e("RelaxTag",{attrs:{name:"通知类型"}},[e("template",{slot:"temp"},[e("x-button",{on:{click:t.info}},[t._v("打开通知提醒")]),e("x-button",{on:{click:t.success}},[t._v("打开成功提醒")]),e("x-button",{on:{click:t.warning}},[t._v("打开警告提醒")]),e("x-button",{on:{click:t.error}},[t._v("打开错误提醒")])],1),e("template",{slot:"desc"},[t._v("\n        不同的提示状态：信息、成功、警告、错误。\n      ")]),e("textarea",{attrs:{slot:"code"},slot:"code"},[t._v("        <template>\n          <x-button @click=\"info\">打开通知提醒</x-button>\n          <x-button @click=\"success\">打开成功提醒</x-button>\n          <x-button @click=\"warning\">打开警告提醒</x-button>\n          <x-button @click=\"error\">打开错误提醒</x-button>\n        </template>\n        <script>\n        export default {\n          methods: {\n            info(){\n              this.$notice.info({\n                title: 'Notice 通知提醒',\n                desc: '我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述'\n              })\n            },\n            success(){\n              this.$notice.success({\n                title: 'Notice 通知提醒',\n                desc: '我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述'\n              })\n            },\n            warning(){\n              this.$notice.warning({\n                title: 'Notice 通知提醒',\n                desc: '我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述'\n              })\n            },\n            error(){\n              this.$notice.error({\n                title: 'Notice 通知提醒',\n                desc: '我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述'\n              })\n            },\n          }\n        }\n        <\/script>\n      ")])],2),e("RelaxTag",{attrs:{name:"自定义时长"}},[e("template",{slot:"temp"},[e("x-button",{on:{click:t.time}},[t._v("手动关闭")])],1),e("template",{slot:"desc"},[t._v("\n        自定义时长，为 0 则不自动关闭\n      ")]),e("textarea",{attrs:{slot:"code"},slot:"code"},[t._v("        <template>\n          <x-button @click=\"open\">手动关闭</x-button>\n        </template>\n        <script>\n        export default {\n          methods: {\n            open(){\n              this.$notice.success({\n                title: 'Notice 通知提醒',\n                desc: '我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述',\n                duration: 0\n              })\n            }\n          }\n        }\n        <\/script>\n      ")])],2),e("RelaxTag",{attrs:{name:"仅显示标题"}},[e("template",{slot:"temp"},[e("x-button",{on:{click:t.openNotice}},[t._v("打开提醒(仅标题)")])],1),e("template",{slot:"desc"},[t._v("\n        title 为必填项\n      ")]),e("textarea",{attrs:{slot:"code"},slot:"code"},[t._v("        <template>\n          <x-button @click=\"openNotice\">打开提醒(仅标题)</x-button>\n        </template>\n        <script>\n        export default {\n          methods: {\n            openNotice(){\n              this.$notice.success({\n                title: 'Notice 通知提醒'\n              })\n            }\n          }\n        }\n        <\/script>\n      ")])],2)],1)])},c=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"topbar"},[e("div",{staticClass:"page-title-box"},[e("h4",{staticClass:"page-title"},[t._v("Notice 通知")]),e("p",{staticClass:"page-title-decs"},[t._v("全局展示通知提醒信息。")])])])}],i={methods:{open:function(){this.$notice.open({title:"Notice 通知提醒",desc:"我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述"})},info:function(){this.$notice.info({title:"Notice 通知提醒",desc:"我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述"})},success:function(){this.$notice.success({title:"Notice 通知提醒",desc:"我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述"})},warning:function(){this.$notice.warning({title:"Notice 通知提醒",desc:"我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述"})},error:function(){this.$notice.error({title:"Notice 通知提醒",desc:"我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述"})},time:function(){this.$notice.success({title:"Notice 通知提醒",desc:"我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述",duration:0})},openNotice:function(){this.$notice.info({title:"Notice 通知提醒"})}}},s=i,l=e("2877"),a=Object(l["a"])(s,o,c,!1,null,null,null);n["default"]=a.exports}}]);
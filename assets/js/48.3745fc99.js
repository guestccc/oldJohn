(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{253:function(t,a,s){"use strict";s.r(a);var n=s(28),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"计算机网络"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#计算机网络"}},[t._v("#")]),t._v(" 计算机网络")]),t._v(" "),s("h1",{attrs:{id:"同源策略，跨域规避方案"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#同源策略，跨域规避方案"}},[t._v("#")]),t._v(" 同源策略，跨域规避方案")]),t._v(" "),s("h2",{attrs:{id:"cookie"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cookie"}},[t._v("#")]),t._v(" cookie")]),t._v(" "),s("h3",{attrs:{id:"一、一级域名相同-拿-cookie"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、一级域名相同-拿-cookie"}},[t._v("#")]),t._v(" 一、一级域名相同 -- 拿 "),s("code",[t._v("cookie")])]),t._v(" "),s("p",[s("code",[t._v("A")]),t._v(" 网页 "),s("code",[t._v("https://xiaoai.dankal.cn")]),t._v(" ， "),s("code",[t._v("B")]),t._v(" 网页 "),s("code",[t._v("https://xiaoai-admin.dankal.cn")]),t._v(" ， "),s("code",[t._v("C")]),t._v(" 网页 "),s("code",[t._v("https://dankal.cn")]),t._v(" ， "),s("code",[t._v("AB")]),t._v(" 网页都是二级域名 ， "),s("code",[t._v("C")]),t._v(" 网页是顶级域名")]),t._v(" "),s("p",[t._v("3 个分别窗口访问 "),s("code",[t._v("A")]),t._v(" 、 "),s("code",[t._v("B")]),t._v(" 、 "),s("code",[t._v("C")]),t._v(" ， 或者 互相嵌入 "),s("code",[t._v("iframe")])]),t._v(" "),s("p",[t._v("通过设置 "),s("code",[t._v("cookie")]),t._v(" 规避跨域")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 在任意页面")]),t._v("\ndocument"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cookie "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"test=i\'m test cookie;domain=dankal.cn"')]),t._v("\n")])])]),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 在任意页面")]),t._v("\ndocument"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cookie\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// test=i'm test cookie")]),t._v("\n")])])]),s("h2",{attrs:{id:"iframe"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#iframe"}},[t._v("#")]),t._v(" iframe")]),t._v(" "),s("h3",{attrs:{id:"二、-一级域名相同-内嵌-iframe-拿-dom"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、-一级域名相同-内嵌-iframe-拿-dom"}},[t._v("#")]),t._v(" 二、 一级域名相同 -- 内嵌 "),s("code",[t._v("iframe")]),t._v(" -- 拿 "),s("code",[t._v("DOM")])]),t._v(" "),s("p",[s("code",[t._v("A")]),t._v(" 网页 "),s("code",[t._v("https://xiaoai.dankal.cn")]),t._v(" ， "),s("code",[t._v("iframe")]),t._v(" 页面 "),s("code",[t._v("https://xiaoai-admin.dankal.cn")]),t._v(" ，")]),t._v(" "),s("p",[t._v("设置 "),s("code",[t._v("A")]),t._v(" 页面和 "),s("code",[t._v("iframe")]),t._v(" 页面的 "),s("code",[t._v("domain")]),t._v(" 为顶级域名 "),s("code",[t._v("dankal.cn")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//  `A` 页面和 `iframe` 页面")]),t._v("\ndocument"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("domain "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'dankal.cn'")]),t._v("\n")])])]),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// `A` 页面")]),t._v("\ndocument"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'iframeId'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("contentWindow"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("document\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// # document")]),t._v("\n")])])]),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// iframe 页面")]),t._v("\nwindow"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("parent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("document\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// # document")]),t._v("\n")])])]),s("h3",{attrs:{id:"三、-给iframe设置hash"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三、-给iframe设置hash"}},[t._v("#")]),t._v(" 三、 给iframe设置hash")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// iframe")]),t._v("\nwindow"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onhashchange")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("location"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hash"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 页面")]),t._v("\ndocument"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'xxx'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("src "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#name=ccc'")]),t._v("\n")])])]),s("h3",{attrs:{id:"四、postmessage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#四、postmessage"}},[t._v("#")]),t._v(" 四、postMessage")]),t._v(" "),s("p",[t._v("窗口之间通讯，主窗口和iframe之间通讯")]),t._v(" "),s("h3",{attrs:{id:"五、localstorage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#五、localstorage"}},[t._v("#")]),t._v(" 五、LocalStorage")]),t._v(" "),s("p",[t._v("通过 postMessage 实现")]),t._v(" "),s("h2",{attrs:{id:"ajax"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ajax"}},[t._v("#")]),t._v(" Ajax")]),t._v(" "),s("h3",{attrs:{id:"jsonp"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jsonp"}},[t._v("#")]),t._v(" jsonp")]),t._v(" "),s("h3",{attrs:{id:"websocket"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#websocket"}},[t._v("#")]),t._v(" webSocket")]),t._v(" "),s("h3",{attrs:{id:"cors"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cors"}},[t._v("#")]),t._v(" cors")]),t._v(" "),s("h4",{attrs:{id:"非简单请求"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#非简单请求"}},[t._v("#")]),t._v(" 非简单请求")]),t._v(" "),s("p",[t._v("凡是不同时满足下面面两个条件，就属于非简单请求。")]),t._v(" "),s("div",{staticClass:"language-h extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("1) 请求方法是以下三种方法之一：\n\nHEAD\nGET\nPOST\n\n2）HTTP的头信息不超出以下几种字段：\n\nAccept\nAccept-Language\nContent-Language\nLast-Event-ID\nContent-Type：只限于三个值application/x-www-form-urlencoded、multipart/form-data、text/plain\n")])])]),s("p",[t._v("node 设置 cors")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("req"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("res"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("next")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  res"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("header")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Access-Control-Allow-Origin'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'*'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  res"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("header")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Access-Control-Allow-Methods'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'PUT,POST,DELETE,GET,OPTION'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  res"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("header")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Access-Control-Allow-Headers'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Origin,X-Requested-With,Content-Type,Access-Control-Allow-Credentials,Accept'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  res"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("header")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Access-Control-Allow-Credentials'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'true'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("req"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("method "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"OPTIONS"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    res"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("send")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("next")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h2",{attrs:{id:"相关链接"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#相关链接"}},[t._v("#")]),t._v(" 相关链接")])])}),[],!1,null,null,null);a.default=e.exports}}]);
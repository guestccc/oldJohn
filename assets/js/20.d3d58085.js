(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{225:function(v,_,e){"use strict";e.r(_);var t=e(28),s=Object(t.a)({},(function(){var v=this,_=v.$createElement,e=v._self._c||_;return e("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[e("h1",{attrs:{id:"jenkins"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#jenkins"}},[v._v("#")]),v._v(" jenkins")]),v._v(" "),e("p",[v._v("例如有三个服务器：")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("ym服务器")]),v._v(": 放源码,做仓库用")]),v._v(" "),e("li",[e("code",[v._v("bs服务器")]),v._v(": 真实项目部署所在的服务器")]),v._v(" "),e("li",[e("code",[v._v("jenkins服务器")]),v._v(": 跑jenkins的服务器")])]),v._v(" "),e("blockquote",[e("p",[v._v("当然，真实情况肯定不会这么浪费的，这只是举例子哈")])]),v._v(" "),e("h2",{attrs:{id:"流程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#流程"}},[v._v("#")]),v._v(" 流程")]),v._v(" "),e("ol",[e("li",[e("p",[v._v("本地编程 -> 提交代码到 "),e("code",[v._v("ym服务器")]),v._v("（仓库）")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("ym服务器")]),v._v(" -> "),e("code",[v._v("jenkins服务器")])])])]),v._v(" "),e("p",[e("code",[v._v("ym服务器")]),v._v("（仓库），例如 "),e("code",[v._v("github")]),v._v(" 可以配置一个 "),e("code",[v._v("webHooks")]),v._v(" ，去发一个 "),e("code",[v._v("请求")]),v._v(" 作为 "),e("code",[v._v("仓库变动通知")]),v._v(" ，通知 "),e("code",[v._v("jenkins服务器")])]),v._v(" "),e("ol",{attrs:{start:"3"}},[e("li",[e("p",[e("code",[v._v("jenkins服务器")]),v._v(" 拉取仓库最新代码 -> 打包构建，生成打包后的文件，例如: "),e("code",[v._v("dist")])])]),v._v(" "),e("li",[e("p",[v._v("-> 再把 "),e("code",[v._v("dist")]),v._v(" 打包成一个 "),e("code",[v._v("docker")]),v._v(" 镜像 （"),e("code",[v._v("dist image")]),v._v("）")])]),v._v(" "),e("li",[e("p",[v._v("-> 再把镜像 （"),e("code",[v._v("dist image")]),v._v("）推到远程")])]),v._v(" "),e("li",[e("p",[v._v("-> 再通过 "),e("code",[v._v("ssh")]),v._v(" 连接 "),e("code",[v._v("bs服务器")]),v._v(" 服务器，停止容器，删除旧镜像，再跑一个新的")])])])])}),[],!1,null,null,null);_.default=s.exports}}]);
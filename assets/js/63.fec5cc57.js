(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{565:function(t,s,e){"use strict";e.r(s);var a=e(4),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[t._v("在"),e("a",{attrs:{href:"/articles/Vue/VueDose/20-Vue.js%20%E4%B8%AD%E6%9C%89%E4%BD%9C%E7%94%A8%E5%9F%9F%E7%9A%84%20CSS%20%E7%9A%84%E9%87%8D%E8%A6%81%E6%80%A7"}},[t._v("Vue.js 中有作用域的 CSS 的重要性")]),t._v("中，你可以看到为什么当我们想要在组件中实现样式封装时，有作用域的 CSS 十分重要。如果你还没有读过那篇 Tip，我强烈建议你去读一下以便理解这篇 Tip。")]),t._v(" "),e("p",[t._v("但是，当我们尝试将"),e("a",{attrs:{href:"https://codesandbox.io/s/zwkj000z7p",target:"_blank",rel:"noopener noreferrer"}},[t._v("该示例"),e("OutboundLink")],1),t._v("的样式转换为有作用域的 CSS 时，样式丢失了。")]),t._v(" "),e("p",[t._v("是这样的：使用有作用域的 CSS 时，你可以修改你想要自定义的组件的根元素。")]),t._v(" "),e("p",[t._v("换言之，从 "),e("code",[t._v("BlueList.vue")]),t._v(" 和 "),e("code",[t._v("RedList.vue")]),t._v(" 的例子中，我们只能修改 "),e("code",[t._v("BaseList.vue")]),t._v(" 的 "),e("code",[t._v(".list")]),t._v(" 类，因为它是该组件的根元素的类。")]),t._v(" "),e("p",[t._v("但是内部元素呢？我们想给 "),e("code",[t._v(".list-item")]),t._v(" 类设置样式以更改列表项的颜色。")]),t._v(" "),e("p",[t._v("为此，我们有了 "),e("code",[t._v("/deep/")]),t._v(" 选择器，你可以使用它来访问组件的内部元素，如下所示：")]),t._v(" "),e("div",{staticClass:"language-vue line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-vue"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("style")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("scoped")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),e("span",{pre:!0,attrs:{class:"token style"}},[e("span",{pre:!0,attrs:{class:"token language-css"}},[t._v("\n"),e("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".list /deep/ .list-item")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" white"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("background")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" #42a5f5"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("style")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br")])]),e("p",[t._v("看看"),e("a",{attrs:{href:"https://codesandbox.io/s/40y6v5w3w0",target:"_blank",rel:"noopener noreferrer"}},[t._v("更新后的示例"),e("OutboundLink")],1),t._v("，看看它现在如何按预期工作的，并且每个都有不同的颜色。")]),t._v(" "),e("h3",{attrs:{id:"codesandbox"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#codesandbox"}},[t._v("#")]),t._v(" "),e("a",{attrs:{href:"https://codesandbox.io/s/40y6v5w3w0",target:"_blank",rel:"noopener noreferrer"}},[t._v("CodeSandbox"),e("OutboundLink")],1)]),t._v(" "),e("h3",{attrs:{id:"原文链接"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#原文链接"}},[t._v("#")]),t._v(" "),e("a",{attrs:{href:"https://vuedose.tips/tips/style-inner-elements-in-scoped-css-using-deep-selector-in-vue-js",target:"_blank",rel:"noopener noreferrer"}},[t._v("原文链接"),e("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=n.exports}}]);
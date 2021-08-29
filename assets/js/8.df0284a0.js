(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{492:function(s,t,a){s.exports=a.p+"assets/img/console_in_template_warn.1feb7d9f.png"},493:function(s,t,a){s.exports=a.p+"assets/img/debugger_in_vue_prototype.e230d66f.png"},494:function(s,t,a){s.exports=a.p+"assets/img/debugger_in_render_function.29517428.png"},495:function(s,t,a){s.exports=a.p+"assets/img/inspect_in_render_function.0a925899.png"},561:function(s,t,a){"use strict";a.r(t);var e=a(4),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("p",[e("a",{attrs:{href:"https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd",target:"_blank",rel:"noopener noreferrer"}},[s._v("Vue.js DevTools"),e("OutboundLink")],1),s._v(" 非常棒，它可以检查你的应用程序。但有时，你可能想要调试模板中发生的事情。如你所知，你可以把 JavaScript 表达式放在那里，也许你试过把 "),e("code",[s._v("console.log")]),s._v(" 放在模板里，然后遇到这种情况：")]),s._v(" "),e("div",{staticClass:"language-html line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("h1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("{{ console.log(message) }}"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("h1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[e("img",{attrs:{src:a(492),alt:"console_in_template_warn"}})]),s._v(" "),e("p",[s._v("这是由于你放置在模板中的所有内容 Vue 都试图在实例中找到它，因此一个快速的解决方案是写一个组件的 "),e("code",[s._v("log")]),s._v(" 方法以便在模板中让 Vue 找到它：")]),s._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[s._v("methods"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("message")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    console"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("message"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("p",[s._v("并使用")]),s._v(" "),e("div",{staticClass:"language-html line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("h1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("{{ log(message) }}"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("h1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("但是这是你偶尔会在不同的组件中想要的东西，并且一直重复此代码有些无聊，所以我们可以做的是"),e("a",{attrs:{href:"https://vuejs.org/v2/cookbook/adding-instance-properties.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("添加一个实例属性"),e("OutboundLink")],1),s._v("，在 "),e("code",[s._v("main.js")]),s._v(" 中将我们自定义的 "),e("code",[s._v("log")]),s._v(" 方法放置在 "),e("code",[s._v("Vue.prototype")]),s._v(" 上：")]),s._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// main.js")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Vue")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("prototype"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("$log "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" console"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("log"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("现在我们可以在每个组件的模板中使用 "),e("code",[s._v("$log")]),s._v("，并且如果我们不想干扰渲染，只需要用 OR 运算符来使用 JS 的惰性求值：")]),s._v(" "),e("div",{staticClass:"language-html line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("h1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("{{ $log(message) || message }}"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("h1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("不可思议吧？😄，但是，如果我们要放置一个断点以便在模板周围静默地调试一些变量，该怎么办？")]),s._v(" "),e("p",[s._v("如果我们在模板中写入 "),e("code",[s._v("debugger")]),s._v("：")]),s._v(" "),e("div",{staticClass:"language-html line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("h1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("{{ debugger }}"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("h1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("它甚至没有编译模板！😱并且如果采用与以前相同的策略，我们将断点在原型函数中而不是我们想要调试的模板中：")]),s._v(" "),e("p",[e("img",{attrs:{src:a(493),alt:"debugger_in_vue_prototype"}})]),s._v(" "),e("p",[s._v("因此，为了在模板的中间加一个断点，我们可以使用一些技巧将 "),e("code",[s._v("debugger")]),s._v(" 包装在 "),e("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Glossary/IIFE",target:"_blank",rel:"noopener noreferrer"}},[s._v("IIFE"),e("OutboundLink")],1),s._v("（立即调用函数表达式）中，就像：")]),s._v(" "),e("div",{staticClass:"language-html line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("h1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("{{ (function(){debugger;})() || message }}"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("h1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("我们会发现自己处于被编译的 render 函数的中间：")]),s._v(" "),e("p",[e("img",{attrs:{src:a(494),alt:"debugger_in_render_function"}})]),s._v(" "),e("p",[s._v("在这里的 “_vm” 变量")]),s._v(" "),e("p",[e("a",{attrs:{href:"https://vuejs.org/v2/guide/instance.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("表示ViewModel"),e("OutboundLink")],1)]),s._v(" "),e("p",[s._v("它是我们组件的实例:)。检查已编译的模板也很有趣，但是由于某些原因，这些变量在 chrome devtools 的函数作用域内获取不到，我们只能放到 "),e("code",[s._v("debugger")]),s._v(" 后面：")]),s._v(" "),e("div",{staticClass:"language-html line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("h1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("{{ (function(){debugger;message})() || message }}"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("h1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("现在你可以检查周围的一切了！")]),s._v(" "),e("p",[e("img",{attrs:{src:a(495),alt:"inspect_in_render_function"}})]),s._v(" "),e("p",[s._v("就这样！我希望借助这些技巧，你将发现自己对调试 Vue 模板更有信心，并乐于检查编译后的渲染函数的内部。")]),s._v(" "),e("h3",{attrs:{id:"原文链接"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#原文链接"}},[s._v("#")]),s._v(" "),e("a",{attrs:{href:"https://vuedose.tips/tips/debugging-templates-in-vue-js",target:"_blank",rel:"noopener noreferrer"}},[s._v("原文链接"),e("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=n.exports}}]);
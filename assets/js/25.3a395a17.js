(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{523:function(t,v,_){"use strict";_.r(v);var d=_(4),e=Object(d.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("div",{staticClass:"custom-block tip"},[_("p",[t._v("如果你希望将某些 CSS 属性重置为其默认值，想要它像你想要的那样“渲染”，但是指定不正确的值可能会注入您意想不到的行为。\n本文列举一些将某些 CSS 属性值重置为默认值的安全的值。")])]),t._v(" "),_("h2",{attrs:{id:"初始值"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#初始值"}},[t._v("#")]),t._v(" 初始值")]),t._v(" "),_("p",[t._v("CSS 规范定义了一个值，当一个属性没有在任何样式表（用户的）中声明时，则该值将为属性的"),_("em",[t._v("初始值")]),t._v("。")]),t._v(" "),_("h2",{attrs:{id:"将-css-属性重置为初始值"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#将-css-属性重置为初始值"}},[t._v("#")]),t._v(" 将 CSS 属性重置为初始值")]),t._v(" "),_("p",[t._v("CSS3 有关键字 "),_("code",[t._v("initial")]),t._v("，该关键字会将 CSS3 属性设置为规范中定义的初始值，但只有 Firefox(带-moz-前缀)，和 Webkit 的 Safari 和 Chrome 支持。")]),t._v(" "),_("p",[t._v("所以，直到所有浏览器支持此关键字时，或者我们不必支持无法识别此关键字的浏览器时，可以通过以下几种方法将某些 CSS 属性重置为其初始值：")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("属性")]),t._v(" "),_("th",[t._v("值")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[_("code",[t._v("background")])]),t._v(" "),_("td",[_("code",[t._v("transparent")]),t._v(" 或 "),_("code",[t._v("none")]),t._v(" 或 "),_("code",[t._v("0 0")])])]),t._v(" "),_("tr",[_("td",[_("code",[t._v("border")])]),t._v(" "),_("td",[_("code",[t._v("none")]),t._v(" 或 "),_("code",[t._v("0")])])]),t._v(" "),_("tr",[_("td",[_("code",[t._v("border-image")])]),t._v(" "),_("td",[_("code",[t._v("none")])])]),t._v(" "),_("tr",[_("td",[_("code",[t._v("border-radius")])]),t._v(" "),_("td",[_("code",[t._v("0")])])]),t._v(" "),_("tr",[_("td",[_("code",[t._v("box-shadow")])]),t._v(" "),_("td",[_("code",[t._v("none")])])]),t._v(" "),_("tr",[_("td",[_("code",[t._v("clear")])]),t._v(" "),_("td",[_("code",[t._v("none")])])]),t._v(" "),_("tr",[_("td",[_("code",[t._v("color")])]),t._v(" "),_("td",[t._v("没有值，所以最好的办法是用 "),_("code",[t._v("inherit")]),t._v(" 来使用从父元素传递过来的 "),_("code",[t._v("color")])])]),t._v(" "),_("tr",[_("td",[_("code",[t._v("content")])]),t._v(" "),_("td",[_("code",[t._v("normal")])])]),t._v(" "),_("tr",[_("td",[_("code",[t._v("display")])]),t._v(" "),_("td",[_("code",[t._v("inline")])])]),t._v(" "),_("tr",[_("td",[_("code",[t._v("float")])]),t._v(" "),_("td",[_("code",[t._v("none")])])]),t._v(" "),_("tr",[_("td",[_("code",[t._v("font")])]),t._v(" "),_("td",[_("code",[t._v("normal")])])]),t._v(" "),_("tr",[_("td",[_("code",[t._v("height")])]),t._v(" "),_("td",[_("code",[t._v("auto")])])]),t._v(" "),_("tr",[_("td",[_("code",[t._v("letter-spacing")])]),t._v(" "),_("td",[_("code",[t._v("normal")])])]),t._v(" "),_("tr",[_("td",[_("code",[t._v("line-height")])]),t._v(" "),_("td",[_("code",[t._v("normal")])])]),t._v(" "),_("tr",[_("td",[_("code",[t._v("max-width")])]),t._v(" "),_("td",[_("code",[t._v("none")])])]),t._v(" "),_("tr",[_("td",[_("code",[t._v("max-height")])]),t._v(" "),_("td",[_("code",[t._v("height")])])]),t._v(" "),_("tr",[_("td",[_("code",[t._v("min-width")])]),t._v(" "),_("td",[_("code",[t._v("0")])])]),t._v(" "),_("tr",[_("td",[_("code",[t._v("min-height")])]),t._v(" "),_("td",[_("code",[t._v("0")])])]),t._v(" "),_("tr",[_("td",[_("code",[t._v("opacity")])]),t._v(" "),_("td",[_("code",[t._v("1")])])]),t._v(" "),_("tr",[_("td",[_("code",[t._v("overflow")])]),t._v(" "),_("td",[_("code",[t._v("visible")])])]),t._v(" "),_("tr",[_("td",[_("code",[t._v("page-break-inside")])]),t._v(" "),_("td",[_("code",[t._v("auto")])])]),t._v(" "),_("tr",[_("td",[_("code",[t._v("position")])]),t._v(" "),_("td",[_("code",[t._v("static")]),t._v("(不是 "),_("code",[t._v("relative")]),t._v(")")])]),t._v(" "),_("tr",[_("td",[_("code",[t._v("text-shadow")])]),t._v(" "),_("td",[_("code",[t._v("none")])])]),t._v(" "),_("tr",[_("td",[_("code",[t._v("text-transform")])]),t._v(" "),_("td",[_("code",[t._v("none")])])]),t._v(" "),_("tr",[_("td",[_("code",[t._v("transform")])]),t._v(" "),_("td",[_("code",[t._v("none")])])]),t._v(" "),_("tr",[_("td",[_("code",[t._v("transition")])]),t._v(" "),_("td",[_("code",[t._v("none")])])]),t._v(" "),_("tr",[_("td",[_("code",[t._v("vertical-align")])]),t._v(" "),_("td",[_("code",[t._v("baseline")])])]),t._v(" "),_("tr",[_("td",[_("code",[t._v("visibility")])]),t._v(" "),_("td",[_("code",[t._v("visible")])])]),t._v(" "),_("tr",[_("td",[_("code",[t._v("white-space")])]),t._v(" "),_("td",[_("code",[t._v("normal")])])]),t._v(" "),_("tr",[_("td",[_("code",[t._v("width")])]),t._v(" "),_("td",[_("code",[t._v("auto")])])]),t._v(" "),_("tr",[_("td",[_("code",[t._v("word-spacing")])]),t._v(" "),_("td",[_("code",[t._v("normal")])])]),t._v(" "),_("tr",[_("td",[_("code",[t._v("z-index")])]),t._v(" "),_("td",[_("code",[t._v("auto")]),t._v("(不是 "),_("code",[t._v("none")]),t._v(" 或 "),_("code",[t._v("0")]),t._v(")")])])])]),t._v(" "),_("h2",{attrs:{id:"参考"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),_("ul",[_("li",[_("a",{attrs:{href:"http://nimbupani.com/safe-css-defaults.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Safe CSS Defaults"),_("OutboundLink")],1)])])])}),[],!1,null,null,null);v.default=e.exports}}]);
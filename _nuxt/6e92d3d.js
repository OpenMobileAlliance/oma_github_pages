(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{400:function(t,e,n){"use strict";n.r(e);n(10),n(25),n(258);var c={props:{news:{type:Array,required:!0,default:function(){return[]}},config:{type:Object,required:!1,default:function(){return{}}}},methods:{selectImg:function(image){return image||"/images/logo1.jpg"},itemColor:function(i){return 0===Number(i+1)%2?"second":Number(i+1)%3==0?"third":"first"}}},l=n(52),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"row-news-list"},[e("b-row",[e("b-col",{staticClass:"text-center text-primary col-title"},[e("font-awesome-icon",{staticClass:"fa-2x",attrs:{icon:t.config.image.split(" ")}}),t._v(" "),e("p",{staticClass:"h5 mb-0"},[t._v(t._s(t.config.title))]),t._v(" "),e("p",{staticClass:"col-title-subtitle font-italic"},[t._v(t._s(t.config.subtitle))])],1)],1),t._v(" "),t._l(t.news,(function(n,c){return e("b-row",{key:c,staticClass:"row-news-list-item"},[e("div",{staticClass:"card mb-3 p-0",class:t.itemColor(c)},[e("div",{staticClass:"card-body text-center p-2"},[e("h5",{staticClass:"card-title"},[e("NuxtLink",{staticClass:"stretched-link",attrs:{to:{name:"news-slug",params:{slug:n.slug}}}},[t._v("\n              "+t._s(n.title)+"\n            ")])],1),t._v(" "),e("h6",{staticClass:"card-sub-title"},[e("span",{staticClass:"font-italic"},[t._v(t._s(n.subtitle))])])]),t._v(" "),e("div",{staticClass:"card-footer text-center p-2"},[e("b-container",{staticClass:"p-0"},[e("b-row",[e("b-col",[t._v("\n                "+t._s(n.date)+"\n              ")]),t._v(" "),e("b-col",[t._v("\n                "+t._s(n.by)+"\n              ")])],1)],1)],1)])])}))],2)}),[],!1,null,null,null);e.default=component.exports}}]);
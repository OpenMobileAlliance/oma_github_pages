(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{429:function(t,l,n){"use strict";n.r(l);var e={props:{blogs:{type:Array,required:!0,default:function(){return[]}}}},r=n(52),component=Object(r.a)(e,(function(){var t=this,l=t._self._c;return l("div",{staticClass:"row-blog-list-items"},t._l(t.blogs,(function(n){return l("b-row",{key:n.slug},[l("b-col",[l("b-card",{staticClass:"mb-2",attrs:{tag:"article","no-body":""}},[l("b-card-body",[l("b-card-title",[t._v(t._s(n.title))]),t._v(" "),l("b-card-sub-title",{staticClass:"mb-2",attrs:{"sub-title-text-variant":""}},[l("span",{staticClass:"font-italic"},[t._v(t._s(n.subtitle))])]),t._v(" "),l("b-card-text",[l("nuxt-content",{attrs:{document:{body:n.excerpt}}})],1)],1),t._v(" "),l("b-card-footer",[l("b-container",[l("b-row",[l("b-col",[l("span",{staticClass:"label"},[t._v("By:")]),t._v("\n                "+t._s(n.by)+"\n              ")]),t._v(" "),l("b-col",[l("span",{staticClass:"label"},[t._v("Author:")]),t._v("\n                "+t._s(n.author)+"\n              ")]),t._v(" "),l("b-col",[l("span",{staticClass:"label"},[t._v("Date:")]),t._v("\n                "+t._s(n.date)+"\n              ")]),t._v(" "),l("b-col",{staticClass:"text-right"},[l("nuxt-link",{attrs:{to:{name:"blogs-slug",params:{slug:n.slug}}}},[t._v("\n                  Read mode ...\n                ")])],1)],1)],1)],1)],1)],1)],1)})),1)}),[],!1,null,null,null);l.default=component.exports}}]);
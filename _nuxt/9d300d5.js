(window.webpackJsonp=window.webpackJsonp||[]).push([[27,13],{401:function(t,e,n){"use strict";n.r(e);var r={props:{blogs:{type:Array,required:!0,default:function(){return[]}}}},l=n(52),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"row-blog-list-items"},t._l(t.blogs,(function(n){return e("b-row",{key:n.slug},[e("b-col",[e("b-card",{staticClass:"mb-2",attrs:{tag:"article","no-body":""}},[e("b-card-body",[e("b-card-title",[t._v(t._s(n.title))]),t._v(" "),e("b-card-sub-title",{staticClass:"mb-2",attrs:{"sub-title-text-variant":""}},[e("span",{staticClass:"font-italic"},[t._v(t._s(n.subtitle))])]),t._v(" "),e("b-card-text",[e("nuxt-content",{attrs:{document:{body:n.excerpt}}})],1)],1),t._v(" "),e("b-card-footer",[e("b-container",[e("b-row",[e("b-col",[e("span",{staticClass:"label"},[t._v("By:")]),t._v("\n                "+t._s(n.by)+"\n              ")]),t._v(" "),e("b-col",[e("span",{staticClass:"label"},[t._v("Author:")]),t._v("\n                "+t._s(n.author)+"\n              ")]),t._v(" "),e("b-col",[e("span",{staticClass:"label"},[t._v("Date:")]),t._v("\n                "+t._s(n.date)+"\n              ")]),t._v(" "),e("b-col",{staticClass:"text-right"},[e("nuxt-link",{attrs:{to:{name:"blogs-slug",params:{slug:n.slug}}}},[t._v("\n                  Read mode ...\n                ")])],1)],1)],1)],1)],1)],1)],1)})),1)}),[],!1,null,null,null);e.default=component.exports},419:function(t,e,n){"use strict";n.r(e);var r=n(24),l=n(36),o=n(27),c=(n(65),n(1),n(384),n(47),n(385),n(386),n(387),n(388),n(389),n(390),n(391),n(392),n(393),n(394),n(395),n(396),n(397),n(398),n(399),n(400),n(49),n(3),n(10),n(25),n(37),n(2),n(73),n(114),{data:function(){return{blogs:[],tags:[]}},fetch:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$route.query.tag,e.next=3,t.$content("blogs").only(["image","title","subtitle","url","by","date","tags","slug","author","excerpt"]).sortBy("createdAt","desc").fetch();case 3:o=e.sent,c=new Set,o.length>0&&o.forEach((function(t){t.tags&&("object"===Object(l.a)(t.tags)?t.tags:t.tags.split(",")).forEach((function(t){c.add(t.trim())}))})),n&&(o=o.filter((function(t){return t.tags&&t.tags.includes(n)}))),t.blogs=o,t.tags=Object(r.a)(c);case 9:case"end":return e.stop()}}),e)})))()},watch:{"$route.query":"$fetch"}}),d=n(52),component=Object(d.a)(c,(function(){var t=this,e=t._self._c;return e("Main",[e("h1",[t._v("Blogs")]),t._v(" "),e("RowTags",{attrs:{tags:Object(r.a)(t.tags),resource:"blogs"}}),t._v(" "),e("RowBlogListItems",{attrs:{blogs:t.blogs}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{RowTags:n(383).default,RowBlogListItems:n(401).default,Main:n(364).default})}}]);
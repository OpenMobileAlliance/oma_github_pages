(window.webpackJsonp=window.webpackJsonp||[]).push([[30,19],{365:function(t,e,n){"use strict";n.r(e);var r={props:{news:{type:Array,required:!0,default:function(){return[]}}},methods:{selectImg:function(image){return image||"/images/logo1.jpg"}}},c=n(52),component=Object(c.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"row-news-cards"},[e("b-row",{staticClass:"row-eq-height"},t._l(t.news,(function(n){return e("b-col",{key:n.slug,attrs:{md:"6",lg:"4"}},[e("b-card",{staticClass:"mb-2 h-100",attrs:{tag:"article","no-body":""}},[e("b-card-img",{staticClass:"news-card-image",attrs:{src:t.selectImg(n.image),alt:n.title}}),t._v(" "),e("b-card-body",[e("b-card-title",[e("NuxtLink",{staticClass:"stretched-link",attrs:{to:{name:"news-slug",params:{slug:n.slug}}}},[t._v("\n                "+t._s(n.title)+"\n              ")])],1),t._v(" "),e("b-card-sub-title",[e("span",{staticClass:"font-italic"},[t._v(t._s(n.subtitle))])]),t._v(" "),e("b-card-text",{staticClass:"pt-3"},[e("nuxt-content",{attrs:{document:{body:n.excerpt}}})],1)],1),t._v(" "),e("b-card-footer",[e("b-container",[e("b-row",[e("b-col",[t._v("\n                  "+t._s(n.date)+"\n                ")]),t._v(" "),e("b-col",[t._v("\n                  "+t._s(n.by)+"\n                ")])],1)],1)],1)],1)],1)})),1)],1)}),[],!1,null,null,null);e.default=component.exports},417:function(t,e,n){"use strict";n.r(e);var r=n(24),c=n(36),o=n(26),l=(n(64),n(1),n(381),n(47),n(382),n(383),n(384),n(385),n(386),n(387),n(388),n(389),n(390),n(391),n(392),n(393),n(394),n(395),n(396),n(397),n(49),n(3),n(10),n(25),n(37),n(2),n(72),n(112),{data:function(){return{news:[],tags:[]}},fetch:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$route.query.tag,e.next=3,t.$content("news").only(["image","title","subtitle","url","by","date","tags","slug","excerpt"]).sortBy("createdAt","desc").fetch();case 3:o=e.sent,l=new Set,o.length>0&&o.forEach((function(t){t.tags&&("object"===Object(c.a)(t.tags)?t.tags:t.tags.split(",")).forEach((function(t){l.add(t.trim())}))})),n&&(o=o.filter((function(t){return t.tags&&t.tags.includes(n)}))),t.news=o,t.tags=Object(r.a)(l);case 9:case"end":return e.stop()}}),e)})))()},watch:{"$route.query":"$fetch"}}),d=n(52),component=Object(d.a)(l,(function(){var t=this,e=t._self._c;return e("Main",[e("h1",[t._v("News")]),t._v(" "),e("RowTags",{attrs:{tags:Object(r.a)(t.tags),resource:"news"}}),t._v(" "),e("RowNewsCards",{attrs:{news:t.news}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{RowTags:n(380).default,RowNewsCards:n(365).default,Main:n(361).default})}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[25,11,12,17,19],{361:function(t,e,n){"use strict";n.r(e);var r={},o=n(52),component=Object(o.a)(r,(function(){return(0,this._self._c)("b-container",[this._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},363:function(t,e,n){"use strict";n.r(e);var r={props:{document:{type:Object,required:!0,default:function(){return{}}}}},o=n(52),component=Object(o.a)(r,(function(){var t=this._self._c;return t("div",{staticClass:"row-dowument"},[t("b-row",{staticClass:"py-3"},[t("b-col",[t("nuxt-content",{attrs:{document:this.document}})],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports},365:function(t,e,n){"use strict";n.r(e);var r={props:{news:{type:Array,required:!0,default:function(){return[]}}},methods:{selectImg:function(image){return image||"/images/logo1.jpg"}}},o=n(52),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"row-news-cards"},[e("b-row",{staticClass:"row-eq-height"},t._l(t.news,(function(n){return e("b-col",{key:n.slug,attrs:{md:"6",lg:"4"}},[e("b-card",{staticClass:"mb-2 h-100",attrs:{tag:"article","no-body":""}},[e("b-card-img",{staticClass:"news-card-image",attrs:{src:t.selectImg(n.image),alt:n.title}}),t._v(" "),e("b-card-body",[e("b-card-title",[e("NuxtLink",{staticClass:"stretched-link",attrs:{to:{name:"news-slug",params:{slug:n.slug}}}},[t._v("\n              "+t._s(n.title)+"\n            ")])],1),t._v(" "),e("b-card-sub-title",[e("span",{staticClass:"font-italic"},[t._v(t._s(n.subtitle))])]),t._v(" "),e("b-card-text",{staticClass:"pt-3"},[e("nuxt-content",{attrs:{document:{body:n.excerpt}}})],1)],1),t._v(" "),e("b-card-footer",[e("b-container",[e("b-row",[e("b-col",[t._v("\n                "+t._s(n.date)+"\n              ")]),t._v(" "),e("b-col",[t._v("\n                "+t._s(n.by)+"\n              ")])],1)],1)],1)],1)],1)})),1)],1)}),[],!1,null,null,null);e.default=component.exports},379:function(t,e,n){"use strict";n.r(e);var r={props:{image:{type:String,required:!0},title:{type:String,required:!0},status:{type:String,required:!1,default:function(){return""}}}},o=n(52),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"row-image"},[e("b-row",{class:t.status},[e("b-col",[e("b-img",{attrs:{src:t.image,alt:t.title}})],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports},421:function(t,e,n){"use strict";n.r(e);n(22),n(13);var r=n(26),o=(n(64),{data:function(){return{document:{modules:[],news:[]}}},fetch:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$content(t.$route.params.slug).fetch();case 2:return n=e.sent,t.document=n,e.next=6,t.$content("news").where({homepage:{$gt:0}}).only(["image","title","subtitle","homepage","by","date","tags","slug","excerpt"]).sortBy("homepage","asc").fetch();case 6:r=e.sent,t.news=r;case 8:case"end":return e.stop()}}),e)})))()}}),c=n(52),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e("Main",[t._l(t.document.modules,(function(n,r){return["RowText"===n.name?e("RowText",{key:"".concat(n.name,"_").concat(r),attrs:{text:n.text,status:n.status}}):"RowTextImage"===n.name?e("RowTextImage",{key:"".concat(n.name,"_").concat(r),attrs:{cols:n.cols,text:n.text,status:n.status,image:n.image}}):"RowImageText"===n.name?e("RowImageText",{key:"".concat(n.name,"_").concat(r),attrs:{cols:n.cols,text:n.text,status:n.status,image:n.image}}):"RowImage"===n.name?e("RowImage",{key:"".concat(n.name,"_").concat(r),class:n.status,attrs:{title:n.title,image:n.image}}):"RowDynamicTable"===n.name?e("RowDynamicTable",{key:"".concat(n.name,"_").concat(r),attrs:{config:n}}):"RowButtonGrid"===n.name?e("RowButtonGrid",{key:"".concat(n.name,"_").concat(r),attrs:{config:n}}):"RowSeparator"===n.name?e("RowSeparator",{key:"".concat(n.name,"_").concat(r),attrs:{size:n.size}}):"RowNewsCards"===n.name?e("RowNewsCards",{key:"".concat(n.name,"_").concat(r),attrs:{news:t.news}}):t._e(),t._v(" "),"RowMultiColumns"===n.name?e("RowMultiColumns",{key:"".concat(n.name,"_").concat(r),attrs:{config:n,values:[]}}):t._e()]})),t._v(" "),e("Default",{attrs:{document:t.document}})],2)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{RowText:n(367).default,RowTextImage:n(368).default,RowImageText:n(369).default,RowImage:n(379).default,RowDynamicTable:n(370).default,RowButtonGrid:n(377).default,RowSeparator:n(378).default,RowNewsCards:n(365).default,RowMultiColumns:n(399).default,Default:n(363).default,Main:n(361).default})}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[1,5,6,7,8,9,10,14,16,18,20,21,23,24],{341:function(t,e,r){"use strict";r.r(e);var l=r(336),n=r.n(l),o={props:{text:{type:String,required:!0},status:{type:String,required:!1,default:function(){return null}}},computed:{formatedText:function(){return this.text&&this.text.length>0?n()(this.text):""}}},c=r(51),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row-text"},[r("b-row",{class:t.status},[r("b-col",{staticClass:"text-col"},[r("div",{staticClass:"pt-3",domProps:{innerHTML:t._s(t.formatedText)}})])],1)],1)}),[],!1,null,null,null);e.default=component.exports},342:function(t,e,r){"use strict";r.r(e);r(250);var l=r(336),n=r.n(l),o={props:{cols:{type:Number,default:6},text:{type:String,required:!1,default:function(){return null}},image:{type:String,required:null,default:function(){return""}},title:{type:String,required:!1,default:function(){return""}},status:{type:String,required:!1,default:function(){return""}}},computed:{formatedText:function(){return this.text&&this.text.length>0?n()(this.text):""}}},c=r(51),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row-text-image"},[r("b-row",{class:t.status},[r("b-col",{staticClass:"text-col",attrs:{cols:t.cols}},[r("div",{staticClass:"pt-3",domProps:{innerHTML:t._s(t.formatedText)}})]),t._v(" "),r("b-col",{staticClass:"image-col"},[r("b-img",{attrs:{src:t.image,alt:t.title}})],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports},343:function(t,e,r){"use strict";r.r(e);r(250);var l=r(336),n=r.n(l),o={props:{cols:{type:Number,default:6},text:{type:String,required:!1,default:function(){return""}},status:{type:String,required:!1,default:function(){return""}},image:{type:String,required:!1,default:function(){return""}},title:{type:String,required:!1,default:function(){return""}}},computed:{formatedText:function(){return this.text&&this.text.length>0?n()(this.text):""}}},c=r(51),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row-image-text"},[r("b-row",{class:t.status},[r("b-col",{staticClass:"image-col",attrs:{cols:t.cols}},[r("b-img",{attrs:{src:t.image,alt:t.title}})],1),t._v(" "),r("b-col",{staticClass:"text-col"},[r("div",{staticClass:"pt-3",domProps:{innerHTML:t._s(t.formatedText)}})])],1)],1)}),[],!1,null,null,null);e.default=component.exports},344:function(t,e,r){"use strict";r.r(e);r(2),r(1),r(5),r(3),r(85),r(104);var l={props:{config:{type:Object,required:!0,default:function(){return{}}}},data:function(){return{filter:"",totalRows:this.config.items.length,currentPage:1}},watch:{config:function(t,e){this.totalRows=t.items.length}},methods:{filterItems:function(t,filter){var e=!1;return(this.config.filter||Object.keys(t)).forEach((function(r){t[r].title&&t[r].title.toLowerCase().includes(filter.toLowerCase())&&(e=!0)})),e},onFiltered:function(t){this.totalRows=t.length,this.currentPage=1},itemType:function(t){var e="text";return t.value.icon&&t.value.icon.length>0?e=t.value.url&&t.value.url.length>0?"link-icon":"icon":t.value.image&&t.value.image.length>0?e=t.value.url&&t.value.url.length>0?"link-image":"image":t.value.url&&t.value.url.length>0&&(e="link"),e}}},n=r(51),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row-dynamic-table"},[r("b-row",{staticClass:"pt-5 pb-5"},[r("b-col",[r("b-row",[r("b-col",[r("b-form-group",{directives:[{name:"show",rawName:"v-show",value:t.config.filter,expression:"config.filter"}],attrs:{label:"Filter","label-for":"filter-input","label-cols-sm":"1","label-align-sm":"left","label-size":"sm"}},[r("b-input-group",{attrs:{size:"sm"}},[r("b-form-input",{attrs:{id:"filter-input",type:"search",placeholder:"Type to Search"},model:{value:t.filter,callback:function(e){t.filter=e},expression:"filter"}})],1)],1)],1),t._v(" "),t.config.pagination?r("b-col",{attrs:{cols:"3"}},[r("b-pagination",{staticClass:"my-0 mb-3",attrs:{"total-rows":t.totalRows,"per-page":t.config.pagination,align:"fill",size:"sm"},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1):t._e()],1),t._v(" "),r("b-row",[r("b-col",[r("b-table",{attrs:{striped:"",hover:"",items:t.config.items,fields:t.config.columns,filter:t.filter,"sort-icon-left":"","sort-desc.sync":"asc","sort-by":"published","filter-function":t.filterItems,"current-page":t.currentPage,"per-page":t.config.pagination},on:{filtered:t.onFiltered},scopedSlots:t._u([{key:"cell()",fn:function(e){return["icon"===t.itemType(e)?r("div",[r("CellIcon",{attrs:{icon:e.value.icon}})],1):"link"===t.itemType(e)?r("div",[r("CellLink",{attrs:{text:e.value.title,url:e.value.url,target:e.value.target}})],1):"link-icon"===t.itemType(e)?r("div",[r("CellLinkIcon",{attrs:{icon:e.value.icon,url:e.value.url,target:e.value.target}})],1):"text"===t.itemType(e)?r("div",[r("CellText",{attrs:{text:e.value.title}})],1):"image"===t.itemType(e)?r("div",[r("CellImage",{attrs:{image:e.value.image,title:e.value.title}})],1):"link-image"===t.itemType(e)?r("div",[r("CellLinkImage",{attrs:{url:e.value.url,image:e.value.image,alt:e.value.title}})],1):t._e()]}}])})],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CellIcon:r(345).default,CellLink:r(346).default,CellLinkIcon:r(347).default,CellText:r(348).default,CellImage:r(349).default,CellLinkImage:r(350).default})},345:function(t,e,r){"use strict";r.r(e);var l={props:{icon:{type:String,required:!0}}},n=r(51),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("font-awesome-icon",{attrs:{icon:t.icon.split(" ")}})}),[],!1,null,null,null);e.default=component.exports},346:function(t,e,r){"use strict";r.r(e);var l={props:{url:{type:String,required:!0},target:{type:String,required:!1,default:""},text:{type:String,required:!0}}},n=r(51),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.url&&t.url.match("(ftp|https?):")?r("b-link",{attrs:{target:t.target,href:t.url}},[t._v("\n  "+t._s(t.text)+"\n")]):r("b-link",{attrs:{to:t.url}},[t._v("\n  "+t._s(t.text)+"\n")])}),[],!1,null,null,null);e.default=component.exports},347:function(t,e,r){"use strict";r.r(e);var l={props:{url:{type:String,required:!1,default:"#"},icon:{type:String,required:!0},target:{type:String,required:!1,default:""}}},n=r(51),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.url&&t.url.match("(ftp|https?):")?r("b-link",{class:[{disabled:!t.url}],attrs:{href:t.url,target:t.target}},[r("font-awesome-icon",{attrs:{icon:t.icon.split(" ")}})],1):r("b-link",{class:[{disabled:!t.url}],attrs:{to:t.url?t.url:"#"}},[r("font-awesome-icon",{attrs:{icon:t.icon.split(" ")}})],1)}),[],!1,null,null,null);e.default=component.exports},348:function(t,e,r){"use strict";r.r(e);var l=r(336),n=r.n(l),o={props:{text:{type:String,required:!1,default:function(){return null}}},computed:{formatedText:function(){return this.text&&this.text.length>0?n()(this.text):""}}},c=r(51),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{domProps:{innerHTML:t._s(t.formatedText)}})}),[],!1,null,null,null);e.default=component.exports},349:function(t,e,r){"use strict";r.r(e);var l={props:{image:{type:String,required:!0},title:{type:String,required:!1,default:function(){return""}}}},n=r(51),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("b-img",{attrs:{alt:t.title,src:t.image}})}),[],!1,null,null,null);e.default=component.exports},350:function(t,e,r){"use strict";r.r(e);var l={props:{url:{type:String,required:!1,default:"#"},target:{type:String,required:!1,default:""},src:{type:String,required:!0},alt:{type:String,required:!0}}},n=r(51),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.url&&t.url.match("(ftp|https?):")?r("b-link",{class:[{disabled:!t.url}],attrs:{href:t.url,target:t.target}},[r("b-img",{attrs:{alt:t.alt,src:t.src}})],1):r("b-link",{class:[{disabled:!t.url}],attrs:{to:t.url}},[r("b-img",{attrs:{alt:t.alt,src:t.src}})],1)}),[],!1,null,null,null);e.default=component.exports},351:function(t,e,r){"use strict";r.r(e);var l={props:{config:{type:Object,required:!0,default:function(){return{}}}}},n=r(51),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row-button-grid",attrs:{id:t.config.id}},[r("b-row",t._l(t.config.cols,(function(col,e){return r("b-col",{key:col.title+"_"+e},[r("div",{staticClass:"text-center text-primary col-title"},[r("font-awesome-icon",{staticClass:"fa-2x",attrs:{icon:col.image.split(" ")}}),t._v(" "),r("p",{staticClass:"h5 mb-0"},[t._v(t._s(col.title))]),t._v(" "),r("p",{staticClass:"col-title-subtitle font-italic"},[t._v(t._s(col.subtitle))])],1),t._v(" "),t._l(col.items,(function(button,e){return r("a",{key:button.status+"_"+e,staticClass:"btn btn-block button",class:button.status,attrs:{role:"button",href:button.url,target:button.target}},[r("p",{staticClass:"button-title"},[t._v(t._s(button.title))]),t._v(" "),r("p",{staticClass:"button-subtitle"},[t._v(t._s(button.subtitle))])])}))],2)})),1)],1)}),[],!1,null,null,null);e.default=component.exports},352:function(t,e,r){"use strict";r.r(e);var l={props:{size:{type:String,require:!1,default:function(){return"M"}}},computed:{getSize:function(){var t="medium";switch(this.size.toLowerCase()){case"xs":t="extra-small";break;case"s":t="small";break;case"m":default:t="medium";break;case"l":t="large";break;case"xl":t="extra-large"}return t}}},n=r(51),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"row row-separator",class:t.getSize})}),[],!1,null,null,null);e.default=component.exports},373:function(t,e,r){"use strict";r.r(e);var l={props:{config:{type:Object,required:!0,default:function(){return{}}},values:{type:Array,required:!0,default:function(){return[]}}}},n=r(51),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row-multi-columns"},[r("b-row",{staticClass:"py-3"},t._l(t.config.modules,(function(e,l){return r("b-col",{key:l,attrs:{cols:t.config.widths[l]}},["RowNewsList"===e.name?r("RowNewsList",{key:e.name+"_"+l,attrs:{news:t.values[l],config:e}}):"RowText"===e.name?r("RowText",{key:e.name+"_"+l,attrs:{text:e.text,status:e.status}}):"RowTextImage"===e.name?r("RowTextImage",{key:e.name+"_"+l,attrs:{cols:e.cols,text:e.text,status:e.status,image:e.image}}):"RowImageText"===e.name?r("RowImageText",{key:e.name+"_"+l,attrs:{cols:e.cols,text:e.text,status:e.status,image:e.image}}):"RowDynamicTable"===e.name?r("RowDynamicTable",{key:e.name+"_"+l,attrs:{data:e}}):"RowButtonGrid"===e.name?r("RowButtonGrid",{key:e.name+"_"+l,attrs:{config:e}}):"RowSeparator"===e.name?r("RowSeparator",{key:e.name+"_"+l,attrs:{size:e.size}}):r("div",[t._v("\n        "+t._s(e.name)+"\n      ")])],1)})),1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{RowNewsList:r(374).default,RowText:r(341).default,RowTextImage:r(342).default,RowImageText:r(343).default,RowDynamicTable:r(344).default,RowButtonGrid:r(351).default,RowSeparator:r(352).default})},374:function(t,e,r){"use strict";r.r(e);r(250);var l={props:{news:{type:Array,required:!0,default:function(){return[]}},config:{type:Object,required:!1,default:function(){return{}}}},methods:{selectImg:function(image){return image||"/images/logo1.jpg"},itemColor:function(i){return 0===Number(i+1)%2?"second":Number(i+1)%3==0?"third":"first"}}},n=r(51),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row-news-list"},[r("b-row",[r("b-col",{staticClass:"text-center text-primary col-title"},[r("font-awesome-icon",{staticClass:"fa-2x",attrs:{icon:t.config.image.split(" ")}}),t._v(" "),r("p",{staticClass:"h5 mb-0"},[t._v(t._s(t.config.title))]),t._v(" "),r("p",{staticClass:"col-title-subtitle font-italic"},[t._v(t._s(t.config.subtitle))])],1)],1),t._v(" "),t._l(t.news,(function(e,l){return r("b-row",{key:l,staticClass:"row-news-list-item"},[r("div",{staticClass:"card mb-3 p-0",class:t.itemColor(l)},[r("div",{staticClass:"card-body text-center p-2"},[r("h5",{staticClass:"card-title"},[r("NuxtLink",{staticClass:"stretched-link",attrs:{to:{name:"news-slug",params:{slug:e.slug}}}},[t._v("\n            "+t._s(e.title)+"\n          ")])],1),t._v(" "),r("h6",{staticClass:"card-sub-title"},[r("span",{staticClass:"font-italic"},[t._v(t._s(e.subtitle))])])]),t._v(" "),r("div",{staticClass:"card-footer text-center p-2"},[r("b-container",{staticClass:"p-0"},[r("b-row",[r("b-col",[t._v("\n              "+t._s(e.date)+"\n            ")]),t._v(" "),r("b-col",[t._v("\n              "+t._s(e.by)+"\n            ")])],1)],1)],1)])])}))],2)}),[],!1,null,null,null);e.default=component.exports}}]);
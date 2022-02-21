(window.webpackJsonp=window.webpackJsonp||[]).push([[16,5,6,7,8,9,10],{341:function(t,e,l){"use strict";l.r(e);l(2),l(1),l(5),l(3),l(85),l(104);var r={props:{config:{type:Object,required:!0,default:function(){return{}}}},data:function(){return{filter:"",totalRows:this.config.items.length,currentPage:1}},watch:{config:function(t,e){this.totalRows=t.items.length}},methods:{filterItems:function(t,filter){var e=!1;return(this.config.filter||Object.keys(t)).forEach((function(l){t[l].title&&t[l].title.toLowerCase().includes(filter.toLowerCase())&&(e=!0)})),e},onFiltered:function(t){this.totalRows=t.length,this.currentPage=1},itemType:function(t){var e="text";return t.value.icon&&t.value.icon.length>0?e=t.value.url&&t.value.url.length>0?"link-icon":"icon":t.value.image&&t.value.image.length>0?e=t.value.url&&t.value.url.length>0?"link-image":"image":t.value.url&&t.value.url.length>0&&(e="link"),e}}},n=l(50),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"row-dynamic-table"},[l("b-row",{staticClass:"pt-5 pb-5"},[l("b-col",[l("b-row",[l("b-col",[l("b-form-group",{directives:[{name:"show",rawName:"v-show",value:t.config.filter,expression:"config.filter"}],attrs:{label:"Filter","label-for":"filter-input","label-cols-sm":"1","label-align-sm":"left","label-size":"sm"}},[l("b-input-group",{attrs:{size:"sm"}},[l("b-form-input",{attrs:{id:"filter-input",type:"search",placeholder:"Type to Search"},model:{value:t.filter,callback:function(e){t.filter=e},expression:"filter"}})],1)],1)],1),t._v(" "),t.config.pagination?l("b-col",{attrs:{cols:"3"}},[l("b-pagination",{staticClass:"my-0 mb-3",attrs:{"total-rows":t.totalRows,"per-page":t.config.pagination,align:"fill",size:"sm"},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1):t._e()],1),t._v(" "),l("b-row",[l("b-col",[l("b-table",{attrs:{striped:"",hover:"",items:t.config.items,fields:t.config.columns,filter:t.filter,"sort-icon-left":"","sort-desc.sync":"asc","sort-by":"published","filter-function":t.filterItems,"current-page":t.currentPage,"per-page":t.config.pagination},on:{filtered:t.onFiltered},scopedSlots:t._u([{key:"cell()",fn:function(e){return["icon"===t.itemType(e)?l("div",[l("CellIcon",{attrs:{icon:e.value.icon}})],1):"link"===t.itemType(e)?l("div",[l("CellLink",{attrs:{text:e.value.title,url:e.value.url,target:e.value.target}})],1):"link-icon"===t.itemType(e)?l("div",[l("CellLinkIcon",{attrs:{icon:e.value.icon,url:e.value.url,target:e.value.target}})],1):"text"===t.itemType(e)?l("div",[l("CellText",{attrs:{text:e.value.title}})],1):"image"===t.itemType(e)?l("div",[l("CellImage",{attrs:{image:e.value.image,title:e.value.title}})],1):"link-image"===t.itemType(e)?l("div",[l("CellLinkImage",{attrs:{url:e.value.url,image:e.value.image,alt:e.value.title}})],1):t._e()]}}])})],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CellIcon:l(342).default,CellLink:l(343).default,CellLinkIcon:l(344).default,CellText:l(345).default,CellImage:l(346).default,CellLinkImage:l(347).default})},342:function(t,e,l){"use strict";l.r(e);var r={props:{icon:{type:String,required:!0}}},n=l(50),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("FontAwesomeIcon",{attrs:{icon:t.icon.split(" ")}})}),[],!1,null,null,null);e.default=component.exports},343:function(t,e,l){"use strict";l.r(e);var r={props:{url:{type:String,required:!0},target:{type:String,required:!1,default:""},text:{type:String,required:!0}}},n=l(50),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return t.url&&t.url.match("(ftp|https?):")?l("b-link",{attrs:{target:t.target,href:t.url}},[t._v("\n  "+t._s(t.text)+"\n")]):l("b-link",{attrs:{to:t.url}},[t._v("\n  "+t._s(t.text)+"\n")])}),[],!1,null,null,null);e.default=component.exports},344:function(t,e,l){"use strict";l.r(e);var r={props:{url:{type:String,required:!1,default:"#"},icon:{type:String,required:!0},target:{type:String,required:!1,default:""}}},n=l(50),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return t.url&&t.url.match("(ftp|https?):")?l("b-link",{class:[{disabled:!t.url}],attrs:{href:t.url,target:t.target}},[l("FontAwesomeIcon",{attrs:{icon:t.icon.split(" ")}})],1):l("b-link",{class:[{disabled:!t.url}],attrs:{to:t.url?t.url:"#"}},[l("FontAwesomeIcon",{attrs:{icon:t.icon.split(" ")}})],1)}),[],!1,null,null,null);e.default=component.exports},345:function(t,e,l){"use strict";l.r(e);var r=l(333),n=l.n(r),o={props:{text:{type:String,required:!1,default:function(){return null}}},computed:{formatedText:function(){return this.text&&this.text.length>0?n()(this.text):""}}},c=l(50),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{domProps:{innerHTML:t._s(t.formatedText)}})}),[],!1,null,null,null);e.default=component.exports},346:function(t,e,l){"use strict";l.r(e);var r={props:{image:{type:String,required:!0},title:{type:String,required:!1,default:function(){return""}}}},n=l(50),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("b-img",{attrs:{alt:t.title,src:t.image}})}),[],!1,null,null,null);e.default=component.exports},347:function(t,e,l){"use strict";l.r(e);var r={props:{url:{type:String,required:!1,default:"#"},target:{type:String,required:!1,default:""},src:{type:String,required:!0},alt:{type:String,required:!0}}},n=l(50),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return t.url&&t.url.match("(ftp|https?):")?l("b-link",{class:[{disabled:!t.url}],attrs:{href:t.url,target:t.target}},[l("b-img",{attrs:{alt:t.alt,src:t.src}})],1):l("b-link",{class:[{disabled:!t.url}],attrs:{to:t.url}},[l("b-img",{attrs:{alt:t.alt,src:t.src}})],1)}),[],!1,null,null,null);e.default=component.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{379:function(t,e,r){"use strict";r.r(e);var o={props:{tags:{type:Array,required:!0},resource:{type:String,required:!0,default:""}},computed:{showAll:function(){return!(this.$route.query.tag&&this.$route.query.tag.length>0)}},methods:{isActive:function(t){return this.$route.query.tag===t}}},l=r(52),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"row-tags"},[e("b-row",{staticClass:"shadow p-3 mb-5 bg-white rounded"},[e("b-container",[e("b-row",[e("h1",{staticClass:"m-auto"},[t._v("Tags")])]),t._v(" "),e("b-row",[e("b-list-group",{staticClass:"overflow-auto m-auto",attrs:{horizontal:""}},[t._l(t.tags,(function(r){return e("b-list-group-item",{key:r,staticClass:"border-0 flex-fill",attrs:{disabled:t.isActive(r)}},[e("nuxt-link",{class:{"font-weight-bold":t.isActive(r)},attrs:{to:{name:t.resource,query:{tag:r}}}},[t._v("\n              #"+t._s(r)+"\n            ")])],1)})),t._v(" "),e("b-list-group-item",{staticClass:"border-0 flex-fill",attrs:{disabled:t.showAll}},[e("nuxt-link",{class:{"text-muted":t.showAll},attrs:{to:{name:t.resource}}},[t._v("\n              Clear\n            ")])],1)],2)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);
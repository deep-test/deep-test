/*! For license information please see LICENSES */
webpackJsonp([3],{"/XXX":function(e,t,n){"use strict";function i(e){n("YPJf")}var a=n("BisF"),s=n("6iAT"),r=n("VU/8"),o=i,l=r(a.a,s.a,!1,o,null,null);t.a=l.exports},"/kJX":function(e,t,n){!function(t,n){e.exports=n()}(0,function(){return function(e){function t(i){if(n[i])return n[i].exports;var a=n[i]={exports:{},id:i,loaded:!1};return e[i].call(a.exports,a,a.exports,t),a.loaded=!0,a.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.Slide=t.Carousel=void 0;var a=n(1),s=i(a),r=n(21),o=i(r),l=function(e){e.component("carousel",s.default),e.component("slide",o.default)};t.default={install:l},t.Carousel=s.default,t.Slide=o.default},function(e,t,n){function i(e){n(2)}var a=n(7)(n(8),n(26),i,null,null);e.exports=a.exports},function(e,t,n){var i=n(3);"string"==typeof i&&(i=[[e.id,i,""]]),i.locals&&(e.exports=i.locals),n(5)("70056466",i,!0)},function(e,t,n){t=e.exports=n(4)(),t.push([e.id,".VueCarousel{position:relative}.VueCarousel-wrapper{width:100%;position:relative;overflow:hidden}.VueCarousel-inner{display:flex;flex-direction:row;backface-visibility:hidden}",""])},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var i={},a=0;a<this.length;a++){var s=this[a][0];"number"==typeof s&&(i[s]=!0)}for(a=0;a<t.length;a++){var r=t[a];"number"==typeof r[0]&&i[r[0]]||(n&&!r[2]?r[2]=n:n&&(r[2]="("+r[2]+") and ("+n+")"),e.push(r))}},e}},function(e,t,n){function i(e){for(var t=0;t<e.length;t++){var n=e[t],i=u[n.id];if(i){i.refs++;for(var a=0;a<i.parts.length;a++)i.parts[a](n.parts[a]);for(;a<n.parts.length;a++)i.parts.push(s(n.parts[a]));i.parts.length>n.parts.length&&(i.parts.length=n.parts.length)}else{for(var r=[],a=0;a<n.parts.length;a++)r.push(s(n.parts[a]));u[n.id]={id:n.id,refs:1,parts:r}}}}function a(){var e=document.createElement("style");return e.type="text/css",c.appendChild(e),e}function s(e){var t,n,i=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(i){if(v)return h;i.parentNode.removeChild(i)}if(m){var s=p++;i=f||(f=a()),t=r.bind(null,i,s,!1),n=r.bind(null,i,s,!0)}else i=a(),t=o.bind(null,i),n=function(){i.parentNode.removeChild(i)};return t(e),function(i){if(i){if(i.css===e.css&&i.media===e.media&&i.sourceMap===e.sourceMap)return;t(e=i)}else n()}}function r(e,t,n,i){var a=n?"":i.css;if(e.styleSheet)e.styleSheet.cssText=g(t,a);else{var s=document.createTextNode(a),r=e.childNodes;r[t]&&e.removeChild(r[t]),r.length?e.insertBefore(s,r[t]):e.appendChild(s)}}function o(e,t){var n=t.css,i=t.media,a=t.sourceMap;if(i&&e.setAttribute("media",i),a&&(n+="\n/*# sourceURL="+a.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var l="undefined"!=typeof document,d=n(6),u={},c=l&&(document.head||document.getElementsByTagName("head")[0]),f=null,p=0,v=!1,h=function(){},m="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,n){v=n;var a=d(e,t);return i(a),function(t){for(var n=[],s=0;s<a.length;s++){var r=a[s],o=u[r.id];o.refs--,n.push(o)}t?(a=d(e,t),i(a)):a=[];for(var s=0;s<n.length;s++){var o=n[s];if(0===o.refs){for(var l=0;l<o.parts.length;l++)o.parts[l]();delete u[o.id]}}}};var g=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t){e.exports=function(e,t){for(var n=[],i={},a=0;a<t.length;a++){var s=t[a],r=s[0],o=s[1],l=s[2],d=s[3],u={id:e+":"+a,css:o,media:l,sourceMap:d};i[r]?i[r].parts.push(u):n.push(i[r]={id:r,parts:[u]})}return n}},function(e,t){e.exports=function(e,t,n,i,a){var s,r=e=e||{},o=typeof e.default;"object"!==o&&"function"!==o||(s=e,r=e.default);var l="function"==typeof r?r.options:r;t&&(l.render=t.render,l.staticRenderFns=t.staticRenderFns),i&&(l._scopeId=i);var d;if(a?(d=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(a)},l._ssrRegister=d):n&&(d=n),d){var u=l.functional,c=u?l.render:l.beforeCreate;u?l.render=function(e,t){return d.call(t),c(e,t)}:l.beforeCreate=c?[].concat(c,d):[d]}return{esModule:s,exports:r,options:l}}},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(9),s=i(a),r=n(10),o=i(r),l=n(11),d=i(l),u=n(16),c=i(u),f=n(21),p=i(f);t.default={name:"carousel",beforeUpdate:function(){this.computeCarouselWidth()},components:{Navigation:d.default,Pagination:c.default,Slide:p.default},data:function(){return{browserWidth:null,carouselWidth:null,currentPage:0,dragOffset:0,dragStartX:0,mousedown:!1,slideCount:0}},mixins:[s.default],props:{easing:{type:String,default:"ease"},minSwipeDistance:{type:Number,default:8},navigationClickTargetSize:{type:Number,default:8},navigationEnabled:{type:Boolean,default:!1},navigationNextLabel:{type:String,default:"▶"},navigationPrevLabel:{type:String,default:"◀"},paginationActiveColor:{type:String,default:"#000000"},paginationColor:{type:String,default:"#efefef"},paginationEnabled:{type:Boolean,default:!0},paginationPadding:{type:Number,default:10},paginationSize:{type:Number,default:10},perPage:{type:Number,default:2},perPageCustom:{type:Array},scrollPerPage:{type:Boolean,default:!1},speed:{type:Number,default:500},loop:{type:Boolean,default:!1}},computed:{breakpointSlidesPerPage:function(){if(!this.perPageCustom)return this.perPage;var e=this.perPageCustom,t=this.browserWidth,n=e.sort(function(e,t){return e[0]>t[0]?-1:1}),i=n.filter(function(e){return t>=e[0]});return i[0]&&i[0][1]||this.perPage},canAdvanceForward:function(){return this.loop||this.currentPage<this.pageCount-1},canAdvanceBackward:function(){return this.loop||this.currentPage>0},currentPerPage:function(){return!this.perPageCustom||this.$isServer?this.perPage:this.breakpointSlidesPerPage},currentOffset:function(){var e=this.currentPage,t=this.slideWidth,n=this.dragOffset;return-1*((this.scrollPerPage?e*t*this.currentPerPage:e*t)+n)},isHidden:function(){return this.carouselWidth<=0},pageCount:function(){var e=this.slideCount,t=this.currentPerPage;if(this.scrollPerPage){var n=Math.ceil(e/t);return n<1?1:n}return e-(this.currentPerPage-1)},slideWidth:function(){return this.carouselWidth/this.currentPerPage},transitionStyle:function(){return this.speed/1e3+"s "+this.easing+" transform"}},methods:{getNextPage:function(){return this.currentPage<this.pageCount-1?this.currentPage+1:this.loop?0:this.currentPage},getPreviousPage:function(){return this.currentPage>0?this.currentPage-1:this.loop?this.pageCount-1:this.currentPage},advancePage:function(e){e&&"backward"===e&&this.canAdvanceBackward?this.goToPage(this.getPreviousPage()):(!e||e&&"backward"!==e)&&this.canAdvanceForward&&this.goToPage(this.getNextPage())},attachMutationObserver:function(){var e=this,t=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver;if(t){var n={attributes:!0,data:!0};this.mutationObserver=new t(function(){e.$nextTick(function(){e.computeCarouselWidth()})}),this.$parent.$el&&this.mutationObserver.observe(this.$parent.$el,n)}},detachMutationObserver:function(){this.mutationObserver&&this.mutationObserver.disconnect()},getBrowserWidth:function(){return this.browserWidth=window.innerWidth,this.browserWidth},getCarouselWidth:function(){return this.carouselWidth=this.$el&&this.$el.clientWidth||0,this.carouselWidth},getSlideCount:function(){this.slideCount=this.$slots&&this.$slots.default&&this.$slots.default.filter(function(e){return e.tag&&e.tag.indexOf("slide")>-1}).length||0},goToPage:function(e){e>=0&&e<=this.pageCount&&(this.currentPage=e,this.$emit("pageChange",this.currentPage))},handleMousedown:function(e){e.touches||e.preventDefault(),this.mousedown=!0,this.dragStartX="ontouchstart"in window?e.touches[0].clientX:e.clientX},handleMouseup:function(){this.mousedown=!1,this.dragOffset=0},handleMousemove:function(e){if(this.mousedown){var t="ontouchstart"in window?e.touches[0].clientX:e.clientX,n=this.dragStartX-t;this.dragOffset=n,this.dragOffset>this.minSwipeDistance?(this.handleMouseup(),this.advancePage()):this.dragOffset<-this.minSwipeDistance&&(this.handleMouseup(),this.advancePage("backward"))}},computeCarouselWidth:function(){this.getSlideCount(),this.getBrowserWidth(),this.getCarouselWidth(),this.setCurrentPageInBounds()},setCurrentPageInBounds:function(){if(!this.canAdvanceForward){var e=this.pageCount-1;this.currentPage=e>=0?e:0}}},mounted:function(){this.$isServer||(window.addEventListener("resize",(0,o.default)(this.computeCarouselWidth,16)),"ontouchstart"in window?(this.$el.addEventListener("touchstart",this.handleMousedown),this.$el.addEventListener("touchend",this.handleMouseup),this.$el.addEventListener("touchmove",this.handleMousemove)):(this.$el.addEventListener("mousedown",this.handleMousedown),this.$el.addEventListener("mouseup",this.handleMouseup),this.$el.addEventListener("mousemove",this.handleMousemove))),this.attachMutationObserver(),this.computeCarouselWidth()},destroyed:function(){this.$isServer||(this.detachMutationObserver(),window.removeEventListener("resize",this.getBrowserWidth),"ontouchstart"in window?this.$el.removeEventListener("touchmove",this.handleMousemove):this.$el.removeEventListener("mousemove",this.handleMousemove))}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={props:{autoplay:{type:Boolean,default:!1},autoplayTimeout:{type:Number,default:2e3},autoplayHoverPause:{type:Boolean,default:!0}},data:function(){return{autoplayInterval:null}},destroyed:function(){this.$isServer||(this.$el.removeEventListener("mouseenter",this.pauseAutoplay),this.$el.removeEventListener("mouseleave",this.startAutoplay))},methods:{pauseAutoplay:function(){this.autoplayInterval&&(this.autoplayInterval=clearInterval(this.autoplayInterval))},startAutoplay:function(){this.autoplay&&(this.autoplayInterval=setInterval(this.advancePage,this.autoplayTimeout))}},mounted:function(){!this.$isServer&&this.autoplayHoverPause&&(this.$el.addEventListener("mouseenter",this.pauseAutoplay),this.$el.addEventListener("mouseleave",this.startAutoplay)),this.startAutoplay()}};t.default=n},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e,t,n){var i=void 0;return function(){var a=void 0,s=function(){i=null,n||e.apply(a)},r=n&&!i;clearTimeout(i),i=setTimeout(s,t),r&&e.apply(a)}};t.default=n},function(e,t,n){function i(e){n(12)}var a=n(7)(n(14),n(15),i,"data-v-7fed18e9",null);e.exports=a.exports},function(e,t,n){var i=n(13);"string"==typeof i&&(i=[[e.id,i,""]]),i.locals&&(e.exports=i.locals),n(5)("58a44a73",i,!0)},function(e,t,n){t=e.exports=n(4)(),t.push([e.id,".VueCarousel-navigation-button[data-v-7fed18e9]{position:absolute;top:50%;box-sizing:border-box;color:#000;text-decoration:none}.VueCarousel-navigation-next[data-v-7fed18e9]{right:0;transform:translateY(-50%) translateX(100%)}.VueCarousel-navigation-prev[data-v-7fed18e9]{left:0;transform:translateY(-50%) translateX(-100%)}.VueCarousel-navigation--disabled[data-v-7fed18e9]{opacity:.5;cursor:default}",""])},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"navigation",data:function(){return{parentContainer:this.$parent}},props:{clickTargetSize:{type:Number,default:8},nextLabel:{type:String,default:"▶"},prevLabel:{type:String,default:"◀"}},computed:{canAdvanceForward:function(){return this.parentContainer.canAdvanceForward||!1},canAdvanceBackward:function(){return this.parentContainer.canAdvanceBackward||!1}},methods:{triggerPageAdvance:function(e){e?this.$parent.advancePage(e):this.$parent.advancePage()}}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"VueCarousel-navigation"},[n("a",{staticClass:"VueCarousel-navigation-button VueCarousel-navigation-prev",class:{"VueCarousel-navigation--disabled":!e.canAdvanceBackward},style:"padding: "+e.clickTargetSize+"px; margin-right: -"+e.clickTargetSize+"px;",attrs:{href:"#"},domProps:{innerHTML:e._s(e.prevLabel)},on:{click:function(t){t.preventDefault(),e.triggerPageAdvance("backward")}}}),e._v(" "),n("a",{staticClass:"VueCarousel-navigation-button VueCarousel-navigation-next",class:{"VueCarousel-navigation--disabled":!e.canAdvanceForward},style:"padding: "+e.clickTargetSize+"px; margin-left: -"+e.clickTargetSize+"px;",attrs:{href:"#"},domProps:{innerHTML:e._s(e.nextLabel)},on:{click:function(t){t.preventDefault(),e.triggerPageAdvance()}}})])},staticRenderFns:[]}},function(e,t,n){function i(e){n(17)}var a=n(7)(n(19),n(20),i,"data-v-7e42136f",null);e.exports=a.exports},function(e,t,n){var i=n(18);"string"==typeof i&&(i=[[e.id,i,""]]),i.locals&&(e.exports=i.locals),n(5)("cc30be7c",i,!0)},function(e,t,n){t=e.exports=n(4)(),t.push([e.id,".VueCarousel-pagination[data-v-7e42136f]{width:100%;float:left;text-align:center}.VueCarousel-dot-container[data-v-7e42136f]{display:inline-block;margin:0 auto}.VueCarousel-dot[data-v-7e42136f]{float:left;cursor:pointer}.VueCarousel-dot-inner[data-v-7e42136f]{border-radius:100%}",""])},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"pagination",data:function(){return{parentContainer:this.$parent}}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"show",rawName:"v-show",value:e.parentContainer.pageCount>1,expression:"parentContainer.pageCount > 1"}],staticClass:"VueCarousel-pagination"},[n("div",{staticClass:"VueCarousel-dot-container"},e._l(e.parentContainer.pageCount,function(t,i){return n("div",{staticClass:"VueCarousel-dot",class:{"VueCarousel-dot--active":i===e.parentContainer.currentPage},style:"\n        margin-top: "+2*e.parentContainer.paginationPadding+"px;\n        padding: "+e.parentContainer.paginationPadding+"px;\n      ",on:{click:function(t){e.parentContainer.goToPage(i)}}},[n("div",{staticClass:"VueCarousel-dot-inner",style:"\n          width: "+e.parentContainer.paginationSize+"px;\n          height: "+e.parentContainer.paginationSize+"px;\n          background: "+(i===e.parentContainer.currentPage?e.parentContainer.paginationActiveColor:e.parentContainer.paginationColor)+";\n        "})])}))])},staticRenderFns:[]}},function(e,t,n){function i(e){n(22)}var a=n(7)(n(24),n(25),i,null,null);e.exports=a.exports},function(e,t,n){var i=n(23);"string"==typeof i&&(i=[[e.id,i,""]]),i.locals&&(e.exports=i.locals),n(5)("647f10ac",i,!0)},function(e,t,n){t=e.exports=n(4)(),t.push([e.id,".VueCarousel-slide{flex-basis:inherit;flex-grow:0;flex-shrink:0;user-select:none}",""])},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"slide",data:function(){return{width:null}}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"VueCarousel-slide"},[e._t("default")],2)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"VueCarousel"},[n("div",{staticClass:"VueCarousel-wrapper"},[n("div",{staticClass:"VueCarousel-inner",style:"\n        transform: translateX("+e.currentOffset+"px);\n        transition: "+e.transitionStyle+";\n        flex-basis: "+e.slideWidth+"px;\n        visibility: "+(e.slideWidth?"visible":"hidden")+"\n      "},[e._t("default")],2)]),e._v(" "),e.paginationEnabled&&e.pageCount>0?n("pagination"):e._e(),e._v(" "),e.navigationEnabled?n("navigation",{attrs:{clickTargetSize:e.navigationClickTargetSize,nextLabel:e.navigationNextLabel,prevLabel:e.navigationPrevLabel}}):e._e()],1)},staticRenderFns:[]}}])})},"6iAT":function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("md-whiteframe",{directives:[{name:"show",rawName:"v-show",value:e.isOpened_,expression:"isOpened_"}],staticClass:"dt-cframe",attrs:{"md-elevation":23}},[n("md-button",{staticClass:"dt-cframe__button dt-cframe__button_close",nativeOn:{click:function(t){e.close(t)}}},[n("md-icon",{staticClass:"md-primary md-size-2x"},[e._v("close")]),n("md-tooltip",{attrs:{"md-delay":"300","md-direction":"top"}},[e._v("Close window")])],1),n("md-button",{staticClass:"dt-cframe__button dt-cframe__button_autoplay",nativeOn:{click:function(t){e.isAutoplay=!e.isAutoplay}}},[e.isAutoplay?e._e():n("md-icon",{staticClass:"md-primary md-size-2x"},[e._v("close")]),e.isAutoplay?n("md-icon",{staticClass:"md-primary md-size-2x"},[e._v("date_range")]):e._e(),n("md-tooltip",{attrs:{"md-delay":"300","md-direction":"top"}},[e.isAutoplay?e._e():n("span",[e._v("Enable autoplay")]),e.isAutoplay?n("span",[e._v("Disable autoplay")]):e._e()])],1),n("carousel",{ref:"carousel",staticClass:"dt-cframe__carousel",attrs:{autoplay:e.isAutoplay,autoplayTimeout:3e3,autoplayHoverPause:!0,easing:"ease",minSwipeDistance:8,perPage:1,scrollPerPage:!0,speed:10,navigationClickTargetSize:30,navigationEnabled:!0,paginationEnabled:!0,paginationColor:"rgb(0, 69, 102)",paginationActiveColor:"rgb(107, 126, 81)",paginationPadding:10,paginationSize:14}},e._l(e.items,function(t,i){return n("slide",{key:i,staticClass:"dt-cframe__slide"},[e._t("item",null,{item:t})],2)}))],1)},a=[],s={render:i,staticRenderFns:a};t.a=s},"7THc":function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"page-events"},[n("dt-events",{attrs:{mod:"grid"}})],1)},a=[],s={render:i,staticRenderFns:a};t.a=s},9655:function(e,t,n){t=e.exports=n("FZ+f")(!1),t.push([e.i,"@import url(https://fonts.googleapis.com/css?family=Jura:600|Fira+Sans+Extra+Condensed:400,400i,700|Russo+One);",""]),t.push([e.i,".dt-cframe{position:absolute;width:100%;height:100%;padding:50px 10px 10px;opacity:1%;z-index:1000;background-color:#fff}.dt-cframe__button_close{position:absolute;right:0;top:0;z-index:100000;color:#003a56}.dt-cframe__button_autoplay{position:absolute;right:50px;top:0;z-index:100000;color:#003a56}.dt-cframe__carousel{position:relative}.dt-cframe__slide{width:300px}.VueCarousel-pagination{position:absolute;left:0;bottom:calc(100% - 7px)}",""])},A4yD:function(e,t,n){t=e.exports=n("FZ+f")(!1),t.push([e.i,"@import url(https://fonts.googleapis.com/css?family=Jura:600|Fira+Sans+Extra+Condensed:400,400i,700|Russo+One);",""]),t.push([e.i,'.event_compact{border:4px solid #6b7e51;border-width:4px 0 0}.event_medium{border:4px solid #003a56;border-width:4px 0 0}.event__title,.events__title{font-family:Fira Sans Extra Condensed,"sans-serif";font-weight:400;font-size:24px}@media (max-width:1100px){.event__title,.events__title{font-size:21px}}@media (max-width:900px){.event__title,.events__title{font-size:18px}}@media (max-width:700px){.event__title,.events__title{font-size:16px}}.events__title{font-size:27px}@media (max-width:1100px){.events__title{font-size:23px}}@media (max-width:900px){.events__title{font-size:18px}}@media (max-width:700px){.events__title{font-size:17px}}.event__title{font-weight:700}.events{position:static;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.events__progress{position:absolute;left:0;top:0;padding:0;margin:0}.events__title{display:inline-block;padding:10px;color:#003a56}.events__event{-webkit-box-flex:0;-ms-flex:0 0 300px;flex:0 0 300px;-ms-flex-preferred-size:300px;flex-basis:300px;margin:10px 20px 15px}@media (max-width:1100px){.events__event{-ms-flex-preferred-size:350px;flex-basis:350px}}@media (max-width:900px){.events__event{-ms-flex-preferred-size:280px;flex-basis:280px}}@media (max-width:700px){.events__event{-ms-flex-preferred-size:200px;flex-basis:200px}}@media (max-width:500px){.events__event{-ms-flex-preferred-size:250px;flex-basis:250px}}@media (max-width:900px){.events__event{margin:5px 15px 10px}}@media (max-width:500px){.events__event{margin:5px 5px 10px}}.event{-webkit-box-flex:0;-ms-flex:0 1 250px;flex:0 1 250px;margin:10px;padding:0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.event__date{color:#6b7e51}.event__title{display:inline-block}.event__title_compact{padding:5px;color:#004566;text-decoration:underline;cursor:pointer}.event__title_compact:hover{color:#6b7e51;text-decoration:none}.event__title_medium{-webkit-box-flex:1;-ms-flex:1 0 50px;flex:1 0 50px;margin:auto 0;padding:10px;color:#003a56}.event__icon{margin:0 20px 0 0}.event__links{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end}.event__link{-webkit-box-flex:0;-ms-flex:0 1 150px;flex:0 1 150px}.event__content{height:auto}',""])},BisF:function(e,t,n){"use strict";var i=n("/kJX");n.n(i);t.a={name:"dt-cframe",components:{Carousel:i.Carousel,Slide:i.Slide},props:{items:{type:Array,default:function(e){return[]}},slnum:{type:Number,default:function(e){}},isOpened:{type:Boolean,default:function(e){return!1}}},data:function(){return{isOpened_:this.isOpened,slnum_:this.slnum,isAutoplay:!0}},computed:{},watch:{slnum:function(){this.setSLide(this.slnum)},isOpened:function(){this.isOpened&&!this.isOpened_&&this.open(),!this.isOpened&&this.isOpened_&&this.close()}},methods:{toggle:function(){return this.isOpened_?this.close():this.open()},open:function(){this.isOpened_=!0,this.setSLide(),this.$emit("opened")},close:function(){this.isOpened_=!1,this.$emit("closed")},setSLide:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0;e=void 0!==e?e:this.slnum_,this.slnum_=e,void 0!==this.slnum_&&this.$refs.carousel.goToPage(this.slnum_)}}}},C53h:function(e,t,n){var i=n("A4yD");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);n("rjj0")("dbf5d146",i,!0)},G4gJ:function(e,t,n){t=e.exports=n("FZ+f")(!1),t.push([e.i,"@import url(https://fonts.googleapis.com/css?family=Jura:600|Fira+Sans+Extra+Condensed:400,400i,700|Russo+One);",""]),t.push([e.i,'.dt-figure__text{font-family:Fira Sans Extra Condensed,"sans-serif";font-weight:400;font-size:24px}@media (max-width:1100px){.dt-figure__text{font-size:21px}}@media (max-width:900px){.dt-figure__text{font-size:18px}}@media (max-width:700px){.dt-figure__text{font-size:16px}}.dt-figure__text{font-weight:700}.dt-figure{position:relative;overflow:hidden;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.dt-figure__images{height:100px}.dt-figure__image{display:block;max-width:100%;width:100%;height:auto;border:0 none;margin:0}.dt-figure__image_preview{-webkit-filter:blur(2vw);filter:blur(2vw);-webkit-transform:scale(1.05);transform:scale(1.05)}.dt-figure__text{display:inline-block;-webkit-box-ordinal-group:101;-ms-flex-order:100;order:100;padding:10px 0 8px;text-align:center}img.preview{-webkit-filter:blur(2vw);filter:blur(2vw);-webkit-transform:scale(1.05);transform:scale(1.05)}img.hide{opacity:0}img.origin-scale{position:absolute;left:0;top:0;-webkit-animation:origin-scale 1s ease-out;animation:origin-scale 1s ease-out}@-webkit-keyframes origin-scale{0%{opacity:0;-webkit-transform:scale(1.1);transform:scale(1.1)}to{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes origin-scale{0%{opacity:0;-webkit-transform:scale(1.1);transform:scale(1.1)}to{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}',""])},PiqE:function(e,t,n){var i=n("G4gJ");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);n("rjj0")("989ecfde",i,!0)},Rwg4:function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"events",class:["events_"+e.mod]},[e.isReady?e._e():n("v-progress-linear",{staticClass:"events__progress",attrs:{indeterminate:!0}}),n("dt-cframe",{attrs:{items:e.events,slnum:e.events.findIndex(function(t){return t===e.event}),isOpened:void 0!==e.event},on:{closed:e.onClose},scopedSlots:e._u([{key:"item",fn:function(t){return[n("md-card",{staticClass:"events__event event"},[n("md-card-header",{staticClass:"event__header"},[n("md-card-header-text",[n("div",{staticClass:"event__date"},[n("md-icon",{staticClass:"event__icon"},[e._v("date_range")]),e._v(e._s(e.date_(t.item)))],1),n("div",{staticClass:"event__title"},[e._v(e._s(e.get_(t.item,"title")))])]),n("md-card-media",[n("dt-figure",{attrs:{srcs:e.imgs_(t.item),w:400}})],1)],1),n("md-card-content",{staticClass:"event__content"},[n("div",{domProps:{innerHTML:e._s(e.get_(t.item,"description"))}}),n("div",{domProps:{innerHTML:e._s(e.get_(t.item,"description_sub"))}})]),n("md-card-actions",{staticClass:"event__links"},e._l([e.get_(t.item,"link1"),e.get_(t.item,"link2")],function(i,a){return i?n("md-button",{key:i,staticClass:"event__link"},[n("md-icon",[e._v("link")]),n("a",{attrs:{href:i,target:"_blank"}},[e._v(e._s(e.get_(t.item,"link"+(a+1)+"_text")))])],1):e._e()}))],1)]}}])}),"list"==e.mod?n("div",{staticClass:"events__title"},[e.isENG?n("span",[e._v("Latest events")]):e._e(),e.isRUS?n("span",[e._v("Последние события")]):e._e()]):e._e(),e._l(e.events,function(t,i){return n("md-whiteframe",{key:t.id,staticClass:"events__event event",class:["event"+e.mod],attrs:{"md-tag":"md-card","md-elevation":"list"==e.mod?10:14}},[n("md-card-header",{staticClass:"event__header"},[n("md-card-header-text",[n("div",{staticClass:"event__date"},[n("md-icon",{staticClass:"event__icon"},[e._v("date_range")]),e._v(e._s(e.date_(t)))],1),n("div",{staticClass:"event__title",class:["event__title_"+e.mod],attrs:{id:e.id_(t)+"-title"},on:{click:function(n){e.open(t,!0)}}},[e._v(e._s(e.get_(t,"title")))])]),"along"==e.mod&&e.img_(t)?n("md-card-media",[n("dt-figure",{attrs:{srcs:e.imgs_(t),w:200}})],1):e._e()],1),"along"==e.mod?n("md-card-content",{staticClass:"event__content"},[n("div",{domProps:{innerHTML:e._s(e.get_(t,"description"))}}),n("div",{domProps:{innerHTML:e._s(e.get_(t,"description_sub"))}})]):e._e(),n("md-card-actions",{staticClass:"event__links"},[e._l([e.get_(t,"link1"),e.get_(t,"link2")],function(i,a){return"grid"==e.mod&&i?n("md-button",{key:i,staticClass:"event__link"},[n("md-icon",[e._v("link")]),n("a",{attrs:{href:i,target:"_blank"}},[e._v(e._s(e.get_(t,"link"+(a+1)+"_text")))])],1):e._e()}),"grid"==e.mod?n("md-button",{attrs:{id:e.id_},on:{click:function(n){e.open(t,!1)}}},[e.isENG?n("span",[e._v("More info")]):e._e(),e.isRUS?n("span",[e._v("Подробнее")]):e._e()]):e._e()],2)],1)})],2)},a=[],s={render:i,staticRenderFns:a};t.a=s},TmV0:function(e,t,n){n("fZOM"),e.exports=n("FeBl").Object.values},YPJf:function(e,t,n){var i=n("9655");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);n("rjj0")("31b0f395",i,!0)},YkL0:function(e,t,n){"use strict";var i=n("kCka");t.a={name:"dt-page-events",head:function(){return{title:this.isENG?"Events":"События",meta:[{hid:"keywords",name:"keywords",content:this.isENG?"Tensor networks, deep learning, neural networks, megagrant, skoltech, Andrzej Cichocki, Ivan Oseledets,  Victor Lempitsky,  Dmitry Vetrov, megagrant, seminar, conference, staff":"Тензорные сети, глубинное обучение, глубокое обучение, нейронные сети, мегагрант, Сколтех, Анджей Чихоцкий, Иван Оселедец, Виктор Лемпицкий, Дмитрий Ветров, мегагрант, семинары, штат лаборатории"},{hid:"description",name:"description",content:this.isENG?"Skoltech | Laboratory of Prof. Andrzej Cichocki | Tensor networks and deep learning for applications in data mining | Events":"Сколтех | Лаборатория Тензорные сети и глубинное обучение для интеллектуального анализа данных под руководством доктора Анджея Чихоцкого | События"}]}},components:{"dt-events":i.a}}},Ysb6:function(e,t,n){"use strict";var i=n("pYQl");t.a={name:"dt-figure",props:{src:{type:String,default:function(e){return""}},srcs:{type:Array,default:function(e){return[]}},alt:{type:String,default:function(e){return""}},txt:{type:String,default:function(e){return""}},w:{type:Number,default:function(e){return 200}},isProgressive:{type:Boolean,default:!1}},directives:{progressive:{bind:i.a.init,inserted:i.a.init,update:i.a.init,componentUpdated:i.a.lazy,unbind:i.a.unbind}},computed:{isMulty:function(){return this.srcs_.length>1},srcs_:function(){return this.srcs.length?this.srcs:this.src?[this.src]:[]}},methods:{srcParse:function(e){if(e)return e="pictures/"+e}}}},cQWe:function(e,t,n){"use strict";var i=n("h9iF"),a=n("/XXX"),s=n("iGko");t.a={name:"dt-events",mixins:[i.a],components:{"dt-cframe":a.a,"dt-figure":s.a},props:{mod:{type:String,enum:["list","grid"],default:function(e){return"grid"}}},data:function(){return{CLASS:"Events",tblNames:["events"],events:[],event:void 0,id:void 0}},watch:{tblNamesLoaded:function(){var e=this;if(~this.tblNamesLoaded.indexOf("events"))return this.parse$("events",function(t){return t.active&&(t.important||"list"!=e.mod)})}},methods:{_filter_:function(){console.log("events filter")},id_:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return"event-"+e.id+(t?"-title":"")},get_:function(e,t){return this.isRUS&&void 0!==e[t+"_rus"]?e[t+"_rus"]:e[t]},img_:function(e){return this.get_(e,"image1")},imgs_:function(e){return[this.get_(e,"image1"),this.get_(e,"image2")].filter(function(e){return e})},date_:function(e){if(e.date){var t=this.$moment(e.date.split("T")[0],"YYYY.MM.DD");return this.isENG?(this.$moment.locale("en"),t.format("MMMM D, YYYY")):this.isRUS?(this.$moment.locale("ru"),t.format("D MMMM, YYYY")):void 0}},open:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];console.log("open",e),this.event=e,this.id=this.id_(e,t),this.overlay=!0},close:function(){this.event=void 0,this.id=void 0},onOpen:function(){},onClose:function(){this.event=void 0,this.id=void 0}}}},fZOM:function(e,t,n){var i=n("kM2E"),a=n("mbce")(!1);i(i.S,"Object",{values:function(e){return a(e)}})},gRE1:function(e,t,n){e.exports={default:n("TmV0"),__esModule:!0}},h9iF:function(e,t,n){"use strict";var i=n("gRE1"),a=n.n(i),s=n("//Fk"),r=n.n(s),o=n("mtWM"),l=n.n(o),d=n("5d6g"),u={team:new d.a("team"),journals:new d.a("journals"),papers:new d.a("papers"),plan:new d.a("plan"),events:new d.a("events")};a()(u).forEach(function(e){e.isReady=!1,e.isLoading=!1}),t.a={data:function(){return{DB:u,isReady:!1,isReadyAll:!1,isLoading:!1,error:void 0,tblNamesLoaded:[]}},created:function(){var e=this;this.CS.debug("***",this.CLASS,"created");var t=r.a.resolve();(this.tblNames||[]).map(function(t){return function(n){return e.download$(t)}}).reduce(function(e,t){return e.then(t)},t)},mounted:function(){this.CS.debug("***",this.CLASS,"mounted"),this._filter_()},beforeDestroy:function(){this.CS.debug("***",this.CLASS,"beforeDestroy")},destroyed:function(){this.CS.debug("***",this.CLASS,"destroyed")},methods:{_filter_:function(){console.log("mixin filter")},parse$:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(e){return!0};return new r.a(function(i){return t.isReady?i():(t.DB[e].rows.forEach(function(i){n(i)&&t[e].push(i)}),t.isReady=!0,t.CS.debug("Parsed",t.CLASS,"parse$"),i())}).catch(function(n){t.error=n,t.CS.err('Error for "'+e+'"',t.CLASS,"parse$",n)})},download$:function(e){var t=this;this.CS.debug('Start for "'+e+'"',this.CLASS,"download$");var n=this.DB[e];if(n.isReady||n.isLoading)return r.a.resolve();return n.isReady=!1,n.isLoading=!0,l.a.get("/deep-test/db/"+n.name+".json").then(function(i){return n.parse(i.data),n.isReady=!0,n.isLoading=!1,t.tblNamesLoaded.push(e),t.CS.debug('End for "'+e+'"',t.CLASS,"download$"),n}).catch(function(n){t.error=n,t.CS.err('Error for "'+e+'"',t.CLASS,"download$",n)})}}}},iGko:function(e,t,n){"use strict";function i(e){n("PiqE")}var a=n("Ysb6"),s=n("jzKs"),r=n("VU/8"),o=i,l=r(a.a,s.a,!1,o,null,null);t.a=l.exports},jzKs:function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"dt-figure",class:{"dt-figure_progressive":e.isProgressive}},[n("div",[!e.isMulty&&e.src?n("img",{directives:[{name:"progressive",rawName:"v-progressive",value:e.srcParse(e.src),expression:"srcParse(src)"}],staticClass:"dt-figure__image preview",class:{"dt-figure__image_progressive":e.isProgressive},attrs:{src:e.srcParse(e.src),alt:e.alt}}):e._e()]),e.isMulty?n("v-carousel",{attrs:{icon:"stop"}},e._l(e.srcs,function(e,t){return n("v-carousel-item",{key:t,attrs:{src:e}})})):e._e(),e._t("default",[e.txt?n("div",{staticClass:"dt-figure__text",domProps:{innerHTML:e._s(e.txt)}}):e._e()])],2)},a=[],s={render:i,staticRenderFns:a};t.a=s},kCka:function(e,t,n){"use strict";function i(e){n("C53h")}var a=n("cQWe"),s=n("Rwg4"),r=n("VU/8"),o=i,l=r(a.a,s.a,!1,o,null,null);t.a=l.exports},pYQl:function(e,t,n){"use strict";function i(){var e=document.createElement("fake"),t={animation:"animationend",OAnimation:"oAnimationEnd",MozAnimation:"animationend",WebkitAnimation:"webkitAnimationEnd"};for(var n in t)if(void 0!==e.style[n])return t[n]}function a(e){var t=new Image;e.el.dataset&&(e.el.dataset.srcset&&(t.srcset=e.el.dataset.srcset),e.el.dataset.sizes&&(t.sizes=e.el.dataset.sizes)),t.src=e.src,t.className=c.scale?"origin-scale":"origin",t.onload=function(){var n=p.indexOf(e);n>=0&&p.splice(n,1),v.push(e.src),h(e,t)},t.onerror=function(){}}function s(e){if(v.indexOf(e.src)>=0)return void e.el.setAttribute("lazy","loaded");var t=e.el.getBoundingClientRect();t.top<window.innerHeight&&t.bottom>0&&t.left<window.innerWidth&&t.right>0&&a(e)}function r(e){var t=!1;return p.forEach(function(n){n.el==e&&(t=!0)}),t&&d(),t}function o(e,t){t?f.forEach(function(t){return e.addEventListener(t,d)}):f.forEach(function(t){return e.removeEventListener(t,d)})}function l(e,t){var n=t.value;if(!r(e)){if(v.indexOf(n)>=0)return void e.setAttribute("lazy","loaded");r(e)||p.push({el:e,src:n}),d(),p.length&&!c.hasBind&&(c.hasBind=!0,o(window,!0))}}function d(){setTimeout(function(e){return p.forEach(function(e){return s(e)})},300)}function u(e){e&&c.hasBind&&(c.hasBind=!1,o(window,!1),p.length=0,v.length=0)}var c={removePreview:!0,scale:!0,hasBind:!1},f=["scroll","wheel","mousewheel","resize"],p=[],v=[],h=function(e,t){var n=e.el,a=n.parentNode;a.appendChild(t).addEventListener(i(),function(e){console.log("anim"),n.alt&&(e.target.alt=n.alt),n.classList.add("hide"),c.removePreview&&(a.removeChild(n),e.target.classList.remove("origin"),e.target.classList.remove("origin-scale"))})};t.a={init:l,lazy:d,unbind:u}},zZuv:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n("YkL0"),a=n("7THc"),s=n("VU/8"),r=s(i.a,a.a,!1,null,null,null);t.default=r.exports}});
//# sourceMappingURL=events.8a2ce5c5c621759f5009.js.map
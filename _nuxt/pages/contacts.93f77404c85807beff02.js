webpackJsonp([6],{"2/F/":function(t,e,s){"use strict";function i(t){s("FbcN")}Object.defineProperty(e,"__esModule",{value:!0});var a=s("v4dr"),n=s("cbPh"),r=s("VU/8"),o=i,c=r(a.a,n.a,!1,o,null,null);e.default=c.exports},FbcN:function(t,e,s){var i=s("oHmQ");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);s("rjj0")("5f401b44",i,!0)},JNzY:function(t,e,s){var i=s("nPi/");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);s("rjj0")("1dfa7649",i,!0)},M07H:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"figure"},[!t.isMulty&&t.src?s("img",{staticClass:"figure__image",style:{width:t.w+"px"},attrs:{src:t.srcParse(t.src),alt:t.alt,width:t.w+"px",height:"auto"}}):t._e(),t.isMulty?s("md-boards",{staticClass:"figure__image figure__image_multy",attrs:{"md-auto":!0,"md-infinite":!1,"md-duration":2e3,"md-swipeable":!1,"md-controls":!1,"md-swipe-distance":100}},t._l(t.srcs_,function(e){return s("md-board",{key:e},[s("img",{attrs:{src:t.srcParse(e),alt:t.alt?t.alt:void 0,width:t.w+"px",height:"auto"}})])})):t._e(),t._t("default",[t.txt?s("div",{staticClass:"figure__text",domProps:{innerHTML:t._s(t.txt)}}):t._e()])],2)},a=[],n={render:i,staticRenderFns:a};e.a=n},Ysb6:function(t,e,s){"use strict";e.a={name:"v-figure",props:{src:{type:String,default:function(t){return""}},srcs:{type:Array,default:function(t){return[]}},alt:{type:String,default:function(t){return""}},txt:{type:String,default:function(t){return""}},w:{type:Number,default:function(t){return 200}}},computed:{isMulty:function(){return this.srcs_.length>1},srcs_:function(){return this.srcs.length?this.srcs:this.src?[this.src]:[]}},methods:{srcParse:function(t){if(t)return t="pictures/"+t}}}},cbPh:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("no-ssr",{attrs:{placeholder:"Loading..."}},[s("div",{staticClass:"contacts"},[s("div",{staticClass:"contacts__header contacts--header"},[s("v-figure",{staticClass:"contacts__image",attrs:{src:"skoltech.jpg",w:400,alt:"Skoltech"}}),s("section",{staticClass:"contacts__title text"},[s("p",{staticClass:"text__s"},[t.isENG?s("span",[t._v("Skolkovo Institute of Science and Technology")]):t._e(),t.isRUS?s("span",[t._v("Сколковский институт науки и технологий")]):t._e()]),s("p",{staticClass:"text__s"},[t.isENG?s("span",[t._v("Laboratory Tensor networks and deep learning for applications in data mining")]):t._e(),t.isRUS?s("span",[t._v("Лаборатория Тензорные сети и глубинное обучение для интеллектуального анализа данных")]):t._e()])])],1),s("div",{staticClass:"contacts__path contacts--path"},[s("section",{staticClass:"contacts__address text"},[s("p",{staticClass:"text__s"},[t.isENG?s("span",[t._v("Skolkovo Innovation Center")]):t._e(),t.isRUS?s("span",[t._v("Территория Инновационного Центра “Сколково”")]):t._e()]),s("p",{staticClass:"text__s"},[t.isENG?s("span",[t._v("Building 3, Moscow, Russia, 143026")]):t._e(),t.isRUS?s("span",[t._v("улица Нобеля, д. 3, Москва, Россия, 143026")]):t._e()]),s("a",{staticClass:"text__s link link_www",attrs:{href:t.isENG?"http://www.skoltech.ru/en/about/contacts/":"http://www.skoltech.ru/o-nas/kontakty/",target:"_blank"}},[s("md-icon",{staticClass:"md-accent",staticStyle:{"margin-right":"10px","text-decoration":"underline"}},[t._v("drive_eta")]),t.isENG?s("span",[t._v("Learn more how to reach us")]):t._e(),t.isRUS?s("span",[t._v("Подробнее, как добраться")]):t._e()],1),s("p",{staticClass:"text__s"},[t.isENG?s("span",[t._v("Head of the Laboratory")]):t._e(),t.isRUS?s("span",[t._v("Руководитель Лаборатории")]):t._e(),s("br"),t.isENG?s("span",[t._v("Doctor, Prof. Andrzej Cichocki")]):t._e(),t.isRUS?s("span",[t._v("Доктор, проф. Анджей Чихоцкий")]):t._e(),s("br"),s("md-icon",{staticClass:"md-accent",staticStyle:{"margin-right":"10px"}},[t._v("email")]),s("span",{staticClass:"text__em_spec"},[t._v("A.Cichocki@skoltech.ru")])],1),s("p",{staticClass:"text__s"},[t.isENG?s("span",[t._v("Campus operator")]):t._e(),t.isRUS?s("span",[t._v("Справочная Института")]):t._e(),s("br"),s("md-icon",{staticClass:"md-accent",staticStyle:{"margin-right":"10px"}},[t._v("phone")]),s("span",{staticClass:"text__em_spec"},[t._v("+7 (495) 280 14 81")])],1)]),s("googlemaps-map",{staticClass:"contacts__map",attrs:{center:t.mapCenter,zoom:t.mapZoom},on:{"update:center":function(e){t.mapCenter=e},"update:zoom":function(e){t.mapZoom=e}}},[s("googlemaps-marker",{attrs:{position:t.mapCenter}})],1)],1)])])},a=[],n={render:i,staticRenderFns:a};e.a=n},iGko:function(t,e,s){"use strict";function i(t){s("JNzY")}var a=s("Ysb6"),n=s("M07H"),r=s("VU/8"),o=i,c=r(a.a,n.a,!1,o,null,null);e.a=c.exports},"nPi/":function(t,e,s){e=t.exports=s("FZ+f")(!1),e.push([t.i,"@import url(https://fonts.googleapis.com/css?family=Jura:600|Fira+Sans+Extra+Condensed:400,400i,700|Russo+One);",""]),e.push([t.i,".figure{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:5px}.figure__images{height:100px}.figure__image{margin:0 0 15px;width:200px}.figure__text{text-align:center}",""])},oHmQ:function(t,e,s){e=t.exports=s("FZ+f")(!1),e.push([t.i,"@import url(https://fonts.googleapis.com/css?family=Jura:600|Fira+Sans+Extra+Condensed:400,400i,700|Russo+One);",""]),e.push([t.i,".contacts{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.contacts__image{-ms-flex-preferred-size:200px;flex-basis:200px;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;margin:30px}.contacts__title{-ms-flex-preferred-size:100px;flex-basis:100px;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1}.contacts__address{-ms-flex-preferred-size:50%;flex-basis:50%;-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0}.contacts__map{-webkit-box-flex:1;-ms-flex:1 0 300px;flex:1 0 300px;width:300px;height:300px;margin:10px}@media (max-width:700px){.contacts__map{width:250px;height:300px}}.contacts--header{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;align-items:center}@media (max-width:700px){.contacts--header{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:distribute;justify-content:space-around;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch}}.contacts--path{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;align-items:center}",""])},v4dr:function(t,e,s){"use strict";var i=s("iGko");e.a={name:"v-page-contacts",head:function(){return{title:this.isENG?"Contacts":"Контакты",meta:[{hid:"keywords",name:"keywords",content:this.isENG?"Tensor networks, deep learning, neural networks, megagrant, skoltech, skolkovo, Andrzej Cichocki, Ivan Oseledets,  Victor Lempitsky,  Dmitry Vetrov":"Тензорные сети, глубинное обучение, глубокое обучение, нейронные сети, мегагрант, Сколтех, деревня Сколково, Анджей Чихоцкий, Иван Оселедец, Виктор Лемпицкий, Дмитрий Ветров"},{hid:"description",name:"description",content:this.isENG?"Skoltech | Laboratory of Prof. Andrzej Cichocki | Tensor networks and deep learning for applications in data mining | Contacts":"Сколтех | Лаборатория Тензорные сети и глубинное обучение для интеллектуального анализа данных под руководством доктора Анджея Чихоцкого | Контактная информация"}]}},data:function(){return{mapZoom:9,mapCenter:{lat:55.6847,lng:37.3395}}},created:function(){return},components:{"v-figure":i.a}}}});
//# sourceMappingURL=contacts.93f77404c85807beff02.js.map
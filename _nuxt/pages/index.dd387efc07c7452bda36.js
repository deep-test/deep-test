webpackJsonp([3],{"/TYz":function(e,t,i){"use strict";function n(e){i("kEqo")}Object.defineProperty(t,"__esModule",{value:!0});var s=i("jlbv"),a=i("M/n1"),r=i("VU/8"),o=n,d=r(s.a,a.a,!1,o,null,null);t.default=d.exports},"5xGg":function(e,t,i){t=e.exports=i("FZ+f")(!1),t.push([e.i,"@import url(https://fonts.googleapis.com/css?family=Jura:600|Fira+Sans+Extra+Condensed:400,400i,700|Russo+One);",""]),t.push([e.i,".dt-page-index{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}@media (max-width:500px){.dt-page-index{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}}.dt-page-index__main{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start}.dt-page-index__main-image{-webkit-box-flex:1;-ms-flex:1 1 250px;flex:1 1 250px;-webkit-box-ordinal-group:11;-ms-flex-order:10;order:10;margin:10px;text-align:center}@media (max-width:900px){.dt-page-index__main-image{-webkit-box-ordinal-group:22;-ms-flex-order:21;order:21}}@media (max-width:1100px){.dt-page-index__main-image{margin:15px}}@media (max-width:500px){.dt-page-index__main-image{margin:15px 20px}}.dt-page-index__main-text1{-webkit-box-flex:2;-ms-flex:2 1 250px;flex:2 1 250px;-webkit-box-ordinal-group:21;-ms-flex-order:20;order:20;-ms-flex-item-align:start;align-self:flex-start}.dt-page-index__main-text2{-webkit-box-ordinal-group:31;-ms-flex-order:30;order:30}.dt-page-index__text{padding:10px}.dt-page-index__aside{-webkit-box-flex:0;-ms-flex:0 0 300px;flex:0 0 300px;-ms-flex-preferred-size:300px;flex-basis:300px;margin:0 0 0 30px}@media (max-width:1100px){.dt-page-index__aside{-ms-flex-preferred-size:250px;flex-basis:250px}}@media (max-width:900px){.dt-page-index__aside{-ms-flex-preferred-size:250px;flex-basis:250px}}@media (max-width:700px){.dt-page-index__aside{-ms-flex-preferred-size:200px;flex-basis:200px}}@media (max-width:500px){.dt-page-index__aside{-ms-flex-preferred-size:auto;flex-basis:auto}}@media (max-width:700px){.dt-page-index__aside{margin:0 0 0 15px}}@media (max-width:500px){.dt-page-index__aside{margin:20px 10px 15px auto}}",""])},"6y9t":function(e,t,i){"use strict";function n(e){i("MLb3")}var s=i("MeAE"),a=i("E5F4"),r=i("VU/8"),o=n,d=r(s.a,a.a,!1,o,null,null);t.a=d.exports},"77Ue":function(e,t,i){"use strict";var n=i("iGko");t.a={name:"dt-event",components:{"dt-figure":n.a},props:{ev:{type:Object,default:function(e){}},mod:{type:String,enum:["f","m","c"],default:function(e){return"m"}}},computed:{date:function(){if(this.ev&&this.ev.date){var e=this.$moment(this.ev.date.split("T")[0],"YYYY.MM.DD");return this.isENG?(this.$moment.locale("en"),e.format("MMMM D, YYYY")):this.isRUS?(this.$moment.locale("ru"),e.format("D MMMM, YYYY")):void 0}},img:function(){return this.get_("image1")},imgs:function(){return[this.get_("image1"),this.get_("image2")].filter(function(e){return e})}},methods:{get_:function(e){return this.isRUS&&void 0!==this.ev[e+"_rus"]?this.ev[e+"_rus"]:this.ev[e]},click_:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"object";return"m"==this.mod?this.$emit("click"):"c"==this.mod&&"title"==e?this.$emit("click"):void 0}}}},E5F4:function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"dt-events",class:["dt-events_"+e.mod]},[e.isReady?e._e():i("v-progress-linear",{staticClass:"dt-events__progress",attrs:{indeterminate:!0}}),e.isEventActive&&e.event_?i("div",[i("div",{staticClass:"dt-events__slider slider"},[e.isFirst?i("div",{staticClass:"slider__button slider__button_close",on:{click:function(t){e.close()}}},[i("md-icon",[e._v("close")]),i("md-tooltip",{attrs:{"md-direction":"bottom","md-delay":"100"}},[e.isENG?i("span",[e._v("Close")]):e._e(),e.isRUS?i("span",[e._v("Закрыть")]):e._e()])],1):i("div",{staticClass:"slider__button slider__button_arrow-left",on:{click:function(t){e.openPrev()}}},[i("md-icon",[e._v("keyboard_arrow_left")]),i("md-tooltip",{attrs:{"md-direction":"bottom","md-delay":"100"}},[e.isENG?i("span",[e._v("To the previous event")]):e._e(),e.isRUS?i("span",[e._v("К предыдущему событию")]):e._e()])],1),i("div",{staticClass:"slider__dots"},e._l(e.events,function(t){return i("div",{key:t.id,staticClass:"slider__button slider__button_dot",class:{slider__button_dot_active:t==e.event_},on:{click:function(i){e.open(t)}}},[i("md-tooltip",{attrs:{"md-direction":"bottom","md-delay":"100"}},[e.isENG?i("span",[e._v(e._s(t.title_short))]):e._e(),e.isRUS?i("span",[e._v(e._s(t.title_short_rus))]):e._e()])],1)})),e.isLast?i("div",{staticClass:"slider__button slider__button_close",on:{click:function(t){e.close()}}},[i("md-icon",[e._v("close")]),i("md-tooltip",{attrs:{"md-direction":"bottom","md-delay":"100"}},[e.isENG?i("span",[e._v("Close")]):e._e(),e.isRUS?i("span",[e._v("Закрыть")]):e._e()])],1):i("div",{staticClass:"slider__button slider__button_arrow-right",on:{click:function(t){e.openNext()}}},[i("md-icon",[e._v("keyboard_arrow_right")]),i("md-tooltip",{attrs:{"md-direction":"bottom","md-delay":"100"}},[e.isENG?i("span",[e._v("To the next event")]):e._e(),e.isRUS?i("span",[e._v("К следующему событию")]):e._e()])],1)]),i("dt-event",{staticClass:"dt-events__event dt-events__event_f",attrs:{ev:e.event_,mod:"f"}})],1):e._e(),e.isEventActive||"c"!=e.mod?e._e():i("div",{staticClass:"dt-events__title"},[e.isENG?i("span",[e._v("Latest events")]):e._e(),e.isRUS?i("span",[e._v("Последние события")]):e._e()]),e._l(e.events,function(t){return e.isEventActive?e._e():i("dt-event",{key:t.id,staticClass:"dt-events__event",class:["dt-events__event_"+e.mod],attrs:{ev:t,mod:e.mod},on:{click:function(i){return e.open(t)}}})})],2)},s=[],a={render:n,staticRenderFns:s};t.a=a},"M/n1":function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"dt-page-index"},[i("div",{staticClass:"dt-page-index__main"},[i("router-link",{staticClass:"dt-page-index__main-image button-shadow3d",attrs:{tag:"a",to:{name:"team",params:{surname:"Cichocki"}}}},[i("dt-figure",{attrs:{src:"head.jpg",alt:"Doctor Andrzej Cichocki",isProgressive:!0}},[i("p",{staticClass:"dt-ink dt-title"},[e.isENG?i("span",[e._v("Doctor Andrzej Cichocki")]):e._e(),e.isRUS?i("span",[e._v("Доктор ф.-м. наук"),i("br"),e._v("Анджей Чихоцкий")]):e._e(),i("br"),e.isENG?i("span",[e._v("Head of the Laboratory")]):e._e(),e.isRUS?i("span",[e._v("Руководитель Лаборатории")]):e._e()])])],1),i("section",{staticClass:"dt-page-index__main-text1"},[i("p",{staticClass:"dt-page-index__text dt-text"},[e.isENG?i("span",[e._v("Laboratory Tensor networks and deep learning for applications in data mining under the guidance of Prof. Andrzej Cichocki on the basis of the "),i("a",{staticClass:"dt-link",attrs:{href:"http://www.skoltech.ru/en/",target:"_blank"}},[e._v("Skolkovo Institute of Science and Technology")]),e._v(" develops new fundamental approaches for training, testing and storing parameters of deep neural networks based on tensor decomposition techniques. These approaches allow to reduce by orders of magnitude computational complexity and required memory for the operation of the network, while maintaining a high quality of prediction.")]):e._e(),e.isRUS?i("span",[e._v("Лаборатория Тензорные сети и глубинное обучение для интеллектуального анализа данных под руководством Проф. Анджея Чихоцкого на базе  "),i("a",{staticClass:"dt-link",attrs:{href:"http://www.skoltech.ru/?lang=ru",target:"_blank"}},[e._v("Сколковского института науки и технологий")]),e._v(" занимается разработкой новых подходов, основанных на тензорных разложениях, для построения, обучения, использования и хранения параметров глубинных нейронных сетей, позволяющих на порядки снизить вычислительную сложность и объемы памяти, требуемые для работы с сетью, при высоком качестве предсказания.")]):e._e()])]),i("section",{staticClass:"dt-page-index__main-text2"},[i("p",{staticClass:"dt-page-index__text dt-text"},[e.isENG?i("span",[e._v("The Laboratory mission is to pursue cutting-edge research in the design and analysis of deep neural networks, tensor decompositions, tensor networks and multiway analysis with many potential practical applications.")]):e._e(),e.isRUS?i("span",[e._v("Основная задача Лаборатории - проведение передовых исследований в области разработки и анализа глубинных нейронных сетей, тензорных разложений, тензорных сетей и многофакторного анализа с большим количеством потенциальных практических применений.")]):e._e()]),i("p",{staticClass:"dt-page-index__text dt-text"},[e.isENG?i("span",[e._v("The Laboratory brings together several professors and young researchers in the fields of machine learning, computer vision, artificial intelligence, robotics, large scale data analysis, mathematics as well as computational neuroscience and bioinformatics.")]):e._e(),e.isRUS?i("span",[e._v("Наш коллектив объединяет профессоров и молодых исследователей, являющихся специалистами мирового уровня в области машинного обучения, компьютерного зрения, искусственного интеллекта, робототехники, анализа больших объемов данных, а также вычислительной математики, нейробиологии и биоинформатики.")]):e._e()])])],1),i("aside",{staticClass:"dt-page-index__aside"},[i("dt-events",{attrs:{mod:"c"}})],1)])},s=[],a={render:n,staticRenderFns:s};t.a=a},MLb3:function(e,t,i){var n=i("hMvJ");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);i("rjj0")("41a5339d",n,!0)},MeAE:function(e,t,i){"use strict";var n=i("h9iF"),s=i("wlsB");t.a={name:"dt-events",mixins:[n.a],components:{"dt-event":s.a},props:{mod:{type:String,enum:["f","m","c"],default:function(e){return"m"}}},data:function(){return{CLASS:"Events",tblNames:["events"],events:[],isEventActive:!1}},computed:{isFirst:function(){var e=this;return 0==this.events.findIndex(function(t){return t==e.event_})},isLast:function(){var e=this;return this.events.findIndex(function(t){return t==e.event_})==this.events.length-1}},created:function(){if(this.DB.events.isReady)return this.parse$("events")},watch:{tblNamesLoaded:function(){if(~this.tblNamesLoaded.indexOf("events"))return this.parse$("events")}},methods:{filter_:function(e){return e.active&&(e.important||"c"!=this.mod)},open:function(e){this.event_=e,this.isEventActive=!!this.event_},openNext:function(){var e=this;if(console.log("TRY"),this.event_){var t=this.events.findIndex(function(t){return t==e.event_});return this.open(this.events[t+1])}},openPrev:function(){var e=this;if(this.event_){var t=this.events.findIndex(function(t){return t==e.event_});return this.open(this.events[t-1])}},close:function(){this.event_=void 0,this.isEventActive=!1}}}},Qzhu:function(e,t,i){t=e.exports=i("FZ+f")(!1),t.push([e.i,"@import url(https://fonts.googleapis.com/css?family=Jura:600|Fira+Sans+Extra+Condensed:400,400i,700|Russo+One);",""]),t.push([e.i,'.dt-figure__text{font-family:Fira Sans Extra Condensed,"sans-serif";font-weight:400;font-size:24px}@media (max-width:1100px){.dt-figure__text{font-size:21px}}@media (max-width:900px){.dt-figure__text{font-size:18px}}@media (max-width:700px){.dt-figure__text{font-size:16px}}.dt-figure__text{font-weight:700}.dt-figure{position:relative;overflow:hidden;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.dt-figure__images{height:100px}.dt-figure__image{display:block;max-width:100%;width:100%;height:auto;border:0 none;margin:0}.dt-figure__image_preview{-webkit-filter:blur(2vw);filter:blur(2vw);-webkit-transform:scale(1.05);transform:scale(1.05)}.dt-figure__text{display:inline-block;-webkit-box-ordinal-group:101;-ms-flex-order:100;order:100;padding:10px 0 8px;text-align:center}img.preview{-webkit-filter:blur(2vw);filter:blur(2vw);-webkit-transform:scale(1.05);transform:scale(1.05)}img.hide{opacity:0}img.origin-scale{position:absolute;left:0;top:0;-webkit-animation:origin-scale 1s ease-out;animation:origin-scale 1s ease-out}@-webkit-keyframes origin-scale{0%{opacity:0}to{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes origin-scale{0%{opacity:0}to{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}',""])},"Tj/V":function(e,t,i){var n=i("Qzhu");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);i("rjj0")("313b04b2",n,!0)},TmV0:function(e,t,i){i("fZOM"),e.exports=i("FeBl").Object.values},Ysb6:function(e,t,i){"use strict";var n=i("pYQl");t.a={name:"dt-figure",props:{src:{type:String,default:function(e){return""}},srcs:{type:Array,default:function(e){return[]}},alt:{type:String,default:function(e){return""}},txt:{type:String,default:function(e){return""}},w:{type:Number,default:function(e){return 200}},isProgressive:{type:Boolean,default:!1}},directives:{progressive:{bind:n.a.init,inserted:n.a.init,update:n.a.init,componentUpdated:n.a.lazy,unbind:n.a.unbind}},computed:{isMulty:function(){return this.srcs_.length>1},src_:function(){return this.src?this.src:this.srcs&&1==this.srcs.length?this.srcs[0]:void 0},srcs_:function(){return this.srcs.length?this.srcs:this.src?[this.src]:[]}},methods:{srcParse:function(e){if(e)return e="pictures/"+e}}}},fZOM:function(e,t,i){var n=i("kM2E"),s=i("mbce")(!1);n(n.S,"Object",{values:function(e){return s(e)}})},gRE1:function(e,t,i){e.exports={default:i("TmV0"),__esModule:!0}},h6n6:function(e,t,i){t=e.exports=i("FZ+f")(!1),t.push([e.i,"@import url(https://fonts.googleapis.com/css?family=Jura:600|Fira+Sans+Extra+Condensed:400,400i,700|Russo+One);",""]),t.push([e.i,'.dt-event{border:4px solid #6b7e51;border-width:4px 0 0}.dt-event__title{font-family:Fira Sans Extra Condensed,"sans-serif";font-weight:400;font-size:24px}@media (max-width:1100px){.dt-event__title{font-size:21px}}@media (max-width:900px){.dt-event__title{font-size:18px}}@media (max-width:700px){.dt-event__title{font-size:16px}}.dt-event__title{font-weight:700}.dt-event{padding:10px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.dt-event_f{padding:10px 30px}.dt-event_m{cursor:pointer}.dt-event__header{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap-reverse;flex-wrap:wrap-reverse;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end}.dt-event__header-image{height:400px}.dt-event__header-image,.dt-event__header-text{-webkit-box-flex:1;-ms-flex:1 1 200px;flex:1 1 200px}.dt-event__header-text{padding:15px}.dt-event__content{height:auto;text-align:justify}.dt-event__footer{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.dt-event__date{color:#6b7e51}.dt-event__title{display:inline-block;padding:10px 0 4px;color:#003a56}.dt-event__title_c{padding:5px;text-decoration:underline;cursor:pointer}.dt-event__title_c:hover{color:#6b7e51;text-decoration:none}.dt-event__title_m{padding:10px}.dt-event__icon{margin:0 15px 0 0}',""])},h9iF:function(e,t,i){"use strict";var n=i("gRE1"),s=i.n(n),a=i("//Fk"),r=i.n(a),o=i("mtWM"),d=i.n(o),l=i("5d6g"),c={team:new l.a("team"),journals:new l.a("journals"),papers:new l.a("papers"),plan:new l.a("plan"),events:new l.a("events")};s()(c).forEach(function(e){e.isReady=!1,e.isLoading=!1}),t.a={data:function(){return{DB:c,isReady:!1,isReadyAll:!1,isLoading:!1,error:void 0,tblNamesLoaded:[]}},created:function(){var e=this;return r.a.all((this.tblNames||[]).map(function(t){return e.download$(t)}))},mounted:function(){},beforeDestroy:function(){},destroyed:function(){},methods:{filter_:function(e){return!0},sort_:function(e){},parse$:function(e){var t=this;return new r.a(function(i){return t.isReady?i():(t.DB[e].rows.forEach(function(i){t.filter_(i)&&t[e].push(i)}),t.sort_(t[e]),t.isReady=!0,t.CS.debug("Parsed",t.CLASS,"parse$"),i())}).catch(function(i){t.error=i,t.CS.err('Error for "'+e+'"',t.CLASS,"parse$",i)})},download$:function(e){var t=this,i=this.DB[e];if(i.isReady||i.isLoading)return this.CS.debug('Table "'+e+'" is already loaded',this.CLASS,"download$"),r.a.resolve();this.CS.debug('Start loading "'+e+'"',this.CLASS,"download$");return i.isReady=!1,i.isLoading=!0,d.a.get("/deep-test/db/"+i.name+".json").then(function(n){return i.parse(n.data),i.isReady=!0,i.isLoading=!1,t.tblNamesLoaded.push(e),t.CS.debug('Table "'+e+'" is loaded',t.CLASS,"download$"),i}).catch(function(i){t.error=i,t.CS.err('Error while loading table "'+e+'"',t.CLASS,"download$",i)})}}}},hMvJ:function(e,t,i){t=e.exports=i("FZ+f")(!1),t.push([e.i,"@import url(https://fonts.googleapis.com/css?family=Jura:600|Fira+Sans+Extra+Condensed:400,400i,700|Russo+One);",""]),t.push([e.i,'.dt-events__title{font-family:Fira Sans Extra Condensed,"sans-serif";font-weight:400;font-size:24px}@media (max-width:1100px){.dt-events__title{font-size:21px}}@media (max-width:900px){.dt-events__title{font-size:18px}}@media (max-width:700px){.dt-events__title{font-size:16px}}.dt-events__title{font-weight:700;line-height:140%;font-size:26px}@media (max-width:1100px){.dt-events__title{font-size:23px}}@media (max-width:900px){.dt-events__title{font-size:20px}}@media (max-width:700px){.dt-events__title{font-size:18px}}.dt-events{-webkit-box-orient:horizontal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-pack:distribute;justify-content:space-around}.dt-events,.dt-events_c{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-direction:normal}.dt-events_c{-webkit-box-orient:vertical;-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}.dt-events__progress{position:absolute;padding:0;margin:0}.dt-events__title{padding:15px 0 10px;color:#003a56}.dt-events__event_f{width:100%;height:100vh}.dt-events__event_m{-webkit-box-flex:1;-ms-flex:1 1 300px;flex:1 1 300px;margin:10px}.dt-events__event_c{margin-bottom:15px}.slider{-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;padding:10px}.slider,.slider__dots{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.slider__dots{-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-pack:distribute;justify-content:space-around;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.slider__button{cursor:pointer}.slider__button_dot{width:10px;height:10px;margin:10px;border:7px solid #6b7e51;border-radius:50%}.slider__button_dot:hover{border:7px solid #003a56}.slider__button_dot_active{border:10px solid #003a56;cursor:default}.slider__button_dot_active:hover{border:10px solid #003a56}',""])},"hYh/":function(e,t,i){var n=i("h6n6");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);i("rjj0")("46b1dfc2",n,!0)},iGko:function(e,t,i){"use strict";function n(e){i("Tj/V")}var s=i("Ysb6"),a=i("otjg"),r=i("VU/8"),o=n,d=r(s.a,a.a,!1,o,null,null);t.a=d.exports},jlbv:function(e,t,i){"use strict";var n=i("iGko"),s=i("6y9t");t.a={name:"dt-page-index",head:function(){return{title:this.isENG?"Home":"Главная",meta:[{hid:"keywords",name:"keywords",content:this.isENG?"Tensor networks, deep learning, neural networks, megagrant, skoltech, Andrzej Cichocki, Ivan Oseledets,  Victor Lempitsky,  Dmitry Vetrov":"Тензорные сети, глубинное обучение, глубокое обучение, нейронные сети, мегагрант, Сколтех, Анджей Чихоцкий, Иван Оселедец, Виктор Лемпицкий, Дмитрий Ветров"},{hid:"description",name:"description",content:this.isENG?"Skoltech | Laboratory of Prof. Andrzej Cichocki | Tensor networks and deep learning for applications in data mining":"Сколтех | Лаборатория Тензорные сети и глубинное обучение для интеллектуального анализа данных под руководством доктора Анджея Чихоцкого"}]}},components:{"dt-figure":n.a,"dt-events":s.a}}},kEqo:function(e,t,i){var n=i("5xGg");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);i("rjj0")("0d79c0ce",n,!0)},oP4k:function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("md-whiteframe",{staticClass:"dt-event",class:["dt-event_"+e.mod],attrs:{"md-tag":"div","md-elevation":"m"==e.mod?10:14},on:{click:function(t){e.click_("object")}}},[i("div",{staticClass:"dt-event__header"},["f"==e.mod&&e.img?i("dt-figure",{staticClass:"dt-event__header-image",attrs:{srcs:e.imgs}}):e._e(),i("div",{staticClass:"dt-event__header-text"},[i("div",{staticClass:"dt-event__date"},[i("md-icon",{staticClass:"dt-event__icon"},[e._v("date_range")]),i("span",[e._v(e._s(e.date))])],1),i("div",{staticClass:"dt-event__title",class:["dt-event__title_"+e.mod],on:{click:function(t){e.click_("title")}}},[e._v(e._s(e.get_("title")))])])],1),"f"==e.mod?i("div",{staticClass:"dt-event__content"},[i("div",{domProps:{innerHTML:e._s(e.get_("description"))}}),i("div",{domProps:{innerHTML:e._s(e.get_("description_sub"))}})]):e._e(),i("div",{staticClass:"dt-event__footer"},[i("div",{staticClass:"dt-event__links"},e._l([e.get_("link1"),e.get_("link2")],function(t,n){return"f"==e.mod&&t?i("md-button",{key:t,staticClass:"dt-event__link"},[i("md-icon",{staticClass:"dt-event__icon"},[e._v("link")]),i("a",{attrs:{href:t,target:"_blank"}},[e._v(e._s(e.get_("link"+(n+1)+"_text")))])],1):e._e()})),"m"==e.mod?i("v-btn",{staticClass:"dt-event__info",on:{click:function(t){e.click_()}}},[e.isENG?i("span",[e._v("More info")]):e._e(),e.isRUS?i("span",[e._v("Подробнее")]):e._e()]):e._e()],1)])},s=[],a={render:n,staticRenderFns:s};t.a=a},otjg:function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"dt-figure",class:{"dt-figure_progressive":e.isProgressive}},[!e.isMulty&&e.src_?i("div",[e.isProgressive?e._e():i("img",{staticClass:"dt-figure__image",attrs:{src:e.srcParse(e.src_),alt:e.alt}}),e.isProgressive?i("img",{directives:[{name:"progressive",rawName:"v-progressive",value:e.srcParse(e.src_),expression:"srcParse(src_)"}],staticClass:"dt-figure__image preview",class:{"dt-figure__image_progressive":e.isProgressive},attrs:{src:e.srcParse(e.src_),alt:e.alt}}):e._e()]):e._e(),e.isMulty?i("v-carousel",{attrs:{icon:"stop"}},e._l(e.srcs,function(e,t){return i("v-carousel-item",{key:t,attrs:{src:e}})})):e._e(),e._t("default",[e.txt?i("div",{staticClass:"dt-figure__text",domProps:{innerHTML:e._s(e.txt)}}):e._e()])],2)},s=[],a={render:n,staticRenderFns:s};t.a=a},pYQl:function(e,t,i){"use strict";function n(){var e=document.createElement("fake"),t={animation:"animationend",OAnimation:"oAnimationEnd",MozAnimation:"animationend",WebkitAnimation:"webkitAnimationEnd"};for(var i in t)if(void 0!==e.style[i])return t[i]}function s(e){var t=new Image;e.el.dataset&&(e.el.dataset.srcset&&(t.srcset=e.el.dataset.srcset),e.el.dataset.sizes&&(t.sizes=e.el.dataset.sizes)),t.src=e.src,t.className=p.scale?"origin-scale":"origin",t.onload=function(){var i=_.indexOf(e);i>=0&&_.splice(i,1),u.push(e.src),x(e,t)},t.onerror=function(){}}function a(e){if(u.indexOf(e.src)>=0)return void e.el.setAttribute("lazy","loaded");var t=e.el.getBoundingClientRect();t.top<window.innerHeight&&t.bottom>0&&t.left<window.innerWidth&&t.right>0&&s(e)}function r(e){var t=!1;return _.forEach(function(i){i.el==e&&(t=!0)}),t&&l(),t}function o(e,t){t?f.forEach(function(t){return e.addEventListener(t,l)}):f.forEach(function(t){return e.removeEventListener(t,l)})}function d(e,t){var i=t.value;if(!r(e)){if(u.indexOf(i)>=0)return void e.setAttribute("lazy","loaded");r(e)||_.push({el:e,src:i}),l(),_.length&&!p.hasBind&&(p.hasBind=!0,o(window,!0))}}function l(){setTimeout(function(e){return _.forEach(function(e){return a(e)})},300)}function c(e){e&&p.hasBind&&(p.hasBind=!1,o(window,!1),_.length=0,u.length=0)}var p={removePreview:!0,scale:!0,hasBind:!1},f=["scroll","wheel","mousewheel","resize"],_=[],u=[],x=function(e,t){var i=e.el,s=i.parentNode;s.appendChild(t).addEventListener(n(),function(e){console.log("anim"),i.alt&&(e.target.alt=i.alt),i.classList.add("hide"),p.removePreview&&(s.removeChild(i),e.target.classList.remove("origin"),e.target.classList.remove("origin-scale"))})};t.a={init:d,lazy:l,unbind:c}},wlsB:function(e,t,i){"use strict";function n(e){i("hYh/")}var s=i("77Ue"),a=i("oP4k"),r=i("VU/8"),o=n,d=r(s.a,a.a,!1,o,null,null);t.a=d.exports}});
//# sourceMappingURL=index.dd387efc07c7452bda36.js.map
(function(t){function e(e){for(var s,r,n=e[0],l=e[1],c=e[2],d=0,p=[];d<n.length;d++)r=n[d],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&p.push(o[r][0]),o[r]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);u&&u(e);while(p.length)p.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],s=!0,n=1;n<a.length;n++){var l=a[n];0!==o[l]&&(s=!1)}s&&(i.splice(e--,1),t=r(r.s=a[0]))}return t}var s={},o={app:0},i=[];function r(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=s,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(a,s,function(e){return t[e]}.bind(null,s));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/trip-cost-calculator-app/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],l=n.push.bind(n);n.push=e,n=n.slice();for(var c=0;c<n.length;c++)e(n[c]);var u=l;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";a("85ec")},"0371":function(t,e,a){"use strict";a("cf29")},"30d9":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("0fb7"),a("450d");var s=a("f529"),o=a.n(s),i=(a("0c67"),a("299c")),r=a.n(i),n=(a("e612"),a("dd87")),l=a.n(n),c=(a("075a"),a("72aa")),u=a.n(c),d=(a("d96c"),a("0c9b")),p=a.n(d),m=(a("fb08"),a("21e5")),f=a.n(m),h=(a("e3ea"),a("7bc3")),b=a.n(h),T=(a("7a0f"),a("0f6c")),C=a.n(T),v=(a("b8e0"),a("a4c4")),x=a.n(v),g=(a("1951"),a("eedf")),j=a.n(g),y=(a("a7cc"),a("df33")),F=a.n(y),D=(a("9d4c"),a("e450")),_=a.n(D),R=(a("5466"),a("ecdf")),$=a.n(R),O=(a("38a0"),a("ad41")),k=a.n(O),w=(a("10cb"),a("f3ad")),S=a.n(w),N=(a("8bd8"),a("4cb2")),E=a.n(N),P=(a("4ca3"),a("443e")),A=a.n(P),M=(a("de31"),a("c69e")),I=a.n(M),H=(a("a673"),a("7b31")),V=a.n(H),G=(a("adec"),a("3d2d")),B=a.n(G),z=(a("4ffc"),a("946e")),J=a.n(z),q=(a("826b"),a("c263")),K=a.n(q),L=(a("f4f9"),a("c2cc")),Q=a.n(L),U=(a("eca7"),a("3787")),W=a.n(U),X=(a("425f"),a("4105")),Y=a.n(X),Z=(a("e260"),a("e6cf"),a("cca6"),a("a79d"),a("2b0e")),tt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("el-container",{attrs:{id:"calculator-container"}},[a("el-main",[a("el-tabs",{attrs:{"before-leave":t.savePreviousTab},model:{value:t.activeTab,callback:function(e){t.activeTab=e},expression:"activeTab"}},[a("el-tab-pane",{attrs:{label:"Trip Cost",name:"tripCost"}},[a("span",{attrs:{slot:"label"},slot:"label"},[a("i",{staticClass:"el-icon-date"}),t._v(" Trip Cost")]),a("calculator-form",{attrs:{rates:t.rates,taxes:t.taxes}})],1),a("el-tab-pane",{attrs:{label:"Adjustment",name:"adjustment"}},[a("span",{attrs:{slot:"label"},slot:"label"},[a("i",{staticClass:"el-icon-refresh-left"}),t._v(" Adjustment")]),a("adjustment-form",{attrs:{rates:t.rates,taxes:t.taxes}})],1),a("el-tab-pane",{attrs:{label:"Rate Settings",name:"rateOptions"}},[a("span",{attrs:{slot:"label"},slot:"label"},[a("i",{staticClass:"el-icon-setting"}),t._v(" Rate Settings")]),a("rate-form",{attrs:{rates:t.rates,taxes:t.taxes},on:{updateRates:t.updateRates}})],1)],1)],1)],1)],1)},et=[],at=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"tip"},[t._v(" Don't forget to click \"Save changes\" to apply any changes you've made to the rates! ")]),a("el-row",{staticClass:"row-bg",attrs:{type:"flex"}},[a("el-form",{ref:"form",attrs:{id:"rates-form",model:t.form,"label-width":"180px","label-position":"left"}},[a("h3",[t._v("Rates")]),a("el-form-item",{attrs:{label:"Minute Rate"}},[a("el-col",{attrs:{span:11}},[a("el-input-number",{attrs:{precision:2,step:.01},model:{value:t.form.minuteRate,callback:function(e){t.$set(t.form,"minuteRate",e)},expression:"form.minuteRate"}})],1)],1),a("el-form-item",{attrs:{label:"Hourly Rate"}},[a("el-col",{attrs:{span:11}},[a("el-input-number",{attrs:{precision:2,step:.01},model:{value:t.form.hourRate,callback:function(e){t.$set(t.form,"hourRate",e)},expression:"form.hourRate"}})],1)],1),a("el-form-item",{attrs:{label:"Daily Rate"}},[a("el-col",{attrs:{span:11}},[a("el-input-number",{attrs:{precision:2,step:.01},model:{value:t.form.dayRate,callback:function(e){t.$set(t.form,"dayRate",e)},expression:"form.dayRate"}})],1)],1),a("el-form-item",{attrs:{label:"PVRT"}},[a("el-col",{attrs:{span:11}},[a("el-input-number",{attrs:{precision:2,step:.1},model:{value:t.form.pvrtRate,callback:function(e){t.$set(t.form,"pvrtRate",e)},expression:"form.pvrtRate"}})],1)],1),a("el-form-item",{attrs:{label:"Access Fee"}},[a("el-col",{attrs:{span:11}},[a("el-input-number",{attrs:{precision:2,step:.1},model:{value:t.form.accessFee,callback:function(e){t.$set(t.form,"accessFee",e)},expression:"form.accessFee"}})],1)],1),a("el-divider"),a("h3",[t._v("Taxes")]),a("el-form-item",{attrs:{label:"GST (%)"}},[a("el-col",{attrs:{span:11}},[a("el-input-number",{attrs:{precision:2,step:.1},model:{value:t.form.gst,callback:function(e){t.$set(t.form,"gst",e)},expression:"form.gst"}})],1)],1),a("el-form-item",{attrs:{label:"PST (%)"}},[a("el-col",{attrs:{span:11}},[a("el-input-number",{attrs:{precision:2,step:.1},model:{value:t.form.pst,callback:function(e){t.$set(t.form,"pst",e)},expression:"form.pst"}})],1)],1),a("el-button",{on:{click:t.reset}},[t._v("Reset rates")]),a("el-button",{attrs:{type:"primary"},on:{click:t.confirm}},[t._v("Save changes")])],1)],1)],1)},st=[],ot=(a("a9e3"),{name:"RateForm",props:{rates:{minuteRate:Number,hourRate:Number,dayRate:Number,pvrtRate:Number,accessFee:Number},taxes:{gst:Number,pst:Number}},data:function(){return{form:{gst:this.taxes.gst,pst:this.taxes.pst,minuteRate:this.rates.minuteRate,hourRate:this.rates.hourRate,dayRate:this.rates.dayRate,pvrtRate:this.rates.pvrtRate,accessFee:this.rates.accessFee}}},methods:{reset:function(){this.form.gst=parseFloat("5"),this.form.pst=parseFloat("7"),this.form.minuteRate=parseFloat("0.45"),this.form.hourRate=parseFloat("16.99"),this.form.dayRate=parseFloat("99.99"),this.form.pvrtRate=parseFloat("1.50"),this.form.accessFee=parseFloat("1.00"),this.updateRates(!0)},confirm:function(){this.updateRates()},updateRates:function(t){var e={taxes:{gst:this.form.gst,pst:this.form.pst},rates:{minuteRate:this.form.minuteRate,hourRate:this.form.hourRate,dayRate:this.form.dayRate,pvrtRate:this.form.pvrtRate,accessFee:this.form.accessFee},isReset:t};this.$emit("updateRates",e)}}}),it=ot,rt=(a("0371"),a("2877")),nt=Object(rt["a"])(it,at,st,!1,null,"75844045",null),lt=nt.exports,ct=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("h2",[t._v("Calculate Trip Cost")])]),a("el-form",{ref:"form",attrs:{model:t.form,"label-width":"120px","label-position":"left"}},[a("el-form-item",{attrs:{label:"Start Time"}},[a("el-col",{attrs:{span:11}},[a("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"Pick a date"},on:{change:t.getTripCost},model:{value:t.form.startDate,callback:function(e){t.$set(t.form,"startDate",e)},expression:"form.startDate"}}),a("el-button",{attrs:{type:"text"},on:{click:function(e){return t.resetTime("start")}}},[t._v(" Set To Current Date/Time ")])],1),a("el-col",{attrs:{span:11,offset:1}},[a("el-input",{staticClass:"time-input",staticStyle:{width:"100%"},attrs:{type:"time","prefix-icon":"el-icon-time"},on:{change:t.getTripCost},model:{value:t.form.startTime,callback:function(e){t.$set(t.form,"startTime",e)},expression:"form.startTime"}})],1)],1),a("el-form-item",{attrs:{label:"End Time"}},[a("el-col",{attrs:{span:11}},[a("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"Pick a date"},on:{change:t.getTripCost},model:{value:t.form.endDate,callback:function(e){t.$set(t.form,"endDate",e)},expression:"form.endDate"}}),a("el-button",{attrs:{type:"text"},on:{click:function(e){return t.resetTime("end")}}},[t._v(" Set To Current Date/Time ")])],1),a("el-col",{attrs:{span:11,offset:1}},[a("el-input",{staticClass:"time-input",staticStyle:{width:"100%"},attrs:{type:"time","prefix-icon":"el-icon-time",controls:"false"},on:{change:t.getTripCost},model:{value:t.form.endTime,callback:function(e){t.$set(t.form,"endTime",e)},expression:"form.endTime"}})],1)],1)],1),a("el-divider"),a("div",{attrs:{id:"cost-breakdown-header"}},[a("h3",[t._v("Breakdown")])]),a("el-descriptions",{staticClass:"margin-top",attrs:{column:1,size:"medium",border:""}},[a("el-descriptions-item",[a("template",{slot:"label"},[a("i",{staticClass:"el-icon-time"}),t._v(" Trip Duration ")]),t._v(" "+t._s(t.trip.days+(1==t.trip.days?" Day, ":" Days, ")+t.trip.hours+(1==t.trip.hours?" Hour, ":" Hours, ")+t.trip.minutes+(1==t.trip.minutes?" Minute":" Minutes"))+" ")],2)],1),a("breakdown-table",{attrs:{tableData:t.tableData}})],1)},ut=[],dt=(a("fb6a"),a("b680"),a("99af"),a("07ac"),a("a2b9")),pt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("table",{attrs:{id:"breakdown-table"}},[t._l(t.tableData,(function(e){return["Subtotal"==e.name?[a("tr",{key:e.id,staticClass:"subtotal-row"},[a("td",[t._v(t._s(e.name))]),e.tooltip?a("el-tooltip",{attrs:{effect:"dark",content:e.tooltip,placement:"right"}},[a("td",[t._v(t._s(e.value))])]):a("td",[t._v(t._s(e.value))])],1)]:"Total Cost"==e.name?[a("tr",{key:e.id,staticClass:"total-row"},[a("td",[t._v(t._s(e.name))]),e.tooltip?a("el-tooltip",{attrs:{effect:"dark",content:e.tooltip,placement:"right"}},[a("td",[t._v(t._s(e.value))])]):a("td",[t._v(t._s(e.value))])],1)]:[a("tr",{key:e.id},[a("td",[t._v(t._s(e.name))]),e.tooltip?a("el-tooltip",{attrs:{effect:"dark",content:e.tooltip,placement:"right"}},[a("td",[t._v(t._s(e.value))])]):a("td",[t._v(t._s(e.value))])],1)]]}))],2)},mt=[],ft={name:"BreakdownTable",props:{tableData:Array}},ht=ft,bt=(a("5c98"),Object(rt["a"])(ht,pt,mt,!1,null,null,null)),Tt=bt.exports,Ct={name:"CalculatorForm",components:{BreakdownTable:Tt},props:{rates:{minuteRate:Number,hourRate:Number,dayRate:Number,pvrtRate:Number,accessFee:Number},taxes:{gst:Number,pst:Number}},watch:{rates:function(){this.totalCost=Object(dt["calculateTripCost"])(this.rates,this.taxes,this.trip)}},data:function(){return{showHeader:!1,form:{startDate:Date(),startTime:Object(dt["getCurrentTime"])(),endDate:Date(),endTime:Object(dt["getCurrentTime"])()},totalCost:{tripCost:0,taxOnTripCost:0,pvrtCost:0,taxOnPvrt:0,accessFeeCost:0,taxOnAccessFee:0}}},methods:{getTripCost:function(){this.totalCost=Object(dt["calculateTripCost"])(this.rates,this.taxes,this.trip)},resetTime:function(t){var e=new Date;"start"==t?(this.form.startTime=Object(dt["getCurrentTime"])(),this.form.startDate=e):(this.form.endTime=Object(dt["getCurrentTime"])(),this.form.endDate=e),this.totalCost=Object(dt["calculateTripCost"])(this.rates,this.taxes,this.trip)},highlightTotals:function(t){var e=t.rowIndex;return 2===e?"subtotal-row":7===e?"total-row":""}},computed:{trip:function(){var t=new Date(this.form.startDate);t.setHours(parseInt(this.form.startTime.slice(0,2)),parseInt(this.form.startTime.slice(3)),0,0);var e=new Date(this.form.endDate);e.setHours(parseInt(this.form.endTime.slice(0,2)),parseInt(this.form.endTime.slice(3)),0,0);var a={startTime:t,endTime:e,days:0,hours:0,minutes:0,pvrtDays:0};return a=Object(dt["calculateTripDuration"])(a),console.log(a),a},tableData:function(){var t=[{id:0,name:"Trip Cost",value:"$"+this.totalCost.tripCost.toFixed(2),tooltip:"".concat(this.trip.days," day(s) x $").concat(this.rates.dayRate,"\n              + ").concat(this.trip.hours," hour(s) x $").concat(this.rates.hourRate,"\n              + ").concat(this.trip.minutes," minute(s) x $").concat(this.rates.minuteRate)},{id:1,name:"Tax on Trip Cost",value:"$"+this.totalCost.taxOnTripCost.toFixed(2),tooltip:"$".concat((this.totalCost.tripCost*(this.taxes.gst/100)).toFixed(2)," GST\n              + $").concat((this.totalCost.tripCost*(this.taxes.pst/100)).toFixed(2)," PST")},{id:2,name:"Subtotal",value:"$"+(this.totalCost.tripCost+this.totalCost.taxOnTripCost).toFixed(2),tooltip:"$".concat(this.totalCost.tripCost.toFixed(2)," + $").concat(this.totalCost.taxOnTripCost.toFixed(2))},{id:3,name:"PVRT",value:"$"+this.totalCost.pvrtCost.toFixed(2),tooltip:"".concat(this.trip.pvrtDays," calendar days x $").concat(this.rates.pvrtRate)},{id:4,name:"Tax on PVRT",value:"$"+this.totalCost.taxOnPvrt.toFixed(2),tooltip:"$".concat(this.totalCost.pvrtCost.toFixed(2)," x ").concat(this.taxes.gst,"% GST")},{id:5,name:"Access Fee",value:"$"+this.totalCost.accessFeeCost.toFixed(2)},{id:6,name:"Tax on Access Fee",value:"$"+this.totalCost.taxOnAccessFee.toFixed(2),tooltip:"$".concat((this.totalCost.accessFeeCost*(this.taxes.gst/100)).toFixed(2)," GST\n              + $").concat((this.totalCost.accessFeeCost*(this.taxes.pst/100)).toFixed(2)," PST")},{id:7,name:"Total Cost",value:"$"+Object.values(this.totalCost).reduce((function(t,e){return t+e})).toFixed(2)}];return t}}},vt=Ct,xt=(a("f7cd"),Object(rt["a"])(vt,ct,ut,!1,null,null,null)),gt=xt.exports,jt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("h2",[t._v("Calculate Adjustment")])]),a("el-form",{ref:"form",attrs:{model:t.form,"label-width":"140px","label-position":"left"}},[a("el-form-item",{attrs:{label:"Start Time"}},[a("el-col",{attrs:{span:11}},[a("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"Pick a date"},on:{change:t.updateCosts},model:{value:t.form.startDate,callback:function(e){t.$set(t.form,"startDate",e)},expression:"form.startDate"}}),a("el-button",{attrs:{type:"text"},on:{click:function(e){return t.resetTime("start")}}},[t._v(" Set To Current Date/Time ")])],1),a("el-col",{attrs:{span:11,offset:1}},[a("el-input",{staticClass:"time-input",staticStyle:{width:"100%"},attrs:{type:"time","prefix-icon":"el-icon-time"},on:{change:t.updateCosts},model:{value:t.form.startTime,callback:function(e){t.$set(t.form,"startTime",e)},expression:"form.startTime"}})],1)],1),a("el-form-item",{attrs:{label:"Original End Time"}},[a("el-col",{attrs:{span:11}},[a("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"Pick a date"},on:{change:t.updateCosts},model:{value:t.form.originalEndDate,callback:function(e){t.$set(t.form,"originalEndDate",e)},expression:"form.originalEndDate"}}),a("el-button",{attrs:{type:"text"},on:{click:function(e){return t.resetTime("original")}}},[t._v(" Set To Current Date/Time ")])],1),a("el-col",{attrs:{span:11,offset:1}},[a("el-input",{staticClass:"time-input",staticStyle:{width:"100%"},attrs:{type:"time","prefix-icon":"el-icon-time",controls:"false"},on:{change:t.updateCosts},model:{value:t.form.originalEndTime,callback:function(e){t.$set(t.form,"originalEndTime",e)},expression:"form.originalEndTime"}})],1)],1),a("el-form-item",{attrs:{label:"Adjusted End Time"}},[a("el-col",{attrs:{span:11}},[a("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"Pick a date"},on:{change:t.updateCosts},model:{value:t.form.adjustedEndDate,callback:function(e){t.$set(t.form,"adjustedEndDate",e)},expression:"form.adjustedEndDate"}}),a("el-button",{attrs:{type:"text"},on:{click:function(e){return t.resetTime("adjusted")}}},[t._v(" Set To Current Date/Time ")])],1),a("el-col",{attrs:{span:11,offset:1}},[a("el-input",{staticClass:"time-input",staticStyle:{width:"100%"},attrs:{type:"time","prefix-icon":"el-icon-time",controls:"false"},on:{change:t.updateCosts},model:{value:t.form.adjustedEndTime,callback:function(e){t.$set(t.form,"adjustedEndTime",e)},expression:"form.adjustedEndTime"}})],1)],1)],1),a("el-divider"),a("div",{attrs:{id:"adjustment-breakdown-header"}},[a("h3",[t._v("Details")]),a("div",{attrs:{id:"action-buttons"}},[a("el-tooltip",{attrs:{effect:"dark",content:"View detailed cost breakdown",placement:"top"}},[a("el-button",{attrs:{icon:"el-icon-view"},on:{click:t.openModal}})],1),a("el-tooltip",{attrs:{effect:"dark",content:"Copy information for ticket",placement:"top"}},[a("el-button",{attrs:{icon:"el-icon-document-copy"},on:{click:t.copyTicketInfo}})],1)],1)]),a("el-descriptions",{staticClass:"margin-top",attrs:{column:1,size:"medium",border:""}},[a("el-descriptions-item",[a("template",{slot:"label"},[a("i",{staticClass:"el-icon-time"}),t._v(" Original Duration ")]),t._v(" "+t._s(t.originalTrip.days+(1==t.originalTrip.days?" Day, ":" Days, ")+t.originalTrip.hours+(1==t.originalTrip.hours?" Hour, ":" Hours, ")+t.originalTrip.minutes+(1==t.originalTrip.minutes?" Minute":" Minutes"))+" ")],2),a("el-descriptions-item",[a("template",{slot:"label"},[a("i",{staticClass:"el-icon-time"}),t._v(" Adjusted Duration ")]),t._v(" "+t._s(t.adjustedTrip.days+(1==t.adjustedTrip.days?" Day, ":" Days, ")+t.adjustedTrip.hours+(1==t.adjustedTrip.hours?" Hour, ":" Hours, ")+t.adjustedTrip.minutes+(1==t.adjustedTrip.minutes?" Minute":" Minutes"))+" ")],2)],1),a("el-table",{staticClass:"cost-table",attrs:{data:t.tableData,"show-header":t.showHeader,id:"cost-table","row-class-name":t.highlightTotals}},[a("el-table-column",{attrs:{prop:"name"}}),a("el-table-column",{attrs:{prop:"value",align:"right"}})],1),a("comparison-modal",{attrs:{isVisible:t.modalIsVisible,originalCosts:t.originalTotalCost,originalDuration:t.originalTrip,adjustedCosts:t.adjustedTotalCost,adjustedDuration:t.adjustedTrip,rates:t.rates,taxes:t.taxes},on:{closeModal:t.closeModal}})],1)},yt=[],Ft=a("cdf8"),Dt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-dialog",{attrs:{visible:t.isVisible,"before-close":t.handleClose},on:{"update:visible":function(e){t.isVisible=e}}},[a("comparison-table",{attrs:{tableData:t.tableData}})],1)},_t=[],Rt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("table",{attrs:{id:"comparison-table"}},[t._m(0),t._l(t.tableData,(function(e){return["Subtotal"==e.name?[a("tr",{key:e.id,staticClass:"subtotal-row"},[a("td",[t._v(t._s(e.name))]),e.originalTooltip?a("el-tooltip",{attrs:{effect:"dark",content:e.originalTooltip,placement:"top"}},[a("td",[t._v(t._s(e.original))])]):a("td",[t._v(t._s(e.original))]),e.adjustedTooltip?a("el-tooltip",{attrs:{effect:"dark",content:e.adjustedTooltip,placement:"top"}},[a("td",[t._v(t._s(e.adjusted))])]):a("td",[t._v(t._s(e.adjusted))])],1)]:"Total Cost"==e.name?[a("tr",{key:e.id,staticClass:"total-row"},[a("td",[t._v(t._s(e.name))]),e.originalTooltip?a("el-tooltip",{attrs:{effect:"dark",content:e.originalTooltip,placement:"top"}},[a("td",[t._v(t._s(e.original))])]):a("td",[t._v(t._s(e.original))]),e.adjustedTooltip?a("el-tooltip",{attrs:{effect:"dark",content:e.adjustedTooltip,placement:"top"}},[a("td",[t._v(t._s(e.adjusted))])]):a("td",[t._v(t._s(e.adjusted))])],1)]:[a("tr",{key:e.id},[a("td",[t._v(t._s(e.name))]),e.originalTooltip?a("el-tooltip",{attrs:{effect:"dark",content:e.originalTooltip,placement:"top"}},[a("td",[t._v(t._s(e.original))])]):a("td",[t._v(t._s(e.original))]),e.adjustedTooltip?a("el-tooltip",{attrs:{effect:"dark",content:e.adjustedTooltip,placement:"top"}},[a("td",[t._v(t._s(e.adjusted))])]):a("td",[t._v(t._s(e.adjusted))])],1)]]}))],2)},$t=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",[a("th"),a("th",[t._v("Original Trip")]),a("th",[t._v("Adjusted Trip")])])}],Ot={name:"ComparisonTable",props:{tableData:Array}},kt=Ot,wt=(a("9fe9"),Object(rt["a"])(kt,Rt,$t,!1,null,null,null)),St=wt.exports,Nt={name:"ComparisonModal",components:{ComparisonTable:St},props:{isVisible:Boolean,rates:{minuteRate:Number,hourRate:Number,dayRate:Number,pvrtRate:Number,accessFee:Number},taxes:{gst:Number,pst:Number},originalCosts:{tripCost:Number,taxOnTripCost:Number,pvrtCost:Number,taxOnPvrt:Number,accessFeeCost:Number,taxOnAccessFee:Number},adjustedCosts:{tripCost:Number,taxOnTripCost:Number,pvrtCost:Number,taxOnPvrt:Number,accessFeeCost:Number,taxOnAccessFee:Number},originalDuration:{days:Date,hours:Date,minutes:Date,pvrtDays:Date},adjustedDuration:{days:Date,hours:Date,minutes:Date,pvrtDays:Date}},methods:{handleClose:function(){this.$emit("closeModal")}},computed:{tableData:function(){var t=[{id:0,name:"Trip Cost",original:"$"+this.originalCosts.tripCost.toFixed(2),adjusted:"$"+this.adjustedCosts.tripCost.toFixed(2),originalTooltip:"".concat(this.originalDuration.days," day(s) x $").concat(this.rates.dayRate,"\n                    + ").concat(this.originalDuration.hours," hour(s) x $").concat(this.rates.hourRate,"\n                    + ").concat(this.originalDuration.minutes," minute(s) x $").concat(this.rates.minuteRate),adjustedTooltip:"".concat(this.adjustedDuration.days," day(s) x $").concat(this.rates.dayRate,"\n                    + ").concat(this.adjustedDuration.hours," hour(s) x $").concat(this.rates.hourRate,"\n                    + ").concat(this.adjustedDuration.minutes," minute(s) x $").concat(this.rates.minuteRate)},{id:1,name:"Tax on Trip Cost",original:"$"+this.originalCosts.taxOnTripCost.toFixed(2),adjusted:"$"+this.adjustedCosts.taxOnTripCost.toFixed(2),originalTooltip:"$".concat((this.originalCosts.tripCost*(this.taxes.gst/100)).toFixed(2)," GST\n                    + $").concat((this.originalCosts.tripCost*(this.taxes.pst/100)).toFixed(2)," PST"),adjustedTooltip:"$".concat((this.adjustedCosts.tripCost*(this.taxes.gst/100)).toFixed(2)," GST\n                    + $").concat((this.adjustedCosts.tripCost*(this.taxes.pst/100)).toFixed(2)," PST")},{id:2,name:"Subtotal",original:"$"+(this.originalCosts.tripCost+this.originalCosts.taxOnTripCost).toFixed(2),adjusted:"$"+(this.adjustedCosts.tripCost+this.adjustedCosts.taxOnTripCost).toFixed(2),originalTooltip:"$".concat(this.originalCosts.tripCost.toFixed(2)," + $").concat(this.originalCosts.taxOnTripCost.toFixed(2)),adjustedTooltip:"$".concat(this.adjustedCosts.tripCost.toFixed(2)," + $").concat(this.adjustedCosts.taxOnTripCost.toFixed(2))},{id:3,name:"PVRT",original:"$"+this.originalCosts.pvrtCost.toFixed(2),adjusted:"$"+this.adjustedCosts.pvrtCost.toFixed(2),originalTooltip:"".concat(this.originalDuration.pvrtDays," calendar days x $").concat(this.rates.pvrtRate),adjustedTooltip:"".concat(this.adjustedDuration.pvrtDays," calendar days x $").concat(this.rates.pvrtRate)},{id:4,name:"Tax on PVRT",original:"$"+this.originalCosts.taxOnPvrt.toFixed(2),adjusted:"$"+this.adjustedCosts.taxOnPvrt.toFixed(2),originalTooltip:"$".concat(this.originalCosts.pvrtCost.toFixed(2)," x ").concat(this.taxes.gst,"% GST"),adjustedTooltip:"$".concat(this.adjustedCosts.pvrtCost.toFixed(2)," x ").concat(this.taxes.gst,"% GST")},{id:5,name:"Access Fee",original:"$"+this.originalCosts.accessFeeCost.toFixed(2),adjusted:"$"+this.adjustedCosts.accessFeeCost.toFixed(2)},{id:6,name:"Tax on Access Fee",original:"$"+this.originalCosts.taxOnAccessFee.toFixed(2),adjusted:"$"+this.adjustedCosts.taxOnAccessFee.toFixed(2),originalTooltip:"$".concat((this.originalCosts.accessFeeCost*(this.taxes.gst/100)).toFixed(2)," GST\n                    + $").concat((this.originalCosts.accessFeeCost*(this.taxes.pst/100)).toFixed(2)," PST"),adjustedTooltip:"$".concat((this.originalCosts.accessFeeCost*(this.taxes.gst/100)).toFixed(2)," GST\n                    + $").concat((this.adjustedCosts.accessFeeCost*(this.taxes.pst/100)).toFixed(2)," PST")},{id:7,name:"Total Cost",original:"$"+Object.values(this.originalCosts).reduce((function(t,e){return t+e})).toFixed(2),adjusted:"$"+Object.values(this.adjustedCosts).reduce((function(t,e){return t+e})).toFixed(2)}];return t}}},Et=Nt,Pt=Object(rt["a"])(Et,Dt,_t,!1,null,null,null),At=Pt.exports,Mt={name:"AdjustmentForm",components:{ComparisonModal:At},props:{rates:{minuteRate:Number,hourRate:Number,dayRate:Number,pvrtRate:Number,accessFee:Number},taxes:{gst:Number,pst:Number}},watch:{rates:function(){this.updateCosts()}},data:function(){return{showHeader:!1,modalIsVisible:!1,form:{startDate:Date(),startTime:Object(dt["getCurrentTime"])(),originalEndDate:Date(),originalEndTime:Object(dt["getCurrentTime"])(),adjustedEndDate:Date(),adjustedEndTime:Object(dt["getCurrentTime"])()},originalTotalCost:{tripCost:0,taxOnTripCost:0,pvrtCost:0,taxOnPvrt:0,accessFeeCost:0,taxOnAccessFee:0},adjustedTotalCost:{tripCost:0,taxOnTripCost:0,pvrtCost:0,taxOnPvrt:0,accessFeeCost:0,taxOnAccessFee:0}}},methods:{openModal:function(){this.modalIsVisible=!0},closeModal:function(){this.modalIsVisible=!1},copyTicketInfo:function(){Object(Ft["copyText"])()},updateCosts:function(){this.originalTotalCost=0,this.adjustedTotalCost=0,this.originalTotalCost=Object(dt["calculateTripCost"])(this.rates,this.taxes,this.originalTrip),this.adjustedTotalCost=Object(dt["calculateTripCost"])(this.rates,this.taxes,this.adjustedTrip)},highlightTotals:function(t){var e=t.rowIndex;return 2===e?"total-row":""},resetTime:function(t){var e=new Date;"start"==t?(this.form.startTime=Object(dt["getCurrentTime"])(),this.form.startDate=e):"original"==t?(this.form.originalEndTime=Object(dt["getCurrentTime"])(),this.form.originalEndDate=e):"adjusted"==t&&(this.form.adjustedEndTime=Object(dt["getCurrentTime"])(),this.form.adjustedEndDate=e),this.updateCosts()},setTrip:function(t,e,a,s){var o=new Date(t);o.setHours(parseInt(e.slice(0,2)),parseInt(e.slice(3)),0,0);var i=new Date(a);i.setHours(parseInt(s.slice(0,2)),parseInt(s.slice(3)),0,0);var r={startTime:o,endTime:i,days:0,hours:0,minutes:0,pvrtDays:0};return r=Object(dt["calculateTripDuration"])(r),r}},computed:{originalTrip:function(){return this.setTrip(this.form.startDate,this.form.startTime,this.form.originalEndDate,this.form.originalEndTime)},adjustedTrip:function(){return this.setTrip(this.form.startDate,this.form.startTime,this.form.adjustedEndDate,this.form.adjustedEndTime)},originalTotalCostSum:function(){return Object.values(this.originalTotalCost).reduce((function(t,e){return t+e}))},adjustedTotalCostSum:function(){return Object.values(this.adjustedTotalCost).reduce((function(t,e){return t+e}))},costDifference:function(){return(this.adjustedTotalCostSum.toFixed(2)-this.originalTotalCostSum.toFixed(2)).toFixed(2)},tableData:function(){var t=[{name:"Total Cost Before Adjustment",value:"$"+this.originalTotalCostSum.toFixed(2)},{name:"Total Cost After Adjustment",value:"$"+this.adjustedTotalCostSum.toFixed(2)},{name:"Adjustment",value:this.costDifference>=0?"$"+this.costDifference:"-$"+Math.abs(this.costDifference).toFixed(2)}];return t}}},It=Mt,Ht=(a("d7bb"),Object(rt["a"])(It,jt,yt,!1,null,null,null)),Vt=Ht.exports,Gt={name:"App",components:{CalculatorForm:gt,AdjustmentForm:Vt,RateForm:lt},data:function(){return{activeTab:"tripCost",previousTab:"tripCost",taxes:{gst:parseFloat("5"),pst:parseFloat("7")},rates:{minuteRate:parseFloat("0.45"),hourRate:parseFloat("16.99"),dayRate:parseFloat("99.99"),pvrtRate:parseFloat("1.50"),accessFee:parseFloat("1.00")}}},methods:{savePreviousTab:function(t,e){this.previousTab=e},updateRates:function(t){this.taxes=t.taxes,this.rates=t.rates,this.openMessage(),t.isReset||(this.activeTab=this.previousTab)},openMessage:function(){this.$message({message:"Rate changes saved.",type:"success",duration:2e3})}}},Bt=Gt,zt=(a("034f"),Object(rt["a"])(Bt,tt,et,!1,null,null,null)),Jt=zt.exports,qt=a("8c4f"),Kt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-col",{attrs:{offset:4,span:16}},[a("calculator-form")],1)],1)},Lt=[],Qt={name:"TripCostCalculator",components:{CalculatorForm:gt}},Ut=Qt,Wt=Object(rt["a"])(Ut,Kt,Lt,!1,null,null,null),Xt=Wt.exports,Yt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-col",{attrs:{offset:4,span:16}},[a("adjustment-form")],1)],1)},Zt=[],te={name:"AdjsutmentCalculator",components:{AdjustmentForm:Vt}},ee=te,ae=Object(rt["a"])(ee,Yt,Zt,!1,null,null,null),se=ae.exports;Z["default"].use(qt["a"]);var oe=[{path:"/",name:"TripCostCalculator",component:Xt},{path:"/adjustment",name:"AdjustmentCalculator",component:se}],ie=new qt["a"]({mode:"history",base:"/trip-cost-calculator-app/",routes:oe});ie.beforeEach((function(t,e,a){document.title="Trip Cost Calculator",a()}));var re=ie,ne=a("b2d6"),le=a.n(ne),ce=a("4897"),ue=a.n(ce);ue.a.use(le.a),Z["default"].config.productionTip=!1,Z["default"].use(Y.a),Z["default"].use(W.a),Z["default"].use(Q.a),Z["default"].use(K.a),Z["default"].use(J.a),Z["default"].use(B.a),Z["default"].use(V.a),Z["default"].use(I.a),Z["default"].use(A.a),Z["default"].use(E.a),Z["default"].use(S.a),Z["default"].use(k.a),Z["default"].use($.a),Z["default"].use(_.a),Z["default"].use(F.a),Z["default"].use(j.a),Z["default"].use(x.a),Z["default"].use(C.a),Z["default"].use(b.a),Z["default"].use(f.a),Z["default"].use(p.a),Z["default"].use(u.a),Z["default"].use(l.a),Z["default"].use(r.a),Z["default"].prototype.$message=o.a,new Z["default"]({router:re,render:function(t){return t(Jt)}}).$mount("#app")},"5c98":function(t,e,a){"use strict";a("5f7d")},"5f7d":function(t,e,a){},"74eb":function(t,e,a){},"85ec":function(t,e,a){},"9fe9":function(t,e,a){"use strict";a("74eb")},a2b9:function(t,e,a){function s(){var t=new Date,e=t.getHours().toString(),a=t.getMinutes().toString();return"".concat(e.padStart(2,"0"),":").concat(a.padStart(2,"0"))}function o(t,e,a){var s=0,o=0;s+=a.days*t.dayRate,a.hours>=6?s+=t.dayRate:(s+=a.hours*t.hourRate,a.minutes>36?s+=t.hourRate:s+=a.minutes*t.minuteRate),s>0&&(o=t.accessFee);var r=i(t,a),l=n(s,[e.pst,e.gst]),c=n(r,[e.gst]),u=n(o,[e.pst,e.gst]),d={tripCost:s,taxOnTripCost:l,pvrtCost:r,taxOnPvrt:c,accessFeeCost:o,taxOnAccessFee:u};return d}function i(t,e){var a=e.pvrtDays*t.pvrtRate;return a}function r(t){var e=0,a=1440*t.days+60*t.hours+t.minutes;return a>480&&(e=Math.ceil(a/1440)),e}function n(t,e){var a=e.reduce((function(t,e){return t+e}));return t*a/100}function l(t){var e=t.endTime-t.startTime;if(e<0)return t;var a=Math.floor(e/864e5),s=Math.floor(e/36e5)-24*a,o=Math.floor(e/6e4)-24*a*60-60*s;t["days"]=a,t["hours"]=s,t["minutes"]=o;var i=r(t);return t["pvrtDays"]=i,t}a("d3b7"),a("25f0"),a("99af"),a("4d90"),t.exports={calculateTripCost:o,calculateTripDuration:l,getCurrentTime:s}},b678:function(t,e,a){},cdf8:function(t,e){function a(){var t,e,a=document.getElementById("cost-table"),s=document.body;if(document.createRange&&window.getSelection){t=document.createRange(),e=window.getSelection(),e.removeAllRanges();try{t.selectNodeContents(a),e.addRange(t)}catch(o){t.selectNode(a),e.addRange(t)}document.execCommand("copy")}else s.createTextRange&&(t=s.createTextRange(),t.moveToElementText(a),t.select(),t.execCommand("Copy"))}t.exports={copyText:a}},cf29:function(t,e,a){},d7bb:function(t,e,a){"use strict";a("30d9")},f7cd:function(t,e,a){"use strict";a("b678")}});
//# sourceMappingURL=app.57de01ad.js.map
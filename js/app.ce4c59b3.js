(function(t){function e(e){for(var r,o,n=e[0],l=e[1],u=e[2],m=0,d=[];m<n.length;m++)o=n[m],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&d.push(s[o][0]),s[o]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);c&&c(e);while(d.length)d.shift()();return i.push.apply(i,u||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],r=!0,n=1;n<a.length;n++){var l=a[n];0!==s[l]&&(r=!1)}r&&(i.splice(e--,1),t=o(o.s=a[0]))}return t}var r={},s={app:0},i=[];function o(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=r,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(a,r,function(e){return t[e]}.bind(null,r));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/trip-cost-calculator-app/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],l=n.push.bind(n);n.push=e,n=n.slice();for(var u=0;u<n.length;u++)e(n[u]);var c=l;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";a("85ec")},"30d9":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("7a0f"),a("450d");var r=a("0f6c"),s=a.n(r),i=(a("b8e0"),a("a4c4")),o=a.n(i),n=(a("1951"),a("eedf")),l=a.n(n),u=(a("a7cc"),a("df33")),c=a.n(u),m=(a("9d4c"),a("e450")),d=a.n(m),p=(a("5466"),a("ecdf")),f=a.n(p),h=(a("38a0"),a("ad41")),g=a.n(h),T=(a("10cb"),a("f3ad")),b=a.n(T),v=(a("8bd8"),a("4cb2")),D=a.n(v),C=(a("4ca3"),a("443e")),x=a.n(C),y=(a("de31"),a("c69e")),R=a.n(y),F=(a("a673"),a("7b31")),j=a.n(F),w=(a("adec"),a("3d2d")),$=a.n(w),k=(a("4ffc"),a("946e")),E=a.n(k),_=(a("826b"),a("c263")),S=a.n(_),P=(a("f4f9"),a("c2cc")),A=a.n(P),M=(a("eca7"),a("3787")),O=a.n(M),H=(a("425f"),a("4105")),V=a.n(H),I=(a("e260"),a("e6cf"),a("cca6"),a("a79d"),a("2b0e")),N=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{attrs:{id:"nav"}},[a("el-menu",{attrs:{"default-active":"1",mode:"horizontal","background-color":"#001529","text-color":"rgba(255, 255, 255, 0.65)","active-text-color":"#fff"}},[a("el-menu-item",{attrs:{index:"1"}},[a("router-link",{attrs:{to:"/calculator"}},[t._v("Cost Calculator")])],1),a("el-menu-item",{staticClass:"setting-button",on:{click:t.openSettingsDialog}},[a("i",{staticClass:"el-icon-setting setting-icon"})])],1)],1),a("el-card",[a("el-container",[a("el-main",[a("router-view")],1)],1)],1),a("rate-options-modal",{attrs:{isVisible:t.settingDialogIsVisible},on:{closeDialog:function(e){t.settingDialogIsVisible=!1}}})],1)},B=[],J=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-dialog",{attrs:{title:"Change Default Values",visible:t.isVisible,width:"30%"},on:{close:t.cancel}},[a("span",[a("el-row",{staticClass:"row-bg",attrs:{type:"flex",justify:"center"}},[a("el-form",{ref:"form",attrs:{model:t.form,"label-width":"180px","label-position":"left"}},[a("el-form-item",{attrs:{label:"Minute Rate"}},[a("el-col",{attrs:{span:11}},[a("el-input-number",{attrs:{precision:2,step:.01},model:{value:t.form.minuteRate,callback:function(e){t.$set(t.form,"minuteRate",e)},expression:"form.minuteRate"}})],1)],1),a("el-form-item",{attrs:{label:"Hourly Rate"}},[a("el-col",{attrs:{span:11}},[a("el-input-number",{attrs:{precision:2,step:.01},model:{value:t.form.hourRate,callback:function(e){t.$set(t.form,"hourRate",e)},expression:"form.hourRate"}})],1)],1),a("el-form-item",{attrs:{label:"Daily Rate"}},[a("el-col",{attrs:{span:11}},[a("el-input-number",{attrs:{precision:2,step:.01},model:{value:t.form.dayRate,callback:function(e){t.$set(t.form,"dayRate",e)},expression:"form.dayRate"}})],1)],1),a("el-form-item",{attrs:{label:"GST"}},[a("el-col",{attrs:{span:11}},[a("el-input-number",{attrs:{precision:2,step:.1},model:{value:t.form.gst,callback:function(e){t.$set(t.form,"gst",e)},expression:"form.gst"}})],1)],1),a("el-form-item",{attrs:{label:"PST"}},[a("el-col",{attrs:{span:11}},[a("el-input-number",{attrs:{precision:2,step:.1},model:{value:t.form.pst,callback:function(e){t.$set(t.form,"pst",e)},expression:"form.pst"}})],1)],1),a("el-form-item",{attrs:{label:"PVRT"}},[a("el-col",{attrs:{span:11}},[a("el-input-number",{attrs:{precision:2,step:.1},model:{value:t.form.pvrt,callback:function(e){t.$set(t.form,"pvrt",e)},expression:"form.pvrt"}})],1)],1),a("el-form-item",{attrs:{label:"Access Fee"}},[a("el-col",{attrs:{span:11}},[a("el-input-number",{attrs:{precision:2,step:.1},model:{value:t.form.accessFee,callback:function(e){t.$set(t.form,"accessFee",e)},expression:"form.accessFee"}})],1)],1)],1)],1)],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:t.cancel}},[t._v("Cancel")]),a("el-button",{attrs:{type:"primary"},on:{click:t.confirm}},[t._v("Confirm")])],1)])},z=[],G={name:"RateOptionsModal",props:{isVisible:Boolean},data:function(){return{form:{gst:parseFloat("5"),pst:parseFloat("7"),minuteRate:parseFloat("0.45"),hourRate:parseFloat("16.99"),dayRate:parseFloat("99.99"),pvrt:parseFloat("1.50"),accessFee:parseFloat("1.00")}}},methods:{cancel:function(){this.$emit("closeDialog")},confirm:function(){var t={gst:this.form.gst,pst:this.form.pst,minuteRate:this.form.minuteRate,hourRate:this.form.hourRate,dayRate:this.form.dayRate,pvrt:this.form.pvrt,accessFee:this.form.accessFee};this.$root.$emit("changeValues",t),this.$emit("closeDialog")},changeValue:function(t){this.$root.$emit("changeValue",t)}}},q=G,K=a("2877"),L=Object(K["a"])(q,J,z,!1,null,null,null),Q=L.exports,U={name:"App",components:{RateOptionsModal:Q},data:function(){return{settingDialogIsVisible:!1}},methods:{openSettingsDialog:function(){this.settingDialogIsVisible=!0}}},W=U,X=(a("034f"),Object(K["a"])(W,N,B,!1,null,null,null)),Y=X.exports,Z=a("8c4f"),tt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-row",[a("el-col",{attrs:{span:8,offset:2}},[a("calculator-form")],1),a("el-col",{attrs:{span:8,offset:2}},[a("adjustment-form")],1)],1)],1)},et=[],at=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("h2",[t._v("Calculate Trip Cost")])]),a("el-form",{ref:"form",attrs:{model:t.form,"label-width":"120px","label-position":"left"}},[a("el-form-item",{attrs:{label:"Start Time"}},[a("el-col",{attrs:{span:11}},[a("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"Pick a date"},on:{change:t.getTripCost},model:{value:t.form.startDate,callback:function(e){t.$set(t.form,"startDate",e)},expression:"form.startDate"}}),a("el-button",{attrs:{type:"text"},on:{click:function(e){return t.setToCurrentTime("start")}}},[t._v(" Set To Current Date/Time ")])],1),a("el-col",{attrs:{span:11,offset:1}},[a("el-input",{staticClass:"time-input",staticStyle:{width:"100%"},attrs:{type:"time","prefix-icon":"el-icon-time"},on:{change:t.getTripCost},model:{value:t.form.startTime,callback:function(e){t.$set(t.form,"startTime",e)},expression:"form.startTime"}})],1)],1),a("el-form-item",{attrs:{label:"End Time"}},[a("el-col",{attrs:{span:11}},[a("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"Pick a date"},on:{change:t.getTripCost},model:{value:t.form.endDate,callback:function(e){t.$set(t.form,"endDate",e)},expression:"form.endDate"}}),a("el-button",{attrs:{type:"text"},on:{click:function(e){return t.setToCurrentTime("end")}}},[t._v(" Set To Current Date/Time ")])],1),a("el-col",{attrs:{span:11,offset:1}},[a("el-input",{staticClass:"time-input",staticStyle:{width:"100%"},attrs:{type:"time","prefix-icon":"el-icon-time",controls:"false"},on:{change:t.getTripCost},model:{value:t.form.endTime,callback:function(e){t.$set(t.form,"endTime",e)},expression:"form.endTime"}})],1)],1)],1),a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v("Cost Breakdown")])]),t._v(" Trip Duration: "+t._s(t.tripDuration.days+(1==t.tripDuration.days?" Day, ":" Days, ")+t.tripDuration.hours+(1==t.tripDuration.hours?" Hour, ":" Hours, ")+t.tripDuration.minutes+(1==t.tripDuration.minutes?" Minute":" Minutes"))+" "),a("el-table",{staticClass:"cost-table",attrs:{data:t.tableData,"row-class-name":t.highlightTotals}},[a("el-table-column",{attrs:{prop:"name"}}),a("el-table-column",{attrs:{prop:"value",align:"right"}})],1)],1)],1)},rt=[],st=(a("a9e3"),a("d3b7"),a("25f0"),a("99af"),a("fb6a"),a("b680"),{name:"CalculatorForm",data:function(){return{dayDifference:0,hourDifference:0,minuteDifference:0,gst:Number,pst:Number,minuteRate:Number,hourRate:Number,dayRate:Number,pvrt:Number,accessFee:Number,form:{startDate:Date(),startTime:"",endDate:Date(),endTime:""},tripCost:0,taxTripCost:0,incurredPvrt:0,taxPVRT:0,incurredAccessFee:0,taxAccessFee:0}},mounted:function(){var t=this;this.setToCurrentTime("start"),this.setToCurrentTime("end"),this.gst=parseFloat("5"),this.pst=parseFloat("7"),this.minuteRate=parseFloat("0.45"),this.hourRate=parseFloat("16.99"),this.dayRate=parseFloat("99.99"),this.pvrt=parseFloat("1.50"),this.accessFee=parseFloat("1.00"),this.$root.$on("changeValues",(function(e){t.gst=e.gst,t.pst=e.pst,t.minuteRate=e.minuteRate,t.hourRate=e.hourRate,t.dayRate=e.dayRate,t.pvrt=e.pvrt,t.accessFee=e.accessFee,t.getTripCost()}))},methods:{getTripCost:function(){var t=0;t+=this.tripDuration.days*this.dayRate,this.tripDuration.hours>=6?t+=this.dayRate:(t+=this.tripDuration.hours*this.hourRate,this.tripDuration.minutes>36?t+=this.hourRate:t+=this.tripDuration.minutes*this.minuteRate),this.tripCost=t,this.incurredAccessFee=this.accessFee,this.calculatePvrt(),this.calculateTax()},calculatePvrt:function(){if(this.tripDuration.hours>=8){var t=new Date(this.form.startDate);t.setHours(0,0,0);var e=new Date(this.form.endDate);e.setHours(0,0,0);var a=Math.floor((e-t)/864e5);this.incurredPvrt=(a+1)*this.pvrt}else this.incurredPvrt=0},calculateTax:function(){this.taxTripCost=this.tripCost*(this.pst+this.gst)/100,this.taxPVRT=this.incurredPvrt*this.pst/100,this.taxAccessFee=this.incurredAccessFee*(this.pst+this.gst)/100},highlightTotals:function(t){var e=t.rowIndex;return 2===e?"subtotal-row":7===e?"total-row":""},setToCurrentTime:function(t){var e=new Date,a="",r="";a=1==e.getMinutes().toString().length?"0".concat(e.getMinutes()):"".concat(e.getMinutes()),r=1==e.getHours().toString().length?"0".concat(e.getHours()):"".concat(e.getHours()),"start"==t?(this.form.startTime="".concat(r,":").concat(a),this.form.startDate=Date()):(this.form.endTime="".concat(r,":").concat(a),this.form.endDate=Date()),this.getTripCost()}},computed:{tripDuration:function(){var t=new Date(this.form.startDate);t.setHours(parseInt(this.form.startTime.slice(0,2)),parseInt(this.form.startTime.slice(3)),0);var e=new Date(this.form.endDate);e.setHours(parseInt(this.form.endTime.slice(0,2)),parseInt(this.form.endTime.slice(3)),0);var a=e-t,r=Math.floor(a/864e5),s=Math.floor(a/36e5)-24*r,i=Math.floor(a/6e4)-24*r*60-60*s,o={days:r,hours:s,minutes:i};return o},tableData:function(){var t=[{name:"Trip Cost",value:this.tripCost>0?"$"+this.tripCost.toFixed(2):"$0.00"},{name:"Tax on trip cost",value:this.tripCost>0?"$"+this.taxTripCost.toFixed(2):"$0.00"},{name:"Subtotal",value:this.tripCost>0?"$"+(this.tripCost+this.taxTripCost).toFixed(2):"$0.00"},{name:"PVRT",value:this.tripCost>0?"$"+this.incurredPvrt.toFixed(2):"$0.00"},{name:"Tax on PVRT",value:this.tripCost>0?"$"+this.taxPVRT.toFixed(2):"$0.00"},{name:"Access Fee",value:this.tripCost>0?"$"+this.incurredAccessFee.toFixed(2):"$0.00"},{name:"Tax on Access Fee",value:this.tripCost>0?"$"+this.taxAccessFee.toFixed(2):"$0.00"},{name:"Total Cost",value:this.tripCost>0?"$"+(this.tripCost+this.taxTripCost+this.incurredPvrt+this.taxPVRT+this.incurredAccessFee+this.taxAccessFee).toFixed(2):"$0.00"}];return t}}}),it=st,ot=(a("f7cd"),Object(K["a"])(it,at,rt,!1,null,null,null)),nt=ot.exports,lt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("h2",[t._v("Adjustment")])]),a("el-form",{ref:"form",attrs:{model:t.form,"label-width":"140px","label-position":"left"}},[a("el-form-item",{attrs:{label:"Start Time"}},[a("el-col",{attrs:{span:11}},[a("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"Pick a date"},on:{change:t.getTripCost},model:{value:t.form.startDate,callback:function(e){t.$set(t.form,"startDate",e)},expression:"form.startDate"}}),a("el-button",{attrs:{type:"text"},on:{click:function(e){return t.setToCurrentTime("start")}}},[t._v(" Set To Current Date/Time ")])],1),a("el-col",{attrs:{span:11,offset:1}},[a("el-input",{staticClass:"time-input",staticStyle:{width:"100%"},attrs:{type:"time","prefix-icon":"el-icon-time"},on:{change:t.getTripCost},model:{value:t.form.startTime,callback:function(e){t.$set(t.form,"startTime",e)},expression:"form.startTime"}})],1)],1),a("el-form-item",{attrs:{label:"Original End Time"}},[a("el-col",{attrs:{span:11}},[a("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"Pick a date"},on:{change:t.getTripCost},model:{value:t.form.originalEndDate,callback:function(e){t.$set(t.form,"originalEndDate",e)},expression:"form.originalEndDate"}}),a("el-button",{attrs:{type:"text"},on:{click:function(e){return t.setToCurrentTime("original")}}},[t._v(" Set To Current Date/Time ")])],1),a("el-col",{attrs:{span:11,offset:1}},[a("el-input",{staticClass:"time-input",staticStyle:{width:"100%"},attrs:{type:"time","prefix-icon":"el-icon-time",controls:"false"},on:{change:t.getTripCost},model:{value:t.form.originalEndTime,callback:function(e){t.$set(t.form,"originalEndTime",e)},expression:"form.originalEndTime"}})],1)],1),a("el-form-item",{attrs:{label:"Adjusted End Time"}},[a("el-col",{attrs:{span:11}},[a("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"Pick a date"},on:{change:t.getTripCost},model:{value:t.form.adjustedEndDate,callback:function(e){t.$set(t.form,"adjustedEndDate",e)},expression:"form.adjustedEndDate"}}),a("el-button",{attrs:{type:"text"},on:{click:function(e){return t.setToCurrentTime("adjusted")}}},[t._v(" Set To Current Date/Time ")])],1),a("el-col",{attrs:{span:11,offset:1}},[a("el-input",{staticClass:"time-input",staticStyle:{width:"100%"},attrs:{type:"time","prefix-icon":"el-icon-time",controls:"false"},on:{change:t.getTripCost},model:{value:t.form.adjustedEndTime,callback:function(e){t.$set(t.form,"adjustedEndTime",e)},expression:"form.adjustedEndTime"}})],1)],1)],1),a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v("Cost Breakdown")]),a("el-button",{staticStyle:{float:"right",padding:"3px 0"},attrs:{type:"text"},on:{click:t.copyInfo}},[t._v(" Copy Ticket Information ")])],1),t._v(" Original Duration: "+t._s(t.originalTripDuration.days+(1==t.originalTripDuration.days?" Day, ":" Days, ")+t.originalTripDuration.hours+(1==t.originalTripDuration.hours?" Hour, ":" Hours, ")+t.originalTripDuration.minutes+(1==t.originalTripDuration.minutes?" Minute":" Minutes"))+" "),a("br"),a("br"),t._v(" New Duration: "+t._s(t.adjustedTripDuration.days+(1==t.adjustedTripDuration.days?" Day, ":" Days, ")+t.adjustedTripDuration.hours+(1==t.adjustedTripDuration.hours?" Hour, ":" Hours, ")+t.adjustedTripDuration.minutes+(1==t.adjustedTripDuration.minutes?" Minute":" Minutes"))+" "),a("el-table",{staticClass:"cost-table",attrs:{data:t.tableData,id:"cost-table","row-class-name":t.highlightTotals}},[a("el-table-column",{attrs:{prop:"name"}}),a("el-table-column",{attrs:{prop:"value",align:"right"}})],1)],1)],1)},ut=[],ct={name:"AdjustmentForm",data:function(){return{dayDifference:0,hourDifference:0,minuteDifference:0,gst:Number,pst:Number,minuteRate:Number,hourRate:Number,dayRate:Number,pvrt:Number,accessFee:Number,form:{startDate:Date(),startTime:"",originalEndDate:Date(),originalEndTime:"",adjustedEndDate:Date(),adjustedEndTime:""},tripCost:0,taxTripCost:0,incurredPvrt:0,taxPVRT:0,incurredAccessFee:0,taxAccessFee:0}},mounted:function(){var t=this;this.setToCurrentTime("start"),this.setToCurrentTime("original"),this.setToCurrentTime("adjusted"),this.gst=parseFloat("5"),this.pst=parseFloat("7"),this.minuteRate=parseFloat("0.45"),this.hourRate=parseFloat("16.99"),this.dayRate=parseFloat("99.99"),this.pvrt=parseFloat("1.50"),this.accessFee=parseFloat("1.00"),this.$root.$on("changeValues",(function(e){t.gst=e.gst,t.pst=e.pst,t.minuteRate=e.minuteRate,t.hourRate=e.hourRate,t.dayRate=e.dayRate,t.pvrt=e.pvrt,t.accessFee=e.accessFee,t.getTripCost()}))},methods:{getTripCost:function(t,e,a){if(a){if(a.minutes<0||a.hours<0||a.days<0)return"0.00";if(a.minutes>0||a.hours>0||a.days>0){var r=0;r+=a.days*this.dayRate,a.hours>=6?r+=this.dayRate:(r+=a.hours*this.hourRate,a.minutes>36?r+=this.hourRate:r+=a.minutes*this.minuteRate);var s=this.accessFee,i=this.calculatePvrt(t,e,a),o=this.calculateTax(r,s,i);return(r+s+i+o).toFixed(2)}}return"0.00"},calculatePvrt:function(t,e,a){var r=0;if(a.hours>=8){var s=new Date(t);s.setHours(0,0,0);var i=new Date(e);i.setHours(0,0,0);var o=Math.floor((i-s)/864e5);r=(o+1)*this.pvrt}else r=0;return r},calculateTax:function(t,e,a){var r=0;return r+=t*(this.pst+this.gst)/100,r+=a*this.pst/100,r+=e*(this.pst+this.gst)/100,r},highlightTotals:function(t){var e=t.rowIndex;return 2===e?"total-row":""},getTripDuration:function(t,e,a,r){var s=new Date(t);s.setHours(parseInt(e.slice(0,2)),parseInt(e.slice(3)),0);var i=new Date(a);i.setHours(parseInt(r.slice(0,2)),parseInt(r.slice(3)),0);var o=i-s,n=Math.floor(o/864e5),l=Math.floor(o/36e5)-24*n,u=Math.floor(o/6e4)-24*n*60-60*l,c={days:n,hours:l,minutes:u};return c},setToCurrentTime:function(t){var e=new Date,a="",r="";a=1==e.getMinutes().toString().length?"0".concat(e.getMinutes()):"".concat(e.getMinutes()),r=1==e.getHours().toString().length?"0".concat(e.getHours()):"".concat(e.getHours()),"start"==t?(this.form.startTime="".concat(r,":").concat(a),this.form.startDate=Date(),this.getTripCost(this.startDate,this.originalEndDate,this.originalTripDuration)):"original"==t?(this.form.originalEndTime="".concat(r,":").concat(a),this.form.originalEndDate=Date(),this.getTripCost(this.startDate,this.originalEndDate,this.originalTripDuration)):"adjusted"==t&&(this.form.adjustedEndTime="".concat(r,":").concat(a),this.form.adjustedEndDate=Date(),this.getTripCost(this.startDate,this.originalEndDate,this.adjustedTripDuration))},copyInfo:function(){var t,e,a=document.getElementById("cost-table"),r=document.body;if(document.createRange&&window.getSelection){t=document.createRange(),e=window.getSelection(),e.removeAllRanges();try{t.selectNodeContents(a),e.addRange(t)}catch(s){t.selectNode(a),e.addRange(t)}document.execCommand("copy")}else r.createTextRange&&(t=r.createTextRange(),t.moveToElementText(a),t.select(),t.execCommand("Copy"))}},computed:{originalTripDuration:function(){return this.getTripDuration(this.form.startDate,this.form.startTime,this.form.originalEndDate,this.form.originalEndTime)},adjustedTripDuration:function(){return this.getTripDuration(this.form.startDate,this.form.startTime,this.form.adjustedEndDate,this.form.adjustedEndTime)},tableData:function(){var t=this.getTripCost(this.startDate,this.originalEndDate,this.originalTripDuration),e=this.getTripCost(this.startDate,this.originalEndDate,this.adjustedTripDuration),a=[{name:"Total Cost Before Adjustment",value:"$"+t},{name:"Total Cost After Adjustment",value:"$"+e},{name:"Adjustment",value:"$"+(e-t).toFixed(2)}];return a}}},mt=ct,dt=(a("d7bb"),Object(K["a"])(mt,lt,ut,!1,null,null,null)),pt=dt.exports,ft={name:"CostCalculator",components:{CalculatorForm:nt,AdjustmentForm:pt}},ht=ft,gt=Object(K["a"])(ht,tt,et,!1,null,null,null),Tt=gt.exports,bt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-col",{attrs:{offset:4,span:16}},[a("calculator-form")],1)],1)},vt=[],Dt={name:"TripCostCalculator",components:{CalculatorForm:nt}},Ct=Dt,xt=Object(K["a"])(Ct,bt,vt,!1,null,null,null),yt=xt.exports,Rt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-col",{attrs:{offset:4,span:16}},[a("adjustment-form")],1)],1)},Ft=[],jt={name:"AdjsutmentCalculator",components:{AdjustmentForm:pt}},wt=jt,$t=Object(K["a"])(wt,Rt,Ft,!1,null,null,null),kt=$t.exports;I["default"].use(Z["a"]);var Et=[{path:"/",name:"CalculatorDashboard",component:Tt},{path:"/trip-cost",name:"TripCostCalculator",component:yt},{path:"/adjustment",name:"AdjustmentCalculator",component:kt}],_t=new Z["a"]({mode:"history",base:"/trip-cost-calculator-app/",routes:Et});_t.beforeEach((function(t,e,a){document.title="Trip Cost Calculator",a()}));var St=_t;I["default"].config.productionTip=!1,I["default"].use(V.a),I["default"].use(O.a),I["default"].use(A.a),I["default"].use(S.a),I["default"].use(E.a),I["default"].use($.a),I["default"].use(j.a),I["default"].use(R.a),I["default"].use(x.a),I["default"].use(D.a),I["default"].use(b.a),I["default"].use(g.a),I["default"].use(f.a),I["default"].use(d.a),I["default"].use(c.a),I["default"].use(l.a),I["default"].use(o.a),I["default"].use(s.a),new I["default"]({router:St,render:function(t){return t(Y)}}).$mount("#app")},"85ec":function(t,e,a){},b678:function(t,e,a){},d7bb:function(t,e,a){"use strict";a("30d9")},f7cd:function(t,e,a){"use strict";a("b678")}});
//# sourceMappingURL=app.ce4c59b3.js.map
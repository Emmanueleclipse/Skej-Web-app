(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6264b672"],{"377d":function(t,e,a){},"44ce":function(t,e,a){"use strict";var s=a("b17e"),r=a.n(s);r.a},b17e:function(t,e,a){},f080:function(t,e,a){"use strict";var s=a("377d"),r=a.n(s);r.a},fb34:function(t,e,a){"use strict";a.r(e);for(var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"w-calendar-page"},[a("v-container",{staticClass:"px-0 pt-0",attrs:{fluid:""}},[a("v-row",{attrs:{"no-gutters":""}},[a("v-col",{attrs:{cols:"12",md:"8"}},[a("div",{staticClass:"section-1 scroll-section"},[a("v-toolbar",{attrs:{flat:"",dense:"",height:"72",color:"skej-grey-background"}},[a("v-btn",{attrs:{default:"",to:{name:"calendar"}}},[a("v-icon",[t._v("mdi-arrow-left")])],1),a("v-spacer"),a("v-btn",{attrs:{fab:"",text:"",small:"",color:"grey darken-2"},on:{click:t.prev}},[a("v-icon",{attrs:{small:""}},[t._v("mdi-chevron-left")])],1),a("v-toolbar-title",[a("h3",{staticClass:"font-weight-medium"},[t._v(t._s(t.title))])]),a("v-btn",{attrs:{fab:"",text:"",small:"",color:"grey darken-2"},on:{click:t.next}},[a("v-icon",{attrs:{small:""}},[t._v("mdi-chevron-right")])],1),a("v-spacer"),a("div",{attrs:{id:"color-bar"}},[a("div",{class:["event-color",t.event_colors["type1"],t.active_types.includes("type1")?"":"inactive"],on:{click:function(e){return t.toggleEventTypeActive("type1")}}}),a("div",{class:["event-color",t.event_colors["type2"],t.active_types.includes("type2")?"":"inactive"],on:{click:function(e){return t.toggleEventTypeActive("type2")}}}),a("div",{class:["event-color",t.event_colors["type3"],t.active_types.includes("type3")?"":"inactive"],on:{click:function(e){return t.toggleEventTypeActive("type3")}}}),a("div",{class:["event-color",t.event_colors["type4"],t.active_types.includes("type4")?"":"inactive"],on:{click:function(e){return t.toggleEventTypeActive("type4")}}})])],1),a("v-divider"),a("v-row",{attrs:{"no-gutters":""}},[a("v-col",{attrs:{cols:"1"}},[a("v-list",{staticClass:"mt-12 pt-8",attrs:{flat:"",disabled:"","single-line":""}},t._l(t.hours,(function(e){return a("div",{key:"hour-"+e.hr},[e.hr>=t.day_start?a("v-list-item",{staticClass:"px-0"},[a("v-card",{attrs:{flat:"",tile:""}},[a("v-card-text",{staticClass:"font-weight-bold py-0 pr-0"},[a("div",{staticClass:"hrstart pr-4"},[t._v(" "+t._s(e.hr)+":00 ")]),a("div",{staticClass:"hr15 text--disabled"},[t._v(" 15 ")]),a("div",{staticClass:"hr30 text--disabled"},[t._v(" 30 ")]),a("div",{staticClass:"hr45 text--disabled"},[t._v(" 45 ")])])],1)],1):t._e()],1)})),0)],1),a("v-col",{attrs:{cols:"11"}},[a("v-calendar",{ref:"week_calendar",attrs:{type:"week",locale:t.$i18n.locale+"-"+t.localStorage.country,"event-more":!1,"interval-height":64,"first-interval":t.day_start},on:{change:t.updateRange},scopedSlots:t._u([{key:"interval",fn:function(e){var s=e.date,r=e.hour;return[r<=24&&r>=t.day_start?a("div",{staticClass:"hour-interval"},t._l(t.getInterval(s,r),(function(e,n){return a("div",{key:"interval-"+n+"-"+s+"-"+r},[a("div",{class:["quarter-hour","pl-1",e.label_hour===r&&"start"===e.label_quarter?"":"transparent-text"]},[a("div",{class:["vertical-dash",e.quarters.includes("start")?t.event_colors[e.type]:""]}),t.active_types.includes(e.type)?a("span",{staticClass:"pl-1"},[t._v(t._s(e.name))]):t._e()]),a("div",{class:["quarter-hour","pl-1",e.label_hour===r&&"quarter"===e.label_quarter?"":"transparent-text"]},[a("div",{class:["vertical-dash",e.quarters.includes("quarter")?t.event_colors[e.type]:""]}),t.active_types.includes(e.type)?a("span",{staticClass:"pl-1"},[t._v(t._s(e.name))]):t._e()]),a("div",{class:["quarter-hour","pl-1",e.label_hour===r&&"half"===e.label_quarter?"":"transparent-text"]},[a("div",{class:["vertical-dash",e.quarters.includes("half")?t.event_colors[e.type]:""]}),t.active_types.includes(e.type)?a("span",{staticClass:"pl-1"},[t._v(t._s(e.name))]):t._e()]),a("div",{class:["quarter-hour","pl-1",e.label_hour===r&&"quarter_til"===e.label_quarter?"":"transparent-text"]},[a("div",{class:["vertical-dash",e.quarters.includes("quarter_til")?t.event_colors[e.type]:""]}),t.active_types.includes(e.type)?a("span",{staticClass:"pl-1"},[t._v(t._s(e.name))]):t._e()])])})),0):t._e()]}}]),model:{value:t.focus,callback:function(e){t.focus=e},expression:"focus"}})],1)],1)],1)]),a("v-col",{attrs:{cols:"12",md:"4"}},[a("div",{staticClass:"section-2 scroll-section"},[a("v-toolbar",{staticClass:"group-toolbar skej-grey-background flex-none",attrs:{flat:"",height:"72"}},[a("v-toolbar-title",{staticClass:"ml-2"},[a("h3",{staticClass:"font-weight-medium"},[t._v("Upcoming Events")])])],1),a("v-divider"),a("div",{staticClass:"pt-2 pl-2 pt-lg-8 pl-lg-12"},t._l(t.upcomingEvents,(function(e,s){return a("div",{key:"upcoming"+s,staticClass:"d-flex pr-lg-7 my-2",staticStyle:{height:"55px"}},[a("div",{class:["vertical-dash","mx-1",t.event_colors[e.type]]}),a("v-card",{staticClass:"mr-4 my-2 d-inline skej-grey-background",attrs:{flat:"",tile:""}},[a("v-card-text",{staticClass:"font-weight-medium px-1 py-2"},[t.active_types.includes(e.type)?a("span",[t._v(t._s(e.name))]):t._e()])],1),a("v-spacer"),a("v-card",{staticClass:"d-inline skej-grey-background my-2",attrs:{flat:"",tile:""}},[a("v-card-text",{staticClass:"px-1 py-2 text--disabled"},[t._v(t._s(e.start)+" | "+t._s(e.end))])],1)],1)})),0)],1)])],1)],1),a("new-items-widget")],1)},r=[],n=(a("99af"),a("caad"),a("c975"),a("fb6a"),a("a434"),a("b0c0"),a("b64b"),a("ac1f"),a("2532"),a("1276"),a("b85c")),i=[],l={},c=1;c<25;c++)i.push({hr:c,start:!1,quarter:!1,half:!1,quarter_til:!1,event_name:"",event_color:"",label_quarter:!1,label_hour:0});l.hours=i;var o={name:"weekCalendar",data:function(){return{start:null,end:null,focus:(new Date).toISOString().substring(0,10),events:[],intervals:{},active_types:["type1","type2","type3","type4"],event_colors:{type1:"cyan",type2:"green",type3:"orange",type4:"red"},names:["Holiday","PTO","Travel","Event","Birthday","Conference","Party"],upcomingEvents:[],wkStartDates:[],hours:l.hours,day_start:7}},computed:{title:function(){var t=this.start,e=this.end;if(!t||!e)return"";var a=this.getMonth(t.month),s=this.getMonth(e.month),r=a===s?"":s;return r.length?"".concat(a," ").concat(t.day," - ").concat(r," ").concat(e.day):"".concat(a," ").concat(t.day," - ").concat(e.day)}},methods:{setToday:function(){this.focus=this.today},prev:function(){this.$refs.week_calendar.prev()},next:function(){this.$refs.week_calendar.next()},nth:function(t){return t>3&&t<21?"th":["th","st","nd","rd","th","th","th","th","th","th"][t%10]},getMonth:function(t){var e=["January","February","March","April","May","June","July","August","September","October","November","December"];return e[t-1]},updateRange:function(t){var e=t.start,a=t.end;this.intervals={},this.wkStartDates=[];for(var s=[],r=new Date("".concat(e.date,"T07:00:00")),i=new Date("".concat(a.date,"T23:59:59")),l=(i.getTime()-r.getTime())/864e5,c=this.rnd(l,l+5),o=0;o<c;o++){var u=0===this.rnd(0,1),v=this.rnd(r.getTime(),i.getTime()),d=new Date(v-v%9e5),h=9e5*this.rnd(2,u?288:8),p=new Date(d.getTime()+h);s.push({name:this.names[this.rnd(0,this.names.length-1)],start:this.formatDate(d,!u),end:this.formatDate(p,!u),type:Object.keys(this.event_colors)[this.rnd(0,3)],midpoint:this.getEventMidpoint(d,p),allDay:u})}this.start=e,this.end=a,this.events=s,this.buildIntervals(s);var f,y=new Date,_=10,g=Object(n["a"])(this.events);try{for(g.s();!(f=g.n()).done;){var m=f.value,b=new Date(m.start);b>y&&this.upcomingEvents.length<_&&this.upcomingEvents.push(m)}}catch(q){g.e(q)}finally{g.f()}},rnd:function(t,e){return Math.floor((e-t+1)*Math.random())+t},formatDate:function(t,e){return e?"".concat(t.getFullYear(),"-").concat(("0"+(t.getMonth()+1)).slice(-2),"-").concat(("0"+t.getDate()).slice(-2)," ").concat(t.getHours(),":").concat(("0"+t.getMinutes()).slice(-2)):"".concat(t.getFullYear(),"-").concat(("0"+(t.getMonth()+1)).slice(-2),"-").concat(("0"+t.getDate()).slice(-2))},getDatesInRange:function(t,e){var a=[],s=!1;while(!s){var r=t;r.setDate(r.getDate()+1),a.push(this.formatDate(new Date(r),!0).split(" ")[0]),r>=e&&(s=!0)}return a},getDayEvents:function(t){var e=this.days[t];return void 0===e?[]:e},roundToQuarterHour:function(t){var e=new Date(t);return e.setMinutes(15*Math.round(e.getMinutes()/15)),{hour:e.getHours(),minutes:e.getMinutes()}},getEventMidpoint:function(t,e){var a=e-t,s=Math.floor(a/1e3/60/2),r=new Date(t);r.setMinutes(t.getMinutes()+s);var n=this.roundToQuarterHour(r);return r.setHours(n.hour),r.setMinutes(n.minutes),this.formatDate(r,!0)},buildIntervals:function(t){var e,a=Object(n["a"])(t);try{for(a.s();!(e=a.n()).done;){var s=e.value;if(!s.allDay){for(var r=s.start.split(" ")[0],i=s.end.split(" ")[0],l=parseInt(s.start.split(" ")[1].split(":")[0]),c=parseInt(s.start.split(" ")[1].split(":")[1]),o=parseInt(s.end.split(" ")[1].split(":")[0]),u=parseInt(s.end.split(" ")[1].split(":")[1]),v=[],d=0;d<o-l;d++)v.push(l+d);u>0&&v.push(o);var h="start",p=new Date(s.midpoint),f=p.getMinutes();0===f&&(h="start"),15===f&&(h="quarter"),30===f&&(h="half"),45===f&&(h="quarter_til");for(var y=0,_=v;y<_.length;y++){var g=_[y],m={type:s.type,name:s.name,label_hour:p.getHours(),label_quarter:h,quarters:[]};g===l?(0===c&&m.quarters.push("start"),c<=15&&m.quarters.push("quarter"),c<=30&&m.quarters.push("half"),c<=45&&m.quarters.push("quarter_til"),this.intervals["".concat(r,"-").concat(g)]=m):g===o?(u>0&&m.quarters.push("start"),u>15&&m.quarters.push("quarter"),u>30&&m.quarters.push("half"),u>45&&m.quarters.push("quarter_til"),this.intervals["".concat(i,"-").concat(g)]=m):(m.quarters=["start","quarter","half","quarter_til"],this.intervals["".concat(r,"-").concat(g)]=m)}}}}catch(b){a.e(b)}finally{a.f()}},getInterval:function(t,e){var a="".concat(t,"-").concat(e);if(a in this.intervals){var s=[];return s.push(this.intervals[a]),s}return[]},quarterStyle:function(t,e,a){var s=["quarter-hour"];return t.label_hour===e&&t.label_quarter===a||s.push("transparent-text"),s},toggleEventTypeActive:function(t){if(this.active_types.includes(t)){var e=this.active_types.indexOf(t);this.active_types.splice(e,1)}else this.active_types.push(t)}},mounted:function(){this.focus=this.$route.query.startDate}},u=o,v=(a("f080"),a("44ce"),a("2877")),d=a("6544"),h=a.n(d),p=a("8336"),f=a("a4f6"),y=a("b0af"),_=a("99d9"),g=a("62ad"),m=a("a523"),b=a("ce7e"),q=a("132d"),w=a("8860"),C=a("da13"),k=a("0fd9"),x=a("2fa4"),D=a("71d9"),M=a("2a7f"),T=Object(v["a"])(u,s,r,!1,null,"7212fabf",null);e["default"]=T.exports;h()(T,{VBtn:p["a"],VCalendar:f["a"],VCard:y["a"],VCardText:_["c"],VCol:g["a"],VContainer:m["a"],VDivider:b["a"],VIcon:q["a"],VList:w["a"],VListItem:C["a"],VRow:k["a"],VSpacer:x["a"],VToolbar:D["a"],VToolbarTitle:M["a"]})}}]);
//# sourceMappingURL=chunk-6264b672.d1078d3d.js.map
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4a3010fe"],{"44ce":function(t,e,n){"use strict";var s=n("b17e"),a=n.n(s);a.a},"6bd1":function(t,e,n){},"8e04":function(t,e,n){"use strict";var s=n("6bd1"),a=n.n(s);a.a},b17e:function(t,e,n){},fb34:function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"skej-grey-background w-calendar-page"},[n("v-dialog",{attrs:{"max-width":"500"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-card",[n("v-card",{staticClass:"skej-grey-background",attrs:{flat:"","min-width":"300"}},[n("div",{staticClass:"d-flex"},[n("div",{staticClass:"d-inline-block",staticStyle:{width:"4px"}},[n("div",{staticClass:"d-flex flex-column",staticStyle:{height:"100%"}},[n("div",{class:["vertical-dash mr-4 left-radius",t.event_colors["type"+t.eventEditForm.type]],staticStyle:{flex:"1 0 auto"}})])]),n("v-card-text",{staticClass:"skej-text py-2 pl-1 pr-2"},[n("v-btn",{staticClass:"float-right",attrs:{"x-small":"",fab:"",text:"",outlined:""},on:{click:t.clearSelectedEvent}},[n("v-icon",[t._v("mdi-close")])],1),n("div",{staticClass:"ml-4 mt-2"},[n("div",{staticClass:"d-inline-block font-weight-normal text-h5 mb-2"},[n("event-type-color-picker",{attrs:{initialColorIndex:t.eventEditForm.type-1},on:{colorSelected:function(e){return t.setEventEditTypeInput(e)}}}),n("span",{directives:[{name:"show",rawName:"v-show",value:!t.eventEditForm.showNameInput,expression:"!eventEditForm.showNameInput"}],staticClass:"clickable",on:{click:function(e){t.eventEditForm.showNameInput=!0}}},[t._v(t._s(t.eventEditForm.eventName))]),t.eventEditForm.showNameInput?n("v-text-field",{staticClass:"d-inline-block",attrs:{placeholder:"Name",rounded:"",filled:"",dense:""},model:{value:t.eventEditForm.eventName,callback:function(e){t.$set(t.eventEditForm,"eventName",e)},expression:"eventEditForm.eventName"}}):t._e()],1),n("p",{directives:[{name:"show",rawName:"v-show",value:!t.eventEditForm.showDescInput,expression:"!eventEditForm.showDescInput"}],staticClass:"clickable",on:{click:function(e){t.eventEditForm.showDescInput=!0}}},[t._v(t._s(t.eventEditForm.eventDesc))]),n("v-text-field",{directives:[{name:"show",rawName:"v-show",value:t.eventEditForm.showDescInput,expression:"eventEditForm.showDescInput"}],attrs:{placeholder:"Description",rounded:"",filled:"",dense:""},model:{value:t.eventEditForm.eventDesc,callback:function(e){t.$set(t.eventEditForm,"eventDesc",e)},expression:"eventEditForm.eventDesc"}}),n("p",[t._v("Members: "+t._s(t.selectedEvent?t.selectedEvent.user_list:""))]),n("v-slide-group",{staticClass:"mb-2",attrs:{multiple:"","show-arrows":""}},t._l(t.eventEditFieldButtons,(function(e,s){return n("v-slide-item",{key:"event-edit-button-"+s,scopedSlots:t._u([{key:"default",fn:function(s){return[n("v-slide-y-transition",[n("button",{directives:[{name:"show",rawName:"v-show",value:!e.showInput,expression:"!button.showInput"}],staticClass:"mx-2 skej-option-btn",on:{click:function(t){e.showInput=!e.showInput}}},[t._v(" "+t._s(e.text)+" ")])])]}}],null,!0)})})),1)],1)],1)],1)])],1)],1),n("v-container",{staticClass:"px-0 pt-0",attrs:{fluid:""}},[n("v-row",{attrs:{"no-gutters":""}},[n("v-col",{attrs:{cols:"12",md:"8"}},[n("div",{staticClass:"section-1 scroll-section"},[n("v-toolbar",{attrs:{flat:"",dense:"",height:"72",color:"skej-grey-background"}},[n("v-btn",{attrs:{text:"",default:"",to:{name:"calendar"}}},[n("v-icon",[t._v("mdi-arrow-left")])],1),n("v-spacer"),n("v-btn",{attrs:{text:"",small:"",color:"grey"},on:{click:t.prev}},[n("v-icon",{attrs:{large:""}},[t._v("mdi-menu-left")])],1),n("v-toolbar-title",[n("h3",{staticClass:"font-weight-medium"},[t._v(t._s(t.title))])]),n("v-btn",{attrs:{text:"",small:"",color:"grey"},on:{click:t.next}},[n("v-icon",{attrs:{large:""}},[t._v("mdi-menu-right")])],1),n("v-spacer"),n("div",{attrs:{id:"color-bar"}},[n("div",{class:["event-color",t.event_colors["type1"],t.active_types.includes("type1")?"":"inactive"],on:{click:function(e){return t.toggleEventTypeActive("type1")}}}),n("div",{class:["event-color",t.event_colors["type2"],t.active_types.includes("type2")?"":"inactive"],on:{click:function(e){return t.toggleEventTypeActive("type2")}}}),n("div",{class:["event-color",t.event_colors["type3"],t.active_types.includes("type3")?"":"inactive"],on:{click:function(e){return t.toggleEventTypeActive("type3")}}}),n("div",{class:["event-color",t.event_colors["type4"],t.active_types.includes("type4")?"":"inactive"],on:{click:function(e){return t.toggleEventTypeActive("type4")}}})])],1),n("v-divider"),n("v-row",{attrs:{"no-gutters":""}},[n("v-col",{attrs:{cols:"1"}},[n("v-list",{staticClass:"mt-12 pt-5",attrs:{flat:"",disabled:"","single-line":""}},t._l(t.hours,(function(e){return n("div",{key:"hour-"+e.hr},[e.hr>=t.day_start?n("v-list-item",{staticClass:"pt-0 px-0"},[n("v-card",{attrs:{flat:"",tile:""}},[n("v-card-text",{staticClass:"font-weight-bold py-0 pr-0"},[n("div",{staticClass:"hrstart pr-4"},[t._v(" "+t._s(e.hr)+":00 ")]),n("div",{staticClass:"hr15 text--disabled"},[t._v(" 15 ")]),n("div",{staticClass:"hr30 text--disabled"},[t._v(" 30 ")]),n("div",{staticClass:"hr45 text--disabled"},[t._v(" 45 ")])])],1)],1):t._e()],1)})),0)],1),n("v-col",{attrs:{cols:"11"}},[n("v-calendar",{ref:"week_calendar",attrs:{type:"week",locale:t.$i18n.locale+"-"+t.localStorage.country,"event-more":!1,"first-interval":28,"interval-count":68,"interval-minutes":15,"interval-height":"20px","interval-format":t.hourFormat},on:{change:t.updateRange},scopedSlots:t._u([{key:"day-label-header",fn:function(e){var s=e.day;return[n("div",{staticClass:"text-left my-2 caption"},[t._v(t._s(s))])]}},{key:"interval",fn:function(e){var s=e.date,a=e.hour;return[a<=24&&a>=t.day_start?n("div",{staticClass:"hour-interval"},t._l(t.getInterval(s,a),(function(e,i){return n("div",{key:"interval-"+i+"-"+s+"-"+a},[n("div",{class:t.getQuarterClasses(e,a,"start"),on:{click:function(n){!e.event||t.setSelectedEvent(e.event.id)}}},[n("div",{class:["vertical-dash",e.quarters.includes("start")?t.event_colors["type"+e.event.type]:""]}),t.active_types.includes("type"+e.type)?n("span",{staticClass:"pl-1"},[t._v(t._s(e.event.eventName))]):t._e()])])})),0):t._e()]}}]),model:{value:t.focus,callback:function(e){t.focus=e},expression:"focus"}})],1)],1)],1)]),n("v-col",{attrs:{cols:"12",md:"4"}},[n("div",{staticClass:"section-2 scroll-section"},[n("v-toolbar",{staticClass:"group-toolbar skej-grey-background flex-none",attrs:{flat:"",height:"72"}},[n("v-toolbar-title",{staticClass:"ml-2"},[n("h3",{staticClass:"font-weight-medium"},[t._v("Upcoming Events")])])],1),n("v-divider"),n("div",{staticClass:"pt-2 pl-2"},t._l(t.upcomingEvents,(function(e,s){return n("div",{key:"upcoming"+s},[e.show_day_header?n("h3",{staticClass:"font-weight-medium my-6"},[t._v(t._s(e.new_day_header)+" ")]):t._e(),n("div",{staticClass:"d-flex pr-lg-4 my-2",staticStyle:{height:"55px"}},[n("div",{class:["vertical-dash","mx-1",t.event_colors["type"+e.type]]}),n("v-card",{staticClass:"mr-4 my-2 skej-grey-background",attrs:{flat:"",tile:""}},[n("v-card-text",{staticClass:"font-weight-medium px-1 py-2"},[t.active_types.includes("type"+e.type)?n("span",[t._v(t._s(e.eventName))]):t._e()])],1),n("v-spacer"),n("v-card",{staticClass:"d-inline skej-grey-background my-2",attrs:{flat:"",tile:""}},[n("v-card-text",{staticClass:"px-1 py-2 text--disabled"},[t._v(t._s(e.eventStart.substr(11,5))+" - "+t._s(e.eventEnd.substr(11,5)))])],1)],1)])})),0)],1)])],1)],1),n("new-items-widget",{ref:"newItemsWidget",on:{eventsRetrieved:t.refreshEvents}})],1)},a=[],i=(n("99af"),n("4de4"),n("caad"),n("c975"),n("a15b"),n("fb6a"),n("a434"),n("b0c0"),n("ac1f"),n("2532"),n("1276"),n("b85c")),r=n("bc3a"),o=n.n(r),c={name:"weekCalendar",data:function(){return{start:null,end:null,focus:(new Date).toISOString().substring(0,10),events:[],intervals:{},active_types:["type1","type2","type3","type4"],event_colors:{type1:"cyan",type2:"green",type3:"orange",type4:"red"},eventTypes:["type1","type2","type3","type4"],upcomingEvents:[],wkStartDates:[],hours:[],days:{},dialog:!1,eventEditForm:{eventName:null,eventDesc:null,eventStart:null,eventEnd:null,endHour:null,endMinutes:null,type:1,showNameInput:!1,showDescInput:!1},selectedEvent:null,editingSelectedEvent:!1,eventEditFieldButtons:{},day_start:7}},computed:{title:function(){var t=this.start,e=this.end;if(!t||!e)return"";var n=this.getMonth(t.month),s=this.getMonth(e.month),a=n===s?"":s;return a.length?"".concat(n," ").concat(t.day," - ").concat(a," ").concat(e.day):"".concat(n," ").concat(t.day," - ").concat(e.day)}},methods:{setToday:function(){this.focus=this.today},prev:function(){this.$refs.week_calendar.prev()},next:function(){this.$refs.week_calendar.next()},nth:function(t){return t>3&&t<21?"th":["th","st","nd","rd","th","th","th","th","th","th"][t%10]},getMonth:function(t){var e=["January","February","March","April","May","June","July","August","September","October","November","December"];return e[t-1]},updateRange:function(t){var e=t.start,n=t.end;this.wkStartDates=[],this.start=e,this.end=n,this.updateEvents()},rnd:function(t,e){return Math.floor((e-t+1)*Math.random())+t},formatDate:function(t,e){return e?"".concat(t.getFullYear(),"-").concat(("0"+(t.getMonth()+1)).slice(-2),"-").concat(("0"+t.getDate()).slice(-2)," ").concat(t.getHours(),":").concat(("0"+t.getMinutes()).slice(-2)):"".concat(t.getFullYear(),"-").concat(("0"+(t.getMonth()+1)).slice(-2),"-").concat(("0"+t.getDate()).slice(-2))},buildHours:function(){for(var t=[],e=1;e<25;e++)t.push({hr:e,start:!1,quarter:!1,half:!1,quarter_til:!1,event_name:"",event_color:"",label_quarter:!1,label_hour:0});this.hours=t},updateEvents:function(){this.buildIntervals(),this.getUpcomingEvents()},setSelectedEvent:function(t){var e=this;null!==t&&(this.selectedEvent=this.events.filter((function(e){return e.id===t}))[0]),o.a.get("user/events/".concat(this.selectedEvent.id,"/user_list/"),this.todoReorderForm).then((function(t){e.selectedEvent.user_list=t.data.join(", "),e.editEvent()})).catch((function(t){console.log(t)})),this.dialog=!0},editEvent:function(){this.eventEditForm.eventName=this.selectedEvent.eventName,this.eventEditForm.eventDesc=this.selectedEvent.eventDesc,this.eventEditForm.startTime=this.selectedEvent.startTime,this.eventEditForm.endTime=this.selectedEvent.endTime,this.eventEditForm.type=this.selectedEvent.type},clearSelectedEvent:function(){var t=this;this.eventEditForm.eventStart=this.selectedEvent.eventStart,this.eventEditForm.eventEnd=this.selectedEvent.eventEnd,o.a.patch("user/events/".concat(this.selectedEvent.id,"/update/"),this.eventEditForm).then((function(t){})).catch((function(t){console.log(t)})),o.a.patch("user/events/".concat(this.selectedEvent.id,"/changetype/"),this.eventEditForm).then((function(e){for(var n in t.selectedEvent.type=t.eventEditForm.type,t.eventEditForm)t.eventEditForm[n]=null;for(var s in t.eventEditForm.type=1,t.editingSelectedEvent=!1,t.selectedEvent=null,t.eventEditFieldButtons)t.eventEditFieldButtons[s].showInput=!1;for(var a in t.eventEditForm)t.eventEditForm[a]=null;t.eventEditForm.showNameInput=!1,t.$refs.newItemsWidget.getEvents(),t.dialog=!1})).catch((function(t){console.log(t)}))},getUpcomingEvents:function(){this.upcomingEvents=[];var t=new Date;this.events.sort((function(t,e){return t.eventStart>e.eventStart?1:-1}));var e,n=Object(i["a"])(this.events);try{for(n.s();!(e=n.n()).done;){var s=e.value,a=Date.parse(s.eventStart),r=new Date(s.eventStart);s.new_day_header=r.toLocaleString("en-US",{month:"long",day:"numeric"}),a>=t&&(this.upcomingEvents.includes(s)||this.upcomingEvents.push(s))}}catch(u){n.e(u)}finally{n.f()}for(var o in this.upcomingEvents){var c=this.upcomingEvents[o];if(o=parseInt(o),this.upcomingEvents.length>1&&0!==o){var l=this.upcomingEvents.length,v=this.upcomingEvents[(o+l-1)%l];c.show_day_header=c.new_day_header!==v.new_day_header}else c.show_day_header=!0}},getDatesInRange:function(t,e){var n=[],s=!1;while(!s){var a=t;a.setDate(a.getDate()+1),n.push(this.formatDate(new Date(a),!0).split(" ")[0]),a>=e&&(s=!0)}return n},roundToQuarterHour:function(t){var e=new Date(t);return e.setMinutes(15*Math.round(e.getMinutes()/15)),{hour:e.getHours(),minutes:e.getMinutes()}},getEventMidpoint:function(t,e){var n=e-t,s=n/1e3/60,a=Math.floor(n/1e3/60/2),i=new Date(t);i.setMinutes(t.getMinutes()+a);var r=this.roundToQuarterHour(i);i.setHours(r.hour),i.setMinutes(r.minutes);var o=s/15;return o%2===0&&i.setMinutes(i.getMinutes()-15),i.toISOString()},buildIntervals:function(){this.intervals={};var t,e=Object(i["a"])(this.events);try{for(e.s();!(t=e.n()).done;){var n=t.value;if(!n.allDay){for(var s=n.eventStart.split("T")[0],a=n.eventEnd.split("T")[0],r=parseInt(n.eventStart.split("T")[1].split(":")[0]),o=parseInt(n.eventStart.split("T")[1].split(":")[1]),c=parseInt(n.eventEnd.split("T")[1].split(":")[0]),l=parseInt(n.eventEnd.split("T")[1].split(":")[1]),v=[],u=0;u<c-r;u++)v.push(r+u);l>0&&v.push(c);var d="start",h=new Date(n.eventStart),p=new Date(n.eventEnd),m=this.getEventMidpoint(h,p),f=new Date(m),y=f.getMinutes();0===y&&(d="start"),15===y&&(d="quarter"),30===y&&(d="half"),45===y&&(d="quarter_til");for(var g=0,E=v;g<E.length;g++){var _=E[g],w={type:n.type,name:n.name,label_hour:f.getHours()-1,label_quarter:d,event:n,quarters:[]};_===r?(0===o&&w.quarters.push("start"),o<=15&&w.quarters.push("quarter"),o<=30&&w.quarters.push("half"),o<=45&&w.quarters.push("quarter_til"),this.intervals["".concat(s,"-").concat(_)]=w):_===c?(l>0&&w.quarters.push("start"),l>15&&w.quarters.push("quarter"),l>30&&w.quarters.push("half"),l>45&&w.quarters.push("quarter_til"),this.intervals["".concat(a,"-").concat(_)]=w):(w.quarters=["start","quarter","half","quarter_til"],this.intervals["".concat(s,"-").concat(_)]=w)}}}}catch(b){e.e(b)}finally{e.f()}},getInterval:function(t,e){var n="".concat(t,"-").concat(e);if(n in this.intervals){var s=[];return s.push(this.intervals[n]),s}return[]},getQuarterClasses:function(t,e,n){var s=["quarter-hour","pl-1"];return t.label_hour===e&&t.label_quarter===n?s.push("clickable nowrap"):s.push("transparent-text"),s},toggleEventTypeActive:function(t){if(this.active_types.includes(t)){var e=this.active_types.indexOf(t);this.active_types.splice(e,1)}else this.active_types.push(t)},refreshEvents:function(t){this.events=t,this.updateEvents()},setEventEditTypeInput:function(t){this.eventEditForm.type=t+1},hourFormat:function(t){return 0!==t.minute?t.minute:t.hour+":00"}},mounted:function(){this.focus=this.$route.query.startDate,this.buildHours()}},l=c,v=(n("8e04"),n("44ce"),n("2877")),u=n("6544"),d=n.n(u),h=n("8336"),p=n("a4f6"),m=n("b0af"),f=n("99d9"),y=n("62ad"),g=n("a523"),E=n("169a"),_=n("ce7e"),w=n("132d"),b=n("8860"),k=n("da13"),x=n("0fd9"),F=n("7efd"),C=n("9dbe"),S=n("0789"),D=n("2fa4"),I=n("8654"),T=n("71d9"),q=n("2a7f"),M=Object(v["a"])(l,s,a,!1,null,"740fe9fc",null);e["default"]=M.exports;d()(M,{VBtn:h["a"],VCalendar:p["a"],VCard:m["a"],VCardText:f["c"],VCol:y["a"],VContainer:g["a"],VDialog:E["a"],VDivider:_["a"],VIcon:w["a"],VList:b["a"],VListItem:k["a"],VRow:x["a"],VSlideGroup:F["a"],VSlideItem:C["a"],VSlideYTransition:S["f"],VSpacer:D["a"],VTextField:I["a"],VToolbar:T["a"],VToolbarTitle:q["a"]})}}]);
//# sourceMappingURL=chunk-4a3010fe.ca0b08f0.js.map
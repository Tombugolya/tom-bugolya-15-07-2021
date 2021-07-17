(this.webpackJsonpherolo=this.webpackJsonpherolo||[]).push([[0],{98:function(e,t,n){"use strict";n.r(t);var a,r=n(9),c=n.n(r),i=n(16);!function(e){e.TOGGLE="TOGGLE_DARK_THEME"}(a||(a={}));var o={dark:!!window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches};var s,u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case a.TOGGLE:return Object(i.a)(Object(i.a)({},e),{},{dark:!e.dark});default:return e}},l=n(11),j=n.n(l),h=n(14),O=n(74),d=n(19),b=n(67),m=n(68),f=n(17),p=n(44),x=n(32);!function(e){e.AUTOCOMPLETE="locations/v1/cities/autocomplete",e.CURRENT_CONDITIONS="currentconditions/v1",e.FIVE_DAY_FORECAST="forecasts/v1/daily/5day",e.GEOPOSITION="locations/v1/cities/geoposition/search",e.GET_INFO_BY_KEY="locations/v1/"}(s||(s={}));var y,v=Object(p.a)("url"),g=Object(p.a)("apiKey"),E=Object(p.a)("assetsUrl"),T=Object(p.a)("headers"),w=new(function(){function e(){Object(b.a)(this,e),Object.defineProperty(this,v,{writable:!0,value:"https://dataservice.accuweather.com"}),Object.defineProperty(this,g,{writable:!0,value:"".concat("wdN3ceNdTPwAkC9bwQ6UtKTuBHQ83KMT")}),Object.defineProperty(this,E,{writable:!0,value:"https://herolo-assets.s3.us-east-2.amazonaws.com/images"}),Object.defineProperty(this,T,{writable:!0,value:{method:"GET"}})}return Object(m.a)(e,[{key:"getAutocompleteSearch",value:function(){var e=Object(d.a)(j.a.mark((function e(t){var n,a,r,c,i,o;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new URLSearchParams({apikey:Object(f.a)(this,g)[g],q:t}).toString(),a=fetch("".concat(Object(f.a)(this,v)[v],"/").concat(s.AUTOCOMPLETE,"?").concat(n),Object(f.a)(this,T)[T]),e.next=4,Object(x.a)(a);case 4:return r=e.sent,c=Object(h.a)(r,2),i=c[0],o=c[1],i&&console.log(i),e.next=11,null===o||void 0===o?void 0:o.json();case 11:return e.abrupt("return",e.sent);case 12:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getCurrentConditions",value:function(){var e=Object(d.a)(j.a.mark((function e(t){var n,a,r,c,i,o;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("executing get current conditions"),n=new URLSearchParams({apikey:Object(f.a)(this,g)[g]}).toString(),a=fetch("".concat(Object(f.a)(this,v)[v],"/").concat(s.CURRENT_CONDITIONS,"/").concat(t,"?").concat(n),Object(f.a)(this,T)[T]),e.next=5,Object(x.a)(a);case 5:return r=e.sent,c=Object(h.a)(r,2),i=c[0],o=c[1],i&&console.log(i),e.next=12,null===o||void 0===o?void 0:o.json();case 12:return e.abrupt("return",e.sent[0]);case 13:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getFiveDayForecast",value:function(){var e=Object(d.a)(j.a.mark((function e(t){var n,a,r,c,i,o;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("executing get five day forecast"),n=new URLSearchParams({apikey:Object(f.a)(this,g)[g]}).toString(),a=fetch("".concat(Object(f.a)(this,v)[v],"/").concat(s.FIVE_DAY_FORECAST,"/").concat(t,"?").concat(n),Object(f.a)(this,T)[T]),e.next=5,Object(x.a)(a);case 5:return r=e.sent,c=Object(h.a)(r,2),i=c[0],o=c[1],i&&console.log(i),e.next=12,null===o||void 0===o?void 0:o.json();case 12:return e.abrupt("return",e.sent);case 13:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getGeopositionSearch",value:function(){var e=Object(d.a)(j.a.mark((function e(t){var n,a,r,c,i,o,u,l;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.latitude,a=t.longitude,r=new URLSearchParams({apikey:Object(f.a)(this,g)[g],q:"".concat(n,",").concat(a)}).toString(),c=fetch("".concat(Object(f.a)(this,v)[v],"/").concat(s.GEOPOSITION,"?").concat(r),Object(f.a)(this,T)[T]),e.next=5,Object(x.a)(c);case 5:return i=e.sent,o=Object(h.a)(i,2),u=o[0],l=o[1],u&&console.log(u),e.next=12,null===l||void 0===l?void 0:l.json();case 12:return e.abrupt("return",e.sent);case 13:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getLocationInfoByKey",value:function(){var e=Object(d.a)(j.a.mark((function e(t){var n,a,r,c,i,o;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("executing get location info"),n=new URLSearchParams({apikey:Object(f.a)(this,g)[g]}).toString(),a=fetch("".concat(Object(f.a)(this,v)[v],"/").concat(s.GET_INFO_BY_KEY,"/").concat(t,"?").concat(n)),e.next=5,Object(x.a)(a);case 5:return r=e.sent,c=Object(h.a)(r,2),i=c[0],o=c[1],i&&console.log(i),e.next=12,null===o||void 0===o?void 0:o.json();case 12:return e.abrupt("return",e.sent);case 13:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getImageUrl",value:function(e){return"".concat(Object(f.a)(this,E)[E],"/").concat(e,"-s.png")}},{key:"getCombinedData",value:function(){var e=Object(d.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Promise.all([this.getCurrentConditions(t),this.getLocationInfoByKey(t),this.getFiveDayForecast(t)]));case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getCombinedDataCallback",value:function(e,t){this.getCombinedData(e).then(t)}}]),e}()),R={conditions:{WeatherText:"Mostly cloudy",WeatherIcon:6,Temperature:{Metric:{Value:22.2},Imperial:{Value:72}}},info:{Key:"221329",LocalizedName:"Georgia",Country:{ID:"JM",LocalizedName:"Jamaica"},AdministrativeArea:{ID:"07",LocalizedName:"Trelawny"}},fiveDayForecast:{DailyForecasts:[{EpochDate:1626346800,Temperature:{Minimum:{Value:56,Unit:"F"},Maximum:{Value:77,Unit:"F"}},Day:{Icon:18},Night:{Icon:35}},{EpochDate:1626433200,Temperature:{Minimum:{Value:60,Unit:"F"},Maximum:{Value:74,Unit:"F"}},Day:{Icon:4},Night:{Icon:40}},{EpochDate:1626519600,Temperature:{Minimum:{Value:59,Unit:"F"},Maximum:{Value:75,Unit:"F"}},Day:{Icon:12},Night:{Icon:7}},{EpochDate:1626606e3,Temperature:{Minimum:{Value:60,Unit:"F"},Maximum:{Value:79,Unit:"F"}},Day:{Icon:12},Night:{Icon:34}},{EpochDate:1626692400,Temperature:{Minimum:{Value:62,Unit:"F"},Maximum:{Value:79,Unit:"F"}},Day:{Icon:1},Night:{Icon:34}}]}};!function(e){e.TOGGLE="TOGGLE_CELSIUS_FAHRENHEIT",e.ADD_FAVORITE="ADD_WEATHER_KEY_TO_FAVORITES",e.REMOVE_FAVORITE="REMOVE_WEATHER_KEY_FROM_FAVORITES",e.CHANGE_CURRENT="CHANGE_CURRENT_WEATHER_KEY",e.ADD_RESULTS="ADD_AUTOCOMPLETE_WEATHER_RESULTS",e.RETURN="RETURN_TO_MAIN_DISPLAY"}(y||(y={}));var I={celsius:!0,favorites:[],current:R,searchResults:[]};var D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y.TOGGLE:return Object(i.a)(Object(i.a)({},e),{},{celsius:!e.celsius});case y.ADD_FAVORITE:return Object(i.a)(Object(i.a)({},e),{},{favorites:[].concat(Object(O.a)(e.favorites),[t.payload.key])});case y.REMOVE_FAVORITE:return Object(i.a)(Object(i.a)({},e),{},{favorites:e.favorites.filter((function(e){return e!==t.payload.key}))});case y.CHANGE_CURRENT:return Object(i.a)(Object(i.a)({},e),{},{current:t.payload.current});case y.ADD_RESULTS:return Object(i.a)(Object(i.a)({},e),{},{searchResults:t.payload.results});case y.RETURN:return Object(i.a)(Object(i.a)({},e),{},{searchResults:[]});default:return e}},_=n(55),C=Object(_.a)({theme:u,weather:D}),A=n(43),F=n(2),k=Object(_.b)(C,{},window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),N=function(e){var t=e.children;return Object(F.jsx)(A.a,{store:k,children:t})},U=function(){return Object(A.b)()},S=A.c,V=n(73),L=n(130),M=n(145),G=n(129);var P=function(e){var t,n=e.children,a=S((function(e){return e.theme.dark}));return Object(F.jsx)(G.a,{theme:(t=a,Object(V.a)({palette:{type:t?"dark":"light",primary:{main:"#002884",contrastText:"#fff"},secondary:{main:"#606CA8",contrastText:"#000"}}})),children:Object(F.jsx)(L.a,{children:Object(F.jsx)(M.a,{maxWidth:"100vw",minHeight:"100vh",bgcolor:"background.paper",children:n})})})},W=n(132),H=n(133),z=n(134),K=function(){var e=U(),t=S((function(e){return e.theme.dark})),n=S((function(e){return e.weather.celsius}));return Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)(W.a,{style:{margin:"1em"},onClick:function(){return e({type:a.TOGGLE})},children:t?Object(F.jsx)(H.a,{size:15}):Object(F.jsx)(z.a,{size:15})}),Object(F.jsx)(W.a,{style:{margin:"1em"},onClick:function(){return e({type:y.TOGGLE})},children:n?"F":"C"})]})},Y=n(35),B=n(0),J=n(135),X=n(146),q=function(){return Object(F.jsxs)(M.a,{display:"flex",alignItems:"center",width:"30vw",justifyContent:"flex-end",color:"secondary.main",children:[Object(F.jsx)(J.a,{style:{margin:"1em",minWidth:"4em"},color:"textPrimary",component:Y.b,to:"/",children:"Home"}),Object(F.jsx)(J.a,{style:{margin:"1em",minWidth:"4em"},color:"textPrimary",component:Y.b,to:"/favorites",children:"Favorites"}),Object(F.jsx)(X.a,{smDown:!0,children:Object(F.jsx)(K,{})})]})},Q=Object(B.memo)(q),Z=n(101),$=function(){return Object(F.jsxs)(M.a,{display:"flex",justifyContent:"space-between",alignItems:"center",bgcolor:"secondary.main",children:[Object(F.jsx)(Z.a,{variant:"h5",style:{marginLeft:"2em",fontStyle:"italic"},children:"Weather App"}),Object(F.jsx)(Q,{})]})},ee=Object(B.memo)($),te=n(143),ne=function(){var e=Object(B.useRef)(),t=U();return Object(F.jsxs)(M.a,{display:"flex",width:"40%",margin:"2em",justifyContent:"space-around",alignItems:"center",children:[Object(F.jsx)(te.a,{fullWidth:!0,type:"search",inputRef:e}),Object(F.jsx)(W.a,{onClick:function(){""===e.current.value?t({type:y.RETURN}):w.getAutocompleteSearch(e.current.value).then((function(e){t({type:y.ADD_RESULTS,payload:{results:e}})}))},children:"Search"})]})},ae=n(22),re=n(136),ce=n(137),ie=n(138),oe=n(139),se=n(140),ue=function(){var e=S((function(e){return e.weather.searchResults})),t=U(),n=Object(ae.a)(),a=Object(re.a)(n.breakpoints.up("lg"));return Object(F.jsx)(ce.a,{container:!0,direction:"row",justifyContent:"center",spacing:5,children:e.map((function(e,n){return Object(F.jsx)(ce.a,{style:{margin:"1em",textAlign:"center"},item:!0,xs:12,lg:2,children:Object(F.jsx)(ie.a,{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:Object(F.jsx)(oe.a,{style:{minHeight:a?"20vh":"10vh"},onClick:function(){return function(e){var n=e.Key;w.getCombinedDataCallback(n,(function(e){var n=Object(h.a)(e,3),a=n[0],r=n[1],c=n[2];t({type:y.CHANGE_CURRENT,payload:{current:{conditions:a,info:r,fiveDayForecast:c}}}),t({type:y.RETURN})}))}(e)},children:Object(F.jsx)(se.a,{children:Object(F.jsxs)(Z.a,{children:[e.LocalizedName,", ",e.AdministrativeArea.LocalizedName,","," ",e.Country.LocalizedName]})})})})},n)}))})},le=function(e){var t=e.conditions,n=e.info,a=t.WeatherIcon,r=t.Temperature,c=n.LocalizedName,i=S((function(e){return e.weather.celsius})),o=r[i?"Metric":"Imperial"].Value;return Object(F.jsxs)(M.a,{display:"flex",width:"30vw",alignItems:"center",color:"background.main",style:{margin:"2em"},children:[Object(F.jsx)("div",{children:Object(F.jsx)("img",{src:w.getImageUrl(a),alt:"weather-summary-icon"})}),Object(F.jsxs)(M.a,{children:[Object(F.jsx)(Z.a,{variant:"h5",color:"textPrimary",children:c}),Object(F.jsxs)(Z.a,{variant:"h5",color:"textPrimary",children:[o,"\xb0 ",i?"C":"F"]})]})]})},je=n(141),he=n(142),Oe=n(6),de=n(57),be=Object(Oe.a)((function(){return{root:{color:de.a[500]}}}))(W.a),me=function(e){var t=e.info.Key,n=U(),a=S((function(e){return e.weather.favorites})).includes(t);return Object(F.jsx)(M.a,{color:"secondary.main",display:"flex",alignItems:"center",justifyContent:"space-around",children:Object(F.jsx)(be,{onClick:function(){n({type:a?y.REMOVE_FAVORITE:y.ADD_FAVORITE,payload:{key:t}})},children:a?Object(F.jsx)(je.a,{size:50}):Object(F.jsx)(he.a,{size:50})})})},fe=function(e){var t=e.forecast,n=S((function(e){return e.weather.celsius})),a=function(e,t){var a=e.Unit;return"C"===a===n?"".concat(e.Value,"\xb0-").concat(t.Value,"\xb0 ").concat(a):"F"===e.Unit?"".concat(Math.round((e.Value-30)/2),"\xb0-").concat(Math.round((t.Value-30)/2),"\xb0 C"):"".concat(Math.round(2*e.Value+30),"\xb0-").concat(Math.round(2*t.Value+30),"\xb0 F")};return Object(F.jsx)(ce.a,{direction:"row",justifyContent:"center",container:!0,children:t.DailyForecasts.map((function(e,t){var n,r=e.Temperature.Maximum,c=e.Temperature.Minimum;return Object(F.jsx)(ce.a,{style:{margin:"2em",minWidth:"20em"},item:!0,children:Object(F.jsx)(ie.a,{children:Object(F.jsx)(oe.a,{children:Object(F.jsxs)(se.a,{style:{textAlign:"center"},children:[Object(F.jsx)(Z.a,{variant:"h6",children:(n=e.EpochDate,["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][new Date(1e3*n).getDay()])}),Object(F.jsxs)("div",{children:[Object(F.jsx)(Z.a,{children:"Day"}),Object(F.jsx)("img",{src:w.getImageUrl(e.Day.Icon),alt:"day-weather-icon"})]}),Object(F.jsxs)(Z.a,{children:["Range ",a(c,r)]}),Object(F.jsxs)("div",{children:[Object(F.jsx)("img",{src:w.getImageUrl(e.Night.Icon),alt:"night-weather-icon"}),Object(F.jsx)(Z.a,{children:"Night"})]})]})})})},t)}))})},pe=function(){var e=S((function(e){return e.weather.current})),t=e.conditions,n=e.info,a=e.fiveDayForecast,r=Object(ae.a)(),c=Object(re.a)(r.breakpoints.up("md"));return Object(F.jsx)(M.a,{display:"flex",justifyContent:"space-between",flexDirection:"column",alignItems:"center",children:e&&Object(F.jsxs)(F.Fragment,{children:[Object(F.jsxs)(M.a,{display:"flex",width:"80%",justifyContent:"space-between",alignItems:"center",children:[Object(F.jsx)(le,{conditions:t,info:n}),Object(F.jsx)(me,{info:n})]}),Object(F.jsx)(M.a,{style:{margin:"0 auto"},color:"secondary.main",children:Object(F.jsxs)(Z.a,{variant:"h2",color:"textPrimary",style:{fontSize:c?"4em":"3em"},children:['"',e.conditions.WeatherText,'"']})}),Object(F.jsx)(fe,{forecast:a})]})})},xe=Object(B.memo)(pe),ye=function(){var e=S((function(e){return e.weather.searchResults}));return Object(F.jsx)(M.a,{display:"flex",justifyContent:"center",width:"100%",minHeight:"75vh",bgcolor:"background.default",children:e.length?Object(F.jsx)(ue,{}):Object(F.jsx)(xe,{})})},ve=n(54),ge=n.n(ve),Ee=function(){U();var e=Object(B.useState)(!1),t=Object(h.a)(e,2),n=t[0],a=t[1];return ge()(Object(d.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a(!0);case 1:case"end":return e.stop()}}),e)}))),[]),Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)(ne,{}),n&&Object(F.jsx)(ye,{})]})},Te=n(12),we=function(e){var t=e.combinedDataArray,n=S((function(e){return e.weather.celsius})),a=Object(Te.f)(),r=U();return Object(F.jsx)(ce.a,{style:{width:"90%"},direction:"row",justifyContent:"center",container:!0,spacing:5,children:t.map((function(e,t){var c=Object(h.a)(e,2),i=c[0],o=c[1],s=n?i.Temperature.Metric.Value:i.Temperature.Imperial.Value,u=n?"C":"F";return Object(F.jsx)(ce.a,{style:{margin:"2em",minWidth:"20em"},item:!0,children:Object(F.jsx)(ie.a,{children:Object(F.jsx)(oe.a,{onClick:function(){return function(e){var t=Object(h.a)(e,3),n=t[0],c=t[1],i=t[2];r({type:y.CHANGE_CURRENT,payload:{current:{conditions:n,info:c,fiveDayForecast:i}}}),a.push("/")}(e)},children:Object(F.jsxs)(se.a,{style:{textAlign:"center"},children:[Object(F.jsx)(Z.a,{children:o.LocalizedName}),Object(F.jsxs)(Z.a,{children:[s,"\xb0 ",u]}),Object(F.jsx)("div",{children:Object(F.jsx)("img",{src:w.getImageUrl(i.WeatherIcon),alt:"favorites-weather-icon-".concat(t)})}),Object(F.jsx)(Z.a,{children:i.WeatherText})]})})})},t)}))})},Re=function(){var e=S((function(e){return e.weather.favorites})),t=Object(B.useState)([]),n=Object(h.a)(t,2),a=n[0],r=n[1],c=Object(B.useState)(!1),i=Object(h.a)(c,2),o=i[0],s=i[1];return ge()(Object(d.a)(j.a.mark((function t(){var n;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all(e.map(function(){var e=Object(d.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.getCombinedData(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 2:return n=t.sent,r(n),s(!0),t.abrupt("return",(function(){return s(!1)}));case 6:case"end":return t.stop()}}),t)}))),[]),Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)(Z.a,{variant:"h3",style:{margin:"1em"},color:"textPrimary",children:"Favorites Page"}),o&&Object(F.jsx)(we,{combinedDataArray:a})]})},Ie=function(){return Object(F.jsxs)(Te.c,{children:[Object(F.jsx)(Te.a,{path:"/",exact:!0,component:Ee}),Object(F.jsx)(Te.a,{path:"/favorites",exact:!0,component:Re})]})},De=function(){return Object(F.jsx)(M.a,{display:"flex",alignItems:"center",flexDirection:"column",children:Object(F.jsx)(Ie,{})})},_e=function(){return Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)(ee,{}),Object(F.jsx)(De,{})]})},Ce=function(){return Object(F.jsx)(N,{children:Object(F.jsx)(P,{children:Object(F.jsx)(Y.a,{children:Object(F.jsx)(_e,{})})})})};c.a.render(Object(F.jsx)(Ce,{}),document.getElementById("root"))}},[[98,1,2]]]);
//# sourceMappingURL=main.01bf4b25.chunk.js.map
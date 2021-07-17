(this.webpackJsonpherolo=this.webpackJsonpherolo||[]).push([[0],{98:function(e,t,n){"use strict";n.r(t);var r,a=n(10),c=n.n(a),i=n(14);!function(e){e.TOGGLE="TOGGLE_DARK_THEME"}(r||(r={}));var s={dark:!!window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches};var o,u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case r.TOGGLE:return Object(i.a)(Object(i.a)({},e),{},{dark:!e.dark});default:return e}},l=n(9),j=n.n(l),h=n(15),d=n(74),b=n(18),O=n(67),f=n(68),m=n(33),p=n(40),x=n(46);!function(e){e.AUTOCOMPLETE="locations/v1/cities/autocomplete/",e.CURRENT_CONDITIONS="currentconditions/v1/",e.FIVE_DAY_FORECAST="forecasts/v1/daily/5day/",e.GEOPOSITION="locations/v1/cities/geoposition/search/",e.GET_INFO_BY_KEY="locations/v1/"}(o||(o={}));var y,v=Object(p.a)("url"),g=Object(p.a)("apiKey"),E=Object(p.a)("assetsUrl"),w=Object(p.a)("headers"),T=Object(p.a)("latestError"),D=new(function(){function e(){Object(O.a)(this,e),Object.defineProperty(this,v,{writable:!0,value:"https://dataservice.accuweather.com/"}),Object.defineProperty(this,g,{writable:!0,value:"".concat("wdN3ceNdTPwAkC9bwQ6UtKTuBHQ83KMT")}),Object.defineProperty(this,E,{writable:!0,value:"https://herolo-assets.s3.us-east-2.amazonaws.com/images/"}),Object.defineProperty(this,w,{writable:!0,value:{method:"GET"}}),Object.defineProperty(this,T,{writable:!0,value:void 0})}return Object(f.a)(e,[{key:"request",value:function(){var e=Object(b.a)(j.a.mark((function e(t){var n,r,a,c,s,o,u,l,d,b,O;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.endPoint,r=t.query,a=void 0===r?{}:r,c=t.key,s=void 0===c?"":c,o=new URLSearchParams(Object(i.a)({apikey:Object(m.a)(this,g)[g]},a)).toString(),u=fetch("".concat(Object(m.a)(this,v)[v]).concat(n).concat(s,"?").concat(o),Object(m.a)(this,w)[w]),e.next=5,Object(x.a)(u);case 5:if(l=e.sent,d=Object(h.a)(l,2),b=d[0],O=d[1],!b&&O.ok){e.next=12;break}throw Object(m.a)(this,T)[T]="Failed due to: ".concat(b||O.statusText),new Error("Failed due to: ".concat(b||O.statusText));case 12:return e.next=14,O.json();case 14:return e.abrupt("return",e.sent);case 15:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getAutocompleteSearch",value:function(){var e=Object(b.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.request({endPoint:o.AUTOCOMPLETE,query:{q:t}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getCurrentConditions",value:function(){var e=Object(b.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.request({endPoint:o.CURRENT_CONDITIONS,key:t});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getFiveDayForecast",value:function(){var e=Object(b.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.request({endPoint:o.FIVE_DAY_FORECAST,key:t});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getGeopositionSearch",value:function(){var e=Object(b.a)(j.a.mark((function e(t){var n,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.latitude,r=t.longitude,e.next=3,this.request({endPoint:o.GEOPOSITION,query:{q:"".concat(n,",").concat(r)}});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getLocationInfoByKey",value:function(){var e=Object(b.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.request({endPoint:o.GET_INFO_BY_KEY,key:t});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getImageUrl",value:function(e){return"".concat(Object(m.a)(this,E)[E]).concat(e,"-s.png")}},{key:"getCombinedData",value:function(){var e=Object(b.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Promise.all([this.getCurrentConditions(t),this.getLocationInfoByKey(t),this.getFiveDayForecast(t)]));case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getCombinedDataCallback",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:console.log;this.getCombinedData(e).then(t).catch(n)}},{key:"getLatestErrorMessage",value:function(){return Object(m.a)(this,T)[T]}}]),e}()),I={conditions:{WeatherText:"Mostly cloudy",WeatherIcon:6,Temperature:{Metric:{Value:22.2},Imperial:{Value:72}}},info:{Key:"221329",LocalizedName:"Georgia",Country:{ID:"JM",LocalizedName:"Jamaica"},AdministrativeArea:{ID:"07",LocalizedName:"Trelawny"}},fiveDayForecast:{DailyForecasts:[{EpochDate:1626346800,Temperature:{Minimum:{Value:56,Unit:"F"},Maximum:{Value:77,Unit:"F"}},Day:{Icon:18},Night:{Icon:35}},{EpochDate:1626433200,Temperature:{Minimum:{Value:60,Unit:"F"},Maximum:{Value:74,Unit:"F"}},Day:{Icon:4},Night:{Icon:40}},{EpochDate:1626519600,Temperature:{Minimum:{Value:59,Unit:"F"},Maximum:{Value:75,Unit:"F"}},Day:{Icon:12},Night:{Icon:7}},{EpochDate:1626606e3,Temperature:{Minimum:{Value:60,Unit:"F"},Maximum:{Value:79,Unit:"F"}},Day:{Icon:12},Night:{Icon:34}},{EpochDate:1626692400,Temperature:{Minimum:{Value:62,Unit:"F"},Maximum:{Value:79,Unit:"F"}},Day:{Icon:1},Night:{Icon:34}}]}};!function(e){e.TOGGLE="TOGGLE_CELSIUS_FAHRENHEIT",e.ADD_FAVORITE="ADD_WEATHER_KEY_TO_FAVORITES",e.REMOVE_FAVORITE="REMOVE_WEATHER_KEY_FROM_FAVORITES",e.CHANGE_CURRENT="CHANGE_CURRENT_WEATHER_KEY",e.ADD_RESULTS="ADD_AUTOCOMPLETE_WEATHER_RESULTS",e.RETURN="RETURN_TO_MAIN_DISPLAY"}(y||(y={}));var C={celsius:!0,favorites:[],current:I,searchResults:[]},R="3383898";function k(){return _.apply(this,arguments)}function _(){return(_=Object(b.a)(j.a.mark((function e(){var t,n,r,a,c,i;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!navigator||!navigator.geolocation){e.next=14;break}return e.next=3,new Promise((function(e,t){navigator.geolocation.getCurrentPosition(e,t)}));case 3:return t=e.sent,n={longitude:t.coords.longitude,latitude:t.coords.latitude},e.next=7,Object(x.a)(D.getGeopositionSearch(n));case 7:if(r=e.sent,a=Object(h.a)(r,2),c=a[0],i=a[1],!c){e.next=13;break}return e.abrupt("return",R);case 13:return e.abrupt("return",i.Key);case 14:return e.abrupt("return",R);case 15:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y.TOGGLE:return Object(i.a)(Object(i.a)({},e),{},{celsius:!e.celsius});case y.ADD_FAVORITE:return Object(i.a)(Object(i.a)({},e),{},{favorites:[].concat(Object(d.a)(e.favorites),[t.payload.key])});case y.REMOVE_FAVORITE:return Object(i.a)(Object(i.a)({},e),{},{favorites:e.favorites.filter((function(e){return e!==t.payload.key}))});case y.CHANGE_CURRENT:return Object(i.a)(Object(i.a)({},e),{},{current:t.payload.current});case y.ADD_RESULTS:return Object(i.a)(Object(i.a)({},e),{},{searchResults:t.payload.results});case y.RETURN:return Object(i.a)(Object(i.a)({},e),{},{searchResults:[]});default:return e}},A=n(55),N=Object(A.a)({theme:u,weather:F}),U=n(43),S=n(2),M=Object(A.b)(N,{},window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),V=function(e){var t=e.children;return Object(S.jsx)(U.a,{store:M,children:t})},L=function(){return Object(U.b)()},G=U.c,P=n(73),H=n(130),W=n(145),K=n(129);var z=function(e){var t,n=e.children,r=G((function(e){return e.theme.dark}));return Object(S.jsx)(K.a,{theme:(t=r,Object(P.a)({palette:{type:t?"dark":"light",primary:{main:"#002884",contrastText:"#fff"},secondary:{main:"#606CA8",contrastText:"#000"}}})),children:Object(S.jsx)(H.a,{children:Object(S.jsx)(W.a,{maxWidth:"100vw",minHeight:"100vh",bgcolor:"background.paper",children:n})})})},q=n(132),Y=n(133),B=n(134),J=function(){var e=L(),t=G((function(e){return e.theme.dark})),n=G((function(e){return e.weather.celsius}));return Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(q.a,{style:{margin:"1em"},onClick:function(){return e({type:r.TOGGLE})},children:t?Object(S.jsx)(Y.a,{size:15}):Object(S.jsx)(B.a,{size:15})}),Object(S.jsx)(q.a,{style:{margin:"1em"},onClick:function(){return e({type:y.TOGGLE})},children:n?"F":"C"})]})},X=n(0),Q=n(143),Z=function(){var e=Object(X.useRef)(),t=L();return Object(S.jsxs)(W.a,{display:"flex",width:"40%",margin:"2em",justifyContent:"space-around",alignItems:"center",children:[Object(S.jsx)(Q.a,{fullWidth:!0,type:"search",inputRef:e}),Object(S.jsx)(q.a,{onClick:function(){""===e.current.value?t({type:y.RETURN}):D.getAutocompleteSearch(e.current.value).then((function(e){t({type:y.ADD_RESULTS,payload:{results:e}})}))},children:"Search"})]})},$=n(21),ee=n(135),te=n(136),ne=n(137),re=n(138),ae=n(139),ce=n(102),ie=function(){var e=G((function(e){return e.weather.searchResults})),t=L(),n=Object($.a)(),r=Object(ee.a)(n.breakpoints.up("lg"));return Object(S.jsx)(te.a,{container:!0,direction:"row",justifyContent:"center",spacing:5,children:e.map((function(e,n){return Object(S.jsx)(te.a,{style:{margin:"1em",textAlign:"center"},item:!0,xs:12,lg:2,children:Object(S.jsx)(ne.a,{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:Object(S.jsx)(re.a,{style:{minHeight:r?"20vh":"10vh"},onClick:function(){return function(e){var n=e.Key;D.getCombinedDataCallback(n,(function(e){var n=Object(h.a)(e,3),r=n[0],a=n[1],c=n[2];t({type:y.CHANGE_CURRENT,payload:{current:{conditions:r,info:a,fiveDayForecast:c}}}),t({type:y.RETURN})}))}(e)},children:Object(S.jsx)(ae.a,{children:Object(S.jsxs)(ce.a,{children:[e.LocalizedName,", ",e.AdministrativeArea.LocalizedName,","," ",e.Country.LocalizedName]})})})})},n)}))})},se=function(e){var t=e.conditions,n=e.info,r=t.WeatherIcon,a=t.Temperature,c=n.LocalizedName,i=G((function(e){return e.weather.celsius})),s=a[i?"Metric":"Imperial"].Value;return Object(S.jsxs)(W.a,{display:"flex",width:"30vw",alignItems:"center",color:"background.main",style:{margin:"2em"},children:[Object(S.jsx)("div",{children:Object(S.jsx)("img",{src:D.getImageUrl(r),alt:"weather-summary-icon"})}),Object(S.jsxs)(W.a,{children:[Object(S.jsx)(ce.a,{variant:"h5",color:"textPrimary",children:c}),Object(S.jsxs)(ce.a,{variant:"h5",color:"textPrimary",children:[s,"\xb0 ",i?"C":"F"]})]})]})},oe=n(140),ue=n(141),le=n(6),je=n(57),he=Object(le.a)((function(){return{root:{color:je.a[500]}}}))(q.a),de=function(e){var t=e.info.Key,n=L(),r=G((function(e){return e.weather.favorites})).includes(t);return Object(S.jsx)(W.a,{color:"secondary.main",display:"flex",alignItems:"center",justifyContent:"space-around",children:Object(S.jsx)(he,{onClick:function(){n({type:r?y.REMOVE_FAVORITE:y.ADD_FAVORITE,payload:{key:t}})},children:r?Object(S.jsx)(oe.a,{size:50}):Object(S.jsx)(ue.a,{size:50})})})},be=function(e){var t=e.forecast,n=G((function(e){return e.weather.celsius})),r=function(e,t){var r=e.Unit;return"C"===r===n?"".concat(e.Value,"\xb0-").concat(t.Value,"\xb0 ").concat(r):"F"===e.Unit?"".concat(Math.round((e.Value-30)/2),"\xb0-").concat(Math.round((t.Value-30)/2),"\xb0 C"):"".concat(Math.round(2*e.Value+30),"\xb0-").concat(Math.round(2*t.Value+30),"\xb0 F")};return Object(S.jsx)(te.a,{direction:"row",justifyContent:"center",container:!0,children:t.DailyForecasts.map((function(e,t){var n,a=e.Temperature.Maximum,c=e.Temperature.Minimum;return Object(S.jsx)(te.a,{style:{margin:"2em",minWidth:"20em"},item:!0,children:Object(S.jsx)(ne.a,{children:Object(S.jsx)(re.a,{children:Object(S.jsxs)(ae.a,{style:{textAlign:"center"},children:[Object(S.jsx)(ce.a,{variant:"h6",children:(n=e.EpochDate,["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][new Date(1e3*n).getDay()])}),Object(S.jsxs)("div",{children:[Object(S.jsx)(ce.a,{children:"Day"}),Object(S.jsx)("img",{src:D.getImageUrl(e.Day.Icon),alt:"day-weather-icon"})]}),Object(S.jsxs)(ce.a,{children:["Range ",r(c,a)]}),Object(S.jsxs)("div",{children:[Object(S.jsx)("img",{src:D.getImageUrl(e.Night.Icon),alt:"night-weather-icon"}),Object(S.jsx)(ce.a,{children:"Night"})]})]})})})},t)}))})},Oe=function(){var e=G((function(e){return e.weather.current})),t=e.conditions,n=e.info,r=e.fiveDayForecast,a=Object($.a)(),c=Object(ee.a)(a.breakpoints.up("md"));return Object(S.jsx)(W.a,{display:"flex",justifyContent:"space-between",flexDirection:"column",alignItems:"center",children:e&&Object(S.jsxs)(S.Fragment,{children:[Object(S.jsxs)(W.a,{display:"flex",width:"80%",justifyContent:"space-between",alignItems:"center",children:[Object(S.jsx)(se,{conditions:t,info:n}),Object(S.jsx)(de,{info:n})]}),Object(S.jsx)(W.a,{style:{margin:"0 auto"},color:"secondary.main",children:Object(S.jsxs)(ce.a,{variant:"h2",color:"textPrimary",style:{fontSize:c?"4em":"3em"},children:['"',e.conditions.WeatherText,'"']})}),Object(S.jsx)(be,{forecast:r})]})})},fe=Object(X.memo)(Oe),me=function(){var e=G((function(e){return e.weather.searchResults}));return Object(S.jsx)(W.a,{display:"flex",justifyContent:"center",width:"100%",minHeight:"75vh",bgcolor:"background.default",children:e.length?Object(S.jsx)(ie,{}):Object(S.jsx)(fe,{})})},pe=function(){return Object(S.jsxs)(W.a,{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",width:"100%",minHeight:"75vh",bgcolor:"background.default",children:[Object(S.jsx)(ce.a,{variant:"h3",children:"Whoops seems like we have encountered an issue!"}),Object(S.jsx)(ce.a,{variant:"h3",children:"Here's the last known error:"}),Object(S.jsx)(ce.a,{variant:"h3",style:{color:"red"},children:D.getLatestErrorMessage()})]})},xe=n(54),ye=n.n(xe),ve=function(){var e=L(),t=Object(X.useState)(!1),n=Object(h.a)(t,2),r=n[0],a=n[1],c=Object(X.useState)(!1),i=Object(h.a)(c,2),s=i[0],o=i[1];return ye()(Object(b.a)(j.a.mark((function t(){var n;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k();case 2:n=t.sent,D.getCombinedDataCallback(n,(function(t){var n=Object(h.a)(t,3),r=n[0],c=n[1],i=n[2];e({type:y.CHANGE_CURRENT,payload:{current:{info:c,conditions:r,fiveDayForecast:i}}}),a(!0)}),(function(){return o(!0)}));case 4:case"end":return t.stop()}}),t)}))),[]),Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(Z,{}),r&&Object(S.jsx)(me,{}),s&&Object(S.jsx)(pe,{})]})},ge=n(12),Ee=function(e){var t=e.combinedDataArray,n=G((function(e){return e.weather.celsius})),r=Object(ge.f)(),a=L();return Object(S.jsx)(te.a,{style:{width:"90%"},direction:"row",justifyContent:"center",container:!0,children:t.map((function(e,t){var c=Object(h.a)(e,2),i=c[0],s=c[1],o=n?i.Temperature.Metric.Value:i.Temperature.Imperial.Value,u=n?"C":"F";return Object(S.jsx)(te.a,{style:{margin:"2em",minWidth:"20em"},item:!0,children:Object(S.jsx)(ne.a,{children:Object(S.jsx)(re.a,{onClick:function(){return function(e){var t=Object(h.a)(e,3),n=t[0],c=t[1],i=t[2];a({type:y.CHANGE_CURRENT,payload:{current:{conditions:n,info:c,fiveDayForecast:i}}}),r.push("/")}(e)},children:Object(S.jsxs)(ae.a,{style:{textAlign:"center"},children:[Object(S.jsx)(ce.a,{children:s.LocalizedName}),Object(S.jsxs)(ce.a,{children:[o,"\xb0 ",u]}),Object(S.jsx)("div",{children:Object(S.jsx)("img",{src:D.getImageUrl(i.WeatherIcon),alt:"favorites-weather-icon-".concat(t)})}),Object(S.jsx)(ce.a,{children:i.WeatherText})]})})})},t)}))})},we={home:{name:"Home",to:"/",component:ve},favorites:{name:"Favorites",to:"/favorites",component:function(){var e=G((function(e){return e.weather.favorites})),t=Object(X.useState)([]),n=Object(h.a)(t,2),r=n[0],a=n[1],c=Object(X.useState)(!1),i=Object(h.a)(c,2),s=i[0],o=i[1];return ye()(Object(b.a)(j.a.mark((function t(){var n;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all(e.map(function(){var e=Object(b.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.getCombinedData(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 2:return n=t.sent,a(n),o(!0),t.abrupt("return",(function(){return o(!1)}));case 6:case"end":return t.stop()}}),t)}))),[]),Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(ce.a,{variant:"h3",style:{margin:"1em"},color:"textPrimary",children:"Favorites Page"}),s&&Object(S.jsx)(Ee,{combinedDataArray:r})]})}}},Te=n(35),De=n(142),Ie=n(146),Ce=function(){return Object(S.jsxs)(W.a,{display:"flex",alignItems:"center",width:"30vw",justifyContent:"flex-end",color:"secondary.main",children:[Object.values(we).map((function(e,t){return Object(S.jsx)(De.a,{style:{margin:"1em",minWidth:"4em"},color:"textPrimary",component:Te.b,to:e.to,children:e.name},t)})),Object(S.jsx)(Ie.a,{smDown:!0,children:Object(S.jsx)(J,{})})]})},Re=Object(X.memo)(Ce),ke=function(){return Object(S.jsxs)(W.a,{display:"flex",justifyContent:"space-between",alignItems:"center",bgcolor:"secondary.main",children:[Object(S.jsx)(ce.a,{variant:"h5",style:{marginLeft:"2em",fontStyle:"italic"},children:"Weather App"}),Object(S.jsx)(Re,{})]})},_e=Object(X.memo)(ke),Fe=function(){return Object(S.jsx)(ge.c,{children:Object.values(we).map((function(e,t){return Object(S.jsx)(ge.a,{path:e.to,exact:!0,component:e.component},t)}))})},Ae=function(){return Object(S.jsx)(W.a,{display:"flex",alignItems:"center",flexDirection:"column",children:Object(S.jsx)(Fe,{})})},Ne=function(){return Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(_e,{}),Object(S.jsx)(Ae,{})]})},Ue=function(){return Object(S.jsx)(V,{children:Object(S.jsx)(z,{children:Object(S.jsx)(Te.a,{children:Object(S.jsx)(Ne,{})})})})};c.a.render(Object(S.jsx)(Ue,{}),document.getElementById("root"))}},[[98,1,2]]]);
//# sourceMappingURL=main.59a48ffe.chunk.js.map
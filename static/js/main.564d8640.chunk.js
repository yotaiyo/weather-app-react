(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,t,i){e.exports=i(28)},,,,,,function(e,t,i){},,function(e,t,i){},,function(e,t,i){},,function(e,t,i){},,function(e,t,i){},,function(e,t,i){},,function(e,t,i){},,function(e,t,i){"use strict";i.r(t);var a=i(0),n=i.n(a),c=i(2),m=i.n(c),d=(i(14),i(3)),r=i(4),o=i(6),l=i(5),y=i(7),_=(i(16),i(18),function(e){var t=e.inputData,i=e.onChangeCityId;return n.a.createElement("div",{className:"city-selector"},n.a.createElement("label",{htmlFor:"selector-box"},"\u90fd\u5e02\u3092\u9078\u629e\u3057\u3066\u304f\u3060\u3055\u3044"),n.a.createElement("select",{id:"selector-box",name:"selector-box",onChange:i},t.map(function(e){return n.a.createElement("option",{value:e.id,key:e.id}," ",e.city_name," ")})))}),s=(i(20),function(e){var t=e.locationArea,i=e.locationPrefecture,a=e.locationCity,c="";return t&&(c="".concat(t," > ").concat(i," > ").concat(a)),n.a.createElement("div",{className:"location-info-area"},n.a.createElement("div",{className:"location-info"}," ",c))}),u=(i(22),function(e){var t=e.table[0]?e.table[0]:"",i=e.table[1]?e.table[1]:"",a=e.table[2]?e.table[2]:"";return n.a.createElement("div",{className:"table-area"},n.a.createElement("table",{className:"table",border:"1",cellSpacing:"0",cellPadding:"0"},n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",{className:"date"}," ","\u4eca\u65e5\uff08".concat(t.date||"","\uff09\u306e\u5929\u6c17")," "),n.a.createElement("th",{className:"date"}," ","\u660e\u65e5\uff08".concat(i.date||"","\uff09\u306e\u5929\u6c17")," "),n.a.createElement("th",{className:"date"}," ","\u660e\u5f8c\u65e5\uff08".concat(a.date||"","\uff09\u306e\u5929\u6c17")," "))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("th",{className:"weather-state"}," ",t.telop," "),n.a.createElement("th",{className:"weather-state"}," ",i.telop," "),n.a.createElement("th",{className:"weather-state"}," ",a.telop," ")),n.a.createElement("tr",null,n.a.createElement("th",{className:"temperature-max"}," ","\u6700\u9ad8\u6c17\u6e29\uff1a".concat(t.temperatureMax||"")," "),n.a.createElement("th",{className:"temperature-max"}," ","\u6700\u9ad8\u6c17\u6e29\uff1a".concat(i.temperatureMax||"")," "),n.a.createElement("th",{className:"temperature-max"}," ","\u6700\u9ad8\u6c17\u6e29\uff1a".concat(a.temperatureMax||"")," ")),n.a.createElement("tr",null,n.a.createElement("th",{className:"temperature-min"}," ","\u6700\u4f4e\u6c17\u6e29\uff1a".concat(t.temperatureMin||"")," "),n.a.createElement("th",{className:"temperature-min"}," ","\u6700\u4f4e\u6c17\u6e29\uff1a".concat(i.temperatureMin||"")," "),n.a.createElement("th",{className:"temperature-min"}," ","\u6700\u4f4e\u6c17\u6e29\uff1a".concat(a.temperatureMin||"")," ")))))}),p=(i(24),function(e){return n.a.createElement("div",{className:"description-area"},n.a.createElement("div",{className:"description-title"}," ",e.description.title," "),n.a.createElement("div",null," ",e.description.description.text," "))}),h=(i(26),function(e){return n.a.createElement("div",{className:"pinpoint-locations-area"},n.a.createElement("div",{className:"pinpoint-locations-title"}," ","\u8a73\u7d30\u306a\u5929\u6c17","\u3000"),n.a.createElement("div",{className:"pinpoint-locations-link"},n.a.createElement("ul",null,e.pinpointLocations.map(function(e){return n.a.createElement("li",{key:e.name},n.a.createElement("a",{href:e.link},e.name))}))))}),E=Object({NODE_ENV:"production",PUBLIC_URL:"/weather-app"}).REACT_APP_BASE_URL,f=function(e){return fetch(E+e).then(function(e){return e.json()}).catch(function(e){return console.error(e)})},b=function(e){if(e.forecasts)return e.forecasts.map(function(e){return{date:e.date,telop:e.telop,temperatureMax:e.temperature&&e.temperature.max&&e.temperature.max.celsius||null,temperatureMin:e.temperature&&e.temperature.min&&e.temperature.min.celsius||null}})},v=[{city_name:"\u7a1a\u5185",id:"011000"},{city_name:"\u65ed\u5ddd",id:"012010"},{city_name:"\u7559\u840c",id:"012020"},{city_name:"\u7db2\u8d70",id:"013010"},{city_name:"\u5317\u898b",id:"013020"},{city_name:"\u7d0b\u5225",id:"013030"},{city_name:"\u6839\u5ba4",id:"014010"},{city_name:"\u91e7\u8def",id:"014020"},{city_name:"\u5e2f\u5e83",id:"014030"},{city_name:"\u5ba4\u862d",id:"015010"},{city_name:"\u6d66\u6cb3",id:"015020"},{city_name:"\u672d\u5e4c",id:"016010"},{city_name:"\u5ca9\u898b\u6ca2",id:"016020"},{city_name:"\u5036\u77e5\u5b89",id:"016030"},{city_name:"\u51fd\u9928",id:"017010"},{city_name:"\u6c5f\u5dee",id:"017020"},{city_name:"\u9752\u68ee",id:"020010"},{city_name:"\u3080\u3064",id:"020020"},{city_name:"\u516b\u6238",id:"020030"},{city_name:"\u76db\u5ca1",id:"030010"},{city_name:"\u5bae\u53e4",id:"030020"},{city_name:"\u5927\u8239\u6e21",id:"030030"},{city_name:"\u4ed9\u53f0",id:"040010"},{city_name:"\u767d\u77f3",id:"040020"},{city_name:"\u79cb\u7530",id:"050010"},{city_name:"\u6a2a\u624b",id:"050020"},{city_name:"\u5c71\u5f62",id:"060010"},{city_name:"\u7c73\u6ca2",id:"060020"},{city_name:"\u9152\u7530",id:"060030"},{city_name:"\u65b0\u5e84",id:"060040"},{city_name:"\u798f\u5cf6",id:"070010"},{city_name:"\u5c0f\u540d\u6d5c",id:"070020"},{city_name:"\u82e5\u677e",id:"070030"},{city_name:"\u6c34\u6238",id:"080010"},{city_name:"\u571f\u6d66",id:"080020"},{city_name:"\u5b87\u90fd\u5bae",id:"090010"},{city_name:"\u5927\u7530\u539f",id:"090020"},{city_name:"\u524d\u6a4b",id:"100010"},{city_name:"\u307f\u306a\u304b\u307f",id:"100020"},{city_name:"\u3055\u3044\u305f\u307e",id:"110010"},{city_name:"\u718a\u8c37",id:"110020"},{city_name:"\u79e9\u7236",id:"110030"},{city_name:"\u5343\u8449",id:"120010"},{city_name:"\u929a\u5b50",id:"120020"},{city_name:"\u9928\u5c71",id:"120030"},{city_name:"\u6771\u4eac",id:"130010"},{city_name:"\u5927\u5cf6",id:"130020"},{city_name:"\u516b\u4e08\u5cf6",id:"130030"},{city_name:"\u7236\u5cf6",id:"130040"},{city_name:"\u6a2a\u6d5c",id:"140010"},{city_name:"\u5c0f\u7530\u539f",id:"140020"},{city_name:"\u65b0\u6f5f",id:"150010"},{city_name:"\u9577\u5ca1",id:"150020"},{city_name:"\u9ad8\u7530",id:"150030"},{city_name:"\u76f8\u5ddd",id:"150040"},{city_name:"\u5bcc\u5c71",id:"160010"},{city_name:"\u4f0f\u6728",id:"160020"},{city_name:"\u91d1\u6ca2",id:"170010"},{city_name:"\u8f2a\u5cf6",id:"170020"},{city_name:"\u798f\u4e95",id:"180010"},{city_name:"\u6566\u8cc0",id:"180020"},{city_name:"\u7532\u5e9c",id:"190010"},{city_name:"\u6cb3\u53e3\u6e56",id:"190020"},{city_name:"\u9577\u91ce",id:"200010"},{city_name:"\u677e\u672c",id:"200020"},{city_name:"\u98ef\u7530",id:"200030"},{city_name:"\u5c90\u961c",id:"210010"},{city_name:"\u9ad8\u5c71",id:"210020"},{city_name:"\u9759\u5ca1",id:"220010"},{city_name:"\u7db2\u4ee3",id:"220020"},{city_name:"\u4e09\u5cf6",id:"220030"},{city_name:"\u6d5c\u677e",id:"220040"},{city_name:"\u540d\u53e4\u5c4b",id:"230010"},{city_name:"\u8c4a\u6a4b",id:"230020"},{city_name:"\u6d25",id:"240010"},{city_name:"\u5c3e\u9df2",id:"240020"},{city_name:"\u5927\u6d25",id:"250010"},{city_name:"\u5f66\u6839",id:"250020"},{city_name:"\u4eac\u90fd",id:"260010"},{city_name:"\u821e\u9db4",id:"260020"},{city_name:"\u5927\u962a",id:"270000"},{city_name:"\u795e\u6238",id:"280010"},{city_name:"\u8c4a\u5ca1",id:"280020"},{city_name:"\u5948\u826f",id:"290010"},{city_name:"\u98a8\u5c4b",id:"290020"},{city_name:"\u548c\u6b4c\u5c71",id:"300010"},{city_name:"\u6f6e\u5cac",id:"300020"},{city_name:"\u9ce5\u53d6",id:"310010"},{city_name:"\u7c73\u5b50",id:"310020"},{city_name:"\u677e\u6c5f",id:"320010"},{city_name:"\u6d5c\u7530",id:"320020"},{city_name:"\u897f\u90f7",id:"320030"},{city_name:"\u5ca1\u5c71",id:"330010"},{city_name:"\u6d25\u5c71",id:"330020"},{city_name:"\u5e83\u5cf6",id:"340010"},{city_name:"\u5e84\u539f",id:"340020"},{city_name:"\u4e0b\u95a2",id:"350010"},{city_name:"\u5c71\u53e3",id:"350020"},{city_name:"\u67f3\u4e95",id:"350030"},{city_name:"\u8429",id:"350040"},{city_name:"\u5fb3\u5cf6",id:"360010"},{city_name:"\u65e5\u548c\u4f50",id:"360020"},{city_name:"\u9ad8\u677e",id:"370000"},{city_name:"\u677e\u5c71",id:"380010"},{city_name:"\u65b0\u5c45\u6d5c",id:"380020"},{city_name:"\u5b87\u548c\u5cf6",id:"380030"},{city_name:"\u9ad8\u77e5",id:"390010"},{city_name:"\u5ba4\u6238\u5cac",id:"390020"},{city_name:"\u6e05\u6c34",id:"390030"},{city_name:"\u798f\u5ca1",id:"400010"},{city_name:"\u516b\u5e61",id:"400020"},{city_name:"\u98ef\u585a",id:"400030"},{city_name:"\u4e45\u7559\u7c73",id:"400040"},{city_name:"\u4f50\u8cc0",id:"410010"},{city_name:"\u4f0a\u4e07\u91cc",id:"410020"},{city_name:"\u9577\u5d0e",id:"420010"},{city_name:"\u4f50\u4e16\u4fdd",id:"420020"},{city_name:"\u53b3\u539f",id:"420030"},{city_name:"\u798f\u6c5f",id:"420040"},{city_name:"\u718a\u672c",id:"430010"},{city_name:"\u963f\u8607\u4e59\u59eb",id:"430020"},{city_name:"\u725b\u6df1",id:"430030"},{city_name:"\u4eba\u5409",id:"430040"},{city_name:"\u5927\u5206",id:"440010"},{city_name:"\u4e2d\u6d25",id:"440020"},{city_name:"\u65e5\u7530",id:"440030"},{city_name:"\u4f50\u4f2f",id:"440040"},{city_name:"\u5bae\u5d0e",id:"450010"},{city_name:"\u5ef6\u5ca1",id:"450020"},{city_name:"\u90fd\u57ce",id:"450030"},{city_name:"\u9ad8\u5343\u7a42",id:"450040"},{city_name:"\u9e7f\u5150\u5cf6",id:"460010"},{city_name:"\u9e7f\u5c4b",id:"460020"},{city_name:"\u7a2e\u5b50\u5cf6",id:"460030"},{city_name:"\u540d\u702c",id:"460040"},{city_name:"\u90a3\u8987",id:"471010"},{city_name:"\u540d\u8b77",id:"471020"},{city_name:"\u4e45\u7c73\u5cf6",id:"471030"},{city_name:"\u5357\u5927\u6771",id:"472000"},{city_name:"\u5bae\u53e4\u5cf6",id:"473000"},{city_name:"\u77f3\u57a3\u5cf6",id:"474010"},{city_name:"\u4e0e\u90a3\u56fd\u5cf6",id:"474020"}],N=function(e){function t(e){var i;return Object(d.a)(this,t),(i=Object(o.a)(this,Object(l.a)(t).call(this,e))).state={inputData:v,cityId:null,location:{},table:{},description:{},pinpointLocations:{}},i}return Object(y.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){this.setState({cityId:this.state.inputData[0].id})}},{key:"componentDidUpdate",value:function(e,t){var i=this;this.state.cityId!==t.cityId&&f(this.state.cityId).then(function(e){i.setState({location:{locationArea:e.location.area,locationPrefecture:e.location.prefecture,locationCity:e.location.city},table:b(e),description:{title:e.title,description:e.description},pinpointLocations:e.pinpointLocations})}).catch(function(e){return console.error(e)})}},{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"main"},n.a.createElement(_,{inputData:this.state.inputData,onChangeCityId:function(t){e.setState({cityId:t.target.value})}}),n.a.createElement(s,{locationArea:this.state.location.locationArea,locationPrefecture:this.state.location.locationPrefecture,locationCity:this.state.location.locationCity}),0!==Object.keys(this.state.table).length?n.a.createElement(u,{table:this.state.table}):n.a.createElement("div",null),0!==Object.keys(this.state.description).length?n.a.createElement(p,{description:this.state.description}):n.a.createElement("div",null),0!==Object.keys(this.state.pinpointLocations).length?n.a.createElement(h,{pinpointLocations:this.state.pinpointLocations}):n.a.createElement("div",null))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));m.a.render(n.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[8,2,1]]]);
//# sourceMappingURL=main.564d8640.chunk.js.map
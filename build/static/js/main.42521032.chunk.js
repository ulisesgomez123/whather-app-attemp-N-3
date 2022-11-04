(this["webpackJsonp09-react-routing"]=this["webpackJsonp09-react-routing"]||[]).push([[0],{14:function(e,c,a){e.exports={inputSearchBar:"SearchBar_inputSearchBar__2I6fY",btn:"SearchBar_btn__24gJK"}},16:function(e,c,a){e.exports={cards:"Cards_cards__3CXvq",info:"Cards_info__1JYYe"}},25:function(e,c,a){},27:function(e,c,a){},28:function(e,c,a){},37:function(e,c,a){},38:function(e,c,a){},39:function(e,c,a){"use strict";a.r(c);var t=a(1),n=a.n(t),s=a(18),i=a.n(s),r=a(20),l=a(12),d=(a(25),a(0));function o(){return n.a.useEffect((function(){return document.body.classList.add("j"),function(){document.body.classList.remove("j")}}),[]),Object(d.jsxs)("div",{className:"About",children:[Object(d.jsx)("h1",{children:"Information:"}),Object(d.jsx)("p",{className:"p",children:"\ud83d\udcbb this app was created with these technologies:"}),Object(d.jsx)("p",{className:"p",children:"# JavaScript"}),Object(d.jsx)("p",{className:"p",children:"# React Js"}),Object(d.jsx)("p",{className:"p",children:"# React Js"}),Object(d.jsx)("p",{className:"p",children:"# CSS"}),Object(d.jsx)("p",{className:"p",children:"# HTML"}),Object(d.jsx)("p",{className:"p",children:"\ud83d\udcbb Developer: Gomez Ulises E. E."}),Object(d.jsx)("p",{className:"p",children:"\ud83d\udcbb the WEB-app makes a request to an external API called: Open Weather Map"})]})}a(27);var j=a.p+"static/media/pronostico-del-tiempo.7b0879d5.png",m=a(14),h=a.n(m);function b(e){var c=e.onSearch,a=Object(t.useState)(""),n=Object(l.a)(a,2),s=n[0],i=n[1];return Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault(),c(s)},children:[Object(d.jsx)("input",{className:h.a.inputSearchBar,type:"text",placeholder:"   Enter City...",value:s,onChange:function(e){return i(e.target.value)}}),Object(d.jsx)("input",{type:"submit",value:"Search",className:h.a.btn})]})}a(28);var u=a(7);var p=function(e){var c=e.onSearch;return Object(d.jsxs)("nav",{className:"navbar navbar-dark bg-dark",children:[Object(d.jsxs)(u.c,{activeClassName:"activo",to:"/",children:[Object(d.jsx)("img",{id:"logoClima",src:j,alt:""}),Object(d.jsx)("span",{className:"navbar-brand",children:"Home - Weather App"})]}),Object(d.jsx)(b,{onSearch:c}),Object(d.jsx)(u.c,{activeClassName:"active",to:"/about",children:Object(d.jsx)("span",{id:"hola",children:"About"})})]})},x=a(16),O=a.n(x);a(37);function v(e){var c=e.min,a=e.max,t=e.name,n=e.img,s=e.onClose,i=e.id;return Object(d.jsxs)("div",{className:"card",children:[Object(d.jsx)("div",{id:"closeIcon",className:"row",children:Object(d.jsx)("button",{onClick:s,className:"btn btn-sm btn-danger",children:"X"})}),Object(d.jsxs)("div",{className:"card-body",children:[Object(d.jsx)(u.b,{to:"/ciudad1/".concat(i),children:Object(d.jsx)("h5",{className:"card-title",children:t})}),Object(d.jsxs)("div",{className:"row",children:[Object(d.jsxs)("div",{className:"col-sm-4 col-md-4 col-lg-4",children:[Object(d.jsx)("p",{children:"Min"}),Object(d.jsxs)("p",{children:[c,"\xb0C"]})]}),Object(d.jsxs)("div",{className:"col-sm-4 col-md-4 col-lg-4",children:[Object(d.jsx)("p",{children:"Max"}),Object(d.jsxs)("p",{children:[a,"\xb0C"]})]}),Object(d.jsx)("div",{className:"col-sm-4 col-md-4 col-lg-4",children:Object(d.jsx)("img",{className:"iconoClima",src:"http://openweathermap.org/img/wn/"+n+"@2x.png",width:"80",height:"80",alt:""})})]})]})]})}function f(e){var c=e.cities,a=e.onClose;return Object(d.jsxs)("div",{className:O.a.cards,children:[Object(d.jsx)("div",{className:O.a.info,children:" \ud83d\udc49 If you want more information about your city, click on its name \ud83d\udc48"}),c.map((function(e){return Object(d.jsx)(v,{id:e.id,max:e.max,min:e.min,name:e.name,img:e.img,onClose:function(){return a(e.id)}},e.id)}))]})}var N=a(2);a(38);function g(e){var c=e.city;return Object(d.jsx)("div",{className:"hola",children:Object(d.jsxs)("div",{children:[Object(d.jsxs)("p",{className:"p1",children:[c.name,":"]}),Object(d.jsxs)("div",{children:[Object(d.jsxs)("div",{className:"hola1",children:[Object(d.jsx)("label",{className:"p3",children:"Temperature:"}),Object(d.jsxs)("p",{className:"p2",children:[" ",c.temp," \xbaC"]})]}),Object(d.jsxs)("div",{className:"hola1",children:[Object(d.jsx)("label",{className:"p3",children:"Weather:"}),Object(d.jsx)("p",{className:"p2",children:c.weather})]}),Object(d.jsxs)("div",{className:"hola1",children:[Object(d.jsx)("label",{className:"p3",children:"Wind:"}),Object(d.jsxs)("p",{className:"p2",children:[" ",c.wind," km/h"]})]}),Object(d.jsxs)("div",{className:"hola1",children:[Object(d.jsx)("label",{className:"p3",children:"Amount of Clouds:"}),Object(d.jsx)("p",{className:"p2",children:c.clouds})]}),Object(d.jsxs)("div",{className:"hola1",children:[Object(d.jsx)("label",{className:"p3",children:"Latitude:"}),Object(d.jsxs)("p",{className:"p2",children:[c.latitud,"\xba"]})]}),Object(d.jsxs)("div",{className:"hola1",children:[Object(d.jsx)("label",{className:"p3",children:"Length:"}),Object(d.jsxs)("p",{className:"p2",children:[c.longitud,"\xba"]})]})]})]})})}var C=function(){var e=Object(t.useState)([]),c=Object(l.a)(e,2),a=c[0],n=c[1];function s(e){n((function(c){return c.filter((function(c){return c.id!==e}))}))}function i(e){var c=a.filter((function(c){return c.id===parseInt(e)}));return c.length>0?c[0]:null}return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(N.a,{path:"/",children:Object(d.jsx)(p,{onSearch:function(e){fetch("http://api.openweathermap.org/data/2.5/weather?q=".concat(e,"&appid=").concat("4ae2636d8dfbdc3044bede63951a019b","&units=metric")).then((function(e){return e.json()})).then((function(e){if(void 0!==e.main){var c={min:Math.round(e.main.temp_min),max:Math.round(e.main.temp_max),img:e.weather[0].icon,id:e.id,wind:e.wind.speed,temp:e.main.temp,name:e.name,weather:e.weather[0].main,clouds:e.clouds.all,latitud:e.coord.lat,longitud:e.coord.lon};n((function(e){return[].concat(Object(r.a)(e),[c])}))}else alert("Ciudad no encontrada")}))}})}),Object(d.jsx)(N.a,{exact:!0,path:"/",render:function(){return Object(d.jsx)(f,{cities:a,onClose:s})}}),Object(d.jsx)(N.a,{path:"/about",component:o}),Object(d.jsx)(N.a,{path:"/ciudad1/:ciudadId",render:function(e){var c=e.match;return Object(d.jsx)(g,{city:i(c.params.ciudadId)})}})]})};i.a.render(Object(d.jsx)(u.a,{children:Object(d.jsx)(C,{})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.42521032.chunk.js.map
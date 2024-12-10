(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{57:function(e,t,n){e.exports=n(80)},63:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){var a={"./all.svg":66,"./cycling.svg":67,"./other.svg":68,"./running.svg":69,"./skiing.svg":70};function l(e){var t=c(e);return n(t)}function c(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}l.keys=function(){return Object.keys(a)},l.resolve=c,e.exports=l,l.id=65},66:function(e,t,n){e.exports=n.p+"static/media/all.5c8c5f88.svg"},67:function(e,t,n){e.exports=n.p+"static/media/cycling.2e5b39e8.svg"},68:function(e,t,n){e.exports=n.p+"static/media/other.4ed34d78.svg"},69:function(e,t,n){e.exports=n.p+"static/media/running.7b26ff62.svg"},70:function(e,t,n){e.exports=n.p+"static/media/skiing.f88b16bb.svg"},76:function(e,t,n){},77:function(e,t,n){},79:function(e,t,n){},80:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),c=n(40),r=n.n(c),o=(n(63),n(64),n(88)),s=(n(32),n(33),n(41));var i=(e=>{let t={};return e.keys().forEach(n=>{t[n.replace("./","").replace(".svg","")]=e(n)}),t})(n(65));let u=new Map(Object.entries(i));var d=function(e){let{name:t,description:n}=e,a=u.get(t);return l.a.createElement("div",null,l.a.createElement("img",{src:a,width:"30",height:"30"}))};var m=function(e){return l.a.createElement(s.a,{interactive:!0,className:"card"},l.a.createElement("div",{className:"icon"},l.a.createElement(d,{name:e.event.kind,description:e.event.kind_rus})),l.a.createElement("div",{className:"flex-container"},l.a.createElement("div",{className:"left child"},l.a.createElement("a",{href:e.event.link,target:"_blank",rel:"noopener noreferrer"},e.event.name)),l.a.createElement("div",{className:"right child"},l.a.createElement("span",{className:"date"},e.event.date),l.a.createElement("br",null),l.a.createElement("span",null,e.event.address),l.a.createElement("br",null),l.a.createElement("b",null)," ",e.event.kind_rus," ",l.a.createElement("b",null))))},f=n(89);const v="http://213.159.77.147:8000";function g(e,t){return f.a.get(v+e,{params:t})}var p=function(e,t){!function(e,t,n){g(e,t).then(e=>{n(e.data)}).catch(e=>{console.error("There was an error fetching the events!",e)})}("/events",e,t)},E=n(42);n(75),n(76);var h=e=>{const t=Object(a.useRef)(null),n=Object(a.useRef)(null);return Object(a.useEffect)(()=>{if(t.current)return n.current=new E.a(t.current,{onSelect:t=>{let{date:n}=t;Array.isArray(n)||(n=Array.of(n)),e.onSendData(n)},dateFormat:"dd.MM.yyyy",multipleDates:!0,multipleDatesSeparator:"-",range:e.range}),()=>{var e;null===(e=n.current)||void 0===e||e.destroy()}},[]),Object(a.useEffect)(()=>{var t;null===(t=n.current)||void 0===t||t.update({...e})}),l.a.createElement("input",{ref:t,className:"date-picker",onClick:e=>{console.log(e)}})},b=n(91),k=n(92),y=n(90);const S={name:"all",title:"\u0412\u0441\u0435"};var O=async function(e){return(await g("/kinds",e)).data};n(77);const j=(e,t)=>{let{handleClick:n,handleFocus:a,modifiers:c}=t;return c.matchesPredicate?l.a.createElement(b.a,{active:c.active,disabled:c.disabled,onClick:n,onFocus:a,roleStructure:"listoption",text:e.title,icon:l.a.createElement(d,{name:e.name,description:e.title})}):null};var w=e=>{const[t,n]=l.a.useState(S),[c,r]=Object(a.useState)(!0),[o,s]=Object(a.useState)([]);return Object(a.useEffect)(()=>{(async()=>{try{const e=await O({});e.push(S),s(e)}finally{r(!1)}})()},[]),c?l.a.createElement("div",null,"Loading..."):l.a.createElement(y.a,{items:o,filterable:!1,itemRenderer:j,onItemSelect:t=>{n(t),e.onSendData(t)},className:"filter-elem select"},l.a.createElement(k.a,{text:null===t||void 0===t?void 0:t.title,className:"button"}))};n(79);var N=e=>{const[t,n]=Object(a.useState)([]),[c,r]=Object(a.useState)(S);return l.a.createElement("div",{className:"filter-container"},l.a.createElement(h,{onSendData:e=>{n(e)},range:!0}),l.a.createElement(w,{onSendData:e=>{r(e)}}),l.a.createElement(k.a,{text:"go!",className:"button fit",onClick:()=>{e.onSendData(c,t)}}))};const D=e=>(null===e||void 0===e?void 0:e.getTime())/1e3;var x=(e,t,n)=>(console.log("match"),console.log(e),((e,t)=>(console.log(D(e[0])),console.log(t.timestamp_date),0===e.length||(1===e.length?t.timestamp_date>D(e[0]):t.timestamp_date>D(e[0])&&t.timestamp_date<D(e[1]))))(e,n)&&((e,t)=>e===S||t.kind.includes(e.name))(t,n));let F={};var _=function(){const[e,t]=Object(a.useState)([]),[n,c]=Object(a.useState)([]),[r,s]=Object(a.useState)(!1);Object(a.useEffect)(()=>{i(F),console.log("fetchEvents"),s(!0)},[]),Object(a.useEffect)(()=>{r&&(c(e),console.log("setFilteredEvents"),console.log(e))},[r,e]);const i=e=>{r?console.log("events already fetched"):p(e,t)};return l.a.createElement("div",{className:"App"},l.a.createElement(N,{onSendData:(t,n)=>{console.log("Data received from child:",t.title),console.log("Data received from child:",n),n.length>0&&console.log(n[0].getTime()/1e3),console.log("pre filter"),console.log("events.length"),console.log(e.length);let a=e.filter(e=>x(n,t,e));console.log("events.length after"),console.log(e.length),c(a)}}),l.a.createElement(o.a,null,n.map((e,t)=>l.a.createElement(m,{event:e,key:t}))))};var C=e=>{e&&e instanceof Function&&n.e(8).then(n.bind(null,98)).then(t=>{let{getCLS:n,getFID:a,getFCP:l,getLCP:c,getTTFB:r}=t;n(e),a(e),l(e),c(e),r(e)})};r.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(_,null))),C()}},[[57,6,7]]]);
//# sourceMappingURL=main.d2b1b1e1.chunk.js.map
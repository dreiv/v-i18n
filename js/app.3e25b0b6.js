(function(e){function t(t){for(var r,u,c=t[0],l=t[1],s=t[2],f=0,p=[];f<c.length;f++)u=c[f],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&p.push(o[u][0]),o[u]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);i&&i(t);while(p.length)p.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,c=1;c<n.length;c++){var l=n[c];0!==o[l]&&(r=!1)}r&&(a.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={app:0},a=[];function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/v-i18n/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var s=0;s<c.length;s++)t(c[s]);var i=l;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"49f8":function(e,t,n){var r={"./de.json":"6ce2","./en.json":"edd4","./ro.json":"9542"};function o(e){var t=a(e);return n(t)}function a(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=a,e.exports=o,o.id="49f8"},"6ce2":function(e,t,n){"use strict";n.r(t),t["default"]={message:e=>{const{normalize:t}=e;return t(["hallo i18n !!"])},paragraph:e=>{const{normalize:t}=e;return t(["etwas etwas 🤪"])},line:{weather:e=>{const{normalize:t}=e;return t(["Das Wetter ist wunderbar"])}},the:{end:e=>{const{normalize:t}=e;return t(["Das ist alles!"])}}}},9542:function(e,t,n){"use strict";n.r(t),t["default"]={message:e=>{const{normalize:t}=e;return t(["salut i18n !!"])},paragraph:e=>{const{normalize:t}=e;return t(["ceva ceva :D"])},line:{weather:e=>{const{normalize:t}=e;return t(["Vremea este minunată"])}},the:{end:e=>{const{normalize:t}=e;return t(["Asta e tot!"])}}}},cd49:function(e,t,n){"use strict";n.r(t);var r=n("7a23");function o(e,t,n,o,a,u){return Object(r["o"])(),Object(r["e"])(r["a"],null,[Object(r["f"])("h1",null,Object(r["q"])(e.t("message")),1),Object(r["f"])("p",null,Object(r["q"])(e.t("paragraph")),1),Object(r["f"])("p",null,Object(r["q"])(e.t("line.weather")),1),Object(r["f"])("p",null,Object(r["q"])(e.t("the.end")),1)],64)}var a=n("47e2"),u=Object(r["h"])({name:"App",setup(){const{t:e}=Object(a["b"])();return{t:e}}}),c=n("6b0d"),l=n.n(c);const s=l()(u,[["render",o]]);var i=s;function f(){const e=n("49f8"),t={};return e.keys().forEach(n=>{const r=n.match(/([A-Za-z0-9-_]+)\./i);if(r&&r.length>1){const o=r[1];t[o]=e(n).default}}),t}var p=Object(a["a"])({legacy:!1,locale:"en",fallbackLocale:"en",messages:f()});Object(r["d"])(i).use(p).mount("#app")},edd4:function(e,t,n){"use strict";n.r(t),t["default"]={message:e=>{const{normalize:t}=e;return t(["hello i18n !!"])},paragraph:e=>{const{normalize:t}=e;return t(["something something :D"])},line:{weather:e=>{const{normalize:t}=e;return t(["Weather is wonderfull"])}},the:{end:e=>{const{normalize:t}=e;return t(["That's all!"])}}}}});
//# sourceMappingURL=app.3e25b0b6.js.map
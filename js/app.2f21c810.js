(function(e){function t(t){for(var r,c,u=t[0],l=t[1],s=t[2],f=0,p=[];f<u.length;f++)c=u[f],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&p.push(o[c][0]),o[c]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);i&&i(t);while(p.length)p.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,u=1;u<n.length;u++){var l=n[u];0!==o[l]&&(r=!1)}r&&(a.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={app:0},a=[];function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/v-i18n/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var s=0;s<u.length;s++)t(u[s]);var i=l;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"49f8":function(e,t,n){var r={"./de.json":"6ce2","./en.json":"edd4","./ro.json":"9542"};function o(e){var t=a(e);return n(t)}function a(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=a,e.exports=o,o.id="49f8"},"6ce2":function(e,t,n){"use strict";n.r(t),t["default"]={message:e=>{const{normalize:t}=e;return t(["hallo i18n !!"])},paragraph:e=>{const{normalize:t}=e;return t(["etwas etwas :D"])},the:{end:e=>{const{normalize:t}=e;return t(["Das ist alles!"])}}}},9542:function(e,t,n){"use strict";n.r(t),t["default"]={message:e=>{const{normalize:t}=e;return t(["salut i18n !!"])},paragraph:e=>{const{normalize:t}=e;return t(["ceva ceva :D"])},the:{end:e=>{const{normalize:t}=e;return t(["Asta e tot!"])}}}},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23");function o(e,t,n,o,a,c){return Object(r["o"])(),Object(r["e"])(r["a"],null,[Object(r["f"])("h1",null,Object(r["q"])(e.t("message")),1),Object(r["f"])("p",null,Object(r["q"])(e.t("paragraph")),1),Object(r["f"])("p",null,Object(r["q"])(e.t("the.end")),1)],64)}var a=n("47e2"),c=Object(r["h"])({name:"App",setup:function(){var e=Object(a["b"])(),t=e.t;return{t:t}}}),u=n("6b0d"),l=n.n(u);const s=l()(c,[["render",o]]);var i=s;n("159b"),n("d3b7"),n("ddb0"),n("ac1f"),n("466d");function f(){var e=n("49f8"),t={};return e.keys().forEach((function(n){var r=n.match(/([A-Za-z0-9-_]+)\./i);if(r&&r.length>1){var o=r[1];t[o]=e(n).default}})),t}var p=Object(a["a"])({legacy:!1,locale:"en",fallbackLocale:"en",messages:f()});Object(r["d"])(i).use(p).mount("#app")},edd4:function(e,t,n){"use strict";n.r(t),t["default"]={message:e=>{const{normalize:t}=e;return t(["hello i18n !!"])},paragraph:e=>{const{normalize:t}=e;return t(["something something :D"])},the:{end:e=>{const{normalize:t}=e;return t(["That's all!"])}}}}});
//# sourceMappingURL=app.2f21c810.js.map
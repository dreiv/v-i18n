(function(e){function n(n){for(var r,c,a=n[0],f=n[1],i=n[2],s=0,p=[];s<a.length;s++)c=a[s],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&p.push(o[c][0]),o[c]=0;for(r in f)Object.prototype.hasOwnProperty.call(f,r)&&(e[r]=f[r]);l&&l(n);while(p.length)p.shift()();return u.push.apply(u,i||[]),t()}function t(){for(var e,n=0;n<u.length;n++){for(var t=u[n],r=!0,a=1;a<t.length;a++){var f=t[a];0!==o[f]&&(r=!1)}r&&(u.splice(n--,1),e=c(c.s=t[0]))}return e}var r={},o={app:0},u=[];function c(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,c),t.l=!0,t.exports}c.m=e,c.c=r,c.d=function(e,n,t){c.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,n){if(1&n&&(e=c(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(c.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)c.d(t,r,function(n){return e[n]}.bind(null,r));return t},c.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(n,"a",n),n},c.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},c.p="/v-i18n/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],f=a.push.bind(a);a.push=n,a=a.slice();for(var i=0;i<a.length;i++)n(a[i]);var l=f;u.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("cd49")},"49f8":function(e,n,t){var r={"./en.json":"edd4"};function o(e){var n=u(e);return t(n)}function u(e){if(!t.o(r,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=u,e.exports=o,o.id="49f8"},cd49:function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("7a23");function o(e,n,t,o,u,c){return Object(r["n"])(),Object(r["e"])("h1",null,Object(r["p"])(e.t("message")),1)}var u=t("47e2"),c=Object(r["g"])({name:"App",setup:function(){var e=Object(u["b"])(),n=e.t;return{t:n}}}),a=t("6b0d"),f=t.n(a);const i=f()(c,[["render",o]]);var l=i;t("159b"),t("d3b7"),t("ddb0"),t("ac1f"),t("466d");function s(){var e=t("49f8"),n={};return e.keys().forEach((function(t){var r=t.match(/([A-Za-z0-9-_]+)\./i);if(r&&r.length>1){var o=r[1];n[o]=e(t).default}})),n}var p=Object(u["a"])({legacy:!1,locale:"en",fallbackLocale:"en",messages:s()});Object(r["d"])(l).use(p).mount("#app")},edd4:function(e,n,t){"use strict";t.r(n),n["default"]={message:e=>{const{normalize:n}=e;return n(["hello i18n !!"])}}}});
//# sourceMappingURL=app.82a322e9.js.map
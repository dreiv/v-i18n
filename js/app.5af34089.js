(function(e){function n(n){for(var r,u,c=n[0],l=n[1],i=n[2],f=0,p=[];f<c.length;f++)u=c[f],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&p.push(o[u][0]),o[u]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);s&&s(n);while(p.length)p.shift()();return a.push.apply(a,i||[]),t()}function t(){for(var e,n=0;n<a.length;n++){for(var t=a[n],r=!0,c=1;c<t.length;c++){var l=t[c];0!==o[l]&&(r=!1)}r&&(a.splice(n--,1),e=u(u.s=t[0]))}return e}var r={},o={app:0},a=[];function u(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,u),t.l=!0,t.exports}u.m=e,u.c=r,u.d=function(e,n,t){u.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,n){if(1&n&&(e=u(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(u.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)u.d(t,r,function(n){return e[n]}.bind(null,r));return t},u.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(n,"a",n),n},u.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},u.p="/v-i18n/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=n,c=c.slice();for(var i=0;i<c.length;i++)n(c[i]);var s=l;a.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("cd49")},"0136":function(e,n,t){"use strict";t.r(n),n["default"]={message:e=>{const{normalize:n}=e;return n(["hallo i18n !!"])}}},"3d46":function(e,n,t){"use strict";t.r(n),n["default"]={message:e=>{const{normalize:n}=e;return n(["hello i18n !!"])},paragraph:e=>{const{normalize:n}=e;return n(["something something :D"])}}},"49f8":function(e,n,t){var r={"./de-sample.json":"0136","./ro-sample.json":"8f30","./sample.json":"3d46"};function o(e){var n=a(e);return t(n)}function a(e){if(!t.o(r,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=a,e.exports=o,o.id="49f8"},"8f30":function(e,n,t){"use strict";t.r(n),n["default"]={message:e=>{const{normalize:n}=e;return n(["salut i18n !!"])}}},cd49:function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("7a23");function o(e,n,t,o,a,u){return Object(r["o"])(),Object(r["e"])(r["a"],null,[Object(r["f"])("h1",null,Object(r["q"])(e.t("message")),1),Object(r["f"])("p",null,Object(r["q"])(e.t("paragraph")),1)],64)}var a=t("47e2"),u=Object(r["h"])({name:"App",setup:function(){var e=Object(a["b"])(),n=e.t;return{t:n}}}),c=t("6b0d"),l=t.n(c);const i=l()(u,[["render",o]]);var s=i;t("159b"),t("d3b7"),t("ddb0"),t("ac1f"),t("466d");function f(){var e=t("49f8"),n={};return e.keys().forEach((function(t){var r=t.match(/([A-Za-z0-9-_]+)\./i);if(r&&r.length>1){var o=r[1];n[o]=e(t).default}})),n}var p=Object(a["a"])({legacy:!1,locale:"en",fallbackLocale:"en",messages:f()});Object(r["d"])(s).use(p).mount("#app")}});
//# sourceMappingURL=app.5af34089.js.map
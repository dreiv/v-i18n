(function(e){function n(n){for(var r,a,l=n[0],u=n[1],s=n[2],i=0,d=[];i<l.length;i++)a=l[i],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);f&&f(n);while(d.length)d.shift()();return c.push.apply(c,s||[]),t()}function t(){for(var e,n=0;n<c.length;n++){for(var t=c[n],r=!0,a=1;a<t.length;a++){var u=t[a];0!==o[u]&&(r=!1)}r&&(c.splice(n--,1),e=l(l.s=t[0]))}return e}var r={},o={app:0},c=[];function a(e){return l.p+"js/"+({"locale-de-json":"locale-de-json","locale-ro-json":"locale-ro-json","locale-zu-json":"locale-zu-json"}[e]||e)+"."+{"locale-de-json":"263316b7","locale-ro-json":"b2edf530","locale-zu-json":"fe159f93"}[e]+".js"}function l(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,l),t.l=!0,t.exports}l.e=function(e){var n=[],t=o[e];if(0!==t)if(t)n.push(t[2]);else{var r=new Promise((function(n,r){t=o[e]=[n,r]}));n.push(t[2]=r);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=a(e);var s=new Error;c=function(n){u.onerror=u.onload=null,clearTimeout(i);var t=o[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),c=n&&n.target&&n.target.src;s.message="Loading chunk "+e+" failed.\n("+r+": "+c+")",s.name="ChunkLoadError",s.type=r,s.request=c,t[1](s)}o[e]=void 0}};var i=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(n)},l.m=e,l.c=r,l.d=function(e,n,t){l.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,n){if(1&n&&(e=l(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(l.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)l.d(t,r,function(n){return e[n]}.bind(null,r));return t},l.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(n,"a",n),n},l.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},l.p="/v-i18n/",l.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=n,u=u.slice();for(var i=0;i<u.length;i++)n(u[i]);var f=s;c.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("cd49")},"39c3":function(e,n,t){var r={"./de.json":["6ce2","locale-de-json"],"./en.json":["edd4"],"./ro.json":["9542","locale-ro-json"],"./zu.json":["decd","locale-zu-json"]};function o(e){if(!t.o(r,e))return Promise.resolve().then((function(){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}));var n=r[e],o=n[0];return Promise.all(n.slice(1).map(t.e)).then((function(){return t(o)}))}o.keys=function(){return Object.keys(r)},o.id="39c3",e.exports=o},cd49:function(e,n,t){"use strict";t.r(n);var r=t("7a23");function o(e,n,t,o,c,a){return Object(r["p"])(),Object(r["e"])(r["a"],null,[Object(r["f"])("h1",null,Object(r["r"])(e.t("message")),1),Object(r["f"])("p",null,Object(r["r"])(e.t("paragraph")),1),Object(r["f"])("p",null,Object(r["r"])(e.t("line.weather")),1),Object(r["f"])("p",null,Object(r["r"])(e.t("the.end")),1)],64)}var c=t("47e2"),a=Object(r["h"])({name:"App",setup(){const{t:e}=Object(c["b"])();return{t:e}}}),l=t("6b0d"),u=t.n(l);const s=u()(a,[["render",o]]);var i=s,f=t("edd4");const d=Object(c["a"])({locale:"en",messages:{en:f["default"]}});async function p(e){if(d.locale===e)return Promise.resolve(e);if("zu"===e){window._jipt=[["project","v-i18n"]];const e=document.createElement("script");e.setAttribute("src","//cdn.crowdin.com/jipt/jipt.js"),document.head.appendChild(e)}const n=await t("39c3")(`./${e}.json`);return d.global.setLocaleMessage(e,n.default),d.global.locale=e,Object(r["m"])()}p("ro");var j=d;Object(r["d"])(i).use(j).mount("#app")},edd4:function(e,n,t){"use strict";t.r(n),n["default"]={message:e=>{const{normalize:n}=e;return n(["hello i18n !!"])},paragraph:e=>{const{normalize:n}=e;return n(["something something :D"])},line:{weather:e=>{const{normalize:n}=e;return n(["Weather is wonderfull"])}},the:{end:e=>{const{normalize:n}=e;return n(["That's all!"])}}}}});
//# sourceMappingURL=app.63b83346.js.map
!function(e){function n(n){for(var t,o,s=n[0],d=n[1],i=n[2],u=n[3]||[],a=0,c=[];a<s.length;a++)o=s[a],Object.prototype.hasOwnProperty.call(D,o)&&D[o]&&c.push(D[o][0]),D[o]=0;for(t in d)Object.prototype.hasOwnProperty.call(d,t)&&(e[t]=d[t]);for(q&&q(n),M.push.apply(M,u);c.length;)c.shift()();return I.push.apply(I,i||[]),r()}function r(){for(var e,n=0;n<I.length;n++){for(var r=I[n],t=!0,o=1;o<r.length;o++){var s=r[o];0!==D[s]&&(t=!1)}t&&(I.splice(n--,1),e=H(H.s=r[0]))}return 0===I.length&&(M.forEach(function(e){if(void 0===D[e]){D[e]=null;var n=document.createElement("link");n.crossOrigin="anonymous",H.nc&&n.setAttribute("nonce",H.nc),n.rel="prefetch",n.as="script",n.href=S(e),document.head.appendChild(n)}}),M.length=0),e}var t=window.webpackHotUpdate;window.webpackHotUpdate=function(e,n){!function(e,n){if(!O[e]||!w[e])return;for(var r in w[e]=!1,n)Object.prototype.hasOwnProperty.call(n,r)&&(v[r]=n[r]);0===--y&&0===b&&P()}(e,n),t&&t(e,n)};var o,s=!0,d="3d364023e3d763a8ce85",i=1e4,u={},a=[],c=[];function l(e){var n={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:o!==e,active:!0,accept:function(e,r){if(void 0===e)n._selfAccepted=!0;else if("function"===typeof e)n._selfAccepted=e;else if("object"===typeof e)for(var t=0;t<e.length;t++)n._acceptedDependencies[e[t]]=r||function(){};else n._acceptedDependencies[e]=r||function(){}},decline:function(e){if(void 0===e)n._selfDeclined=!0;else if("object"===typeof e)for(var r=0;r<e.length;r++)n._declinedDependencies[e[r]]=!0;else n._declinedDependencies[e]=!0},dispose:function(e){n._disposeHandlers.push(e)},addDisposeHandler:function(e){n._disposeHandlers.push(e)},removeDisposeHandler:function(e){var r=n._disposeHandlers.indexOf(e);r>=0&&n._disposeHandlers.splice(r,1)},check:k,apply:_,status:function(e){if(!e)return f;p.push(e)},addStatusHandler:function(e){p.push(e)},removeStatusHandler:function(e){var n=p.indexOf(e);n>=0&&p.splice(n,1)},data:u[e]};return o=void 0,n}var p=[],f="idle";function h(e){f=e;for(var n=0;n<p.length;n++)p[n].call(null,e)}var m,v,g,y=0,b=0,x={},w={},O={};function j(e){return+e+""===e?+e:e}function k(e){if("idle"!==f)throw new Error("check() is only allowed in idle status");return s=e,h("check"),(n=i,n=n||1e4,new Promise(function(e,r){if("undefined"===typeof XMLHttpRequest)return r(new Error("No browser support"));try{var t=new XMLHttpRequest,o=H.p+""+d+".hot-update.json";t.open("GET",o,!0),t.timeout=n,t.send(null)}catch(s){return r(s)}t.onreadystatechange=function(){if(4===t.readyState)if(0===t.status)r(new Error("Manifest request to "+o+" timed out."));else if(404===t.status)e();else if(200!==t.status&&304!==t.status)r(new Error("Manifest request to "+o+" failed."));else{try{var n=JSON.parse(t.responseText)}catch(s){return void r(s)}e(n)}}})).then(function(e){if(!e)return h("idle"),null;w={},x={},O=e.c,g=e.h,h("prepare");var n=new Promise(function(e,n){m={resolve:e,reject:n}});for(var r in v={},D)A(r);return"prepare"===f&&0===b&&0===y&&P(),n});var n}function A(e){O[e]?(w[e]=!0,y++,function(e){var n=document.createElement("script");n.charset="utf-8",n.src=H.p+""+e+"."+d+".hot-update.js",n.crossOrigin="anonymous",document.head.appendChild(n)}(e)):x[e]=!0}function P(){h("ready");var e=m;if(m=null,e)if(s)Promise.resolve().then(function(){return _(s)}).then(function(n){e.resolve(n)},function(n){e.reject(n)});else{var n=[];for(var r in v)Object.prototype.hasOwnProperty.call(v,r)&&n.push(j(r));e.resolve(n)}}function _(n){if("ready"!==f)throw new Error("apply() is only allowed in ready status");var r,t,o,s,i;function c(e){for(var n=[e],r={},t=n.map(function(e){return{chain:[e],id:e}});t.length>0;){var o=t.pop(),d=o.id,i=o.chain;if((s=E[d])&&!s.hot._selfAccepted){if(s.hot._selfDeclined)return{type:"self-declined",chain:i,moduleId:d};if(s.hot._main)return{type:"unaccepted",chain:i,moduleId:d};for(var u=0;u<s.parents.length;u++){var a=s.parents[u],c=E[a];if(c){if(c.hot._declinedDependencies[d])return{type:"declined",chain:i.concat([a]),moduleId:d,parentId:a};-1===n.indexOf(a)&&(c.hot._acceptedDependencies[d]?(r[a]||(r[a]=[]),l(r[a],[d])):(delete r[a],n.push(a),t.push({chain:i.concat([a]),id:a})))}}}}return{type:"accepted",moduleId:e,outdatedModules:n,outdatedDependencies:r}}function l(e,n){for(var r=0;r<n.length;r++){var t=n[r];-1===e.indexOf(t)&&e.push(t)}}n=n||{};var p={},m=[],y={},b=function(){console.warn("[HMR] unexpected require("+w.moduleId+") to disposed module")};for(var x in v)if(Object.prototype.hasOwnProperty.call(v,x)){var w;i=j(x);var k=!1,A=!1,P=!1,_="";switch((w=v[x]?c(i):{type:"disposed",moduleId:x}).chain&&(_="\nUpdate propagation: "+w.chain.join(" -> ")),w.type){case"self-declined":n.onDeclined&&n.onDeclined(w),n.ignoreDeclined||(k=new Error("Aborted because of self decline: "+w.moduleId+_));break;case"declined":n.onDeclined&&n.onDeclined(w),n.ignoreDeclined||(k=new Error("Aborted because of declined dependency: "+w.moduleId+" in "+w.parentId+_));break;case"unaccepted":n.onUnaccepted&&n.onUnaccepted(w),n.ignoreUnaccepted||(k=new Error("Aborted because "+i+" is not accepted"+_));break;case"accepted":n.onAccepted&&n.onAccepted(w),A=!0;break;case"disposed":n.onDisposed&&n.onDisposed(w),P=!0;break;default:throw new Error("Unexception type "+w.type)}if(k)return h("abort"),Promise.reject(k);if(A)for(i in y[i]=v[i],l(m,w.outdatedModules),w.outdatedDependencies)Object.prototype.hasOwnProperty.call(w.outdatedDependencies,i)&&(p[i]||(p[i]=[]),l(p[i],w.outdatedDependencies[i]));P&&(l(m,[w.moduleId]),y[i]=b)}var I,M=[];for(t=0;t<m.length;t++)i=m[t],E[i]&&E[i].hot._selfAccepted&&y[i]!==b&&M.push({module:i,errorHandler:E[i].hot._selfAccepted});h("dispose"),Object.keys(O).forEach(function(e){!1===O[e]&&function(e){delete D[e]}(e)});for(var S,T,L=m.slice();L.length>0;)if(i=L.pop(),s=E[i]){var z={},q=s.hot._disposeHandlers;for(o=0;o<q.length;o++)(r=q[o])(z);for(u[i]=z,s.hot.active=!1,delete E[i],delete p[i],o=0;o<s.children.length;o++){var U=E[s.children[o]];U&&((I=U.parents.indexOf(i))>=0&&U.parents.splice(I,1))}}for(i in p)if(Object.prototype.hasOwnProperty.call(p,i)&&(s=E[i]))for(T=p[i],o=0;o<T.length;o++)S=T[o],(I=s.children.indexOf(S))>=0&&s.children.splice(I,1);for(i in h("apply"),d=g,y)Object.prototype.hasOwnProperty.call(y,i)&&(e[i]=y[i]);var C=null;for(i in p)if(Object.prototype.hasOwnProperty.call(p,i)&&(s=E[i])){T=p[i];var R=[];for(t=0;t<T.length;t++)if(S=T[t],r=s.hot._acceptedDependencies[S]){if(-1!==R.indexOf(r))continue;R.push(r)}for(t=0;t<R.length;t++){r=R[t];try{r(T)}catch(N){n.onErrored&&n.onErrored({type:"accept-errored",moduleId:i,dependencyId:T[t],error:N}),n.ignoreErrored||C||(C=N)}}}for(t=0;t<M.length;t++){var J=M[t];i=J.module,a=[i];try{H(i)}catch(N){if("function"===typeof J.errorHandler)try{J.errorHandler(N)}catch(X){n.onErrored&&n.onErrored({type:"self-accept-error-handler-errored",moduleId:i,error:X,originalError:N}),n.ignoreErrored||C||(C=X),C||(C=N)}else n.onErrored&&n.onErrored({type:"self-accept-errored",moduleId:i,error:N}),n.ignoreErrored||C||(C=N)}}return C?(h("fail"),Promise.reject(C)):(h("idle"),new Promise(function(e){e(m)}))}var E={},D={1:0},I=[],M=[];function S(e){return H.p+"static/js/"+({2:"src-use-antd-table-index",3:"src-use-api-index",4:"src-use-async-index",5:"src-use-load-more-index",6:"src-use-search-index"}[e]||e)+"."+{2:"98dbefe1",3:"f4350820",4:"8ae805f6",5:"5df6d739",6:"75773138"}[e]+".js"}function H(n){if(E[n])return E[n].exports;var r=E[n]={i:n,l:!1,exports:{},hot:l(n),parents:(c=a,a=[],c),children:[]};return e[n].call(r.exports,r,r.exports,function(e){var n=E[e];if(!n)return H;var r=function(r){return n.hot.active?(E[r]?-1===E[r].parents.indexOf(e)&&E[r].parents.push(e):(a=[e],o=r),-1===n.children.indexOf(r)&&n.children.push(r)):(console.warn("[HMR] unexpected require("+r+") from disposed module "+e),a=[]),H(r)},t=function(e){return{configurable:!0,enumerable:!0,get:function(){return H[e]},set:function(n){H[e]=n}}};for(var s in H)Object.prototype.hasOwnProperty.call(H,s)&&"e"!==s&&"t"!==s&&Object.defineProperty(r,s,t(s));return r.e=function(e){return"ready"===f&&h("prepare"),b++,H.e(e).then(n,function(e){throw n(),e});function n(){b--,"prepare"===f&&(x[e]||A(e),0===b&&0===y&&P())}},r.t=function(e,n){return 1&n&&(e=r(e)),H.t(e,-2&n)},r}(n)),r.l=!0,r.exports}H.e=function(e){var n=[],r=D[e];if(0!==r)if(r)n.push(r[2]);else{var t=new Promise(function(n,t){r=D[e]=[n,t]});n.push(r[2]=t);var o,s=document.createElement("script");s.charset="utf-8",s.timeout=120,H.nc&&s.setAttribute("nonce",H.nc),s.src=S(e),0!==s.src.indexOf(window.location.origin+"/")&&(s.crossOrigin="anonymous");var d=new Error;o=function(n){s.onerror=s.onload=null,clearTimeout(i);var r=D[e];if(0!==r){if(r){var t=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src;d.message="Loading chunk "+e+" failed.\n("+t+": "+o+")",d.name="ChunkLoadError",d.type=t,d.request=o,r[1](d)}D[e]=void 0}};var i=setTimeout(function(){o({type:"timeout",target:s})},12e4);s.onerror=s.onload=o,document.head.appendChild(s)}return Promise.all(n)},H.m=e,H.c=E,H.d=function(e,n,r){H.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},H.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},H.t=function(e,n){if(1&n&&(e=H(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(H.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var t in e)H.d(r,t,function(n){return e[n]}.bind(null,t));return r},H.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return H.d(n,"a",n),n},H.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},H.p="/hooks/",H.oe=function(e){throw console.error(e),e},H.h=function(){return d};var T=window.webpackJsonp=window.webpackJsonp||[],L=T.push.bind(T);T.push=n,T=T.slice();for(var z=0;z<T.length;z++)n(T[z]);var q=L,U=(I.push([0,0]),r());n([[],{},0,[0,2,3,4,5,6]])}({"./.docz/app/db.json":function(e){e.exports=JSON.parse('{"config":{"title":"@umijs/hooks","description":"react hooks library","menu":[],"version":"0.1.0","repository":false,"native":false,"codeSandbox":true,"themeConfig":{},"separator":"-","typescript":true,"theme":"/Users/brickspert/Documents/code/umijs/hooks/node_modules/_docz-theme-umi@2.0.5@docz-theme-umi/es/index.js","base":"/hooks/","plugins":[{},{},{},{},{}]},"props":[{"key":"src/useAntdTable/index.ts","value":[]}],"entries":[{"key":"src/useAPI/index.mdx","value":{"name":"useAPI","route":"/hooks/useAPI","sidebar":true,"id":"3f91198d2b84db0205216c19bf0d7c2c","filepath":"src/useAPI/index.mdx","link":"https://github.com/umijs/hooks/edit/master/src/useAPI/index.mdx","slug":"src-use-api-index","menu":"","headings":[{"slug":"useapi","depth":1,"value":"useAPI"},{"slug":"\u4ee3\u7801\u6f14\u793a","depth":2,"value":"\u4ee3\u7801\u6f14\u793a"},{"slug":"\u7acb\u5373\u6267\u884c","depth":3,"value":"\u7acb\u5373\u6267\u884c"},{"slug":"\u624b\u52a8\u89e6\u53d1\u6267\u884c","depth":3,"value":"\u624b\u52a8\u89e6\u53d1\u6267\u884c"},{"slug":"\u8f6e\u8be2","depth":3,"value":"\u8f6e\u8be2"},{"slug":"api","depth":2,"value":"API"}]}},{"key":"src/useAntdTable/index.mdx","value":{"name":"useAntdTable","route":"/hooks/useAntdTable","sidebar":true,"id":"b457c89b90201e92fe3ac82c0ef5d730","filepath":"src/useAntdTable/index.mdx","link":"https://github.com/umijs/hooks/edit/master/src/useAntdTable/index.mdx","slug":"src-use-antd-table-index","menu":"","headings":[{"slug":"useantdtable","depth":1,"value":"useAntdTable"},{"slug":"\u4ee3\u7801\u6f14\u793a","depth":2,"value":"\u4ee3\u7801\u6f14\u793a"},{"slug":"\u57fa\u672c\u7684\u5217\u8868\u9875","depth":3,"value":"\u57fa\u672c\u7684\u5217\u8868\u9875"},{"slug":"\u641c\u7d22\u8868\u5355\u4e0e\u5217\u8868\u8054\u52a8\uff0c\u6570\u636e\u7f13\u5b58","depth":3,"value":"\u641c\u7d22\u8868\u5355\u4e0e\u5217\u8868\u8054\u52a8\uff0c\u6570\u636e\u7f13\u5b58"},{"slug":"api","depth":2,"value":"API"},{"slug":"\u7ed3\u679c","depth":3,"value":"\u7ed3\u679c"},{"slug":"\u53c2\u6570","depth":3,"value":"\u53c2\u6570"},{"slug":"options","depth":3,"value":"Options"}]}},{"key":"src/useAsync/index.mdx","value":{"name":"useAsync","route":"/hooks/useAsync","sidebar":true,"id":"9db9096081b24f9e4b73343040d261c2","filepath":"src/useAsync/index.mdx","link":"https://github.com/umijs/hooks/edit/master/src/useAsync/index.mdx","slug":"src-use-async-index","menu":"","headings":[{"slug":"useasync","depth":1,"value":"useAsync"},{"slug":"\u4ee3\u7801\u6f14\u793a","depth":2,"value":"\u4ee3\u7801\u6f14\u793a"},{"slug":"\u7acb\u5373\u6267\u884c","depth":3,"value":"\u7acb\u5373\u6267\u884c"},{"slug":"\u624b\u52a8\u89e6\u53d1\u6267\u884c","depth":3,"value":"\u624b\u52a8\u89e6\u53d1\u6267\u884c"},{"slug":"\u8f6e\u8be2","depth":3,"value":"\u8f6e\u8be2"},{"slug":"api","depth":2,"value":"API"},{"slug":"\u7ed3\u679c","depth":3,"value":"\u7ed3\u679c"},{"slug":"\u53c2\u6570","depth":3,"value":"\u53c2\u6570"},{"slug":"options","depth":3,"value":"Options"}]}},{"key":"src/useLoadMore/index.mdx","value":{"name":"useLoadMore","route":"/hooks/useLoadMore","sidebar":true,"id":"475d972e36d99d818ffd141fe8063154","filepath":"src/useLoadMore/index.mdx","link":"https://github.com/umijs/hooks/edit/master/src/useLoadMore/index.mdx","slug":"src-use-load-more-index","menu":"","headings":[{"slug":"useloadmore","depth":1,"value":"useLoadMore"},{"slug":"\u4ee3\u7801\u6f14\u793a","depth":2,"value":"\u4ee3\u7801\u6f14\u793a"},{"slug":"\u70b9\u51fb\u52a0\u8f7d\u66f4\u591a","depth":3,"value":"\u70b9\u51fb\u52a0\u8f7d\u66f4\u591a"},{"slug":"\u4e0a\u62c9\u52a0\u8f7d\u66f4\u591a","depth":3,"value":"\u4e0a\u62c9\u52a0\u8f7d\u66f4\u591a"},{"slug":"api","depth":2,"value":"API"},{"slug":"\u7ed3\u679c","depth":3,"value":"\u7ed3\u679c"},{"slug":"\u53c2\u6570","depth":3,"value":"\u53c2\u6570"},{"slug":"params","depth":3,"value":"Params"},{"slug":"options","depth":3,"value":"Options"},{"slug":"\u5907\u6ce8","depth":2,"value":"\u5907\u6ce8"}]}},{"key":"src/useSearch/index.mdx","value":{"name":"useSearch","route":"/hooks/useSearch","sidebar":true,"id":"73330201a4712f7bd22bd62ed28e94e4","filepath":"src/useSearch/index.mdx","link":"https://github.com/umijs/hooks/edit/master/src/useSearch/index.mdx","slug":"src-use-search-index","menu":"","headings":[{"slug":"usesearch","depth":1,"value":"useSearch"},{"slug":"\u4ee3\u7801\u6f14\u793a","depth":2,"value":"\u4ee3\u7801\u6f14\u793a"},{"slug":"api","depth":2,"value":"API"},{"slug":"\u7ed3\u679c","depth":3,"value":"\u7ed3\u679c"},{"slug":"\u53c2\u6570","depth":3,"value":"\u53c2\u6570"},{"slug":"options","depth":3,"value":"Options"}]}}]}')},"./.docz/app/index.jsx":function(e,n,r){"use strict";r.r(n);var t=r("react"),o=r.n(t),s=r("react-dom"),d=r.n(s),i=r("./node_modules/_docz@1.2.0@docz/dist/index.esm.js"),u=r("./node_modules/_docz-theme-umi@2.0.5@docz-theme-umi/es/index.js"),a={"src/useAPI/index.mdx":function(){return Promise.all([r.e(0),r.e(3)]).then(r.bind(null,"./src/useAPI/index.mdx"))},"src/useAntdTable/index.mdx":function(){return Promise.all([r.e(0),r.e(2)]).then(r.bind(null,"./src/useAntdTable/index.mdx"))},"src/useAsync/index.mdx":function(){return Promise.all([r.e(0),r.e(4)]).then(r.bind(null,"./src/useAsync/index.mdx"))},"src/useLoadMore/index.mdx":function(){return Promise.all([r.e(0),r.e(5)]).then(r.bind(null,"./src/useLoadMore/index.mdx"))},"src/useSearch/index.mdx":function(){return Promise.all([r.e(0),r.e(6)]).then(r.bind(null,"./src/useSearch/index.mdx"))}},c=r("./.docz/app/db.json"),l=function(){return o.a.createElement(u.a,{linkComponent:i.b,db:c},o.a.createElement(i.d,{imports:a}))},p=[],f=[],h=function(){return p.forEach(function(e){return e&&e()})},m=function(){return f.forEach(function(e){return e&&e()})},v=document.querySelector("#root");!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l;h(),d.a.render(o.a.createElement(e,null),v,m)}(l)},0:function(e,n,r){e.exports=r("./.docz/app/index.jsx")},react:function(e,n){e.exports=window.React},"react-dom":function(e,n){e.exports=window.ReactDOM}});
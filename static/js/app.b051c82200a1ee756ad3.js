!function(e){function t(t){for(var r,i,a=t[0],s=t[1],o=t[2],l=t[3]||[],u=0,c=[];u<a.length;u++)i=a[u],A[i]&&c.push(A[i][0]),A[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);for(M&&M(t),_.push.apply(_,l);c.length;)c.shift()();return E.push.apply(E,o||[]),n()}function n(){for(var e,t=0;t<E.length;t++){for(var n=E[t],r=!0,i=1;i<n.length;i++){var a=n[i];0!==A[a]&&(r=!1)}r&&(E.splice(t--,1),e=D(D.s=n[0]))}return 0===E.length&&(_.forEach(function(e){if(void 0===A[e]){A[e]=null;var t=document.createElement("link");t.crossOrigin="anonymous",D.nc&&t.setAttribute("nonce",D.nc),t.rel="prefetch",t.as="script",t.href=I(e),document.head.appendChild(t)}}),_.length=0),e}var r=window.webpackHotUpdate;window.webpackHotUpdate=function(e,t){!function(e,t){if(!j[e]||!w[e])return;for(var n in w[e]=!1,t)Object.prototype.hasOwnProperty.call(t,n)&&(g[n]=t[n]);0===--y&&0===v&&S()}(e,t),r&&r(e,t)};var i,a=!0,s="b051c82200a1ee756ad3",o=1e4,l={},u=[],c=[];function d(e){var t={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:i!==e,active:!0,accept:function(e,n){if(void 0===e)t._selfAccepted=!0;else if("function"===typeof e)t._selfAccepted=e;else if("object"===typeof e)for(var r=0;r<e.length;r++)t._acceptedDependencies[e[r]]=n||function(){};else t._acceptedDependencies[e]=n||function(){}},decline:function(e){if(void 0===e)t._selfDeclined=!0;else if("object"===typeof e)for(var n=0;n<e.length;n++)t._declinedDependencies[e[n]]=!0;else t._declinedDependencies[e]=!0},dispose:function(e){t._disposeHandlers.push(e)},addDisposeHandler:function(e){t._disposeHandlers.push(e)},removeDisposeHandler:function(e){var n=t._disposeHandlers.indexOf(e);n>=0&&t._disposeHandlers.splice(n,1)},check:q,apply:O,status:function(e){if(!e)return h;p.push(e)},addStatusHandler:function(e){p.push(e)},removeStatusHandler:function(e){var t=p.indexOf(e);t>=0&&p.splice(t,1)},data:l[e]};return i=void 0,t}var p=[],h="idle";function f(e){h=e;for(var t=0;t<p.length;t++)p[t].call(null,e)}var m,g,b,y=0,v=0,x={},w={},j={};function V(e){return+e+""===e?+e:e}function q(e){if("idle"!==h)throw new Error("check() is only allowed in idle status");return a=e,f("check"),(t=o,t=t||1e4,new Promise(function(e,n){if("undefined"===typeof XMLHttpRequest)return n(new Error("No browser support"));try{var r=new XMLHttpRequest,i=D.p+""+s+".hot-update.json";r.open("GET",i,!0),r.timeout=t,r.send(null)}catch(a){return n(a)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)n(new Error("Manifest request to "+i+" timed out."));else if(404===r.status)e();else if(200!==r.status&&304!==r.status)n(new Error("Manifest request to "+i+" failed."));else{try{var t=JSON.parse(r.responseText)}catch(a){return void n(a)}e(t)}}})).then(function(e){if(!e)return f("idle"),null;w={},x={},j=e.c,b=e.h,f("prepare");var t=new Promise(function(e,t){m={resolve:e,reject:t}});for(var n in g={},A)T(n);return"prepare"===h&&0===v&&0===y&&S(),t});var t}function T(e){j[e]?(w[e]=!0,y++,function(e){var t=document.createElement("script");t.charset="utf-8",t.src=D.p+""+e+"."+s+".hot-update.js",t.crossOrigin="anonymous",document.head.appendChild(t)}(e)):x[e]=!0}function S(){f("ready");var e=m;if(m=null,e)if(a)Promise.resolve().then(function(){return O(a)}).then(function(t){e.resolve(t)},function(t){e.reject(t)});else{var t=[];for(var n in g)Object.prototype.hasOwnProperty.call(g,n)&&t.push(V(n));e.resolve(t)}}function O(t){if("ready"!==h)throw new Error("apply() is only allowed in ready status");var n,r,i,a,o;function c(e){for(var t=[e],n={},r=t.map(function(e){return{chain:[e],id:e}});r.length>0;){var i=r.pop(),s=i.id,o=i.chain;if((a=R[s])&&!a.hot._selfAccepted){if(a.hot._selfDeclined)return{type:"self-declined",chain:o,moduleId:s};if(a.hot._main)return{type:"unaccepted",chain:o,moduleId:s};for(var l=0;l<a.parents.length;l++){var u=a.parents[l],c=R[u];if(c){if(c.hot._declinedDependencies[s])return{type:"declined",chain:o.concat([u]),moduleId:s,parentId:u};-1===t.indexOf(u)&&(c.hot._acceptedDependencies[s]?(n[u]||(n[u]=[]),d(n[u],[s])):(delete n[u],t.push(u),r.push({chain:o.concat([u]),id:u})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:n}}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];-1===e.indexOf(r)&&e.push(r)}}t=t||{};var p={},m=[],y={},v=function(){console.warn("[HMR] unexpected require("+w.moduleId+") to disposed module")};for(var x in g)if(Object.prototype.hasOwnProperty.call(g,x)){var w;o=V(x);var q=!1,T=!1,S=!1,O="";switch((w=g[x]?c(o):{type:"disposed",moduleId:x}).chain&&(O="\nUpdate propagation: "+w.chain.join(" -> ")),w.type){case"self-declined":t.onDeclined&&t.onDeclined(w),t.ignoreDeclined||(q=new Error("Aborted because of self decline: "+w.moduleId+O));break;case"declined":t.onDeclined&&t.onDeclined(w),t.ignoreDeclined||(q=new Error("Aborted because of declined dependency: "+w.moduleId+" in "+w.parentId+O));break;case"unaccepted":t.onUnaccepted&&t.onUnaccepted(w),t.ignoreUnaccepted||(q=new Error("Aborted because "+o+" is not accepted"+O));break;case"accepted":t.onAccepted&&t.onAccepted(w),T=!0;break;case"disposed":t.onDisposed&&t.onDisposed(w),S=!0;break;default:throw new Error("Unexception type "+w.type)}if(q)return f("abort"),Promise.reject(q);if(T)for(o in y[o]=g[o],d(m,w.outdatedModules),w.outdatedDependencies)Object.prototype.hasOwnProperty.call(w.outdatedDependencies,o)&&(p[o]||(p[o]=[]),d(p[o],w.outdatedDependencies[o]));S&&(d(m,[w.moduleId]),y[o]=v)}var E,_=[];for(r=0;r<m.length;r++)o=m[r],R[o]&&R[o].hot._selfAccepted&&y[o]!==v&&_.push({module:o,errorHandler:R[o].hot._selfAccepted});f("dispose"),Object.keys(j).forEach(function(e){!1===j[e]&&function(e){delete A[e]}(e)});for(var I,k,C=m.slice();C.length>0;)if(o=C.pop(),a=R[o]){var H={},M=a.hot._disposeHandlers;for(i=0;i<M.length;i++)(n=M[i])(H);for(l[o]=H,a.hot.active=!1,delete R[o],delete p[o],i=0;i<a.children.length;i++){var P=R[a.children[i]];P&&((E=P.parents.indexOf(o))>=0&&P.parents.splice(E,1))}}for(o in p)if(Object.prototype.hasOwnProperty.call(p,o)&&(a=R[o]))for(k=p[o],i=0;i<k.length;i++)I=k[i],(E=a.children.indexOf(I))>=0&&a.children.splice(E,1);for(o in f("apply"),s=b,y)Object.prototype.hasOwnProperty.call(y,o)&&(e[o]=y[o]);var L=null;for(o in p)if(Object.prototype.hasOwnProperty.call(p,o)&&(a=R[o])){k=p[o];var z=[];for(r=0;r<k.length;r++)if(I=k[r],n=a.hot._acceptedDependencies[I]){if(-1!==z.indexOf(n))continue;z.push(n)}for(r=0;r<z.length;r++){n=z[r];try{n(k)}catch(U){t.onErrored&&t.onErrored({type:"accept-errored",moduleId:o,dependencyId:k[r],error:U}),t.ignoreErrored||L||(L=U)}}}for(r=0;r<_.length;r++){var N=_[r];o=N.module,u=[o];try{D(o)}catch(U){if("function"===typeof N.errorHandler)try{N.errorHandler(U)}catch(F){t.onErrored&&t.onErrored({type:"self-accept-error-handler-errored",moduleId:o,error:F,originalError:U}),t.ignoreErrored||L||(L=F),L||(L=U)}else t.onErrored&&t.onErrored({type:"self-accept-errored",moduleId:o,error:U}),t.ignoreErrored||L||(L=U)}}return L?(f("fail"),Promise.reject(L)):(f("idle"),new Promise(function(e){e(m)}))}var R={},A={1:0},E=[],_=[];function I(e){return D.p+"static/js/"+({2:"src-use-title-index"}[e]||e)+"."+{2:"bb15363f"}[e]+".js"}function D(t){if(R[t])return R[t].exports;var n=R[t]={i:t,l:!1,exports:{},hot:d(t),parents:(c=u,u=[],c),children:[]};return e[t].call(n.exports,n,n.exports,function(e){var t=R[e];if(!t)return D;var n=function(n){return t.hot.active?(R[n]?-1===R[n].parents.indexOf(e)&&R[n].parents.push(e):(u=[e],i=n),-1===t.children.indexOf(n)&&t.children.push(n)):(console.warn("[HMR] unexpected require("+n+") from disposed module "+e),u=[]),D(n)},r=function(e){return{configurable:!0,enumerable:!0,get:function(){return D[e]},set:function(t){D[e]=t}}};for(var a in D)Object.prototype.hasOwnProperty.call(D,a)&&"e"!==a&&"t"!==a&&Object.defineProperty(n,a,r(a));return n.e=function(e){return"ready"===h&&f("prepare"),v++,D.e(e).then(t,function(e){throw t(),e});function t(){v--,"prepare"===h&&(x[e]||T(e),0===v&&0===y&&S())}},n.t=function(e,t){return 1&t&&(e=n(e)),D.t(e,-2&t)},n}(t)),n.l=!0,n.exports}D.e=function(e){var t=[],n=A[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise(function(t,r){n=A[e]=[t,r]});t.push(n[2]=r);var i,a=document.createElement("script");a.charset="utf-8",a.timeout=120,D.nc&&a.setAttribute("nonce",D.nc),a.src=I(e),0!==a.src.indexOf(window.location.origin+"/")&&(a.crossOrigin="anonymous");var s=new Error;i=function(t){a.onerror=a.onload=null,clearTimeout(o);var n=A[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+r+": "+i+")",s.name="ChunkLoadError",s.type=r,s.request=i,n[1](s)}A[e]=void 0}};var o=setTimeout(function(){i({type:"timeout",target:a})},12e4);a.onerror=a.onload=i,document.head.appendChild(a)}return Promise.all(t)},D.m=e,D.c=R,D.d=function(e,t,n){D.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},D.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},D.t=function(e,t){if(1&t&&(e=D(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(D.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)D.d(n,r,function(t){return e[t]}.bind(null,r));return n},D.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return D.d(t,"a",t),t},D.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},D.p="/",D.oe=function(e){throw console.error(e),e},D.h=function(){return s};var k=window.webpackJsonp=window.webpackJsonp||[],C=k.push.bind(k);k.push=t,k=k.slice();for(var H=0;H<k.length;H++)t(k[H]);var M=C,P=(E.push([0,0]),n());t([[],{},0,[0,2]])}({"./.docz/app/db.json":function(e){e.exports={config:{title:"@umijs/hooks",description:"react hooks library",menu:[],version:"0.0.1",repository:!1,native:!1,codeSandbox:!0,themeConfig:{},separator:"-",typescript:!0,theme:"/Users/brickspert/Documents/code/umijs/hooks/node_modules/_docz-theme-umi@2.0.5@docz-theme-umi/es/index.js",host:"https://umijs.github.io/hooks/",plugins:[{},{},{},{},{}]},props:[{key:"src/useTitle/index.ts",value:[{description:"",displayName:"useTitle",methods:[],props:{toString:{defaultValue:{},description:"Returns a string representation of a string.",name:"toString",required:!0,type:{name:"() => string"}},charAt:{defaultValue:null,description:"Returns the character at the specified index.\n@param pos The zero-based index of the desired character.",name:"charAt",required:!0,type:{name:"(pos: number) => string"}},charCodeAt:{defaultValue:null,description:"Returns the Unicode value of the character at the specified location.\n@param index The zero-based index of the desired character. If there is no character at the specified index, NaN is returned.",name:"charCodeAt",required:!0,type:{name:"(index: number) => number"}},concat:{defaultValue:null,description:"Returns a string that contains the concatenation of two or more strings.\n@param strings The strings to append to the end of the string.",name:"concat",required:!0,type:{name:"(...strings: string[]) => string"}},indexOf:{defaultValue:null,description:"Returns the position of the first occurrence of a substring.\n@param searchString The substring to search for in the string\n@param position The index at which to begin searching the String object. If omitted, search starts at the beginning of the string.",name:"indexOf",required:!0,type:{name:"(searchString: string, position?: number | undefined) => number"}},lastIndexOf:{defaultValue:null,description:"Returns the last occurrence of a substring in the string.\n@param searchString The substring to search for.\n@param position The index at which to begin searching. If omitted, the search begins at the end of the string.",name:"lastIndexOf",required:!0,type:{name:"(searchString: string, position?: number | undefined) => number"}},localeCompare:{defaultValue:null,description:"Determines whether two strings are equivalent in the current locale.\nDetermines whether two strings are equivalent in the current or specified locale.\n@param that String to compare to target string\n@param that String to compare to target string\n@param locales A locale string or array of locale strings that contain one or more language or locale tags. If you include more than one locale string, list them in descending order of priority so that the first entry is the preferred locale. If you omit this parameter, the default locale of the JavaScript runtime is used. This parameter must conform to BCP 47 standards; see the Intl.Collator object for details.\n@param options An object that contains one or more properties that specify comparison options. see the Intl.Collator object for details.",name:"localeCompare",required:!0,type:{name:"{ (that: string): number; (that: string, locales?: string | string[] | undefined, options?: CollatorOptions | undefined): number; }"}},match:{defaultValue:null,description:"Matches a string with a regular expression, and returns an array containing the results of that search.\nMatches a string an object that supports being matched against, and returns an array containing the results of that search.\n@param regexp A variable name or string literal containing the regular expression pattern and flags.\n@param matcher An object that supports being matched against.",name:"match",required:!0,type:{name:"{ (regexp: string | RegExp): RegExpMatchArray | null; (matcher: { [Symbol.match](string: string): RegExpMatchArray | null; }): RegExpMatchArray | null; }"}},replace:{defaultValue:null,description:"Replaces text in a string, using a regular expression or search string.\nReplaces text in a string, using a regular expression or search string.\nReplaces text in a string, using an object that supports replacement within a string.\nReplaces text in a string, using an object that supports replacement within a string.\n@param searchValue A string to search for.\n@param replaceValue A string containing the text to replace for every successful match of searchValue in this string.\n@param searchValue A string to search for.\n@param replacer A function that returns the replacement text.\n@param searchValue A object can search for and replace matches within a string.\n@param replaceValue A string containing the text to replace for every successful match of searchValue in this string.\n@param searchValue A object can search for and replace matches within a string.\n@param replacer A function that returns the replacement text.",name:"replace",required:!0,type:{name:"{ (searchValue: string | RegExp, replaceValue: string): string; (searchValue: string | RegExp, replacer: (substring: string, ...args: any[]) => string): string; (searchValue: { [Symbol.replace](string: string, replaceValue: string): string; }, replaceValue: string): string; (searchValue: { ...; }, replacer: (substri..."}},search:{defaultValue:null,description:"Finds the first substring match in a regular expression search.\nFinds the first substring match in a regular expression search.\n@param regexp The regular expression pattern and applicable flags.\n@param searcher An object which supports searching within a string.",name:"search",required:!0,type:{name:"{ (regexp: string | RegExp): number; (searcher: { [Symbol.search](string: string): number; }): number; }"}},slice:{defaultValue:null,description:"Returns a section of a string.\n@param start The index to the beginning of the specified portion of stringObj.\n@param end The index to the end of the specified portion of stringObj. The substring includes the characters up to, but not including, the character indicated by end.\nIf this value is not specified, the substring continues to the end of stringObj.",name:"slice",required:!0,type:{name:"(start?: number | undefined, end?: number | undefined) => string"}},split:{defaultValue:null,description:"Split a string into substrings using the specified separator and return them as an array.\nSplit a string into substrings using the specified separator and return them as an array.\n@param separator A string that identifies character or characters to use in separating the string. If omitted, a single-element array containing the entire string is returned.\n@param limit A value used to limit the number of elements returned in the array.\n@param splitter An object that can split a string.\n@param limit A value used to limit the number of elements returned in the array.",name:"split",required:!0,type:{name:"{ (separator: string | RegExp, limit?: number | undefined): string[]; (splitter: { [Symbol.split](string: string, limit?: number | undefined): string[]; }, limit?: number | undefined): string[]; }"}},substring:{defaultValue:null,description:"Returns the substring at the specified location within a String object.\n@param start The zero-based index number indicating the beginning of the substring.\n@param end Zero-based index number indicating the end of the substring. The substring includes the characters up to, but not including, the character indicated by end.\nIf end is omitted, the characters from start through the end of the original string are returned.",name:"substring",required:!0,type:{name:"(start: number, end?: number | undefined) => string"}},toLowerCase:{defaultValue:null,description:"Converts all the alphabetic characters in a string to lowercase.",name:"toLowerCase",required:!0,type:{name:"() => string"}},toLocaleLowerCase:{defaultValue:null,description:"Converts all alphabetic characters to lowercase, taking into account the host environment's current locale.",name:"toLocaleLowerCase",required:!0,type:{name:"() => string"}},toUpperCase:{defaultValue:null,description:"Converts all the alphabetic characters in a string to uppercase.",name:"toUpperCase",required:!0,type:{name:"() => string"}},toLocaleUpperCase:{defaultValue:null,description:"Returns a string where all alphabetic characters have been converted to uppercase, taking into account the host environment's current locale.",name:"toLocaleUpperCase",required:!0,type:{name:"() => string"}},trim:{defaultValue:null,description:"Removes the leading and trailing white space and line terminator characters from a string.",name:"trim",required:!0,type:{name:"() => string"}},length:{defaultValue:null,description:"Returns the length of a String object.",name:"length",required:!0,type:{name:"number"}},substr:{defaultValue:null,description:"Gets a substring beginning at the specified location and having the specified length.\n@param from The starting position of the desired substring. The index of the first character in the string is zero.\n@param length The number of characters to include in the returned substring.",name:"substr",required:!0,type:{name:"(from: number, length?: number | undefined) => string"}},valueOf:{defaultValue:{},description:"Returns the primitive value of the specified object.",name:"valueOf",required:!0,type:{name:"() => string"}},codePointAt:{defaultValue:null,description:"Returns a nonnegative integer Number less than 1114112 (0x110000) that is the code point\nvalue of the UTF-16 encoded code point starting at the string element at position pos in\nthe String resulting from converting this object to a String.\nIf there is no element at that position, the result is undefined.\nIf a valid UTF-16 surrogate pair does not begin at pos, the result is the code unit at pos.",name:"codePointAt",required:!0,type:{name:"(pos: number) => number | undefined"}},includes:{defaultValue:null,description:"Returns true if searchString appears as a substring of the result of converting this\nobject to a String, at one or more positions that are\ngreater than or equal to position; otherwise, returns false.\n@param searchString search string\n@param position If position is undefined, 0 is assumed, so as to search all of the String.",name:"includes",required:!0,type:{name:"(searchString: string, position?: number | undefined) => boolean"}},endsWith:{defaultValue:null,description:"Returns true if the sequence of elements of searchString converted to a String is the\nsame as the corresponding elements of this object (converted to a String) starting at\nendPosition \u2013 length(this). Otherwise returns false.",name:"endsWith",required:!0,type:{name:"(searchString: string, endPosition?: number | undefined) => boolean"}},normalize:{defaultValue:null,description:'Returns the String value result of normalizing the string into the normalization form\nnamed by form as specified in Unicode Standard Annex #15, Unicode Normalization Forms.\nReturns the String value result of normalizing the string into the normalization form\nnamed by form as specified in Unicode Standard Annex #15, Unicode Normalization Forms.\n@param form Applicable values: "NFC", "NFD", "NFKC", or "NFKD", If not specified default\nis "NFC"\n@param form Applicable values: "NFC", "NFD", "NFKC", or "NFKD", If not specified default\nis "NFC"',name:"normalize",required:!0,type:{name:'{ (form: "NFC" | "NFD" | "NFKC" | "NFKD"): string; (form?: string | undefined): string; }'}},repeat:{defaultValue:null,description:"Returns a String value that is made from count copies appended together. If count is 0,\nthe empty string is returned.\n@param count number of copies to append",name:"repeat",required:!0,type:{name:"(count: number) => string"}},startsWith:{defaultValue:null,description:"Returns true if the sequence of elements of searchString converted to a String is the\nsame as the corresponding elements of this object (converted to a String) starting at\nposition. Otherwise returns false.",name:"startsWith",required:!0,type:{name:"(searchString: string, position?: number | undefined) => boolean"}},anchor:{defaultValue:null,description:"Returns an <a> HTML anchor element and sets the name attribute to the text value\n@param name",name:"anchor",required:!0,type:{name:"(name: string) => string"}},big:{defaultValue:null,description:"Returns a <big> HTML element",name:"big",required:!0,type:{name:"() => string"}},blink:{defaultValue:null,description:"Returns a <blink> HTML element",name:"blink",required:!0,type:{name:"() => string"}},bold:{defaultValue:null,description:"Returns a <b> HTML element",name:"bold",required:!0,type:{name:"() => string"}},fixed:{defaultValue:null,description:"Returns a <tt> HTML element",name:"fixed",required:!0,type:{name:"() => string"}},fontcolor:{defaultValue:null,description:"Returns a <font> HTML element and sets the color attribute value",name:"fontcolor",required:!0,type:{name:"(color: string) => string"}},fontsize:{defaultValue:null,description:"Returns a <font> HTML element and sets the size attribute value\nReturns a <font> HTML element and sets the size attribute value",name:"fontsize",required:!0,type:{name:"{ (size: number): string; (size: string): string; }"}},italics:{defaultValue:null,description:"Returns an <i> HTML element",name:"italics",required:!0,type:{name:"() => string"}},link:{defaultValue:null,description:"Returns an <a> HTML element and sets the href attribute value",name:"link",required:!0,type:{name:"(url: string) => string"}},small:{defaultValue:null,description:"Returns a <small> HTML element",name:"small",required:!0,type:{name:"() => string"}},strike:{defaultValue:null,description:"Returns a <strike> HTML element",name:"strike",required:!0,type:{name:"() => string"}},sub:{defaultValue:null,description:"Returns a <sub> HTML element",name:"sub",required:!0,type:{name:"() => string"}},sup:{defaultValue:null,description:"Returns a <sup> HTML element",name:"sup",required:!0,type:{name:"() => string"}},"__@iterator":{defaultValue:null,description:"Iterator",name:"__@iterator",required:!0,type:{name:"() => IterableIterator<string>"}},padStart:{defaultValue:null,description:'Pads the current string with a given string (possibly repeated) so that the resulting string reaches a given length.\nThe padding is applied from the start (left) of the current string.\n@param maxLength The length of the resulting string once the current string has been padded.\nIf this parameter is smaller than the current string\'s length, the current string will be returned as it is.\n@param fillString The string to pad the current string with.\nIf this string is too long, it will be truncated and the left-most part will be applied.\nThe default value for this parameter is " " (U+0020).',name:"padStart",required:!0,type:{name:"(maxLength: number, fillString?: string | undefined) => string"}},padEnd:{defaultValue:null,description:'Pads the current string with a given string (possibly repeated) so that the resulting string reaches a given length.\nThe padding is applied from the end (right) of the current string.\n@param maxLength The length of the resulting string once the current string has been padded.\nIf this parameter is smaller than the current string\'s length, the current string will be returned as it is.\n@param fillString The string to pad the current string with.\nIf this string is too long, it will be truncated and the left-most part will be applied.\nThe default value for this parameter is " " (U+0020).',name:"padEnd",required:!0,type:{name:"(maxLength: number, fillString?: string | undefined) => string"}}}}]}],entries:[{key:"src/useTitle/index.mdx",value:{name:"useTitle",route:"/",order:-1,sidebar:!0,id:"6e48b6aceff3464c6489e059687f5ef4",filepath:"src/useTitle/index.mdx",link:"https://github.com/umijs/hooks/edit/master/src/useTitle/index.mdx",slug:"src-use-title-index",menu:"",headings:[{slug:"usetitle",depth:1,value:"useTitle"},{slug:"usage",depth:2,value:"Usage"},{slug:"demo",depth:3,value:"Demo"},{slug:"reference",depth:2,value:"Reference"}]}}]}},"./.docz/app/index.jsx":function(e,t,n){"use strict";n.r(t);var r=n("react"),i=n.n(r),a=n("react-dom"),s=n.n(a),o=n("./node_modules/_docz@1.2.0@docz/dist/index.esm.js"),l=n("./node_modules/_docz-theme-umi@2.0.5@docz-theme-umi/es/index.js"),u={"src/useTitle/index.mdx":function(){return Promise.all([n.e(0),n.e(2)]).then(n.bind(null,"./src/useTitle/index.mdx"))}},c=n("./.docz/app/db.json"),d=function(){return i.a.createElement(l.a,{linkComponent:o.b,db:c},i.a.createElement(o.c,{imports:u}))},p=[],h=[],f=function(){return h.forEach(function(e){return e&&e()})},m=document.querySelector("#root");!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d;p.forEach(function(e){return e&&e()}),s.a.render(i.a.createElement(e,null),m,f)}(d)},0:function(e,t,n){e.exports=n("./.docz/app/index.jsx")},react:function(e,t){e.exports=window.React},"react-dom":function(e,t){e.exports=window.ReactDOM}});
!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=16)}([function(t,e,n){t.exports=n(3)},function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e){function n(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}t.exports=function(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t}},function(t,e,n){var r=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function a(t,e,n,r){var o=e&&e.prototype instanceof d?e:d,i=Object.create(o.prototype),s=new O(r||[]);return i._invoke=function(t,e,n){var r=l;return function(o,i){if(r===h)throw new Error("Generator is already running");if(r===p){if("throw"===o)throw i;return P()}for(n.method=o,n.arg=i;;){var s=n.delegate;if(s){var c=L(s,n);if(c){if(c===m)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===l)throw r=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=h;var a=u(t,e,n);if("normal"===a.type){if(r=n.done?p:f,a.arg===m)continue;return{value:a.arg,done:n.done}}"throw"===a.type&&(r=p,n.method="throw",n.arg=a.arg)}}}(t,n,s),i}function u(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=a;var l="suspendedStart",f="suspendedYield",h="executing",p="completed",m={};function d(){}function v(){}function g(){}var w={};w[i]=function(){return this};var y=Object.getPrototypeOf,b=y&&y(y(N([])));b&&b!==n&&r.call(b,i)&&(w=b);var x=g.prototype=d.prototype=Object.create(w);function k(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function j(t){var e;this._invoke=function(n,o){function i(){return new Promise((function(e,i){!function e(n,o,i,s){var c=u(t[n],t,o);if("throw"!==c.type){var a=c.arg,l=a.value;return l&&"object"==typeof l&&r.call(l,"__await")?Promise.resolve(l.__await).then((function(t){e("next",t,i,s)}),(function(t){e("throw",t,i,s)})):Promise.resolve(l).then((function(t){a.value=t,i(a)}),(function(t){return e("throw",t,i,s)}))}s(c.arg)}(n,o,e,i)}))}return e=e?e.then(i,i):i()}}function L(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=e,L(t,n),"throw"===n.method))return m;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var o=u(r,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,m;var i=o.arg;return i?i.done?(n[t.resultName]=i.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,m):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,m)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function _(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function N(t){if(t){var n=t[i];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,s=function n(){for(;++o<t.length;)if(r.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=e,n.done=!0,n};return s.next=s}}return{next:P}}function P(){return{value:e,done:!0}}return v.prototype=x.constructor=g,g.constructor=v,g[c]=v.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},k(j.prototype),j.prototype[s]=function(){return this},t.AsyncIterator=j,t.async=function(e,n,r,o){var i=new j(a(e,n,r,o));return t.isGeneratorFunction(n)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},k(x),x[c]="Generator",x[i]=function(){return this},x.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=N,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(_),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function o(r,o){return c.type="throw",c.arg=t,n.next=r,o&&(n.method="next",n.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var s=this.tryEntries[i],c=s.completion;if("root"===s.tryLoc)return o("end");if(s.tryLoc<=this.prev){var a=r.call(s,"catchLoc"),u=r.call(s,"finallyLoc");if(a&&u){if(this.prev<s.catchLoc)return o(s.catchLoc,!0);if(this.prev<s.finallyLoc)return o(s.finallyLoc)}else if(a){if(this.prev<s.catchLoc)return o(s.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<s.finallyLoc)return o(s.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var s=i?i.completion:{};return s.type=t,s.arg=e,i?(this.method="next",this.next=i.finallyLoc,m):this.complete(s)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),_(n),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;_(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:N(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),m}},t}(t.exports);try{regeneratorRuntime=r}catch(t){Function("r","regeneratorRuntime = r")(r)}},,,,,,function(t,e){function n(t,e,n,r,o,i,s){try{var c=t[i](s),a=c.value}catch(t){return void n(t)}c.done?e(a):Promise.resolve(a).then(r,o)}t.exports=function(t){return function(){var e=this,r=arguments;return new Promise((function(o,i){var s=t.apply(e,r);function c(t){n(s,o,i,c,a,"next",t)}function a(t){n(s,o,i,c,a,"throw",t)}c(void 0)}))}}},,,,,,,function(t,e,n){"use strict";var r=n(17),o=n(18);new r(o.name,o.version,"verbose").fromCache(["app.js","index.css","index.html","index.js","ledger.js","stellar-sdk.js","vendors~app.js","vendors~app~ledger.js","vendors~ledger.js","vendors~trezor.js","widget","widget.css","widget.html","fonts/rubik.woff","fonts/rubik.woff2","fonts/cousine.woff","fonts/cousine.woff2","browserconfig.xml","manifest.json","favicon.ico","icons/16x16.png","icons/32x32.png","icons/192x192.png","icons/512x512.png","icons/apple-touch.png","icons/mstile.png","icons/safari.svg"]).precache().register()},function(t,e,n){var r=n(0),o=n(9),i=n(1),s=n(2),c=2e3,a=t.exports=function(){"use strict";function t(e,n,r){i(this,t),this.name=e,this.version=n,this.verbose=r,this.hostname=location.host.replace(/:.*/,""),this.enabled="localhost"!==this.hostname&&"127.0.0.1"!==this.hostname,this.root="".concat(location.protocol,"//").concat(location.host,"/"),this.startByRoot=new RegExp("^"+this.root),this.timeout=c,this.cacheName="".concat(e,"-").concat(n),this.files={},this.get=[]}return s(t,[{key:"development",value:function(){return this.enabled=!0,this}},{key:"log",value:function(t){this.verbose&&console.log(t)}},{key:"precache",value:function(){return this.get=Object.keys(this.files),this}},{key:"register",value:function(){var t=this;self.addEventListener("install",(function(e){var n,r,o;t.log("Installing ".concat(t.cacheName,"...")),e.waitUntil((n=t,r=t.get,o=r.map((function(t){return"".concat(t,"?version=").concat(n.version)})),caches.open(n.cacheName).then((function(t){return t.addAll(o)}))).then((function(){return self.skipWaiting()})).then((function(){return t.log("".concat(t.cacheName," installed"))})))})),self.addEventListener("activate",(function(e){var n;e.waitUntil((n=t.cacheName,caches.keys().then((function(t){return Promise.all(t.map((function(t){t!==n&&caches.delete(t)})))}))))})),self.addEventListener("fetch",(function(e){if(t.enabled&&"GET"===e.request.method&&e.request.url.match(t.startByRoot)){var n=e.request.url.replace(/(\?|#).*$/,""),r=n.replace(t.startByRoot,"");r||(r="index.html",n+="index.html");var o="?version=".concat(t.version),i=new Request("".concat(n).concat(o)),s=t.files[r];s&&u[s]?e.respondWith(u[s](t,i,r)):e.respondWith(u.fromNetwork(t,i,r))}}))}}]),t}();var u={};function l(t,e,n){var r=n.clone();caches.open(t.cacheName).then((function(t){return t.put(e,r)}))}u.fromCache=function(t,e,n){return t.log("Looking for ".concat(n," into ").concat(t.cacheName," cache...")),caches.open(t.cacheName).then((function(t){return t.match(e)}))},u.fromNetwork=function(t,e,n){return t.log("Downloading ".concat(n,"...")),new Promise((function(n,r){var o=setTimeout(r,t.timeout);return fetch(e).then((function(t){clearTimeout(o),n(t)}))}))},u.cacheOrNetwork=function(){var t=o(r.mark((function t(e,n,o){var i,s;return r.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.fromCache(e,n,o);case 2:if(!(i=t.sent)){t.next=5;break}return t.abrupt("return",i);case 5:return t.next=7,u.fromNetwork(e,n,o);case 7:return s=t.sent,l(e,n,s),t.abrupt("return",s);case 10:case"end":return t.stop()}}),t)})));return function(e,n,r){return t.apply(this,arguments)}}();var f=function(t){a.prototype[t]=function(e){var n=this;return e.forEach((function(e){return n.files[e]=t})),this}};for(var h in u)f(h)},function(t){t.exports=JSON.parse('{"name":"cosmic-link","version":"1.13.2","description":"The Cosmic.link website","author":"MisterTicot <mister.ticot@cosmic.plus>","homepage":"https://cosmic.link","repository":"github:cosmic-plus/webapp-cosmic-link","license":"MIT","keywords":[],"scripts":{"test":"echo \\"Error: no test specified\\" && exit 1","get":"git submodule update -i --recursive","clean":"rm -rf web/*","prettier":"prettier --write --no-semi \'src/**/*.{js,json,md}\' \'*.{js,json,md}\'","eslint":"eslint --fix \'src/**/*.js\' \'*.js\'","lint":"npm run prettier && npm run eslint","set-dev":"sh setenv.sh -d","set-prod":"sh setenv.sh -p","build-js":"webpack -p && cp -f node_modules/stellar-sdk/dist/stellar-sdk.min.js web/stellar-sdk.js","build-index-scss":"node-sass style/index.scss -o web -t compressed","build-widget-scss":"node-sass style/widget.scss -o web -t compressed","build-scss":"npm run build-index-scss && npm run build-widget-scss","build-css":"npm run build-scss && autoprefixer-cli web/index.css web/widget.css","build-static":"cp -a static/. web","build-misc":"cp -f *.md package-lock.json web","build-all":"for i in js css static misc; do npm run build-$i || return; done","build":"npm run clean && npm run set-prod && npm run build-all","rebuild":"npm run get && cp -f web/package-lock.json . && npm ci && npm run build","check":"npm run rebuild && cd web && git status && [ ! \\"$(git status -z)\\" ]","watch-index-css":"node-sass style/index.scss -wo web","watch-widget-css":"node-sass style/widget.scss -wo web","watch-css":"npm run watch-index-css & npm run watch-widget-css","watch-js":"webpack -d --watch","watch-static":"cp -fl static/*.* web","watch":"npm run watch-static && npm run watch-css & npm run watch-js","serve":"npm run set-dev && npm run watch & cd web && live-server --https=../node_modules/live-server-https","commit-web":"cd web && git ci -am \\"$message\\"","commit-main":"git ci -am \\"$message\\"","commit-all":"[ \\"$version\\" ] && npm run commit-web && npm run commit-main","commit-release":"export message=\\"Release $version\\" && npm run commit-all","tag-web":"cd web && git tag -s \\"$version\\" -m \\"$message\\"","tag-main":"git tag -s \\"$version\\" -m \\"$message\\"","tag-all":"[ \\"$version\\" -a \\"$message\\" ] && npm run tag-web && npm run tag-main","tag-release":"export version message=\\"Release $version\\" && npm run tag-all","push-release":"cd web && git push --follow-tags && cd .. && git push --follow-tags","make-release":"npm update && npm run build && npm run commit-release","publish-release":"npm run check && npm run tag-release && npm run push-release"},"devDependencies":{"@babel/core":"^7.7.4","@babel/plugin-syntax-dynamic-import":"^7.7.4","@babel/plugin-transform-runtime":"^7.7.4","@babel/preset-env":"^7.7.4","@babel/runtime":"^7.7.4","autoprefixer-cli":"^1.0.0","babel-eslint":"^10.0.3","babel-loader":"^8.0.6","eslint":"^5.16.0","live-server":"^1.2.1","live-server-https":"0.0.2","node-sass":"^4.13.0","prettier":"^1.19.1","webpack":"^4.41.2","webpack-cli":"^3.3.10"},"dependencies":{"@cosmic-plus/assets":"^1.0.2","@cosmic-plus/base":"^2.5.1","@cosmic-plus/domutils":"^2.1.0","@cosmic-plus/jsutils":"^2.0.2","@cosmic-plus/ledger-wallet":"^1.5.0","@cosmic-plus/trezor-wallet":"^0.5.0","@cosmic-plus/tx-result":"^1.0.1","cosmic-lib":"^2.5.0","qrcode":"^1.4.4"}}')}]);
//# sourceMappingURL=worker.js.map
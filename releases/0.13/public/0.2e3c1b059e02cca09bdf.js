webpackJsonp([0],{315:function(t,e,n){var r=n(0)(n(558),n(905),null,null,null);t.exports=r.exports},419:function(t,e,n){var r=n(34)("wks"),i=n(36),o=n(5).Symbol,a="function"==typeof o;(t.exports=function(t){return r[t]||(r[t]=a&&o[t]||(a?o:i)("Symbol."+t))}).store=r},420:function(t,e){t.exports={}},421:function(t,e,n){var r=n(26).f,i=n(27),o=n(419)("toStringTag");t.exports=function(t,e,n){t&&!i(t=n?t:t.prototype,o)&&r(t,o,{configurable:!0,value:e})}},422:function(t,e,n){var r=n(30),i=n(419)("toStringTag"),o="Arguments"==r(function(){return arguments}()),a=function(t,e){try{return t[e]}catch(t){}};t.exports=function(t){var e,n,s;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=a(e=Object(t),i))?n:o?r(e):"Object"==(s=r(e))&&"function"==typeof e.callee?"Arguments":s}},423:function(t,e,n){t.exports=n(5).document&&document.documentElement},424:function(t,e,n){"use strict";var r=n(425),i=n(8),o=n(433),a=n(25),s=n(27),c=n(420),u=n(428),f=n(421),l=n(432),v=n(419)("iterator"),p=!([].keys&&"next"in[].keys()),h=function(){return this};t.exports=function(t,e,n,d,m,_,g){u(n,e,d);var y,x,b,w=function(t){if(!p&&t in k)return k[t];switch(t){case"keys":case"values":return function(){return new n(this,t)}}return function(){return new n(this,t)}},P=e+" Iterator",j="values"==m,C=!1,k=t.prototype,O=k[v]||k["@@iterator"]||m&&k[m],S=O||w(m),A=m?j?w("entries"):S:void 0,T="Array"==e?k.entries||O:O;if(T&&(b=l(T.call(new t)))!==Object.prototype&&(f(b,P,!0),r||s(b,v)||a(b,v,h)),j&&O&&"values"!==O.name&&(C=!0,S=function(){return O.call(this)}),r&&!g||!p&&!C&&k[v]||a(k,v,S),c[e]=S,c[P]=h,m)if(y={values:j?S:w("values"),keys:_?S:w("keys"),entries:A},g)for(x in y)x in k||o(k,x,y[x]);else i(i.P+i.F*(p||C),e,y);return y}},425:function(t,e){t.exports=!0},426:function(t,e,n){var r=n(420),i=n(419)("iterator"),o=Array.prototype;t.exports=function(t){return void 0!==t&&(r.Array===t||o[i]===t)}},427:function(t,e,n){var r=n(24);t.exports=function(t,e,n,i){try{return i?e(r(n)[0],n[1]):e(n)}catch(e){var o=t.return;throw void 0!==o&&r(o.call(t)),e}}},428:function(t,e,n){"use strict";var r=n(430),i=n(29),o=n(421),a={};n(25)(a,n(419)("iterator"),function(){return this}),t.exports=function(t,e,n){t.prototype=r(a,{next:i(1,n)}),o(t,e+" Iterator")}},429:function(t,e,n){var r=n(419)("iterator"),i=!1;try{var o=[7][r]();o.return=function(){i=!0},Array.from(o,function(){throw 2})}catch(t){}t.exports=function(t,e){if(!e&&!i)return!1;var n=!1;try{var o=[7],a=o[r]();a.next=function(){return{done:n=!0}},o[r]=function(){return a},t(o)}catch(t){}return n}},430:function(t,e,n){var r=n(24),i=n(431),o=n(33),a=n(28)("IE_PROTO"),s=function(){},c=function(){var t,e=n(32)("iframe"),r=o.length;for(e.style.display="none",n(423).appendChild(e),e.src="javascript:",t=e.contentWindow.document,t.open(),t.write("<script>document.F=Object<\/script>"),t.close(),c=t.F;r--;)delete c.prototype[o[r]];return c()};t.exports=Object.create||function(t,e){var n;return null!==t?(s.prototype=r(t),n=new s,s.prototype=null,n[a]=t):n=c(),void 0===e?n:i(n,e)}},431:function(t,e,n){var r=n(26),i=n(24),o=n(11);t.exports=n(6)?Object.defineProperties:function(t,e){i(t);for(var n,a=o(e),s=a.length,c=0;s>c;)r.f(t,n=a[c++],e[n]);return t}},432:function(t,e,n){var r=n(27),i=n(9),o=n(28)("IE_PROTO"),a=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=i(t),r(t,o)?t[o]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?a:null}},433:function(t,e,n){t.exports=n(25)},434:function(t,e,n){var r=n(12),i=n(10);t.exports=function(t){return function(e,n){var o,a,s=String(i(e)),c=r(n),u=s.length;return c<0||c>=u?t?"":void 0:(o=s.charCodeAt(c),o<55296||o>56319||c+1===u||(a=s.charCodeAt(c+1))<56320||a>57343?t?s.charAt(c):o:t?s.slice(c,c+2):a-56320+(o-55296<<10)+65536)}}},435:function(t,e,n){var r=n(422),i=n(419)("iterator"),o=n(420);t.exports=n(2).getIteratorMethod=function(t){if(void 0!=t)return t[i]||t["@@iterator"]||o[r(t)]}},436:function(t,e,n){"use strict";var r=n(434)(!0);n(424)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=r(e,n),this._i+=t.length,{value:t,done:!1})})},442:function(t,e,n){var r,i,o,a=n(31),s=n(638),c=n(423),u=n(32),f=n(5),l=f.process,v=f.setImmediate,p=f.clearImmediate,h=f.MessageChannel,d=0,m={},_=function(){var t=+this;if(m.hasOwnProperty(t)){var e=m[t];delete m[t],e()}},g=function(t){_.call(t.data)};v&&p||(v=function(t){for(var e=[],n=1;arguments.length>n;)e.push(arguments[n++]);return m[++d]=function(){s("function"==typeof t?t:Function(t),e)},r(d),d},p=function(t){delete m[t]},"process"==n(30)(l)?r=function(t){l.nextTick(a(_,t,1))}:h?(i=new h,o=i.port2,i.port1.onmessage=g,r=a(o.postMessage,o,1)):f.addEventListener&&"function"==typeof postMessage&&!f.importScripts?(r=function(t){f.postMessage(t+"","*")},f.addEventListener("message",g,!1)):r="onreadystatechange"in u("script")?function(t){c.appendChild(u("script")).onreadystatechange=function(){c.removeChild(this),_.call(t)}}:function(t){setTimeout(a(_,t,1),0)}),t.exports={set:v,clear:p}},558:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(631),i=n.n(r);e.default={data:function(){return{search:"",totalItems:0,items:[],loading:!0,pagination:{},headers:[{text:"Dessert (100g serving)",align:"left",sortable:!1,value:"name"},{text:"Calories",value:"calories"},{text:"Fat (g)",value:"fat"},{text:"Carbs (g)",value:"carbs"},{text:"Protein (g)",value:"protein"},{text:"Sodium (mg)",value:"sodium"},{text:"Calcium (%)",value:"calcium"},{text:"Iron (%)",value:"iron"}]}},watch:{pagination:{handler:function(){var t=this;this.getDataFromApi().then(function(e){t.items=e.items,t.totalItems=e.total})},deep:!0}},mounted:function(){var t=this;this.getDataFromApi().then(function(e){t.items=e.items,t.totalItems=e.total})},methods:{getDataFromApi:function(){var t=this;return this.loading=!0,new i.a(function(e,n){var r=t.pagination,i=r.sortBy,o=r.descending,a=r.page,s=r.rowsPerPage,c=t.getUsers(),u=c.length;t.pagination.sortBy&&(c=c.sort(function(t,e){var n=t[i],r=e[i];return o?n<r?1:n>r?-1:0:n<r?-1:n>r?1:0})),s>0&&(c=c.slice((a-1)*s,a*s)),setTimeout(function(){t.loading=!1,e({items:c,total:u})},1e3)})},getUsers:function(){return[{value:!1,name:"Frozen Yogurt",calories:159,fat:6,carbs:24,protein:4,sodium:87,calcium:"14%",iron:"1%"},{value:!1,name:"Ice cream sandwich",calories:237,fat:9,carbs:37,protein:4.3,sodium:129,calcium:"8%",iron:"1%"},{value:!1,name:"Eclair",calories:262,fat:16,carbs:23,protein:6,sodium:337,calcium:"6%",iron:"7%"},{value:!1,name:"Cupcake",calories:305,fat:3.7,carbs:67,protein:4.3,sodium:413,calcium:"3%",iron:"8%"},{value:!1,name:"Gingerbread",calories:356,fat:16,carbs:49,protein:3.9,sodium:327,calcium:"7%",iron:"16%"},{value:!1,name:"Jelly bean",calories:375,fat:0,carbs:94,protein:0,sodium:50,calcium:"0%",iron:"0%"},{value:!1,name:"Lollipop",calories:392,fat:.2,carbs:98,protein:0,sodium:38,calcium:"0%",iron:"2%"},{value:!1,name:"Honeycomb",calories:408,fat:3.2,carbs:87,protein:6.5,sodium:562,calcium:"0%",iron:"45%"},{value:!1,name:"Donut",calories:452,fat:25,carbs:51,protein:4.9,sodium:326,calcium:"2%",iron:"22%"},{value:!1,name:"KitKat",calories:518,fat:26,carbs:65,protein:7,sodium:54,calcium:"12%",iron:"6%"}]}}}},631:function(t,e,n){t.exports={default:n(634),__esModule:!0}},634:function(t,e,n){n(646),n(436),n(648),n(647),t.exports=n(2).Promise},635:function(t,e){t.exports=function(){}},636:function(t,e){t.exports=function(t,e,n,r){if(!(t instanceof e)||void 0!==r&&r in t)throw TypeError(n+": incorrect invocation!");return t}},637:function(t,e,n){var r=n(31),i=n(427),o=n(426),a=n(24),s=n(35),c=n(435),u={},f={},e=t.exports=function(t,e,n,l,v){var p,h,d,m,_=v?function(){return t}:c(t),g=r(n,l,e?2:1),y=0;if("function"!=typeof _)throw TypeError(t+" is not iterable!");if(o(_)){for(p=s(t.length);p>y;y++)if((m=e?g(a(h=t[y])[0],h[1]):g(t[y]))===u||m===f)return m}else for(d=_.call(t);!(h=d.next()).done;)if((m=i(d,g,h.value,e))===u||m===f)return m};e.BREAK=u,e.RETURN=f},638:function(t,e){t.exports=function(t,e,n){var r=void 0===n;switch(e.length){case 0:return r?t():t.call(n);case 1:return r?t(e[0]):t.call(n,e[0]);case 2:return r?t(e[0],e[1]):t.call(n,e[0],e[1]);case 3:return r?t(e[0],e[1],e[2]):t.call(n,e[0],e[1],e[2]);case 4:return r?t(e[0],e[1],e[2],e[3]):t.call(n,e[0],e[1],e[2],e[3])}return t.apply(n,e)}},639:function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},640:function(t,e,n){var r=n(5),i=n(442).set,o=r.MutationObserver||r.WebKitMutationObserver,a=r.process,s=r.Promise,c="process"==n(30)(a);t.exports=function(){var t,e,n,u=function(){var r,i;for(c&&(r=a.domain)&&r.exit();t;){i=t.fn,t=t.next;try{i()}catch(r){throw t?n():e=void 0,r}}e=void 0,r&&r.enter()};if(c)n=function(){a.nextTick(u)};else if(o){var f=!0,l=document.createTextNode("");new o(u).observe(l,{characterData:!0}),n=function(){l.data=f=!f}}else if(s&&s.resolve){var v=s.resolve();n=function(){v.then(u)}}else n=function(){i.call(r,u)};return function(r){var i={fn:r,next:void 0};e&&(e.next=i),t||(t=i,n()),e=i}}},641:function(t,e,n){var r=n(25);t.exports=function(t,e,n){for(var i in e)n&&t[i]?t[i]=e[i]:r(t,i,e[i]);return t}},642:function(t,e,n){"use strict";var r=n(5),i=n(2),o=n(26),a=n(6),s=n(419)("species");t.exports=function(t){var e="function"==typeof i[t]?i[t]:r[t];a&&e&&!e[s]&&o.f(e,s,{configurable:!0,get:function(){return this}})}},643:function(t,e,n){var r=n(24),i=n(37),o=n(419)("species");t.exports=function(t,e){var n,a=r(t).constructor;return void 0===a||void 0==(n=r(a)[o])?e:i(n)}},644:function(t,e,n){"use strict";var r=n(635),i=n(639),o=n(420),a=n(13);t.exports=n(424)(Array,"Array",function(t,e){this._t=a(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,i(1)):"keys"==e?i(0,n):"values"==e?i(0,t[n]):i(0,[n,t[n]])},"values"),o.Arguments=o.Array,r("keys"),r("values"),r("entries")},646:function(t,e){},647:function(t,e,n){"use strict";var r,i,o,a=n(425),s=n(5),c=n(31),u=n(422),f=n(8),l=n(7),v=n(37),p=n(636),h=n(637),d=n(643),m=n(442).set,_=n(640)(),g=s.TypeError,y=s.process,x=s.Promise,y=s.process,b="process"==u(y),w=function(){},P=!!function(){try{var t=x.resolve(1),e=(t.constructor={})[n(419)("species")]=function(t){t(w,w)};return(b||"function"==typeof PromiseRejectionEvent)&&t.then(w)instanceof e}catch(t){}}(),j=function(t,e){return t===e||t===x&&e===o},C=function(t){var e;return!(!l(t)||"function"!=typeof(e=t.then))&&e},k=function(t){return j(x,t)?new O(t):new i(t)},O=i=function(t){var e,n;this.promise=new t(function(t,r){if(void 0!==e||void 0!==n)throw g("Bad Promise constructor");e=t,n=r}),this.resolve=v(e),this.reject=v(n)},S=function(t){try{t()}catch(t){return{error:t}}},A=function(t,e){if(!t._n){t._n=!0;var n=t._c;_(function(){for(var r=t._v,i=1==t._s,o=0;n.length>o;)!function(e){var n,o,a=i?e.ok:e.fail,s=e.resolve,c=e.reject,u=e.domain;try{a?(i||(2==t._h&&E(t),t._h=1),!0===a?n=r:(u&&u.enter(),n=a(r),u&&u.exit()),n===e.promise?c(g("Promise-chain cycle")):(o=C(n))?o.call(n,s,c):s(n)):c(r)}catch(t){c(t)}}(n[o++]);t._c=[],t._n=!1,e&&!t._h&&T(t)})}},T=function(t){m.call(s,function(){var e,n,r,i=t._v;if(F(t)&&(e=S(function(){b?y.emit("unhandledRejection",i,t):(n=s.onunhandledrejection)?n({promise:t,reason:i}):(r=s.console)&&r.error&&r.error("Unhandled promise rejection",i)}),t._h=b||F(t)?2:1),t._a=void 0,e)throw e.error})},F=function(t){if(1==t._h)return!1;for(var e,n=t._a||t._c,r=0;n.length>r;)if(e=n[r++],e.fail||!F(e.promise))return!1;return!0},E=function(t){m.call(s,function(){var e;b?y.emit("rejectionHandled",t):(e=s.onrejectionhandled)&&e({promise:t,reason:t._v})})},I=function(t){var e=this;e._d||(e._d=!0,e=e._w||e,e._v=t,e._s=2,e._a||(e._a=e._c.slice()),A(e,!0))},M=function(t){var e,n=this;if(!n._d){n._d=!0,n=n._w||n;try{if(n===t)throw g("Promise can't be resolved itself");(e=C(t))?_(function(){var r={_w:n,_d:!1};try{e.call(t,c(M,r,1),c(I,r,1))}catch(t){I.call(r,t)}}):(n._v=t,n._s=1,A(n,!1))}catch(t){I.call({_w:n,_d:!1},t)}}};P||(x=function(t){p(this,x,"Promise","_h"),v(t),r.call(this);try{t(c(M,this,1),c(I,this,1))}catch(t){I.call(this,t)}},r=function(t){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1},r.prototype=n(641)(x.prototype,{then:function(t,e){var n=k(d(this,x));return n.ok="function"!=typeof t||t,n.fail="function"==typeof e&&e,n.domain=b?y.domain:void 0,this._c.push(n),this._a&&this._a.push(n),this._s&&A(this,!1),n.promise},catch:function(t){return this.then(void 0,t)}}),O=function(){var t=new r;this.promise=t,this.resolve=c(M,t,1),this.reject=c(I,t,1)}),f(f.G+f.W+f.F*!P,{Promise:x}),n(421)(x,"Promise"),n(642)("Promise"),o=n(2).Promise,f(f.S+f.F*!P,"Promise",{reject:function(t){var e=k(this);return(0,e.reject)(t),e.promise}}),f(f.S+f.F*(a||!P),"Promise",{resolve:function(t){if(t instanceof x&&j(t.constructor,this))return t;var e=k(this);return(0,e.resolve)(t),e.promise}}),f(f.S+f.F*!(P&&n(429)(function(t){x.all(t).catch(w)})),"Promise",{all:function(t){var e=this,n=k(e),r=n.resolve,i=n.reject,o=S(function(){var n=[],o=0,a=1;h(t,!1,function(t){var s=o++,c=!1;n.push(void 0),a++,e.resolve(t).then(function(t){c||(c=!0,n[s]=t,--a||r(n))},i)}),--a||r(n)});return o&&i(o.error),n.promise},race:function(t){var e=this,n=k(e),r=n.reject,i=S(function(){h(t,!1,function(t){e.resolve(t).then(n.resolve,r)})});return i&&r(i.error),n.promise}})},648:function(t,e,n){n(644);for(var r=n(5),i=n(25),o=n(420),a=n(419)("toStringTag"),s=["NodeList","DOMTokenList","MediaList","StyleSheetList","CSSRuleList"],c=0;c<5;c++){var u=s[c],f=r[u],l=f&&f.prototype;l&&!l[a]&&i(l,a,u),o[u]=o.Array}},905:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.items,search:t.search,pagination:t.pagination,"total-items":t.totalItems,loading:t.loading},on:{"update:pagination":function(e){t.pagination=e}},scopedSlots:t._u([{key:"headerCell",fn:function(e){return[n("span",{directives:[{name:"tooltip",rawName:"v-tooltip:bottom",value:{html:e.header.text},expression:"{ 'html': props.header.text }",arg:"bottom"}]},[t._v("\n        "+t._s(e.header.text)+"\n      ")])]}},{key:"items",fn:function(e){return[n("td",[t._v(t._s(e.item.name))]),n("td",{staticClass:"text-xs-right"},[t._v(t._s(e.item.calories))]),n("td",{staticClass:"text-xs-right"},[t._v(t._s(e.item.fat))]),n("td",{staticClass:"text-xs-right"},[t._v(t._s(e.item.carbs))]),n("td",{staticClass:"text-xs-right"},[t._v(t._s(e.item.protein))]),n("td",{staticClass:"text-xs-right"},[t._v(t._s(e.item.sodium))]),n("td",{staticClass:"text-xs-right"},[t._v(t._s(e.item.calcium))]),n("td",{staticClass:"text-xs-right"},[t._v(t._s(e.item.iron))])]}}])})],1)},staticRenderFns:[]}}});
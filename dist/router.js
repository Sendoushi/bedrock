var bedrockrouter=function(){"use strict";function t(t){for(var e,n=[],r=0,o=0,a="";null!=(e=R.exec(t));){var s=e[0],c=e[1],h=e.index;if(a+=t.slice(o,h),o=h+s.length,c)a+=c[1];else{a&&(n.push(a),a="");var u=e[2],f=e[3],p=e[4],l=e[5],d=e[6],v=e[7],m="+"===d||"*"===d,g="?"===d||"*"===d,w=u||"/",y=p||l||(v?".*":"[^"+w+"]+?");n.push({name:f||r++,prefix:u||"",delimiter:w,optional:g,repeat:m,pattern:i(y)})}}return o<t.length&&(a+=t.substr(o)),a&&n.push(a),n}function e(e){return n(t(e))}function n(t){for(var e=new Array(t.length),n=0;n<t.length;n++)"object"===babelHelpers.typeof(t[n])&&(e[n]=new RegExp("^"+t[n].pattern+"$"));return function(n){for(var r="",i=n||{},o=0;o<t.length;o++){var a=t[o];if("string"!=typeof a){var s,c=i[a.name];if(null==c){if(a.optional)continue;throw new TypeError('Expected "'+a.name+'" to be defined')}if(x(c)){if(!a.repeat)throw new TypeError('Expected "'+a.name+'" to not repeat, but received "'+c+'"');if(0===c.length){if(a.optional)continue;throw new TypeError('Expected "'+a.name+'" to not be empty')}for(var h=0;h<c.length;h++){if(s=encodeURIComponent(c[h]),!e[o].test(s))throw new TypeError('Expected all "'+a.name+'" to match "'+a.pattern+'", but received "'+s+'"');r+=(0===h?a.prefix:a.delimiter)+s}}else{if(s=encodeURIComponent(c),!e[o].test(s))throw new TypeError('Expected "'+a.name+'" to match "'+a.pattern+'", but received "'+s+'"');r+=a.prefix+s}}else r+=a}return r}}function r(t){return t.replace(/([.+*?=^!:${}()[\]|\/])/g,"\\$1")}function i(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function o(t,e){return t.keys=e,t}function a(t){return t.sensitive?"":"i"}function s(t,e){var n=t.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)e.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,pattern:null});return o(t,e)}function c(t,e,n){for(var r=[],i=0;i<t.length;i++)r.push(f(t[i],e,n).source);return o(new RegExp("(?:"+r.join("|")+")",a(n)),e)}function h(e,n,r){for(var i=t(e),a=u(i,r),s=0;s<i.length;s++)"string"!=typeof i[s]&&n.push(i[s]);return o(a,n)}function u(t,e){e=e||{};for(var n=e.strict,i=e.end!==!1,o="",s=t[t.length-1],c="string"==typeof s&&/\/$/.test(s),h=0;h<t.length;h++){var u=t[h];if("string"==typeof u)o+=r(u);else{var f=r(u.prefix),p=u.pattern;u.repeat&&(p+="(?:"+f+p+")*"),p=u.optional?f?"(?:"+f+"("+p+"))?":"("+p+")?":f+"("+p+")",o+=p}}return n||(o=(c?o.slice(0,-2):o)+"(?:\\/(?=$))?"),o+=i?"$":n&&c?"":"(?=\\/|$)",new RegExp("^"+o,a(e))}function f(t,e,n){return e=e||[],x(e)?n||(n={}):(n=e,e=[]),t instanceof RegExp?s(t,e,n):x(t)?c(t,e,n):h(t,e,n)}function p(t,e){if("function"==typeof t)return p("*",t);if("function"==typeof e)for(var n=new m(t),r=1;r<arguments.length;++r)p.callbacks.push(n.middleware(arguments[r]));else"string"==typeof t?p["string"==typeof e?"redirect":"show"](t,e):p.start(t)}function l(t){if(!t.handled){var e;e=I?U+L.hash.replace("#!",""):L.pathname+L.search,e!==t.canonicalPath&&(p.stop(),t.handled=!1,L.href=t.canonicalPath)}}function d(t){return"string"!=typeof t?t:j?decodeURIComponent(t.replace(/\+/g," ")):t}function v(t,e){"/"===t[0]&&0!==t.indexOf(U)&&(t=U+(I?"#!":"")+t);var n=t.indexOf("?");if(this.canonicalPath=t,this.path=t.replace(U,"")||"/",I&&(this.path=this.path.replace("#!","")||"/"),this.title=document.title,this.state=e||{},this.state.path=t,this.querystring=~n?d(t.slice(n+1)):"",this.pathname=d(~n?t.slice(0,n):t),this.params={},this.hash="",!I){if(!~this.path.indexOf("#"))return;var r=this.path.split("#");this.path=r[0],this.hash=d(r[1])||"",this.querystring=this.querystring.split("#")[0]}}function m(t,e){e=e||{},this.path="*"===t?"(.*)":t,this.method="GET",this.regexp=b(this.path,this.keys=[],e)}function g(t){if(1===w(t)&&!(t.metaKey||t.ctrlKey||t.shiftKey||t.defaultPrevented)){for(var e=t.path?t.path[0]:t.target;e&&"A"!==e.nodeName;)e=e.parentNode;if(e&&"A"===e.nodeName&&!e.hasAttribute("download")&&"external"!==e.getAttribute("rel")){var n=e.getAttribute("href");if((I||e.pathname!==L.pathname||!e.hash&&"#"!==n)&&!(n&&n.indexOf("mailto:")>-1)&&!e.target&&y(e.href)){var r=e.pathname+e.search+(e.hash||"");"undefined"!=typeof process&&r.match(/^\/[a-zA-Z]:\//)&&(r=r.replace(/^\/[a-zA-Z]:\//,"/"));var i=r;0===r.indexOf(U)&&(r=r.substr(U.length)),I&&(r=r.replace("#!","")),U&&i===r||(t.preventDefault(),p.show(i))}}}}function w(t){return t=t||window.event,null===t.which?t.button:t.which}function y(t){var e=L.protocol+"//"+L.hostname;return L.port&&(e+=":"+L.port),t&&0===t.indexOf(e)}var x=Array.isArray||function(t){return"[object Array]"==Object.prototype.toString.call(t)},b=f,E=t,k=e,A=n,T=u,R=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^()])+)\\))?|\\(((?:\\\\.|[^()])+)\\))([+*?])?|(\\*))"].join("|"),"g");b.parse=E,b.compile=k,b.tokensToFunction=A,b.tokensToRegExp=T;var O,$,P=p,C="undefined"!=typeof document&&document.ontouchstart?"touchstart":"click",L="undefined"!=typeof window&&(window.history.location||window.location),S=!0,j=!0,U="",I=!1;p.callbacks=[],p.exits=[],p.current="",p.len=0,p.base=function(t){if(0===arguments.length)return U;U=t},p.start=function(t){if(t=t||{},!O&&(O=!0,!1===t.dispatch&&(S=!1),!1===t.decodeURLComponents&&(j=!1),!1!==t.popstate&&window.addEventListener("popstate",q,!1),!1!==t.click&&document.addEventListener(C,g,!1),!0===t.hashbang&&(I=!0),S)){var e=I&&~L.hash.indexOf("#!")?L.hash.substr(2)+L.search:L.pathname+L.search+L.hash;p.replace(e,null,!0,S)}},p.stop=function(){O&&(p.current="",p.len=0,O=!1,document.removeEventListener(C,g,!1),window.removeEventListener("popstate",q,!1))},p.show=function(t,e,n,r){var i=new v(t,e);return p.current=i.path,!1!==n&&p.dispatch(i),!1!==i.handled&&!1!==r&&i.pushState(),i},p.back=function(t,e){p.len>0?(history.back(),p.len--):t?setTimeout(function(){p.show(t,e)}):setTimeout(function(){p.show(U,e)})},p.redirect=function(t,e){"string"==typeof t&&"string"==typeof e&&p(t,function(t){setTimeout(function(){p.replace(e)},0)}),"string"==typeof t&&void 0===e&&setTimeout(function(){p.replace(t)},0)},p.replace=function(t,e,n,r){var i=new v(t,e);return p.current=i.path,i.init=n,i.save(),!1!==r&&p.dispatch(i),i},p.dispatch=function(t){function e(){var t=p.exits[o++];if(!t)return n();t(r,e)}function n(){var e=p.callbacks[i++];return t.path!==p.current?void(t.handled=!1):e?void e(t,n):l(t)}var r=$,i=0,o=0;$=t,r?e():n()},p.exit=function(t,e){if("function"==typeof t)return p.exit("*",t);for(var n=new m(t),r=1;r<arguments.length;++r)p.exits.push(n.middleware(arguments[r]))},p.Context=v,v.prototype.pushState=function(){p.len++,history.pushState(this.state,this.title,I&&"/"!==this.path?"#!"+this.path:this.canonicalPath)},v.prototype.save=function(){history.replaceState(this.state,this.title,I&&"/"!==this.path?"#!"+this.path:this.canonicalPath)},p.Route=m,m.prototype.middleware=function(t){var e=this;return function(n,r){if(e.match(n.path,n.params))return t(n,r);r()}},m.prototype.match=function(t,e){var n=this.keys,r=t.indexOf("?"),i=~r?t.slice(0,r):t,o=this.regexp.exec(decodeURIComponent(i));if(!o)return!1;for(var a=1,s=o.length;a<s;++a){var c=n[a-1],h=d(o[a]);void 0===h&&hasOwnProperty.call(e,c.name)||(e[c.name]=h)}return!0};var q=function(){var t=!1;if("undefined"!=typeof window)return"complete"===document.readyState?t=!0:window.addEventListener("load",function(){setTimeout(function(){t=!0},0)}),function(e){if(t)if(e.state){var n=e.state.path;p.replace(n,e.state)}else p.show(L.pathname+L.hash,void 0,void 0,!1)}}();p.sameOrigin=y;var K={},N=function(t,e,n){if("function"==typeof e&&(n=e,e=""+1e5*Math.random()),!t&&"function"!=typeof t)throw new Error("A message handler is needed!");if(!n&&"function"!=typeof n)throw new Error("A listener function is needed!");var r=K[t]||[];return r.push({id:e,listener:n}),K[t]=r,e},z=function(t,e){if(t&&K[t])return e?void(K[t]=K[t].filter(function(t){return t.id!==e})):void(K[t]=void 0)},Z=function(t,e){var n=K[t];if(n)for(var r=0;r<n.length;r+=1)n[r].listener(e)},D=function(){K={}},F={on:N,off:z,send:Z,reset:D},G=[],H={events:{add:"router.add",start:"router.start"}},M=function(t,e,n){for(var r=0;r<t.cbs.length;r+=1)t.cbs[r](e,n)},B=function(t,e){for(var n=0;n<G.length;n+=1)if(G[n].route===t)return void G[n].cbs.push(e);G.push({route:t,cbs:[e]})},J=function(t){if(G.length){for(var e=0;e<G.length;e+=1){var n=G[e];P(n.route,M.bind(null,n))}P.start(t)}};return F.on(H.events.start,J),F.on(H.events.add,function(t){return B(t.route,t.cb)}),{start:J,add:B,page:P}}();

"use strict";var precacheConfig=[["/ClickyGame/index.html","8250d7b9b2741ec1fb405048ddaca774"],["/ClickyGame/static/css/main.e8bbe49b.css","15f2897c5307350d013bf65cfa12fbbf"],["/ClickyGame/static/js/main.5a6a1244.js","3a9152f142c0bf48596f15a6f451e440"],["/ClickyGame/static/media/cat1.4e54f4dd.jpg","4e54f4ddc4698e5e07a3ac14412f1aff"],["/ClickyGame/static/media/cat10.b4fe7460.jpg","b4fe7460cf51b388440cac731b40f845"],["/ClickyGame/static/media/cat11.dcd52e8e.jpg","dcd52e8e0b2107fc72df76b2c21b8902"],["/ClickyGame/static/media/cat3.13d9f50d.jpg","13d9f50df8f0b39c79114453066813f3"],["/ClickyGame/static/media/cat4.0ec7d772.jpg","0ec7d7723565ddb9f821b371b85676ec"],["/ClickyGame/static/media/cat5.b56ebf7f.jpg","b56ebf7fda6676b36cb5fb3034e43a8a"],["/ClickyGame/static/media/cat7.1b14e3ef.jpg","1b14e3efea9161247e5ea619f9481228"],["/ClickyGame/static/media/cat8.050a2b5f.jpg","050a2b5fa7d45e63c7022d5d849f5c28"],["/ClickyGame/static/media/cat9.34ac87a9.jpg","34ac87a9fa25ffe691d66895770a5870"],["/ClickyGame/static/media/leopard.854a5b13.jpg","854a5b1307c05479ef4161ab6dc9c979"],["/ClickyGame/static/media/tiger.9d92a00f.jpg","9d92a00f957c13369e5f6f94bef869c4"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var r="/ClickyGame/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});
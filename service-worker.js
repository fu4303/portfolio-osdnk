"use strict";var precacheConfig=[["/index.html","677fa885ded49a12df2d47df529aac76"],["/static/css/main.39b7e12e.css","f193212dc2e7ad3c1b0b7d4bfbab06a3"],["/static/js/main.f146b77d.js","f43443645ab183de47ce96282753fe3a"],["/static/media/cmunbi.521ed56c.svg","521ed56c15d31eebae3528cb0d9c00d1"],["/static/media/cmunbi.b2129d3f.woff","b2129d3f84bbb07a0bb239b7e8786b6c"],["/static/media/cmunbi.c4ddc260.eot","c4ddc26008bde89012e7086cfb5f0c4e"],["/static/media/cmunbi.cd9c0404.ttf","cd9c0404b3cd1dc863a5940ca609c8f4"],["/static/media/cmunbx.92c9c84e.woff","92c9c84ec46a48e2a12f53da17bccfa9"],["/static/media/cmunbx.971a7f18.ttf","971a7f1818098f6fd3bb91b08be096df"],["/static/media/cmunbx.a21c0bb9.eot","a21c0bb98f1abf3a9f1c357d356bdf2f"],["/static/media/cmunbx.bb14863a.svg","bb14863adf327892bf0faae61e9edd7c"],["/static/media/cmunci.136cd2be.ttf","136cd2be866fa2d7e8a4fcf358d397c6"],["/static/media/cmunci.24f7ef67.svg","24f7ef671c15c5e3dd248da1cd09ee3a"],["/static/media/cmunci.58c181e0.woff","58c181e07f8fbfa9f26e3e054d8471e5"],["/static/media/cmunci.8d330d10.eot","8d330d10464f0292ddae3c917a267994"],["/static/media/cmunrm.01643be9.ttf","01643be9fa75a4523c77ac348b242aed"],["/static/media/cmunrm.5927a6b6.svg","5927a6b6ea06bac45318dbb90d22a16b"],["/static/media/cmunrm.6650fdd9.woff","6650fdd903e5b977127fa41271967936"],["/static/media/cmunrm.b4fe3836.eot","b4fe38363085ff48a1c85a6fe6635c89"],["/static/media/cmunti.0e8efcc4.woff","0e8efcc4012194aa0f3356810a115423"],["/static/media/cmunti.32fb6a65.svg","32fb6a652e779a54c71c6c27b2a05ad4"],["/static/media/cmunti.86153f09.ttf","86153f0958ae90bf30249dcb98d04a7d"],["/static/media/cmunti.dcc46602.eot","dcc46602102b3762bbbaad9b4a00590b"],["/static/media/facebook.1475c49f.svg","1475c49f3b75cab2c1149640d1fe0633"],["/static/media/github.f0913d95.svg","f0913d95f7e2921800549313c0ba4a4a"],["/static/media/instagram.3f614de7.svg","3f614de75e3ad612cd9598e959198d87"],["/static/media/linkedin.237af903.svg","237af9035a2587ea6f41c4a482823393"],["/static/media/mail.a71eb909.svg","a71eb9097c044423578d55392fedbde9"],["/static/media/me-prof.f6516278.jpg","f651627816c7dae26ff5b81468b99e0a"],["/static/media/meanddoge.736e13c2.jpg","736e13c234be152946455db13e320781"],["/static/media/meandtree.30f98cc9.jpg","30f98cc900fba8088cc688bc34d14230"],["/static/media/strava.75b454d8.svg","75b454d89810d2377cc902a8b7e20c2e"],["/static/media/twitter.acb53cb5.svg","acb53cb5f4244a9f97ed891ae5f6b34c"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),n=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,c),e=urlsToCacheKeys.has(t));var n="/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});
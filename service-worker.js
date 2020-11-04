/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["C:/Users/Admin/Downloads/blog/public/2020/01/02/Bisection_Subset/index.html","27e235d6d39bc4c7a793a6981619cebf"],["C:/Users/Admin/Downloads/blog/public/2020/01/02/Euclidean_Algorithm/index.html","831a52720951674e7573d45dfc286c00"],["C:/Users/Admin/Downloads/blog/public/2020/01/02/Fast_Exponentiation/index.html","067a91356465512f02e407855063434d"],["C:/Users/Admin/Downloads/blog/public/2020/01/02/Hanoi/index.html","19ad1cbc93e41860f0711aa78177bb21"],["C:/Users/Admin/Downloads/blog/public/2020/01/02/P1001/index.html","559c5b626591f83ad3837278467f74a7"],["C:/Users/Admin/Downloads/blog/public/2020/01/02/P1009/index.html","fba46e5136436f89dfbfa1eb4513fcf5"],["C:/Users/Admin/Downloads/blog/public/2020/01/02/P1044/index.html","cd4d1b23c0907ad72c06f175051c71ce"],["C:/Users/Admin/Downloads/blog/public/2020/01/02/beta/index.html","aaf06f1813ddbe264ff44650468137eb"],["C:/Users/Admin/Downloads/blog/public/2020/02/19/hexo-first-deploy/index.html","fc93369c38e9cab9a185956609012f83"],["C:/Users/Admin/Downloads/blog/public/2020/02/20/hexo_git_deploy/index.html","dace90586b84afb55f6221d904d7020d"],["C:/Users/Admin/Downloads/blog/public/2020/02/21/net_ease_unlock/index.html","4d5ef593b2377f0e95d80a63e6db06fa"],["C:/Users/Admin/Downloads/blog/public/2020/02/22/raspi_ubuntu_deploy/index.html","3145555884ac4f5c78465749637879ad"],["C:/Users/Admin/Downloads/blog/public/2020/02/25/raspi_smart_fan/index.html","51d56bfa95cd2a282688d3d8bceea5aa"],["C:/Users/Admin/Downloads/blog/public/2020/02/26/raspi_bt_install/index.html","98ed56f4d14e4b435b4fc152882f800f"],["C:/Users/Admin/Downloads/blog/public/2020/02/29/raspi_aria2_install/index.html","c4e49b41e15bb2fe0b6d7033281ed318"],["C:/Users/Admin/Downloads/blog/public/2020/03/12/hexo_theme_butterfly/index.html","23ac919baf8062aee6bec1329d48cf9b"],["C:/Users/Admin/Downloads/blog/public/2020/03/25/linux_delete_large_file/index.html","87e4a0bda3446a681d44ba716c012103"],["C:/Users/Admin/Downloads/blog/public/2020/04/01/xenforo_deploy/index.html","a9f7e9c0796cace72b36db51d0c836c4"],["C:/Users/Admin/Downloads/blog/public/2020/05/10/rpi_nextcloud_deploy/index.html","36c9fe86a90243e5d3d44c36f368c3d0"],["C:/Users/Admin/Downloads/blog/public/2020/05/26/P2390/index.html","201fb7055ded82e6c7f9977a9f162ca5"],["C:/Users/Admin/Downloads/blog/public/2020/05/31/P1113/index.html","8be8b64db88b2c09223c40c617df4479"],["C:/Users/Admin/Downloads/blog/public/2020/05/31/topological-sort/index.html","42c40d7ae0fa960ccf5d519e85eb208c"],["C:/Users/Admin/Downloads/blog/public/2020/06/03/P3916/index.html","2d0cd7f42cfe811ac33ed81dc08b888f"],["C:/Users/Admin/Downloads/blog/public/2020/06/06/P5318/index.html","862222c1187375512ef831b83ab12e75"],["C:/Users/Admin/Downloads/blog/public/2020/07/10/P5076/index.html","c7ac93dc41327069b387df42811bd1f9"],["C:/Users/Admin/Downloads/blog/public/2020/07/14/mark/index.html","4d985298f0c0224d9b33684a69f3c8ad"],["C:/Users/Admin/Downloads/blog/public/2020/07/17/NexT_hello_world/index.html","7dc962e87921a08bc99e3ddcdcc1f923"],["C:/Users/Admin/Downloads/blog/public/2020/10/06/SP18666/index.html","3a1df7520c1659f93807e0bfd2d62081"],["C:/Users/Admin/Downloads/blog/public/2020/11/03/c++_queue/1.jpg","dcd92f009ae61981999605ab200661bd"],["C:/Users/Admin/Downloads/blog/public/2020/11/03/c++_queue/index.html","8d69a6eb226436f7d80ae72b7b2e1d76"],["C:/Users/Admin/Downloads/blog/public/about/index.html","661ea21f328756bc3e4dc38d188879d8"],["C:/Users/Admin/Downloads/blog/public/archives/2020/01/index.html","7b0123527eb3fdbccb148028eb44aac7"],["C:/Users/Admin/Downloads/blog/public/archives/2020/02/index.html","a8ca28369679e3d3bc800716e08c5a7b"],["C:/Users/Admin/Downloads/blog/public/archives/2020/03/index.html","95672a61b0e72675f54e0af32543e223"],["C:/Users/Admin/Downloads/blog/public/archives/2020/04/index.html","3130d09addf0eaf855b9525172e9d701"],["C:/Users/Admin/Downloads/blog/public/archives/2020/05/index.html","4f61ca824287d2ca8273ec5ca1deb9cb"],["C:/Users/Admin/Downloads/blog/public/archives/2020/06/index.html","99733271c4234147d2acb6a80811e13a"],["C:/Users/Admin/Downloads/blog/public/archives/2020/07/index.html","1693c74057bb9ca81e5e9c4a6054e4a9"],["C:/Users/Admin/Downloads/blog/public/archives/2020/10/index.html","4412b2d2b174a7e2a59d05cec2f724ab"],["C:/Users/Admin/Downloads/blog/public/archives/2020/11/index.html","71c3b93c725761893b1d76eee1457f16"],["C:/Users/Admin/Downloads/blog/public/archives/2020/index.html","683639f20d52031c5b81b4de1196ee06"],["C:/Users/Admin/Downloads/blog/public/archives/2020/page/2/index.html","c54e54389fd35bc324b76d062d580810"],["C:/Users/Admin/Downloads/blog/public/archives/2020/page/3/index.html","92d0209c1d07365288d47941f8e055bb"],["C:/Users/Admin/Downloads/blog/public/archives/index.html","7d621658f9e02770c478938e76275a9b"],["C:/Users/Admin/Downloads/blog/public/archives/page/2/index.html","885b7c61e24b42ce4f1e30029fe963ba"],["C:/Users/Admin/Downloads/blog/public/archives/page/3/index.html","712f4c527f038ca2e026dad30d1b71ee"],["C:/Users/Admin/Downloads/blog/public/css/main.css","1b9baff658dc45b01bc4167710e9364f"],["C:/Users/Admin/Downloads/blog/public/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/Users/Admin/Downloads/blog/public/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["C:/Users/Admin/Downloads/blog/public/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["C:/Users/Admin/Downloads/blog/public/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["C:/Users/Admin/Downloads/blog/public/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["C:/Users/Admin/Downloads/blog/public/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["C:/Users/Admin/Downloads/blog/public/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["C:/Users/Admin/Downloads/blog/public/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["C:/Users/Admin/Downloads/blog/public/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["C:/Users/Admin/Downloads/blog/public/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["C:/Users/Admin/Downloads/blog/public/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["C:/Users/Admin/Downloads/blog/public/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["C:/Users/Admin/Downloads/blog/public/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["C:/Users/Admin/Downloads/blog/public/index.html","7facb41a7e83c0148c8299e2617606b3"],["C:/Users/Admin/Downloads/blog/public/js/algolia-search.js","4d6b3da7a337a0357b8db29647b80f5d"],["C:/Users/Admin/Downloads/blog/public/js/bookmark.js","ead7d08b9977be9c11153c7e05e8c3d1"],["C:/Users/Admin/Downloads/blog/public/js/local-search.js","a183ea627db21d9282e70ce91eb10975"],["C:/Users/Admin/Downloads/blog/public/js/motion.js","7abc3ca6d1524ff02cc435bf8ad4ea05"],["C:/Users/Admin/Downloads/blog/public/js/next-boot.js","2709d32a1d986e1833b7f25935b428e0"],["C:/Users/Admin/Downloads/blog/public/js/schemes/muse.js","69b7b722f4ac35de36001bb9692e16dc"],["C:/Users/Admin/Downloads/blog/public/js/utils.js","e652d46feedfbbcfe1599aeb2c451daa"],["C:/Users/Admin/Downloads/blog/public/lib/animate-css/animate.min.css","1b919b341fd11f43008fc773bf675e9c"],["C:/Users/Admin/Downloads/blog/public/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["C:/Users/Admin/Downloads/blog/public/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["C:/Users/Admin/Downloads/blog/public/medias/128.png","e166117aa5a07d2f2f08be93fd9b59af"],["C:/Users/Admin/Downloads/blog/public/medias/16.png","337b811908b320e7b07ce7ad000f3a1c"],["C:/Users/Admin/Downloads/blog/public/medias/256.png","68119a61248824c46d56d92a34f6eaef"],["C:/Users/Admin/Downloads/blog/public/medias/32.png","7630331d70b53be558add26cccebc5b5"],["C:/Users/Admin/Downloads/blog/public/medias/512.png","2035f444768ee4f3b72fd1d178d63ba5"],["C:/Users/Admin/Downloads/blog/public/medias/64.png","2dbb1e3fa793e1b0997a761537cdad20"],["C:/Users/Admin/Downloads/blog/public/page/2/index.html","9d8031b96d51e5df127cfe8ec9b628ba"],["C:/Users/Admin/Downloads/blog/public/page/3/index.html","493fc3443beadd4a37230020fc514156"],["C:/Users/Admin/Downloads/blog/public/sw.js","abe7f5bd47b7ea415b041a673de78c92"],["C:/Users/Admin/Downloads/blog/public/tags/index.html","7b069679b54b23bada1b0a3ab5f9b902"],["C:/Users/Admin/Downloads/blog/public/tags/干货/index.html","cf3b3dd03480db357666632834006bd3"],["C:/Users/Admin/Downloads/blog/public/tags/树莓派/index.html","08c2a40877127cdb0c0059f50727ea4d"],["C:/Users/Admin/Downloads/blog/public/tags/科普/index.html","5b5cc31ed1367307b97a2d03cc522295"],["C:/Users/Admin/Downloads/blog/public/tags/计划表/index.html","9b453b5f0dbf299d3b1d670bab83c546"],["C:/Users/Admin/Downloads/blog/public/tags/题解/index.html","0ecb61c08deb0628ad415417353ee1b9"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});








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

var precacheConfig = [["C:/Users/Admin/Downloads/blog/public/2020/01/02/Bisection_Subset/index.html","47ddc8c1789576aeca9e6bded91c353f"],["C:/Users/Admin/Downloads/blog/public/2020/01/02/Euclidean_Algorithm/index.html","b47f273d348d2e250af85c8303a0b0a0"],["C:/Users/Admin/Downloads/blog/public/2020/01/02/Fast_Exponentiation/index.html","a96497011e7290e59c2ded2e91359702"],["C:/Users/Admin/Downloads/blog/public/2020/01/02/Hanoi/index.html","edba4608d03d696875e4c1b1d8af0ee2"],["C:/Users/Admin/Downloads/blog/public/2020/01/02/P1001/index.html","04e04f8600f05fc22eaee4aff7eaf204"],["C:/Users/Admin/Downloads/blog/public/2020/01/02/P1009/index.html","e0981fe4554c883ac7287ecc80e1210c"],["C:/Users/Admin/Downloads/blog/public/2020/01/02/P1044/index.html","bd998efc61964ba0c2521a12931f1756"],["C:/Users/Admin/Downloads/blog/public/2020/01/02/beta/index.html","eba373eb62f4a941974618550a6ddbad"],["C:/Users/Admin/Downloads/blog/public/2020/02/19/hexo-first-deploy/index.html","1da864552120599639825a9a0c1ab031"],["C:/Users/Admin/Downloads/blog/public/2020/02/20/hexo_git_deploy/index.html","177588ca38001757e500187ed006d262"],["C:/Users/Admin/Downloads/blog/public/2020/02/21/net_ease_unlock/index.html","84888a896784bf542e6d99c729c9cf11"],["C:/Users/Admin/Downloads/blog/public/2020/02/22/raspi_ubuntu_deploy/index.html","42d77f7be544451fc9586de776069c53"],["C:/Users/Admin/Downloads/blog/public/2020/02/25/raspi_smart_fan/index.html","a526731ceb1347017194d3cb4425e7cd"],["C:/Users/Admin/Downloads/blog/public/2020/02/26/raspi_bt_install/index.html","d3c722cde789c6a1208329f05c851f3e"],["C:/Users/Admin/Downloads/blog/public/2020/02/29/raspi_aria2_install/index.html","159826ecd57842a13f42b4b97dd2dfc9"],["C:/Users/Admin/Downloads/blog/public/2020/03/12/hexo_theme_butterfly/index.html","78b9b00f38af8bc603d1c35a1c19fe20"],["C:/Users/Admin/Downloads/blog/public/2020/03/25/linux_delete_large_file/index.html","f723245a42e2082546bc21447e160b1c"],["C:/Users/Admin/Downloads/blog/public/2020/04/01/xenforo_deploy/index.html","a8b312ef860a20403c509d1e7857ce89"],["C:/Users/Admin/Downloads/blog/public/2020/05/10/rpi_nextcloud_deploy/index.html","cd9352bd6a53cddaf8b5fe1e8fee301a"],["C:/Users/Admin/Downloads/blog/public/2020/05/26/P2390/index.html","4bdb236e78523c80ecbfb522ef4ae00e"],["C:/Users/Admin/Downloads/blog/public/2020/05/31/P1113/index.html","e5eab942b9b3d9f2390ff7fbc3433f43"],["C:/Users/Admin/Downloads/blog/public/2020/05/31/topological-sort/index.html","b0507b28c5b2e15c53702789acc05304"],["C:/Users/Admin/Downloads/blog/public/2020/06/03/P3916/index.html","e7eb0669e4d5c607a503205d88421756"],["C:/Users/Admin/Downloads/blog/public/2020/06/06/P5318/index.html","c2deedd9b874d2af12ad728e547fc898"],["C:/Users/Admin/Downloads/blog/public/2020/07/10/P5076/index.html","2b64cd006158793c8dcac0af00729e48"],["C:/Users/Admin/Downloads/blog/public/2020/07/14/mark/index.html","4f12119df82f1d64e2463b50eec963d2"],["C:/Users/Admin/Downloads/blog/public/2020/07/17/NexT_hello_world/index.html","8dc7dc11a3d4e746951e09245a9ecc8b"],["C:/Users/Admin/Downloads/blog/public/2020/10/06/SP18666/index.html","4cb1d268d5c3bdfa7233229b9937472c"],["C:/Users/Admin/Downloads/blog/public/2020/11/03/c++_queue/index.html","739ae602400ed5fb8ee0563934f18ce1"],["C:/Users/Admin/Downloads/blog/public/about/index.html","49e86241b79a46477145dd8e6a8a54bc"],["C:/Users/Admin/Downloads/blog/public/archives/2020/01/index.html","596fe45c8f6ce5592446b23be23ccb62"],["C:/Users/Admin/Downloads/blog/public/archives/2020/02/index.html","bc6d94b1c4066f81389e5881613c82a2"],["C:/Users/Admin/Downloads/blog/public/archives/2020/03/index.html","6d4bb574bcb9e606f847bde1c75d2b5d"],["C:/Users/Admin/Downloads/blog/public/archives/2020/04/index.html","b467f7c0cd78488c67376e5248d17b84"],["C:/Users/Admin/Downloads/blog/public/archives/2020/05/index.html","246e701871f76afc125683795838d8d5"],["C:/Users/Admin/Downloads/blog/public/archives/2020/06/index.html","5699d24c0bef17a525f8112843f697a2"],["C:/Users/Admin/Downloads/blog/public/archives/2020/07/index.html","409c945f7890e98572508d4f48384abc"],["C:/Users/Admin/Downloads/blog/public/archives/2020/10/index.html","4054483ac925b0e19e512b2a0464d633"],["C:/Users/Admin/Downloads/blog/public/archives/2020/11/index.html","5baacf6fb2d09a747dababf031e75ace"],["C:/Users/Admin/Downloads/blog/public/archives/2020/index.html","e2af605a1dce66d32d647fbf6c9b7bb6"],["C:/Users/Admin/Downloads/blog/public/archives/2020/page/2/index.html","fa8adde1625479a5731a9a79c514c948"],["C:/Users/Admin/Downloads/blog/public/archives/2020/page/3/index.html","5c7d9087c1f7a45280e1fd8f2ab644b5"],["C:/Users/Admin/Downloads/blog/public/archives/index.html","0c0288d654101c1bc2d2e605f65955e4"],["C:/Users/Admin/Downloads/blog/public/archives/page/2/index.html","ace475c09ec48a284f752606cc9b16dd"],["C:/Users/Admin/Downloads/blog/public/archives/page/3/index.html","3fef30a1faabcf5417547ad7fa23d96e"],["C:/Users/Admin/Downloads/blog/public/css/main.css","1b9baff658dc45b01bc4167710e9364f"],["C:/Users/Admin/Downloads/blog/public/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/Users/Admin/Downloads/blog/public/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["C:/Users/Admin/Downloads/blog/public/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["C:/Users/Admin/Downloads/blog/public/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["C:/Users/Admin/Downloads/blog/public/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["C:/Users/Admin/Downloads/blog/public/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["C:/Users/Admin/Downloads/blog/public/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["C:/Users/Admin/Downloads/blog/public/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["C:/Users/Admin/Downloads/blog/public/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["C:/Users/Admin/Downloads/blog/public/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["C:/Users/Admin/Downloads/blog/public/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["C:/Users/Admin/Downloads/blog/public/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["C:/Users/Admin/Downloads/blog/public/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["C:/Users/Admin/Downloads/blog/public/index.html","b0edafea795bd542d3a64fcdad42e3aa"],["C:/Users/Admin/Downloads/blog/public/js/algolia-search.js","4d6b3da7a337a0357b8db29647b80f5d"],["C:/Users/Admin/Downloads/blog/public/js/bookmark.js","ead7d08b9977be9c11153c7e05e8c3d1"],["C:/Users/Admin/Downloads/blog/public/js/local-search.js","a183ea627db21d9282e70ce91eb10975"],["C:/Users/Admin/Downloads/blog/public/js/motion.js","7abc3ca6d1524ff02cc435bf8ad4ea05"],["C:/Users/Admin/Downloads/blog/public/js/next-boot.js","2709d32a1d986e1833b7f25935b428e0"],["C:/Users/Admin/Downloads/blog/public/js/schemes/muse.js","69b7b722f4ac35de36001bb9692e16dc"],["C:/Users/Admin/Downloads/blog/public/js/utils.js","e652d46feedfbbcfe1599aeb2c451daa"],["C:/Users/Admin/Downloads/blog/public/lib/animate-css/animate.min.css","1b919b341fd11f43008fc773bf675e9c"],["C:/Users/Admin/Downloads/blog/public/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["C:/Users/Admin/Downloads/blog/public/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["C:/Users/Admin/Downloads/blog/public/medias/128.png","e166117aa5a07d2f2f08be93fd9b59af"],["C:/Users/Admin/Downloads/blog/public/medias/16.png","337b811908b320e7b07ce7ad000f3a1c"],["C:/Users/Admin/Downloads/blog/public/medias/256.png","68119a61248824c46d56d92a34f6eaef"],["C:/Users/Admin/Downloads/blog/public/medias/32.png","7630331d70b53be558add26cccebc5b5"],["C:/Users/Admin/Downloads/blog/public/medias/512.png","2035f444768ee4f3b72fd1d178d63ba5"],["C:/Users/Admin/Downloads/blog/public/medias/64.png","2dbb1e3fa793e1b0997a761537cdad20"],["C:/Users/Admin/Downloads/blog/public/page/2/index.html","34666b954404d67226a4375460459db3"],["C:/Users/Admin/Downloads/blog/public/page/3/index.html","fb8b1ce4530113346fa9923f0c659144"],["C:/Users/Admin/Downloads/blog/public/sw.js","abe7f5bd47b7ea415b041a673de78c92"],["C:/Users/Admin/Downloads/blog/public/tags/index.html","80a475ab76b88f3b748c1d0c1fcf51b5"],["C:/Users/Admin/Downloads/blog/public/tags/干货/index.html","1fdd5223cdc666dc57cb251035952bec"],["C:/Users/Admin/Downloads/blog/public/tags/树莓派/index.html","2a177a284af8326639f6bfedbd4a5d11"],["C:/Users/Admin/Downloads/blog/public/tags/科普/index.html","2616f17522b44405be1310fdabc34fb1"],["C:/Users/Admin/Downloads/blog/public/tags/计划表/index.html","b79d09007bde2112d638b184573b1d2b"],["C:/Users/Admin/Downloads/blog/public/tags/题解/index.html","65f67706737b251955975043a0ae678b"]];
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








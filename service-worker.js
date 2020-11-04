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

var precacheConfig = [["C:/Users/Admin/Downloads/blog/public/2020/01/02/Bisection_Subset/index.html","fc1c9cbbe552c6c3d965610a13633e07"],["C:/Users/Admin/Downloads/blog/public/2020/01/02/Euclidean_Algorithm/index.html","7f4bf1f03bd9ce81fbb92d92716d76fa"],["C:/Users/Admin/Downloads/blog/public/2020/01/02/Fast_Exponentiation/index.html","097c002e650f1bf7ebdfb87757400e31"],["C:/Users/Admin/Downloads/blog/public/2020/01/02/Hanoi/index.html","18b7654b496d03b73a49938d147d2c88"],["C:/Users/Admin/Downloads/blog/public/2020/01/02/P1001/index.html","15a31f8fe1642ddf9d9bd32e22a76ef6"],["C:/Users/Admin/Downloads/blog/public/2020/01/02/P1009/index.html","b1cfa72ff25a02c648dd48cfdd1684a4"],["C:/Users/Admin/Downloads/blog/public/2020/01/02/P1044/index.html","da4c8745beaa3cfa062305c317317be8"],["C:/Users/Admin/Downloads/blog/public/2020/01/02/beta/index.html","94da9187b49ff729cf1dd0e30befbd06"],["C:/Users/Admin/Downloads/blog/public/2020/02/19/hexo-first-deploy/index.html","8b6d8016d025a4237a3543971de7feda"],["C:/Users/Admin/Downloads/blog/public/2020/02/20/hexo_git_deploy/index.html","ea1540bdb35df45c5d25b1386f3b48d1"],["C:/Users/Admin/Downloads/blog/public/2020/02/21/net_ease_unlock/index.html","2550393a1fc1124af111f68c30c17095"],["C:/Users/Admin/Downloads/blog/public/2020/02/22/raspi_ubuntu_deploy/index.html","2b2950dff4588881a232cebea3ac631a"],["C:/Users/Admin/Downloads/blog/public/2020/02/25/raspi_smart_fan/index.html","d940dbd2b2a06a9dcde120fdb01720fd"],["C:/Users/Admin/Downloads/blog/public/2020/02/26/raspi_bt_install/index.html","9d75321f29e8bddbf863891fdac88c03"],["C:/Users/Admin/Downloads/blog/public/2020/02/29/raspi_aria2_install/index.html","6d64b822a20e9ca14a1f2ccacdec8a52"],["C:/Users/Admin/Downloads/blog/public/2020/03/12/hexo_theme_butterfly/index.html","6fc96cfe40ea27089c7669e5fb44ff08"],["C:/Users/Admin/Downloads/blog/public/2020/03/25/linux_delete_large_file/index.html","6fd1dbe4f0c2d912ad64ca09e9816397"],["C:/Users/Admin/Downloads/blog/public/2020/04/01/xenforo_deploy/index.html","472a797e7f76089dcd362cbb9edb9022"],["C:/Users/Admin/Downloads/blog/public/2020/05/10/rpi_nextcloud_deploy/index.html","cb120c9cc4163618385e8f36c105f67e"],["C:/Users/Admin/Downloads/blog/public/2020/05/26/P2390/index.html","6034f9a6e6e9e5ad526f667f8bc83321"],["C:/Users/Admin/Downloads/blog/public/2020/05/31/P1113/index.html","5435b59986819056404fa06a4ab907e7"],["C:/Users/Admin/Downloads/blog/public/2020/05/31/topological-sort/index.html","9c7877e6d3800c6359fb693bcbe27fdc"],["C:/Users/Admin/Downloads/blog/public/2020/06/03/P3916/index.html","16abd0c251ae7c070180c833ac3b9175"],["C:/Users/Admin/Downloads/blog/public/2020/06/06/P5318/index.html","ef3b42e0d4f4f7f6179489b4af74be87"],["C:/Users/Admin/Downloads/blog/public/2020/07/10/P5076/index.html","4f5a33c11fa18233121715ece8fd90fc"],["C:/Users/Admin/Downloads/blog/public/2020/07/14/mark/index.html","3786b26a7c7acdda10eff791183e3c43"],["C:/Users/Admin/Downloads/blog/public/2020/07/17/NexT_hello_world/index.html","c2b9e8055af674b8017308b1a5f55f39"],["C:/Users/Admin/Downloads/blog/public/2020/10/06/SP18666/index.html","97982e013426b251456e36b494210534"],["C:/Users/Admin/Downloads/blog/public/2020/11/03/c++_queue/1.jpg","dcd92f009ae61981999605ab200661bd"],["C:/Users/Admin/Downloads/blog/public/2020/11/03/c++_queue/index.html","90e4a3dbd243d7862efb2a17686bd043"],["C:/Users/Admin/Downloads/blog/public/about/index.html","477abb520eeba6da7eb0d02e9d1b3ae3"],["C:/Users/Admin/Downloads/blog/public/archives/2020/01/index.html","b49d079cadb02e74813fc520b86ae4d4"],["C:/Users/Admin/Downloads/blog/public/archives/2020/02/index.html","6215ed9e26a05ad043e09d944077fd4e"],["C:/Users/Admin/Downloads/blog/public/archives/2020/03/index.html","3a40a2761006f68790c46b0e36d65625"],["C:/Users/Admin/Downloads/blog/public/archives/2020/04/index.html","92efae6c4d9e017a44c2be59195ef404"],["C:/Users/Admin/Downloads/blog/public/archives/2020/05/index.html","ef86a580124357eb5c141d18d9706f7b"],["C:/Users/Admin/Downloads/blog/public/archives/2020/06/index.html","81f22be5527c512eb537001fadc60fe6"],["C:/Users/Admin/Downloads/blog/public/archives/2020/07/index.html","d4086fa84920c5f8cb6c43ee5b573ff6"],["C:/Users/Admin/Downloads/blog/public/archives/2020/10/index.html","363644c626da016088666eb6e5eee10a"],["C:/Users/Admin/Downloads/blog/public/archives/2020/11/index.html","1b75e2037abdd7741f56221289da5a1e"],["C:/Users/Admin/Downloads/blog/public/archives/2020/index.html","4294d91284f65887d5eb6d67b9aa3c7d"],["C:/Users/Admin/Downloads/blog/public/archives/2020/page/2/index.html","1d9486086556d5871d3ac8930d9d45d0"],["C:/Users/Admin/Downloads/blog/public/archives/2020/page/3/index.html","00e956a38b09d4b59503d797d218011e"],["C:/Users/Admin/Downloads/blog/public/archives/index.html","07fa85f4a5e925d938b0bc6e7082fb39"],["C:/Users/Admin/Downloads/blog/public/archives/page/2/index.html","a67831420188fb9cd2767052353f72a1"],["C:/Users/Admin/Downloads/blog/public/archives/page/3/index.html","eb231a8d3aac692a7625bf465212421f"],["C:/Users/Admin/Downloads/blog/public/css/main.css","1b9baff658dc45b01bc4167710e9364f"],["C:/Users/Admin/Downloads/blog/public/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/Users/Admin/Downloads/blog/public/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["C:/Users/Admin/Downloads/blog/public/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["C:/Users/Admin/Downloads/blog/public/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["C:/Users/Admin/Downloads/blog/public/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["C:/Users/Admin/Downloads/blog/public/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["C:/Users/Admin/Downloads/blog/public/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["C:/Users/Admin/Downloads/blog/public/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["C:/Users/Admin/Downloads/blog/public/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["C:/Users/Admin/Downloads/blog/public/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["C:/Users/Admin/Downloads/blog/public/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["C:/Users/Admin/Downloads/blog/public/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["C:/Users/Admin/Downloads/blog/public/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["C:/Users/Admin/Downloads/blog/public/index.html","a4e16bbfa82fa3a891cd5f9ccdc136a1"],["C:/Users/Admin/Downloads/blog/public/js/algolia-search.js","4d6b3da7a337a0357b8db29647b80f5d"],["C:/Users/Admin/Downloads/blog/public/js/bookmark.js","ead7d08b9977be9c11153c7e05e8c3d1"],["C:/Users/Admin/Downloads/blog/public/js/local-search.js","a183ea627db21d9282e70ce91eb10975"],["C:/Users/Admin/Downloads/blog/public/js/motion.js","7abc3ca6d1524ff02cc435bf8ad4ea05"],["C:/Users/Admin/Downloads/blog/public/js/next-boot.js","2709d32a1d986e1833b7f25935b428e0"],["C:/Users/Admin/Downloads/blog/public/js/schemes/muse.js","69b7b722f4ac35de36001bb9692e16dc"],["C:/Users/Admin/Downloads/blog/public/js/utils.js","e652d46feedfbbcfe1599aeb2c451daa"],["C:/Users/Admin/Downloads/blog/public/lib/animate-css/animate.min.css","1b919b341fd11f43008fc773bf675e9c"],["C:/Users/Admin/Downloads/blog/public/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["C:/Users/Admin/Downloads/blog/public/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["C:/Users/Admin/Downloads/blog/public/medias/128.png","e166117aa5a07d2f2f08be93fd9b59af"],["C:/Users/Admin/Downloads/blog/public/medias/16.png","337b811908b320e7b07ce7ad000f3a1c"],["C:/Users/Admin/Downloads/blog/public/medias/256.png","68119a61248824c46d56d92a34f6eaef"],["C:/Users/Admin/Downloads/blog/public/medias/32.png","7630331d70b53be558add26cccebc5b5"],["C:/Users/Admin/Downloads/blog/public/medias/512.png","2035f444768ee4f3b72fd1d178d63ba5"],["C:/Users/Admin/Downloads/blog/public/medias/64.png","2dbb1e3fa793e1b0997a761537cdad20"],["C:/Users/Admin/Downloads/blog/public/page/2/index.html","42593194bcd09fe015a0e634e721f43c"],["C:/Users/Admin/Downloads/blog/public/page/3/index.html","fa9014d7331694122b67d6a2bdfe9329"],["C:/Users/Admin/Downloads/blog/public/sw.js","abe7f5bd47b7ea415b041a673de78c92"],["C:/Users/Admin/Downloads/blog/public/tags/index.html","f4cce15951ed8ad08d9e87e9cdb05237"],["C:/Users/Admin/Downloads/blog/public/tags/干货/index.html","ca6a9e32b11fe800253695d67c7d8cd9"],["C:/Users/Admin/Downloads/blog/public/tags/树莓派/index.html","bfc72097f73a238c6a46d14fcb814e9d"],["C:/Users/Admin/Downloads/blog/public/tags/科普/index.html","c42770bc153ae2250e79dea2fa4ba1dd"],["C:/Users/Admin/Downloads/blog/public/tags/计划表/index.html","61ba151aa9786291e6f40c02f777eafc"],["C:/Users/Admin/Downloads/blog/public/tags/题解/index.html","0cb0307afba828fa50ca93cf65939cbb"]];
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








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

var precacheConfig = [["C:/Users/Admin/Downloads/blog/public/2020/01/02/Bisection_Subset/index.html","ba44fba8f47323fd45c1517de3779a8d"],["C:/Users/Admin/Downloads/blog/public/2020/01/02/Euclidean_Algorithm/index.html","f0bb25eb2dbd9f2d890f9e1f38dd9214"],["C:/Users/Admin/Downloads/blog/public/2020/01/02/Fast_Exponentiation/index.html","cac5c7a20d95c3ade057da83b1f7cbf7"],["C:/Users/Admin/Downloads/blog/public/2020/01/02/Hanoi/index.html","f8ed2b58da6540ea2c2fe4d529b0eb9e"],["C:/Users/Admin/Downloads/blog/public/2020/01/02/P1001/index.html","0532e9cca31917fa6edebd35774943d7"],["C:/Users/Admin/Downloads/blog/public/2020/01/02/P1009/index.html","7ac884f4d684158f20571e4985a7d08d"],["C:/Users/Admin/Downloads/blog/public/2020/01/02/P1044/index.html","8d55b26d2fb5080f668e3d5b3604df65"],["C:/Users/Admin/Downloads/blog/public/2020/01/02/beta/index.html","f10805daa09434ab273f7b8b888eb600"],["C:/Users/Admin/Downloads/blog/public/2020/02/19/hexo-first-deploy/index.html","60f4f4c4874eab8a6b29131f071b7626"],["C:/Users/Admin/Downloads/blog/public/2020/02/20/hexo_git_deploy/index.html","0b5a7468c91fd1a4e8cabd459b16e31f"],["C:/Users/Admin/Downloads/blog/public/2020/02/21/net_ease_unlock/index.html","053ec4bb1d9c74347c5cbd840d500101"],["C:/Users/Admin/Downloads/blog/public/2020/02/22/raspi_ubuntu_deploy/index.html","7db55f8a100f65be37adda317e509ee3"],["C:/Users/Admin/Downloads/blog/public/2020/02/25/raspi_smart_fan/index.html","0c21753a14a9bbab7a4f4a30b9f701f4"],["C:/Users/Admin/Downloads/blog/public/2020/02/26/raspi_bt_install/index.html","7caeeda4b7a2396af553b7d17957ca7e"],["C:/Users/Admin/Downloads/blog/public/2020/02/29/raspi_aria2_install/index.html","fac7b3ada938c58045619f9602e30330"],["C:/Users/Admin/Downloads/blog/public/2020/03/12/hexo_theme_butterfly/index.html","3cb6d840e268d8d390ce8d3f19d593dc"],["C:/Users/Admin/Downloads/blog/public/2020/03/25/linux_delete_large_file/index.html","0657d372d139e2caeb96bd8074d64f4b"],["C:/Users/Admin/Downloads/blog/public/2020/04/01/xenforo_deploy/index.html","48d90090d6b56668a80a72a8bbe3007a"],["C:/Users/Admin/Downloads/blog/public/2020/05/10/rpi_nextcloud_deploy/index.html","cd34825383e1848868525f53d54c26db"],["C:/Users/Admin/Downloads/blog/public/2020/05/26/P2390/index.html","fa0e7fe211b0d8cd40787b2f3c3ce163"],["C:/Users/Admin/Downloads/blog/public/2020/05/31/P1113/index.html","de9b99f97a0ba1b73eeb13eb7e4a4da7"],["C:/Users/Admin/Downloads/blog/public/2020/05/31/topological-sort/index.html","1a2201229a9840b2a85a47d4dd7ec5a5"],["C:/Users/Admin/Downloads/blog/public/2020/06/03/P3916/index.html","361f3047c4bfd72a9392c69ad1ff0dbf"],["C:/Users/Admin/Downloads/blog/public/2020/06/06/P5318/index.html","2681b26a09619e371ba1e63d3ef1b20d"],["C:/Users/Admin/Downloads/blog/public/2020/07/10/P5076/index.html","78fbdab43e3c0754b355b0bdc7dd21b0"],["C:/Users/Admin/Downloads/blog/public/2020/07/14/mark/index.html","918625ccd2dcfa4b0edb00492953335e"],["C:/Users/Admin/Downloads/blog/public/2020/07/17/NexT_hello_world/index.html","a0a8615eaafedced10bbe32a8a7a801e"],["C:/Users/Admin/Downloads/blog/public/2020/10/06/SP18666/index.html","426e1e8a5846d3b6180a82c83190f308"],["C:/Users/Admin/Downloads/blog/public/2020/11/03/c++_queue/index.html","b0bd57db89add744ceacb0cd0e10d19a"],["C:/Users/Admin/Downloads/blog/public/about/index.html","1097fbd981fb5caa8aac0881449b00b1"],["C:/Users/Admin/Downloads/blog/public/archives/2020/01/index.html","e9b05542bff920511b6588a26a7404db"],["C:/Users/Admin/Downloads/blog/public/archives/2020/02/index.html","332487026691fff8d7e6fb93f10643b8"],["C:/Users/Admin/Downloads/blog/public/archives/2020/03/index.html","ae8720e89478974fd0ec24451eae2371"],["C:/Users/Admin/Downloads/blog/public/archives/2020/04/index.html","3ce8c24b48ea2ba1e91b270a26bac59e"],["C:/Users/Admin/Downloads/blog/public/archives/2020/05/index.html","5db96df152b6a2027a5c5c8a09a5d644"],["C:/Users/Admin/Downloads/blog/public/archives/2020/06/index.html","8bd8954767f23cc2c3d09cf88c908d1a"],["C:/Users/Admin/Downloads/blog/public/archives/2020/07/index.html","40670b41d604c9f50dbdbd08653dc01e"],["C:/Users/Admin/Downloads/blog/public/archives/2020/10/index.html","03f50459832d408c642cabe13e5989f8"],["C:/Users/Admin/Downloads/blog/public/archives/2020/11/index.html","3ae88a68fdfa79a4b778f36f7b5a5074"],["C:/Users/Admin/Downloads/blog/public/archives/2020/index.html","0ee549c7c74e452eee82cc011b038fbe"],["C:/Users/Admin/Downloads/blog/public/archives/2020/page/2/index.html","01d43787b8aa6ab8a8040e2d0f308315"],["C:/Users/Admin/Downloads/blog/public/archives/2020/page/3/index.html","9c6f3bdd4d1181973df4c01f7bd786e2"],["C:/Users/Admin/Downloads/blog/public/archives/index.html","09a5866ac938ddf4c4ae6b289ba2474b"],["C:/Users/Admin/Downloads/blog/public/archives/page/2/index.html","fb4af24cd78d415ae85aaaf536bbe471"],["C:/Users/Admin/Downloads/blog/public/archives/page/3/index.html","add5dd2b3de99c0a1842659cb1f78618"],["C:/Users/Admin/Downloads/blog/public/css/main.css","1b9baff658dc45b01bc4167710e9364f"],["C:/Users/Admin/Downloads/blog/public/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/Users/Admin/Downloads/blog/public/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["C:/Users/Admin/Downloads/blog/public/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["C:/Users/Admin/Downloads/blog/public/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["C:/Users/Admin/Downloads/blog/public/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["C:/Users/Admin/Downloads/blog/public/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["C:/Users/Admin/Downloads/blog/public/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["C:/Users/Admin/Downloads/blog/public/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["C:/Users/Admin/Downloads/blog/public/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["C:/Users/Admin/Downloads/blog/public/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["C:/Users/Admin/Downloads/blog/public/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["C:/Users/Admin/Downloads/blog/public/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["C:/Users/Admin/Downloads/blog/public/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["C:/Users/Admin/Downloads/blog/public/index.html","6ca1d4f656635646129178eec87c28df"],["C:/Users/Admin/Downloads/blog/public/js/algolia-search.js","4d6b3da7a337a0357b8db29647b80f5d"],["C:/Users/Admin/Downloads/blog/public/js/bookmark.js","ead7d08b9977be9c11153c7e05e8c3d1"],["C:/Users/Admin/Downloads/blog/public/js/local-search.js","a183ea627db21d9282e70ce91eb10975"],["C:/Users/Admin/Downloads/blog/public/js/motion.js","7abc3ca6d1524ff02cc435bf8ad4ea05"],["C:/Users/Admin/Downloads/blog/public/js/next-boot.js","2709d32a1d986e1833b7f25935b428e0"],["C:/Users/Admin/Downloads/blog/public/js/schemes/muse.js","69b7b722f4ac35de36001bb9692e16dc"],["C:/Users/Admin/Downloads/blog/public/js/utils.js","e652d46feedfbbcfe1599aeb2c451daa"],["C:/Users/Admin/Downloads/blog/public/lib/animate-css/animate.min.css","1b919b341fd11f43008fc773bf675e9c"],["C:/Users/Admin/Downloads/blog/public/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["C:/Users/Admin/Downloads/blog/public/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["C:/Users/Admin/Downloads/blog/public/medias/128.png","e166117aa5a07d2f2f08be93fd9b59af"],["C:/Users/Admin/Downloads/blog/public/medias/16.png","337b811908b320e7b07ce7ad000f3a1c"],["C:/Users/Admin/Downloads/blog/public/medias/256.png","68119a61248824c46d56d92a34f6eaef"],["C:/Users/Admin/Downloads/blog/public/medias/32.png","7630331d70b53be558add26cccebc5b5"],["C:/Users/Admin/Downloads/blog/public/medias/512.png","2035f444768ee4f3b72fd1d178d63ba5"],["C:/Users/Admin/Downloads/blog/public/medias/64.png","2dbb1e3fa793e1b0997a761537cdad20"],["C:/Users/Admin/Downloads/blog/public/page/2/index.html","2c175fa4a877b44ad6d9e84ec7effeec"],["C:/Users/Admin/Downloads/blog/public/page/3/index.html","157d9769c1d2c254dd62cf29b6a7276f"],["C:/Users/Admin/Downloads/blog/public/sw.js","abe7f5bd47b7ea415b041a673de78c92"],["C:/Users/Admin/Downloads/blog/public/tags/index.html","360bf6b0e49c448653dbc26d88e1f814"],["C:/Users/Admin/Downloads/blog/public/tags/干货/index.html","1b7dd0986ac7eb92f9f54d93364c7b93"],["C:/Users/Admin/Downloads/blog/public/tags/树莓派/index.html","34d734afc8c35b3956ace89936be94ff"],["C:/Users/Admin/Downloads/blog/public/tags/科普/index.html","6f879954dc88ac7b8177f9276c65fdc3"],["C:/Users/Admin/Downloads/blog/public/tags/计划表/index.html","f2d97e3c0b5af2ee6d6656093fd9fba1"],["C:/Users/Admin/Downloads/blog/public/tags/题解/index.html","80343fe913227e5e52a84b04b2e71d37"]];
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








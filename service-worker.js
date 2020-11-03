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

var precacheConfig = [["C:/Users/Admin/Downloads/blog/public/2020/01/02/Bisection_Subset/index.html","d1b05f8e17eedca423889bf89e238251"],["C:/Users/Admin/Downloads/blog/public/2020/01/02/Euclidean_Algorithm/index.html","c87278211f30f888d1203b90ca417d5e"],["C:/Users/Admin/Downloads/blog/public/2020/01/02/Fast_Exponentiation/index.html","8eaef2ef5afd19c36606cb782e64abd6"],["C:/Users/Admin/Downloads/blog/public/2020/01/02/Hanoi/index.html","caf36ee79b6d9cb357305dc38dea5195"],["C:/Users/Admin/Downloads/blog/public/2020/01/02/P1001/index.html","7f82cfc07e11ab5b06b725f0ec3fe041"],["C:/Users/Admin/Downloads/blog/public/2020/01/02/P1009/index.html","39a16d1bbd5b3e166a0a477228c0ec69"],["C:/Users/Admin/Downloads/blog/public/2020/01/02/P1044/index.html","5bf23f46df1307f2c83f0524eacf35ff"],["C:/Users/Admin/Downloads/blog/public/2020/01/02/beta/index.html","746ae08c74748b5f42ae1baf4fe05ef9"],["C:/Users/Admin/Downloads/blog/public/2020/02/19/hexo-first-deploy/index.html","ee64daf5ef32eb4b7928e253cc3a7a76"],["C:/Users/Admin/Downloads/blog/public/2020/02/20/hexo_git_deploy/index.html","2ac40e6a8f71fc321ce4ec609bae9154"],["C:/Users/Admin/Downloads/blog/public/2020/02/21/net_ease_unlock/index.html","0406564e8b3d27158588aa52e9899857"],["C:/Users/Admin/Downloads/blog/public/2020/02/22/raspi_ubuntu_deploy/index.html","90fa6e6ccd5d86c738fb929d96092522"],["C:/Users/Admin/Downloads/blog/public/2020/02/25/raspi_smart_fan/index.html","4c30daf172d24306e32622f26ac39363"],["C:/Users/Admin/Downloads/blog/public/2020/02/26/raspi_bt_install/index.html","13e19769417eeea5f4596790bd78aeca"],["C:/Users/Admin/Downloads/blog/public/2020/02/29/raspi_aria2_install/index.html","7b8a3ca951b080950c81169cee50c672"],["C:/Users/Admin/Downloads/blog/public/2020/03/12/hexo_theme_butterfly/index.html","daf2130063679b02c7553310400da219"],["C:/Users/Admin/Downloads/blog/public/2020/03/25/linux_delete_large_file/index.html","72ddb6d7cafec703457533e04ba17f5b"],["C:/Users/Admin/Downloads/blog/public/2020/04/01/xenforo_deploy/index.html","58158aefd32b9eb974995e053ab5cfac"],["C:/Users/Admin/Downloads/blog/public/2020/05/10/rpi_nextcloud_deploy/index.html","0be3304c5771d1a7d65f0a4a8ee1a4d8"],["C:/Users/Admin/Downloads/blog/public/2020/05/26/P2390/index.html","3934844bf002528e27b5517c00fd8992"],["C:/Users/Admin/Downloads/blog/public/2020/05/31/P1113/index.html","aa89cd202c85cec5972ba27a0a1481bb"],["C:/Users/Admin/Downloads/blog/public/2020/05/31/topological-sort/index.html","1a348b85331bc8255ccc3a5be83b7bd4"],["C:/Users/Admin/Downloads/blog/public/2020/06/03/P3916/index.html","d3c773f997f31c4ab4bfce0df38222e0"],["C:/Users/Admin/Downloads/blog/public/2020/06/06/P5318/index.html","1b90f2216c60ee9a12e05ecc1028a824"],["C:/Users/Admin/Downloads/blog/public/2020/07/10/P5076/index.html","0f8ec6d55cb01e4c4e401736d2854afd"],["C:/Users/Admin/Downloads/blog/public/2020/07/14/mark/index.html","51338135693ce5bab0439bbba8f96aeb"],["C:/Users/Admin/Downloads/blog/public/2020/07/17/NexT_hello_world/index.html","21bd7bdf447d01781816ecdb552f3dae"],["C:/Users/Admin/Downloads/blog/public/2020/10/06/SP18666/index.html","2498dc59adcfb34137f3a3814d77e86c"],["C:/Users/Admin/Downloads/blog/public/2020/11/03/c++_queue/index.html","28c709716066b4ed9771b36dda87acca"],["C:/Users/Admin/Downloads/blog/public/about/index.html","b8a443d23e4c381f09003d465f3ad93d"],["C:/Users/Admin/Downloads/blog/public/archives/2020/01/index.html","d36a3a48768e71ff67448703f6b43891"],["C:/Users/Admin/Downloads/blog/public/archives/2020/02/index.html","4d7bfabfa43a68f7c086a133502f028e"],["C:/Users/Admin/Downloads/blog/public/archives/2020/03/index.html","e1104f0bdc707315f519dde46385b76c"],["C:/Users/Admin/Downloads/blog/public/archives/2020/04/index.html","feaccf205b05e7731f0a9ca8fce078d4"],["C:/Users/Admin/Downloads/blog/public/archives/2020/05/index.html","1dc5db0983114232e773b1f9a40b26af"],["C:/Users/Admin/Downloads/blog/public/archives/2020/06/index.html","04707e2bedd43ed3e3923b214b93dd9d"],["C:/Users/Admin/Downloads/blog/public/archives/2020/07/index.html","26cb92cd5bd4cfee0e7ccea5462c5ab2"],["C:/Users/Admin/Downloads/blog/public/archives/2020/10/index.html","0a38c0a9d7c65749697026b0035e56e1"],["C:/Users/Admin/Downloads/blog/public/archives/2020/11/index.html","717cc820a34f5273fb2d7afac3a2ad31"],["C:/Users/Admin/Downloads/blog/public/archives/2020/index.html","64ad626e489132636b41dbcb18ef50c3"],["C:/Users/Admin/Downloads/blog/public/archives/2020/page/2/index.html","5593720fa44b4511365b81a14d02f2b7"],["C:/Users/Admin/Downloads/blog/public/archives/2020/page/3/index.html","8039b1db201100226d59d81b3a62890a"],["C:/Users/Admin/Downloads/blog/public/archives/index.html","fd3c03e06e603195c437c1ea2d1f75da"],["C:/Users/Admin/Downloads/blog/public/archives/page/2/index.html","c1e1e5fc674a9cccec0ffb2e17bfeafc"],["C:/Users/Admin/Downloads/blog/public/archives/page/3/index.html","17d0f331f2f53e6b8b02e074f8bcbdf1"],["C:/Users/Admin/Downloads/blog/public/css/main.css","1b9baff658dc45b01bc4167710e9364f"],["C:/Users/Admin/Downloads/blog/public/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/Users/Admin/Downloads/blog/public/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["C:/Users/Admin/Downloads/blog/public/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["C:/Users/Admin/Downloads/blog/public/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["C:/Users/Admin/Downloads/blog/public/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["C:/Users/Admin/Downloads/blog/public/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["C:/Users/Admin/Downloads/blog/public/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["C:/Users/Admin/Downloads/blog/public/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["C:/Users/Admin/Downloads/blog/public/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["C:/Users/Admin/Downloads/blog/public/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["C:/Users/Admin/Downloads/blog/public/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["C:/Users/Admin/Downloads/blog/public/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["C:/Users/Admin/Downloads/blog/public/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["C:/Users/Admin/Downloads/blog/public/index.html","7a9f38d363b6ab518c91481cc624f22e"],["C:/Users/Admin/Downloads/blog/public/js/algolia-search.js","4d6b3da7a337a0357b8db29647b80f5d"],["C:/Users/Admin/Downloads/blog/public/js/bookmark.js","ead7d08b9977be9c11153c7e05e8c3d1"],["C:/Users/Admin/Downloads/blog/public/js/local-search.js","a183ea627db21d9282e70ce91eb10975"],["C:/Users/Admin/Downloads/blog/public/js/motion.js","7abc3ca6d1524ff02cc435bf8ad4ea05"],["C:/Users/Admin/Downloads/blog/public/js/next-boot.js","2709d32a1d986e1833b7f25935b428e0"],["C:/Users/Admin/Downloads/blog/public/js/schemes/muse.js","69b7b722f4ac35de36001bb9692e16dc"],["C:/Users/Admin/Downloads/blog/public/js/utils.js","e652d46feedfbbcfe1599aeb2c451daa"],["C:/Users/Admin/Downloads/blog/public/lib/animate-css/animate.min.css","1b919b341fd11f43008fc773bf675e9c"],["C:/Users/Admin/Downloads/blog/public/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["C:/Users/Admin/Downloads/blog/public/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["C:/Users/Admin/Downloads/blog/public/medias/128.png","e166117aa5a07d2f2f08be93fd9b59af"],["C:/Users/Admin/Downloads/blog/public/medias/16.png","337b811908b320e7b07ce7ad000f3a1c"],["C:/Users/Admin/Downloads/blog/public/medias/256.png","68119a61248824c46d56d92a34f6eaef"],["C:/Users/Admin/Downloads/blog/public/medias/32.png","7630331d70b53be558add26cccebc5b5"],["C:/Users/Admin/Downloads/blog/public/medias/512.png","2035f444768ee4f3b72fd1d178d63ba5"],["C:/Users/Admin/Downloads/blog/public/medias/64.png","2dbb1e3fa793e1b0997a761537cdad20"],["C:/Users/Admin/Downloads/blog/public/page/2/index.html","da8ab42111dfb2321653dc34ff7db271"],["C:/Users/Admin/Downloads/blog/public/page/3/index.html","f6bbb428bb3816e0bc24fc736b00c0e0"],["C:/Users/Admin/Downloads/blog/public/sw.js","abe7f5bd47b7ea415b041a673de78c92"],["C:/Users/Admin/Downloads/blog/public/tags/index.html","2cc37950a277f20791a076dbc92f9f13"],["C:/Users/Admin/Downloads/blog/public/tags/干货/index.html","e32bd9c888d2a1d9583d5d4e2fe92667"],["C:/Users/Admin/Downloads/blog/public/tags/树莓派/index.html","ae5b4a6b1532e3502da85a69c736b993"],["C:/Users/Admin/Downloads/blog/public/tags/科普/index.html","827d902f319413bcec5143dc0037d6bf"],["C:/Users/Admin/Downloads/blog/public/tags/计划表/index.html","4c350a41bb5bd7f36ebf97896e7319c5"],["C:/Users/Admin/Downloads/blog/public/tags/题解/index.html","771ab7129a8295de8c3c0f519d96daca"]];
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








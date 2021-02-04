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

var precacheConfig = [["C:/Users/Zhehao Yu/Downloads/blog/public/2020/01/02/Bisection_Subset/index.html","7665c8cdae140d7cc5f0ba113c00eb0e"],["C:/Users/Zhehao Yu/Downloads/blog/public/2020/01/02/Euclidean_Algorithm/index.html","349734ffb2ebb5c35c48e00c6437fd4b"],["C:/Users/Zhehao Yu/Downloads/blog/public/2020/01/02/Fast_Exponentiation/index.html","7b47af2a6bf6f27f11fc632d12bc20e6"],["C:/Users/Zhehao Yu/Downloads/blog/public/2020/01/02/Hanoi/index.html","6fa908fac1eb17d7f7270e8e69d2f973"],["C:/Users/Zhehao Yu/Downloads/blog/public/2020/01/02/P1001/index.html","8395f035992b6f642d750c5089adb45b"],["C:/Users/Zhehao Yu/Downloads/blog/public/2020/01/02/P1009/index.html","ecb0e0daee76e7dc4c5f98ad207b5e26"],["C:/Users/Zhehao Yu/Downloads/blog/public/2020/01/02/P1044/index.html","8de994e417c90c33b8c66770480337fc"],["C:/Users/Zhehao Yu/Downloads/blog/public/2020/01/02/beta/index.html","f580166d122c7bef05e060dcbcc4940e"],["C:/Users/Zhehao Yu/Downloads/blog/public/2020/02/19/hexo-first-deploy/index.html","d57016128135f54019b857849eb87c7f"],["C:/Users/Zhehao Yu/Downloads/blog/public/2020/02/20/hexo_git_deploy/index.html","680fd9315cc02bf005445f3c4912b166"],["C:/Users/Zhehao Yu/Downloads/blog/public/2020/02/21/net_ease_unlock/index.html","1676a5b8f2889599a4df2f2bb29e14e1"],["C:/Users/Zhehao Yu/Downloads/blog/public/2020/02/22/raspi_ubuntu_deploy/index.html","54acd40ced022ae61e27f24bcdb7a840"],["C:/Users/Zhehao Yu/Downloads/blog/public/2020/02/25/raspi_smart_fan/index.html","76f2040343ecfe9b5003804542f746d0"],["C:/Users/Zhehao Yu/Downloads/blog/public/2020/02/26/raspi_bt_install/index.html","84a03cecd7b86c168f02977db8a1118c"],["C:/Users/Zhehao Yu/Downloads/blog/public/2020/02/29/raspi_aria2_install/index.html","1a31149c9c0ca5db370f4c4f3d6c894c"],["C:/Users/Zhehao Yu/Downloads/blog/public/2020/03/12/hexo_theme_butterfly/index.html","c8ea0e4a30b8fb2667b3b2286257cdb0"],["C:/Users/Zhehao Yu/Downloads/blog/public/2020/03/25/linux_delete_large_file/index.html","5265e6afbdf52b5838299d18e79811ed"],["C:/Users/Zhehao Yu/Downloads/blog/public/2020/04/01/xenforo_deploy/index.html","b538a2d0088a3d9d3882da821fcbf186"],["C:/Users/Zhehao Yu/Downloads/blog/public/2020/05/10/rpi_nextcloud_deploy/index.html","b05b849d74a7658a3b6e68c9dc587d65"],["C:/Users/Zhehao Yu/Downloads/blog/public/2020/05/26/P2390/index.html","0be98bf4f38b89d1722d7dff0bce22a0"],["C:/Users/Zhehao Yu/Downloads/blog/public/2020/05/31/P1113/index.html","8b22602af7c06d3bfe57716200a2705e"],["C:/Users/Zhehao Yu/Downloads/blog/public/2020/05/31/topological-sort/index.html","90bb1be9bd4b29d937d0cd7b269c4e26"],["C:/Users/Zhehao Yu/Downloads/blog/public/2020/06/03/P3916/index.html","6bbdd6b588aa7d6c39fdaa33d7b36a1f"],["C:/Users/Zhehao Yu/Downloads/blog/public/2020/06/06/P5318/index.html","b52e78bde7172192d99e93d973df39e0"],["C:/Users/Zhehao Yu/Downloads/blog/public/2020/07/10/P5076/index.html","5b6e8a4008cce952f31d24e992a96210"],["C:/Users/Zhehao Yu/Downloads/blog/public/2020/07/14/mark/index.html","61802ed0e37d0a5087a048047f346b1c"],["C:/Users/Zhehao Yu/Downloads/blog/public/2020/07/17/NexT_hello_world/index.html","bc7d06ca3beda840da17700eab0aafa8"],["C:/Users/Zhehao Yu/Downloads/blog/public/2020/10/06/SP18666/index.html","f58d1fccd83710a7495ce28456b36fb8"],["C:/Users/Zhehao Yu/Downloads/blog/public/2020/11/03/c++_queue/1.jpg","dcd92f009ae61981999605ab200661bd"],["C:/Users/Zhehao Yu/Downloads/blog/public/2020/11/03/c++_queue/index.html","8a315499846e3668f4f34d53044762a0"],["C:/Users/Zhehao Yu/Downloads/blog/public/about/index.html","6cb430f372d298935a1bc9e23b44fb24"],["C:/Users/Zhehao Yu/Downloads/blog/public/archives/2020/01/index.html","e59ea3fd9cefb206aef18f0c17453051"],["C:/Users/Zhehao Yu/Downloads/blog/public/archives/2020/02/index.html","b88e379b46b4189f73cb21a15edca076"],["C:/Users/Zhehao Yu/Downloads/blog/public/archives/2020/03/index.html","f29c6636b30478a12e679cf32d0bce06"],["C:/Users/Zhehao Yu/Downloads/blog/public/archives/2020/04/index.html","a8b4b13506c28ff8d787074c6660037b"],["C:/Users/Zhehao Yu/Downloads/blog/public/archives/2020/05/index.html","4c7940452e8ec9ba650ac3e73fb09c32"],["C:/Users/Zhehao Yu/Downloads/blog/public/archives/2020/06/index.html","09f4855ff6494516e58334fc3ab2d665"],["C:/Users/Zhehao Yu/Downloads/blog/public/archives/2020/07/index.html","f8370710e41bbbdc1422ca6136d99828"],["C:/Users/Zhehao Yu/Downloads/blog/public/archives/2020/10/index.html","a0ac6b624dbc44f73dd01cef9cfb97c2"],["C:/Users/Zhehao Yu/Downloads/blog/public/archives/2020/11/index.html","7fdedcd914907ec127f90bbf891e9d58"],["C:/Users/Zhehao Yu/Downloads/blog/public/archives/2020/index.html","b88cf5e2318213a00efebb310fae3e75"],["C:/Users/Zhehao Yu/Downloads/blog/public/archives/2020/page/2/index.html","ccef0cc8b4a086537f4360e0fdee3a38"],["C:/Users/Zhehao Yu/Downloads/blog/public/archives/2020/page/3/index.html","f5448a08f8c46beb08af2c74e6e28aee"],["C:/Users/Zhehao Yu/Downloads/blog/public/archives/index.html","f24c1502b711fbc8d21b1b1473ffb64d"],["C:/Users/Zhehao Yu/Downloads/blog/public/archives/page/2/index.html","f59e4f02a96c44c4a40232716f35bf40"],["C:/Users/Zhehao Yu/Downloads/blog/public/archives/page/3/index.html","a1d1a6146b1a042326152d24307cca58"],["C:/Users/Zhehao Yu/Downloads/blog/public/css/main.css","71fd0f998791d9f270d73eba8bf15bb1"],["C:/Users/Zhehao Yu/Downloads/blog/public/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/Users/Zhehao Yu/Downloads/blog/public/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["C:/Users/Zhehao Yu/Downloads/blog/public/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["C:/Users/Zhehao Yu/Downloads/blog/public/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["C:/Users/Zhehao Yu/Downloads/blog/public/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["C:/Users/Zhehao Yu/Downloads/blog/public/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["C:/Users/Zhehao Yu/Downloads/blog/public/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["C:/Users/Zhehao Yu/Downloads/blog/public/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["C:/Users/Zhehao Yu/Downloads/blog/public/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["C:/Users/Zhehao Yu/Downloads/blog/public/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["C:/Users/Zhehao Yu/Downloads/blog/public/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["C:/Users/Zhehao Yu/Downloads/blog/public/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["C:/Users/Zhehao Yu/Downloads/blog/public/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["C:/Users/Zhehao Yu/Downloads/blog/public/index.html","e7b7cef93d9d9bef7953db73aa5d91dd"],["C:/Users/Zhehao Yu/Downloads/blog/public/js/algolia-search.js","4d6b3da7a337a0357b8db29647b80f5d"],["C:/Users/Zhehao Yu/Downloads/blog/public/js/bookmark.js","ead7d08b9977be9c11153c7e05e8c3d1"],["C:/Users/Zhehao Yu/Downloads/blog/public/js/local-search.js","a183ea627db21d9282e70ce91eb10975"],["C:/Users/Zhehao Yu/Downloads/blog/public/js/motion.js","7abc3ca6d1524ff02cc435bf8ad4ea05"],["C:/Users/Zhehao Yu/Downloads/blog/public/js/next-boot.js","2709d32a1d986e1833b7f25935b428e0"],["C:/Users/Zhehao Yu/Downloads/blog/public/js/schemes/muse.js","69b7b722f4ac35de36001bb9692e16dc"],["C:/Users/Zhehao Yu/Downloads/blog/public/js/utils.js","e652d46feedfbbcfe1599aeb2c451daa"],["C:/Users/Zhehao Yu/Downloads/blog/public/lib/animate-css/animate.min.css","1b919b341fd11f43008fc773bf675e9c"],["C:/Users/Zhehao Yu/Downloads/blog/public/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["C:/Users/Zhehao Yu/Downloads/blog/public/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["C:/Users/Zhehao Yu/Downloads/blog/public/medias/128.png","e166117aa5a07d2f2f08be93fd9b59af"],["C:/Users/Zhehao Yu/Downloads/blog/public/medias/16.png","337b811908b320e7b07ce7ad000f3a1c"],["C:/Users/Zhehao Yu/Downloads/blog/public/medias/256.png","68119a61248824c46d56d92a34f6eaef"],["C:/Users/Zhehao Yu/Downloads/blog/public/medias/32.png","7630331d70b53be558add26cccebc5b5"],["C:/Users/Zhehao Yu/Downloads/blog/public/medias/512.png","2035f444768ee4f3b72fd1d178d63ba5"],["C:/Users/Zhehao Yu/Downloads/blog/public/medias/64.png","2dbb1e3fa793e1b0997a761537cdad20"],["C:/Users/Zhehao Yu/Downloads/blog/public/page/2/index.html","77f0af6c046449aa984038dabde43567"],["C:/Users/Zhehao Yu/Downloads/blog/public/page/3/index.html","65d7cc4b6bade71f1021d25e48e97c07"],["C:/Users/Zhehao Yu/Downloads/blog/public/tags/index.html","6f84b7476e784d9c2d7ddf493c251f3f"],["C:/Users/Zhehao Yu/Downloads/blog/public/tags/干货/index.html","b6c2817ee32e75bdcccdcc6c8173cdeb"],["C:/Users/Zhehao Yu/Downloads/blog/public/tags/树莓派/index.html","32ff7b7798f018a3e18122bc2bdf29ba"],["C:/Users/Zhehao Yu/Downloads/blog/public/tags/科普/index.html","7eeff1df2b69549a1d64404380a3d6ae"],["C:/Users/Zhehao Yu/Downloads/blog/public/tags/计划表/index.html","3aa48f72b8da7944612a97d327a255fe"],["C:/Users/Zhehao Yu/Downloads/blog/public/tags/题解/index.html","d8e798d03cf8ffc87387858f2495334d"]];
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








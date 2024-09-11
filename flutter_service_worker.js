'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "b486f4f05127f47d06e67d715329db7a",
"version.json": "72b003cb772cb3b7794d11374a81ab7f",
"index.html": "927956bfcc1d2d94522cfe8d44c45a64",
"/": "927956bfcc1d2d94522cfe8d44c45a64",
"main.dart.js": "f77fb68fac51148b0f083afbc029e0a4",
"flutter.js": "f31737fb005cd3a3c6bd9355efd33061",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "891db22491682c998f2af368d0f708d9",
"assets/AssetManifest.json": "ac7937d3820eedb88670fb0e47369e9d",
"assets/NOTICES": "c76ad4efa8f1b9bd73d43587bb1d66c2",
"assets/FontManifest.json": "9f3f0784716f9e73ba4c0edd1b7792e5",
"assets/AssetManifest.bin.json": "d5a90760789ef005539ede1fe86fdbc0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/flutter_sound_web/howler/howler.js": "3030c6101d2f8078546711db0d1a24e9",
"assets/packages/flutter_sound_web/src/flutter_sound_recorder.js": "97dccef2b593e7f831a864bd2bf7366d",
"assets/packages/flutter_sound_web/src/flutter_sound_player.js": "b0814ce34c90a4f307ceb8c91e04972d",
"assets/packages/flutter_sound_web/src/flutter_sound.js": "8ce5e91578382c8c00ade78250ed214a",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/record_web/assets/js/record.fixwebmduration.js": "1f0108ea80c8951ba702ced40cf8cdce",
"assets/packages/record_web/assets/js/record.worklet.js": "356bcfeddb8a625e3e2ba43ddf1cc13e",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "ad9e7c25d91a19a4f40634ae6ce7f078",
"assets/fonts/MaterialIcons-Regular.otf": "231faa83fa5d05bd6e3e7e41319d3898",
"assets/assets/svg/Search.svg": "f0162f03e2c83474b073c31bef687385",
"assets/assets/svg/galary.svg": "a76542db44927ce0b4a32780035831cf",
"assets/assets/svg/india-flag-icon%2520(1).svg": "0fc433bfe24a5fac6a6661624094131c",
"assets/assets/svg/Calender.svg": "cde0fa642885fb2673f2459a04fa90bd",
"assets/assets/svg/india-flag-icon.svg": "0bc20375461c80c490ddb9e3d5a27421",
"assets/assets/svg/Start_developing_app_with_trend_wisper__Make_a_.jpg": "6064733ca3512eefe06624779c71483b",
"assets/assets/svg/OSCE.%2520Ai%2520(Copy).zip": "1665a70ba62086bd1e356f7ed0aef875",
"assets/assets/svg/logo_latest_bg_removed.svg": "036e8027c0436aab65a385d4509091ea",
"assets/assets/svg/Home,%2520Outline.svg": "168c97abb462ee22e0c0c25cf7083f35",
"assets/assets/svg/card%2520icon.svg": "0a9350def0d04514e580803fb3e8c727",
"assets/assets/svg/Home_Outline.svg": "447a134bfdf78d6eb900fe5b4ad16a4a",
"assets/assets/svg/icons8-india-flag-48.png": "1ee6390e2f1ab83157a7d326006c97cb",
"assets/assets/svg/O-BG-Removed.svg": "7b16619958f53df8d6c0fe5bececacad",
"assets/assets/images/flutter_logo.png": "fad600ec10e1bddea20d72eadbe283fd",
"assets/assets/images/applogo_full.png": "47ffe0642cc1d724ff713be2491e0230",
"assets/assets/images/o%2520BG-Removed.png": "5dff37530d4bc730228aa05f3c3633a2",
"assets/assets/images/person_avathar.png": "8318c795e0700eaf5bcf2729c4264a48",
"assets/assets/images/myimage.png": "a757ddc2442cbab9eb2489e5fb584a8f",
"assets/assets/images/logInProfile.png": "d54d163f0d758290a2f1c12353012d79",
"assets/assets/images/ic_launcher.png": "379eaa6f76214ad69c14c29de59accbc",
"assets/assets/images/doctor_avathar.png": "19a2e789e6ff75e6d19983c07589ac92",
"assets/assets/images/app_logo_abstract.png": "e338c83b982ef7d1cbe71ccbece83e37",
"assets/assets/images/error_avathar_person.png": "50189c0857539d5d46abfae26355a51f",
"assets/assets/images/test_image1.png": "1a654cf7f7a2fb102ccd2bef86906b55",
"assets/assets/images/Login_dr_image.jpeg": "cdd8cc5d66aa262a310d537145e41688",
"assets/assets/mp3/enter_the_room.mp3": "e0245347318525d198ea815e94dca1ca",
"assets/assets/mp3/sample-3s.mp3": "4f774d08f0c3e66594704d6be4a2d052",
"assets/assets/lotiee/success-2.json": "e954a68f47a5638219f3458bda7aae23",
"assets/assets/lotiee/success.json": "9ac117ba11bb88d87c6713788b7bc71b",
"assets/assets/lotiee/Loading%2520AI.json": "01d4e142e0ae3f8e875c2ef11039b79d",
"assets/assets/lotiee/Loading%2520AI.gif": "da1e15b3aac1b90e68a1a17c67ad361b",
"assets/assets/fonts/Inter/Inter-Regular.ttf": "ea5879884a95551632e9eb1bba5b2128",
"canvaskit/skwasm.js": "9fa2ffe90a40d062dd2343c7b84caf01",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "87325e67bf77a9b483250e1fb1b54677",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "5fda3f1af7d6433d53b24083e2219fa0",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

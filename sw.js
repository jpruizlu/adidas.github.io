importScripts('/_nuxt/workbox.4c4f5ca6.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/app.167ff8e7d379bbf8887cf0190deb1756.css",
    "revision": "566271f5b46d46bf63c236d375d35cbd"
  },
  {
    "url": "/_nuxt/app.b0b232ce79595ac67f3f.js",
    "revision": "e8ce3c6ed6d3679d9c562b7fc8101f3b"
  },
  {
    "url": "/_nuxt/lang-en.e0e9500f2dcd10d6ba13.js",
    "revision": "7e4cdd41ac5b50334495787ef2b3995c"
  },
  {
    "url": "/_nuxt/layouts/content.7f67cb0da41cbb0719ce.js",
    "revision": "9a201057dbf94bde43bf006e743a832e"
  },
  {
    "url": "/_nuxt/layouts/default.069a0f9a75ca12a17f79.js",
    "revision": "ed03fe902e8793ed6e6e22c0abec8f41"
  },
  {
    "url": "/_nuxt/layouts/sidebar.87f6a1582cd79d5d4422.js",
    "revision": "51262eae0476902034d0f35f203ec755"
  },
  {
    "url": "/_nuxt/manifest.0689a021069fd8a98268.js",
    "revision": "952aacb0994cdbdac77a61840206282c"
  },
  {
    "url": "/_nuxt/pages/contributing/_document.b57f597ecf36b31845ff.js",
    "revision": "08c40e28335cbd6f782cc72d2bf4d4c9"
  },
  {
    "url": "/_nuxt/pages/contributing/index.195ef68f40e58bd6fed9.js",
    "revision": "3ee71600d52689d80618819e8c859bc1"
  },
  {
    "url": "/_nuxt/pages/index.8c949c5faf6a886203d1.js",
    "revision": "c28c3905a22e7699dbc6754fd249e2b3"
  },
  {
    "url": "/_nuxt/pages/legal-notice.ab727ba839cc3f618ffb.js",
    "revision": "92e4bb0db713dad8e0e24a310eae9611"
  },
  {
    "url": "/_nuxt/pages/privacy-notice.59e75b42ba205eaafb1f.js",
    "revision": "099218525161daac847d36a3e060706e"
  },
  {
    "url": "/_nuxt/vendor.a94ebc77396c0218ae43.js",
    "revision": "4ab3e54d0f368e9e1976b179c6554477"
  }
], {
  "cacheId": "adidas-github-io",
  "directoryIndex": "/",
  "cleanUrls": false
})



workbox.clientsClaim()
workbox.skipWaiting()


workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')






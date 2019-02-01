importScripts('/_nuxt/workbox.dev.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/1f931aa8dac88d29dd7b.js",
    "revision": "e241e172c9a6cf2311ba1a0fc59fdb28"
  },
  {
    "url": "/_nuxt/c51d05fc51931fe0fe31.js",
    "revision": "6b44db7421df7496c3e7b2f47cc69a38"
  },
  {
    "url": "/_nuxt/ed35065752317ecbfe18.js",
    "revision": "774a6995b8ffd8e96c83ad2b86c03d90"
  },
  {
    "url": "/_nuxt/f660b5ba73c5571000c0.js",
    "revision": "0e5ade7bc439168298e0f549b9f08311"
  }
], {
  "cacheId": "pwatest",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')

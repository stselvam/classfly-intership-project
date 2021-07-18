var staticCacheName = "stselvam_pwa";
self.addEventListener("install", function (e) {
    e.waitUntil(
        caches.open(staticCacheName).then(function (cache) {
            return cache.addAll([
                "/static/css/main.0389ebd1.chunk.css",
                "/static/js/main.3d77a7d2.chunk.js",
                "/static/js/2.3bbfe259.chunk.js",
                "/css/fontawesome.min.css",
                "/fonts/fontawesome-webfont.woff",
                "/manifest.json",
                "http://img.youtube.com/vi/jRqXSw9SPww/0.jpg",
                "http://img.youtube.com/vi/xkEKJV1FSiw/0.jpg",
                "http://img.youtube.com/vi/RTj5IeA432Y/0.jpg",
                "http://img.youtube.com/vi/8nXqcugV2Y4/0.jpg",
                "http://img.youtube.com/vi/o8GrqUSdzi0/0.jpg",
                "http://img.youtube.com/vi/b5199xCPUGs/0.jpg",
                "http://img.youtube.com/vi/99sWRgoboNU/0.jpg",
                "http://img.youtube.com/vi/PszSx4HvKAA/0.jpg",
                "/sw.js"
            ]);
        })
    );
});

self.addEventListener("fetch", function (event) {
    event.respondWith(
        caches.match(event.request).then(function (response) {
            return response || fetch(event.request);
        })
    );
});
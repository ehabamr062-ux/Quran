const CACHE_NAME = 'al-noor-cache-v3';
const ASSETS = [
    './',
    './index.html',
    './style.css',
    './app.js',
    './quran_data.js',
    './app_icon_1782665380376.png'
];

// Install Event - Cache all essential local assets
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            console.log('[Service Worker] Caching App Shell');
            return cache.addAll(ASSETS);
        }).then(() => self.skipWaiting())
    );
});

// Activate Event - Delete any older caches
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(keys => {
            return Promise.all(
                keys.map(key => {
                    if (key !== CACHE_NAME) {
                        console.log('[Service Worker] Removing old cache:', key);
                        return caches.delete(key);
                    }
                })
            );
        }).then(() => self.clients.claim())
    );
});

// Fetch Event - Cache-First for local assets, Network-First for API/External requests
self.addEventListener('fetch', event => {
    if (event.request.method !== 'GET') return;
    
    const url = new URL(event.request.url);
    
    // For external requests (like Google Fonts, FontAwesome, or APIs)
    if (url.origin !== self.location.origin) {
        event.respondWith(
            fetch(event.request)
                .then(response => {
                    if (response.status === 200) {
                        const copy = response.clone();
                        caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy));
                    }
                    return response;
                })
                .catch(() => caches.match(event.request))
        );
    } else {
        // For local static assets (index, style, app, quran_data, icons)
        event.respondWith(
            caches.match(event.request).then(cachedResponse => {
                if (cachedResponse) return cachedResponse;
                return fetch(event.request).then(response => {
                    if (response.status === 200) {
                        const copy = response.clone();
                        caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy));
                    }
                    return response;
                });
            })
        );
    }
});

// Alarm storage in Service Worker memory
let alarms = [];

self.addEventListener('message', event => {
    const { type, payload } = event.data;
    
    if (type === 'SHOW_NOW') {
        const { title, body, icon, badge, url, requireInteraction } = payload;
        self.registration.showNotification(title, {
            body,
            icon: icon || 'app_icon_1782665380376.png',
            badge: badge || 'app_icon_1782665380376.png',
            data: { url },
            requireInteraction: requireInteraction || false
        });
    }
    
    if (type === 'SCHEDULE_ALARM') {
        // Add to alarms list
        alarms = alarms.filter(a => a.id !== payload.id);
        alarms.push(payload);
    }
    
    if (type === 'CANCEL_ALARM') {
        alarms = alarms.filter(a => a.id !== payload.id);
    }
});

// Periodic check in Service Worker (every 10 seconds)
setInterval(() => {
    const now = Date.now();
    const activeAlarms = alarms.filter(a => a.fireAt <= now);
    activeAlarms.forEach(alarm => {
        self.registration.showNotification('تطبيق النور — ' + alarm.title, {
            body: alarm.body,
            icon: alarm.icon || 'app_icon_1782665380376.png',
            badge: alarm.badge || 'app_icon_1782665380376.png',
            data: { url: alarm.url },
            requireInteraction: alarm.requireInteraction || false
        });
    });
    alarms = alarms.filter(a => a.fireAt > now);
}, 10000);

// Notification Click Handler to open app
self.addEventListener('notificationclick', event => {
    event.notification.close();
    const url = event.notification.data?.url || '/';
    event.waitUntil(
        self.clients.matchAll({ type: 'window' }).then(windowClients => {
            for (let client of windowClients) {
                if (client.url.includes(url) && 'focus' in client) {
                    return client.focus();
                }
            }
            if (self.clients.openWindow) {
                return self.clients.openWindow(url);
            }
        })
    );
});

// ============================================================
// service-worker.js — تطبيق النور PWA
// يدعم: Cache, Offline, Local Scheduled Notifications
// ============================================================

const CACHE_NAME = 'noor-app-v3';
const OFFLINE_PAGE = 'index.html';

const STATIC_ASSETS = [
    'index.html',
    'manifest.json',
    'icon.png',
    'icon-192.png',
    'icon-512.png'
];

// ─── Install ───────────────────────────────────────────────
self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(STATIC_ASSETS).catch(() => { }))
            .then(() => self.skipWaiting())
    );
});

// ─── Activate ──────────────────────────────────────────────
self.addEventListener('activate', (e) => {
    e.waitUntil(
        caches.keys().then(keys =>
            Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
        ).then(() => self.clients.claim())
    );
});

// ─── Fetch (Offline Support) ───────────────────────────────
self.addEventListener('fetch', (e) => {
    if (e.request.method !== 'GET') return;
    e.respondWith(
        caches.match(e.request).then(cached => {
            if (cached) return cached;
            return fetch(e.request).then(res => {
                if (res && res.status === 200) {
                    const clone = res.clone();
                    caches.open(CACHE_NAME).then(c => c.put(e.request, clone));
                }
                return res;
            }).catch(() => caches.match(OFFLINE_PAGE));
        })
    );
});

// ─── Notification Click Handler ────────────────────────────
self.addEventListener('notificationclick', (e) => {
    e.notification.close();

    // تحديد الرابط وتحويله لرابط مطلق لضمان العمل على GitHub Pages
    let targetUrl = e.notification.data?.url || '/';
    if (targetUrl.startsWith('/')) {
        targetUrl = new URL(targetUrl, self.location.origin).href;
    }

    e.waitUntil(
        clients.matchAll({ type: 'window', includeUncontrolled: true }).then(list => {
            // البحث عن نافذة مفتوحة بالفعل في نفس الموقع
            for (const client of list) {
                if (client.url.startsWith(self.location.origin) && 'focus' in client) {
                    client.focus();
                    if (client.url !== targetUrl) client.navigate(targetUrl);
                    return;
                }
            }
            // إذا لم يتم العثور على نافذة، يتم فتح واحدة جديدة
            if (clients.openWindow) return clients.openWindow(targetUrl);
        })
    );
});

// ─── Schedule Alarm Storage (IndexedDB) ────────────────────
function openDB() {
    return new Promise((resolve, reject) => {
        const req = indexedDB.open('noor-alarms', 1);
        req.onupgradeneeded = () => {
            req.result.createObjectStore('alarms', { keyPath: 'id' });
        };
        req.onsuccess = () => resolve(req.result);
        req.onerror = () => reject(req.error);
    });
}

async function getAlarms() {
    try {
        const db = await openDB();
        return new Promise((resolve) => {
            const tx = db.transaction('alarms', 'readonly');
            const all = [];
            tx.objectStore('alarms').openCursor().onsuccess = (e) => {
                const cur = e.target.result;
                if (cur) { all.push(cur.value); cur.continue(); }
                else resolve(all);
            };
        });
    } catch { return []; }
}

async function deleteAlarm(id) {
    try {
        const db = await openDB();
        db.transaction('alarms', 'readwrite').objectStore('alarms').delete(id);
    } catch { }
}

// ─── Alarm Checker (runs every minute via sync) ────────────
async function checkAlarms() {
    const now = Date.now();
    const alarms = await getAlarms();

    for (const alarm of alarms) {
        if (alarm.fireAt <= now) {
            await self.registration.showNotification(alarm.title, {
                body: alarm.body,
                icon: alarm.icon || '/icon-192.png',
                badge: '/icon-72.png',
                vibrate: [200, 100, 200, 100, 200],
                dir: 'rtl',
                lang: 'ar',
                tag: alarm.id,
                data: { url: alarm.url || '/', id: alarm.id },
                requireInteraction: alarm.requireInteraction || false
            });
            await deleteAlarm(alarm.id);
        }
    }
}

// ─── Message Handler (from App) ────────────────────────────
self.addEventListener('message', async (e) => {
    const { type, payload } = e.data || {};

    if (type === 'SCHEDULE_ALARM') {
        // Save alarm to IndexedDB
        try {
            const db = await openDB();
            db.transaction('alarms', 'readwrite')
                .objectStore('alarms')
                .put(payload);
        } catch (err) { console.error('[SW] Save alarm error:', err); }
    }

    if (type === 'CHECK_ALARMS') {
        checkAlarms();
    }

    if (type === 'CANCEL_ALARM') {
        await deleteAlarm(payload.id);
    }

    if (type === 'SHOW_NOW') {
        // إشعار فوري
        self.registration.showNotification(payload.title, {
            body: payload.body,
            icon: payload.icon || '/icon-192.png',
            badge: '/icon-72.png',
            vibrate: [200, 100, 200],
            dir: 'rtl',
            lang: 'ar',
            data: { url: payload.url || '/' }
        });
    }
});

// ─── Periodic Background Sync ──────────────────────────────
self.addEventListener('periodicsync', (e) => {
    if (e.tag === 'check-alarms') {
        e.waitUntil(checkAlarms());
    }
});

// ─── Sync (one-time) ───────────────────────────────────────
self.addEventListener('sync', (e) => {
    if (e.tag === 'check-alarms') {
        e.waitUntil(checkAlarms());
    }
});

// =====================================================
// firebase-messaging-sw.js — Service Worker للإشعارات
// ملاحظة: استبدل قيم الـ config بقيمك من Firebase Console
// =====================================================

importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-messaging-compat.js');

// 🔥 استبدل هذه القيم بقيم مشروعك من Firebase Console
firebase.initializeApp({
  apiKey: "AIzaSyAYn_oxYFaN8Rz7J_CrjWpCL5nCPPpa69s",
  authDomain: "quran-app-ea45d.firebaseapp.com",
  projectId: "quran-app-ea45d",
  storageBucket: "quran-app-ea45d.firebasestorage.app",
  messagingSenderId: "1010593301120",
  appId: "1:1010593301120:web:d32d22d817eba744bf1c65",
  measurementId: "G-SKR6MX0ELT"
});

const messaging = firebase.messaging();

// ============================================================
// التعامل مع الإشعارات في الخلفية (التطبيق مغلق أو مخفي)
// ============================================================
messaging.onBackgroundMessage((payload) => {
  console.log('[SW] رسالة في الخلفية:', payload);

  const title = payload.notification?.title || 'تطبيق النور 🌙';
  const body = payload.notification?.body || 'لديك رسالة جديدة';
  const icon = payload.notification?.image || '/icon-192.png';
  const link = payload.data?.link || '/';

  const options = {
    body,
    icon,
    badge: '/icon-72.png',
    vibrate: [200, 100, 200],
    dir: 'rtl',
    lang: 'ar',
    data: { url: link },
    actions: [
      { action: 'open', title: 'فتح التطبيق' },
      { action: 'dismiss', title: 'إغلاق' }
    ]
  };

  self.registration.showNotification(title, options);
});

// فتح التطبيق عند الضغط على الإشعار
self.addEventListener('notificationclick', (event) => {
  event.notification.close();

  if (event.action === 'dismiss') return;

  // تحديد الرابط: إذا كان هناك رابط مخصص في البيانات نستخدمه، وإلا نستخدم أصل الموقع
  let targetUrl = event.notification.data?.url || event.notification.data?.link || '/';

  // تحويل الرابط النسبي إلى رابط مطلق لضمان عدم حدوث 404
  if (targetUrl.startsWith('/')) {
    targetUrl = new URL(targetUrl, self.location.origin).href;
  }

  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clientList) => {
      // البحث عن نافذة مفتوحة بالفعل تابعة للتطبيق
      for (const client of clientList) {
        // نتحقق مما إذا كان العميل (النافذة) موجود في نفس الأصل (Origin)
        if (client.url.startsWith(self.location.origin) && 'focus' in client) {
          // إذا كان الرابط المطلوب مختلف عن الرابط الحالي، نقوم بالتنقل إليه
          if (client.url !== targetUrl) {
            client.navigate(targetUrl);
          }
          return client.focus();
        }
      }

      // إذا لم تكن هناك نافذة مفتوحة، نفتح واحدة جديدة
      if (clients.openWindow) {
        return clients.openWindow(targetUrl);
      }
    })
  );
});

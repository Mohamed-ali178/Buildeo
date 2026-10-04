const CACHE = "buildeo-v51";
const REMINDER_STORE = "buildeo-reminders-v1";

self.addEventListener("install", (event) => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== REMINDER_STORE).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(fetch(event.request).catch(() => caches.match(event.request)));
});

async function loadStore() {
  try {
    const cache = await caches.open(REMINDER_STORE);
    const res = await cache.match("/reminders.json");
    if (!res) return { items: [], fired: [] };
    return await res.json();
  } catch {
    return { items: [], fired: [] };
  }
}

async function saveStore(data) {
  const cache = await caches.open(REMINDER_STORE);
  await cache.put("/reminders.json", new Response(JSON.stringify(data), { headers: { "Content-Type": "application/json" } }));
}

async function fireDue() {
  const store = await loadStore();
  const now = Date.now();
  const windows = await self.clients.matchAll({ type: "window", includeUncontrolled: true });
  if (windows.length) return;
  let changed = false;
  for (const item of store.items || []) {
    if ((store.fired || []).includes(item.id)) continue;
    if (item.at > now || now > item.until) continue;
    await self.registration.showNotification(item.title, {
      body: item.body,
      icon: "./icons/icon-192.png",
      tag: item.id,
      data: { url: "./index.html" },
    });
    store.fired = [...new Set([...(store.fired || []), item.id])].slice(-400);
    changed = true;
  }
  if (changed) await saveStore(store);
}

self.addEventListener("message", (event) => {
  const data = event.data;
  if (data?.type === "getFired") {
    event.waitUntil(
      loadStore().then((store) => {
        event.ports[0]?.postMessage({ fired: store.fired || [] });
      })
    );
    return;
  }
  if (data?.type !== "reminders") return;
  event.waitUntil((async () => {
    const prev = await loadStore();
    const fired = [...new Set([...(prev.fired || []), ...(data.fired || [])])].slice(-400);
    await saveStore({ items: data.items || [], fired });
    event.ports[0]?.postMessage({ fired });
    await fireDue();
  })());
});

self.addEventListener("periodicsync", (event) => {
  if (event.tag === "buildeo-day") event.waitUntil(fireDue());
});

self.addEventListener("notificationclick", (event) => {
  event.notification.close();
  const url = event.notification.data?.url || "./index.html";
  event.waitUntil(
    self.clients.matchAll({ type: "window", includeUncontrolled: true }).then((list) => {
      const open = list.find((c) => "focus" in c);
      if (open) return open.focus();
      return self.clients.openWindow(url);
    })
  );
});

/* Service worker: precache dell'app e uso offline.
   Per pubblicare una nuova versione dei contenuti, cambia VERSIONE. */
const VERSIONE = "accanto-a-te-595b672e51";
const FILE = [
  "./",
  "index.html",
  "manifest.webmanifest",
  "css/style.css",
  "js/data-guida.js",
  "js/data-pratica.js",
  "js/data-guida-2.js",
  "js/data-pratica-2.js",
  "js/data-guida-3.js",
  "js/data-percorso.js",
  "js/data-ruoli.js",
  "js/app.js",
  "icons/icon.svg",
  "icons/icon-192.png",
  "icons/icon-512.png",
  "icons/icon-maskable-512.png",
  "icons/apple-touch-icon.png",
  "icons/favicon-32.png"
];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(VERSIONE).then((c) => c.addAll(FILE)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys()
      .then((chiavi) => Promise.all(chiavi.filter((k) => k !== VERSIONE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.origin !== location.origin) return;

  // Navigazioni: pagina dalla cache, aggiornata in rete quando possibile.
  if (req.mode === "navigate") {
    e.respondWith(
      fetch(req)
        .then((r) => {
          const copia = r.clone();
          caches.open(VERSIONE).then((c) => c.put("index.html", copia));
          return r;
        })
        .catch(() => caches.match("index.html", { ignoreSearch: true }).then((r) => r || caches.match("./")))
    );
    return;
  }

  // Risorse: cache prima, aggiornamento in secondo piano.
  e.respondWith(
    caches.match(req, { ignoreSearch: true }).then((cache) => {
      const rete = fetch(req)
        .then((r) => {
          if (r && r.status === 200) {
            const copia = r.clone();
            caches.open(VERSIONE).then((c) => c.put(req, copia));
          }
          return r;
        })
        .catch(() => cache);
      return cache || rete;
    })
  );
});

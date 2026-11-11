// Service worker minimal : il rend l'application installable sur téléphone et ordinateur.
// Il n'intercepte aucune requête et ne met RIEN en cache : tout passe normalement par le réseau,
// pour toujours afficher la dernière version et ne rien laisser de lisible sur l'appareil.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (event) => event.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('service-worker.js')
      .then(reg => console.log('Service Worker Registered!', reg))
      .catch(err => console.error('Service Worker registration failed:', err));
  });
}

Notification.requestPermission().then(permission => {
  if (permission === 'granted') {
    new Notification('Welcome to ShopMate!', {
      body: 'Thank you for visiting our PWA!',
      icon: 'assets/icons/icon-192.png'
    });
  }
});

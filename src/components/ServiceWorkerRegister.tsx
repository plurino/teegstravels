'use client';

import { useEffect } from 'react';

export function ServiceWorkerRegister() {
  useEffect(() => {
    if ('serviceWorker' in navigator && window.location.protocol === 'https:') {
      window.addEventListener('load', () => {
        navigator.serviceWorker
          .register('/sw.js')
          .then((reg) => {
            console.log('TeegsTravels ServiceWorker registered: ', reg.scope);
          })
          .catch((err) => {
            console.error('TeegsTravels ServiceWorker registration failed: ', err);
          });
      });
    }
  }, []);

  return null;
}

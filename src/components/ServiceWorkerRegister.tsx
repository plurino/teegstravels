'use client';

import { useEffect } from 'react';

export function ServiceWorkerRegister() {
  useEffect(() => {
    if ('serviceWorker' in navigator && window.location.protocol === 'https:') {
      window.addEventListener('load', () => {
        const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
        navigator.serviceWorker
          .register(`${basePath}/sw.js`)
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

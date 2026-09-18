'use client';

import { useEffect } from 'react';

export function TabTitleSwitcher() {
  useEffect(() => {
    const originalTitle = document.title;

    const handleVisibility = () => {
      if (document.hidden) {
        document.title = '🎒 Teegs is still traveling... ✈️';
      } else {
        document.title = originalTitle;
      }
    };

    document.addEventListener('visibilitychange', handleVisibility);
    return () => document.removeEventListener('visibilitychange', handleVisibility);
  }, []);

  return null;
}

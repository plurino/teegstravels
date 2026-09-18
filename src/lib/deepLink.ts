/**
 * Deep Linking & In-App Browser Detection Utility
 * Prevents users from getting trapped in restrictive in-app browsers
 * and routes directly to native mobile apps (YouTube, TikTok, Instagram, Kick).
 */

export function isInAppBrowser(): boolean {
  if (typeof window === 'undefined' || !navigator.userAgent) return false;
  const ua = navigator.userAgent || navigator.vendor || (window as unknown as { opera?: string }).opera || '';
  
  // Detection for Instagram, TikTok, Facebook (FBAN/FBAV), Messenger, Line, Twitter, Threads
  return (
    /Instagram/i.test(ua) ||
    /musical_ly|ByteDance|TikTok/i.test(ua) ||
    /FBAN|FBAV|FB_IAB/i.test(ua) ||
    /Line/i.test(ua) ||
    /Twitter|X\//i.test(ua) ||
    /Threads/i.test(ua) ||
    /Snapchat/i.test(ua)
  );
}

export function getInAppBrowserName(): string | null {
  if (typeof window === 'undefined' || !navigator.userAgent) return null;
  const ua = navigator.userAgent;

  if (/musical_ly|ByteDance|TikTok/i.test(ua)) return 'TikTok';
  if (/Instagram/i.test(ua)) return 'Instagram';
  if (/FBAN|FBAV|FB_IAB/i.test(ua)) return 'Facebook';
  if (/Twitter|X\//i.test(ua)) return 'Twitter/X';
  if (/Snapchat/i.test(ua)) return 'Snapchat';
  if (/Line/i.test(ua)) return 'LINE';
  
  return null;
}

export function isMobileDevice(): boolean {
  if (typeof window === 'undefined' || !navigator.userAgent) return false;
  return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
}

export function isIOS(): boolean {
  if (typeof window === 'undefined' || !navigator.userAgent) return false;
  return /iPhone|iPad|iPod/i.test(navigator.userAgent);
}

export function isAndroid(): boolean {
  if (typeof window === 'undefined' || !navigator.userAgent) return false;
  return /Android/i.test(navigator.userAgent);
}

/**
 * Returns custom native scheme or web fallback depending on device
 */
export function getSmartLink(type: 'youtube' | 'tiktok' | 'instagram', webUrl: string, videoId?: string): string {
  if (typeof window === 'undefined') return webUrl;
  const mobile = isMobileDevice();

  if (!mobile) return webUrl;

  const android = isAndroid();

  switch (type) {
    case 'youtube':
      if (videoId) {
        return android ? `vnd.youtube:${videoId}` : `youtube://watch?v=${videoId}`;
      }
      return android ? 'vnd.youtube://www.youtube.com/@Itsnottegxnn' : 'youtube://www.youtube.com/@Itsnottegxnn';

    case 'tiktok':
      return 'snssdk1233://user/profile/itsnottegxnn';

    case 'instagram':
      return 'instagram://user?username=itsnottegxnn';

    default:
      return webUrl;
  }
}

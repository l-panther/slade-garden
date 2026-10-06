export type ConsentCategory = 'necessary' | 'analytics' | 'marketing';

interface ConsentRecord {
  necessary: true; // always on — strictly required cookies aren't optional
  analytics: boolean;
  marketing: boolean;
  decidedAt: number;
}

const STORAGE_KEY = 'cookie_consent_v1';

export function useCookieConsent() {
  // useState keeps this reactive and SSR-safe across the whole app —
  // any component can check `hasConsent('analytics')` before firing
  // off a tracking script, without prop-drilling.
  const consent = useState<ConsentRecord | null>('cookieConsent', () => null);
  const bannerVisible = useState<boolean>('cookieBannerVisible', () => false);

  function loadFromStorage() {
    if (import.meta.server) return;
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        consent.value = JSON.parse(raw);
      }
    } catch (e) {
      // Corrupted or blocked storage — treat as "no decision yet"
      // rather than crashing the app over a cookie banner.
    }
    bannerVisible.value = !consent.value;
  }

  function saveConsent(analytics: boolean, marketing: boolean) {
    const record: ConsentRecord = {
      necessary: true,
      analytics,
      marketing,
      decidedAt: Date.now(),
    };
    consent.value = record;
    bannerVisible.value = false;
    if (import.meta.client) {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(record));
      } catch (e) {
        // If storage is blocked entirely, the choice just won't
        // persist across reloads — not worth failing loudly over.
      }
    }
  }

  function acceptAll() {
    saveConsent(true, true);
  }

  function rejectNonEssential() {
    saveConsent(false, false);
  }

  function reopenPreferences() {
    bannerVisible.value = true;
  }

  function hasConsent(category: ConsentCategory): boolean {
    if (category === 'necessary') return true;
    return !!consent.value?.[category];
  }

  return {
    consent,
    bannerVisible,
    loadFromStorage,
    saveConsent,
    acceptAll,
    rejectNonEssential,
    reopenPreferences,
    hasConsent,
  };
}

/**
 * Analytics Utility
 *
 * Environment-aware analytics handling that:
 * - Mocks analytics in test environment
 * - Bypasses analytics in local development with console logging
 * - Uses real analytics only in production
 */

// ============================================================================
// ENVIRONMENT DETECTION
// ============================================================================

const isTestEnvironment = process.env.NODE_ENV === 'test';
const isDevelopmentEnvironment = process.env.NODE_ENV === 'development';
const isProductionEnvironment = process.env.NODE_ENV === 'production';

// ============================================================================
// ANALYTICS INTERFACE
// ============================================================================

interface IAnalyticsEvent {
  event: string;
  [key: string]: any;
}

interface IAnalyticsConfig {
  measurementId: string;
  analyticsMeasurementId: string;
  secondaryAnalyticsMeasurementId?: string;
  anonymizeIp?: boolean;
  debugMode?: boolean;
  pageViewTimeout?: number;
}

// ============================================================================
// MOCK ANALYTICS FOR TESTS
// ============================================================================

class MockAnalytics {
  private events: IAnalyticsEvent[] = [];
  private configs: any[] = [];
  private consentUpdates: any[] = [];

  trackEvent(eventName: string, parameters?: Record<string, any>) {
    const event: IAnalyticsEvent = {
      event: eventName,
      ...parameters,
    };
    this.events.push(event);
    console.log('[MOCK ANALYTICS] Event tracked:', event);
  }

  trackPageView(pageTitle?: string, pageLocation?: string) {
    const event: IAnalyticsEvent = {
      event: 'page_view',
      page_title: pageTitle || document.title,
      page_location: pageLocation || window.location.href,
    };
    this.events.push(event);
    console.log('[MOCK ANALYTICS] Page view tracked:', event);
  }

  config(measurementId: string, config?: any) {
    this.configs.push({ measurementId, config });
    console.log('[MOCK ANALYTICS] Config set:', { measurementId, config });
  }

  consent(command: string, defaults: any) {
    this.consentUpdates.push({ command, defaults });
    console.log('[MOCK ANALYTICS] Consent updated:', { command, defaults });
  }

  getEvents() {
    return [...this.events];
  }

  getConfigs() {
    return [...this.configs];
  }

  getConsentUpdates() {
    return [...this.consentUpdates];
  }

  clear() {
    this.events = [];
    this.configs = [];
    this.consentUpdates = [];
  }
}

// ============================================================================
// DEVELOPMENT ANALYTICS (CONSOLE LOGGING)
// ============================================================================

class DevelopmentAnalytics {
  trackEvent(eventName: string, parameters?: Record<string, any>) {
    console.log('[DEV ANALYTICS] Event would be tracked:', {
      event: eventName,
      ...parameters,
    });
  }

  trackPageView(pageTitle?: string, pageLocation?: string) {
    console.log('[DEV ANALYTICS] Page view would be tracked:', {
      event: 'page_view',
      page_title: pageTitle || document.title,
      page_location: pageLocation || window.location.href,
    });
  }

  config(measurementId: string, config?: any) {
    console.log('[DEV ANALYTICS] Config would be set:', {
      measurementId,
      config,
    });
  }

  consent(command: string, defaults: any) {
    console.log('[DEV ANALYTICS] Consent would be updated:', {
      command,
      defaults,
    });
  }
}

// ============================================================================
// PRODUCTION ANALYTICS (REAL GTAG)
// ============================================================================

class ProductionAnalytics {
  trackEvent(eventName: string, parameters?: Record<string, any>) {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', eventName, parameters);
    } else {
      console.warn('[PROD ANALYTICS] gtag not available for event:', eventName);
    }
  }

  trackPageView(pageTitle?: string, pageLocation?: string) {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'page_view', {
        page_title: pageTitle || document.title,
        page_location: pageLocation || window.location.href,
      });
    } else {
      console.warn('[PROD ANALYTICS] gtag not available for page view');
    }
  }

  config(measurementId: string, config?: any) {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('config', measurementId, config);
    } else {
      console.warn(
        '[PROD ANALYTICS] gtag not available for config:',
        measurementId
      );
    }
  }

  consent(command: string, defaults: any) {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('consent', command, defaults);
    } else {
      console.warn('[PROD ANALYTICS] gtag not available for consent update');
    }
  }
}

// ============================================================================
// ANALYTICS INSTANCE SELECTION
// ============================================================================

let analyticsInstance:
  | MockAnalytics
  | DevelopmentAnalytics
  | ProductionAnalytics;

if (isTestEnvironment) {
  analyticsInstance = new MockAnalytics();
  console.log('[ANALYTICS] Using mock analytics for test environment');
} else if (isDevelopmentEnvironment) {
  analyticsInstance = new DevelopmentAnalytics();
  console.log('[ANALYTICS] Using development analytics (console logging)');
} else if (isProductionEnvironment) {
  analyticsInstance = new ProductionAnalytics();
  console.log('[ANALYTICS] Using production analytics (real gtag)');
} else {
  // Fallback to development mode
  analyticsInstance = new DevelopmentAnalytics();
  console.log('[ANALYTICS] Unknown environment, using development analytics');
}

// ============================================================================
// PUBLIC API
// ============================================================================

/**
 * Track an analytics event
 */
export const trackEvent = (
  eventName: string,
  parameters?: Record<string, any>
) => {
  analyticsInstance.trackEvent(eventName, parameters);
};

/**
 * Track a page view
 */
export const trackPageView = (pageTitle?: string, pageLocation?: string) => {
  analyticsInstance.trackPageView(pageTitle, pageLocation);
};

/**
 * Configure analytics
 */
export const configAnalytics = (measurementId: string, config?: any) => {
  analyticsInstance.config(measurementId, config);
};

/**
 * Update consent settings
 */
export const updateConsent = (command: string, defaults: any) => {
  analyticsInstance.consent(command, defaults);
};

/**
 * Get mock analytics instance (for testing)
 */
export const getMockAnalytics = (): MockAnalytics | null => {
  if (isTestEnvironment && analyticsInstance instanceof MockAnalytics) {
    return analyticsInstance;
  }
  return null;
};

/**
 * Clear mock analytics data (for testing)
 */
export const clearMockAnalytics = () => {
  if (isTestEnvironment && analyticsInstance instanceof MockAnalytics) {
    analyticsInstance.clear();
  }
};

/**
 * Check if analytics are mocked
 */
export const isAnalyticsMocked = () => {
  return isTestEnvironment || isDevelopmentEnvironment;
};

/**
 * Get current environment
 */
export const getAnalyticsEnvironment = () => {
  return {
    isTest: isTestEnvironment,
    isDevelopment: isDevelopmentEnvironment,
    isProduction: isProductionEnvironment,
  };
};

// ============================================================================
// CONVERSION TRACKING HELPERS
// ============================================================================

/**
 * Track email conversion
 */
export const trackEmailConversion = () => {
  trackEvent('conversion', {
    send_to: 'AW-16665018583/Z8tpCOHniPQaENeBwIo-',
    value: 1.0,
    currency: 'USD',
  });
};

/**
 * Track phone conversion
 */
export const trackPhoneConversion = () => {
  trackEvent('conversion', {
    send_to: 'AW-16665018583/mY27CN7niPQaENeBwIo-',
  });
};

/**
 * Track enrollment conversion
 */
export const trackEnrollmentConversion = (conversionId?: string) => {
  trackEvent('conversion', {
    send_to: conversionId || 'AW-16665018583/vFD0CPHVzcgZENeBwIo-',
  });
};

// ============================================================================
// WEB VITALS TRACKING
// ============================================================================

/**
 * Track Web Vitals
 */
export const trackWebVitals = (name: string, value: number) => {
  trackEvent('web_vitals', {
    event_category: 'Web Vitals',
    event_label: name,
    value: Math.round(name === 'CLS' ? value * 1000 : value),
    non_interaction: true,
  });
};

// ============================================================================
// EXPORT TYPES
// ============================================================================

export type { IAnalyticsEvent, IAnalyticsConfig };
export { MockAnalytics, DevelopmentAnalytics, ProductionAnalytics };

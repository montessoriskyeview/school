/**
 * Performance Optimization Utilities
 * Implements best practices for Google Analytics and ad performance
 */

// Performance monitoring
export interface IPerformanceMetrics {
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
  fcp: number;
}

// Consent management
export interface IConsentState {
  analytics: boolean;
  ads: boolean;
  marketing: boolean;
}

// Google Analytics configuration
interface IGoogleAnalyticsConfig {
  measurementId: string;
  analyticsMeasurementId: string;
  debugMode?: boolean;
  anonymizeIp?: boolean;
  pageViewTimeout?: number;
}

// Ad loading configuration
interface IAdLoadingConfig {
  lazyLoad: boolean;
  delayMs: number;
  intersectionThreshold: number;
  maxRetries: number;
}

/**
 * Performance monitoring class
 */
export class PerformanceMonitor {
  private metrics: Partial<IPerformanceMetrics> = {};
  private observers: PerformanceObserver[] = [];

  constructor() {
    this.initializeObservers();
  }

  private initializeObservers() {
    // LCP (Largest Contentful Paint)
    if ('PerformanceObserver' in window) {
      const lcpObserver = new PerformanceObserver(list => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        this.metrics.lcp = lastEntry.startTime;
        this.reportMetric('LCP', lastEntry.startTime);
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
      this.observers.push(lcpObserver);

      // FID (First Input Delay)
      const fidObserver = new PerformanceObserver(list => {
        const entries = list.getEntries();
        entries.forEach(entry => {
          const fidEntry = entry as PerformanceEventTiming;
          this.metrics.fid = fidEntry.processingStart - fidEntry.startTime;
          this.reportMetric('FID', this.metrics.fid);
        });
      });
      fidObserver.observe({ entryTypes: ['first-input'] });
      this.observers.push(fidObserver);

      // CLS (Cumulative Layout Shift)
      const clsObserver = new PerformanceObserver(list => {
        let clsValue = 0;
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        });
        this.metrics.cls = clsValue;
        this.reportMetric('CLS', clsValue);
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });
      this.observers.push(clsObserver);
    }
  }

  private reportMetric(name: string, value: number) {
    // Report to Google Analytics if available
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'web_vitals', {
        event_category: 'Web Vitals',
        event_label: name,
        value: Math.round(name === 'CLS' ? value * 1000 : value),
        non_interaction: true,
      });
    }

    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.log(`Web Vital: ${name} = ${value}`);
    }
  }

  public getMetrics(): Partial<IPerformanceMetrics> {
    return { ...this.metrics };
  }

  public disconnect() {
    this.observers.forEach(observer => observer.disconnect());
  }
}

/**
 * Consent management for GDPR/CCPA compliance
 */
export class ConsentManager {
  private consentState: IConsentState = {
    analytics: false,
    ads: false,
    marketing: false,
  };

  constructor() {
    this.loadConsentState();
  }

  private loadConsentState() {
    try {
      const stored = localStorage.getItem('consent_state');
      if (stored) {
        this.consentState = { ...this.consentState, ...JSON.parse(stored) };
      }
    } catch (error) {
      console.warn('Failed to load consent state:', error);
    }
  }

  private saveConsentState() {
    try {
      localStorage.setItem('consent_state', JSON.stringify(this.consentState));
    } catch (error) {
      console.warn('Failed to save consent state:', error);
    }
  }

  public updateConsent(consent: Partial<IConsentState>) {
    this.consentState = { ...this.consentState, ...consent };
    this.saveConsentState();
    this.applyConsent();
  }

  public getConsent(): IConsentState {
    return { ...this.consentState };
  }

  private applyConsent() {
    // Apply consent to Google Analytics
    if (
      this.consentState.analytics &&
      typeof window !== 'undefined' &&
      (window as any).gtag
    ) {
      (window as any).gtag('consent', 'update', {
        analytics_storage: 'granted',
      });
    } else if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('consent', 'update', {
        analytics_storage: 'denied',
      });
    }
  }
}

// G-EW5S4BY15P

/**
 * Optimized Google Analytics loader
 */
export class GoogleAnalyticsLoader {
  private config: IGoogleAnalyticsConfig;
  private isLoaded = false;
  private loadPromise: Promise<void> | null = null;

  constructor(config: IGoogleAnalyticsConfig) {
    this.config = config;
  }

  public async load(): Promise<void> {
    if (this.isLoaded) {
      return Promise.resolve();
    }

    if (this.loadPromise) {
      return this.loadPromise;
    }

    this.loadPromise = new Promise((resolve, reject) => {
      try {
        // Initialize dataLayer
        (window as any).dataLayer = (window as any).dataLayer || [];

        // Create gtag function
        (window as any).gtag = function () {
          (window as any).dataLayer.push(arguments);
        };

        // Set initial consent state (denied by default)
        (window as any).gtag('consent', 'default', {
          analytics_storage: 'denied',
          ad_storage: 'denied',
          wait_for_update: 500,
        });

        // Load Google Analytics script
        const script = document.createElement('script');
        script.async = true;
        script.src = `https://www.googletagmanager.com/gtag/js?id=${this.config.measurementId}`;
        script.onload = () => {
          // Configure Google Analytics
          (window as any).gtag('js', new Date());
          (window as any).gtag('config', this.config.measurementId, {
            anonymize_ip: this.config.anonymizeIp ?? true,
            debug_mode: this.config.debugMode ?? false,
            page_view_timeout: this.config.pageViewTimeout ?? 5000,
          });

          (window as any).gtag('config', this.config.analyticsMeasurementId, {
            anonymize_ip: this.config.anonymizeIp ?? true,
            debug_mode: this.config.debugMode ?? false,
            page_view_timeout: this.config.pageViewTimeout ?? 5000,
          });

          this.isLoaded = true;
          resolve();
        };
        script.onerror = reject;

        document.head.appendChild(script);
      } catch (error) {
        reject(error);
      }
    });

    return this.loadPromise;
  }

  public trackEvent(eventName: string, parameters?: Record<string, any>) {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', eventName, parameters);
    }
  }

  public trackPageView(pageTitle?: string, pageLocation?: string) {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'page_view', {
        page_title: pageTitle || document.title,
        page_location: pageLocation || window.location.href,
      });
    }
  }
}

/**
 * Lazy loading utility for ads and heavy content
 */
export class LazyLoader {
  private config: IAdLoadingConfig;
  private observers: Map<Element, IntersectionObserver> = new Map();

  constructor(config: IAdLoadingConfig) {
    this.config = config;
  }

  public observeElement(
    element: Element,
    callback: () => void,
    options?: IntersectionObserverInit
  ) {
    if (!this.config.lazyLoad) {
      // Execute immediately if lazy loading is disabled
      callback();
      return;
    }

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            callback();
            observer.unobserve(entry.target);
            this.observers.delete(entry.target);
          }
        });
      },
      {
        threshold: this.config.intersectionThreshold,
        rootMargin: '50px',
        ...options,
      }
    );

    observer.observe(element);
    this.observers.set(element, observer);
  }

  public unobserveElement(element: Element) {
    const observer = this.observers.get(element);
    if (observer) {
      observer.unobserve(element);
      this.observers.delete(element);
    }
  }

  public disconnect() {
    this.observers.forEach(observer => observer.disconnect());
    this.observers.clear();
  }
}

/**
 * Resource preloader for critical assets
 */
export class ResourcePreloader {
  private preloadedResources = new Set<string>();

  public preloadImage(src: string): Promise<void> {
    if (this.preloadedResources.has(src)) {
      return Promise.resolve();
    }

    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => {
        this.preloadedResources.add(src);
        resolve();
      };
      img.onerror = reject;
      img.src = src;
    });
  }

  public preloadScript(src: string): Promise<void> {
    if (this.preloadedResources.has(src)) {
      return Promise.resolve();
    }

    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = src;
      script.onload = () => {
        this.preloadedResources.add(src);
        resolve();
      };
      script.onerror = reject;
      document.head.appendChild(script);
    });
  }

  public preloadStylesheet(href: string): Promise<void> {
    if (this.preloadedResources.has(href)) {
      return Promise.resolve();
    }

    return new Promise((resolve, reject) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'style';
      link.href = href;
      link.onload = () => {
        this.preloadedResources.add(href);
        resolve();
      };
      link.onerror = reject;
      document.head.appendChild(link);
    });
  }
}

/**
 * Performance optimization manager
 */
export class PerformanceOptimizer {
  private monitor: PerformanceMonitor;
  private consentManager: ConsentManager;
  private analyticsLoader: GoogleAnalyticsLoader;
  private lazyLoader: LazyLoader;
  private resourcePreloader: ResourcePreloader;

  constructor() {
    this.monitor = new PerformanceMonitor();
    this.consentManager = new ConsentManager();
    this.analyticsLoader = new GoogleAnalyticsLoader({
      measurementId: 'AW-16665018583',
      analyticsMeasurementId: 'G-EW5S4BY15P',
      anonymizeIp: true,
      debugMode: process.env.NODE_ENV === 'development',
    });
    this.lazyLoader = new LazyLoader({
      lazyLoad: true,
      delayMs: 1000,
      intersectionThreshold: 0.1,
      maxRetries: 3,
    });
    this.resourcePreloader = new ResourcePreloader();
  }

  public async initialize() {
    // Load analytics only if consent is granted
    const consent = this.consentManager.getConsent();
    if (consent.analytics) {
      await this.analyticsLoader.load();
    }

    // Preload critical resources
    this.preloadCriticalResources();
  }

  private preloadCriticalResources() {
    // Preload critical images
    const criticalImages = ['/logo192.png', '/og-image.png'];

    criticalImages.forEach(src => {
      this.resourcePreloader.preloadImage(src);
    });
  }

  public getMonitor(): PerformanceMonitor {
    return this.monitor;
  }

  public getConsentManager(): ConsentManager {
    return this.consentManager;
  }

  public getAnalyticsLoader(): GoogleAnalyticsLoader {
    return this.analyticsLoader;
  }

  public getLazyLoader(): LazyLoader {
    return this.lazyLoader;
  }

  public getResourcePreloader(): ResourcePreloader {
    return this.resourcePreloader;
  }

  public cleanup() {
    this.monitor.disconnect();
    this.lazyLoader.disconnect();
  }
}

// Export singleton instance
export const performanceOptimizer = new PerformanceOptimizer();

// Export utility functions
export const trackEvent = (
  eventName: string,
  parameters?: Record<string, any>
) => {
  performanceOptimizer.getAnalyticsLoader().trackEvent(eventName, parameters);
};

export const trackPageView = (pageTitle?: string, pageLocation?: string) => {
  performanceOptimizer
    .getAnalyticsLoader()
    .trackPageView(pageTitle, pageLocation);
};

export const updateConsent = (consent: Partial<IConsentState>) => {
  performanceOptimizer.getConsentManager().updateConsent(consent);
};

export const getConsent = (): IConsentState => {
  return performanceOptimizer.getConsentManager().getConsent();
};

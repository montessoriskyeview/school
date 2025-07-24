/**
 * Performance Optimization Utilities
 * Implements best practices for Google Analytics and ad performance
 */

import {
  trackEvent as trackAnalyticsEvent,
  trackPageView as trackAnalyticsPageView,
  updateConsent as updateAnalyticsConsent,
  trackWebVitals,
} from './analytics';

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
  secondaryAnalyticsMeasurementId?: string;
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
    // Use the new analytics utility for Web Vitals tracking
    trackWebVitals(name, value);

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
    this.observers = [];
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
    // Use the new analytics utility for consent updates
    updateAnalyticsConsent('update', {
      analytics_storage: this.consentState.analytics ? 'granted' : 'denied',
      ad_storage: this.consentState.ads ? 'granted' : 'denied',
      ad_user_data: this.consentState.marketing ? 'granted' : 'denied',
      ad_personalization: this.consentState.marketing ? 'granted' : 'denied',
    });
  }
}

/**
 * Google Analytics loader with environment-aware behavior
 */
export class GoogleAnalyticsLoader {
  private config: IGoogleAnalyticsConfig;
  private isLoaded = false;
  private loadPromise: Promise<void> | null = null;

  constructor(config: IGoogleAnalyticsConfig) {
    this.config = config;
  }

  /**
   * Helper method to load a single Google Analytics script
   */
  private loadAnalyticsScript(measurementId: string): Promise<void> {
    return new Promise((resolve, reject) => {
      // In test or development environment, don't actually load scripts
      if (
        process.env.NODE_ENV === 'test' ||
        process.env.NODE_ENV === 'development'
      ) {
        console.log(
          `[ANALYTICS] Would load script for measurement ID: ${measurementId}`
        );
        resolve();
        return;
      }

      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
      script.onload = () => {
        this.configureAnalytics(measurementId);
        resolve();
      };
      script.onerror = reject;
      document.head.appendChild(script);
    });
  }

  /**
   * Helper method to configure Google Analytics for a measurement ID
   */
  private configureAnalytics(measurementId: string): void {
    // Use the new analytics utility for configuration
    trackAnalyticsEvent('config', {
      measurementId,
      anonymize_ip: this.config.anonymizeIp ?? false,
      debug_mode: this.config.debugMode ?? false,
      page_view_timeout: this.config.pageViewTimeout ?? 5000,
    });
  }

  public async load(): Promise<void> {
    if (this.isLoaded) {
      return Promise.resolve();
    }

    if (this.loadPromise) {
      return this.loadPromise;
    }

    this.loadPromise = new Promise(async (resolve, reject) => {
      try {
        // Check if gtag is already loaded from static HTML
        if (typeof window !== 'undefined' && (window as any).gtag) {
          console.log('Google Analytics already loaded from static HTML');
          this.isLoaded = true;
          resolve();
          return;
        }

        // In test or development environment, skip actual loading
        if (
          process.env.NODE_ENV === 'test' ||
          process.env.NODE_ENV === 'development'
        ) {
          console.log(
            '[ANALYTICS] Skipping actual script loading in test/development environment'
          );
          this.isLoaded = true;
          resolve();
          return;
        }

        // Initialize dataLayer
        (window as any).dataLayer = (window as any).dataLayer || [];

        // Create gtag function
        (window as any).gtag = function () {
          (window as any).dataLayer.push(arguments);
        };
        // Set initial timestamp
        (window as any).gtag('js', new Date());

        // Load both Google Analytics scripts in parallel
        const loadPromises = [
          this.loadAnalyticsScript(this.config.measurementId),
          this.loadAnalyticsScript(this.config.analyticsMeasurementId),
          this.config.secondaryAnalyticsMeasurementId
            ? this.loadAnalyticsScript(
                this.config.secondaryAnalyticsMeasurementId
              )
            : Promise.resolve(),
        ];

        await Promise.all(loadPromises);

        this.isLoaded = true;
        resolve();
      } catch (error) {
        reject(error);
      }
    });

    return this.loadPromise;
  }

  public trackEvent(eventName: string, parameters?: Record<string, any>) {
    // Use the new analytics utility
    trackAnalyticsEvent(eventName, parameters);
  }

  public trackPageView(pageTitle?: string, pageLocation?: string) {
    // Use the new analytics utility
    trackAnalyticsPageView(pageTitle, pageLocation);
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
      analyticsMeasurementId: 'G-0FTM2V6DK7',
      // secondaryAnalyticsMeasurementId: 'G-EW5S4BY15P',
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
    // Always initialize analytics since it's now loaded statically in HTML
    // But respect consent for tracking behavior
    await this.analyticsLoader.load();

    // Apply current consent settings to analytics
    const consent = this.consentManager.getConsent();
    this.applyAnalyticsConsent(consent);

    // Preload critical resources
    this.preloadCriticalResources();
  }

  public applyAnalyticsConsent(consent: IConsentState) {
    // Use the new analytics utility for consent updates
    updateAnalyticsConsent('update', {
      analytics_storage: consent.analytics ? 'granted' : 'denied',
    });
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

// Export utility functions using the new analytics utility
export const trackEvent = (
  eventName: string,
  parameters?: Record<string, any>
) => {
  trackAnalyticsEvent(eventName, parameters);
};

export const trackPageView = (pageTitle?: string, pageLocation?: string) => {
  trackAnalyticsPageView(pageTitle, pageLocation);
};

export const updateConsent = (consent: Partial<IConsentState>) => {
  performanceOptimizer.getConsentManager().updateConsent(consent);
};

export const getConsent = (): IConsentState => {
  return performanceOptimizer.getConsentManager().getConsent();
};

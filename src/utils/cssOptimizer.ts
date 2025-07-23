/**
 * CSS Loading Optimizer
 * Handles critical and non-critical CSS loading with performance optimizations
 */

interface CSSResource {
  href: string;
  media?: string;
  preload?: boolean;
  critical?: boolean;
}

class CSSOptimizer {
  private loadedResources = new Set<string>();
  private criticalResources: CSSResource[] = [];
  private nonCriticalResources: CSSResource[] = [];

  constructor() {
    this.initializeResources();
  }

  private initializeResources() {
    // Critical resources that should be loaded immediately
    this.criticalResources = [
      {
        href: '/static/css/main.css',
        critical: true,
        preload: true,
      },
    ];

    // Non-critical resources that can be loaded asynchronously
    this.nonCriticalResources = [
      {
        href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap',
        media: 'print',
      },
      {
        href: '/static/css/theme.css',
        media: 'print',
      },
    ];
  }

  /**
   * Preload critical CSS resources
   */
  public preloadCriticalResources(): void {
    this.criticalResources
      .filter(resource => resource.preload)
      .forEach(resource => {
        this.preloadResource(resource.href, 'style');
      });
  }

  /**
   * Load non-critical CSS asynchronously
   */
  public loadNonCriticalCSS(): void {
    this.nonCriticalResources.forEach(resource => {
      this.loadStylesheetAsync(resource.href, resource.media);
    });
  }

  /**
   * Preload a resource
   */
  private preloadResource(href: string, as: string): void {
    if (this.loadedResources.has(href)) return;

    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = as;
    link.href = href;
    link.onload = () => {
      this.loadedResources.add(href);
    };
    document.head.appendChild(link);
  }

  /**
   * Load stylesheet asynchronously
   */
  private loadStylesheetAsync(href: string, media: string = 'all'): void {
    if (this.loadedResources.has(href)) return;

    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    link.media = media;

    // Use print media to prevent render blocking, then switch to all
    if (media === 'print') {
      link.onload = () => {
        link.media = 'all';
        this.loadedResources.add(href);
      };
    } else {
      link.onload = () => {
        this.loadedResources.add(href);
      };
    }

    link.onerror = () => {
      console.warn(`Failed to load CSS: ${href}`);
    };

    document.head.appendChild(link);
  }

  /**
   * Initialize CSS loading optimization
   */
  public initialize(): void {
    // Preload critical resources immediately
    this.preloadCriticalResources();

    // Load non-critical CSS after initial render
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        this.loadNonCriticalCSS();
      });
    } else {
      // Use requestIdleCallback for better performance
      if ('requestIdleCallback' in window) {
        requestIdleCallback(() => {
          this.loadNonCriticalCSS();
        });
      } else {
        setTimeout(() => {
          this.loadNonCriticalCSS();
        }, 1);
      }
    }
  }

  /**
   * Check if a resource is loaded
   */
  public isResourceLoaded(href: string): boolean {
    return this.loadedResources.has(href);
  }

  /**
   * Get loading status
   */
  public getLoadingStatus(): { loaded: string[]; pending: string[] } {
    const allResources = [
      ...this.criticalResources.map(r => r.href),
      ...this.nonCriticalResources.map(r => r.href),
    ];

    return {
      loaded: allResources.filter(href => this.loadedResources.has(href)),
      pending: allResources.filter(href => !this.loadedResources.has(href)),
    };
  }
}

// Create singleton instance
export const cssOptimizer = new CSSOptimizer();

// Initialize on module load
cssOptimizer.initialize();

export default CSSOptimizer;

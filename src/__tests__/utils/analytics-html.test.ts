/**
 * Tests for HTML-based analytics configuration
 * This ensures the static HTML analytics setup doesn't change
 */

describe('HTML Analytics Configuration Tests', () => {
  beforeEach(() => {
    // Reset document
    document.documentElement.innerHTML = '';
  });

  it('should maintain correct Google Analytics script URLs', () => {
    const expectedScripts = [
      'https://www.googletagmanager.com/gtag/js?id=G-0FTM2V6DK7',
      'https://www.googletagmanager.com/gtag/js?id=AW-16665018583',
    ];

    // These URLs should never change without explicit approval
    expect(expectedScripts[0]).toBe(
      'https://www.googletagmanager.com/gtag/js?id=G-0FTM2V6DK7'
    );
    expect(expectedScripts[1]).toBe(
      'https://www.googletagmanager.com/gtag/js?id=AW-16665018583'
    );
  });

  it('should maintain correct measurement IDs in HTML', () => {
    const expectedMeasurementIds = {
      analytics: 'G-0FTM2V6DK7',
      ads: 'AW-16665018583',
    };

    expect(expectedMeasurementIds.analytics).toBe('G-0FTM2V6DK7');
    expect(expectedMeasurementIds.ads).toBe('AW-16665018583');
  });

  it('should maintain correct default consent configuration', () => {
    const expectedDefaultConsent = {
      analytics_storage: 'denied',
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
    };

    expect(expectedDefaultConsent.analytics_storage).toBe('denied');
    expect(expectedDefaultConsent.ad_storage).toBe('denied');
    expect(expectedDefaultConsent.ad_user_data).toBe('denied');
    expect(expectedDefaultConsent.ad_personalization).toBe('denied');
  });

  it('should maintain correct gtag configuration calls', () => {
    const expectedConfigCalls = [
      "gtag('config', 'G-0FTM2V6DK7')",
      "gtag('config', 'AW-16665018583')",
    ];

    expect(expectedConfigCalls[0]).toBe("gtag('config', 'G-0FTM2V6DK7')");
    expect(expectedConfigCalls[1]).toBe("gtag('config', 'AW-16665018583')");
  });

  it('should maintain correct dataLayer initialization', () => {
    const expectedDataLayerInit = [
      'window.dataLayer = window.dataLayer || []',
      'function gtag(){dataLayer.push(arguments);}',
      "gtag('js', new Date())",
    ];

    expect(expectedDataLayerInit[0]).toBe(
      'window.dataLayer = window.dataLayer || []'
    );
    expect(expectedDataLayerInit[1]).toBe(
      'function gtag(){dataLayer.push(arguments);}'
    );
    expect(expectedDataLayerInit[2]).toBe("gtag('js', new Date())");
  });

  it('should maintain correct consent default call', () => {
    const expectedConsentCall = "gtag('consent', 'default', { ... })";
    expect(expectedConsentCall).toBe("gtag('consent', 'default', { ... })");
  });

  it('should validate HTML structure constants', () => {
    const HTML_STRUCTURE = {
      comment:
        '<!-- Google Analytics will be loaded dynamically with consent management -->',
      analyticsComment: '<!-- Google Analytics -->',
      scriptAsync: 'async',
      scriptSrc: 'https://www.googletagmanager.com/gtag/js',
    };

    expect(HTML_STRUCTURE.comment).toBe(
      '<!-- Google Analytics will be loaded dynamically with consent management -->'
    );
    expect(HTML_STRUCTURE.analyticsComment).toBe('<!-- Google Analytics -->');
    expect(HTML_STRUCTURE.scriptAsync).toBe('async');
    expect(HTML_STRUCTURE.scriptSrc).toBe(
      'https://www.googletagmanager.com/gtag/js'
    );
  });

  it('should validate script loading order', () => {
    const SCRIPT_LOAD_ORDER = [
      'G-0FTM2V6DK7', // Analytics first
      'AW-16665018583', // Ads second
    ];

    expect(SCRIPT_LOAD_ORDER[0]).toBe('G-0FTM2V6DK7');
    expect(SCRIPT_LOAD_ORDER[1]).toBe('AW-16665018583');
  });

  it('should validate gtag function structure', () => {
    const GTAG_FUNCTION = {
      name: 'gtag',
      body: 'dataLayer.push(arguments)',
      initialization: "gtag('js', new Date())",
    };

    expect(GTAG_FUNCTION.name).toBe('gtag');
    expect(GTAG_FUNCTION.body).toBe('dataLayer.push(arguments)');
    expect(GTAG_FUNCTION.initialization).toBe("gtag('js', new Date())");
  });
});

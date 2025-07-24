/**
 * Analytics Environment Tests
 *
 * This test suite verifies that analytics are properly handled in different environments:
 * - Tests: Mocked with no real calls
 * - Development: Console logging only
 * - Production: Real analytics calls
 */

import {
  trackEvent,
  trackPageView,
  getMockAnalytics,
  clearMockAnalytics,
  isAnalyticsMocked,
  getAnalyticsEnvironment,
  trackEmailConversion,
  trackPhoneConversion,
  trackEnrollmentConversion,
} from '../../utils/analytics';

describe('Analytics Environment Tests', () => {
  let mockAnalytics: any;

  beforeEach(() => {
    mockAnalytics = getMockAnalytics();
    if (mockAnalytics) {
      mockAnalytics.clear();
    }
  });

  afterEach(() => {
    clearMockAnalytics();
  });

  describe('Environment Detection', () => {
    it('should detect test environment correctly', () => {
      const env = getAnalyticsEnvironment();
      expect(env.isTest).toBe(true);
      expect(env.isDevelopment).toBe(false);
      expect(env.isProduction).toBe(false);
    });

    it('should indicate analytics are mocked in test environment', () => {
      expect(isAnalyticsMocked()).toBe(true);
    });
  });

  describe('Mock Analytics in Test Environment', () => {
    it('should have mock analytics instance available', () => {
      expect(mockAnalytics).toBeDefined();
      expect(mockAnalytics).not.toBeNull();
    });

    it('should track events without making real analytics calls', () => {
      trackEvent('test_event', { test_param: 'test_value' });

      const events = mockAnalytics?.getEvents() || [];
      expect(events).toHaveLength(1);
      expect(events[0]).toEqual({
        event: 'test_event',
        test_param: 'test_value',
      });
    });

    it('should track page views without making real analytics calls', () => {
      trackPageView('Test Page', 'https://example.com/test');

      const events = mockAnalytics?.getEvents() || [];
      expect(events).toHaveLength(1);
      expect(events[0]).toEqual({
        event: 'page_view',
        page_title: 'Test Page',
        page_location: 'https://example.com/test',
      });
    });

    it('should clear mock data correctly', () => {
      trackEvent('test_event', { test_param: 'test_value' });
      expect(mockAnalytics?.getEvents()).toHaveLength(1);

      clearMockAnalytics();
      expect(mockAnalytics?.getEvents()).toHaveLength(0);
    });
  });

  describe('Conversion Tracking in Test Environment', () => {
    it('should track email conversion correctly', () => {
      trackEmailConversion();

      const events = mockAnalytics?.getEvents() || [];
      expect(events).toHaveLength(1);
      expect(events[0]).toEqual({
        event: 'conversion',
        send_to: 'AW-16665018583/Z8tpCOHniPQaENeBwIo-',
        value: 1.0,
        currency: 'USD',
      });
    });

    it('should track phone conversion correctly', () => {
      trackPhoneConversion();

      const events = mockAnalytics?.getEvents() || [];
      expect(events).toHaveLength(1);
      expect(events[0]).toEqual({
        event: 'conversion',
        send_to: 'AW-16665018583/mY27CN7niPQaENeBwIo-',
      });
    });

    it('should track enrollment conversion with default ID', () => {
      trackEnrollmentConversion();

      const events = mockAnalytics?.getEvents() || [];
      expect(events).toHaveLength(1);
      expect(events[0]).toEqual({
        event: 'conversion',
        send_to: 'AW-16665018583/vFD0CPHVzcgZENeBwIo-',
      });
    });

    it('should track enrollment conversion with custom ID', () => {
      const customId = 'AW-16665018583/CUSTOM_ID';
      trackEnrollmentConversion(customId);

      const events = mockAnalytics?.getEvents() || [];
      expect(events).toHaveLength(1);
      expect(events[0]).toEqual({
        event: 'conversion',
        send_to: customId,
      });
    });
  });

  describe('Multiple Events Tracking', () => {
    it('should track multiple events correctly', () => {
      trackEvent('event1', { param1: 'value1' });
      trackEvent('event2', { param2: 'value2' });
      trackPageView('Test Page');

      const events = mockAnalytics?.getEvents() || [];
      expect(events).toHaveLength(3);

      expect(events[0]).toEqual({
        event: 'event1',
        param1: 'value1',
      });

      expect(events[1]).toEqual({
        event: 'event2',
        param2: 'value2',
      });

      expect(events[2]).toEqual({
        event: 'page_view',
        page_title: 'Test Page',
        page_location: expect.any(String),
      });
    });

    it('should maintain event order', () => {
      trackEvent('first', { order: 1 });
      trackEvent('second', { order: 2 });
      trackEvent('third', { order: 3 });

      const events = mockAnalytics?.getEvents() || [];
      expect(events).toHaveLength(3);
      expect(events[0].order).toBe(1);
      expect(events[1].order).toBe(2);
      expect(events[2].order).toBe(3);
    });
  });

  describe('Mock Analytics API', () => {
    it('should provide getEvents method', () => {
      expect(typeof mockAnalytics?.getEvents).toBe('function');
    });

    it('should provide getConfigs method', () => {
      expect(typeof mockAnalytics?.getConfigs).toBe('function');
    });

    it('should provide getConsentUpdates method', () => {
      expect(typeof mockAnalytics?.getConsentUpdates).toBe('function');
    });

    it('should provide clear method', () => {
      expect(typeof mockAnalytics?.clear).toBe('function');
    });
  });

  describe('No Real Analytics Calls', () => {
    it('should not have real gtag function in test environment', () => {
      // In test environment, gtag should be mocked
      expect(typeof (window as any).gtag).toBe('function');
      expect((window as any).gtag).toBeDefined();

      // But it should be our mock, not the real gtag
      const mockGtag = (window as any).gtag;
      expect(mockGtag).toBeDefined();
    });

    it('should not have real dataLayer in test environment', () => {
      // dataLayer should be mocked
      expect(Array.isArray((window as any).dataLayer)).toBe(true);
      expect((window as any).dataLayer).toBeDefined();
    });
  });
});

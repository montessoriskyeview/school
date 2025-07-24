# Analytics Environment Setup

## Overview

This document explains the comprehensive analytics environment setup that ensures analytics are properly handled across different environments:

- **Tests**: Mocked with no real analytics calls
- **Development**: Console logging only (bypasses real analytics)
- **Production**: Real analytics calls

## 🎯 Key Benefits

### 1. **Test Environment Safety**
- ✅ No real analytics calls during testing
- ✅ Mocked analytics with full event tracking
- ✅ Easy verification of analytics behavior
- ✅ No impact on production analytics data

### 2. **Development Environment Clarity**
- ✅ Console logging shows what would be tracked
- ✅ No accidental analytics calls during development
- ✅ Clear visibility into analytics events
- ✅ Easy debugging of analytics logic

### 3. **Production Environment Reliability**
- ✅ Real analytics calls only in production
- ✅ Proper error handling for missing gtag
- ✅ Consistent analytics behavior
- ✅ No performance impact from mocking

## 🏗️ Architecture

### Environment Detection
```typescript
const isTestEnvironment = process.env.NODE_ENV === 'test';
const isDevelopmentEnvironment = process.env.NODE_ENV === 'development';
const isProductionEnvironment = process.env.NODE_ENV === 'production';
```

### Analytics Classes
- **`MockAnalytics`**: For test environment
- **`DevelopmentAnalytics`**: For development environment  
- **`ProductionAnalytics`**: For production environment

### Instance Selection
```typescript
let analyticsInstance: MockAnalytics | DevelopmentAnalytics | ProductionAnalytics;

if (isTestEnvironment) {
  analyticsInstance = new MockAnalytics();
} else if (isDevelopmentEnvironment) {
  analyticsInstance = new DevelopmentAnalytics();
} else if (isProductionEnvironment) {
  analyticsInstance = new ProductionAnalytics();
}
```

## 📁 Files Modified/Created

### New Files
- `src/utils/analytics.ts` - Main analytics utility
- `src/__tests__/utils/analytics-environment.test.ts` - Environment tests
- `docs/ANALYTICS_ENVIRONMENT_SETUP.md` - This documentation

### Modified Files
- `src/setupTests.ts` - Added comprehensive analytics mocking
- `src/utils/performance.ts` - Updated to use new analytics utility
- `src/__tests__/utils/conversion-tracking.test.ts` - Updated to use mock analytics
- `package.json` - Updated test scripts

## 🔧 Implementation Details

### 1. Jest Setup (`src/setupTests.ts`)

**Global Analytics Mocking**:
```typescript
// Mock gtag function globally
const mockGtag = jest.fn();
const mockDataLayer: any[] = [];

Object.defineProperty(window, 'gtag', {
  value: mockGtag,
  writable: true,
  configurable: true,
});

Object.defineProperty(window, 'dataLayer', {
  value: mockDataLayer,
  writable: true,
  configurable: true,
});
```

**Script Loading Prevention**:
```typescript
// Mock Google Analytics script loading
document.createElement = function(tagName: string) {
  const element = originalCreateElement.call(document, tagName);
  if (tagName.toLowerCase() === 'script') {
    const originalSetAttribute = element.setAttribute;
    element.setAttribute = function(name: string, value: string) {
      if (name === 'src' && value.includes('googletagmanager.com')) {
        console.log('[TEST] Mocked Google Analytics script loading:', value);
        return;
      }
      return originalSetAttribute.call(this, name, value);
    };
  }
  return element;
};
```

### 2. Analytics Utility (`src/utils/analytics.ts`)

**Mock Analytics Class**:
```typescript
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

  getEvents() {
    return [...this.events];
  }

  clear() {
    this.events = [];
    this.configs = [];
    this.consentUpdates = [];
  }
}
```

**Development Analytics Class**:
```typescript
class DevelopmentAnalytics {
  trackEvent(eventName: string, parameters?: Record<string, any>) {
    console.log('[DEV ANALYTICS] Event would be tracked:', {
      event: eventName,
      ...parameters,
    });
  }
}
```

**Production Analytics Class**:
```typescript
class ProductionAnalytics {
  trackEvent(eventName: string, parameters?: Record<string, any>) {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', eventName, parameters);
    } else {
      console.warn('[PROD ANALYTICS] gtag not available for event:', eventName);
    }
  }
}
```

### 3. Performance Integration (`src/utils/performance.ts`)

**Updated Web Vitals Tracking**:
```typescript
private reportMetric(name: string, value: number) {
  // Use the new analytics utility for Web Vitals tracking
  trackWebVitals(name, value);

  // Log to console in development
  if (process.env.NODE_ENV === 'development') {
    console.log(`Web Vital: ${name} = ${value}`);
  }
}
```

**Environment-Aware Script Loading**:
```typescript
private loadAnalyticsScript(measurementId: string): Promise<void> {
  return new Promise((resolve, reject) => {
    // In test or development environment, don't actually load scripts
    if (process.env.NODE_ENV === 'test' || process.env.NODE_ENV === 'development') {
      console.log(`[ANALYTICS] Would load script for measurement ID: ${measurementId}`);
      resolve();
      return;
    }
    // ... actual script loading for production
  });
}
```

## 🧪 Testing

### Running Analytics Tests
```bash
# Run all analytics tests (including environment tests)
npm run test:analytics

# Run analytics tests in watch mode
npm run test:analytics:watch

# Run specific environment tests
npm test -- --testPathPattern=analytics-environment
```

### Test Coverage
- **Environment Detection**: Verifies correct environment detection
- **Mock Analytics**: Tests mock analytics functionality
- **Conversion Tracking**: Tests conversion events in mock environment
- **Multiple Events**: Tests event ordering and tracking
- **API Verification**: Tests mock analytics API methods
- **No Real Calls**: Verifies no real analytics calls in tests

### Example Test Output
```
[ANALYTICS] Using mock analytics for test environment
[MOCK ANALYTICS] Event tracked: { event: 'conversion', send_to: 'AW-16665018583/Z8tpCOHniPQaENeBwIo-', value: 1, currency: 'USD' }
```

## 🚀 Usage Examples

### Basic Event Tracking
```typescript
import { trackEvent } from '../utils/analytics';

// In tests: Logs to mock analytics
// In development: Logs to console
// In production: Sends to real analytics
trackEvent('button_click', { button_id: 'enrollment' });
```

### Conversion Tracking
```typescript
import { trackEmailConversion, trackPhoneConversion } from '../utils/analytics';

// Email conversion
trackEmailConversion();

// Phone conversion  
trackPhoneConversion();
```

### Page View Tracking
```typescript
import { trackPageView } from '../utils/analytics';

trackPageView('Home Page', 'https://example.com/home');
```

### Testing Analytics
```typescript
import { getMockAnalytics, clearMockAnalytics } from '../utils/analytics';

describe('Analytics Tests', () => {
  let mockAnalytics: any;

  beforeEach(() => {
    mockAnalytics = getMockAnalytics();
    mockAnalytics?.clear();
  });

  it('should track conversion', () => {
    trackEmailConversion();
    
    const events = mockAnalytics?.getEvents() || [];
    expect(events).toHaveLength(1);
    expect(events[0].event).toBe('conversion');
  });
});
```

## 🔍 Environment-Specific Behavior

### Test Environment (`NODE_ENV=test`)
- **Analytics**: Mocked with full event tracking
- **Script Loading**: Prevented
- **Console Output**: `[MOCK ANALYTICS] Event tracked: ...`
- **Data Storage**: In-memory arrays
- **Error Handling**: Graceful fallbacks

### Development Environment (`NODE_ENV=development`)
- **Analytics**: Console logging only
- **Script Loading**: Prevented
- **Console Output**: `[DEV ANALYTICS] Event would be tracked: ...`
- **Data Storage**: None (just logging)
- **Error Handling**: Console warnings

### Production Environment (`NODE_ENV=production`)
- **Analytics**: Real gtag calls
- **Script Loading**: Normal
- **Console Output**: None (unless errors)
- **Data Storage**: Google Analytics
- **Error Handling**: Console warnings for missing gtag

## 🛡️ Safety Features

### 1. **No Real Calls in Tests**
- Global gtag mocking in Jest setup
- Script loading prevention
- Mock analytics instance

### 2. **No Real Calls in Development**
- Environment detection prevents real calls
- Console logging for visibility
- Script loading bypassed

### 3. **Graceful Fallbacks**
- Error handling for missing gtag
- Console warnings for debugging
- No crashes if analytics unavailable

### 4. **Type Safety**
- TypeScript interfaces for all analytics events
- Proper typing for mock analytics
- Type-safe conversion tracking

## 📊 Monitoring and Debugging

### Console Output Examples

**Test Environment**:
```
[ANALYTICS] Using mock analytics for test environment
[MOCK ANALYTICS] Event tracked: { event: 'conversion', send_to: 'AW-16665018583/Z8tpCOHniPQaENeBwIo-' }
```

**Development Environment**:
```
[ANALYTICS] Using development analytics (console logging)
[DEV ANALYTICS] Event would be tracked: { event: 'conversion', send_to: 'AW-16665018583/Z8tpCOHniPQaENeBwIo-' }
```

**Production Environment**:
```
[ANALYTICS] Using production analytics (real gtag)
[PROD ANALYTICS] gtag not available for event: conversion
```

### Debugging Tools

**Mock Analytics API**:
```typescript
const mockAnalytics = getMockAnalytics();
const events = mockAnalytics?.getEvents();
const configs = mockAnalytics?.getConfigs();
const consentUpdates = mockAnalytics?.getConsentUpdates();
```

**Environment Detection**:
```typescript
const env = getAnalyticsEnvironment();
console.log('Is test:', env.isTest);
console.log('Is development:', env.isDevelopment);
console.log('Is production:', env.isProduction);
```

## 🔄 Migration Guide

### From Old Analytics Setup

1. **Update Imports**:
   ```typescript
   // Old
   import { trackEvent } from '../utils/performance';
   
   // New
   import { trackEvent } from '../utils/analytics';
   ```

2. **Update Tests**:
   ```typescript
   // Old
   jest.mock('../utils/performance', () => ({
     trackEvent: jest.fn(),
   }));
   
   // New
   import { getMockAnalytics, clearMockAnalytics } from '../utils/analytics';
   ```

3. **Update Event Verification**:
   ```typescript
   // Old
   expect(mockTrackEvent).toHaveBeenCalledWith('conversion', {...});
   
   // New
   const events = mockAnalytics?.getEvents() || [];
   expect(events[0]).toEqual({ event: 'conversion', ... });
   ```

## ✅ Verification Checklist

- [ ] Tests run without real analytics calls
- [ ] Development shows console logging
- [ ] Production uses real analytics
- [ ] All conversion tracking works
- [ ] Web Vitals tracking works
- [ ] Consent management works
- [ ] Error handling works
- [ ] Type safety maintained
- [ ] Performance not impacted
- [ ] Documentation complete

## 🎉 Benefits Achieved

1. **Test Safety**: No accidental analytics calls during testing
2. **Development Clarity**: Clear visibility into analytics behavior
3. **Production Reliability**: Real analytics only when needed
4. **Easy Debugging**: Comprehensive logging and mocking
5. **Type Safety**: Full TypeScript support
6. **Performance**: No overhead in production
7. **Maintainability**: Clean separation of concerns
8. **Compliance**: Proper environment handling

The analytics setup now provides a robust, safe, and maintainable solution for handling analytics across all environments while ensuring no real analytics calls are made during testing or development. 
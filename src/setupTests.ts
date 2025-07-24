// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

// ============================================================================
// ANALYTICS MOCKING - Prevent real analytics calls during testing
// ============================================================================

// Mock gtag function globally
const mockGtag = jest.fn();
const mockDataLayer: any[] = [];

// Mock window.gtag and window.dataLayer
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

// Mock Google Analytics script loading
const originalCreateElement = document.createElement;
document.createElement = function(tagName: string) {
  const element = originalCreateElement.call(document, tagName);
  if (tagName.toLowerCase() === 'script') {
    // Mock script loading for Google Analytics
    const originalSetAttribute = element.setAttribute;
    element.setAttribute = function(name: string, value: string) {
      if (name === 'src' && value.includes('googletagmanager.com')) {
        // Prevent actual Google Analytics script loading
        console.log('[TEST] Mocked Google Analytics script loading:', value);
        return;
      }
      return originalSetAttribute.call(this, name, value);
    };
  }
  return element;
};

// Mock localStorage for consent management
const mockLocalStorage = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
  key: jest.fn(),
  length: 0,
};

Object.defineProperty(window, 'localStorage', {
  value: mockLocalStorage,
  writable: true,
});

// Mock sessionStorage
const mockSessionStorage = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
  key: jest.fn(),
  length: 0,
};

Object.defineProperty(window, 'sessionStorage', {
  value: mockSessionStorage,
  writable: true,
});

// Mock performance API for analytics
const mockPerformanceObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  disconnect: jest.fn(),
  takeRecords: jest.fn(() => []),
}));

Object.defineProperty(window, 'PerformanceObserver', {
  value: mockPerformanceObserver,
  writable: true,
});

// Mock IntersectionObserver for lazy loading
global.IntersectionObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));

// Mock ResizeObserver
global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));

// ============================================================================
// VIEWPORT AND STYLING MOCKS
// ============================================================================

// Mock viewport dimensions to prevent CSS NaN warnings
Object.defineProperty(window, 'innerWidth', {
  writable: true,
  configurable: true,
  value: 1024,
});

Object.defineProperty(window, 'innerHeight', {
  writable: true,
  configurable: true,
  value: 768,
});

Object.defineProperty(window, 'outerWidth', {
  writable: true,
  configurable: true,
  value: 1024,
});

Object.defineProperty(window, 'outerHeight', {
  writable: true,
  configurable: true,
  value: 768,
});

// Mock matchMedia to prevent Material-UI warnings
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

// Mock getComputedStyle to return proper values
Object.defineProperty(window, 'getComputedStyle', {
  value: () => ({
    getPropertyValue: (prop: string) => {
      switch (prop) {
        case 'width':
          return '100px';
        case 'height':
          return '100px';
        case 'transform':
          return 'none';
        default:
          return '';
      }
    },
  }),
});

// Mock requestAnimationFrame to prevent timing issues
global.requestAnimationFrame = jest.fn(callback => {
  setTimeout(callback, 0);
  return 1;
});

global.cancelAnimationFrame = jest.fn();

// Mock performance.now for consistent timing
Object.defineProperty(performance, 'now', {
  value: jest.fn(() => Date.now()),
});

// ============================================================================
// CONSOLE SUPPRESSION
// ============================================================================

// Suppress console warnings for known issues in tests
const originalWarn = console.warn;
const originalError = console.error;
const originalLog = console.log;

beforeAll(() => {
  console.warn = jest.fn((...args) => {
    // Suppress specific warnings that are expected in test environment
    const message = args[0];
    if (
      typeof message === 'string' &&
      (message.includes(
        'NaN is an invalid value for the width css style property'
      ) ||
        message.includes(
          'A suspended resource finished loading inside a test'
        ) ||
        (message.includes('An update to') &&
          message.includes('was not wrapped in act')) ||
        message.includes('[TEST] Mocked Google Analytics'))
    ) {
      return;
    }
    originalWarn(...args);
  });

  console.error = jest.fn((...args) => {
    // Suppress specific errors that are expected in test environment
    const message = args[0];
    if (
      typeof message === 'string' &&
      (message.includes(
        'NaN is an invalid value for the width css style property'
      ) ||
        message.includes(
          'A suspended resource finished loading inside a test'
        ) ||
        (message.includes('An update to') &&
          message.includes('was not wrapped in act')))
    ) {
      return;
    }
    originalError(...args);
  });

  console.log = jest.fn((...args) => {
    // Allow test-related logs but suppress others
    const message = args[0];
    if (
      typeof message === 'string' &&
      (message.includes('[TEST]') ||
        message.includes('Mocked Google Analytics'))
    ) {
      originalLog(...args);
      return;
    }
    // Suppress other console.log calls during tests
  });
});

afterAll(() => {
  console.warn = originalWarn;
  console.error = originalError;
  console.log = originalLog;
});

// ============================================================================
// CUSTOM MATCHERS
// ============================================================================

// Custom matchers for mobile testing
expect.extend({
  toHaveMobileTouchTarget(received) {
    const element = received;
    const rect = element.getBoundingClientRect();
    const minSize = 44; // WCAG 2.1 AA minimum touch target size
    
    const pass = rect.width >= minSize && rect.height >= minSize;
    
    if (pass) {
      return {
        message: () => `expected element to not have minimum touch target size of ${minSize}px`,
        pass: true,
      };
    } else {
      return {
        message: () => `expected element to have minimum touch target size of ${minSize}px, but got ${rect.width}x${rect.height}px`,
        pass: false,
      };
    }
  },
  
  toHaveMobileSpacing(received) {
    const element = received;
    const computedStyle = window.getComputedStyle(element);
    const padding = parseFloat(computedStyle.paddingTop) + parseFloat(computedStyle.paddingBottom);
    const margin = parseFloat(computedStyle.marginTop) + parseFloat(computedStyle.marginBottom);
    const totalSpacing = padding + margin;
    
    const minSpacing = 24; // Minimum spacing according to Apple-inspired design
    
    const pass = totalSpacing >= minSpacing;
    
    if (pass) {
      return {
        message: () => `expected element to not have minimum spacing of ${minSpacing}px`,
        pass: true,
      };
    } else {
      return {
        message: () => `expected element to have minimum spacing of ${minSpacing}px, but got ${totalSpacing}px`,
        pass: false,
      };
    }
  },
  
  toBeAccessible(received) {
    const element = received;
    const hasRole = element.getAttribute('role') || element.tagName.toLowerCase();
    const hasLabel = element.getAttribute('aria-label') || element.getAttribute('alt') || element.textContent;
    
    const pass = hasRole && hasLabel;
    
    if (pass) {
      return {
        message: () => `expected element to not be accessible`,
        pass: true,
      };
    } else {
      return {
        message: () => `expected element to be accessible (have role and label)`,
        pass: false,
      };
    }
  }
});

// Extend global types for custom matchers
declare global {
  namespace jest {
    interface Matchers<R> {
      toHaveMobileTouchTarget(): R;
      toHaveMobileSpacing(): R;
      toBeAccessible(): R;
    }
  }
}

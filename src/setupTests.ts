// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

// Mobile viewport setup for testing
Object.defineProperty(window, 'innerWidth', {
  writable: true,
  configurable: true,
  value: 375, // iPhone SE width
});

Object.defineProperty(window, 'innerHeight', {
  writable: true,
  configurable: true,
  value: 667, // iPhone SE height
});

// Mock matchMedia for mobile testing
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: query.includes('max-width: 768px') || query.includes('max-width: 480px'),
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

// Mock IntersectionObserver for mobile testing
(global as any).IntersectionObserver = class IntersectionObserver {
  observe() {
    return null;
  }
  disconnect() {
    return null;
  }
  unobserve() {
    return null;
  }
};

// Mock ResizeObserver for mobile testing
(global as any).ResizeObserver = class ResizeObserver {
  observe() {
    return null;
  }
  disconnect() {
    return null;
  }
  unobserve() {
    return null;
  }
};

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

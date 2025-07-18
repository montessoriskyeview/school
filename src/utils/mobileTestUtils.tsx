import React from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

// Mobile viewport configurations
export const MOBILE_VIEWPORTS = {
  iPhoneSE: { width: 375, height: 667 },
  iPhone12: { width: 390, height: 844 },
  iPhone12ProMax: { width: 428, height: 926 },
  SamsungGalaxyS20: { width: 360, height: 800 },
  iPad: { width: 768, height: 1024 },
};

// Set mobile viewport for testing
export const setMobileViewport = (
  viewport: keyof typeof MOBILE_VIEWPORTS = 'iPhoneSE'
) => {
  const { width, height } = MOBILE_VIEWPORTS[viewport];

  Object.defineProperty(window, 'innerWidth', {
    writable: true,
    configurable: true,
    value: width,
  });

  Object.defineProperty(window, 'innerHeight', {
    writable: true,
    configurable: true,
    value: height,
  });

  // Trigger resize event
  window.dispatchEvent(new Event('resize'));
};

// Custom render function with mobile context
const AllTheProviders: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <BrowserRouter>{children}</BrowserRouter>;
};

const customRender = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: AllTheProviders, ...options });

// Mobile-specific test helpers
export const mobileTestUtils = {
  // Test touch target size
  expectTouchTarget: (element: HTMLElement, minSize = 44) => {
    const rect = element.getBoundingClientRect();
    expect(rect.width).toBeGreaterThanOrEqual(minSize);
    expect(rect.height).toBeGreaterThanOrEqual(minSize);
  },

  // Test mobile spacing
  expectMobileSpacing: (element: HTMLElement, minSpacing = 24) => {
    const computedStyle = window.getComputedStyle(element);
    const padding =
      parseFloat(computedStyle.paddingTop) +
      parseFloat(computedStyle.paddingBottom);
    const margin =
      parseFloat(computedStyle.marginTop) +
      parseFloat(computedStyle.marginBottom);
    const totalSpacing = padding + margin;
    expect(totalSpacing).toBeGreaterThanOrEqual(minSpacing);
  },

  // Test mobile accessibility
  expectMobileAccessibility: (element: HTMLElement) => {
    const hasRole =
      element.getAttribute('role') || element.tagName.toLowerCase();
    const hasLabel =
      element.getAttribute('aria-label') ||
      element.getAttribute('alt') ||
      element.textContent?.trim();

    expect(hasRole).toBeTruthy();
    expect(hasLabel).toBeTruthy();
  },

  // Test mobile responsive behavior
  expectMobileResponsive: (element: HTMLElement) => {
    const computedStyle = window.getComputedStyle(element);
    const fontSize = parseFloat(computedStyle.fontSize);
    const lineHeight = parseFloat(computedStyle.lineHeight);

    // Check minimum font size for mobile
    expect(fontSize).toBeGreaterThanOrEqual(16);

    // Check minimum line height for readability
    expect(lineHeight).toBeGreaterThanOrEqual(1.4);
  },

  // Test mobile navigation
  expectMobileNavigation: (element: HTMLElement) => {
    const isClickable =
      element.tagName === 'BUTTON' ||
      element.tagName === 'A' ||
      element.getAttribute('role') === 'button' ||
      element.onclick !== null;

    expect(isClickable).toBe(true);
  },
};

// Export custom render
export { customRender as render };

// Re-export everything from testing library
export * from '@testing-library/react';

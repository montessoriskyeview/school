# Mobile Testing Suite

This document outlines the comprehensive mobile testing setup for the Montessori Skye View Learning Center website.

## Overview

Since all traffic comes from mobile devices, we have implemented a comprehensive mobile-focused testing suite that ensures consistent user experience across all mobile devices.

## Test Structure

### Mobile Test Files
- `src/__tests__/App.mobile.test.tsx` - Main App component mobile tests
- `src/__tests__/MobileHeroCTA.mobile.test.tsx` - Mobile CTA component tests
- `src/__tests__/Home.mobile.test.tsx` - Home page component tests

### Test Utilities
- `src/utils/mobileTestUtils.tsx` - Mobile-specific testing utilities
- `src/setupTests.ts` - Enhanced setup with mobile mocks and custom matchers

## Mobile Viewport Configurations

The test suite supports multiple mobile viewport configurations:

```typescript
const MOBILE_VIEWPORTS = {
  iPhoneSE: { width: 375, height: 667 },
  iPhone12: { width: 390, height: 844 },
  iPhone12ProMax: { width: 428, height: 926 },
  SamsungGalaxyS20: { width: 360, height: 800 },
  iPad: { width: 768, height: 1024 },
};
```

## Custom Matchers

### `toHaveMobileTouchTarget()`
Ensures elements meet WCAG 2.1 AA minimum touch target size (44px × 44px).

```typescript
expect(button).toHaveMobileTouchTarget();
```

### `toHaveMobileSpacing()`
Verifies elements have proper mobile spacing according to Apple-inspired design principles (minimum 24px).

```typescript
expect(container).toHaveMobileSpacing();
```

### `toBeAccessible()`
Checks that elements have proper ARIA labels and roles for screen readers.

```typescript
expect(element).toBeAccessible();
```

## Test Categories

### 1. Mobile Layout and Responsiveness
- Viewport compatibility
- Responsive design
- Mobile spacing
- Snapshot testing

### 2. Mobile Touch Interactions
- Touch target sizes
- Touch event handling
- Gesture support
- Interactive element testing

### 3. Mobile Content Readability
- Font sizes (minimum 16px)
- Line height (minimum 1.4)
- Text contrast
- Content hierarchy

### 4. Mobile Accessibility
- ARIA labels and roles
- Screen reader compatibility
- Keyboard navigation
- Focus management

### 5. Mobile Performance
- Render time optimization
- Interaction responsiveness
- Memory usage
- Error handling

### 6. Mobile Responsive Behavior
- Cross-device compatibility
- Orientation changes
- Safe area handling
- Device-specific features

## Running Tests

### All Mobile Tests
```bash
npm run test:mobile
```

### Mobile Tests with Coverage
```bash
npm run test:mobile:coverage
```

### Watch Mode
```bash
npm run test:mobile:watch
```

### Pre-commit Hook
Tests run automatically on every commit via Husky and lint-staged.

## Pre-commit Hook

The pre-commit hook ensures:
1. ESLint fixes are applied
2. All mobile tests pass
3. Code quality standards are maintained

### Configuration
```json
{
  "lint-staged": {
    "src/**/*.{ts,tsx}": [
      "eslint --fix",
      "node scripts/run-mobile-tests.js"
    ]
  }
}
```

## Mobile Testing Guidelines

### 1. Touch Target Requirements
- Minimum size: 44px × 44px
- Adequate spacing between targets
- Visual feedback on touch

### 2. Typography Standards
- Body text: Minimum 16px
- Line height: Minimum 1.4
- Contrast ratio: 4.5:1 minimum

### 3. Spacing Principles
- Component padding: 48px minimum
- Section spacing: 64px between major sections
- Element spacing: 24px between related elements

### 4. Accessibility Requirements
- ARIA labels for all interactive elements
- Semantic HTML structure
- Keyboard navigation support
- Screen reader compatibility

### 5. Performance Standards
- Initial render: < 100ms
- Interaction response: < 30ms
- No console errors
- Smooth animations

## Writing Mobile Tests

### Basic Test Structure
```typescript
import React from 'react';
import { render, screen, fireEvent, waitFor } from '../utils/mobileTestUtils';
import { setMobileViewport, mobileTestUtils } from '../utils/mobileTestUtils';

describe('Component Mobile Experience', () => {
  beforeEach(() => {
    setMobileViewport('iPhoneSE');
  });

  test('renders correctly on mobile', () => {
    render(<Component />);
    expect(screen.getByRole('main')).toBeInTheDocument();
  });
});
```

### Testing Touch Interactions
```typescript
test('touch events work properly', async () => {
  render(<Component />);
  const button = screen.getByRole('button');
  
  fireEvent.touchStart(button);
  fireEvent.touchEnd(button);
  
  await waitFor(() => {
    expect(button).toHaveAttribute('aria-expanded', 'true');
  });
});
```

### Testing Accessibility
```typescript
test('component is accessible', () => {
  render(<Component />);
  const element = screen.getByRole('button');
  expect(element).toBeAccessible();
});
```

### Snapshot Testing
```typescript
test('snapshot matches mobile layout', () => {
  const { container } = render(<Component />);
  expect(container).toMatchSnapshot();
});
```

## Coverage Requirements

- **Branches**: 70%
- **Functions**: 70%
- **Lines**: 70%
- **Statements**: 70%

## Continuous Integration

The mobile test suite is integrated into the CI/CD pipeline to ensure:
- All tests pass before deployment
- Coverage requirements are met
- Mobile experience remains consistent

## Troubleshooting

### Common Issues

1. **Touch target size failures**
   - Ensure buttons have minimum 44px dimensions
   - Check padding and margins

2. **Spacing failures**
   - Verify minimum 24px spacing
   - Check CSS variables and theme

3. **Accessibility failures**
   - Add proper ARIA labels
   - Ensure semantic HTML structure

4. **Performance failures**
   - Optimize render times
   - Reduce bundle size
   - Implement lazy loading

### Debug Commands
```bash
# Run specific test file
npm test -- --testPathPattern=MobileHeroCTA.mobile.test.tsx

# Run with verbose output
npm test -- --verbose

# Run with coverage report
npm run test:mobile:coverage
```

## Best Practices

1. **Test on multiple viewports** - Use different mobile configurations
2. **Focus on user interactions** - Test touch, scroll, and gesture events
3. **Verify accessibility** - Ensure screen reader compatibility
4. **Check performance** - Monitor render times and memory usage
5. **Maintain snapshots** - Update snapshots when UI changes
6. **Test error states** - Verify graceful error handling
7. **Validate content** - Ensure correct text and links

## Future Enhancements

- [ ] Add visual regression testing
- [ ] Implement device-specific testing
- [ ] Add network condition testing
- [ ] Integrate with real device testing
- [ ] Add performance benchmarking
- [ ] Implement automated accessibility testing 
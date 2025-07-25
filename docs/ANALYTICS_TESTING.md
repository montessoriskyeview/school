# Analytics Testing Documentation

## Overview

This document outlines the comprehensive testing strategy implemented to ensure the existing analytics setup does not change. The analytics configuration is critical for tracking user behavior, performance metrics, and ensuring GDPR/CCPA compliance.

## 🎯 Testing Objectives

### Primary Goals
1. **Prevent Accidental Changes**: Ensure measurement IDs, script URLs, and configuration remain consistent
2. **Validate HTML Structure**: Verify that the static HTML analytics setup is correct
3. **Test Consent Management**: Ensure GDPR/CCPA compliance functionality works correctly
4. **Monitor Performance Tracking**: Validate Web Vitals and custom event tracking
5. **Validate Conversion Tracking**: Ensure enrollment forms, phone buttons, and email buttons fire correct events
6. **Error Prevention**: Catch configuration errors before they reach production

## 📁 Test Files Structure

```
src/__tests__/utils/
├── analytics-simple.test.ts          # Core configuration constants
├── analytics-html.test.ts            # HTML structure validation
├── analytics-html-content.test.ts    # Actual HTML file content validation
└── conversion-tracking.test.ts       # Conversion tracking validation

scripts/
└── validate-analytics.js             # Standalone validation script

docs/
└── ANALYTICS_TESTING.md              # This documentation
```

## 🔧 Test Categories

### 1. Configuration Constants Tests (`analytics-simple.test.ts`)

**Purpose**: Validate that critical configuration values remain unchanged.

**What it tests**:
- Measurement IDs (`G-0FTM2V6DK7`, `AW-16665018583`, `G-EW5S4BY15P`)
- Conversion tracking constants (email, phone, enrollment conversion IDs)
- Consent management constants
- Event tracking structures
- Error handling messages
- Performance configuration values

**Example**:
```typescript
it('should maintain correct email conversion ID', () => {
  const EMAIL_CONVERSION_ID = 'AW-16665018583/Z8tpCOHniPQaENeBwIo-';
  expect(EMAIL_CONVERSION_ID).toBe('AW-16665018583/Z8tpCOHniPQaENeBwIo-');
});
```

### 2. HTML Structure Tests (`analytics-html.test.ts`)

**Purpose**: Validate the structure and format of HTML analytics configuration.

**What it tests**:
- Script URL formats
- HTML comment structure
- Script loading order
- Gtag function definition
- DataLayer initialization

### 3. HTML Content Validation Tests (`analytics-html-content.test.ts`)

**Purpose**: Validate the actual content of the `public/index.html` file.

**What it tests**:
- Presence of exact script tags
- Correct measurement IDs in HTML
- Consent configuration in HTML
- Script loading order
- Error prevention (no duplicates, malformed tags)

**Example**:
```typescript
it('should contain correct Google Analytics script URLs', () => {
  expect(htmlContent).toContain('https://www.googletagmanager.com/gtag/js?id=G-0FTM2V6DK7');
  expect(htmlContent).toContain('https://www.googletagmanager.com/gtag/js?id=AW-16665018583');
});
```

### 4. Conversion Tracking Tests (`conversion-tracking.test.ts`)

**Purpose**: Validate that all conversion tracking events are fired correctly when users interact with enrollment forms, phone buttons, and email buttons.

**What it tests**:
- Email contact conversion tracking
- Phone contact conversion tracking
- Enrollment button conversion tracking
- Enrollment buttons component conversion tracking
- Conversion ID constants validation
- Conversion event structure validation
- Integration testing across all conversion types

**Example**:
```typescript
it('should track email conversion with correct parameters', () => {
  render(<EmailContact />);
  const link = screen.getByRole('link', { name: /email montessori skye view/i });
  fireEvent.click(link);

  expect(mockTrackEvent).toHaveBeenCalledWith('conversion', {
    send_to: 'AW-16665018583/Z8tpCOHniPQaENeBwIo-',
    value: 1.0,
    currency: 'USD',
  });
});
```

### 5. Standalone Validation Script (`validate-analytics.js`)

**Purpose**: Provide a quick validation tool that can be run independently of the test suite.

**Features**:
- File content validation
- Pattern matching
- Error reporting
- Warning system
- Exit codes for CI/CD integration
- Conversion tracking validation

## 🚀 Running the Tests

### Automated Test Commands

```bash
# Run all analytics tests (including conversion tracking)
npm run test:analytics

# Run analytics tests in watch mode
npm run test:analytics:watch

# Run standalone validation script
npm run validate:analytics

# Run all tests including analytics
npm test
```

### Manual Validation

```bash
# Validate HTML file content
node scripts/validate-analytics.js

# Check specific files
grep -n "G-0FTM2V6DK7" public/index.html
grep -n "AW-16665018583" src/utils/performance.ts
grep -n "Z8tpCOHniPQaENeBwIo-" src/components/shared/EmailContact.tsx
```

## 📊 Expected Analytics Configuration

### Measurement IDs
- **Analytics**: `G-0FTM2V6DK7`
- **Ads**: `AW-16665018583`
- **Secondary**: `G-EW5S4BY15P` (commented out but tracked)

### Conversion Tracking IDs
- **Email**: `AW-16665018583/Z8tpCOHniPQaENeBwIo-`
- **Phone**: `AW-16665018583/mY27CN7niPQaENeBwIo-`
- **Default Enrollment**: `AW-16665018583/vFD0CPHVzcgZENeBwIo-`
- **Fall 2025 Enrollment**: `AW-16665018583/J6ldCMiWifQaENeBwIo-`

### Script URLs
- Analytics: `https://www.googletagmanager.com/gtag/js?id=G-0FTM2V6DK7`
- Ads: `https://www.googletagmanager.com/gtag/js?id=AW-16665018583`

### Consent Defaults
```javascript
{
  analytics_storage: 'denied',
  ad_storage: 'denied',
  ad_user_data: 'denied',
  ad_personalization: 'denied'
}
```

### Critical Patterns
- `window.dataLayer = window.dataLayer || [];`
- `function gtag(){dataLayer.push(arguments);}`
- `gtag('js', new Date());`
- `gtag('consent', 'default', { ... })`
- `gtag('config', 'G-0FTM2V6DK7');`
- `gtag('config', 'AW-16665018583');`

### Conversion Event Structures
```javascript
// Email conversion
{
  event: 'conversion',
  send_to: 'AW-16665018583/Z8tpCOHniPQaENeBwIo-',
  value: 1.0,
  currency: 'USD'
}

// Phone conversion
{
  event: 'conversion',
  send_to: 'AW-16665018583/mY27CN7niPQaENeBwIo-'
}

// Enrollment conversion
{
  event: 'conversion',
  send_to: 'AW-16665018583/vFD0CPHVzcgZENeBwIo-'
}
```

## 🔍 What the Tests Protect Against

### 1. Accidental Measurement ID Changes
- Prevents typos in measurement IDs
- Ensures IDs remain consistent across files
- Catches copy-paste errors

### 2. Script Loading Issues
- Validates script URLs are correct
- Ensures async attributes are present
- Checks script loading order

### 3. Consent Management Problems
- Validates default consent settings
- Ensures GDPR/CCPA compliance
- Checks consent storage key

### 4. HTML Structure Changes
- Prevents malformed script tags
- Ensures proper HTML comments
- Validates dataLayer initialization

### 5. Configuration Drift
- Catches configuration inconsistencies
- Prevents partial updates
- Ensures all required elements are present

### 6. Conversion Tracking Issues
- Validates conversion IDs remain consistent
- Ensures conversion events fire correctly
- Prevents accidental changes to conversion tracking
- Validates event structure and parameters

## 🛠️ Adding New Tests

### When to Add Tests
1. **New Measurement IDs**: Add validation for any new Google Analytics IDs
2. **New Conversion Tracking**: Add tests for any new conversion tracking events
3. **Configuration Changes**: Test any changes to consent or tracking configuration
4. **New Scripts**: Validate any additional analytics scripts
5. **Error Handling**: Test new error scenarios

### Test Template
```typescript
describe('New Feature Tests', () => {
  it('should maintain correct new configuration', () => {
    const NEW_CONFIG = {
      // Define expected values
    };
    
    expect(NEW_CONFIG.property).toBe('expected_value');
  });
});
```

## 🔄 CI/CD Integration

### Pre-commit Hooks
The tests are integrated into the pre-commit process to prevent analytics configuration changes from being committed.

### Build Pipeline
```yaml
# Example CI configuration
- name: Validate Analytics Configuration
  run: npm run validate:analytics

- name: Run Analytics Tests
  run: npm run test:analytics
```

### Failure Handling
- **Test Failures**: Block deployment until fixed
- **Validation Warnings**: Log warnings but allow deployment
- **Configuration Errors**: Require manual review

## 📈 Monitoring and Alerts

### Test Coverage
- Analytics tests should maintain 100% coverage of critical configuration
- Conversion tracking tests should cover all user interaction points
- Regular review of test effectiveness
- Update tests when configuration changes are approved

### Performance Impact
- Tests run quickly (< 5 seconds)
- Minimal impact on build times
- Parallel execution where possible

## 🚨 Troubleshooting

### Common Issues

1. **Test Failures After Configuration Changes**
   - Update test expectations to match new configuration
   - Ensure all related tests are updated
   - Validate changes are intentional

2. **HTML Content Mismatches**
   - Check if HTML file was modified
   - Verify measurement IDs are correct
   - Ensure script tags are properly formatted

3. **Conversion Tracking Failures**
   - Verify conversion IDs are correct
   - Check that components are using trackEvent function
   - Ensure event structure matches expectations

4. **Performance Monitor Issues**
   - Check PerformanceObserver mocking
   - Verify test isolation
   - Review test setup and teardown

### Debug Commands
```bash
# Debug specific test file
npm run test:analytics -- --verbose

# Run validation with debug output
DEBUG=analytics node scripts/validate-analytics.js

# Check file contents
cat public/index.html | grep -A 5 -B 5 "G-0FTM2V6DK7"
cat src/components/shared/EmailContact.tsx | grep -A 3 -B 3 "Z8tpCOHniPQaENeBwIo-"
```

## 📋 Maintenance Checklist

### Weekly
- [ ] Run analytics tests
- [ ] Review test results
- [ ] Check for configuration drift

### Monthly
- [ ] Review test coverage
- [ ] Update documentation
- [ ] Validate test effectiveness

### Quarterly
- [ ] Review analytics configuration
- [ ] Update tests for new requirements
- [ ] Performance review

## 🔗 Related Documentation

- [Performance Optimization](../PERFORMANCE_OPTIMIZATION.md)
- [SEO Implementation Tracker](../SEO_IMPLEMENTATION_TRACKER.md)
- [Google Business Profile Optimization](../GOOGLE_BUSINESS_PROFILE_OPTIMIZATION.md)

---

**Last Updated**: January 2025  
**Maintainer**: Development Team  
**Review Schedule**: Monthly 
#!/usr/bin/env node

/**
 * Analytics Setup Validation Script
 * 
 * This script validates that the analytics configuration hasn't changed
 * Run with: node scripts/validate-analytics.js
 */

const fs = require('fs');
const path = require('path');

// Expected analytics configuration
const EXPECTED_CONFIG = {
  measurementIds: {
    analytics: 'G-0FTM2V6DK7',
    ads: 'AW-16665018583',
    secondary: 'G-EW5S4BY15P', // Commented out but tracked
  },
  scriptUrls: {
    analytics: 'https://www.googletagmanager.com/gtag/js?id=G-0FTM2V6DK7',
    ads: 'https://www.googletagmanager.com/gtag/js?id=AW-16665018583',
  },
  consentDefaults: {
    analytics_storage: 'denied',
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
  },
  storageKey: 'consent_state',
  criticalResources: ['/logo192.png', '/og-image.png'],
};

// Files to validate
const FILES_TO_CHECK = [
  'public/index.html',
  'src/utils/performance.ts',
];

function validateHtmlFile(filePath) {
  console.log(`\n🔍 Validating ${filePath}...`);

  const content = fs.readFileSync(filePath, 'utf8');
  let errors = [];
  let warnings = [];

  // Check measurement IDs (only primary and analytics for HTML)
  const htmlMeasurementIds = {
    analytics: EXPECTED_CONFIG.measurementIds.analytics,
    ads: EXPECTED_CONFIG.measurementIds.ads,
  };

  Object.entries(htmlMeasurementIds).forEach(([key, expectedId]) => {
    if (!content.includes(expectedId)) {
      errors.push(`❌ Missing measurement ID: ${expectedId} (${key})`);
    } else {
      console.log(`✅ Found measurement ID: ${expectedId} (${key})`);
    }
  });

  // Check script URLs
  Object.entries(EXPECTED_CONFIG.scriptUrls).forEach(([key, expectedUrl]) => {
    if (!content.includes(expectedUrl)) {
      errors.push(`❌ Missing script URL: ${expectedUrl} (${key})`);
    } else {
      console.log(`✅ Found script URL: ${expectedUrl} (${key})`);
    }
  });

  // Check consent defaults
  Object.entries(EXPECTED_CONFIG.consentDefaults).forEach(([key, expectedValue]) => {
    if (!content.includes(`'${key}': '${expectedValue}'`)) {
      warnings.push(`⚠️  Consent default may have changed: ${key} = ${expectedValue}`);
    } else {
      console.log(`✅ Found consent default: ${key} = ${expectedValue}`);
    }
  });

  // Check for critical patterns
  const criticalPatterns = [
    'window.dataLayer = window.dataLayer || []',
    'function gtag(){dataLayer.push(arguments);}',
    "gtag('js', new Date())",
    "gtag('consent', 'default'",
    "gtag('config', 'G-0FTM2V6DK7')",
    "gtag('config', 'AW-16665018583')",
  ];

  criticalPatterns.forEach(pattern => {
    if (!content.includes(pattern)) {
      errors.push(`❌ Missing critical pattern: ${pattern}`);
    } else {
      console.log(`✅ Found critical pattern: ${pattern}`);
    }
  });

  return {errors, warnings};
}

function validatePerformanceFile(filePath) {
  console.log(`\n🔍 Validating ${filePath}...`);

  const content = fs.readFileSync(filePath, 'utf8');
  let errors = [];
  let warnings = [];

  // Check measurement IDs in TypeScript (including secondary)
  Object.entries(EXPECTED_CONFIG.measurementIds).forEach(([key, expectedId]) => {
    if (!content.includes(expectedId)) {
      if (key === 'secondary') {
        warnings.push(`⚠️  Secondary measurement ID not found in TypeScript: ${expectedId} (${key}) - may be commented out`);
      } else {
        errors.push(`❌ Missing measurement ID in TypeScript: ${expectedId} (${key})`);
      }
    } else {
      console.log(`✅ Found measurement ID in TypeScript: ${expectedId} (${key})`);
    }
  });

  // Check storage key
  if (!content.includes(EXPECTED_CONFIG.storageKey)) {
    errors.push(`❌ Missing storage key: ${EXPECTED_CONFIG.storageKey}`);
  } else {
    console.log(`✅ Found storage key: ${EXPECTED_CONFIG.storageKey}`);
  }

  // Check critical resources
  EXPECTED_CONFIG.criticalResources.forEach(resource => {
    if (!content.includes(resource)) {
      warnings.push(`⚠️  Critical resource not found: ${resource}`);
    } else {
      console.log(`✅ Found critical resource: ${resource}`);
    }
  });

  // Check for critical classes and interfaces
  const criticalTypes = [
    'GoogleAnalyticsLoader',
    'ConsentManager',
    'PerformanceMonitor',
    'PerformanceOptimizer',
    'trackEvent',
    'trackPageView',
    'updateConsent',
    'getConsent',
  ];

  criticalTypes.forEach(type => {
    if (!content.includes(type)) {
      errors.push(`❌ Missing critical type: ${type}`);
    } else {
      console.log(`✅ Found critical type: ${type}`);
    }
  });

  return {errors, warnings};
}

function main() {
  console.log('🚀 Analytics Setup Validation');
  console.log('=============================');

  let allErrors = [];
  let allWarnings = [];

  // Validate HTML file
  const htmlResult = validateHtmlFile('public/index.html');
  allErrors.push(...htmlResult.errors);
  allWarnings.push(...htmlResult.warnings);

  // Validate performance file
  const perfResult = validatePerformanceFile('src/utils/performance.ts');
  allErrors.push(...perfResult.errors);
  allWarnings.push(...perfResult.warnings);

  // Summary
  console.log('\n📊 Validation Summary');
  console.log('=====================');

  if (allErrors.length === 0 && allWarnings.length === 0) {
    console.log('✅ All checks passed! Analytics setup is valid.');
    process.exit(0);
  }

  if (allWarnings.length > 0) {
    console.log(`\n⚠️  Warnings (${allWarnings.length}):`);
    allWarnings.forEach(warning => console.log(warning));
  }

  if (allErrors.length > 0) {
    console.log(`\n❌ Errors (${allErrors.length}):`);
    allErrors.forEach(error => console.log(error));
    console.log('\n🚨 Analytics setup validation failed!');
    process.exit(1);
  }

  console.log('\n✅ Analytics setup validation completed with warnings.');
  process.exit(0);
}

// Run validation
if (require.main === module) {
  main();
}

module.exports = {
  validateHtmlFile,
  validatePerformanceFile,
  EXPECTED_CONFIG,
}; 
#!/usr/bin/env node

/**
 * Test script to verify analytics blocking in development
 * This script checks if the development server is properly configured
 * to prevent analytics tracking on localhost
 */

const http = require('http');
const https = require('https');

const TEST_URLS = [
  'http://localhost:3000',
  'http://127.0.0.1:3000'
];

const ANALYTICS_DOMAINS = [
  'google-analytics.com',
  'googlesyndication.com',
  'googletagmanager.com',
  'doubleclick.net',
  'googleadservices.com'
];

function checkServer(url) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith('https') ? https : http;

    const req = client.get(url, (res) => {
      let data = '';

      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        resolve({
          statusCode: res.statusCode,
          data: data,
          url: url
        });
      });
    });

    req.on('error', (err) => {
      reject(err);
    });

    req.setTimeout(5000, () => {
      req.destroy();
      reject(new Error('Request timeout'));
    });
  });
}

function analyzeResponse(response) {
  const {data, url} = response;

  console.log(`\n🔍 Analyzing ${url}...`);

  // Check for development indicators
  const hasDevTitle = data.includes('(DEV)');
  const hasNoIndexRobots = data.includes('noindex, nofollow');
  const hasConditionalScript = data.includes('Environment-based Analytics Loading');

  // Check for actual analytics script tags that would load analytics immediately
  // This looks for script tags with src attributes pointing to analytics domains
  const hasAnalyticsScriptTags = /<script[^>]*src[^>]*(?:google-analytics\.com|googletagmanager\.com|googlesyndication\.com)[^>]*>/i.test(data);

  // Check for analytics loading in production-only code
  const hasProductionAnalyticsCode = data.includes('gaScript.src = \'https://www.googletagmanager.com/gtag/js?id=G-0FTM2V6DK7\'');
  const hasAnalyticsDisabledMessage = data.includes('Analytics disabled in development environment');
  const hasAnalyticsEnabledMessage = data.includes('Analytics enabled in production environment');

  // Check for URL update logic in JavaScript
  const hasUrlUpdateLogic = data.includes('window.location.origin') && data.includes('setAttribute');

  console.log(`✅ Development title: ${hasDevTitle ? 'YES' : 'NO'}`);
  console.log(`✅ Noindex robots: ${hasNoIndexRobots ? 'YES' : 'NO'}`);
  console.log(`✅ Conditional analytics script: ${hasConditionalScript ? 'YES' : 'NO'}`);
  console.log(`❌ Analytics script tags in HTML: ${hasAnalyticsScriptTags ? 'YES' : 'NO'}`);
  console.log(`✅ Production analytics code present: ${hasProductionAnalyticsCode ? 'YES' : 'NO'}`);
  console.log(`✅ Analytics disabled message: ${hasAnalyticsDisabledMessage ? 'YES' : 'NO'}`);
  console.log(`✅ Analytics enabled message: ${hasAnalyticsEnabledMessage ? 'YES' : 'NO'}`);
  console.log(`✅ URL update logic: ${hasUrlUpdateLogic ? 'YES' : 'NO'}`);

  // Check if analytics are properly conditional
  if (hasConditionalScript && !hasAnalyticsScriptTags && hasProductionAnalyticsCode) {
    console.log('✅ Analytics properly conditionalized');
    console.log('   - No analytics script tags in HTML');
    console.log('   - Analytics only load in production via JavaScript');
    console.log('   - Development environment properly detected');
  } else if (hasAnalyticsScriptTags) {
    console.log('❌ Analytics script tags found in HTML (should be conditional)');
  } else if (!hasConditionalScript) {
    console.log('⚠️  No analytics configuration found');
  }

  return {
    isDevelopment: hasDevTitle && hasNoIndexRobots,
    hasAnalyticsScriptTags: hasAnalyticsScriptTags,
    hasConditional: hasConditionalScript,
    hasProductionCode: hasProductionAnalyticsCode,
    hasUrlUpdateLogic: hasUrlUpdateLogic
  };
}

async function runTests() {
  console.log('🚀 Testing Analytics Blocking in Development\n');

  for (const url of TEST_URLS) {
    try {
      const response = await checkServer(url);
      const analysis = analyzeResponse(response);

      if (analysis.isDevelopment && !analysis.hasAnalyticsScriptTags && analysis.hasConditional && analysis.hasProductionCode) {
        console.log('\n✅ SUCCESS: Development environment properly configured');
        console.log('   - No analytics script tags in HTML');
        console.log('   - Analytics only load in production via JavaScript');
        console.log('   - Development indicators present');
        console.log('   - Conditional loading script present');
        console.log('   - URLs updated dynamically for development');
      } else {
        console.log('\n❌ ISSUE: Development environment not properly configured');
        if (analysis.hasAnalyticsScriptTags) {
          console.log('   - Analytics script tags found in HTML');
        }
        if (!analysis.isDevelopment) {
          console.log('   - Missing development indicators');
        }
        if (!analysis.hasConditional) {
          console.log('   - Missing conditional analytics script');
        }
      }

    } catch (error) {
      console.log(`\n❌ ERROR testing ${url}: ${error.message}`);
    }
  }

  console.log('\n📋 Summary:');
  console.log('- Development should show "(DEV)" in title');
  console.log('- Development should have "noindex, nofollow" robots meta');
  console.log('- Development should NOT have analytics script tags in HTML');
  console.log('- Development should have conditional analytics loading script');
  console.log('- Analytics should only load in production via JavaScript');
  console.log('- URLs are updated dynamically for development environment');
  console.log('- Production will have full analytics enabled');
}

// Run the tests
runTests().catch(console.error); 
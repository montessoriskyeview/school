/**
 * Tests for actual HTML file content validation
 * This ensures the conditional analytics setup works correctly
 */

import fs from 'fs';
import path from 'path';

describe('HTML File Content Validation Tests', () => {
  let htmlContent: string;

  beforeAll(() => {
    // Read the actual HTML file
    const htmlPath = path.join(process.cwd(), 'public', 'index.html');
    htmlContent = fs.readFileSync(htmlPath, 'utf8');
  });

  describe('Environment Detection', () => {
    it('should contain environment detection logic', () => {
      expect(htmlContent).toContain("window.location.hostname !== 'localhost'");
      expect(htmlContent).toContain("window.location.hostname !== '127.0.0.1'");
      expect(htmlContent).toContain("window.location.hostname !== '0.0.0.0'");
    });

    it('should contain isProduction variable', () => {
      expect(htmlContent).toContain('var isProduction =');
    });
  });

  describe('Development Environment Handling', () => {
    it('should contain development title update logic', () => {
      expect(htmlContent).toContain(
        "document.title = 'Montessori Skye View Learning Center | Child-Centered Education Las Vegas (DEV)'"
      );
    });

    it('should contain robots meta tag update logic', () => {
      expect(htmlContent).toContain(
        "robotsMeta.setAttribute('content', 'noindex, nofollow')"
      );
    });

    it('should contain URL update logic for development', () => {
      expect(htmlContent).toContain('window.location.origin');
      expect(htmlContent).toContain('setAttribute');
    });

    it('should contain development console message', () => {
      expect(htmlContent).toContain(
        "console.log('🔒 Analytics disabled in development environment')"
      );
    });
  });

  describe('Production Analytics Loading', () => {
    it('should contain dynamic script loading logic', () => {
      expect(htmlContent).toContain("document.createElement('script')");
      expect(htmlContent).toContain('gaScript.async = true');
      expect(htmlContent).toContain('document.head.appendChild(gaScript)');
    });

    it('should contain correct Google Analytics script URL', () => {
      expect(htmlContent).toContain(
        "gaScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-0FTM2V6DK7'"
      );
    });

    it('should contain production console message', () => {
      expect(htmlContent).toContain(
        "console.log('📊 Analytics enabled in production environment')"
      );
    });
  });

  describe('DataLayer Initialization', () => {
    it('should contain dataLayer initialization', () => {
      expect(htmlContent).toContain(
        'window.dataLayer = window.dataLayer || [];'
      );
    });

    it('should contain gtag function definition', () => {
      expect(htmlContent).toContain(
        'function gtag(){dataLayer.push(arguments);}'
      );
    });

    it('should contain gtag initialization', () => {
      expect(htmlContent).toContain("gtag('js', new Date());");
    });
  });

  describe('Consent Management', () => {
    it('should contain default consent configuration', () => {
      expect(htmlContent).toContain("gtag('consent', 'default', {");
      expect(htmlContent).toContain("'analytics_storage': 'denied'");
      expect(htmlContent).toContain("'ad_storage': 'denied'");
      expect(htmlContent).toContain("'ad_user_data': 'denied'");
      expect(htmlContent).toContain("'ad_personalization': 'denied'");
    });
  });

  describe('Google Analytics Configuration', () => {
    it('should contain correct measurement ID configurations', () => {
      expect(htmlContent).toContain("gtag('config', 'G-0FTM2V6DK7');");
      expect(htmlContent).toContain("gtag('config', 'AW-16665018583');");
    });
  });

  describe('HTML Comments', () => {
    it('should contain environment-based analytics comment', () => {
      expect(htmlContent).toContain(
        '<!-- Environment-based Analytics Loading -->'
      );
    });
  });

  describe('Script Structure', () => {
    it('should have proper script tag structure', () => {
      // Check that scripts are in the head section
      const headIndex = htmlContent.indexOf('<head>');
      const bodyIndex = htmlContent.indexOf('<body>');

      expect(headIndex).toBeGreaterThan(-1);
      expect(bodyIndex).toBeGreaterThan(-1);
      expect(headIndex).toBeLessThan(bodyIndex);
    });

    it('should contain conditional analytics script', () => {
      expect(htmlContent).toContain('<script>');
      expect(htmlContent).toContain("// Check if we're in production");
    });
  });

  describe('Measurement ID Validation', () => {
    it('should contain exact measurement IDs', () => {
      const measurementIds = {
        analytics: 'G-0FTM2V6DK7',
        ads: 'AW-16665018583',
      };

      expect(htmlContent).toContain(measurementIds.analytics);
      expect(htmlContent).toContain(measurementIds.ads);
    });

    it('should not contain incorrect measurement IDs', () => {
      const incorrectIds = [
        'G-INCORRECT-ID',
        'AW-INCORRECT-ID',
        'G-0FTM2V6DK8', // Similar but wrong
        'AW-16665018584', // Similar but wrong
      ];

      incorrectIds.forEach(id => {
        expect(htmlContent).not.toContain(id);
      });
    });
  });

  describe('Conditional Logic Structure', () => {
    it('should have proper if-else structure', () => {
      expect(htmlContent).toContain('if (!isProduction) {');
      expect(htmlContent).toContain('} else {');
    });

    it('should contain meta tag update logic', () => {
      expect(htmlContent).toContain('document.querySelector');
      expect(htmlContent).toContain('setAttribute');
    });
  });

  describe('Error Prevention', () => {
    it('should not contain static analytics script tags', () => {
      // Should not have static script tags that load analytics immediately
      expect(htmlContent).not.toContain(
        '<script async src="https://www.googletagmanager.com/gtag/js?id=G-0FTM2V6DK7"></script>'
      );
      expect(htmlContent).not.toContain(
        '<script async src="https://www.googletagmanager.com/gtag/js?id=AW-16665018583"></script>'
      );
    });

    it('should contain proper measurement ID references', () => {
      const analyticsCount = (htmlContent.match(/G-0FTM2V6DK7/g) || []).length;
      const adsCount = (htmlContent.match(/AW-16665018583/g) || []).length;

      // Should appear in the conditional script (at least once each)
      expect(analyticsCount).toBeGreaterThan(0);
      expect(adsCount).toBeGreaterThan(0);
    });

    it('should not contain malformed script tags', () => {
      expect(htmlContent).not.toContain(
        '<script src="https://www.googletagmanager.com/gtag/js?id=">'
      );
    });
  });

  describe('Security and Privacy', () => {
    it('should contain development environment indicators', () => {
      expect(htmlContent).toContain('(DEV)');
      expect(htmlContent).toContain('noindex, nofollow');
    });

    it('should contain proper environment detection', () => {
      expect(htmlContent).toContain('localhost');
      expect(htmlContent).toContain('127.0.0.1');
      expect(htmlContent).toContain('0.0.0.0');
    });
  });
});

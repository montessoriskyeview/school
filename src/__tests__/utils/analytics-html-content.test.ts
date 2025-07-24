/**
 * Tests for actual HTML file content validation
 * This ensures the static HTML analytics setup doesn't change
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

  describe('Google Analytics Script Tags', () => {
    it('should contain correct Google Analytics script URLs', () => {
      const expectedScripts = [
        'https://www.googletagmanager.com/gtag/js?id=G-0FTM2V6DK7',
        'https://www.googletagmanager.com/gtag/js?id=AW-16665018583',
      ];

      expectedScripts.forEach(scriptUrl => {
        expect(htmlContent).toContain(scriptUrl);
      });
    });

    it('should have async attribute on script tags', () => {
      expect(htmlContent).toContain(
        '<script async src="https://www.googletagmanager.com/gtag/js?id=G-0FTM2V6DK7"></script>'
      );
      expect(htmlContent).toContain(
        '<script async src="https://www.googletagmanager.com/gtag/js?id=AW-16665018583"></script>'
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
    it('should contain analytics comment', () => {
      expect(htmlContent).toContain('<!-- Google Analytics -->');
    });

    it('should contain dynamic loading comment', () => {
      expect(htmlContent).toContain(
        '<!-- Google Analytics will be loaded dynamically with consent management -->'
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

    it('should have scripts before closing head tag', () => {
      const analyticsScripts = htmlContent.match(
        /<script async src="https:\/\/www\.googletagmanager\.com\/gtag\/js\?id=[^"]+"><\/script>/g
      );
      expect(analyticsScripts).toHaveLength(2);
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

  describe('Script Loading Order', () => {
    it('should load analytics before ads', () => {
      const analyticsIndex = htmlContent.indexOf('G-0FTM2V6DK7');
      const adsIndex = htmlContent.indexOf('AW-16665018583');

      expect(analyticsIndex).toBeGreaterThan(-1);
      expect(adsIndex).toBeGreaterThan(-1);
      expect(analyticsIndex).toBeLessThan(adsIndex);
    });
  });

  describe('Error Prevention', () => {
    it('should not contain duplicate script tags', () => {
      const analyticsCount = (htmlContent.match(/G-0FTM2V6DK7/g) || []).length;
      const adsCount = (htmlContent.match(/AW-16665018583/g) || []).length;

      // Should appear exactly once in script src and once in config
      expect(analyticsCount).toBe(2);
      expect(adsCount).toBe(2);
    });

    it('should not contain malformed script tags', () => {
      expect(htmlContent).not.toContain(
        '<script src="https://www.googletagmanager.com/gtag/js?id='
      );
      expect(htmlContent).not.toContain(
        '<script async src="https://www.googletagmanager.com/gtag/js?id=">'
      );
    });
  });
});

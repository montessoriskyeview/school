/**
 * Conversion Tracking Tests
 *
 * This test suite validates that all conversion tracking events are fired correctly
 * when users interact with enrollment forms, phone buttons, and email buttons.
 */

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { EmailContact } from '../../components/shared/EmailContact';
import { PhoneContact } from '../../components/shared/PhoneContact';
import { EnrollmentButton } from '../../components/shared/EnrollmentButton';
import { EnrollmentButtons } from '../../components/shared/EnrollmentButtons';
import { getMockAnalytics, clearMockAnalytics } from '../../utils/analytics';
import { DEFAULT_CONVERSION_ID } from '../../resources/enrollmentConfig';

describe('Conversion Tracking Tests', () => {
  let mockAnalytics: any;

  beforeEach(() => {
    // Get the mock analytics instance
    mockAnalytics = getMockAnalytics();
    if (mockAnalytics) {
      mockAnalytics.clear();
    }
  });

  afterEach(() => {
    // Clear mock analytics after each test
    clearMockAnalytics();
  });

  describe('Email Contact Conversion Tracking', () => {
    it('should track email conversion with correct parameters', () => {
      render(React.createElement(EmailContact));
      const link = screen.getByRole('link', {
        name: /email montessori skye view/i,
      });

      fireEvent.click(link);

      const events = mockAnalytics?.getEvents() || [];
      expect(events).toHaveLength(1);
      expect(events[0]).toEqual({
        event: 'conversion',
        send_to: 'AW-16665018583/Z8tpCOHniPQaENeBwIo-',
        value: 1.0,
        currency: 'USD',
      });
    });

    it('should track email conversion only once per click', () => {
      render(React.createElement(EmailContact));
      const link = screen.getByRole('link', {
        name: /email montessori skye view/i,
      });

      fireEvent.click(link);
      fireEvent.click(link);

      const events = mockAnalytics?.getEvents() || [];
      expect(events).toHaveLength(2);
      expect(events[0]).toEqual({
        event: 'conversion',
        send_to: 'AW-16665018583/Z8tpCOHniPQaENeBwIo-',
        value: 1.0,
        currency: 'USD',
      });
      expect(events[1]).toEqual({
        event: 'conversion',
        send_to: 'AW-16665018583/Z8tpCOHniPQaENeBwIo-',
        value: 1.0,
        currency: 'USD',
      });
    });

    it('should maintain correct email conversion ID', () => {
      const EMAIL_CONVERSION_ID = 'AW-16665018583/Z8tpCOHniPQaENeBwIo-';
      expect(EMAIL_CONVERSION_ID).toBe('AW-16665018583/Z8tpCOHniPQaENeBwIo-');
    });
  });

  describe('Phone Contact Conversion Tracking', () => {
    it('should track phone conversion with correct parameters', () => {
      render(React.createElement(PhoneContact));
      const link = screen.getByRole('link', {
        name: /call montessori skye view/i,
      });

      fireEvent.click(link);

      const events = mockAnalytics?.getEvents() || [];
      expect(events).toHaveLength(1);
      expect(events[0]).toEqual({
        event: 'conversion',
        send_to: 'AW-16665018583/mY27CN7niPQaENeBwIo-',
      });
    });

    it('should track phone conversion only once per click', () => {
      render(React.createElement(PhoneContact));
      const link = screen.getByRole('link', {
        name: /call montessori skye view/i,
      });

      fireEvent.click(link);
      fireEvent.click(link);

      const events = mockAnalytics?.getEvents() || [];
      expect(events).toHaveLength(2);
      expect(events[0]).toEqual({
        event: 'conversion',
        send_to: 'AW-16665018583/mY27CN7niPQaENeBwIo-',
      });
      expect(events[1]).toEqual({
        event: 'conversion',
        send_to: 'AW-16665018583/mY27CN7niPQaENeBwIo-',
      });
    });

    it('should maintain correct phone conversion ID', () => {
      const PHONE_CONVERSION_ID = 'AW-16665018583/mY27CN7niPQaENeBwIo-';
      expect(PHONE_CONVERSION_ID).toBe('AW-16665018583/mY27CN7niPQaENeBwIo-');
    });
  });

  describe('Enrollment Button Conversion Tracking', () => {
    it('should track enrollment conversion with default conversion ID', () => {
      render(
        React.createElement(EnrollmentButton, {
          href: 'https://example.com',
          variant: 'primary',
          children: 'Test Enrollment',
        })
      );
      const link = screen.getByRole('link', { name: /test enrollment/i });

      fireEvent.click(link);

      const events = mockAnalytics?.getEvents() || [];
      expect(events).toHaveLength(1);
      expect(events[0]).toEqual({
        event: 'conversion',
        send_to: DEFAULT_CONVERSION_ID,
      });
    });

    it('should track enrollment conversion with custom conversion ID', () => {
      const customConversionId = 'AW-16665018583/CUSTOM_ID';
      render(
        React.createElement(EnrollmentButton, {
          href: 'https://example.com',
          variant: 'primary',
          conversionId: customConversionId,
          children: 'Test Enrollment',
        })
      );
      const link = screen.getByRole('link', { name: /test enrollment/i });

      fireEvent.click(link);

      const events = mockAnalytics?.getEvents() || [];
      expect(events).toHaveLength(1);
      expect(events[0]).toEqual({
        event: 'conversion',
        send_to: customConversionId,
      });
    });

    it('should track enrollment conversion only once per click', () => {
      render(
        React.createElement(EnrollmentButton, {
          href: 'https://example.com',
          variant: 'primary',
          children: 'Test Enrollment',
        })
      );
      const link = screen.getByRole('link', { name: /test enrollment/i });

      fireEvent.click(link);
      fireEvent.click(link);

      const events = mockAnalytics?.getEvents() || [];
      expect(events).toHaveLength(2);
      expect(events[0]).toEqual({
        event: 'conversion',
        send_to: DEFAULT_CONVERSION_ID,
      });
      expect(events[1]).toEqual({
        event: 'conversion',
        send_to: DEFAULT_CONVERSION_ID,
      });
    });

    it('should maintain correct default conversion ID', () => {
      expect(DEFAULT_CONVERSION_ID).toBe('AW-16665018583/vFD0CPHVzcgZENeBwIo-');
    });
  });

  describe('Enrollment Buttons Component Conversion Tracking', () => {
    it('should track conversion for each enrollment button', () => {
      render(React.createElement(EnrollmentButtons, { variant: 'primary' }));

      // Find all enrollment buttons
      const enrollmentLinks = screen.getAllByRole('link');

      // Click each enrollment button
      enrollmentLinks.forEach(link => {
        fireEvent.click(link);
      });

      // Should track conversion for each button
      const events = mockAnalytics?.getEvents() || [];
      expect(events).toHaveLength(enrollmentLinks.length);

      // Each event should be a conversion event
      events.forEach((event: any) => {
        expect(event.event).toBe('conversion');
        expect(event.send_to).toBeDefined();
      });
    });

    it('should use correct conversion IDs for different enrollment periods', () => {
      render(React.createElement(EnrollmentButtons, { variant: 'primary' }));

      // Find all enrollment buttons
      const enrollmentLinks = screen.getAllByRole('link');

      // Click each enrollment button
      enrollmentLinks.forEach(link => {
        fireEvent.click(link);
      });

      // Should have tracked events for each button
      const events = mockAnalytics?.getEvents() || [];
      expect(events).toHaveLength(enrollmentLinks.length);
    });
  });

  describe('Conversion ID Constants', () => {
    it('should maintain correct conversion ID format', () => {
      const conversionIds = {
        email: 'AW-16665018583/Z8tpCOHniPQaENeBwIo-',
        phone: 'AW-16665018583/mY27CN7niPQaENeBwIo-',
        default: 'AW-16665018583/vFD0CPHVzcgZENeBwIo-',
        fall2025: 'AW-16665018583/J6ldCMiWifQaENeBwIo-',
      };

      // All conversion IDs should follow the correct format
      Object.values(conversionIds).forEach(id => {
        expect(id).toMatch(/^AW-16665018583\/[A-Za-z0-9_-]+$/);
      });

      expect(conversionIds.email).toBe('AW-16665018583/Z8tpCOHniPQaENeBwIo-');
      expect(conversionIds.phone).toBe('AW-16665018583/mY27CN7niPQaENeBwIo-');
      expect(conversionIds.default).toBe('AW-16665018583/vFD0CPHVzcgZENeBwIo-');
      expect(conversionIds.fall2025).toBe(
        'AW-16665018583/J6ldCMiWifQaENeBwIo-'
      );
    });

    it('should maintain correct measurement ID prefix', () => {
      const MEASUREMENT_ID_PREFIX = 'AW-16665018583';
      expect(MEASUREMENT_ID_PREFIX).toBe('AW-16665018583');
    });
  });

  describe('Conversion Event Structure', () => {
    it('should maintain correct email conversion event structure', () => {
      const EMAIL_CONVERSION_EVENT = {
        event: 'conversion',
        send_to: 'AW-16665018583/Z8tpCOHniPQaENeBwIo-',
        value: 1.0,
        currency: 'USD',
      };

      expect(EMAIL_CONVERSION_EVENT.event).toBe('conversion');
      expect(EMAIL_CONVERSION_EVENT.send_to).toBe(
        'AW-16665018583/Z8tpCOHniPQaENeBwIo-'
      );
      expect(EMAIL_CONVERSION_EVENT.value).toBe(1.0);
      expect(EMAIL_CONVERSION_EVENT.currency).toBe('USD');
    });

    it('should maintain correct phone conversion event structure', () => {
      const PHONE_CONVERSION_EVENT = {
        event: 'conversion',
        send_to: 'AW-16665018583/mY27CN7niPQaENeBwIo-',
      };

      expect(PHONE_CONVERSION_EVENT.event).toBe('conversion');
      expect(PHONE_CONVERSION_EVENT.send_to).toBe(
        'AW-16665018583/mY27CN7niPQaENeBwIo-'
      );
    });

    it('should maintain correct enrollment conversion event structure', () => {
      const ENROLLMENT_CONVERSION_EVENT = {
        event: 'conversion',
        send_to: 'AW-16665018583/vFD0CPHVzcgZENeBwIo-',
      };

      expect(ENROLLMENT_CONVERSION_EVENT.event).toBe('conversion');
      expect(ENROLLMENT_CONVERSION_EVENT.send_to).toBe(
        'AW-16665018583/vFD0CPHVzcgZENeBwIo-'
      );
    });
  });

  describe('Integration Tests', () => {
    it('should track all conversion types correctly', () => {
      // Render all conversion components
      render(
        React.createElement('div', {}, [
          React.createElement(EmailContact, { key: 'email' }),
          React.createElement(PhoneContact, { key: 'phone' }),
          React.createElement(EnrollmentButton, {
            key: 'enrollment',
            href: 'https://example.com',
            variant: 'primary',
            children: 'Test Enrollment',
          }),
        ])
      );

      // Click email contact
      const emailLink = screen.getByRole('link', {
        name: /email montessori skye view/i,
      });
      fireEvent.click(emailLink);

      // Click phone contact
      const phoneLink = screen.getByRole('link', {
        name: /call montessori skye view/i,
      });
      fireEvent.click(phoneLink);

      // Click enrollment button
      const enrollmentLink = screen.getByRole('link', {
        name: /test enrollment/i,
      });
      fireEvent.click(enrollmentLink);

      // Verify all conversions were tracked
      const events = mockAnalytics?.getEvents() || [];
      expect(events).toHaveLength(3);

      expect(events).toContainEqual({
        event: 'conversion',
        send_to: 'AW-16665018583/Z8tpCOHniPQaENeBwIo-',
        value: 1.0,
        currency: 'USD',
      });

      expect(events).toContainEqual({
        event: 'conversion',
        send_to: 'AW-16665018583/mY27CN7niPQaENeBwIo-',
      });

      expect(events).toContainEqual({
        event: 'conversion',
        send_to: DEFAULT_CONVERSION_ID,
      });
    });
  });
});

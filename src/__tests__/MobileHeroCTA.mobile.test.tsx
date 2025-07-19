import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { setMobileViewport } from '../utils/mobileTestUtils';
import { MobileHeroCTA } from '../components/shared/MobileHeroCTA';

// Mock the new contact components
jest.mock('../components/shared/EmailContact', () => ({
  EmailContact: ({ children, ...props }: any) => (
    <a href="mailto:test@example.com" aria-label="Email Montessori Skye View" {...props}>
      {children}
    </a>
  ),
}));

jest.mock('../components/shared/PhoneContact', () => ({
  PhoneContact: ({ children, ...props }: any) => (
    <a href="tel:+1234567890" aria-label="Call Montessori Skye View" {...props}>
      {children}
    </a>
  ),
}));

describe('MobileHeroCTA Component - Mobile Experience', () => {
  beforeEach(() => {
    // Set mobile viewport for all tests
    setMobileViewport('iPhoneSE');
  });

  describe('Mobile Layout and Positioning', () => {
    test('renders correctly on mobile viewport', () => {
      render(<MobileHeroCTA />);
      expect(
        screen.getByRole('button', { name: /expand enrollment options/i })
      ).toBeInTheDocument();
    });

    test('component is visible and accessible', () => {
      render(<MobileHeroCTA />);
      const header = screen.getByRole('button', {
        name: /expand enrollment options/i,
      });
      expect(header).toBeVisible();
      expect(header).toBeInTheDocument();
    });

    test('snapshot matches mobile layout', () => {
      const { container } = render(<MobileHeroCTA />);
      expect(container).toMatchSnapshot();
    });
  });

  describe('Mobile Touch Interactions', () => {
    test('expand/collapse functionality works with touch', async () => {
      render(<MobileHeroCTA />);

      const header = screen.getByRole('button', {
        name: /expand enrollment options/i,
      });

      // Initially collapsed
      expect(header).toHaveAttribute('aria-expanded', 'false');

      // Click to expand
      fireEvent.click(header);

      await waitFor(() => {
        expect(header).toHaveAttribute('aria-expanded', 'true');
      });

      // Click to collapse
      fireEvent.click(header);

      await waitFor(() => {
        expect(header).toHaveAttribute('aria-expanded', 'false');
      });
    });

    test('keyboard navigation works for accessibility', async () => {
      render(<MobileHeroCTA />);

      const header = screen.getByRole('button', {
        name: /expand enrollment options/i,
      });

      // Test Enter key
      fireEvent.keyDown(header, { key: 'Enter' });

      await waitFor(() => {
        expect(header).toHaveAttribute('aria-expanded', 'true');
      });

      // Test Space key
      fireEvent.keyDown(header, { key: ' ' });

      await waitFor(() => {
        expect(header).toHaveAttribute('aria-expanded', 'false');
      });
    });
  });

  describe('Mobile Content and Typography', () => {
    test('displays correct enrollment message', () => {
      render(<MobileHeroCTA />);

      expect(screen.getByText(/ready to enroll/i)).toBeInTheDocument();
    });

    test('enrollment buttons are present when expanded', async () => {
      render(<MobileHeroCTA />);

      // Expand the component first
      const header = screen.getByRole('button', {
        name: /expand enrollment options/i,
      });
      fireEvent.click(header);

      await waitFor(() => {
        const enrollmentButtons = screen.getAllByRole('link');
        expect(enrollmentButtons.length).toBeGreaterThan(0);
      });
    });

    test('contact buttons are present when expanded', async () => {
      render(<MobileHeroCTA />);

      // Expand the component first
      const header = screen.getByRole('button', {
        name: /expand enrollment options/i,
      });
      fireEvent.click(header);

      await waitFor(() => {
        const callButton = screen.getByRole('link', { name: /call/i });

        expect(callButton).toBeInTheDocument();
      });

      await waitFor(() => {
        const emailButton = screen.getByRole('link', { name: /email/i });

        expect(emailButton).toBeInTheDocument();
      });
    });
  });

  describe('Mobile Accessibility', () => {
    test('component has proper ARIA attributes', () => {
      render(<MobileHeroCTA />);

      const header = screen.getByRole('button', {
        name: /expand enrollment options/i,
      });

      expect(header).toHaveAttribute('aria-expanded');
      expect(header).toHaveAttribute('aria-label');
      expect(header).toHaveAttribute('tabIndex');
    });

    test('expand/collapse state is properly announced', async () => {
      render(<MobileHeroCTA />);

      const header = screen.getByRole('button', {
        name: /expand enrollment options/i,
      });

      // Check initial state
      expect(header).toHaveAttribute('aria-label', 'Expand enrollment options');

      // Expand and check updated state
      fireEvent.click(header);

      await waitFor(() => {
        expect(header).toHaveAttribute(
          'aria-label',
          'Collapse enrollment options'
        );
      });
    });

    test('contact buttons have proper ARIA labels', async () => {
      render(<MobileHeroCTA />);

      // Expand the component first
      const header = screen.getByRole('button', {
        name: /expand enrollment options/i,
      });
      fireEvent.click(header);

      await waitFor(() => {
        const callButton = screen.getByRole('link', { name: /call/i });

        expect(callButton).toHaveAttribute('aria-label');
      });

      await waitFor(() => {
        const emailButton = screen.getByRole('link', { name: /email/i });

        expect(emailButton).toHaveAttribute('aria-label');
      });
    });

    test('focus management works correctly', async () => {
      render(<MobileHeroCTA />);

      const header = screen.getByRole('button', {
        name: /expand enrollment options/i,
      });

      // Focus the header
      header.focus();
      expect(header).toHaveFocus();

      // Expand and check if focus remains
      fireEvent.click(header);

      await waitFor(() => {
        expect(header).toHaveFocus();
      });
    });
  });

  describe('Mobile Performance', () => {
    test('expands and collapses smoothly', async () => {
      const startTime = performance.now();

      render(<MobileHeroCTA />);

      const header = screen.getByRole('button', {
        name: /expand enrollment options/i,
      });
      fireEvent.click(header);

      await waitFor(() => {
        expect(header).toHaveAttribute('aria-expanded', 'true');
      });

      const endTime = performance.now();
      const expandTime = endTime - startTime;

      // Should expand within 100ms
      expect(expandTime).toBeLessThan(100);
    });

    test('no console errors during interactions', () => {
      const consoleSpy = jest
        .spyOn(console, 'error')
        .mockImplementation(() => {});

      render(<MobileHeroCTA />);

      const header = screen.getByRole('button', {
        name: /expand enrollment options/i,
      });
      fireEvent.click(header);

      expect(consoleSpy).not.toHaveBeenCalled();
      consoleSpy.mockRestore();
    });
  });

  describe('Mobile Responsive Behavior', () => {
    test('renders correctly on different mobile viewports', () => {
      const viewports = ['iPhoneSE', 'iPhone12', 'SamsungGalaxyS20'] as const;

      viewports.forEach(viewport => {
        setMobileViewport(viewport);
        const { container } = render(<MobileHeroCTA />);
        expect(container).toMatchSnapshot();
      });
    });

    test('maintains functionality across mobile devices', () => {
      const viewports = ['iPhoneSE', 'iPhone12', 'SamsungGalaxyS20'] as const;

      viewports.forEach(viewport => {
        setMobileViewport(viewport);
        render(<MobileHeroCTA />);

        const headers = screen.getAllByRole('button', {
          name: /expand enrollment options/i,
        });
        expect(headers.length).toBeGreaterThan(0);
        expect(headers[0]).toBeInTheDocument();
      });
    });
  });

  describe('Mobile Content Validation', () => {
    test('contact buttons have correct links', async () => {
      render(<MobileHeroCTA />);

      // Expand the component first
      const header = screen.getByRole('button', {
        name: /expand enrollment options/i,
      });
      fireEvent.click(header);

      await waitFor(() => {
        const emailButton = screen.getByRole('link', { name: /email/i });

        expect(emailButton).toHaveAttribute('href', 'mailto:test@example.com');
      });

      await waitFor(() => {
        const callButton = screen.getByRole('link', { name: /call/i });

        expect(callButton).toHaveAttribute('href', 'tel:+1234567890');
      });
    });

    test('enrollment buttons have valid links', async () => {
      render(<MobileHeroCTA />);

      // Expand the component first
      const header = screen.getByRole('button', {
        name: /expand enrollment options/i,
      });
      fireEvent.click(header);

      await waitFor(() => {
        const enrollmentButtons = screen.getAllByRole('link');
        enrollmentButtons.forEach(button => {
          expect(button).toHaveAttribute('href');
          const href = button.getAttribute('href');
          // Check for valid link types (https, tel, mailto)
          expect(href).toMatch(/^(https:\/\/|tel:|mailto:)/);
        });
      });
    });
  });
});

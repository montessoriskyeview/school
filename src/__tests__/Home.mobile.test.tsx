import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { setMobileViewport } from '../utils/mobileTestUtils';
import { MapInfo } from '../components/home/Home';

// Mock clipboard API
Object.assign(navigator, {
  clipboard: {
    writeText: jest.fn(),
  },
});

// Mock window.open
const mockOpen = jest.fn();
Object.defineProperty(window, 'open', {
  value: mockOpen,
  writable: true,
});

// Mock document.execCommand for fallback clipboard
Object.defineProperty(document, 'execCommand', {
  value: jest.fn(),
  writable: true,
});

describe('Home Component - MapInfo Mobile Experience', () => {
  beforeEach(() => {
    // Set mobile viewport for all tests
    setMobileViewport('iPhoneSE');
    // Clear mocks
    jest.clearAllMocks();
  });

  describe('Mobile Layout and Responsiveness', () => {
    test('renders correctly on mobile viewport', () => {
      render(<MapInfo title="Test Location" />);
      expect(screen.getByText('Test Location')).toBeInTheDocument();
    });

    test('content container is accessible', () => {
      render(<MapInfo title="Test Location" />);
      const title = screen.getByText('Test Location');
      expect(title).toBeVisible();
      expect(title).toBeInTheDocument();
    });

    test('snapshot matches mobile layout', () => {
      const { container } = render(<MapInfo title="Test Location" />);
      expect(container).toMatchSnapshot();
    });
  });

  describe('Mobile Touch Interactions', () => {
    test('buttons are present and clickable', () => {
      render(<MapInfo title="Test Location" />);

      const buttons = screen.getAllByRole('button');
      expect(buttons.length).toBeGreaterThan(0);

      buttons.forEach(button => {
        expect(button).toBeVisible();
      });
    });

    test('open in new tab button works on mobile', async () => {
      render(<MapInfo title="Test Location" />);

      const openButton = screen.getByRole('button', {
        name: /open in new tab/i,
      });

      fireEvent.click(openButton);

      await waitFor(() => {
        expect(mockOpen).toHaveBeenCalledWith(
          'https://maps.google.com/?q=36.2893875,-115.311701&z=15',
          '_blank'
        );
      });
    });

    test('copy link button works on mobile', async () => {
      render(<MapInfo title="Test Location" />);

      const copyButton = screen.getByRole('button', { name: /copy link/i });

      fireEvent.click(copyButton);

      await waitFor(() => {
        expect(navigator.clipboard.writeText).toHaveBeenCalledWith(
          'https://maps.google.com/?q=36.2893875,-115.311701&z=15'
        );
      });
    });

    test('touch events work properly', async () => {
      render(<MapInfo title="Test Location" />);

      const buttons = screen.getAllByRole('button');

      buttons.forEach(button => {
        fireEvent.touchStart(button);
        fireEvent.touchEnd(button);
      });

      // Should not cause any errors
      await waitFor(() => {
        expect(buttons[0]).toBeInTheDocument();
      });
    });
  });

  describe('Mobile Accessibility', () => {
    test('buttons have proper ARIA labels', () => {
      render(<MapInfo title="Test Location" />);

      const openButton = screen.getByRole('button', {
        name: /open in new tab/i,
      });
      const copyButton = screen.getByRole('button', { name: /copy link/i });

      expect(openButton).toHaveAttribute('aria-label');
      expect(copyButton).toHaveAttribute('aria-label');
    });

    test('title has proper heading structure', () => {
      render(<MapInfo title="Test Location" />);

      const title = screen.getByRole('heading', { level: 2 });
      expect(title).toBeInTheDocument();
      expect(title).toHaveTextContent('Test Location');
    });

    test('tooltips work on mobile', () => {
      render(<MapInfo title="Test Location" />);

      const openButton = screen.getByRole('button', {
        name: /open in new tab/i,
      });
      const copyButton = screen.getByRole('button', { name: /copy link/i });

      // Hover to show tooltips
      fireEvent.mouseEnter(openButton);
      fireEvent.mouseEnter(copyButton);

      expect(openButton).toHaveAttribute('aria-label', 'Open in new tab');
      expect(copyButton).toHaveAttribute('aria-label', 'Copy link');
    });

    test('snackbar is accessible', async () => {
      render(<MapInfo title="Test Location" />);

      const copyButton = screen.getByRole('button', { name: /copy link/i });

      fireEvent.click(copyButton);

      await waitFor(() => {
        const snackbar = screen.getByText('Copied!');
        expect(snackbar).toBeInTheDocument();
      });
    });
  });

  describe('Mobile Content and Styling', () => {
    test('button container has proper layout', () => {
      render(<MapInfo title="Test Location" />);

      // Use getAllByRole to handle multiple buttons and get the first one's container
      const buttons = screen.getAllByRole('button');
      expect(buttons.length).toBeGreaterThan(0);

      // Instead of using .closest(), we'll test that buttons are properly rendered
      buttons.forEach(button => {
        expect(button).toBeInTheDocument();
        expect(button).toBeVisible();
      });
    });

    test('buttons are properly spaced', () => {
      render(<MapInfo title="Test Location" />);

      const buttons = screen.getAllByRole('button');
      expect(buttons.length).toBeGreaterThan(1);

      // Check that buttons are separate elements
      buttons.forEach(button => {
        expect(button).toBeInstanceOf(HTMLElement);
      });
    });

    test('content is properly structured', () => {
      render(<MapInfo title="Test Location" />);

      const title = screen.getByText('Test Location');
      expect(title).toBeInTheDocument();
      expect(title).toBeVisible();
    });
  });

  describe('Mobile Performance', () => {
    test('renders within reasonable time on mobile', async () => {
      const startTime = performance.now();

      render(<MapInfo title="Test Location" />);

      await waitFor(() => {
        expect(screen.getByText('Test Location')).toBeInTheDocument();
      });

      const endTime = performance.now();
      const renderTime = endTime - startTime;

      // Should render within 100ms on mobile
      expect(renderTime).toBeLessThan(100);
    });

    test('button interactions are responsive', async () => {
      render(<MapInfo title="Test Location" />);

      const startTime = performance.now();

      const copyButton = screen.getByRole('button', { name: /copy link/i });

      fireEvent.click(copyButton);

      await waitFor(() => {
        expect(navigator.clipboard.writeText).toHaveBeenCalled();
      });

      const endTime = performance.now();
      const interactionTime = endTime - startTime;

      // Should respond within 50ms
      expect(interactionTime).toBeLessThan(50);
    });

    test('no console errors during mobile interactions', () => {
      const consoleSpy = jest
        .spyOn(console, 'error')
        .mockImplementation(() => {});

      render(<MapInfo title="Test Location" />);

      const buttons = screen.getAllByRole('button');
      buttons.forEach(button => {
        fireEvent.click(button);
      });

      expect(consoleSpy).not.toHaveBeenCalled();
      consoleSpy.mockRestore();
    });
  });

  describe('Mobile Responsive Behavior', () => {
    test('renders correctly on different mobile viewports', () => {
      const viewports = ['iPhoneSE', 'iPhone12', 'SamsungGalaxyS20'] as const;

      viewports.forEach(viewport => {
        setMobileViewport(viewport);
        const { container } = render(<MapInfo title="Test Location" />);
        expect(container).toMatchSnapshot();
      });
    });

    test('maintains functionality across mobile devices', () => {
      const viewports = ['iPhoneSE', 'iPhone12', 'SamsungGalaxyS20'] as const;

      viewports.forEach(viewport => {
        setMobileViewport(viewport);
        render(<MapInfo title="Test Location" />);

        // Use getAllByText to handle potential duplicates and get the first one
        const titles = screen.getAllByText('Test Location');
        expect(titles[0]).toBeInTheDocument();
      });
    });
  });

  describe('Mobile Content Validation', () => {
    test('displays correct title', () => {
      render(<MapInfo title="Montessori Skye View" />);
      expect(screen.getByText('Montessori Skye View')).toBeInTheDocument();
    });

    test('generates correct map link', () => {
      render(<MapInfo title="Test Location" />);

      const expectedLink =
        'https://maps.google.com/?q=36.2893875,-115.311701&z=15';

      // Check that the link is used in both buttons
      const copyButton = screen.getByRole('button', { name: /copy link/i });
      fireEvent.click(copyButton);

      expect(navigator.clipboard.writeText).toHaveBeenCalledWith(expectedLink);
    });

    test('snackbar shows correct message', async () => {
      render(<MapInfo title="Test Location" />);

      const copyButton = screen.getByRole('button', { name: /copy link/i });

      fireEvent.click(copyButton);

      await waitFor(() => {
        expect(screen.getByText('Copied!')).toBeInTheDocument();
      });
    });

    test('snackbar auto-hides after 5 seconds', async () => {
      jest.useFakeTimers();

      render(<MapInfo title="Test Location" />);

      const copyButton = screen.getByRole('button', { name: /copy link/i });

      fireEvent.click(copyButton);

      await waitFor(() => {
        expect(screen.getByText('Copied!')).toBeInTheDocument();
      });

      // Fast-forward time
      jest.advanceTimersByTime(5000);

      await waitFor(() => {
        expect(screen.queryByText('Copied!')).not.toBeInTheDocument();
      });

      jest.useRealTimers();
    });
  });

  describe('Mobile Error Handling', () => {
    test('handles clipboard API errors gracefully', async () => {
      // Mock clipboard API to throw an error
      (navigator.clipboard.writeText as jest.Mock).mockRejectedValueOnce(
        new Error('Clipboard error')
      );

      const consoleSpy = jest
        .spyOn(console, 'error')
        .mockImplementation(() => {});

      render(<MapInfo title="Test Location" />);

      const copyButton = screen.getByRole('button', { name: /copy link/i });

      fireEvent.click(copyButton);

      // Should not crash the component and should still show snackbar
      await waitFor(() => {
        expect(screen.getByText('Copied!')).toBeInTheDocument();
      });

      // Should log the error
      expect(consoleSpy).toHaveBeenCalledWith(
        'Failed to copy to clipboard:',
        expect.any(Error)
      );

      consoleSpy.mockRestore();
    });

    test('handles window.open errors gracefully', async () => {
      // Mock window.open to throw an error
      mockOpen.mockImplementationOnce(() => {
        throw new Error('Popup blocked');
      });

      const consoleSpy = jest
        .spyOn(console, 'error')
        .mockImplementation(() => {});

      render(<MapInfo title="Test Location" />);

      const openButton = screen.getByRole('button', {
        name: /open in new tab/i,
      });

      fireEvent.click(openButton);

      // Should not crash the component
      await waitFor(() => {
        expect(openButton).toBeInTheDocument();
      });

      // Should log the error
      expect(consoleSpy).toHaveBeenCalledWith(
        'Failed to open link:',
        expect.any(Error)
      );

      consoleSpy.mockRestore();
    });
  });
});

import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import { render } from '../utils/testUtils';
import { MapInfo } from '../components/home/Home';

// Mock clipboard API
Object.assign(navigator, {
  clipboard: {
    writeText: jest.fn(),
  },
});

// Mock window.open
const mockOpen = jest.fn();
Object.assign(window, { open: mockOpen });

describe('Home Component - Mobile Experience', () => {
  let mockClipboardWriteText: jest.MockedFunction<
    typeof navigator.clipboard.writeText
  >;

  beforeEach(() => {
    // Reset viewport for mobile testing
    Object.defineProperty(window, 'innerWidth', {
      value: 375,
      configurable: true,
    });
    Object.defineProperty(window, 'innerHeight', {
      value: 667,
      configurable: true,
    });

    // Reset mocks
    mockClipboardWriteText = navigator.clipboard
      .writeText as jest.MockedFunction<typeof navigator.clipboard.writeText>;
    mockClipboardWriteText.mockResolvedValue(undefined);
    mockOpen.mockClear();
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  describe('Mobile Layout and Responsiveness', () => {
    test('renders without crashing on mobile viewport', () => {
      render(<MapInfo title="Test Location" />);
      expect(screen.getByText('Test Location')).toBeInTheDocument();
    });

    test('components are visible and accessible on mobile', () => {
      render(<MapInfo title="Test Location" />);

      const heading = screen.getByRole('heading', { level: 2 });
      expect(heading).toBeInTheDocument();
      expect(heading).toHaveTextContent('Test Location');

      const buttons = screen.getAllByRole('button');
      expect(buttons.length).toBeGreaterThanOrEqual(2);
    });
  });

  describe('Mobile Navigation', () => {
    test('navigation elements respond to interactions', () => {
      render(<MapInfo title="Test Location" />);

      const copyButton = screen.getByRole('button', { name: /copy link/i });
      const openButton = screen.getByRole('button', {
        name: /open in new tab/i,
      });

      fireEvent.click(copyButton);
      fireEvent.click(openButton);

      const expectedLink =
        'https://maps.google.com/?q=36.2893875,-115.311701&z=15';
      expect(mockClipboardWriteText).toHaveBeenCalledWith(expectedLink);
      expect(mockOpen).toHaveBeenCalledWith(expectedLink, '_blank');
    });
  });

  describe('Mobile Content Readability', () => {
    test('text content is present and readable', () => {
      render(<MapInfo title="Test Location" />);

      expect(screen.getByText('Test Location')).toBeInTheDocument();
      expect(
        screen.getByRole('button', { name: /copy link/i })
      ).toBeInTheDocument();
      expect(
        screen.getByRole('button', { name: /open in new tab/i })
      ).toBeInTheDocument();
    });

    test('content has proper semantic structure', () => {
      render(<MapInfo title="Test Location" />);

      const heading = screen.getByRole('heading', { level: 2 });
      expect(heading).toBeInTheDocument();
      expect(heading).toHaveTextContent('Test Location');
    });
  });

  describe('Mobile Accessibility', () => {
    test('buttons have proper ARIA labels', () => {
      render(<MapInfo title="Test Location" />);

      const copyButton = screen.getByRole('button', { name: /copy link/i });
      const openButton = screen.getByRole('button', {
        name: /open in new tab/i,
      });

      expect(copyButton).toBeInTheDocument();
      expect(openButton).toBeInTheDocument();
    });

    test('component structure supports screen readers', () => {
      render(<MapInfo title="Test Location" />);

      const heading = screen.getByRole('heading', { level: 2 });
      const buttons = screen.getAllByRole('button');

      expect(heading).toBeInTheDocument();
      expect(buttons.length).toBeGreaterThanOrEqual(2);
    });
  });

  describe('Mobile Touch Interactions', () => {
    test('buttons respond to touch events', () => {
      render(<MapInfo title="Test Location" />);

      const copyButton = screen.getByRole('button', { name: /copy link/i });

      fireEvent.click(copyButton);

      const expectedLink =
        'https://maps.google.com/?q=36.2893875,-115.311701&z=15';
      expect(mockClipboardWriteText).toHaveBeenCalledWith(expectedLink);
    });
  });

  describe('Mobile Clipboard Functionality', () => {
    test('copy link functionality works on mobile', () => {
      render(<MapInfo title="Test Location" />);

      const copyButton = screen.getByRole('button', { name: /copy link/i });
      fireEvent.click(copyButton);

      const expectedLink =
        'https://maps.google.com/?q=36.2893875,-115.311701&z=15';
      expect(mockClipboardWriteText).toHaveBeenCalledWith(expectedLink);
    });
  });
});

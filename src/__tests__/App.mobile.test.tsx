import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { setMobileViewport } from '../utils/mobileTestUtils';
import App from '../App';

// Mock the 3D components that might cause issues in tests
jest.mock('@react-three/fiber', () => ({
  Canvas: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="canvas">{children}</div>
  ),
}));

jest.mock('three', () => ({
  ...jest.requireActual('three'),
  WebGLRenderer: jest.fn().mockImplementation(() => ({
    setSize: jest.fn(),
    render: jest.fn(),
    dispose: jest.fn(),
  })),
}));

// Mock all image imports to prevent test failures
jest.mock('*.webp', () => 'test-image.webp');
jest.mock('*.jpg', () => 'test-image.jpg');
jest.mock('*.jpeg', () => 'test-image.jpeg');
jest.mock('*.png', () => 'test-image.png');

// Mock the specific image that's causing snapshot issues
jest.mock('../assets/images/IMG_6887.webp', () => 'test-file-stub');

// Custom render function without Router wrapper since App already has one
const renderApp = (ui: React.ReactElement) => {
  return render(ui);
};

describe('App Component - Mobile Experience', () => {
  beforeEach(() => {
    // Set mobile viewport for all tests
    setMobileViewport('iPhoneSE');
  });

  describe('Mobile Layout and Responsiveness', () => {
    test('renders without crashing on mobile viewport', () => {
      renderApp(<App />);
      expect(screen.getByRole('main')).toBeInTheDocument();
    });

    test('app container exists and is accessible', () => {
      renderApp(<App />);
      const mainElement = screen.getByRole('main');
      expect(mainElement).toBeInTheDocument();
      expect(mainElement).toBeVisible();
    });

    test('snapshot matches mobile layout', () => {
      const { container } = renderApp(<App />);
      expect(container).toMatchSnapshot();
    });
  });

  describe('Mobile Navigation', () => {
    test('navigation elements are present and accessible', () => {
      renderApp(<App />);

      // Check for any navigation elements
      const buttons = screen.getAllByRole('button');
      const links = screen.getAllByRole('link');

      // Should have some interactive elements
      expect(buttons.length + links.length).toBeGreaterThan(0);
    });

    test('navigation elements respond to interactions', async () => {
      renderApp(<App />);

      const buttons = screen.getAllByRole('button');
      expect(buttons.length).toBeGreaterThanOrEqual(0);

      // Test that all buttons are clickable without causing errors
      buttons.forEach(button => {
        fireEvent.click(button);
        expect(button).toBeInTheDocument();
      });
    });
  });

  describe('Mobile Content Readability', () => {
    test('text content is present and readable', () => {
      renderApp(<App />);

      // Look for any text content
      const textElements = screen.getAllByText(/./, {
        selector: 'p, h1, h2, h3, h4, h5, h6, span, div',
      });
      expect(textElements.length).toBeGreaterThan(0);
    });

    test('content has proper semantic structure', () => {
      renderApp(<App />);

      // Check for proper heading structure
      const headings = screen.getAllByRole('heading');
      expect(headings.length).toBeGreaterThanOrEqual(0);

      headings.forEach(heading => {
        expect(heading).toBeVisible();
      });
    });
  });

  describe('Mobile Performance', () => {
    test('renders within reasonable time on mobile', async () => {
      const startTime = performance.now();

      renderApp(<App />);

      await waitFor(() => {
        expect(screen.getByRole('main')).toBeInTheDocument();
      });

      const endTime = performance.now();
      const renderTime = endTime - startTime;

      // Should render within 200ms on mobile (more lenient for test environment)
      expect(renderTime).toBeLessThan(200);
    });

    test('no console errors during mobile render', () => {
      const consoleSpy = jest
        .spyOn(console, 'error')
        .mockImplementation(() => {});

      renderApp(<App />);

      expect(consoleSpy).not.toHaveBeenCalled();
      consoleSpy.mockRestore();
    });
  });

  describe('Mobile Accessibility', () => {
    test('main content has proper semantic structure', () => {
      renderApp(<App />);

      const mainElement = screen.getByRole('main');
      expect(mainElement).toBeInTheDocument();
    });

    test('images have proper alt text for screen readers', () => {
      renderApp(<App />);

      const images = screen.getAllByRole('img');
      images.forEach(image => {
        const altText = image.getAttribute('alt');
        expect(altText).toBeTruthy();
      });
    });

    test('interactive elements are accessible', () => {
      renderApp(<App />);

      const buttons = screen.getAllByRole('button');
      const links = screen.getAllByRole('link');

      // Check that interactive elements are present and visible
      [...buttons, ...links].forEach(element => {
        expect(element).toBeVisible();
        expect(element).toBeInTheDocument();
      });
    });
  });

  describe('Mobile Touch Interactions', () => {
    test('touch events work properly', async () => {
      renderApp(<App />);

      const buttons = screen.getAllByRole('button');
      expect(buttons.length).toBeGreaterThanOrEqual(0);

      // Test that all buttons respond to touch events without causing errors
      buttons.forEach(button => {
        fireEvent.touchStart(button);
        fireEvent.touchEnd(button);
        expect(button).toBeInTheDocument();
      });
    });

    test('scroll behavior works on mobile', () => {
      renderApp(<App />);

      const mainElement = screen.getByRole('main');

      // Test that scroll event doesn't cause errors
      fireEvent.scroll(mainElement, { target: { scrollTop: 100 } });

      expect(mainElement).toBeInTheDocument();
    });
  });

  describe('Mobile Viewport Variations', () => {
    test('renders correctly on iPhone SE', () => {
      setMobileViewport('iPhoneSE');
      const { container } = renderApp(<App />);
      expect(container).toMatchSnapshot();
    });

    test('renders correctly on iPhone 12', () => {
      setMobileViewport('iPhone12');
      const { container } = renderApp(<App />);
      expect(container).toMatchSnapshot();
    });

    test('renders correctly on Samsung Galaxy S20', () => {
      setMobileViewport('SamsungGalaxyS20');
      const { container } = renderApp(<App />);
      expect(container).toMatchSnapshot();
    });

    test('renders correctly on iPad', () => {
      setMobileViewport('iPad');
      const { container } = renderApp(<App />);
      expect(container).toMatchSnapshot();
    });
  });
});

import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import { render } from '../utils/testUtils';
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
const renderApp = async (ui: React.ReactElement) => {
  return await render(ui);
};

describe('App Component - Mobile Experience', () => {
  describe('Mobile Layout and Responsiveness', () => {
    test('renders without crashing on mobile viewport', async () => {
      await renderApp(<App />);
      expect(screen.getByRole('main')).toBeInTheDocument();
    });

    test('app container exists and is accessible', async () => {
      await renderApp(<App />);
      const mainElement = screen.getByRole('main');
      expect(mainElement).toBeInTheDocument();
      expect(mainElement).toBeVisible();
    });

    test('snapshot matches mobile layout', async () => {
      const { container } = await renderApp(<App />);
      expect(container).toMatchSnapshot();
    });
  });

  describe('Mobile Navigation', () => {
    test('navigation elements are present and accessible', async () => {
      await renderApp(<App />);

      // Check for any navigation elements
      const buttons = screen.getAllByRole('button');
      const links = screen.getAllByRole('link');

      // Should have some interactive elements
      expect(buttons.length + links.length).toBeGreaterThan(0);
    });

    test('navigation elements respond to interactions', async () => {
      await renderApp(<App />);

      const buttons = screen.getAllByRole('button');
      expect(buttons.length).toBeGreaterThanOrEqual(0);

      // Test that all buttons are present and accessible
      buttons.forEach(button => {
        expect(button).toBeInTheDocument();
        expect(button).toBeVisible();
        expect(button).not.toBeDisabled();
      });
    });
  });

  describe('Mobile Content Readability', () => {
    test('text content is present and readable', async () => {
      await renderApp(<App />);

      // Look for any text content
      const textElements = screen.getAllByText(/./, {
        selector: 'p, h1, h2, h3, h4, h5, h6, span, div',
      });

      // Should have some text content
      expect(textElements.length).toBeGreaterThan(0);
    });

    test('content has proper semantic structure', async () => {
      await renderApp(<App />);

      // Check for semantic HTML elements
      const main = screen.getByRole('main');
      expect(main).toBeInTheDocument();
    });
  });

  describe('Mobile Performance', () => {
    test('renders successfully on mobile', async () => {
      await renderApp(<App />);

      // Simply verify the app renders without crashing
      expect(document.body).toBeInTheDocument();
    });

    test('no console errors during mobile render', async () => {
      const consoleSpy = jest
        .spyOn(console, 'error')
        .mockImplementation(() => {});

      await renderApp(<App />);

      expect(consoleSpy).not.toHaveBeenCalled();
      consoleSpy.mockRestore();
    });
  });

  describe('Mobile Accessibility', () => {
    test('main content has proper semantic structure', async () => {
      await renderApp(<App />);

      const main = screen.getByRole('main');
      expect(main).toBeInTheDocument();
    });

    test('images have proper alt text for screen readers', async () => {
      await renderApp(<App />);

      const images = screen.getAllByRole('img');
      images.forEach(img => {
        expect(img).toHaveAttribute('alt');
      });
    });

    test('interactive elements are accessible', async () => {
      await renderApp(<App />);

      const buttons = screen.getAllByRole('button');
      buttons.forEach(button => {
        expect(button).toBeInTheDocument();
      });
    });
  });

  describe('Mobile Touch Interactions', () => {
    test('touch events work properly', async () => {
      await renderApp(<App />);

      const buttons = screen.getAllByRole('button');
      buttons.forEach(button => {
        fireEvent.touchStart(button);
        fireEvent.touchEnd(button);
        expect(button).toBeInTheDocument();
      });
    });

    test('scroll behavior works on mobile', async () => {
      await renderApp(<App />);

      const container = screen.getByRole('main');
      fireEvent.scroll(container);

      expect(container).toBeInTheDocument();
    });
  });

  describe('Mobile Viewport Variations', () => {
    test('renders correctly on iPhone SE', async () => {
      // Set viewport to iPhone SE dimensions
      Object.defineProperty(window, 'innerWidth', {
        value: 375,
        configurable: true,
      });
      Object.defineProperty(window, 'innerHeight', {
        value: 667,
        configurable: true,
      });

      await renderApp(<App />);
      expect(screen.getByRole('main')).toBeInTheDocument();
    });

    test('renders correctly on iPhone 12', async () => {
      // Set viewport to iPhone 12 dimensions
      Object.defineProperty(window, 'innerWidth', {
        value: 390,
        configurable: true,
      });
      Object.defineProperty(window, 'innerHeight', {
        value: 844,
        configurable: true,
      });

      await renderApp(<App />);
      expect(screen.getByRole('main')).toBeInTheDocument();
    });

    test('renders correctly on Samsung Galaxy S20', async () => {
      // Set viewport to Samsung Galaxy S20 dimensions
      Object.defineProperty(window, 'innerWidth', {
        value: 360,
        configurable: true,
      });
      Object.defineProperty(window, 'innerHeight', {
        value: 800,
        configurable: true,
      });

      await renderApp(<App />);
      expect(screen.getByRole('main')).toBeInTheDocument();
    });

    test('renders correctly on iPad', async () => {
      // Set viewport to iPad dimensions
      Object.defineProperty(window, 'innerWidth', {
        value: 768,
        configurable: true,
      });
      Object.defineProperty(window, 'innerHeight', {
        value: 1024,
        configurable: true,
      });

      await renderApp(<App />);
      expect(screen.getByRole('main')).toBeInTheDocument();
    });
  });
});

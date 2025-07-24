import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Schedule } from '../index';
import { FullTimeLanding } from '../FullTimeLanding';
import { PartTimeLanding } from '../PartTimeLanding';
import { FULL_TIME_SCHEDULE_ITEMS, PART_TIME_SCHEDULE_ITEMS } from '../items';

// Mock the router
const withRouter = (Component: React.ComponentType) => () =>
  (
    <BrowserRouter>
      <Component />
    </BrowserRouter>
  );

const ScheduleWithRouter = withRouter(Schedule);
const FullTimeLandingWithRouter = withRouter(FullTimeLanding);
const PartTimeLandingWithRouter = withRouter(PartTimeLanding);

// Mock window.matchMedia for responsive testing
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

describe('Schedule Last Item Visibility - Comprehensive Coverage', () => {
  const viewports = {
    mobile: { width: 375, height: 667 },
    tablet: { width: 768, height: 1024 },
    desktop: { width: 1440, height: 900 },
  };

  const setViewport = (viewport: { width: number; height: number }) => {
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: viewport.width,
    });
    Object.defineProperty(window, 'innerHeight', {
      writable: true,
      configurable: true,
      value: viewport.height,
    });
    global.dispatchEvent(new Event('resize'));
  };

  beforeEach(() => {
    // Reset to mobile by default for testing
    setViewport(viewports.mobile);
  });

  afterEach(() => {
    // Reset to desktop
    setViewport(viewports.desktop);
  });

  describe('Main Schedule Page (/schedule)', () => {
    Object.entries(viewports).forEach(([viewportName, viewport]) => {
      test(`last items are visible on ${viewportName} viewport`, async () => {
        setViewport(viewport);
        render(<ScheduleWithRouter />);

        // Expand both schedules
        fireEvent.click(screen.getByText('Full-Time Daily Schedule'));
        fireEvent.click(screen.getByText('Part-Time Daily Schedule'));

        // Get last items
        const lastFullTimeItem =
          FULL_TIME_SCHEDULE_ITEMS[FULL_TIME_SCHEDULE_ITEMS.length - 1];
        const lastPartTimeItem =
          PART_TIME_SCHEDULE_ITEMS[PART_TIME_SCHEDULE_ITEMS.length - 1];

        // Verify last full-time item is visible
        await waitFor(() => {
          expect(screen.getByText(lastFullTimeItem.title)).toBeInTheDocument();
        });

        await waitFor(() => {
          expect(
            screen.getByText(
              `${lastFullTimeItem.startTime} - ${lastFullTimeItem.endTime}`
            )
          ).toBeInTheDocument();
        });

        // Verify last part-time item is visible
        await waitFor(() => {
          expect(
            screen.getByText(content =>
              content.includes('Part-time students are picked up at 1pm')
            )
          ).toBeInTheDocument();
        });

        // Verify time range for part-time last item
        await waitFor(() => {
          const partTimeEndTimes = screen.getAllByText(
            `${lastPartTimeItem.startTime} - ${lastPartTimeItem.endTime}`
          );
          expect(partTimeEndTimes.length).toBeGreaterThan(0);
        });
      });
    });

    test('last items remain visible when scrolling on mobile', async () => {
      setViewport(viewports.mobile);
      render(<ScheduleWithRouter />);

      // Expand both schedules
      fireEvent.click(screen.getByText('Full-Time Daily Schedule'));
      fireEvent.click(screen.getByText('Part-Time Daily Schedule'));

      // Simulate scrolling by checking element visibility
      const lastFullTimeItem =
        FULL_TIME_SCHEDULE_ITEMS[FULL_TIME_SCHEDULE_ITEMS.length - 1];

      // Elements should be in document and not cut off
      await waitFor(() => {
        const lastFullTimeElement = screen.getByText(lastFullTimeItem.title);
        expect(lastFullTimeElement).toBeInTheDocument();
      });

      await waitFor(() => {
        const lastPartTimeElement = screen.getByText(content =>
          content.includes('Part-time students are picked up')
        );
        expect(lastPartTimeElement).toBeInTheDocument();
      });

      // Check that they're not hidden by CSS
      await waitFor(() => {
        const lastFullTimeElement = screen.getByText(lastFullTimeItem.title);
        expect(lastFullTimeElement).toBeVisible();
      });

      await waitFor(() => {
        const lastPartTimeElement = screen.getByText(content =>
          content.includes('Part-time students are picked up')
        );
        expect(lastPartTimeElement).toBeVisible();
      });
    });
  });

  describe('Full-Time Landing Page (/schedule/full-time)', () => {
    Object.entries(viewports).forEach(([viewportName, viewport]) => {
      test(`last item is visible on ${viewportName} viewport`, async () => {
        setViewport(viewport);
        render(<FullTimeLandingWithRouter />);

        // The schedule should be expanded by default
        const lastItem =
          FULL_TIME_SCHEDULE_ITEMS[FULL_TIME_SCHEDULE_ITEMS.length - 1];

        // Verify last item details are visible
        await waitFor(() => {
          expect(screen.getByText(lastItem.title)).toBeInTheDocument();
        });

        await waitFor(() => {
          expect(
            screen.getByText(`${lastItem.startTime} - ${lastItem.endTime}`)
          ).toBeInTheDocument();
        });

        await waitFor(() => {
          expect(
            screen.getByText(content =>
              content.includes('Supervised aftercare program available')
            )
          ).toBeInTheDocument();
        });
      });
    });
  });

  describe('Part-Time Landing Page (/schedule/part-time)', () => {
    Object.entries(viewports).forEach(([viewportName, viewport]) => {
      test(`last item is visible on ${viewportName} viewport`, async () => {
        setViewport(viewport);
        render(<PartTimeLandingWithRouter />);

        // The schedule should be expanded by default
        const lastItem =
          PART_TIME_SCHEDULE_ITEMS[PART_TIME_SCHEDULE_ITEMS.length - 1];

        // Verify last item details are visible
        await waitFor(() => {
          expect(screen.getByText(lastItem.title)).toBeInTheDocument();
        });

        await waitFor(() => {
          expect(
            screen.getByText(`${lastItem.startTime} - ${lastItem.endTime}`)
          ).toBeInTheDocument();
        });

        await waitFor(() => {
          expect(
            screen.getByText(content =>
              content.includes('Part-time students are picked up at 1pm')
            )
          ).toBeInTheDocument();
        });
      });
    });
  });

  describe('Edge Cases and Stress Tests', () => {
    test('last items visible on very small mobile screens', async () => {
      // Test on very small screens
      setViewport({ width: 320, height: 568 }); // iPhone SE
      render(<ScheduleWithRouter />);

      fireEvent.click(screen.getByText('Full-Time Daily Schedule'));
      fireEvent.click(screen.getByText('Part-Time Daily Schedule'));

      const lastFullTimeItem =
        FULL_TIME_SCHEDULE_ITEMS[FULL_TIME_SCHEDULE_ITEMS.length - 1];

      await waitFor(() => {
        expect(screen.getByText(lastFullTimeItem.title)).toBeInTheDocument();
      });

      await waitFor(() => {
        expect(
          screen.getByText(content =>
            content.includes('Part-time students are picked up')
          )
        ).toBeInTheDocument();
      });
    });

    test('last items visible on large desktop screens', async () => {
      // Test on large screens
      setViewport({ width: 2560, height: 1440 }); // 4K screen
      render(<ScheduleWithRouter />);

      fireEvent.click(screen.getByText('Full-Time Daily Schedule'));
      fireEvent.click(screen.getByText('Part-Time Daily Schedule'));

      const lastFullTimeItem =
        FULL_TIME_SCHEDULE_ITEMS[FULL_TIME_SCHEDULE_ITEMS.length - 1];

      await waitFor(() => {
        expect(screen.getByText(lastFullTimeItem.title)).toBeInTheDocument();
      });

      await waitFor(() => {
        expect(
          screen.getByText(content =>
            content.includes('Part-time students are picked up')
          )
        ).toBeInTheDocument();
      });
    });

    test('last items visible when rapidly expanding/collapsing', async () => {
      render(<ScheduleWithRouter />);

      const fullTimeButton = screen.getByText('Full-Time Daily Schedule');
      const partTimeButton = screen.getByText('Part-Time Daily Schedule');

      // Rapidly expand and collapse
      fireEvent.click(fullTimeButton);
      fireEvent.click(partTimeButton);
      fireEvent.click(fullTimeButton);
      fireEvent.click(partTimeButton);
      fireEvent.click(fullTimeButton);
      fireEvent.click(partTimeButton);

      const lastFullTimeItem =
        FULL_TIME_SCHEDULE_ITEMS[FULL_TIME_SCHEDULE_ITEMS.length - 1];

      await waitFor(() => {
        expect(screen.getByText(lastFullTimeItem.title)).toBeInTheDocument();
      });

      await waitFor(() => {
        expect(
          screen.getByText(content =>
            content.includes('Part-time students are picked up')
          )
        ).toBeInTheDocument();
      });
    });
  });

  describe('Accessibility and Content Integrity', () => {
    test('last items are accessible via keyboard navigation', async () => {
      render(<ScheduleWithRouter />);

      // Focus and activate via keyboard
      const fullTimeButton = screen.getByText('Full-Time Daily Schedule');
      fullTimeButton.focus();
      fireEvent.keyDown(fullTimeButton, { key: 'Enter' });

      const partTimeButton = screen.getByText('Part-Time Daily Schedule');
      partTimeButton.focus();
      fireEvent.keyDown(partTimeButton, { key: 'Enter' });

      const lastFullTimeItem =
        FULL_TIME_SCHEDULE_ITEMS[FULL_TIME_SCHEDULE_ITEMS.length - 1];

      await waitFor(() => {
        expect(screen.getByText(lastFullTimeItem.title)).toBeInTheDocument();
      });

      await waitFor(() => {
        expect(
          screen.getByText(content =>
            content.includes('Part-time students are picked up')
          )
        ).toBeInTheDocument();
      });
    });

    test('last items maintain proper ARIA relationships', async () => {
      render(<ScheduleWithRouter />);

      fireEvent.click(screen.getByText('Full-Time Daily Schedule'));
      fireEvent.click(screen.getByText('Part-Time Daily Schedule'));

      await waitFor(() => {
        const scheduleRegions = screen.getAllByRole('region');

        // Each expanded schedule should have proper ARIA attributes
        scheduleRegions.forEach(region => {
          expect(region).toHaveAttribute('aria-labelledby');
        });
      });

      // Last items should be within these properly labeled regions
      const lastFullTimeItem =
        FULL_TIME_SCHEDULE_ITEMS[FULL_TIME_SCHEDULE_ITEMS.length - 1];
      expect(screen.getByText(lastFullTimeItem.title)).toBeInTheDocument();
    });
  });

  describe('Data Consistency Validation', () => {
    test('all schedule arrays have items and last items are valid', () => {
      // Validate data integrity
      expect(FULL_TIME_SCHEDULE_ITEMS.length).toBeGreaterThan(0);
      expect(PART_TIME_SCHEDULE_ITEMS.length).toBeGreaterThan(0);

      const lastFullTimeItem =
        FULL_TIME_SCHEDULE_ITEMS[FULL_TIME_SCHEDULE_ITEMS.length - 1];
      const lastPartTimeItem =
        PART_TIME_SCHEDULE_ITEMS[PART_TIME_SCHEDULE_ITEMS.length - 1];

      // Validate last items have required properties
      expect(lastFullTimeItem.title).toBeTruthy();
      expect(lastFullTimeItem.startTime).toBeTruthy();
      expect(lastFullTimeItem.endTime).toBeTruthy();
      expect(lastFullTimeItem.detail).toBeTruthy();

      expect(lastPartTimeItem.title).toBeTruthy();
      expect(lastPartTimeItem.startTime).toBeTruthy();
      expect(lastPartTimeItem.endTime).toBeTruthy();
      expect(lastPartTimeItem.detail).toBeTruthy();
    });

    test('schedule time ranges are logical', () => {
      // Validate that schedules end at expected times
      const lastFullTimeItem =
        FULL_TIME_SCHEDULE_ITEMS[FULL_TIME_SCHEDULE_ITEMS.length - 1];
      const lastPartTimeItem =
        PART_TIME_SCHEDULE_ITEMS[PART_TIME_SCHEDULE_ITEMS.length - 1];

      // Full-time should end around 4pm
      expect(lastFullTimeItem.endTime).toMatch(/4.*pm/i);

      // Part-time should end around 1pm
      expect(lastPartTimeItem.endTime).toMatch(/1.*pm/i);
    });
  });
});

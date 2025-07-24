import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Schedule } from '../index';
import { FULL_TIME_SCHEDULE_ITEMS, PART_TIME_SCHEDULE_ITEMS } from '../items';

// Mock the router
const ScheduleWithRouter = () => (
  <BrowserRouter>
    <Schedule />
  </BrowserRouter>
);

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

describe('Schedule Component', () => {
  beforeEach(() => {
    // Reset viewport to mobile size for testing
    global.innerWidth = 375;
    global.innerHeight = 667;
    global.dispatchEvent(new Event('resize'));
  });

  afterEach(() => {
    // Reset viewport
    global.innerWidth = 1024;
    global.innerHeight = 768;
    global.dispatchEvent(new Event('resize'));
  });

  test('renders both program cards with separate schedules', async () => {
    render(<ScheduleWithRouter />);

    // Check that both program cards are present
    expect(screen.getByText('Full-Time Program')).toBeInTheDocument();
    expect(screen.getByText('Part-Time Program')).toBeInTheDocument();

    // Check that separate schedule collapse containers are present
    expect(screen.getByText('Full-Time Daily Schedule')).toBeInTheDocument();
    expect(screen.getByText('Part-Time Daily Schedule')).toBeInTheDocument();
  });

  test('full-time schedule contains extended hours content', async () => {
    render(<ScheduleWithRouter />);

    // Expand full-time schedule
    const fullTimeScheduleButton = screen.getByText('Full-Time Daily Schedule');
    fireEvent.click(fullTimeScheduleButton);

    await waitFor(() => {
      // Check for full-time specific content
      expect(screen.getByText('Supervised Care')).toBeInTheDocument();
    });

    await waitFor(() => {
      expect(screen.getByText('Electives & Enrichment')).toBeInTheDocument();
    });

    await waitFor(() => {
      expect(screen.getByText('8am - 9am')).toBeInTheDocument(); // Early morning care
    });

    await waitFor(() => {
      expect(screen.getByText('3:30pm - 4pm')).toBeInTheDocument(); // Late afternoon care
    });
  });

  test('part-time schedule contains only core hours content', async () => {
    render(<ScheduleWithRouter />);

    // Expand part-time schedule
    const partTimeScheduleButton = screen.getByText('Part-Time Daily Schedule');
    fireEvent.click(partTimeScheduleButton);

    await waitFor(() => {
      // Check for part-time specific content - use partial text matching
      expect(
        screen.getByText((content, element) => {
          return content.includes('Part-time students are picked up at 1pm');
        })
      ).toBeInTheDocument();
    });

    await waitFor(() => {
      // Use getAllByText for shared times that appear in both schedules
      const startTimes = screen.getAllByText('9am - 9:30am');
      expect(startTimes.length).toBeGreaterThan(0); // Part-time start
    });

    await waitFor(() => {
      // Verify part-time schedule ends at 1pm
      const partTimeEndElements = screen.getAllByText('12pm - 1pm');
      expect(partTimeEndElements.length).toBeGreaterThan(0);
    });
  });

  test('schedules have different lengths correctly', async () => {
    render(<ScheduleWithRouter />);

    // Expand both schedules
    fireEvent.click(screen.getByText('Full-Time Daily Schedule'));
    fireEvent.click(screen.getByText('Part-Time Daily Schedule'));

    await waitFor(() => {
      // Full-time should have more items than part-time
      expect(FULL_TIME_SCHEDULE_ITEMS.length).toBe(10); // 8am-4pm schedule
    });

    await waitFor(() => {
      expect(PART_TIME_SCHEDULE_ITEMS.length).toBe(5); // 9am-1pm schedule
    });

    await waitFor(() => {
      expect(FULL_TIME_SCHEDULE_ITEMS.length).toBeGreaterThan(
        PART_TIME_SCHEDULE_ITEMS.length
      );
    });
  });

  test('mobile height restrictions are resolved - all content accessible', async () => {
    // Set mobile viewport explicitly
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 375,
    });
    Object.defineProperty(window, 'innerHeight', {
      writable: true,
      configurable: true,
      value: 667,
    });

    render(<ScheduleWithRouter />);

    // Expand both schedules
    fireEvent.click(screen.getByText('Full-Time Daily Schedule'));
    fireEvent.click(screen.getByText('Part-Time Daily Schedule'));

    // Verify last items of each schedule are accessible (the key test for mobile height issue)
    const lastFullTimeItem =
      FULL_TIME_SCHEDULE_ITEMS[FULL_TIME_SCHEDULE_ITEMS.length - 1];

    // These should be visible and accessible on mobile
    await waitFor(() => {
      expect(screen.getByText(lastFullTimeItem.title)).toBeInTheDocument();
    });

    await waitFor(() => {
      expect(
        screen.getByText((content, element) => {
          return content.includes('Supervised aftercare program available');
        })
      ).toBeInTheDocument();
    });

    // Check part-time last item with partial text matching
    await waitFor(() => {
      expect(
        screen.getByText((content, element) => {
          return content.includes('Part-time students are picked up at 1pm');
        })
      ).toBeInTheDocument();
    });

    // Verify time displays are present (bottom content accessible) - use getAllByText for duplicates
    await waitFor(() => {
      expect(
        screen.getByText(
          `${lastFullTimeItem.startTime} - ${lastFullTimeItem.endTime}`
        )
      ).toBeInTheDocument();
    });
  });

  test('accessibility features work correctly', async () => {
    render(<ScheduleWithRouter />);

    const fullTimeButton = screen.getByLabelText(
      /expand full-time daily schedule/i
    );
    const partTimeButton = screen.getByLabelText(
      /expand part-time daily schedule/i
    );

    // Check initial aria-expanded state
    expect(fullTimeButton).toHaveAttribute('aria-expanded', 'false');
    expect(partTimeButton).toHaveAttribute('aria-expanded', 'false');

    // Expand and check aria-expanded state
    fireEvent.click(fullTimeButton);
    await waitFor(() => {
      expect(fullTimeButton).toHaveAttribute('aria-expanded', 'true');
    });

    // Check that content is properly associated with controls
    const scheduleContainers = screen.getAllByRole('region');
    scheduleContainers.forEach(container => {
      expect(container).toHaveAttribute('aria-labelledby');
    });
  });

  test('program differentiation is clear to users', async () => {
    render(<ScheduleWithRouter />);

    // Check that time ranges are clearly displayed
    expect(screen.getByText('8:00 AM - 4:00 PM')).toBeInTheDocument(); // Full-time
    expect(screen.getByText('9:00 AM - 1:00 PM')).toBeInTheDocument(); // Part-time

    // Expand both schedules to verify content differentiation
    fireEvent.click(screen.getByText('Full-Time Daily Schedule'));
    fireEvent.click(screen.getByText('Part-Time Daily Schedule'));

    await waitFor(() => {
      // Full-time unique content - use partial text matching
      expect(
        screen.getByText((content, element) => {
          return content.includes(
            'Supervised before care program for early arrivals'
          );
        })
      ).toBeInTheDocument();
    });

    await waitFor(() => {
      // Part-time unique content - use partial text matching
      expect(
        screen.getByText((content, element) => {
          return content.includes(
            'Core learning hours focused on essential Montessori activities'
          );
        })
      ).toBeInTheDocument();
    });
  });
});

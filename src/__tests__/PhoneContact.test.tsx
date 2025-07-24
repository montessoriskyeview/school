import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { PhoneContact } from '../components/shared/PhoneContact';
import { getMockAnalytics, clearMockAnalytics } from '../utils/analytics';

describe('PhoneContact Component', () => {
  beforeEach(() => {
    clearMockAnalytics();
  });

  test('renders with default props', () => {
    render(<PhoneContact />);
    const link = screen.getByRole('link', {
      name: /call montessori skye view/i,
    });
    expect(link).toBeInTheDocument();
    expect(link).toHaveTextContent('📞 Call Us');
  });

  test('renders with custom children', () => {
    render(<PhoneContact>Custom Phone Text</PhoneContact>);
    const link = screen.getByRole('link', {
      name: /call montessori skye view/i,
    });
    expect(link).toHaveTextContent('Custom Phone Text');
  });

  test('tracks conversion when clicked', () => {
    render(<PhoneContact />);
    const link = screen.getByRole('link', {
      name: /call montessori skye view/i,
    });

    fireEvent.click(link);

    const mockAnalytics = getMockAnalytics();
    expect(mockAnalytics).toBeTruthy();

    const events = mockAnalytics!.getEvents();
    expect(events).toHaveLength(1);
    expect(events[0]).toEqual({
      event: 'conversion',
      send_to: 'AW-16665018583/mY27CN7niPQaENeBwIo-',
    });
  });

  test('has correct tel href', () => {
    render(<PhoneContact />);
    const link = screen.getByRole('link', {
      name: /call montessori skye view/i,
    });
    expect(link).toHaveAttribute('href', expect.stringContaining('tel:'));
  });

  test('applies button variant styles', () => {
    render(<PhoneContact variant="button" />);
    const link = screen.getByRole('link', {
      name: /call montessori skye view/i,
    });
    expect(link).toBeInTheDocument();
  });

  test('applies custom sx styles', () => {
    render(<PhoneContact sx={{ color: 'red' }} />);
    const link = screen.getByRole('link', {
      name: /call montessori skye view/i,
    });
    expect(link).toBeInTheDocument();
  });
});

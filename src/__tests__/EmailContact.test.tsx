import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { EmailContact } from '../components/shared/EmailContact';

// Mock gtag
const mockGtag = jest.fn();
Object.defineProperty(window, 'gtag', {
  value: mockGtag,
  writable: true,
});

describe('EmailContact Component', () => {
  beforeEach(() => {
    mockGtag.mockClear();
  });

  test('renders with default props', () => {
    render(<EmailContact />);
    const link = screen.getByRole('link', {
      name: /email montessori skye view/i,
    });
    expect(link).toBeInTheDocument();
    expect(link).toHaveTextContent('✉️ Email Us');
  });

  test('renders with custom children', () => {
    render(<EmailContact>Custom Email Text</EmailContact>);
    const link = screen.getByRole('link', {
      name: /email montessori skye view/i,
    });
    expect(link).toHaveTextContent('Custom Email Text');
  });

  test('tracks conversion when clicked', () => {
    render(<EmailContact />);
    const link = screen.getByRole('link', {
      name: /email montessori skye view/i,
    });

    fireEvent.click(link);

    expect(mockGtag).toHaveBeenCalledWith('event', 'conversion', {
      send_to: 'AW-16665018583/Z8tpCOHniPQaENeBwIo-',
      value: 1.0,
      currency: 'USD',
    });
  });

  test('has correct mailto href', () => {
    render(<EmailContact />);
    const link = screen.getByRole('link', {
      name: /email montessori skye view/i,
    });
    expect(link).toHaveAttribute('href', expect.stringContaining('mailto:'));
  });

  test('applies button variant styles', () => {
    render(<EmailContact variant="button" />);
    const link = screen.getByRole('link', {
      name: /email montessori skye view/i,
    });
    expect(link).toBeInTheDocument();
  });

  test('applies custom sx styles', () => {
    render(<EmailContact sx={{ color: 'red' }} />);
    const link = screen.getByRole('link', {
      name: /email montessori skye view/i,
    });
    expect(link).toBeInTheDocument();
  });
});

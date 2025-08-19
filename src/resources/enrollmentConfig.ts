// Enrollment Configuration
// Update this file to change enrollment periods, links, and tracking

export interface IEnrollmentPeriod {
  id: string;
  title: string;
  href: string;
  isActive: boolean;
  conversionId?: string; // Optional: different conversion tracking for different periods
  availableInEnrollment?: boolean;
}

export const ENROLLMENT_PERIODS: IEnrollmentPeriod[] = [
  // {
  //   id: 'summer-2025',
  //   title: '2025 Summer camp',
  //   href: 'https://docs.google.com/forms/d/e/1FAIpQLScRhvdYehIa5daTIsg1npb9pvcU-Vui9GG-wWkUIp9V4PJFzA/viewform',
  //   isActive: false,
  // },
  {
    id: 'fall-2025',
    title: '2025 Fall registration',
    href: 'https://forms.gle/oLbEBeBKnYjJDNBt6',
    isActive: true,
    conversionId: 'AW-16665018583/J6ldCMiWifQaENeBwIo-',
    availableInEnrollment: true,
  },
  // Add new enrollment periods here
  // Example for Spring 2026:
  {
    id: 'spring-2026',
    title: '2026 Spring registration',
    href: 'https://docs.google.com/forms/d/e/1FAIpQLSeXyE5cAKCPzxmLsZehL1N0JzsEvhrPIoVWPgk7E8sJpAkfCA/viewform?usp=sharing&ouid=115535732520602114062',
    isActive: true,
    availableInEnrollment: true,
  },
  {
    id: 'summer-2026',
    title: '2026 Summer camp',
    href: 'https://forms.gle/BW3jYyWHsSKa58C58',
    isActive: false,
    availableInEnrollment: true,
  },
  {
    id: 'fall-2026',
    title: '2026 Fall registration',
    href: 'https://forms.gle/6ZQoGdRa2qQZmrQ99',
    isActive: false,
    availableInEnrollment: true,
  },
];

// Default conversion tracking ID
export const DEFAULT_CONVERSION_ID = 'AW-16665018583/vFD0CPHVzcgZENeBwIo-';

// Helper function to get active enrollment periods
export const getActiveEnrollmentPeriods = () => {
  return ENROLLMENT_PERIODS.filter(period => period.isActive);
};

export const getNextActiveEnrollmentPeriod = () => {
  return ENROLLMENT_PERIODS[0];
};

// Helper function to get a specific enrollment period by ID
export const getEnrollmentPeriod = (id: string) => {
  return ENROLLMENT_PERIODS.find(period => period.id === id);
};

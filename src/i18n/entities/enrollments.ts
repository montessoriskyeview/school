// Enrollment Configuration
// Update this file to change enrollment periods, links, and tracking

export interface EnrollmentPeriod {
  id: string;
  title: string;
  href: string;
  isActive: boolean;
  conversionId?: string; // Optional: different conversion tracking for different periods
  availableInEnrollment?: boolean;
}

export type EnrollmentSlot = EnrollmentPeriod | null;

// Keep 4 explicit slots so swapping in new enrollment periods is easy.
// Any slot can be set to null when it is not in use.
const slot1: EnrollmentSlot = {
  id: 'summer-2026',
  title: '2026 Summer camp',
  href: 'https://forms.gle/BW3jYyWHsSKa58C58',
  isActive: false,
  availableInEnrollment: true,
};

const slot2: EnrollmentSlot = {
  id: 'fall-2026',
  title: '2026 Fall registration',
  href: 'https://forms.gle/6ZQoGdRa2qQZmrQ99',
  isActive: false,
  availableInEnrollment: true,
};

const slot3: EnrollmentSlot = null;
const slot4: EnrollmentSlot = null;

export const ENROLLMENT_SLOTS: [
  EnrollmentSlot,
  EnrollmentSlot,
  EnrollmentSlot,
  EnrollmentSlot,
] = [slot1, slot2, slot3, slot4];

export const ENROLLMENT_PERIODS: EnrollmentPeriod[] = ENROLLMENT_SLOTS.filter(
  (slot): slot is EnrollmentPeriod => slot !== null
);

// Default conversion tracking ID
export const DEFAULT_CONVERSION_ID = 'AW-16665018583/vFD0CPHVzcgZENeBwIo-';

const FALLBACK_ENROLLMENT_PERIOD: EnrollmentPeriod = {
  id: 'enrollment-fallback',
  title: 'Enrollment opportunities',
  href: '/enrollments',
  isActive: false,
  availableInEnrollment: false,
};

// Helper function to get active enrollment periods
export const getActiveEnrollmentPeriods = () => {
  return ENROLLMENT_PERIODS.filter(period => period.isActive);
};

export const getNextActiveEnrollmentPeriod = () => {
  return getActiveEnrollmentPeriods()[0] || ENROLLMENT_PERIODS[0] || FALLBACK_ENROLLMENT_PERIOD;
};

// Helper function to get a specific enrollment period by ID
export const getEnrollmentPeriod = (id: string) => {
  return ENROLLMENT_PERIODS.find(period => period.id === id);
};

/**
 * Contact utilities for Montessori Skye View Learning Center
 *
 * This file contains shared contact information and utility functions
 * to ensure consistency across all components that handle contact interactions.
 */

// Contact Information Constants
export const PHONE = '7605340671';
export const PHONE_LINK = `tel:${PHONE}`;
export const PHONE_FORMATTED = '(760) 534-0671';
export const PHONE_INTERNATIONAL = '+1-760-534-0671';
export const EMAIL = 'NWLVMontessori@gmail.com'.toLowerCase();

// Email Template Configuration
export const EMAIL_SUBJECT = 'Inquiry from Montessori Skye View Website';
export const INCLUDE_BODY = false;
export const EMAIL_BODY = `Hello,

I'm interested in learning more about Montessori Skye View Learning Center.

Please provide me with information about:
- Tour availability
- Enrollment availability
- Program details
- Tuition information
- Any other relevant information

Thank you!`;

/**
 * Creates a mailto URL with consistent subject and body for all email links
 *
 * This function ensures that all email links across the website use the same
 * subject line and body template, providing a consistent experience for users
 * and making it easier for staff to identify and respond to website inquiries.
 *
 * @returns {string} Complete mailto URL with subject and body parameters
 *
 * @example
 * ```tsx
 * <a href={createEmailLink()}>Email Us</a>
 * ```
 */
export const createEmailLink = (): string => {
  const encodedSubject = encodeURIComponent(EMAIL_SUBJECT);
  const encodedBody = encodeURIComponent(EMAIL_BODY);

  if (INCLUDE_BODY) {
    return `mailto:${EMAIL}?subject=${encodedSubject}&body=${encodedBody}`;
  }

  return `mailto:${EMAIL}?subject=${encodedSubject}`;
};

/**
 * Creates a phone link with the standard phone number
 *
 * @returns {string} Complete tel URL
 */
export const createPhoneLink = (): string => {
  return `tel:${PHONE}`;
};

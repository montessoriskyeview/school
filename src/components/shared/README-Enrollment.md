# Enrollment System Documentation

## Overview
The enrollment system has been consolidated into a centralized, easy-to-manage configuration. This eliminates code duplication and makes it simple to update enrollment periods, links, and tracking.

## Files

### 1. `src/resources/enrollmentConfig.ts`
**Main configuration file** - Update this file to change enrollment periods.

```typescript
export const ENROLLMENT_PERIODS: IEnrollmentPeriod[] = [
  {
    id: 'fall-2025',
    title: '2025 Fall registration',
    href: 'https://docs.google.com/forms/d/19bOfuNiJR8HAGdgXSdWjJ8g8R7QgJ0o9hil6uiXYCvU/viewform',
    isActive: true,
  },
  // Add new periods here
];
```

### 2. `src/components/shared/EnrollmentButton.tsx`
Individual enrollment button component with tracking.

### 3. `src/components/shared/EnrollmentButtons.tsx`
Component that automatically renders all active enrollment buttons.

## How to Update Enrollment Periods

### Adding a New Enrollment Period

1. **Edit `src/resources/enrollmentConfig.ts`**
   ```typescript
   {
     id: 'spring-2026',
     title: '2026 Spring registration',
     href: 'YOUR_NEW_FORM_LINK',
     isActive: true,
   }
   ```

2. **The buttons will automatically update everywhere!**

### Deactivating an Enrollment Period

1. **Edit `src/resources/enrollmentConfig.ts`**
   ```typescript
   {
     id: 'fall-2025',
     title: '2025 Fall registration',
     href: '...',
     isActive: false, // Set to false to hide
   }
   ```

### Changing Links

1. **Edit `src/resources/enrollmentConfig.ts`**
   ```typescript
   {
     id: 'fall-2025',
     title: '2025 Fall registration',
     href: 'NEW_LINK_HERE', // Update the href
     isActive: true,
   }
   ```

### Custom Conversion Tracking

If you need different conversion tracking for different periods:

```typescript
{
  id: 'fall-2025',
  title: '2025 Fall registration',
  href: '...',
  isActive: true,
  conversionId: 'AW-16665018583/CUSTOM_CONVERSION_ID', // Optional
}
```

## Usage Examples

### Single Button
```tsx
import { EnrollmentButton } from './EnrollmentButton';

<EnrollmentButton href="https://example.com" variant="primary">
  Register Now
</EnrollmentButton>
```

### Multiple Buttons (Auto-generated)
```tsx
import { EnrollmentButtons } from './EnrollmentButtons';

<EnrollmentButtons 
  variant="primary"
  maxButtons={3} // Optional: limit number of buttons
/>
```

## Benefits

1. **No Code Duplication**: Single source of truth for enrollment data
2. **Easy Updates**: Change one file to update everywhere
3. **Automatic Tracking**: All buttons automatically include conversion tracking
4. **Flexible**: Support for different conversion IDs per period
5. **Responsive**: Works on all screen sizes
6. **Accessible**: Follows accessibility guidelines

## Migration Notes

- Old individual `Link` components have been replaced with `EnrollmentButton`
- Duplicated tracking functions have been consolidated
- All enrollment periods are now managed in one configuration file
- The system automatically shows/hides buttons based on `isActive` status 
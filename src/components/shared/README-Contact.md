# Contact System Documentation

## Overview
The contact system has been centralized to ensure consistency across all components that handle contact interactions. This eliminates code duplication and ensures all email links use the same subject and body template.

## Files

### 1. `src/components/shared/contactUtils.ts`
**Main utilities file** - Contains all contact information and utility functions.

```typescript
// Contact Information Constants
export const PHONE = '7027219488';
export const EMAIL = 'NWLVMontessori@gmail.com'.toLowerCase();

// Email Template Configuration
export const EMAIL_SUBJECT = 'Inquiry from Skyeview Montessori Website';
export const EMAIL_BODY = `Hello,

I'm interested in learning more about Skyeview Montessori Learning Center.

Please provide me with information about:
- Tour availability
- Enrollment availability
- Program details
- Tuition information
- Any other relevant information

Thank you!`;

// Utility Functions
export const createEmailLink = (): string => { /* ... */ };
export const createPhoneLink = (): string => { /* ... */ };
```

### 2. `src/components/shared/ContactInfo.tsx`
Contact information component that displays phone and email links.

### 3. `src/components/shared/MobileHeroCTA.tsx`
Mobile call-to-action component with contact buttons.

## How to Update Contact Information

### Changing Phone Number

1. **Edit `src/components/shared/contactUtils.ts`**
   ```typescript
   export const PHONE = 'NEW_PHONE_NUMBER';
   ```

2. **All components will automatically update!**

### Changing Email Address

1. **Edit `src/components/shared/contactUtils.ts`**
   ```typescript
   export const EMAIL = 'NEW_EMAIL@gmail.com'.toLowerCase();
   ```

### Updating Email Template

1. **Edit `src/components/shared/contactUtils.ts`**
   ```typescript
   export const EMAIL_SUBJECT = 'New Subject Line';
   export const EMAIL_BODY = `New email body template...`;
   ```

## Usage Examples

### Email Links
```tsx
import { createEmailLink } from './contactUtils';

<a href={createEmailLink()}>Email Us</a>
```

### Phone Links
```tsx
import { createPhoneLink } from './contactUtils';

<a href={createPhoneLink()}>Call Us</a>
```

### Using Constants Directly
```tsx
import { PHONE, EMAIL } from './contactUtils';

<span>Phone: {PHONE}</span>
<span>Email: {EMAIL}</span>
```

## Benefits

1. **Consistency**: All email links use the same subject and body template
2. **Easy Updates**: Change one file to update everywhere
3. **Professional**: Pre-filled email template makes it easier for users to contact
4. **Staff Efficiency**: Consistent subject lines help staff identify website inquiries
5. **No Code Duplication**: Single source of truth for contact information
6. **Maintainable**: Easy to update contact information across the entire site

## Email Template Benefits

The standardized email template provides:

- **Clear Subject Line**: "Inquiry from Skyeview Montessori Website" helps staff identify source
- **Structured Request**: Pre-filled body includes all common inquiry points
- **Professional Format**: Consistent formatting across all email inquiries
- **User-Friendly**: Reduces friction for users who want to contact the school
- **Complete Information**: Covers tour, enrollment, programs, tuition, and other details

## Migration Notes

- Old inline email construction has been replaced with `createEmailLink()`
- Duplicated contact constants have been consolidated
- All contact information is now managed in one utilities file
- Email links now include consistent subject and body templates
- Phone links use the standardized `createPhoneLink()` function

## Best Practices

1. **Always use the utility functions** instead of constructing links manually
2. **Import constants** from `contactUtils.ts` instead of defining them locally
3. **Test email links** after updating the template to ensure proper encoding
4. **Keep the email template** professional and comprehensive
5. **Update documentation** when changing contact information

## Testing

After updating contact information:

1. Test email links open with correct subject and body
2. Test phone links work on mobile devices
3. Verify all components display updated information
4. Check that email template is properly encoded
5. Test on different email clients to ensure compatibility 
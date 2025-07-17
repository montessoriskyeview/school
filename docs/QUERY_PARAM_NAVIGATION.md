# Query Parameter Navigation

## Overview

The Montessori Skye View Learning Center website now supports query parameter navigation, allowing direct access to pages using URLs like `?p=registration`.

## How It Works

### Basic Usage

Instead of navigating to `/registration`, you can now use:
```
https://montessoriskyeview.com/?p=registration
```

### Supported Page Parameters

| Parameter | Route | Description |
|-----------|-------|-------------|
| `home` | `/` | Home page |
| `registration` | `/registration` | Registration page |
| `tuition` | `/tuition` | Tuition page |
| `schedule` | `/schedule` | Schedule page |
| `location` | `/location` | Location page |
| `philosophy` | `/philosophy` | Philosophy page |
| `contact` | `/contact` | Contact page |
| `faq` | `/faq` | FAQ page |
| `accessibility` | `/accessibility` | Accessibility page |
| `review` | `/review` | Review page |
| `blog` | `/blog` | Blog page |

### Examples

- **Registration**: `https://montessoriskyeview.com/?p=registration`
- **Tuition**: `https://montessoriskyeview.com/?p=tuition`
- **Schedule**: `https://montessoriskyeview.com/?p=schedule`
- **Location**: `https://montessoriskyeview.com/?p=location`

## Technical Implementation

### Files Modified

1. **`src/hooks/useQueryParams.ts`** - Custom hook for handling query parameters
2. **`src/utils/navigation.ts`** - Utility functions for page mapping
3. **`src/App.tsx`** - Added query parameter handling to routing
4. **`src/views/ErrorView.tsx`** - Improved error page for better UX

### How It Works

1. When a user visits a URL with `?p=page`, the `useQueryParams` hook detects the parameter
2. The hook maps the page parameter to the corresponding route
3. The user is automatically redirected to the correct page
4. The query parameter is removed from the URL for clean navigation

### Benefits

- **Direct URL Access**: Users can bookmark and share direct links to specific pages
- **Better SEO**: Search engines can index specific pages directly
- **Improved UX**: No more 404 errors when accessing pages directly
- **Clean URLs**: After navigation, URLs are clean without query parameters

## Testing

You can test the functionality by:

1. Visiting the home page and using the demo component
2. Manually typing URLs like `https://montessoriskyeview.com/?p=registration`
3. Using browser bookmarks with query parameters

## Future Enhancements

- Support for additional query parameters (e.g., `?p=registration&tab=fall2025`)
- Analytics tracking for query parameter usage
- Custom redirect rules for specific use cases 
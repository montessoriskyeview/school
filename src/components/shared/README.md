# Shared Components

## Box Component

### Problem
The MUI Box component can cause TypeScript errors like:
```
TS2590: Expression produces a union type that is too complex to represent.
```

This happens when TypeScript can't properly infer the component prop type, leading to overly complex union types.

### Solution
Use the custom `Box` component from `src/components/shared/Box` instead of importing directly from `@mui/material`.

### Usage

**Before (causes TypeScript errors):**
```tsx
import { Box } from '@mui/material';

<Box sx={{ padding: 2 }}>
  Content
</Box>
```

**After (no TypeScript errors):**
```tsx
import { Box } from '../shared/Box';

<Box sx={{ padding: 2 }}>
  Content
</Box>
```

### Features
- Defaults to `component="div"` to avoid union type complexity
- Maintains all MUI Box functionality
- Better TypeScript support
- No need to manually specify `component="div"` everywhere

### Migration
To migrate existing code:
1. Replace `import { Box } from '@mui/material'` with `import { Box } from '../shared/Box'`
2. Remove any existing `component="div"` props (they're now the default)
3. Keep all other props and functionality the same

### When to Use
- Use this Box component for all new components
- Migrate existing Box components when you encounter TypeScript errors
- This is especially helpful in complex components with many props 
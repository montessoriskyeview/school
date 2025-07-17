import { Box as MuiBox, BoxProps as MuiBoxProps } from '@mui/material';
import { forwardRef } from 'react';

// Simplified BoxProps that reduces union type complexity
export interface BoxProps extends Omit<MuiBoxProps, 'component'> {
  component?: React.ElementType;
}

// Custom Box component that defaults to div to avoid TypeScript union type complexity
export const Box = forwardRef<HTMLDivElement, BoxProps>(({ ...props }, ref) => {
  return <MuiBox ref={ref} {...props} component={'div'} />;
});

Box.displayName = 'Box';

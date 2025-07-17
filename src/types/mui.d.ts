// Type declarations to help with MUI Box component TypeScript issues
declare module '@mui/material/Box' {
  import { BoxProps as MuiBoxProps } from '@mui/material';

  // Simplified BoxProps that reduces union type complexity
  export interface SimplifiedBoxProps extends Omit<MuiBoxProps, 'component'> {
    component?: React.ElementType;
  }
}

// Extend the global React namespace to help with component prop types
declare global {
  namespace React {
    interface HTMLAttributes<T> {
      // Add any custom HTML attributes here if needed
    }
  }
}

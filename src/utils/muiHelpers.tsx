import { Box as MuiBox, BoxProps } from '@mui/material';
import { forwardRef } from 'react';

type SimplifiedBoxProps = Omit<BoxProps, 'component'> & {
  component?: React.ElementType;
};

/**
 * Creates a Box component with default div component to avoid TypeScript union type complexity
 * @param defaultComponent - The default component to use (defaults to 'div')
 * @returns A Box component with the specified default component
 */
export const createBox = (defaultComponent: React.ElementType = 'div') => {
  const BoxComponent = forwardRef<HTMLDivElement, SimplifiedBoxProps>(
    ({ component = defaultComponent, ...props }, ref) => {
      return <MuiBox ref={ref} component={'div'} {...props} />;
    }
  );
  BoxComponent.displayName = `Box(${defaultComponent})`;
  return BoxComponent;
};

/**
 * Pre-configured Box component that defaults to div
 * Use this instead of importing Box directly from @mui/material
 */
export const Box = createBox('div');

/**
 * Pre-configured Box component that defaults to section
 */
export const SectionBox = createBox('section');

/**
 * Pre-configured Box component that defaults to article
 */
export const ArticleBox = createBox('article');

/**
 * Pre-configured Box component that defaults to main
 */
export const MainBox = createBox('main');

/**
 * Pre-configured Box component that defaults to aside
 */
export const AsideBox = createBox('aside');

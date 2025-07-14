import { Box, useTheme, BoxProps } from "@mui/material";
import { styled } from '@mui/material/styles';

interface ContentContainerProps extends BoxProps {
  variant?: 'default' | 'card' | 'hero';
  spacing?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const StyledContainer = styled(Box)<ContentContainerProps>`
  border-radius: ${props => {
    switch (props.variant) {
      case 'hero':
        return '0 0 var(--radius-lg) var(--radius-lg)';
      case 'card':
        return 'var(--radius-md)';
      default:
        return 'var(--radius-sm)';
    }
  }};

  background-color: ${props => {
    switch (props.variant) {
      case 'hero':
        return 'var(--primary-blue)';
      case 'card':
        return 'var(--white)';
      default:
        return 'transparent';
    }
  }};

  box-shadow: ${props =>
    props.variant === 'card' ? 'var(--shadow-md)' : 'none'};

  padding: ${props => {
    switch (props.spacing) {
      case 'sm':
        return 'var(--spacing-xl) var(--spacing-lg)';
      case 'lg':
        return 'var(--spacing-3xl) var(--spacing-2xl)';
      default:
        return 'var(--spacing-2xl) var(--spacing-xl)';
    }
  }};

  margin: ${props => {
    switch (props.spacing) {
      case 'sm':
        return 'var(--spacing-xl)';
      case 'lg':
        return 'var(--spacing-3xl)';
      default:
        return 'var(--spacing-2xl)';
    }
  }};

  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);

  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    ${props =>
      props.variant === 'card' &&
      `
      transform: translateY(-4px);
      box-shadow: var(--shadow-lg);
    `}
  }

  @media (max-width: 768px) {
    padding: ${props => {
      switch (props.spacing) {
        case 'sm':
          return 'var(--spacing-lg) var(--spacing-md)';
        case 'lg':
          return 'var(--spacing-2xl) var(--spacing-lg)';
        default:
          return 'var(--spacing-xl) var(--spacing-md)';
      }
    }};

    margin: ${props => {
      switch (props.spacing) {
        case 'sm':
          return 'var(--spacing-lg)';
        case 'lg':
          return 'var(--spacing-xl)';
        default:
          return 'var(--spacing-lg)';
      }
    }};
  }
`;

export const ContentContainer = ({
  variant = 'default',
  spacing = 'md',
  children,
  ...props
}: ContentContainerProps) => {
  return (
    <StyledContainer variant={variant} spacing={spacing} {...props}>
      {children}
    </StyledContainer>
  );
};
import { Typography as MuiTypography, TypographyProps } from '@mui/material';
import { styled } from '@mui/material/styles';

interface CustomTypographyProps extends TypographyProps {
  variant?:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'subtitle1'
    | 'subtitle2'
    | 'body1'
    | 'body2';
  color?: 'primary' | 'secondary' | 'text' | 'light' | 'white';
  component?: React.ElementType;
}

const StyledTypography = styled(MuiTypography)<CustomTypographyProps>`
  font-family: ${props =>
    props.variant?.startsWith('h')
      ? 'var(--font-primary)'
      : 'var(--font-body)'};
  font-size: ${props => {
    switch (props.variant) {
      case 'h1':
        return 'var(--text-5xl)';
      case 'h2':
        return 'var(--text-4xl)';
      case 'h3':
        return 'var(--text-3xl)';
      case 'h4':
        return 'var(--text-2xl)';
      case 'h5':
        return 'var(--text-xl)';
      case 'h6':
        return 'var(--text-lg)';
      case 'subtitle1':
        return 'var(--text-lg)';
      case 'subtitle2':
        return 'var(--text-base)';
      case 'body1':
        return 'var(--text-base)';
      case 'body2':
        return 'var(--text-sm)';
      default:
        return 'var(--text-base)';
    }
  }};
  color: ${props => {
    switch (props.color) {
      case 'primary':
        return 'var(--primary-blue)';
      case 'secondary':
        return 'var(--secondary-purple)';
      case 'text':
        return 'var(--text-dark)';
      case 'light':
        return 'var(--text-light)';
      case 'white':
        return 'var(--white)';
      default:
        return 'var(--text-dark)';
    }
  }};
  line-height: ${props =>
    props.variant?.startsWith('h')
      ? 'var(--leading-tight)'
      : 'var(--leading-normal)'};
  margin-bottom: ${props =>
    props.variant?.startsWith('h') ? 'var(--spacing-lg)' : 'var(--spacing-md)'};
  text-shadow: ${props =>
    props.color === 'white' ? '0 1px 2px rgba(0, 0, 0, 0.1)' : 'none'};
  font-weight: ${props => (props.variant?.startsWith('h') ? '700' : '400')};
`;

export const Typography = (props: CustomTypographyProps) => {
  return <StyledTypography {...props} />;
};

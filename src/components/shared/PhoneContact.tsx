import { Link } from '@mui/material';
import { createPhoneLink } from './contactUtils';

interface IPhoneContactProps {
  children?: React.ReactNode;
  variant?: 'button' | 'link' | 'text';
  sx?: any;
  className?: string;
}

const trackPhoneConversion = () => {
  // @ts-ignore - gtag is globally available
  if (typeof window !== 'undefined' && window.gtag) {
    // @ts-ignore - gtag is globally available
    window.gtag('event', 'conversion', {
      send_to: 'AW-16665018583/mY27CN7niPQaENeBwIo-',
    });
  }
};

export const PhoneContact = ({
  children,
  variant = 'link',
  sx = {},
  className,
}: IPhoneContactProps) => {
  const handleClick = () => {
    trackPhoneConversion();
  };

  const baseStyles = {
    cursor: 'pointer',
    textDecoration: 'none',
    fontWeight: 600,
    transition: 'all 0.3s ease',
    '&:hover, &:focus': {
      textDecoration: 'underline',
      outline: '2px solid var(--primary-blue)',
      outlineOffset: '2px',
    },
  };

  const variantStyles = {
    button: {
      padding: 'var(--spacing-md) var(--spacing-lg)',
      borderRadius: 'var(--radius-full)',
      backgroundColor: 'var(--primary-blue)',
      color: 'var(--white)',
      display: 'inline-block',
      minHeight: '44px',
      minWidth: '200px',
      textAlign: 'center' as const,
      boxShadow: 'var(--shadow-md)',
      '&:hover, &:focus': {
        backgroundColor: '#1D4ED8',
        transform: 'translateY(-2px) scale(1.02)',
        boxShadow: 'var(--shadow-lg)',
        textDecoration: 'none',
      },
    },
    link: {
      color: 'var(--primary-blue)',
      textDecoration: 'underline',
      '&:hover, &:focus': {
        color: '#1D4ED8',
        textDecoration: 'underline',
      },
    },
    text: {
      color: 'inherit',
      textDecoration: 'none',
      '&:hover, &:focus': {
        textDecoration: 'underline',
      },
    },
  };

  return (
    <Link
      href={createPhoneLink()}
      onClick={handleClick}
      sx={{
        ...baseStyles,
        ...variantStyles[variant],
        ...sx,
      }}
      className={className}
      aria-label="Call Montessori Skye View"
    >
      {children || '📞 Call Us'}
    </Link>
  );
};

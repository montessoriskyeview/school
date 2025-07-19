import { Link } from '@mui/material';
import { createEmailLink } from './contactUtils';

interface IEmailContactProps {
  children?: React.ReactNode;
  variant?: 'button' | 'link' | 'text';
  sx?: any;
  className?: string;
}

const trackEmailConversion = () => {
  // @ts-ignore - gtag is globally available
  if (typeof window !== 'undefined' && window.gtag) {
    // @ts-ignore - gtag is globally available
    window.gtag('event', 'conversion', {
      send_to: 'AW-16665018583/Z8tpCOHniPQaENeBwIo-',
      value: 1.0,
      currency: 'USD',
    });
  }
};

export const EmailContact = ({
  children,
  variant = 'link',
  sx = {},
  className,
}: IEmailContactProps) => {
  const handleClick = () => {
    trackEmailConversion();
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
      backgroundColor: 'var(--secondary-purple)',
      color: 'var(--white)',
      display: 'inline-block',
      minWidth: '200px',
      textAlign: 'center' as const,
      boxShadow: 'var(--shadow-md)',
      '&:hover, &:focus': {
        backgroundColor: '#8A5CFF',
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
      lineHeight: 1,
      '&:hover, &:focus': {
        textDecoration: 'underline',
      },
    },
  };

  return (
    <Link
      href={createEmailLink()}
      onClick={handleClick}
      sx={{
        ...baseStyles,
        ...variantStyles[variant],
        ...sx,
      }}
      className={className}
      aria-label="Email Montessori Skye View"
    >
      {children || '✉️ Email Us'}
    </Link>
  );
};

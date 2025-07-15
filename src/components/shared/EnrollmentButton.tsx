import { Link } from '@mui/material';
import { DEFAULT_CONVERSION_ID } from '../../resources/enrollmentConfig';

interface IEnrollmentButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  sx?: any;
  conversionId?: string;
}

const trackEnrollmentConversion = (
  conversionId: string = DEFAULT_CONVERSION_ID
) => {
  // @ts-ignore - gtag is globally available
  window.gtag('event', 'conversion', {
    send_to: conversionId,
  });
};

export const EnrollmentButton = ({
  href,
  children,
  variant = 'primary',
  sx = {},
  conversionId,
}: IEnrollmentButtonProps) => {
  const baseStyles = {
    cursor: 'pointer',
    textDecoration: 'underline',
    fontWeight: 600,
    fontSize: '1rem',
    px: 1,
    py: 0.5,
    borderRadius: 'var(--radius-sm)',
    transition: 'background 0.2s, color 0.2s',
    '&:hover, &:focus': {
      background: 'var(--primary-green)',
      color: 'var(--white)',
      outline: '2px solid var(--primary-green)',
      textDecoration: 'none',
    },
  };

  const variantStyles = {
    primary: {
      color: 'var(--text-dark)', // Use theme text color for proper contrast
    },
    secondary: {
      color: 'var(--white)',
      marginBottom: 'var(--spacing-lg)',
      fontSize: 'var(--text-lg)',
    },
  };

  return (
    <Link
      variant="body1"
      sx={{
        ...baseStyles,
        ...variantStyles[variant],
        ...sx,
      }}
      rel="noopener noreferrer"
      target="_blank"
      href={href}
      onClick={() => trackEnrollmentConversion(conversionId)}
    >
      {children}
    </Link>
  );
};

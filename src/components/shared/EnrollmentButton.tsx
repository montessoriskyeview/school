import React from 'react';
import { Link, Typography } from '@mui/material';
import { School as SchoolIcon } from '@mui/icons-material';
import { trackEvent } from '../../utils/performance';
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
  trackEvent('conversion', {
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
    color: { xs: 'var(--white)', md: 'var(--text-dark)' },
    '&:hover, &:focus': {
      background: 'var(--primary-green)',
      color: 'var(--white)',
      outline: '2px solid var(--primary-green)',
      textDecoration: 'none',
    },
  };

  const variantStyles = {
    primary: {
      color: { xs: 'var(--white)', md: 'var(--text-dark)' },
    },
    secondary: {
      color: 'var(--white)',
      marginBottom: 'var(--spacing-lg)',
      fontSize: 'var(--text-lg)',
    },
  };

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackEnrollmentConversion(conversionId)}
      sx={{
        ...baseStyles,
        ...variantStyles[variant],
        ...sx,
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 'var(--spacing-sm)',
        }}
      >
        <SchoolIcon />
        <Typography variant="body1" sx={{ color: 'inherit' }}>
          {children}
        </Typography>
      </div>
    </Link>
  );
};

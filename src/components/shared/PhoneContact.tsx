import React from 'react';
import { Link, Typography } from '@mui/material';
import { trackEvent } from '../../utils/performance';

interface IPhoneContactProps {
  children?: React.ReactNode;
  variant?: 'button' | 'link' | 'text';
  sx?: any;
  className?: string;
}

const trackPhoneConversion = () => {
  trackEvent('conversion', {
    send_to: 'AW-16665018583/mY27CN7niPQaENeBwIo-',
  });
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

  const content = (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--spacing-sm)',
      }}
    >
      <Typography
        variant="body1"
        style={{
          color: 'inherit',
          fontWeight: 600,
        }}
      >
        {children || '📞 Call Us'}
      </Typography>
    </div>
  );

  if (variant === 'button') {
    return (
      <Link
        href="tel:+61400000000"
        onClick={handleClick}
        sx={{
          ...baseStyles,
          ...variantStyles[variant],
          ...sx,
        }}
        className={className}
        aria-label="Call Montessori Skye View"
      >
        {content}
      </Link>
    );
  }

  return (
    <Link
      href="tel:+61400000000"
      onClick={handleClick}
      sx={{
        ...baseStyles,
        ...variantStyles[variant],
        ...sx,
      }}
      className={className}
      aria-label="Call Montessori Skye View"
    >
      {content}
    </Link>
  );
};

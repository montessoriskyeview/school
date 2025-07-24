import React from 'react';
import { Link, Typography } from '@mui/material';
import { trackEvent } from '../../utils/performance';

interface IEmailContactProps {
  children?: React.ReactNode;
  variant?: 'button' | 'link' | 'text';
  sx?: any;
  className?: string;
}

const trackEmailConversion = () => {
  trackEvent('conversion', {
    send_to: 'AW-16665018583/Z8tpCOHniPQaENeBwIo-',
    value: 1.0,
    currency: 'USD',
  });
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
      backgroundColor: 'var(--primary-blue)',
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
        {children || '✉️ Email Us'}
      </Typography>
    </div>
  );

  if (variant === 'button') {
    return (
      <Link
        href="mailto:info@montessori-skye-view.com"
        onClick={handleClick}
        sx={{
          ...baseStyles,
          ...variantStyles[variant],
          ...sx,
        }}
        className={className}
        aria-label="Email Montessori Skye View"
      >
        {content}
      </Link>
    );
  }

  return (
    <Link
      href="mailto:info@montessori-skye-view.com"
      onClick={handleClick}
      sx={{
        ...baseStyles,
        ...variantStyles[variant],
        ...sx,
      }}
      className={className}
      aria-label="Email Montessori Skye View"
    >
      {content}
    </Link>
  );
};

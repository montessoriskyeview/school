import { Link } from '@mui/material';
import { FALL_2025_LINK } from '../../resources/links';
import { ContentContainer } from './ContentContainer';
import { Typography } from './Typography';

const PHONE = '7027219488';
const EMAIL = 'NWLVMontessori@gmail.com'.toLowerCase();

const trackFallRegistrationConversion = () => {
  // @ts-ignore - gtag is globally available
  window.gtag('event', 'conversion', {
    send_to: 'AW-16665018583/vFD0CPHVzcgZENeBwIo-',
  });
};

export const ContactInfo = () => {
  return (
    <ContentContainer
      variant="default"
      spacing="lg"
      style={{
        backgroundColor: '#1F2937',
        color: '#FFFFFF',
        borderRadius: 'var(--radius-lg)',
        boxShadow: 'var(--shadow-lg)',
        padding: 'var(--spacing-2xl)',
        textAlign: 'center',
        width: '100%',
        border: '2px solid var(--primary-blue)',
        alignSelf: 'center',
        justifySelf: 'center',
      }}
    >
      <Link
        variant="body1"
        sx={{
          cursor: 'pointer',
          color: '#white',
          textDecoration: 'underline',
          fontWeight: 600,
          px: 1,
          py: 0.5,
          borderRadius: 'var(--radius-sm)',
          transition: 'background 0.2s, color 0.2s',
          marginBottom: 'var(--spacing-lg)',
          fontSize: 'var(--text-lg)',
          '&:hover, &:focus': {
            background: 'var(--primary-green, #7ed957)',
            color: '#fff',
            outline: '2px solid var(--primary-green, #7ed957)',
            textDecoration: 'none',
          },
        }}
        rel="noopener noreferrer"
        target="_blank"
        href={FALL_2025_LINK}
        onClick={trackFallRegistrationConversion}
      >
        2025 Fall registration
      </Link>
      <Typography
        variant="h4"
        sx={{
          color: '#FFFFFF',
          marginBottom: 'var(--spacing-xl)',
          fontWeight: 600,
          fontSize: 'var(--text-xl)',
        }}
      >
        Contact Information
      </Typography>
      <Typography
        variant="body1"
        sx={{
          marginBottom: 'var(--spacing-lg)',
          fontSize: 'var(--text-lg)',
          fontWeight: 500,
          color: '#FFFFFF',
        }}
      >
        Call, text, or email us:
      </Typography>
      <Typography
        variant="body1"
        sx={{
          marginBottom: 'var(--spacing-lg)',
          fontSize: 'var(--text-lg)',
        }}
      >
        <a
          href={`tel:${PHONE}`}
          style={{
            color: '#FFFFFF',
            textDecoration: 'none',
            fontWeight: 600,
            fontSize: 'var(--text-xl)',
            transition: 'all 0.3s ease',
            padding: 'var(--spacing-sm) var(--spacing-md)',
            borderRadius: 'var(--radius-sm)',
            backgroundColor: 'var(--primary-blue)',
            display: 'inline-block',
            margin: 'var(--spacing-sm)',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.backgroundColor = '#3AA3CD';
            e.currentTarget.style.transform = 'translateY(-2px) scale(1.02)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.backgroundColor = 'var(--primary-blue)';
            e.currentTarget.style.transform = 'translateY(0) scale(1)';
          }}
        >
          (702) 721-9488
        </a>
      </Typography>
      <Typography
        variant="body1"
        sx={{
          fontSize: 'var(--text-lg)',
        }}
      >
        <a
          href={`mailto:${EMAIL}`}
          style={{
            color: '#FFFFFF',
            textDecoration: 'none',
            fontWeight: 600,
            fontSize: 'var(--text-lg)',
            transition: 'all 0.3s ease',
            padding: 'var(--spacing-sm) var(--spacing-md)',
            borderRadius: 'var(--radius-sm)',
            backgroundColor: 'var(--secondary-purple)',
            display: 'inline-block',
            margin: 'var(--spacing-sm)',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.backgroundColor = '#8A5CFF';
            e.currentTarget.style.transform = 'translateY(-2px) scale(1.02)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.backgroundColor = 'var(--secondary-purple)';
            e.currentTarget.style.transform = 'translateY(0) scale(1)';
          }}
        >
          {EMAIL}
        </a>
      </Typography>
    </ContentContainer>
  );
};

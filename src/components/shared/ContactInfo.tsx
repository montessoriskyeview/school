import { ContentContainer } from './ContentContainer';
import { Typography } from './Typography';
import { EnrollmentButtons } from './EnrollmentButtons';
import { EMAIL, createEmailLink, createPhoneLink } from './contactUtils';

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
        textAlign: 'center',
        width: '100%', // Changed from 100vw to prevent horizontal scroll
        maxWidth: 600, // Added max-width for better mobile experience
        border: '2px solid var(--primary-blue)',
        alignSelf: 'center',
        justifySelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0 auto', // Center the component
        position: 'relative', // Ensure positioning context
        zIndex: 0, // Changed from 1 to 0 - Lower than MobileHeroCTA's 1400
      }}
    >
      <EnrollmentButtons
        variant="secondary"
        sx={{
          flexDirection: 'column',
          gap: 2,
          marginBottom: 'var(--spacing-lg)', // Add spacing between buttons and contact info
        }}
      />
      <Typography
        variant="h4"
        sx={{
          color: '#FFFFFF',
          marginBottom: 'var(--spacing-lg)',
          fontWeight: 600,
          fontSize: { xs: 'var(--text-lg)', md: 'var(--text-xl)' },
        }}
      >
        Contact Information
      </Typography>
      <Typography
        variant="body1"
        sx={{
          marginBottom: 'var(--spacing-md)',
          fontSize: { xs: 'var(--text-base)', md: 'var(--text-lg)' },
          fontWeight: 500,
          color: '#FFFFFF',
        }}
      >
        Call, text, or email us:
      </Typography>
      {/* Phone Contact - Optimized for mobile */}
      <Typography
        variant="body1"
        sx={{
          marginBottom: 'var(--spacing-md)',
          fontSize: { xs: 'var(--text-base)', md: 'var(--text-lg)' },
        }}
      >
        <a
          href={createPhoneLink()}
          style={{
            color: '#FFFFFF',
            textDecoration: 'none',
            fontWeight: 600,
            fontSize: 'var(--text-lg)',
            transition: 'all 0.3s ease',
            padding: 'var(--spacing-md) var(--spacing-lg)', // Increased padding for better touch target
            borderRadius: 'var(--radius-sm)',
            backgroundColor: 'var(--primary-blue)',
            display: 'inline-block',
            margin: 'var(--spacing-sm)',
            minHeight: 48, // Ensure minimum touch target size
            minWidth: 200, // Ensure minimum width for easy tapping
            lineHeight: '1.2', // Better vertical centering
            boxShadow: 'var(--shadow-md)', // Add shadow for better visual hierarchy
          }}
          onMouseEnter={e => {
            e.currentTarget.style.backgroundColor = '#3AA3CD';
            e.currentTarget.style.transform = 'translateY(-2px) scale(1.02)';
            e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.backgroundColor = 'var(--primary-blue)';
            e.currentTarget.style.transform = 'translateY(0) scale(1)';
            e.currentTarget.style.boxShadow = 'var(--shadow-md)';
          }}
          aria-label="Call us at (702)721-9488"
        >
          📞 (702) 721-9488
        </a>
      </Typography>
      {/* Email Contact - Optimized for mobile */}
      <Typography
        variant="body1"
        sx={{
          fontSize: { xs: 'var(--text-base)', md: 'var(--text-lg)' },
        }}
      >
        <a
          href={createEmailLink()}
          style={{
            color: '#FFFFFF',
            textDecoration: 'none',
            fontWeight: 600,
            fontSize: 'var(--text-base)',
            transition: 'all 0.3s ease',
            padding: 'var(--spacing-md) var(--spacing-lg)', // Increased padding for better touch target
            borderRadius: 'var(--radius-sm)',
            backgroundColor: 'var(--secondary-purple)',
            display: 'inline-block',
            margin: 'var(--spacing-sm)',
            minHeight: 48, // Ensure minimum touch target size
            minWidth: 200, // Ensure minimum width for easy tapping
            lineHeight: '1.2', // Better vertical centering
            boxShadow: 'var(--shadow-md)', // Add shadow for better visual hierarchy
          }}
          onMouseEnter={e => {
            e.currentTarget.style.backgroundColor = '#8A5CFF';
            e.currentTarget.style.transform = 'translateY(-2px) scale(1.02)';
            e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.backgroundColor = 'var(--secondary-purple)';
            e.currentTarget.style.transform = 'translateY(0) scale(1)';
            e.currentTarget.style.boxShadow = 'var(--shadow-md)';
          }}
          aria-label={`Email us at ${EMAIL}`}
        >
          ✉️ {EMAIL}
        </a>
      </Typography>
    </ContentContainer>
  );
};

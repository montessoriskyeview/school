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
        // padding: 'var(--spacing-xl)', // Reduced from spacing-2xl
        textAlign: 'center',
        width: '100%',
        border: '2px solid var(--primary-blue)',
        alignSelf: 'center',
        justifySelf: 'center',
        alignItems: 'center',
      }}
    >
      <EnrollmentButtons
        variant="secondary"
        sx={{
          flexDirection: 'column',
          gap: 2,
        }}
      />
      <Typography
        variant="h4"
        sx={{
          color: '#FFFFFF',
          marginBottom: 'var(--spacing-lg)', // Reduced from spacing-xl
          fontWeight: 600,
          fontSize: { xs: 'var(--text-lg)', md: 'var(--text-xl)' }, // Responsive font size
        }}
      >
        Contact Information
      </Typography>
      <Typography
        variant="body1"
        sx={{
          marginBottom: 'var(--spacing-md)', // Reduced from spacing-lg
          fontSize: { xs: 'var(--text-base)', md: 'var(--text-lg)' }, // Responsive font size
          fontWeight: 500,
          color: '#FFFFFF',
        }}
      >
        Call, text, or email us:
      </Typography>
      <Typography
        variant="body1"
        sx={{
          marginBottom: 'var(--spacing-md)', // Reduced from spacing-lg
          fontSize: { xs: 'var(--text-base)', md: 'var(--text-lg)' }, // Responsive font size
        }}
      >
        <a
          href={createPhoneLink()}
          style={{
            color: '#FFFFFF',
            textDecoration: 'none',
            fontWeight: 600,
            fontSize: 'var(--text-lg)', // Reduced from text-xl
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
          fontSize: { xs: 'var(--text-base)', md: 'var(--text-lg)' }, // Responsive font size
        }}
      >
        <a
          href={createEmailLink()}
          style={{
            color: '#FFFFFF',
            textDecoration: 'none',
            fontWeight: 600,
            fontSize: 'var(--text-base)', // Reduced from text-lg
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

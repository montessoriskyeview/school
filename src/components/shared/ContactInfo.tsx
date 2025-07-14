import { ContentContainer } from './ContentContainer';
import { Typography } from './Typography';

const PHONE = '7027219488';
const EMAIL = 'NWLVMontessori@gmail.com';

export const ContactInfo = () => {
  return (
    <ContentContainer
      variant="default"
      spacing="lg"
      style={{
        color: '#000000',
        borderRadius: 'var(--radius-lg)',
        boxShadow: 'var(--shadow-lg)',
        padding: 'var(--spacing-xl)',
        textAlign: 'center',
        width: '100%',
      }}
    >
      <Typography
        variant="h4"
        sx={{
          color: '#000000',
          marginBottom: 'var(--spacing-lg)',
          fontWeight: 600,
          fontSize: 'var(--text-xl)',
        }}
      >
        Contact Information
      </Typography>
      <Typography
        variant="body1"
        sx={{
          marginBottom: 'var(--spacing-md)',
          fontSize: 'var(--text-lg)',
          fontWeight: 500,
          color: '#000000',
        }}
      >
        Call, text, or email us:
      </Typography>
      <Typography
        variant="body1"
        sx={{
          marginBottom: 'var(--spacing-md)',
          fontSize: 'var(--text-lg)',
        }}
      >
        <a
          href={`tel:${PHONE}`}
          style={{
            color: '#000000',
            textDecoration: 'none',
            fontWeight: 600,
            fontSize: 'var(--text-xl)',
            transition: 'color 0.3s ease',
          }}
          onMouseEnter={e => (e.currentTarget.style.color = '#4BB4DE')}
          onMouseLeave={e => (e.currentTarget.style.color = '#000000')}
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
            color: '#000000',
            textDecoration: 'none',
            fontWeight: 600,
            fontSize: 'var(--text-lg)',
            transition: 'color 0.3s ease',
          }}
          onMouseEnter={e => (e.currentTarget.style.color = '#4BB4DE')}
          onMouseLeave={e => (e.currentTarget.style.color = '#000000')}
        >
          {EMAIL}
        </a>
      </Typography>
    </ContentContainer>
  );
};

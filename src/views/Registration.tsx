import { Link } from '@mui/material';
import { CanvasView } from '../components/shared/Canvas/CanvasView';
import { SchoolList } from '../components/shared/ListText';
import { FALL_2024_LINK } from '../i18n/site/links';
import { CollapseContainer } from '../components/shared/CollapseContainer';
import { ContentContainer } from '../components/shared/ContentContainer';
import { Typography } from '../components/shared/Typography';
import { registrationPageContent } from '../i18n/pages/registration';

export const Registration = () => {
  return (
    <CanvasView>
      <ContentContainer
        variant="card"
        spacing="lg"
        style={{
          textAlign: 'center',
          background: 'var(--white)',
          color: 'var(--text-dark)',
          border: '3px solid var(--primary-blue)',
          boxShadow: 'var(--shadow-lg)',
        }}
      >
        <Typography
          variant="h2"
          sx={{
            color: 'var(--text-dark)',
            marginBottom: 'var(--spacing-lg)',
            fontWeight: 700,
            fontSize: 'var(--text-4xl)',
          }}
        >
          {registrationPageContent.heroTitle}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: 'var(--text-dark)',
            fontSize: 'var(--text-lg)',
            lineHeight: 'var(--leading-loose)',
            fontWeight: 500,
          }}
        >
          {registrationPageContent.heroDescription}
        </Typography>
      </ContentContainer>

      <CollapseContainer
        title={registrationPageContent.fallEnrollmentTitle}
        content={
          <SchoolList
            items={[
              ...registrationPageContent.fallEnrollmentItems,
              <Link
                variant="body1"
                sx={{
                  cursor: 'pointer',
                  color: 'var(--primary-blue)',
                  textDecoration: 'none',
                  fontWeight: 600,
                  padding: 'var(--spacing-sm) var(--spacing-md)',
                  borderRadius: 'var(--radius-sm)',
                  transition: 'all 0.3s ease',
                  backgroundColor: 'var(--light-gray)',
                  display: 'inline-block',
                  '&:hover': {
                    backgroundColor: 'var(--primary-blue)',
                    color: 'var(--white)',
                    transform: 'translateY(-2px) scale(1.02)',
                  },
                }}
                href={FALL_2024_LINK}
              >
                {registrationPageContent.registerHereLabel}
              </Link>,
            ]}
          />
        }
        spacing="lg"
      />

      <ContentContainer
        variant="card"
        spacing="lg"
        style={{
          textAlign: 'center',
          background: 'var(--white)',
          color: 'var(--text-dark)',
          border: '3px solid var(--primary-green)',
          boxShadow: 'var(--shadow-lg)',
        }}
      >
        <Typography
          variant="h3"
          sx={{
            color: 'var(--text-dark)',
            marginBottom: 'var(--spacing-lg)',
            fontWeight: 700,
          }}
        >
          {registrationPageContent.processTitle}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: 'var(--text-dark)',
            fontSize: 'var(--text-lg)',
            lineHeight: 'var(--leading-loose)',
            fontWeight: 500,
          }}
        >
          {registrationPageContent.processDescription}
        </Typography>
      </ContentContainer>

      <ContentContainer
        variant="card"
        spacing="lg"
        style={{
          textAlign: 'center',
          background: 'var(--white)',
          color: 'var(--text-dark)',
          border: '3px solid var(--secondary-purple)',
          boxShadow: 'var(--shadow-lg)',
        }}
      >
        <Typography
          variant="h3"
          sx={{
            color: 'var(--text-dark)',
            marginBottom: 'var(--spacing-lg)',
            fontWeight: 700,
          }}
        >
          {registrationPageContent.joinTitle}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: 'var(--text-dark)',
            fontSize: 'var(--text-lg)',
            lineHeight: 'var(--leading-loose)',
            fontWeight: 500,
          }}
        >
          {registrationPageContent.joinDescription}
        </Typography>
      </ContentContainer>
    </CanvasView>
  );
};

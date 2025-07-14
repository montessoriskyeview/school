import { Link } from '@mui/material';
import { CanvasView } from '../components/shared/Canvas/CanvasView';
import { SchoolList } from '../components/shared/ListText';
import { FALL_2024_LINK } from '../resources/links';
import { CollapseContainer } from '../components/shared/CollapseContainer';
import { ContentContainer } from '../components/shared/ContentContainer';
import { Typography } from '../components/shared/Typography';

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
          📝 Registration & Enrollment
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
          Reservations and payments are currently accepted through the
          individual forms found in the sections below. We make the registration
          process simple and straightforward for families.
        </Typography>
      </ContentContainer>

      <CollapseContainer
        title="🍂 Fall 2024 Enrollment"
        content={
          <SchoolList
            items={[
              'Starting September 3rd',
              '$400 Registration Fee',
              'Sibling discount and military discount available',
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
                Register here
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
          🎯 Enrollment Process
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
          Our enrollment process is designed to be family-friendly and
          efficient. We work closely with each family to ensure a smooth
          transition into our Montessori community.
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
          🌟 Ready to Join Our Community?
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
          We're excited to welcome your family to Montessori Skye View! Contact
          us today to begin the enrollment process and secure your child's spot
          in our nurturing learning environment.
        </Typography>
      </ContentContainer>
    </CanvasView>
  );
};

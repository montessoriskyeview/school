import React from 'react';
import { Button, Box, Grid, Card, CardContent } from '@mui/material';
import { CanvasView } from '../components/shared/Canvas/CanvasView';
import { ContentContainer } from '../components/shared/ContentContainer';
import { Typography } from '../components/shared/Typography';
import {
  ENROLLMENT_PERIODS,
  IEnrollmentPeriod,
} from '../resources/enrollmentConfig';

export const Enrollments = () => {
  const allEnrollments = ENROLLMENT_PERIODS;

  const renderEnrollmentCard = (enrollment: IEnrollmentPeriod) => (
    <Card
      key={enrollment.id}
      sx={{
        borderRadius: 'var(--radius-lg)',
        boxShadow: 'var(--shadow-lg)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        border: enrollment.availableInEnrollment
          ? '3px solid var(--primary-green)'
          : '2px solid var(--medium-gray)',
        backgroundColor: enrollment.availableInEnrollment
          ? 'var(--white)'
          : 'var(--light-gray)',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: 'var(--shadow-xl)',
        },
      }}
    >
      <CardContent
        sx={{
          padding: 'var(--spacing-2xl)',
          textAlign: 'center',
        }}
      >
        <Typography
          variant="h4"
          sx={{
            color: enrollment.availableInEnrollment
              ? 'var(--primary-green)'
              : 'var(--text-light)',
            marginBottom: 'var(--spacing-lg)',
            fontWeight: 700,
          }}
        >
          {enrollment.title}
        </Typography>

        {enrollment.availableInEnrollment && (
          <Box
            component="div"
            style={{
              backgroundColor: 'var(--primary-green)',
              color: 'var(--white)',
              padding: 'var(--spacing-sm) var(--spacing-md)',
              borderRadius: 'var(--radius-full)',
              display: 'inline-block',
              fontSize: 'var(--text-sm)',
              fontWeight: 600,
              marginBottom: 'var(--spacing-lg)',
            }}
          >
            Currently Open
          </Box>
        )}

        <Button
          href={enrollment.href}
          target="_blank"
          rel="noopener noreferrer"
          disabled={!enrollment.availableInEnrollment}
          sx={{
            backgroundColor: enrollment.availableInEnrollment
              ? 'var(--primary-blue)'
              : 'var(--text-light)',
            color: 'var(--white)',
            padding: 'var(--spacing-md) var(--spacing-xl)',
            borderRadius: 'var(--radius-full)',
            fontFamily: 'var(--font-primary)',
            fontWeight: 600,
            fontSize: 'var(--text-base)',
            minHeight: 44,
            minWidth: 44,
            textTransform: 'none',
            '&:hover': enrollment.availableInEnrollment
              ? {
                  backgroundColor: '#1D4ED8',
                  transform: 'translateY(-2px)',
                  boxShadow: 'var(--shadow-md)',
                }
              : {},
            '&:focus': {
              outline: '2px solid var(--primary-blue)',
              outlineOffset: '2px',
            },
            '&:disabled': {
              backgroundColor: 'var(--text-light)',
              color: 'var(--white)',
              cursor: 'not-allowed',
            },
          }}
        >
          {enrollment.availableInEnrollment
            ? 'Register Now'
            : 'Not Available Yet'}
        </Button>
      </CardContent>
    </Card>
  );

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
          variant="h1"
          sx={{
            color: 'var(--text-dark)',
            marginBottom: 'var(--spacing-lg)',
            fontWeight: 700,
            fontSize: 'var(--text-5xl)',
          }}
        >
          📚 Enrollment Opportunities
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: 'var(--text-dark)',
            fontSize: 'var(--text-lg)',
            lineHeight: 'var(--leading-loose)',
            fontWeight: 500,
            marginBottom: 'var(--spacing-xl)',
          }}
        >
          Welcome to Montessori Skye View Learning Center! Explore our
          enrollment options and secure your child's spot in our nurturing
          Montessori environment.
        </Typography>
      </ContentContainer>

      <ContentContainer variant="default" spacing="lg">
        <Typography
          variant="h2"
          sx={{
            color: 'var(--text-dark)',
            marginBottom: 'var(--spacing-2xl)',
            fontWeight: 700,
            textAlign: 'center',
          }}
        >
          All Enrollment Periods
        </Typography>

        <Grid container spacing={4}>
          {allEnrollments.map(enrollment => (
            <Grid item xs={12} md={6} lg={4} key={enrollment.id}>
              {renderEnrollmentCard(enrollment)}
            </Grid>
          ))}
        </Grid>
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
          🤔 Have Questions?
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: 'var(--text-dark)',
            fontSize: 'var(--text-lg)',
            lineHeight: 'var(--leading-loose)',
            fontWeight: 500,
            marginBottom: 'var(--spacing-lg)',
          }}
        >
          We're here to help! Contact us with any questions about enrollment,
          our programs, or the Montessori approach.
        </Typography>

        <Button
          href="/contact"
          sx={{
            backgroundColor: 'var(--secondary-purple)',
            color: 'var(--white)',
            padding: 'var(--spacing-md) var(--spacing-xl)',
            borderRadius: 'var(--radius-full)',
            fontFamily: 'var(--font-primary)',
            fontWeight: 600,
            fontSize: 'var(--text-base)',
            minHeight: 44,
            minWidth: 44,
            textTransform: 'none',
            textDecoration: 'none',
            '&:hover': {
              backgroundColor: '#6D28D9',
              transform: 'translateY(-2px)',
              boxShadow: 'var(--shadow-md)',
            },
            '&:focus': {
              outline: '2px solid var(--secondary-purple)',
              outlineOffset: '2px',
            },
          }}
        >
          Contact Us
        </Button>
      </ContentContainer>
    </CanvasView>
  );
};

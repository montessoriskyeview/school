import React from 'react';
import { Button, Box, Grid, Card, CardContent } from '@mui/material';
import { CanvasView } from '../components/shared/Canvas/CanvasView';
import { ContentContainer } from '../components/shared/ContentContainer';
import { Typography } from '../components/shared/Typography';
import {
  ENROLLMENT_SLOTS,
  EnrollmentSlot,
} from '../i18n/entities/enrollments';
import { enrollmentsPageContent } from '../i18n/pages/enrollments';

export const Enrollments = () => {
  const enrollmentSlots = ENROLLMENT_SLOTS;

  const renderEnrollmentCard = (enrollment: EnrollmentSlot, index: number) => (
    <Card
      key={enrollment?.id ?? `slot-${index + 1}`}
      sx={{
        borderRadius: 'var(--radius-lg)',
        boxShadow: 'var(--shadow-lg)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        border: enrollment?.availableInEnrollment
          ? '3px solid var(--primary-green)'
          : '2px solid var(--medium-gray)',
        backgroundColor: enrollment?.availableInEnrollment
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
            color: enrollment?.availableInEnrollment
              ? 'var(--primary-green)'
              : 'var(--text-light)',
            marginBottom: 'var(--spacing-lg)',
            fontWeight: 700,
          }}
        >
          {enrollment?.title ?? enrollmentsPageContent.emptySlotTitle}
        </Typography>

        {enrollment?.availableInEnrollment && (
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
            {enrollmentsPageContent.currentlyOpenLabel}
          </Box>
        )}

        {!enrollment && (
          <Typography
            variant="body1"
            sx={{
              color: 'var(--text-light)',
              marginBottom: 'var(--spacing-lg)',
            }}
          >
            {enrollmentsPageContent.emptySlotDescription}
          </Typography>
        )}

        <Button
          href={enrollment?.href}
          target="_blank"
          rel="noopener noreferrer"
          disabled={!enrollment?.availableInEnrollment}
          sx={{
            backgroundColor: enrollment?.availableInEnrollment
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
            '&:hover': enrollment?.availableInEnrollment
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
          {enrollment?.availableInEnrollment
            ? enrollmentsPageContent.registerNowLabel
            : enrollmentsPageContent.notAvailableLabel}
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
          {enrollmentsPageContent.heroTitle}
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
          {enrollmentsPageContent.heroDescription}
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
          {enrollmentsPageContent.allPeriodsTitle}
        </Typography>

        <Grid container spacing={4}>
          {enrollmentSlots.map((enrollment, index) => (
            <Grid item xs={12} md={6} key={enrollment?.id ?? `slot-${index + 1}`}>
              {renderEnrollmentCard(enrollment, index)}
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
          {enrollmentsPageContent.questionsTitle}
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
          {enrollmentsPageContent.questionsDescription}
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
          {enrollmentsPageContent.contactUsLabel}
        </Button>
      </ContentContainer>
    </CanvasView>
  );
};

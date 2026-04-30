import React from 'react';
import { Box, Grid, Card, CardContent } from '@mui/material';
import { CanvasView } from '../components/shared/Canvas/CanvasView';
import { ContentContainer } from '../components/shared/ContentContainer';
import { Typography } from '../components/shared/Typography';
import { CollapseContainer } from '../components/shared/CollapseContainer';
import { SchoolList } from '../components/shared/ListText';
import {
  parentInvolvementContent,
  VolunteerOpportunity,
} from '../i18n/pages/parentInvolvement';

export const ParentInvolvement = () => {
  const renderOpportunityCard = (
    opportunity: VolunteerOpportunity,
    index: number
  ) => (
    <Card
      key={index}
      sx={{
        borderRadius: 'var(--radius-lg)',
        boxShadow: 'var(--shadow-lg)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        border: '3px solid var(--primary-green)',
        backgroundColor: 'var(--white)',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: 'var(--shadow-xl)',
        },
      }}
    >
      <CardContent
        sx={{
          padding: 'var(--spacing-xl)',
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
        }}
      >
        <Typography
          variant="h4"
          sx={{
            color: 'var(--primary-blue)',
            marginBottom: 'var(--spacing-md)',
            fontWeight: 700,
            fontSize: 'var(--text-lg)',
          }}
        >
          {opportunity.title}
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: 'var(--text-dark)',
            fontSize: 'var(--text-base)',
            lineHeight: 'var(--leading-relaxed)',
            marginBottom: 'var(--spacing-md)',
            flexGrow: 1,
          }}
        >
          {opportunity.description}
        </Typography>

        <Box
          component="div"
          sx={{
            borderTop: '1px solid var(--light-gray)',
            paddingTop: 'var(--spacing-md)',
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: 'var(--primary-green)',
              fontSize: 'var(--text-sm)',
              fontWeight: 600,
              marginBottom: 'var(--spacing-xs)',
            }}
          >
            Time Commitment: {opportunity.timeCommitment}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: 'var(--text-secondary)',
              fontSize: 'var(--text-sm)',
              lineHeight: 'var(--leading-relaxed)',
            }}
          >
            Skills: {opportunity.skills}
          </Typography>
        </Box>
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
            fontSize: 'var(--text-4xl)',
          }}
        >
          {parentInvolvementContent.heroTitle}
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
          {parentInvolvementContent.heroDescription}
        </Typography>
      </ContentContainer>

      <CollapseContainer
        title={parentInvolvementContent.workHoursTitle}
        content={<SchoolList items={parentInvolvementContent.workHoursItems} />}
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
          variant="h2"
          sx={{
            color: 'var(--text-dark)',
            marginBottom: 'var(--spacing-lg)',
            fontWeight: 700,
            fontSize: 'var(--text-3xl)',
          }}
        >
          {parentInvolvementContent.volunteerSectionTitle}
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
          {parentInvolvementContent.volunteerSectionDescription}
        </Typography>
      </ContentContainer>

      <ContentContainer variant="default" spacing="lg">
        <Grid container spacing={4}>
          {parentInvolvementContent.volunteerOpportunities.map(
            (opportunity, index) => (
            <Grid item xs={12} md={6} lg={4} key={index}>
              {renderOpportunityCard(opportunity, index)}
            </Grid>
            )
          )}
        </Grid>
      </ContentContainer>

      <CollapseContainer
        title={parentInvolvementContent.governanceTitle}
        content={<SchoolList items={parentInvolvementContent.governanceItems} />}
        spacing="lg"
      />

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
          {parentInvolvementContent.benefitsTitle}
        </Typography>
        <div
          style={{
            display: 'grid',
            gap: 'var(--spacing-lg)',
            textAlign: 'left',
            maxWidth: '800px',
            margin: '0 auto',
          }}
        >
          {parentInvolvementContent.benefitsItems.map(item => (
            <Typography
              key={item}
              variant="body1"
              sx={{
                color: 'var(--text-dark)',
                fontSize: 'var(--text-base)',
                lineHeight: 'var(--leading-loose)',
                fontWeight: 500,
              }}
              dangerouslySetInnerHTML={{ __html: item }}
            />
          ))}
        </div>
      </ContentContainer>

      <ContentContainer
        variant="card"
        spacing="lg"
        style={{
          textAlign: 'center',
          background: 'var(--white)',
          color: 'var(--text-dark)',
          border: '3px solid var(--primary-yellow)',
          boxShadow: 'var(--shadow-lg)',
        }}
      >
        <Typography
          variant="h3"
          sx={{
            color: 'var(--text-dark)',
            fontWeight: 700,
          }}
        >
          {parentInvolvementContent.ctaTitle}
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
          {parentInvolvementContent.ctaDescription}
        </Typography>
      </ContentContainer>
    </CanvasView>
  );
};

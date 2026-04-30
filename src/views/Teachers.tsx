import React from 'react';
import { Box, Grid, Card, CardContent, Avatar } from '@mui/material';
import { CanvasView } from '../components/shared/Canvas/CanvasView';
import { ContentContainer } from '../components/shared/ContentContainer';
import { Typography } from '../components/shared/Typography';
import { TEACHER_PROFILES, TeacherProfile } from '../i18n/entities/teachers';
import { teachersPageContent } from '../i18n/pages/teachers';

export const Teachers = () => {
  const renderTeacherCard = (teacher: TeacherProfile) => (
    <Card
      key={teacher.name}
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
          padding: 'var(--spacing-2xl)',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
        }}
      >
        <Avatar
          src={teacher.image}
          alt={`${teacher.name} ${teachersPageContent.photoAltSuffix}`}
          sx={{
            width: 150,
            height: 150,
            margin: '0 auto var(--spacing-xl)',
            border: '4px solid var(--primary-blue)',
            boxShadow: 'var(--shadow-md)',
          }}
        />

        <Typography
          variant="h3"
          sx={{
            color: 'var(--primary-blue)',
            marginBottom: 'var(--spacing-sm)',
            fontWeight: 700,
          }}
        >
          {teacher.name}
        </Typography>

        <Typography
          variant="h5"
          sx={{
            color: 'var(--primary-green)',
            marginBottom: 'var(--spacing-lg)',
            fontWeight: 600,
            fontStyle: 'italic',
          }}
        >
          {teacher.title}
        </Typography>

        <Box
          component="div"
          style={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}
        >
          <Typography
            variant="body1"
            sx={{
              color: 'var(--text-dark)',
              fontSize: 'var(--text-base)',
              lineHeight: 'var(--leading-loose)',
              fontWeight: 400,
              textAlign: 'left',
              whiteSpace: 'pre-line',
            }}
          >
            {teacher.bio}
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
            fontSize: 'var(--text-5xl)',
          }}
        >
          {teachersPageContent.heroTitle}
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
          {teachersPageContent.heroDescription}
        </Typography>
      </ContentContainer>

      <ContentContainer variant="default" spacing="lg">
        <Grid container spacing={4}>
          {TEACHER_PROFILES.map(teacher => (
            <Grid item xs={12} lg={6} key={teacher.name}>
              {renderTeacherCard(teacher)}
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
          {teachersPageContent.montessoriDifferenceTitle}
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
          {teachersPageContent.montessoriDifferenceDescription}
        </Typography>
      </ContentContainer>

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
          {teachersPageContent.learnMoreTitle}
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
          {teachersPageContent.learnMoreDescription}
        </Typography>
      </ContentContainer>
    </CanvasView>
  );
};

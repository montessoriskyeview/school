import React from 'react';
import { Box, Grid, Card, CardContent, Avatar } from '@mui/material';
import { CanvasView } from '../components/shared/Canvas/CanvasView';
import { ContentContainer } from '../components/shared/ContentContainer';
import { Typography } from '../components/shared/Typography';
import { teacherConfig, TeacherConfig } from '../resources/teacherConfig';

export const Teachers = () => {
  const renderTeacherCard = (teacher: TeacherConfig) => (
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
          alt={`${teacher.name} photo`}
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
          👩‍🏫 Meet Our Teachers
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
          Get to know the dedicated educators who guide your child's learning
          journey at Montessori Skye View Learning Center. Our passionate
          teachers bring years of experience and a deep commitment to the
          Montessori philosophy.
        </Typography>
      </ContentContainer>

      <ContentContainer variant="default" spacing="lg">
        <Grid container spacing={4}>
          {teacherConfig.map(teacher => (
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
          🌟 The Montessori Difference
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
          Our teachers are trained in the Montessori method, which emphasizes
          hands-on learning, self-directed activity, and collaborative play.
          They create prepared environments where children develop independence,
          critical thinking skills, and a lifelong love of learning.
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
          💬 Want to Learn More?
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
          We'd love to introduce you to our team in person! Schedule a visit to
          see our teachers in action and learn more about our approach to
          education.
        </Typography>
      </ContentContainer>
    </CanvasView>
  );
};

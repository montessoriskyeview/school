import React from 'react';
import { Box, Grid, Card, CardContent } from '@mui/material';
import { CanvasView } from '../components/shared/Canvas/CanvasView';
import { ContentContainer } from '../components/shared/ContentContainer';
import { Typography } from '../components/shared/Typography';
import { CollapseContainer } from '../components/shared/CollapseContainer';
import { SchoolList } from '../components/shared/ListText';

export const ParentInvolvement = () => {
  const volunteerOpportunities = [
    {
      title: '🎨 Classroom Assistant',
      description:
        'Help with daily activities, material preparation, and student guidance',
      timeCommitment: '2-4 hours per week',
      skills:
        'Patience, love for children, willingness to learn Montessori methods',
    },
    {
      title: '🌿 Garden & Outdoor Learning',
      description:
        'Maintain our beautiful outdoor spaces and lead nature-based activities',
      timeCommitment: '3-5 hours per month',
      skills:
        'Gardening experience, outdoor enthusiasm, basic maintenance skills',
    },
    {
      title: '📚 Library & Reading Program',
      description:
        'Organize our library, lead reading sessions, and book selection',
      timeCommitment: '2-3 hours per week',
      skills: 'Love of reading, organizational skills, storytelling ability',
    },
    {
      title: '🍎 Snack & Nutrition Coordinator',
      description:
        'Plan healthy snacks, coordinate with families, manage food programs',
      timeCommitment: '4-6 hours per month',
      skills: 'Nutrition knowledge, food safety awareness, coordination skills',
    },
    {
      title: '🎭 Special Events & Field Trips',
      description:
        'Plan and coordinate community events, celebrations, and educational trips',
      timeCommitment: '5-8 hours per month',
      skills:
        'Event planning, communication, creativity, organizational skills',
    },
    {
      title: '🔧 Maintenance & Facilities',
      description: 'Help maintain our beautiful campus and learning materials',
      timeCommitment: '3-4 hours per month',
      skills: 'Basic handyman skills, attention to detail, reliability',
    },
  ];

  const renderOpportunityCard = (opportunity: any, index: number) => (
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
          🤝 Parent Involvement Opportunities
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
          As a parent cooperative, we thrive on the active participation of our
          families. Every parent contributes to creating an exceptional learning
          environment for all children.
        </Typography>
      </ContentContainer>

      <CollapseContainer
        title="📋 Work Hour Requirements"
        content={
          <SchoolList
            items={[
              'Each family commits to 20 hours of volunteer work per semester',
              'Work hours can be fulfilled through various opportunities based on your skills and schedule',
              'Flexible scheduling accommodates working parents and different availability',
              'Work hours directly reduce your membership fees - every hour saves money',
              'Track your hours easily through our online system',
              'Families can work together to fulfill requirements and build community',
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
          variant="h2"
          sx={{
            color: 'var(--text-dark)',
            marginBottom: 'var(--spacing-lg)',
            fontWeight: 700,
            fontSize: 'var(--text-3xl)',
          }}
        >
          🌟 Volunteer Opportunities
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
          Choose from a variety of meaningful ways to contribute to our learning
          community
        </Typography>
      </ContentContainer>

      <ContentContainer variant="default" spacing="lg">
        <Grid container spacing={4}>
          {volunteerOpportunities.map((opportunity, index) => (
            <Grid item xs={12} md={6} lg={4} key={index}>
              {renderOpportunityCard(opportunity, index)}
            </Grid>
          ))}
        </Grid>
      </ContentContainer>

      <CollapseContainer
        title="🏛️ Governance Participation"
        content={
          <SchoolList
            items={[
              'Board of Directors: Elected parent representatives who guide cooperative policy',
              'Education Committee: Focus on curriculum, teaching methods, and learning outcomes',
              'Finance Committee: Manage budget, fees, and financial planning',
              'Facilities Committee: Oversee maintenance, improvements, and campus development',
              'Events Committee: Plan community gatherings, fundraisers, and celebrations',
              'Communication Committee: Manage newsletters, website, and community outreach',
              'All families have voting rights in major cooperative decisions',
              'Monthly member meetings provide input on important issues',
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
          💡 Benefits of Parent Involvement
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
          <Typography
            variant="body1"
            sx={{
              color: 'var(--text-dark)',
              fontSize: 'var(--text-base)',
              lineHeight: 'var(--leading-loose)',
              fontWeight: 500,
            }}
          >
            <strong>For Your Child:</strong> Seeing parents actively involved in
            their education builds confidence, strengthens family bonds, and
            creates positive associations with learning.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: 'var(--text-dark)',
              fontSize: 'var(--text-base)',
              lineHeight: 'var(--leading-loose)',
              fontWeight: 500,
            }}
          >
            <strong>For Your Family:</strong> Build meaningful relationships
            with other families, develop new skills, and have direct input into
            your child's educational experience.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: 'var(--text-dark)',
              fontSize: 'var(--text-base)',
              lineHeight: 'var(--leading-loose)',
              fontWeight: 500,
            }}
          >
            <strong>For Our Community:</strong> Create a stronger, more
            connected learning environment where every family contributes to the
            success of all children.
          </Typography>
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
          🚀 Ready to Get Involved?
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
          Contact us to learn more about volunteer opportunities and how you can
          contribute to our thriving cooperative community. Every family brings
          unique skills and perspectives that make our learning environment
          richer for everyone.
        </Typography>
      </ContentContainer>
    </CanvasView>
  );
};

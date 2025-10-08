import React from 'react';
import { CanvasView } from '../components/shared/Canvas/CanvasView';
import { ContentContainer } from '../components/shared/ContentContainer';
import { Typography } from '../components/shared/Typography';
import { CollapseContainer } from '../components/shared/CollapseContainer';
import { SchoolList } from '../components/shared/ListText';

export const Location = () => {
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
          📍 Our Learning Locations
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
          Learn about our flexible, community-based approach to learning spaces
        </Typography>
      </ContentContainer>

      <ContentContainer
        variant="card"
        spacing="lg"
        style={{
          background: 'var(--primary-yellow)',
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
            textAlign: 'center',
          }}
        >
          🏠 Community-Based Learning Model
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
          Due to harassment from certain community members, we have transitioned
          from a single dedicated facility to a flexible, parent-coordinated
          location model. This change has actually strengthened our cooperative
          community and provides several benefits for our families.
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
          Our learning activities now take place in various safe, welcoming
          locations coordinated by our parent members. This distributed approach
          allows us to continue providing exceptional Montessori education while
          maintaining the safety and privacy of our cooperative community.
        </Typography>
      </ContentContainer>

      <CollapseContainer
        title="🌟 Benefits of Our Distributed Location Model"
        content={
          <SchoolList
            items={[
              'Enhanced safety and privacy for our families and children',
              'More flexible scheduling and location options',
              'Stronger parent involvement in coordinating learning spaces',
              'Access to diverse learning environments (homes, parks, community centers)',
              'Reduced overhead costs, keeping membership fees lower',
              'Greater sense of community ownership and responsibility',
              'Protection from external harassment and interference',
              'Ability to adapt quickly to changing needs and circumstances',
            ]}
          />
        }
        spacing="lg"
      />

      <CollapseContainer
        title="📍 How Our Location System Works"
        content={
          <>
            <Typography sx={{ marginBottom: 'var(--spacing-md)' }}>
              Our parent cooperative coordinates learning locations through our
              active member network:
            </Typography>
            <SchoolList
              items={[
                'Parent volunteers coordinate and host learning activities in their homes or selected venues',
                'Locations are shared privately with enrolled families only',
                'We utilize parks, community centers, libraries, and member homes as appropriate',
                'All locations meet safety standards and are approved by our parent committee',
                "Outdoor learning continues to be a major focus, utilizing Las Vegas's beautiful natural spaces",
                'Location information is provided to families through secure member communications',
                'Emergency contact information and safety protocols are maintained for all locations',
              ]}
            />
          </>
        }
        spacing="lg"
      />

      <CollapseContainer
        title="🛡️ Safety and Privacy Measures"
        content={
          <SchoolList
            items={[
              'All locations are vetted and approved by our parent safety committee',
              'Location details are shared only with enrolled cooperative members',
              'Background checks are maintained for all adult participants',
              'Emergency procedures are established for each location',
              'Secure communication channels protect family privacy',
              'Regular safety assessments ensure appropriate learning environments',
              'Clear protocols for handling any safety concerns or incidents',
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
          🌿 Outdoor Learning Continues
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
          Despite the location changes, our commitment to outdoor learning
          remains strong. Las Vegas offers incredible natural learning
          opportunities, and our distributed model allows us to access even more
          diverse outdoor spaces including parks, nature areas, and community
          gardens throughout the valley.
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
          📞 Getting Location Information
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: 'var(--text-dark)',
            fontSize: 'var(--text-lg)',
            lineHeight: 'var(--leading-loose)',
            fontWeight: 500,
            marginBottom: 'var(--spacing-md)',
          }}
        >
          <strong>For Prospective Families:</strong>
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: 'var(--text-dark)',
            fontSize: 'var(--text-base)',
            lineHeight: 'var(--leading-loose)',
            fontWeight: 500,
            marginBottom: 'var(--spacing-lg)',
          }}
        >
          Contact us to schedule a meeting where we can discuss our program and,
          for serious inquiries, arrange to meet at one of our learning
          locations. We prioritize the safety and privacy of our current
          families, so location details are shared only after initial
          conversations and background verification.
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: 'var(--text-dark)',
            fontSize: 'var(--text-lg)',
            lineHeight: 'var(--leading-loose)',
            fontWeight: 500,
            marginBottom: 'var(--spacing-md)',
          }}
        >
          <strong>For Current Members:</strong>
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
          Location information is shared through our secure member communication
          channels. Check your member resources or contact the parent
          coordinators for current location details and schedules.
        </Typography>
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
            marginBottom: 'var(--spacing-lg)',
            fontWeight: 700,
          }}
        >
          💪 Stronger Through Adversity
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
          While the harassment we experienced was unfortunate, it has ultimately
          made our cooperative stronger and more resilient. Our distributed
          model better reflects the true spirit of a parent cooperative - where
          families work together to create learning opportunities wherever they
          are needed. We're proud of how our community has adapted and thrived
          despite these challenges.
        </Typography>
      </ContentContainer>
    </CanvasView>
  );
};

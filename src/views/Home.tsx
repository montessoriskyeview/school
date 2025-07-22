import { InfoText } from '../components/shared/InfoText';
import { CanvasView } from '../components/shared/Canvas/CanvasView';
import { ContentContainer } from '../components/shared/ContentContainer';
import { Typography } from '../components/shared/Typography';
import { Box } from '../components/shared/Box';
import IMG_6887 from '../resources/images/location/IMG_6887.webp';

export const Home = () => {
  return (
    <CanvasView>
      {/* Main H1 - Primary keyword focus */}
      <InfoText
        title="Montessori Skye View Learning Center"
        subTitle="Child-Centered Education Las Vegas"
        subTitleVariant="h2"
        text="A Private Chez Nous Learning Center serving Pre-K through 5th grade with Montessori education and outdoor learning focus in Las Vegas, Nevada."
        titleVariant="h1"
        spacing="lg"
        containerVariant="hero"
      />

      {/* Featured Image Section - Outdoor Learning in Action */}
      <ContentContainer
        variant="card"
        spacing="lg"
        style={{
          textAlign: 'center',
          background: 'var(--white)',
          color: 'var(--text-dark)',
          border: '3px solid var(--primary-green)',
          boxShadow: 'var(--shadow-lg)',
          overflow: 'hidden',
        }}
      >
        <Typography
          variant="h2"
          component="h2"
          sx={{
            color: 'var(--text-dark)',
            marginBottom: 'var(--spacing-lg)',
            fontWeight: 700,
            fontSize: { xs: 'var(--text-2xl)', md: 'var(--text-3xl)' },
          }}
        >
          🌿 Outdoor Learning in Action
        </Typography>

        <Box
          sx={{
            position: 'relative',
            borderRadius: '16px',
            overflow: 'hidden',
            marginBottom: 'var(--spacing-lg)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
          }}
        >
          <img
            src={IMG_6887}
            alt="Children learning outdoors at Montessori Skye View Learning Center with teacher on sunny day - beautiful outdoor learning environment in Las Vegas"
            style={{
              width: '100%',
              height: 'auto',
              maxHeight: '500px',
              objectFit: 'cover',
              display: 'block',
            }}
            loading="eager"
          />
        </Box>

        <Typography
          variant="body1"
          sx={{
            color: 'var(--text-dark)',
            fontSize: { xs: 'var(--text-base)', md: 'var(--text-lg)' },
            lineHeight: 'var(--leading-loose)',
            fontWeight: 500,
            fontStyle: 'italic',
          }}
        >
          "Nature is the best playground. It is the source of all learning, the
          foundation of all growth." - Dr. Maria Montessori
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: 'var(--text-dark)',
            fontSize: { xs: 'var(--text-base)', md: 'var(--text-lg)' },
            lineHeight: 'var(--leading-loose)',
            fontWeight: 500,
            marginTop: 'var(--spacing-md)',
          }}
        >
          The Montessori Skye View Learning Center offers the lowest
          student-to-teacher ratio and the best outdoor landscape in the Las
          Vegas valley, providing an exceptional learning environment in our
          beautiful suburban campus!
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: 'var(--text-dark)',
            fontSize: { xs: 'var(--text-base)', md: 'var(--text-lg)' },
            lineHeight: 'var(--leading-loose)',
            fontWeight: 500,
            marginTop: 'var(--spacing-md)',
          }}
        >
          Our students thrive in our beautiful outdoor learning environment,
          where nature becomes the classroom and every day brings new
          discoveries.
        </Typography>
      </ContentContainer>

      {/* H2 Section - Secondary keywords */}
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
          component="h2"
          sx={{
            color: 'var(--text-dark)',
            marginBottom: 'var(--spacing-lg)', // Reduced from spacing-xl
            fontWeight: 700,
            fontSize: { xs: 'var(--text-2xl)', md: 'var(--text-3xl)' }, // Responsive font size
          }}
        >
          🌟 Where Learning Comes Alive! 🌟
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: 'var(--text-dark)',
            fontSize: { xs: 'var(--text-base)', md: 'var(--text-xl)' }, // Responsive font size
            lineHeight: 'var(--leading-loose)',
            fontWeight: 500,
          }}
        >
          Nurturing curious minds and joyful hearts in grades Pre-K through 5th
        </Typography>
      </ContentContainer>

      {/* H2 Section - About Montessori education */}
      <InfoText
        title="About Our Montessori Learning Center"
        text="Montessori Skye View is a new Montessori learning center dedicated to fostering a love of learning for grades pre-k through 5th. We believe in the power of the Montessori Method, an educational approach developed by Dr. Maria Montessori, which emphasizes self-directed exploration, hands-on activities, and a nurturing environment. As a learning center, we provide homeschool supplementation and enrichment programs rather than traditional schooling. Located in the northwest corner of Las Vegas, our beautiful Skye Canyon campus provides ample outdoor space for play and learning."
        spacing="lg"
        titleVariant="h2"
      />

      {/* H3 Section - Our approach */}
      <ContentContainer
        variant="card"
        spacing="lg"
        style={{
          background: 'var(--white)',
          color: 'var(--text-dark)',
          textAlign: 'center',
          border: '3px solid var(--primary-green)',
          boxShadow: 'var(--shadow-lg)',
        }}
      >
        <Typography
          variant="h3"
          component="h3"
          sx={{
            color: 'var(--text-dark)',
            marginBottom: 'var(--spacing-lg)', // Reduced from spacing-xl
            fontWeight: 700,
            fontSize: { xs: 'var(--text-xl)', md: 'var(--text-3xl)' }, // Responsive font size
          }}
        >
          🌱 Our Montessori Approach
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: 'var(--text-dark)',
            fontSize: { xs: 'var(--text-base)', md: 'var(--text-lg)' }, // Responsive font size
            lineHeight: 'var(--leading-loose)',
            fontWeight: 500,
          }}
        >
          We create an environment where children feel safe, valued, and
          inspired to explore their natural curiosity. Our experienced teachers
          guide each child's unique learning journey, helping them develop
          confidence, independence, and a lifelong love of learning.
        </Typography>
      </ContentContainer>

      {/* H3 Section - What makes us special */}
      <ContentContainer
        variant="card"
        spacing="lg"
        style={{
          textAlign: 'center',
          background: 'var(--white)',
          color: 'var(--text-dark)',
          border: '3px solid var(--secondary-pink)',
          boxShadow: 'var(--shadow-lg)',
        }}
      >
        <Typography
          variant="h3"
          component="h3"
          sx={{
            color: 'var(--text-dark)',
            marginBottom: 'var(--spacing-lg)', // Reduced from spacing-xl
            fontWeight: 700,
            fontSize: { xs: 'var(--text-xl)', md: 'var(--text-3xl)' }, // Responsive font size
          }}
        >
          🎨 What Makes Our Montessori Learning Center Special
        </Typography>
        <div
          role="list"
          style={{
            display: 'grid',
            gap: 'var(--spacing-md)', // Reduced from spacing-lg
            textAlign: 'left',
          }}
        >
          <div
            role="listitem"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--spacing-sm)', // Reduced from spacing-md
            }}
          >
            <span style={{ fontSize: '1.5rem' }} aria-hidden="true">
              {' '}
              {/* Reduced from 2rem */}
              🎯
            </span>
            <Typography
              variant="body1"
              sx={{
                color: 'var(--text-dark)',
                fontSize: { xs: 'var(--text-base)', md: 'var(--text-lg)' }, // Responsive font size
                fontWeight: 500,
              }}
            >
              Individualized learning plans for every child
            </Typography>
          </div>
          <div
            role="listitem"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--spacing-sm)', // Reduced from spacing-md
            }}
          >
            <span style={{ fontSize: '1.5rem' }} aria-hidden="true">
              {' '}
              {/* Reduced from 2rem */}
              🤝
            </span>
            <Typography
              variant="body1"
              sx={{
                color: 'var(--text-dark)',
                fontSize: { xs: 'var(--text-base)', md: 'var(--text-lg)' }, // Responsive font size
                fontWeight: 500,
              }}
            >
              Mixed-age classrooms that foster community
            </Typography>
          </div>
          <div
            role="listitem"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--spacing-sm)', // Reduced from spacing-md
            }}
          >
            <span style={{ fontSize: '1.5rem' }} aria-hidden="true">
              {' '}
              {/* Reduced from 2rem */}
              🌿
            </span>
            <Typography
              variant="body1"
              sx={{
                color: 'var(--text-dark)',
                fontSize: { xs: 'var(--text-base)', md: 'var(--text-lg)' }, // Responsive font size
                fontWeight: 500,
              }}
            >
              Beautiful outdoor learning spaces
            </Typography>
          </div>
          <div
            role="listitem"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--spacing-sm)', // Reduced from spacing-md
            }}
          >
            <span style={{ fontSize: '1.5rem' }} aria-hidden="true">
              {' '}
              {/* Reduced from 2rem */}
              💝
            </span>
            <Typography
              variant="body1"
              sx={{
                color: 'var(--text-dark)',
                fontSize: { xs: 'var(--text-base)', md: 'var(--text-lg)' }, // Responsive font size
                fontWeight: 500,
              }}
            >
              Nurturing environment that celebrates each child
            </Typography>
          </div>
        </div>
      </ContentContainer>

      {/* H2 Section - Call to action */}
      <InfoText
        title="Ready to Begin Your Child's Montessori Journey?"
        text="We invite you to explore our website and discover how Montessori Skye View can provide your child with an exceptional educational foundation. Contact us today to schedule a visit and see our beautiful campus in person!"
        spacing="lg"
        titleVariant="h2"
      />
    </CanvasView>
  );
};

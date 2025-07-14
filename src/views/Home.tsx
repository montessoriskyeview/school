import { InfoText } from '../components/shared/InfoText';
import { CanvasView } from '../components/shared/Canvas/CanvasView';
import { ContentContainer } from '../components/shared/ContentContainer';
import { Typography } from '../components/shared/Typography';

export const Home = () => {
  return (
    <CanvasView>
      <InfoText
        title="Welcome to Montessori Learning Center Skye View"
        text="A Private Chez Nous Learning Center"
        titleVariant="h1"
        spacing="lg"
        containerVariant="hero"
      />

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
          variant="h3"
          sx={{
            color: 'var(--text-dark)',
            marginBottom: 'var(--spacing-xl)',
            fontWeight: 700,
            fontSize: 'var(--text-3xl)',
          }}
        >
          🌟 Where Learning Comes Alive! 🌟
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: 'var(--text-dark)',
            fontSize: 'var(--text-xl)',
            lineHeight: 'var(--leading-loose)',
            fontWeight: 500,
          }}
        >
          Nurturing curious minds and joyful hearts in grades Pre-K through 5th
        </Typography>
      </ContentContainer>

      <InfoText
        title="About Our Learning Center"
        text="Montessori Skye View is a new Montessori learning center dedicated to fostering a love of learning for grades pre-k through 5th. We believe in the power of the Montessori Method, an educational approach developed by Dr. Maria Montessori, which emphasizes self-directed exploration, hands-on activities, and a nurturing environment. As a learning center, we provide homeschool supplementation and enrichment programs rather than traditional schooling. Located in the northwest corner of Las Vegas, our beautiful Skye Canyon campus provides ample outdoor space for play and learning."
        spacing="lg"
        titleVariant="h2"
      />

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
          sx={{
            color: 'var(--text-dark)',
            marginBottom: 'var(--spacing-xl)',
            fontWeight: 700,
          }}
        >
          🌱 Our Approach
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
          We create an environment where children feel safe, valued, and
          inspired to explore their natural curiosity. Our experienced teachers
          guide each child's unique learning journey, helping them develop
          confidence, independence, and a lifelong love of learning.
        </Typography>
      </ContentContainer>

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
          sx={{
            color: 'var(--text-dark)',
            marginBottom: 'var(--spacing-xl)',
            fontWeight: 700,
          }}
        >
          🎨 What Makes Us Special
        </Typography>
        <div
          style={{
            display: 'grid',
            gap: 'var(--spacing-lg)',
            textAlign: 'left',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--spacing-md)',
            }}
          >
            <span style={{ fontSize: '2rem' }}>🎯</span>
            <Typography
              variant="body1"
              sx={{
                color: 'var(--text-dark)',
                fontSize: 'var(--text-lg)',
                fontWeight: 500,
              }}
            >
              Individualized learning plans for every child
            </Typography>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--spacing-md)',
            }}
          >
            <span style={{ fontSize: '2rem' }}>🤝</span>
            <Typography
              variant="body1"
              sx={{
                color: 'var(--text-dark)',
                fontSize: 'var(--text-lg)',
                fontWeight: 500,
              }}
            >
              Mixed-age classrooms that foster community
            </Typography>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--spacing-md)',
            }}
          >
            <span style={{ fontSize: '2rem' }}>🌿</span>
            <Typography
              variant="body1"
              sx={{
                color: 'var(--text-dark)',
                fontSize: 'var(--text-lg)',
                fontWeight: 500,
              }}
            >
              Beautiful outdoor learning spaces
            </Typography>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--spacing-md)',
            }}
          >
            <span style={{ fontSize: '2rem' }}>💝</span>
            <Typography
              variant="body1"
              sx={{
                color: 'var(--text-dark)',
                fontSize: 'var(--text-lg)',
                fontWeight: 500,
              }}
            >
              Nurturing environment that celebrates each child
            </Typography>
          </div>
        </div>
      </ContentContainer>

      <InfoText
        title="Ready to Begin Your Child's Journey?"
        text="We invite you to explore our website and discover how Montessori Skye View can provide your child with an exceptional educational foundation. Contact us today to schedule a visit and see our beautiful campus in person!"
        spacing="lg"
        titleVariant="h2"
      />
    </CanvasView>
  );
};

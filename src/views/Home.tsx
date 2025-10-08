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
        title="Montessori Skye View Parent Cooperative"
        subTitle="Community-Driven Montessori Education Las Vegas"
        subTitleVariant="h2"
        text="A homeschool parent cooperative serving Pre-K through 5th grade where families are REQUIRED to actively participate in creating an exceptional Montessori learning community in Las Vegas, Nevada."
        titleVariant="h1"
        spacing="lg"
        containerVariant="hero"
      />

      {/* IMPORTANT: Active Participation Requirements */}
      <ContentContainer
        variant="card"
        spacing="lg"
        style={{
          textAlign: 'center',
          background: 'var(--primary-yellow)',
          color: 'var(--text-dark)',
          border: '4px solid var(--primary-blue)',
          boxShadow: 'var(--shadow-xl)',
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
          ⚠️ IMPORTANT: This is an Active Participation Program
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: 'var(--text-dark)',
            fontSize: { xs: 'var(--text-lg)', md: 'var(--text-xl)' },
            lineHeight: 'var(--leading-loose)',
            fontWeight: 600,
            marginBottom: 'var(--spacing-lg)',
          }}
        >
          This is a HOMESCHOOL COOPERATIVE where parent participation is
          MANDATORY, not optional.
        </Typography>
        <div
          style={{
            display: 'grid',
            gap: 'var(--spacing-md)',
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
              lineHeight: 'var(--leading-relaxed)',
              fontWeight: 500,
            }}
          >
            ✅ <strong>You MUST contribute monthly</strong> - time, resources,
            or other support
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: 'var(--text-dark)',
              fontSize: 'var(--text-base)',
              lineHeight: 'var(--leading-relaxed)',
              fontWeight: 500,
            }}
          >
            ✅ <strong>You MUST participate</strong> in classroom activities,
            maintenance, or administration
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: 'var(--text-dark)',
              fontSize: 'var(--text-base)',
              lineHeight: 'var(--leading-relaxed)',
              fontWeight: 500,
            }}
          >
            ✅ <strong>You MUST homeschool</strong> - your child is legally
            homeschooled in Nevada
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: 'var(--text-dark)',
              fontSize: 'var(--text-base)',
              lineHeight: 'var(--leading-relaxed)',
              fontWeight: 500,
            }}
          >
            ❌ <strong>This is NOT a drop-off program</strong> - parents must be
            engaged partners
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: 'var(--text-dark)',
              fontSize: 'var(--text-base)',
              lineHeight: 'var(--leading-relaxed)',
              fontWeight: 500,
            }}
          >
            ❌ <strong>If you want minimal involvement</strong> - consider
            traditional private schools
          </Typography>
        </div>
      </ContentContainer>

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
          🌿 Community Learning in Action
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
          The Montessori Skye View Parent Cooperative offers the lowest
          student-to-teacher ratio and the best outdoor landscape in the Las
          Vegas valley, with active parent involvement creating an exceptional
          learning community in our beautiful suburban campus!
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
          Our children thrive in our beautiful outdoor learning environment,
          where parents, educators, and children work together as nature becomes
          the classroom and every day brings new discoveries through
          collaborative learning.
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
        title="About Our Homeschool Parent Cooperative"
        text="Montessori Skye View is a homeschool parent cooperative where families are REQUIRED to be active partners in their child's education. This is not a traditional school where you drop off your child - parents must participate monthly in classroom activities, maintenance, administration, or other contributions. We combine the Montessori Method with mandatory family involvement, where parents work alongside educators to create an exceptional learning environment. As a cooperative, families share responsibility for education, governance, and daily operations. Your child is legally homeschooled in Nevada, and we provide guidance for state requirements. Located in the northwest corner of Las Vegas, our beautiful Skye Canyon campus provides ample outdoor space for collaborative learning and community building."
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
          🌱 Our Cooperative Montessori Approach
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
          We create a collaborative environment where children, parents, and
          educators work together to foster safety, value, and inspiration. Our
          experienced teachers partner with engaged families to guide each
          child's unique learning journey, helping them develop confidence,
          independence, and a lifelong love of learning through community
          involvement.
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
          🎨 What Makes Our Parent Cooperative Special
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
              Parent involvement in daily learning activities
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
              Collaborative community that celebrates every family
            </Typography>
          </div>
        </div>
      </ContentContainer>

      {/* New Section - Parent Involvement Benefits */}
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
          variant="h2"
          component="h2"
          sx={{
            color: 'var(--text-dark)',
            marginBottom: 'var(--spacing-lg)',
            fontWeight: 700,
            fontSize: { xs: 'var(--text-2xl)', md: 'var(--text-3xl)' },
          }}
        >
          🤝 Why Choose a Parent Cooperative?
        </Typography>
        <div
          role="list"
          style={{
            display: 'grid',
            gap: 'var(--spacing-lg)',
            textAlign: 'left',
            maxWidth: '800px',
            margin: '0 auto',
          }}
        >
          <div
            role="listitem"
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: 'var(--spacing-md)',
            }}
          >
            <span
              style={{ fontSize: '2rem', minWidth: '3rem' }}
              aria-hidden="true"
            >
              👨‍👩‍👧‍👦
            </span>
            <div>
              <Typography
                variant="h4"
                sx={{
                  color: 'var(--text-dark)',
                  fontSize: 'var(--text-lg)',
                  fontWeight: 600,
                  marginBottom: 'var(--spacing-sm)',
                }}
              >
                Active Family Involvement
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: 'var(--text-dark)',
                  fontSize: 'var(--text-base)',
                  fontWeight: 400,
                  lineHeight: 'var(--leading-relaxed)',
                }}
              >
                Parents participate directly in their child's education through
                classroom assistance, special projects, and community events,
                creating stronger family-school connections.
              </Typography>
            </div>
          </div>
          <div
            role="listitem"
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: 'var(--spacing-md)',
            }}
          >
            <span
              style={{ fontSize: '2rem', minWidth: '3rem' }}
              aria-hidden="true"
            >
              💰
            </span>
            <div>
              <Typography
                variant="h4"
                sx={{
                  color: 'var(--text-dark)',
                  fontSize: 'var(--text-lg)',
                  fontWeight: 600,
                  marginBottom: 'var(--spacing-sm)',
                }}
              >
                Affordable Quality Education
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: 'var(--text-dark)',
                  fontSize: 'var(--text-base)',
                  fontWeight: 400,
                  lineHeight: 'var(--leading-relaxed)',
                }}
              >
                Cooperative membership reduces costs while maintaining
                high-quality Montessori education through shared
                responsibilities and community investment.
              </Typography>
            </div>
          </div>
          <div
            role="listitem"
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: 'var(--spacing-md)',
            }}
          >
            <span
              style={{ fontSize: '2rem', minWidth: '3rem' }}
              aria-hidden="true"
            >
              🌱
            </span>
            <div>
              <Typography
                variant="h4"
                sx={{
                  color: 'var(--text-dark)',
                  fontSize: 'var(--text-lg)',
                  fontWeight: 600,
                  marginBottom: 'var(--spacing-sm)',
                }}
              >
                Stronger Learning Community
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: 'var(--text-dark)',
                  fontSize: 'var(--text-base)',
                  fontWeight: 400,
                  lineHeight: 'var(--leading-relaxed)',
                }}
              >
                Children benefit from seeing their parents actively engaged in
                their learning environment, while families build lasting
                friendships and support networks.
              </Typography>
            </div>
          </div>
        </div>
      </ContentContainer>

      {/* H2 Section - Call to action */}
      <InfoText
        title="Ready to Commit to Active Participation?"
        text="We invite families who are ready to be ACTIVE PARTNERS in their child's education to explore our cooperative. This is perfect for families who want to be involved, can commit their time or materials on a monthly basis, and are comfortable with homeschooling requirements. If you're looking for a traditional drop-off school experience, this program is not for you. Contact us today to schedule a visit, meet our community, and learn about the participation requirements for joining our cooperative learning family!"
        spacing="lg"
        titleVariant="h2"
      />
    </CanvasView>
  );
};

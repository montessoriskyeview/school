import { Box } from '@mui/material';
import property1 from '../resources/images/location/property1.png';
import property2 from '../resources/images/location/property2.png';
import property3 from '../resources/images/location/property3.jpg';
import property4 from '../resources/images/location/property4.jpg';
import property5 from '../resources/images/location/property5.jpg';
import property6 from '../resources/images/location/property6.png';
import property7 from '../resources/images/location/property7.png';
import property8 from '../resources/images/location/property8.png';
import property9 from '../resources/images/location/property9.png';
import property10 from '../resources/images/location/property10.png';
import property11 from '../resources/images/location/property11.png';
import property12 from '../resources/images/location/property12.png';
import property13 from '../resources/images/location/property13.jpg';
import property14 from '../resources/images/location/property14.jpg';
import property15 from '../resources/images/location/property15.jpg';
import property16 from '../resources/images/location/property16.jpg';
import { CanvasView } from '../components/shared/Canvas/CanvasView';
import { CollapseContainer } from '../components/shared/CollapseContainer';
import { Carousel } from '../components/shared/Carousel';
import { ContentContainer } from '../components/shared/ContentContainer';
import { Typography } from '../components/shared/Typography';

const slides = [
  {
    src: property1,
    className: 'carousel-slide',
    alt: 'Skyeview Montessori Learning Center campus exterior - beautiful outdoor learning environment in Las Vegas',
    title: 'Montessori Campus Exterior',
    description:
      'Our beautiful Skye Canyon campus designed for Montessori education',
  },
  {
    src: property2,
    className: 'carousel-slide',
    alt: 'Montessori learning center outdoor spaces - nature-based education environment for children',
    title: 'Outdoor Learning Spaces',
    description: 'Extensive outdoor areas for nature-based Montessori learning',
  },
  {
    src: property3,
    className: 'carousel-slide',
    alt: 'Montessori classroom interior - child-centered learning environment with educational materials',
    title: 'Montessori Classroom',
    description: 'Purpose-built classrooms with authentic Montessori materials',
  },
  {
    src: property4,
    className: 'carousel-slide',
    alt: 'Montessori learning center grounds - peaceful environment for child development in Las Vegas',
    title: 'Campus Grounds',
    description:
      'Peaceful, nature-rich environment perfect for Montessori education',
  },
  {
    src: property5,
    className: 'carousel-slide',
    alt: 'Montessori outdoor play area - safe and engaging space for children to explore and learn',
    title: 'Outdoor Play Area',
    description:
      'Safe and engaging outdoor spaces for exploration and learning',
  },
  {
    src: property6,
    className: 'carousel-slide',
    alt: 'Montessori learning center entrance - welcoming environment for families in northwest Las Vegas',
    title: 'Campus Entrance',
    description: 'Welcoming entrance to our Montessori learning community',
  },
  {
    src: property7,
    className: 'carousel-slide',
    alt: 'Montessori education facilities - specialized learning environment for Pre-K through 5th grade',
    title: 'Learning Facilities',
    description: 'Specialized facilities designed for Montessori education',
  },
  {
    src: property8,
    className: 'carousel-slide',
    alt: 'Montessori campus landscaping - beautiful outdoor environment for child-centered learning',
    title: 'Campus Landscaping',
    description: 'Beautiful landscaping creating an ideal learning environment',
  },
  {
    src: property9,
    className: 'carousel-slide',
    alt: 'Montessori learning center building - modern facility for child development and education',
    title: 'Learning Center Building',
    description:
      'Modern facility designed specifically for Montessori education',
  },
  {
    src: property10,
    className: 'carousel-slide',
    alt: 'Montessori outdoor learning environment - nature-based education spaces for children',
    title: 'Outdoor Learning Environment',
    description: 'Nature-based learning spaces following Montessori principles',
  },
  {
    src: property11,
    className: 'carousel-slide',
    alt: 'Montessori campus view - comprehensive view of our Las Vegas learning center',
    title: 'Campus Overview',
    description: 'Comprehensive view of our Montessori learning center campus',
  },
  {
    src: property12,
    className: 'carousel-slide',
    alt: 'Montessori education center - child-friendly environment for Pre-K through 5th grade',
    title: 'Education Center',
    description: 'Child-friendly environment supporting Montessori education',
  },
  {
    src: property13,
    className: 'carousel-slide',
    alt: 'Montessori learning center interior spaces - designed for child-centered education',
    title: 'Interior Learning Spaces',
    description:
      'Interior spaces designed for child-centered Montessori education',
  },
  {
    src: property14,
    className: 'carousel-slide',
    alt: 'Montessori campus facilities - comprehensive learning environment in northwest Las Vegas',
    title: 'Campus Facilities',
    description: 'Comprehensive facilities supporting Montessori learning',
  },
  {
    src: property15,
    className: 'carousel-slide',
    alt: 'Montessori outdoor education areas - nature-based learning spaces for children',
    title: 'Outdoor Education Areas',
    description: 'Nature-based outdoor education areas for Montessori learning',
  },
  {
    src: property16,
    className: 'carousel-slide',
    alt: 'Montessori learning center campus - complete view of our Las Vegas Montessori school',
    title: 'Complete Campus View',
    description: 'Complete view of our Montessori learning center in Las Vegas',
  },
];

export const Location = () => {
  return (
    <CanvasView>
      {/* Main H1 - Location-focused keywords */}
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
          component="h1"
          sx={{
            color: 'var(--text-dark)',
            marginBottom: 'var(--spacing-lg)',
            fontWeight: 700,
            fontSize: 'var(--text-4xl)',
          }}
        >
          🏫 Our Beautiful Montessori Campus Location
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
          Take a virtual tour of our beautiful Skye Canyon campus in Las Vegas,
          designed specifically for Montessori learning with ample outdoor space
          for exploration and play.
        </Typography>
      </ContentContainer>

      {/* H2 Section - Campus photo gallery */}
      <CollapseContainer
        title="📸 Campus Photo Gallery - Montessori Learning Environment"
        content={
          <Box
            component="div"
            sx={{
              display: 'flex',
              justifyContent: 'center',
              padding: 'var(--spacing-lg) 0',
            }}
          >
            <Carousel slides={slides} height="lg" />
          </Box>
        }
        spacing="lg"
      />

      {/* H2 Section - Location details */}
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
          variant="h2"
          component="h2"
          sx={{
            color: 'var(--text-dark)',
            marginBottom: 'var(--spacing-xl)',
            fontWeight: 700,
          }}
        >
          📍 Skye Canyon Location - Northwest Las Vegas
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
          Our Montessori learning center is conveniently located in the
          northwest corner of Las Vegas, in the beautiful Skye Canyon area. This
          prime location offers easy access for families throughout the Las
          Vegas valley while providing a peaceful, nature-rich environment
          perfect for Montessori education.
        </Typography>
      </ContentContainer>

      {/* H3 Section - Outdoor learning spaces */}
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
            marginBottom: 'var(--spacing-xl)',
            fontWeight: 700,
          }}
        >
          🌿 Outdoor Learning Spaces
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
          Our campus features extensive outdoor learning areas designed
          specifically for Montessori education. Children can explore nature,
          engage in hands-on learning activities, and develop a deep connection
          with the natural world while following Montessori principles.
        </Typography>
      </ContentContainer>

      {/* H3 Section - Campus facilities */}
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
          component="h3"
          sx={{
            color: 'var(--text-dark)',
            marginBottom: 'var(--spacing-xl)',
            fontWeight: 700,
          }}
        >
          🏠 Montessori Learning Facilities
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
          Our campus includes purpose-built Montessori classrooms, specialized
          learning materials, and child-friendly facilities that support the
          Montessori method. Every space is designed to foster independence,
          creativity, and a love of learning.
        </Typography>
      </ContentContainer>
    </CanvasView>
  );
};

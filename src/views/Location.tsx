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
import { InfoText } from '../components/shared/InfoText';
import { CollapseContainer } from '../components/shared/CollapseContainer';
import { Carousel } from '../components/shared/Carousel';
import { ContentContainer } from '../components/shared/ContentContainer';
import { Typography } from '../components/shared/Typography';

const slides = [
  { src: property1, className: 'carousel-slide' },
  { src: property2, className: 'carousel-slide' },
  { src: property3, className: 'carousel-slide' },
  { src: property4, className: 'carousel-slide' },
  { src: property5, className: 'carousel-slide' },
  { src: property6, className: 'carousel-slide' },
  { src: property7, className: 'carousel-slide' },
  { src: property8, className: 'carousel-slide' },
  { src: property9, className: 'carousel-slide' },
  { src: property10, className: 'carousel-slide' },
  { src: property11, className: 'carousel-slide' },
  { src: property12, className: 'carousel-slide' },
  { src: property13, className: 'carousel-slide' },
  { src: property14, className: 'carousel-slide' },
  { src: property15, className: 'carousel-slide' },
  { src: property16, className: 'carousel-slide' },
];

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
          variant="h2"
          sx={{
            color: 'var(--text-dark)',
            marginBottom: 'var(--spacing-lg)',
            fontWeight: 700,
            fontSize: 'var(--text-4xl)',
          }}
        >
          🏫 Our Beautiful Campus
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
          Take a virtual tour of our beautiful Skye Canyon campus, designed
          specifically for Montessori learning with ample outdoor space for
          exploration and play.
        </Typography>
      </ContentContainer>

      <CollapseContainer
        title="📸 Campus Photo Gallery"
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
          📍 Location & Directions
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
          Montessori Skye View is located on N. Eula St., just east of Hualapai
          and between Dorrell Ln. and Elkhorn Rd. Our campus is fully gated so
          please arrange a visit prior to arrival. Use the contact information
          below to schedule a visit.
        </Typography>
      </ContentContainer>

      <CollapseContainer
        title="🗺️ Interactive Map"
        content={
          <div
            style={{
              width: '100%',
              padding: 'var(--spacing-lg) 0',
            }}
          >
            <iframe
              title="Montessori Skye View Location"
              width="100%"
              height="600"
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=7060%20N%20Eula%20St+(Montessori%20Skye%20View)&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              style={{
                border: 'none',
                borderRadius: 'var(--radius-lg)',
                boxShadow: 'var(--shadow-md)',
              }}
            >
              <a href="https://www.gps.ie/">gps devices</a>
            </iframe>
          </div>
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
          border: '3px solid var(--secondary-pink)',
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
          🎯 Schedule a Visit
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
          We'd love to show you around our beautiful campus! Contact us to
          schedule a personal tour and see firsthand how our Montessori
          environment nurtures learning and growth.
        </Typography>
      </ContentContainer>
    </CanvasView>
  );
};

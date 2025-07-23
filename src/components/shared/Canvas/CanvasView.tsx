import { Box, Container } from '@mui/material';
import { ContactInfo } from '../ContactInfo';
import { QuickNavigation } from '../QuickNavigation';
import { MobileHeroCTA } from '../MobileHeroCTA';
import { useState } from 'react';

export const CanvasView = ({
  children,
  hideRouteChips,
  extraMobileCtaTitle,
  extraMobileCtaMessage,
}: {
  children: React.ReactNode;
  hideRouteChips?: boolean;
  extraMobileCtaTitle?: string;
  extraMobileCtaMessage?: string;
}) => {
  const [imageLoaded] = useState(false);

  return (
    <Box
      component="div"
      sx={{
        position: 'relative',
        minHeight: '100vh',
        overflow: 'auto',
        backgroundColor: 'var(--cloud-white)',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box
        component="div"
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -1,
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background:
              'linear-gradient(135deg, rgba(75, 180, 222, 0.85), rgba(126, 217, 87, 0.85))',
            mixBlendMode: 'soft-light',
            zIndex: 1,
          },
        }}
        style={{
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundAttachment: 'fixed',
          transition: 'opacity 0.3s ease',
          opacity: imageLoaded ? 1 : 0,
        }}
      >
        <Box
          component="div"
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background:
              'linear-gradient(180deg, rgba(249, 250, 251, 0.9) 0%, rgba(249, 250, 251, 0.75) 100%)',
            backdropFilter: 'blur(2px)',
            zIndex: 2,
          }}
        />
      </Box>

      {/* Main Content Container */}
      <Container
        maxWidth="lg"
        sx={{
          position: 'relative',
          zIndex: 1,
          py: { xs: 4, md: 8 }, // Reduced padding for mobile
          px: { xs: 0, md: 5 }, // Reduced horizontal padding for mobile
          mt: { xs: 10, md: 14 }, // Reduced top margin for mobile
          pb: { xs: 10, md: 8 }, // Extra bottom padding on mobile for sticky CTA
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          '& > *': {
            maxWidth: '800px',
            mx: 'auto',
            width: '100%',
            textAlign: 'center',
          },
          '& img': {
            maxWidth: '100%',
            height: 'auto',
            loading: 'lazy', // Add lazy loading for images
          },
        }}
      >
        {!hideRouteChips && <QuickNavigation />}

        {/* Children with proper spacing */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--spacing-3xl)', // Generous spacing between children
            width: '100%',
          }}
        >
          {children}
        </div>
      </Container>

      {/* Mobile Hero CTA - positioned independently outside main container */}
      <MobileHeroCTA
        extraTitle={extraMobileCtaTitle}
        extraMessage={extraMobileCtaMessage}
      />

      {/* Footer Container */}
      <Box
        component="div"
        sx={{
          position: 'relative',
          zIndex: 0, // Changed from 1 to 0 to ensure it's below MobileHeroCTA
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          padding: { xs: 3, md: 5 }, // Increased padding
          paddingBottom: { xs: 12, md: 5 }, // Extra bottom padding on mobile for sticky CTA
          marginTop: 'auto',
        }}
      >
        <Box
          component="div"
          sx={{
            maxWidth: '800px',
            width: '100%',
          }}
        >
          <ContactInfo />
        </Box>
      </Box>
    </Box>
  );
};

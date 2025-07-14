import { Box, Container } from '@mui/material';
import { ContactInfo } from '../ContactInfo';
import property from '../../../resources/images/location/property1.png';
import { RouteChips } from '../../../views/Routes';

export const CanvasView = ({
  children,
  hideRouteChips,
}: {
  children: React.ReactNode;
  hideRouteChips?: boolean;
}) => {
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
          backgroundImage: `url(${property})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundAttachment: 'fixed',
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
          py: { xs: 4, md: 6 },
          px: { xs: 2, md: 4 },
          mt: { xs: 10, md: 12 },
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--spacing-xl)',
          '& > *': {
            maxWidth: '800px',
            mx: 'auto',
            width: '100%',
            textAlign: 'center',
          },
          '& img': {
            maxWidth: '100%',
            height: 'auto',
          },
        }}
      >
        {!hideRouteChips && (
          <div style={{ marginBottom: 'var(--spacing-md)' }}>
            <RouteChips />
          </div>
        )}
        {children}
      </Container>

      {/* Footer Container */}
      <Box
        component="div"
        sx={{
          position: 'relative',
          zIndex: 1,
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          padding: { xs: 2, md: 4 },
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

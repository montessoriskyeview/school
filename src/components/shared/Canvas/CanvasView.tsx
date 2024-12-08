import { Box } from '@mui/material';
import { ContactInfo } from '../ContactInfo';
import property from '../../../resources/images/location/property1.png';
import { RouteChips } from '../../../views/Routes';

export const CanvasView = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box
      component='div'
      sx={{
        position: 'relative',
        height: '100vh',
        overflow: 'auto' // Allows content to scroll
      }}
    >
      <Box
        component='div'
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -1 // Ensure the background is behind the content
        }}
        style={{
          backgroundImage: `url(${property})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundAttachment: 'fixed' // Keeps the background image fixed
        }}
      >
        <Box
          component='div'
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.8)' // Adjust opacity as needed
          }}
        />
      </Box>
      <Box
        component='div'
        sx={{
          position: 'relative',
          zIndex: 1,
          paddingY: '100px' // Adjust padding as needed
        }}
      >
        {children}
        <ContactInfo />
      </Box>
    </Box>
  );
};

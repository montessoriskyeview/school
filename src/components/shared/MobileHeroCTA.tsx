import { Box, Container, Button, Stack } from '@mui/material';
import { EnrollmentButtons } from './EnrollmentButtons';

const PHONE = '7027219488';
const EMAIL = 'NWLVMontessori@gmail.com'.toLowerCase();

export const MobileHeroCTA = () => {
  return (
    <Box
      component="div"
      sx={{
        display: { xs: 'block', md: 'none' }, // Only show on mobile
        backgroundColor: 'var(--white)',
        borderRadius: 'var(--radius-lg)',
        boxShadow: 'var(--shadow-lg)',
        margin: { xs: 2, md: 0 }, // Reduced margin for more compact feel
        padding: { xs: 2.5, md: 0 }, // Reduced padding for more compact feel
        border: '2px solid var(--primary-blue)',
        marginBottom: { xs: 3, md: 0 }, // Reduced bottom margin
      }}
    >
      <Container
        maxWidth="sm"
        sx={{
          textAlign: 'center',
          py: { xs: 2, md: 0 }, // Reduced vertical padding
          px: { xs: 2, md: 0 }, // Reduced horizontal padding
        }}
      >
        <Box
          component="div"
          sx={{
            marginBottom: 'var(--spacing-xl)', // Reduced spacing
          }}
        >
          <h2
            style={{
              fontSize: 'var(--text-xl)', // Reduced from text-2xl
              fontWeight: 700,
              color: 'var(--text-dark)',
              margin: '0 0 var(--spacing-md) 0', // Reduced margin
              lineHeight: 1.2,
            }}
          >
            Ready to Enroll?
          </h2>
          <p
            style={{
              fontSize: 'var(--text-base)', // Reduced from text-lg
              color: 'var(--text-secondary)',
              margin: '0 0 var(--spacing-lg) 0', // Reduced margin
              lineHeight: 1.5,
            }}
          >
            Join our Montessori community today
          </p>
        </Box>

        <EnrollmentButtons
          variant="primary"
          sx={{
            flexDirection: 'column',
            gap: 2, // Reduced gap between buttons
            '& .MuiLink-root': {
              fontSize: 'var(--text-base)', // Reduced from text-lg
              fontWeight: 700,
              padding: 'var(--spacing-md) var(--spacing-lg)', // Reduced padding
              borderRadius: 'var(--radius-full)',
              backgroundColor: 'var(--primary-blue)',
              color: 'var(--white)',
              textDecoration: 'none',
              display: 'inline-block',
              transition: 'all 0.3s ease',
              boxShadow: 'var(--shadow-md)',
              minHeight: '44px', // Reduced but still meets accessibility standards
              '&:hover': {
                backgroundColor: '#1D4ED8',
                transform: 'translateY(-2px)',
                boxShadow: 'var(--shadow-lg)',
                textDecoration: 'none',
              },
              '&:focus': {
                outline: '3px solid var(--primary-blue)',
                outlineOffset: '2px',
              },
            },
          }}
        />

        {/* Contact Buttons */}
        <Stack
          direction="row"
          spacing={2}
          justifyContent="center"
          sx={{ mt: 2 }}
        >
          <Button
            variant="outlined"
            color="primary"
            href={`tel:${PHONE}`}
            sx={{
              minWidth: 0,
              px: 2,
              py: 1,
              fontSize: 'var(--text-base)',
              borderRadius: 'var(--radius-full)',
              textTransform: 'none',
              fontWeight: 600,
              lineHeight: 1.2,
            }}
            aria-label="Call Montessori Skye View"
          >
            Call
          </Button>
          <Button
            variant="outlined"
            color="primary"
            href={`mailto:${EMAIL}`}
            sx={{
              minWidth: 0,
              px: 2,
              py: 1,
              fontSize: 'var(--text-base)',
              borderRadius: 'var(--radius-full)',
              textTransform: 'none',
              fontWeight: 600,
              lineHeight: 1.2,
            }}
            aria-label="Email Montessori Skye View"
          >
            Email
          </Button>
        </Stack>
      </Container>
    </Box>
  );
};

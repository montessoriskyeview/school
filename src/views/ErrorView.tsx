import { useRouteError, Link } from 'react-router-dom';
import { Box, Container, Typography, Button } from '@mui/material';
import { Home as HomeIcon } from '@mui/icons-material';

export function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <Container maxWidth="md" sx={{ py: 8, textAlign: 'center' }}>
      <Box
        component="div"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 4,
        }}
      >
        <Typography
          variant="h1"
          component="h1"
          sx={{
            fontSize: { xs: '3rem', md: '4rem' },
            fontWeight: 700,
            color: 'var(--text-dark)',
            marginBottom: 2,
          }}
        >
          Oops! 😅
        </Typography>

        <Typography
          variant="h2"
          component="h2"
          sx={{
            fontSize: { xs: '1.5rem', md: '2rem' },
            fontWeight: 600,
            color: 'var(--text-dark)',
            marginBottom: 2,
          }}
        >
          Page Not Found
        </Typography>

        <Typography
          variant="body1"
          sx={{
            fontSize: 'var(--text-lg)',
            color: 'var(--text-secondary)',
            maxWidth: '600px',
            marginBottom: 4,
            lineHeight: 1.6,
          }}
        >
          The page you're looking for doesn't exist or has been moved. Don't
          worry though - you can easily find what you need!
        </Typography>

        <Box
          component="div"
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            gap: 2,
            alignItems: 'center',
          }}
        >
          <Button
            component={Link}
            to="/"
            variant="contained"
            size="large"
            startIcon={<HomeIcon />}
            sx={{
              backgroundColor: 'var(--primary-blue)',
              color: 'white',
              padding: '12px 24px',
              fontSize: 'var(--text-base)',
              fontWeight: 600,
              '&:hover': {
                backgroundColor: '#1D4ED8',
                transform: 'translateY(-2px)',
              },
            }}
          >
            Go Home
          </Button>

          <Button
            component={Link}
            to="/contact"
            variant="outlined"
            size="large"
            sx={{
              borderColor: 'var(--primary-blue)',
              color: 'var(--primary-blue)',
              padding: '12px 24px',
              fontSize: 'var(--text-base)',
              fontWeight: 600,
              '&:hover': {
                backgroundColor: 'var(--primary-blue)',
                color: 'white',
                transform: 'translateY(-2px)',
              },
            }}
          >
            Contact Us
          </Button>
        </Box>

        <Typography
          variant="body2"
          sx={{
            color: 'var(--text-secondary)',
            marginTop: 4,
            fontSize: 'var(--text-sm)',
          }}
        >
          If you believe this is an error, please contact us and we'll help you
          find what you're looking for.
        </Typography>
      </Box>
    </Container>
  );
}

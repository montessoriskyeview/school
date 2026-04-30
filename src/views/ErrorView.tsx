import { useRouteError, Link } from 'react-router-dom';
import { Box, Container, Typography, Button } from '@mui/material';
import { Home as HomeIcon } from '@mui/icons-material';
import { errorPageContent } from '../i18n/pages/error';

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
          {errorPageContent.emojiTitle}
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
          {errorPageContent.heading}
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
          {errorPageContent.description}
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
            to={errorPageContent.primaryActionPath}
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
            {errorPageContent.primaryActionLabel}
          </Button>

          <Button
            component={Link}
            to={errorPageContent.secondaryActionPath}
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
            {errorPageContent.secondaryActionLabel}
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
          {errorPageContent.footerNote}
        </Typography>
      </Box>
    </Container>
  );
}

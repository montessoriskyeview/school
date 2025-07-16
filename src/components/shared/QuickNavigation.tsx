import { Box, Button, Chip, Stack } from '@mui/material';
import { Link } from 'react-router-dom';

interface QuickNavItem {
  text: string;
  path: string;
  color?: 'primary' | 'secondary' | 'default';
}

const QUICK_NAV_ITEMS: QuickNavItem[] = [
  {
    text: 'Home',
    path: '/',
    color: 'default',
  },
  {
    text: 'Tuition',
    path: '/tuition',
    color: 'default',
  },
  {
    text: 'Schedule',
    path: '/schedule',
    color: 'default',
  },
  {
    text: 'Registration',
    path: '/registration',
    color: 'default',
  },
  {
    text: 'Location',
    path: '/location',
    color: 'default',
  },
  {
    text: 'FAQ',
    path: '/faq',
    color: 'default',
  },
  {
    text: 'Philosophy',
    path: '/philosophy',
    color: 'default',
  },
];

export const QuickNavigation = () => {
  return (
    <Box
      component="div"
      sx={{
        justifyContent: 'center',
        display: { xs: 'none', md: 'flex' }, // Hide on mobile, show on desktop
        marginBottom: 'var(--spacing-2xl)',
      }}
    >
      <Stack
        direction="row"
        spacing={1}
        sx={{
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: 1,
        }}
      >
        {QUICK_NAV_ITEMS.map(item => (
          <Button
            component={Link}
            to={item.path}
            key={item.path}
            sx={{
              textDecoration: 'none',
              '&:hover': {
                transform: 'translateY(-2px)',
                transition: 'transform 0.2s ease-in-out',
              },
            }}
          >
            <Chip
              label={item.text}
              color={item.color}
              sx={{
                margin: 0.5,
                fontWeight: 600,
                '&:hover': {
                  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                },
              }}
            />
          </Button>
        ))}
      </Stack>
    </Box>
  );
};

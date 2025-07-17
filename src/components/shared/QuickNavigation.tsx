import { Box, Button, Chip, Stack } from '@mui/material';
import { Link } from 'react-router-dom';

interface QuickNavItem {
  text: string;
  path: string;
  pageParam: string;
  color?: 'primary' | 'secondary' | 'default';
  priority?: 'high' | 'medium' | 'low'; // Add priority for mobile optimization
}

const QUICK_NAV_ITEMS: QuickNavItem[] = [
  {
    text: 'Home',
    path: '/',
    pageParam: 'home',
    color: 'default',
    priority: 'high',
  },
  {
    text: 'Tuition',
    path: '/tuition',
    pageParam: 'tuition',
    color: 'default',
    priority: 'high',
  },
  {
    text: 'Schedule',
    path: '/schedule',
    pageParam: 'schedule',
    color: 'default',
    priority: 'high',
  },
  {
    text: 'Registration',
    path: '/registration',
    pageParam: 'registration',
    color: 'default',
    priority: 'high',
  },
  {
    text: 'Location',
    path: '/location',
    pageParam: 'location',
    color: 'default',
    priority: 'medium',
  },
  {
    text: 'FAQ',
    path: '/faq',
    pageParam: 'faq',
    color: 'default',
    priority: 'medium',
  },
  {
    text: 'Philosophy',
    path: '/philosophy',
    pageParam: 'philosophy',
    color: 'default',
    priority: 'low',
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
              minHeight: 44, // Ensure minimum touch target size
              minWidth: 44, // Ensure minimum touch target size
              '&:hover': {
                transform: 'translateY(-2px)',
                transition: 'transform 0.2s ease-in-out',
              },
              '&:focus': {
                outline: '2px solid var(--primary-blue)',
                outlineOffset: '2px',
              },
            }}
          >
            <Chip
              label={item.text}
              color={item.color}
              sx={{
                margin: 0.5,
                fontWeight: 600,
                fontSize: { xs: 'var(--text-sm)', md: 'var(--text-base)' }, // Responsive font size
                padding: { xs: 'var(--spacing-sm)', md: 'var(--spacing-md)' }, // Responsive padding
                '&:hover': {
                  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                },
                // Add visual priority indicators
                ...(item.priority === 'high' && {
                  backgroundColor: 'var(--primary-blue)',
                  color: 'white',
                  '&:hover': {
                    backgroundColor: '#1D4ED8',
                    boxShadow: '0 6px 12px rgba(37, 99, 235, 0.3)',
                  },
                }),
              }}
            />
          </Button>
        ))}
      </Stack>
    </Box>
  );
};

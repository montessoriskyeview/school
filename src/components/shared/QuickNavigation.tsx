import { Box, Button, Chip, Stack, Collapse } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from 'react-router-dom';
import { useState } from 'react';

interface QuickNavItem {
  text: string;
  path: string;
  pageParam: string;
  color?: 'primary' | 'secondary' | 'default';
  priority?: 'high' | 'medium' | 'low';
  isInCollapseMenu?: boolean; // Add property to control collapse menu
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
    text: 'Parents Resources',
    path: '/parents',
    pageParam: 'parents',
    color: 'default',
    priority: 'high',
    isInCollapseMenu: true,
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
    isInCollapseMenu: true,
  },
  {
    text: 'Philosophy',
    path: '/philosophy',
    pageParam: 'philosophy',
    color: 'default',
    priority: 'low',
    isInCollapseMenu: true,
  },
  {
    text: 'Accessibility',
    path: '/accessibility',
    pageParam: 'accessibility',
    color: 'default',
    priority: 'low',
    isInCollapseMenu: true,
  },
  {
    text: 'Blog',
    path: '/blog',
    pageParam: 'blog',
    color: 'default',
    priority: 'low',
    isInCollapseMenu: true,
  },
  {
    text: 'Contact',
    path: '/contact',
    pageParam: 'contact',
    color: 'default',
    priority: 'low',
    isInCollapseMenu: true,
  },
];

export const QuickNavigation = () => {
  const [collapseMenuOpen, setCollapseMenuOpen] = useState(false);

  // Separate main items from collapse items
  const mainItems = QUICK_NAV_ITEMS.filter(item => !item.isInCollapseMenu);
  const collapseItems = QUICK_NAV_ITEMS.filter(item => item.isInCollapseMenu);

  const handleCollapseToggle = () => {
    setCollapseMenuOpen(!collapseMenuOpen);
  };

  const renderNavItems = (items: QuickNavItem[]) => (
    <Stack
      direction="row"
      spacing={1}
      sx={{
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: 1,
      }}
    >
      {items.map(item => (
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
  );

  return (
    <Box
      component="div"
      sx={{
        justifyContent: 'center',
        display: { xs: 'none', md: 'flex' }, // Hide on mobile, show on desktop
        marginBottom: 'var(--spacing-2xl)',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      {/* Main navigation items */}
      {renderNavItems(mainItems)}

      {/* More Options collapsible section */}
      {collapseItems.length > 0 && (
        <Box
          component="div"
          sx={{
            mt: 2,
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Button
            onClick={handleCollapseToggle}
            aria-expanded={collapseMenuOpen}
            aria-controls="more-options-quick-nav"
            aria-label="More options"
            sx={{
              textDecoration: 'none',
              minHeight: 44,
              minWidth: 44,
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
              label="More Options"
              color="default"
              icon={
                <ExpandMoreIcon
                  sx={{
                    transform: collapseMenuOpen
                      ? 'rotate(180deg)'
                      : 'rotate(0deg)',
                    transition: 'transform 0.2s ease-in-out',
                  }}
                />
              }
              sx={{
                margin: 0.5,
                fontWeight: 600,
                fontSize: { xs: 'var(--text-sm)', md: 'var(--text-base)' },
                padding: { xs: 'var(--spacing-sm)', md: 'var(--spacing-md)' },
                '&:hover': {
                  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                },
              }}
            />
          </Button>

          <Collapse
            in={collapseMenuOpen}
            timeout="auto"
            unmountOnExit
            id="more-options-quick-nav"
            sx={{ width: '100%', mt: 1 }}
          >
            {renderNavItems(collapseItems)}
          </Collapse>
        </Box>
      )}
    </Box>
  );
};

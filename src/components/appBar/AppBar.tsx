import { Box, styled } from '@mui/material';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Typography } from '../shared/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useState, useRef, useEffect } from 'react';
import { DrawerContent } from './DrawerContent';
import { EnrollmentButtons } from '../shared/EnrollmentButtons';
import { Link } from 'react-router-dom';

const drawerWidth = 240;

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

export const StyledAppBar = styled(MuiAppBar, {
  shouldForwardProp: prop => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  backgroundColor: 'var(--white)', // Ensure white background for proper contrast
  color: 'var(--text-dark)', // Use theme text color
  boxShadow: 'var(--shadow-sm)', // Add subtle shadow
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export const AppBar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
    // Return focus to menu button when drawer closes
    setTimeout(() => {
      menuButtonRef.current?.focus();
    }, 100);
  };

  // Handle escape key to close drawer
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && drawerOpen) {
        handleDrawerClose();
      }
    };

    if (drawerOpen) {
      document.addEventListener('keydown', handleEscapeKey);
      // Prevent body scroll when drawer is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
      document.body.style.overflow = 'unset';
    };
  }, [drawerOpen]);

  return (
    <StyledAppBar
      open={drawerOpen}
      component="header"
      role="banner"
      aria-label="Main navigation"
    >
      <Toolbar>
        <IconButton
          ref={menuButtonRef}
          color="inherit"
          aria-label="Open navigation menu"
          aria-expanded={drawerOpen}
          aria-controls="navigation-drawer"
          aria-haspopup="true"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{
            mr: 2,
            ...(drawerOpen && { display: 'none' }),
            color: 'var(--text-dark)', // Ensure proper contrast for icon
            '&:hover': {
              backgroundColor: 'var(--light-gray)',
            },
          }}
        >
          <MenuIcon />
        </IconButton>
        <Box
          component="div"
          sx={{
            display: 'flex',
            alignItems: 'center',
            width: '100%',
            justifyContent: 'space-between',
            minHeight: { xs: 56, md: 64 },
            px: { xs: 1, md: 2 },
            flexDirection: { xs: 'column', md: 'row' },
            gap: { xs: 1, md: 0 },
          }}
        >
          <Typography
            variant="h6"
            noWrap
            component="h1"
            color="text" // Use theme text color for proper contrast
            sx={{
              flexGrow: 1,
              fontWeight: 700,
              textAlign: { xs: 'center', md: 'left' },
              mb: { xs: 0, md: 0 }, // Remove bottom margin on mobile
              display: 'flex',
              alignItems: 'center', // Center vertically
              justifyContent: { xs: 'center', md: 'flex-start' },
              minHeight: { xs: 56, md: 'auto' }, // Match toolbar height on mobile
            }}
          >
            <Link
              to="/"
              style={{
                textDecoration: 'none',
                color: 'inherit',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'inherit',
                outline: 'none',
              }}
              onFocus={e => {
                e.target.style.outline = 'none';
              }}
              onBlur={e => {
                e.target.style.outline = 'none';
              }}
            >
              Montessori Skye View
            </Link>
          </Typography>
          <Box
            component="div"
            sx={{
              display: { xs: 'none', md: 'block' }, // Hide on mobile, show on desktop
            }}
          >
            <EnrollmentButtons
              variant="primary"
              maxButtons={2} // Limit to 2 buttons in the app bar
            />
          </Box>
        </Box>
        <DrawerContent
          open={drawerOpen}
          handleDrawerClose={handleDrawerClose}
        />
      </Toolbar>
    </StyledAppBar>
  );
};

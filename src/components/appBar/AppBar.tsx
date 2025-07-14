import { Box, styled, Link } from '@mui/material';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Typography } from '../shared/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import { DrawerContent } from './DrawerContent';
import { FALL_2025_LINK, SUMMER_CAMP_LINK } from '../../resources/links';

const drawerWidth = 240;

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

export const StyledAppBar = styled(MuiAppBar, {
  shouldForwardProp: prop => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
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

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const trackFallRegistrationConversion = () => {
    // @ts-ignore - gtag is globally available
    window.gtag('event', 'conversion', {
      send_to: 'AW-16665018583/vFD0CPHVzcgZENeBwIo-',
    });
  };

  return (
    <StyledAppBar open={drawerOpen}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{ mr: 2, ...(drawerOpen && { display: 'none' }) }}
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
            component="div"
            sx={{
              flexGrow: 1,
              fontWeight: 700,
              color: '#04325f',
              textAlign: { xs: 'center', md: 'left' },
              mb: { xs: 1, md: 0 },
            }}
          >
            Montessori Skye View
          </Typography>
          <Box
            component="div"
            sx={{
              display: 'flex',
              gap: 3,
              alignItems: 'center',
              justifyContent: { xs: 'center', md: 'flex-end' },
              width: { xs: '100%', md: 'auto' },
            }}
          >
            <Link
              variant="body1"
              sx={{
                cursor: 'pointer',
                color: '#04325f',
                textDecoration: 'underline',
                fontWeight: 600,
                fontSize: '1rem',
                px: 1,
                py: 0.5,
                borderRadius: 'var(--radius-sm)',
                transition: 'background 0.2s, color 0.2s',
                '&:hover, &:focus': {
                  background: 'var(--primary-green, #7ed957)',
                  color: '#fff',
                  outline: '2px solid var(--primary-green, #7ed957)',
                  textDecoration: 'none',
                },
              }}
              rel="noopener noreferrer"
              target="_blank"
              href={FALL_2025_LINK}
              onClick={trackFallRegistrationConversion}
            >
              2025 Fall registration
            </Link>
            <Link
              variant="body1"
              sx={{
                cursor: 'pointer',
                color: '#04325f',
                textDecoration: 'underline',
                fontWeight: 600,
                fontSize: '1rem',
                px: 1,
                py: 0.5,
                borderRadius: 'var(--radius-sm)',
                transition: 'background 0.2s, color 0.2s',
                '&:hover, &:focus': {
                  background: 'var(--primary-green, #7ed957)',
                  color: '#fff',
                  outline: '2px solid var(--primary-green, #7ed957)',
                  textDecoration: 'none',
                },
              }}
              rel="noopener noreferrer"
              target="_blank"
              href={SUMMER_CAMP_LINK}
            >
              2025 Summer camp
            </Link>
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

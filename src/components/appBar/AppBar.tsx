import { Box, styled } from '@mui/material';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Typography } from '../shared/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import { DrawerContent } from './DrawerContent';
import { EnrollmentButtons } from '../shared/EnrollmentButtons';

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
          <EnrollmentButtons
            variant="primary"
            maxButtons={2} // Limit to 2 buttons in the app bar
          />
        </Box>
        <DrawerContent
          open={drawerOpen}
          handleDrawerClose={handleDrawerClose}
        />
      </Toolbar>
    </StyledAppBar>
  );
};

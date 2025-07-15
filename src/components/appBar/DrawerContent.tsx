import { styled, useTheme } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ScheduleIcon from '@mui/icons-material/Schedule';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import PaymentIcon from '@mui/icons-material/Payment';
import RegistrationIcon from '@mui/icons-material/AppRegistration';
import PhoneIcon from '@mui/icons-material/Phone';
import QuestionIcon from '@mui/icons-material/QuestionAnswer';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { SvgIconTypeMap } from '@mui/material';
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

export const DRAWER_WIDTH = 240;

interface DrawerContentProps {
  open: boolean;
  handleDrawerClose: () => void;
}

export const DrawerContent = ({
  open,
  handleDrawerClose,
}: DrawerContentProps) => {
  const theme = useTheme();
  const drawerRef = useRef<HTMLDivElement>(null);
  const firstMenuItemRef = useRef<HTMLLIElement>(null);

  // Focus management for drawer
  useEffect(() => {
    if (open) {
      // Focus first menu item when drawer opens
      setTimeout(() => {
        firstMenuItemRef.current?.focus();
      }, 100);
    }
  }, [open]);

  // Focus trapping within drawer
  useEffect(() => {
    if (!open) return;

    const handleTabKey = (event: KeyboardEvent) => {
      if (event.key !== 'Tab') return;

      const focusableElements = drawerRef.current?.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );

      if (!focusableElements || focusableElements.length === 0) return;

      const firstElement = focusableElements[0] as HTMLElement;
      const lastElement = focusableElements[
        focusableElements.length - 1
      ] as HTMLElement;

      if (event.shiftKey) {
        if (document.activeElement === firstElement) {
          event.preventDefault();
          lastElement.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          event.preventDefault();
          firstElement.focus();
        }
      }
    };

    document.addEventListener('keydown', handleTabKey);
    return () => document.removeEventListener('keydown', handleTabKey);
  }, [open]);

  return (
    <Drawer
      ref={drawerRef}
      id="navigation-drawer"
      sx={{
        width: DRAWER_WIDTH,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: DRAWER_WIDTH,
          boxSizing: 'border-box',
        },
      }}
      anchor="left"
      open={open}
      role="navigation"
      aria-label="Main navigation menu"
      ModalProps={{
        keepMounted: true, // Better mobile performance
      }}
    >
      <DrawerHeader>
        <IconButton
          onClick={handleDrawerClose}
          aria-label="Close navigation menu"
        >
          {theme.direction === 'ltr' ? (
            <ChevronLeftIcon />
          ) : (
            <ChevronRightIcon />
          )}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List role="menu">
        {NAVBAR_ITEMS.map(({ text, Icon, path }, index) => (
          <ListItem
            key={text}
            disablePadding
            ref={index === 0 ? firstMenuItemRef : undefined}
          >
            <ListItemButton
              role="menuitem"
              component={Link}
              to={path}
              onClick={handleDrawerClose}
            >
              <ListItemIcon aria-hidden="true">
                <Icon />
              </ListItemIcon>
              <ListItemText primary={text} sx={{ color: 'black' }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

interface NavbarItem {
  text: string;
  path: string;
  Icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>> & {
    muiName: string;
  };
}

export const NAVBAR_ITEMS: NavbarItem[] = [
  {
    text: 'Home',
    path: '/',
    Icon: HomeIcon,
  },
  {
    text: 'Tuition',
    path: '/tuition',
    Icon: PaymentIcon,
  },
  {
    text: 'Schedule',
    path: '/schedule',
    Icon: ScheduleIcon,
  },
  {
    text: 'Registration',
    path: '/registration',
    Icon: RegistrationIcon,
  },
  {
    text: 'Location',
    path: '/location',
    Icon: LocationOnIcon,
  },
  {
    text: 'Contact',
    path: '/contact',
    Icon: PhoneIcon,
  },
  {
    text: 'FAQ',
    path: '/faq',
    Icon: QuestionIcon,
  },
  {
    text: 'Philosophy',
    path: '/philosophy',
    Icon: LightbulbIcon,
  },
  {
    text: 'Accessibility',
    path: '/accessibility',
    Icon: LightbulbIcon,
  },
];

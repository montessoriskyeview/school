import { styled, useTheme } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import HomeIcon from '@mui/icons-material/Home';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ScheduleIcon from '@mui/icons-material/Schedule';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import PaymentIcon from '@mui/icons-material/Payment';
import RegistrationIcon from '@mui/icons-material/AppRegistration';
import PhoneIcon from '@mui/icons-material/Phone';
import QuestionIcon from '@mui/icons-material/QuestionAnswer';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import ArticleIcon from '@mui/icons-material/Article';
import PeopleIcon from '@mui/icons-material/People';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { SvgIconTypeMap } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
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
  const [collapseMenuOpen, setCollapseMenuOpen] = useState(false);

  // Separate main items from collapse items
  const mainItems = NAVBAR_ITEMS.filter(item => !item.isInCollapseMenu);
  const collapseItems = NAVBAR_ITEMS.filter(item => item.isInCollapseMenu);

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

  const handleCollapseToggle = () => {
    setCollapseMenuOpen(!collapseMenuOpen);
    // Scroll drawer to top when toggling collapse menu
    if (drawerRef.current) {
      const drawerContent = drawerRef.current.querySelector('.MuiDrawer-paper');
      if (drawerContent) {
        drawerContent.scrollTop = 0;
      }
    }
  };

  const handleItemClick = () => {
    handleDrawerClose();
    // Scroll drawer to top when any navigation item is clicked
    if (drawerRef.current) {
      const drawerContent = drawerRef.current.querySelector('.MuiDrawer-paper');
      if (drawerContent) {
        drawerContent.scrollTop = 0;
      }
    }
  };

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
      <List
        role="menu"
        sx={{
          // Add bottom padding to ensure last items are not hidden behind mobile CTA banner
          pb: { xs: 8, sm: 4 }, // More padding on mobile, less on larger screens
        }}
      >
        {/* Main navigation items */}
        {mainItems.map(({ text, Icon, path }, index) => (
          <ListItem
            key={text}
            disablePadding
            ref={index === 0 ? firstMenuItemRef : undefined}
          >
            <ListItemButton
              role="menuitem"
              component={Link}
              to={path}
              onClick={handleItemClick}
            >
              <ListItemIcon aria-hidden="true">
                <Icon />
              </ListItemIcon>
              <ListItemText primary={text} sx={{ color: 'var(--text-dark)' }} />
            </ListItemButton>
          </ListItem>
        ))}

        {/* More Options collapsible section */}
        {collapseItems.length > 0 && (
          <>
            <Divider sx={{ my: 1 }} />
            <ListItem disablePadding>
              <ListItemButton
                onClick={handleCollapseToggle}
                aria-expanded={collapseMenuOpen}
                aria-controls="more-options-menu"
                aria-label="More options"
              >
                <ListItemIcon aria-hidden="true">
                  <ExpandMoreIcon
                    sx={{
                      transform: collapseMenuOpen
                        ? 'rotate(180deg)'
                        : 'rotate(0deg)',
                      transition: 'transform 0.2s ease-in-out',
                    }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary="More Options"
                  sx={{ color: 'var(--text-dark)' }}
                />
              </ListItemButton>
            </ListItem>

            <Collapse
              in={collapseMenuOpen}
              timeout="auto"
              unmountOnExit
              id="more-options-menu"
            >
              <List component="div" disablePadding>
                {collapseItems.map(({ text, Icon, path }, index) => (
                  <ListItem key={text} disablePadding>
                    <ListItemButton
                      role="menuitem"
                      component={Link}
                      to={path}
                      onClick={handleItemClick}
                      sx={{
                        pl: 4,
                        // Add extra bottom padding to the last item in collapse menu
                        ...(index === collapseItems.length - 1 && {
                          pb: { xs: 2, sm: 1 }, // Extra padding for last item
                        }),
                      }}
                    >
                      <ListItemIcon aria-hidden="true">
                        <Icon />
                      </ListItemIcon>
                      <ListItemText
                        primary={text}
                        sx={{ color: 'var(--text-dark)' }}
                      />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Collapse>
          </>
        )}
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
  isInCollapseMenu?: boolean;
}

export const NAVBAR_ITEMS: NavbarItem[] = [
  {
    text: 'Home',
    path: '/',
    Icon: HomeIcon,
  },
  {
    text: 'Parents Resources',
    path: '/parents',
    Icon: PeopleIcon,
    isInCollapseMenu: true,
  },
  {
    text: 'Registration',
    path: '/registration',
    Icon: RegistrationIcon,
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
    text: 'Location',
    path: '/location',
    Icon: LocationOnIcon,
  },
  {
    text: 'FAQ',
    path: '/faq',
    Icon: QuestionIcon,
    isInCollapseMenu: true,
  },
  {
    text: 'Philosophy',
    path: '/philosophy',
    Icon: LightbulbIcon,
    isInCollapseMenu: true,
  },
  {
    text: 'Accessibility',
    path: '/accessibility',
    Icon: AccessibilityIcon,
    isInCollapseMenu: true,
  },
  {
    text: 'Blog',
    path: '/blog',
    Icon: ArticleIcon,
    isInCollapseMenu: true,
  },
  {
    text: 'Contact',
    path: '/contact',
    Icon: PhoneIcon,
    isInCollapseMenu: true,
  },
];

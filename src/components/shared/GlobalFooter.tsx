import { useRef, useState } from 'react';
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import {
  FOOTER_SECONDARY_NAVIGATION_ITEMS,
  PRIMARY_NAVIGATION_ITEMS,
} from '../../i18n/site/navigation';
import { Typography } from './Typography';
import { EMAIL, PHONE_FORMATTED, createEmailLink, createPhoneLink } from './contactUtils';

export const GlobalFooter = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isLocationOpen, setIsLocationOpen] = useState(false);
  const contactButtonRef = useRef<HTMLButtonElement>(null);
  const locationButtonRef = useRef<HTMLButtonElement>(null);

  const closeContactModal = () => {
    setIsContactOpen(false);
    setTimeout(() => contactButtonRef.current?.focus(), 0);
  };

  const closeLocationModal = () => {
    setIsLocationOpen(false);
    setTimeout(() => locationButtonRef.current?.focus(), 0);
  };

  const openContactFromLocationModal = () => {
    setIsLocationOpen(false);
    setIsContactOpen(true);
  };

  return (
    <Box
      component="footer"
      role="contentinfo"
      sx={{
        borderTop: '1px solid #D1D5DB',
        backgroundColor: '#FFFFFF',
        py: { xs: 4, md: 6 },
        px: { xs: 2, md: 4 },
      }}
    >
      <Stack spacing={4} sx={{ maxWidth: 960, mx: 'auto' }}>
        <Box component="nav" aria-label="Primary navigation">
          <Typography variant="h6" sx={{ mb: 2 }}>
            Explore
          </Typography>
          <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
            {PRIMARY_NAVIGATION_ITEMS.map(item => (
              <Button
                key={item.key}
                component={RouterLink}
                to={item.path}
                variant="outlined"
                sx={{ minHeight: 44 }}
              >
                {item.text}
              </Button>
            ))}
          </Stack>
        </Box>

        <Box component="nav" aria-label="More pages">
          <Typography variant="h6" sx={{ mb: 2 }}>
            More
          </Typography>
          <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
            {FOOTER_SECONDARY_NAVIGATION_ITEMS.map(item => (
              <Button
                key={item.key}
                component={RouterLink}
                to={item.path}
                variant="text"
                sx={{ minHeight: 44 }}
              >
                {item.text}
              </Button>
            ))}
          </Stack>
        </Box>

        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
          <Button
            ref={contactButtonRef}
            variant="contained"
            onClick={() => setIsContactOpen(true)}
            sx={{ minHeight: 44 }}
          >
            Contact Us
          </Button>
          <Button
            ref={locationButtonRef}
            variant="outlined"
            onClick={() => setIsLocationOpen(true)}
            sx={{ minHeight: 44 }}
          >
            Location Info
          </Button>
        </Stack>
      </Stack>

      <Dialog
        open={isContactOpen}
        onClose={closeContactModal}
        aria-labelledby="contact-modal-title"
      >
        <DialogTitle id="contact-modal-title">Contact Us</DialogTitle>
        <DialogContent>
          <Stack spacing={2} sx={{ pt: 1 }}>
            <Typography variant="body1">
              Call, text, or email us and we can help with tours, program details, and
              registration questions.
            </Typography>
            <Button href={createPhoneLink()} variant="contained">
              Call {PHONE_FORMATTED}
            </Button>
            <Button href={createEmailLink()} variant="outlined">
              Email {EMAIL}
            </Button>
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeContactModal}>Close</Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={isLocationOpen}
        onClose={closeLocationModal}
        aria-labelledby="location-modal-title"
      >
        <DialogTitle id="location-modal-title">Location Info</DialogTitle>
        <DialogContent>
          <Typography variant="body1" sx={{ pt: 1 }}>
            Contact us for location information.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={openContactFromLocationModal} variant="contained">
            Contact Us
          </Button>
          <Button onClick={closeLocationModal}>Close</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

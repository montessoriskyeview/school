import React, { useState, useEffect } from 'react';
import {
  Button,
  Typography,
  Paper,
  Checkbox,
  FormControlLabel,
  Collapse,
  IconButton,
  Box,
} from '@mui/material';
import { Info as InfoIcon } from '@mui/icons-material';
import {
  updateConsent,
  getConsent,
  IConsentState,
} from '../../utils/performance';

interface IConsentBannerProps {
  onConsentUpdate?: (consent: IConsentState) => void;
}

export const ConsentBanner: React.FC<IConsentBannerProps> = ({
  onConsentUpdate,
}) => {
  const [showBanner, setShowBanner] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [consent, setConsent] = useState<IConsentState>({
    analytics: false,
    ads: false,
    marketing: false,
  });

  useEffect(() => {
    // Check if user has already made a choice
    const existingConsent = getConsent();
    const hasConsent =
      existingConsent.analytics ||
      existingConsent.ads ||
      existingConsent.marketing;

    if (!hasConsent) {
      setShowBanner(true);
    }
  }, []);

  const handleAcceptAll = () => {
    const newConsent = {
      analytics: true,
      ads: true,
      marketing: true,
    };
    setConsent(newConsent);
    updateConsent(newConsent);
    setShowBanner(false);
    onConsentUpdate?.(newConsent);
  };

  const handleAcceptEssential = () => {
    const newConsent = {
      analytics: false,
      ads: false,
      marketing: false,
    };
    setConsent(newConsent);
    updateConsent(newConsent);
    setShowBanner(false);
    onConsentUpdate?.(newConsent);
  };

  const handleCustomConsent = () => {
    updateConsent(consent);
    setShowBanner(false);
    onConsentUpdate?.(consent);
  };

  const handleConsentChange =
    (type: keyof IConsentState) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setConsent(prev => ({
        ...prev,
        [type]: event.target.checked,
      }));
    };

  if (!showBanner) {
    return null;
  }

  return (
    <Box
      component="div"
      sx={{
        position: 'fixed',
        bottom: '100px', // 100px from bottom to avoid MobileHeroCTA
        left: '16px', // 16px from left edge
        zIndex: 1400, // Higher than most components but lower than MobileHeroCTA
        maxWidth: '320px', // Limit width for mobile
        width: 'calc(100vw - 32px)', // Full width minus margins on mobile
        '@media (min-width: 768px)': {
          width: '320px', // Fixed width on desktop
        },
      }}
    >
      <Paper
        elevation={8}
        sx={{
          padding: '12px 16px',
          backgroundColor: 'var(--white)',
          border: '2px solid var(--primary-green)',
          borderRadius: 'var(--radius-lg)',
          boxShadow: 'var(--shadow-lg)',
        }}
      >
        {/* Minimal view - shown by default */}
        <Box
          component="div"
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <Box
            component="div"
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              flex: 1,
            }}
          >
            <Typography
              variant="body2"
              sx={{
                color: 'var(--text-dark)',
                lineHeight: 1.4,
                fontSize: 'var(--text-sm)',
                fontWeight: 500,
              }}
            >
              🍪 We use cookies to improve your experience
            </Typography>
            <IconButton
              size="small"
              onClick={() => setShowDetails(!showDetails)}
              sx={{
                color: 'var(--primary-green)',
                padding: '4px',
                minWidth: '24px',
                minHeight: '24px',
                '&:hover': {
                  backgroundColor: 'rgba(34, 197, 94, 0.1)',
                },
              }}
              aria-label="Learn more about cookies"
            >
              <InfoIcon fontSize="small" />
            </IconButton>
          </Box>
          <Button
            variant="contained"
            onClick={handleAcceptAll}
            size="small"
            sx={{
              backgroundColor: 'var(--primary-green)',
              color: 'var(--white)',
              minWidth: '60px',
              height: '32px',
              fontSize: 'var(--text-sm)',
              fontWeight: 600,
              textTransform: 'none',
              borderRadius: 'var(--radius-md)',
              '&:hover': {
                backgroundColor: 'var(--primary-green-dark)',
              },
            }}
          >
            Accept
          </Button>
        </Box>

        {/* Expanded details */}
        <Collapse in={showDetails}>
          <Box
            component="div"
            sx={{
              marginTop: '12px',
              padding: '12px',
              backgroundColor: 'var(--background-light)',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-color)',
            }}
          >
            <Typography
              variant="h6"
              component="h2"
              sx={{
                color: 'var(--text-dark)',
                fontWeight: 700,
                marginBottom: '8px',
                fontSize: 'var(--text-base)',
              }}
            >
              🍪 Privacy & Cookie Preferences
            </Typography>

            <Typography
              variant="body2"
              sx={{
                color: 'var(--text-dark)',
                marginBottom: '12px',
                lineHeight: 1.5,
                fontSize: 'var(--text-sm)',
              }}
            >
              We use cookies and similar technologies to enhance your
              experience, analyze site traffic, and provide personalized
              content.
            </Typography>

            <Box
              component="div"
              sx={{
                marginBottom: '12px',
                padding: '8px',
                backgroundColor: 'var(--white)',
                borderRadius: 'var(--radius-sm)',
              }}
            >
              <Typography
                variant="subtitle2"
                sx={{
                  marginBottom: '8px',
                  fontWeight: 600,
                  color: 'var(--text-dark)',
                  fontSize: 'var(--text-sm)',
                }}
              >
                Cookie Categories
              </Typography>

              <FormControlLabel
                control={
                  <Checkbox
                    checked={consent.analytics}
                    onChange={handleConsentChange('analytics')}
                    size="small"
                    sx={{
                      color: 'var(--primary-green)',
                      '&.Mui-checked': {
                        color: 'var(--primary-green)',
                      },
                    }}
                  />
                }
                label={
                  <Box component="div">
                    <Typography
                      variant="body2"
                      sx={{
                        fontWeight: 600,
                        color: 'var(--text-dark)',
                        fontSize: 'var(--text-sm)',
                      }}
                    >
                      Analytics Cookies
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{
                        color: 'var(--text-muted)',
                        fontSize: 'var(--text-xs)',
                      }}
                    >
                      Help us understand how visitors interact with our website
                      by collecting and reporting information anonymously.
                    </Typography>
                  </Box>
                }
                sx={{ marginBottom: '6px', alignItems: 'flex-start' }}
              />

              <FormControlLabel
                control={
                  <Checkbox
                    checked={consent.ads}
                    onChange={handleConsentChange('ads')}
                    size="small"
                    sx={{
                      color: 'var(--primary-green)',
                      '&.Mui-checked': {
                        color: 'var(--primary-green)',
                      },
                    }}
                  />
                }
                label={
                  <Box component="div">
                    <Typography
                      variant="body2"
                      sx={{
                        fontWeight: 600,
                        color: 'var(--text-dark)',
                        fontSize: 'var(--text-sm)',
                      }}
                    >
                      Advertising Cookies
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{
                        color: 'var(--text-muted)',
                        fontSize: 'var(--text-xs)',
                      }}
                    >
                      Used to deliver relevant advertisements and track campaign
                      performance.
                    </Typography>
                  </Box>
                }
                sx={{ marginBottom: '6px', alignItems: 'flex-start' }}
              />

              <FormControlLabel
                control={
                  <Checkbox
                    checked={consent.marketing}
                    onChange={handleConsentChange('marketing')}
                    size="small"
                    sx={{
                      color: 'var(--primary-green)',
                      '&.Mui-checked': {
                        color: 'var(--primary-green)',
                      },
                    }}
                  />
                }
                label={
                  <Box component="div">
                    <Typography
                      variant="body2"
                      sx={{
                        fontWeight: 600,
                        color: 'var(--text-dark)',
                        fontSize: 'var(--text-sm)',
                      }}
                    >
                      Marketing Cookies
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{
                        color: 'var(--text-muted)',
                        fontSize: 'var(--text-xs)',
                      }}
                    >
                      Used to track visitors across websites to display relevant
                      advertisements.
                    </Typography>
                  </Box>
                }
                sx={{ alignItems: 'flex-start' }}
              />
            </Box>

            <Box
              component="div"
              sx={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}
            >
              <Button
                variant="outlined"
                onClick={handleAcceptEssential}
                size="small"
                sx={{
                  borderColor: 'var(--text-muted)',
                  color: 'var(--text-muted)',
                  fontSize: 'var(--text-xs)',
                  height: '28px',
                  textTransform: 'none',
                  '&:hover': {
                    borderColor: 'var(--text-dark)',
                    backgroundColor: 'var(--background-light)',
                  },
                }}
              >
                Essential Only
              </Button>

              <Button
                variant="contained"
                onClick={handleCustomConsent}
                size="small"
                sx={{
                  backgroundColor: 'var(--primary-green)',
                  color: 'var(--white)',
                  fontSize: 'var(--text-xs)',
                  height: '28px',
                  textTransform: 'none',
                  '&:hover': {
                    backgroundColor: 'var(--primary-green-dark)',
                  },
                }}
              >
                Customize
              </Button>
            </Box>
          </Box>
        </Collapse>
      </Paper>
    </Box>
  );
};

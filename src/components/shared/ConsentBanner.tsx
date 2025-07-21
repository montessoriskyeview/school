import React, { useState, useEffect } from 'react';
import {
  Button,
  Typography,
  Paper,
  Checkbox,
  FormControlLabel,
  Collapse,
  IconButton,
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
    <Paper
      elevation={8}
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        padding: '16px 24px',
        backgroundColor: 'var(--white)',
        borderTop: '2px solid var(--primary-green)',
        borderRadius: 0,
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Minimal view - shown by default */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              flex: 1,
            }}
          >
            <Typography
              variant="body2"
              style={{
                color: 'var(--text-dark)',
                lineHeight: 1.4,
              }}
            >
              By continuing to use our site, you consent to our use of cookies.
            </Typography>
            <IconButton
              size="small"
              onClick={() => setShowDetails(!showDetails)}
              style={{
                color: 'var(--primary-green)',
                padding: '4px',
              }}
              aria-label="Learn more about cookies"
            >
              <InfoIcon fontSize="small" />
            </IconButton>
          </div>
          <Button
            variant="contained"
            onClick={handleAcceptAll}
            size="small"
            style={{
              backgroundColor: 'var(--primary-green)',
              color: 'var(--white)',
              marginLeft: '16px',
              minWidth: '80px',
            }}
          >
            Accept
          </Button>
        </div>

        {/* Expanded details */}
        <Collapse in={showDetails}>
          <div
            style={{
              marginTop: '16px',
              padding: '16px',
              backgroundColor: 'var(--background-light)',
              borderRadius: '8px',
              border: '1px solid var(--border-color)',
            }}
          >
            <Typography
              variant="h6"
              component="h2"
              style={{
                color: 'var(--text-dark)',
                fontWeight: 700,
                marginBottom: '8px',
              }}
            >
              🍪 Privacy & Cookie Preferences
            </Typography>

            <Typography
              variant="body2"
              style={{
                color: 'var(--text-dark)',
                marginBottom: '16px',
                lineHeight: 1.5,
              }}
            >
              We use cookies and similar technologies to enhance your
              experience, analyze site traffic, and provide personalized
              content.
            </Typography>

            <div
              style={{
                marginBottom: '16px',
                padding: '12px',
                backgroundColor: 'var(--white)',
                borderRadius: '4px',
              }}
            >
              <Typography
                variant="subtitle2"
                style={{
                  marginBottom: '12px',
                  fontWeight: 600,
                  color: 'var(--text-dark)',
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
                  <div>
                    <Typography
                      variant="body2"
                      style={{ fontWeight: 600, color: 'var(--text-dark)' }}
                    >
                      Analytics Cookies
                    </Typography>
                    <Typography
                      variant="caption"
                      style={{ color: 'var(--text-muted)' }}
                    >
                      Help us understand how visitors interact with our website
                      by collecting and reporting information anonymously.
                    </Typography>
                  </div>
                }
                style={{ marginBottom: '8px', alignItems: 'flex-start' }}
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
                  <div>
                    <Typography
                      variant="body2"
                      style={{ fontWeight: 600, color: 'var(--text-dark)' }}
                    >
                      Advertising Cookies
                    </Typography>
                    <Typography
                      variant="caption"
                      style={{ color: 'var(--text-muted)' }}
                    >
                      Used to deliver relevant advertisements and track campaign
                      performance.
                    </Typography>
                  </div>
                }
                style={{ marginBottom: '8px', alignItems: 'flex-start' }}
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
                  <div>
                    <Typography
                      variant="body2"
                      style={{ fontWeight: 600, color: 'var(--text-dark)' }}
                    >
                      Marketing Cookies
                    </Typography>
                    <Typography
                      variant="caption"
                      style={{ color: 'var(--text-muted)' }}
                    >
                      Used to track visitors across websites to display relevant
                      advertisements.
                    </Typography>
                  </div>
                }
                style={{ alignItems: 'flex-start' }}
              />
            </div>

            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <Button
                variant="outlined"
                onClick={handleAcceptEssential}
                size="small"
                sx={{
                  borderColor: 'var(--text-muted)',
                  color: 'var(--text-muted)',
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
                  '&:hover': {
                    backgroundColor: 'var(--primary-green-dark)',
                  },
                }}
              >
                Customize
              </Button>
            </div>
          </div>
        </Collapse>
      </div>
    </Paper>
  );
};

import React, { useState, useEffect } from 'react';
import { CanvasView } from './Canvas/CanvasView';
import { ContentContainer } from './ContentContainer';
import { Typography } from './Typography';
import { Box, TextField, Button, Alert, Paper } from '@mui/material';
import { Lock, Visibility, VisibilityOff } from '@mui/icons-material';
import { ResourcesView } from './ResourcesView';

interface IPasswordProtectionProps {
  children?: React.ReactNode;
}

export const PasswordProtection: React.FC<IPasswordProtectionProps> = ({
  children,
}) => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Check if already authenticated (stored in localStorage)
  useEffect(() => {
    const authenticated = localStorage.getItem('hasStaffAuthenticated');
    if (authenticated === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handlePasswordSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      // In a real application, this would be an API call
      // For now, we'll check against the environment variable
      const correctPassword =
        // eslint-disable-next-line no-restricted-globals -- use it now
        process.env.MSV_STAFF_PASS || location.hostname === 'localhost';

      if (password === correctPassword) {
        setIsAuthenticated(true);
        localStorage.setItem('hasStaffAuthenticated', 'true');
      } else {
        setError('Incorrect password. Please try again.');
        setPassword('');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  if (isAuthenticated) {
    return (
      <Box component="div">
        <ResourcesView userType="staff" />
      </Box>
    );
  }

  return (
    <CanvasView hideRouteChips>
      <ContentContainer
        variant="card"
        spacing="lg"
        style={{
          textAlign: 'center',
          background: 'var(--white)',
          color: 'var(--text-dark)',
          border: '3px solid var(--primary-blue)',
          boxShadow: 'var(--shadow-lg)',
          maxWidth: '500px',
          margin: '0 auto',
        }}
      >
        <Box
          component="div"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 'var(--spacing-lg)',
          }}
        >
          <Box
            component="div"
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              backgroundColor: 'var(--primary-blue)',
              color: 'white',
              marginBottom: 'var(--spacing-md)',
            }}
          >
            <Lock sx={{ fontSize: '40px' }} />
          </Box>

          <Typography
            variant="h2"
            sx={{
              color: 'var(--text-dark)',
              fontWeight: 700,
              fontSize: 'var(--text-3xl)',
            }}
          >
            Staff Access Required
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: 'var(--text-secondary)',
              fontSize: 'var(--text-lg)',
              lineHeight: 'var(--leading-loose)',
              textAlign: 'center',
            }}
          >
            This area contains confidential staff resources. Please enter the
            staff password to continue.
          </Typography>

          <Paper
            component="form"
            onSubmit={handlePasswordSubmit}
            sx={{
              padding: 'var(--spacing-xl)',
              width: '100%',
              maxWidth: '400px',
              backgroundColor: 'var(--light-gray)',
              border: '2px solid var(--light-gray)',
              borderRadius: '12px',
            }}
          >
            <Box
              component="div"
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--spacing-lg)',
              }}
            >
              {error && (
                <Alert
                  severity="error"
                  sx={{ marginBottom: 'var(--spacing-md)' }}
                >
                  {error}
                </Alert>
              )}

              <Box
                component="div"
                sx={{
                  position: 'relative',
                }}
              >
                <TextField
                  type={showPassword ? 'text' : 'password'}
                  label="Staff Password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  fullWidth
                  required
                  disabled={isLoading}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      backgroundColor: 'var(--white)',
                      '&:hover fieldset': {
                        borderColor: 'var(--primary-blue)',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: 'var(--primary-blue)',
                      },
                    },
                    '& .MuiInputLabel-root': {
                      color: 'var(--text-secondary)',
                      '&.Mui-focused': {
                        color: 'var(--primary-blue)',
                      },
                    },
                  }}
                />
                <Button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  sx={{
                    position: 'absolute',
                    right: '8px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    minWidth: 'auto',
                    padding: '8px',
                    color: 'var(--text-secondary)',
                    '&:hover': {
                      backgroundColor: 'transparent',
                      color: 'var(--primary-blue)',
                    },
                  }}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </Button>
              </Box>

              <Button
                type="submit"
                variant="contained"
                fullWidth
                disabled={isLoading || !password.trim()}
                sx={{
                  backgroundColor: 'var(--primary-blue)',
                  color: 'white',
                  padding: 'var(--spacing-md) var(--spacing-xl)',
                  fontSize: 'var(--text-lg)',
                  fontWeight: 600,
                  borderRadius: '9999px',
                  '&:hover': {
                    backgroundColor: 'var(--primary-blue-dark)',
                  },
                  '&:disabled': {
                    backgroundColor: 'var(--light-gray)',
                    color: 'var(--text-secondary)',
                  },
                }}
              >
                {isLoading ? 'Verifying...' : 'Access Resources'}
              </Button>
            </Box>
          </Paper>

          <Typography
            variant="body2"
            sx={{
              color: 'var(--text-secondary)',
              fontSize: 'var(--text-sm)',
              textAlign: 'center',
              marginTop: 'var(--spacing-md)',
            }}
          >
            Forgot the password? Please contact the school administrator.
          </Typography>
        </Box>
      </ContentContainer>
    </CanvasView>
  );
};

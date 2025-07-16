import {
  Box,
  Container,
  Button,
  Stack,
  IconButton,
  Collapse,
} from '@mui/material';
import { EnrollmentButtons } from './EnrollmentButtons';
import { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { createEmailLink, createPhoneLink } from './contactUtils';

export const MobileHeroCTA = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <Box
      component="div"
      sx={{
        display: { xs: 'block', md: 'none' }, // Only show on mobile
        backgroundColor: 'var(--white)',
        borderRadius: 'var(--radius-lg)',
        boxShadow: 'var(--shadow-lg)',
        margin: '0',
        border: '2px solid var(--primary-blue)',
        marginBottom: { xs: 3, md: 0 }, // Reduced bottom margin
        overflow: 'hidden', // Ensure smooth collapse animation
      }}
    >
      {/* Collapsible Header */}
      <Box
        component="div"
        sx={{
          padding: { xs: 1.5, md: 0 },
          backgroundColor: 'var(--primary-blue)',
          color: 'var(--white)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          cursor: 'pointer',
          '&:hover': {
            backgroundColor: '#1D4ED8',
          },
        }}
        onClick={toggleExpanded}
        role="button"
        tabIndex={0}
        aria-expanded={expanded}
        aria-label={
          expanded ? 'Collapse enrollment options' : 'Expand enrollment options'
        }
        onKeyDown={(e: React.KeyboardEvent) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggleExpanded();
          }
        }}
      >
        <Box
          component="div"
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1,
          }}
        >
          <span
            style={{
              fontSize: 'var(--text-base)',
              fontWeight: 600,
            }}
          >
            📚 Ready to Enroll?
          </span>
        </Box>
        <IconButton
          size="small"
          sx={{
            color: 'var(--white)',
            padding: 0.5,
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
            },
          }}
          aria-hidden="true"
        >
          {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </IconButton>
      </Box>

      {/* Collapsible Content */}
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <Container
          maxWidth="sm"
          sx={{
            textAlign: 'center',
            py: { xs: 2, md: 0 }, // Reduced vertical padding
            px: { xs: 2, md: 0 }, // Reduced horizontal padding
          }}
        >
          <Box
            component="div"
            sx={{
              marginBottom: 'var(--spacing-lg)', // Reduced spacing
            }}
          >
            <p
              style={{
                fontSize: 'var(--text-base)', // Reduced from text-lg
                color: 'var(--text-secondary)',
                margin: '0 0 var(--spacing-lg) 0', // Reduced margin
                lineHeight: 1.5,
              }}
            >
              Join our Montessori community today
            </p>
          </Box>

          <EnrollmentButtons
            variant="primary"
            sx={{
              flexDirection: 'column',
              gap: 2, // Reduced gap between buttons
              '& .MuiLink-root': {
                fontSize: 'var(--text-base)', // Reduced from text-lg
                fontWeight: 700,
                padding: 'var(--spacing-md) var(--spacing-lg)', // Reduced padding
                borderRadius: 'var(--radius-full)',
                backgroundColor: 'var(--primary-blue)',
                color: 'var(--white)',
                textDecoration: 'none',
                display: 'inline-block',
                transition: 'all 0.3s ease',
                boxShadow: 'var(--shadow-md)',
                minHeight: '44px', // Reduced but still meets accessibility standards
                '&:hover': {
                  backgroundColor: '#1D4ED8',
                  transform: 'translateY(-2px)',
                  boxShadow: 'var(--shadow-lg)',
                  textDecoration: 'none',
                },
                '&:focus': {
                  outline: '3px solid var(--primary-blue)',
                  outlineOffset: '2px',
                },
              },
            }}
          />

          {/* Contact Buttons */}
          <Stack
            direction="row"
            spacing={2}
            justifyContent="center"
            sx={{ mt: 2 }}
          >
            <Button
              variant="outlined"
              color="primary"
              href={createPhoneLink()}
              sx={{
                minWidth: 0,
                px: 2,
                py: 1,
                fontSize: 'var(--text-base)',
                borderRadius: 'var(--radius-full)',
                textTransform: 'none',
                fontWeight: 600,
                lineHeight: 1.2,
              }}
              aria-label="Call Montessori Skye View"
            >
              Call
            </Button>
            <Button
              variant="outlined"
              color="primary"
              href={createEmailLink()}
              sx={{
                minWidth: 0,
                px: 2,
                py: 1,
                fontSize: 'var(--text-base)',
                borderRadius: 'var(--radius-full)',
                textTransform: 'none',
                fontWeight: 600,
                lineHeight: 1.2,
              }}
              aria-label="Email Montessori Skye View"
            >
              Email
            </Button>
          </Stack>
        </Container>
      </Collapse>
    </Box>
  );
};

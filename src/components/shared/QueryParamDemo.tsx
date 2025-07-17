import React from 'react';
import { Box, Typography, Button, Stack, Paper } from '@mui/material';
import { Link } from 'react-router-dom';
import { createQueryUrl } from '../../utils/navigation';

export const QueryParamDemo: React.FC = () => {
  const demoPages = [
    { name: 'Registration', param: 'registration' },
    { name: 'Tuition', param: 'tuition' },
    { name: 'Schedule', param: 'schedule' },
    { name: 'Location', param: 'location' },
    { name: 'Philosophy', param: 'philosophy' },
    { name: 'Contact', param: 'contact' },
    { name: 'FAQ', param: 'faq' },
  ];

  return (
    <Paper
      elevation={2}
      sx={{
        padding: 4,
        margin: 2,
        backgroundColor: 'var(--white)',
        border: '2px solid var(--primary-blue)',
        borderRadius: 'var(--radius-lg)',
      }}
    >
      <Typography
        variant="h3"
        component="h2"
        sx={{
          color: 'var(--text-dark)',
          marginBottom: 3,
          textAlign: 'center',
          fontWeight: 700,
        }}
      >
        🔗 Query Parameter Navigation Demo
      </Typography>

      <Typography
        variant="body1"
        sx={{
          color: 'var(--text-secondary)',
          marginBottom: 4,
          textAlign: 'center',
          fontSize: 'var(--text-lg)',
          lineHeight: 1.6,
        }}
      >
        Test direct URL navigation using query parameters. Click any link below
        to see how <code>?p=page</code> works:
      </Typography>

      <Box
        component="div"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          alignItems: 'center',
        }}
      >
        <Stack
          direction="row"
          spacing={2}
          sx={{
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: 2,
          }}
        >
          {demoPages.map(({ name, param }) => (
            <Button
              key={param}
              component={Link}
              to={createQueryUrl(param)}
              variant="outlined"
              size="large"
              sx={{
                borderColor: 'var(--primary-blue)',
                color: 'var(--primary-blue)',
                fontWeight: 600,
                padding: '12px 20px',
                '&:hover': {
                  backgroundColor: 'var(--primary-blue)',
                  color: 'white',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 4px 8px rgba(37, 99, 235, 0.3)',
                },
              }}
            >
              {name}
            </Button>
          ))}
        </Stack>

        <Typography
          variant="body2"
          sx={{
            color: 'var(--text-secondary)',
            marginTop: 4,
            textAlign: 'center',
            fontSize: 'var(--text-sm)',
            fontFamily: 'monospace',
            backgroundColor: 'var(--light-gray)',
            padding: 2,
            borderRadius: 'var(--radius-sm)',
            border: '1px solid var(--border-color)',
          }}
        >
          Example: <code>https://montessoriskyeview.com/?p=registration</code>
        </Typography>
      </Box>
    </Paper>
  );
};

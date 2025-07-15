import React from 'react';
import './App.css';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';

import { AppBar } from './components/appBar/AppBar';
import { AppRoutes, RouteProvider } from './views/Routes';

function App() {
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: 'light',
          text: {
            primary: '#1F2937',
            secondary: '#4B5563',
          },
          primary: {
            main: '#4BB4DE',
            contrastText: '#1F2937',
          },
          secondary: {
            main: '#9B6DFF',
            contrastText: '#1F2937',
          },
          background: {
            default: '#F9FAFB',
            paper: '#FFFFFF',
          },
        },
        typography: {
          fontFamily: '"Nunito", sans-serif',
          h1: {
            fontFamily: '"Quicksand", sans-serif',
            color: '#1F2937',
          },
          h2: {
            fontFamily: '"Quicksand", sans-serif',
            color: '#1F2937',
          },
          h3: {
            fontFamily: '"Quicksand", sans-serif',
            color: '#1F2937',
          },
          h4: {
            fontFamily: '"Quicksand", sans-serif',
            color: '#1F2937',
          },
          h5: {
            fontFamily: '"Quicksand", sans-serif',
            color: '#1F2937',
          },
          h6: {
            fontFamily: '"Quicksand", sans-serif',
            color: '#1F2937',
          },
          body1: {
            color: '#1F2937',
          },
          body2: {
            color: '#4B5563',
          },
        },
        components: {
          MuiButton: {
            styleOverrides: {
              root: {
                borderRadius: '9999px',
                textTransform: 'none',
                fontFamily: '"Quicksand", sans-serif',
                fontWeight: 600,
                '&:focus': {
                  outline: '2px solid #4BB4DE',
                  outlineOffset: '2px',
                },
              },
            },
          },
          MuiPaper: {
            styleOverrides: {
              root: {
                borderRadius: '16px',
              },
            },
          },
          MuiLink: {
            styleOverrides: {
              root: {
                '&:focus': {
                  outline: '2px solid #4BB4DE',
                  outlineOffset: '2px',
                },
              },
            },
          },
        },
      }),
    []
  );

  return (
    <div lang="en">
      {/* Skip to main content link for screen readers */}
      <a
        href="#main-content"
        style={{
          position: 'absolute',
          left: '-10000px',
          top: 'auto',
          width: '1px',
          height: '1px',
          overflow: 'hidden',
          zIndex: 9999,
        }}
        onFocus={e => {
          e.target.style.left = 'auto';
          e.target.style.top = 'auto';
          e.target.style.width = 'auto';
          e.target.style.height = 'auto';
        }}
        onBlur={e => {
          e.target.style.left = '-10000px';
          e.target.style.top = 'auto';
          e.target.style.width = '1px';
          e.target.style.height = '1px';
        }}
      >
        Skip to main content
      </a>

      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouteProvider>
          <AppBar />
          <main id="main-content" role="main">
            <AppRoutes />
          </main>
        </RouteProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;

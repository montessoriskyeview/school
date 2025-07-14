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
        },
      }),
    []
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouteProvider>
        <AppBar />
        <AppRoutes />
      </RouteProvider>
    </ThemeProvider>
  );
}

export default App;

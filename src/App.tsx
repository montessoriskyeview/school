import React from 'react';
import './App.css';
import { CssBaseline, ThemeProvider, createTheme, useMediaQuery } from '@mui/material';

import { AppBar } from './components/appBar/AppBar';
import { AppRoutes, RouteProvider } from './views/Routes';

function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode],
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

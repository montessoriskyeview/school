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
            primary: "#FFFFFF"
          }
        },
      }),
    [],
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

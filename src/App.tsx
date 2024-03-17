import React from 'react';
import './App.css';
import { CssBaseline, ThemeProvider, createTheme, useMediaQuery } from '@mui/material';
import { Content } from './components/Content';
import { AppBar } from './components/appBar/AppBar';

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
      <AppBar />
      <Content />
    </ThemeProvider>
  );
}

export default App;

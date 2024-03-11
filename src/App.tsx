import React from 'react';
import logo from './logo.svg';
import './App.css';
import { CssBaseline, ThemeProvider, createTheme, useMediaQuery } from '@mui/material';
import { Content } from './components/Content';

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
      <Content />
    </ThemeProvider>
  );
}

export default App;

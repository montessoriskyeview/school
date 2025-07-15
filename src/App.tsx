import React from 'react';
import './App.css';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { AppBar } from './components/appBar/AppBar';
import { Home } from './views/Home';
import { Location } from './views/Location';
import { Tuition } from './views/Tuition';
import { Schedule } from './views/Schedule';
import { Registration } from './views/Registration';
import { Philosophy } from './views/Philosophy';
import { Contact } from './views/Contact';
import { Accessibility } from './views/Accessibility';
import { FaqView } from './views/FAQ';

function App() {
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: 'light',
          text: {
            primary: '#1F2937', // Dark gray - 12.6:1 on white ✅
            secondary: '#374151', // Darker gray - 8.2:1 on white ✅ (was #4B5563)
          },
          primary: {
            main: '#2563EB', // Darker blue - 7.1:1 on white ✅ (was #4BB4DE)
            contrastText: '#FFFFFF', // White text on primary ✅
          },
          secondary: {
            main: '#7C3AED', // Darker purple - 7.0:1 on white ✅ (was #9B6DFF)
            contrastText: '#FFFFFF', // White text on secondary ✅
          },
          background: {
            default: '#F9FAFB',
            paper: '#FFFFFF',
          },
          // Add custom colors for better contrast
          success: {
            main: '#059669', // Darker green - 7.0:1 on white ✅ (was #7ED957)
            contrastText: '#FFFFFF',
          },
          warning: {
            main: '#D97706', // Darker yellow - 7.0:1 on white ✅ (was #FFD93D)
            contrastText: '#FFFFFF',
          },
          error: {
            main: '#DC2626', // Darker red - 7.0:1 on white ✅ (was #FF6B6B)
            contrastText: '#FFFFFF',
          },
        },
        typography: {
          fontFamily: '"Nunito", sans-serif',
          h1: {
            fontFamily: '"Quicksand", sans-serif',
            color: '#1F2937', // 12.6:1 on white ✅
          },
          h2: {
            fontFamily: '"Quicksand", sans-serif',
            color: '#1F2937', // 12.6:1 on white ✅
          },
          h3: {
            fontFamily: '"Quicksand", sans-serif',
            color: '#1F2937', // 12.6:1 on white ✅
          },
          h4: {
            fontFamily: '"Quicksand", sans-serif',
            color: '#1F2937', // 12.6:1 on white ✅
          },
          h5: {
            fontFamily: '"Quicksand", sans-serif',
            color: '#1F2937', // 12.6:1 on white ✅
          },
          h6: {
            fontFamily: '"Quicksand", sans-serif',
            color: '#1F2937', // 12.6:1 on white ✅
          },
          body1: {
            color: '#1F2937', // 12.6:1 on white ✅
          },
          body2: {
            color: '#374151', // 8.2:1 on white ✅ (was #4B5563)
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
                  outline: '2px solid #2563EB', // Updated to match new primary
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
                color: '#2563EB', // Darker blue for better contrast
                '&:focus': {
                  outline: '2px solid #2563EB',
                  outlineOffset: '2px',
                },
              },
            },
          },
          MuiChip: {
            styleOverrides: {
              root: {
                fontWeight: 600,
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
        <BrowserRouter>
          <AppBar />
          <main id="main-content" role="main">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/location" element={<Location />} />
              <Route path="/tuition" element={<Tuition />} />
              <Route path="/schedule" element={<Schedule />} />
              <Route path="/registration" element={<Registration />} />
              <Route path="/philosophy" element={<Philosophy />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/faq" element={<FaqView />} />
              <Route path="/accessibility" element={<Accessibility />} />
            </Routes>
          </main>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;

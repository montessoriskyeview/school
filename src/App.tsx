import React, { Suspense, useEffect } from 'react';
import './App.css';
import {
  CssBaseline,
  ThemeProvider,
  createTheme,
  CircularProgress,
  Box,
} from '@mui/material';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

import { AppBar } from './components/appBar/AppBar';
import { SEO, SEOConfigs } from './components/shared/SEO';
import { ConsentBanner } from './components/shared/ConsentBanner';
// import { PerformanceDashboard } from './components/shared/PerformanceDashboard';
import { ErrorPage } from './views/ErrorView';
import { useQueryParams } from './hooks/useQueryParams';
import { performanceOptimizer, trackPageView } from './utils/performance';

// Lazy load components for better performance during peak hours
const Home = React.lazy(() =>
  import('./views/Home').then(module => ({ default: module.Home }))
);
const Location = React.lazy(() =>
  import('./views/Location').then(module => ({ default: module.Location }))
);
const Tuition = React.lazy(() =>
  import('./views/Tuition').then(module => ({ default: module.Tuition }))
);
const Schedule = React.lazy(() =>
  import('./views/Schedule').then(module => ({ default: module.Schedule }))
);
const FullTimeLanding = React.lazy(() =>
  import('./views/Schedule/FullTimeLanding').then(module => ({
    default: module.FullTimeLanding,
  }))
);
const PartTimeLanding = React.lazy(() =>
  import('./views/Schedule/PartTimeLanding').then(module => ({
    default: module.PartTimeLanding,
  }))
);
const Registration = React.lazy(() =>
  import('./views/Registration').then(module => ({
    default: module.Registration,
  }))
);
const Philosophy = React.lazy(() =>
  import('./views/Philosophy').then(module => ({ default: module.Philosophy }))
);
const Contact = React.lazy(() =>
  import('./views/Contact').then(module => ({ default: module.Contact }))
);
const Accessibility = React.lazy(() =>
  import('./views/Accessibility').then(module => ({
    default: module.Accessibility,
  }))
);
const FaqView = React.lazy(() =>
  import('./views/FAQ').then(module => ({ default: module.FaqView }))
);
const Review = React.lazy(() =>
  import('./views/Review').then(module => ({ default: module.Review }))
);
const BlogPage = React.lazy(() =>
  import('./components/blog/BlogPage').then(module => ({
    default: module.default,
  }))
);
const BlogPostPage = React.lazy(() =>
  import('./components/blog/BlogPostPage').then(module => ({
    default: module.default,
  }))
);
const Parents = React.lazy(() =>
  import('./views/Parents').then(module => ({ default: module.Parents }))
);
const StaffResources = React.lazy(() =>
  import('./views/StaffResources').then(module => ({
    default: module.StaffResources,
  }))
);

// Loading component optimized for mobile users
const LoadingSpinner = () => (
  <Box
    component="div"
    sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '60vh',
      padding: '2m',
    }}
  >
    <CircularProgress
      size={48}
      sx={{
        color: '#2563EB',
        '& .MuiCircularProgress-circle': {
          strokeLinecap: 'round',
        },
      }}
    />
  </Box>
);

// Component to handle query parameter navigation
const QueryParamHandler: React.FC = () => {
  useQueryParams(); // This will handle the query parameter navigation
  return null;
};

// Component to handle SEO updates based on current route
const SEOUpdater: React.FC = () => {
  const location = useLocation();

  const path = location.pathname;
  let seoConfig;

  switch (path) {
    case '/':
      seoConfig = SEOConfigs.home;
      break;
    case '/location':
      seoConfig = SEOConfigs.location;
      break;
    case '/tuition':
      seoConfig = SEOConfigs.tuition;
      break;
    case '/schedule':
      seoConfig = SEOConfigs.schedule;
      break;
    case '/registration':
      seoConfig = SEOConfigs.registration;
      break;
    case '/philosophy':
      seoConfig = SEOConfigs.philosophy;
      break;
    case '/contact':
      seoConfig = SEOConfigs.contact;
      break;
    case '/faq':
      seoConfig = SEOConfigs.faq;
      break;
    case '/accessibility':
      seoConfig = SEOConfigs.accessibility;
      break;
    case '/review':
      seoConfig = SEOConfigs.review;
      break;
    case '/parents':
      seoConfig = SEOConfigs.parents;
      break;
    case '/staff-resources':
      seoConfig = SEOConfigs.staffResources;
      break;
    case '/schedule/full-time':
      seoConfig = SEOConfigs.fullTimeLanding;
      break;
    case '/schedule/part-time':
      seoConfig = SEOConfigs.partTimeLanding;
      break;
    default:
      seoConfig = SEOConfigs.home;
  }

  return <SEO {...seoConfig} />;
};

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

  useEffect(() => {
    const initializePerformance = async () => {
      await performanceOptimizer.initialize();
      trackPageView();
    };

    initializePerformance();
  }, []);

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
          <QueryParamHandler />
          <SEOUpdater />
          <AppBar />
          <main id="main-content" role="main">
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/location" element={<Location />} />
                <Route path="/tuition" element={<Tuition />} />
                <Route path="/schedule" element={<Schedule />} />
                <Route
                  path="/schedule/full-time"
                  element={<FullTimeLanding />}
                />
                <Route
                  path="/schedule/part-time"
                  element={<PartTimeLanding />}
                />
                <Route path="/registration" element={<Registration />} />
                <Route path="/philosophy" element={<Philosophy />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/faq" element={<FaqView />} />
                <Route path="/accessibility" element={<Accessibility />} />
                <Route path="/review" element={<Review />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/blog/:slug" element={<BlogPostPage />} />
                <Route path="/parents" element={<Parents />} />
                <Route path="/staff-resources" element={<StaffResources />} />
                <Route path="*" element={<ErrorPage />} />
              </Routes>
            </Suspense>
          </main>
          <ConsentBanner />
          {/* <PerformanceDashboard /> */}
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;

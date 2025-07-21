import React, { useState, useEffect } from 'react';
import { Paper, Typography, Grid, Chip, Button, Collapse } from '@mui/material';
import { Speed as SpeedIcon } from '@mui/icons-material';
import {
  performanceOptimizer,
  IPerformanceMetrics,
} from '../../utils/performance';

interface IPerformanceDashboardProps {
  showInProduction?: boolean;
}

export const PerformanceDashboard: React.FC<IPerformanceDashboardProps> = ({
  showInProduction = false,
}) => {
  const [metrics, setMetrics] = useState<Partial<IPerformanceMetrics>>({});
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    // Only show in development or if explicitly enabled in production
    if (process.env.NODE_ENV === 'production' && !showInProduction) {
      return;
    }

    const updateMetrics = () => {
      const currentMetrics = performanceOptimizer.getMonitor().getMetrics();
      setMetrics(currentMetrics);
    };

    // Update metrics every 2 seconds
    const interval = setInterval(updateMetrics, 2000);
    updateMetrics(); // Initial update

    return () => clearInterval(interval);
  }, [showInProduction]);

  const getMetricColor = (metric: keyof IPerformanceMetrics, value: number) => {
    const thresholds = {
      lcp: { good: 2500, poor: 4000 },
      fid: { good: 100, poor: 300 },
      cls: { good: 0.1, poor: 0.25 },
      fcp: { good: 1800, poor: 3000 },
      ttfb: { good: 800, poor: 1800 },
    };

    const threshold = thresholds[metric];
    if (!threshold) return 'default';

    if (value <= threshold.good) return 'success';
    if (value <= threshold.poor) return 'warning';
    return 'error';
  };

  const formatMetric = (metric: keyof IPerformanceMetrics, value: number) => {
    if (metric === 'cls') {
      return `${(value * 1000).toFixed(0)}`;
    }
    return `${Math.round(value)}`;
  };

  const getMetricUnit = (metric: keyof IPerformanceMetrics) => {
    switch (metric) {
      case 'lcp':
      case 'fcp':
      case 'ttfb':
        return 'ms';
      case 'fid':
        return 'ms';
      case 'cls':
        return '';
      default:
        return '';
    }
  };

  const getMetricLabel = (metric: keyof IPerformanceMetrics) => {
    switch (metric) {
      case 'lcp':
        return 'LCP';
      case 'fid':
        return 'FID';
      case 'cls':
        return 'CLS';
      case 'fcp':
        return 'FCP';
      case 'ttfb':
        return 'TTFB';
      default:
        return (metric as string).toUpperCase();
    }
  };

  const getMetricDescription = (metric: keyof IPerformanceMetrics) => {
    switch (metric) {
      case 'lcp':
        return 'Largest Contentful Paint';
      case 'fid':
        return 'First Input Delay';
      case 'cls':
        return 'Cumulative Layout Shift';
      case 'fcp':
        return 'First Contentful Paint';
      case 'ttfb':
        return 'Time to First Byte';
      default:
        return '';
    }
  };

  // Only render if we have metrics or are in development
  if (process.env.NODE_ENV === 'production' && !showInProduction) {
    return null;
  }

  return (
    <Paper
      elevation={4}
      sx={{
        position: 'fixed',
        top: '20px',
        right: '20px',
        zIndex: 9998,
        minWidth: '300px',
        maxWidth: '400px',
        backgroundColor: 'var(--white)',
        border: '2px solid var(--primary-green)',
        borderRadius: 'var(--border-radius-lg)',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          padding: '16px',
          backgroundColor: 'var(--primary-green)',
          color: 'var(--white)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          cursor: 'pointer',
        }}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <SpeedIcon />
          <Typography variant="h6" style={{ fontWeight: 700 }}>
            Performance
          </Typography>
        </div>
        <Button
          size="small"
          onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
            e.stopPropagation();
            setIsVisible(!isVisible);
          }}
          sx={{
            color: 'var(--white)',
            borderColor: 'var(--white)',
            '&:hover': {
              borderColor: 'var(--white)',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
            },
          }}
          variant="outlined"
        >
          {isVisible ? 'Hide' : 'Show'}
        </Button>
      </div>

      <Collapse in={isVisible}>
        <div style={{ padding: '16px' }}>
          <Grid container spacing={2}>
            {Object.entries(metrics).map(([key, value]) => {
              const metric = key as keyof IPerformanceMetrics;
              const color = getMetricColor(metric, value);

              return (
                <Grid item xs={6} key={metric}>
                  <div
                    style={{
                      textAlign: 'center',
                      padding: '8px',
                      border: '1px solid var(--border-color)',
                      borderRadius: 'var(--border-radius)',
                      backgroundColor: 'var(--background-light)',
                    }}
                  >
                    <Typography
                      variant="caption"
                      style={{
                        color: 'var(--text-muted)',
                        display: 'block',
                        marginBottom: '4px',
                      }}
                    >
                      {getMetricLabel(metric)}
                    </Typography>
                    <Chip
                      label={`${formatMetric(metric, value)}${getMetricUnit(
                        metric
                      )}`}
                      color={color}
                      size="small"
                      style={{ fontWeight: 600 }}
                    />
                    <Typography
                      variant="caption"
                      style={{
                        color: 'var(--text-muted)',
                        display: 'block',
                        marginTop: '4px',
                        fontSize: '0.7rem',
                      }}
                    >
                      {getMetricDescription(metric)}
                    </Typography>
                  </div>
                </Grid>
              );
            })}
          </Grid>

          {Object.keys(metrics).length === 0 && (
            <div style={{ textAlign: 'center', padding: '16px 0' }}>
              <Typography
                variant="body2"
                style={{ color: 'var(--text-muted)' }}
              >
                Loading performance metrics...
              </Typography>
            </div>
          )}

          <div
            style={{
              marginTop: '16px',
              paddingTop: '16px',
              borderTop: '1px solid var(--border-color)',
            }}
          >
            <Typography
              variant="caption"
              style={{ color: 'var(--text-muted)' }}
            >
              💡 Performance metrics are collected automatically and help us
              optimize your experience.
            </Typography>
          </div>
        </div>
      </Collapse>
    </Paper>
  );
};

import React, { useEffect, useState } from 'react';
import { Typography, Paper, Chip } from '@mui/material';
import { cssOptimizer } from '../../utils/cssOptimizer';

interface CSSPerformanceMetrics {
  totalResources: number;
  loadedResources: number;
  pendingResources: number;
  loadTime: number;
  renderBlockingTime: number;
}

export const CSSPerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<CSSPerformanceMetrics>({
    totalResources: 0,
    loadedResources: 0,
    pendingResources: 0,
    loadTime: 0,
    renderBlockingTime: 0,
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show in development
    if (process.env.NODE_ENV === 'development') {
      setIsVisible(true);
    }

    const updateMetrics = () => {
      try {
        const status = cssOptimizer.getLoadingStatus();

        // Safely get performance metrics with fallbacks for test environment
        let loadTime = 0;
        let renderBlockingTime = 0;

        if (
          typeof performance !== 'undefined' &&
          performance.getEntriesByType
        ) {
          try {
            const navigationStart = performance.getEntriesByType(
              'navigation'
            )[0] as PerformanceNavigationTiming;
            if (navigationStart) {
              loadTime =
                navigationStart.loadEventEnd - navigationStart.loadEventStart;
              renderBlockingTime =
                navigationStart.domContentLoadedEventEnd -
                navigationStart.domContentLoadedEventStart;
            }
          } catch (error) {
            // Fallback for test environment or browsers without Performance API
            console.warn(
              'Performance API not available, using fallback metrics'
            );
          }
        }

        setMetrics({
          totalResources: status.loaded.length + status.pending.length,
          loadedResources: status.loaded.length,
          pendingResources: status.pending.length,
          loadTime,
          renderBlockingTime,
        });
      } catch (error) {
        console.warn('Error updating CSS performance metrics:', error);
        // Set fallback metrics
        setMetrics({
          totalResources: 0,
          loadedResources: 0,
          pendingResources: 0,
          loadTime: 0,
          renderBlockingTime: 0,
        });
      }
    };

    // Update metrics every 2 seconds
    const interval = setInterval(updateMetrics, 2000);
    updateMetrics(); // Initial update

    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  const getPerformanceColor = (time: number) => {
    if (time < 100) return 'success';
    if (time < 300) return 'warning';
    return 'error';
  };

  const getResourceStatusColor = () => {
    const ratio = metrics.loadedResources / metrics.totalResources;
    if (ratio === 1) return 'success';
    if (ratio > 0.5) return 'warning';
    return 'error';
  };

  const paperStyle = {
    position: 'fixed' as const,
    bottom: 16,
    right: 16,
    padding: 16,
    zIndex: 9999,
    maxWidth: 300,
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(0, 0, 0, 0.1)',
  };

  const boxStyle = {
    marginBottom: 16,
  };

  const chipStyle = {
    marginTop: 8,
  };

  const captionStyle = {
    display: 'block',
    marginTop: 16,
    color: '#666',
    fontSize: '0.7rem',
  };

  return (
    <Paper style={paperStyle}>
      <Typography variant="h6" gutterBottom>
        CSS Performance
      </Typography>

      <div style={boxStyle}>
        <Typography variant="body2" color="text.secondary">
          Resources: {metrics.loadedResources}/{metrics.totalResources}
        </Typography>
        <Chip
          label={`${Math.round(
            (metrics.loadedResources / metrics.totalResources) * 100
          )}% loaded`}
          color={getResourceStatusColor()}
          size="small"
          style={chipStyle}
        />
      </div>

      <div style={boxStyle}>
        <Typography variant="body2" color="text.secondary">
          Load Time: {metrics.loadTime.toFixed(0)}ms
        </Typography>
        <Chip
          label={`${metrics.loadTime.toFixed(0)}ms`}
          color={getPerformanceColor(metrics.loadTime)}
          size="small"
          style={chipStyle}
        />
      </div>

      <div>
        <Typography variant="body2" color="text.secondary">
          Render Blocking: {metrics.renderBlockingTime.toFixed(0)}ms
        </Typography>
        <Chip
          label={`${metrics.renderBlockingTime.toFixed(0)}ms`}
          color={getPerformanceColor(metrics.renderBlockingTime)}
          size="small"
          style={chipStyle}
        />
      </div>

      <Typography variant="caption" style={captionStyle}>
        Development Mode Only
      </Typography>
    </Paper>
  );
};

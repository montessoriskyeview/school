import React, { useRef, useEffect, useState } from 'react';
import { Box, Skeleton, Typography } from '@mui/material';
import { performanceOptimizer } from '../../utils/performance';

interface ILazyAdContainerProps {
  adSlotId?: string;
  adFormat?: 'banner' | 'rectangle' | 'leaderboard' | 'skyscraper';
  placeholder?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onAdLoad?: () => void;
  onAdError?: (error: Error) => void;
}

export const LazyAdContainer: React.FC<ILazyAdContainerProps> = ({
  adSlotId,
  adFormat = 'banner',
  placeholder,
  className,
  style,
  onAdLoad,
  onAdError,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;

    const lazyLoader = performanceOptimizer.getLazyLoader();

    lazyLoader.observeElement(containerRef.current, () => {
      setIsVisible(true);
      loadAd();
    });

    return () => {
      if (containerRef.current) {
        lazyLoader.unobserveElement(containerRef.current);
      }
    };
  }, []);

  const loadAd = async () => {
    try {
      // Check consent before loading ads
      const consent = performanceOptimizer.getConsentManager().getConsent();
      if (!consent.ads) {
        console.log('Ad loading skipped - no consent');
        return;
      }

      // Simulate ad loading delay for performance
      await new Promise(resolve => setTimeout(resolve, 100));

      // Future Google Ads integration would go here
      // For now, we'll simulate the ad loading process
      await simulateAdLoad();

      setIsLoaded(true);
      onAdLoad?.();
    } catch (error) {
      console.error('Ad loading failed:', error);
      setHasError(true);
      onAdError?.(error as Error);
    }
  };

  const simulateAdLoad = (): Promise<void> => {
    return new Promise((resolve, reject) => {
      // Simulate network delay
      setTimeout(() => {
        // Simulate 90% success rate
        if (Math.random() > 0.1) {
          resolve();
        } else {
          reject(new Error('Ad loading failed'));
        }
      }, 500 + Math.random() * 1000);
    });
  };

  const getAdDimensions = () => {
    switch (adFormat) {
      case 'banner':
        return { width: 728, height: 90 };
      case 'rectangle':
        return { width: 300, height: 250 };
      case 'leaderboard':
        return { width: 728, height: 90 };
      case 'skyscraper':
        return { width: 160, height: 600 };
      default:
        return { width: 728, height: 90 };
    }
  };

  const dimensions = getAdDimensions();

  if (hasError) {
    return (
      <div
        ref={containerRef}
        className={className}
        style={{
          width: dimensions.width,
          height: dimensions.height,
          backgroundColor: 'var(--background-light)',
          border: '1px dashed var(--text-muted)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          ...style,
        }}
      >
        <Typography
          variant="body2"
          sx={{
            color: 'var(--text-muted)',
            textAlign: 'center',
            p: 2,
          }}
        >
          Ad temporarily unavailable
        </Typography>
      </div>
    );
  }

  if (!isVisible) {
    return (
      <div
        ref={containerRef}
        className={className}
        style={{
          width: dimensions.width,
          height: dimensions.height,
          ...style,
        }}
      >
        {placeholder || (
          <Skeleton
            variant="rectangular"
            width={dimensions.width}
            height={dimensions.height}
            sx={{
              backgroundColor: 'var(--background-light)',
              borderRadius: 1,
            }}
          />
        )}
      </div>
    );
  }

  if (!isLoaded) {
    return (
      <div
        className={className}
        style={{
          width: dimensions.width,
          height: dimensions.height,
          ...style,
        }}
      >
        <Skeleton
          variant="rectangular"
          width={dimensions.width}
          height={dimensions.height}
          sx={{
            backgroundColor: 'var(--background-light)',
            borderRadius: 1,
          }}
        />
      </div>
    );
  }

  return (
    <div
      className={className}
      style={{
        width: dimensions.width,
        height: dimensions.height,
        backgroundColor: 'var(--background-light)',
        border: '1px solid var(--border-color)',
        borderRadius: 'var(--border-radius)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        ...style,
      }}
    >
      {/* Future Google Ads integration would render here */}
      <Typography
        variant="body2"
        sx={{
          color: 'var(--text-muted)',
          textAlign: 'center',
          p: 2,
        }}
      >
        Ad Space ({adFormat}){adSlotId && ` - ${adSlotId}`}
      </Typography>
    </div>
  );
};

// Hook for managing ad loading state
export const useAdLoading = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const loadAd = async () => {
    setIsLoading(true);
    setError(null);

    try {
      // Simulate ad loading
      await new Promise(resolve => setTimeout(resolve, 1000));
      setIsLoaded(true);
    } catch (err) {
      setError(err as Error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    isLoaded,
    error,
    loadAd,
  };
};

import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { Box, IconButton, Typography } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

interface Slide {
  src: string;
  alt?: string;
  title?: string;
  description?: string;
  className?: string;
}

export interface CarouselProps {
  slides: Slide[];
  height?: 'sm' | 'md' | 'lg';
  autoPlay?: boolean;
  interval?: number;
}

const CarouselContainer = styled(Box)<{ height?: string }>`
  position: relative;
  width: 100%;
  height: ${props => {
    switch (props.height) {
      case 'sm':
        return '300px';
      case 'lg':
        return '700px';
      default:
        return '500px';
    }
  }};
  max-width: 1200px;
  margin: 0 auto;
  overflow: hidden;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-lg);

  @media (max-width: 768px) {
    height: ${props => {
      switch (props.height) {
        case 'sm':
          return '250px';
        case 'lg':
          return '400px';
        default:
          return '350px';
      }
    }};
  }
`;

const CarouselContent = styled(Box)`
  position: relative;
  height: 100%;
  width: 100%;
`;

const CarouselSlide = styled('img')<{ active: boolean; offset: number }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: ${props => (props.active ? 1 : 0)};
  transform: translateX(${props => props.offset * 100}%);
  transition: all 0.5s ease-in-out;
`;

const NavigationControls = styled(Box)`
  position: absolute;
  bottom: var(--spacing-lg);
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  background: rgba(0, 0, 0, 0.3);
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--radius-full);
  backdrop-filter: blur(4px);
  z-index: 2;

  @media (max-width: 768px) {
    bottom: var(--spacing-md);
    padding: var(--spacing-xs) var(--spacing-sm);
    gap: var(--spacing-sm);
  }
`;

const CarouselButton = styled(IconButton)`
  color: var(--white);
  background: rgba(255, 255, 255, 0.2);
  padding: var(--spacing-sm);

  &:hover {
    background: rgba(255, 255, 255, 0.4);
  }

  @media (max-width: 768px) {
    padding: var(--spacing-xs);
    min-width: 40px;
    min-height: 40px;
  }
`;

// const SlideInfo = styled(Box)`
//   position: absolute;
//   bottom: calc(
//     var(--spacing-2xl) + 60px
//   ); /* Account for navigation controls height */
//   left: var(--spacing-lg);
//   right: var(--spacing-lg);
//   color: var(--white);
//   text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
//   z-index: 1;

//   @media (max-width: 768px) {
//     bottom: calc(var(--spacing-xl) + 50px); /* Smaller spacing on mobile */
//     left: var(--spacing-md);
//     right: var(--spacing-md);
//   }
// `;

export const Carousel: React.FC<CarouselProps> = ({
  slides,
  height = 'md',
  autoPlay = true,
  interval = 5000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  React.useEffect(() => {
    if (autoPlay) {
      const timer = setInterval(() => {
        setCurrentIndex(prevIndex =>
          prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        );
      }, interval);

      return () => clearInterval(timer);
    }
  }, [autoPlay, interval, slides.length]);

  const nextSlide = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <CarouselContainer height={height}>
      <CarouselContent>
        {slides.map((slide, index) => (
          <React.Fragment key={index}>
            <CarouselSlide
              src={slide.src}
              alt={slide.alt || `Slide ${index + 1}`}
              className={slide.className}
              active={index === currentIndex}
              offset={index - currentIndex}
            />
          </React.Fragment>
        ))}
      </CarouselContent>
      <NavigationControls>
        <CarouselButton onClick={prevSlide} aria-label="Previous slide">
          <ChevronLeftIcon />
        </CarouselButton>
        <Typography
          variant="body2"
          sx={{
            color: 'var(--white)',
            minWidth: '45px',
            textAlign: 'center',
            fontSize: { xs: 'var(--text-sm)', md: 'var(--text-base)' },
          }}
        >
          {currentIndex + 1}/{slides.length}
        </Typography>
        <CarouselButton onClick={nextSlide} aria-label="Next slide">
          <ChevronRightIcon />
        </CarouselButton>
      </NavigationControls>
    </CarouselContainer>
  );
};
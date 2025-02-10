import React, { useState } from 'react';

interface Slide {
  src: string;
  className?: string;
}

export interface CarouselProps {
  slides: Slide[];
}

export const Carousel: React.FC<CarouselProps> = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

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
    <div className='carousel-container'>
      <div className='carousel-content'>
        {slides.map((slide, index) => (
          <img
            key={index}
            src={slide.src}
            alt={`Slide ${index + 1}`}
            className={`carousel-slide ${slide.className || ''}`}
            style={{
              opacity: index === currentIndex ? 1 : 0,
              transform: `translateX(${(index - currentIndex) * 100}%)`
            }}
          />
        ))}
      </div>

      <div className='navigation-controls'>
        <button className='carousel-button prev' onClick={prevSlide}>
          ❮
        </button>
        <div className='carousel-counter'>
          {currentIndex + 1}/{slides.length}
        </div>
        <button className='carousel-button next' onClick={nextSlide}>
          ❯
        </button>
      </div>

      <style>{`
        .carousel-container {
          position: relative;
          width: 100%;
          height: 500px;
          max-width: 800px;
          margin: 0 auto;
          overflow: hidden;
        }

        .carousel-content {
          position: relative;
          height: 100%;
          width: 100%;
        }

        .carousel-slide {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: all 0.5s ease-in-out;
        }

        .navigation-controls {
          position: absolute;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          align-items: center;
          gap: 16px;
          background: rgba(0, 0, 0, 0.3);
          padding: 8px 16px;
          border-radius: 20px;
        }

        .carousel-button {
          position: static;
          transform: none;
          padding: 8px 12px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.2);
          color: white;
          border: none;
          cursor: pointer;
          font-size: 14px;
          transition: background 0.3s ease;
        }

        .carousel-button:hover {
          background: rgba(255, 255, 255, 0.4);
        }

        .carousel-counter {
          color: white;
          font-size: 14px;
          min-width: 45px;
          text-align: center;
        }
      `}</style>
    </div>
  );
};

/**
 * 
 * 
const itemData = [
  {
    img: property1,
    rows: 2,
    cols: 2
  },
  {
    img: property2
  },
  {
    img: property3
  },
  {
    img: property4,
    cols: 2
  },
  {
    img: property5,
    cols: 2
  },
  {
    img: property6,
    rows: 2,
    cols: 2
  },
  {
    img: property7
  },
  {
    img: property8
  },
  {
    img: property9,
    rows: 2,
    cols: 2
  },
  {
    img: property10
  },
  {
    img: property11
  },
  {
    img: property12,
    cols: 2
  },
  {
    img: property13
  },
  {
    img: property14
  },
  {
    img: property15
  },
  {
    img: property16
  }
];

function srcset(image: string, size: number, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`
  };
}

 * 
 */

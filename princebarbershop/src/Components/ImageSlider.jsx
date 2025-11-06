import React, { useState, useEffect, useRef } from 'react';

const ImageSlider = ({ images, interval = 5500, fadeDuration = 700, className = '', children }) => {
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);
  const timeoutRef = useRef(null);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setFade(false);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % images.length);
        setFade(true);
      }, fadeDuration);
    }, interval);

    return () => clearTimeout(timeoutRef.current);
  }, [current, images.length, interval, fadeDuration]);

  const goTo = (idx) => {
    setFade(false);
    setTimeout(() => {
      setCurrent(idx);
      setFade(true);
    }, fadeDuration);
  };

  return (
    <div
      className={`relative h-full w-full bg-cover bg-center transition-all duration-1000 ${className}`}
      style={{
        backgroundImage: `url(${images[current]})`,
        transition: 'background-image 1s ease-in-out'
      }}
    >
      {/* Fade overlay for smooth transition */}
      <div
        className={`absolute inset-0 bg-black/90 z-0 transition-opacity duration-400 ${fade ? 'opacity-100' : 'opacity-98'}`}
        style={{
          pointerEvents: 'none',
          transition: `opacity ${fadeDuration / 6000}s`
        }}
      ></div>
      <div className="relative z-10 h-full">{children}</div>
      {/* Slider dots */}
      <div className="flex gap-2 absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goTo(idx)}
            className={`w-3 h-3 rounded-full ${current === idx ? 'bg-[#D6BD98]' : 'bg-gray-400'} transition`}
            aria-label={`Go to slide ${idx + 1}`}
            style={{ outline: 'none', border: 'none', cursor: 'pointer' }}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
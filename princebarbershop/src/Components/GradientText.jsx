import React, { useEffect, useRef } from 'react';

const GradientText = ({
  children,
  className = '',
  colors = ['#697565', '#ECDFCC', '#697565'],
  animationSpeed = 2,
  showBorder = false,
  disabled = false,
  direction = 'to right',
  backgroundSize = '300% 100%'
}) => {
  const textRef = useRef(null);
  const borderRef = useRef(null);

  useEffect(() => {
    if (disabled) return;

    // Create keyframes for gradient animation
    const keyframes = `
      @keyframes gradientMove {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
    `;

    // Add keyframes to document if not already present
    if (!document.getElementById('gradient-keyframes')) {
      const style = document.createElement('style');
      style.id = 'gradient-keyframes';
      style.textContent = keyframes;
      document.head.appendChild(style);
    }

    // Apply animation to text element
    if (textRef.current) {
      textRef.current.style.animation = `gradientMove ${animationSpeed}s linear infinite`;
    }

    // Apply animation to border element if it exists
    if (borderRef.current) {
      borderRef.current.style.animation = `gradientMove ${animationSpeed}s linear infinite`;
    }

    return () => {
      // Cleanup animations on unmount
      if (textRef.current) {
        textRef.current.style.animation = '';
      }
      if (borderRef.current) {
        borderRef.current.style.animation = '';
      }
    };
  }, [animationSpeed, disabled]);

  const gradientStyle = {
    backgroundImage: `linear-gradient(${direction}, ${colors.join(', ')})`,
    backgroundSize: backgroundSize,
    backgroundRepeat: 'no-repeat'
  };

  const containerStyle = {
    position: 'relative',
    margin: '0 auto',
    display: 'flex',
    maxWidth: 'fit-content',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '1.25rem',
    fontWeight: '500',
    backdropFilter: 'blur(8px)',
    transition: 'box-shadow 0.5s ease',
    overflow: 'hidden',
    cursor: 'pointer'
  };

  const borderStyle = {
    position: 'absolute',
    inset: '0',
    zIndex: 0,
    backgroundSize: backgroundSize,
    pointerEvents: 'none',
    ...gradientStyle
  };

  const innerBorderStyle = {
    position: 'absolute',
    inset: '0',
    backgroundColor: 'black',
    borderRadius: '1.25rem',
    zIndex: -1,
    width: 'calc(100% - 2px)',
    height: 'calc(100% - 2px)',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)'
  };

  const textStyle = {
    position: 'relative',
    display: 'inline-block',
    color: 'transparent',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    zIndex: 2,
    ...gradientStyle
  };

  return (
    <div style={containerStyle} className={className}>
      {showBorder && (
        <div ref={borderRef} style={borderStyle}>
          <div style={innerBorderStyle}></div>
        </div>
      )}
      <div ref={textRef} style={textStyle}>
        {children}
      </div>
    </div>
  );
};

export default GradientText;
  
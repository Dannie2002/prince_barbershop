import { useEffect, useRef, useState, useMemo } from 'react';

const snapshotToStyle = (snapshot) => {
  if (!snapshot) return {};
  const { filter, opacity, y } = snapshot;
  const style = {};
  if (typeof filter !== 'undefined') style.filter = filter;
  if (typeof opacity !== 'undefined') style.opacity = opacity;
  if (typeof y !== 'undefined') style.transform = `translateY(${y}px)`;
  return style;
};

const BlurText = ({
  text = '',
  delay = 200,
  className = '',
  animateBy = 'words',
  direction = 'top',
  threshold = 0.1,
  rootMargin = '0px',
  animationFrom,
  animationTo,
  easing = t => t,
  onAnimationComplete,
  stepDuration = 0.35
}) => {
  const elements = animateBy === 'words' ? text.split(' ') : text.split('');
  const [inView, setInView] = useState(false);
  const ref = useRef(null);
  const timeoutsRef = useRef([]);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(ref.current);
        }
      },
      { threshold, rootMargin }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [threshold, rootMargin]);

  const defaultFrom = useMemo(
    () =>
      direction === 'top' ? { filter: 'blur(10px)', opacity: 0, y: -50 } : { filter: 'blur(10px)', opacity: 0, y: 50 },
    [direction]
  );

  const defaultTo = useMemo(
    () => [
      {
        filter: 'blur(5px)',
        opacity: 0.5,
        y: direction === 'top' ? 5 : -5
      },
      { filter: 'blur(0px)', opacity: 1, y: 0 }
    ],
    [direction]
  );

  const fromSnapshot = animationFrom ?? defaultFrom;
  const toSnapshots = animationTo ?? defaultTo;

  const stepCount = toSnapshots.length + 1;
  const perStepDurationMs = stepDuration * 1000;

  // Maintain per-element inline styles that we update step-by-step
  const [stylesByIndex, setStylesByIndex] = useState(() =>
    elements.map(() => ({ ...snapshotToStyle(fromSnapshot) }))
  );

  // Ensure styles array size tracks elements length
  useEffect(() => {
    setStylesByIndex(elements.map(() => ({ ...snapshotToStyle(fromSnapshot) })));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, animateBy]);

  // Kick off staggered multi-step transitions when inView
  useEffect(() => {
    // Clear any previous timeouts
    timeoutsRef.current.forEach(id => clearTimeout(id));
    timeoutsRef.current = [];

    if (!inView) return;

    const totalSteps = stepCount - 1; // number of toSnapshots
    const lastIndex = elements.length - 1;

    elements.forEach((_, index) => {
      // Initial delay for this element's first step
      const baseDelayMs = index * delay;

      // For each step, schedule a style update
      for (let step = 0; step <= totalSteps; step += 1) {
        const timeoutId = setTimeout(() => {
          const snapshot = step === 0 ? fromSnapshot : toSnapshots[step - 1];
          setStylesByIndex(prev => {
            const next = [...prev];
            next[index] = {
              ...snapshotToStyle(snapshot),
              transition: 'transform var(--stepDur) var(--easing), opacity var(--stepDur) var(--easing), filter var(--stepDur) var(--easing)'
            };
            return next;
          });

          // If this is the last element's last step, call completion after transition
          if (index === lastIndex && step === totalSteps && typeof onAnimationComplete === 'function') {
            const completeId = setTimeout(() => onAnimationComplete(), perStepDurationMs);
            timeoutsRef.current.push(completeId);
          }
        }, baseDelayMs + step * perStepDurationMs);
        timeoutsRef.current.push(timeoutId);
      }
    });

    return () => {
      timeoutsRef.current.forEach(id => clearTimeout(id));
      timeoutsRef.current = [];
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, fromSnapshot, toSnapshots, stepCount, delay, stepDuration]);

  return (
    <p
      ref={ref}
      className={`blur-text ${className} flex flex-wrap`}
      style={{
        // Provide CSS variables to control per-step duration and easing in a single place
        ['--stepDur']: `${stepDuration}s`,
        ['--easing']: typeof easing === 'string' ? easing : 'ease'
      }}
    >
      {elements.map((segment, index) => (
        <span
          className="inline-block will-change-[transform,filter,opacity]"
          key={index}
          style={stylesByIndex[index]}
        >
          {segment === ' ' ? '\u00A0' : segment}
          {animateBy === 'words' && index < elements.length - 1 && '\u00A0'}
        </span>
      ))}
    </p>
  );
};

export default BlurText;

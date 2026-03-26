import { useEffect, useRef, useState } from 'react';

/**
 * Custom hook for scroll-driven reveal animations.
 * Adds 'revealed' class when element enters viewport.
 */
export function useScrollReveal(threshold = 0.15) {
  const ref = useRef(null);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true);
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, isRevealed];
}

/**
 * Custom hook for animated number counting.
 * Counts from 0 to target when element is in view.
 */
export function useCountUp(target, duration = 2000) {
  const [count, setCount] = useState(0);
  const [ref, isRevealed] = useScrollReveal(0.3);

  useEffect(() => {
    if (!isRevealed) return;

    const startTime = performance.now();
    const isInteger = Number.isInteger(target);

    function animate(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = eased * target;
      
      setCount(isInteger ? Math.floor(current) : Math.round(current * 10) / 10);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    }

    requestAnimationFrame(animate);
  }, [isRevealed, target, duration]);

  return [ref, count];
}

/**
 * Mouse-tracking tilt effect for cards.
 * Returns handlers to apply to the card element.
 */
export function useTilt(intensity = 10) {
  const ref = useRef(null);

  const handleMouseMove = (e) => {
    const el = ref.current;
    if (!el) return;
    
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    
    const rotateX = (0.5 - y) * intensity;
    const rotateY = (x - 0.5) * intensity;
    
    el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const handleMouseLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
  };

  return { ref, onMouseMove: handleMouseMove, onMouseLeave: handleMouseLeave };
}

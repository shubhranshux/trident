import { useEffect, useRef, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export function useVisible(threshold = 0.1) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Optional: observer.unobserve(entry.target); to only animate once
        }
      },
      { threshold }
    );
    const node = ref.current;
    if (node) observer.observe(node);
    return () => {
      if (node) observer.unobserve(node);
    };
  }, [threshold]);

  return [ref, isVisible];
}

// Staggered Fade In Up
export function FadeInUp({ children, delay = 0, duration = 800, className = "" }) {
  const [ref, isVisible] = useVisible(0.1);
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(40px)",
        transition: `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

// Fade In Left or Right
export function SlideIn({ children, delay = 0, direction = "left", duration = 800, className = "" }) {
  const [ref, isVisible] = useVisible(0.1);
  const translateVal = direction === "left" ? "-50px" : "50px";
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateX(0)" : `translateX(${translateVal})`,
        transition: `all ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

// Scale Reveal (Good for images)
export function ScaleReveal({ children, delay = 0, duration = 1000, className = "" }) {
    const [ref, isVisible] = useVisible(0.1);
    return (
      <div
        ref={ref}
        className={className}
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "scale(1)" : "scale(0.95)",
          transition: `all ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
          overflow: "hidden" // Contains scaled children if necessary
        }}
      >
        {children}
      </div>
    );
}

// Keeping original Fade for simple opacities
export function Fade({ children, delay = 0, className = "" }) {
  const [ref, isVisible] = useVisible(0.1);
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transition: `opacity 800ms ease-out ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

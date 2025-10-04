import { useEffect, useState, useRef } from 'react';

interface StatCounterProps {
  end: number;
  label: string;
  suffix?: string;
  description: string;
}

export const StatCounter = ({ end, label, suffix = '', description }: StatCounterProps) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const increment = end / steps;
    const stepTime = duration / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isVisible, end]);

  return (
    <div
      ref={ref}
      className="text-center p-4 sm:p-6 rounded-lg bg-card border border-border hover:border-accent hover:shadow-lg transition-all duration-300 group cursor-help transform hover:scale-105"
      title={description}
    >
      <div className="text-3xl sm:text-4xl font-heading font-bold text-accent mb-2 group-hover:scale-110 transition-transform duration-300">
        {count}{suffix}
      </div>
      <div className="text-xs sm:text-sm text-muted-foreground leading-tight">{label}</div>
    </div>
  );
};

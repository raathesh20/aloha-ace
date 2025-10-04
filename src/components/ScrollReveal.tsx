import { ReactNode } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface ScrollRevealProps {
  children: ReactNode;
  animation?: 'fade-up' | 'fade-in' | 'scale-in' | 'slide-left' | 'slide-right';
  delay?: number;
  className?: string;
}

export const ScrollReveal = ({ 
  children, 
  animation = 'fade-up',
  delay = 0,
  className = ''
}: ScrollRevealProps) => {
  const { ref, isVisible } = useScrollAnimation();

  const animationClass = {
    'fade-up': 'animate-fade-up',
    'fade-in': 'animate-fade-in',
    'scale-in': 'animate-scale-in',
    'slide-left': 'animate-slide-left',
    'slide-right': 'animate-slide-right',
  }[animation];

  return (
    <div
      ref={ref}
      className={`${className} ${isVisible ? animationClass : 'opacity-0'}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

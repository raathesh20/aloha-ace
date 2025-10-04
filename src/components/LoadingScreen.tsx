import { useEffect, useState } from 'react';

export const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let progressInterval: NodeJS.Timeout;
    let timer: NodeJS.Timeout;

    // Progress animation
    progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          return 100;
        }
        return prev + 3;
      });
    }, 25);

    // Hide loading screen
    timer = setTimeout(() => {
      clearInterval(progressInterval);
      setIsLoading(false);
    }, 1500);

    return () => {
      clearTimeout(timer);
      clearInterval(progressInterval);
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 -left-40 w-80 h-80 bg-primary rounded-full mix-blend-multiply filter blur-3xl animate-float" />
        <div className="absolute top-0 -right-40 w-80 h-80 bg-accent rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-80 h-80 bg-primary/50 rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{ animationDelay: '4s' }} />
      </div>

      <div className="relative z-10 text-center px-4">
        {/* Animated dots loader */}
        <div className="relative mb-12">
          <div className="flex items-center justify-center gap-3">
            {[0, 1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="w-4 h-4 rounded-full bg-gradient-to-r from-primary to-accent"
                style={{
                  animation: `bounce 1.4s ease-in-out ${i * 0.16}s infinite`,
                }}
              />
            ))}
          </div>
        </div>
        
        {/* Progress bar */}
        <div className="w-72 max-w-full mx-auto mb-6">
          <div className="h-1.5 bg-muted/30 rounded-full overflow-hidden backdrop-blur-sm">
            <div 
              className="h-full bg-gradient-to-r from-primary via-accent to-primary rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Loading text */}
        <div className="space-y-2">
          <p className="text-lg font-medium text-foreground animate-pulse">
            {progress < 30 && 'Initializing...'}
            {progress >= 30 && progress < 60 && 'Loading portfolio...'}
            {progress >= 60 && progress < 90 && 'Preparing experience...'}
            {progress >= 90 && 'Almost there...'}
          </p>
          <p className="text-sm text-muted-foreground font-mono">{progress}%</p>
        </div>
      </div>
    </div>
  );
};

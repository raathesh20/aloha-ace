import { useEffect, useRef } from 'react';
import { X, ExternalLink, Download, Mail, ChevronLeft, ChevronRight } from 'lucide-react';
import { WordPressProject } from '@/data/wordpressProjects';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useState } from 'react';
import { Link } from 'react-router-dom';

interface WordPressProjectModalProps {
  project: WordPressProject;
  onClose: () => void;
  returnFocusRef?: HTMLElement | null;
}

export const WordPressProjectModal = ({ project, onClose, returnFocusRef }: WordPressProjectModalProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const modalContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Focus close button on mount
    closeButtonRef.current?.focus();

    // Prevent body scroll
    document.body.style.overflow = 'hidden';

    // Announce modal open to screen readers
    const announcement = document.createElement('div');
    announcement.setAttribute('role', 'status');
    announcement.setAttribute('aria-live', 'polite');
    announcement.className = 'sr-only';
    announcement.textContent = `Opening project — ${project.title} case study`;
    document.body.appendChild(announcement);

    return () => {
      document.body.style.overflow = '';
      announcement.remove();
      // Return focus to original element
      returnFocusRef?.focus();
    };
  }, [project.title, returnFocusRef]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
      // Arrow keys for image navigation when modal content is focused
      if (e.key === 'ArrowLeft' && currentImageIndex > 0) {
        setCurrentImageIndex(prev => prev - 1);
        announceSlide(currentImageIndex - 1);
      }
      if (e.key === 'ArrowRight' && currentImageIndex < project.images.length - 1) {
        setCurrentImageIndex(prev => prev + 1);
        announceSlide(currentImageIndex + 1);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onClose, currentImageIndex, project.images.length]);

  const announceSlide = (index: number) => {
    const announcement = document.createElement('div');
    announcement.setAttribute('role', 'status');
    announcement.setAttribute('aria-live', 'polite');
    announcement.className = 'sr-only';
    announcement.textContent = `Slide ${index + 1} of ${project.images.length}`;
    document.body.appendChild(announcement);
    setTimeout(() => announcement.remove(), 1000);
  };

  const handlePrevImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(prev => prev - 1);
      announceSlide(currentImageIndex - 1);
    }
  };

  const handleNextImage = () => {
    if (currentImageIndex < project.images.length - 1) {
      setCurrentImageIndex(prev => prev + 1);
      announceSlide(currentImageIndex + 1);
    }
  };

  const handleContactClick = () => {
    onClose();
    // Navigate to contact with pre-filled subject
    const contactUrl = `/contact?subject=${encodeURIComponent(`Inquiry about ${project.title}`)}`;
    window.location.href = contactUrl;
  };

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm animate-fade-in"
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        ref={modalContentRef}
        className="relative w-full max-w-7xl max-h-[90vh] mx-4 bg-background rounded-2xl shadow-2xl overflow-hidden animate-scale-in"
        style={{ animationDuration: '220ms' }}
      >
        {/* Close Button - Top Left */}
        <button
          ref={closeButtonRef}
          onClick={onClose}
          aria-label="Close project modal"
          className="absolute top-4 left-4 z-10 p-2 rounded-lg bg-background/80 backdrop-blur hover:bg-muted transition-colors group"
        >
          <X className="h-5 w-5" />
          <span className="absolute left-full ml-2 px-2 py-1 bg-popover text-popover-foreground text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
            Close
          </span>
        </button>

        {/* Modal Content */}
        <div className="flex flex-col md:flex-row h-full max-h-[90vh]">
          {/* Left Pane - Content (60%) */}
          <div className="w-full md:w-[60%] p-8 md:p-12 overflow-y-auto">
            <div className="space-y-6 animate-fade-in" style={{ animationDelay: '100ms' }}>
              {/* Title */}
              <div>
                <h2 id="modal-title" className="text-3xl md:text-4xl font-heading font-bold mb-2">
                  {project.title}
                </h2>
                <p className="text-lg text-muted-foreground">{project.subtitle}</p>
              </div>

              {/* Role */}
              <div>
                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-1">
                  Role
                </h3>
                <p className="text-base">{project.role}</p>
              </div>

              {/* Tech Stack */}
              <div>
                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Overview */}
              <div>
                <h3 className="text-lg font-heading font-semibold mb-2">Overview</h3>
                <p className="text-foreground/80 leading-relaxed">{project.overview}</p>
              </div>

              {/* Responsibilities */}
              <div>
                <h3 className="text-lg font-heading font-semibold mb-2">What I Did</h3>
                <ul className="space-y-2">
                  {project.responsibilities.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-accent mt-1 flex-shrink-0">•</span>
                      <span className="text-foreground/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Highlights */}
              <div>
                <h3 className="text-lg font-heading font-semibold mb-2">Highlights & Impact</h3>
                <ul className="space-y-2">
                  {project.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-primary mt-1 flex-shrink-0">✓</span>
                      <span className="text-foreground/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                {project.liveUrl && (
                  <Button asChild variant="default" size="lg">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Live
                    </a>
                  </Button>
                )}
                {project.caseStudyUrl && (
                  <Button asChild variant="outline" size="lg">
                    <a href={project.caseStudyUrl} download>
                      <Download className="mr-2 h-4 w-4" />
                      Download Case Study
                    </a>
                  </Button>
                )}
                <Button variant="outline" size="lg" onClick={handleContactClick}>
                  <Mail className="mr-2 h-4 w-4" />
                  Contact
                </Button>
              </div>
            </div>
          </div>

          {/* Right Pane - Image Carousel (40%) */}
          <div className="w-full md:w-[40%] bg-muted/30 relative flex flex-col">
            {/* Image Display */}
            <div className="flex-1 relative overflow-hidden">
              <img
                src={project.images[currentImageIndex]}
                alt={`${project.title} screenshot ${currentImageIndex + 1} of ${project.images.length}`}
                className="w-full h-full object-contain"
                loading="lazy"
              />
            </div>

            {/* Carousel Controls */}
            <div className="absolute inset-0 flex items-center justify-between p-4 pointer-events-none">
              <button
                onClick={handlePrevImage}
                disabled={currentImageIndex === 0}
                aria-label="Previous image"
                className={`pointer-events-auto p-2 rounded-full bg-background/80 backdrop-blur hover:bg-background transition-colors ${
                  currentImageIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={handleNextImage}
                disabled={currentImageIndex === project.images.length - 1}
                aria-label="Next image"
                className={`pointer-events-auto p-2 rounded-full bg-background/80 backdrop-blur hover:bg-background transition-colors ${
                  currentImageIndex === project.images.length - 1 ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>

            {/* Dots Indicator */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 pointer-events-none">
              {project.images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setCurrentImageIndex(idx);
                    announceSlide(idx);
                  }}
                  aria-label={`Go to image ${idx + 1}`}
                  className={`pointer-events-auto w-2 h-2 rounded-full transition-all ${
                    idx === currentImageIndex
                      ? 'bg-primary w-6'
                      : 'bg-muted-foreground/50 hover:bg-muted-foreground'
                  }`}
                />
              ))}
            </div>

            {/* Image Counter */}
            <div className="absolute top-4 right-4 px-3 py-1 bg-background/80 backdrop-blur rounded-full text-sm">
              {currentImageIndex + 1} / {project.images.length}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

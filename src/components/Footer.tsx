import { Link } from 'react-router-dom';
import { Linkedin, Github, Music } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border mt-12 sm:mt-16 lg:mt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-center">
          {/* Left: Logo & Tagline */}
          <div className="text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-heading font-bold text-gradient mb-2">TK</h3>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Building web products and AI systems from prototype to impact
            </p>
          </div>

          {/* Center: Quick Links */}
          <nav className="flex flex-wrap gap-3 sm:gap-4 justify-center">
            <Link to="/" className="text-xs sm:text-sm text-muted-foreground hover:text-accent transition-all duration-300 hover:scale-105">
              Home
            </Link>
            <Link to="/about" className="text-xs sm:text-sm text-muted-foreground hover:text-accent transition-all duration-300 hover:scale-105">
              About
            </Link>
            <Link to="/projects" className="text-xs sm:text-sm text-muted-foreground hover:text-accent transition-all duration-300 hover:scale-105">
              Projects
            </Link>
            <Link to="/contact" className="text-xs sm:text-sm text-muted-foreground hover:text-accent transition-all duration-300 hover:scale-105">
              Contact
            </Link>
          </nav>

          {/* Right: Social Icons */}
          <div className="flex gap-3 sm:gap-4 justify-center md:justify-end">
            <a
              href="https://www.linkedin.com/in/tharun-kumar-developer/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-secondary hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-110 hover:rotate-6"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
            </a>
            <a
              href="https://github.com/tharunkumar"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-secondary hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-110 hover:rotate-6"
              aria-label="GitHub"
            >
              <Github className="h-4 w-4 sm:h-5 sm:w-5" />
            </a>
            <a
              href="https://open.spotify.com/show/justrelaxmachi"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-secondary hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-110 hover:rotate-6"
              aria-label="Podcast"
            >
              <Music className="h-4 w-4 sm:h-5 sm:w-5" />
            </a>
          </div>
        </div>

        <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-border text-center text-xs sm:text-sm text-muted-foreground">
          <p>© {currentYear} Tharun Kumar C. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

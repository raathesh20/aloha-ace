import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  slug: string;
  description: string;
  role: string;
  tech: string[];
  highlights: string[];
  image: string;
  category: string[];
}

export const ProjectCard = ({
  title,
  slug,
  description,
  role,
  tech,
  highlights,
  image,
}: ProjectCardProps) => {
  return (
    <Card className="overflow-hidden group h-full flex flex-col">
      <div className="relative h-40 sm:h-48 overflow-hidden bg-muted">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="p-4 sm:p-6 flex-1 flex flex-col">
        <div className="mb-3 flex-1">
          <h3 className="text-lg sm:text-xl font-heading font-bold mb-2 group-hover:text-accent transition-colors duration-300">
            {title}
          </h3>
          <p className="text-xs sm:text-sm text-muted-foreground mb-2">{role}</p>
          <p className="text-xs sm:text-sm text-foreground/80 leading-relaxed">{description}</p>
        </div>

        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
          {tech.slice(0, 4).map((t) => (
            <Badge key={t} variant="secondary" className="text-xs">
              {t}
            </Badge>
          ))}
          {tech.length > 4 && (
            <Badge variant="secondary" className="text-xs">
              +{tech.length - 4}
            </Badge>
          )}
        </div>

        <ul className="space-y-1 mb-3 sm:mb-4 text-xs sm:text-sm text-muted-foreground">
          {highlights.slice(0, 3).map((highlight, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <span className="text-accent mt-1 flex-shrink-0">•</span>
              <span>{highlight}</span>
            </li>
          ))}
        </ul>

        <Link to={`/projects/${slug}`} className="mt-auto">
          <Button variant="outline" className="w-full group-hover:bg-accent group-hover:text-accent-foreground group-hover:border-accent transition-all duration-300">
            View Project
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </Card>
  );
};

import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { WordPressProject } from '@/data/wordpressProjects';

interface WordPressProjectCardProps {
  project: WordPressProject;
  onClick: () => void;
  onKeyDown: (e: React.KeyboardEvent) => void;
}

export const WordPressProjectCard = ({ project, onClick, onKeyDown }: WordPressProjectCardProps) => {
  return (
    <Card
      className="overflow-hidden group h-full flex flex-col cursor-pointer hover:shadow-lg transition-all duration-300"
      onClick={onClick}
      onKeyDown={onKeyDown}
      tabIndex={0}
      role="button"
      aria-label={`View ${project.title} project details`}
    >
      <div className="relative h-64 sm:h-72 overflow-hidden bg-muted">
        <img
          src={project.images[0]}
          alt={`${project.title} preview`}
          className="w-full h-full object-contain object-center bg-background transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      
      <div className="p-4 sm:p-6 flex-1 flex flex-col">
        <div className="mb-3 flex-1">
          <h3 className="text-lg sm:text-xl font-heading font-bold mb-2 group-hover:text-accent transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-xs sm:text-sm text-muted-foreground mb-2">{project.role}</p>
          <p className="text-xs sm:text-sm text-foreground/80 leading-relaxed">{project.subtitle}</p>
        </div>

        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
          {project.tech.slice(0, 4).map((t) => (
            <Badge key={t} variant="secondary" className="text-xs">
              {t}
            </Badge>
          ))}
          {project.tech.length > 4 && (
            <Badge variant="secondary" className="text-xs">
              +{project.tech.length - 4}
            </Badge>
          )}
        </div>

        <ul className="space-y-1 text-xs sm:text-sm text-muted-foreground">
          {project.highlights.slice(0, 2).map((highlight, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <span className="text-accent mt-1 flex-shrink-0">•</span>
              <span>{highlight}</span>
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-4">
          <span className="text-sm text-primary hover:underline">
            View Full Case Study →
          </span>
        </div>
      </div>
    </Card>
  );
};

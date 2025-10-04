import { useState } from 'react';
import { ProjectCard } from '@/components/ProjectCard';
import { Button } from '@/components/ui/button';
import talenttrackMock from '@/assets/talenttrack-pushup-pose.png';
import venmathiMock from '@/assets/venmathi-indicraft-home.png';
import indicraftMock from '@/assets/indicraft-mock.jpg';
import aeroponicsMock from '@/assets/aeroponics-mock.jpg';

const projects = [
  {
    title: 'TalentTrack',
    slug: 'talenttrack',
    description: 'Democratizing athlete evaluation using only a smartphone camera.',
    role: 'Technical Lead — Flutter + CV pipeline owner',
    tech: ['Flutter', 'MediaPipe', 'OpenCV', 'Firebase', 'Node.js'],
    highlights: [
      'On-device pose estimation for privacy & speed',
      'Lighting/framing checks & anomaly detection to ensure fair evaluation',
      'Para-athlete adaptive protocols & gamified progression (100 badges)',
    ],
    image: talenttrackMock,
    category: ['All', 'AI', 'Mobile'],
  },
  {
    title: 'Venmathi',
    slug: 'venmathi',
    description: 'Fine-tuned LLaMA assistant delivering Tanglish responses for customer support.',
    role: 'Full pipeline — dataset generation, fine-tuning, quantization, Ollama hosting',
    tech: ['LLaMA 3', 'Python', 'Ollama', 'React', 'Netlify'],
    highlights: [
      'Custom Tanglish (Tamil + English) dataset generation',
      'Model quantization for edge deployment',
      'Integrated into Indicraft as local-language helper',
    ],
    image: venmathiMock,
    category: ['All', 'AI', 'Web'],
  },
  {
    title: 'Indicraft',
    slug: 'indicraft',
    description: 'Marketplace linking Indian artisans with global diaspora, verified products & standardized India Post shipping.',
    role: 'Platform contributor — frontend, onboarding flows, recommendation prototype',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'India Post API'],
    highlights: [
      'Verified artisan onboarding & product verification',
      'AI recommendation engine for festival and region-based suggestions',
      'Fair-pay model for artisans, SDG-aligned (17, 8, 12)',
    ],
    image: indicraftMock,
    category: ['All', 'Web', 'Freelance'],
  },
  {
    title: 'Vertical Tower Farming',
    slug: 'aeroponics',
    description: 'Patent-published vertical aeroponics system with IoT monitoring; IEEE SIGHT funding $3,300.',
    role: 'Lead Researcher — IoT integration & patent filing',
    tech: ['IoT', 'Arduino', 'Sensors', 'Cloud Platform', 'Aeroponics'],
    highlights: [
      'Patent published for vertical farming system',
      'IEEE SIGHT funding: $3,300',
      'Sustainable agriculture solution for urban environments',
    ],
    image: aeroponicsMock,
    category: ['All', 'Research', 'IoT'],
  },
];

const filters = ['All', 'AI', 'Web', 'Research', 'Freelance', 'Mobile', 'IoT'];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = projects.filter(project => 
    project.category.includes(activeFilter)
  );

  return (
    <div className="min-h-screen pt-20 pb-16">
      {/* Header */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-heading font-bold mb-6 animate-fade-in">
              <span className="text-gradient">Projects</span>
            </h1>
            <p className="text-xl text-muted-foreground animate-slide-up">
              Selected works — clickable case studies that show problem, approach, architecture, and measurable outcomes
            </p>
          </div>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="pb-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={activeFilter === filter ? 'default' : 'outline'}
                onClick={() => setActiveFilter(filter)}
                className="transition-all"
              >
                {filter}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section>
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {filteredProjects.map((project, idx) => (
              <div 
                key={project.slug} 
                className="animate-fade-in"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <ProjectCard {...project} />
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-muted-foreground">
                No projects found in this category
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

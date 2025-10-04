import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    year: '2025',
    title: 'TalentTrack',
    role: 'Technical Lead',
    type: 'Project',
    description: 'Led development of smartphone-based athlete assessment app for Smart India Hackathon.',
    tech: ['Flutter', 'MediaPipe', 'OpenCV', 'Firebase'],
    achievements: [
      'Architected on-device pose estimation pipeline',
      'Implemented gamification system with 100+ badges',
      'Built para-athlete adaptive protocols',
    ],
  },
  {
    year: '2025',
    title: 'Infosys Springboard Virtual Internship',
    role: 'AI Intern (Shortlisted)',
    type: 'Internship',
    description: 'Selected for competitive virtual internship program focused on AI and machine learning applications.',
    tech: ['Python', 'ML', 'AI'],
    achievements: [
      'Shortlisted from competitive applicant pool',
      'Completed advanced AI coursework',
    ],
  },
  {
    year: '2024',
    title: 'Rudhra Info Solutions',
    role: 'Web Developer Intern',
    type: 'Internship',
    description: 'Developed FoodHopper, a food delivery platform with real-time order tracking.',
    tech: ['React', 'Node.js', 'MongoDB'],
    achievements: [
      'Built responsive frontend with React',
      'Integrated real-time order tracking',
      'Delivered production-ready platform',
    ],
  },
  {
    year: '2024',
    title: 'LocalBees',
    role: 'Web Developer',
    type: 'Freelance',
    description: 'Created custom WordPress solutions for local business clients.',
    tech: ['WordPress', 'PHP', 'JavaScript'],
    achievements: [
      'Delivered 5+ client websites',
      'Custom theme development',
      'SEO optimization and performance tuning',
    ],
  },
  {
    year: '2023-Present',
    title: 'Freelance Web Development',
    role: 'Full Stack Developer',
    type: 'Freelance',
    description: 'Building custom web solutions for clients including MitrahOrganics e-commerce platform.',
    tech: ['WordPress', 'WooCommerce', 'React', 'Node.js'],
    achievements: [
      'MitrahOrganics.com e-commerce build',
      'Custom WooCommerce integrations',
      'Client handover and training',
    ],
  },
  {
    year: '2023-Present',
    title: 'IEEE TEMS',
    role: 'Webmaster',
    type: 'Community',
    description: 'Managing and redesigning the IEEE TEMS chapter website.',
    tech: ['Web Design', 'Content Management'],
    achievements: [
      'Complete website redesign',
      'Improved member engagement',
      'Event management system',
    ],
  },
];

export default function Experience() {
  return (
    <div className="min-h-screen pt-20 pb-16">
      {/* Header */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-heading font-bold mb-6 animate-fade-in">
              <span className="text-gradient">Experience & Internships</span>
            </h1>
            <p className="text-xl text-muted-foreground animate-slide-up">
              Building products, collaborating with teams, and delivering measurable impact
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {experiences.map((exp, idx) => (
                <Card 
                  key={idx}
                  className="p-8 hover-lift relative overflow-hidden"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-0 top-8 w-1 h-full bg-gradient-to-b from-accent to-transparent" />
                  
                  <div className="pl-6">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <Briefcase className="h-5 w-5 text-accent flex-shrink-0" />
                          <h3 className="text-2xl font-heading font-bold">{exp.title}</h3>
                        </div>
                        <p className="text-lg text-muted-foreground mb-2">{exp.role}</p>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <Badge variant="outline" className="whitespace-nowrap">
                          <Calendar className="mr-1 h-3 w-3" />
                          {exp.year}
                        </Badge>
                        <Badge>{exp.type}</Badge>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-4">{exp.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {exp.tech.map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="space-y-2">
                      <p className="text-sm font-medium">Key Achievements:</p>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="text-accent mt-1">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

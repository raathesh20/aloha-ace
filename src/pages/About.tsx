import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Code, Brain, Database, Wrench, GraduationCap, Award } from 'lucide-react';
import aboutBg from '@/assets/about-bg.jpg';

const skills = {
  Frontend: ['React', 'Next.js', 'Flutter', 'Tailwind CSS', 'TypeScript', 'HTML/CSS'],
  Backend: ['Node.js', 'Python', 'PostgreSQL', 'Firebase', 'Express'],
  'AI & CV': ['MediaPipe', 'OpenCV', 'LLaMA', 'TensorFlow', 'Ollama', 'Computer Vision'],
  Tools: ['Git', 'Docker', 'Netlify', 'Figma', 'WordPress', 'VS Code'],
};

const certifications = [
  'Infosys Springboard AI Virtual Internship (Shortlisted)',
  'AI, Business, and the Future of Work (Lund University, Coursera)',
  'WordPress Development (LinkedIn Learning)',
  'Generative AI Learning Paths (Microsoft LinkedIn)',
  '19+ Infosys Springboard Certifications',
];

export default function About() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src={aboutBg} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-background via-transparent to-background" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-heading font-bold mb-6 animate-fade-in">
              <span className="text-gradient">About — Who I am & how I work</span>
            </h1>
            <p className="text-xl text-muted-foreground animate-slide-up">
              Building products, publishing research, and teaching the next generation
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <Card className="p-8 hover-lift">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-lg bg-accent/10">
                  <Code className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h2 className="text-2xl font-heading font-bold mb-3">Origins</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    I learned HTML, CSS and WordPress in school, delivered multiple school projects and 
                    developed an early love for building web products. That foundation sparked a journey 
                    from simple websites to complex full-stack applications and AI systems.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 hover-lift">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-lg bg-accent/10">
                  <Brain className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h2 className="text-2xl font-heading font-bold mb-3">Current Focus</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Now I build cross-platform apps (Flutter), web apps (React, Next.js), and applied AI 
                    systems (MediaPipe/OpenCV, LLMs). I publish research and collaborate with IEEE and 
                    college research groups. My work spans from sports tech (TalentTrack) to sustainable 
                    agriculture (vertical farming patent) to cultural preservation (Indicraft marketplace).
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 hover-lift">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-lg bg-accent/10">
                  <GraduationCap className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h2 className="text-2xl font-heading font-bold mb-3">Teaching & Community</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    I run online tutoring sessions, teaching HTML/CSS/WordPress and practical 
                    business-analytics workshops to learners in India and abroad. I'm also the IEEE TEMS 
                    webmaster and host the podcast "Just Relax Machi" where I discuss tech, career, and 
                    life with fellow developers and students.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-heading font-bold mb-8 text-center">Technical Skills</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {Object.entries(skills).map(([category, skillList]) => {
                const icons = {
                  Frontend: Code,
                  Backend: Database,
                  'AI & CV': Brain,
                  Tools: Wrench,
                };
                const Icon = icons[category as keyof typeof icons];
                
                return (
                  <Card key={category} className="p-6 hover-lift">
                    <div className="flex items-center gap-3 mb-4">
                      <Icon className="h-5 w-5 text-accent" />
                      <h3 className="text-lg font-heading font-bold">{category}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skillList.map((skill) => (
                        <Badge key={skill} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-heading font-bold mb-8 text-center">
              Education & Certifications
            </h2>
            
            <Card className="p-8 mb-6 hover-lift">
              <div className="flex items-start gap-4">
                <GraduationCap className="h-8 w-8 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-heading font-bold mb-2">
                    B.Tech — Computer Science & Business Systems
                  </h3>
                  <p className="text-muted-foreground">Sri Sairam Engineering College</p>
                </div>
              </div>
            </Card>

            <Card className="p-8 hover-lift">
              <div className="flex items-start gap-4 mb-4">
                <Award className="h-8 w-8 text-accent flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h3 className="text-xl font-heading font-bold mb-4">Certifications</h3>
                  <ul className="space-y-2">
                    {certifications.map((cert, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                        <span className="text-accent mt-1">•</span>
                        <span>{cert}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-heading font-bold mb-4">Want to work together?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              I'm open to internships, freelance projects, and research collaborations
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/projects">
                <Button size="lg">View My Work</Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline">Get in Touch</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

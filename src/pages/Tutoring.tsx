import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Clock, Users, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const offerings = [
  {
    title: 'Beginner HTML & CSS',
    sessions: '6 sessions',
    duration: '1 hour each',
    level: 'Beginner',
    topics: [
      'HTML structure and semantic elements',
      'CSS styling and layouts',
      'Responsive design basics',
      'Building your first website',
      'Best practices and debugging',
    ],
  },
  {
    title: 'WordPress Build & Deploy',
    sessions: '5 sessions',
    duration: '1.5 hours each',
    level: 'Beginner to Intermediate',
    topics: [
      'WordPress installation and setup',
      'Theme customization',
      'Plugin integration',
      'Content management',
      'Deployment and maintenance',
    ],
  },
  {
    title: 'Intro to Computer Vision',
    sessions: '3 sessions',
    duration: '2 hours each',
    level: 'Intermediate',
    topics: [
      'OpenCV fundamentals',
      'Image processing techniques',
      'Basic pose detection',
      'Real-world project walkthrough',
    ],
  },
];

export default function Tutoring() {
  return (
    <div className="min-h-screen pt-20 pb-16">
      {/* Header */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-heading font-bold mb-6 animate-fade-in">
              <span className="text-gradient">Online Tutoring</span>
            </h1>
            <p className="text-xl text-muted-foreground animate-slide-up">
              HTML, CSS, WordPress, and product-focused web classes
            </p>
          </div>
        </div>
      </section>

      {/* Why Learn With Me */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6 mb-16">
              <Card className="p-6 text-center hover-lift">
                <div className="inline-flex p-3 rounded-lg bg-accent/10 mb-4">
                  <Users className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-lg font-heading font-bold mb-2">Real-World Experience</h3>
                <p className="text-sm text-muted-foreground">
                  Learn from someone actively building production apps and AI systems
                </p>
              </Card>

              <Card className="p-6 text-center hover-lift">
                <div className="inline-flex p-3 rounded-lg bg-accent/10 mb-4">
                  <BookOpen className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-lg font-heading font-bold mb-2">Project-Based Learning</h3>
                <p className="text-sm text-muted-foreground">
                  Build actual projects you can showcase in your portfolio
                </p>
              </Card>

              <Card className="p-6 text-center hover-lift">
                <div className="inline-flex p-3 rounded-lg bg-accent/10 mb-4">
                  <Clock className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-lg font-heading font-bold mb-2">Flexible Schedule</h3>
                <p className="text-sm text-muted-foreground">
                  Sessions tailored to your timezone and availability
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Course Offerings */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-heading font-bold mb-8 text-center">Course Offerings</h2>
            <div className="space-y-6">
              {offerings.map((course, idx) => (
                <Card 
                  key={idx} 
                  className="p-8 hover-lift"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl font-heading font-bold mb-2">{course.title}</h3>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline">{course.sessions}</Badge>
                        <Badge variant="outline">{course.duration}</Badge>
                        <Badge>{course.level}</Badge>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <p className="text-sm font-medium mb-3">What you'll learn:</p>
                    <ul className="space-y-2">
                      {course.topics.map((topic, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing & CTA */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="p-8 text-center bg-gradient-to-br from-accent/10 to-primary/10 border-accent/50">
              <h2 className="text-3xl font-heading font-bold mb-4">Ready to Start Learning?</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Contact me to discuss rates, schedule, and customize a learning plan that fits your goals
              </p>
              <Link to="/contact">
                <Button size="lg" className="shadow-accent">
                  Book a Session
                </Button>
              </Link>
            </Card>
          </div>
        </div>
      </section>

      {/* Student Testimonials (Placeholder) */}
      <section>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-heading font-bold mb-8 text-center">What Students Say</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 hover-lift">
                <p className="text-muted-foreground mb-4 italic">
                  "Tharun's teaching style is practical and easy to follow. I built my first website 
                  in just 3 weeks!"
                </p>
                <p className="font-medium">— Student from India</p>
              </Card>
              <Card className="p-6 hover-lift">
                <p className="text-muted-foreground mb-4 italic">
                  "Great patience and real-world examples. Highly recommend for anyone starting with 
                  web development."
                </p>
                <p className="font-medium">— Student from Abroad</p>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { FileText, Award, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const publications = [
  {
    title: 'Optimizing the Quantum Circuit of Quantum K-Nearest Neighbors (QKNN) Using Quantum Natural Gradient Descent',
    conference: 'ICCTDC 2025',
    summary: 'Research on optimizing quantum machine learning circuits using gradient descent techniques.',
    year: '2025',
  },
  {
    title: 'Optimizing QSVM Circuits using QNGD & WOA',
    conference: 'INCET 2025',
    summary: 'Novel approach to quantum support vector machine optimization combining gradient descent and whale optimization.',
    year: '2025',
  },
  {
    title: 'HOFL-CS-FDA for Cloud Load Balancing',
    conference: 'ACOIT 2024',
    summary: 'Hybrid optimization framework for efficient cloud resource allocation and load distribution.',
    year: '2024',
  },
  {
    title: 'Hybrid Fuzzy C-Means + ACO for FANETs',
    conference: 'ICACRS 2024',
    summary: 'Clustering algorithm combining fuzzy logic and ant colony optimization for flying ad-hoc networks.',
    year: '2024',
  },
];

export default function Research() {
  return (
    <div className="min-h-screen pt-20 pb-16">
      {/* Header */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-heading font-bold mb-6 animate-fade-in">
              <span className="text-gradient">Research & Patents</span>
            </h1>
            <p className="text-xl text-muted-foreground animate-slide-up">
              Applied research at the intersection of optimization, quantum ML, and sustainable agtech
            </p>
          </div>
        </div>
      </section>

      {/* Patent */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-heading font-bold mb-8 text-center">Patent</h2>
            <Card className="p-8 hover-lift border-accent/50">
              <div className="flex items-start gap-6">
                <div className="p-4 rounded-lg bg-accent/10 flex-shrink-0">
                  <Award className="h-8 w-8 text-accent" />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl font-heading font-bold mb-2">
                        Vertical Tower Farming using Aeroponics
                      </h3>
                      <Badge className="mb-2">Patent Published</Badge>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    A patent-published vertical aeroponics system with IoT monitoring for sustainable 
                    urban agriculture. The system enables efficient plant growth in vertical towers 
                    with automated nutrient delivery, climate control, and real-time monitoring.
                  </p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-2">
                      <Award className="h-4 w-4 text-accent" />
                      IEEE SIGHT Funding: $3,300
                    </span>
                  </div>
                  <Link to="/projects/aeroponics">
                    <Button variant="outline">
                      View Full Details
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Publications */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-heading font-bold mb-8 text-center">Publications</h2>
            <div className="space-y-6">
              {publications.map((pub, idx) => (
                <Card 
                  key={idx} 
                  className="p-6 hover-lift"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-secondary flex-shrink-0">
                      <FileText className="h-6 w-6 text-accent" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <h3 className="text-lg font-heading font-bold">
                          {pub.title}
                        </h3>
                        <Badge variant="outline">{pub.year}</Badge>
                      </div>
                      <p className="text-sm text-accent mb-2">{pub.conference}</p>
                      <p className="text-muted-foreground text-sm mb-4">
                        {pub.summary}
                      </p>
                      <Button variant="ghost" size="sm" disabled>
                        <FileText className="mr-2 h-4 w-4" />
                        Download Paper (Coming Soon)
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-heading font-bold mb-4">Interested in collaboration?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Open to research opportunities, academic partnerships, and joint publications
            </p>
            <Link to="/contact">
              <Button size="lg">Get in Touch</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

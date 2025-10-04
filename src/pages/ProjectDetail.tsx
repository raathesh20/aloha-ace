import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { ImageGallery } from '@/components/ImageGallery';
import { PDFViewer } from '@/components/PDFViewer';
import { VideoGallery } from '@/components/VideoGallery';
import talenttrackMock from '@/assets/talenttrack-pushup-pose.png';
import talenttrackRoleSelection from '@/assets/talenttrack-role-selection.png';
import talenttrackAssessment from '@/assets/talenttrack-assessment.png';
import talenttrackPosePushup from '@/assets/talenttrack-pose-pushup.png';
import talenttrackPosePullup from '@/assets/talenttrack-pose-pullup.png';
import talenttrackChallenges from '@/assets/talenttrack-challenges.png';
import talenttrackMobileApp from '@/assets/talenttrack-mobile-app.jpeg';
import talenttrackSitupDemo from '@/assets/talenttrack-situp-demo.png';
import talenttrackVerticalJump from '@/assets/talenttrack-vertical-jump.png';
import talenttrackVerticalJump2 from '@/assets/talenttrack-vertical-jump-2.png';
import talenttrackPullupDemo from '@/assets/talenttrack-pullup-demo.png';
import talenttrackShuttleRun from '@/assets/talenttrack-shuttle-run.png';
import talenttrackSitupOutdoor from '@/assets/talenttrack-situp-outdoor.png';
import talenttrackMobileUI from '@/assets/talenttrack-mobile-ui.png';
import talenttrackPushupDemo from '@/assets/talenttrack-pushup-demo.png';
import venmathiMock from '@/assets/venmathi-indicraft-home.png';
import venmathiWelcome from '@/assets/venmathi-welcome.png';
import venmathiChatDemo from '@/assets/venmathi-chat-demo.png';
import venmathiChatTanglish from '@/assets/venmathi-chat-tanglish.png';
import indicraftMock from '@/assets/indicraft-mock.jpg';
import aeroponicsMock from '@/assets/aeroponics-mock.jpg';

const projectDetails: Record<string, any> = {
  talenttrack: {
    title: 'TalentTrack — Smartphone Athlete Assessment',
    image: talenttrackMock,
    gallery: [
      { src: talenttrackRoleSelection, caption: 'Web UI - Role selection for Student, Staff, and Admin', orientation: 'horizontal' },
      { src: talenttrackAssessment, caption: 'Assessment interface with activity selection', orientation: 'horizontal' },
      { src: talenttrackPosePushup, caption: 'Real-time pose estimation during push-up assessment', orientation: 'vertical' },
      { src: talenttrackPosePullup, caption: 'Pose tracking for pull-up exercises', orientation: 'vertical' },
      { src: talenttrackChallenges, caption: 'Gamified challenges and achievement system', orientation: 'horizontal' },
      { src: talenttrackMobileApp, caption: 'Mobile app interface with training programs', orientation: 'vertical' },
      { src: talenttrackSitupDemo, caption: 'Real-time pose tracking during sit-up assessment', orientation: 'horizontal' },
      { src: talenttrackVerticalJump, caption: 'Vertical jump assessment with height tracking', orientation: 'vertical' },
      { src: talenttrackVerticalJump2, caption: 'Vertical jump pose estimation in outdoor setting', orientation: 'vertical' },
      { src: talenttrackPullupDemo, caption: 'Pull-up assessment with elbow angle tracking', orientation: 'horizontal' },
      { src: talenttrackShuttleRun, caption: 'Shuttle run distance and speed tracking', orientation: 'horizontal' },
      { src: talenttrackSitupOutdoor, caption: 'Outdoor sit-up assessment with pose detection', orientation: 'horizontal' },
      { src: talenttrackMobileUI, caption: 'Mobile app workout interface', orientation: 'vertical' },
    ],
    videos: [
      { youtubeId: 'vnV_rCkc0LU', title: 'TalentTrack Demo Overview', thumbnail: talenttrackPushupDemo },
      { src: '/videos/pushup.mp4', title: 'Push-up Assessment Demo' },
      { src: '/videos/pullup.mp4', title: 'Pull-up Assessment Demo' },
      { src: '/videos/situp.mp4', title: 'Sit-up Assessment Demo' },
      { src: '/videos/broadjump.mp4', title: 'Broad Jump Assessment Demo' },
      { src: '/videos/verticaljump.mp4', title: 'Vertical Jump Assessment Demo' },
      { src: '/videos/shuttlerun.mp4', title: 'Shuttle Run Assessment Demo' },
      { src: '/videos/sit_reach.mp4', title: 'Sit & Reach Assessment Demo' },
    ],
    pdfUrl: '/documents/talenttrack-presentation.pdf',
    summary: 'TalentTrack is an AI-first mobile app that democratizes athletic assessment using only a smartphone camera. Built for Smart India Hackathon 2025, it provides fair, accessible talent evaluation for athletes across India, including para-athletes.',
    role: 'Technical lead — Flutter front-end, CV pipeline owner, anomaly detection, gamification design',
    tech: ['Flutter', 'MediaPipe', 'OpenCV', 'Firebase', 'Node.js', 'Real-time CV'],
    problem: 'Traditional talent scouting requires expensive equipment and is inaccessible in rural India. Athletes from remote areas have limited opportunities to showcase their abilities. Para-athletes face additional barriers due to lack of adaptive assessment protocols.',
    approach: `Built a complete smartphone-based assessment platform:
• On-device MediaPipe pose estimation for real-time feedback
• OpenCV preprocessing for lighting/framing validation  
• Anomaly detection to prevent fraud attempts
• Server-side aggregation for leaderboards (Firebase)
• Adaptive protocols for para-athletes with modified metrics
• Gamification system with 100+ badges and challenges
• Multi-role platform: Student, Staff (coaches), and Admin (SAI)
• Web dashboard for analytics and progress tracking`,
    challenges: [
      'Ensuring fair evaluation across different lighting and environmental conditions',
      'Detecting and preventing fraud attempts (video replays, incorrect camera angles)',
      'Building adaptive protocols for para-athletes with different mobility levels',
      'Optimizing on-device processing for older Android smartphones',
      'Creating intuitive UI for non-tech-savvy users in rural areas',
    ],
    outcomes: [
      'Successfully submitted to Smart India Hackathon 2025',
      'Prototype tested with pilot group of 50+ athletes',
      'Gamification improved retention by 40% in pilot tests',
      'Recognition for inclusive design approach for para-athletes',
      'Live web app: talent-track-v2.netlify.app',
      'Mobile app demo: talent-track-sih.netlify.app',
    ],
    links: [
      { label: 'Web Platform', url: 'https://talent-track-v2.netlify.app' },
      { label: 'Mobile App Demo', url: 'https://talent-track-sih.netlify.app' },
    ],
  },
  venmathi: {
    title: 'Venmathi — Tanglish LLM Assistant',
    image: venmathiMock,
    gallery: [
      { src: venmathiMock, caption: 'Indicraft marketplace homepage where Venmathi is integrated', orientation: 'horizontal' },
      { src: venmathiWelcome, caption: 'Venmathi welcome screen with personalized greeting', orientation: 'horizontal' },
      { src: venmathiChatDemo, caption: 'Chat interface showing order status inquiry', orientation: 'horizontal' },
      { src: venmathiChatTanglish, caption: 'Tanglish conversation demonstrating cultural understanding', orientation: 'horizontal' },
    ],
    summary: 'Venmathi is a fine-tuned LLaMA model crafted to understand and respond in Tanglish (Tamil + English), used as the customer support assistant for Indicraft.',
    role: 'Full pipeline owner — dataset creation, fine-tuning, deployment, frontend integration',
    tech: ['LLaMA 3', 'Python', 'Ollama', 'React', 'Netlify', 'Colab'],
    problem: 'Indian diaspora and local customers often prefer communicating in a mix of Tamil and English (Tanglish), but standard LLMs struggle with code-switching and cultural context.',
    approach: 'Created custom Tanglish dataset with 5,000+ conversation pairs, fine-tuned LLaMA 3 on Google Colab, quantized the model for edge deployment, hosted on Ollama, and integrated into React frontend with fallback to human support when confidence is low.',
    challenges: [
      'Generating high-quality Tanglish training data',
      'Balancing model size vs. response quality',
      'Implementing confidence thresholds for safe responses',
      'Optimizing inference speed for real-time chat',
    ],
    outcomes: [
      'Successfully deployed as Indicraft\'s primary support assistant',
      'Handles 70% of customer queries without human intervention',
      'Average response time under 2 seconds',
      'Positive user feedback on cultural relevance',
    ],
  },
  indicraft: {
    title: 'Indicraft — From Local Hands to Global Homes',
    image: indicraftMock,
    summary: 'Indicraft is a digital marketplace that connects local Indian artisans with the global Indian diaspora, enabling authentic, high-quality handcrafted products to reach international homes.',
    role: 'Platform contributor — frontend components, recommendation prototype, Venmathi integration, artisan onboarding UX',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'India Post API', 'LLaMA (Venmathi)'],
    problem: 'Indian artisans face limited market access and low incomes due to middlemen and lack of digital presence. The global Indian diaspora struggles to find authentic, quality handcrafted products at affordable prices with reliable shipping.',
    approach: `Built a full-featured marketplace with:
- Verified artisan onboarding with product verification checklist
- AI recommendation engine for region and festival-based suggestions
- Standardized international shipping via India Post (Dak Ghar Niryat Kendra)
- Fair-pay model ensuring artisans receive 70%+ of sale price
- Integrated Venmathi (Tanglish LLM) for local-language customer support
- SDG-aligned impact tracking (Goals 17, 8, 12)`,
    challenges: [
      'Building trust in product authenticity',
      'Simplifying international shipping logistics',
      'Creating intuitive onboarding for non-tech-savvy artisans',
      'Balancing marketplace fees with artisan fair pay',
    ],
    outcomes: [
      'Platform launched with 50+ verified artisans',
      'Average artisan income increased by 60%',
      'Successful international shipments to 10+ countries',
      'Featured in college innovation showcase',
    ],
  },
  aeroponics: {
    title: 'Vertical Tower Farming — Patent-Published Aeroponics System',
    image: aeroponicsMock,
    summary: 'A patent-published vertical aeroponics system with IoT monitoring for sustainable urban agriculture, enabling efficient plant growth with automated climate control.',
    role: 'Lead Researcher — IoT integration, sensor systems, patent filing',
    tech: ['IoT', 'Arduino', 'Sensors', 'Cloud Platform', 'Aeroponics'],
    problem: 'Urban areas face space constraints for traditional farming, and conventional agriculture is water-intensive and climate-dependent. Sustainable food production in cities requires innovative vertical solutions.',
    approach: 'Designed and built a vertical tower system with aeroponics (nutrient mist delivery), integrated IoT sensors for real-time monitoring of temperature, humidity, nutrient levels, and plant health. Cloud platform aggregates data for remote monitoring and automated adjustments.',
    challenges: [
      'Maintaining consistent nutrient delivery across all tower levels',
      'Preventing mold and bacterial growth in humid environment',
      'Ensuring system reliability for 24/7 operation',
      'Optimizing power consumption for IoT sensors',
    ],
    outcomes: [
      'Patent published for vertical farming system design',
      'Awarded IEEE SIGHT funding: $3,300',
      'Prototype demonstrated 40% reduction in water usage vs. traditional farming',
      'System supports 50+ plants in 4 sq ft footprint',
    ],
  },
};

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? projectDetails[slug] : null;

  if (!project) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-heading font-bold mb-4">Project Not Found</h1>
          <Link to="/projects">
            <Button>Back to Projects</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 pb-16">
      {/* Back Button */}
      <div className="container mx-auto px-4 py-6">
        <Link to="/projects">
          <Button variant="ghost">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Button>
        </Link>
      </div>

      {/* Header */}
      <section className="pb-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-heading font-bold mb-6 animate-fade-in">
              {project.title}
            </h1>
            <p className="text-xl text-muted-foreground mb-6 animate-slide-up">
              {project.summary}
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tech.map((tech: string) => (
                <Badge key={tech}>{tech}</Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section (for projects with gallery) */}
      {project.gallery && (
        <section className="pb-12">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-heading font-bold mb-8 text-center">Project Gallery</h2>
              <ImageGallery images={project.gallery} />
            </div>
          </div>
        </section>
      )}

      {/* Videos Section (for projects with videos) */}
      {project.videos && (
        <section className="pb-12">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-heading font-bold mb-8 text-center">Project Videos</h2>
              <VideoGallery videos={project.videos} />
            </div>
          </div>
        </section>
      )}

      {/* PDF Presentation (for projects with PDF) */}
      {project.pdfUrl && (
        <section className="pb-12">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <PDFViewer pdfUrl={project.pdfUrl} title="Project Presentation" />
            </div>
          </div>
        </section>
      )}

      {/* External Links (if available) */}
      {project.links && (
        <section className="pb-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="p-8">
                <h2 className="text-2xl font-heading font-bold mb-6">Live Project Links</h2>
                <div className="flex flex-col sm:flex-row gap-4">
                  {project.links.map((link: any, idx: number) => (
                    <a 
                      key={idx}
                      href={link.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button variant="outline" className="w-full hover:scale-105 transition-transform">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        {link.label}
                      </Button>
                    </a>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </section>
      )}

      {/* Content */}
      <section>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <Card className="p-8">
              <h2 className="text-2xl font-heading font-bold mb-4">My Role</h2>
              <p className="text-muted-foreground">{project.role}</p>
            </Card>

            <Card className="p-8">
              <h2 className="text-2xl font-heading font-bold mb-4">Problem Statement</h2>
              <p className="text-muted-foreground leading-relaxed">{project.problem}</p>
            </Card>

            <Card className="p-8">
              <h2 className="text-2xl font-heading font-bold mb-4">Approach & Implementation</h2>
              <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                {project.approach}
              </p>
            </Card>

            <Card className="p-8">
              <h2 className="text-2xl font-heading font-bold mb-4">Challenges & Solutions</h2>
              <ul className="space-y-3">
                {project.challenges.map((challenge: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-accent mt-1">•</span>
                    <span className="text-muted-foreground">{challenge}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="p-8">
              <h2 className="text-2xl font-heading font-bold mb-4">Outcomes & Impact</h2>
              <ul className="space-y-3">
                {project.outcomes.map((outcome: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-accent mt-1">✓</span>
                    <span className="text-muted-foreground">{outcome}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="pt-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center p-8 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 border border-accent/30">
            <h2 className="text-2xl font-heading font-bold mb-4">
              Interested in building something similar?
            </h2>
            <Link to="/contact">
              <Button size="lg">Get in Touch</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

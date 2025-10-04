export interface WordPressProject {
  title: string;
  slug: string;
  subtitle: string;
  role: string;
  tech: string[];
  overview: string;
  responsibilities: string[];
  highlights: string[];
  images: string[];
  liveUrl?: string;
  caseStudyUrl?: string;
  category: string[];
}

export const wordpressProjects: WordPressProject[] = [
  {
    title: 'LocalBees',
    slug: 'localbees',
    subtitle: 'Platform to uplift local businesses across India — branding, marketplace pages, merchant onboarding.',
    role: 'Web Developer (Front-end & WordPress customizations)',
    tech: ['WordPress', 'UI', 'UX', 'SEO', 'Merchant Onboarding'],
    overview: 'LocalBees is a localized commerce platform created to support small entrepreneurs, artisans and street vendors — giving them an affordable, simple storefront to reach buyers and survive in the digital economy. My work focused on building a robust, user-friendly website with an emphasis on discoverability, clear merchant flows, and fast client handover.',
    responsibilities: [
      'Implemented responsive UI using Elementor + custom CSS for consistent branding',
      'Built merchant onboarding pages and product listing templates to simplify seller signup',
      'Integrated analytics & basic SEO best practices to improve organic reach',
      'Implemented usability improvements for product browsing and mobile checkout flows',
      'Wrote documentation & handover notes for non-technical admins'
    ],
    highlights: [
      'Helped align the UI with a "Vocal for Local" brand tone — trustable and easy for non-technical sellers',
      'Reduced merchant onboarding friction with a step-by-step flow and templated pages',
      'Provided SEO and analytics setup so the team could track growth and product discoverability'
    ],
    images: ['/images/localbees-1.jpg', '/images/localbees-2.jpg', '/images/localbees-3.jpg'],
    category: ['All', 'WordPress', 'E-commerce']
  },
  {
    title: 'IEEE TEMS',
    slug: 'ieee-tems',
    subtitle: 'Full redesign and rebuild of IEEE TEMS student society website — modern UI and governance.',
    role: 'Lead Webmaster & Front-end Developer',
    tech: ['WordPress', 'CMS', 'Accessibility', 'Community'],
    overview: 'As IEEE TEMS webmaster I led a redesign to modernize the society\'s web presence — making it easier for students to discover events, committees, call for volunteers, and resources. The goal was a professional, accessible, and maintainable website that future committees can update with minimal effort.',
    responsibilities: [
      'Complete site redesign focusing on clarity, information architecture and event discovery',
      'Built templates for events, news, member directories, and resource pages so non-technical admins can add content',
      'Implemented accessibility fixes (semantic markup, alt text, keyboard focus) and responsive design',
      'Created documentation and a handover playbook for future web coordinators'
    ],
    highlights: [
      'Received Volunteer Excellence Award recognition for the redesign and ongoing maintenance',
      'Improved usability for students, enabling easier volunteer signups and event RSVPs',
      'The design intentionally supports long-term maintainability by successive volunteer teams'
    ],
    images: ['/images/ieee-tems-1.jpg', '/images/ieee-tems-2.jpg', '/images/ieee-tems-3.jpg'],
    liveUrl: 'https://lnkd.in/gEimun7m',
    category: ['All', 'WordPress', 'Community']
  },
  {
    title: 'MitrahOrganics.com',
    slug: 'mitrahorganics',
    subtitle: 'WordPress + WooCommerce store for organic products — custom sections & client handover.',
    role: 'Freelance Web Developer (end-to-end WordPress build)',
    tech: ['WordPress', 'WooCommerce', 'E-commerce', 'PHP'],
    overview: 'Built a clean, mobile-friendly e-commerce site for a local organic products brand. Focus was on quick delivery, intuitive product discovery, secure checkout, and an admin interface the client could manage without technical help.',
    responsibilities: [
      'Setup WordPress + WooCommerce with Astra starter templates and customized product pages',
      'Added custom sections using Elementor and small PHP tweaks for unique display needs',
      'Configured payment and shipping, tested on local/dev environment, and deployed to production',
      'Provided client training and handover documentation for product & order management'
    ],
    highlights: [
      'Delivered a fully-managed e-commerce store ready for sales and future expansion',
      'Client-friendly admin UI and documentation reduced support calls from the client after launch'
    ],
    images: ['/images/mitrahorganics-1.jpg', '/images/mitrahorganics-2.jpg', '/images/mitrahorganics-3.jpg'],
    liveUrl: 'https://mitrahorganics.com',
    category: ['All', 'WordPress', 'E-commerce']
  },
  {
    title: 'HomeKitchen',
    slug: 'homekitchen',
    subtitle: 'Tech support and front-end development for a home-cooked meal marketplace.',
    role: 'Front-end developer & technical support',
    tech: ['WordPress', 'Marketplace support', 'UI/UX'],
    overview: 'HomeKitchen is a platform connecting home-cooks with diners in Chennai. I provided technical support and front-end work to improve usability and speed the onboarding of home-makers and contributors.',
    responsibilities: [
      'Implemented front-end UI improvements for menu listings and contributor signups',
      'Assisted with plugin configuration to support orders and basic tracking',
      'Worked on performance improvements and responsive tweaks for mobile users'
    ],
    highlights: [
      'Improved UX for contributor onboarding to make signups faster and easier',
      'Enhanced mobile experience for customers ordering lunch/dinner on-the-go'
    ],
    images: ['/images/homekitchen-1.jpg', '/images/homekitchen-2.jpg', '/images/homekitchen-3.jpg'],
    category: ['All', 'WordPress', 'Marketplace']
  },
  {
    title: 'Rudhra Ingenious Solutions',
    slug: 'rudhra-ingenious',
    subtitle: 'Built service pages for Life Science, Manufacturing, Automotive, Data Analytics & App Modernization during internship.',
    role: 'Web Development Intern — WordPress specialist',
    tech: ['WordPress', 'Enterprise Pages', 'Content Structuring'],
    overview: 'During my Rudhra internship I contributed to several service pages and company verticals — designing content structure and templates for Life Science, Manufacturing, Automotive, Data Analytics, and Application Services & Modernization.',
    responsibilities: [
      'Built and optimized service pages focused on clarity and conversion',
      'Ensured consistent design language across verticals with reusable templates',
      'Performed plugin integrations and basic page speed optimizations'
    ],
    highlights: [
      'Enhanced the company\'s service presentation making it easier for visitors to understand offerings and contact sales',
      'Gained production-level experience in enterprise WordPress workflows'
    ],
    images: ['/images/rudhra-1.jpg', '/images/rudhra-2.jpg', '/images/rudhra-3.jpg'],
    category: ['All', 'WordPress', 'Enterprise']
  },
  {
    title: 'GemEnterprises',
    slug: 'gem-enterprises',
    subtitle: 'Built a B2B website for a coco peat & packaging firm — end-to-end from wireframe to delivery.',
    role: 'Solo developer — Full project delivery',
    tech: ['WordPress', 'B2B', 'SEO', 'UI'],
    overview: 'Following the school website, a well-wisher engaged me to build a website for their coco peat and packaging products. I designed and implemented the site end-to-end, working from initial wireframes to final delivery.',
    responsibilities: [
      'Defined site architecture and UX for a B2B audience with clear product catalogs and contact flows',
      'Implemented responsive product pages and SEO-friendly templates',
      'Performed content optimization and basic on-page SEO to improve discoverability'
    ],
    highlights: [
      'Delivered a professional B2B website that met client requirements and increased inbound inquiries',
      'Built the project solo, reinforcing independent delivery capability for business clients'
    ],
    images: ['/images/gem-enterprises-1.jpg', '/images/gem-enterprises-2.jpg', '/images/gem-enterprises-3.jpg'],
    category: ['All', 'WordPress', 'B2B']
  },
  {
    title: 'ImmanuelMHSS',
    slug: 'immanuel-mhss',
    subtitle: 'Led a school website project in 11th grade — team lead for end-to-end WordPress build.',
    role: 'Team lead & WordPress developer',
    tech: ['WordPress', 'Leadership', 'Education', 'Teamwork'],
    overview: 'In 11th grade I mastered WordPress and led a team to build the school website. This project taught me leadership, team coordination, and how to translate stakeholders\' needs into a working web product.',
    responsibilities: [
      'Led planning, delegation and execution of the school website project',
      'Built the site structure, key pages and templates, and coordinated content from teachers',
      'Ensured timely delivery and polished visual presentation'
    ],
    highlights: [
      'Project showcased to school management and served as a portfolio milestone',
      'Inspired me to start a freelance venture: The Web Sparrow'
    ],
    images: ['/images/immanuel-mhss-1.jpg', '/images/immanuel-mhss-2.jpg', '/images/immanuel-mhss-3.jpg'],
    category: ['All', 'WordPress', 'Education']
  },
  {
    title: 'SBEngineeringTamilNadu',
    slug: 'sb-engineering',
    subtitle: 'First paid client for my startup — bespoke site with domain-specific research and UX.',
    role: 'Founder & lead developer (The Web Sparrow)',
    tech: ['WordPress', 'Startup', 'Client Delivery'],
    overview: 'After launching my startup, I secured my first client — a demanding domain that required research and careful UX decisions. I delivered a polished website that reflected the client\'s specialized business needs.',
    responsibilities: [
      'Conducted domain research to understand client needs and user expectations',
      'Built a tailored, responsive website that reflected the client\'s brand and services',
      'Delivered documentation and basic SEO setup'
    ],
    highlights: [
      'This project validated the startup model and demonstrated capability to handle client-specific challenges',
      'Served as a sales reference for the startup\'s next projects'
    ],
    images: ['/images/sb-engineering-1.jpg', '/images/sb-engineering-2.jpg', '/images/sb-engineering-3.jpg'],
    category: ['All', 'WordPress', 'Startup']
  },
  {
    title: 'The Web Sparrow',
    slug: 'web-sparrow',
    subtitle: 'My freelance company — small business websites at affordable rates with professional UX.',
    role: 'Founder & lead developer',
    tech: ['Freelance', 'WordPress', 'The Web Sparrow', 'SMEs'],
    overview: 'The Web Sparrow is my freelance venture — a mission to provide quality websites at affordable rates for small and medium businesses. I handle projects from requirement gathering to deployment and client training.',
    responsibilities: [
      'End-to-end website delivery: wireframe → design → build → deploy → handover',
      'Budget-friendly packages for SMEs and local businesses',
      'Focus on clean UX, fast performance and SEO fundamentals'
    ],
    highlights: [
      'The Web Sparrow has enabled multiple businesses to establish an online presence affordably',
      'Emphasis on repeatable delivery processes and client education'
    ],
    images: ['/images/web-sparrow-1.jpg', '/images/web-sparrow-2.jpg', '/images/web-sparrow-3.jpg'],
    category: ['All', 'WordPress', 'Freelance']
  }
];

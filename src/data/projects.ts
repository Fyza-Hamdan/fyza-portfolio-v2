export type ProjectCategory = 'uiux' | 'website' | 'rebranding';

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: ProjectCategory;
  tags: string[];
  year: string;
  image: string;
  description: string;
  featured?: boolean;
  caseStudyLink?: string;
  liveWebsiteLink?: string;
}

export const projects: Project[] = [
  {
    id: 'serl.io-website',
    title: 'Serl.io',
    subtitle: 'Redesigning the website to strengthen alignment between the company’s goals, services, and overall brand experience',
    category: 'website',
    tags: ['Tailwind CSS', 'TypeScript', 'Responsive Design'],
    year: '2026',
    image: '/SerlioTN.png',
    description: 'Simplifying complex technology through intuitive design, responsive development, and clear digital storytelling',
    featured: true,
    liveWebsiteLink: 'https://serl-io.vercel.app/',
  },
  {
    id: 'blueplan-website',
    title: 'Blue Plan',
    subtitle: 'Website built and customized on the Odoo platform to support Blue Plan’s sustainability mission and digital presence',
    category: 'website',
    tags: ['Odoo', 'UX Design', 'CMS Customisation', 'Responsive Design'],
    year: '2025',
    image: '/BluePlanTN.png',
    description: 'Worked within the Odoo platform to refine layout, content structure, and user experience for a sustainability-focused brand',
    featured: true,
    liveWebsiteLink: 'https://www.blueplan.eco/',  
  },
  {
    id: 'mental-health-website',
    title: 'SoulSpeak',
    subtitle: 'A calming digital sanctuary that supports emotional well-being, mindfulness, and personal reflection through thoughtful design and user-centered features',
    category: 'website',
    tags: ['Mental Health', 'Accessibility', 'Design System', 'User Research', 'Remote Therapy'],
    year: '2026',
    image: '/SoulSpeakTN.png',
    description: 'A mental health platform designed to provide accessible emotional support, wellness resources, and remote therapy sessions',
    featured: true,
    caseStudyLink: 'https://canva.link/nwfzniuaakrqnzf',
    liveWebsiteLink: 'https://soul-speak.vercel.app/',
  },
  {
     id: 'quantum-chain-website',
     title: 'Quantum Chain',
     subtitle: 'Frontend UI concept for a quantum-secure financial blockchain platform',
     category: 'website',
     tags: ['FinTech', 'UX Design', 'Blockchain', 'Dashboard UI', 'Design System'],
     year: '2025',
     image: '/QuantumTN.png',
     description: 'Designed the frontend interface for Quantum Chain, a B2B blockchain infrastructure platform focused on post-quantum security and AI-driven compliance. Work focused on translating complex financial and security concepts into a clear and structured UI',
     featured: true,
     liveWebsiteLink: 'https://quantum-chain-landing-frontend.vercel.app/', 
  },
  {
    id: 'potencia-coffee-website',
    title: 'Potencia',
    subtitle: 'Exploring how a premium freeze-dried coffee brand could live in a digital retail experience',
    category: 'website',
    tags: ['E-Commerce', 'UX Design', 'F&B Branding', 'Concept UI', 'Brand Strategy'],
    year: '2025',
    image: '/PotenciaTN.png',
    description: 'Designed a conceptual e-commerce experience for Potencia, a Singapore-based freeze-dried coffee brand currently in R&D. Focused on translating a premium coffee identity into a digital shopping experience with clear product storytelling and intuitive navigation',
    featured: true,
    liveWebsiteLink: 'https://potencia-coffee.vercel.app/'
  },
  {
    id: 'pet-purely-website',
    title: 'PetPurely',
    subtitle: 'Full-stack e-commerce system for pet products with authentication and admin dashboard',
    category: 'website',
    tags: ['Java', 'Spring Boot', 'MySQL', 'Postman', 'REST API'],
    year: '2025',
    image: '/PPTN.png',
    description: 'Developed as a capstone project in collaboration with a teammate handling backend services. My role focused on frontend development, authentication flow, and admin dashboard integration to support seamless user and system management',
    featured: true,
    liveWebsiteLink: 'https://jas-lyn.github.io/fsd-team-2/index.html'
  },
  {
    id: 'happy-plants-app',
    title: 'Happy Plants',
    subtitle: 'Plant Care App',
    category: 'uiux',
    tags: ['iOS', 'UI/UX', 'Figma', 'Prototyping', 'Rhino 3D', 'Keyshot'],
    year: '2024',
    image: '/Nature.png',
    description: 'Happy Plants helps plant owners care for their plants effortlessly by combining smart automated watering with an intuitive mobile app for tracking plant health and care needs.',
    featured: true,
    caseStudyLink: 'https://www.canva.com/design/DAHK1VYAwC8/eJ-yI5ekl9UTxeXUSJwqDA/view',
  },
  {
    id: 'eenvoid-knee-app',
    title: 'Eenvoid',
    subtitle: 'Knee Analyzer',
    category: 'uiux',
    tags: ['iOS', 'UI/UX', 'Figma', 'Prototyping', 'Rhino 3D', 'Keyshot'],
    year: '2024',
    image: '/EenvoidTN.png',
    description: 'Designing an Accessible Knee Health Monitoring System Using Wearable Technology',
    featured: true,
    caseStudyLink: 'https://canva.link/l0e07s7gcpgt9lk',
  },
  {
    id: 'fatty-bom-bom-rebranding',
    title: 'Fatty Bom Bom',
    subtitle: 'Brand Identity Refresh',
    category: 'rebranding',
    tags: ['Branding', 'Logo Design', 'Rebranding', 'Visual Identity', 'Adobe Illustrator', 'Adobe Photoshop', 'Brand Strategy'],
    year: '2024',
    image: '/FBBTN.png',
    description: 'A self-initiated rebranding project that modernizes Fatty Bom Bom’s visual identity through a refined logo system, improved brand consistency, and a cohesive design language while preserving the brand’s familiar character',
    featured: true,
    caseStudyLink: 'https://canva.link/k6jx5prawrzl79j',
  },
  {
    id: 'e-bridge-rebranding',
    title: 'E-Bridge Pre-School',
    subtitle: 'Brand Identity Refresh',
    category: 'rebranding',
    tags: ['Branding', 'Logo Design', 'Rebranding', 'Visual Identity', 'Adobe Illustrator', 'Adobe Photoshop', 'Brand Strategy'],
    year: '2024',
    image: '/eBridgeTN.png',
    description: 'A self-initiated logo rebranding project for E-Bridge Pre-School, focused on creating a more modern and playful visual identity. The redesign introduces contemporary typography and a memorable icon while retaining the brand’s existing colour palette to preserve familiarity and strengthen recognition among parents and children',
    featured: true,
    caseStudyLink: 'https://canva.link/diwl23u2evhc8ej',
  },
];

export const categoryLabels: Record<ProjectCategory, string> = {
  uiux: 'UI/UX',
  website: 'Websites',
  rebranding: 'Rebranding',
};

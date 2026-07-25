import {
  Code,
  Smartphone,
  Bot,
  Search,
  Megaphone,
  PenTool,
  Layout,
  Server,
  Shield,
  Zap,
  Users,
  Target,
  LineChart,
  Globe,
  Cpu
} from 'lucide-react';
import { FaFacebook, FaInstagram, FaLinkedin, FaPinterest } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Cloud, RefreshCw, Layers, CreditCard } from 'lucide-react';

// Using the default placeholder image downloaded to public/placeholder.jpg
const PLACEHOLDER_IMG = "/placeholder.jpg";

// Common Unsplash Image Collection for consistent style (Business/Tech)
// Technology: https://unsplash.com/collections/technology
// Business: https://unsplash.com/collections/business

export const services = [
  {
    id: 'web-development',
    title: 'Web Development',
    icon: Code,
    desc: 'Custom, high-performance websites built with modern technologies.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2000',
    details: 'We create visually stunning and highly functional websites tailored to your specific business needs. Our web development services cover everything from simple landing pages to complex e-commerce platforms and custom web applications.',
    process: [
      { title: 'Planning & Architecture', desc: 'Structuring the site map, user flows, and technical requirements.' },
      { title: 'Design & Prototyping', desc: 'Creating high-fidelity mockups of the user interface.' },
      { title: 'Coding & Development', desc: 'Writing clean, semantic, and performant code.' },
      { title: 'Launch & Maintenance', desc: 'Deploying the site and providing ongoing support.' },
    ],
    techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL'],
    keyFeatures: [
      {
        title: "User-Centric Design",
        desc: "Interactive and intuitive interfaces that prioritize user experience and engagement.",
        icon: Users
      },
      {
        title: "High Performance",
        desc: "Optimized loading speeds and efficient code structure for maximum performance.",
        icon: Zap
      },
      {
        title: "Robust Security",
        desc: "Advanced security measures to protect user data and prevent vulnerabilities.",
        icon: Shield
      },
      {
        title: "Scalable Architecture",
        desc: "Built to grow with your business, supporting increased traffic and new features.",
        icon: Server
      }
    ],
    faqs: [
      { question: "How long does it take to build a website?", answer: "A standard website typically takes 4-8 weeks, while complex web applications can take 3-6 months depending on requirements." },
      { question: "Will my website be mobile-friendly?", answer: "Absolutely. We design with a mobile-first approach ensuring your site looks great on all devices." },
      { question: "Can I update the content myself?", answer: "Yes, we typically build on CMS platforms or provide admin dashboards that allow you to easily manage content." }
    ],
    seo: {
      title: "Web Development Services | DivineeSoft Technology Builds Your Vision",
      description: "Transform your ideas into high-performing websites with DivineeSoft Technology’s web development services—custom, innovative, and designed to drive real business growth.",
      keywords: "web development services, custom website development, responsive web design, DivineeSoft Technology, business growth, innovative websites"
    }
  },
  {
    id: 'app-development',
    title: 'App Development',
    icon: Smartphone,
    desc: 'Native and cross-platform mobile applications for iOS and Android.',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=2000',
    details: 'We build high-performance, scalable, and user-friendly mobile applications for both iOS and Android platforms. Our team uses the latest technologies to ensure your app stands out in the marketplace.',
    process: [
      { title: 'Discovery & Product Strategy', desc: 'Defining the app concept, features, and user journey.' },
      { title: 'UI/UX Design', desc: 'Crafting intuitive and engaging interfaces for mobile users.' },
      { title: 'Development', desc: 'Building the app using robust native or cross-platform frameworks.' },
      { title: 'Testing & Deployment', desc: 'Rigorous QA testing and smooth submission to App Stores.' },
    ],
    techStack: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'Node.js'],
    keyFeatures: [
      {
        title: "User-Centric Design",
        desc: "A straightforward, user-friendly design allows users to move quickly through the app.",
        icon: Layout
      },
      {
        title: "Seamless Performance",
        desc: "A smoothly running app keeps users engaged and minimizes frustration.",
        icon: Zap
      },
      {
        title: "Robust Security Measures",
        desc: "Implementing encryption and secure login protocols builds trust with users.",
        icon: Shield
      },
      {
        title: "Personalisation Options",
        desc: "Features like user-specific recommendations and settings enhance the app's relevance.",
        icon: Target
      }
    ],
    faqs: [
      { question: "Do you build for iOS and Android?", answer: "Yes, we develop for both platforms using either native technologies or cross-platform frameworks like React Native and Flutter." },
      { question: "Do you help with App Store submission?", answer: "Yes, we handle the entire submission process to the Apple App Store and Google Play Store." },
      { question: "What about maintenance?", answer: "We offer ongoing maintenance packages to ensure your app stays updated with the latest OS versions and security patches." }
    ],
    seo: {
      title: "App Development Services | DivineeSoft Technology Creates Smart Apps",
      description: "Turn your ideas into powerful mobile apps with DivineeSoft Technology’s app development services—custom, innovative, and built to drive business growth.",
      keywords: "app development services, mobile app development, custom apps, DivineeSoft Technology, innovative app solutions, business growth apps"
    }
  },
  {
    id: 'ai-services',
    title: 'AI Development and Services',
    icon: Bot,
    desc: 'Intelligent solutions using machine learning and automation.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=2000',
    details: 'Unlock the power of Artificial Intelligence with our cutting-edge AI development services. From machine learning models to natural language processing and automation, we help you leverage data to drive smarter business decisions.',
    process: [
      { title: 'Data Assessment', desc: 'Evaluating your data infrastructure and readiness for AI.' },
      { title: 'Model Selection', desc: 'Choosing the right algorithms and models for your use case.' },
      { title: 'Training & Tuning', desc: 'Training models on your data and fine-tuning for accuracy.' },
      { title: 'Integration', desc: 'Seamlessly integrating AI solutions into your existing workflows.' },
    ],
    techStack: ['Python', 'TensorFlow', 'PyTorch', 'OpenAI', 'LangChain', 'Hugging Face'],
    keyFeatures: [
      {
        title: "Intelligent Automation",
        desc: "Automate complex tasks to save time and reduce operational costs.",
        icon: Bot
      },
      {
        title: "Data-Driven Insights",
        desc: "Leverage machine learning to uncover hidden patterns and opportunities in your data.",
        icon: LineChart
      },
      {
        title: "Natural Language Processing",
        desc: "Advanced NLP solutions for better customer interaction and content analysis.",
        icon: Cpu
      },
      {
        title: "Custom AI Models",
        desc: "Tailored algorithms designed specifically to meet your unique business challenges.",
        icon: Code
      }
    ],
    faqs: [
      { question: "What AI solutions do you build?", answer: "We build custom machine learning models, NLP chatbots, predictive analytics tools, and automation scripts tailored to your needs." },
      { question: "Do I need a lot of data?", answer: "While data is crucial, we can often start with pre-trained models and fine-tune them, or help you set up a data collection strategy." },
      { question: "Is my data secure?", answer: "Yes, we prioritize data security and compliance, ensuring your proprietary data is handled with strict confidentiality." }
    ],
    seo: {
      title: "AI Services | DivineeSoft Technology Powers Smarter Business Solutions",
      description: "Leverage AI to transform your business with DivineeSoft Technology’s AI services—innovative solutions designed to boost efficiency, insight, and growth.",
      keywords: "AI services, artificial intelligence solutions, business AI, DivineeSoft Technology, AI automation, smart business solutions, innovative AI"
    }
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    icon: Megaphone,
    desc: 'Strategic marketing campaigns to grow your brand online.',
    image: 'https://images.unsplash.com/photo-1533750516457-a7f992034fec?auto=format&fit=crop&q=80&w=2000',
    details: 'Our digital marketing services are designed to increase your online presence and drive targeted traffic to your website. We offer a comprehensive range of services including social media marketing, PPC advertising, email marketing, and content strategy.',
    process: [
      { title: 'Market Analysis', desc: 'We analyze your market, competitors, and target audience to identify opportunities.' },
      { title: 'Strategy Development', desc: 'Creating a tailored marketing roadmap to achieve your specific business goals.' },
      { title: 'Campaign Execution', desc: 'Launching and managing multi-channel campaigns for maximum impact.' },
      { title: 'Optimization & Reporting', desc: 'Continuous monitoring and data-driven adjustments to improve ROI.' },
    ],
    techStack: ['Google Analytics', 'Semrush', 'HubSpot', 'Meta Ads', 'Google Ads', 'Mailchimp'],
    keyFeatures: [
      {
        title: "Targeted Campaigns",
        desc: "Reach the right audience at the right time with precision targeting strategies.",
        icon: Target
      },
      {
        title: "Multi-Channel Approach",
        desc: "Unified marketing across social media, search, and email for maximum reach.",
        icon: Megaphone
      },
      {
        title: "Performance Tracking",
        desc: "Real-time analytics to monitor campaign success and optimize ROI.",
        icon: LineChart
      },
      {
        title: "Content Strategy",
        desc: "Engaging content that builds brand authority and drives customer loyalty.",
        icon: PenTool
      }
    ],
    faqs: [
      { question: "How long does it take to see results?", answer: "Digital marketing is a long-term strategy, but you can typically expect to see initial results within 3 months, with significant growth in 6-12 months." },
      { question: "Which channels are best for my business?", answer: "We analyze your target audience and industry to recommend the most effective channels, whether it's LinkedIn for B2B or Instagram/TikTok for B2C." },
      { question: "Do you handle ad spend?", answer: "We manage the ad spend budget you set, optimizing for the highest ROI. The ad spend itself is paid directly to the platforms." }
    ],
    seo: {
      title: "Digital Marketing Services | DivineeSoft Technology Boosts Your Growth",
      description: "Grow your brand and reach more customers with DivineeSoft Technology’s digital marketing services—creative, data-driven strategies designed for real results.",
      keywords: "digital marketing services, online marketing, SEO, social media marketing, DivineeSoft Technology, business growth, marketing strategies"
    }
  },
  {
    id: 'seo',
    title: 'Search Engine Optimization',
    icon: Search,
    desc: 'Search Engine Optimization to improve visibility and organic traffic.',
    image: 'https://images.unsplash.com/photo-1571786256017-aee7a0c009b6?auto=format&fit=crop&q=80&w=2000',
    details: 'Improve your search engine rankings and attract more organic traffic with our smart SEO strategies. We perform in-depth keyword research, on-page optimization, and technical SEO audits to ensure your website is easily found by your target audience.',
    process: [
      { title: 'Audit & Analysis', desc: 'Comprehensive site audit to identify technical issues and opportunities.' },
      { title: 'Keyword Research', desc: 'Finding high-traffic, low-competition keywords relevant to your niche.' },
      { title: 'On-Page Optimization', desc: 'Optimizing content, meta tags, and internal linking.' },
      { title: 'Off-Page Strategy', desc: 'Building high-quality backlinks and improving domain authority.' },
    ],
    techStack: ['Ahrefs', 'Google Search Console', 'Moz', 'Screaming Frog', 'Yoast SEO'],
    keyFeatures: [
      {
        title: "On-Page Optimization",
        desc: "Fine-tuning your content and structure for better search engine visibility.",
        icon: Layout
      },
      {
        title: "Technical SEO",
        desc: "Improving site speed, mobile-friendliness, and crawlability.",
        icon: Code
      },
      {
        title: "Keyword Strategy",
        desc: "Targeting high-value keywords to attract qualified traffic.",
        icon: Search
      },
      {
        title: "Link Building",
        desc: "Establishing authority through high-quality backlinks and digital PR.",
        icon: Globe
      }
    ],
    faqs: [
      { question: "Why is SEO important?", answer: "SEO helps your website rank higher in search results, driving free organic traffic and building long-term credibility." },
      { question: "Is SEO a one-time process?", answer: "No, SEO requires ongoing effort to maintain responsiveness to algorithm updates and competitor activities." },
      { question: "Do you guarantee #1 ranking?", answer: "No ethical SEO agency can guarantee a #1 ranking due to the unpredictable nature of search algorithms, but we guarantee improved visibility and traffic." }
    ],
    seo: {
      title: "SEO Services | DivineeSoft Technology Boosts Your Online Visibility",
      description: "Improve your search rankings and grow your business with DivineeSoft Technology’s SEO services—strategic, data-driven solutions designed for real results.",
      keywords: "SEO services, search engine optimization, online visibility, DivineeSoft Technology, website ranking, digital marketing, business growth"
    }
  },

  {
  id: 'cloud-solutions',
  title: 'Cloud Solutions & DevOps',
  icon: Cloud,
  desc: 'Scalable cloud infrastructure, migration, and DevOps automation for modern businesses.',
  image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=2000',
  details: 'We design, deploy, and manage cloud infrastructure that scales with your business. From cloud migration and server architecture to CI/CD pipelines and 24/7 monitoring, we ensure your systems stay fast, secure, and always online.',
  process: [
    { title: 'Infrastructure Audit', desc: 'Assessing your current setup and identifying scalability, cost, and performance gaps.' },
    { title: 'Architecture Design', desc: 'Designing a secure, scalable cloud architecture tailored to your workload.' },
    { title: 'Migration & Deployment', desc: 'Moving systems to the cloud with zero-downtime deployment strategies.' },
    { title: 'Monitoring & Optimization', desc: 'Continuous uptime monitoring, cost optimization, and performance tuning.' },
  ],
  techStack: ['AWS', 'Google Cloud', 'Azure', 'Docker', 'Kubernetes', 'Terraform'],
  keyFeatures: [
    {
      title: "Scalable Architecture",
      desc: "Infrastructure that grows automatically with your traffic and workload demands.",
      icon: Server
    },
    {
      title: "CI/CD Automation",
      desc: "Automated build, test, and deployment pipelines for faster, reliable releases.",
      icon: RefreshCw
    },
    {
      title: "24/7 Uptime Monitoring",
      desc: "Real-time alerts and monitoring to catch issues before they impact users.",
      icon: Shield
    },
    {
      title: "Cost Optimization",
      desc: "Right-sizing resources and eliminating waste to reduce your cloud spend.",
      icon: LineChart
    }
  ],
  faqs: [
    { question: "Which cloud providers do you work with?", answer: "We work with AWS, Google Cloud, and Azure, and recommend the best fit based on your budget, scale, and technical requirements." },
    { question: "Can you migrate our existing systems without downtime?", answer: "Yes, we use phased migration strategies and blue-green deployments to ensure minimal to zero downtime during transitions." },
    { question: "Do you offer ongoing infrastructure management?", answer: "Yes, we provide 24/7 monitoring, incident response, and monthly optimization reviews as part of our managed cloud packages." }
  ],
  seo: {
    title: "Cloud Solutions & DevOps | DivineeSoft Technology Scales Your Infrastructure",
    description: "Scale confidently with DivineeSoft Technology's cloud solutions—infrastructure, migration, and DevOps automation built for uptime, security, and growth.",
    keywords: "cloud solutions, DevOps services, cloud migration, AWS development, cloud infrastructure, DivineeSoft Technology, CI/CD automation"
  }
},
{
  id: 'saas-development',
  title: 'SaaS Product Development',
  icon: Layers,
  desc: 'End-to-end SaaS product design, development, and launch for startups and enterprises.',
  image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=2000',
  details: 'We build multi-tenant SaaS platforms from the ground up covering architecture, subscription billing, user management, and scalable infrastructure. Whether you\'re launching an MVP or scaling an existing product, we become your long-term SaaS engineering partner.',
  process: [
    { title: 'Product Strategy', desc: 'Defining core features, pricing tiers, and go-to-market roadmap.' },
    { title: 'Multi-Tenant Architecture', desc: 'Building secure, isolated data architecture for multiple customers.' },
    { title: 'Development & Billing Integration', desc: 'Building the platform with subscription billing and user roles.' },
    { title: 'Launch & Scale', desc: 'Deploying to production and scaling infrastructure as your user base grows.' },
  ],
  techStack: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe', 'AWS', 'Redis'],
  keyFeatures: [
    {
      title: "Multi-Tenant Architecture",
      desc: "Secure, isolated data structures that scale across unlimited customer accounts.",
      icon: Layers
    },
    {
      title: "Subscription & Billing",
      desc: "Integrated payment systems supporting tiered plans, trials, and usage-based billing.",
      icon: CreditCard
    },
    {
      title: "Role-Based Access",
      desc: "Granular permission systems for teams, admins, and end users.",
      icon: Shield
    },
    {
      title: "Built to Scale",
      desc: "Infrastructure designed to handle growth from first customer to thousands.",
      icon: Server
    }
  ],
  faqs: [
    { question: "Can you build our SaaS MVP quickly?", answer: "Yes, we specialize in lean MVP development, typically launching a functional first version within 6-10 weeks depending on scope." },
    { question: "Do you handle subscription billing?", answer: "Yes, we integrate billing platforms like Stripe to handle subscriptions, trials, upgrades, and usage-based pricing." },
    { question: "Can you scale our existing SaaS product?", answer: "Absolutely. We regularly take over existing SaaS codebases to improve architecture, performance, and add new features." }
  ],
  seo: {
    title: "SaaS Development Services | DivineeSoft Technology Builds Your Platform",
    description: "Launch and scale your SaaS product with DivineeSoft Technology—multi-tenant architecture, billing integration, and engineering built for growth.",
    keywords: "SaaS development, SaaS product design, multi-tenant architecture, subscription billing, SaaS MVP, DivineeSoft Technology"
  }
}
];



export const team = [
  { name: 'Muhammad Tahir', role: 'CEO', image: '/team/tahir.png' },
  { name: 'MD Zeeshan', role: 'CTO', image: '/team/zeeshan.png' },
  { name: 'Salman Ramzan', role: 'AI Engineer', image: '/team/salman.png' },
  { name: 'Shayan Kashif', role: 'SEO Specialist', image: PLACEHOLDER_IMG }, // No image found in list
  { name: 'Muhammad Abdullah', role: 'Developer', image: PLACEHOLDER_IMG }, // No image found in list
  { name: 'Imran', role: 'Manager', image: PLACEHOLDER_IMG }, // Assuming "I am busy" is Imran or similar, using placeholder
  { name: 'Shaan', role: 'Developer', image: PLACEHOLDER_IMG }, // No image found in list
  { name: 'Muhammad Arslan', role: 'Designer', image: '/team/arslan.png' },
  { name: 'Hassan', role: 'Developer', image: '/team/hassaan.png' },
];

export const stats = [
  { label: 'Satisfied Clients', value: 50, suffix: '+' },
  { label: 'Expert Members', value: 10, suffix: '+' },
  { label: 'Problems Solved', value: 500, suffix: '+' },
  { label: 'Awards Winner', value: 5, suffix: '+' },
];

export const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart",
    content: "DivineeSoft Technology transformed our online presence. Their team is professional, creative, and results-driven.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200&h=200"
  },
  {
    name: "Michael Chen",
    role: "Director, Innovation Corp",
    content: "The AI solution they built for us has automated 80% of our workflow. Truly game-changing.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200&h=200"
  },
  {
    name: "Emma Davis",
    role: "Marketing Manager, GrowthCo",
    content: "Our SEO rankings skyrocketed within 3 months of working with DivineeSoft. Highly recommended!",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200&h=200"
  }
];

export const coreValues = [
  {
    title: "Innovation First",
    desc: "We stay ahead of the curve by adopting the latest technologies and methodologies."
  },
  {
    title: "Client-Centric",
    desc: "Your success is our success. We tailor every solution to your specific business goals."
  },
  {
    title: "Quality Assurance",
    desc: "We maintain rigorous standards to ensure bug-free, high-performance deliverables."
  },
  {
    title: "Transparent Communication",
    desc: "No hidden fees or surprises. We keep you in the loop at every stage of the project."
  }
];

export const processOverview = [
  {
    step: "01",
    title: "Discovery",
    desc: "Before we create solutions, we start with understanding you. Our discovery phase is all about learning your business model, market, audience, and existing digital ecosystem. We identify what's working, what's not, and where the biggest growth opportunities lie.",
    outcome: "A complete roadmap that aligns your vision with measurable digital growth.",
    image: "https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?auto=format&fit=crop&q=80&w=800&h=600" // Meeting/Planning
  },
  {
    step: "02",
    title: "Planning & Design",
    desc: "With clear insights from the discovery phase, we turn strategy into structure and creativity into impact. Our experts outline a detailed project roadmap, defining goals, milestones, and user experiences that align perfectly with your brand vision.",
    outcome: "A data-informed, conversion-focused design plan that transforms ideas into an engaging digital experience.",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800&h=600" // UX/Design
  },
  {
    step: "03",
    title: "Implementation",
    desc: "With a solid plan and design in place, we bring your vision to life. Our development team transforms blueprints into high-performing digital solutions from responsive websites and custom applications to full-scale marketing campaigns.",
    outcome: "A fully functional, future-ready solution that delivers exceptional user experience and measurable business results.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800&h=600" // Coding/Team
  },
  {
    step: "04",
    title: "Quality Assurance",
    desc: "Before any launch, we make excellence non-negotiable. Our quality assurance process ensures every element from code integrity to design responsiveness meets the highest standards of performance, security, and usability.",
    outcome: "A reliable, secure, and perfectly optimized solution that performs seamlessly across every device and environment.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800&h=600" // Analytics/QA
  }
];

export const benefits = [
  {
    title: "Cost Efficiency",
    desc: "Smart IT solutions that save you money in the long run."
  },
  {
    title: "Operational Excellence",
    desc: "Streamlining processes for maximum efficiency."
  },
  {
    title: "Future Ready",
    desc: "Preparing your business for tomorrow's challenges today."
  }
];

export const faqs = [
  {
    question: "What services do you offer?",
    answer: "We offer a wide range of digital services including Web Development, App Development, AI Solutions, SEO, Digital Marketing, Content Writing, and more."
  },
  {
    question: "How do we get started?",
    answer: "Simply contact us through our contact form or give us a call. We'll discuss your requirements and propose a tailored solution."
  },
  {
    question: "Do you provide support after project completion?",
    answer: "Yes, we provide ongoing support and maintenance to ensure your digital products continue to perform optimally."
  },
  {
    question: "What is your pricing model?",
    answer: "Our pricing is project-based and depends on the scope and complexity of the work. We offer competitive rates and transparent pricing."
  }
];

export const blogPosts = [
  {
    id: '1',
    title: 'How to Detect AI Voices- An Ultimate Guide',
    excerpt: 'Synthetic audio generation is getting better with the rise of artificial intelligence. Learn how to detect AI voices with or…',
    date: 'Jul 11, 2026',
    image: '/blog/How-to-Detect-AI-Voices-768x387.webp',
    category: 'AI Services',
    url: "https://blogs.divineesoft.com/how-to-detect-ai-voices-an-ultimate-guide/"
  },
  {
    id: '2',
    title: 'Machine learning applications: 5 real-world problems that ML can solve',
    excerpt: 'Explore machine learning applications to solve real-world problems such as disease diagnosis, fraud detection, environmental change detection, and more. Machine…',
    date: 'Jul 11, 2026',
    image: '/blog/machine-learning-applications-768x387.webp',
    category: 'Machine Learning',
    url: "https://blogs.divineesoft.com/machine-learning-applications-5-real-world-problems-that-ml-can-solve/"
  },
  {
    id: '3n',
    title: 'Top 5 Best AI voice changers in 2025',
    excerpt: 'Recording a voiceover with professional-sounding audio is not as easy as you might think, especially if you don’t have access…',
    date: 'Jul 10, 2026',
    image: '/blog/Best-AI-voice-changers-768x387.webp',
    category: 'AI',
    url: "https://blogs.divineesoft.com/top-5-best-ai-voice-changers-in-2025/"
  }
];

export const socialLinks = [
  // {
  //   name: "Facebook",
  //   url: "https://www.facebook.com",
  //   icon: FaFacebook,
  // },
  // {
  //   name: "Instagram",
  //   url: "https://www.instagram.com",
  //   icon: FaInstagram,
  // },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/company/divineesoft-technologies/",
    icon: FaLinkedin,
  },
  // {
  //   name: "X",
  //   url: "https://x.com",
  //   icon: FaXTwitter,
  // },
  {
    name: "Pinterest",
    url: "https://pin.it/2d1I6sTmY",
    icon: FaPinterest,
  },
];

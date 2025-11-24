import { ArrowRight, CheckCircle, Code, Palette, ShoppingCart, Users, Award, Zap, LucideIcon, Rocket, Code2, Search, MessageSquare, Users2, Lightbulb, Shield, Heart, FileText, Globe, TrendingUp, Wrench, Layout, } from "lucide-react";

import { oma, howell, doris } from '../assets/team'

export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
}

export interface WhyChooseUsItem {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
}

export interface Project {
  id: number;
  title: string;
  category: string;
  tags: string[];
  image: string;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
  rating: number;
}

const services: Service[] = [
  {
    icon: Code,
    title: "Website Development",
    description:
      "Custom-built websites tailored to your business needs with modern technologies.",
    features: [
      "Responsive Design",
      "Fast Performance",
      "SEO Optimized",
    ],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Beautiful, intuitive designs that provide exceptional user experiences.",
    features: ["User Research", "Wireframing", "Prototyping"],
  },
  {
    icon: ShoppingCart,
    title: "eCommerce Solutions",
    description:
      "Powerful online stores that drive sales and grow your business.",
    features: [
      "Payment Integration",
      "Inventory Management",
      "Analytics",
    ],
  },
];

export { services };

const whyChooseUs: WhyChooseUsItem[] = [
  {
    icon: Zap,
    title: "Fast Delivery",
    description:
      "Get your website launched quickly without compromising on quality.",
    color: "text-yellow-400"
  },
  {
    icon: Users,
    title: "Expert Team",
    description:
      "Work with experienced developers and designers who care about your success.",
    color: 'text-gray-400'
  },
  {
    icon: Award,
    title: "Quality Assured",
    description:
      "Rigorous testing ensures your website works flawlessly across all devices.",
    color: "text-cyan-400"
  },
  {
    icon: CheckCircle,
    title: "Ongoing Support",
    description:
      "Continuous maintenance and support to keep your website running smoothly.",
    color: "text-green-600"
  },
];
export { whyChooseUs };

const portfolioProjects: Project[] = [
  {
    id: 1,
    title: "TechStart Landing",
    category: "Landing Page",
    tags: ["Design", "Development"],
    image:
      "https://images.unsplash.com/photo-1560202582-a391c31ec300?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
  {
    id: 2,
    title: "Fashion eCommerce",
    category: "eCommerce",
    tags: ["eCommerce", "UI/UX"],
    image:
      "https://images.unsplash.com/photo-1658297063569-162817482fb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
  {
    id: 3,
    title: "Creative Agency Site",
    category: "Website",
    tags: ["Branding", "Development"],
    image:
      "https://images.unsplash.com/photo-1676792519027-7c42006d7b4a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
];
export { portfolioProjects };

const testimonials: Testimonial[] = [
  {
    name: "Sarah Johnson",
    role: "CEO",
    company: "TechVision Inc",
    content:
      "Working with WebFlow Agency was an absolute pleasure. They delivered our website ahead of schedule and exceeded all our expectations. The attention to detail was remarkable.",
    avatar:
      "https://images.unsplash.com/photo-1496180470114-6ef490f3ff22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Founder",
    company: "StyleHub",
    content:
      "Our eCommerce platform has seen a 300% increase in conversions since the redesign. The team understood our vision perfectly and brought it to life beautifully.",
    avatar:
      "https://images.unsplash.com/photo-1652471943570-f3590a4e52ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Marketing Director",
    company: "GrowthLabs",
    content:
      "The landing pages they created for our campaigns are converting at an incredible rate. Professional, responsive, and results-driven. Highly recommended!",
    avatar:
      "https://images.unsplash.com/photo-1543132220-7bc04a0e790a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    rating: 5,
  },
];

export { testimonials };


const filters = ['All', 'Websites', 'eCommerce', 'Landing Pages', 'UI/UX'];

export { filters }

const projects = [
  {
    id: 1,
    title: 'Mona',
    category: 'Landing Pages',
    tags: ['Design', 'Development', 'Conversion'],
    image: 'https://images.unsplash.com/photo-1560202582-a391c31ec300?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
  },
  {
    id: 2,
    title: 'Fashion eCommerce Store',
    category: 'eCommerce',
    tags: ['eCommerce', 'UI/UX', 'Shopify'],
    image: 'https://images.unsplash.com/photo-1658297063569-162817482fb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
  },
  {
    id: 3,
    title: 'Creative Agency Website',
    category: 'Websites',
    tags: ['Branding', 'Development', 'CMS'],
    image: 'https://images.unsplash.com/photo-1676792519027-7c42006d7b4a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
  },
  {
    id: 4,
    title: 'Mobile App Landing',
    category: 'Landing Pages',
    tags: ['Landing Page', 'Marketing', 'Mobile'],
    image: 'https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
  },
  {
    id: 5,
    title: 'SaaS Platform Interface',
    category: 'UI/UX',
    tags: ['UI/UX', 'Dashboard', 'SaaS'],
    image: 'https://images.unsplash.com/photo-1603985585179-3d71c35a537c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
  },
  {
    id: 6,
    title: 'Corporate Website',
    category: 'Websites',
    tags: ['Corporate', 'Professional', 'SEO'],
    image: 'https://images.unsplash.com/photo-1646153114001-495dfb56506d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
  },
  {
    id: 7,
    title: 'Online Marketplace',
    category: 'eCommerce',
    tags: ['Multi-vendor', 'eCommerce', 'Platform'],
    image: 'https://images.unsplash.com/photo-1658297063569-162817482fb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
  },
  {
    id: 8,
    title: 'Product Launch Page',
    category: 'Landing Pages',
    tags: ['Product', 'Marketing', 'Conversion'],
    image: 'https://images.unsplash.com/photo-1560202582-a391c31ec300?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
  },
  {
    id: 9,
    title: 'Design System',
    category: 'UI/UX',
    tags: ['Design System', 'Components', 'Branding'],
    image: 'https://images.unsplash.com/photo-1676792519027-7c42006d7b4a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
  },
];

export { projects };

const team = [
  {
    name: 'Agba Loveth',
    role: 'Founder & CEO',
    bio: 'Visionary leader with 5 years in web development and digital strategy.',
    image: oma,
  },
  {
    name: 'Howell Iheme',
    role: 'Lead Developer',
    bio: 'Front-end developer with 5 years of experience in web development and digital strategy.',
    image: howell,
  },
  // {
  //   name: 'Micheal Smith',
  //   role: 'UI/UX Designer',
  //   bio: 'Creative designer focused on user-centered design and beautiful interfaces.',
  //   image: 'https://images.unsplash.com/photo-1543132220-7bc04a0e790a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
  // },
  {
    name: 'Doris Nwankwo',
    role: 'Social Media Manager',
    bio: 'Social media expert with 5 years of experience in digital marketing and social media strategy.',
    image: doris,
  },
];

const values = [
  {
    icon: Heart,
    title: 'Client-Focused',
    description: 'Your success is our success. We prioritize understanding your needs and exceeding expectations.',
  },
  {
    icon: Shield,
    title: 'Quality First',
    description: 'We never compromise on quality. Every project receives our full attention to detail.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'We stay ahead of trends and use cutting-edge technologies to deliver modern solutions.',
  },
  {
    icon: Users2,
    title: 'Collaboration',
    description: 'We believe in transparent communication and working together as partners.',
  },
];

const process = [
  {
    number: 1,
    icon: MessageSquare,
    title: 'Discovery & Consultation',
    description: 'We start by understanding your business, goals, target audience, and project requirements through detailed discussions.',
  },
  {
    number: 2,
    icon: Search,
    title: 'Research & Planning',
    description: 'Our team conducts market research, competitor analysis, and creates a comprehensive project roadmap.',
  },
  {
    number: 3,
    icon: Palette,
    title: 'Design & Prototyping',
    description: 'We create wireframes and high-fidelity designs, ensuring every element aligns with your brand and vision.',
  },
  {
    number: 4,
    icon: Code2,
    title: 'Development & Testing',
    description: 'Our developers bring designs to life with clean code, followed by rigorous testing across all devices and browsers.',
  },
  {
    number: 5,
    icon: Rocket,
    title: 'Launch & Support',
    description: 'We handle the launch process and provide ongoing support to ensure your website continues to perform optimally.',
  },
];

const navLinks = [
  { name: "Home", page: "/" },
  { name: "Services", page: "services" },
  { name: "Portfolio", page: "portfolio" },
  { name: "About", page: "about" },
  { name: "Contact", page: "contact" },
];

const projectTypes = [
  {
    id: 'website',
    icon: Globe,
    title: 'Website Development',
    description: 'Custom business website',
  },
  {
    id: 'landing',
    icon: FileText,
    title: 'Landing Page',
    description: 'High-converting landing page',
  },
  {
    id: 'ecommerce',
    icon: ShoppingCart,
    title: 'eCommerce Store',
    description: 'Online store solution',
  },
];

const budgetRanges = [
  { id: 'small', label: '$2,000 - $5,000', value: 'small' },
  { id: 'medium', label: '$5,000 - $10,000', value: 'medium' },
  { id: 'large', label: '$10,000 - $25,000', value: 'large' },
  { id: 'enterprise', label: '$25,000+', value: 'enterprise' },
];

const timelines = [
  { id: 'urgent', label: '2-4 weeks', value: 'urgent' },
  { id: 'standard', label: '4-8 weeks', value: 'standard' },
  { id: 'flexible', label: '8-12 weeks', value: 'flexible' },
  { id: 'no-rush', label: 'No Rush', value: 'no-rush' },
];

const servicesData = [
  {
    icon: Code,
    title: 'Website Development',
    description: 'Custom websites built with the latest technologies to ensure optimal performance, security, and scalability.',
    features: [
      'Responsive mobile-first design',
      'Lightning-fast load times',
      'Clean, maintainable code',
      'Cross-browser compatibility',
      'SEO-friendly architecture',
    ],
  },
  {
    icon: Layout,
    title: 'Landing Page Design',
    description: 'High-converting landing pages designed to capture leads and drive your marketing campaigns to success.',
    features: [
      'Conversion-optimized layouts',
      'A/B testing ready',
      'Lead capture forms',
      'Analytics integration',
      'Compelling CTAs',
    ],
  },
  {
    icon: ShoppingCart,
    title: 'eCommerce Websites',
    description: 'Robust online stores that provide seamless shopping experiences and drive sales growth.',
    features: [
      'Payment gateway integration',
      'Inventory management',
      'Order tracking system',
      'Customer accounts',
      'Product filtering & search',
    ],
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Beautiful, intuitive interfaces crafted through user research and best practices in design.',
    features: [
      'User research & personas',
      'Wireframing & prototyping',
      'Visual design',
      'Usability testing',
      'Design systems',
    ],
  },
  {
    icon: Wrench,
    title: 'Web Maintenance',
    description: 'Ongoing support and maintenance to keep your website secure, updated, and running smoothly.',
    features: [
      'Regular updates & patches',
      'Security monitoring',
      'Performance optimization',
      'Content updates',
      'Bug fixes & support',
    ],
  },
  {
    icon: TrendingUp,
    title: 'SEO Optimization',
    description: 'Comprehensive SEO strategies to improve your search rankings and drive organic traffic.',
    features: [
      'Keyword research',
      'On-page optimization',
      'Technical SEO',
      'Content strategy',
      'Performance tracking',
    ],
  },
];

const pricingPlans = [
  {
    name: 'Starter',
    price: 'From $2,999',
    period: 'one-time',
    description: 'Perfect for small businesses and startups',
    features: [
      'Up to 5 pages',
      'Responsive design',
      'Basic SEO setup',
      'Contact form',
      '30 days support',
      'Stock images included',
    ],
  },
  {
    name: 'Professional',
    price: 'From $5,999',
    period: 'one-time',
    description: 'Ideal for growing businesses',
    features: [
      'Up to 15 pages',
      'Custom design',
      'Advanced SEO',
      'CMS integration',
      '90 days support',
      'Custom photography',
      'Analytics setup',
      'Social media integration',
    ],
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'contact us',
    description: 'For large-scale projects',
    features: [
      'Unlimited pages',
      'Custom features',
      'Full SEO package',
      'Multi-language support',
      '1 year support',
      'Dedicated manager',
      'Priority updates',
      'Advanced analytics',
    ],
  },
];

const faqs = [
  {
    question: 'How long does it take to build a website?',
    answer: 'Typical project timelines range from 4-8 weeks for standard websites, 8-12 weeks for eCommerce sites, and 2-4 weeks for landing pages. Complex custom projects may take longer. We provide detailed timelines during the consultation phase.',
  },
  {
    question: 'Do you provide website hosting?',
    answer: 'Yes, we can arrange hosting for your website through reliable providers, or we can work with your existing hosting setup. We recommend hosting solutions based on your specific needs and budget.',
  },
  {
    question: 'Can I update the website content myself?',
    answer: 'Absolutely! We typically build websites with user-friendly content management systems (CMS) that allow you to easily update text, images, and other content without technical knowledge. We also provide training and documentation.',
  },
  {
    question: 'What happens after my website launches?',
    answer: 'We provide ongoing support and maintenance packages to ensure your website stays secure, updated, and running smoothly. This includes software updates, security monitoring, backups, and technical support.',
  },
  {
    question: 'Do you offer SEO services?',
    answer: 'Yes, we offer comprehensive SEO services including keyword research, on-page optimization, technical SEO, content strategy, and ongoing optimization to improve your search engine rankings.',
  },
  {
    question: 'What if I need changes after the website is complete?',
    answer: 'We include a revision period in all projects, and offer ongoing support packages for continued updates and improvements. Minor changes during the support period are included, while larger modifications can be quoted separately.',
  },
];

const projectData = {
  id: 1,
  title: 'TechStart SaaS Landing Page',
  category: 'Landing Page',
  client: 'TechStart Inc.',
  date: 'October 2024',
  duration: '6 weeks',
  tags: ['Design', 'Development', 'Conversion Optimization', 'React'],
  url: 'https://example.com',
  heroImage: 'https://images.unsplash.com/photo-1560202582-a391c31ec300?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
  description:
    'TechStart needed a high-converting landing page for their new SaaS product launch. The goal was to capture leads, communicate value clearly, and drive sign-ups for their beta program.',
  challenge:
    'The main challenge was to create a landing page that would clearly communicate the complex features of their SaaS product in a simple, digestible way while maintaining high conversion rates. The page needed to appeal to both technical and non-technical audiences.',
  solution:
    'We designed a clean, modern landing page with a clear hierarchy of information. Using compelling visuals, concise copy, and strategic CTAs, we created a seamless user journey from awareness to conversion. The page features interactive elements, customer testimonials, and a simplified sign-up process.',
  results: [
    '45% increase in conversion rate',
    '3,500+ qualified leads generated',
    '60% reduction in bounce rate',
    '2.5x increase in demo requests',
  ],
  testimonial: {
    content:
      'The landing page exceeded our expectations. The design is beautiful, the messaging is clear, and most importantly, it converts. We saw immediate results from day one of the launch.',
    author: 'Blessing Iheme',
    role: 'CEO, Jochenna Thrift',
    avatar: 'https://images.unsplash.com/photo-1496180470114-6ef490f3ff22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
  },
};

const relatedProjects = [
  {
    id: 2,
    title: 'Fashion eCommerce Store',
    category: 'eCommerce',
    tags: ['eCommerce', 'UI/UX'],
    image: 'https://images.unsplash.com/photo-1658297063569-162817482fb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
  },
  {
    id: 3,
    title: 'Creative Agency Website',
    category: 'Website',
    tags: ['Branding', 'Development'],
    image: 'https://images.unsplash.com/photo-1676792519027-7c42006d7b4a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
  },
  {
    id: 4,
    title: 'Mobile App Landing',
    category: 'Landing Page',
    tags: ['Landing Page', 'Marketing'],
    image: 'https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
  },
];


export { team, values, process, navLinks, projectTypes, budgetRanges, timelines, servicesData, pricingPlans, faqs, projectData, relatedProjects };
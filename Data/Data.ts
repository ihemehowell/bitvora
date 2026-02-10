import { 
  ArrowRight, 
  CheckCircle, 
  Code, 
  Palette, 
  ShoppingCart, 
  Users, 
  Award, 
  Zap, 
  LucideIcon, 
  Rocket, 
  Code2, 
  Search, 
  MessageSquare, 
  Users2, 
  Lightbulb, 
  Shield, 
  Heart, 
  FileText, 
  Globe, 
  TrendingUp, 
  Wrench, 
  Layout, 
  CodeXml, 
  Megaphone, 
  Brush,
  Target,
  Eye,
  Calendar,
  DollarSign,
  ExternalLink,
  Send,
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  ChevronRight,
  ChevronLeft,
  Check,
  Menu,
  X
} from "lucide-react";
import { StaticImageData } from "next/image";

import { oma, howell, doris } from '../assets/team';
import { project1, project2, project3 } from '../assets/portfolio';

// ============================================
// TYPES
// ============================================

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
  image: string | StaticImageData;
  href: string;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
  rating: number;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: StaticImageData | string;
}

export interface Value {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface ProcessStep {
  number: number;
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface NavLink {
  name: string;
  href: string;
}

export interface ProjectType {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface BudgetRange {
  id: string;
  label: string;
  value: string;
}

export interface Timeline {
  id: string;
  label: string;
  value: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface ContactInfo {
  icon: LucideIcon;
  title: string;
  value: string;
  link: string;
}

// ============================================
// NAVIGATION
// ============================================

export const navLinks: NavLink[] = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

// ============================================
// SERVICES
// ============================================

export const services: Service[] = [
  {
    icon: Code,
    title: "Website Development",
    description: "Custom-built websites tailored to your business needs with modern technologies.",
    features: ["Responsive Design", "Fast Performance", "SEO Optimized"],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Beautiful, intuitive designs that provide exceptional user experiences.",
    features: ["User Research", "Wireframing", "Prototyping"],
  },
  {
    icon: ShoppingCart,
    title: "eCommerce Solutions",
    description: "Powerful online stores that drive sales and grow your business.",
    features: ["Payment Integration", "Inventory Management", "Analytics"],
  },
];

export const servicesData: Service[] = [
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
  {
    icon: CodeXml,
    title: 'App Development',
    description: 'High-performance mobile and web applications tailored to your business needs.',
    features: [
      'Cross-platform development',
      'Custom web applications',
      'API integration & backend',
      'Modern UI/UX design',
      'Testing & maintenance',
    ],
  },
  {
    icon: Megaphone,
    title: 'Digital Marketing',
    description: 'Result-driven digital marketing services to grow your online presence.',
    features: [
      'Social media management',
      'Paid Ads (Google & Meta)',
      'Email marketing campaigns',
      'Content creation',
      'Analytics & tracking',
    ],
  },
  {
    icon: Brush,
    title: 'Branding & Graphics',
    description: 'Creative branding solutions that give your business a strong visual identity.',
    features: [
      'Logo design & brand identity',
      'Business cards & brand kits',
      'Social media graphics',
      'Marketing materials',
      'Brand guidelines',
    ],
  },
];

// ============================================
// PORTFOLIO
// ============================================

export const portfolioProjects: Project[] = [
  {
    id: 1,
    title: "Mek Print Landing Page",
    category: "Landing Page",
    tags: ["Design", "Development", "Landing Page"],
    image: project1,
    href: 'https://mekprint.vercel.app/',
  },
  {
    id: 2,
    title: "iPhone eCommerce Store",
    category: "eCommerce",
    tags: ["eCommerce", "UI/UX"],
    image: project2,
    href: 'https://applestore-07.vercel.app/',
  },
  {
    id: 3,
    title: "SkyCast Weather Webapp",
    category: "WebApps",
    tags: ["WebApp", "API Integration", "React", "TailwindCSS"],
    image: project3,
    href: 'https://skycast-app.vercel.app/',
  },
];

export const projects: Project[] = portfolioProjects;

export const portfolioFilters = ['All', 'Websites', 'eCommerce', 'Landing Pages', 'UI/UX'];

// ============================================
// WHY CHOOSE US
// ============================================

export const whyChooseUs: WhyChooseUsItem[] = [
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "Get your website launched quickly without compromising on quality.",
    color: "text-cyan-400"
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Work with experienced developers and designers who care about your success.",
    color: 'text-cyan-300'
  },
  {
    icon: Award,
    title: "Quality Assured",
    description: "Rigorous testing ensures your website works flawlessly across all devices.",
    color: "text-cyan-500"
  },
  {
    icon: CheckCircle,
    title: "Ongoing Support",
    description: "Continuous maintenance and support to keep your website running smoothly.",
    color: "text-cyan-400"
  },
];

// ============================================
// TESTIMONIALS
// ============================================

export const testimonials: Testimonial[] = [
  {
    name: "Sarah Johnson",
    role: "CEO",
    company: "TechVision Inc",
    content: "Working with Bitvoratech was an absolute pleasure. They delivered our website ahead of schedule and exceeded all our expectations.",
    avatar: "https://images.unsplash.com/photo-1496180470114-6ef490f3ff22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Founder",
    company: "StyleHub",
    content: "Our eCommerce platform has seen a 300% increase in conversions since the redesign. The team understood our vision perfectly.",
    avatar: "https://images.unsplash.com/photo-1652471943570-f3590a4e52ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Marketing Director",
    company: "GrowthLabs",
    content: "The landing pages they created for our campaigns are converting at an incredible rate. Professional, responsive, and results-driven.",
    avatar: "https://images.unsplash.com/photo-1543132220-7bc04a0e790a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    rating: 5,
  },
];

// ============================================
// TEAM
// ============================================

export const team: TeamMember[] = [
  {
    name: 'Agba Loveth',
    role: 'Founder & CEO',
    bio: 'Visionary leader with 5 years in web development and digital strategy.',
    image: oma,
  },
  {
    name: 'Howell Iheme',
    role: 'Lead Developer',
    bio: 'Front-end developer with 5 years of experience in web development.',
    image: howell,
  },
  {
    name: 'Doris Nwankwo',
    role: 'Social Media Manager',
    bio: 'Social media expert with 5 years of experience in digital marketing.',
    image: doris,
  },
];

// ============================================
// VALUES
// ============================================

export const values: Value[] = [
  {
    icon: Heart,
    title: 'Client-Focused',
    description: 'Your success is our success. We prioritize understanding your needs.',
  },
  {
    icon: Shield,
    title: 'Quality First',
    description: 'We never compromise on quality. Every project receives full attention.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'We stay ahead of trends and use cutting-edge technologies.',
  },
  {
    icon: Users2,
    title: 'Collaboration',
    description: 'We believe in transparent communication and working together.',
  },
];

// ============================================
// PROCESS
// ============================================

export const process: ProcessStep[] = [
  {
    number: 1,
    icon: MessageSquare,
    title: 'Discovery & Consultation',
    description: 'We start by understanding your business, goals, and project requirements.',
  },
  {
    number: 2,
    icon: Search,
    title: 'Research & Planning',
    description: 'Our team conducts market research and creates a comprehensive roadmap.',
  },
  {
    number: 3,
    icon: Palette,
    title: 'Design & Prototyping',
    description: 'We create wireframes and high-fidelity designs that align with your vision.',
  },
  {
    number: 4,
    icon: Code2,
    title: 'Development & Testing',
    description: 'Our developers bring designs to life with clean code and rigorous testing.',
  },
  {
    number: 5,
    icon: Rocket,
    title: 'Launch & Support',
    description: 'We handle the launch process and provide ongoing support.',
  },
];

// ============================================
// QUOTE FORM
// ============================================

export const projectTypes: ProjectType[] = [
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

export const budgetRanges: BudgetRange[] = [
  { id: 'small', label: '₦120,000 - ₦350,000', value: 'small' },
  { id: 'medium', label: '₦350,001 - ₦600,000', value: 'medium' },
  { id: 'large', label: '₦600,001 - ₦1,500,000', value: 'large' },
  { id: 'enterprise', label: '₦1,500,001+', value: 'enterprise' },
];

export const timelines: Timeline[] = [
  { id: 'urgent', label: '2-4 weeks', value: 'urgent' },
  { id: 'standard', label: '4-8 weeks', value: 'standard' },
  { id: 'flexible', label: '8-12 weeks', value: 'flexible' },
  { id: 'no-rush', label: 'No Rush', value: 'no-rush' },
];

// ============================================
// PRICING
// ============================================

export const pricingPlans: PricingPlan[] = [
  {
    name: 'Starter',
    price: 'From ₦350,000',
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
    price: 'From ₦750,000',
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
    price: 'Custom Quote',
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

// ============================================
// FAQ
// ============================================

export const faqs: FAQ[] = [
  {
    question: "How long does it take to build a website?",
    answer: "The timeline varies based on project complexity. A simple landing page takes 1-2 weeks, while a full eCommerce site may take 4-8 weeks. We provide a detailed timeline during the quote phase.",
  },
  {
    question: "Do you provide ongoing maintenance?",
    answer: "Yes! We offer various maintenance packages to keep your website secure, updated, and performing optimally.",
  },
  {
    question: "Can you help with domain and hosting?",
    answer: "Absolutely. We can assist with domain registration, hosting setup, and configuration to ensure your site is ready for launch.",
  },
  {
    question: "Do you offer SEO services?",
    answer: "Yes, we provide comprehensive SEO services including keyword research, on-page optimization, and technical SEO to improve your search rankings.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept bank transfers and mobile payment platforms. We typically require a 50% deposit to begin work.",
  },
];

// ============================================
// CONTACT
// ============================================

export const contactInfo: ContactInfo[] = [
  {
    icon: Mail,
    title: 'Email',
    value: 'info@bitvoratech.com',
    link: 'mailto:info@bitvoratech.com',
  },
  {
    icon: Phone,
    title: 'Phone',
    value: '+234 9061846290',
    link: 'tel:+2349061846290',
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp',
    value: '+234 9061846290',
    link: 'https://wa.me/+2349061846290',
  },
  {
    icon: MapPin,
    title: 'Office',
    value: '2, Dacosta Street, Yaba Lagos',
    link: '#',
  },
];

export const businessHours = [
  { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM' },
  { day: 'Saturday', hours: '10:00 AM - 4:00 PM' },
  { day: 'Sunday', hours: 'Closed' },
];

// ============================================
// SOCIAL LINKS
// ============================================

export const socialLinks = [
  { name: 'Facebook', href: '#', icon: 'facebook' },
  { name: 'Twitter', href: '#', icon: 'twitter' },
  { name: 'Instagram', href: '#', icon: 'instagram' },
  { name: 'LinkedIn', href: '#', icon: 'linkedin' },
];

// ============================================
// FOOTER LINKS
// ============================================

export const footerLinks = {
  quickLinks: [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Contact', href: '/contact' },
  ],
  services: [
    'Website Development',
    'Landing Page Design',
    'eCommerce Websites',
    'UI/UX Design',
    'Web Maintenance',
    'SEO Optimization',
  ],
  legal: [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'Cookie Policy', href: '#' },
  ],
};

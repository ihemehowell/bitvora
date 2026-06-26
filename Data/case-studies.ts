import {case1, case2} from '@/assets/case-study';
import { StaticImageData } from 'next/image';


export interface Metric {
    label: string
    value: string
}

export interface CaseStudy {

    id: string
    category: string
    client: string
    title: string
    excerpt: string
    overview: string
    challenge: string
    solution: string
    results: string
    metrics: Metric[]
    tags: string[]
    featured?: boolean
    accentColor: string
    duration: string
    year: string
    image: string | StaticImageData;
}

export const caseStudies: CaseStudy[] = [
    {
        id: 'greenwork',
        category: 'Marketplace',
        client: 'GreenWork',
        title: 'A green jobs marketplace built for Nigeria and West Africa',
        excerpt: 'Designed and built a job marketplace connecting African talent with sustainability-focused employers, with AI-assisted resume review and a forest-green design system built around local context.',
        overview: 'GreenWork is a job marketplace focused on the green economy across Nigeria and West Africa — connecting job seekers with employers in renewable energy, sustainable agriculture, and climate-focused sectors. The product needed to feel credible and modern while staying lightweight enough for the connectivity conditions common in the region.',
        challenge: 'Job marketplaces live or die on search and filtering — job seekers needed to narrow listings by location, sector, and job type without the UI ever feeling sluggish, and filter state needed to survive page refreshes and be shareable as a link. The product also needed a way to help job seekers get useful, specific feedback on their resumes without hiring a human reviewer for every applicant.',
        solution: 'Built on Next.js 14 with Supabase for auth and data, the listings page uses TanStack Query for data fetching and the nuqs library to keep filter state (location, sector, job type) synced to the URL, so every filtered view is a shareable, bookmarkable link. AI-assisted resume review was integrated using the Anthropic API to give job seekers structured, specific feedback on their applications. A messaging system and community forum were added so job seekers and employers could communicate directly inside the platform, all wrapped in a custom dark forest-green design system designed to differentiate the brand from generic SaaS templates.',
        results: 'Shipped a full marketplace flow end-to-end: landing page, authentication, filterable job listings with shareable URL state, in-app messaging, a community forum, and AI-powered resume feedback — built and iterated solo as a founder-led product.',
        metrics: [
            { label: 'Core flow', value: 'End-to-end' },
            { label: 'AI feature', value: 'Resume review' },
            { label: 'Stack', value: 'Next.js + Supabase' },
            { label: 'Built by', value: 'Solo founder' },
        ],
        tags: ['Next.js', 'Supabase', 'TanStack Query', 'Paystack'],
        featured: true,
        accentColor: 'from-emerald-500/20 to-transparent',
        duration: 'Ongoing',
        year: '2025',
        image: case2,
    },
    {
        id: 'smeos',
        category: 'SaaS',
        client: 'SMEOS',
        title: 'A multi-tenant operating system for African SMEs',
        excerpt: 'Built a full-stack business management platform — customers, quotations, invoices, and expenses — designed for small and medium businesses across Africa, with org-level data isolation from day one.',
        overview: 'SMEOS (SME Operating System) is a business management SaaS aimed at small and medium enterprises across Africa, covering the day-to-day operational needs many SMEs currently juggle across spreadsheets and paper records: customers, quotations, invoices, and expenses.',
        challenge: 'A multi-tenant product needs strict data isolation between organisations from the very first line of backend code — there\'s no retrofitting that safely later. The project also meant adopting Prisma 7 close to its release, which introduced several breaking changes from earlier versions that had to be worked through directly rather than relying on established patterns.',
        solution: 'The backend was scaffolded with Prisma 7 on Supabase PostgreSQL, with JWT-based authentication and every API route scoped to an organisation ID to enforce tenant isolation at the data layer. Customers, quotations, invoices, and expenses were each built as org-scoped resources with their own API routes. The frontend pairs a Next.js dashboard with sidebar navigation and a dedicated stats endpoint summarising business activity at a glance.',
        results: 'Delivered a working multi-tenant backend and dashboard covering the core SME workflow — customer records, quotations, invoicing, and expense tracking — with org-scoped APIs and authentication built in from the start, including direct resolution of multiple Prisma 7 breaking-change issues during the build.',
        metrics: [
            { label: 'Core modules', value: '4' },
            { label: 'Architecture', value: 'Multi-tenant' },
            { label: 'Stack', value: 'Prisma 7 + Supabase' },
            { label: 'Auth', value: 'JWT, org-scoped' },
        ],
        tags: ['Next.js', 'Prisma', 'Supabase', 'PostgreSQL'],
        accentColor: 'from-cyan-500/20 to-transparent',
        duration: 'Ongoing',
        year: '2025',
        image: case1,
    },
]

export const stats = [
    { label: 'Live case studies', value: '2' },
    { label: 'Core stack', value: 'Next.js & Supabase' },
    { label: 'Markets', value: 'Nigeria & West Africa' },
    { label: 'Built by', value: 'Solo founder' },
]

export const categories = ['All', ...Array.from(new Set(caseStudies.map(c => c.category)))]
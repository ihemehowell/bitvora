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
}

export const caseStudies: CaseStudy[] = [
    {
        id: 'fintech-dashboard',
        category: 'Fintech',
        client: 'ClearLedger',
        title: 'Real-time trading dashboard processing 2M events/sec',
        excerpt: 'Rebuilt a legacy desktop app into a web-native platform with sub-100ms latency, custom charting engine, and multi-account portfolio views.',
        overview: 'ClearLedger is a professional trading platform used by independent fund managers and prop desks. Their existing desktop client was slow, hard to maintain, and couldn\'t support the collaboration features their users demanded.',
        challenge: 'The legacy app was built in C++ and shipped as a desktop installer. Adding new features took months, and the platform couldn\'t handle real-time data at the volume their growing user base required. They needed a full rebuild without losing existing users.',
        solution: 'We designed a web-native architecture using React with a custom WebSocket layer capable of handling 2M+ events per second. A bespoke charting engine replaced third-party libraries, reducing bundle size by 40%. We migrated users in three phases with zero downtime.',
        results: 'Within six months of launch, active users grew 340%. The new platform handles 10x the previous data volume with half the infrastructure cost. Feature release cycles dropped from 3 months to 2 weeks.',
        metrics: [
            { label: 'Events/sec', value: '2M+' },
            { label: 'Latency', value: '<100ms' },
            { label: 'User growth', value: '340%' },
            { label: 'Infra cost', value: '-50%' },
        ],
        tags: ['React', 'WebSockets', 'PostgreSQL', 'AWS'],
        featured: true,
        accentColor: 'from-cyan-500/20 to-transparent',
        duration: '6 months',
        year: '2024',
    },
    {
        id: 'healthtech-portal',
        category: 'Healthcare',
        client: 'MediFlow',
        title: 'HIPAA-compliant patient portal serving 80k users',
        excerpt: 'Designed and built a telehealth platform with appointment booking, encrypted messaging, and EHR integration — from zero to launch in 14 weeks.',
        overview: 'MediFlow wanted to bring their network of 300+ clinicians online with a unified patient-facing portal. The platform needed to meet strict HIPAA requirements while remaining simple enough for elderly patients to use.',
        challenge: 'Healthcare compliance adds significant complexity — end-to-end encryption, audit logs, BAAs with every vendor, and strict data residency requirements. Previous agencies had quoted 18+ months. MediFlow needed to launch in one quarter.',
        solution: 'We standardised on a HIPAA-eligible AWS stack, built encrypted messaging with per-patient key derivation, and integrated with three major EHR systems via HL7 FHIR. A dedicated accessibility audit ensured WCAG 2.1 AA compliance throughout.',
        results: 'Launched in 14 weeks to 80,000 users across 12 states. Clinician adoption reached 94% within the first month. The platform has maintained 99.99% uptime since launch.',
        metrics: [
            { label: 'Active users', value: '80k' },
            { label: 'Time to launch', value: '14 wks' },
            { label: 'Uptime', value: '99.99%' },
            { label: 'Clinician adoption', value: '94%' },
        ],
        tags: ['Next.js', 'Node.js', 'MongoDB', 'HIPAA'],
        accentColor: 'from-emerald-500/20 to-transparent',
        duration: '14 weeks',
        year: '2024',
    },
    {
        id: 'ecommerce-platform',
        category: 'E-commerce',
        client: 'Arkade',
        title: 'Headless commerce platform handling $4M monthly GMV',
        excerpt: 'Migrated a monolithic Shopify store to a custom headless stack — cutting page load times by 60% and increasing conversion rates significantly.',
        overview: 'Arkade is a direct-to-consumer electronics brand doing $4M+ monthly. Their Shopify store was hitting customisation limits and their page speed scores were hurting paid acquisition ROI.',
        challenge: 'Shopify\'s theme system prevented the interactive product experiences Arkade\'s team envisioned. Every page load cost them conversions. The migration needed to happen without disrupting the existing store or losing SEO equity.',
        solution: 'We built a headless Next.js frontend connected to Shopify\'s Storefront API, with a custom CMS for marketing pages. A/B testing infrastructure was built in from day one. The migration ran in parallel with zero downtime using feature flags.',
        results: 'Page load times dropped 60%. Conversion rate increased 28%. The new architecture supports flash sales with 50x normal traffic without degradation.',
        metrics: [
            { label: 'Monthly GMV', value: '$4M' },
            { label: 'Page load', value: '-60%' },
            { label: 'Conversion', value: '+28%' },
            { label: 'Traffic spikes', value: '50x' },
        ],
        tags: ['Next.js', 'Stripe', 'Vercel', 'GraphQL'],
        accentColor: 'from-orange-500/20 to-transparent',
        duration: '10 weeks',
        year: '2023',
    },
    {
        id: 'saas-platform',
        category: 'SaaS',
        client: 'Stackform',
        title: 'Multi-tenant SaaS platform from MVP to Series A',
        excerpt: 'Took a founder\'s wireframes to a production-grade multi-tenant platform with role-based access, usage billing, and a white-label offering.',
        overview: 'Stackform\'s founder had a clear vision and rough wireframes but no technical co-founder. They needed a full product team to take them from idea to fundable product in under six months.',
        challenge: 'Multi-tenancy, role-based permissions, and usage-based billing are each complex in isolation. Building all three simultaneously while keeping the product simple enough for a smooth demo to investors required extreme focus on architecture from day one.',
        solution: 'We designed a tenant isolation model using row-level security in PostgreSQL, built a flexible RBAC system, and integrated Stripe Billing for metered usage. The white-label feature was architected as a first-class concern, not bolted on later.',
        results: 'Launched MVP in 18 weeks. Reached 1,200 tenants organically. MRR grew 8x in the following year. Stackform closed their Series A six months post-launch.',
        metrics: [
            { label: 'Tenants', value: '1,200+' },
            { label: 'MRR growth', value: '8x' },
            { label: 'Churn', value: '<2%' },
            { label: 'Time to MVP', value: '18 wks' },
        ],
        tags: ['React', 'Python', 'PostgreSQL', 'Stripe'],
        accentColor: 'from-violet-500/20 to-transparent',
        duration: '18 weeks',
        year: '2023',
    },
    {
        id: 'logistics-tracker',
        category: 'Logistics',
        client: 'FleetOps',
        title: 'Fleet tracking system monitoring 6,000 vehicles live',
        excerpt: 'Built a real-time logistics platform with live GPS tracking, route optimisation, driver scoring, and automated dispatch — replacing three legacy tools.',
        overview: 'FleetOps manages last-mile delivery for three major retailers across the UK. Their dispatchers were juggling three separate tools — a GPS tracker, a route planner, and a driver app — none of which talked to each other.',
        challenge: 'Consolidating three systems without disrupting daily operations across 6,000 active vehicles was the central challenge. Real-time GPS at this scale requires careful infrastructure design to avoid latency spikes during peak hours.',
        solution: 'We built a unified platform with a React dashboard, a React Native driver app, and a Node.js backend using Redis for real-time state management. Route optimisation runs as a background service using a custom algorithm tuned for UK road data.',
        results: 'Dispatchers now manage everything from one screen. Fuel costs dropped 22% from better routing. Three legacy tool subscriptions were cancelled, saving £180k/year.',
        metrics: [
            { label: 'Vehicles tracked', value: '6k' },
            { label: 'Fuel savings', value: '22%' },
            { label: 'Annual savings', value: '£180k' },
            { label: 'Tools replaced', value: '3' },
        ],
        tags: ['React', 'Node.js', 'Redis', 'AWS'],
        accentColor: 'from-yellow-500/20 to-transparent',
        duration: '5 months',
        year: '2024',
    },
    {
        id: 'edtech-lms',
        category: 'EdTech',
        client: 'Learnly',
        title: 'Live classroom LMS scaling to 200k concurrent learners',
        excerpt: 'Architected a scalable LMS with live video, real-time quizzes, progress analytics, and a mobile app — used in 40+ countries.',
        overview: 'Learnly provides live online classes to K-12 students across Africa and Southeast Asia. Their existing platform couldn\'t handle simultaneous sessions during peak school hours, causing widespread dropouts.',
        challenge: 'Supporting 200,000 concurrent users across low-bandwidth regions required both architectural and UX innovation. Video had to be adaptive, the UI had to work on low-end Android devices, and the platform needed to function on 2G connections.',
        solution: 'We rebuilt the platform on a Kubernetes cluster with auto-scaling, integrated with a regional CDN for adaptive video streaming, and built an offline-first React Native app that syncs progress when connectivity is restored.',
        results: 'Platform now handles 200k concurrent learners without degradation. Course completion rates increased 55%. The mobile app is used in 40+ countries with an average rating of 4.7.',
        metrics: [
            { label: 'Concurrent users', value: '200k' },
            { label: 'Countries', value: '40+' },
            { label: 'Completion rate', value: '+55%' },
            { label: 'App rating', value: '4.7★' },
        ],
        tags: ['React Native', 'Node.js', 'Docker', 'Kubernetes'],
        accentColor: 'from-pink-500/20 to-transparent',
        duration: '7 months',
        year: '2023',
    },
    {
        id: 'ai-analytics',
        category: 'AI & ML',
        client: 'Signalify',
        title: 'AI-powered analytics platform cutting reporting time by 90%',
        excerpt: 'Built an LLM-powered data platform that lets non-technical teams query their data in plain English and get boardroom-ready charts instantly.',
        overview: 'Signalify sells analytics to mid-market retail chains. Their customers had rich data but no data scientists to interpret it. Every insight request went through a bottleneck of one overworked analyst.',
        challenge: 'Natural language to SQL is a solved problem in research but unreliable in production. The system needed to handle ambiguous queries gracefully, explain its reasoning, and never return confidently wrong answers.',
        solution: 'We built a RAG pipeline that maps user queries to a curated schema description, generates and validates SQL before execution, and returns results with a plain-English explanation. Guardrails prevent hallucinated column names from reaching the database.',
        results: 'Reporting time dropped 90%. The single analyst now handles 10x the request volume. Customer NPS increased 34 points in the six months after launch.',
        metrics: [
            { label: 'Reporting time', value: '-90%' },
            { label: 'Query accuracy', value: '97%' },
            { label: 'NPS increase', value: '+34' },
            { label: 'Analyst capacity', value: '10x' },
        ],
        tags: ['Python', 'PostgreSQL', 'OpenAI', 'Next.js'],
        accentColor: 'from-blue-500/20 to-transparent',
        duration: '4 months',
        year: '2024',
    },
    {
        id: 'enterprise-portal',
        category: 'Enterprise',
        client: 'Meridian Group',
        title: 'Internal operations portal unifying 14 legacy systems',
        excerpt: 'Replaced a patchwork of spreadsheets and legacy tools with a unified operations portal — saving 3,000 staff hours per month.',
        overview: 'Meridian Group is a 2,000-person professional services firm running critical operations across 14 disconnected systems. Staff spent hours daily copy-pasting between tools and chasing approvals over email.',
        challenge: 'Legacy integration is unglamorous but unforgiving. Each system had a different API style, data model, and auth mechanism. Change management was as hard as the technical work — getting 2,000 people to adopt a new tool is its own project.',
        solution: 'We built a unified portal with a custom integration layer that normalises data from all 14 systems. A workflow engine handles approvals, escalations, and notifications. Rollout used a department-by-department adoption strategy with embedded champions.',
        results: '3,000 staff hours saved per month. 14 separate tool logins reduced to one. Employee satisfaction scores for internal tooling increased from 2.8 to 4.4 out of 5.',
        metrics: [
            { label: 'Hours saved/mo', value: '3,000' },
            { label: 'Systems unified', value: '14' },
            { label: 'Satisfaction', value: '4.4/5' },
            { label: 'Adoption rate', value: '96%' },
        ],
        tags: ['React', 'Node.js', 'PostgreSQL', 'Docker'],
        accentColor: 'from-slate-500/20 to-transparent',
        duration: '8 months',
        year: '2024',
    },
]

export const stats = [
    { label: 'Projects delivered', value: '120+' },
    { label: 'Combined GMV managed', value: '$40M+' },
    { label: 'Average uptime', value: '99.97%' },
    { label: 'Countries reached', value: '40+' },
]

export const categories = ['All', ...Array.from(new Set(caseStudies.map(c => c.category)))]
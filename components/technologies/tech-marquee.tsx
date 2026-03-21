'use client'
import {
    IconBrandReact,
    IconBrandNextjs,
    IconBrandTypescript,
    IconBrandNodejs,
    IconBrandPython,
    IconBrandDocker,
    IconBrandAws,
    IconBrandMongodb,
    // IconBrandRedis,
    IconBrandGraphql,
    IconBrandTailwind,
    IconBrandFigma,
    IconBrandStripe,
    IconBrandVercel,
} from '@tabler/icons-react'
import { Database, Server } from 'lucide-react'

const technologies = [
    { name: 'React',      Icon: IconBrandReact },
    { name: 'Next.js',    Icon: IconBrandNextjs },
    { name: 'TypeScript', Icon: IconBrandTypescript },
    { name: 'Node.js',    Icon: IconBrandNodejs },
    { name: 'Python',     Icon: IconBrandPython },
    { name: 'PostgreSQL', Icon: Database },
    { name: 'MongoDB',    Icon: IconBrandMongodb },
    // { name: 'Redis',      Icon: IconBrandRedis },
    { name: 'AWS',        Icon: IconBrandAws },
    { name: 'Docker',     Icon: IconBrandDocker },
    { name: 'Kubernetes', Icon: Server },
    { name: 'GraphQL',    Icon: IconBrandGraphql },
    { name: 'Tailwind',   Icon: IconBrandTailwind },
    { name: 'Figma',      Icon: IconBrandFigma },
    { name: 'Stripe',     Icon: IconBrandStripe },
    { name: 'Vercel',     Icon: IconBrandVercel },
]

function MarqueeRow({ reverse = false }: { reverse?: boolean }) {
    const items = [...technologies, ...technologies]
    return (
        <div className="overflow-hidden relative">
            <div className="pointer-events-none absolute left-0 top-0 h-full w-32 z-10 bg-gradient-to-r from-background to-transparent" />
            <div className="pointer-events-none absolute right-0 top-0 h-full w-32 z-10 bg-gradient-to-l from-background to-transparent" />
            <div className={`flex gap-3 w-max ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`}>
                {items.map(({ name, Icon }, i) => (
                    <div
                        key={i}
                        className="group flex items-center gap-2.5 px-4 py-2 rounded-full border border-border bg-card hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 shrink-0 cursor-default"
                    >
                        <Icon size={16} className="text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                        <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-300 whitespace-nowrap">
                            {name}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export function TechMarquee() {
    return (
        <section className="py-10 space-y-3 overflow-hidden">
            <MarqueeRow />
            <MarqueeRow reverse />
        </section>
    )
}
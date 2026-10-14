"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { portfolioProjects } from "@/Data/Data";

/**
 * Social-proof strip under the hero: a slow, pausable marquee of real
 * client sites. Duplicated once so the -50% keyframe loops seamlessly.
 */
export default function WorkMarquee() {
  const items = [...portfolioProjects, ...portfolioProjects];

  return (
      <section aria-labelledby="work-marquee-heading" className="py-12 border-y border-border bg-card/30">
        <div className="container mx-auto px-6 mb-6 flex items-center justify-between gap-4">
          <h2 id="work-marquee-heading" className="text-xs uppercase tracking-[0.2em] text-muted-foreground mono">
            Recently shipped for clients
          </h2>
          <span className="hidden sm:block text-xs text-muted-foreground">Hover to pause · click to visit</span>
        </div>

        <div className="relative overflow-hidden mask-fade-x pause-on-hover">
          <ul className="flex w-max gap-5 animate-marquee [animation-duration:45s]">
            {items.map((project, i) => (
                <li key={`${project.id}-${i}`} aria-hidden={i >= portfolioProjects.length || undefined}>
                  <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      tabIndex={i >= portfolioProjects.length ? -1 : undefined}
                      className="group block w-64 rounded-xl overflow-hidden border border-border bg-card transition-colors hover:border-primary/40"
                  >
                    <div className="relative h-36 overflow-hidden">
                      <Image
                          src={project.image}
                          alt={project.title}
                          sizes="256px"
                          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex items-center justify-between px-3 py-2.5">
                      <div className="min-w-0">
                        <p className="text-sm font-medium text-foreground truncate">{project.title}</p>
                        <p className="text-xs text-muted-foreground">{project.category}</p>
                      </div>
                      <ArrowUpRight size={16} className="shrink-0 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                  </a>
                </li>
            ))}
          </ul>
        </div>
      </section>
  );
}

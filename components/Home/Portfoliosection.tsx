import React from "react";
import { portfolioProjects } from "@/Data/Data";
import { PortfolioCard } from "@/components/PortfolioCard";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";


interface Props {
  onNavigate: (page: string, id?: number) => void;
}

export default function PortfolioSection({ onNavigate }: Props) {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6">

        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-gray-900 text-2xl font-semibold">Featured Projects</h2>
            <p className="text-gray-600 text-sm">
              See how we've helped businesses achieve their goals
            </p>
          </div>

          <Button
            onClick={() => onNavigate("portfolio")}
            variant="ghost"
            className="text-primary-600 hidden md:flex"
          >
            View All <ArrowRight size={18} />
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioProjects.map((project, index) => (
            <PortfolioCard
              key={project.id}
              {...project}
              index={index}
              onViewDetails={(id) => onNavigate("portfolio-detail", id)}
            />
          ))}
        </div>

        <div className="text-center mt-8 md:hidden">
          <Button
            onClick={() => onNavigate("portfolio")}
            variant="ghost"
            className="text-primary-600"
          >
            View All Projects <ArrowRight size={18} />
          </Button>
        </div>

      </div>
    </section>
  );
}

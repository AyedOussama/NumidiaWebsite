import { ExternalLink } from "lucide-react";
import Image from "next/image";

import type { PortfolioProject } from "@/lib/data";

type PortfolioCardProps = {
  project: PortfolioProject;
};

export function PortfolioCard({ project }: PortfolioCardProps) {
  return (
    <article className="group rounded-3xl overflow-hidden bg-gray-50 hover:bg-emerald-50 transition-colors duration-300 border border-gray-100">
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-emerald-950/20 group-hover:bg-transparent transition-colors duration-300" />
      </div>
      <div className="p-8">
        <span className="text-xs font-bold text-amber-500 uppercase tracking-wider mb-2 block">
          {project.category}
        </span>
        <h3 className="text-2xl font-bold text-emerald-950 mb-4">
          {project.title}
        </h3>
        <p className="text-gray-600 mb-6 line-clamp-3">{project.description}</p>
        <div className="flex items-center text-emerald-800 font-semibold group-hover:text-emerald-600">
          Voir le cas client <ExternalLink className="ml-2 w-4 h-4" />
        </div>
      </div>
    </article>
  );
}

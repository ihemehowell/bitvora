import type { MetadataRoute } from "next";
import { caseStudies } from "@/Data/case-studies";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.bitvoratech.com";

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/about`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/services`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/services/web`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/services/mobile`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/services/design`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/services/consulting`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/projects`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/case-studies`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/technologies`, changeFrequency: "monthly", priority: 0.5 },
    { url: `${baseUrl}/pricing`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/faqs`, changeFrequency: "monthly", priority: 0.5 },
    { url: `${baseUrl}/contact`, changeFrequency: "yearly", priority: 0.6 },
    { url: `${baseUrl}/quote`, changeFrequency: "yearly", priority: 0.8 },
    { url: `${baseUrl}/privacy-policy`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/terms-of-service`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/cookie-policy`, changeFrequency: "yearly", priority: 0.3 },
  ];

  const caseStudyRoutes: MetadataRoute.Sitemap = caseStudies.map((study) => ({
    url: `${baseUrl}/case-studies/${study.id}`,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...caseStudyRoutes];
}

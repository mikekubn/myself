import type { Metadata } from "next/types";

const BASE_METADATA: Metadata = {
  title: "Michael Kubin - Software Engineer",
  description:
    "Michael Kubin - Software Engineer & Digital Craftsman. Specializing in software development & application architecture.",
  keywords:
    "Software Engineer, Digital Craftsman, TypeScript Developer, React Architect, JavaScript Expert, Web Application Developer, Tailwind CSS Developer, Next.js Developer, React Developer Czech Republic, Remote React Developer, React Developer Prague, Frontend Architecture Consulting, Backend Developer, Full Stack Developer, AI prompting engineer, AI slope cleaner",
  openGraph: {
    title: "Michael Kubin - Software Engineer",
    type: "website",
    locale: "en_US",
    url: "https://mikekubn.cz/",
    description: "Software engineer & Digital Crafting",
    images: [
      {
        url: "https://cdn.mikekubn.cz/og-image-mk.png",
        width: 1200,
        height: 630,
        alt: "Software engineer & Digital Crafting"
      }
    ]
  },
  robots: "index, follow",
  alternates: {
    canonical: "https://mikekubn.cz"
  }
};

export { BASE_METADATA };

const BIO =
  "Digital craftsman building reliable, user-centric applications across the modern web stack. I design end-to-end solutions that balance performance, security, and developer experience." as const;

const KEYWORDS = [
  "Software Engineer",
  "Full Stack Developer",
  "TypeScript",
  "JavaScript",
  "Python",
  "SQL",
  "NestJS",
  "Next.js",
  "React",
  "Vue",
  "Nuxt",
  "Django",
  "PostgreSQL",
  "Prisma",
  "Expo",
  "Langchain"
] as const;

const LANGUAGES = ["TypeScript", "JavaScript", "Python", "SQL"] as const;

const LIBRARIES = ["React", "Vue"] as const;

const FRAMEWORKS = [
  { name: "NestJS", icon: "/technologies/nestjs.svg" },
  { name: "Next.js", icon: "/technologies/nextdotjs.svg" },
  { name: "TanStack", icon: "/technologies/tanstack.svg" },
  { name: "Nuxt", icon: "/technologies/nuxt.svg" },
  { name: "Django", icon: "/technologies/django.svg" },
  { name: "PostgreSQL", icon: "/technologies/postgresql.svg" },
  { name: "Prisma", icon: "/technologies/prisma.svg" },
  { name: "Expo", icon: "/technologies/expo.svg" },
  { name: "Langchain", icon: "/technologies/langchain.svg" }
] as const;

const SOCIAL_LINKS = [
  {
    label: "GitHub",
    href: "https://github.com/mikekubn",
    icon: "/icons/github.svg" as const
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/michael-kubin-b48019121/",
    icon: "/icons/linkedin.svg" as const
  }
] as const;

const DOMAIN = "https://mikekubn.cz" as const;

export { BIO, DOMAIN, FRAMEWORKS, KEYWORDS, LANGUAGES, LIBRARIES, SOCIAL_LINKS };

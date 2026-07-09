import { createFileRoute } from "@tanstack/react-router";

import { FrameworkGrid } from "#/components/framework-grid";
import { Hero } from "#/components/hero";
import { LanguagePills } from "#/components/language-pills";
import { LibraryPills } from "#/components/library-pills";
import { SocialLinks } from "#/components/social-links";
import { BIO, KEYWORDS } from "#/configs/portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        name: "description",
        content: BIO
      },
      {
        name: "keywords",
        content: KEYWORDS.join(", ")
      }
    ]
  }),
  component: Home
});

function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-12 px-6 py-20">
      <Hero />
      <SocialLinks />
      <LanguagePills />
      <LibraryPills />
      <FrameworkGrid />
    </main>
  );
}

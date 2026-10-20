import { createFileRoute } from "@tanstack/react-router";

import { domAnimation, LazyMotion, MotionConfig } from "motion/react";
import { Footer } from "#/components/footer";
import { Main } from "#/components/main";
import { BIO, KEYWORDS } from "#/configs/portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { name: "description", content: BIO },
      { name: "keywords", content: KEYWORDS.join(", ") }
    ]
  }),
  component: Home
});

function Home() {
  return (
    <MotionConfig reducedMotion="user">
      <LazyMotion features={domAnimation} strict>
        <a className="fixed -top-[100px] left-4 z-50 bg-white p-3 text-black focus:top-4" href="#main">
          Skip to content
        </a>
        <div className="mx-auto max-w-[1248px] px-12 [@media(width<=640px)]:px-[22px] [@media(640px<width<=900px)]:px-7">
          <Main />
          <Footer />
        </div>
      </LazyMotion>
    </MotionConfig>
  );
}

import Link from "next/link";

import GithubIcon from "../../public/icons/github.svg";
import LinkedinIcon from "../../public/icons/linkedin.svg";

import { Building2 } from "lucide-react";
import { TextAnimation } from "./text-animation";

const Intro = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-14" id="intro">
      <h1 className="text-xl text-typography-secondary tracking-wider">
        Hi, I&apos;m <span className="font-bold font-mono text-accent-primary">Michael Kubin</span>
      </h1>
      <TextAnimation />
      <div className="flex flex-row flex-wrap items-center justify-center gap-4">
        <Link href="https://github.com/mikekubn" target="_blank" rel="noopener noreferrer" title="GitHub">
          <GithubIcon className="size-10 fill-typography-secondary rounded-md hover:bg-hover border border-border p-1" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/michael-kubin-b48019121/"
          target="_blank"
          rel="noopener noreferrer"
          title="LinkedIn"
        >
          <LinkedinIcon className="size-10 fill-typography-secondary rounded-md hover:bg-hover border border-border p-1" />
        </Link>
        <Link href="https://the12st.com" target="_blank" rel="noopener noreferrer" title="The 12st">
          <Building2 className="size-10 fill-typography-secondary stroke-secondary rounded-md hover:bg-hover border border-border p-1" />
        </Link>
      </div>
    </div>
  );
};

export { Intro };

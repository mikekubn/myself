import { useState } from "react";

import * as Accordion from "@radix-ui/react-accordion";

import useEmblaCarousel from "embla-carousel-react";
import { ProjectCarouselControls } from "#/components/project-history/project-carousel-controls";
import { ProjectFolder } from "#/components/project-history/project-folder";
import { PROJECTS } from "#/components/project-history/projects";

export const ProjectHistory = () => {
  const [openProject, setOpenProject] = useState("");
  const [detailsContainer, setDetailsContainer] = useState<HTMLDivElement | null>(null);
  const [viewportRef, carousel] = useEmblaCarousel({ loop: true, align: "start", duration: 0 });

  return (
    <section id="projects" aria-labelledby="projects-title" className="pt-[76px] [@media(width<=640px)]:pt-12">
      <header className="mb-[30px]">
        <h2 id="projects-title" className="mt-3.5 text-[clamp(23px,2.6vw,30px)] font-medium tracking-[-1px]">
          The projects I have worked on
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-muted">Open a project to take a look.</p>
      </header>
      <Accordion.Root
        type="single"
        collapsible
        orientation="horizontal"
        value={openProject}
        onValueChange={setOpenProject}
      >
        <div className="relative" role="group" aria-roledescription="carousel" aria-label="Project folders">
          <div ref={viewportRef} className="-m-2 overflow-hidden p-2">
            <div className="-ml-5 flex touch-pan-y items-start">
              {PROJECTS.map((project) => (
                <ProjectFolder key={project.id} project={project} detailsContainer={detailsContainer} />
              ))}
            </div>
          </div>
          <ProjectCarouselControls carousel={carousel} />
        </div>
        <div ref={setDetailsContainer} className="grid min-w-0" />
      </Accordion.Root>
    </section>
  );
};

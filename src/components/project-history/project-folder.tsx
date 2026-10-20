import type { Project } from "./projects";

import { createPortal } from "react-dom";

import * as Accordion from "@radix-ui/react-accordion";

import { ProjectDetails } from "./project-details";

type ProjectFolderProps = {
  project: Project;
  detailsContainer: HTMLDivElement | null;
};

export const ProjectFolder = ({ project, detailsContainer }: ProjectFolderProps) => {
  return (
    <Accordion.Item
      value={project.id}
      className="min-w-0 flex-[0_0_100%] min-[641px]:flex-[0_0_50%] min-[901px]:flex-[0_0_20.333333%]"
    >
      <Accordion.Header>
        <Accordion.Trigger className="group mx-auto flex max-w-full flex-col items-center gap-3 rounded-lg px-3 py-3 text-center">
          <BlueFolder />
          <span className="max-w-36 text-sm font-medium break-words text-muted group-hover:text-white group-data-[state=open]:text-[#8cebc5]">
            {project.name}
          </span>
        </Accordion.Trigger>
      </Accordion.Header>
      {detailsContainer && createPortal(<ProjectDetails project={project} />, detailsContainer)}
    </Accordion.Item>
  );
};

const BlueFolder = () => {
  return (
    <span aria-hidden className="relative block h-20 w-28 max-w-full shrink-0">
      <span className="absolute top-0 left-0 h-5 w-[45%] rounded-t-lg bg-[#66b8ec]" />
      <span className="absolute inset-x-0 top-2.5 bottom-0 rounded-lg bg-[linear-gradient(155deg,#84cfff,#3794d2)] shadow-[0_8px_16px_#0005]" />
      <span className="absolute inset-x-1.5 top-4 h-3 rounded-t-sm bg-[#d9eeff] opacity-80" />
      <span className="absolute inset-x-0 top-5 bottom-0 rounded-lg border-t border-[#b9e6ff] bg-[linear-gradient(155deg,#94d9ff,#4ba7e4)]" />
    </span>
  );
};

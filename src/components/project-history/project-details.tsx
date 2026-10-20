import type { Project } from "./projects";

import Markdown from "react-markdown";

import * as Accordion from "@radix-ui/react-accordion";

import remarkGfm from "remark-gfm";

const markdownPlugins = [remarkGfm];

export const ProjectDetails = ({ project }: { project: Project }) => {
  return (
    <Accordion.Content className="col-start-1 row-start-1 min-w-0 self-start overflow-hidden data-[state=open]:animate-project-expand data-[state=closed]:animate-project-collapse motion-reduce:animate-none">
      <article className="mt-6 rounded-xl border border-border bg-[#101010] p-6 min-[641px]:p-8">
        <h3 className="mb-4 font-mono text-base text-[#8cebc5]">{project.name}</h3>
        <div className="text-sm leading-7 text-[#b7b7b7] [overflow-wrap:anywhere] [&_p]:my-3 [&_h1]:mt-5 [&_h1]:font-medium [&_h1]:text-white [&_h2]:mt-5 [&_h2]:font-medium [&_h2]:text-white [&_h3]:mt-5 [&_h3]:font-medium [&_h3]:text-white [&_ul]:list-disc [&_ul]:pl-5 [&_ol]:list-decimal [&_ol]:pl-5 [&_a]:text-[#8cebc5] [&_a]:underline [&_strong]:font-medium [&_strong]:text-white [&_code]:rounded [&_code]:bg-white/5 [&_code]:px-1 [&_code]:font-mono [&_code]:text-xs [&_pre]:overflow-x-auto [&_pre]:rounded [&_pre]:bg-white/5 [&_pre]:p-3 [&_blockquote]:border-l-2 [&_blockquote]:border-[#8cebc5] [&_blockquote]:pl-3 [&_table]:block [&_table]:overflow-x-auto [&_td]:border [&_td]:border-border [&_td]:p-2 [&_th]:border [&_th]:border-border [&_th]:p-2">
          <Markdown remarkPlugins={markdownPlugins} skipHtml>
            {project.description}
          </Markdown>
        </div>
      </article>
    </Accordion.Content>
  );
};

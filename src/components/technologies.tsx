import { LanguagePills } from "#/components/language-pills";
import { LibraryPills } from "#/components/library-pills";

export function Technologies() {
  return (
    <section id="technologies" className="pt-[76px] [@media(width<=640px)]:pt-12" aria-labelledby="technologies-title">
      <div className="mb-[30px] flex items-end justify-between gap-[30px]">
        <div>
          <p className="flex items-center gap-2.5 font-mono text-[10px] font-medium tracking-[1.7px] text-white [@media(width<=640px)]:text-[8px] [@media(width<=640px)]:tracking-[1px]">
            03 / TOOLKIT
          </p>
          <h2
            className="mt-3.5 text-[clamp(23px,2.6vw,30px)] font-medium leading-[1.3] tracking-[-1px]"
            id="technologies-title"
          >
            The tools behind the work.
          </h2>
        </div>
        <p className="text-[12px] leading-[1.8] text-muted [@media(width<=640px)]:hidden">
          A practical stack.
          <br />
          The right tool for the problem.
        </p>
      </div>
      <div className="grid grid-cols-[1fr_1.45fr] gap-10 rounded-[10px] border border-border bg-[#121212] p-8 [@media(width<=640px)]:p-6 [@media(width<=900px)]:grid-cols-1 [@media(width<=900px)]:gap-[30px]">
        <div className="grid gap-[26px] border-r border-border pr-[30px] [@media(width<=640px)]:grid-cols-1 [@media(640px<width<=900px)]:grid-cols-2 [@media(width<=900px)]:border-r-0 [@media(width<=900px)]:border-b [@media(width<=900px)]:pr-0 [@media(width<=900px)]:pb-[26px]">
          <LanguagePills />
          <LibraryPills />
        </div>
      </div>
    </section>
  );
}

import { LIBRARIES } from "#/configs/portfolio";

const LibraryPills = () => {
  return (
    <section className="flex flex-col items-center gap-4">
      <h2 className="text-muted text-xs uppercase tracking-[0.2em]">Libraries</h2>
      <div className="flex flex-row flex-wrap items-center justify-center gap-3">
        {LIBRARIES.map((library) => (
          <span key={library} className="rounded-full border border-white/25 px-4 py-1.5 text-sm text-white">
            {library}
          </span>
        ))}
      </div>
    </section>
  );
};

export { LibraryPills };

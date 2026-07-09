import { FRAMEWORKS } from "#/configs/portfolio";

const FrameworkGrid = () => {
  return (
    <section className="flex flex-col items-center gap-6">
      <h2 className="text-muted text-xs uppercase tracking-[0.2em]">Frameworks</h2>
      <div className="grid grid-cols-3 gap-x-8 gap-y-6 sm:grid-cols-4 md:grid-cols-5">
        {FRAMEWORKS.map((framework) => (
          <div key={framework.name} className="flex flex-col items-center gap-2">
            {/** biome-ignore lint/performance/noImgElement: <static images> */}
            <img src={framework.icon} alt={framework.name} className="size-8 opacity-70 brightness-0 invert" />
            <span className="text-muted text-xs">{framework.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export { FrameworkGrid };

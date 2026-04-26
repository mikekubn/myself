import { TECHNOLOGIES } from "@/utils/configs/technologies";

const Technologies = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-16 bg-card p-6 md:p-12 rounded-lg">
      <div className="flex flex-col items-center justify-center gap-2">
        <h2 className="text-2xl font-bold font-mono text-variable">Technologies</h2>
        <code className="text-sm text-typography-secondary">Technologies I've been using</code>
      </div>

      <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
        {TECHNOLOGIES.map((technology) => (
          <div
            key={technology.name}
            className="flex flex-col items-center justify-center gap-2 hover:bg-hover rounded-lg p-2"
          >
            <technology.icon
              className="size-10 fill-typography-secondary rounded-md hover:bg-hover border border-border p-1"
              title={technology.name}
            />
            <code className="text-sm text-typography-secondary">{technology.name}</code>
          </div>
        ))}
      </div>
    </div>
  );
};

export { Technologies };

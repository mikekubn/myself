import { COMPANIES } from "@/utils/configs/companies";

const Companies = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-16 bg-card p-6 md:p-12 rounded-lg">
      <div className="flex flex-col items-center justify-center gap-2">
        <h2 className="text-2xl font-bold font-mono text-variable">Companies</h2>
        <code className="text-sm text-typography-secondary">Where I've been coding</code>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {COMPANIES.map((company) => (
          <div key={company.name} className="flex flex-col items-center justify-center gap-2">
            <company.logo className="h-16 md:h-20 w-32 md:w-40 object-contain fill-typography-secondary rounded-md hover:bg-hover border border-border p-1" />
            <code className="text-sm text-typography-secondary">{company.name}</code>
          </div>
        ))}
      </div>
    </div>
  );
};

export { Companies };

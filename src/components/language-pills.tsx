import { LANGUAGES } from "#/configs/portfolio";

const LanguagePills = () => {
  return (
    <section className="flex flex-col items-center gap-4">
      <h2 className="text-muted text-xs uppercase tracking-[0.2em]">Languages</h2>
      <div className="flex flex-row flex-wrap items-center justify-center gap-3">
        {LANGUAGES.map((language) => (
          <span key={language} className="rounded-full border border-white/25 px-4 py-1.5 text-sm text-white">
            {language}
          </span>
        ))}
      </div>
    </section>
  );
};

export { LanguagePills };

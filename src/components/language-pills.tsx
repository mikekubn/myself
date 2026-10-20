import { LANGUAGES } from "#/configs/portfolio";

const LanguagePills = () => {
  return (
    <section className="flex flex-col items-start gap-4">
      <h3 className="font-mono text-[10px] leading-[normal] tracking-[1.5px] text-[#b5b5b5] uppercase">Languages</h3>
      <div className="flex flex-row flex-wrap items-center justify-start gap-3">
        {LANGUAGES.map((language) => (
          <span
            key={language}
            className="rounded border border-[#353535] bg-[#1c1c1c] px-[11px] py-[7px] font-mono text-[11px] leading-[normal] text-[#dbdbdb]"
          >
            {language}
          </span>
        ))}
      </div>
    </section>
  );
};

export { LanguagePills };

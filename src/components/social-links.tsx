import { SOCIAL_LINKS } from "#/configs/portfolio";

const SocialLinks = () => {
  return (
    <>
      <section className="flex flex-row flex-wrap items-center justify-center gap-4">
        {SOCIAL_LINKS.map((link) => {
          return (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              title={link.label}
              className="flex size-10 items-center justify-center rounded-md border border-border p-2 text-muted hover:bg-white/5"
            >
              {/** biome-ignore lint/performance/noImgElement: static SVG assets from public/ */}
              <img src={link.icon} alt={link.label} className="size-full invert opacity-70" />
            </a>
          );
        })}
      </section>
      <div className="center-spine w-full" />
    </>
  );
};

export { SocialLinks };

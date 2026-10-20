import { SOCIAL_LINKS } from "#/configs/portfolio";

export function SocialLinks() {
  return (
    <nav aria-label="Social profiles" className="flex gap-5">
      {SOCIAL_LINKS.map((link) => (
        <a
          className="flex items-center gap-2 py-3 text-[12px] text-[#c5c5c5] hover:text-white"
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          {/** biome-ignore lint/performance/noImgElement: static local SVG */}
          <img className="size-4 opacity-75 invert" src={link.icon} alt="" width={16} height={16} />
          {link.label}
          <span aria-hidden="true">↗</span>
        </a>
      ))}
    </nav>
  );
}

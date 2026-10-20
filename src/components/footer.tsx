import { SocialLinks } from "#/components/social-links";

export function Footer() {
  return (
    <footer
      id="connect"
      className="mt-[76px] flex items-center justify-between gap-6 border-t border-border py-10 [@media(width<=640px)]:mt-12 [@media(width<=640px)]:flex-col [@media(width<=640px)]:items-start [@media(width<=640px)]:gap-3 [@media(width<=640px)]:py-7"
    >
      <div>
        <a href="#main" className="text-[24px] font-semibold tracking-[-1px]">
          Mike<span className="text-white">.</span>
        </a>
        <p className="mt-1.5 text-[12px] text-[#9a9a9a]">Thoughtful software. Security in mind.</p>
      </div>
      <SocialLinks />
    </footer>
  );
}

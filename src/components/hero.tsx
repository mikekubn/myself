import { ArrowDown, ArrowUpRight, Terminal } from "lucide-react";
import { BinaryDnaAnimation } from "#/components/binary-dna-animation";
import { BIO, SOCIAL_LINKS, STACK } from "#/configs/portfolio";

export function Hero() {
  return (
    <section
      className="relative isolate flex min-h-[680px] items-center border-b border-[#ffffff12] [@media(width<=640px)]:min-h-[660px]"
      aria-labelledby="hero-title"
    >
      <BinaryDnaAnimation />
      <div className="relative w-full pt-12 pb-[86px] [@media(width<=640px)]:pt-7 [@media(width<=640px)]:pb-[82px]">
        <div className="mx-auto w-full max-w-[940px] overflow-hidden rounded-[10px] border border-[#ffffff40] bg-[#08080866] shadow-[0_24px_80px_#0009,0_0_40px_#8cebc514,inset_0_1px_0_#ffffff14] backdrop-blur-[2px]">
          <div className="flex items-center gap-6 border-b border-[#ffffff26] bg-[#19191988] px-[22px] py-4 font-mono text-[11px] leading-[normal] text-muted [@media(width<=640px)]:gap-3.5 [@media(width<=640px)]:p-3.5 [@media(width<=640px)]:text-[9px]">
            <span className="flex gap-[7px]" aria-hidden="true">
              <i className="size-[9px] rounded-full bg-[#ff5f57]" />
              <i className="size-[9px] rounded-full bg-[#febc2e]" />
              <i className="size-[9px] rounded-full bg-[#28c840]" />
            </span>
            <span className="flex items-center gap-[9px]">
              <Terminal size={14} aria-hidden="true" /> mike@localhost: ~/about
            </span>
            <span className="ml-auto flex items-center gap-2 text-[8px] tracking-[1px] text-[#8cebc5] [@media(width<=640px)]:hidden">
              <span className="inline-block size-1.5 shrink-0 rounded-full bg-[#8cebc5] shadow-[0_0_12px_#8cebc54d]" />{" "}
              CONNECTED
            </span>
          </div>
          <div className="px-10 pt-8 pb-5 font-mono [@media(width<=640px)]:px-[18px] [@media(width<=640px)]:pt-6">
            <p className="m-0 flex flex-wrap items-center gap-[9px] text-[12px] leading-[1.8] text-[#e4e4e4] [@media(width<=640px)]:gap-[7px] [@media(width<=640px)]:text-[10px]">
              <span className="text-[#eeeeee]">mike@localhost</span>
              <span className="text-[#8f8f8f]">~</span>
              <span aria-hidden="true">$</span> whoami
            </p>
            <div className="mt-[26px] mb-[30px] border-l border-[#ffffff2a] pl-5 [@media(width<=640px)]:pl-3.5">
              <p className="flex items-center gap-2.5 font-mono text-[10px] font-medium tracking-[1.7px] text-white [@media(width<=640px)]:text-[8px] [@media(width<=640px)]:tracking-[1px]">
                SOFTWARE ENGINEERING & CYBERSECURITY
              </p>
              <h1
                id="hero-title"
                className="mt-[18px] font-sans text-[clamp(40px,5vw,64px)] font-[550] leading-[1.12] tracking-[-2px]"
              >
                Hey, I’m <span className="text-white">Mike.</span>
              </h1>
              <p className="mt-3.5 text-[15px] leading-[1.7] text-[#d4d4d4] [@media(width<=640px)]:text-[12px]">
                Building software. Thinking security.
              </p>
              <p className="mt-3 max-w-[680px] font-sans text-[15px] leading-[1.85] text-[#afafaf] [@media(width<=640px)]:text-[14px]">
                {BIO}
              </p>
            </div>
            <p className="m-0 flex flex-wrap items-center gap-[9px] text-[12px] leading-[1.8] text-[#e4e4e4] [@media(width<=640px)]:gap-[7px] [@media(width<=640px)]:text-[10px]">
              <span className="text-[#eeeeee]">mike@localhost</span>
              <span className="text-[#8f8f8f]">~</span>
              <span aria-hidden="true">$</span> cat stack.txt
            </p>
            <ul
              className="mt-3 mb-[26px] flex list-none flex-wrap gap-x-6 gap-y-2.5 p-0 text-[12px] text-[#b1b1b1] [@media(width<=640px)]:gap-x-[18px] [@media(width<=640px)]:text-[10px]"
              aria-label="Programming languages"
            >
              {STACK.map((language) => (
                <li key={language}>{language}</li>
              ))}
            </ul>
            <p className="m-0 flex flex-wrap items-center gap-[9px] text-[12px] leading-[1.8] text-[#e4e4e4] [@media(width<=640px)]:gap-[7px] [@media(width<=640px)]:text-[10px]">
              <span className="text-[#eeeeee]">mike@localhost</span>
              <span className="text-[#8f8f8f]">~</span>
              <span aria-hidden="true">$</span> ls links/
            </p>
            <div className="mt-2.5 mb-6 flex flex-wrap gap-x-7 gap-y-2.5">
              {SOCIAL_LINKS.map((link) => (
                <a
                  className="inline-flex items-center gap-2 py-2 text-[12px] text-white underline decoration-[#ffffff50] underline-offset-[5px] hover:decoration-current"
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.label} <ArrowUpRight size={16} aria-hidden="true" />
                </a>
              ))}
              <a
                className="inline-flex items-center gap-2 py-2 text-[12px] text-white underline decoration-[#ffffff50] underline-offset-[5px] hover:decoration-current"
                href="#focus"
              >
                Explore my focus <ArrowDown size={15} aria-hidden="true" />
              </a>
            </div>
            <p
              className="m-0 flex flex-wrap items-center gap-[9px] text-[12px] leading-[1.8] text-[#e4e4e4] [@media(width<=640px)]:gap-[7px] [@media(width<=640px)]:text-[10px] opacity-70"
              aria-hidden="true"
            >
              <span className="text-[#eeeeee]">mike@localhost</span>
              <span className="text-[#8f8f8f]">~</span>${" "}
              <span className="animate-[terminal-cursor-blink_1s_steps(1,end)_infinite] text-white motion-reduce:animate-none">
                ▊
              </span>
            </p>
          </div>
          <div className="flex justify-between gap-3 border-t border-[#ffffff26] bg-[#ffffff0b] px-[22px] py-[11px] font-mono text-[8px] leading-[normal] tracking-[1px] text-[#9e9e9e] [@media(width<=640px)]:px-3.5 [@media(width<=640px)]:text-[7px]">
            <span className="flex items-center gap-2">
              <span className="inline-block size-1.5 shrink-0 rounded-full bg-white shadow-[0_0_12px_#ffffff4d]" />{" "}
              Security in mind
            </span>
            <span>UTF-8 / ZSH</span>
          </div>
        </div>
      </div>
    </section>
  );
}

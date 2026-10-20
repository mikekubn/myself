import clsx from "clsx";
import { Code2, ShieldCheck } from "lucide-react";
import { m } from "motion/react";

const areas = [
  {
    number: "01",
    icon: Code2,
    title: "Built to work.",
    label: "FULL-STACK ENGINEERING",
    description:
      "From the interface to the infrastructure. I build thoughtful end-to-end softwares with maintainable code and performance in mind.",
    tags: [
      "Web & mobile",
      "End-to-end",
      "Services & infrastructure",
      "APIs & architecture",
      "Security",
      "Decision making",
      "Ownership",
      "Developer experience"
    ]
  },
  {
    number: "02",
    icon: ShieldCheck,
    title: "Designed with care.",
    label: "SECURITY ENGINEERING",
    description:
      "Security is part of the engineering process. I approach systems with attention to access, data boundaries, and the details that make software more resilient.",
    tags: ["Secure design", "Identity & access", "Reliable systems", "DevSecOps"]
  }
];

export function Focus() {
  return (
    <section id="focus" className="pt-[76px] [@media(width<=640px)]:pt-12" aria-labelledby="focus-title">
      <div className="mb-[30px] flex items-end justify-between gap-[30px]">
        <div>
          <h2
            className="mt-3.5 text-[clamp(23px,2.6vw,30px)] font-medium leading-[1.3] tracking-[-1px]"
            id="focus-title"
          >
            Two perspectives. Better software.
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted">Useful by design & resilient by intention.</p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-[18px] [@media(width<=640px)]:grid-cols-1">
        {areas.map(({ number, icon: Icon, title, label, description, tags }) => (
          <m.article
            key={number}
            className={clsx(
              "rounded-[10px] border bg-[linear-gradient(120deg,#191919,#111111_70%)] p-8 [@media(width<=640px)]:p-[26px]",
              number === "02" ? "border-[#323232]" : "border-[#2f2f2f]"
            )}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
          >
            <div className="mb-9 flex items-center justify-between text-[#818181] [@media(width<=640px)]:mb-7">
              <Icon className="text-white" size={24} strokeWidth={1.5} />
            </div>
            <p className="flex items-center gap-2.5 font-mono text-[10px] font-medium tracking-[1.7px] text-white [@media(width<=640px)]:text-[8px] [@media(width<=640px)]:tracking-[1px]">
              {label}
            </p>
            <h3 className="my-3 text-[26px] font-medium tracking-[-0.7px]">{title}</h3>
            <p className="max-w-[440px] text-[14px] leading-[1.8] text-[#acacac]">{description}</p>
            <div className="mt-7 flex flex-wrap gap-x-4 gap-y-2 border-t border-[#ffffff0d] pt-5 text-[10px] text-[#b7b7b7]">
              {tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </m.article>
        ))}
      </div>
    </section>
  );
}

import { BIO } from "#/configs/portfolio";

const Hero = () => {
  return (
    <section className="flex flex-col items-center gap-4 text-center">
      <h1 className="font-bold text-5xl text-white font-mono">Mike</h1>
      <div className="center-spine w-full" />
      <p className="text-lg text-white/80">Software Full Stack Engineer</p>
      <p className="max-w-2xl text-muted text-base leading-relaxed">{BIO}</p>
    </section>
  );
};

export { Hero };
